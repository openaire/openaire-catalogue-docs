---
sidebar_position: 3
---

# Extraction of Acknowledged Concepts
<span className="todo">TODO</span>

| Property  | Description |
| --- | --- |
| Short description  | Scans the plaintexts of publications for acknowledged concepts, including grant identifiers (projects) of funders, accession numbers of bioetities, EPO patent mentions, as well as custom concepts that can link research objects to specific research communities and initiatives in OpenAIRE. |
| Authority  | ATHENA Research Center, Greece  |
| Licence  | describes the licensing and rights held on the algorithm  |
| Algorithmic details | The algorithm processes the publication's fulltext and extracts references to acknowledged concepts. It applies pattern matching and string join between the fulltext and a target database which contains the title, the acronym and the identifier of the searched concept |
| Parameters | Concept titles,acronyms, and identifiers, publication's identifiers and fulltexts |
| Limitations | N/A |
| Code repository | https://github.com/openaire/iis/tree/master/iis-wf/iis-wf-referenceextraction/src/main/resources/eu/dnetlib/iis/wf/referenceextraction |
| Environment | Python, madIS (https://github.com/madgik/madis), APSW (https://github.com/rogerbinns/apsw) |
| References & resources | Cites any related research and possible additional resource (such as datasets etc) |






