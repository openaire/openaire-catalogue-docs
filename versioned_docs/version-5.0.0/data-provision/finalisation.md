# Finalisation

At the very end of the graph production workflow, a step is dedicated to perform certain finalisation operations, that we describe in this page, 
aiming to improve the overall quality of the data. 
The output of this final step is the final version of the OpenAIRE Research Graph.

## Filtering

Bibliographic records that do not meet minimal requirements for being part of the OpenAIRE Research Graph are eliminated during this phase. 
Currently, the only criteria applied horizontally to the entire graph aims at excluding scientific results whose title is not meaningful for citation purposes.
Then, different criteria are applied in the pre-processing of specific sub-collections:

* [Crossref filtering](/graph-production-workflow/aggregation/non-compatible-sources/doiboost#crossref-filtering)

## Country cleaning

This phase is responsible for removing the country information from result records that match specific criteria. The need for this phase is driven by the fact that some datasources, although referred of national pertinence, they contain material that is not always related to the given country. 

