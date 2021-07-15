
// This script was made with CiteURL v10.0.0, an extensible framework
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
        "name": "U.S. Caselaw (CAP)",
        "regexes": [
            "(?<!\\w)(?<volume>\\d+)(?!\\w) (?<reporter>Abb\\. Ct\\. App\\.|Abb\\.N\\. Cas\\.|Abb\\. Pr\\.|Abb\\. Pr\\. \\(n\\.s\\.\\)|Adams Co\\. L\\.J\\.|Add\\.|Franklin Co\\. Legal J\\.|Aik\\.|Ala\\. App\\.|Ala\\.|Alaska Fed\\.|Alaska|Am\\. Samoa( [23]d)?|Ohio App\\. Unrep\\.|Ant\\. N\\.P\\. Cas\\.|A\\.D\\. ?2d|A\\.D\\.|A\\.D\\. ?3d|Ariz\\. App\\.|Ariz\\.|Ark\\. App\\.|Ark\\.|Armstrong\\. Election Cases|A\\.|Balt\\. C\\. Rep\\.|Barb\\. Ch\\.|Barb\\.|B\\. Co\\. Leg\\. J\\.|Berk's Co\\. L\\.J\\.\\.|Blackf\\.|Blair Co\\. L\\.R\\.|Blair Co\\. L\\.R\\. 2d|Bosworth Super\\. Ct\\. Rep\\.|Bradford Co\\. L\\.J\\.|Brad\\.|Brayt\\.|Bucks Co\\. L\\.R\\.|Bur\\.|Butler Co\\. Legal J\\.|E\\.D\\. Pa\\.|Cai\\. Cas\\.|Cai\\.|Cal\\.( ?App\\.)?( ?([23]d|[45]th))?|Cal\\. ?Dist\\. Ct\\.|Cal\\. ?Super\\. ?Ct\\.|Cal\\. ?Unrep\\.|Cambria Co\\. L\\.J\\.|Cambria Co\\. Rep\\.|Carbon Co\\. L\\.J\\.|N\\.J\\. \\(Manumission\\)|Tapp\\. Rep\\.|D\\. Pa\\.|Ohio|Monaghan|Sadler|C\\.C\\.L\\.J\\.|C\\.C\\.L\\.J\\. 2d|Chand\\.|Charlton Rep\\.|Ches\\. Co\\. Rep\\.|D\\. Chip\\.|N\\. Chip\\.|Mun\\.  L\\. Rep\\.|Hosea's Rep\\.|N\\.Y\\. City Ct\\. Rep\\.|Cl\\. Ch\\.|Cole\\. & Cai\\. Cas\\.|Cole\\. Cas\\.|Colo\\. App\\.|Colo\\. L\\. Rep\\.|Colo\\. N\\. P\\.|Colo\\.|Willson|White & W\\.|King's Conflicting Cases|Conn\\. App\\.|Conn\\. Cir\\. Ct\\.|Kirby|Root|Conn\\.|Conn\\. Supp\\.|Connoly Sur\\. Rep\\.|Ct\\. Cl\\.|C\\.C\\.P\\.A\\.|Ct\\. Cust\\.|Cow\\.|Craw\\. Co\\. Leg\\. J\\.|Cumberland L\\.J\\.|Cust\\. B\\. & Dec\\.|Dakota|Dallam|Dall\\.|Daly \\(N\\.Y\\.\\)|Dau\\. Co\\. Rep\\.|Day|T\\.C\\.A\\.|P\\.R\\. Dec\\.|Teiss\\.|Va\\. Ch\\. Dec\\.|Pears\\.|Smith|Ga\\. Super\\. Ct\\.|Georgia Decisions|C\\.M\\.A\\.|D\\.C\\.( \\((Cranch|MacArth\\.( & M\\.)?|Mackey|patent|Tuck\\. & Cl\\.)\\))?|Del\\. Cas\\.|Del\\. Ch\\.|Del\\. Co\\. Reps\\.|Del\\.( \\((Boyce|Harr\\.|Houst\\.|Marv\\.|Penne\\.)\\))?|Dem\\. Sur\\.|Denio|Docket|Dudley Rep\\.|Duer Super\\. Ct\\. Rep\\.|Edm\\. Sel\\. Cas\\.|E\\.D\\. Smith|Edw\\. Ch\\.|Erie\\. Co\\. L\\.J\\.|P\\.R\\. Sent\\.|Fay\\. L\\.J\\.|F\\.( ?Supp\\.)?( ?[23]d)?|F\\. Cas\\.|Fed\\. Cl\\.|F\\.R\\.D\\.|Fla\\.|Fla\\. Supp\\.( 2d)?|Ga\\. App\\.|Ga\\. L\\. Rep\\.|Ga\\.|Gault|Gibb\\. Surr\\.|Guam|Hall Super\\. Ct\\. Rep\\.|H\\. & G\\.|Haw\\. App\\.|Haw\\.|Haz\\. Pa\\. Reg\\.|Hill & Den\\.|Hill|Hilt\\.|Hoff\\. Ch\\.|Hopk\\. Ch\\.|How\\. App\\. Cas\\.|How\\. Pr\\.( \\(n\\.s\\.\\))?|Idaho|Ill\\. App\\.( [23]d)?|Ill\\. Cir\\. Ct\\. Rep\\.|Ill\\. Ct\\. Cl\\.|Ill\\.( \\((Scam|Breese|Gilm\\.)\\))?|Ill\\. 2d|Ind\\. App\\.|Ind\\. L\\. Rep\\.|Ind\\.|Indian Terr\\.|Iowa|Jeff\\.|Johns\\.( Cas\\.| Ch\\.)?|Jones and Spencer's Super\\. Ct\\. Rep\\.|Edsall|Pa\\. \\(Admiralty\\)|Kan\\. App\\. 2d|Kan\\.|Keyes|Ky\\. Op\\.|Ky\\.( \\((A\\.K\\. Marsh\\.|(T\\.)?B\\. Mon\\.|Bibb|Bush|Dana|Duv\\.|Hard\\.|Hughes|J\\.J\\. Marsh\\.|Met\\.|Litt\\.( Sel\\. Cas\\.)?|Sneed)\\))?|Lack\\. Bar  R\\.|Lack\\. Jur\\.|Lack\\. L\\. N\\.|Lack\\. L\\.R\\.|Lanc\\. Bar|Lanc\\. L\\. Rev\\.|Lans\\. Ch\\.|Lans\\.|Law\\. L\\.J\\.|Law Times( \\(N\\.S\\.\\))?|Lebanon Co\\. L\\.J\\.|Foster|(Pa\\. )?Leg\\. Gaz\\.|Gunby|Leg\\. Rec\\. Rep\\.|Lehigh Co\\. L\\.J\\.|Lehigh Val\\. L\\. Rep\\.|Liquor Tax Rep\\.|Lock\\. Rev\\. Cas\\.|La\\.( A(nn|pp)\\.)?|Luz\\. L\\.[JO]\\.|Luz\\. Leg\\. Reg\\.|Lycoming R\\.|Magis\\. & Const\\.|Me\\.|McGrath|Mart\\. \\([no]\\.s\\.\\)|Md\\. App\\.|Md\\.|H\\. & McH\\.|Mass\\.( \\((Allen|Cush|Gray|Met\\.|Pick\\.|Tyng|Will\\.)\\))?|Mass\\. App\\. Ct\\.|Mass\\. App\\. Dec\\.|Davis L\\. Ct\\. Cas\\.|Mass\\. Supp\\.|Mercer|Mich\\. App\\. |Howell N\\.P\\.|Mich\\.|M\\.C\\.L\\.J\\.|Mills Surr\\.|Minn\\.|Minor|Va\\.|Miss\\. Ct\\. Rec\\.|Miss\\. Dec\\.|Miss\\.(\\((Howard|S\\. & M\\.( Ch\\.)?|Walker)\\))?|Mor\\. St\\. Cas\\.|Mo\\. App\\.|Mo\\.|Monroe L\\.R\\.|Mont\\.|Mont\\. Co\\. L\\. Rep\\.|Navajo Rptr\\.|Neb\\. App\\.|Neb\\.|Nev\\.|N\\.H\\.|N\\.J\\. Eq\\.|N\\.J\\.L\\.|N\\.J\\. Misc\\.|N\\.J\\.|N\\.J\\. Super\\.|N\\.J\\. Tax Ct\\.|N\\.M\\.|N\\.Y\\. Crim\\.|Misc\\.( ?[23]d)?|N\\.Y\\.( ?[23]d)?|N\\.Y\\. St\\. Rptr\\.|Northam\\. Law Rep\\.|N\\.C\\. App\\.|N\\.C\\.( \\((Busb\\.( Eq\\.?)?|Cam\\. & Nor\\.|Car\\. L\\. Rep\\.|Dev\\.( & Bat\\.)?( Eq\\.)?|Hawks|Hayw\\.|(Ired\\.?|Jones|Mart\\.|Phil\\.)( Eq\\.?)?|Mur\\.?|Tay(lor|\\.?)|Win\\.?)\\))?|N\\.D\\.|N\\. ?E\\.|N\\.E\\. ?[23]d|N\\. E\\. [23]d|N\\. Mar\\. I\\. Commw\\.|N\\. Mar\\. I\\.|Northum\\. Co\\. Leg\\. N\\.|Northumb\\. L\\.J\\.|N\\. ?W\\.|N\\.W\\. ?2d|N\\. W\\. 2d|Ohio App\\.( [23]d)?|Ohio C\\.C\\. Dec\\.|Ohio C\\.C\\. \\(N\\.S\\.\\)|Ohio Cir\\. Dec\\.|Ohio Ct\\. App\\.|Ohio Misc\\.|Ohio Misc\\. 2d|Ohio Nisi Prius|Ohio Nisi Prius \\(N\\.S\\.\\)|Ohio Op\\.( [23]d)?|Ohio St\\.( [23]d| \\(n\\.s\\.\\))?|Okla\\. Crim\\.|Okla\\.|Olwine's L\\.J\\.|Or\\.|Or\\. App\\.|Or\\. Tax|P\\.( ?[23]d)?|Paige Ch\\.|Park\\. Crim\\. Rep\\.|Pelt\\.|Pa\\. L\\. Rec\\.|Pa\\. Commw\\.|Pa\\. Corp\\. R\\.|Pa\\. Co\\. Ct\\.|Pa\\. D\\. & C\\.( ([23]d|[45]th))?|Pa\\. Fid\\.( [23]d)?|Pa\\. Just\\. L\\. Rep\\.|Pa\\. L\\.J\\. Rep\\.|Pa\\.|Pa\\. Super\\. Ct\\.|Pennyp\\.|Phila\\. Co\\. R\\.|Phila\\. Reports|Pin\\.|Pittsb\\. L\\.J\\.|Pitts\\. R\\.|Port\\.|P\\.R\\. Fed\\.|Pow\\. Surr\\.|Mich\\. Pr\\.|Singer Prob\\. Cas\\.|N\\.Y\\. Proc\\. Ct\\. Ass\\.|P\\.R\\.|Rec\\. Q\\. Ct\\.|Rec\\. Ct\\. Assistants|Rec\\. Co\\. Ch\\. \\(S\\.C\\.\\)|Rec\\. Ct\\. Gen\\. Sess\\.|Rec\\. Bucks\\. Co\\. \\(Pa\\.\\)|Rec\\. T\\. Warwick \\(R\\.I\\.\\)|Rec\\. Ct\\. Ches\\. Co\\. Pa\\.|Rec\\. Co\\. Ct\\.|Rec\\. V\\.A\\. Ct\\. \\(R\\.I\\.\\)|Redf\\.|Ct\\. Cl\\.|Mich\\. Ct\\. Cl\\.|App\\. D\\.C\\.|Bro\\. Com\\. P\\.|Ashm\\. \\(Pa\\.\\)|Conn\\. Super\\. Ct\\.|Disney \\(Ohio\\)|Binn\\.|Pen\\. & W\\.|Rawle|S\\.C\\.L\\. \\((Bail\\.|Brev\\.|Bay|Chev\\.|Dud\\.|Harp\\.|[HM]ill|McCord|McMul\\.|Nott & McC\\.|Rice|Rich\\.|Ril\\.|Speers|Strob\\.|Tread\\.)\\)|S\\.C\\. Eq\\. \\(((Bail\\.|Chev\\.|Dud\\.|Harp\\.|Hill|McCord|McMul\\.|Rice|Rich\\.|Ril\\.|Speers|Strobh\\.) Eq\\.|Rich\\. Cas\\.|Des\\.Eq\\.)\\)|Serg\\. & Rawl\\.|Watts & Serg\\.|Whart\\.|Yeates|Handy|Super\\. Ct\\. Jud\\.|Tenn\\.( \\((Cold\\.|Cooke|Hayw\\.|Head|Heisk\\.|Hum\\.|Overt\\.|Meigs|Peck|Sneed|Swan|(Mart\\. & )?Yer\\.)\\))?|Grant|Jahn|Gill|G\\. & J\\.|N\\.Y\\.|Walk\\. Ch\\.|Tenn\\. Crim\\. App\\.|H\\. & J\\.|Wilson|Morris|Watts|D\\.C\\.|Doug\\.|Ark\\. Terr\\. Rep\\.|McGl\\.|Wright|Ohio Ch\\.|Hay\\. & Haz\\.|D\\.C\\. Cir\\.|Brightly|Walker|Ind\\. App\\.|Kan\\. App\\.|Md\\. Ch\\.|Md\\. Ch\\.|Freem\\. Ch\\.|Wilcox|Harr\\. Ch\\.|Miles|McCahon|Greene|Myrick|D\\. Haw\\.|Rep\\. Cont\\. Elect\\. Case\\.|Rep\\. Cont\\. El\\.|Howison|Coffey|Charlton|Brewster|Mass\\. App\\. Div\\.|Mass\\. App\\. Div\\.|Goebel|Vaux|Bradf\\.|T\\.C\\.|B\\.T\\.A\\.|R\\.I\\. Ct\\. Rec\\.|R\\.I\\. Dec\\.|R\\.I\\.|Super\\. Ct\\. \\(R\\.I\\.\\)|Robertson's Super\\. Ct\\. Rep\\.|Rob\\.|Sand\\. Ch\\.|Sandford Super\\. Ct\\. Rep\\.|Sarat\\. Ch\\. Sent\\.|Schuy\\. L\\. Rec\\.|Schuy\\. Reg\\.|Seld\\. Notes|Yates|Parsons|Sick\\. Op\\. Att'y Gen\\.|Silv\\. Ct\\. App\\.|Silv\\. Sup\\.|Smith|Som\\. L\\.J\\.|S\\.C\\.|S\\.D\\.|S\\. ?E\\.|S\\.E\\. ?2d|S\\. E\\. 2d|So\\.( ?[23]d)?|S\\. ?W\\.|S\\.W\\. ?[23]d|S\\. W\\. [23]d|Stew\\.|Stew\\. & P\\.|S\\.C\\.D\\.C\\. \\(N\\.S\\.\\)|N\\.Y\\. Sup\\. Ct\\.|Susq\\. Leg\\. Chron\\.|Sweeney Super\\. Ct\\. Rep\\.|Robards|La\\. App\\. \\(Teiss\\.\\)|Tenn\\. App\\.|Tenn\\. Cas\\.|Tenn\\. Ch\\. R\\.|Tenn\\.|Tex\\. Civ\\. App\\.|Tex\\. Ct\\. App\\.|Tex\\. Crim\\.|Tex\\. L\\. R\\.|Tex\\.|Posey|N\\.J\\. \\(Burlington County Ct\\.\\)|Cin\\. Sup\\. Ct\\. Rep\\.|Com\\. Pl\\. Rep\\.|Pa\\. Dist\\.|Mass\\. Law Rep\\.|Mich\\. N\\.P\\. R\\.|Westchester|Ohio Law Abs\\.|Ohio L\\.R\\.|Ald\\.|Thomp\\. & Cook|Blume Sup\\. Ct\\. Trans\\.|Trans\\. App\\.|Tuck\\. Surr\\.|Tyl\\.|Cl\\. Ct\\.|U\\.S\\. App\\. D\\.C\\.|Ct\\. Int'l Trade|Cust\\. Ct\\.|U\\. ?S\\.|U\\.S\\. \\((Black|Cranch|Dall\\.|How\\.|Pet\\.|Wall\\.|Wheat\\.)\\)|Mann\\. Unrep\\. Cas\\.|Blume Unrep\\. Op\\.|Unrep\\. Tenn\\. Cas\\.|Utah|Utah 2d|Vt\\.|Va\\. Cir\\.|Va\\. Col\\. Dec\\.|Va\\. App\\.|Va\\. Dec\\.|Va\\. \\((Call|Gilmer|Gratt\\.|Hen\\. & M\\.|Leigh|Munf\\.|Patt\\. & Heath|Rand\\.|Rob\\.|Va\\. Cas\\.|Wash\\.)\\)|Va\\.|V\\.I\\.|Wash\\. App\\.|Wash\\. Co\\.\\(Pa\\.\\)|Wash\\.|Wash\\. 2d|Wash\\. Terr\\.|Week\\. No\\. Cas\\. \\(Pa\\.\\)|Wend\\.|Wes\\. C\\.L\\.J\\.|Tribal|A\\. ?[23]d|B\\.R\\.|F\\. App'?x\\.?|Haw\\.|M\\.J\\.|N\\.Y\\.S\\. 2d|N\\.Y\\.S\\.|Vet\\. App\\.|W\\. Va\\.|Wheel\\. Cr\\. Cas\\.|Wis\\.( 2d)?|Wyo\\.|Yates Sel\\. Cas\\.|York Leg\\. Rec\\.)(?!\\w) (?<page>\\d+)(?!\\w)(,?( at)? (?<pincite>\\d+)(?!\\w)(,? ((foot)?note|f?n\\.?) ?(?<footnote>\\d+)(?!\\w))?\\b(?! \\w))?(?!=\\w)"
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
        ],
        "URL": [
            "https://cite.case.law/{reporter}/{volume}/{page}",
            "#p{pincite}"
        ]
    },
    {
        "name": "U.S. Caselaw (CourtListener)",
        "regexes": [
            "(?<!\\w)(?<volume>\\d+)(?!\\w) (?<reporter>Cal\\. ?App\\. ?Supp\\. ?2d|Cal\\. ?Rptr\\.( ?[23]d\\.?)?|Ill\\. ?Dec\\.|L\\. ?Ed\\.?( ?[23]d\\.?)?|S\\. ?Ct\\.?|U\\.S\\. ?LEXIS)(?!\\w) (?<page>\\d+)(?!\\w)(,?( at)? (?<pincite>\\d+)(?!\\w)(,? ((foot)?note|f?n\\.?) ?(?<footnote>\\d+)(?!\\w))?\\b(?! \\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "reporter",
                "optionalLookup": {
                    "U\\.?S\\.? ?(Lexis|LEXIS)": "U.S. LEXIS",
                    "Cal\\. ?App\\. ?Supp\\. ?2d": "Cal.App.Supp.2d",
                    "Cal\\. ?Rptr\\.": "Cal. Rptr.",
                    "Cal\\. ?Rptr\\. ?2d": "Cal. Rptr. 2d",
                    "Cal\\. ?Rptr\\. ?3d": "Cal. Rptr. 3d",
                    "Ill\\.Dec\\.": "Ill. Dec.",
                    "L\\. ?Ed\\.?": "L. Ed.",
                    "L\\. ?Ed\\.? ?2d": "L. Ed. 2d",
                    "L\\. ?Ed\\.? ?3d": "L. Ed. 3d",
                    "S\\. ?Ct\\.?": "S. Ct."
                }
            }
        ],
        "URL": [
            "https://www.courtlistener.com/c/{reporter}/{volume}/{page}"
        ]
    },
    {
        "name": "National Labor Relations Board Decisions",
        "regexes": [
            "(?<!\\w)(?<volume>\\d+)(?!\\w) N\\.? ?L\\.? ?R\\.? ?B\\.? (?<page>\\d+)(?!\\w)(, (?<pincite>\\d+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [],
        "URL": [
            "https://www.nlrb.gov/cases-decisions/decisions/board-decisions?search_term=&volume={volume}&page_number={page}"
        ]
    },
    {
        "name": "National Labor Relations Board Slip Opinions",
        "regexes": [
            "(?<!\\w)(?<volume>\\d+)(?!\\w) N\\.? ?L\\.? ?R\\.? ?B\\.? (Slip Op\\. )?No\\. (?<slip>\\d+)(?!\\w)(?!=\\w)"
        ],
        "operations": [],
        "URL": [
            "https://www.nlrb.gov/cases-decisions/decisions/board-decisions?search_term=&volume={volume}&slip_opinion_number={slip}"
        ]
    },
    {
        "name": "U.S. Constitution",
        "defaults": {
            "name regex": "(United States|U\\.? ?S\\.?) ?Const(itution|\\.?)"
        },
        "regexes": [
            "(?<!\\w)(United States|U\\.? ?S\\.?) ?Const(itution|\\.?),? [Aa]rt(icle|\\.?) ?(?<article>\\d|[ivIV]{1,3}|[Oo]ne|[Tt](woo|hree|welve|hirteen)|[Ff](our(teen)?|ive|ifteen)|[Ss](ix(teen)?|even(teen)?)|[Ee]ight(een)?|[Nn]ine(teen)?|[Tt]en|[Ee]leven)(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|§§?) ?(?<section>\\d+|[IVXivx]+)(?!\\w)(,? [Cc]l(ause|\\.?) ?(?<clause>\\d+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.?) ?(?<article>\\d|[ivIV]{1,3}|[Oo]ne|[Tt](woo|hree|welve|hirteen)|[Ff](our(teen)?|ive|ifteen)|[Ss](ix(teen)?|even(teen)?)|[Ee]ight(een)?|[Nn]ine(teen)?|[Tt]en|[Ee]leven)(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|§§?) ?(?<section>\\d+|[IVXivx]+)(?!\\w)(,? [Cc]l(ause|\\.?) ?(?<clause>\\d+)(?!\\w))?)? [Oo]f [Tt]he (United States|U\\.? ?S\\.?) ?Const(itution|\\.?)(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "number_style": "digit"
            },
            {
                "token": "article",
                "number_style": "roman",
                "output": "article_roman"
            }
        ],
        "URL": [
            "https://constitution.congress.gov/browse/",
            "article-{article}",
            "#{article_roman}_S{section}",
            "_C{clause}"
        ]
    },
    {
        "name": "U.S. Constitution Amendments",
        "defaults": {
            "name regex": "(United States|U\\.? ?S\\.?) ?Const(itution|\\.?)"
        },
        "regexes": [
            "(?<!\\w)(United States|U\\.? ?S\\.?) ?Const(itution|\\.?),? [Aa]m(end(ment|\\.)|dt?\\.?) ?(?<amendment>\\d{1,2}(st|nd|rd|th)?|[xivXIV]+|([Tt]wenty(-| )?)?([Ff]irst|[Ss]econd|[Tt]hird|[Ff]ourth|[Ff]ifth|[Ss]ixth|[Ss]eventh|[Ee]ighth|[Nn]inth)|[Tt]enth|[Ee]leventh|[Tt]welfth|([Tt]hir|[Ff]our|[Ff]if|[Ss]ix|[Ss]even|[Ee]igh|[Nn]ine)teenth|[Tt]wentieth)(?!\\w)(,? ([Ss]ec(tions?|s?\\.?)|§§?) ?(?<section>\\d{1,2}|[ivxIVX]{1,5})(?!\\w)(,? [Cc]l(ause|\\.?) ?(?<clause>\\d+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)(([Ss]ec(tions?|t?s?\\.?)|§§?) ?(?<section>\\d{1,2}|[ivxIVX]{1,5})(?!\\w)(,? [Cc]l(ause|\\.?) ?(?<clause>\\d+)(?!\\w))? of )?([Tt]he )?(?<amendment>\\d{1,2}(st|nd|rd|th)?|[xivXIV]+|([Tt]wenty(-| )?)?([Ff]irst|[Ss]econd|[Tt]hird|[Ff]ourth|[Ff]ifth|[Ss]ixth|[Ss]eventh|[Ee]ighth|[Nn]inth)|[Tt]enth|[Ee]leventh|[Tt]welfth|([Tt]hir|[Ff]our|[Ff]if|[Ss]ix|[Ss]even|[Ee]igh|[Nn]ine)teenth|[Tt]wentieth)(?!\\w) [Aa]mendment ([Oo]f|[Tt]o) the (United States|U\\.? ?S\\.?) ?Const(itution|\\.?)(?!=\\w)",
            "(?<!\\w)[Aa]m(end(ment|\\.)|dt?\\.?) ?(?<amendment>\\d{1,2}(st|nd|rd|th)?|[xivXIV]+|([Tt]wenty(-| )?)?([Ff]irst|[Ss]econd|[Tt]hird|[Ff]ourth|[Ff]ifth|[Ss]ixth|[Ss]eventh|[Ee]ighth|[Nn]inth)|[Tt]enth|[Ee]leventh|[Tt]welfth|([Tt]hir|[Ff]our|[Ff]if|[Ss]ix|[Ss]even|[Ee]igh|[Nn]ine)teenth|[Tt]wentieth)(?!\\w)(,? ([Ss]ec(tions?|s?\\.?)|§§?) ?(?<section>\\d{1,2}|[ivxIVX]{1,5})(?!\\w)(,? [Cc]l(ause|\\.?) ?(?<clause>\\d+)(?!\\w))?)?(?! of)(?!=\\w)",
            "(?<!\\w)(([Ss]ec(tions?|t?s?\\.?)|§§?) ?(?<section>\\d{1,2}|[ivxIVX]{1,5})(?!\\w)(,? [Cc]l(ause|\\.?) ?(?<clause>\\d+)(?!\\w))? of )?([Tt]he )?(?<amendment>\\d{1,2}(st|nd|rd|th)?|[xivXIV]+|([Tt]wenty(-| )?)?([Ff]irst|[Ss]econd|[Tt]hird|[Ff]ourth|[Ff]ifth|[Ss]ixth|[Ss]eventh|[Ee]ighth|[Nn]inth)|[Tt]enth|[Ee]leventh|[Tt]welfth|([Tt]hir|[Ff]our|[Ff]if|[Ss]ix|[Ss]even|[Ee]igh|[Nn]ine)teenth|[Tt]wentieth)(?!\\w) [Aa]mendment(?! to)(?!=\\w)"
        ],
        "operations": [
            {
                "token": "amendment",
                "number_style": "digit"
            },
            {
                "token": "section",
                "number_style": "digit"
            },
            {
                "token": "article",
                "number_style": "roman",
                "output": "article_roman"
            }
        ],
        "URL": [
            "https://constitution.congress.gov/browse/",
            "amendment-{amendment}/",
            "#{amendment}_S{section}",
            "_C{clause}"
        ]
    },
    {
        "name": "U.S. Code",
        "defaults": {
            "name regex": "U\\. ?S\\. ?C(ode|\\.)( ?A(nn(otated|\\.)|\\.)| ?S(erv(ice|\\.)|\\.?))?|USC[AS]?|United States Code"
        },
        "regexes": [
            "(?<!\\w)([Tt]itle )?(?<title>\\d+)(?!\\w),? (U\\. ?S\\. ?C(ode|\\.)( ?A(nn(otated|\\.)|\\.)| ?S(erv(ice|\\.)|\\.?))?|USC[AS]?|United States Code)(,? )?(((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.)))? ?(?<section>\\d[\\w.-]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)",
            "(?<!\\w)[Tt]itle (?<title>\\d+)(?!\\w),? (((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.)))? ?(?<section>\\d[\\w.-]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))? of the (U\\. ?S\\. ?C(ode|\\.)( ?A(nn(otated|\\.)|\\.)| ?S(erv(ice|\\.)|\\.?))?|USC[AS]?|United States Code)(?!=\\w)",
            "(?<!\\w)(((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.)))? ?(?<section>\\d[\\w.-]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))? of [Tt]itle (?<title>\\d+)(?!\\w) of the (U\\. ?S\\. ?C(ode|\\.)( ?A(nn(otated|\\.)|\\.)| ?S(erv(ice|\\.)|\\.?))?|USC[AS]?|United States Code)(?!=\\w)"
        ],
        "operations": [
            {
                "token": "subsection",
                "sub": [
                    "\\)\\(",
                    "_"
                ]
            },
            {
                "token": "subsection",
                "sub": [
                    "[()]",
                    ""
                ]
            }
        ],
        "URL": [
            "https://www.law.cornell.edu/uscode/text/{title}/{section}",
            "#{subsection}"
        ]
    },
    {
        "name": "U.S. Public Laws",
        "regexes": [
            "(?<!\\w)Pub(\\.?|lic) ?L(\\.?|aw) ?(No\\.?)? ?(?<congress>\\d+)(?!\\w)[–‑-](?<law>\\d+)(?!\\w)(?!=\\w)"
        ],
        "operations": [],
        "URL": [
            "https://uscode.house.gov/statutes/pl/{congress}/{law}.pdf"
        ]
    },
    {
        "name": "U.S. Statutes at Large",
        "regexes": [
            "(?<!\\w)(?<volume>\\d+)(?!\\w) Stat\\.? (?<page>\\d([,\\d]*\\d)?)(?!\\w)(,? (?<pincite>\\d+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "page",
                "sub": [
                    ",",
                    ""
                ]
            }
        ],
        "URL": [
            "https://www.govinfo.gov/content/pkg/STATUTE-{volume}/pdf/STATUTE-{volume}-Pg{page}.pdf"
        ]
    },
    {
        "name": "Federal Register",
        "regexes": [
            "(?<!\\w)(?<volume>\\d+)(?!\\w) (Fed\\. ?Reg\\.|F\\.? ?R\\.?) (?<page>\\d([,\\d]*\\d)?)(?!\\w)(,? (?<pincite>\\d+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "page",
                "sub": [
                    ",",
                    ""
                ]
            }
        ],
        "URL": [
            "https://www.federalregister.gov/documents/search?conditions[term]={volume}+FR+{page}"
        ]
    },
    {
        "name": "Code of Federal Regulations",
        "defaults": {
            "name regex": "C\\.? ?F\\.? ?R\\.?|Code of Federal Regulations"
        },
        "regexes": [
            "(?<!\\w)([Tt]itle )?(?<title>\\d+)(?!\\w),? (C\\.? ?F\\.? ?R\\.?|Code of Federal Regulations)(,? )?(((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.)))? ?(?<section>\\d[\\w.-]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)",
            "(?<!\\w)[Tt]itle (?<title>\\d+)(?!\\w),? (((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.)))? ?(?<section>\\d[\\w.-]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))? of the (C\\.? ?F\\.? ?R\\.?|Code of Federal Regulations)(?!=\\w)",
            "(?<!\\w)(((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.)))? ?(?<section>\\d[\\w.-]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))? of [Tt]itle (?<title>\\d+)(?!\\w) of the (C\\.? ?F\\.? ?R\\.?|Code of Federal Regulations)(?!=\\w)"
        ],
        "operations": [],
        "URL": [
            "https://ecfr.federalregister.gov/cfr-reference?cfr%5Bdate%5D=current&cfr%5Breference%5D={title} CFR {section}",
            "#p-{section}{subsection}"
        ]
    },
    {
        "name": "Federal Rules of Civil Procedure",
        "defaults": {
            "acronym": "frcp",
            "name": "Fed. R. Civ. P.",
            "name regex": "Civ(il|\\.) ?P(rocedure|(roc?)?\\.)|C\\.? ?P\\.?"
        },
        "regexes": [
            "(?<!\\w)(Fed(eral|\\.) ?R(ules?|\\.)|F\\.? ?R\\.?)( of)? ?(Civ(il|\\.) ?P(rocedure|(roc?)?\\.)|C\\.? ?P\\.?)( [Rr]ule)? (?<rule>\\d+(\\.\\d+)?[a-z]?)(?!\\w)( ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)",
            "(?<!\\w)[Rr]ule (?<rule>\\d+(\\.\\d+)?[a-z]?)(?!\\w)( ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))? [Oo]f [Tt]he Fed(eral|\\.) Rules of (Civ(il|\\.) ?P(rocedure|(roc?)?\\.)|C\\.? ?P\\.?)(?!=\\w)"
        ],
        "operations": [
            {
                "token": "subsection",
                "sub": [
                    "\\)\\(",
                    "_"
                ]
            },
            {
                "token": "subsection",
                "sub": [
                    "\\W",
                    ""
                ]
            }
        ],
        "URL": [
            "https://www.law.cornell.edu/rules/{acronym}/rule_{rule}",
            "#rule_{rule}_{subsection}"
        ]
    },
    {
        "name": "Federal Rules of Appellate Procedure",
        "defaults": {
            "acronym": "frap",
            "name": "Fed. R. App. Proc.",
            "name regex": "App(ellate|\\.) ?P(rocedure|(roc?)?\\.)|A\\.? ?P\\.?"
        },
        "regexes": [
            "(?<!\\w)(Fed(eral|\\.) ?R(ules?|\\.)|F\\.? ?R\\.?)( of)? ?(App(ellate|\\.) ?P(rocedure|(roc?)?\\.)|A\\.? ?P\\.?)( [Rr]ule)? (?<rule>\\d+(\\.\\d+)?[a-z]?)(?!\\w)( ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)",
            "(?<!\\w)[Rr]ule (?<rule>\\d+(\\.\\d+)?[a-z]?)(?!\\w)( ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))? [Oo]f [Tt]he Fed(eral|\\.) Rules of (App(ellate|\\.) ?P(rocedure|(roc?)?\\.)|A\\.? ?P\\.?)(?!=\\w)"
        ],
        "operations": [
            {
                "token": "subsection",
                "sub": [
                    "\\)\\(",
                    "_"
                ]
            },
            {
                "token": "subsection",
                "sub": [
                    "\\W",
                    ""
                ]
            }
        ],
        "URL": [
            "https://www.law.cornell.edu/rules/{acronym}/rule_{rule}",
            "#rule_{rule}_{subsection}"
        ]
    },
    {
        "name": "Federal Rules of Criminal Procedure",
        "defaults": {
            "acronym": "frcrmp",
            "name": "Fed. R. Crim. Proc.",
            "name regex": "Crim(inal|\\.) ?P(rocedure|(roc?)?\\.)|Cr\\.? ?P\\.?"
        },
        "regexes": [
            "(?<!\\w)(Fed(eral|\\.) ?R(ules?|\\.)|F\\.? ?R\\.?)( of)? ?(Crim(inal|\\.) ?P(rocedure|(roc?)?\\.)|Cr\\.? ?P\\.?)( [Rr]ule)? (?<rule>\\d+(\\.\\d+)?[a-z]?)(?!\\w)( ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)",
            "(?<!\\w)[Rr]ule (?<rule>\\d+(\\.\\d+)?[a-z]?)(?!\\w)( ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))? [Oo]f [Tt]he Fed(eral|\\.) Rules of (Crim(inal|\\.) ?P(rocedure|(roc?)?\\.)|Cr\\.? ?P\\.?)(?!=\\w)"
        ],
        "operations": [
            {
                "token": "subsection",
                "sub": [
                    "\\)\\(",
                    "_"
                ]
            },
            {
                "token": "subsection",
                "sub": [
                    "\\W",
                    ""
                ]
            }
        ],
        "URL": [
            "https://www.law.cornell.edu/rules/{acronym}/rule_{rule}",
            "#rule_{rule}_{subsection}"
        ]
    },
    {
        "name": "Federal Rules of Evidence",
        "defaults": {
            "acronym": "fre",
            "name": "Fed. R. Evid.",
            "name regex": "Evid(ence|\\.)|E\\.?"
        },
        "regexes": [
            "(?<!\\w)(Fed(eral|\\.) ?R(ules?|\\.)|F\\.? ?R\\.?)( of)? ?(Evid(ence|\\.)|E\\.?)( [Rr]ule)? (?<rule>\\d+(\\.\\d+)?[a-z]?)(?!\\w)( ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)",
            "(?<!\\w)[Rr]ule (?<rule>\\d+(\\.\\d+)?[a-z]?)(?!\\w)( ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))? [Oo]f [Tt]he Fed(eral|\\.) Rules of (Evid(ence|\\.)|E\\.?)(?!=\\w)"
        ],
        "operations": [
            {
                "token": "subsection",
                "sub": [
                    "\\)\\(",
                    "_"
                ]
            },
            {
                "token": "subsection",
                "sub": [
                    "\\W",
                    ""
                ]
            }
        ],
        "URL": [
            "https://www.law.cornell.edu/rules/{acronym}/rule_{rule}",
            "#rule_{rule}_{subsection}"
        ]
    },
    {
        "name": "Immigration & Nationality Act",
        "defaults": {
            "name": "Immigration & Nationality Act",
            "name regex": "Immigration ([Aa]|&) Nationality Act|I\\.?N\\.?A\\.?|I\\. N\\. A\\.",
            "title": "8"
        },
        "regexes": [
            "(?<!\\w)(Immigration ([Aa]|&) Nationality Act|I\\.?N\\.?A\\.?|I\\. N\\. A\\.) ((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>10[1-6]|20[1-9]|210[Aa]?|21[36][Aa]|21[1-9]|22[1-4]|23[56][Aa]|23[1-9]|240[A-Ca-c]?|245[Aa]|24[1-9]|25[0-8]|26[1-6]|27[1-35-9]|274[A-Da-d]?|28[0-9]|29[0-5]|30[1-9]|329[Aa]|3[1-5][0-9]|36[01]|40[4-7]|41[1-4]|50[1-7])(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "section",
                "case": "lower"
            },
            {
                "token": "section",
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
                    "\\)\\(",
                    "_"
                ]
            },
            {
                "token": "subsection",
                "sub": [
                    "\\W",
                    ""
                ]
            }
        ],
        "URL": [
            "https://www.law.cornell.edu/uscode/text/{title}/{section}",
            "#{subsection}"
        ]
    },
    {
        "name": "Internal Revenue Code",
        "defaults": {
            "name": "Internal Revenue Code",
            "name regex": "Internal Revnue Code|I\\.? ?R\\.? ?C\\.?",
            "title": "26"
        },
        "regexes": [
            "(?<!\\w)(Internal Revnue Code|I\\.? ?R\\.? ?C\\.?) ((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>\\d[\\w.-]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "subsection",
                "sub": [
                    "\\)\\(",
                    "_"
                ]
            },
            {
                "token": "subsection",
                "sub": [
                    "\\W",
                    ""
                ]
            }
        ],
        "URL": [
            "https://www.law.cornell.edu/uscode/text/{title}/{section}",
            "#{subsection}"
        ]
    },
    {
        "name": "Treasury Regulations",
        "defaults": {
            "name": "Treasury Regulations",
            "name regex": "Treas(ury|\\.?) ?Reg(ulations?|s?\\.?)"
        },
        "regexes": [
            "(?<!\\w)(Treas(ury|\\.?) ?Reg(ulations?|s?\\.?)) ((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>\\d[\\w.-]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [],
        "URL": [
            "https://ecfr.federalregister.gov/cfr-reference?cfr%5Bdate%5D=current&cfr%5Breference%5D=26 CFR {section}",
            "#p-{section}{subsection}"
        ]
    },
    {
        "name": "National Labor Relations Act",
        "defaults": {
            "name": "N.L.R.A.",
            "name regex": "National Labor Relations Act|N\\.? ?L\\.? ?R\\.? ?A\\.?",
            "title": "29"
        },
        "regexes": [
            "(?<!\\w)(National Labor Relations Act|N\\.? ?L\\.? ?R\\.? ?A\\.?) ((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>1[0-9]|[1-9])(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
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
                    "\\)\\(",
                    "_"
                ]
            },
            {
                "token": "subsection",
                "sub": [
                    "\\W",
                    ""
                ]
            }
        ],
        "URL": [
            "https://www.law.cornell.edu/uscode/text/{title}/{section}",
            "#{subsection}"
        ]
    },
    {
        "name": "Endangered Species Act",
        "defaults": {
            "name": "Endangered Species Act",
            "name regex": "Endangered Species Act|E\\.? ?S\\.? ?A\\.?",
            "title": "16"
        },
        "regexes": [
            "(?<!\\w)(Endangered Species Act|E\\.? ?S\\.? ?A\\.?) ((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>1[0-578]|8[Aa]|[1-9])(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "section",
                "case": "lower"
            },
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
                    "\\)\\(",
                    "_"
                ]
            },
            {
                "token": "subsection",
                "sub": [
                    "\\W",
                    ""
                ]
            }
        ],
        "URL": [
            "https://www.law.cornell.edu/uscode/text/{title}/{section}",
            "#{subsection}"
        ]
    },
    {
        "name": "Clean Air Act",
        "defaults": {
            "name": "Clean Air Act",
            "name regex": "Clean Air Act|C\\.? ?A\\.? ?A\\.?",
            "title": "42"
        },
        "regexes": [
            "(?<!\\w)(Clean Air Act|C\\.? ?A\\.? ?A\\.?) ((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>10[1-9]|12[0-9]|13[01]|16[0-8]|169[AaBb]?|17[1-4]|175[Aa]?|176[Aa]?|17[78]|179[Bb]?|18[1-4]|185[AaBb]|18[6-9]|19[0-3]|20[1-9]|21[0-9]|23[1-4]|24[1-9]|250|30[1-9]|32[0-8]|40[1-9]|41[0-6]|50[1-7]|60[1-9]|61[0-8])(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "section",
                "case": "lower"
            },
            {
                "token": "section",
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
                    "169b": "7492",
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
                    "\\)\\(",
                    "_"
                ]
            },
            {
                "token": "subsection",
                "sub": [
                    "\\W",
                    ""
                ]
            }
        ],
        "URL": [
            "https://www.law.cornell.edu/uscode/text/{title}/{section}",
            "#{subsection}"
        ]
    },
    {
        "name": "Clean Water Act",
        "defaults": {
            "name": "Clean Water Act",
            "name regex": "Clean Water Act|C\\.? ?W\\.? ?A\\.?",
            "title": "33"
        },
        "regexes": [
            "(?<!\\w)(Clean Water Act|C\\.? ?W\\.? ?A\\.?) ((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>101|11[25]|30[1-9]|31[069]|40[1-6]|50[1-59]|51[0178])(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "section",
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
                    "\\)\\(",
                    "_"
                ]
            },
            {
                "token": "subsection",
                "sub": [
                    "\\W",
                    ""
                ]
            }
        ],
        "URL": [
            "https://www.law.cornell.edu/uscode/text/{title}/{section}",
            "#{subsection}"
        ]
    },
    {
        "name": "Fair Housing Act",
        "defaults": {
            "name": "Fair Housing Act",
            "name regex": "Fair Housing Act|F\\.? ?H\\.? ?A\\.?",
            "title": "42"
        },
        "regexes": [
            "(?<!\\w)(Fair Housing Act|F\\.? ?H\\.? ?A\\.?) ((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>808[Aa]|80[1-9]|81[47][Aa]|81[0-9]|820|901)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "section",
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
                    "\\)\\(",
                    "_"
                ]
            },
            {
                "token": "subsection",
                "sub": [
                    "\\W",
                    ""
                ]
            }
        ],
        "URL": [
            "https://www.law.cornell.edu/uscode/text/{title}/{section}",
            "#{subsection}"
        ]
    },
    {
        "name": "Americans With Disabilities Act",
        "defaults": {
            "name": "A.D.A.",
            "name regex": "Americans [Ww]ith Disabilities Act|A\\. D\\. A\\.|A\\.?D\\.?A\\.?",
            "title": "42"
        },
        "regexes": [
            "(?<!\\w)(Americans [Ww]ith Disabilities Act|A\\. D\\. A\\.|A\\.?D\\.?A\\.?) ((&sect;|&#167|§){1,2}|[Ss]ec(tions?|t?s?\\.))? ?(?<section>10[1-7]|20[1-4]|22[1-9]|230|24[1-5]|30[1-9]|50[1-9]|51[0-4]|2|3)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "section",
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
                    "\\)\\(",
                    "_"
                ]
            },
            {
                "token": "subsection",
                "sub": [
                    "\\W",
                    ""
                ]
            }
        ],
        "URL": [
            "https://www.law.cornell.edu/uscode/text/{title}/{section}",
            "#{subsection}"
        ]
    },
    {
        "name": "Code of Alabama, 1975",
        "defaults": {
            "name regex": "Ala(bama|\\.)|AL",
            "abbreviation": "Ala. Code"
        },
        "regexes": [
            "(?<!\\w)(Ala(bama|\\.)|AL)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)[-‑–](?<chapter>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)[-‑–](?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(,? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "title",
                "case": "upper"
            },
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            }
        ],
        "URL": [
            "http://alisondb.legislature.state.al.us/alison/CodeOfAlabama/1975/{title}-{chapter}-{section}.htm"
        ]
    },
    {
        "name": "Alabama Constitution",
        "defaults": {
            "name regex": "Ala(bama|\\.)|AL",
            "abbreviation": "Ala.",
            "ballotpedia slug": "Alabama"
        },
        "regexes": [
            "(?<!\\w)(Ala(bama|\\.)|AL) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (Ala(bama|\\.)|AL) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Alaska Statutes",
        "defaults": {
            "name regex": "Alaska|AK",
            "abbreviation": "Alaska Stat."
        },
        "regexes": [
            "(?<!\\w)(Alaska|AK) ( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+[A-Zz-z]?)(?!\\w)\\.(?<chapter>\\d+[A-Zz-z]?)(?!\\w)\\.(?<section>\\d+[A-Zz-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "title",
                "case": "upper"
            },
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            }
        ],
        "URL": [
            "http://www.akleg.gov/basis/statutes.asp#{title}.{chapter}.{section}"
        ]
    },
    {
        "name": "Alaska Constitution",
        "defaults": {
            "name regex": "Alaska|AK",
            "abbreviation": "Alaska",
            "ballotpedia slug": "Alaska"
        },
        "regexes": [
            "(?<!\\w)(Alaska|AK) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (Alaska|AK) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "American Samoa Code",
        "defaults": {
            "name regex": "Am(erican|\\.) ?Samoa"
        },
        "regexes": [
            "(?<!\\w)(Am(erican|\\.) ?Samoa)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+[A-Z]?)(?!\\w)\\.(?<section>\\d+)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [],
        "URL": [
            "https://new.asbar.org/code-annotated/{title}-{section}"
        ]
    },
    {
        "name": "American Samoa Constitution",
        "defaults": {
            "name regex": "Am(erican|\\.) ?Samoa",
            "abbreviation": "Am. Samoa",
            "ballotpedia slug": "American_Samoa"
        },
        "regexes": [
            "(?<!\\w)(Am(erican|\\.) ?Samoa) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (Am(erican|\\.) ?Samoa) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Arkansas Constitution",
        "defaults": {
            "name regex": "Ark(ansas|\\.)|AR",
            "abbreviation": "Ark.",
            "ballotpedia slug": "Arkansas"
        },
        "regexes": [
            "(?<!\\w)(Ark(ansas|\\.)|AR) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (Ark(ansas|\\.)|AR) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "digit"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Arizona Revised Statutes",
        "defaults": {
            "name regex": "Ariz(ona|\\.)|AZ",
            "abbreviation": "Ariz. Rev. Stat."
        },
        "regexes": [
            "(?<!\\w)(Ariz(ona|\\.)|AZ)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Z]?)(?!\\w)[-‑–](?<section>\\d+(\\.\\d+)?[A-Z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
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
        ],
        "URL": [
            "https://www.azleg.gov/viewdocument/?docName=https://www.azleg.gov/ars/{title}/{section}.htm"
        ]
    },
    {
        "name": "Arizona Constitution",
        "defaults": {
            "name regex": "Ariz(ona|\\.)|AZ",
            "abbreviation": "Ariz.",
            "ballotpedia slug": "Arizona"
        },
        "regexes": [
            "(?<!\\w)(Ariz(ona|\\.)|AZ) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (Ariz(ona|\\.)|AZ) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "digit"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "California Codes",
        "regexes": [
            "(?<!\\w)(Cal(ifornia|(if)?\\.)|CAL?) ?(?<code>Bus(iness|\\.) (and|&) Prof(essions|s?\\.)|B\\.? ?& ?P\\.?|BPC|Civ(il|\\.)|CIV|(Code( of)? )?(Civil Procedure|Civ\\. ?P(roc?)?\\.)|CCP|Commercial|Comm?\\.|COM|Corp(orations?|\\.)|CORP|Educ(ation|\\.)|EDU?C|Elec(tions|\\.)|ELEC|Evid(ence|\\.)|EVID|Fam(ily|\\.)|FAM|Fin(ancial|\\.)|FIN|Fish (and|&) Game|FGC|F&G|Food (and|&) Agric(ultural|\\.)|FAC|Gov(ernment|'?t?\\.?)|GOV|Harb(ors|\\.) (and|&) Nav(igation|\\.)|HNC|H&N|Health (and|&) Saf(ety|\\.)|HSC|H&S|Ins(urance|\\.)|INS|Lab(or|\\.)|LAB|Mil(itary|\\.) (and|&) Vet(erans|\\.)|MVC|M&V|Penal|PEN|Prob(ate|\\.)|PROB|Pub(lic|\\.) Cont(ract|\\.)|PCC|Pub(lic|\\.) ?Res(ources|\\.)|PRC|Pub(lic|\\.) Util(ities|s?\\.)|PUC|Rev(enue|\\.) (and|&) Tax(ation|\\.)|RTC|R&T|St(reets|s\\.) (and|&) High(ways|\\.)|SHC|S&H|Unemp(loyment|\\.) Ins(urance|(ur)?\\.)|UIC|Veh(icle|(ic)?\\.)|VEH|Water|WAT|Welf(are|\\.) (and|&) Inst(itutions|s?\\.)|WIC)(?!\\w)( ?C(ode|\\.)( Ann(otated|\\.))?,?)? (([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)? ?(?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "code",
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
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "code",
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
        ],
        "URL": [
            "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode={code}&sectionNum={section}"
        ]
    },
    {
        "name": "California Constitution",
        "defaults": {
            "name regex": "Cal(ifornia|(if)?\\.)|CAL?",
            "abbreviation": "Cal.",
            "display type": "Text"
        },
        "regexes": [
            "(?<!\\w)(Cal(ifornia|(if)?\\.)|CAL?) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (Cal(ifornia|(if)?\\.)|CAL?) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            },
            {
                "token": "section",
                "output": "display type",
                "optionalLookup": {
                    ".+": "Section"
                }
            }
        ],
        "URL": [
            "https://leginfo.legislature.ca.gov/faces/codes_display{display type}.xhtml?lawCode=CONS",
            "&article={article}",
            "&sectionNum=SEC. {section}."
        ]
    },
    {
        "name": "California Code of Regulations",
        "defaults": {
            "name regex": "CA|Cal(ifornia|\\.) Code of Reg(ulations|s\\.)|CA ADR"
        },
        "regexes": [
            "(?<!\\w)(?<title>\\d+)(?!\\w) (CA|Cal(ifornia|\\.) Code of Reg(ulations|s\\.)|CA ADR) (([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "section",
                "case": "upper"
            }
        ],
        "URL": [
            "https://govt.westlaw.com/calregs/Search/Results?transitionType=Default&contextData=(sc.Default)&t_T1={title}&t_T2={section}&t_S1=CA ADC s&Page=1&query=advanced: CI(\"{title} CA ADC s {section}\")&Template=Find"
        ]
    },
    {
        "name": "Colorado Revised Statutes",
        "defaults": {
            "name regex": "Colo(rado|\\.)|CO",
            "abbreviation": "Colo. Rev. Stat.",
            "year": "2020"
        },
        "regexes": [
            "(?<!\\w)(Colo(rado|\\.)|CO)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)[-‑–](?<article>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)[-‑–](?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "title",
                "case": "upper"
            },
            {
                "token": "article",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "title",
                "lpad": 2,
                "output": "lpad_title"
            },
            {
                "token": "year",
                "sub": [
                    "",
                    ""
                ],
                "output": "supported_year"
            },
            {
                "token": "supported_year",
                "optionalLookup": {
                    "1[89]\\d{2}|200\\d|201[0-2]": "2020"
                }
            }
        ],
        "URL": [
            "https://leg.colorado.gov/sites/default/files/images/olls/crs{supported_year}-title-{lpad_title}.pdf#search={title}-{article}-{section}."
        ]
    },
    {
        "name": "Colorado Constitution",
        "defaults": {
            "name regex": "Colo(rado|\\.)|CO",
            "abbreviation": "Colo.",
            "ballotpedia slug": "Colorado"
        },
        "regexes": [
            "(?<!\\w)(Colo(rado|\\.)|CO) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (Colo(rado|\\.)|CO) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "General Statutes of Connecticut",
        "regexes": [
            "(?<!\\w)(Conn(ecticut|\\.)|CT)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<section>(\\d[a-z\\-]*[\\w]+))(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [],
        "URL": [
            "https://www.lawserver.com/law/state/connecticut/ct-laws/connecticut_statutes_{section}"
        ]
    },
    {
        "name": "Connecticut Constitution",
        "defaults": {
            "name regex": "Conn(ecticut|\\.)|CT",
            "abbreviation": "Conn.",
            "ballotpedia slug": "Connecticut"
        },
        "regexes": [
            "(?<!\\w)(Conn(ecticut|\\.)|CT) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (Conn(ecticut|\\.)|CT) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Delaware Code",
        "defaults": {
            "name regex": "Del(aware|\\.)?",
            "abbreviation": "Del. Code",
            "title": "8"
        },
        "regexes": [
            "(?<!\\w)([Tt]it(le |\\. ?))?(?<title>\\d{1,2})(?!\\w) (Del(aware|\\.)?)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)",
            "(?<!\\w)(Del(aware|\\.)?)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?[Tt]it(le |\\. ?)(?<title>\\d{1,2})(?!\\w),? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "section",
                "case": "upper"
            }
        ],
        "URL": [
            "https://www.lawserver.com/law/state/delaware/de-code/delaware_code_title_{title}_{section}"
        ]
    },
    {
        "name": "Delaware Constitution",
        "defaults": {
            "name regex": "Del(aware|\\.)?",
            "abbreviation": "Del.",
            "ballotpedia slug": "Delaware"
        },
        "regexes": [
            "(?<!\\w)(Del(aware|\\.)?) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (Del(aware|\\.)?) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Delaware General Corporations Law",
        "defaults": {
            "name regex": "Del(aware|\\.)?",
            "abbreviation": "Del. Code",
            "title": "8"
        },
        "regexes": [
            "(?<!\\w)(D\\.? ?G\\.? ?C\\.? ?L\\.?|Del(aware|\\.) ?Gen(eral|\\.) ?Corp(orations?|s?\\.) ?L(aw|\\.)) (([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "section",
                "case": "upper"
            }
        ],
        "URL": [
            "https://www.lawserver.com/law/state/delaware/de-code/delaware_code_title_{title}_{section}"
        ]
    },
    {
        "name": "District of Columbia Official Code",
        "defaults": {
            "name regex": "(District of Columbia|D\\.? ?C\\.?)( Official)?",
            "abbreviation": "D.C. Code"
        },
        "regexes": [
            "(?<!\\w)((District of Columbia|D\\.? ?C\\.?)( Official)?)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Z]?)(?!\\w)[-‑–](?<section>\\d+(\\.\\d+)?[A-Z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [],
        "URL": [
            "https://code.dccouncil.us/dc/council/code/sections/{title}-{section}.html",
            "#{subsection}"
        ]
    },
    {
        "name": "Florida Statutes",
        "defaults": {
            "name regex": "(Fl(orida|a?\\.)|FL)",
            "abbreviation": "Fla. Stat.",
            "year": "2020"
        },
        "regexes": [
            "(?<!\\w)(Fl(orida|a?\\.)|FL)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+[A-Zz-z]?)(?!\\w)\\.(?<section>\\d+[A-Zz-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "chapter",
                "lpad": 4
            }
        ],
        "URL": [
            "https://www.flsenate.gov/Laws/Statutes/{year}/{chapter}.{section}"
        ]
    },
    {
        "name": "Florida Constitution",
        "defaults": {
            "name regex": "Fl(orida|a?\\.)|FL",
            "abbreviation": "Fla."
        },
        "regexes": [
            "(?<!\\w)(Fl(orida|a?\\.)|FL) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (Fl(orida|a?\\.)|FL) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "section",
                "lpad": 2
            },
            {
                "token": "article",
                "number_style": "digit"
            }
        ],
        "URL": [
            "https://www.flsenate.gov/Laws/Constitution#A{article}",
            "S{section}"
        ]
    },
    {
        "name": "Hawaii Revised Statutes",
        "defaults": {
            "name regex": "Haw(ai.?i|\\.)|HI",
            "abbreviation": "Haw. Rev. Stat."
        },
        "regexes": [
            "(?<!\\w)(Haw(ai.?i|\\.)|HI)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)[-‑–](?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            }
        ],
        "URL": [
            "https://www.lawserver.com/law/state/hawaii/hi-statutes/hawaii_statutes_{chapter}-{section}"
        ]
    },
    {
        "name": "Hawaii Constitution",
        "defaults": {
            "name regex": "Haw(ai.?i|\\.)|HI",
            "abbreviation": "Haw.",
            "ballotpedia slug": "Hawaii"
        },
        "regexes": [
            "(?<!\\w)(Haw(ai.?i|\\.)|HI) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (Haw(ai.?i|\\.)|HI) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Idaho Code",
        "defaults": {
            "name regex": "I(daho|D)",
            "abbreviation": "Idaho Code"
        },
        "regexes": [
            "(?<!\\w)(I(daho|D))( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Z]?)(?!\\w)[-‑–](?<section>\\d+(\\.\\d+)?[A-Z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "section",
                "sub": [
                    "\\d{1,2}[A-Z]?$",
                    ""
                ],
                "output": "chapter"
            }
        ],
        "URL": [
            "https://legislature.idaho.gov/statutesrules/idstat/Title{title}/T{title}CH{chapter}/SECT{title}-{section}/"
        ]
    },
    {
        "name": "Idaho Constitution",
        "defaults": {
            "name regex": "I(daho|D)",
            "abbreviation": "Idaho",
            "ballotpedia slug": "Idaho"
        },
        "regexes": [
            "(?<!\\w)(I(daho|D)) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (I(daho|D)) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Illinois Compiled Statutes",
        "regexes": [
            "(?<!\\w)([Cc]h(apter|\\.) )?(?<chapter>\\d+)(?!\\w) (ILCS|Ill(inois|\\.) Comp(iled|\\.) Stat(utes|\\.)) (?<act>\\d+)(?!\\w)/(?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "chapter",
                "lpad": 4
            },
            {
                "token": "act",
                "lpad": 4
            }
        ],
        "URL": [
            "https://www.ilga.gov/legislation/ilcs/fulltext.asp?DocName={chapter}{act}0K{section}"
        ]
    },
    {
        "name": "Illinois Constitution",
        "defaults": {
            "name regex": "Ill(inois|\\.)?|IL",
            "abbreviation": "Ill.",
            "ballotpedia slug": "Illinois"
        },
        "regexes": [
            "(?<!\\w)(Ill(inois|\\.)?|IL) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (Ill(inois|\\.)?|IL) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Indiana Code",
        "defaults": {
            "name regex": "Ind(iana|\\.)|IN",
            "abbreviation": "Ind. Code",
            "year": "2020"
        },
        "regexes": [
            "(?<!\\w)(Ind(iana|\\.)|IN)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+)(?!\\w)[-‑–](?<article>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)[-‑–](?<chapter>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)[-‑–](?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "case": "upper"
            },
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "title",
                "lpad": 2
            }
        ],
        "URL": [
            "https://iga.in.gov/legislative/laws/{year}/ic/titles/{title}#{title}-{article}-{chapter}-{section}"
        ]
    },
    {
        "name": "Indiana Constitution",
        "defaults": {
            "name regex": "Ind(iana|\\.)|IN",
            "abbreviation": "Ind.",
            "ballotpedia slug": "Indiana"
        },
        "regexes": [
            "(?<!\\w)(Ind(iana|\\.)|IN) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (Ind(iana|\\.)|IN) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "digit"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Iowa Code",
        "defaults": {
            "name regex": "I(owa|A)",
            "abbreviation": "Iowa Code"
        },
        "regexes": [
            "(?<!\\w)(I(owa|A))( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+[A-Zz-z]?)(?!\\w)\\.(?<section>\\d+[A-Zz-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            }
        ],
        "URL": [
            "https://www.legis.iowa.gov/docs/code/{chapter}.{section}.pdf"
        ]
    },
    {
        "name": "Iowa Constitution",
        "defaults": {
            "name regex": "I(owa|A)",
            "abbreviation": "Iowa",
            "ballotpedia slug": "Iowa"
        },
        "regexes": [
            "(?<!\\w)(I(owa|A)) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (I(owa|A)) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Kansas Statutes",
        "defaults": {
            "name regex": "Kan(sas|\\.)|KS",
            "abbreviation": "Kan. Stat."
        },
        "regexes": [
            "(?<!\\w)(Kan(sas|\\.)|KS)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)[-‑–](?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            }
        ],
        "URL": [
            "https://www.lawserver.com/law/state/kansas/ks-statutes/kansas_statutes_{chapter}-{section}"
        ]
    },
    {
        "name": "Kansas Constitution",
        "defaults": {
            "abbreviation": "Kan.",
            "name regex": "Kan(sas|\\.)|KS",
            "ballotpedia slug": "Kansas"
        },
        "regexes": [
            "(?<!\\w)(Kan(sas|\\.)|KS) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(,? [Cc]l(ause|\\.)? ?{clause})?)?(?!=\\w)",
            "(?<!\\w)(Kan(sas|\\.)|KS) Const(itution|\\.)?,? (?<part>Bill of Rights|Preamble|Ordinance)(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (Kan(sas|\\.)|KS) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "part",
                "case": "title"
            },
            {
                "token": "part",
                "sub": [
                    "Of",
                    "of"
                ]
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "part",
                "sub": [
                    " ",
                    "_"
                ]
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/",
            "Article_{article}",
            "{part}",
            ",_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Kentucky Revised Statutes",
        "defaults": {
            "name regex": "K(entucky|y\\.|Y)",
            "abbreviation": "Ky. Rev. Stat."
        },
        "regexes": [
            "(?<!\\w)(K(entucky|y\\.|Y))( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+[A-Zz-z]?)(?!\\w)\\.(?<section>\\d+[A-Zz-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "chapter",
                "case": "lower"
            },
            {
                "token": "chapter",
                "sub": [
                    "\\.",
                    "-"
                ]
            }
        ],
        "URL": [
            "https://www.lawserver.com/law/state/kentucky/ky-statutes/kentucky_statutes_{chapter}-{section}"
        ]
    },
    {
        "name": "Kentucky Constitution",
        "defaults": {
            "abbreviation": "Ky.",
            "name regex": "K(entucky|y\\.|Y)",
            "ballotpedia slug": "Kentucky"
        },
        "regexes": [
            "(?<!\\w)(K(entucky|y\\.|Y)) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d{1,3}[A-Za-z]?)(?!\\w)(,? [Cc]l(ause|\\.)? ?{clause})?)?(?!=\\w)",
            "(?<!\\w)(K(entucky|y\\.|Y)) Const(itution|\\.)?,? (?<part>Bill of Rights|Rights of Victims of Crime|Dist(ribution|\\.?) of the Powers of Gov(ernment|('t)?\\.)|(The )?(Leg(islative|(is)?\\.)|Exec(utive|\\.)|Jud(icial|\\.)) ?Dep(artment|('t)?\\.?)|Counties (and|&) County Seats|Impeachments|(C(ounty|ty\\.)|Fisc(al|\\.?)) ?C(ourts|ts\\.?)|Justices of the Peace|Suff(rage|\\.?) ?(and|&) ?Elec(tions|s?\\.?)|Mun(icipalities|i?\\.?)|Rev(enue|\\.?) ?(and|&) ?Tax(ation|\\.?)|Educ(ation|\\.)|Corp(orations?|s?\\.)|R(ailroads|\\.R\\.) (and|&) Com(merce|m?\\.)|(The )?Militia|Gen(eral|\\.) ?Prov(isions|s?\\.)|Mode of Rev(ision|\\.))(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d{1,3}[A-Za-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d{1,3}[A-Za-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (K(entucky|y\\.|Y)) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "part",
                "optionalLookup": {
                    "Dist(ribution|\\.?) of the Powers of Gov(ernment|('t)?\\.?)": "Dist. of the Powers of Gov't",
                    "(The )?Leg(islative|(is)?\\.) ?Dep(artment|('t)?\\.?)": "Legis. Dep't",
                    "(The )?Jud(icial|\\.) ?Dep(artment|('t)?\\.?)": "Jud. Dep't",
                    "(The )?Exec(utive|\\.) ?Dep(artment|('t)?\\.?)": "Exec. Dep't",
                    "Counties (and|&) County Seats": "Counties & Cty. Seats",
                    "C(ounty|ty\\.)": "Cty.",
                    "Fisc(al|\\.?)": "Fisc.",
                    "C(ourts|ts|\\.?)": "Cts.",
                    "Suff(rage|\\.?) ?(and|&) ?Elec(tions|s?\\.?)": "Suff. & Elec.",
                    "Mun(icipalities|i?\\.?)": "Muni.",
                    "Rev(enue|\\.?) ?(and|&) ?Tax(ation|\\.?)": "Rev. & Tax.",
                    "Educ(ation|\\.)": "Educ.",
                    "Corp(orations?|s?\\.)": "Corp.",
                    "R(ailroads|\\.R\\.) (and|&) Com(merce|m?\\.)": "R.R. & Com.",
                    "(The )?Militia": "Militia",
                    "Gen(eral|\\.) ?Prov(isions|s?\\.)": "Gen. Provs.",
                    "Mode of Rev(ision|\\.)": "Mode of Rev."
                }
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "section",
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
        ],
        "URL": [
            "https://apps.legislature.ky.gov/Law/Constitution/Constitution/ViewConstitution?rsn={section}"
        ]
    },
    {
        "name": "Louisiana Statutes",
        "defaults": {
            "name regex": "L(ouisiana|a\\.|A)",
            "abbreviation": "La. Stat."
        },
        "regexes": [
            "(?<!\\w)(L(ouisiana|a\\.|A))( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+[A-Z]?)(?!\\w):(?<section>\\d+)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [],
        "URL": [
            "https://www.lawserver.com/law/state/louisiana/la-laws/louisiana_revised_statutes_{title}-{section}"
        ]
    },
    {
        "name": "Louisiana Constitution",
        "defaults": {
            "name regex": "L(ouisiana|a\\.|A)",
            "abbreviation": "La.",
            "ballotpedia slug": "Louisiana"
        },
        "regexes": [
            "(?<!\\w)(L(ouisiana|a\\.|A)) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (L(ouisiana|a\\.|A)) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Maine Statutes",
        "defaults": {
            "name regex": "M(aine|e\\.|E)",
            "abbreviation": "Me. Stat."
        },
        "regexes": [
            "(?<!\\w)([Tt]it(le |\\. ?))?(?<title>\\d+([-‑–][A-Z])?)(?!\\w) (M(aine|e\\.|E))( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<section>\\d+(\\.\\d+)?([-‑–][A-Za-z])?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)",
            "(?<!\\w)(M(aine|e\\.|E))( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?[Tt]it(le |\\. ?)(?<title>\\d+([-‑–][A-Z])?)(?!\\w),? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d+(\\.\\d+)?([-‑–][A-Za-z])?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "title",
                "sub": [
                    "[-‑–]",
                    "-"
                ]
            },
            {
                "token": "title",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "section",
                "sub": [
                    "[-‑–]",
                    "-"
                ]
            }
        ],
        "URL": [
            "https://legislature.maine.gov/legis/statutes/{title}/title{title}sec{section}.html"
        ]
    },
    {
        "name": "Maine Constitution",
        "defaults": {
            "name regex": "M(aine|e\\.|E)",
            "abbreviation": "Me.",
            "ballotpedia slug": "Maine"
        },
        "regexes": [
            "(?<!\\w)(M(aine|e\\.|E)) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,4}([-‑–][1-3])?)(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d([\\w.]*\\w)?)(?!\\w)(,? [Cc]l(ause|\\.)? ?(?<clause>\\d+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,4}([-‑–][1-3])?)(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d([\\w.]*\\w)?)(?!\\w)(,? [Cc]l(ause|\\.)? ?(?<clause>\\d+)(?!\\w))?)? [Oo]f [Tt]he (M(aine|e\\.|E)) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "case": "upper"
            },
            {
                "token": "article",
                "sub": [
                    "[-‑–]",
                    "-"
                ]
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "section",
                "sub": [
                    "[-‑–]",
                    "-"
                ]
            },
            {
                "token": "article",
                "lookup": {
                    "(.+-\\d+)": "First",
                    ".+-2": "Second",
                    ".+-1": "Third"
                },
                "output": "pt"
            },
            {
                "token": "article",
                "sub": [
                    "-\\d",
                    ""
                ]
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article}",
            "--Part_{pt}",
            ",_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Maryland Code",
        "defaults": {
            "abbreviation": "Md. Code",
            "name regex": "M(aryland|d\\.|D)"
        },
        "regexes": [
            "(?<!\\w)(M(aryland|d\\.|D)) (Code( Ann(otated|\\.))? (of )?)?(?<article>(Ac|Al|[BCEFHILNPRST]).{4,38}?)(?!\\w)( Code( Ann(otated|\\.))?)?,? (([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)-(?<section>[\\da-zA-Z\\-–.]*[\\da-zA-Z])(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "lookup": {
                    "Acric(ulture|\\.)": "Agric.",
                    "Alco(holic|\\.) ?Bev(erages|s?\\.)": "Alc. Bev.",
                    "Bus(iness|\\.) ?Occ(upations|\\.) ?(and|&) ?Prof(essions|s?\\.)": "Bus. Occ. & Prof.",
                    "Bus(iness|\\.) ?Reg(ulation|\\.)": "Bus. Reg.",
                    "Com(mercial|\\.) ?Law": "Com. Law",
                    "Corp(orations|s\\.) ?(and|&) Ass(ociations|'ns)": "Corps. & Ass'ns",
                    "Corr(ectional|\\.) ?Serv(ices|s\\.)": "Corr. Servs.",
                    "C(ourts|ts\\.) ?(and|&) ?Jud(icial|\\.) ?Proc(eedings|\\.)": "Cts. & Jud. Proc.",
                    "Crim(inal|\\.) ?Law": "Crim. Law",
                    "Crim(inal|\\.) ?Proc(edure|\\.)": "Crim. Proc.",
                    "Econ(omic|\\.) ?Dev(elopment|\\.)": "Econ. Dev.",
                    "Educ(ation|\\.)": "Educ.",
                    "Elec(tion|\\.) ?Law": "Elec. Law",
                    "Envir(onment|\\.)": "Envir.",
                    "Est(ates|\\.) ?(and|&) ?Trusts": "Est. & Trusts",
                    "Fam(ily|\\.) ?Law": "Fam. Law",
                    "Fin(ancial|\\.) Inst(itutions|\\.)": "Fin. Inst.",
                    "Health ?[-–] ?Gen(eral|\\.)": "Health-Gen.",
                    "Health Occ(upations|\\.)": "Health Occ.",
                    "Hous(ing|\\.) ?(and|&) ?C(ommunity|mty\\.) ?Dev(elopment|'t|\\.)": "Hous. & Cmty. Dev.",
                    "Hum(an|\\.) ?Serv(ices|s\\.)": "Hum. Servs.",
                    "Ins(urance|\\.)": "Ins.",
                    "Lab(or|\\.) ?(and|&) ?Empl(oyment|\\.)": "Lab. & Empl.",
                    "Land Use": "Land Use",
                    "Local Gov(ernment|'t)": "Local Gov't",
                    "Nat(ural|\\.) ?Res(ources|\\.)": "Nat. Res.",
                    "Pub(lic|\\.) ?Saf(ety|\\.)": "Pub. Safety",
                    "Pub(lic|\\.) ?Util(ity|\\.)": "Pub. Util.",
                    "Real Prop(erty|\\.)": "Real Prop.",
                    "State Fin(ance|\\.) (and|&) Proc(urement|\\.)": "State Fin. & Proc.",
                    "State Gov(ernment|'t)": "State Gov't",
                    "State Pers(onnel|\\.) (and|&) Pens(ions|\\.)": "State Pers. & Pens.",
                    "Tax ?[-–] ?Gen(eral|\\.)": "Tax-Gen.",
                    "Tax ?[-–] ?Prop(erty|\\.)": "Tax-Prop.",
                    "Transp(ortation|\\.)": "Transp."
                }
            },
            {
                "token": "title",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "section",
                "sub": [
                    "[-‑–]",
                    "-"
                ]
            },
            {
                "token": "article",
                "lookup": {
                    "Agric\\.": "gab",
                    "Alc\\. Bev\\.": "gab",
                    "Bus\\. Occ\\. & Prof\\.": "gbo",
                    "Bus\\. Reg\\.": "gbr",
                    "Com\\. Law": "gcr",
                    "Corps\\. & Ass'ns": "gca",
                    "Corr\\. Servs\\.": "gcs",
                    "Cts\\. & Jud\\. Proc\\.": "gcj",
                    "Crim\\. Proc\\.": "gcp",
                    "Econ\\. Dev\\.": "gec",
                    "Educ\\.": "ged",
                    "Elec\\. Law": "gel",
                    "Envir\\.": "gen",
                    "Est\\. & Trusts": "get",
                    "Fam\\. Law": "gfl",
                    "Fin\\. Inst\\.": "gfi",
                    "Health-Gen\\.": "ggp",
                    "Health Occ\\.": "gho",
                    "Hous\\. & Cmty\\. Dev\\.": "ghs",
                    "Hum\\. Servs\\.": "ghu",
                    "Ins\\.": "gin",
                    "Lab\\. & Empl\\.": "gle",
                    "Land Use": "glu",
                    "Local Gov't": "glg",
                    "Nat\\. Res\\.": "gnr",
                    "Pub\\. Safety": "gps",
                    "Pub\\. Util\\.": "gpu",
                    "Real Prop\\.": "grp",
                    "State Fin\\. & Proc\\.": "gsf",
                    "State Gov't": "gsg",
                    "State Pers\\. & Pens\\.": "gsp",
                    "Tax-Gen\\.": "gtg",
                    "Tax-Prop\\.": "gtp",
                    "Transp\\.": "gtr"
                }
            }
        ],
        "URL": [
            "https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article={article}&section={title}-{section}"
        ]
    },
    {
        "name": "Maryland Constitution",
        "defaults": {
            "name regex": "M(aryland|d\\.|D)",
            "abbreviation": "Md.",
            "ballotpedia slug": "Maryland"
        },
        "regexes": [
            "(?<!\\w)(M(aryland|d\\.|D)) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (M(aryland|d\\.|D)) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Massachusetts General Laws",
        "regexes": [
            "(?<!\\w)((Mass(achusetts|\\.)?|MA) ?(Gen(eral|\\.)|Ann(otated|\\.)) ?Laws( Ann(otated|\\.))?|M\\.?G\\.?L\\.?(A\\.?)?|A\\.?L\\.?M\\.?),? [Cc](hapter|h?\\.) ?(?<chapter>\\d+[A-Z]?)(?!\\w),? (([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<section>\\d+[A-Z]?\\d*([/]\\d+[A-Z])?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "section",
                "sub": [
                    "/",
                    "~"
                ]
            }
        ],
        "URL": [
            "https://malegislature.gov/GeneralLaws/GoTo?ChapterGoTo={chapter}&SectionGoTo={section}"
        ]
    },
    {
        "name": "Massachusetts Constitution",
        "defaults": {
            "name regex": "Mass(achusetts|\\.)?|MA",
            "output_ch": "I",
            "output_sec": "I"
        },
        "regexes": [
            "(?<!\\w)(Mass(achusetts|\\.)?|MA) Const(itution|\\.)?,? [Pp](art|t\\.?)( [Tt]he)? ?(?<part>II?|[Ff]irst|[Ss]econd|1|2)(?!\\w)(,? [Cc](hapter|h?\\.?) ?(?<chapter>\\d+|[IVXivx]{1,7})(?!\\w))?(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(,? [Aa]rt(icle|\\.?) ?(?<article>[\\dIVXivx]{1,8})(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Pp](art|t\\.?)( [Tt]he)? ?(?<part>II?|[Ff]irst|[Ss]econd|1|2)(?!\\w)(,? [Cc](hapter|h?\\.?) ?(?<chapter>\\d+|[IVXivx]{1,7})(?!\\w))?(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w))? [Oo]f [Tt]he (Mass(achusetts|\\.)?|MA) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "part",
                "number_style": "digit"
            },
            {
                "token": "chapter",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "chapter",
                "number_style": "roman",
                "output": "output_ch"
            },
            {
                "token": "output_ch",
                "number_style": "roman"
            },
            {
                "token": "article",
                "number_style": "roman"
            },
            {
                "token": "section",
                "number_style": "roman",
                "output": "output_sec"
            },
            {
                "token": "part",
                "lookup": {
                    "1": ""
                },
                "output": "is_first"
            },
            {
                "token": "part",
                "lookup": {
                    "2": ""
                },
                "output": "is_second"
            }
        ],
        "URL": [
            "https://malegislature.gov/Laws/Constitution",
            "{is_first}#article{article}",
            "{is_second}#chapter{output_ch}Section{output_sec}",
            "{is_second}Article{article}"
        ]
    },
    {
        "name": "Michigan Compiled Laws",
        "defaults": {
            "name regex": "(Mich(igan|\\.)?|MI)? ?Comp(iled|\\.)? Laws( (Serv(ice|\\.)|Ann(otated|\\.)))?",
            "abbreviation": "Michigan Compiled Laws"
        },
        "regexes": [
            "(?<!\\w)((Mich(igan|\\.)?|MI)? ?Comp(iled|\\.)? Laws( (Serv(ice|\\.)|Ann(otated|\\.)))?),? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+[A-Zz-z]?)(?!\\w)\\.(?<section>\\d+[A-Zz-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            }
        ],
        "URL": [
            "https://legislature.mi.gov/doc.aspx?mcl-{chapter}-{section}"
        ]
    },
    {
        "name": "Michigan Constitution",
        "defaults": {
            "name regex": "Mich(igan|\\.)?|MI",
            "abbreviation": "Mich.",
            "ballotpedia slug": "Michigan"
        },
        "regexes": [
            "(?<!\\w)(Mich(igan|\\.)?|MI) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (Mich(igan|\\.)?|MI) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Minnesota Statutes",
        "defaults": {
            "name regex": "Minn(esota|\\.)?|MN",
            "abbreviation": "Minn. Stat."
        },
        "regexes": [
            "(?<!\\w)(Minn(esota|\\.)?|MN)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+[A-Zz-z]?)(?!\\w)\\.(?<section>\\d+[A-Zz-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "subsection",
                "lookup": {
                    "^\\(\\d.*": ""
                },
                "output": "has_subsec"
            },
            {
                "token": "subsection",
                "sub": [
                    "\\(|\\).*",
                    ""
                ]
            }
        ],
        "URL": [
            "https://www.revisor.mn.gov/statutes/cite/{chapter}.{section}",
            "{has_subsec}#stat.{chapter}.{section}.{subsection}"
        ]
    },
    {
        "name": "Minnesota Constitution",
        "defaults": {
            "name regex": "Minn(esota|\\.)?|MN",
            "abbreviation": "Minn.",
            "ballotpedia slug": "Minnesota"
        },
        "regexes": [
            "(?<!\\w)(Minn(esota|\\.)?|MN) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (Minn(esota|\\.)?|MN) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Mississippi Code",
        "defaults": {
            "name regex": "Miss(issippi|\\.)?|MS",
            "abbreviation": "Miss. Code",
            "year": "2019"
        },
        "regexes": [
            "(?<!\\w)(Miss(issippi|\\.)?|MS)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)[-‑–](?<chapter>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)[-‑–](?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(,? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "title",
                "case": "upper"
            },
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            }
        ],
        "URL": [
            "https://law.justia.com/codes/mississippi/{year}/title-{title}/chapter-{chapter}/section-{title}-{chapter}-{section}/index.html"
        ]
    },
    {
        "name": "Mississippi Constitution",
        "defaults": {
            "name regex": "Miss(issippi|\\.)?|MS",
            "abbreviation": "Miss.",
            "ballotpedia slug": "Mississippi"
        },
        "regexes": [
            "(?<!\\w)(Miss(issippi|\\.)?|MS) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (Miss(issippi|\\.)?|MS) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Missouri Revised Statutes",
        "defaults": {
            "name regex": "M(issouri|o\\.|O)",
            "abbreviation": "Mo. Rev. Stat."
        },
        "regexes": [
            "(?<!\\w)(M(issouri|o\\.|O))( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+[A-Zz-z]?)(?!\\w)\\.(?<section>\\d+[A-Zz-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            }
        ],
        "URL": [
            "https://revisor.mo.gov/main/OneSection.aspx?section={chapter}.{section}"
        ]
    },
    {
        "name": "Missouri Constitution",
        "defaults": {
            "name regex": "M(issouri|o\\.|O)",
            "abbreviation": "Mo.",
            "ballotpedia slug": "Missouri"
        },
        "regexes": [
            "(?<!\\w)(M(issouri|o\\.|O)) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (M(issouri|o\\.|O)) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Montana Code",
        "defaults": {
            "name regex": "Mont(ana|\\.)?|MT",
            "abberviation": "Mont. Code"
        },
        "regexes": [
            "(?<!\\w)(Mont(ana|\\.)?|MT)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)[-‑–](?<chapter>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)[-‑–](?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(,? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "title",
                "case": "upper"
            },
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            }
        ],
        "URL": [
            "https://www.lawserver.com/law/state/montana/mt-code/montana_code_{title}-{chapter}-{section}"
        ]
    },
    {
        "name": "Montana Constitution",
        "defaults": {
            "name regex": "Mont(ana|\\.)?|MT",
            "abbreviation": "Mont.",
            "ballotpedia slug": "Montana"
        },
        "regexes": [
            "(?<!\\w)(Mont(ana|\\.)?|MT) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (Mont(ana|\\.)?|MT) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Revised Statutes of Nebraska",
        "defaults": {
            "name regex": "Neb(raska|\\.)?|NE",
            "abbreviation": "Neb. Rev. Stat."
        },
        "regexes": [
            "(?<!\\w)(Neb(raska|\\.)?|NE)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)[-‑–](?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            }
        ],
        "URL": [
            "https://www.nebraskalegislature.gov/laws/statutes.php?statute={chapter}-{section}"
        ]
    },
    {
        "name": "Nebraska Constitution",
        "defaults": {
            "name regex": "Neb(raska|\\.)?|NE",
            "abbreviation": "Neb.",
            "ballotpedia slug": "Nebraska"
        },
        "regexes": [
            "(?<!\\w)(Neb(raska|\\.)?|NE) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (Neb(raska|\\.)?|NE) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Nevada Revised Statutes",
        "defaults": {
            "name regex": "Nev(ada|\\.)?|NV",
            "abbreviation": "Nev. Rev. Stat."
        },
        "regexes": [
            "(?<!\\w)(Nev(ada|\\.)?|NV)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+[A-Zz-z]?)(?!\\w)\\.(?<section>\\d+[A-Zz-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "chapter",
                "lpad": 3,
                "output": "lpad_chapter"
            }
        ],
        "URL": [
            "https://www.leg.state.nv.us/NRS/NRS-{lpad_chapter}.html#NRS{chapter}Sec{section}"
        ]
    },
    {
        "name": "Nevada Constitution",
        "defaults": {
            "name regex": "Nev(ada|\\.)?|NV",
            "abbreviation": "Nev.",
            "ballotpedia slug": "Nevada"
        },
        "regexes": [
            "(?<!\\w)(Nev(ada|\\.)?|NV) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (Nev(ada|\\.)?|NV) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "digit"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "New Hampshire Revised Statutes",
        "defaults": {
            "name regex": "New Hampshire|N\\.? ?H\\.?",
            "abbreviation": "N.H. Rev. Stat."
        },
        "regexes": [
            "(?<!\\w)(New Hampshire|N\\.? ?H\\.?)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+(\\.\\d+)?([-‑–][A-Za-z])?)(?!\\w):(?<section>\\d+(\\.\\d+)?([-‑–][A-Za-z])?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "chapter",
                "sub": [
                    "[-‑–]",
                    "-"
                ]
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "section",
                "sub": [
                    "[-‑–]",
                    "-"
                ]
            }
        ],
        "URL": [
            "https://www.lawserver.com/law/state/new-hampshire/nh-statutes/new_hampshire_revised_statutes_{chapter}_{section}"
        ]
    },
    {
        "name": "New Hampshire Constitution",
        "defaults": {
            "part2_section": "Part_Second",
            "name regex": "New Hampshire|N\\.? ?H\\.?"
        },
        "regexes": [
            "(?<!\\w)(New Hampshire|N\\.? ?H\\.?) Const(itution|\\.)?,? [Pp](art|t\\.?)( [Tt]he)? ?(?<part>II?|[Ff]irst|[Ss]econd|1|2)(?!\\w)(,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w))?(?!=\\w)",
            "(?<!\\w)[Pp](art|t\\.?)( [Tt]he)? ?(?<part>II?|[Ff]irst|[Ss]econd|1|2)(?!\\w)(,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w))?,? [Oo]f [Tt]he (New Hampshire|N\\.? ?H\\.?) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "part",
                "number_style": "digit"
            },
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "part",
                "lookup": {
                    "1": ""
                },
                "output": "is_part1"
            },
            {
                "token": "part",
                "lookup": {
                    "2": ""
                },
                "output": "is_part2"
            },
            {
                "token": "article",
                "lookup": {
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
                },
                "output": "part2_section"
            }
        ],
        "URL": [
            "https://ballotpedia.org/",
            "{is_part1}Part_First",
            "{is_part2}{part2_section}",
            ",_New_Hampshire_Constitution",
            "#Article_{article}"
        ]
    },
    {
        "name": "New Jersey Statutes",
        "regexes": [
            "(?<!\\w)((New Jersey|N\\.? ?J\\.?)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?|N\\.?J\\.?S\\.?A )(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+[A-Zz-z]?)(?!\\w):(?<chapter>\\d+[A-Zz-z]?)(?!\\w)[-‑–](?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?{subsection})?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "title",
                "case": "upper"
            },
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            }
        ],
        "URL": [
            "https://njlaw.rutgers.edu/collections/njstats/showsect.php?title={title}&chapter={chapter}&section={section}&actn=getsect"
        ]
    },
    {
        "name": "New Jersey Constitution",
        "regexes": [
            "(?<!\\w)(N\\.? ?J\\.?|New Jersey) ?Const(itution|\\.)?,? ?[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ((&sect;|&#167|§|[Ss]ec(tion|t?\\.)) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)|([Pp](ar(agraph|a?\\.)|¶)) ?(?<paragraph>\\d+)(?!\\w)))?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.) ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ((&sect;|&#167|§|[Ss]ec(tion|t?\\.)) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)|([Pp](ar(agraph|a?\\.)|¶)) ?(?<paragraph>\\d+)(?!\\w)))? [Oo]f [Tt]he (N\\.? ?J\\.?|New Jersey) ?Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            },
            {
                "token": "section",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_New_Jersey_Constitution",
            "#Section_{section}",
            "#Paragraph_{paragraph}"
        ]
    },
    {
        "name": "New Mexico Statutes Annotated 1978",
        "defaults": {
            "name regex": "New Mexico|N\\.? ?M\\.?",
            "abbreviation": "N.M. Stat."
        },
        "regexes": [
            "(?<!\\w)(New Mexico|N\\.? ?M\\.?)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+[A-Zz-z]?)(?!\\w)[-‑–](?<article>\\d+[A-Zz-z]?)(?!\\w)[-‑–](?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?{subsection})?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "article",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "chapter",
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
                },
                "output": "chapter_code"
            }
        ],
        "URL": [
            "https://nmonesource.com/nmos/nmsa/en/item/{chapter_code}/index.do#!b/{chapter}-{article}-{section}"
        ]
    },
    {
        "name": "New Mexico Constitution",
        "defaults": {
            "name regex": "New Mexico|N\\.? ?M\\.?",
            "abbreviation": "N.M.",
            "ballotpedia slug": "New_Mexico"
        },
        "regexes": [
            "(?<!\\w)(New Mexico|N\\.? ?M\\.?) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (New Mexico|N\\.? ?M\\.?) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Consolidated Laws of New York",
        "defaults": {
            "name regex": "New York|N\\.? ?Y\\.?",
            "abbreviation": "N.Y."
        },
        "regexes": [
            "(?<!\\w)(New York|N\\.? ?Y\\.?) ?(?<chapter>.{2,40}?)(?!\\w)( Law)? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "chapter",
                "lookup": {
                    "Abandoned Property|ABP": "Aband. Prop.",
                    "Agric(ulture|\\.) (and|&) M(arkets|kts)|AGM": "Agric. & Mkts.",
                    "Alc(oholic|o?\\.) Bev(erage|\\.) Cont(rol|\\.)|ABC": "Alco. Bev. Cont.",
                    "Alt(ernative\\.) C(ounty|ty\\.) Gov(ernment|.t)|ACG": "Alt. County Gov't",
                    "Arts (and|&) Cult(ural|\\.) Aff(airs|\\.)|ACA": "Arts & Cult. Aff.",
                    "Banking|BNK": "Banking",
                    "Ben(evolent|\\.) Ord(ers|\\.)|BVO": "Ben. Ord.",
                    "Bus(iness|\\.) Corp(orations?|s?)|BSC|BCL": "Bus. Corp.",
                    "Canal|CAL": "Canal",
                    "Civil Practice Law (and|&) Rules|CVP|CPLR|C\\. ?P\\. ?L\\. ?R": "C.P.L.R.",
                    "Civ(il|\\.) Serv(ice|\\.)|CIV": "Civ. Serv.",
                    "Coop(erative|\\.) Corp(orations|s?)|CCO": "Coop. Corp.",
                    "Correct(ion|\\.)|COR": "Correct.",
                    "County|CNT": "County",
                    "Crim(inal|\\.) Pro(cedure|c?)|CPL": "Crim. Proc.",
                    "Debt(or|\\.) (and|&) Cred(itor|\\.)|DCD": "Debt. & Cred.",
                    "Dom(estic|\\.) Rel(ations|\\.)|DOM": "Dom. Rel.",
                    "Econ(omic|\\.) Dev(elopment|\\.)|COM": "Econ. Dev.",
                    "Educ(ation|\\.)|EDN": "Educ.",
                    "Elder|ELD": "Elder",
                    "Elec(tion|\\.)|ELN": "Elec.",
                    "Em(inent|\\.) Dom(ain|\\.) Proc(edure|\\.)|EDP": "Em. Dom. Proc.",
                    "Emp(loyer(s''?)?|l''rs) Liab(ility|\\.)|EML": "Empl'rs Liab.",
                    "Energy|ENG": "Energy",
                    "Env(ironmental|(tl)?\\.) Conserv(ation|\\.)|ENV": "Envtl. Conserv.",
                    "Est(ates,|\\.) Powers (and|&) Trusts|EPT": "Est. Powers & Trusts",
                    "Exec(utive|\\.)|EXC": "Exec.",
                    "Fin(ancial|\\.) Serv(ices|s?)|FIS": "Fin. Serv.",
                    "Gen(eral|\\.) Associations|GAS": "Gen. Ass'ns",
                    "Gen(eral|\\.) Bus(iness|\\.)|GBS": "Gen. Bus.",
                    "Gen(eral|\\.) City|GCT": "Gen. City",
                    "Gen(eral|\\.) Constr(uction|\\.)|GCN": "Gen. Constr.",
                    "Gen(eral|\\.) Mun(icipal|\\.)|GMU": "Gen. Mun.",
                    "Gen(eral|\\.) Oblig(ations|\\.)|GOB": "Gen. Oblig.",
                    "High(way|\\.)|HAY": "High.",
                    "Indian|IND": "Indian",
                    "Ins(urance|(ur)?\\.)|ISC": "Ins.",
                    "Jud(iciary|\\.)|JUD": "Jud.",
                    "Lab(or|\\.)|LAB": "Lab.",
                    "Legis(lative|\\.)|LEG": "Legis.",
                    "Lien|LIE": "Lien",
                    "L(imited|td\\.) Liab(ility|\\.) Co(mpany|\\.)|LLC": "Ltd. Liab. Co.",
                    "Local Fin(ance|\\.)|LFN": "Local Fin.",
                    "Mental Hyg(iene|\\.)|MHY": "Mental Hyg.",
                    "Mil(itary|\\.)|MIL": "Mil.",
                    "Mult(iple|\\.) Dwell(ing|\\.)|MDW": "Mult. Dwell.",
                    "Mult(iple|\\.) Resid(ence|\\.)|MRE": "Mult. Resid.",
                    "Mun(icipal|\\.) Home Rule|MHR": "Mun. Home Rule",
                    "Mun(icipal|i?\\.) Housing Authorities|MHA": "Mun. Hous. Auth.",
                    "Nav(igation|\\.)|NAV": "Nav.",
                    "(State )?Print(ing|\\.)? (and|&) Pub(lic|\\.) Doc(uments|s?)|PPD": "State Print. & Pub. Docs.",
                    "Parks,? Rec(reation|\\.) (and|&) Hist(oric|\\.) Preserv(ation|\\.)|PAR": "Parks Rec. & Hist. Preserv.",
                    "P(artnership|'ship)|PTR": "P'ship",
                    "Penal|PEN": "Penal",
                    "Pers(onal|\\.) Prop(erty|\\.)|PEP": "Pers. Prop.",
                    "Priv(ate|\\.) Hous(ing|\\.) Fin(ance|\\.)|PVH": "Priv. Hous. Fin.",
                    "Pub(lic|\\.) Auth(orities|\\.)|PBA": "Pub. Auth.",
                    "Pub(lic|\\.) B(uildings|ldgs\\.)|PBB": "Pub. Bldgs.",
                    "Pub(lic|\\.) Health|PBH": "Pub. Health",
                    "Pub(lic|\\.) Housing|PBG": "Pub. Hous.",
                    "Pub(lic|\\.) Lands|PBL": "Pub. Lands",
                    "Pub(lic|\\.) Off(icers|\\.)|PBO": "Pub. Off.",
                    "Rac(ing,|\\.) Pari-Mut(uel|\\.) Wag(ering|\\.) (and|&) Breed(ing|\\.)|PML": "Rac. Pari-Mut. Wag. & Breed",
                    "Railroad|R\\.R\\.|RRD": "R.R.",
                    "Rapid Trans(it|\\.)|RAT": "Rapid Trans.",
                    "Real Prop(erty|\\.) Act(ions|s\\.)( (and|&) Proceedings)?|RPA": "Real Prop. Acts.",
                    "Real Prop(erty|\\.) Tax\\.?|RPT": "Real Prop. Tax",
                    "Real Prop(erty|\\.)|RPP": "Real Prop.",
                    "Relig(ious|\\.) Corp(orations|s?\\.)|RCO": "Relig. Corp.",
                    "Retire(ment|\\.) (and|&) Soc(ial|\\.) Sec(urity|\\.)|RSS": "Retire. & Soc. Sec.",
                    "Rural Elec(tric|\\.) Coop(eratives?|s?\\.)|REL": "Rural Elec. Coop.",
                    "Second Class Cities|SCC": "Second Class Cities",
                    "Soil (and|&) Water Conserv(ation|\\.) Dist(ricts|s?\\.)|SWC": "Soil & Water Conserv. Dist.",
                    "State Administrative Procedure Act|A\\.P\\.A\\.|SAP": "A.P.A.",
                    "State Fin(ance|\\.)|STF": "State Fin.",
                    "State|STL": "State",
                    "Statute of Local Gov(ernments|s?\\.)|SLG": "Stat. Local Gov'ts",
                    "Town|TWN": "Town",
                    "Trans(portation|p?\\.) Corp(orations|s?\\.)|TCP": "Transp. Corp.",
                    "Trans(portation|p?\\.)|TRA": "Transp.",
                    "Uniform Commercial Code|U\\.?C\\.?C\\.?": "U.C.C.",
                    "Vill(age|\\.)|VIL": "Village",
                    "Vol(unteer|\\.) Ambul(ance|\\.) Workers''? Benefit|VAW": "Vol. Ambul. Workers' Ben.",
                    "Vol(unteer|\\.) Fire(fighters''?|\\.) Ben(efit|\\.)|VOL": "Vol. Fire. Ben.",
                    "Workers''? Comp(ensation|\\.)|WKC": "Workers' Comp."
                }
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "chapter",
                "lookup": {
                    "Aband\\. Prop\\.": "ABP",
                    "Agric\\. & Mkts\\.": "AGM",
                    "Alco\\. Bev\\. Cont\\.": "ABC",
                    "Alt\\. County Gov't": "ACG",
                    "Arts & Cult\\. Aff\\.": "ACA",
                    "Banking": "BNK",
                    "Ben\\. Ord\\.": "BVO",
                    "Bus\\. Corp\\.": "BSC",
                    "Canal": "CAL",
                    "C\\.P\\.L\\.R\\.": "CVP",
                    "Civ\\. Serv\\.": "CIV",
                    "Coop\\. Corp\\.": "CCO",
                    "Correct\\.": "COR",
                    "County": "CNT",
                    "Crim\\. Proc\\.": "CPL",
                    "Debt\\. & Cred\\.": "DCD",
                    "Dom\\. Rel\\.": "DOM",
                    "Econ\\. Dev\\.": "COM",
                    "Educ\\.": "EDN",
                    "Elder": "ELD",
                    "Elec\\.": "ELN",
                    "Em\\. Dom\\. Proc\\.": "EDP",
                    "Empl'rs Liab\\.": "EML",
                    "Energy": "ENG",
                    "Envtl\\. Conserv\\.": "ENV",
                    "Est\\. Powers & Trusts": "EPT",
                    "Exec\\.": "EXC",
                    "Fin\\. Serv\\.": "FIS",
                    "Gen\\. Ass'ns": "GAS",
                    "Gen\\. Bus\\.": "GBS",
                    "Gen\\. City": "GCT",
                    "Gen\\. Constr\\.": "GCN",
                    "Gen\\. Mun\\.": "GMU",
                    "Gen\\. Oblig\\.": "GOB",
                    "High\\.": "HAY",
                    "Indian": "IND",
                    "Ins\\.": "ISC",
                    "Jud\\.": "JUD",
                    "Lab\\.": "LAB",
                    "Legis\\.": "LEG",
                    "Lien": "LIE",
                    "Ltd\\. Liab\\. Co\\.": "LLC",
                    "Local Fin\\.": "LFN",
                    "Mental Hyg\\.": "MHY",
                    "Mil\\.": "MIL",
                    "Mult\\. Dwell\\.": "MDW",
                    "Mult\\. Resid\\.": "MRE",
                    "Mun\\. Home Rule": "MHR",
                    "Mun\\. Hous\\. Auth\\.": "MHA",
                    "Nav\\.": "NAV",
                    "State Print\\. & Pub\\. Docs\\.": "PPD",
                    "Parks Rec\\. & Hist\\. Preserv\\.": "PAR",
                    "P'ship": "PTR",
                    "Penal": "PEN",
                    "Pers\\. Prop\\.": "PEP",
                    "Priv\\. Hous\\. Fin\\.": "PVH",
                    "Pub\\. Auth\\.": "PBA",
                    "Pub\\. Bldgs\\.": "PBB",
                    "Pub\\. Health": "PBH",
                    "Pub\\. Hous\\.": "PBG",
                    "Pub\\. Lands": "PBL",
                    "Pub\\. Off\\.": "PBO",
                    "Rac\\. Pari-Mut\\. Wag\\. & Breed": "PML",
                    "R\\.R\\.": "RRD",
                    "Rapid Trans\\.": "RAT",
                    "Real Prop\\. Acts\\.": "RPA",
                    "Real Prop\\. Tax": "RPT",
                    "Real Prop\\.": "RPP",
                    "Relig\\. Corp\\.": "RCO",
                    "Retire\\. & Soc\\. Sec\\.": "RSS",
                    "Rural Elec\\. Coop\\.": "REL",
                    "Second Class Cities": "SCC",
                    "Soil & Water Conserv\\. Dist\\.": "SWC",
                    "A\\.P\\.A\\.": "SAP",
                    "State Fin\\.": "STF",
                    "State": "STL",
                    "Stat\\. Local Gov'ts": "SLG",
                    "Town": "TWN",
                    "Transp\\. Corp\\.": "TCP",
                    "Transp\\.": "TRA",
                    "U\\.C\\.C\\.": "UCC",
                    "Village": "VIL",
                    "Vol\\. Ambul\\. Workers' Ben\\.": "VAW",
                    "Vol\\. Fire\\. Ben\\.": "VOL",
                    "Workers' Comp\\.": "WKC"
                }
            }
        ],
        "URL": [
            "https://www.nysenate.gov/legislation/laws/{chapter}/{section}"
        ]
    },
    {
        "name": "New York Constitution",
        "defaults": {
            "name regex": "New York|N\\.? ?Y\\.?",
            "abbreviation": "N.Y.",
            "ballotpedia slug": "New_York"
        },
        "regexes": [
            "(?<!\\w)(New York|N\\.? ?Y\\.?) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (New York|N\\.? ?Y\\.?) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "North Carolina General Statutes",
        "defaults": {
            "name regex": "(North Carolina|N\\.? ?C\\.?) ?Gen(eral|\\.)",
            "abbreviation": "N.C. Gen. Stat."
        },
        "regexes": [
            "(?<!\\w)(North Carolina|N\\.? ?C\\.?) ?Gen(eral|\\.)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)[-‑–](?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            }
        ],
        "URL": [
            "https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_{chapter}/GS_{chapter}-{section}.html"
        ]
    },
    {
        "name": "North Carolina Constitution",
        "defaults": {
            "name regex": "North Carolina|N\\.? ?C\\.?",
            "abbreviation": "N.C.",
            "ballotpedia slug": "North_Carolina"
        },
        "regexes": [
            "(?<!\\w)(North Carolina|N\\.? ?C\\.?) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (North Carolina|N\\.? ?C\\.?) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "North Dakota Century Code",
        "defaults": {
            "name regex": "(North Dakota|N\\.? ?D\\.?) ?Cent(ury|\\.)",
            "abbreviation": "N.D. Cent. Code"
        },
        "regexes": [
            "(?<!\\w)(North Dakota|N\\.? ?D\\.?) ?Cent(ury|\\.)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)[-‑–](?<chapter>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)[-‑–](?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(,? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "title",
                "case": "upper"
            },
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "title",
                "sub": [
                    "\\.",
                    "-"
                ]
            },
            {
                "token": "chapter",
                "sub": [
                    "\\.",
                    "-"
                ]
            },
            {
                "token": "chapter",
                "lpad": 2
            },
            {
                "token": "section",
                "lpad": 2
            }
        ],
        "URL": [
            "https://www.lawserver.com/law/state/north-dakota/nd-code/north_dakota_code_{title}_{chapter}_{section}"
        ]
    },
    {
        "name": "North Dakota Constitution",
        "defaults": {
            "name regex": "North Dakota|N\\.? ?D\\.?",
            "abbreviation": "N.D.",
            "ballotpedia slug": "North_Dakota"
        },
        "regexes": [
            "(?<!\\w)(North Dakota|N\\.? ?D\\.?) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (North Dakota|N\\.? ?D\\.?) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Northern Mariana Islands Commonwealth Code",
        "defaults": {
            "name regex": "N(orthern|\\.) ?Mar(iana||\\.) ?I(slands|\\.)",
            "abbreviation": "N. Mar. I. Code"
        },
        "regexes": [
            "(?<!\\w)([Tt]it(le |\\. ?))?(?<title>\\d{1,2})(?!\\w) (N(orthern|\\.) ?Mar(iana||\\.) ?I(slands|\\.))( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)",
            "(?<!\\w)(N(orthern|\\.) ?Mar(iana||\\.) ?I(slands|\\.))( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?[Tt]it(le |\\. ?)(?<title>\\d{1,2})(?!\\w),? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "section",
                "case": "upper"
            }
        ],
        "URL": [
            "https://cnmilaw.org/pdf/cmc_section/T{title}/{section}.pdf"
        ]
    },
    {
        "name": "Northern Mariana Islands Constitution",
        "defaults": {
            "name regex": "N(orthern|\\.) ?Mar(iana||\\.) ?I(slands|\\.)",
            "abbreviation": "N. Mar. I.",
            "ballotpedia slug": "Northern_Mariana_Islands"
        },
        "regexes": [
            "(?<!\\w)(N(orthern|\\.) ?Mar(iana||\\.) ?I(slands|\\.)) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (N(orthern|\\.) ?Mar(iana||\\.) ?I(slands|\\.)) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Ohio Revised Code",
        "defaults": {
            "name regex": "O(hio|H)",
            "abbreviation": "Ohio Rev. Code"
        },
        "regexes": [
            "(?<!\\w)(O(hio|H))( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+[A-Zz-z]?)(?!\\w)\\.(?<section>\\d+[A-Zz-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            }
        ],
        "URL": [
            "https://codes.ohio.gov/orc/{chapter}",
            ".{section}v1"
        ]
    },
    {
        "name": "Ohio Constitution",
        "defaults": {
            "name regex": "O(hio|H)",
            "abbreviation": "Ohio",
            "ballotpedia slug": "Ohio"
        },
        "regexes": [
            "(?<!\\w)(O(hio|H)) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (O(hio|H)) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Oklahoma Statutes",
        "defaults": {
            "name regex": "Okla(homa|\\.)?|OK",
            "abbreviation": null,
            "year": "2020"
        },
        "regexes": [
            "(?<!\\w)([Tt]it(le |\\. ?))?(?<title>\\d{1,2})(?!\\w) (Okla(homa|\\.)?|OK)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)",
            "(?<!\\w)(Okla(homa|\\.)?|OK)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?[Tt]it(le |\\. ?)(?<title>\\d{1,2})(?!\\w),? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "section",
                "case": "upper"
            }
        ],
        "URL": [
            "https://law.justia.com/codes/oklahoma/{year}/title-{title}/section-{title}-{section}/index.html"
        ]
    },
    {
        "name": "Oklahoma Constitution",
        "defaults": {
            "name regex": "Okla(homa|\\.)?|OK",
            "abbreviation": "Okla.",
            "ballotpedia slug": "Oklahoma"
        },
        "regexes": [
            "(?<!\\w)(Okla(homa|\\.)?|OK) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (Okla(homa|\\.)?|OK) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Oregon Revised Statutes",
        "defaults": {
            "name regex": "Or(egon|e?\\.)|OR",
            "abbreviation": "Or. Rev. Stat."
        },
        "regexes": [
            "(?<!\\w)(Or(egon|e?\\.)|OR)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+[A-Zz-z]?)(?!\\w)\\.(?<section>\\d+[A-Zz-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            }
        ],
        "URL": [
            "https://www.oregonlaws.org/ors/{chapter}.{section}"
        ]
    },
    {
        "name": "Oregon Constitution",
        "defaults": {
            "name regex": "Or(egon|e?\\.)|OR",
            "abbreviation": "Or.",
            "ballotpedia slug": "Oregon"
        },
        "regexes": [
            "(?<!\\w)(Or(egon|e?\\.)|OR) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[IVXivx]{1,5}(-\\w(\\(\\d\\))?)?)(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?{subsection})?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[IVXivx]{1,5}(-\\w(\\(\\d\\))?)?)(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?{subsection})?)? [Oo]f [Tt]he (Or(egon|e?\\.)|OR) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Pennsylvania Consolidated Statutes",
        "defaults": {
            "name regex": "(Penn(sylvania|\\.)|Pa\\.|PA)( ?Stat\\. [Aa]nd)? ?Cons(olidated|\\.)",
            "abbreviation": "Pa. Cons. Stat."
        },
        "regexes": [
            "(?<!\\w)([Tt]it(le |\\. ?))?(?<title>\\d{1,2})(?!\\w) (Penn(sylvania|\\.)|Pa\\.|PA)( ?Stat\\. [Aa]nd)? ?Cons(olidated|\\.)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)",
            "(?<!\\w)(Penn(sylvania|\\.)|Pa\\.|PA)( ?Stat\\. [Aa]nd)? ?Cons(olidated|\\.)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?[Tt]it(le |\\. ?)(?<title>\\d{1,2})(?!\\w),? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "section",
                "case": "upper"
            }
        ],
        "URL": [
            "https://law.onecle.com/pennsylvania/title-{title}/{section}.html"
        ]
    },
    {
        "name": "Pennsylvania Code",
        "defaults": {
            "name regex": "Penn(sylvania|\\.)|Pa\\.|PA",
            "abbreviation": "Pa. Code"
        },
        "regexes": [
            "(?<!\\w)([Tt]it(le |\\. ?))?(?<title>\\d{1,2})(?!\\w) (Penn(sylvania|\\.)|Pa\\.|PA)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)",
            "(?<!\\w)(Penn(sylvania|\\.)|Pa\\.|PA)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?[Tt]it(le |\\. ?)(?<title>\\d{1,2})(?!\\w),? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "title",
                "lpad": 3
            }
        ],
        "URL": [
            "https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/{title}/chapter{chapter}/s{chapter}.{section}.html"
        ]
    },
    {
        "name": "Pennsylvania Constitution",
        "defaults": {
            "name regex": "Penn(sylvania|\\.)|Pa\\.|PA",
            "abbreviation": "Pa.",
            "ballotpedia slug": "Pennsylvania"
        },
        "regexes": [
            "(?<!\\w)(Penn(sylvania|\\.)|Pa\\.|PA) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (Penn(sylvania|\\.)|Pa\\.|PA) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Puerto Rico Constitution",
        "defaults": {
            "name regex": "Puerto Rico|P\\.? ?R\\.?",
            "abbreviation": "P.R.",
            "ballotpedia slug": "Puerto_Rico"
        },
        "regexes": [
            "(?<!\\w)(Puerto Rico|P\\.? ?R\\.?) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (Puerto Rico|P\\.? ?R\\.?) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "General Laws of Rhode Island",
        "defaults": {
            "name regex": "(Rhode Island|R\\.? ?I\\.?) ?Gen(eral|\\.)",
            "abbreviation": "R.I. Gen. Laws"
        },
        "regexes": [
            "(?<!\\w)(Rhode Island|R\\.? ?I\\.?) ?Gen(eral|\\.)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)[-‑–](?<chapter>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)[-‑–](?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(,? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "title",
                "case": "upper"
            },
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            }
        ],
        "URL": [
            "http://webserver.rilin.state.ri.us/Statutes/TITLE{title}/{title}-{chapter}/{title}-{chapter}-{section}.HTM"
        ]
    },
    {
        "name": "Rhode Island Constitution",
        "defaults": {
            "name regex": "Rhode Island|R\\.? ?I\\.?",
            "abbreviation": "R.I.",
            "ballotpedia slug": "Rhode_Island"
        },
        "regexes": [
            "(?<!\\w)(Rhode Island|R\\.? ?I\\.?) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (Rhode Island|R\\.? ?I\\.?) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "South Carolina Code of Laws",
        "defaults": {
            "name regex": "South Carolina|S\\.? ?C\\.?",
            "abbreviation": "S.C. Code"
        },
        "regexes": [
            "(?<!\\w)(South Carolina|S\\.? ?C\\.?)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)[-‑–](?<chapter>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)[-‑–](?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(,? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "title",
                "case": "upper"
            },
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "chapter",
                "lpad": 3
            }
        ],
        "URL": [
            "https://www.scstatehouse.gov/code/t{Title}c{lpad_chapter}.php#{title}-{chapter}-{section}"
        ]
    },
    {
        "name": "South Carolina Constitution",
        "defaults": {
            "name regex": "South Carolina|S\\.? ?C\\.?",
            "abbreviation": "S.C.",
            "ballotpedia slug": "South_Carolina"
        },
        "regexes": [
            "(?<!\\w)(South Carolina|S\\.? ?C\\.?) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (South Carolina|S\\.? ?C\\.?) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "South Dakota Codified Laws",
        "defaults": {
            "name regex": "(South Dakota|S\\.? ?D\\.?) ?(Codified|Comp(iled|\\.)?)",
            "abbreviation": "S.D. Codified Laws"
        },
        "regexes": [
            "(?<!\\w)(South Dakota|S\\.? ?D\\.?) ?(Codified|Comp(iled|\\.)?)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)[-‑–](?<chapter>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)[-‑–](?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(,? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "title",
                "case": "upper"
            },
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            }
        ],
        "URL": [
            "https://sdlegislature.gov/Statutes/Codified_Laws/DisplayStatute.aspx?Type=Statute&Statute={title}-{chapter}-{section}"
        ]
    },
    {
        "name": "South Dakota Constitution",
        "defaults": {
            "name regex": "South Dakota|S\\.? ?D\\.?",
            "abbreviation": "S.D.",
            "ballotpedia slug": "South_Dakota"
        },
        "regexes": [
            "(?<!\\w)(South Dakota|S\\.? ?D\\.?) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (South Dakota|S\\.? ?D\\.?) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Tennessee Code",
        "defaults": {
            "name regex": "Tenn(essee|\\.)?|TN",
            "abbreviation": "Tenn. Code"
        },
        "regexes": [
            "(?<!\\w)(Tenn(essee|\\.)?|TN)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)[-‑–](?<chapter>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)[-‑–](?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(,? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "title",
                "case": "upper"
            },
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            }
        ],
        "URL": [
            "https://www.lawserver.com/law/state/tennessee/tn-code/tennessee_code_{title}-{chapter}-{section}"
        ]
    },
    {
        "name": "Tennessee Constitution",
        "defaults": {
            "name regex": "Tenn(essee|\\.)?|TN",
            "abbreviation": "Tenn.",
            "ballotpedia slug": "Tennessee"
        },
        "regexes": [
            "(?<!\\w)(Tenn(essee|\\.)?|TN) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (Tenn(essee|\\.)?|TN) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Texas Codes",
        "defaults": {
            "name regex": "(Fl(orida|a?\\.)|FL)",
            "abbreviation": "Fla. Stat.",
            "year": "2020"
        },
        "regexes": [
            "(?<!\\w)(Tex(as|\\.)?|TX) (?<code>\\w.{2,40}?)(?!\\w)( Code)? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+[A-Zz-z]?)(?!\\w)\\.(?<section>\\d+[A-Zz-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "code",
                "lookup": {
                    "Agric(ulture|\\.)|AGC?": "Agric.",
                    "Alc(oholic|o?\\.) Bev(erage|\\.)|ABC?": "Alco. Bev.",
                    "Aux(iliary|\\.) Water Laws|A?WL": "Aux. Water Laws",
                    "Bus(iness|\\.) (and|&) Com(merce|m?\\.)|B&C|BCC?": "Bus\\. & Com\\.",
                    "Bus(iness|\\.) Org(anizations|s\\.)|BOC?": "Bus. Orgs.",
                    "Civ(il|\\.) Prac(tice|\\.) (and|&) Rem(edies|s?\\.)|CPR?C?": "Civ. Prac. & Rem.",
                    "Code( of)? Crim(inal|\\.) ?Pro(cedure|c?\\.)|CCrP|CRC?": "Crim. Proc.",
                    "Educ(ation|\\.)|EDC?": "Educ.",
                    "Elec(tion|\\.)|ELC?": "Elec.",
                    "Est(ates|\\.)|ESC?": "Est.",
                    "Fam(ily|\\.)|FAC?|FAM": "Fam.",
                    "Fin(ance|\\.)|FIC?|FIN": "Fin.",
                    "Gov(ernment|('?t)?\\.?)?|GO?VC?": "Gov't",
                    "Health (and|&) Saf(ety|\\.)|H&?SC?": "Health & Safety",
                    "Hum(an|\\.) Res(ources|\\.)|HRC?": "Hum. Res.",
                    "Ins(urance|\\.)|INC?": "Ins.",
                    "Labor|LA": "Lab\\.",
                    "Local Gov(ernment|'t)|LGC?": "Loc. Gov't",
                    "Nat(ural|\\.) Res(ources|\\.)|NRC?": "Nat. Res.",
                    "Occ(upations|\\.)|OC": "Occ.",
                    "Parks (and|&) Wild(life|\\.)|PWC?": "Parks & Wild.",
                    "Penal|PEN?|PC": "Penal",
                    "Prop(erty|\\.)|PR|PC": "Prop.",
                    "Special Dist(rict|\\.) Local Laws|Spec\\. Dists\\.|SDC?": "Spec. Dists.",
                    "Tax\\.?|TX?C": "Tax",
                    "Trans(portation|p?\\.)|TNC?": "Transp.",
                    "Util(ities|\\.)|UTC?": "Util.",
                    "Water|WAC?": "Water",
                    "Vernon’s Civ(il|\\.) Stat(utes|s?\\.)": "Vernon's Civ. Stat."
                }
            },
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "code",
                "lookup": {
                    "Agric\\.": "AG",
                    "Alco\\. Bev\\.": "AL",
                    "Aux\\. Water Laws": "WL",
                    "Bus\\. & Com\\.": "BC",
                    "Bus\\. Orgs\\.": "BO",
                    "Civ\\. Prac\\. & Rem\\.": "CP",
                    "Crim\\. Proc\\.": "CR",
                    "Educ\\.": "ED",
                    "Elec\\.": "EL",
                    "Est\\.": "ES",
                    "Fam\\.": "FA",
                    "Fin\\.": "FI",
                    "Gov't": "GV",
                    "Health & Safety": "HS",
                    "Hum\\. Res\\.": "HR",
                    "Ins\\.": "IN",
                    "Lab\\.": "LA",
                    "Loc\\. Gov't": "LG",
                    "Nat\\. Res\\.": "NR",
                    "Occ\\.": "OC",
                    "Parks & Wild\\.": "PW",
                    "Penal": "PE",
                    "Prop\\.": "PR",
                    "Spec\\. Dists\\.": "SD",
                    "Tax": "TX",
                    "Transp\\.": "TN",
                    "Util\\.": "UT",
                    "Water": "WA",
                    "Vernon's Civ\\. Stat\\.": "VC"
                }
            }
        ],
        "URL": [
            "https://statutes.capitol.texas.gov/Docs/{code}/htm/{code}.{chapter}.htm#{chapter}.{section}"
        ]
    },
    {
        "name": "Texas Constitution",
        "defaults": {
            "name regex": "Tex(as|\\.)?|TX",
            "abbreviation": "Tex."
        },
        "regexes": [
            "(?<!\\w)(Tex(as|\\.)?|TX) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (Tex(as|\\.)?|TX) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            }
        ],
        "URL": [
            "https://statutes.capitol.texas.gov/Docs/CN/htm/CN.{article}",
            "/CN.{article}.{section}",
            ".htm"
        ]
    },
    {
        "name": "Utah Code",
        "defaults": {
            "name regex": "Utah|UT",
            "abbreviation": "Utah Code"
        },
        "regexes": [
            "(?<!\\w)(Utah|UT)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)[-‑–](?<chapter>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)[-‑–](?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(,? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "title",
                "case": "upper"
            },
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            }
        ],
        "URL": [
            "https://le.utah.gov/xcode/Title{title}/Chapter{chapter}/{title}-{chapter}-S{section}.html",
            "#{title}-{chapter}-{section}{subsection}"
        ]
    },
    {
        "name": "Utah Constitution",
        "defaults": {
            "name regex": "Utah|UT",
            "abbreviation": "Utah",
            "ballotpedia slug": "Utah"
        },
        "regexes": [
            "(?<!\\w)(Utah|UT) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (Utah|UT) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Vermont Statutes",
        "defaults": {
            "name regex": "V(ermont|t\\.?)|VT",
            "abbreviation": "Vt. Stat."
        },
        "regexes": [
            "(?<!\\w)([Tt]it(le |\\. ?))?(?<title>\\d{1,2})(?!\\w) (V(ermont|t\\.?)|VT)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)",
            "(?<!\\w)(V(ermont|t\\.?)|VT)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?[Tt]it(le |\\. ?)(?<title>\\d{1,2})(?!\\w),? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "section",
                "case": "upper"
            }
        ],
        "URL": [
            "https://www.lawserver.com/law/state/vermont/vt-statutes/vermont_statutes_title_{title}_{section}"
        ]
    },
    {
        "name": "Vermont Constitution",
        "regexes": [
            "(?<!\\w)(V(ermont|t\\.?)|VT) ?Const(itution|\\.?) ?[Cc](hapter|h?\\.?) ?(?<chapter>[Ii]{1,2})(?!\\w)(,? (([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?|[Aa]rt(icle|\\.?) ?)(?<article>[\\dIVXivx]{1,8}(st|nd|th)?)(?!\\w))?(?!=\\w)",
            "(?<!\\w)[Cc](hapter|h?\\.?) ?(?<chapter>[Ii]{1,2})(?!\\w)(,? (([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?|[Aa]rt(icle|\\.?) ?)(?<article>[\\dIVXivx]{1,8}(st|nd|th)?)(?!\\w))? [Oo]f [Tt]he (V(ermont|t\\.?)|VT) ?Const(itution|\\.?)(?!=\\w)"
        ],
        "operations": [
            {
                "token": "chapter",
                "number_style": "digit"
            },
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "chapter",
                "lookup": {
                    "1": ""
                },
                "output": "is_chapter1"
            },
            {
                "token": "chapter",
                "lookup": {
                    "2": ""
                },
                "output": "is_chapter2"
            },
            {
                "token": "article",
                "number_style": "ordinal",
                "output": "article_suffix"
            },
            {
                "token": "article_suffix",
                "sub": [
                    ".+(?=..)",
                    ""
                ]
            },
            {
                "token": "article",
                "lookup": {
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
                },
                "output": "chapter2_section"
            }
        ],
        "URL": [
            "https://ballotpedia.org/",
            "{is_chapter1}Chapter_I",
            "{is_chapter2}{chapter2_section}",
            ",_Vermont_Constitution",
            "{is_chapter1}#Article_{article}{article_suffix}",
            "{is_chapter2}#Section_{article}"
        ]
    },
    {
        "name": "Virginia Code",
        "defaults": {
            "name regex": "(?<!W\\. )(?<!West )(?<!W\\.)V(irginia|a\\.|A)",
            "abbreviation": "Va. Code"
        },
        "regexes": [
            "(?<!\\w)(?<!W\\. )(?<!West )(?<!W\\.)V(irginia|a\\.|A)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Z]?)(?!\\w)[-‑–](?<section>\\d+(\\.\\d+)?[A-Z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [],
        "URL": [
            "https://law.lis.virginia.gov/vacode/title{Title}/section{title}-{section}"
        ]
    },
    {
        "name": "Virginia Constitution",
        "defaults": {
            "name regex": "(?<!W\\. )(?<!West )(?<!W\\.)V(irginia|a\\.|A)",
            "abbreviation": "Va.",
            "ballotpedia slug": "Virginia"
        },
        "regexes": [
            "(?<!\\w)(?<!W\\. )(?<!West )(?<!W\\.)V(irginia|a\\.|A) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (?<!W\\. )(?<!West )(?<!W\\.)V(irginia|a\\.|A) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Virgin Islands Code",
        "defaults": {
            "name regex": "Virgin Islands|V\\.? ?I\\.?",
            "abbreviation": "V.I. Code",
            "year": "2019"
        },
        "regexes": [
            "(?<!\\w)(Virgin Islands|V\\.? ?I\\.?)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?[Tt]it(le|\\.) (?<title>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w),? (([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)[-‑–](?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "title",
                "case": "upper"
            },
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            }
        ],
        "URL": [
            "https://law.justia.com/codes/virgin-islands/{year}/title-{title}/chapter-{chapter}/{section}/"
        ]
    },
    {
        "name": "Revised Code of Washington",
        "defaults": {
            "name regex": "Wash(ington|\\.)?|WA",
            "abbreviation": "Wash. Rev. Code"
        },
        "regexes": [
            "(?<!\\w)(Wash(ington|\\.)?|WA) ( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+[A-Zz-z]?)(?!\\w)\\.(?<chapter>\\d+[A-Zz-z]?)(?!\\w)\\.(?<section>\\d+[A-Zz-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "title",
                "case": "upper"
            },
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            }
        ],
        "URL": [
            "https://app.leg.wa.gov/RCW/default.aspx?cite={title}.{chapter}.{section}"
        ]
    },
    {
        "name": "Washington Constitution",
        "defaults": {
            "name regex": "West Virginia|W\\. ?Va?\\.|WV",
            "abbreviation": "W. Va.",
            "ballotpedia slug": "West_Virginia"
        },
        "regexes": [
            "(?<!\\w)(West Virginia|W\\. ?Va?\\.|WV) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (West Virginia|W\\. ?Va?\\.|WV) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "West Virginia Code",
        "defaults": {
            "name regex": "West Virginia|W\\. ?Va?\\.|WV",
            "abbreviation": "W. Va. Code"
        },
        "regexes": [
            "(?<!\\w)(West Virginia|W\\. ?Va?\\.|WV)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+[A-Zz-z]?)(?!\\w)[-‑–](?<article>\\d+[A-Zz-z]?)(?!\\w)[-‑–](?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?{subsection})?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "article",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            }
        ],
        "URL": [
            "http://www.wvlegislature.gov/wvcode/ChapterEntire.cfm?chap={chapter}&art={article}&section={section}"
        ]
    },
    {
        "name": "Wisconsin Statutes",
        "defaults": {
            "name regex": "Wis(consin|\\.)?|WI",
            "abbreviation": "Wis. Stat."
        },
        "regexes": [
            "(?<!\\w)(Wis(consin|\\.)?|WI)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<chapter>\\d+[A-Zz-z]?)(?!\\w)\\.(?<section>\\d+[A-Zz-z]?)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            }
        ],
        "URL": [
            "https://docs.legis.wisconsin.gov/document/statutes/{chapter}.{section}",
            "{subsection}"
        ]
    },
    {
        "name": "Wisconsin Constitution",
        "defaults": {
            "name regex": "Wis(consin|\\.)?|WI",
            "abbreviation": "Wis.",
            "ballotpedia slug": "Wisconsin"
        },
        "regexes": [
            "(?<!\\w)(Wis(consin|\\.)?|WI) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (Wis(consin|\\.)?|WI) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "roman"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Wyoming Statutes",
        "defaults": {
            "name regex": "Wyo(ming|\\.)?|WY",
            "abbreviation": "Wyo. Stat."
        },
        "regexes": [
            "(?<!\\w)(Wyo(ming|\\.)?|WY)( ?Rev(ised|\\.))?( ?Ann(otated|\\.))?( ?Gen(eral|\\.))? ?(C(odes?|\\.)|Stat(utes|s?\\.?))( Serv(ice|\\.))?( ?Ann(otated|\\.))?,? ?(([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?)?(?<title>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)[-‑–](?<chapter>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)[-‑–](?<section>\\d+(\\.\\d+)?[A-Za-z]?)(?!\\w)(,? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "title",
                "case": "upper"
            },
            {
                "token": "chapter",
                "case": "upper"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "title",
                "lpad": 2,
                "output": "lpad_title"
            }
        ],
        "URL": [
            "https://wyoleg.gov/statutes/compress/title{lpad_title}.pdf#search={title}-{chapter}-{section}."
        ]
    },
    {
        "name": "Wyoming Constitution",
        "defaults": {
            "name regex": "Wyo(ming|\\.)?|WY",
            "abbreviation": "Wyo.",
            "ballotpedia slug": "Wyoming"
        },
        "regexes": [
            "(?<!\\w)(Wyo(ming|\\.)?|WY) Const(itution|\\.)?,? [Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)?(?!=\\w)",
            "(?<!\\w)[Aa]rt(icle|\\.)? ?(?<article>[\\dIVXivx]{1,8})(?!\\w)(,? ([Ss]ec(tions?|t?s?\\.?)|(&sect;|&#167|§){1,2}) ?(?<section>\\d[\\w.]*\\w|\\d)(?!\\w)(((,? )?sub(sections?|divisions?|(sec|d(iv)?)?s?\\.))? ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?)? [Oo]f [Tt]he (Wyo(ming|\\.)?|WY) Const(itution|\\.)?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "article",
                "number_style": "digit"
            },
            {
                "token": "section",
                "case": "upper"
            },
            {
                "token": "article",
                "number_style": "digit"
            }
        ],
        "URL": [
            "https://ballotpedia.org/Article_{article},_{ballotpedia slug}_Constitution",
            "#Section_{section}"
        ]
    },
    {
        "name": "Uniform Commercial Code",
        "regexes": [
            "(?<!\\w)(U\\.? ?C\\.? ?C\\.?|Uniform Com(mercial|m?\\.) Code) (§§? ?)?(?<article>\\d+)(?!\\w)[–‑-](?<section>\\d+)(?!\\w)( ?(?<subsection>(\\(\\w{1,4}\\))+)(?!\\w))?(?!=\\w)"
        ],
        "operations": [
            {
                "token": "subsection",
                "sub": [
                    "\\).+",
                    ")"
                ]
            }
        ],
        "URL": [
            "https://www.law.cornell.edu/ucc/{article}/{article}-{section}",
            "#{article}-{section}{subsection}"
        ]
    }
];


