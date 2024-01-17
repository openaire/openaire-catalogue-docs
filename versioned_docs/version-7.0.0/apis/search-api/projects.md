# Searching for projects

## Endpoints

For research projects: http://api.openaire.eu/search/projects 

## Parameters

| Parameter | Option | Description |
| --- | --- | --- |
| page | integer | Page number of the search results. |
| size | integer | Number of results per page. |
| format | json \| xml \| csv \| tsv | The format of the response. The default is xml. |
| model | openaire \| sygma | The data model of the response. Default is openaire. Model sygma is a simplified version of the openaire model. For sygma, only the xml format is available. The relative XML schema is available [here](https://www.openaire.eu/schema/sygma/oaf_sygma_v2.1.xsd). |
| sortBy | `sortBy=field,[ascending\|descending]`; **'field'** is one of: `projectstartdate`, `projectstartyear`, `projectenddate`, `projectendyear`, `projectduration` | The sorting order of the specified field. |
| hasECFunding | true \| false | If hasECFunding is true gets the entities funded by the EC. If hasECFunding is false gets the entities related to projects not funded by the EC. |
| hasWTFunding | true \| false | If hasWTFunding is true gets the entities funded by Wellcome Trust. The results are the same as those obtained with `funder=wt`. If hasWTFunding is false gets the entities related to projects not funded by Wellcome Trust. |
| funder | WT \| EC \| ARC \| ANDS \| NSF \| FCT \| NHMRC | Search for entities by funder. |
| fundingStream | ... | Search for entities by funding stream. |
| FP7scientificArea | ... | Search for FP7 entities by scientific area. |
| keywords | White-space separated list of keywords. | N/A |
| sortBy | `sortBy=field,[ascending\|descending]`; **'field'** is one of: `projectstartdate`, `projectstartyear`, `projectenddate`, `projectendyear`, `projectduration` | The sorting order of the specified field. |
| grantID | Comma separated list of grant identifiers. | Gets the project with the given grant identifier, if any. |
| openairePublicationID | Comma separated list of OpenAIRE identifiers. | Gets the publication with the given openaire identifier, if any. |
| name | White-space separated list of keywords. | Gets the projects whose names contain the given list of keywords. Using double quotes `"` you get an exact match, if any. |
| acronym | N/A | Gets the project with the given acronym, if any. |
| callID | N/A | Search for projects by call identifier. |
| startYear | Year formatted as `YYYY` | Gets the projects that started in the given year. |
| endYear | Year formatted as `YYYY`. | Gets the projects that ended in the given year. |
| participantCountries | Comma separeted list of 2 letter country codes. | Search for projects by participant countries. |
| participantAcronyms | White space separeted list of acronyms of institutions. | Search for projects by participant institutions. |