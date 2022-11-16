---
sidebar_position: 3
---

# Extraction of Acknowledged Concepts

| Property  | Description |
| --- | --- |
| Short description  | Scans the plaintexts of publications for acknowledged concepts, including grant identifiers (projects) of funders, accession numbers of bioetities, EPO patent mentions, as well as custom concepts that can link research objects to specific research communities and initiatives in OpenAIRE. |
| Authority  | ATHENA Research Center, Greece |
| Licence  | CC-BY/CC-0  |
| Algorithmic details | The algorithm processes the publication's fulltext and extracts references to acknowledged concepts. It applies pattern matching and string join between the fulltext and a target database which contains the title, the acronym and the identifier of the searched concept. |
| Parameters | Concept titles, acronyms, and identifiers, publication's identifiers and fulltexts |
| Limitations | N/A |
| Code repository | https://github.com/openaire/iis/tree/master/iis-wf/iis-wf-referenceextraction/src/main/resources/eu/dnetlib/iis/wf/referenceextraction |
| Environment | Python, madIS (https://github.com/madgik/madis), APSW (https://github.com/rogerbinns/apsw) |
| References & resources | [Foufoulas, Y., Zacharia, E., Dimitropoulos, H., Manola, N., Ioannidis, Y. (2022). DETEXA: Declarative Extensible Text Exploration and Analysis. In: , et al. Linking Theory and Practice of Digital Libraries. TPDL 2022. Lecture Notes in Computer Science, vol 13541. Springer, Cham.](https://doi.org/10.1007/978-3-031-16802-4_9) |






