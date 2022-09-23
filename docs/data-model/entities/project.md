---
sidebar_position: 4
---

# Project

Of crucial interest to OpenAIRE is also the identification of the funders (e.g. European Commission, WellcomeTrust, FCT Portugal, NWO The Netherlands) that co-funded the projects that have led to a given result. Projects are characterized by a list of funding streams (e.g. FP7, H2020 for the EC), which identify the strands of fundings. Funding streams can be nested to form a tree of sub-funding streams.

--- 

## The `Project` object

### id 
_Type: String &bull; Cardinality: ONE_

Main entity identifier, created according to the [OpenAIRE entity identifier and PID mapping policy](entity-identifiers).

```json
"id": "40|corda__h2020::70ea22400fd890c5033cb31642c4ae68"
```

### code
_Type: String &bull; Cardinality: ONE_

Τhe grant agreement code of the project.

```json
"code": "777541"
```

### acronym
_Type: String &bull; Cardinality: ONE_

Project's acronym.

```json
"acronym": "OpenAIRE-Advance"
```

### title
_Type: String &bull; Cardinality: ONE_

Project's title.

```json
"title": "OpenAIRE Advancing Open Scholarship"
```

### callidentifier
_Type: String &bull; Cardinality: ONE_

The identifier of the research call.

```json
"callidentifier": "H2020-EINFRA-2017"`
``` 

### funding
_Type: [Funding](other#funding) &bull; Cardinality: MANY_

Funding information for the project.

```json
"funding": [
    {
        "funding_stream": {
            "description": "Horizon 2020 Framework Programme - Research and Innovation action",
            "id": "EC::H2020::RIA"
        },
        "jurisdiction": "EU",
        "name": "European Commission",
        "shortName": "EC"
    }
]
```
### granted
_Type: [Grant](other#grant) &bull; Cardinality: ONE_

The money granted to the project.

```json
"granted": {
    "currency": "EUR",
    "fundedamount": 1.0E7,
    "totalcost": 1.0E7
}
```

### h2020programme
_Type: [H2020Programme](other#h2020programme) &bull; Cardinality: MANY_

The H2020 programme funding the project.

```json
"h2020programme":[
    {
        "code": "H2020-EU.1.4.1.3.",
        "description": "Development, deployment and operation of ICT-based e-infrastructures"
    }
]
```
### keywords
_Type: String &bull; Cardinality: ONE_

```json
"keywords": [
    "Open Science",
    ...
]
```

### openaccessmandatefordataset
_Type: Boolean &bull; Cardinality: ONE_

```json
"openaccessmandatefordataset": true
```

### openaccessmandateforpublications
_Type: Boolean &bull; Cardinality: ONE_

```json
"openaccessmandateforpublications": true
```

### startdate
_Type: String &bull; Cardinality: ONE_

The start year of the project.

```json
"startdate": "2018-01-01"
```

### enddate
_Type: String &bull; Cardinality: ONE_

The end year pf the project.

```json
"enddate": "2021-02-28"
```

### subject
_Type: String &bull; Cardinality: MANY_

The subjects of the project

```json
"subject": [
    "Data and Distributed Computing e-infrastructures for Open Science",
    ...
]
```
### summary
_Type: String &bull; Cardinality: ONE_

Short summary of the project.

```json
"summary": "OpenAIRE-Advance continues the mission of OpenAIRE to support the Open Access/Open Data mandates in Europe. By sustaining the current successful infrastructure, comprised of a human network and robust technical services, it consolidates its achievements while working to shift the momentum among its communities to Open Science, aiming to be a trusted e-Infrastructurewithin the realms of the European Open Science Cloud.In this next phase, OpenAIRE-Advance strives to empower its National Open Access Desks (NOADs) so they become a pivotal part within their own national data infrastructures, positioningOA and open science onto national agendas. The capacity building activities bring together experts ontopical task groups in thematic areas(open policies, RDM, legal issues, TDM), promoting a train the trainer approach, strengthening and expanding the pan-European Helpdesk with support and training toolkits, training resources and workshops.It examines key elements of scholarly communication, i.e., co-operative OA publishing and next generation repositories, to develop essential building blocks of the scholarly commons.On the technical level OpenAIRE-Advance focuses on the operation and maintenance of the OpenAIRE technical TRL8/9 services,and radically improvesthe OpenAIRE services on offer by: a) optimizing their performance and scalability, b) refining their functionality based on end-user feedback, c) repackagingthem into products, taking a professional marketing approach  with well-defined KPIs, d)consolidating the range of services/products into a common e-Infra catalogue to enable a wider uptake.OpenAIRE-Advancesteps up its outreach activities with concrete pilots with three major RIs,citizen science initiatives, and innovators via a rigorous Open Innovation programme. Finally, viaits partnership with COAR, OpenAIRE-Advance consolidatesOpenAIRE’s global roleextending its collaborations with Latin America, US, Japan, Canada, and Africa."
```

### websiteurl
_Type: String &bull; Cardinality: ONE_

The website of the project

```json
"websiteurl": "https://www.openaire.eu/advance/"
```
