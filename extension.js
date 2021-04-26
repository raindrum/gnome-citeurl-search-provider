const Gio = imports.gi.Gio;
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
    // define how the looks in the search sidebar
    appInfo: {
        get_name: () => `CiteURL`,
        get_icon: () => gicon,
        get_id: () => `citeurl-provider`,
        should_show: () => true,
    },
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
                createIcon() { return null; },
            });
        }
        callback(metas);
    },
    activateResult(result) {
        let { url } = JSON.parse(result);
        Gio.app_info_launch_default_for_uri(
            url,
            global.create_app_launch_context(
                global.display.get_current_time_roundtrip(),
                -1
            ),
        );
    },
    filterResults(providerResults, maxResults) {
        return providerResults.slice(0, maxResults);
    },
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
    getSubsearchResultSet(_, terms, callback) {
        this.getInitialResultSet(terms, callback);
    }
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
}
