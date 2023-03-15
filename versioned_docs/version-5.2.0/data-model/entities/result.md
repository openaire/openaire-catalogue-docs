---
sidebar_position: 1
---

# Result

Results are intended as digital objects, described by metadata, resulting from a scientific process.
In this page, we descibe the properties of the `Result` object.

Moreover, there are the following sub-types of a `Result`, that inherit all its properties and further extend it:
* [Publication](#publication)
* [Dataset](#dataset)
* [Software](#software)
* [Other research product](#other-research-product)

--- 

## The `Result` object 

### id
_Type: String &bull; Cardinality: ONE_

Main entity identifier, created according to the [OpenAIRE entity identifier and PID mapping policy](../pids-and-identifiers).

```json
"id": "50|doi_dedup___::80f29c8c8ba18c46c88a285b7e739dc3"
```

### type
_Type: String  &bull; Cardinality: ONE_

Type of the result. Possible types: 

* `publication`
* `dataset`
* `software`
* `other`

as declared in the terms from the [dnet:result_typologies vocabulary](https://api.openaire.eu/vocabularies/dnet:result_typologies).

```json
"type": "publication"
```

### originalId
_Type: String &bull; Cardinality: MANY_

Identifiers of the record at the original sources.

```json
"originalId": [
    "oai:pubmedcentral.nih.gov:8024784",
    "S0048733321000305",
    "10.1016/j.respol.2021.104226",
    "3136742816"
]
```

### maintitle
_Type: String &bull; Cardinality: ONE_

A name or title by which a scientific result is known. May be the title of a publication, of a dataset or the name of a piece of software.

```json
"maintitle": "The fall of the innovation empire and its possible rise through open science"
```

### subtitle

_Type: String &bull; Cardinality: ONE_

Explanatory or alternative name by which a scientific result is known.

```json
"subtitle": "An analysis of cases from 1980 - 2020"
```

### author
_Type: [Author](other#author) &bull; Cardinality: MANY_

The main researchers involved in producing the data, or the authors of the publication.

```json
"author": [
    {
        "fullname": "E. Richard Gold",
        "rank": 1, 
        "name": "Richard",
        "surname": "Gold",
        "pid": {
            "id": {
                "scheme": "orcid",
                "value": "0000-0002-3789-9238" 
            },
            "provenance"; {
                "provenance": "Harvested",
                "trust": "0.9" 
            }
        }
    }, 
    ...
]
```
### bestaccessright
_Type: [BestAccessRight](other#bestaccessright) &bull; Cardinality: ONE_

The most open access right associated to the manifestations of this research results.

```json
"bestaccessright": {
    "code": "c_abf2",
    "label": "OPEN",
    "scheme": "http://vocabularies.coar-repositories.org/documentation/access_rights/"
}
```

### contributor
_Type: String &bull; Cardinality: MANY_

The institution or person responsible for collecting, managing, distributing, or otherwise contributing to the development of the resource.

```json
"contributor": [
    "University of Zurich",
    "Wright, Aidan G C",
    "Hallquist, Michael", 
    ...
]
```

### country
_Type: [ResultCountry](other#resultcountry) &bull; Cardinality: MANY_

Country associated with the result because it is the country of the organisation that manages the institutional repository or national aggregator or CRIS system from which this record was collected
Country of affiliations of authors can be found instead in the affiliation rel.

```json
"country": [
    {
        "code": "CH",
        "label": "Switzerland",
        "provenance": {
            "provenance": "Inferred by OpenAIRE",
            "trust": "0.85"
        }
    }, 
    ...
]
```

### coverage
_Type: String &bull; Cardinality: MANY_

###  dateofcollection
_Type: String &bull; Cardinality: ONE_

When OpenAIRE collected the record the last time. 

```json
"dateofcollection": "2021-06-09T11:37:56.248Z"
```

### description
_Type: String &bull; Cardinality: MANY_

A brief description of the resource and the context in which the resource was created.

```json
"description": [
    "Open science partnerships (OSPs) are one mechanism to reverse declining efficiency. OSPs are public-private partnerships that openly share publications, data and materials.",
    "There is growing concern that the innovation system's ability to create wealth and attain social benefit is declining in effectiveness. This article explores the reasons for this decline and suggests a structure, the open science partnership, as one mechanism through which to slow down or reverse this decline.",
    "The article examines the empirical literature of the last century to document the decline. This literature suggests that the cost of research and innovation is increasing exponentially, that researcher productivity is declining, and, third, that these two phenomena have led to an overall flat or declining level of innovation productivity.", 
    ...
]
```

### embargoenddate
_Type: String &bull; Cardinality: ONE_

Date when the embargo ends and this result turns Open Access.

```json
"embargoenddate": "2017-01-01"
```

### indicators
_Type: [Indicator](other#indicator) &bull; Cardinality: ONE_

The indicators computed for this result;
currently, the following two types of indicators are supported: [impact indicators](/graph-production-workflow/indicators-ingestion/impact-indicators) and [usage statistics indicators](/graph-production-workflow/indicators-ingestion/usage-counts).

```json
"indicators": {
        "impactMeasures": {
                "influence": {
                        "score": "123",
                        "class": "C2"
                },
                "influence_alt" : {
                        "score": "456",
                        "class": "C3"
                },
                "popularity": {
                        "score": "234",
                        "class": "C1"
                },
                "popularity_alt": {
                        "score": "345",
                        "class": "C5"
                },
                "impulse": {
                        "score": "987",
                        "class": "C3"
                }
        },
        "usageCounts": {
                "downloads": "10",
                 "views": "20"
        }
}
```

### instance
_Type: [Instance](other#instance) &bull; Cardinality: MANY_

Specific materialization or version of the result. For example, you can have one result with three instances: one is the pre-print, one is the post-print, one is the published version.

```json
"instance": [
    {
        "accessright": {
            "code": "c_abf2",
            "label": "OPEN",
            "openAccessRoute": "gold",
            "scheme": "http://vocabularies.coar-repositories.org/documentation/access_rights/"
        },
        "alternateIdentifier": [
            {
                "scheme": "doi",
                "value": "10.1016/j.respol.2021.104226"
            },
            ...
        ],
        "articleprocessingcharge": {
            "amount": "4063.93",
            "currency": "EUR"
        },
        "license": "http://creativecommons.org/licenses/by-nc/4.0",
        "pid": [
            {
                "scheme": "pmc",
                "value": "PMC8024784"
            },
            ...
        ],
        
        "publicationdate": "2021-01-01",
        "refereed": "UNKNOWN",
        "type": "Article",
        "url": [
            "http://europepmc.org/articles/PMC8024784"
        ]
    },
    ...
]
```

### language
_Type: [Language](other#language) &bull; Cardinality: ONE_

The alpha-3/ISO 639-2 code of the language. Values controlled by the [dnet:languages vocabulary](https://api.openaire.eu/vocabularies/dnet:languages).

```json
"language": {
    "code": "eng",
    "label": "English"
}
```
### lastupdatetimestamp
_Type: Long &bull; Cardinality: ONE_

Timestamp of last update of the record in OpenAIRE.

```json
"lastupdatetimestamp": 1652722279987
```

### pid
_Type: [ResultPid](other#resultpid) &bull; Cardinality: MANY_

Persistent identifiers of the result. See also the [OpenAIRE entity identifier and PID mapping policy](../pids-and-identifiers) to learn more.

```json
"pid": [
    {
        "scheme": "pmc",
        "value": "PMC8024784"
    },
    {
        "scheme": "doi",
        "value": "10.1016/j.respol.2021.104226"
    },
    ...
]
```

### publicationdate
_Type: String &bull; Cardinality: ONE_

Main date of the research product: typically the publication or issued date. In case of a research result with different versions with different dates, the date of the result is selected as the most frequent well-formatted date. If not available, then the most recent and complete date among those that are well-formatted. For statistics, the year is extracted and the result is counted only among the result of that year. Example: Pre-print date: 2019-02-03, Article date provided by repository: 2020-02, Article date provided by Crossref: 2020, OpenAIRE will set as date 2019-02-03, because it’s the most recent among the complete and well-formed dates. If then the repository updates the metadata and set a complete date (e.g. 2020-02-12), then this will be the new date for the result because it becomes the most recent most complete date. However, if OpenAIRE then collects the pre-print from another repository with date 2019-02-03, then this will be the “winning date” because it becomes the most frequent well-formatted date.

```json
"publicationdate": "2021-03-18"
```

### publisher
_Type: String &bull; Cardinality: ONE_

The name of the entity that holds, archives, publishes prints, distributes, releases, issues, or produces the resource.

```json
"publisher": "Elsevier, North-Holland Pub. Co"
```

### source
_Type: String &bull; Cardinality: MANY_

A related resource from which the described resource is derived. See definition of Dublin Core field [dc:source](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/source).

```json
"source": [
      "Research Policy",
      "Crossref",
      ...
]
```

### subjects
_Type: [Subject](other#subject) &bull; Cardinality: MANY_

Subject, keyword, classification code, or key phrase describing the resource.

```json
"subjects": [
    {
        "provenance": {
            "provenance": "Harvested",
            "trust": "0.9"
        },
        "subject": {
            "scheme": "keyword",
            "value": "Open science"
        }
    },
    ...
]
```
--- 

## Sub-types

There are the following sub-types of `Result`. Each inherits all its fields and extends them with the following.

### Publication

Metadata records about research literature (includes types of publications listed [here](http://api.openaire.eu/vocabularies/dnet:result_typologies/publication)).

#### container 
_Type: [Container](other#container) &bull; Cardinality: ONE_

Container has information about the conference or journal where the result has been presented or published.

```json
"container": {
    "edition": "",
    "iss": "5",
    "issnLinking": "",
    "issnOnline": "1873-7625",
    "issnPrinted": "0048-7333",
    "name": "Research Policy",
    "sp": "12",
    "ep": "22",
    "vol": "50"
}
```
### Dataset

Metadata records about research data (includes the subtypes listed [here](http://api.openaire.eu/vocabularies/dnet:result_typologies/dataset)).

#### size
_Type: String &bull; Cardinality: ONE_

The declared size of the dataset.

```json
"size": "10129818"
```

#### version
_Type: String &bull; Cardinality: ONE_

The version of the dataset.

```json
"version": "v1.3"
```

#### geolocation
_Type: [GeoLocation](other#geolocation) &bull; Cardinality: MANY_

The list of geolocations associated with the dataset.

```json
"geolocation": [
    {
        "box": "18.569386 54.468973  18.066832 54.83707",
        "place": "Tübingen, Baden-Württemberg, Southern Germany",
        "point": "7.72486 50.1084"
    },
    ...
]
```

### Software

Metadata records about research software (includes the subtypes listed [here](http://api.openaire.eu/vocabularies/dnet:result_typologies/software)).

#### documentationUrl
_Type: String &bull; Cardinality: MANY_

The URLs to the software documentation. 

```json
"documentationUrl": [ 
    "https://github.com/openaire/iis/blob/master/README.markdown",
    ...
]
```

#### codeRepositoryUrl
_Type: String &bull; Cardinality: ONE_

The URL to the repository with the source code.

```json
"codeRepositoryUrl": "https://github.com/openaire/iis"
```

#### programmingLanguage
_Type: String &bull; Cardinality: ONE_

The programming language.

```json
"programmingLanguage": "Java"
```

### Other research product

Metadata records about research products that cannot be classified as research literature, data or software (includes types of products listed [here](http://api.openaire.eu/vocabularies/dnet:result_typologies/other)).

#### contactperson
_Type: String &bull; Cardinality: MANY_

Information on the person responsible for providing further information regarding the resource.

```json
"contactperson": [
    "Noémie Dominguez",
    ...    
]
```

#### contactgroup
_Type: String &bull; Cardinality: MANY_

Information on the group responsible for providing further information regarding the resource.

```json
"contactgroup": [
    "Networked Multimedia Information Systems (NeMIS)",
    ...
]
```

#### tool
_Type: String &bull; Cardinality: MANY_

Information about tool useful for the interpretation and/or re-use of the research product.
