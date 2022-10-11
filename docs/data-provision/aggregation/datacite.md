# Datacite
This section describes the aggregation workflow of Datacite and the mapping implemented for it.

## Datacite datasource
[Datacite](https://datacite.org/index.html) is a leading global non-profit organisation that provides persistent identifiers (DOIs) for research data and other research outputs. 

## Datacite API
The [DataCite REST API](https://support.datacite.org/docs/api)  allows users to retrieve, query, and browse DataCite DOI metadata records. In particular, it exposes a method for incremental harvesting new datacite records.

```
https://api.datacite.org/dois?page[cursor]=$CURSOR&page[size]=$NUMBER_OF_ITEM_PER_PAGE&query=updated:[$FROM_DATE_TIMESAMP TO $TO_DATE_TIMESAMP]
```

On this API Request, we introduce some variables:
- **CURSOR**: The value of the cursor to iterate the pages
- **NUMBER_OF_ITEM_PER_PAGE**: (max 1000) defines how many records we can download for each page.
- **FROM_DATE_TIMESAMP, TO_DATE_TIMESAMP** interval timestamp of the updated record


Each record contains two pieces of information needed for incremental harvesting:
- **isActive**: tells if the record is deleted (`isActive:false`)
- **updated**: timestamp of last update


## Collection Workflow

The collection workflow is responsible for aggregating new datacite records. Each record is stored on a table called Native Datacite Store with the following schema:
- **DOI**: The DOI PID of the datacite record (It is a primary key)
- **update_timestamp**: the last update date timestamp
- **json**: the native record JSON

During the collection workflow, we identify the most updated record date, and the collection phase downloads all new datacite records and update the existing one through the API using this date as **FROM_DATE_TIMESAMP** variable.


## Datacite Mapping
The table below describes the mapping from the XML baseline records to the OpenAIRE Graph dump format.


| OpenAIRE Result field path         | Datacite record JSON path     | # Notes           |
|------------------------------------|-------------------------------|-------------------|
| `id`                               |  `\attributes\doi`|the identifier will be created by folloing the openaire PID generation policy |
| <ul><li>`instance`</li>  <li>`instance.type`</li></ul>      | <ul><li>`\attributes\types\resourceType`</li>  <li> `\attributes\types\resourceTypeGeneral` </li>  <li>`attributes\types\schemaOrg`</li></ul> |   Use the vocabulary **_dnet:publication_resource_**  to find a synonym to one of these terms and get the `instance.type`. Using the **_dnet:result_typologies_** vocabulary, we look up the `instance.type` synonym to  generate one of the following main entities: <ul><li>`publication`</li>  <li>`dataset`</li> <li> `software`</li>  <li>`otherresearchproduct`</li></ul> |
| `pid` | `\attributes\doi` | `scheme = doi` |
| `dateofcollection` | `attributes\updated`  | the timestamp is defined in milliseconds we convert to "yyyy-MM-dd'T'HH:mm:ssZ" format |
| `author` | `\attributes\creators` |  Each creator field will be mapped in the author entity below the subfield|

