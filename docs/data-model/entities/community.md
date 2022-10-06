---
sidebar_position: 6
---

# Community

Research communities and research initiatives are intended as groups of people with a common research intent and can be of two types: ​research initiatives or ​research communities​:

* Research initiatives are intended to capture a view of the information space that is "research impact"-oriented, i.e. all products generated due to my research initiative;
* Research communities the latter “research activity” oriented, i.e. all products that may be of interest or related to my research initiative.

For example, the organizations supporting a research infrastructure fall in the first category, while the researchers involved in a discipline fall in the second.

## The `Community` object 

### id
_Type: String &bull; Cardinality: ONE_

The OpenAIRE id for the community/research infrastructure, created according to the [OpenAIRE entity identifier and PID mapping policy](../pids-and-identifiers).

```json
"id": "00|context_____::5b7f9fa40bdc12072249204cedfa7808"
```

### acronym
_Type: String &bull; Cardinality: ONE_

The acronym of the community.

```json
"acronym": "covid-19"
```

### description
_Type: String &bull; Cardinality: ONE_

Description of the research community/research infrastructure

```json
"description": "This portal provides access to publications, research data, projects and software that may be relevant to the Corona Virus Disease (COVID-19). The OpenAIRE COVID-19 Gateway aggregates COVID-19 related records, links them and provides a single access point for discovery and navigation. We tag content from the OpenAIRE Research Graph (10,000+ data sources) and additional sources. All COVID-19 related research results are linked to people, organizations and projects, providing a contextualized navigation."
```

### name
_Type: String &bull; Cardinality: ONE_

The long name of the community.

```json
"name": "Corona Virus Disease"
```

### subject
_Type: String &bull; Cardinality: MANY_

The list of the subjects associated to the research community (only appies to research communities).

```json
"subject": [
    "COVID19",
    "SARS-CoV",
    "HCoV-19",
    ...
]
```

### type
_Type: String &bull; Cardinality: ONE_

The type of the community; one of `{ Research Community, Research infrastructure }`.

```json
"type": "Research Community"
```

### zenodo_community
_Type: String &bull; Cardinality: ONE_

The URL of the Zenodo community associated to the Research community/Research infrastructure.

```json
"zenodo_community": "https://zenodo.org/communities/covid-19"
```
