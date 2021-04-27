#!/usr/bin/python3
# This file is a part of gnome-citeurl-search-provider.
#
# gnome-citeurl-search-provider is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# gnome-citeurl-search-provider is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with gnome-citeurl-search-provider. If not, see
# <http://www.gnu.org/licenses/>.

# Copyright (C) 2021 Simon Raindrum Sherred
# Author: Simon Raindrum Sherred <simonraindrum@gmail.com>

# This project was based on gnome-pass-search-provider
# Copyright (C) 2017 Jonathan Lestrelin
# Author: Jonathan Lestrelin <jonathan.lestrelin@gmail.com>
# which itself was based on gnome-shell-search-github-repositories
# Copyright (C) 2012 Red Hat, Inc.
# Author: Ralph Bean <rbean@redhat.com>
# which itself was based on fedmsg-notify
# Copyright (C) 2012 Red Hat, Inc.
# Author: Luke Macken <lmacken@redhat.com>

# Gnome Search Provider imports
import dbus
import dbus.service
from dbus.mainloop.glib import DBusGMainLoop
from gi.repository import GLib
# Python standard imports for basic functionality
import re
import webbrowser
from pathlib import Path
from urllib.parse import urlparse, unquote
# Citation lookup functionality
from yaml import YAMLError
try:
    from lrev.citeurl import Citator
except ImportError:
    from citeurl import Citator

# Config directory to scan for custom YAMLs and suppress_defaults.txt
CONFIG_DIR = Path.home() / '.config/gnome-citeurl-search-provider'

# Convenience shorthand for declaring dbus interface methods.
# SBN: "search_bus_name"
SBN = dict(dbus_interface="org.gnome.Shell.SearchProvider2")

class SearchCiteURLService(dbus.service.Object):
    """The CiteURL search daemon.
    This service is started through DBus activation by calling the
    :meth:`Enable` method, and stopped with :meth:`Disable`."""
    
    bus_name = "org.gnome.CiteURL.SearchProvider"
    _object_path = "/" + bus_name.replace(".", "/")
    
    # called when GNOME starts
    def __init__(self):
        # dbus code
        self.session_bus = dbus.SessionBus()
        bus_name = dbus.service.BusName(self.bus_name, bus=self.session_bus)
        dbus.service.Object.__init__(self, bus_name, self._object_path)
        
        # load default templates or, if suppress_defaults.txt
        # exists in CONFIG_DIR, load an empty set
        use_defaults = not (CONFIG_DIR / 'suppress_defaults.txt').exists()
        self.citator = Citator(defaults=use_defaults)
        
        # load all custom YAML files in CONFIG_DIR
        yaml_paths = (
            path for path in CONFIG_DIR.iterdir()
            if path.suffix in ['.yaml', '.yml', '.YAML', '.YML']
        )
        for path in yaml_paths:
            try:
                self.citator.load_yaml(path)
            except Exception as e:
                self.notify('CiteURL YAML Exception', body=e)
    
    # called when a search result ( is clicked
    @dbus.service.method(in_signature="sasu", **SBN)
    def ActivateResult(self, id, terms, timestamp):        
        webbrowser.open(id)

    # called when first character typed into search bar
    @dbus.service.method(in_signature="as", out_signature="as", **SBN)
    def GetInitialResultSet(self, terms):
        return self.get_result_set(terms)

    # construct search results display
    @dbus.service.method(in_signature="as", out_signature="aa{sv}", **SBN)
    def GetResultMetas(self, ids):
        return [
            dict(
                id=id,
                gicon="web-browser",
                name=self.citation_texts[id],
                description=(
                    self.template_names[id] + ' at ' +
                    urlparse(id).hostname or unquote(id)                
                )
            )
            for id in ids
        ]
    
    # called whenever query changes
    @dbus.service.method(in_signature="asas", out_signature="as", **SBN)
    def GetSubsearchResultSet(self, previous_results, new_terms):
        return self.get_result_set(new_terms)

    # called upon clicking program icon (to left of search results)
    @dbus.service.method(in_signature="asu", terms="as", timestamp="u", **SBN)
    def LaunchSearch(self, terms, timestamp):
        webbrowser.open('github.com/raindrum/gnome-citeurl-search-provider')
    
    def get_result_set(self, terms):
        self.query = ' '.join(terms)
        
        # to skip one-word queries and those without digits
        # if len(terms) < 2 or not re.search('\d', self.query):
        #     return []
        
        matches = []
        self.template_names = {}
        self.citation_texts = {}
        for template in self.citator.templates:
            citation = template.lookup(self.query)
            if not citation or not hasattr(citation, 'URL'):
                continue
            matches.append(citation.URL)
            self.template_names[citation.URL] = template.name
            self.citation_texts[citation.URL] = citation.text
        return matches
                

if __name__ == "__main__":
    DBusGMainLoop(set_as_default=True)
    SearchCiteURLService()
    GLib.MainLoop().run()
