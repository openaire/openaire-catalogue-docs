---
sidebar_position: 1
---

# Aggregation

OpenAIRE collects metadata records from a variety of content providers as described in the [aggregation and content provision workflows](https://www.openaire.eu/aggregation-and-content-provision-workflows).

OpenAIRE aggregates metadata records describing objects of the research life-cycle from content providers compliant to the [OpenAIRE guidelines](https://guidelines.openaire.eu/) and from entity registries (i.e. data sources offering authoritative lists of entities, like OpenDOAR, re3data, DOAJ, and funder databases). After collection, metadata are transformed according to the OpenAIRE internal metadata model, which is used to generate the final OpenAIRE Research Graph that you can access from the OpenAIRE portal and the APIs.

The transformation process includes the application of cleaning functions whose goal is to ensure that values are harmonised according to a common format (e.g. dates as YYYY-MM-dd) and, whenever applicable, to a common controlled vocabulary. The controlled vocabularies used for cleansing are accessible at http://api.openaire.eu/vocabularies. Each vocabulary features a set of controlled terms, each with one code, one label, and a set of synonyms. If a synonym is found as field value, the value is updated with the corresponding term. Also, the OpenAIRE Research Graph is extended with other relevant scholarly communication sources that are too big to be integrated via the “normal” aggregation mechanism: DOIBoost (which merges Crossref, ORCID, Microsoft Academic Graph, and Unpaywall), and ScholeXplorer, one of the Scholix hubs offering a large set of links between research literature and data.


<p align="center">
    <img loading="lazy" alt="Aggregation" src="/img/docs/aggregation.png" width="65%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>