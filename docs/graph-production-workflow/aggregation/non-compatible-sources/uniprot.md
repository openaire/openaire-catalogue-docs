# UniProtKB/Swiss-Prot

This section describes the mapping implemented to integrate metadata and links from [UniProtKB/Swiss-Prot](https://www.uniprot.org/).
The complete data dump "Reviewed (Swiss-Prot)" can be downloaded from [here](https://www.uniprot.org/help/downloads).

From this dataset, only the protein records linked to a PubMed publication are extracted.

## Entity Mapping

The table below describes the mapping from the TEXT metadata format to the OpenAIRE Graph Dataset format.
You can check an example of the text metadata [here](https://rest.uniprot.org/uniprotkb/A0A0C5B5G6.txt)

| OpenAIRE Result field path   | FASTA record field xpath                                                 | Notes                                                                                    |
|------------------------------|--------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| **BIOEntity Mapping**        |                                                                          |                                                                                          |
| `id`                         | `LINE Starts with AC`                                                    | id in the form `uniprot_____::md5(id)`                                                   |
| `pid`                        | `LINE Starts with AC`                                                    | example `AC   A0A0C5B5G6;`  classid=classname=`uniprot`  the vaue is the text after `AC` |
| `publicationdate`            | `LINE START WITH DT containg text integrated into UniProtKB/Swiss-Prot`  | clean and normalize the format of the date to be `YYYY-mm-dd`                            |
| `maintitle`                  | `LINE START WITH GN`                                                     | main title                                                                               |
| **Instance Mapping**         |                                                                          |                                                                                          |
| `instance.type`              |                                                                          | `Bioentity`                                                                              |
| `type`                       |                                                                          | `Dataset`                                                                                | 
| `instance.pid`               | `LINE Starts with AC`                                                    | `classid = classname = uniprot`                                                          |
| `instance.url`               | `pid`                                                                    | prepend to  the value `https://www.uniprot.org/uniprot/`                                 |
| `instance.publicationdate`   | `LINE START WITH DT containg text integrated into UniProtKB/Swiss-Prot`  | clean and normalize the format of the date to be YYYY-mm-dd                              |


### Relation Mapping
| OpenAIRE Relation Semantic and inverse | Source/Target type   | Notes                                                                                                                    |
|----------------------------------------|----------------------|--------------------------------------------------------------------------------------------------------------------------|
| `IsRelatedTo`                          | `LINE START WITH RX` | the mapping creates relationships between the BioEntity and the PubMed or DOI generating an unresolved target identifier |