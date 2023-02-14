---
sidebar_position: 2
---

# Beginner's kit

:::caution
This version is not accompanied with public dump files, hence the files in this section are based on [v5.0.0](/docs/5.0.0/) of the Graph. The data of v.5.1.0 are only exposed via the [OpenAIRE Graph API](https://graph.openaire.eu/develop/) and added-value services that are built on top of this version of the Graph (e.g., the [OpenAIRE Explore](https://explore.openaire.eu/)). If you would be interested to get bulk access to Graph v5.1.0 data, please contact us via our [helpdesk](https://graph.openaire.eu/support).
:::

The large size of the OpenAIRE Research Graph is a major impediment for beginners to familiarise with the underlying data model and explore its contents. 
Working with the Graph in its full size typically requires access to a huge distributed computing infrastructure which cannot be easily accessible to everyone.
[The OpenAIRE Beginner’s Kit]( https://doi.org/10.5281/zenodo.7490192) aims to address this issue. It consists of two components:

* A subset of the Graph composed of the research products published between 2022-06-29 and 2022-12-29, all the entities connected to them and the respective relationships.
* A Zeppelin notebook that demonstrates how you can use PySpark to analyse the Graph and get answers to some interesting research questions. A guide to Apache Zeppelin can be found [here](https://docs.cloudera.com/HDPDocuments/HDP2/HDP-2.6.5/bk_zeppelin-component-guide/content/ch_overview.html). 