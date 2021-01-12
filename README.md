A search provider for GNOME Shell that lets you look up legal citations using [CiteURL](https://github.com/raindrum/citeurl/).

GNOME Shell functionality is based on [gnome-pass-search-provider](https://github.com/jle64/gnome-pass-search-provider).

![Sreencapture](misc/screencapture.gif)

# Installation
Ensure that python>=3.5 is installed, along with the dbus and gobject modules. They should all be packaged under python-name or python3-name depending on your distribution.

Then, install [CiteURL](https://github.com/raindrum/citeurl/) by running `python3 -m pip install citeurl`.

Then, clone this repository and run the installation script as root:

```shell
git clone https://github.com/raindrum/gnome-citeurl-search-provider
cd gnome-citeurl-search-provider
sudo ./install.sh
```

Finally, log out and reopen your GNOME session. A CiteURL result will now appear any time you type a recognized citation into GNOME Search.