# Data model

The OpenAIRE Research Graph comprises several types of [entities](../category/entities) and [relationships](./relationships) among them.

The latest version of the JSON schema can be found on [Bulk downloads](../download).

<p align="center">
    <img loading="lazy" alt="Data model" src="/img/docs/data-model.png" width="80%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>

The figure above, presents the graph's data model. 
Its main entities are described in brief below:

* [Results](entities/result) represent the outcomes of research activities.
* [Data Sources](entities/data-source) are the resources used to collect metadata for the graph objects
* [Organizations](entities/organization) correspond to companies or research institutions involved in projects,
responsible for operating data sources or consisting the affiliations of Product creators.
* [Projects](entities/project) are research projects funded by a Funding Stream of a Funder.
* [Communities](entities/community) are groups of people with a common research intent.

:::note Further reading

A detailed report on the OpenAIRE Research Graph Data Model can be found on [Zenodo](https://zenodo.org/record/2643199).
:::

