---
sidebar_position: 7
---

# Other component objects

Here, we describe other component objects that are used as part of the main graph entities.

## AccessRight

Subclass of [BestAccessRight](#bestaccessright), indicates information about rights held in and over the resource and the open Access Route.

### openAccessRoute
_Type: One of `{ gold, green, hybrid, bronze }` &bull; Cardinality: ONE_

Indicates the OpenAccess status. Values are set according to the [Unpaywall methodology](https://support.unpaywall.org/support/solutions/articles/44001777288-what-do-the-types-of-oa-status-green-gold-hybrid-and-bronze-mean-).

```json
"openAccessRoute": "gold"
```

## AlternateIdentifier
Type used to represent the information associated to persistent identifiers associated to the research product that have not been forged by an authority for that pid type. For example we collect metadata from an institutional repository that provides as identifier for the research product also the DOI.

### scheme 
_Type: String &bull; Cardinality: ONE_

Vocabulary reference.

```json
"scheme": "doi"
```

### value
_Type: String &bull; Cardinality: ONE_

Value from the given scheme/vocabulary.

```json
"value": "10.1016/j.respol.2021.104226"
```

## APC
Indicates the money spent to make a book or article available in Open Access. Sources for this information includes the OpenAPC initiative.

### currency
_Type: String &bull; Cardinality: ONE_

The system of money in which the amount is expressed (Euro, USD, etc).

```json
"currency": "EU"
```

### amount
_Type: String &bull; Cardinality: ONE_

The quantity of money.

```json
"amount": "1000"
```

## Author

Represents the research product author.

### fullname
_Type: String &bull; Cardinality: ONE_

Author's full name.

```json 
"fullname": "Turunen, Heidi"
```

### name
_Type: String &bull; Cardinality: ONE_

Author's given name.

```json
"name": "Heidi"
```

### surname
_Type: String &bull; Cardinality: ONE_

Author's family name.

```json
"surname": "Turunen"
```

### rank
_Type: String &bull; Cardinality: ONE_

Author's order in the list of authors for the given research product.

```json
"rank": 1
```

### pid
_Type: [AuthorPid](#authorpid) &bull; Cardinality: ONE_

Persistent identifier associated with this author.

```json
"pid": {
    "id": {
        "scheme": "orcid",
        "value": "0000-0001-7169-1177" 
    },
    "provenance": {
        "provenance": "Harvested",
        "trust": "0.9" 
    }
}
```

## AuthorPid

The author's persistent identifier.

### id 
_Type: [AuthorPidSchemaValue](#authorpidschemavalue) &bull; Cardinality: ONE_

```json
"id": {
    "scheme": "orcid",
    "value": "0000-0001-7169-1177" 
}
```

### provenance
_Type: [Provenance](#provenance-2) &bull; Cardinality: ONE_

The reason why the pid was associated to the author.

```json
"provenance": {
    "provenance": "Inferred by OpenAIRE",
    "trust": "0.85" 
}
```

## AuthorPidSchemaValue
Type used to represent the scheme and value for the author's pid.

### schema
_Type: String &bull; Cardinality: ONE_

The author's pid scheme. OpenAIRE currently supports ORCID.

```json
"scheme": "orcid"
```

### value
_Type: String &bull; Cardinality: ONE_

The author's pid value in that scheme.

```json
"value": "0000-1111-2222-3333"
```

## BestAccessRight
Indicates the most open access rights \*available among the research product instances.

\* where the openness is defined by the ordering of the access right terms in the following.
```
OPEN SOURCE > OPEN > EMBARGO (6MONTHS) > EMBARGO (12MONTHS) > RESTRICTED > CLOSED > UNKNOWN
```

### code
_Type: String &bull; Cardinality: ONE_

COAR access mode code: http://vocabularies.coar-repositories.org/documentation/access_rights/.

```json
"code": "c_16ec"
```

### label
_Type: String &bull; Cardinality: ONE_

Label for the access mode.

```json
"label": "RESTRICTED"
```

### scheme
_Type: String &bull; Cardinality: ONE_

Scheme of reference for access right code. Currently, always set to COAR access rights vocabulary: http://vocabularies.coar-repositories.org/documentation/access_rights/.

```json
"scheme": "http://vocabularies.coar-repositories.org/documentation/access_rights/"
```

## BipIndicator

The different citation-based impact indicators as computed by [BIP!](https://bip.imsi.athenarc.gr/).


### indicator
_Type: String &bull; Cardinality: ONE_

The name of indicator; it can be either one of: 
* `influence`: it reflects the overall/total (citation-based) impact of an article in the research community at large, based on the underlying citation network (diachronically).
* `influence_alt`: it is an alternative to the "Influence" indicator, which also reflects the overall/total (citation-based) impact of an article in the research community at large, based on the underlying citation network (diachronically).
* `popularity`: it reflects the "current" (citation-based) impact/attention (the "hype") of an article in the research community at large, based on the underlying citation network.
* `popularity_alt`: it is an alternative to the "Popularity" indicator, which also reflects the "current" (citation-based) impact/attention (the "hype") of an article in the research community at large, based on the underlying citation network.
* `impulse`: it reflects the initial momentum of an article directly after its publication, based on the underlying citation network.

For more details on how these indicators are calculated, please refer [here](/graph-production-workflow/indicators-ingestion/impact-indicators).

```json
"influence": {
    "score": "123",
    "class": "C2"
} 
```

### class
_Type: String &bull; Cardinality: ONE_

The impact class assigned based on the indicator score. 

To facilitate comprehension, BIP! also offers impact classes for articles, to group together those that have similar impact. The following 5 classes are provided:
* `C1`: Top 0.01%
* `C2`: Top 0.1%
* `C3`: Top 1%
* `C4`: Top 10%
* `C5`: Bottom 90%

```json
"class": "C2"
```

### score
_Type: String &bull; Cardinality: ONE_

The actual indicator score.

```json
"score": "1234"
```

## Container
This field has information about the conference or journal where the research product has been presented or published.

### name
_Type: String &bull; Cardinality: ONE_

Name of the journal or conference.

```json
"name": "Research Policy"
```

### issnPrinted 
_Type: String &bull; Cardinality: ONE_

The journal printed issn.

```json
"issnPrinted": "0048-7333"
```

### issnOnline 
_Type: String &bull; Cardinality: ONE_

The journal online issn.

```json
"issnOnline": "1873-7625"
```

### issnLinking 
_Type: String &bull; Cardinality: ONE_

The journal linking issn.

### iss 
_Type: String &bull; Cardinality: ONE_

The journal issue.

```json
"iss": "5"
```

### sp 
_Type: String &bull; Cardinality: ONE_

The start page.

```json
"sp": "12"
```

### ep 
_Type: String &bull; Cardinality: ONE_

The end page.

```json
"ep": "22"
```

### vol 
_Type: String &bull; Cardinality: ONE_

The journal volume.

```json
"vol": "50"
```

### edition 
_Type: String &bull; Cardinality: ONE_

The edition of the journal or conference.

### conferenceplace 
_Type: String &bull; Cardinality: ONE_

The place of the conference.

```json
"conferenceplace": "Padua, Italy"
```

### conferencedate 
_Type: String &bull; Cardinality: ONE_

The date of the conference.

```json
"conferencedate": "2022-09-22"
```

## ControlledField
<!-- <span className="todo">TODO: similar to AlternateIdentifier and ResultPid?</span> -->

Generic type used to represent the information described by a scheme and a value in that scheme (i.e. pid).

### scheme
_Type: String &bull; Cardinality: ONE_

Vocabulary reference.

```json
"scheme": "DOI"
```

### value
_Type: String &bull; Cardinality: ONE_

Value from the given scheme/vocabulary.

```json
"value": "10.5281/zenodo.4707307" 
```

## Country
To represent the generic country code and label.

### code
_Type: String &bull; Cardinality: ONE_

ISO 3166-1 alpha-2 country code.

```json
"code" : "IT"
```

### label
_Type: String &bull; Cardinality: ONE_

The country label.

```json
"label": "Italy"
```

## Funding
Funding information for a project.

### funding_stream
_Type: [FundingStream](#fundingstream) &bull; Cardinality: ONE_

Funding information for the project.

```json
"funding_stream": {
    "description": "Horizon 2020 Framework Programme - Research and Innovation action",
    "id": "EC::H2020::RIA"
}
```
### jurisdiction
_Type: String &bull; Cardinality: ONE_

Geographical jurisdiction (e.g. for European Commission is EU, for Croatian Science Foundation is HR).

```json
"jurisdiction": "EU"
```

### name
_Type: String &bull; Cardinality: ONE_

The name of the funder.

```json
"name": "European Commission"
```

### shortName
_Type: String &bull; Cardinality: ONE_

The short name of the funder.

```json
"shortName": "EC"
```

## FundingStream
Description of a funding stream.

###  id
_Type: String &bull; Cardinality: ONE_

The identifier of the funding stream.

```json
"id": "EC::H2020::RIA"
```

### description
_Type: String &bull; Cardinality: ONE_

Short description of the funding stream.

```json
"description": "Horizon 2020 Framework Programme - Research and Innovation action"
```

## GeoLocation
Represents the geolocation information.

### point
_Type: String &bull; Cardinality: ONE_

A point with Latitude and Longitude.

```json
"point": "7.72486 50.1084"
```

### box
_Type: String &bull; Cardinality: ONE_

A specified bounding box defined by two longitudes (min and max) and two latitudes (min and max). 


```json
"box": "18.569386 54.468973  18.066832 54.83707"
```

### place
_Type: String &bull; Cardinality: ONE_

The name of a specific place.

```json
"place": "Tübingen, Baden-Württemberg, Southern Germany"
```

## Grant
The money granted to a project.

### currency
_Type: String &bull; Cardinality: ONE_

The currency of the granted amount (e.g. EUR).

```json
"currency": "EUR"
```

### fundedamount
_Type: Number &bull; Cardinality: ONE_

The funded amount.

```json
"fundedamount": 1.0E7
```

### totalcost
_Type: Number &bull; Cardinality: ONE_

The total cost of the project.

```json
"totalcost": 1.0E7
```

## H2020Programme
The H2020 programme funding a project.

### code
_Type: String &bull; Cardinality: ONE_

The code of the programme.

```json
"code": "H2020-EU.1.4.1.3."
```

### description
_Type: String &bull; Cardinality: ONE_

The description of the programme.

```json
"description": "Development, deployment and operation of ICT-based e-infrastructures"
```

## Instance
An instance is one specific materialization or version of the research product. For example, you can have one research product with three instances due to deduplication:

* one is the pre-print
* one is the post-print
* one is the published version

Each instance is characterized by the properties that follow.

### accessright
_Type: [AccessRight](#accessright) &bull; Cardinality: ONE_

Maps [dc:rights](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/rights/), describes the access rights of the web resources relative to this instance.

```json
"accessright": {
    "code": "c_abf2",
    "label": "OPEN",
    "openAccessRoute": "gold",
    "scheme": "http://vocabularies.coar-repositories.org/documentation/access_rights/" 
}
```

### alternateIdentifier
_Type: [AlternateIdentifier](#alternateidentifier) &bull; Cardinality: MANY_

All the identifiers associated to the research product other than the authoritative ones.

```json
"alternateIdentifier": [
    {
        "scheme": "doi",
        "value": "10.1016/j.respol.2021.104226"
    },
    ...
]
```

### articleprocessingcharge
_Type: [APC](#apc) &bull; Cardinality: ONE_

The money spent to make this book or article available in Open Access. Source for this information is the OpenAPC initiative.

```json
"articleprocessingcharge": {
    "currency": "EUR",
    "amount": "1000" 
}
```

### license
_Type: String &bull; Cardinality: ONE_

The license URL.

```json
"license": "http://creativecommons.org/licenses/by-nc/4.0"
```

### pid
_Type: [ResultPid](#resultpid) &bull; Cardinality: MANY_

The set of persistent identifiers associated to this instance that have been collected from an authority for the pid type (i.e. Crossref/Datacite for doi). See the [OpenAIRE entity identifier and PID mapping policy](../pids-and-identifiers) for more information.

```json
"pid": [
    {
        "scheme": "pmc",
        "value": "PMC8024784"
    },
    ...
]
```

### publicationdate
_Type: String &bull; Cardinality: ONE_

The publication date of the research product.

```json
"publicationdate": "2009-02-12"
```

### refereed
_Type: String &bull; Cardinality: ONE_

Describes if this instance has been peer-reviewed or not. Allowed values are peerReviewed, nonPeerReviewed, UNKNOWN (as defined in https://api.openaire.eu/vocabularies/dnet:review_levels). For example: 

* peerReviewed: https://api.openaire.eu/vocabularies/dnet:review_levels/0001
* nonPeerReviewed: https://api.openaire.eu/vocabularies/dnet:review_levels/0002

based on guidelines covers the vocabularies

* [DRIVE guidelines 2.0 - info:eu-repo/semantic](https://wiki.surfnet.nl/download/attachments/10851536/DRIVER_Guidelines_v2_Final_2008-11-13.pdf) (OpenAIRE v1.0 till v3.0 - Literature)
* [COAR Vocabulary v2.0 and v3.0](https://vocabularies.coar-repositories.org/resource_types/) (OpenAIRE v4 - Inst.+Them.)

```json
"refereed": "UNKNOWN"
```

### type
_Type: String &bull; Cardinality: ONE_

The specific sub-type of this instance (see https://api.openaire.eu/vocabularies/dnet:result_typologies following the links)

```json
"type": "Article"
```

### url
_Type: String &bull; Cardinality: MANY_

URLs to the instance. They may link to the actual full-text or to the landing page at the hosting source.

```json
"url": [
    "https://periodicos2.uesb.br/index.php/folio/article/view/4296",
    ...    
]
```

## Indicator

These are indicators computed for a specific OpenAIRE research product.

Each Indicator object is composed of the following properties:

### bipIndicators
_Type: [BipIndicator](#bipindicator) &bull; Cardinality: MANY_

These indicators, provided by [BIP!](https://bip.imsi.athenarc.gr/), estimate the citation-based impact of a research product. 

For details about their calculation, please refer [here](/graph-production-workflow/indicators-ingestion/impact-indicators).

```json
"bipIndicators": [
        {
                "indicator": "influence",
                "score": "123",
                "class": "C2"
        },
        {
                "indicator": "influence_alt",
                "score": "456",
                "class": "C3"
        },
        {
                "indicator": "popularity",
                "score": "234",
                "class": "C1"
        },
        {
                "indicator": "popularity_alt",
                "score": "345",
                "class": "C5"
        },
        {
                "indicator": "impulse",
                "score": "987",
                "class": "C3"
        }
]
```

### usageCounts
_Type: [UsageCounts](#usagecounts-1) &bull; Cardinality: ONE_

These measures, computed by the [UsageCounts Service](https://usagecounts.openaire.eu/), are based on usage statistics.

Please refer [here](/graph-production-workflow/indicators-ingestion/usage-counts) for more details.

```json
"usageCounts":{
      "downloads": "10",
      "views": "20"
}
```
## Language
Represents information for the language of the research product.

### code
_Type: String &bull; Cardinality: ONE_

Alpha-3/ISO 639-2 code of the language. Values controlled by the [dnet:languages vocabulary](https://api.openaire.eu/vocabularies/dnet:languages).

```json
"code": "eng"
```

### label
_Type: String &bull; Cardinality: ONE_

Language label in English.

```json
"label": "English"
```


## OrganizationPid	

The schema and value for identifiers of the organization.

### scheme
_Type: String &bull; Cardinality: ONE_

Vocabulary reference (i.e. isni).

```json
"scheme" : "GRID"
```

### value
_Type: String &bull; Cardinality: ONE_

Value from the given scheme/vocabulary (i.e. 0000000090326370).

```json
"value" : "grid.7119.e"
```

## Provenance
Indicates the process that produced (or provided) the information, and the trust associated to the information.

### provenance
_Type: String &bull; Cardinality: ONE_

Provenance term from the vocabulary [dnet:provenanceActions](https://api.openaire.eu/vocabularies/dnet:provenanceActions).

```json
"provenance": "Harvested"
```

### trust
_Type: String &bull; Cardinality: ONE_

Trust, expressed as a number in the range [0-1].

```json
"trust": "0.9"
```

## ResultCountry
This is the country associated to the research product. 
It is a subclass of [Country](#country) and extends it with provenance information.

### provenance
_Type: [Provenance](#provenance-2) &bull; Cardinality: ONE_

Indicates the reason why this country is associated to this research product.

```json
"provenance": {
    "provenance": "inferred by OpenAIRE",
    "trust": "0.85"
}
```

## ResultPid
Type used to represent the information associated to persistent identifiers for the research product that have been forged by an authority for that pid type.

<!-- <span className="todo">Seems to be similar to the AlternateIdentifier. What is the difference?</span> -->

### scheme
_Type: String &bull; Cardinality: ONE_

The scheme of the persistent identifier for the research product (i.e. doi). If the pid is here it means the information for the pid has been collected from an authority for that pid type (i.e. Crossref/Datacite for doi). The set of authoritative pid is: `doi` when collected from Crossref or Datacite, `pmid` when collected from EuroPubmed, `arxiv` when collected from arXiv, `handle` from the repositories.

```json
"scheme": "doi"
```

### value
_Type: String &bull; Cardinality: ONE_

The value expressed in the scheme (i.e. 10.1000/182).

```json
"value": "10.21511/bbs.13(3).2018.13"
```

## Subject
Represents keywords associated to the research product.

### subject
_Type: [SubjectSchemeValue](#subjectschemevalue) &bull; Cardinality: ONE_

Contains the subject term: subject type (keyword, MeSH, etc) and the subject term (medicine, chemistry, etc.).

```json
"subject": {
    "scheme": "keyword",
    "value": "SVOC"
}
```

### provenance
_Type: [Provenance](#provenance-2) &bull; Cardinality: ONE_

Contains provenance information for the subject term.

```json
"provenance": {
    "provenance": "Harvested",
    "trust": "0.9"
}
```

## SubjectSchemeValue
Subject classification against a vocabulary

### scheme 
_Type: String &bull; Cardinality: ONE_

OpenAIRE subject classification scheme (https://api.openaire.eu/vocabularies/dnet:subject_classification_typologies).

```json
"scheme" : "keyword"
```

### value
_Type: String &bull; Cardinality: ONE_

The value for the subject in the selected scheme. When the scheme is 'keyword', it means that the subject is free-text (i.e. not a term from a controlled vocabulary).

```json
"value" : "pyrolysis-oil"
```

## UsageCounts

The usage counts indicator computed for this research product.

### views
_Type: String &bull; Cardinality: ONE_

The number of views for this research product.

```json
"views": "10"
```

### downloads
_Type: String &bull; Cardinality: ONE_

The number of downloads for this research product.

```json
"downloads": "5"
```