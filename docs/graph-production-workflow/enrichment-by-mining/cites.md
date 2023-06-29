---
sidebar_position: 4
---

# Extraction of referenced concepts

***Short description:*** Scans the plaintexts of publications for cited concepts, currently for references to datasets and software URIs.

***Algorithmic details:***
The algorithm extracts citations to specific datasets and software. It extracts the citation section of a publication's fulltext and applies string matching against a target database which includes an inverted index with dataset/software titles, urls and other metadata.

The following sqlite databases are involved in the mining process:
* [datasets] two databases including opentrials and datasets kept separately, both imported from the OpenAIRE Graph
* [software] database including software entities imported from the OpenAIRE Graph and the Software Heritage URLs imported from the SH API

****The result of the process on the OpenAIRE Research Graph content:****
The following content is generated as an outcome of the software mining:
* a new software entity in the OpenAIRE Graph including `title`, `description`, `codeRepositoryUrl`, two instance objects pointing to the original repository and to the SH resource
* bi-directional relation between the publication and the software

Dataset mining links to an already existing dataset entity therefore the following outcome is generated:
* bi-directional relation between the publication and the dataset

***Parameters:***
Title, URL, creator names, publisher names and publication year for each concept to create the target database. Identifier and publication's fulltext to extract the cited concepts

***Limitations:*** -

***Environment:***
Python, [madIS](https://github.com/madgik/madis), [APSW](https://github.com/rogerbinns/apsw)

***References:***
* Foufoulas Y., Stamatogiannakis L., Dimitropoulos H., Ioannidis Y. (2017) “High-Pass Text Filtering for Citation Matching”. In: Kamps J., Tsakonas G., Manolopoulos Y., Iliadis L., Karydis I. (eds) Research and Advanced Technology for Digital Libraries. TPDL 2017. Lecture Notes in Computer Science, vol 10450. Springer, Cham. [doi:10.1007/978-3-319-67008-9_28](https://doi.org/10.1007/978-3-319-67008-9_28)

***Authority:*** ATHENA RC &bull; ***License:*** CC-BY/CC-0 &bull; ***Code:*** [iis/referenceextraction](https://github.com/openaire/iis/tree/master/iis-wf/iis-wf-referenceextraction/src/main/resources/eu/dnetlib/iis/wf/referenceextraction)