class Citation {
  constructor(template, text) {
    // first, try matching the template
    let regexMatch = false;
    for (var r in template.regexes) {
      regexMatch = text.match(new RegExp(template.regexes[r], 'i'));
      if (regexMatch) {
        break;
      }
    }
    if (!regexMatch) {
      throw Error("The given query does not match the given template.");
    }
    
    this.tokens = regexMatch.groups;
    this.text = text;
    this.template = template.name;
    
    // this variable will become this.processedTokens
    var tokens = {};
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
      var inputValue = tokens[operation.token];
      
      // skip tokens that were not set
      if (inputValue === undefined) {
        continue;
      }
      else {
        appliedAnOperation = true;
      }
      
      // determine output token
      var output;
      if ('output' in operation) {
        output = operation.output;
      }
      else {
        output = operation.token;
      }
      
      // handle case modification
      if ('case' in operation) {
        if (operation.case == 'upper') {
          tokens[output] = inputValue.toUpperCase();
        }
        else if (operation.case == 'lower') {
          tokens[output] = inputValue.toLowerCase();
        }
        else if (operation.case == 'title') {
          tokens[output] = inputValue.replace(/\w\S*/g, titleCase);
        }
      }
      
      // handle regex substitution
      if ('sub' in operation) {
        let regex = new RegExp(operation.sub[0], 'ig');
        let outputValue = inputValue.replace(regex, operation.sub[1]);
        tokens[output] = outputValue;
      }
      
      // handle regex lookups
      let lookupTypes = ['lookup', 'optionalLookup'];
      for (var t in lookupTypes) {
        if (lookupTypes[t] in operation) {
          let outputValue;
          
          for (var key in operation[lookupTypes[t]]) {
            let regexStr = '^(' + key + ')$';
            if (tokens[operation.token].match(new RegExp(regexStr, 'i'))) {
              outputValue = operation[lookupTypes[t]][key];
              break;
            }
          }
          if (outputValue !== undefined) {
            tokens[output] = outputValue;
          }
          else {
            throw Error(
              "Sorry, I can't find that" + operation.token + " in the " + template
            );
          }
        }
      }
      
      // Bidirectional conversion between digits and roman numerals. This method
      // is lazy and only goes up to 100, but if you need it to go higher, you
      // can just add more numeral-digit pairs to the list.
      if ('number_style' in operation) {
        let numerals = [
          ['i', '1', 'one', 'first'], ['ii', '2', 'two', 'second'],
          ['iii', '3', 'three', 'third'], ['iv', '4', 'four', 'fourth'],
          ['v', '5', 'five', 'fifth'], ['vi', '6', 'six', 'sixth'],
          ['vii', '7', 'seven', 'seventh'], ['viii', '8', 'eight', 'eighth'],
          ['ix', '9', 'nine', 'ninth'], ['x', '10', 'ten', 'tenth'],
          ['xi', '11', 'eleven', 'eleventh'],
          ['xii', '12', 'twelve', 'twelfth'],
          ['xiii', '13', 'thirteen', 'thirteenth'],
          ['xiv', '14', 'fourteen', 'fourteenth'],
          ['xv', '15', 'fifteen', 'fifteenth'],
          ['xvi', '16', 'sixteen', 'sixteenth'],
          ['xvii', '17', 'seventeen', 'seventeenth'],
          ['xviii', '18', 'eighteen', 'eighteenth'],
          ['xix', '19', 'nineteen', 'nineteenth'],
          ['xx', '20', 'twenty', 'twentieth'], ['xxi', '21'], ['xxii', '22'],
          ['xxiii', '23'], ['xxiv', '24'], ['xxv', '25'], ['xxvi', '26'],
          ['xxvii', '27'], ['xxviii', '28'], ['xxix', '29'],
          ['xxx', '30', 'thirty', 'thirtieth'], ['xxxi', '31'],
          ['xxxii', '32'], ['xxxiii', '33'], ['xxxiv', '34'], ['xxxv', '35'],
          ['xxxvi', '36'], ['xxxvii', '37'], ['xxxviii', '38'],
          ['xxxix', '39'], ['xl', '40', 'forty', 'fortieth'], ['xli', '41'],
          ['xlii', '42'], ['xliii', '43'],['xliv', '44'], ['xlv', '45'],
          ['xlvi', '46'], ['xlvii', '47'], ['xlviii', '48'], ['xlix', '49'],
          ['l', '50', 'fifty', 'fiftieth'], ['li', '51'], ['lii', '52'],
          ['liii', '53'], ['liv', '54'], ['lv', '55'], ['lvi', '56'],
          ['lvii', '57'], ['lviii', '58'], ['lix', '59'],
          ['lx', '60', 'sixty', 'sixtieth'], ['lxi', '61'], ['lxii', '62'],
          ['lxiii', '63'], ['lxiv', '64'], ['lxv', '65'], ['lxvi', '66'],
          ['lxvii', '67'], ['lxviii', '68'], ['lxix', '69'],
          ['lxx', '70', 'seventy', 'seventieth'], ['lxxi', '71'],
          ['lxxii', '72'], ['lxxiii', '73'], ['lxxiv', '74'], ['lxxv', '75'],
          ['lxxvi', '76'], ['lxxvii', '77'], ['lxxviii', '78'],
          ['lxxix', '79'], ['lxxx', '80', 'eighty', 'eightieth'],
          ['lxxxi', '81'], ['lxxxii', '82'], ['lxxxiii', '83'],
          ['lxxxiv', '84'], ['lxxxv', '85'], ['lxxxvi', '86'],
          ['lxxxvii', '87'], ['lxxxviii', '88'], ['lxxxix', '89'],
          ['xc', '90', 'ninety', 'ninetieth'], ['xci', '91'], ['xcii', '92'],
          ['xciii', '93'], ['xciv', '94'], ['xcv', '95'], ['xcvi', '96'],
          ['xcvii', '97'], ['xcviii', '98'], ['xcix', '99'],
          ['c', '100', 'one-hundred', 'one-hundredth']
        ];
        // write the rest of the cardinal and ordinal numbers
        let tensPlace;
        let onesPlace;
        for (row in numerals) {
          if (numerals[row].length > 2) {
            tensPlace = numerals[row][2];
          }
          else {
            onesPlace = (row + 1) % 10;
            numerals[row] = [
              numerals[row][0],
              numerals[row][1],
              tensPlace + '-' + numerals[onesPlace][2],
              tensPlace + '-' + numerals[onesPlace][3],
            ];
          }
        }
        
        // determine which format is being used to look up the other
        let target;
        if (operation.number_style == 'roman') {
          target = 0;
        }
        else if (operation.number_style == 'digit') {
          target = 1;
        }
        else if (operation.number_style == 'cardinal') {
          target = 2;
        }
        else if (operation.number_style == 'ordinal') {
          target = 3;
        }
        // perform the appropriate lookup, outputting the input value
        // unchanged if the lookup fails
        tokens[output] = inputValue;
        let key = inputValue.toLowerCase();
        let matched = false;
        for (var row in numerals) {
          for (var col in numerals[row]) {
            if (numerals[row][col] == key) {
              tokens[output] = numerals[row][target];
              matched = true;
              break;
            }
          }
          if (matched) {
            break;
          }
        }
      }
      
      // left pad with zeros
      if ('lpad' in operation) {
        let outputValue = inputValue;
        while (outputValue.length < operation.lpad) {
          outputValue = '0' + outputValue;
        }
        tokens[output] = outputValue;
      }
    }
    this.processedTokens = tokens;
    
    // finally, fill in placeholders in the URL template to generate the
    // URL, skipping any sections of the template that contain a missing
    // placeholder.
    let URL = [];
    let missingPlaceholder = new RegExp("\\{.+\\}");
    for (var part in template.URL) {
      let URLPart = template.URL[part];
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
