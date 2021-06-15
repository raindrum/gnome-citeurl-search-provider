
// This script was made with CiteURL v8.4.2, an extensible framework
// to turn legal references into URLs.
//
// The "templates" variable below holds the data necessary to 
// turn each kind of citation into a URL. Some or all of the templates may
// have been made by a third party and are not part of CiteURL itself.
//
// CiteURL is copyright of Simon Raindrum Sherred under the MIT License.
// See https://raindrum.github.io/citeurl for more info.

const templates = [
    {
        "name": "United States Code",
        "defaults": {},
        "URL": [
            "https://www.law.cornell.edu/uscode/text/{title}/{section}",
            "#{subsection}"
        ],
        "regexes": [
            "(?<!\\w)([Tt]itle )?(?<title>\\d+) (U\\.?|United) ?(S\\.?|States) ?C(ode|\\.?)( ?[AS]\\.?| Ann(otated|o?\\.)| Serv(ice|\\.))?(,? )?((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>\\d[\\w.-]*\\w|\\d)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)",
            "(?<!\\w)[Ss]ection(,? )?((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>\\d[\\w.-]*\\w|\\d)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))? of ([Tt]itle )?(?<title>\\d+) of the (U\\.?|United) ?(S\\.?|States) ?C(ode|\\.?)( ?[AS]\\.?| Ann(otated|o?\\.)| Serv(ice|\\.))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "subsection",
                "sub": [
                    "\\W+",
                    "_"
                ]
            },
            {
                "token": "subsection",
                "sub": [
                    "^_|_$",
                    ""
                ]
            }
        ]
    },
    {
        "name": "United States Constitution",
        "defaults": {},
        "URL": [
            "https://constitution.congress.gov/browse/",
            "amendment-{amendment}/",
            "article-{article}",
            "#{article_roman}_S{section}",
            "#{amendment}_S{section}",
            "_C{clause}"
        ],
        "regexes": [
            "(?<!\\w)(^|(U\\.? ?S\\.?|United States) ?Const(itution|\\.))([Aa]rt(icle|\\.) (?<article>[\\dIViv]{1,3}|[Oo]ne|[Tt]wo|[Tt]hree|[Ff]our|[Ff]ive|[Ss]ix|[Ss]even)|[Aa]m(endment|(end|dt?)?\\.) (?<amendment>[\\dXIVxiv]{1,3}))((,? ((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>\\d+|[IVXivx]{1,7}))((,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+))))?)?(?!\\w)",
            "(?<!\\w)(((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>\\d+|[IVXivx]{1,7})((,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+))))? of )?([Tt]he )?(?<amendment>\\d{1,2}(st|nd|rd|th)|([Tt]wenty(-| )?)?([Ff]irst|[Ss]econd|[Tt]hird|[Ff]ourth|[Ff]ifth|[Ss]ixth|[Ss]eventh|[Ee]ighth|[Nn]inth)|[Tt]enth|[Ee]leventh|[Tt]welfth|([Tt]hir|[Ff]our|[Ff]if|[Ss]ix|[Ss]even|[Ee]igh|[Nn]ine)teenth|[Tt]wentieth) [Aa]m(endment|dt?\\.|end\\.)(?!\\w)",
            "(?<!\\w)(U\\.? ?S\\.?|United States) ?Const(itution|\\.),? ([Aa]rt(icle|\\.) (?<article>[\\dIViv]{1,3}|[Oo]ne|[Tt]wo|[Tt]hree|[Ff]our|[Ff]ive|[Ss]ix|[Ss]even)|[Aa]m(endment|(end|dt?)?\\.) (?<amendment>[\\dXIVxiv]{1,3}))((,? ((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>\\d+|[IVXivx]{1,7}))((,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+))))?)?(?!\\w)",
            "(?<!\\w)([Aa]rt(icle|\\.) (?<article>[\\dIViv]{1,3}|[Oo]ne|[Tt]wo|[Tt]hree|[Ff]our|[Ff]ive|[Ss]ix|[Ss]even)|[Aa]m(endment|(end|dt?)?\\.) (?<amendment>[\\dXIVxiv]{1,3}))((,? ((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>\\d+|[IVXivx]{1,7}))((,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+))))?)? (of|to) the (U\\.? ?S\\.?|United States) ?Const(itution|\\.)(?!\\w)",
            "(?<!\\w)(((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>\\d+|[IVXivx]{1,7})((,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+))))? of )?([Tt]he )?(?<amendment>\\d{1,2}(st|nd|rd|th)|([Tt]wenty(-| )?)?([Ff]irst|[Ss]econd|[Tt]hird|[Ff]ourth|[Ff]ifth|[Ss]ixth|[Ss]eventh|[Ee]ighth|[Nn]inth)|[Tt]enth|[Ee]leventh|[Tt]welfth|([Tt]hir|[Ff]our|[Ff]if|[Ss]ix|[Ss]even|[Ee]igh|[Nn]ine)teenth|[Tt]wentieth) [Aa]m(endment|dt?\\.|end\\.) (of|to) the (U\\.? ?S\\.?|United States) ?Const(itution|\\.)(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "optionalLookup": {
                    "one": "1",
                    "two": "2",
                    "three": "3",
                    "four": "4",
                    "five": "5",
                    "six": "6",
                    "seven": "7"
                }
            },
            {
                "token": "amendment",
                "sub": [
                    "(st|nd|rd|th)$",
                    ""
                ]
            },
            {
                "token": "amendment",
                "optionalLookup": {
                    "fir": "1",
                    "seco": "2",
                    "thi": "3",
                    "four": "4",
                    "fif": "5",
                    "six": "6",
                    "seven": "7",
                    "eigh": "8",
                    "nin": "9",
                    "ten": "10",
                    "eleven": "11",
                    "twelf": "12",
                    "thirteen": "13",
                    "fourteen": "14",
                    "fifteen": "15",
                    "sixteen": "16",
                    "seventeen": "17",
                    "eighteen": "18",
                    "nineteen": "19",
                    "twentie": "20",
                    "twenty[- ]?fir": "21",
                    "twenty(- )?seco": "22",
                    "twenty[- ]?thi": "23",
                    "twenty(- )?four": "24",
                    "twenty[- ]?fif": "25",
                    "twenty[- ]?six": "26",
                    "twenty[- ]?seven": "21",
                    "twenty[- ]?eigh": "28",
                    "twenty[- ]?nin": "29"
                }
            },
            {
                "token": "article",
                "numberFormat": "roman",
                "output": "article_roman"
            },
            {
                "token": "article",
                "numberFormat": "digit"
            },
            {
                "token": "amendment",
                "numberFormat": "digit"
            },
            {
                "token": "section",
                "numberFormat": "digit"
            }
        ]
    },
    {
        "name": "U.S. Public Laws",
        "defaults": {},
        "URL": [
            "https://uscode.house.gov/statutes/pl/{congress}/{law}.pdf"
        ],
        "regexes": [
            "(?<!\\w)Pub(\\.?|lic) ?L(\\.?|aw) ?(No\\.?)? ?(?<congress>\\d+)[–‑-](?<law>\\d+)(?!\\w)"
        ]
    },
    {
        "name": "U.S. Statutes at Large",
        "defaults": {},
        "URL": [
            "https://www.govinfo.gov/content/pkg/STATUTE-{volume}/pdf/STATUTE-{volume}-Pg{page}.pdf"
        ],
        "regexes": [
            "(?<!\\w)(?<volume>\\d+) Stat\\.? (?<page>\\d+)(, (?<pincite>\\d+))?(?!\\w)"
        ]
    },
    {
        "name": "Federal Register",
        "defaults": {},
        "URL": [
            "https://www.federalregister.gov/documents/search?conditions[term]={volume}+FR+{page}"
        ],
        "regexes": [
            "(?<!\\w)(?<volume>\\d+) (Fed\\. ?Reg\\.|F\\.? ?R\\.?) (?<page>\\d([,\\d]+\\d)?)(, (?<pincite>\\d+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "page",
                "sub": [
                    ",",
                    ""
                ]
            }
        ]
    },
    {
        "name": "Code of Federal Regulations",
        "defaults": {},
        "URL": [
            "https://ecfr.federalregister.gov/cfr-reference?cfr%5Bdate%5D=current&cfr%5Breference%5D={title} CFR {section}",
            "#p-{section}{subsection}"
        ],
        "regexes": [
            "(?<!\\w)([Tt]itle )?(?<title>\\d+) (C\\.? ?F\\.? ?R\\.?|Code of Federal Regulations)( [Pp]arts?| [Pp]ts?\\.)?(,? )?((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>\\d[\\w.-]*\\w|\\d)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "Federal Rules of Civil Procedure",
        "defaults": {},
        "URL": [
            "https://www.law.cornell.edu/rules/frcp/rule_{rule}",
            "#rule_{rule}_{subsection}"
        ],
        "regexes": [
            "(?<!\\w)(F\\.? ?R\\.? ?C\\.? ?P\\.?|Fed\\.? ?R(\\.?|ules?) ?Civ\\.? ?Pr?o?c?\\.?|Federal Rules? of Civil Procedure) ?(Rule )?(?<rule>\\d+(\\.\\d+)?[a-z]?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "subsection",
                "sub": [
                    "\\W+",
                    "_"
                ]
            },
            {
                "token": "subsection",
                "sub": [
                    "^_|_$",
                    ""
                ]
            }
        ]
    },
    {
        "name": "Federal Rules of Appellate Procedure",
        "defaults": {},
        "URL": [
            "https://www.law.cornell.edu/rules/frap/rule_{rule}",
            "#rule_{rule}_{subsection}"
        ],
        "regexes": [
            "(?<!\\w)(F\\.? ?R\\.? ?A\\.? ?P\\.?|Fed\\.? ?R(\\.?|ules?) ?App\\.? ?Pr?o?c?\\.?|Federal Rules? of Appellate Procedure) ?(Rule )?(?<rule>\\d+(\\.\\d+)?[a-z]?)(?!\\w)"
        ],
        "operations": [
            {
                "token": "subsection",
                "sub": [
                    "\\W+",
                    "_"
                ]
            },
            {
                "token": "subsection",
                "sub": [
                    "^_|_$",
                    ""
                ]
            }
        ]
    },
    {
        "name": "Federal Rules of Criminal Procedure",
        "defaults": {},
        "URL": [
            "https://www.law.cornell.edu/rules/frcrmp",
            "/rule_{rule}",
            "#rule_{rule}_{subsection}"
        ],
        "regexes": [
            "(?<!\\w)(F\\.? ?R\\.? ?Cr\\.? ?P\\.?|Fed\\.? ?R(\\.?|ules?) ?Crim\\.? ?Pr?o?c?\\.?|Federal Rules? of Criminal Procedure) ?(Rule )?(?<rule>\\d+(\\.\\d+)?[a-z]?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "subsection",
                "sub": [
                    "\\W+",
                    "_"
                ]
            },
            {
                "token": "subsection",
                "sub": [
                    "^_|_$",
                    ""
                ]
            }
        ]
    },
    {
        "name": "Federal Rules of Evidence",
        "defaults": {},
        "URL": [
            "https://www.law.cornell.edu/rules/fre/rule_{rule}",
            "#rule_{rule}_{subsection}"
        ],
        "regexes": [
            "(?<!\\w)(F\\.? ?R\\.? ?E\\.?|Fed\\.? R(\\.?|ules?) ?Evid\\.?|Federal Rules? of Evidence) ?(Rule )?(?<rule>\\d+(\\.\\d+)?[a-z]?)(?!\\w)"
        ]
    },
    {
        "name": "Immigration and Nationality Act",
        "defaults": {},
        "URL": [
            "https://www.law.cornell.edu/uscode/text/8/{_usc_section}",
            "#{subsection}"
        ],
        "regexes": [
            "(?<!\\w)(Immigration ([Aa]nd|&) Nationality Act|I\\.?N\\.?A\\.?|I\\. N\\. A\\.)(,? )?((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>\\d[\\w.-]*\\w|\\d)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "section",
                "output": "_usc_section",
                "lookup": {
                    "101": "1101",
                    "102": "1102",
                    "103": "1103",
                    "104": "1104",
                    "105": "1105",
                    "106": "1105a",
                    "201": "1151",
                    "202": "1152",
                    "203": "1153",
                    "204": "1154",
                    "205": "1155",
                    "206": "1156",
                    "207": "1157",
                    "208": "1158",
                    "209": "1159",
                    "210": "1160",
                    "210a": "1161",
                    "211": "1181",
                    "212": "1182",
                    "213": "1183",
                    "213a": "1183a",
                    "214": "1184",
                    "215": "1185",
                    "216": "1186a",
                    "216a": "1186b",
                    "217": "1187",
                    "218": "1188",
                    "219": "1189",
                    "221": "1201",
                    "222": "1202",
                    "223": "1203",
                    "224": "1204",
                    "231": "1221",
                    "232": "1222",
                    "233": "1223",
                    "234": "1224",
                    "235": "1225",
                    "235a": "1225a",
                    "236": "1226",
                    "236a": "1226a",
                    "237": "1227",
                    "238": "1228",
                    "239": "1229",
                    "240": "1229a",
                    "240a": "1229b",
                    "240b": "1229c",
                    "240c": "1230",
                    "241": "1231",
                    "242": "1252",
                    "242a": "1252a",
                    "242b": "1252b",
                    "243": "1253",
                    "244": "1254a",
                    "245": "1255",
                    "245a": "1255a",
                    "246": "1256",
                    "247": "1257",
                    "248": "1258",
                    "249": "1259",
                    "250": "1260",
                    "251": "1281",
                    "252": "1282",
                    "253": "1283",
                    "254": "1284",
                    "255": "1285",
                    "256": "1286",
                    "257": "1287",
                    "258": "1288",
                    "261": "1301",
                    "262": "1302",
                    "263": "1303",
                    "264": "1304",
                    "265": "1305",
                    "266": "1306",
                    "271": "1321",
                    "272": "1322",
                    "273": "1323",
                    "274": "1324",
                    "274a": "1324a",
                    "274b": "1324b",
                    "274c": "1324c",
                    "274d": "1324d",
                    "275": "1325",
                    "276": "1326",
                    "277": "1327",
                    "278": "1328",
                    "279": "1329",
                    "280": "1330",
                    "281": "1351",
                    "282": "1352",
                    "283": "1353",
                    "284": "1354",
                    "285": "1355",
                    "286": "1356",
                    "287": "1357",
                    "288": "1358",
                    "289": "1359",
                    "290": "1360",
                    "291": "1361",
                    "292": "1362",
                    "293": "1363",
                    "294": "1363a",
                    "295": "1363b",
                    "301": "1401",
                    "302": "1402",
                    "303": "1403",
                    "304": "1404",
                    "305": "1405",
                    "306": "1406",
                    "307": "1407",
                    "308": "1408",
                    "309": "1409",
                    "310": "1421",
                    "311": "1422",
                    "312": "1423",
                    "313": "1424",
                    "314": "1425",
                    "315": "1426",
                    "316": "1427",
                    "317": "1428",
                    "318": "1429",
                    "319": "1430",
                    "320": "1431",
                    "321": "1432",
                    "322": "1433",
                    "323": "1434",
                    "324": "1435",
                    "325": "1436",
                    "326": "1437",
                    "327": "1438",
                    "328": "1439",
                    "329": "1440",
                    "329a": "1440-1",
                    "330": "1441",
                    "331": "1442",
                    "332": "1443",
                    "333": "1444",
                    "334": "1445",
                    "335": "1446",
                    "336": "1447",
                    "337": "1448",
                    "338": "1449",
                    "339": "1450",
                    "340": "1451",
                    "341": "1452",
                    "342": "1453",
                    "343": "1454",
                    "344": "1455",
                    "345": "1456",
                    "346": "1457",
                    "347": "1458",
                    "348": "1459",
                    "349": "1481",
                    "350": "1482",
                    "351": "1483",
                    "352": "1484",
                    "353": "1485",
                    "354": "1486",
                    "355": "1487",
                    "356": "1488",
                    "357": "1489",
                    "358": "1501",
                    "359": "1502",
                    "360": "1503",
                    "361": "1504",
                    "404": "1101",
                    "405": "1101",
                    "406": "1101",
                    "407": "1101",
                    "411": "1521",
                    "412": "1522",
                    "413": "1523",
                    "414": "1524",
                    "501": "1531",
                    "502": "1532",
                    "503": "1533",
                    "504": "1534",
                    "505": "1535",
                    "506": "1536",
                    "507": "1537"
                }
            },
            {
                "token": "subsection",
                "sub": [
                    "\\W+",
                    "_"
                ]
            },
            {
                "token": "subsection",
                "sub": [
                    "^_|_$",
                    ""
                ]
            }
        ]
    },
    {
        "name": "Internal Revenue Code",
        "defaults": {},
        "URL": [
            "https://www.law.cornell.edu/uscode/text/26/{section}",
            "#{subsection}"
        ],
        "regexes": [
            "(?<!\\w)(Internal Revenue Code|I\\.? ?R\\.? ?C\\.?)(,? )?((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>\\d[\\w.-]*\\w|\\d)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "subsection",
                "sub": [
                    "\\W+",
                    "_"
                ]
            },
            {
                "token": "subsection",
                "sub": [
                    "^_|_$",
                    ""
                ]
            }
        ]
    },
    {
        "name": "Treasury Regulations",
        "defaults": {},
        "URL": [
            "https://ecfr.federalregister.gov/cfr-reference?cfr%5Bdate%5D=current&cfr%5Breference%5D=26 CFR {section}",
            "#p-{section}{subsection}"
        ],
        "regexes": [
            "(?<!\\w)Treas(ury|\\.?) ?Reg(ulations?|\\.?)(,? )?((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>\\d[\\w.-]*\\w|\\d)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "National Labor Relations Act",
        "defaults": {},
        "URL": [
            "https://www.law.cornell.edu/uscode/text/29/{section}",
            "#{subsection}"
        ],
        "regexes": [
            "(?<!\\w)(National Labor Relations Act|N\\.? ?L\\.? ?R\\.? ?A\\.?)(,? )?((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>\\d[\\w.-]*\\w|\\d)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "section",
                "lookup": {
                    "1": "151",
                    "2": "152",
                    "3": "153",
                    "4": "154",
                    "5": "155",
                    "6": "156",
                    "7": "157",
                    "8": "158",
                    "9": "159",
                    "10": "160",
                    "11": "161",
                    "12": "162",
                    "13": "163",
                    "14": "164",
                    "15": "165",
                    "16": "166",
                    "17": "167",
                    "18": "168",
                    "19": "169"
                }
            },
            {
                "token": "subsection",
                "sub": [
                    "\\W+",
                    "_"
                ]
            },
            {
                "token": "subsection",
                "sub": [
                    "^_|_$",
                    ""
                ]
            }
        ]
    },
    {
        "name": "National Labor Relations Board Decisions",
        "defaults": {},
        "URL": [
            "https://www.nlrb.gov/cases-decisions/decisions/board-decisions?search_term=&volume={volume}&page_number={page}"
        ],
        "regexes": [
            "(?<!\\w)(?<volume>\\d+) N\\.? ?L\\.? ?R\\.? ?B\\.? (?<page>\\d+)(, (?<pincite>\\d+))?(?!\\w)"
        ]
    },
    {
        "name": "National Labor Relations Board Slip Opinions",
        "defaults": {},
        "URL": [
            "https://www.nlrb.gov/cases-decisions/decisions/board-decisions?search_term=&volume={volume}&slip_opinion_number={slip}"
        ],
        "regexes": [
            "(?<!\\w)(?<volume>\\d+) N\\.? ?L\\.? ?R\\.? ?B\\.? (Slip Op\\. )?No\\. (?<slip>\\d+)(?!\\w)"
        ]
    },
    {
        "name": "Endangered Species Act",
        "defaults": {},
        "URL": [
            "https://www.law.cornell.edu/uscode/text/16/{section}",
            "#{subsection}"
        ],
        "regexes": [
            "(?<!\\w)(Endangered Species Act|E\\.? ?S\\.? ?A\\.?)(,? )?((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>\\d[\\w.-]*\\w|\\d)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "section",
                "lookup": {
                    "2": "1531",
                    "3": "1532",
                    "4": "1533",
                    "5": "1534",
                    "6": "1535",
                    "7": "1536",
                    "8": "1537",
                    "8A": "1537a",
                    "9": "1538",
                    "10": "1539",
                    "11": "1540",
                    "12": "1541",
                    "15": "1542",
                    "17": "1543",
                    "18": "1544"
                }
            },
            {
                "token": "subsection",
                "sub": [
                    "\\W+",
                    "_"
                ]
            },
            {
                "token": "subsection",
                "sub": [
                    "^_|_$",
                    ""
                ]
            }
        ]
    },
    {
        "name": "Clean Air Act",
        "defaults": {},
        "URL": [
            "https://www.law.cornell.edu/uscode/text/42/{_usc_section}",
            "#{subsection}"
        ],
        "regexes": [
            "(?<!\\w)(C\\.? ?A\\.? ?A\\.?|Clean Air Act)(,? )?((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>\\d[\\w.-]*\\w|\\d)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "section",
                "output": "_usc_section",
                "lookup": {
                    "101": "7401",
                    "102": "7402",
                    "103": "7403",
                    "104": "7404",
                    "105": "7405",
                    "106": "7406",
                    "107": "7407",
                    "108": "7408",
                    "109": "7409",
                    "110": "7410",
                    "111": "7411",
                    "112": "7412",
                    "113": "7413",
                    "114": "7414",
                    "115": "7415",
                    "116": "7416",
                    "117": "7417",
                    "118": "7418",
                    "119": "7419",
                    "120": "7420",
                    "121": "7421",
                    "122": "7422",
                    "123": "7423",
                    "124": "7424",
                    "125": "7425",
                    "126": "7426",
                    "127": "7427",
                    "128": "7428",
                    "129": "7429",
                    "130": "7430",
                    "131": "7431",
                    "160": "7470",
                    "161": "7471",
                    "162": "7472",
                    "163": "7473",
                    "164": "7474",
                    "165": "7475",
                    "166": "7476",
                    "167": "7477",
                    "168": "7478",
                    "169": "7479",
                    "169a": "7491",
                    "169A": "7491",
                    "169b": "7492",
                    "169B": "7492",
                    "171": "7501",
                    "172": "7502",
                    "173": "7503",
                    "174": "7504",
                    "175": "7505",
                    "175a": "7505a",
                    "176": "7506",
                    "176a": "7506a",
                    "177": "7507",
                    "178": "7508",
                    "179": "7509",
                    "179b": "7509a",
                    "181": "7511",
                    "182": "7511a",
                    "183": "7511b",
                    "184": "7511c",
                    "185": "7511d",
                    "185a": "7511e",
                    "185b": "7511f",
                    "186": "7512",
                    "187": "7512a",
                    "188": "7513",
                    "189": "7513a",
                    "190": "7513b",
                    "191": "7514",
                    "192": "7514a",
                    "193": "7515",
                    "202": "7521",
                    "203": "7522",
                    "204": "7523",
                    "205": "7524",
                    "206": "7525",
                    "207": "7541",
                    "208": "7542",
                    "209": "7543",
                    "210": "7544",
                    "211": "7545",
                    "213": "7547",
                    "214": "7548",
                    "215": "7549",
                    "216": "7550",
                    "217": "7552",
                    "218": "7553",
                    "219": "7554",
                    "231": "7571",
                    "232": "7572",
                    "233": "7573",
                    "234": "7574",
                    "241": "7581",
                    "242": "7582",
                    "243": "7583",
                    "244": "7584",
                    "245": "7585",
                    "246": "7586",
                    "247": "7587",
                    "248": "7588",
                    "249": "7589",
                    "250": "7590",
                    "301": "7601",
                    "302": "7602",
                    "303": "7603",
                    "304": "7604",
                    "305": "7605",
                    "306": "7606",
                    "307": "7607",
                    "308": "7608",
                    "309": "7609",
                    "310": "7610",
                    "311": "7611",
                    "312": "7612",
                    "313": "7613",
                    "314": "7614",
                    "315": "7615",
                    "316": "7616",
                    "317": "7617",
                    "318": "7618",
                    "319": "7619",
                    "320": "7620",
                    "321": "7621",
                    "322": "7622",
                    "323": "7624",
                    "324": "7625",
                    "325": "7625-1",
                    "326": "7625a",
                    "327": "7626",
                    "328": "7627",
                    "201": "7641",
                    "401": "7651",
                    "402": "7651a",
                    "403": "7651b",
                    "404": "7651c",
                    "405": "7651d",
                    "406": "7651e",
                    "407": "7651f",
                    "408": "7651g",
                    "409": "7651h",
                    "410": "7651i",
                    "411": "7651j",
                    "412": "7651k",
                    "413": "7651l",
                    "414": "7651m",
                    "415": "7651n",
                    "416": "7651o",
                    "501": "7661",
                    "502": "7661a",
                    "503": "7661b",
                    "504": "7661c",
                    "505": "7661d",
                    "506": "7661e",
                    "507": "7661f",
                    "601": "7671",
                    "602": "7671a",
                    "603": "7671b",
                    "604": "7671c",
                    "605": "7671d",
                    "606": "7671e",
                    "607": "7671f",
                    "608": "7671g",
                    "609": "7671h",
                    "610": "7671i",
                    "611": "7671j",
                    "612": "7671k",
                    "613": "7671l",
                    "614": "7671m",
                    "615": "7671n",
                    "616": "7671o",
                    "617": "7671p",
                    "618": "7671q"
                }
            },
            {
                "token": "subsection",
                "sub": [
                    "\\W+",
                    "_"
                ]
            },
            {
                "token": "subsection",
                "sub": [
                    "^_|_$",
                    ""
                ]
            }
        ]
    },
    {
        "name": "Clean Water Act",
        "defaults": {},
        "URL": [
            "https://www.law.cornell.edu/uscode/text/33/{_usc_section}",
            "#{subsection}"
        ],
        "regexes": [
            "(?<!\\w)(Clean Water Act|C\\.? ?W\\.? ?A\\.?)(,? )?((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>\\d[\\w.-]*\\w|\\d)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "section",
                "output": "_usc_section",
                "lookup": {
                    "101": "1251",
                    "112": "1262",
                    "115": "1265",
                    "301": "1311",
                    "302": "1312",
                    "303": "1313",
                    "304": "1314",
                    "305": "1315",
                    "306": "1316",
                    "307": "1317",
                    "308": "1318",
                    "309": "1319",
                    "310": "1320",
                    "316": "1326",
                    "319": "1329",
                    "401": "1341",
                    "402": "1342",
                    "403": "1343",
                    "404": "1344",
                    "405": "1345",
                    "406": "1346",
                    "501": "1361",
                    "502": "1362",
                    "505": "1365",
                    "509": "1369",
                    "510": "1370",
                    "511": "1371",
                    "517": "1376",
                    "518": "1377"
                }
            },
            {
                "token": "subsection",
                "sub": [
                    "\\W+",
                    "_"
                ]
            },
            {
                "token": "subsection",
                "sub": [
                    "^_|_$",
                    ""
                ]
            }
        ]
    },
    {
        "name": "Fair Housing Act",
        "defaults": {},
        "URL": [
            "https://www.law.cornell.edu/uscode/text/42/{_usc_section}",
            "#{subsection}"
        ],
        "regexes": [
            "(?<!\\w)(Fair Housing Act|F\\.? ?H\\.? ?A\\.?)(,? )?((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>\\d[\\w.-]*\\w|\\d)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "section",
                "output": "_usc_section",
                "lookup": {
                    "801": "3601",
                    "802": "3602",
                    "803": "3603",
                    "804": "3604",
                    "805": "3605",
                    "806": "3606",
                    "807": "3607",
                    "808": "3608",
                    "808a": "3608a",
                    "809": "3609",
                    "810": "3610",
                    "811": "3611",
                    "812": "3612",
                    "813": "3613",
                    "814": "3614",
                    "814a": "3614-1",
                    "815": "3614a",
                    "816": "3615",
                    "817": "3616",
                    "817a": "3616a",
                    "818": "3617",
                    "819": "3618",
                    "820": "3619",
                    "901": "3631"
                }
            },
            {
                "token": "subsection",
                "sub": [
                    "\\W+",
                    "_"
                ]
            },
            {
                "token": "subsection",
                "sub": [
                    "^_|_$",
                    ""
                ]
            }
        ]
    },
    {
        "name": "Americans With Disabilities Act",
        "defaults": {},
        "URL": [
            "https://www.law.cornell.edu/uscode/text/42/{_usc_section}",
            "#{subsection}"
        ],
        "regexes": [
            "(?<!\\w)(Americans [Ww]ith Disabilities Act|A\\. D\\. A\\.|A\\.?D\\.?A\\.?)(,? )?((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>\\d[\\w.-]*\\w|\\d)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "section",
                "output": "_usc_section",
                "lookup": {
                    "2": "12101",
                    "3": "12102",
                    "101": "12111",
                    "102": "12112",
                    "103": "12113",
                    "104": "12114",
                    "105": "12115",
                    "106": "12116",
                    "107": "12117",
                    "201": "12131",
                    "202": "12132",
                    "203": "12133",
                    "204": "12134",
                    "221": "12141",
                    "222": "12142",
                    "223": "12143",
                    "224": "12144",
                    "225": "12145",
                    "226": "12146",
                    "227": "12147",
                    "228": "12148",
                    "229": "12149",
                    "230": "12150",
                    "241": "12161",
                    "242": "12162",
                    "243": "12163",
                    "244": "12164",
                    "245": "12165",
                    "301": "12181",
                    "302": "12182",
                    "303": "12183",
                    "304": "12184",
                    "305": "12185",
                    "306": "12186",
                    "307": "12187",
                    "308": "12188",
                    "309": "12189",
                    "501": "12201",
                    "502": "12202",
                    "503": "12203",
                    "504": "12204",
                    "505": "12205",
                    "506": "12206",
                    "507": "12207",
                    "508": "12208",
                    "509": "12209",
                    "510": "12210",
                    "511": "12211",
                    "513": "12212",
                    "514": "12213"
                }
            },
            {
                "token": "subsection",
                "sub": [
                    "\\W+",
                    "_"
                ]
            },
            {
                "token": "subsection",
                "sub": [
                    "^_|_$",
                    ""
                ]
            }
        ]
    },
    {
        "name": "Uniform Commercial Code",
        "defaults": {},
        "URL": [
            "https://www.law.cornell.edu/ucc/{article}/{article}-{section}",
            "#{article}-{section}{subsection}"
        ],
        "regexes": [
            "(?<!\\w)(Uniform Commercial Code|U\\.? ?C\\.? ?C\\.?)( ?§)? (?<article>\\d[a-z]?)[-‑–](?<section>\\d+)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "subsection",
                "sub": [
                    "\\).+",
                    ")"
                ]
            }
        ]
    },
    {
        "name": "Code of Alabama, 1975",
        "defaults": {},
        "URL": [
            "http://alisondb.legislature.state.al.us/alison/CodeOfAlabama/1975/{title}-{chapter}-{section}.htm"
        ],
        "regexes": [
            "(?<!\\w)(Ala(bama|\\.)|AL)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Za-z]?)[-‑–](?<chapter>\\d+(\\.\\d+)?[A-Za-z]?)[-‑–](?<section>\\d+(\\.\\d+)?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "title",
                "case": "upper"
            },
            {
                "token": "chapter",
                "case": "upper"
            }
        ]
    },
    {
        "name": "Alabama Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Alabama_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(Ala(bama|\\.)|AL) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "Alaska Statutes",
        "defaults": {},
        "URL": [
            "http://www.akleg.gov/basis/statutes.asp#{title}.{chapter}.{section}"
        ],
        "regexes": [
            "(?<!\\w)(Alaska|AK)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+[A-Za-z]?)\\.(?<chapter>\\d+[A-Za-z]?)\\.(?<section>\\d+[A-Za-z]?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "Alaska Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Alaska_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(Alaska|AK) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "American Samoa Code",
        "defaults": {},
        "URL": [
            "https://new.asbar.org/code-annotated/{title}-{section}"
        ],
        "regexes": [
            "(?<!\\w)Am(erican|\\.) ?Samoa( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ? ?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+)\\.(?<section>\\d+)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "American Samoa Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_American_Samoa_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)Am(erican|\\.) ?Samoa ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "Arkansas Code",
        "defaults": {},
        "URL": null,
        "regexes": [
            "(?<!\\w)(Ark(ansas|\\.)|AR)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Za-z]?)[-‑–](?<chapter>\\d+(\\.\\d+)?[A-Za-z]?)[-‑–](?<section>\\d+(\\.\\d+)?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "Arkansas Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Arkansas_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(Ark(ansas|\\.)|AR) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "digit"
            },
            {
                "token": "section",
                "numberFormat": "digit"
            }
        ]
    },
    {
        "name": "Arizona Revised Statutes",
        "defaults": {},
        "URL": [
            "https://www.azleg.gov/viewdocument/?docName=https://www.azleg.gov/ars/{title}/{section}.htm"
        ],
        "regexes": [
            "(?<!\\w)(Ariz(ona|\\.)|AZ)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Z]?)-(?<section>\\d+(\\.\\d+)?[A-Z]?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "section",
                "sub": [
                    "\\.",
                    "-"
                ]
            },
            {
                "token": "section",
                "lpad": 5
            }
        ]
    },
    {
        "name": "Arizona Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Arizona_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(Ariz(ona|\\.)|AZ) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "digit"
            },
            {
                "token": "section",
                "numberFormat": "digit"
            }
        ]
    },
    {
        "name": "California Codes",
        "defaults": {},
        "URL": [
            "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode={code}&sectionNum={section}"
        ],
        "regexes": [
            "(?<!\\w)(Cal(ifornia|(if)?\\.)|CAL?) ?(?<_code>[BCDEFGHILMPRSUVW].{2,40}?)( ?C(ode|\\.)( Ann(otated|\\.))?,?)?(,? )?((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>\\d[\\w.-]*\\w|\\d)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "_code",
                "output": "code",
                "lookup": {
                    "Bus(iness|\\.) (and|&) Prof(essions|s?\\.)|B\\.? ?& ?P\\.?|BPC": "BPC",
                    "Civ(il|\\.)|CIV": "CIV",
                    "(Code( of)? )?(Civil Procedure|Civ\\. ?P(roc?)?\\.)|CCP": "CCP",
                    "Commercial|Comm?\\.|COM": "COM",
                    "Corp(orations?|\\.)|CORP": "CORP",
                    "Educ(ation|\\.)|EDU?C": "EDC",
                    "Elec(tions|\\.)|ELEC": "ELEC",
                    "Evid(ence|\\.)|EVID": "EVID",
                    "Fam(ily|\\.)|FAM": "FAM",
                    "Fin(ancial|\\.)|FIN": "FIN",
                    "Fish (and|&) Game|FGC|F&G": "FGC",
                    "Food (and|&) Agric(ultural|\\.)|FAC": "FAC",
                    "Gov(ernment|'?t?\\.?)|GOV": "GOV",
                    "Harb(ors|\\.) (and|&) Nav(igation|\\.)|HNC|H&N": "HNC",
                    "Health (and|&) Saf(ety|\\.)|HSC|H&S": "HSC",
                    "Ins(urance|\\.)|INS": "INS",
                    "Lab(or|\\.)|LAB": "LAB",
                    "Mil(itary|\\.) (and|&) Vet(erans|\\.)|MVC|M&V": "MVC",
                    "Penal|PEN": "PEN",
                    "Prob(ate|\\.)|PROB": "PROB",
                    "Pub(lic|\\.) Cont(ract|\\.)|PCC": "PCC",
                    "Pub(lic|\\.) ?Res(ources|\\.)|PRC": "PRC",
                    "Pub(lic|\\.) Util(ities|s?\\.)|PUC": "PUC",
                    "Rev(enue|\\.) (and|&) Tax(ation|\\.)|RTC|R&T": "RTC",
                    "St(reets|s\\.) (and|&) High(ways|\\.)|SHC|S&H": "SHC",
                    "Unemp(loyment|\\.) Ins(urance|(ur)?\\.)|UIC": "UIC",
                    "Veh(icle|(ic)?\\.)|VEH": "VEH",
                    "Water|WAT": "WAT",
                    "Welf(are|\\.) (and|&) Inst(itutions|s?\\.)|WIC": "WIC"
                }
            }
        ]
    },
    {
        "name": "California Constitution",
        "defaults": {
            "_displayType": "Text"
        },
        "URL": [
            "https://leginfo.legislature.ca.gov/faces/codes_display{_displayType}.xhtml?lawCode=CONS",
            "&article={article}",
            "&sectionNum=SEC. {section}."
        ],
        "regexes": [
            "(?<!\\w)(Cal(ifornia|(if)?\\.)|CAL?) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            },
            {
                "token": "section",
                "output": "_displayType",
                "optionalLookup": {
                    ".+": "Section"
                }
            }
        ]
    },
    {
        "name": "Colorado Revised Statutes",
        "defaults": {
            "year": "2020"
        },
        "URL": [
            "https://leg.colorado.gov/sites/default/files/images/olls/crs{year}-title-{_lpad_title}.pdf#search={title}-{article}-{section}."
        ],
        "regexes": [
            "(?<!\\w)(Colo(rado|\\.)|CO)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?)[-‑–](?<article>\\d+(\\.\\d+)?)[-‑–](?<section>\\d+(\\.\\d+)?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(,? \\((?<year>\\d{4})\\))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "title",
                "output": "_lpad_title",
                "lpad": 2
            },
            {
                "token": "year",
                "optionalLookup": {
                    "1[89]\\d{2}|200\\d|201[0-2]": "2020"
                }
            }
        ]
    },
    {
        "name": "Colorado Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Colorado_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(Colo(rado|\\.)|CO) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "General Statutes of Connecticut",
        "defaults": {},
        "URL": [
            "https://www.lawserver.com/law/state/connecticut/ct-laws/connecticut_statutes_{section}"
        ],
        "regexes": [
            "(?<!\\w)(Conn(ecticut|\\.)|CT)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<section>(\\d[a-z\\-]*[\\w]+))(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "Connecticut Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Connecticut_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(Conn(ecticut|\\.)|CT) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "Delaware Code",
        "defaults": {},
        "URL": [
            "https://www.lawserver.com/law/state/delaware/de-code/delaware_code_title_{title}_{section}"
        ],
        "regexes": [
            "(?<!\\w)([Tt]it(le|\\.) )?(?<title>\\d{1,2}),? (Del(aware|\\.)|DE) ?C(ode|\\.)(,? )?((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>\\d[\\w.-]*\\w|\\d)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "section",
                "case": "lower"
            }
        ]
    },
    {
        "name": "Delaware General Corporations Law",
        "defaults": {},
        "URL": [
            "https://delcode.delaware.gov/title8/c001/sc{subchapter}/index.shtml#{section}."
        ],
        "regexes": [
            "(?<!\\w)(D\\.? ?G\\.? ?C\\.? ?L\\.?|Del(aware|\\.) ?Gen(eral|\\.) ?Corp(orations?|s?\\.) ?L(aw|\\.))(,? )?((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>\\d[\\w.-]*\\w|\\d)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "section",
                "output": "subchapter",
                "lookup": {
                    "1[01]\\d": "01",
                    "12\\d": "02",
                    "13\\d": "03",
                    "14\\d": "04",
                    "1[5-7]\\d": "05",
                    "20\\d": "06",
                    "2[1-3]\\d": "07",
                    "24\\d": "08",
                    "2[56]\\d": "09",
                    "2[78]\\d": "10",
                    "29\\d|30\\d": "11",
                    "31\\d": "12",
                    "3[23]\\d": "13",
                    "3[45]\\d": "14",
                    "36\\d": "15",
                    "37\\d|38[0-5]": "16",
                    "38[89]|390": "17",
                    "39[1-9]": "18"
                }
            }
        ]
    },
    {
        "name": "Delaware Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Delaware_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(Del(aware|\\.)|DE) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "District of Columbia Official Code",
        "defaults": {},
        "URL": [
            "https://code.dccouncil.us/dc/council/code/sections/{title}-{section}.html",
            "#{subsection}"
        ],
        "regexes": [
            "(?<!\\w)(District of Columbia( Official)?|D\\.? ?C\\.?)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Z]?)-(?<section>\\d+(\\.\\d+)?[A-Z]?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "Florida Statutes",
        "defaults": {
            "year": "2020"
        },
        "URL": [
            "https://www.flsenate.gov/Laws/Statutes/{year}/{chapter}.{section}"
        ],
        "regexes": [
            "(?<!\\w)(Fl(orida|a?\\.)|FL)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+[A-Z]?)\\.(?<section>\\d+\\w?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(,? \\((?<year>\\d{4})\\))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "chapter",
                "lpad": 4
            }
        ]
    },
    {
        "name": "Florida Constitution",
        "defaults": {},
        "URL": [
            "https://www.flsenate.gov/Laws/Constitution#A{article}",
            "S{section}"
        ],
        "regexes": [
            "(?<!\\w)(Fl(orida|a?\\.)|FL) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "section",
                "lpad": 2
            },
            {
                "token": "article",
                "numberFormat": "digit"
            }
        ]
    },
    {
        "name": "Georgia Code",
        "defaults": {},
        "URL": null,
        "regexes": [
            "(?<!\\w)(G(eorgia|a\\.|A)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?|O\\.? ?C\\.? ?G\\.? ?A\\.? )((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Za-z]?)[-‑–](?<chapter>\\d+(\\.\\d+)?[A-Za-z]?)[-‑–](?<section>\\d+(\\.\\d+)?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "Georgia Constitution",
        "defaults": {
            "paragraph": "1"
        },
        "URL": [
            "https://ballotpedia.org/Article_{article},_Georgia_Constitution"
        ],
        "regexes": [
            "(?<!\\w)G(eorgia|a\\.|A) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Pp]ar(agraph|a?\\.) ?(?<paragraph>[\\dIVXivx]{1,8})))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "Guam Code",
        "defaults": {},
        "URL": null,
        "regexes": [
            "(?<!\\w)(?<title>\\d+) Guam( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?(,? )?((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>\\d[\\w.-]*\\w|\\d)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "Hawaii Revised Statutes",
        "defaults": {},
        "URL": [
            "https://www.lawserver.com/law/state/hawaii/hi-statutes/hawaii_statutes_{chapter}-{section}"
        ],
        "regexes": [
            "(?<!\\w)(Haw(ai.?i|\\.)|HI)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+[A-Z]?)[-‑–](?<section>\\d+(\\.\\d+)?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "Hawaii Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Hawaii_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(Haw(ai.?i|\\.)|HI) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "Idaho Code",
        "defaults": {},
        "URL": [
            "https://legislature.idaho.gov/statutesrules/idstat/Title{title}/T{title}CH{chapter}/SECT{title}-{section}/"
        ],
        "regexes": [
            "(?<!\\w)I(daho|D)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+[A-Z]?)[-‑–](?<section>(?<chapter>\\d{1,2})\\d{2}[A-Z]?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "Idaho Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Idaho_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)I(daho|D) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "Illinois Compiled Statutes",
        "defaults": {},
        "URL": [
            "https://www.ilga.gov/legislation/ilcs/fulltext.asp?DocName={chapter}{act}0K{section}"
        ],
        "regexes": [
            "(?<!\\w)([Cc]h(apter|\\.) )?(?<chapter>\\d+) (ILCS|Ill(inois|\\.) Comp(iled|\\.) Stat(utes|\\.)) (?<act>\\d+)/(?<section>(\\d[\\d.-]*\\w|\\d))(?!\\w)"
        ],
        "operations": [
            {
                "token": "chapter",
                "lpad": 4
            },
            {
                "token": "act",
                "lpad": 4
            }
        ]
    },
    {
        "name": "Illinois Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Illinois_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(Il(linois|l?\\.)|IL) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "Indiana Code",
        "defaults": {
            "year": "2020"
        },
        "URL": [
            "https://iga.in.gov/legislative/laws/{year}/ic/titles/{title}#{title}-{article}-{chapter}-{section}"
        ],
        "regexes": [
            "(?<!\\w)(Ind(iana|\\.)|IN)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+)-(?<article>\\d+(\\.\\d+)?)-(?<chapter>\\d+(\\.\\d+)?)-(?<section>\\d+(\\.\\d+)?)(,? \\((?<year>\\d{4})\\))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "title",
                "lpad": 2
            }
        ]
    },
    {
        "name": "Indiana Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Indiana_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(Ind(iana|\\.)|IN) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "digit"
            },
            {
                "token": "section",
                "numberFormat": "digit"
            }
        ]
    },
    {
        "name": "Iowa Code",
        "defaults": {},
        "URL": [
            "https://www.legis.iowa.gov/docs/code/{chapter}.{section}.pdf"
        ],
        "regexes": [
            "(?<!\\w)I(owa|A)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+[A-Z]?)\\.(?<section>\\d+\\w?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "Iowa Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Iowa_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)I(owa|A) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "Kansas Statutes",
        "defaults": {},
        "URL": [
            "https://www.lawserver.com/law/state/kansas/ks-statutes/kansas_statutes_{chapter}-{section}"
        ],
        "regexes": [
            "(?<!\\w)(Kan(sas|\\.)|KS)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+[A-Z]?)[-‑–](?<section>\\d+(\\.\\d+)?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "Kansas Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/",
            "Article_{article}",
            "{part}",
            ",_Kansas_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(Kan(sas|\\.)|KS) ?Const(itution|\\.) ?([Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})|(?<part>Bill of Rights|Preamble))(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            },
            {
                "token": "section",
                "numberFormat": "roman"
            },
            {
                "token": "part",
                "sub": [
                    " ",
                    "_"
                ]
            }
        ]
    },
    {
        "name": "Kentucky Revised Statutes",
        "defaults": {},
        "URL": [
            "https://www.lawserver.com/law/state/kentucky/ky-statutes/kentucky_statutes_{chapter}-{section}"
        ],
        "regexes": [
            "(?<!\\w)(K(entucky|y\\.|Y)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?|KRS )((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<chapter>(\\d[\\d.]*\\w|\\d))\\.(?<section>\\d+)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "chapter",
                "case": "lower",
                "sub": [
                    "\\.",
                    "-"
                ]
            }
        ]
    },
    {
        "name": "Kentucky Constitution",
        "defaults": {},
        "URL": [
            "https://apps.legislature.ky.gov/Law/Constitution/Constitution/ViewConstitution?rsn={_web_section_no}"
        ],
        "regexes": [
            "(?<!\\w)K(entucky|y\\.|Y) ?Const(itution|\\.),?( ?(Art(icle|\\.) ?)?([IVXivx]{1,7}|\\d{1,2}|Bill of Rights|Rights of Victims of Crime|Dist(ribution|\\.) of the Powers of Gov(ernment|('t)?\\.?)|(The )?(Leg(islative|(is)?\\.)|Exec(utive|\\.)|Jud(icial|\\.)) ?Dep(artment|('t)?\\.?)|Counties (and|&) County Seats|Impeachments|(C(ounty|ty\\.)|Fisc(al|\\.)) ?C(ourts|ts\\.)|Justices of the Peace|Suff(rage|\\.) ?(and|&) ?Elec(tions|\\.)|Mun(icipalities|i?\\.)|Rev(enue|\\.) ?(and|&) ?Tax(ation|\\.?)|Educ(ation|\\.)|Corp(orations?|s?\\.)|R(ailroads|\\.R\\.) (and|&) Com(merce|m?\\.)|(The )?Militia|Gen(eral|\\.) ?Prov(isions|s?\\.)|Mode of Rev(ision|\\.)),?)?(,? )?((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>\\d[\\w.-]*\\w|\\d)(?!\\w)"
        ],
        "operations": [
            {
                "token": "section",
                "output": "_web_section_no",
                "lookup": {
                    "1": "3",
                    "2": "4",
                    "3": "5",
                    "4": "6",
                    "5": "7",
                    "6": "8",
                    "7": "9",
                    "8": "10",
                    "9": "11",
                    "10": "12",
                    "11": "13",
                    "12": "14",
                    "13": "15",
                    "14": "16",
                    "15": "17",
                    "16": "18",
                    "17": "19",
                    "18": "20",
                    "19": "21",
                    "20": "22",
                    "21": "23",
                    "22": "24",
                    "23": "25",
                    "24": "26",
                    "25": "27",
                    "26": "28",
                    "26A": "305",
                    "27": "30",
                    "28": "31",
                    "29": "33",
                    "30": "34",
                    "31": "35",
                    "32": "36",
                    "33": "37",
                    "34": "38",
                    "35": "39",
                    "36": "40",
                    "37": "41",
                    "38": "42",
                    "39": "43",
                    "40": "44",
                    "41": "45",
                    "42": "46",
                    "43": "47",
                    "44": "48",
                    "45": "49",
                    "46": "50",
                    "47": "51",
                    "48": "52",
                    "49": "53",
                    "50": "54",
                    "51": "55",
                    "52": "56",
                    "53": "57",
                    "54": "58",
                    "55": "59",
                    "56": "60",
                    "57": "61",
                    "58": "62",
                    "59": "63",
                    "60": "64",
                    "61": "65",
                    "62": "66",
                    "63": "68",
                    "64": "69",
                    "65": "70",
                    "66": "72",
                    "67": "73",
                    "68": "74",
                    "69": "77",
                    "70": "78",
                    "71": "79",
                    "72": "80",
                    "73": "81",
                    "74": "82",
                    "75": "83",
                    "76": "84",
                    "77": "85",
                    "78": "86",
                    "79": "87",
                    "80": "88",
                    "81": "89",
                    "82": "90",
                    "83": "91",
                    "84": "92",
                    "85": "93",
                    "86": "94",
                    "87": "95",
                    "88": "96",
                    "89": "97",
                    "90": "98",
                    "91": "99",
                    "92": "100",
                    "93": "101",
                    "94": "102",
                    "95": "103",
                    "96": "104",
                    "97": "106",
                    "98": "107",
                    "99": "108",
                    "100": "109",
                    "101": "110",
                    "102": "111",
                    "103": "112",
                    "104": "113",
                    "105": "114",
                    "106": "115",
                    "107": "116",
                    "108": "117",
                    "109": "119",
                    "110": "121",
                    "111": "123",
                    "112": "125",
                    "113": "127",
                    "114": "129",
                    "115": "131",
                    "116": "132",
                    "117": "134",
                    "118": "135",
                    "119": "136",
                    "120": "137",
                    "121": "138",
                    "122": "139",
                    "123": "140",
                    "124": "141",
                    "125": "142",
                    "126": "143",
                    "127": "144",
                    "128": "145",
                    "129": "146",
                    "130": "147",
                    "131": "148",
                    "132": "149",
                    "133": "150",
                    "134": "151",
                    "135": "152",
                    "136": "153",
                    "137": "154",
                    "138": "155",
                    "139": "156",
                    "140": "158",
                    "141": "159",
                    "142": "161",
                    "143": "162",
                    "144": "164",
                    "145": "166",
                    "146": "167",
                    "147": "168",
                    "148": "169",
                    "149": "170",
                    "150": "171",
                    "151": "172",
                    "152": "173",
                    "153": "174",
                    "154": "175",
                    "155": "176",
                    "156": "180",
                    "156A": "177",
                    "156B": "178",
                    "157": "183",
                    "157A": "181",
                    "157B": "182",
                    "158": "184",
                    "159": "185",
                    "160": "186",
                    "161": "187",
                    "162": "188",
                    "163": "189",
                    "164": "190",
                    "165": "191",
                    "166": "192",
                    "167": "193",
                    "168": "194",
                    "169": "196",
                    "170": "197",
                    "171": "198",
                    "172": "201",
                    "172A": "199",
                    "172B": "200",
                    "173": "202",
                    "174": "203",
                    "175": "204",
                    "176": "205",
                    "177": "206",
                    "178": "207",
                    "179": "208",
                    "180": "209",
                    "181": "210",
                    "182": "211",
                    "183": "213",
                    "184": "214",
                    "185": "215",
                    "186": "216",
                    "187": "217",
                    "188": "218",
                    "189": "219",
                    "190": "221",
                    "191": "222",
                    "192": "223",
                    "193": "224",
                    "194": "225",
                    "195": "226",
                    "196": "227",
                    "197": "228",
                    "198": "229",
                    "199": "230",
                    "200": "231",
                    "201": "232",
                    "202": "233",
                    "203": "234",
                    "204": "235",
                    "205": "236",
                    "206": "237",
                    "207": "238",
                    "208": "239",
                    "210": "242",
                    "211": "243",
                    "212": "244",
                    "213": "245",
                    "214": "246",
                    "215": "247",
                    "216": "248",
                    "217": "249",
                    "218": "250",
                    "219": "252",
                    "220": "253",
                    "221": "254",
                    "222": "255",
                    "223": "256",
                    "224": "258",
                    "225": "259",
                    "226": "261",
                    "226A": "260",
                    "227": "262",
                    "228": "263",
                    "229": "264",
                    "230": "265",
                    "231": "266",
                    "232": "267",
                    "233": "269",
                    "233A": "268",
                    "234": "270",
                    "235": "271",
                    "236": "272",
                    "237": "273",
                    "238": "274",
                    "239": "275",
                    "240": "276",
                    "241": "277",
                    "242": "278",
                    "243": "279",
                    "244": "281",
                    "244A": "280",
                    "245": "282",
                    "246": "283",
                    "247": "284",
                    "248": "285",
                    "249": "286",
                    "250": "287",
                    "251": "288",
                    "252": "300",
                    "253": "290",
                    "254": "291",
                    "255": "292",
                    "255A": "302",
                    "256": "294",
                    "257": "295",
                    "258": "296",
                    "259": "297",
                    "260": "298",
                    "261": "299",
                    "263": "301"
                }
            }
        ]
    },
    {
        "name": "Louisiana Statutes",
        "defaults": {},
        "URL": [
            "https://www.lawserver.com/law/state/louisiana/la-laws/louisiana_revised_statutes_{title}-{section}"
        ],
        "regexes": [
            "(?<!\\w)L(ouisiana|a\\.|A)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+[A-Z]?):(?<section>\\d+(\\.\\d+)?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "Louisiana Codes",
        "defaults": {},
        "URL": [
            "https://www.lawserver.com/law/state/louisiana/la-codes/louisiana_{code}_{article}"
        ],
        "regexes": [
            "(?<!\\w)L(ouisiana|a\\.|A) ?(?<code>Civ(il|\\.) ?Code|Code( of)? ((Civ(il|\\.)|Crim(inal|\\.)) ?Proc(edure|\\.)|Evid(ence|\\.))|Child(ren'?s|\\.) ?Code)( Ann(otated|\\.))?,?( [Aa]rt(icle|\\.))? (?<article>\\d+)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "code",
                "lookup": {
                    "Civ(il|\\.) ?Code": "civil_code",
                    "Code( of)? Civ(il|\\.) ?Proc(edure|\\.)": "code_of_civil_procedure",
                    "Code( of)? Crim(inal|\\.) ?Proc(edure|\\.)": "code_of_criminal_procedure",
                    "Code( of)? Evid(ence|\\.)": "code_of_evidence",
                    "Child(ren'?s|\\.) ?Code": "childrens_code"
                }
            }
        ]
    },
    {
        "name": "Louisiana Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Louisiana_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)L(ouisiana|a\\.|A) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "Maine Statutes",
        "defaults": {},
        "URL": [
            "https://legislature.maine.gov/legis/statutes/{title}/title{title}sec{section}.html"
        ],
        "regexes": [
            "(?<!\\w)M(aine|e\\.|E)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?,? [Tt]it(le|\\.) ?(?<title>\\d+([-‑–][A-Z])?),?(,? )?((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>\\d[\\w.-]*\\w|\\d)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "title",
                "sub": [
                    "—",
                    "-"
                ]
            },
            {
                "token": "section",
                "sub": [
                    "—",
                    "-"
                ]
            }
        ]
    },
    {
        "name": "Maine Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article}",
            "--Part_{part}",
            ",_Maine_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)M(aine|e\\.|E) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? [Pp](art|t\\.) ?(?<part>\\d))?(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            },
            {
                "token": "part",
                "lookup": {
                    "1": "First",
                    "2": "Second"
                }
            }
        ]
    },
    {
        "name": "Maryland Code",
        "defaults": {},
        "URL": [
            "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article={articleCode}&section={title}-{section}"
        ],
        "regexes": [
            "(?<!\\w)M(aryland|d\\.|D) (Code( Ann(otated|\\.))?,? )?(?<article>(Ac|Al|[BCEFHILNPRST]).{4,38}?) (Code( Ann(otated|\\.))?,? )?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+[A-Z]?)[-‑–](?<section>[\\dA-Z\\-–.]*[\\dA-Z])(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "section",
                "sub": [
                    "–",
                    "-"
                ]
            },
            {
                "token": "article",
                "output": "articleCode",
                "lookup": {
                    "Acric(ulture|\\.)": "gag",
                    "Alco(holic|\\.) ?Bev(erages|s?\\.)": "gab",
                    "Bus(iness|\\.) ?Occ(upations|\\.) ?(and|&) ?Prof(essions|s?\\.)": "gbo",
                    "Bus(iness|\\.) ?Reg(ulation|\\.)": "gbr",
                    "Com(mercial|\\.) ?Law": "gcl",
                    "Corp(orations|s\\.) ?(and|&) Ass(ociations|'ns)": "gca",
                    "Corr(ectional|\\.) ?Serv(ices|s\\.)": "gcs",
                    "C(ourts|ts\\.) ?(and|&) ?Jud(icial|\\.) ?Proc(eedings|\\.)": "gcj",
                    "Crim(inal|\\.) ?Law": "gcr",
                    "Crim(inal|\\.) ?Proc(edure|\\.)": "gcp",
                    "Econ(omic|\\.) ?Dev(elopment|\\.)": "gec",
                    "Educ(ation|\\.)": "ged",
                    "Elec(tion|\\.) ?Law": "gel",
                    "Envir(onment|\\.)": "gen",
                    "Est(ates|\\.) ?(and|&) ?Trusts": "get",
                    "Fam(ily|\\.) ?Law": "gfl",
                    "Fin(ancial|\\.) Inst(itutions|\\.)": "gfi",
                    "Health ?[-–] ?Gen(eral|\\.)": "ggp",
                    "Health Occ(upations|\\.)": "gho",
                    "Hous(ing|\\.) ?(and|&) ?C(ommunity|mty\\.) ?Dev(elopment|'t|\\.)": "ghs",
                    "Hum(an|\\.) ?Serv(ices|s\\.)": "ghu",
                    "Ins(urance|\\.)": "gin",
                    "Lab(or|\\.) ?(and|&) ?Empl(oyment|\\.)": "gle",
                    "Land Use": "glu",
                    "Local Gov(ernment|'t)": "glg",
                    "Nat(ural|\\.) ?Res(ources|\\.)": "gnr",
                    "Pub(lic|\\.) ?Saf(ety|\\.)": "gps",
                    "Pub(lic|\\.) ?Util(ity|\\.)": "gpu",
                    "Real Prop(erty|\\.)": "grp",
                    "State Fin(ance|\\.) (and|&) Proc(urement|\\.)": "gsf",
                    "State Gov(ernment|'t)": "gsg",
                    "State Pers(onnel|\\.) (and|&) Pens(ions|\\.)": "gsp",
                    "Tax ?[-–] ?Gen(eral|\\.)": "gtg",
                    "Tax ?[-–] ?Prop(erty|\\.)": "gtp",
                    "Transp(ortation|\\.)": "gtr"
                }
            }
        ]
    },
    {
        "name": "Maryland Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Maryland_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)M(aryland|d\\.|D) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "Massachusetts General Laws",
        "defaults": {},
        "URL": [
            "https://malegislature.gov/GeneralLaws/GoTo?ChapterGoTo={chapter}&SectionGoTo={section}"
        ],
        "regexes": [
            "(?<!\\w)((Mass(achusetts|\\.)|MA) ?(Gen(eral|\\.)|Ann(otated|\\.)) ?Laws( Ann(otated|\\.))?|M\\.?G\\.?L\\.?(A\\.?)?|A\\.?L\\.?M\\.?),? [Cc](hapter|h?\\.) ?(?<chapter>\\d+[A-Z]?),? ((&sect;|&#167|§){1,2}|Sect?(ions?|s?\\.))? ?(?<section>\\d+[A-Z]?\\d*([/]\\d+[A-Z]?)?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "section",
                "sub": [
                    "/",
                    "~"
                ]
            }
        ]
    },
    {
        "name": "Massachusetts Constitution",
        "defaults": {
            "chapter": "I",
            "section": "I"
        },
        "URL": [
            "https://malegislature.gov/Laws/Constitution",
            "{_isFirst}#article{article}",
            "{_isSecond}#chapter{chapter}Section{section}",
            "{_isSecond}Article{article}"
        ],
        "regexes": [
            "(?<!\\w)(Mass(achusetts|\\.)|MA) Const(itution|\\.),? [Pp](art|t\\.) ?(?<part>II?|1|2|[Tt]he ([Ff]irst|[Ss]econd))(,? [Cc](hapter|h?\\.) ?(?<chapter>\\d+|[IVXivx]{1,7})(,? ((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.))? ?(?<section>\\d+|[IVXivx]{1,7}))?)?(,? [Aa]rt(icle|\\.) ?(?<article>\\d+|[IVXivx]{1,7}))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "part",
                "output": "_isFirst",
                "optionalLookup": {
                    "1|I|.*irst": ""
                }
            },
            {
                "token": "part",
                "output": "_isSecond",
                "optionalLookup": {
                    "2|II|.*econd": ""
                }
            },
            {
                "token": "chapter",
                "numberFormat": "roman"
            },
            {
                "token": "section",
                "numberFormat": "roman"
            },
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "Michigan Compiled Laws",
        "defaults": {},
        "URL": [
            "https://legislature.mi.gov/doc.aspx?mcl-{chapter}-{section}"
        ],
        "regexes": [
            "(?<!\\w)(Mich(igan|\\.)|MI) Comp(iled|\\.) Laws( (Serv(ice|\\.)|Ann(otated|\\.)))? ((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+[A-Z]?)\\.(?<section>\\d+\\w?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "Michigan Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Michigan_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(Mich(igan|\\.)|MI) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "Minnesota Statutes",
        "defaults": {},
        "URL": [
            "https://www.revisor.mn.gov/statutes/cite/{chapter}.{section}",
            "#stat.{chapter}.{section}.{subdivision}"
        ],
        "regexes": [
            "(?<!\\w)(Minn(esota|\\.)|MN)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+[A-Z]?)\\.(?<section>\\d+\\w?)(?<subsection>\\((?<subdivision>\\d\\w*)\\)(\\(\\w+\\))*|(\\(\\w+\\))+)?(?!\\w)"
        ]
    },
    {
        "name": "Minnesota Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Minnesota_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(Minn(esota|\\.)|MN) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "Mississippi Code",
        "defaults": {
            "year": "2019"
        },
        "URL": [
            "https://law.justia.com/codes/mississippi/{year}/title-{title}/chapter-{chapter}/section-{title}-{chapter}-{section}/index.html"
        ],
        "regexes": [
            "(?<!\\w)(Miss(issippi|\\.)|MS)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Za-z]?)[-‑–](?<chapter>\\d+(\\.\\d+)?[A-Za-z]?)[-‑–](?<section>\\d+(\\.\\d+)?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(,? \\((?<year>\\d{4})\\))?(?!\\w)"
        ]
    },
    {
        "name": "Mississippi Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Mississippi_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(Miss(issippi|\\.)|MS) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "Missouri Revised Statutes",
        "defaults": {},
        "URL": [
            "https://revisor.mo.gov/main/OneSection.aspx?section={chapter}.{section}"
        ],
        "regexes": [
            "(?<!\\w)((M(issouri|o\\.|O)( Ann(otated|\\.))? ?Rev(ised|\\.) ?Stat(utes|s?\\.)( Ann(otated|\\.))?|R\\.?S\\.?M[Oo]\\.?)) ((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+[A-Z]?)\\.(?<section>\\d+\\w?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "Missouri Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Missouri_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)M(issouri|o\\.|O) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "Montana Code",
        "defaults": {},
        "URL": [
            "https://www.lawserver.com/law/state/montana/mt-code/montana_code_{title}-{chapter}-{section}"
        ],
        "regexes": [
            "(?<!\\w)(Mont(ana|\\.)|MT)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Za-z]?)[-‑–](?<chapter>\\d+(\\.\\d+)?[A-Za-z]?)[-‑–](?<section>\\d+(\\.\\d+)?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "Montana Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Montana_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(Mont(ana|\\.)|MT) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "Revised Statutes of Nebraska",
        "defaults": {},
        "URL": [
            "https://www.nebraskalegislature.gov/laws/statutes.php?statute={chapter}-{section}"
        ],
        "regexes": [
            "(?<!\\w)(Neb(raska|\\.)|NE)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+[A-Z]?)[-‑–](?<section>\\d+(\\.\\d+)?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "Nebraska Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Nebraska_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(Neb(raska|\\.)|NE) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "New Hampshire Revised Statutes",
        "defaults": {},
        "URL": [
            "https://www.lawserver.com/law/state/new-hampshire/nh-statutes/new_hampshire_revised_statutes_{chapter}_{section}"
        ],
        "regexes": [
            "(?<!\\w)(New Hampshire|N\\.? ?H\\.?)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+([-–][A-Za-z])?):(?<section>\\d+([-‑–][A-Za-z])?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "chapter",
                "sub": [
                    "[–‑]",
                    "-"
                ]
            },
            {
                "token": "chapter",
                "case": "lower"
            },
            {
                "token": "section",
                "sub": [
                    "–‑",
                    "-"
                ]
            },
            {
                "token": "section",
                "case": "lower"
            }
        ]
    },
    {
        "name": "New Hampshire Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/",
            "{_isPart1}Part_First",
            "{_isPart2}{_part2Section}",
            ",_New_Hampshire_Constitution",
            "#Article_{article}"
        ],
        "regexes": [
            "(?<!\\w)(New Hampshire|N\\.? ?H\\.?) ?Const(itution|\\.),? ?[Pp](art|t\\.) ?(?<part>II?|1|2|([Tt]he )([Ff]irst|[Ss]econd)),? [Aa]rt(icle|\\.) ?(?<article>\\d+(-\\w)?)(?!\\w)"
        ],
        "operations": [
            {
                "token": "part",
                "output": "_isPart1",
                "optionalLookup": {
                    "I|1|The First": ""
                }
            },
            {
                "token": "part",
                "output": "_isPart2",
                "optionalLookup": {
                    "II|2|The Second": ""
                }
            },
            {
                "token": "article",
                "output": "_part2Section",
                "optionalLookup": {
                    "[1-8](-[ab])?": "Part_Second",
                    "(9|2[0-4])(-[ab])?": "House_of_Representatives",
                    "(2[5-9]|3\\d|40)(-[ab])?": "Senate",
                    "(4[1-9]|5\\d)(-[ab])?": "Executive_Power_-_Governor",
                    "6[0-6]": "Council",
                    "(6[7-9]|70)": "Secretary",
                    "7[12]": "County_Treasurer",
                    "(7[3-9](-[ab])?|8[01])": "Judiciary_Power",
                    "82": "Clerks_of_Courts",
                    "83": "Encouragement_of_Literature,_Trade,_Etc.",
                    "(8[4-9]|9\\d|10[01])": "Oaths_and_Subscriptions_Exclusion_from_Offices,_Etc."
                }
            }
        ]
    },
    {
        "name": "New Jersey Statutes",
        "defaults": {},
        "URL": [
            "https://njlaw.rutgers.edu/collections/njstats/showsect.php?title={title}&chapter={chapter}&section={section}&actn=getsect"
        ],
        "regexes": [
            "(?<!\\w)((N\\.? ?J\\.?|New Jersey)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?|N\\.?J\\.?S\\.?A )((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+[A-Za-z]?):(?<chapter>\\d+[A-Za-z]?)[-‑–](?<section>\\d+(\\.\\d+)?[A-Za-z]?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "New Jersey Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_New_Jersey_Constitution",
            "#Section_{section}",
            "#Paragraph_{paragraph}"
        ],
        "regexes": [
            "(?<!\\w)(N\\.? ?J\\.?|New Jersey) ?Const(itution|\\.),? ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8}),? ((&sect;|&#167|§|[Ss]ec(tion|t?\\.)) ?(?<section>[\\dIVXivx]{1,8})|[Pp](ar(agraph|a?\\.)) ?(?<paragraph>\\d+))(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            },
            {
                "token": "section",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "Nevada Revised Statutes",
        "defaults": {},
        "URL": [
            "https://www.leg.state.nv.us/NRS/NRS-{_lpad_chapter}.html#NRS{chapter}Sec{section}"
        ],
        "regexes": [
            "(?<!\\w)((Nev(ada|\\.)|NV)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?|NRS )((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+[A-Z]?)\\.(?<section>\\d+\\w?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "chapter",
                "output": "_lpad_chapter",
                "lpad": 3
            }
        ]
    },
    {
        "name": "Nevada Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Nevada_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(Nev(ada|\\.)|NV) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "digit"
            },
            {
                "token": "section",
                "numberFormat": "digit"
            }
        ]
    },
    {
        "name": "New Mexico Statutes Annotated 1978",
        "defaults": {},
        "URL": [
            "https://nmonesource.com/nmos/nmsa/en/item/{_chapter_code}/index.do#!b/{chapter}-{article}-{section}"
        ],
        "regexes": [
            "(?<!\\w)((New Mexico|N\\.? ?M\\.?)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?|NMSA )((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+[A-Za-z]?)-(?<article>\\d+[A-Za-z]?)-(?<section>\\d+(\\.\\d+)?[A-Z]?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "chapter",
                "output": "_chapter_code",
                "lookup": {
                    "1": "4351",
                    "2": "4359",
                    "3": "4362",
                    "4": "4372",
                    "5": "4376",
                    "6": "4381",
                    "7": "4340",
                    "8": "4354",
                    "9": "4357",
                    "10": "4364",
                    "11": "4370",
                    "12": "4374",
                    "13": "4378",
                    "14": "4384",
                    "15": "4387",
                    "16": "4390",
                    "17": "4341",
                    "18": "4346",
                    "19": "4350",
                    "20": "4356",
                    "21": "4361",
                    "22": "4368",
                    "22A": "4377",
                    "23": "4380",
                    "24": "4384",
                    "25": "4391",
                    "26": "4355",
                    "27": "4358",
                    "28": "4365",
                    "29": "4367",
                    "30": "4371",
                    "31": "4379",
                    "32": "4385",
                    "32A": "4389",
                    "33": "4396",
                    "34": "4399",
                    "35": "4360",
                    "36": "4363",
                    "37": "4366",
                    "38": "4369",
                    "39": "4373",
                    "40": "4375",
                    "41": "4382",
                    "42": "4386",
                    "42A": "4392",
                    "43": "4395",
                    "44": "4388",
                    "45": "4393",
                    "46": "4401",
                    "46A": "4405",
                    "46B": "4406",
                    "47": "4408",
                    "48": "4413",
                    "49": "4416",
                    "50": "4420",
                    "51": "4425",
                    "52": "4394",
                    "53": "4400",
                    "54": "4404",
                    "55": "4411",
                    "56": "4418",
                    "57": "4423",
                    "58": "4426",
                    "59": "4435",
                    "59A": "4438",
                    "60": "4443",
                    "61": "4397",
                    "62": "4407",
                    "63": "4412",
                    "64": "4414",
                    "65": "4417",
                    "66": "4422",
                    "67": "4429",
                    "68": "4434",
                    "69": "4437",
                    "70": "4440",
                    "71": "4398",
                    "72": "4402",
                    "73": "4409",
                    "74": "4415",
                    "75": "4421",
                    "76": "4424",
                    "77": "4427"
                }
            }
        ]
    },
    {
        "name": "New Mexico Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_New_Mexico_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(New Mexico|N\\.? ?M\\.?) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "Consolidated Laws of New York",
        "defaults": {},
        "URL": [
            "https://www.nysenate.gov/legislation/laws/{chapter}/{section}"
        ],
        "regexes": [
            "(?<!\\w)(New York|N\\.? ?Y\\.?) ?(?<_chapter>.{2,40}?)( Law)? ((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.))? ?(?<section>(\\d[\\w.-]*\\w|\\d))(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "_chapter",
                "output": "chapter",
                "lookup": {
                    "Abandoned Property|ABP": "ABP",
                    "Agric(ulture|\\.) (and|&) M(arkets|kts)|AGM|A&M": null,
                    "Alc(oholic|o?\\.) Bev(erage|\\.) Cont(rol|\\.)|ABC": "ABC",
                    "Alt(ernative\\.) C(ounty|ty\\.) Gov(ernment|.t)|ACG": "ACG",
                    "Arts (and|&) Cult(ural|\\.) Aff(airs|\\.)|ACA": "ACA",
                    "Banking|BNK": "BNK",
                    "Ben(evolent|\\.) Ord(ers|\\.)|BVO": "BVO",
                    "Bus(iness|\\.) Corp(orations?|s?)|BSC|BCL": "BSC",
                    "Canal|CAL": "CAL",
                    "Civil Practice Law (and|&) Rules|CVP|CPLR|C\\. ?P\\. ?L\\. ?R": "CVP",
                    "Civ(il|\\.) Serv(ice|\\.)|CIV": "CIV",
                    "Coop(erative|\\.) Corp(orations|s?)|CCO": "CCO",
                    "Correct(ion|\\.)|COR": "COR",
                    "County|CNT": "CNT",
                    "Crim(inal|\\.) Pro(cedure|c?)|CPL": "CPL",
                    "Debt(or|\\.) (and|&) Cred(itor|\\.)|DCD": "DCD",
                    "Dom(estic|\\.) Rel(ations|\\.)|DOM": "DOM",
                    "Econ(omic|\\.) Dev(elopment|\\.)|COM": "COM",
                    "Educ(ation|\\.)|EDN": "EDN",
                    "Elder|ELD": "ELD",
                    "Elec(tion|\\.)|ELN": "ELN",
                    "Em(inent|\\.) Dom(ain|\\.) Proc(edure|\\.)|EDP": "EDP",
                    "Emp(loyer(s'?)?|l'rs) Liab(ility|\\.)|EML": "EML",
                    "Energy|ENG": "ENG",
                    "Env(ironmental|(tl)?\\.) Conserv(ation|\\.)|ENV": "ENV",
                    "Est(ates,|\\.) Powers (and|&) Trusts|EPT": "EPT",
                    "Exec(utive|\\.)|EXC": "EXC",
                    "Fin(ancial|\\.) Serv(ices|s?)|FIS": "FIS",
                    "Gen(eral|\\.) Associations|GAS": "GAS",
                    "Gen(eral|\\.) Bus(iness|\\.)|GBS": "GBS",
                    "Gen(eral|\\.) City|GCT": "GCT",
                    "Gen(eral|\\.) Constr(uction|\\.)|GCN": "GCN",
                    "Gen(eral|\\.) Mun(icipal|\\.)|GMU": "GMU",
                    "Gen(eral|\\.) Oblig(ations|\\.)|GOB": "GOB",
                    "High(way|\\.)|HAY": "HAY",
                    "Indian|IND": "IND",
                    "Jud(iciary|\\.)|JUD": "JUD",
                    "Legis(lative|\\.)|LEG": "LEG",
                    "Lien|LIE": "LIE",
                    "L(imited|td\\.) Liab(ility|\\.) Co(mpany|\\.)|LLC": "LLC",
                    "Local Fin(ance|\\.)|LFN": "LFN",
                    "Mental Hyg(iene|\\.)|MHY": "MHY",
                    "Mil(itary|\\.)|MIL": "MIL",
                    "Mult(iple|\\.) Dwell(ing|\\.)|MDW": "MDW",
                    "Mult(iple|\\.) Resid(ence|\\.)|MRE": "MRE",
                    "Mun(icipal|\\.) Home Rule|MHR": "MHR",
                    "Mun(icipal|i?\\.) Housing Authorities|MHA": "MHA",
                    "Nav(igation|\\.)|NAV": "NAV",
                    "(State )?Print(ing|\\.)? (and|&) Pub(lic|\\.) Doc(uments|s?)|PPD": "PPD",
                    "Parks,? Rec(reation|\\.) (and|&) Hist(oric|\\.) Preserv(ation|\\.)|PAR": "PAR",
                    "P(artnership|'ship)|PTR": "PTR",
                    "Penal|PEN": "PEN",
                    "Pers(onal|\\.) Prop(erty|\\.)|PEP": "PEP",
                    "Priv(ate|\\.) Hous(ing|\\.) Fin(ance|\\.)|PVH": "PVH",
                    "Pub(lic|\\.) Auth(orities|\\.)|PBA": "PBA",
                    "Pub(lic|\\.) Health|PBH": "PBH",
                    "Pub(lic|\\.) Housing|PBG": "PBG",
                    "Pub(lic|\\.) Off(icers|\\.)|PBO": "PBO",
                    "Rac(ing,|\\.) Pari-Mut(uel|\\.) Wag(ering|\\.) (and|&) Breed(ing|\\.)|PML": "PML",
                    "Railroad|R\\.R\\.|RRD": "RRD",
                    "Rapid Trans(it|\\.)|RAT": "RAT",
                    "Real Prop(erty|\\.) Act(ions|s\\.)( (and|&) Proceedings)?|RPA": "RPA",
                    "Real Prop(erty|\\.) Tax|RPT": "RPT",
                    "Real Prop(erty|\\.)|RPP": "RPP",
                    "Relig(ious|\\.) Corp(orations|s?\\.)|RCO": "RCO",
                    "Retire(ment|\\.) (and|&) Soc(ial|\\.) Sec(urity|\\.)|RSS": "RSS",
                    "Rural Elec(tric|\\.) Coop(eratives?|s?\\.)|REL": "REL",
                    "Second Class Cities|SCC": "SCC",
                    "Soil (and|&) Water Conserv(ation|\\.) Dist(ricts|s?\\.)|SWC": "SWC",
                    "State Administrative Procedure Act|A\\.P\\.A\\.|SAP": "SAP",
                    "State Fin(ance|\\.)|STF": "STF",
                    "State|STL": "STL",
                    "Statute of Local Gov(ernments|s?\\.)|SLG": "SLG",
                    "Town|TWN": "TWN",
                    "Trans(portation|p?\\.) Corp(orations|s?\\.)|TCP": "TCP",
                    "Trans(portation|p?\\.)|TRA": "TRA",
                    "Uniform Commercial Code|U\\.?C\\.?C\\.?": "UCC",
                    "Vill(age|\\.)|VIL": "VIL",
                    "Vol(unteer|\\.) Ambul(ance|\\.) Workers'? Benefit|VAW": "VAW",
                    "Vol(unteer|\\.) Fire(fighters'?|\\.) Ben(efit|\\.)|VOL": "VOL"
                }
            },
            {
                "token": "section",
                "case": "upper"
            }
        ]
    },
    {
        "name": "New York Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_New_York_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(New York|N\\.? ?Y\\.?) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "North Carolina General Statutes",
        "defaults": {},
        "URL": [
            "https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_{chapter}/GS_{chapter}-{section}.html"
        ],
        "regexes": [
            "(?<!\\w)((North Carolina|N\\.? ?C\\.?) ?Gen(eral|\\.) ?Stat(utes|s?\\.?)|N\\.? ?C\\.? ?G\\.? ?S\\.?) ((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+[A-Z]?)[-‑–](?<section>\\d+(\\.\\d+)?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "North Carolina Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_North_Carolina_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(North Carolina|N\\.? ?C\\.?) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "North Dakota Century Code",
        "defaults": {},
        "URL": [
            "https://www.lawserver.com/law/state/north-dakota/nd-code/north_dakota_code_{title}_{_chapter}_{_section}"
        ],
        "regexes": [
            "(?<!\\w)(North Dakota|N\\.? ?D\\.?) ?Cent(ury|\\.) ?Code( Ann(otated|\\.))? ((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Za-z]?)[-‑–](?<chapter>\\d+(\\.\\d+)?[A-Za-z]?)[-‑–](?<section>\\d+(\\.\\d+)?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "chapter",
                "output": "_chapter",
                "lpad": 2
            },
            {
                "token": "section",
                "output": "_section",
                "lpad": 2
            }
        ]
    },
    {
        "name": "North Dakota Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_North_Dakota_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(North Dakota|N\\.? ?D\\.?) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "Northern Mariana Islands Commonwealth Code",
        "defaults": {},
        "URL": [
            "https://cnmilaw.org/pdf/cmc_section/T{title}/{section}.pdf"
        ],
        "regexes": [
            "(?<!\\w)(?<title>\\d+) N(orthern|\\.) ?Mar(iana|\\.) ?I(slands|\\.)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?(,? )?((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>\\d[\\w.-]*\\w|\\d)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "Northern Mariana Islands Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Northern_Mariana_Islands_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)N(orthern|\\.) ?Mar(iana|\\.) ?I(slands|\\.) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "Ohio Revised Code",
        "defaults": {},
        "URL": [
            "https://codes.ohio.gov/orc/{chapter}",
            ".{section}v1"
        ],
        "regexes": [
            "(?<!\\w)O(hio|H)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+)(\\.(?<section>\\d+)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?)?(?!\\w)"
        ]
    },
    {
        "name": "Ohio Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Ohio_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)O(hio|H) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "Oklahoma Statutes",
        "defaults": {
            "year": "2019"
        },
        "URL": [
            "https://law.justia.com/codes/oklahoma/{year}/title-{title}/section-{title}-{section}/index.html"
        ],
        "regexes": [
            "(?<!\\w)(Okla(homa|\\.)|OK)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?,? [Tt]it(le|\\.) ?(?<title>\\d+([-‑–][A-Z])?),?(,? )?((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>\\d[\\w.-]*\\w|\\d)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(,? \\((?<year>\\d{4})\\))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "title",
                "case": "lower"
            }
        ]
    },
    {
        "name": "Oklahoma Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Oklahoma_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(Okla(homa|\\.)|OK) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "Oregon Revised Statutes",
        "defaults": {},
        "URL": [
            "https://www.oregonlaws.org/ors/{chapter}.{section}"
        ],
        "regexes": [
            "(?<!\\w)(Or(egon|e?\\.)|OR)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+[A-Z]?)\\.(?<section>\\d+\\w?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "Oregon Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Oregon_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(Or(egon|e?\\.)|OR) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[IVXivx]{1,5}(-\\w(\\(\\d\\))?)?)(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "case": "upper"
            }
        ]
    },
    {
        "name": "Pennsylvania Code",
        "defaults": {},
        "URL": [
            "https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/{_title}/chapter{chapter}/s{chapter}.{section}.html"
        ],
        "regexes": [
            "(?<!\\w)(?<title>\\d+) (Pennsylvania|Pa\\.|PA)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+[A-Z]?)\\.(?<section>\\d+\\w?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "title",
                "output": "_title",
                "lpad": 3
            }
        ]
    },
    {
        "name": "Pennsylvania Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Pennsylvania_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(Pennsylvania|Pa\\.|PA) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "Laws of Puerto Rico",
        "defaults": {},
        "URL": null,
        "regexes": [
            "(?<!\\w)(Puerto Rico|P\\.? ?R\\.?) ?L(aws|eyes)( An(notated|notado|n?\\.))?,? [Tt]it(le|\\.) ?(?<title>\\d+([-‑–][A-Z])?),?(,? )?((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>\\d[\\w.-]*\\w|\\d)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "Puerto Rico Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Puerto_Rico_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(Puerto Rico|P\\.? ?R\\.?) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "General Laws of Rhode Island",
        "defaults": {},
        "URL": [
            "http://webserver.rilin.state.ri.us/Statutes/TITLE{title}/{title}-{chapter}/{title}-{chapter}-{section}.HTM"
        ],
        "regexes": [
            "(?<!\\w)(Rhode Island|R\\.? ?I\\.?) ?Gen(eral|\\.) ?Laws ((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Za-z]?)[-‑–](?<chapter>\\d+(\\.\\d+)?[A-Za-z]?)[-‑–](?<section>\\d+(\\.\\d+)?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "Rhode Island Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Rhode_Island_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(Rhode Island|R\\.? ?I\\.?) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "South Carolina Code of Laws",
        "defaults": {},
        "URL": [
            "https://www.scstatehouse.gov/code/t{title}c{_lpad_chapter}.php#{title}-{chapter}-{section}"
        ],
        "regexes": [
            "(?<!\\w)(South Carolina|S\\.? ?C\\.?)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Za-z]?)[-‑–](?<chapter>\\d+(\\.\\d+)?[A-Za-z]?)[-‑–](?<section>\\d+(\\.\\d+)?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "chapter",
                "output": "_lpad_chapter",
                "lpad": 3
            }
        ]
    },
    {
        "name": "South Carolina Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_South_Carolina_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(South Carolina|S\\.? ?C\\.?) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "South Dakota Codified Laws",
        "defaults": {},
        "URL": [
            "https://sdlegislature.gov/Statutes/Codified_Laws/DisplayStatute.aspx?Type=Statute&Statute={title}-{chapter}-{section}"
        ],
        "regexes": [
            "(?<!\\w)(South Dakota|S\\.? ?D\\.?) ?(Codified|Comp(iled|\\.)) Laws( Ann(otated|\\.))? ((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Za-z]?)[-‑–](?<chapter>\\d+(\\.\\d+)?[A-Za-z]?)[-‑–](?<section>\\d+(\\.\\d+)?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "South Dakota Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_South_Dakota_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(South Dakota|S\\.? ?D\\.?) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "Tennessee Code",
        "defaults": {},
        "URL": [
            "https://www.lawserver.com/law/state/tennessee/tn-code/tennessee_code_{title}-{chapter}-{section}"
        ],
        "regexes": [
            "(?<!\\w)(Tenn(essee|\\.)|TN)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Za-z]?)[-‑–](?<chapter>\\d+(\\.\\d+)?[A-Za-z]?)[-‑–](?<section>\\d+(\\.\\d+)?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "Tennessee Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Tennessee_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(Tenn(essee|\\.)|TN) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "Texas Codes",
        "defaults": {},
        "URL": [
            "https://statutes.capitol.texas.gov/Docs/{code}/htm/{code}.{chapter}.htm#{chapter}.{section}"
        ],
        "regexes": [
            "(?<!\\w)(Tex(as|\\.)|TX) (?<_code>\\w.{2,40}?)( Code( Ann(otated|\\.))?)? ((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+[A-Z]?)\\.(?<section>\\d+\\w?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "_code",
                "output": "code",
                "lookup": {
                    "Agric(ulture|\\.)|AGC?": "AG",
                    "Alc(oholic|o?\\.) Bev(erage|\\.)|ABC?": "AL",
                    "Aux(iliary|\\.) Water Laws|A?WL": "WL",
                    "Bus(iness|\\.) (and|&) Com(merce|m?\\.)|B&C|BCC?": "BC",
                    "Bus(iness|\\.) Org(anizations|s\\.)|BOC?": "BO",
                    "Civ(il|\\.) Prac(tice|\\.) (and|&) Rem(edies|s?\\.)|CPR?C?": "CP",
                    "Code( of)? Crim(inal|\\.) ?Pro(cedure|c?\\.)|CCrP|CRC?": "CR",
                    "Educ(ation|\\.)|EDC?": "ED",
                    "Elec(tion|\\.)|ELC?": "EL",
                    "Est(ates|\\.)|ESC?": "ES",
                    "Fam(ily|\\.)|FAC?|FAM": "FA",
                    "Fin(ance|\\.)|FIC?|FIN": "FI",
                    "Gov(ernment|('?t)?\\.?)?|GO?VC?": "GV",
                    "Health (and|&) Saf(ety|\\.)|H&?SC?": "HS",
                    "Hum(an|\\.) Res(ources|\\.)|HRC?": "HR",
                    "Ins(urance|\\.)|INC?": "IN",
                    "Labor|LA": "LA",
                    "Local Gov(ernment|'t)|LGC?": "LG",
                    "Nat(ural|\\.) Res(ources|\\.)|NRC?": "NR",
                    "Occ(upations|\\.)|OC": "OC",
                    "Parks (and|&) Wild(life|\\.)|PWC?": "PW",
                    "Penal|PEN?|PC": "PE",
                    "Prop(erty|\\.)|PR|PC": "PR",
                    "Special Dist(rict|\\.) Local Laws|Spec\\. Dists\\.|SDC?": "SD",
                    "Tax|TX?C": "TX",
                    "Trans(portation|p?\\.)|TNC?": "TN",
                    "Util(ities|\\.)|UTC?": "UT",
                    "Water|WAC?": "WA",
                    "Vernon's Civ(il|\\.) Stat(utes|s?\\.)": "VC"
                }
            }
        ]
    },
    {
        "name": "Texas Constitution",
        "defaults": {},
        "URL": [
            "https://statutes.capitol.texas.gov/Docs/CN/htm/CN.{article}/CN.{article}.{section}.htm"
        ],
        "regexes": [
            "(?<!\\w)(Tex(as|\\.)|TX) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "digit"
            },
            {
                "token": "section",
                "numberFormat": "digit"
            }
        ]
    },
    {
        "name": "Utah Code",
        "defaults": {},
        "URL": [
            "https://le.utah.gov/xcode/Title{title}/Chapter{chapter}/{title}-{chapter}-S{section}.html",
            "#{title}-{chapter}-{section}{subsection}"
        ],
        "regexes": [
            "(?<!\\w)(Utah|UT)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Za-z]?)[-‑–](?<chapter>\\d+(\\.\\d+)?[A-Za-z]?)[-‑–](?<section>\\d+(\\.\\d+)?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "title",
                "case": "upper"
            }
        ]
    },
    {
        "name": "Utah Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Utah_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(Utah|UT) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "Vermont Statutes",
        "defaults": {},
        "URL": [
            "https://www.lawserver.com/law/state/vermont/vt-statutes/vermont_statutes_title_{title}_{section}"
        ],
        "regexes": [
            "(?<!\\w)V(ermont|t\\.|T)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?,? [Tt]it(le|\\.) ?(?<title>\\d+([-‑–][A-Z])?),?(,? )?((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>\\d[\\w.-]*\\w|\\d)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "Vermont Constitution",
        "defaults": {
            "_chapter2section": "Chapter_II"
        },
        "URL": [
            "https://ballotpedia.org/",
            "{_isChapterI}Chapter_I",
            "{_isChapterII}{_chapter2section}",
            ",_Vermont_Constitution",
            "{_isChapterI}#Article_{article}{_articleSuffix}",
            "{_isChapterII}#Section_{article}"
        ],
        "regexes": [
            "(?<!\\w)V(ermont|t\\.|T) ?Const(itution|\\.),? ?[Cc](hapter|h?\\.) ?(?<chapter>[Ii]{1,2})(,? ([Aa]rt(icle|\\.)|&sect;|&#167|§) ?(?<article>\\d+)(st|nd|th)?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "chapter",
                "output": "_isChapterI",
                "optionalLookup": {
                    "I": ""
                }
            },
            {
                "token": "chapter",
                "output": "_isChapterII",
                "optionalLookup": {
                    "II": ""
                }
            },
            {
                "token": "article",
                "output": "_articleSuffix",
                "lookup": {
                    "(\\d*[02-9])?1": "st",
                    "(\\d*[02-9])?2": "nd",
                    "(\\d*[02-9])?3": "rd",
                    "(\\d*[02-9])?[4-9]|\\d*1\\d": "th"
                }
            },
            {
                "token": "article",
                "output": "_chapter2section",
                "optionalLookup": {
                    "[1-5]": "Delegation_and_Distribution_of_Powers",
                    "[6-9]|1\\d": "Legislative_Department",
                    "2[0-7]": "Executive_Department",
                    "2[89]|3\\d|4[01]": "Judiciary_Department",
                    "42": "Qualifications_of_Freemen_and_Freewomen",
                    "4[3-9]|5[0-5]": "Elections;_Officers;_Terms_of_Office",
                    "56": "Oath_of_Allegiance;_Oath_of_Office",
                    "5[78]": "Impeachment",
                    "59": "Militia",
                    "6\\d|7[01]": "General_Provisions",
                    "7[23]": "Amendment_of_the_Constitution",
                    "7[4-6]": "Temporary_Provisions"
                }
            }
        ]
    },
    {
        "name": "Virginia Code",
        "defaults": {},
        "URL": [
            "https://law.lis.virginia.gov/vacode/title{title}/section{title}-{section}"
        ],
        "regexes": [
            "(?<!\\w)(?<!W\\. )(?<!West )(?<!W\\.)V(irginia|a\\.|A)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Z]?)-(?<section>\\d+(\\.\\d+)?[A-Z]?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "Virginia Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Virginia_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(?<!W\\. )(?<!West )(?<!W\\.)V(irginia|a\\.|A) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "Virgin Islands Code",
        "defaults": {
            "year": "2019"
        },
        "URL": [
            "https://law.justia.com/codes/virgin-islands/{year}/title-{title}/chapter-{chapter}/{section}/"
        ],
        "regexes": [
            "(?<!\\w)(Virgin Islands|V\\.? ?I\\.?)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?,? [Tt]it(le|\\.) ?(?<title>\\d+([-‑–][A-Z])?),?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+[A-Z]?)[-‑–](?<section>\\d+(\\.\\d+)?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(,? \\((?<year>\\d{4})\\))?(?!\\w)"
        ]
    },
    {
        "name": "Revised Code of Washington",
        "defaults": {},
        "URL": [
            "https://app.leg.wa.gov/RCW/default.aspx?cite={title}.{chapter}.{section}"
        ],
        "regexes": [
            "(?<!\\w)((Wash(ington|\\.)|WA)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?|R\\.?C\\.?W\\.? )((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+[A-Za-z]?)\\.(?<chapter>\\d+[A-Za-z]?)\\.(?<section>\\d+[A-Za-z]?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "Washington Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Washington_State_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(Wash(ington|\\.)|WA) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "West Virginia Code",
        "defaults": {},
        "URL": [
            "http://www.wvlegislature.gov/wvcode/ChapterEntire.cfm?chap={chapter}&art={article}&section={section}"
        ],
        "regexes": [
            "(?<!\\w)(West Virginia|W\\. ?Va?\\.|WV)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+[A-Za-z]?)-(?<article>\\d+[A-Za-z]?)-(?<section>\\d+(\\.\\d+)?[A-Z]?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "West Virginia Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_West_Virginia_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(West Virginia|W\\. ?Va?\\.|WV) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "Wisconsin Statutes",
        "defaults": {},
        "URL": [
            "https://docs.legis.wisconsin.gov/document/statutes/{chapter}.{section}",
            "{subsection}"
        ],
        "regexes": [
            "(?<!\\w)(Wis(consin|\\.)|WI)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+[A-Z]?)\\.(?<section>\\d+\\w?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ]
    },
    {
        "name": "Wisconsin Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Wisconsin_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(Wis(consin|\\.)|WI) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "roman"
            }
        ]
    },
    {
        "name": "Wyoming Statutes",
        "defaults": {},
        "URL": [
            "https://wyoleg.gov/statutes/compress/title{_lpad_title}.pdf#search={title}-{chapter}-{section}."
        ],
        "regexes": [
            "(?<!\\w)(Wyo(ming|\\.)|WY)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(Codes?|Stat(utes|s?\\.?))( ?Ann(otated|\\.))?,? ?((Sections?|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Za-z]?)[-‑–](?<chapter>\\d+(\\.\\d+)?[A-Za-z]?)[-‑–](?<section>\\d+(\\.\\d+)?)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,2}\\))+))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "title",
                "output": "_lpad_title",
                "lpad": 2
            }
        ]
    },
    {
        "name": "Wyoming Constitution",
        "defaults": {},
        "URL": [
            "https://ballotpedia.org/Article_{article},_Wyoming_Constitution",
            "#Section_{section}"
        ],
        "regexes": [
            "(?<!\\w)(Wyo(ming|\\.)|WY) ?Const(itution|\\.) ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(,? ?((&sect;|&#167|§){1,2}|[Ss]ect?(ions?|s?\\.)) ?(?<section>(\\d[\\w.]*\\w|\\d))(,? ([Cc]l(ause|s?\\.) ?(?<clause>\\d+)))?)?(?!\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "numberFormat": "digit"
            },
            {
                "token": "section",
                "numberFormat": "digit"
            }
        ]
    },
    {
        "name": "U.S. Caselaw (CAP)",
        "defaults": {},
        "URL": [
            "https://cite.case.law/{reporter}/{volume}/{page}",
            "#p{pincite}"
        ],
        "regexes": [
            "(?<!\\w)(?<volume>\\d+) (?<reporter>Abb\\. Ct\\. App\\.|Abb\\.N\\. Cas\\.|Abb\\. Pr\\.|Abb\\. Pr\\. \\(n\\.s\\.\\)|Adams Co\\. L\\.J\\.|Add\\.|Franklin Co\\. Legal J\\.|Aik\\.|Ala\\. App\\.|Ala\\.|Alaska Fed\\.|Alaska|Am\\. Samoa( [23]d)?|Ohio App\\. Unrep\\.|Ant\\. N\\.P\\. Cas\\.|A\\.D\\. ?2d|A\\.D\\.|A\\.D\\. ?3d|Ariz\\. App\\.|Ariz\\.|Ark\\. App\\.|Ark\\.|Armstrong\\. Election Cases|A\\.|Balt\\. C\\. Rep\\.|Barb\\. Ch\\.|Barb\\.|B\\. Co\\. Leg\\. J\\.|Berk's Co\\. L\\.J\\.\\.|Blackf\\.|Blair Co\\. L\\.R\\.|Blair Co\\. L\\.R\\. 2d|Bosworth Super\\. Ct\\. Rep\\.|Bradford Co\\. L\\.J\\.|Brad\\.|Brayt\\.|Bucks Co\\. L\\.R\\.|Bur\\.|Butler Co\\. Legal J\\.|E\\.D\\. Pa\\.|Cai\\. Cas\\.|Cai\\.|Cal\\.( ?App\\.)?( ?([23]d|[45]th))?|Cal\\. ?Dist\\. Ct\\.|Cal\\. ?Super\\. ?Ct\\.|Cal\\. ?Unrep\\.|Cambria Co\\. L\\.J\\.|Cambria Co\\. Rep\\.|Carbon Co\\. L\\.J\\.|N\\.J\\. \\(Manumission\\)|Tapp\\. Rep\\.|D\\. Pa\\.|Ohio|Monaghan|Sadler|C\\.C\\.L\\.J\\.|C\\.C\\.L\\.J\\. 2d|Chand\\.|Charlton Rep\\.|Ches\\. Co\\. Rep\\.|D\\. Chip\\.|N\\. Chip\\.|Mun\\.  L\\. Rep\\.|Hosea's Rep\\.|N\\.Y\\. City Ct\\. Rep\\.|Cl\\. Ch\\.|Cole\\. & Cai\\. Cas\\.|Cole\\. Cas\\.|Colo\\. App\\.|Colo\\. L\\. Rep\\.|Colo\\. N\\. P\\.|Colo\\.|Willson|White & W\\.|King's Conflicting Cases|Conn\\. App\\.|Conn\\. Cir\\. Ct\\.|Kirby|Root|Conn\\.|Conn\\. Supp\\.|Connoly Sur\\. Rep\\.|Ct\\. Cl\\.|C\\.C\\.P\\.A\\.|Ct\\. Cust\\.|Cow\\.|Craw\\. Co\\. Leg\\. J\\.|Cumberland L\\.J\\.|Cust\\. B\\. & Dec\\.|Dakota|Dallam|Dall\\.|Daly \\(N\\.Y\\.\\)|Dau\\. Co\\. Rep\\.|Day|T\\.C\\.A\\.|P\\.R\\. Dec\\.|Teiss\\.|Va\\. Ch\\. Dec\\.|Pears\\.|Smith|Ga\\. Super\\. Ct\\.|Georgia Decisions|C\\.M\\.A\\.|D\\.C\\.( \\((Cranch|MacArth\\.( & M\\.)?|Mackey|patent|Tuck\\. & Cl\\.)\\))?|Del\\. Cas\\.|Del\\. Ch\\.|Del\\. Co\\. Reps\\.|Del\\.( \\((Boyce|Harr\\.|Houst\\.|Marv\\.|Penne\\.)\\))?|Dem\\. Sur\\.|Denio|Docket|Dudley Rep\\.|Duer Super\\. Ct\\. Rep\\.|Edm\\. Sel\\. Cas\\.|E\\.D\\. Smith|Edw\\. Ch\\.|Erie\\. Co\\. L\\.J\\.|P\\.R\\. Sent\\.|Fay\\. L\\.J\\.|F\\.( ?Supp\\.)?( ?[23]d)?|F\\. Cas\\.|Fed\\. Cl\\.|F\\.R\\.D\\.|Fla\\.|Fla\\. Supp\\.( 2d)?|Ga\\. App\\.|Ga\\. L\\. Rep\\.|Ga\\.|Gault|Gibb\\. Surr\\.|Guam|Hall Super\\. Ct\\. Rep\\.|H\\. & G\\.|Haw\\. App\\.|Haw\\.|Haz\\. Pa\\. Reg\\.|Hill & Den\\.|Hill|Hilt\\.|Hoff\\. Ch\\.|Hopk\\. Ch\\.|How\\. App\\. Cas\\.|How\\. Pr\\.( \\(n\\.s\\.\\))?|Idaho|Ill\\. App\\.( [23]d)?|Ill\\. Cir\\. Ct\\. Rep\\.|Ill\\. Ct\\. Cl\\.|Ill\\.( \\((Scam|Breese|Gilm\\.)\\))?|Ill\\. 2d|Ind\\. App\\.|Ind\\. L\\. Rep\\.|Ind\\.|Indian Terr\\.|Iowa|Jeff\\.|Johns\\.( Cas\\.| Ch\\.)?|Jones and Spencer's Super\\. Ct\\. Rep\\.|Edsall|Pa\\. \\(Admiralty\\)|Kan\\. App\\. 2d|Kan\\.|Keyes|Ky\\. Op\\.|Ky\\.( \\((A\\.K\\. Marsh\\.|(T\\.)?B\\. Mon\\.|Bibb|Bush|Dana|Duv\\.|Hard\\.|Hughes|J\\.J\\. Marsh\\.|Met\\.|Litt\\.( Sel\\. Cas\\.)?|Sneed)\\))?|Lack\\. Bar  R\\.|Lack\\. Jur\\.|Lack\\. L\\. N\\.|Lack\\. L\\.R\\.|Lanc\\. Bar|Lanc\\. L\\. Rev\\.|Lans\\. Ch\\.|Lans\\.|Law\\. L\\.J\\.|Law Times( \\(N\\.S\\.\\))?|Lebanon Co\\. L\\.J\\.|Foster|(Pa\\. )?Leg\\. Gaz\\.|Gunby|Leg\\. Rec\\. Rep\\.|Lehigh Co\\. L\\.J\\.|Lehigh Val\\. L\\. Rep\\.|Liquor Tax Rep\\.|Lock\\. Rev\\. Cas\\.|La\\.( A(nn|pp)\\.)?|Luz\\. L\\.[JO]\\.|Luz\\. Leg\\. Reg\\.|Lycoming R\\.|Magis\\. & Const\\.|Me\\.|McGrath|Mart\\. \\([no]\\.s\\.\\)|Md\\. App\\.|Md\\.|H\\. & McH\\.|Mass\\.( \\((Allen|Cush|Gray|Met\\.|Pick\\.|Tyng|Will\\.)\\))?|Mass\\. App\\. Ct\\.|Mass\\. App\\. Dec\\.|Davis L\\. Ct\\. Cas\\.|Mass\\. Supp\\.|Mercer|Mich\\. App\\. |Howell N\\.P\\.|Mich\\.|M\\.C\\.L\\.J\\.|Mills Surr\\.|Minn\\.|Minor|Va\\.|Miss\\. Ct\\. Rec\\.|Miss\\. Dec\\.|Miss\\.(\\((Howard|S\\. & M\\.( Ch\\.)?|Walker)\\))?|Mor\\. St\\. Cas\\.|Mo\\. App\\.|Mo\\.|Monroe L\\.R\\.|Mont\\.|Mont\\. Co\\. L\\. Rep\\.|Navajo Rptr\\.|Neb\\. App\\.|Neb\\.|Nev\\.|N\\.H\\.|N\\.J\\. Eq\\.|N\\.J\\.L\\.|N\\.J\\. Misc\\.|N\\.J\\.|N\\.J\\. Super\\.|N\\.J\\. Tax Ct\\.|N\\.M\\.|N\\.Y\\. Crim\\.|Misc\\.( ?[23]d)?|N\\.Y\\.( ?[23]d)?|N\\.Y\\. St\\. Rptr\\.|Northam\\. Law Rep\\.|N\\.C\\. App\\.|N\\.C\\.( \\((Busb\\.( Eq\\.?)?|Cam\\. & Nor\\.|Car\\. L\\. Rep\\.|Dev\\.( & Bat\\.)?( Eq\\.)?|Hawks|Hayw\\.|(Ired\\.?|Jones|Mart\\.|Phil\\.)( Eq\\.?)?|Mur\\.?|Tay(lor|\\.?)|Win\\.?)\\))?|N\\.D\\.|N\\. ?E\\.|N\\.E\\. ?[23]d|N\\. E\\. [23]d|N\\. Mar\\. I\\. Commw\\.|N\\. Mar\\. I\\.|Northum\\. Co\\. Leg\\. N\\.|Northumb\\. L\\.J\\.|N\\. ?W\\.|N\\.W\\. ?2d|N\\. W\\. 2d|Ohio App\\.( [23]d)?|Ohio C\\.C\\. Dec\\.|Ohio C\\.C\\. \\(N\\.S\\.\\)|Ohio Cir\\. Dec\\.|Ohio Ct\\. App\\.|Ohio Misc\\.|Ohio Misc\\. 2d|Ohio Nisi Prius|Ohio Nisi Prius \\(N\\.S\\.\\)|Ohio Op\\.( [23]d)?|Ohio St\\.( [23]d| \\(n\\.s\\.\\))?|Okla\\. Crim\\.|Okla\\.|Olwine's L\\.J\\.|Or\\.|Or\\. App\\.|Or\\. Tax|P\\.( ?[23]d)?|Paige Ch\\.|Park\\. Crim\\. Rep\\.|Pelt\\.|Pa\\. L\\. Rec\\.|Pa\\. Commw\\.|Pa\\. Corp\\. R\\.|Pa\\. Co\\. Ct\\.|Pa\\. D\\. & C\\.( ([23]d|[45]th))?|Pa\\. Fid\\.( [23]d)?|Pa\\. Just\\. L\\. Rep\\.|Pa\\. L\\.J\\. Rep\\.|Pa\\.|Pa\\. Super\\. Ct\\.|Pennyp\\.|Phila\\. Co\\. R\\.|Phila\\. Reports|Pin\\.|Pittsb\\. L\\.J\\.|Pitts\\. R\\.|Port\\.|P\\.R\\. Fed\\.|Pow\\. Surr\\.|Mich\\. Pr\\.|Singer Prob\\. Cas\\.|N\\.Y\\. Proc\\. Ct\\. Ass\\.|P\\.R\\.|Rec\\. Q\\. Ct\\.|Rec\\. Ct\\. Assistants|Rec\\. Co\\. Ch\\. \\(S\\.C\\.\\)|Rec\\. Ct\\. Gen\\. Sess\\.|Rec\\. Bucks\\. Co\\. \\(Pa\\.\\)|Rec\\. T\\. Warwick \\(R\\.I\\.\\)|Rec\\. Ct\\. Ches\\. Co\\. Pa\\.|Rec\\. Co\\. Ct\\.|Rec\\. V\\.A\\. Ct\\. \\(R\\.I\\.\\)|Redf\\.|Ct\\. Cl\\.|Mich\\. Ct\\. Cl\\.|App\\. D\\.C\\.|Bro\\. Com\\. P\\.|Ashm\\. \\(Pa\\.\\)|Conn\\. Super\\. Ct\\.|Disney \\(Ohio\\)|Binn\\.|Pen\\. & W\\.|Rawle|S\\.C\\.L\\. \\((Bail\\.|Brev\\.|Bay|Chev\\.|Dud\\.|Harp\\.|[HM]ill|McCord|McMul\\.|Nott & McC\\.|Rice|Rich\\.|Ril\\.|Speers|Strob\\.|Tread\\.)\\)|S\\.C\\. Eq\\. \\(((Bail\\.|Chev\\.|Dud\\.|Harp\\.|Hill|McCord|McMul\\.|Rice|Rich\\.|Ril\\.|Speers|Strobh\\.) Eq\\.|Rich\\. Cas\\.|Des\\.Eq\\.)\\)|Serg\\. & Rawl\\.|Watts & Serg\\.|Whart\\.|Yeates|Handy|Super\\. Ct\\. Jud\\.|Tenn\\.( \\((Cold\\.|Cooke|Hayw\\.|Head|Heisk\\.|Hum\\.|Overt\\.|Meigs|Peck|Sneed|Swan|(Mart\\. & )?Yer\\.)\\))?|Grant|Jahn|Gill|G\\. & J\\.|N\\.Y\\.|Walk\\. Ch\\.|Tenn\\. Crim\\. App\\.|H\\. & J\\.|Wilson|Morris|Watts|D\\.C\\.|Doug\\.|Ark\\. Terr\\. Rep\\.|McGl\\.|Wright|Ohio Ch\\.|Hay\\. & Haz\\.|D\\.C\\. Cir\\.|Brightly|Walker|Ind\\. App\\.|Kan\\. App\\.|Md\\. Ch\\.|Md\\. Ch\\.|Freem\\. Ch\\.|Wilcox|Harr\\. Ch\\.|Miles|McCahon|Greene|Myrick|D\\. Haw\\.|Rep\\. Cont\\. Elect\\. Case\\.|Rep\\. Cont\\. El\\.|Howison|Coffey|Charlton|Brewster|Mass\\. App\\. Div\\.|Mass\\. App\\. Div\\.|Goebel|Vaux|Bradf\\.|T\\.C\\.|B\\.T\\.A\\.|R\\.I\\. Ct\\. Rec\\.|R\\.I\\. Dec\\.|R\\.I\\.|Super\\. Ct\\. \\(R\\.I\\.\\)|Robertson's Super\\. Ct\\. Rep\\.|Rob\\.|Sand\\. Ch\\.|Sandford Super\\. Ct\\. Rep\\.|Sarat\\. Ch\\. Sent\\.|Schuy\\. L\\. Rec\\.|Schuy\\. Reg\\.|Seld\\. Notes|Yates|Parsons|Sick\\. Op\\. Att'y Gen\\.|Silv\\. Ct\\. App\\.|Silv\\. Sup\\.|Smith|Som\\. L\\.J\\.|S\\.C\\.|S\\.D\\.|S\\. ?E\\.|S\\.E\\. ?2d|S\\. E\\. 2d|So\\.( ?[23]d)?|S\\. ?W\\.|S\\.W\\. ?[23]d|S\\. W\\. [23]d|Stew\\.|Stew\\. & P\\.|S\\.C\\.D\\.C\\. \\(N\\.S\\.\\)|N\\.Y\\. Sup\\. Ct\\.|Susq\\. Leg\\. Chron\\.|Sweeney Super\\. Ct\\. Rep\\.|Robards|La\\. App\\. \\(Teiss\\.\\)|Tenn\\. App\\.|Tenn\\. Cas\\.|Tenn\\. Ch\\. R\\.|Tenn\\.|Tex\\. Civ\\. App\\.|Tex\\. Ct\\. App\\.|Tex\\. Crim\\.|Tex\\. L\\. R\\.|Tex\\.|Posey|N\\.J\\. \\(Burlington County Ct\\.\\)|Cin\\. Sup\\. Ct\\. Rep\\.|Com\\. Pl\\. Rep\\.|Pa\\. Dist\\.|Mass\\. Law Rep\\.|Mich\\. N\\.P\\. R\\.|Westchester|Ohio Law Abs\\.|Ohio L\\.R\\.|Ald\\.|Thomp\\. & Cook|Blume Sup\\. Ct\\. Trans\\.|Trans\\. App\\.|Tuck\\. Surr\\.|Tyl\\.|Cl\\. Ct\\.|U\\.S\\. App\\. D\\.C\\.|Ct\\. Int'l Trade|Cust\\. Ct\\.|U\\. ?S\\.|U\\.S\\. \\((Black|Cranch|Dall\\.|How\\.|Pet\\.|Wall\\.|Wheat\\.)\\)|Mann\\. Unrep\\. Cas\\.|Blume Unrep\\. Op\\.|Unrep\\. Tenn\\. Cas\\.|Utah|Utah 2d|Vt\\.|Va\\. Cir\\.|Va\\. Col\\. Dec\\.|Va\\. App\\.|Va\\. Dec\\.|Va\\. \\((Call|Gilmer|Gratt\\.|Hen\\. & M\\.|Leigh|Munf\\.|Patt\\. & Heath|Rand\\.|Rob\\.|Va\\. Cas\\.|Wash\\.)\\)|Va\\.|V\\.I\\.|Wash\\. App\\.|Wash\\. Co\\.\\(Pa\\.\\)|Wash\\.|Wash\\. 2d|Wash\\. Terr\\.|Week\\. No\\. Cas\\. \\(Pa\\.\\)|Wend\\.|Wes\\. C\\.L\\.J\\.|Tribal|A\\. ?[23]d|B\\.R\\.|F\\. App'?x\\.?|Haw\\.|M\\.J\\.|N\\.Y\\.S\\. 2d|N\\.Y\\.S\\.|Vet\\. App\\.|W\\. Va\\.|Wheel\\. Cr\\. Cas\\.|Wis\\.( 2d)?|Wyo\\.|Yates Sel\\. Cas\\.|York Leg\\. Rec\\.) (?<page>\\d+)\\b(,?( at)? (?<pincite>\\d+)(([-‑–]| to | through )(?<_pincite_end>\\d+)|(,? )?(footnote|f?n\\.) ?(?<footnote>\\d+))?\\b(?! \\w))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "reporter",
                "case": "lower"
            },
            {
                "token": "reporter",
                "sub": [
                    "[.()&,']",
                    ""
                ]
            },
            {
                "token": "reporter",
                "sub": [
                    " ",
                    "-"
                ]
            },
            {
                "token": "reporter",
                "optionalLookup": {
                    "a-2d": "a2d",
                    "a-3d": "a3d",
                    "ad-2d": "ad2d",
                    "ad-3d": "ad3d",
                    "calapp": "cal-app",
                    "cal-?app-?2d": "cal-app-2d",
                    "cal-?app-?3d": "cal-app-3d",
                    "cal-?app-?4th": "cal-app-4th",
                    "cal-?app-?5th": "cal-app-5th",
                    "caldistct": "cal-dist-ct",
                    "calsuperct": "cal-super-ct",
                    "calunrep": "cal-unrep",
                    "cal2d": "cal-2d",
                    "cal3d": "cal-3d",
                    "cal4th": "cal-4th",
                    "cal5th": "cal-5th",
                    "fed-appx": "f-appx",
                    "f-2d": "f2d",
                    "f-3d": "f3d",
                    "fsupp": "f-supp",
                    "fsupp2d": "f-supp-2d",
                    "fsupp3d": "f-supp-3d",
                    "misc-2d": "misc2d",
                    "misc-3d": "misc3d",
                    "n-e": "ne",
                    "ne-2d": "ne2d",
                    "n-e-2d": "ne2d",
                    "ne-3d": "ne3d",
                    "n-e-3d": "ne3d",
                    "n-w": "nw",
                    "nw-2d": "nw2d",
                    "n-w-2d": "nw2d",
                    "ny-2d": "ny2d",
                    "ny-3d": "ny3d",
                    "p-2d": "p2d",
                    "p-3d": "p3d",
                    "s-e": "se",
                    "se-2d": "se2d",
                    "s-e-2d": "se2d",
                    "so-2d": "so2d",
                    "so-3d": "so3d",
                    "s-w": "sw",
                    "sw-2d": "sw2d",
                    "s-w-2d": "sw2d",
                    "sw-3d": "sw3d",
                    "s-w-3d": "sw3d",
                    "u-s": "us"
                }
            }
        ]
    },
    {
        "name": "U.S. Caselaw (CourtListener)",
        "defaults": {},
        "URL": [
            "https://www.courtlistener.com/c/{_reporter}/{volume}/{page}/"
        ],
        "regexes": [
            "(?<!\\w)(?<volume>\\d+) (?<_reporter>Cal\\. ?Rptr\\.( ?[23]d\\.?)?|L\\. ?Ed\\.?( ?[23]d\\.?)?|S\\. ?Ct\\.?|U\\.S\\. ?LEXIS) (?<page>\\d+)\\b(,?( at)? (?<pincite>\\d+)(([-‑–]| to | through )(?<_pincite_end>\\d+)|(,? )?(footnote|f?n\\.) ?(?<footnote>\\d+))?\\b(?! \\w))?(?!\\w)"
        ],
        "operations": [
            {
                "token": "_reporter",
                "optionalLookup": {
                    "U\\.?S\\.? ?(Lexis|LEXIS)": "U.S. LEXIS",
                    "Cal\\. ?Rptr\\.": "Cal. Rptr.",
                    "Cal\\. ?Rptr\\. ?2d": "Cal. Rptr. 2d",
                    "Cal\\. ?Rptr\\. ?3d": "Cal. Rptr. 3d",
                    "L\\. ?Ed\\.?": "L. Ed.",
                    "L\\. ?Ed\\.? ?2d": "L. Ed. 2d",
                    "L\\. ?Ed\\.? ?3d": "L. Ed. 3d",
                    "S\\. ?Ct\\.?": "S. Ct."
                }
            },
            {
                "token": "_reporter",
                "case": "lower",
                "output": "reporter"
            },
            {
                "token": "reporter",
                "sub": [
                    "[.()&,']",
                    ""
                ]
            },
            {
                "token": "reporter",
                "sub": [
                    " ",
                    "-"
                ]
            }
        ]
    }
];


