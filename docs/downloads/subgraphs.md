---
sidebar_position: 3
---

# Sub-graph datasets

In order to facilitate users, different datasets are available under the Zenodo community called [OpenAIRE Graph](https://zenodo.org/communities/openaire-research-graph).
This page lists all alternative datasets currently available.
<!-- :::caution
This version is not accompanied with public dataset files, hence the files in this section are based on [v6.0.0](/docs/6.0.0/) of the Graph. The current data are only exposed via the [OpenAIRE Graph API](https://graph.openaire.eu/develop/) and added-value services that are built on top of this version of the Graph (e.g., the [OpenAIRE Explore](https://explore.openaire.eu/)). If you are interested to get bulk access to our latest data, please contact us via our [helpdesk](https://graph.openaire.eu/support).
::: -->

## The OpenAIRE COVID-19 dataset

Dataset: https://doi.org/10.5281/zenodo.3980490

Schema: https://doi.org/10.5281/zenodo.3974225
    
This dataset is licensed under a Creative Commons Attribution 4.0 International License.
It contains metadata records of publications, research data, software and projects on the topic of Corona Virus and COVID-19. 
This dataset is part of the activities of OpenAIRE to support the fight against COVID-19 together with the OpenAIRE COVID-19 Gateway. 
The dataset consists of a tar archive containing gzip files with one json per line. Please refer [here](#alternative-sub-graph-data-model) for details on the data model of this dataset.

## The dataset of funded products

Dataset: https://doi.org/10.5281/zenodo.4559725

Schema: https://doi.org/10.5281/zenodo.3974225

This dataset is licensed under a Creative Commons Attribution 4.0 International License.
It contains metadata records of research products (research literature, data, software, other types of research products) with funding 
information available in the OpenAIRE Graph. Records are grouped by funder in a dedicated archive file. Each tar archive contains 
gzip files, each with one json record per line. The model of this dataset differs from the one of the whole graph.
Please refer [here](#alternative-sub-graph-data-model) for details on the data model of this dataset.

## The dataset of delta projects

Dataset: https://doi.org/10.5281/zenodo.6419021

Schema: https://doi.org/10.5281/zenodo.4238938
  
This dataset is licensed under a Creative Commons Attribution 4.0 International License.
It contains the metadata records of projects collected by OpenAIRE in a given time frame. Usually one deposition of collected projects is done for each release of the OpenAIRE Graph
The deposition is one tar archive containing gzip files, each with one json record per line.

## The datasets about research communities, initiatives and infrastructures

Dataset: https://doi.org/10.5281/zenodo.3974604

Schema: https://doi.org/10.5281/zenodo.3974225

This dataset is licensed under a Creative Commons Attribution 4.0 International License.
The dataset contains one file per community/initiative/infrastructure collaborating with OpenAIRE. Check out also their community gateways on 
CONNECT. Each file is a tar archive containing gzip files with one json per line. The only communities/research initiative/infrastructure included are publicly visible ones.
The model of this dataset differs from the one of the whole graph.
Please refer [here](#alternative-sub-graph-data-model) for details on the data model of this dataset.

--- 

## Alternative sub-graph data model

It should be noted that the datasets for research communities, infrastructures, and products related to projects do not strictly follow the main data model of the OpenAIRE Graph. In particular, they differ in the following:

* only research products are included (no relations, and entities different from results)
* the results are extended with information that can be inferred in the whole dataset namely:
  * funding information if present
  * associated research community/infrastructure 
  * associated data sources 

So they have just one entity type, that is the [Extended Result](alternative-model/extendedresult.md).
