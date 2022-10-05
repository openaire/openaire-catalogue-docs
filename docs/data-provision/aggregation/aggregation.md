---
sidebar_position: 1
---

# Aggregation

OpenAIRE materializes an open, participatory research graph (the OpenAIRE Research graph) where products of the research life-cycle (e.g. scientific literature, research data, project, software) are semantically linked to each other and carry information about their access rights (i.e. if they are Open Access, Restricted, Embargoed, or Closed) and the sources from which they have been collected and where they are hosted. The OpenAIRE research graph is materialised via a set of autonomic, orchestrated workflows operating in a regimen of continuous data aggregation and integration. [1]

## What does OpenAIRE collect?

OpenAIRE aggregates metadata records describing objects of the research life-cycle from content providers compliant to the [OpenAIRE guidelines](https://guidelines.openaire.eu/) and from entity registries (i.e. data sources offering authoritative lists of entities, like [OpenDOAR](https://v2.sherpa.ac.uk/opendoar/), [re3data](https://www.re3data.org/), [DOAJ](https://doaj.org/), and various funder databases). After collection, metadata are transformed according to the OpenAIRE internal metadata model, which is used to generate the final OpenAIRE Research Graph, accessible from the [OpenAIRE EXPLORE portal](https://explore.openaire.eu) and the [APIs](https://graph.openaire.eu/develop/).

The transformation process includes the application of cleaning functions whose goal is to ensure that values are harmonised according to a common format (e.g. dates as YYYY-MM-dd) and, whenever applicable, to a common controlled vocabulary. The controlled vocabularies used for cleansing are accessible at http://api.openaire.eu/vocabularies. Each vocabulary features a set of controlled terms, each with one code, one label, and a set of synonyms. If a synonym is found as field value, the value is updated with the corresponding term. 
Also, the OpenAIRE Research Graph is extended with other relevant scholarly communication sources that do not follow the OpenAIRE Guidelines and/or are too large to be integrated via the “normal” aggregation mechanism: DOIBoost (which merges Crossref, ORCID, Microsoft Academic Graph, and Unpaywall).

<p align="center">
    <img loading="lazy" alt="Aggregation" src="/img/docs/aggregation.png" width="65%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>

The OpenAIRE aggregation system collects information about objects of the research life-cycle compliant to the [OpenAIRE acquisition policy](https://www.openaire.eu/content-aquisition-policy1) from [different types of data sources](https://explore.openaire.eu/search/find/dataproviders):

1. Scientific literature metadata and full-texts from institutional and thematic repositories, CRIS (Common Research Information Systems), Open Access journals and publishers;
2. Dataset metadata from data repositories and data journals;
3. Scientific literature, data and software metadata from Zenodo;
4. Metadata about data sources, organizations, projects, and funding programs from entity registries, i.e. authoritative sources such as CORDA and other funder databases for projects, OpenDOAR for publication repositories, re3data for data repositories, DOAJ for Open Access journals;
5. Metadata of open source research software from software repositories and SoftwareHeritge
6. Metadata about other types of research products, like workflow, protocols, methods, research packages

Relationships between objects are collected from the data sources, but also automatically detected by [inference algorithms](https://www.openaire.eu/blogs/text-mining-services-in-openaire-1) and added by authenticated users, who can insert links between literature, datasets, software and projects via [the “Link” procedure available from the OpenAIRE explore portal](https://explore.openaire.eu/participate/claim).

## What kind of data sources are in OpenAIRE?

Objects and relationships in the OpenAIRE Research Graph are extracted from information packages, i.e. metadata records, collected from data sources of the following kinds:

- *Institutional or thematic repositories*: Information systems where scientists upload the bibliographic metadata and full-texts of their articles, due to obligations from their organization or due to community practices (e.g. ArXiv, Europe PMC);
- *Open Access Publishers and journals*: Information system of open access publishers or relative journals, which offer bibliographic metadata and PDFs of their published articles;
- *Data archives*: Information systems where scientists deposit descriptive metadata and files about their research data (also known as scientific data, datasets, etc.).;
- *Hybrid repositories/archives*: information systems where scientists deposit metadata and file of any kind of scientific products, incuding scientific literature, research data and research software (e.g. Zenodo)
- *Aggregator services*: Information systems that collect descriptive metadata about publications or datasets from multiple sources in order to enable cross-data source discovery of given research products. Examples are DataCite, BASE, DOAJ;
- *Entity Registries*: Information systems created with the intent of maintaining authoritative registries of given entities in the scholarly communication, such as OpenDOAR for the institutional repositories, re3data for the data repositories, CORDA and other funder databases for projects and funding information;
- *CRIS*: Information systems adopted by research and academic organizations to keep track of their research administration records and relative results; examples of CRIS content are articles or datasets funded by projects, their principal investigators, facilities acquired thanks to funding, etc..
- *Research Graphs*: services that maintain an information space of (possibly interlinked) scholalrly communication objects. Examples are CrossRef, ScholeXplorer and OpenAIRE itself.

## How does OpenAIRE collect metadata records?

OpenAIRE collects metadata records describing objects of the research life-cycle from content providers compliant to the OpenAIRE guidelines and from entity registries (i.e. data sources offering authoritative lists of entities, like OpenDOAR, re3data, DOAJ, and funder databases).

The OpenAIRE aggregator collects metadata records in the majority of cases via [OAI-PMH](https://www.openarchives.org/pmh/), but also supports other standard exchange protocols like FTP(S), SFTP, and some RESTful API.

For additional details about the aggregation workflows, please refer to [2].

## References

[1] Manghi P. et al. (2014) "The D-NET software toolkit: A framework for the realization, maintenance, and operation of aggregative infrastructures", Program, Vol. 48 Issue: 4, pp.322-354, [10.1108/PROG-08-2013-0045](https://doi.org/10.1108/PROG-08-2013-0045)

[2] Atzori, Claudio, Bardi, Alessia, Manghi, Paolo, & Mannocci, Andrea. (2017). The OpenAIRE workflows for data management. Zenodo. [10.5281/zenodo.996006](http://doi.org/10.5281/zenodo.996006)
