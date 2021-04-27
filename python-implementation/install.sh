#!/usr/bin/env bash
set -eu -o pipefail
cd "$(dirname "$(realpath "${0}")")"

DATADIR=${DATADIR:-/usr/share}
LIBDIR=${LIBDIR:-/usr/lib}
CONFDIR=/home/$SUDO_USER/.config/gnome-citeurl-search-provider

# The actual executable
install -Dm 0755 gnome-citeurl-search-provider.py "${LIBDIR}"/gnome-citeurl-search-provider/gnome-citeurl-search-provider.py

# Search provider definition
install -Dm 0644 conf/org.gnome.CiteURL.SearchProvider.ini "${DATADIR}"/gnome-shell/search-providers/org.gnome.CiteURL.SearchProvider.ini

# Desktop file (for having an icon)
install -Dm 0644 conf/org.gnome.CiteURL.SearchProvider.desktop "${DATADIR}"/applications/org.gnome.CiteURL.SearchProvider.desktop

# Icon file
install -Dm 0644 ../logo.svg "${DATADIR}"/pixmaps/gnome-citeurl-search-provider.svg

# DBus configuration (no-systemd)
install -Dm 0644 conf/org.gnome.CiteURL.SearchProvider.service.dbus "${DATADIR}"/dbus-1/services/org.gnome.CiteURL.SearchProvider.service

# DBus configuration (systemd)
install -Dm 0644 conf/org.gnome.CiteURL.SearchProvider.service.systemd "${LIBDIR}"/systemd/user/org.gnome.CiteURL.SearchProvider.service

# CiteURL Configuration
mkdir $CONFDIR
chown $SUDO_USER:$SUDO_USER $CONFDIR
