---
sidebar_position: 7
---

# Other helper objects

Here, we describe other helper objects that are used as part of the main graph entities.

## AccessRight
_Type: One of `{ gold, green, hybrid, bronze }` &bull; Cardinality: ONE_

Subclass of [BestAccessRight](#bestaccessright), indicates information about rights held in and over the resource and the open Access Route.

### openAccessRoute

Indicates the OpenAccess status. Values are set according to the [Unpaywall methodology](https://support.unpaywall.org/support/solutions/articles/44001777288-what-do-the-types-of-oa-status-green-gold-hybrid-and-bronze-mean-).

## AlternateIdentifier
Type used to represent the information associated to persistent identifiers associated to the result that have not been forged by an authority for that pid type. For example we collect metadata from an institutional repository that provides as identifier for the result also the doi.

<details>
  <summary>Example</summary>
  

```json 
 { 
  "scheme" : "doi",
  "value" : "10.17182/hepdata.9959" 
 }
```
</details>

### scheme 
_Type: String &bull; Cardinality: ONE_

Vocabulary reference.

### value
_Type: String &bull; Cardinality: ONE_

Value from the given scheme/vocabulary.

## APC
Indicates the money spent to make a book or article available in Open Access. Sources for this information includes the OpenAPC initiative.

<details>
  <summary>Example</summary>
  

```json 
{ 
  "currency" : "EU",
  "amount": "1000" 
}
```
</details>

### currency
_Type: String &bull; Cardinality: ONE_

The system of money in which the amount is expressed (Euro, USD, etc).

### amount
_Type: String &bull; Cardinality: ONE_

The quantity of money.

## Author

Represents the result author.

<details>
  <summary>Example</summary>
  

```json 
{
    "fullname":"Turunen, Heidi",
    "name":"Heidi",
    "surname":"Turunen",
    "rank":1,
    "pid":{
        "id":{
            "scheme":"orcid",
            "value":"0000-0001-7169-1177" 
        },
        "provenance":{
            "provenance":"Harvested",
            "trust":"0.9" 
        }
    }
}
```
</details>

### fullname
_Type: String &bull; Cardinality: ONE_

Author's full name.

### name
_Type: String &bull; Cardinality: ONE_

Author's given name.

### surname
_Type: String &bull; Cardinality: ONE_

Author's family name.

### rank
_Type: String &bull; Cardinality: ONE_

Author's order in the list of authors for the given result.

### pid
_Type: [AuthorPid](#authorpid) &bull; Cardinality: ONE_

Persistent identifier associated with this author.

## AuthorPid

The author's persistent identifier.

<details>
  <summary>Example</summary>
  

```json 
{
    "id":{
        "scheme":"orcid",
        "value":"0000-0001-7169-1177" 
    },
    "provenance":{
        "provenance":"Inferred by OpenAIRE",
        "trust":"0.85" 
    }
}
```
</details>

### id 
_Type: [AuthorPidSchemaValue](#authorpidschemavalue) &bull; Cardinality: ONE_

### provenance
_Type: [Provenance](#provenance-2) &bull; Cardinality: ONE_

## AuthorPidSchemaValue
Type used to represent the scheme and value for the author's pid.

<details>
  <summary>Example</summary>
  

```json 
{
	"scheme" : "orcid",
	"value" : "0000-1111-2222-3333"
}
```
</details>

### schema
_Type: String &bull; Cardinality: ONE_

The author's pid scheme. OpenAIRE currently supports ORCID.

### value
_Type: String &bull; Cardinality: ONE_

The author's pid value.

## BestAccessRight
Indicates the most open access rights \*available among the result Instances.

\* where the openness is defined by the ordering of the access right terms in the following.
```
OPEN SOURCE > OPEN > EMBARGO (6MONTHS) > EMBARGO (12MONTHS) > RESTRICTED > CLOSED > UNKNOWN
```
<details>
  <summary>Example</summary>
  

```json 
{
    "code":"c_16ec",
    "label":"RESTRICTED",
    "scheme":"http://vocabularies.coar-repositories.org/documentation/access_rights/" 
}
```

</details>


### code
_Type: String &bull; Cardinality: ONE_
<span className="todo">TODO</span>

### label
_Type: String &bull; Cardinality: ONE_
<span className="todo">TODO</span>

### scheme
_Type: String &bull; Cardinality: ONE_
<span className="todo">TODO</span>

## Container
This field has information about the conference or journal where the result has been presented or published.

### name
_Type: String &bull; Cardinality: ONE_
Name of the journal or conference.

### issnPrinted 
_Type: String &bull; Cardinality: ONE_

The journal printed issn.

### issnOnline 
_Type: String &bull; Cardinality: ONE_

The journal online issn.

### issnLinking 
_Type: String &bull; Cardinality: ONE_

The journal linking issn.

### iss 
_Type: String &bull; Cardinality: ONE_

The journal issue.

### sp 
_Type: String &bull; Cardinality: ONE_

The start page.

### ep 
_Type: String &bull; Cardinality: ONE_

The end page.

### vol 
_Type: String &bull; Cardinality: ONE_

The journal volume.

### edition 
_Type: String &bull; Cardinality: ONE_

The edition of the journal or conference.

### conferenceplace 
_Type: String &bull; Cardinality: ONE_

The place of the conference.

### conferencedate 
_Type: String &bull; Cardinality: ONE_

The date of the conference.


## ControlledField
<span className="todo">TODO: similar to AlternateIdentifier and ResultPid?</span>

Generic type used to represent the information described by a scheme and a value in that scheme (i.e. pid).

<details>
  <summary>Example</summary>
  

```json 
{ 
  "scheme" : "DOI",
  "value" : "10.5281/zenodo.4707307" 
}
```

</details>

### scheme
_Type: String &bull; Cardinality: ONE_

Vocabulary reference.

### value
_Type: String &bull; Cardinality: ONE_

Value from the given scheme/vocabulary.

## Country
To represent the generic country code and label.


### code
_Type: String &bull; Cardinality: ONE_

The country code (i.e. IT).
<span className="todo">TODO: based on which list?</span>

### label
_Type: String &bull; Cardinality: ONE_

The country label (i.e. Italy).



## GeoLocation
Represents the geolocation information.

### point
_Type: String &bull; Cardinality: ONE_
<span className="todo">TODO</span>

### box
_Type: String &bull; Cardinality: ONE_
<span className="todo">TODO</span>

### place
_Type: String &bull; Cardinality: ONE_
<span className="todo">TODO</span>

## Instance
An instance is one specific materialization or version of the result. For example, you can have one result with three instances as result of deduplication:

* one is the pre-print
* one is the post-print
* one is the published version

Each instance is characterized by the properties described in the following table.

<details>
  <summary>Example</summary>
  

```json 
{
    "accessright":{
        "code":"c_abf2",
        "label":"OPEN",
        "openAccessRoute":"gold",
        "scheme":"http://vocabularies.coar-repositories.org/documentation/access_rights/" 
    },
    "alternateIdentifier":[],
    "license":"http://creativecommons.org/licenses/by-nc/4.0",
    "pid":[],
    "publicationdate":"2009-02-12",
    "refereed":"UNKNOWN",
    "type":"Article",
    "url":["https://periodicos2.uesb.br/index.php/folio/article/view/4296"]
}
```

</details>

### accessright
_Type: [AccessRight](#accessright) &bull; Cardinality: ONE_

Maps [dc:rights](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/rights/), describes the access rights of the web resources relative to this instance.

### alternateIdentifier
_Type: [AlternateIdentifier](#alternateidentifier) &bull; Cardinality: MANY_

All the identifiers associated to the result other than the authoritative ones.

### articleprocessingcharge
_Type: [APC](#apc) &bull; Cardinality: ONE_

The money spent to make this book or article available in Open Access. Source for this information is the OpenAPC initiative.

### license
_Type: String &bull; Cardinality: ONE_

The license URL.

### pid
_Type: [ResultPid](#resultpid) &bull; Cardinality: MANY_

The set of persistent identifiers associated to this instance that have been collected from an authority for the pid type (i.e. Crossref/Datacite for doi). See [OpenAIRE_entity_identifier_and_PID_mapping_policy](https://support.openaire.eu/projects/docs/wiki/OpenAIRE_entity_identifier_and_PID_mapping_policy) for more information.

### publicationdate
_Type: String &bull; Cardinality: ONE_

The publication date of the research product.

### refereed
_Type: String &bull; Cardinality: ONE_

Describes if this instance has been peer-reviewed or not. Allowed values are peerReviewed, nonPeerReviewed, UNKNOWN (as defined in https://api.openaire.eu/vocabularies/dnet:review_levels). For example: 

* peerReviewed: https://api.openaire.eu/vocabularies/dnet:review_levels/0001
* nonPeerReviewed: https://api.openaire.eu/vocabularies/dnet:review_levels/0002

based on guidelines covers the vocabularies

* [DRIVE guidelines 2.0 - info:eu-repo/semantic](https://wiki.surfnet.nl/download/attachments/10851536/DRIVER_Guidelines_v2_Final_2008-11-13.pdf) (OpenAIRE v1.0 till v3.0 - Literature)
* [COAR Vocabulary v2.0 and v3.0](https://vocabularies.coar-repositories.org/resource_types/) (OpenAIRE v4 - Inst.+Them.)

### type
_Type: String &bull; Cardinality: ONE_

The specific sub-type of this instance (see https://api.openaire.eu/vocabularies/dnet:result_typologies following the links)
### url
_Type: String &bull; Cardinality: MANY_

URLs to the instance. They may link to the actual full-text or to the landing page at the hosting source.

## Language
Represents information for the language of the result

### code
_Type: String &bull; Cardinality: ONE_

Alpha-3/ISO 639-2 code of the language.

### label
_Type: String &bull; Cardinality: ONE_

Language label in English

## OrganizationPid	

The schema and value for identifiers of the organization.

<details>
  <summary>Example</summary>
  

```json 
{ 
  "scheme" : "GRID",
  "value" : "grid.7119.e" 
}
```

</details>

### scheme
_Type: String &bull; Cardinality: ONE_

Vocabulary reference (i.e. isni).

### value
_Type: String &bull; Cardinality: ONE_

Value from the given scheme/vocabulary (i.e. 0000000090326370).

## Provenance
Indicates the process that produced (or provided) the information, and the trust associated to the information.

<details>
  <summary>Example</summary>
  

```json 
[
	{
		"provenance":"Harvested",
		"trust":"0.9"
	},
	{
		"provenance":"Inferred by OpenAIRE",
		"trust":"0.875"
	},
	{
		"provenance":"Linked by user",
		"trust":"0.8"
	}
]
```

</details>

### provenance
_Type: String &bull; Cardinality: ONE_

Provenance term from the vocabulary [dnet:provenanceActions](https://api.openaire.eu/vocabularies/dnet:provenanceActions).

### trust
_Type: String &bull; Cardinality: ONE_

Trust, expressed as a number in the range [0-1].

## ResultCountry
It is for the country associated to the result. 
It is a subclass of [Country](#country) and extends it with provenance information.

<details>
  <summary>Example</summary>
  

```json 
{
    "code" : "IT",
    "label": "Italy",
    "provenance" : {
         "provenance": "inferred by OpenAIRE",
         "trust": "0.85"
     }
}
```

</details>

### provenance
_Type: [Provenance](#provenance-2) &bull; Cardinality: ONE_

Indicates the reason why this country is associated to this result.

## ResultPid
Type used to represent the information associated to persistent identifiers for the result that have been forged by an authority for that pid type.

<span className="todo">Seems to be similar to the AlternateIdentifier. What is the difference?</span>

<details>
  <summary>Example</summary>
  

```json 
{
    "scheme" : "doi",
    "value" : "10.21511/bbs.13(3).2018.13" 
}
```
</details>

### scheme
_Type: String &bull; Cardinality: ONE_

Vocabulary reference.

### value
_Type: String &bull; Cardinality: ONE_

Value from the given scheme/vocabulary.

## Subject
Represents keywords associated to the result.

<details>
  <summary>Example</summary>
  

```json 
[
	{
	    "subject":{
	        "scheme": "acm",
	        "value": "GeneralLiterature_MISCELLANEOUS"
	    },
	    "provenance": {
	        "provenance": "Inferred by OpenAIRE",
	        "trust": "0.891"
	    }
	},
	{
	    "provenance":{
	        "provenance":"Harvested",
	        "trust":"0.9"
	    },
	    "subject":{
	        "scheme":"keyword",
	        "value":"SVOC"
	    }
	}
]
```
</details>

### subject
_Type: [SubjectSchemeValue](#subjectschemevalue) &bull; Cardinality: ONE_

Contains the subject term: subject type (keyword, MeSH, etc) and the subject term (medicine, chemistry, etc.).

### provenance
_Type: [Provenance](#provenance-2) &bull; Cardinality: ONE_

Contains provenance information for the subject term.

## SubjectSchemeValue
Subject classification against a vocabulary

<details>
  <summary>Example</summary>
  

```json 
[
	{
		"scheme" : "keyword",
		"value" : "pyrolysis-oil"
	},
	{
		"value":"food and beverages",
		"scheme":"mesheuropmc"
	}
]
```
</details>

### scheme 
_Type: String &bull; Cardinality: ONE_

OpenAIRE subject classification scheme (https://api.openaire.eu/vocabularies/dnet:subject_classification_typologies).

### value
_Type: String &bull; Cardinality: ONE_

The value for the subject in the selected scheme. When the scheme is 'keyword', it means that the subject is free-text (i.e. not a term from a controlled vocabulary).
