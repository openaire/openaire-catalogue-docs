---
sidebar_position: 3
---

# Sub-graph dumps

In order to facilitate users, different dumps are available under the Zenodo community called [OpenAIRE Research Graph](https://zenodo.org/communities/openaire-research-graph).
This page lists all alternative dumps currently available.



## The OpenAIRE COVID-19 dump

 Dataset: https://doi.org/10.5281/zenodo.6638745

 Schema: https://doi.org/10.5281/zenodo.6372977
    
 This dataset is licensed under a Creative Commons Attribution 4.0 International License.
    It contains metadata records of publications, research data, software and projects on the topic of Corona Virus and COVID-19. 
This dump is part of the activities of OpenAIRE to support the fight against COVID-19 together with the OpenAIRE COVID-19 Gateway. 
The dump consists of a tar archive containing gzip files with one json per line. Please refer [here](#alternative-sub-graph-data-model) for the data model of this dump.

## The dump of funded products

 Dataset: https://doi.org/10.5281/zenodo.6634431

 Schema: https://doi.org/10.5281/zenodo.6372977

 This dataset is licensed under a Creative Commons Attribution 4.0 International License.
It contains metadata records of research products (research literature, data, software, other types of research products) with funding 
information available in the OpenAIRE Graph. Records are grouped by funder in a dedicated archive file. Each tar archive contains 
gzip files, each with one json record per line. The model of this dump differs from the one of the whole graph.
Please refer [here](#alternative-sub-graph-data-model) for the data model of this dump.

## The dump of delta projects

 Dataset: https://doi.org/10.5281/zenodo.7119633

 Schema: https://doi.org/10.5281/zenodo.4238938
  
 This dataset is licensed under a Creative Commons Attribution 4.0 International License.
  It contains the metadata records of projects collected by OpenAIRE in a given time frame. Usually one deposition of collected projects is done for each release of the OpenAIRE Graph
 The deposition is one tar archive containing gzip files, each with one json record per line.

## The dumps about research communities, initiatives and infrastructures

 Dataset: https://doi.org/10.5281/zenodo.6638478

 Schema: https://doi.org/10.5281/zenodo.6372977

 This dataset is licensed under a Creative Commons Attribution 4.0 International License.
The dataset contains one file per community/initiative/infrastructure collaborating with OpenAIRE. Check out also their community gateways on 
 CONNECT. Each file is a tar archive containing gzip files with one json per line. The only communities/research initiative/infrastructure we dump are those visible to everyone.
 The model of this dump differs from the one of the whole graph.
Please refer [here](#alternative-sub-graph-data-model) for the data model of this dump.

 --- 

 ## Alternative sub-graph data model

 It should be noted that the dumps for research communities, infrastructures, and products related to projects do not strictly follow the main data model of the OpenAIRE Graph. In particular, they differ in the following:

 * only research products are dumped (no relations, and entities different from results)
 * the dumped results are extended with information that can be inferred in the whole dump namely:
   * funding information if present
   * associated research community/infrastructure 
   * associated data sources 

So they have just one entity type, that is the [Extended Result](alternative-model/extendedresult.md).
