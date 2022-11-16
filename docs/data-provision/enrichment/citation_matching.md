# Citation matching

***Short description:***

During a citation matching task, bibliographic entries are linked to the documents that they reference. The citation matching module - one of the modules of the Information Inference Service (IIS) - receives as an input a list of documents accompanied by their metadata and bibliography. Among them, it discovers links described above and returns them as a list. In this document we shall evaluate if the module has been properly integrated with the whole
system and assess the accuracy of the algorithm used. It is worth mentioning that the implemented algorithm has been described in detail in arXiv:1303.6906 [cs.IR]1. However, in the referenced paper the algorithm was tested on small datasets, but here we will focus on larger datasets, which are expected to be analysed by the system in the production environment.

***Algorithmic details:***

*General description*

The algorithm used in citation matching task consists of two phases. In the first one, for each citation string a set of potentially matching documents is retrieved using a heuristic. In the second one, the metadata of these documents is analysed in order to assess which of them is the most similar to given citation. We assume that citations are parsed, i.e. fragments containing meaningful pieces of metadata information are marked in a special way. Note that in the IIS system, the citation parsing step is executed by another module. The following metadata fields are used by the described solution:

* an author,
* a title,
* a journal name,
* pages,
* a year of publication.

*Heuristic matching*

The heuristic is based on indexing of document metadata by their author names. For each citation we extract author names and try to find documents in the index which have the same author entries. As spelling errors and inaccuracies commonly occur in citations, we have implemented approximate index which enables retrieval of entities with edit distance less than or equal 1.

*Strict matching*

In this step, all the potentially matching pairs obtained in the heuristic step are evaluated and only the most probable ones are returned as the final result. As citations tend to contain spelling errors and differ in style, there is a need to introduce fuzzy similarity measures fitted to the specifics of various metadata fields. Most of them compute a fraction of tokens or trigrams that occur in both fields being compared. When comparing journal
names, we have taken longest common subsequence (LCS) of two strings into consideration. This can be seen as an instance of the assignment problem with some refinements added. The overall similarity of two citation strings is obtained by applying a linear Support Vector Machine (SVM) using field similarities as features.

***Parameters:*** -
* input: 
    * input_metadata: [ExtractedDocumentMetadataMergedWithOriginal](https://github.com/openaire/iis/blob/master/iis-schemas/src/main/avro/eu/dnetlib/iis/transformers/metadatamerger/ExtractedDocumentMetadataMergedWithOriginal.avdl) avro datastore location with the metadata of both publications and bibliorgaphic references to be matched
    * input_matched_citations: [Citation](https://github.com/openaire/iis/blob/master/iis-schemas/src/main/avro/eu/dnetlib/iis/common/citations/Citation.avdl) avro datastore location with citations which were already matched and should be excluded from fuzzy matching
* output: [Citation](https://github.com/openaire/iis/blob/master/iis-schemas/src/main/avro/eu/dnetlib/iis/common/citations/Citation.avdl) avro datastore location with matched publications

***Limitations:*** -

***Environment:*** Java, Spark

***References:*** -

***Authority:*** ICM &bull; ***License:*** AGPL-3.0 &bull; ***Code:*** [CoAnSys/citation-matching](https://github.com/CeON/CoAnSys/tree/master/citation-matching)
