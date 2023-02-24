# OpenCitations
This section describes the aggregation workflow used to gather the citation material from OpenCitations and the relative mapping towards the OpenAIRE Graph.

## OpenCitations as an OpenAIRE Datasource

[OpenCitations](https://opencitations.net/) is an independent not-for-profit infrastructure organization for open scholarship dedicated to the publication of open bibliographic and citation data. 
OpenCitations releases datasets containing citation data as described [here](https://opencitations.net/datasets). In particular, the [COCI](https://opencitations.net/index/coci) dataset contains the DOI-to-DOI citations from Crossref.

## Relation Mapping

| OpenAIRE Relation Semantic | COCI csv columnrecord JSON path       | #Notes |
|----------------------------|---------------------------------------|--------|
| `IsCitedBy`                | `xxx`                                 |        |
| `Cites`                    | `yyy`                                 |        |
