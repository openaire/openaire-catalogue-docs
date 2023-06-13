---
sidebar_position: 5
---

# Classifiers

***Short description:*** A document classification algorithm that employs analysis of free text stemming from the abstracts of the publications. The purpose of applying a document classification module is to assign a scientific text to one or more predefined content classes.

***Algorithmic details:***
The algorithm classifies publication's fulltexts using a Bayesian classifier and weighted terms according to an offline training phase. The training has been done using the following taxonomies: arXiv, MeSH (Medical Subject Headings), ACM, and DDC (Dewey Decimal Classification, or Dewey Decimal System).

***Parameters:*** Publication's identifier and fulltext

***Limitations:*** -

***Environment:***
Python, [madIS](https://github.com/madgik/madis), [APSW](https://github.com/rogerbinns/apsw)

***References:***
* Giannakopoulos, T., Stamatogiannakis, E., Foufoulas, I., Dimitropoulos, H., Manola, N., Ioannidis, Y. (2014). Content Visualization of Scientific Corpora Using an Extensible Relational Database Implementation. In: Bolikowski, Ł., Casarosa, V., Goodale, P., Houssos, N., Manghi, P., Schirrwagen, J. (eds) Theory and Practice of Digital Libraries -- TPDL 2013 Selected Workshops. TPDL 2013. Communications in Computer and Information Science, vol 416. Springer, Cham. [doi:10.1007/978-3-319-08425-1_10](https://doi.org/10.1007/978-3-319-08425-1_10)

***Authority:*** ATHENA RC &bull; ***License:*** CC-BY/CC-0 &bull; ***Code:*** [iis/referenceextraction](https://github.com/openaire/iis/tree/master/iis-wf/iis-wf-referenceextraction/src/main/resources/eu/dnetlib/iis/wf/referenceextraction)
