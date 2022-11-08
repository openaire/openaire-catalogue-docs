# Datacite
This section describes the aggregation workflow used to gather the bibliographic material from Datacite and the relative mapping.

## Datacite datasource
[Datacite](https://datacite.org/index.html) is a leading global non-profit organisation that provides persistent identifiers (DOIs) for research data and other research outputs. 

## Datacite API
The [DataCite REST API](https://support.datacite.org/docs/api) allows users to retrieve, query, and browse Datacite metadata records. In particular, it exposes a method for harvesting new records incrementally.

```
https://api.datacite.org/dois?page[cursor]=$CURSOR&page[size]=$NUMBER_OF_ITEM_PER_PAGE&query=updated:[$FROM_DATE_TIMESAMP TO $TO_DATE_TIMESAMP]
```

On this API Request, we introduce some variables:
- **CURSOR**: The value of the cursor to iterate the pages; the cursor is extracted from each API response and used in the next request.
- **NUMBER_OF_ITEM_PER_PAGE**: (max 1000) defines how many records must be returned within each API response.
- **FROM_DATE_TIMESAMP, TO_DATE_TIMESAMP** interval timestamp of the updated record.

Each record contains two pieces of information needed for incremental harvesting:
- **isActive**: tells if the record is deleted (`isActive:false`)
- **updated**: timestamp of last update

## Collection Workflow

The collection workflow is responsible for aggregating new records. Each record is stored locally on a table with the following schema:
- **DOI**: The DOI of the Datacite record (it is the primary key)
- **update_timestamp**: the last update date timestamp
- **json**: the native record JSON

The metadata collection process identifies the most recent record date available locally and uses such date to requests the records to the Datacite API, populating the **FROM_DATE_TIMESAMP** variable. The records in the API response are included in the local storage in upsert mode.

## Datacite Mapping

### Entity Mapping

The table below describes the mapping from the XML baseline records to the OpenAIRE Graph dump format.

| OpenAIRE Result field path                             | Datacite record JSON path                                                                                                                       | # Notes                                                                                                                                                                                                                                              |
|--------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                                                   | `\attributes\doi`                                                                                                                               | id in the form `doi_________::md5(doi)`                                                                                                                                                                                                              |
| <ul><li>`instance`</li>  <li>`instance.type`</li></ul> | <ul><li>`\attributes\types\resourceType`</li>  <li> `\attributes\types\resourceTypeGeneral` </li>  <li>`attributes\types\schemaOrg`</li></ul>   | Use the vocabulary **_dnet:publication_resource_**  to find a synonym to one of these terms and get the `instance.type`.                                                                                                                             |
| `type`                                                 | <ul><li>`\attributes\types\resourceType`</li>  <li> `\attributes\types\resourceTypeGeneral` </li>  <li>`attributes\types\schemaOrg`</li></ul>   | Using the **_dnet:result_typologies_** vocabulary, we look up the `instance.type` synonym to  generate one of the following main entities: <ul><li>`publication`</li>  <li>`dataset`</li> <li> `software`</li>  <li>`otherresearchproduct`</li></ul> | 
| `pid`                                                  | `\attributes\doi`                                                                                                                               | `scheme = doi`                                                                                                                                                                                                                                       |
| `originalid`                                           | `\attributes\doi`                                                                                                                               |                                                                                                                                                                                                                                                      |
| `dateofcollection`                                     | `attributes\updated`                                                                                                                            | the timestamp is defined in milliseconds we convert to "yyyy-MM-dd'T'HH:mm:ssZ" format                                                                                                                                                               |
| `author`                                               | `\attributes\creators`                                                                                                                          | Each creator field will be mapped in the author entity below the subfield. **If the record has no Creator it will be skipped**                                                                                                                       |
| `author.fullname`                                      | `\attributes\creators\name`                                                                                                                     | if name is not defined, we construct from given and family name                                                                                                                                                                                      |
| `author.rank`                                          |                                                                                                                                                 | Incremental index starting from 1                                                                                                                                                                                                                    |
| `author.name`                                          | `\attributes\creators\givenName`                                                                                                                |                                                                                                                                                                                                                                                      |
| `author.surname`                                       | `\attributes\creators\familyName`                                                                                                               |                                                                                                                                                                                                                                                      |
| `author.pid`                                           | `\attributes\creators\nameIdentifiers`                                                                                                          | this is a list of pids associated to the creator                                                                                                                                                                                                     |
| `author.pid.scheme`                                    | `\attributes\creators\nameIdentifiers`                                                                                                          | mapping with vocabulary  **dnet:pid_types**                                                                                                                                                                                                          |
| `author.pid.value`                                     | `\attributes\creators\nameIdentifiers/nameIdentifier`                                                                                           | the pid value                                                                                                                                                                                                                                        |
| `maintitle`                                            | `\attributes\titles`                                                                                                                            | Titles whose title type is null or title type is Main                                                                                                                                                                                                |
| `subtitle`                                             | `\attributes\titles`                                                                                                                            | Titles whose title type is Subtitle since the title type vocabulary in OpenAIRE  use the datacite title type vocabulary                                                                                                                              |
| **date section**                                       |                                                                                                                                                 | for each date in particular for DOI starting with _10.14457_ we Apply a fix thai date convert a date to ThaiBuddhistDate and reformat to local one see ticket [#6791](https://support.openaire.eu/issues/6791)                                       |
| `publicationdate`                                      | `\attributes\dates`                                                                                                                             | where `dateType` is **issued**                                                                                                                                                                                                                       |
| `publicationdate`                                      | `\attributes\publicationYear`                                                                                                                   | we create this date format `01-01-publicationYear`                                                                                                                                                                                                   |  
| `embargoenddate`                                       | `\attributes\dates`                                                                                                                             | where `dateType` is **available**                                                                                                                                                                                                                    |
| `subjects`                                             | `\attributes\subject`                                                                                                                           | `scheme=keywords`                                                                                                                                                                                                                                    |
| `description`                                          | `\attributes\descriptions`                                                                                                                      |                                                                                                                                                                                                                                                      |
| `publisher`                                            | `\attributes\publisher`                                                                                                                         |                                                                                                                                                                                                                                                      |
| `language`                                             | `\attributes\language`                                                                                                                          | cleaned by using vocabulary `dnet:languages`                                                                                                                                                                                                         |
| `publisher`                                            | `\attributes\publisher`                                                                                                                         |                                                                                                                                                                                                                                                      |
| `instance.license`                                     | `\attributes\rightsList`                                                                                                                        | if the rights value starts with http and matches a particular regex                                                                                                                                                                                  |
| `instance.accessright`                                 | `\attributes\rightsList`                                                                                                                        | <ul><li>if not present :`unknown`</li><li>if datasource is Figshare:`open`</li><li>If `embargo_date < today()`: OPEN</li></ul>                                                                                                                       |


### Relation Mapping


<<<<<<< HEAD
| OpenAIRE Relation Semantic and inverse    | Datacite record JSON path     | Source/Tartget type           | #Notes  |
|-------------------------------------------|-------------------------------|-------------------------------|---------|
| `isProducedBy`      |`attributes\fundingReferences` | `Result/Project`|  we must identifi if match this pattern `(info:eu-repo/grantagreement/ec/h2020/)(\d{6})(.*)`|
| `IsProvidedBy`   | | `Result/DataSource` | Datasource is always Datacite|
| `IsHostedBy`   | `\attributes\relationships\client\id` | `Result/DataSource` |we defined a curated map clientId/Datasource if we found a match we create an _hostedBy Relation_ |
|            |      `\attribute\relatedIdentifiers`                | result/result                 | we create relationships whenever the pid of the target is resolved on the Research Graph          |
=======
| OpenAIRE Relation Semantic and inverse | Datacite record JSON path             | Source/Tartget type  | #Notes                                                                                            |
|----------------------------------------|---------------------------------------|----------------------|---------------------------------------------------------------------------------------------------|
| `isProducedBy`                         | `attributes\fundingReferences`        | `Result/Project`     | we must identifi if match this pattern `(info:eu-repo/grantagreement/ec/h2020/)(\d{6})(.*)`       |
| `IsProvidedBy`                         |                                       | `Result/DataSource`  | Datasource is always Datacite                                                                     |
| `IsHostedBy`                           | `\attributes\relationships\client\id` | `Result/DataSource`  | we defined a curated map clientId/Datasource if we found a match we create an _hostedBy Relation_ |


### Relation Resolution

>>>>>>> 92baad5acb3ecfb774510b48fee6aeeba92738df


