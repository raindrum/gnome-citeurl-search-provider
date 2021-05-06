A search provider for GNOME Shell that lets you look up legal citations using [CiteURL](https://github.com/raindrum/citeurl/).

# Installation
Run the following commands:

```bash
python3 -m pip install citeurl
git clone https://github.com/raindrum/gnome-citeurl-search-provider
cd gnome-citeurl-search-provider
sudo ./install.sh
```

Then, log out and reopen your GNOME session. A CiteURL result will now appear any time you type a recognized citation into GNOME Search.

If you ever want to uninstall the search provider, you can run the included `uninstall.sh` (with sudo). CiteURL itself can be uninstalled using pip.

# Configuration

The underlying program, CiteURL, [allows you to define custom YAML files](https://raindrum.github.io/citeurl/template-yamls) to supplement or replace the built-in citation formats. This means you can add support for any body of law you want, as long as you know a little regex and as long as the body of law can be looked up via a predictable URL scheme.

The GNOME search provider will load any such YAML files that are placed in its config folder, `~/.config/gnome-citeurl-search-provider`.

To prevent loading [CiteURL's built-in citation formats](https://github.com/raindrum/citeurl/blob/master/citeurl/builtin-templates.yaml), create a file called `suppress_defaults.txt` in the config folder.

Configuration changes will take effect after you restart GNOME.

# Credits

- [gnome-pass-search-provider](https://github.com/jle64/gnome-pass-search-provider)
- [spotify-search-provider](https://github.com/arrufat/spotify-search-provider)