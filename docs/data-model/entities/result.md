---
sidebar_position: 1
---

# Result (Research Product)

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

Main entity identifier, created according to 
<span className="todo">[OpenAIRE entity identifier and PID mapping policy](https://support.openaire.eu/projects/docs/wiki/OpenAIRE_entity_identifier_and_PID_mapping_policy)</span>.

### type
_Type: String  &bull; Cardinality: ONE_

Type of the result. Possible types: 

* `publication`
* `dataset`
* `software`
* `other`

as declared in the terms from the [dnet:result_typologies vocabulary](https://api.openaire.eu/vocabularies/dnet:result_typologies).

### originalId
_Type: String &bull; Cardinality: MANY_

Identifiers of the record at the original sources.

### maintitle
_Type: String &bull; Cardinality: ONE_

A name or title by which a scientific result is known. May be the title of a publication, of a dataset or the name of a piece of software.

### subtitle
_Type: String &bull; Cardinality: ONE_

Explanatory or alternative name by which a scientific result is known.

### author
_Type: [Author](other#author) &bull; Cardinality: MANY_

The main researchers involved in producing the data, or the authors of the publication.

### bestaccessright
_Type: [BestAccessRight](other#bestaccessright) &bull; Cardinality: ONE_

The most open access right associated to the manifestations of this research results.

### contributor
_Type: String &bull; Cardinality: MANY_

The institution or person responsible for collecting, managing, distributing, or otherwise contributing to the development of the resource.

### country
_Type: [ResultCountry](other#resultcountry) &bull; Cardinality: MANY_

Country associated with the result because it is the country of the organisation that manages the institutional repository or national aggregator or CRIS system from which this record was collected
Country of affiliations of authors can be found instead in the affiliation rel.

### coverage
_Type: String &bull; Cardinality: MANY_
<span className="todo">TODO</span>

###  dateofcollection
_Type: String &bull; Cardinality: ONE_

When OpenAIRE collected the record the last time. 
<span className="todo">TODO: we should indicate the used date format</span>

### description
_Type: String &bull; Cardinality: MANY_

A brief description of the resource and the context in which the resource was created.

### embargoenddate
_Type: String &bull; Cardinality: ONE_

Date when the embargo ends and this result turns Open Access. <span className="todo">TODO: we should indicate the used date format</span>

### instance
_Type: [Instance](other#instance) &bull; Cardinality: MANY_

Specific materialization or version of the result. For example, you can have one result with three instances: one is the pre-print, one is the post-print, one is the published version

### language
_Type: [Language](other#language) &bull; Cardinality: ONE_

The `alpha-3/ISO 639-2` code of the language. Values controlled by the [dnet:languages vocabulary](https://api.openaire.eu/vocabularies/dnet:languages)

### lastupdatetimestamp
_Type: Long &bull; Cardinality: ONE_

Timestamp of last update of the record in OpenAIRE.

### pid
_Type: [ResultPid](other#resultpid) &bull; Cardinality: MANY_

Persistent identifiers of the result. See also <span className="todo">[OpenAIRE entity identifier and PID mapping policy](https://support.openaire.eu/projects/docs/wiki/OpenAIRE_entity_identifier_and_PID_mapping_policy)</span> to learn more.

### publicationdate
_Type: String &bull; Cardinality: ONE_

Main date of the research product: typically the publication or issued date. In case of a research result with different versions with different dates, the date of the result is selected as the most frequent well-formatted date. If not available, then the most recent and complete date among those that are well-formatted. For statistics, the year is extracted and the result is counted only among the result of that year. Example: Pre-print date: 2019-02-03, Article date provided by repository: 2020-02, Article date provided by Crossref: 2020, OpenAIRE will set as date 2019-02-03, because it’s the most recent among the complete and well-formed dates. If then the repository updates the metadata and set a complete date (e.g. 2020-02-12), then this will be the new date for the result because it becomes the most recent most complete date. However, if OpenAIRE then collects the pre-print from another repository with date 2019-02-03, then this will be the “winning date” because it becomes the most frequent well-formatted date.

### publisher
_Type: String &bull; Cardinality: ONE_

The name of the entity that holds, archives, publishes prints, distributes, releases, issues, or produces the resource.

### source
_Type: String &bull; Cardinality: MANY_

A related resource from which the described resource is derived. See definition of Dublin Core field [dc:source](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/source).

### subjects
_Type: [Subject](other#subject) &bull; Cardinality: MANY_

Subject, keyword, classification code, or key phrase describing the resource.

--- 

## Sub-types

There are the following sub-types of `Result`. Each inherits all its fields and extends them with the following.

### Publication

#### container 
_Type: [Container](other#container) &bull; Cardinality: ONE_

Container has information about the conference or journal where the result has been presented or published.

### Dataset

#### size
_Type: String &bull; Cardinality: ONE_

The size of the dataset.

#### version
_Type: String &bull; Cardinality: ONE_

The version of the dataset.

#### geolocation
_Type: [GeoLocation](other#geolocation) &bull; Cardinality: MANY_

The list of geolocations associated with the dataset.

### Software

#### documentationUrl
_Type: String &bull; Cardinality: MANY_

The URLs to the software documentation. 

#### codeRepositoryUrl
_Type: String &bull; Cardinality: ONE_

The URL to the repository holding the source code,

#### programmingLanguage
_Type: String &bull; Cardinality: ONE_

The programming language.

### Other research product

#### contactperson
_Type: String &bull; Cardinality: MANY_

The contact person for this ORP.

#### contactgroup
_Type: String &bull; Cardinality: MANY_

The information for the contact group.

#### tool
_Type: String &bull; Cardinality: MANY_

Information about tool useful for the interpretation and/or re-use of the research product.

