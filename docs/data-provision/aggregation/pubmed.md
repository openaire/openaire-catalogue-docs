# PubMed

This section describes the mapping implemented for [MEDLINE/PubMed](https://pubmed.ncbi.nlm.nih.gov/).

## Input

The native data is collected from the [ftp baseline](https://ftp.ncbi.nlm.nih.gov/pubmed/baseline/) site. 
It contains XML records compliant with the schema available at https://www.nlm.nih.gov/bsd/licensee/elements_descriptions.html.

## Incremental harvesting
Pubmed exposes an entry point FTP with all the updates for each one. [ftp baseline update](https://ftp.ncbi.nlm.nih.gov/pubmed/updatefiles/). We collect the new file and generate the new dataset by upserting the existing item.
## Mapping

The table below describes the mapping from the XML baseline records to the OpenAIRE Graph dump format.


| *OpenAIRE Result field path*   | PubMed record field xpath      | Notes                                                                                                                                                         |
|--------------------------------|--------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Publication Mapping**        |                                |                                                                                                                                                               |
| `id`                           | ??                             | id in the form `pmid_________::md5(pmid)`                                                                                                                     |
| `pid`                          | `//PMID`                       | `classid = classname = pmid`                                                                                                                                  |
| `publicationdate`              | `//PubmedPubDate`              | clean and normalize the format of the date to be YYYY-mm-dd                                                                                                   |
| `maintitle`                    | `//Title`                      |                                                                                                                                                               |
| `description`                  | `//AbstractText`               |                                                                                                                                                               |
| `language`                     | `//Language`                   | cleaning vocabulary -> dnet:languages                                                                                                                         |
| `subjects`                     | `//DescriptorName`             | classId, className = keyword                                                                                                                                  |
| **Author Mapping**             |                                |                                                                                                                                                               |
| `author.surname`               | `//Author/LastName`            |                                                                                                                                                               |
| `author.name`                  | `//Author/ForeName`            |                                                                                                                                                               |
| `author.fullname`              | `//Author/FullName`            | Concatenation of forename + lastName if exist                                                                                                                 |
| `author.rank`                  | FOR ALL AUTHORS                | sequential number starting from 1                                                                                                                             |
| **Journal Mapping**            |                                |                                                                                                                                                               |
| `container.conferencedate`     | `//Journal/PubDate`            | map the date of the Journal                                                                                                                                   |
| `container.name`               | `//Journal/Title`              | name of the journal                                                                                                                                           |
| `container.vol`                | `//Journal/Volume`             | journal volume                                                                                                                                                |
| `container.issPrinted`         | `//Journal/ISSN`               | the journal issn                                                                                                                                                        |
| `container.iss`                | `//Journal/Issue`              | The journal issue                                                                                                                                             |
| **Instance Mapping**           |                                |                                                                                                                                                               |
| `instance.type`                | `//PublicationType`            | if the article contains the typology `Journal Article` then we apply this type else We have to find a terms that match the vocabulary otherwise we discard it |
|`result.type` |  <ul><li>`\attributes\types\resourceType`</li>  <li> `\attributes\types\resourceTypeGeneral` </li>  <li>`attributes\types\schemaOrg`</li></ul>      |    Using the **_dnet:result_typologies_** vocabulary, we look up the `instance.type` synonym to  generate one of the following main entities: <ul><li>`publication`</li>  <li>`dataset`</li> <li> `software`</li>  <li>`otherresearchproduct`</li></ul>    | 
| `instance.pid`                 | `//PMID`                       | map the pmid in the pid in the instance                                                                                                                       |
| `instance.url`                 | `//PMID`                       | creates the URL by prepending `https://pubmed.ncbi.nlm.nih.gov/` to the PMId                                                                                  |
| `instance.alternateIdentifier` | `//ArticleId[./@IdType="doi"]` |                                                                                                                                                               |
| `instance.publicationdate`     | `//PubmedPubDate`              |   clean and normalize the format of the date to be YYYY-mm-dd                                                                                                 |