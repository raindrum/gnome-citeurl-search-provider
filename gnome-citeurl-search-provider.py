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

import dbus
import dbus.service
import re
import webbrowser

from dbus.mainloop.glib import DBusGMainLoop
from gi.repository import GLib

from citeurl import Schema_Set

# Convenience shorthand for declaring dbus interface methods.
# s.b.n. -> search_bus_name
search_bus_name = "org.gnome.Shell.SearchProvider2"
sbn = dict(dbus_interface=search_bus_name)


class SearchCiteURLService(dbus.service.Object):
    """The CiteURL search daemon.

    This service is started through DBus activation by calling the
    :meth:`Enable` method, and stopped with :meth:`Disable`.

    """
    
    bus_name = "org.gnome.CiteURL.SearchProvider"
    _object_path = "/" + bus_name.replace(".", "/")

    def __init__(self):
        self.session_bus = dbus.SessionBus()
        bus_name = dbus.service.BusName(self.bus_name, bus=self.session_bus)
        dbus.service.Object.__init__(self, bus_name, self._object_path)
        self.schemas = Schema_Set()

    @dbus.service.method(in_signature="sasu", **sbn)
    def ActivateResult(self, id, terms, timestamp):
        webbrowser.open(id)

    @dbus.service.method(in_signature="as", out_signature="as", **sbn)
    def GetInitialResultSet(self, terms):
        return self.get_result_set(terms)

    @dbus.service.method(in_signature="as", out_signature="aa{sv}", **sbn)
    def GetResultMetas(self, ids):
        return [
            dict(
                id=id,
                name=id,
                gicon="web-browser",
            )
            for id in ids
        ]

    @dbus.service.method(in_signature="asas", out_signature="as", **sbn)
    def GetSubsearchResultSet(self, previous_results, new_terms):
        return self.get_result_set(new_terms)

    @dbus.service.method(in_signature="asu", terms="as", timestamp="u", **sbn)
    def LaunchSearch(self, terms, timestamp):
        pass

    def get_result_set(self, terms):
        query = ' '.join(terms)
        if len(terms) < 2 or not re.search('\d', query):
            return []
        try:
            return [self.schemas.lookup_query(query)]
        except:
            return []

if __name__ == "__main__":
    DBusGMainLoop(set_as_default=True)
    SearchCiteURLService()
    GLib.MainLoop().run()
