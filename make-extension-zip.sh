#!/bin/bash
citeurl makejs -o citeurl.js
zip -r gnome-citeurl-search-provider@raindrum.github.io.zip extension.js citeurl.js logo.svg metadata.json LICENSE.md README.md screenshot.png
