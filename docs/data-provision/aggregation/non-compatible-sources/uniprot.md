# UniProtKB/Swiss-Prot

this section describes the mapping implemented for [UniProtKB/Swiss-Prot](https://www.uniprot.org/).
The whole dump can be downloaded by [here](https://www.uniprot.org/help/downloadss) the Reviewed (Swiss-Prot).

From this Dump we extract only the protein linked to a pubmed Publication.


## Entity Mapping

The table below describes the mapping from the TEXT metadata format to the OpenAIRE Graph dump format.
You can check an example of the text metadata [here](https://rest.uniprot.org/uniprotkb/A0A0C5B5G6.txt)

| OpenAIRE Result field path     | FASTA record field xpath| Notes|
|--------------------------------|----------------------|---------|
| **BIOEntity Mapping**          |                      |         |
| `id`                           | `LINE Starts with AC`  | id in the form `uniprot_____::md5(id)`|
| `pid`                          | `LINE Starts with AC`  |  example `AC   A0A0C5B5G6;`  classid=classname=`uniprot`  the vaue is the text after `AC`  |
| `publicationdate`           | `LINE START WITH DT containg text integrated into UniProtKB/Swiss-Prot`                                 | clean and normalize the format of the date to be `YYYY-mm-dd` |
| `maintitle`                 | `LINE START WITH GN`|main title             |
| **Instance Mapping**        |                                                          |                                                               |
| `instance.type`             |                                                          | `Bioentity`                                                   |
| `type`                      |                                                          | `Dataset`                                                     | 
| `instance.pid`              | `LINE Starts with AC`  | `classid = classname = uniprot`                                |
| `instance.url`              | `pid`                                | prepend to  the value `https://www.uniprot.org/uniprot/`|
| `instance.publicationdate`  | `LINE START WITH DT containg text integrated into UniProtKB/Swiss-Prot`                                       | clean and normalize the format of the date to be YYYY-mm-dd   |


### Relation Mapping
| OpenAIRE Relation Semantic and inverse | Source/Target type  | Notes                                                                    |
|----------------------------------------|---------------------|--------------------------------------------------------------------------|
| `IsRelatedTo`                          | `LINE START WITH RX`     | we create relationships between the BioEntity and the pubmed or DOI generating an unresolved target identifier |