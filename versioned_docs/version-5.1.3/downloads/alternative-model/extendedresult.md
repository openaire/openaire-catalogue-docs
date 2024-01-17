---

sidebar_position: 1

---


# Extended Result


It is a subclass of [Result](../../data-model/entities/result) extended with information regarding projects (and funders), research communities/infrastructure and related data sources.



### projects

_Type: [Project](project.md)  &bull; Cardinality: MANY_


List of projects (i.e. grants) that (co-)funded the production of the research results.


```json


"projects": [
        {
            "id": "40|corda__h2020::94c4a066401e22002c4811a301bb4655",
            "code": "727929",
            "acronym": "TomRes",
            "title": "A NOVEL AND INTEGRATED APPROACH TO INCREASE MULTIPLE AND COMBINED STRESS TOLERANCE IN PLANTS USING TOMATO AS A MODEL",
            "funder": {
                "shortName": "EC",
                "name": "European Commission",
                "jurisdiction": "EU",
                "fundingStream": "H2020"
            },
            "provenance": {
                "provenance": "Harvested",
                "trust": "0.900000000000000022"
            },
            "validated": {
                "validationDate": "2021-0101",
                "validatedByFunder": true
            }
        },
        ...
    ]

```

### context

_Type: [Context](./context) &bull; Cardinality: MANY_


Reference to relevant research infrastructure, initiative or communities (RI/RC) among those collaborating with OpenAIRE. Please see https://connect.openaire.eu that are publicly visible.


```json


"context":[
        {
            "code":"sdsn-gr",
            "label":"SDSN - Greece",
            "provenance":[
                {
                    "provenance":"Inferred by OpenAIRE",
                    "trust":"0.9"
                }
            ]
        },
        ...
    ] 

```



### collectedfrom

_Type: [CfHbKeyValue](./cfhb) &bull; Cardinality: MANY_


Information about the sources from which the record has been collected.


```json

"collectedfrom":[
        {
            "key":"10|openaire____::081b82f96300b6a6e3d282bad31cb6e2",
            "value":"Crossref"
        },
        ...    
   ]

```


### instance

_Type: [CommunityInstance](./communityInstance) &bull; Cardinality: MANY_

Information about the source from which the instance can be viewed or downloaded.

```json


"instance": [
        {
            "license": "http://doi.wiley.com/10.1002/tdm_license_1.1",
            "accessright": {
                "code": "c_16ec",
                "label": "RESTRICTED",
                "scheme": "http://vocabularies.coar-repositories.org/documentation/access_rights/",
                "openAccessRoute": null
            },
            "type": "Article",
            "url": [
                "https://api.wiley.com/onlinelibrary/tdm/v1/articles/10.1111%2Fnph.15014",
                "http://onlinelibrary.wiley.com/wol1/doi/10.1111/nph.15014/fullpdf",
                "http://dx.doi.org/10.1111/nph.15014"
            ],
            "publicationdate": "2018-02-09",
            "refereed": "UNKNOWN",
            "hostedby": {
                "key": "10|issn___print::35ee75a5ad42581d604be113a8f56427",
                "value": "New Phytologist"
            },
            "collectedfrom": {
                "key": "10|openaire____::081b82f96300b6a6e3d282bad31cb6e2",
                "value": "Crossref"
            }
        },
         ...
    ]


```
