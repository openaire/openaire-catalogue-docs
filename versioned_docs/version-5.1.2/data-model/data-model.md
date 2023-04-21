# Data model

The OpenAIRE Graph comprises several types of [entities](../category/entities) and [relationships](/category/relationships) among them.

The latest version of the JSON schema can be found on the [Downloads](../downloads/full-graph) section.

<p align="center">
    <img loading="lazy" alt="Data model" src={require('../assets/img/data-model-2.png').default} width="80%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>

The figure above, presents the graph's data model. 
Its main entities are described in brief below:

* [Results](/data-model/entities/result) represent the outcomes (or products) of research activities.
* [Data Sources](/data-model/entities/data-source) are the sources from which the metadata of graph objects are collected. 
* [Organizations](/data-model/entities/organization) correspond to companies or research institutions involved in projects,
responsible for operating data sources or consisting the affiliations of Product creators.
* [Projects](/data-model/entities/project) are research project grants funded by a Funding Stream of a Funder.
* [Communities](/data-model/entities/community) are groups of people with a common research intent (e.g. research infrastructures, university alliances).

:::note Further reading

A detailed report on the OpenAIRE Graph Data Model can be found on [Zenodo](https://zenodo.org/record/2643199).
:::

