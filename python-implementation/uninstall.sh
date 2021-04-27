#!/usr/bin/env bash
set -eu pipefail
cd "$(dirname "$(realpath "${0}")")"

DATADIR=${DATADIR:-/usr/share}
LIBDIR=${LIBDIR:-/usr/lib}
CONFDIR=/home/$SUDO_USER/.config/gnome-citeurl-search-provider

# The actual executable
rm "${LIBDIR}"/gnome-citeurl-search-provider/gnome-citeurl-search-provider.py
rmdir "${LIBDIR}"/gnome-citeurl-search-provider

# Search provider definition
rm "${DATADIR}"/gnome-shell/search-providers/org.gnome.CiteURL.SearchProvider.ini

# Desktop file (for having an icon)
rm "${DATADIR}"/applications/org.gnome.CiteURL.SearchProvider.desktop

# Icon file
rm "${DATADIR}"/pixmaps/gnome-citeurl-search-provider.svg

# DBus configuration (no-systemd)
rm "${DATADIR}"/dbus-1/services/org.gnome.CiteURL.SearchProvider.service

# DBus configuration (systemd)
rm "${LIBDIR}"/systemd/user/org.gnome.CiteURL.SearchProvider.service

# CiteURL Configuration
rm -d $CONFDIR
