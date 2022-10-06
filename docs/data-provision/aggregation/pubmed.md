# PubMed

This section describes the mapping implemented for [MEDLINE/PubMed](https://pubmed.ncbi.nlm.nih.gov/).

## Input

The native data is collected from the [ftp baseline](https://ftp.ncbi.nlm.nih.gov/pubmed/baseline/) site. 
It contains XML records compliant with the schema available at https://www.nlm.nih.gov/bsd/licensee/elements_descriptions.html.

## Mapping

The table below describes the mapping from the XML baseline records to the OpenAIRE Graph dump format.


| *OpenAIRE Result field path*   | PubMed record field xpath      | Notes                                                                                                                                                         |
|--------------------------------|--------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Publication Mapping**        |                                |                                                                                                                                                               |
| `id`                           | ??                             | ??                                                                                                                                                            |
| `pid`                          | `//PMID`                       | `classid = classname = pmid`                                                                                                                                  |
| `publicationdate`              | `//PubmedPubDate`              | apply the function GraphCleaningFunctions.cleanDate before assign it                                                                                          |
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
| `container.issPrinted`         | `//Journal/ISSN`               | ??                                                                                                                                                            |
| `container.iss`                | `//Journal/Issue`              | The journal issue                                                                                                                                             |
| **Instance Mapping**           |                                |                                                                                                                                                               |
| `instance.type`                | `//PublicationType`            | if the article contains the typology `Journal Article` then we apply this type else We have to find a terms that match the vocabulary otherwise we discard it |
| `instance.pid`                 | `//PMID`                       | map the pmid in the pid in the instance                                                                                                                       |
| `instance.url`                 | `//PMID`                       | creates the URL by prepending `https://pubmed.ncbi.nlm.nih.gov/` to the PMId                                                                                  |
| `instance.alternateIdentifier` | `//ArticleId[./@IdType="doi"]` |                                                                                                                                                               |
| `instance.publicationdate`     | `//PubmedPubDate`              |                                                                                                                                                               |


| *OpenAIRE Relation field path* | PubMed record field xpath | Notes |
|--------------------------------|---------------------------|-------|
|                                |                           |       |

#TODO

Missing item mapped











