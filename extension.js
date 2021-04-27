const { Gio, St } = imports.gi;
const main = imports.ui.main;
const ext = imports.misc.extensionUtils.getCurrentExtension();
const gicon = Gio.icon_new_for_string(`${ext.dir.get_path()}/logo.svg`);

// get current GNOME version
const shellVersion = Number.parseInt(
    imports.misc.config.PACKAGE_VERSION.split('.')
);

// search results location changed in GNOME 40.
// this will import it correctly either way
var searchResults;
if (shellVersion >= 40) {
    searchResults =  main.overview._overview.controls._searchController._searchResults;
}
else {
    searchResults = main.overview.viewSelector._searchResults;
}

// load citeurlCustom.js if present, otherwise citeurl.js
var citeurl;
try {
    citeurl = ext.imports.citeurlCustom;
}
catch (error) {
    citeurl = ext.imports.citeurl;
}

const citeurlProvider = {
    // define how the search tool looks in the sidebar
    appInfo: {
        get_name: () => `CiteURL`,
        get_icon: () => gicon,
        get_id: () => `citeurl-provider`,
        should_show: () => true,
    },
    // go to github page when the search icon or name is clicked
    launchSearch(terms) {
        Gio.app_info_launch_default_for_uri(
            'https://github.com/raindrum/gnome-citeurl-search-provider',
            null,
        );
    },
    
    // define the appearance of search results:
    // name: <whatever the matched text was>
    // description: <name of template matched> at <hostname of relevant site>
    getResultMetas(results, callback) {
        let metas = [];
        for (r in results) {
            let id = results[r];
            let { template, text, url } = JSON.parse(id);
            let hostname = url.replace(/(https?:\/\/)?(www\.)?/, '');
            hostname = hostname.replace(/\/.+/, '');
            
            metas.push({
                id,
                name: text,
                description: template + ' at ' + hostname,
                createIcon(size) {
                    const icon = new St.Icon({
                        gicon: new Gio.ThemedIcon({ name: 'web-browser' }),
                        icon_size: size,
                    });
                    return icon;
                },
            });
        }
        callback(metas);
    },
    // when a search result is clicked, open it in the relevant app
    activateResult(result) {
        let { url } = JSON.parse(result);
        Gio.app_info_launch_default_for_uri(url, null);
    },
    
    // When a search query is entered, run it through CiteURL
    // and generate a result for each citation detected.
    getInitialResultSet(terms, callback) {
        let query = terms.join(" ");
        let citations = citeurl.getCitations(query, false);
        let results = [];
        for (c in citations) {
          results.push(JSON.stringify({
              template: citations[c].template,
              text: citations[c].text,
              url: citations[c].URL,
          }));
        }
        callback(results);
    },
    // when search terms subsequently change, just call the
    // main search again
    getSubsearchResultSet(_, terms, callback) {
        this.getInitialResultSet(terms, callback);
    },
    filterResults(providerResults, maxResults) {
        return providerResults.slice(0, maxResults);
    },
};

// code to enable and disable the extension
let instance;
function enable() {
    global.log(`Enabling CiteURL Search Provider`);
    instance = Object.create(citeurlProvider);
    searchResults._registerProvider(instance);
}
function disable() {
    global.log(`Disabling CiteURL Search Provider`);
    searchResults._unregisterProvider(instance);
    instance = null;
}
