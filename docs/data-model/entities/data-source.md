---
sidebar_position: 2
---

# Data source

OpenAIRE entity instances are created out of data collected from various data sources of different kinds, such as publication repositories, dataset archives, CRIS systems, funder databases, etc. Data sources export information packages (e.g., XML records, HTTP responses, RDF data, JSON) that may contain information on one or more of such entities and possibly relationships between them. For example, a metadata record about a project carries information for the creation of a Project entity and its participants (as Organization entities). It is important, once each piece of information is extracted from such packages and inserted into the OpenAIRE information space as an entity, for such pieces to keep provenance information relative to the originating data source. This is to give visibility to the data source, but also to enable the reconstruction of the very same piece of information if problems arise.


<span className="todo">Definitions for the re3data specific elements from: https://gfzpublic.gfz-potsdam.de/rest/items/item_758898_6/component/file_775891/content</span>

--- 

## The `DataSource` object 

### id
_Type: String &bull; Cardinality: ONE_

Main entity identifier, created according to [OpenAIRE_entity_identifier_and_PID_mapping_policy](https://support.openaire.eu/projects/docs/wiki/OpenAIRE_entity_identifier_and_PID_mapping_policy).

### originalId
_Type: String &bull; Cardinality: MANY_

The list of original ids associated to the datasource.

### pid
_Type: [ControlledField](other#controlledfield) &bull; Cardinality: MANY_

The persistent identifiers for the datasource.

### datasourcetype
_Type: [ControlledField](other#controlledfield) &bull; Cardinality: ONE_

The datasource type (e.g. pubsrepository::institutional, Institutional Repository) as in the vocabulary [dnet:datasource_typologies](https://api.openaire.eu/vocabularies/dnet:datasourceCompatibilityLevel).

### openairecompatibility
_Type: String &bull; Cardinality: ONE_

The OpenAIRE compatibility of the ingested results, indicates which guidelines they are compliant to the vocabulary [dnet:datasourceCompatibilityLevel](https://api.openaire.eu/vocabularies/dnet:datasourceCompatibilityLevel).

### officialname
_Type: String &bull; Cardinality: ONE_

The official name of the datasource.

### englishname
_Type: String &bull; Cardinality: ONE_

The English name of the datasource.

### websiteurl
_Type: String &bull; Cardinality: ONE_

The URL of the website of the datasource.

### logourl
_Type: String &bull; Cardinality: ONE_

The URL of the logo for the datasource.

### dateofvalidation
_Type: String &bull; Cardinality: ONE_

The date of validation against the guidelines for the datasource records.

### description
_Type: String &bull; Cardinality: ONE_

The description for the datasource.

### subjects
_Type: String &bull; Cardinality: ONE_

The subjects of the contents provided by the datasource.

### languages
_Type: String &bull; Cardinality: MANY_

The languages of the contents provided by the datasource (OpenDOAR only).

### contenttypes
_Type: String &bull; Cardinality: MANY_

The typologies of the contents provided by the datasource (OpenDOAR only).

### releasestartdate
_Type: String &bull; Cardinality: ONE_

<span className="todo">TODO</span>

### releaseenddate
_Type: String &bull; Cardinality: ONE_

<span className="todo">TODO</span>

### accessrights
_Type: String &bull; Cardinality: ONE_

Open, restricted or closed.

### uploadrights
_Type: String &bull; Cardinality: ONE_

Open, restricted or closed.

### databaseaccessrestriction
_Type: String &bull; Cardinality: ONE_

All existing access restrictions to the research data repository. Allowed values are: feeRequired, registration, other (re3data only).

### datauploadrestriction
_Type: String &bull; Cardinality: ONE_

All existing restrictions to the data upload. (re3data only).

### versioning
_Type: Boolean &bull; Cardinality: ONE_

The research data repository supports versioning of research data. (re3data only).

### citationguidelineurl
_Type: String &bull; Cardinality: ONE_

The URL of the research data repository providing information on how to cite its research data. The DataCite citation format is recommended (http://www.datacite.org/whycitedata). (re3data only)

### pidsystems
_Type: String &bull; Cardinality: ONE_

### certificates
_Type: String &bull; Cardinality: ONE_

<span className="todo">TODO</span>

### policies
_Type: String &bull; Cardinality: MANY_

<span className="todo">TODO</span>

### journal
_Type: [Container](other#container) &bull; Cardinality: ONE_

<span className="todo">TODO</span>
