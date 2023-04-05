---
sidebar_position: 2
---

# Data source

OpenAIRE entity instances are created out of data collected from various data sources of different kinds, such as publication repositories, dataset archives, CRIS systems, funder databases, etc. Data sources export information packages (e.g., XML records, HTTP responses, RDF data, JSON) that may contain information on one or more of such entities and possibly relationships between them. 

For example, a metadata record about a project carries information for the creation of a Project entity and its participants (as Organization entities). It is important, once each piece of information is extracted from such packages and inserted into the OpenAIRE information space as an entity, for such pieces to keep provenance information relative to the originating data source. This is to give visibility to the data source, but also to enable the reconstruction of the very same piece of information if problems arise.

--- 

## The `DataSource` object 

### id
_Type: String &bull; Cardinality: ONE_

The OpenAIRE id of the data source, created according to the [OpenAIRE entity identifier and PID mapping policy](../pids-and-identifiers).

```json
"id": "10|issn___print::22c514d022b199c346e7f29ca06efc95"
```

### originalId
_Type: String &bull; Cardinality: MANY_

The list of original identifiers associated to the datasource.

```json
"originalId": [
    "issn___print::2451-8271",
    ...
]
```

### pid

_Type: [ControlledField](other#controlledfield) &bull; Cardinality: MANY_

The persistent identifiers for the datasource.

```json
"pid": [
    {
        "scheme": "DOI",
        "value": "10.5281/zenodo.4707307" 
    },
    ...
]
```

### datasourcetype
_Type: [ControlledField](other#controlledfield) &bull; Cardinality: ONE_

The datasource type; see the vocabulary [dnet:datasource_typologies](https://api.openaire.eu/vocabularies/dnet:datasource_typologies).

```json
"datasourcetype": {
    "scheme": "pubsrepository::journal",
    "value": "Journal"
}
```

### openairecompatibility
_Type: String &bull; Cardinality: ONE_

The OpenAIRE compatibility of the ingested results, indicates which guidelines they are compliant according to the vocabulary [dnet:datasourceCompatibilityLevel](https://api.openaire.eu/vocabularies/dnet:datasourceCompatibilityLevel).

```json
"openairecompatibility": "collected from a compatible aggregator"
```

### officialname
_Type: String &bull; Cardinality: ONE_

The official name of the datasource.

```json
"officialname": "Recent Patents and Topics on Medical Imaging"
```

### englishname
_Type: String &bull; Cardinality: ONE_

The English name of the datasource.

```json
"englishname": "Recent Patents and Topics on Medical Imaging"
```

### websiteurl
_Type: String &bull; Cardinality: ONE_

The URL of the website of the datasource.

```json
"websiteurl": "http://dspace.unict.it/"
```

### logourl
_Type: String &bull; Cardinality: ONE_

The URL of the logo for the datasource.

```json
"logourl": "https://impactum-journals.uc.pt/public/journals/26/pageHeaderLogoImage_en_US.png"
```

### dateofvalidation
_Type: String &bull; Cardinality: ONE_

The date of validation against the OpenAIRE guidelines for the datasource records.

```json
"dateofvalidation": "2016-10-10"
```

### description
_Type: String &bull; Cardinality: ONE_

The description for the datasource.

```json
"description": "Recent Patents on Medical Imaging publishes review and research articles, and guest edited single-topic issues on recent patents in the field of medical imaging. It provides an important and reliable source of current information on developments in the field. The journal is essential reading for all researchers involved in Medical Imaging."
```

### subjects
_Type: String &bull; Cardinality: MANY_

List of subjects associated to the datasource

```json
"subjects": [
    "Medicine",
    "Imaging",
    ...
]
```

### languages
_Type: String &bull; Cardinality: MANY_

The languages present in the data source's content, as defined by OpenDOAR.

```json
"languages":[ 
    "eng",
    ...
]
```

### contenttypes
_Type: String &bull; Cardinality: MANY_

Types of content in the data source, as defined by OpenDOAR

```json
"contenttypes": [
    "Journal articles",
    ...
]
```

### releasestartdate
_Type: String &bull; Cardinality: ONE_

Releasing date of the data source, as defined by re3data.org.

```json
"releasestartdate": "2010-07-24"
```

### releaseenddate
_Type: String &bull; Cardinality: ONE_

Date when the data source went offline or stopped ingesting new research data. As defined by re3data.org

```json
"releaseenddate": "2016-03-28"
```

### accessrights
_Type: String &bull; Cardinality: ONE_

Type of access to the data source, as defined by re3data.org. Possible values: `{ open, restricted, closed }`.

```json
"accessrights": "open"
```

### uploadrights
_Type: String &bull; Cardinality: ONE_

Type of data upload, as defined by re3data.org; one of `{ open, restricted, closed }`.

```json
"uploadrights": "closed"
```

### databaseaccessrestriction
_Type: String &bull; Cardinality: ONE_

Access restrictions to the research data repository. Allowed values are: `{ feeRequired, registration, other }`.

This field only applies for re3data data source; see [re3data schema specification](https://gfzpublic.gfz-potsdam.de/rest/items/item_758898_6/component/file_775891/content) for more details.

```json
"databaseaccessrestriction": "registration"
```

### datauploadrestriction
_Type: String &bull; Cardinality: ONE_

Upload restrictions applied by the datasource, as defined by re3data.org. One of `{ feeRequired, registration, other }`.

This field only applies for re3data data source; see [re3data schema specification](https://gfzpublic.gfz-potsdam.de/rest/items/item_758898_6/component/file_775891/content) for more details.

```json
"datauploadrestriction": "feeRequired registration"
```

### versioning
_Type: Boolean &bull; Cardinality: ONE_

Whether the research data repository supports versioning:
`yes` if the data source supports versioning, `no` otherwise.

This field only applies for re3data data source; see [re3data schema specification](https://gfzpublic.gfz-potsdam.de/rest/items/item_758898_6/component/file_775891/content) for more details.

```json
"versioning": true
```

### citationguidelineurl
_Type: String &bull; Cardinality: ONE_

The URL of the data source providing information on how to cite its items. The DataCite citation format is recommended (http://www.datacite.org/whycitedata). 

This field only applies for re3data data source; see [re3data schema specification](https://gfzpublic.gfz-potsdam.de/rest/items/item_758898_6/component/file_775891/content) for more details.

```json
"citationguidelineurl": "https://physionet.org/about/#citation"
```

### pidsystems
_Type: String &bull; Cardinality: ONE_

The persistent identifier system that is used by the data source. As defined by re3data.org.

```json
"pidsystems": "hdl"
```

### certificates
_Type: String &bull; Cardinality: ONE_

The certificate, seal or standard the data source complies with. As defined by re3data.org.

```json
"certificates": "WDS"
```

### policies
_Type: String &bull; Cardinality: MANY_

Policies of the data source, as defined in OpenDOAR.

### journal
_Type: [Container](other#container) &bull; Cardinality: ONE_

Information about the journal, if this data source is of type Journal.

```json
"container": {
    "edition": "",
    "iss": "5",
    "issnLinking": "",
    "issnOnline": "1873-7625",
    "issnPrinted":"2451-8271",
    "name": "Recent Patents and Topics on Imaging",
    "sp": "12",
    "ep": "22",
    "vol": "50"
}
```

### missionstatementurl
_Type: String &bull; Cardinality: ONE_

The URL of a mission statement describing the designated community of the data source. As defined by re3data.org

```json
"missionstatementurl": "https://www.sigma2.no/content/nird-research-data-archive"
```