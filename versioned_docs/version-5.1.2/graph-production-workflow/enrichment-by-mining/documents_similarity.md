# Documents similarity

***Short description:*** Document similarity module is responsible for finding similar documents among the ones available in the OpenAIRE Information Space. It produces "similarity" links between the documents stored in the OpenAIRE Information Space. Each link has a similarity score from [0,1] range assigned; it is expected that the higher the score, the more similar are the documents with respect to their content.

***Algorithmic details:***
The similarity between two documents is expressed as the similarity between weights of their common terms (i.e., words being reduced to their root form) within a context of all terms from the first and the second document. In this approach, the computation can be divided into three consecutive steps:

1. selection of proper terms,
2. calculation of weights of terms for each document,
3. calculation of a given similarity function on weights of terms corresponding to each pair of documents.
  
The document similarity module uses the term frequency inverse-document frequency (TFIDF) measure and the cosine similarity to produce weights for terms and calculate their similarity respectively.

*Steps of execution*

Computation of similarity between documents is executed in the following steps.

1. First, we create a text representation of each document. The text is a concatenation of 3 attributes of document object coming from Information Space: title, abstract, and keywords.
2. Text representation of each document is split into words. Next, stop words or words which occur in more than the N percent of documents (say 99%) or these occurring in less than M documents (say 5) are discarded as we assume that they carry no important information. 	
3. Next, the words are stemmed (reduced to their root form) and thus converted to terms. The importance of each term in each document is calculated using TFIDF measure (resulting in a vector of weights of terms for each document). Only the top P (say 20) important terms per documents remain for the further computations.	
4. In order to calculate the cosine similarity value for the documents, we execute the following steps.	
    a. Triples [document id, term, term weight] are grouped by a common term and for each pair of triples from the group, term importance is recalculated as the multiplication of terms weights, producing quads [document id 1, document id 2, term, multiplied term weight].	
    b. Quads are grouped by [document id 1, document id 2] and the values of the multiplied term weight are summed up, resulting in the creation of triples [document id 1, document id 2, total common weight]. 	
    c. Finally, triples are normalized using product of the norm of the term weights' vectors. The normalized value is the final similarity measure with value between 0 and 1.
5. For a given document, only the top R (say 20) links to similar documents are returned. The links that are thrown away are assumed to be uninteresting for the end-user and thus storing them would only needlessly take disk space.

***Parameters:***
* input: 
    * input_document: [DocumentMetadata](https://github.com/openaire/iis/blob/master/iis-schemas/src/main/avro/eu/dnetlib/iis/documentssimilarity/DocumentMetadata.avdl) avro datastore location
    * parallel: sets parameter parallel for Pig actions (default=80)
    * mapredChildJavaOpts: mapreduce's map and reduce child java opts set to all PIG actions (default=Xmx12g)
    * tfidfTopnTermPerDocument: number of the most important terms taken into account (default=20)
    * similarityTopnDocumentPerDocument: maximum number of similar documents for each publication (default=20)
    * removal_rate: removal rate (default=0.99)
    * removal_least_used: removal of the least used terms (default=20)
    * threshold_num_of_vector_elems_length: vector elements length threshold, when set to less than 2 all documents will be included in similarity matching (default=2)
* output: [DocumentSimilarity](https://github.com/openaire/iis/blob/master/iis-schemas/src/main/avro/eu/dnetlib/iis/documentssimilarity/DocumentSimilarity.avdl) avro datastore location

***Limitations:*** -

***Environment:*** 
Pig, Java

***References:***

* P. J. Dendek, A. Czeczko, M. Fedoryszak, A. Kawa, and L. Bolikowski, "Content Analysis of Scientific Articles in Apache Hadoop Ecosystem", Stud. Comp.Intelligence, vol. 541, 2014.

***Authority:*** ICM &bull; ***License:*** AGPL-3.0 &bull; ***Code:*** [CoAnSys/document-similarity](https://github.com/CeON/CoAnSys/tree/master/document-similarity)