class Citation {
  constructor(template, text) {
    // first, try matching the template
    let regexMatch = false;
    for (var r in template['regexes']) {
      regexMatch = text.match(new RegExp(template['regexes'][r], 'i'));
      if (regexMatch) {
        break;
      }
    }
    if (regexMatch) {
      for (var group in regexMatch.groups) {
        if (typeof group !== 'undefined') {
        }
      }
    }
    else {
      throw Error("The given query does not match the given template.");
    }
    
    this.tokens = regexMatch.groups;
    this.text = text;
    this.template = template['name'];
    
    // this variable will become this.processedTokens
    var tokens = {}
    Object.assign(tokens, this.tokens);
    
    // set default values for missing tokens
    for (var d in template.defaults) {
      if (!tokens[d]) {
        tokens[d] = template.defaults[d];
      }
    }
    
    // apply predefined operations to the found tokens
    let appliedAnOperation = false;
    function titleCase (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
    for (var o in template.operations) {
      var operation = template.operations[o];
      var inputValue = tokens[operation['token']];
      
      // skip tokens that were not set
      if (inputValue === undefined) {
        continue;
      }
      else {
        appliedAnOperation = true;
      }
      
      // determine output token
      if ('output' in operation) {
        var output = operation['output'];
      }
      else {
        var output = operation['token'];
      }
      
      // handle case modification
      if ('case' in operation) {
        if (operation['case'] == 'upper') {
          tokens[output] = inputValue.toUpperCase();
        }
        else if (operation['case'] == 'lower') {
          tokens[output] = inputValue.toLowerCase();
        }
        else if (operation['case'] == 'title') {
          tokens[output] = inputValue.replace(/\w\S*/g, titleCase);
        }
      }
      
      // handle regex substitution
      if ('sub' in operation) {
        let regex = new RegExp(operation['sub'][0], 'ig');
        let outputValue = inputValue.replace(regex, operation['sub'][1]);
        tokens[output] = outputValue;
      }
      
      // handle regex lookups
      let lookupTypes = ['lookup', 'optionalLookup'];
      for (var t in lookupTypes) {
        if (lookupTypes[t] in operation) {
          let outputValue;
          
          for (var key in operation[lookupTypes[t]]) {
            let regexStr = '^(' + key + ')$';
            if (tokens[operation['token']].match(new RegExp(regexStr, 'i'))) {
              outputValue = operation[lookupTypes[t]][key];
              break;
            }
          }
          if (outputValue !== undefined) {
            tokens[output] = outputValue;
          }
          else if (lookupTypes[t] == 'optionalLookup') {
          }
          else {
            throw Error(
              "Sorry, I can't find that" + operation['token'] + " in the " + template
            );
          }
        }
      }
      
      // Bidirectional conversion between digits and roman numerals. This method
      // is lazy and only goes up to 100, but if you need it to go higher, you
      // can just add more numeral-digit pairs to the list.
      if ('numberFormat' in operation) {
        let numerals = [
          ['I', '1'], ['II', '2'], ['III', '3'], ['IV', '4'], ['V', '5'],
          ['VI', '6'], ['VII', '7'], ['VIII', '8'], ['IX', '9'], ['X', '10'],
          ['XI', '11'], ['XII', '12'], ['XIII', '13'], ['XIV', '14'],
          ['XV', '15'], ['XVI', '16'], ['XVII', '17'], ['XVIII', '18'],
          ['XIX', '19'], ['XX', '20'], ['XXI', '21'], ['XXII', '22'],
          ['XXIII', '23'], ['XXIV', '24'], ['XXV', '25'], ['XXVI', '26'], 
          ['XXVII', '27'], ['XXVIII', '28'], ['XXIX', '29'], ['XXX', '30'],
          ['XXXI', '31'], ['XXXII', '32'], ['XXXIII', '33'], ['XXXIV', '34'],
          ['XXXV', '35'], ['XXXVI', '36'], ['XXXVII', '37'], ['XXXVIII', '38'],
          ['XXXIX', '39'], ['XL', '40'], ['XLI', '41'], ['XLII', '42'],
          ['XLIII', '43'], ['XLIV', '44'], ['XLV', '45'], ['XLVI', '46'],
          ['XLVII', '47'], ['XLVIII', '48'], ['XLIX', '49'], ['L', '50'],
          ['LI', '51'], ['LII', '52'], ['LIII', '53'], ['LIV', '54'],
          ['LV', '55'], ['LVI', '56'], ['LVII', '57'], ['LVIII', '58'],
          ['LIX', '59'], ['LX', '60'], ['LXI', '61'], ['LXII', '62'],
          ['LXIII', '63'], ['LXIV', '64'], ['LXV', '65'], ['LXVI', '66'],
          ['LXVII', '67'], ['LXVIII', '68'], ['LXIX', '69'], ['LXX', '70'],
          ['LXXI', '71'], ['LXXII', '72'], ['LXXIII', '73'], ['LXXIV', '74'],
          ['LXXV', '75'], ['LXXVI', '76'], ['LXXVII', '77'], ['LXXVIII', '78'],
          ['LXXIX', '79'], ['LXXX', '80'], ['LXXXI', '81'], ['LXXXII', '82'],
          ['LXXXIII', '83'], ['LXXXIV', '84'], ['LXXXV', '85'],
          ['LXXXVI', '86'], ['LXXXVII', '87'], ['LXXXVIII', '88'],
          ['LXXXIX', '89'], ['XC', '90'], ['XCI', '91'], ['XCII', '92'],
          ['XCIII', '93'], ['XCIV', '94'], ['XCV', '95'], ['XCVI', '96'],
          ['XCVII', '97'], ['XCVIII', '98'], ['XCIX', '99'], ['C', '100']
        ];
        // determine which format is being used to look up the other
        let key, value;
        if (operation['numberFormat'] == 'roman') {
          key = 1;
          value = 0;
        }
        else if (operation['numberFormat'] == 'digit') {
          key = 0;
          value = 1;
        }
        // perform the appropriate lookup, outputting the input value
        // unchanged if the lookup fails
        tokens[output] = inputValue;
        for (var pair in numerals) {
          if (numerals[pair][key].match(inputValue.toUpperCase())) {
            tokens[output] = numerals[pair][value];
            break;
          }
        }
      }
      
      // left pad with zeros
      if ('lpad' in operation) {
        let outputValue = inputValue;
        while (outputValue.length < operation['lpad']) {
          outputValue = '0' + outputValue;
        }
        tokens[output] = outputValue
      }
    }
    if (appliedAnOperation) {
    }
    this.processedTokens = tokens;
    
    // finally, fill in placeholders in the URL template to generate the
    // URL, skipping any sections of the template that contain a missing
    // placeholder.
    let URL = [];
    let missingPlaceholder = new RegExp("\\{.+\\}");
    for (var part in template.URL) {
      let URLPart = template.URL[part]
      for (var k in this.processedTokens) {
        if (typeof this.processedTokens[k] === 'undefined') {
          continue;
        }
        let placeholder = new RegExp("\\{" + k + "\\}", 'g');
        URLPart = URLPart.replace(placeholder, this.processedTokens[k]);
      }
      if (!URLPart.match(missingPlaceholder)) {
        URL.push(URLPart);
      }
    }
    this.URL = URL.join('');
  }
}


// perform each step to convert query into URL
function getUrlForQuery(query) {
  let citation = getCitations(query, true);
  return citation.URL;
}

// check the query against each template one-by-one,
// and return the tokens and template of the first match
const MATCH_ERROR = "Sorry, I couldn't recognize that citation.";
function getCitations(query, returnFirst) {
  var citations = [];
  for (var i in templates) {
    let citation = false;
    try {
      citation = new Citation(templates[i], query);
      if (returnFirst) { return citation }
      citations.push(citation);
    }
    catch (error) {
      continue;
    }
  }
  if (returnFirst) {
    throw Error(MATCH_ERROR);
  }
  return citations;
}
