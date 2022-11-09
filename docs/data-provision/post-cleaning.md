---
sidebar_position: 4
---

# Post cleaning

At the very end of the processing pipeline, a step is dedicated to perform cleaning operations aimed at improving the overall quality of the data. 
The output of this final cleansing step is the final version of the OpenAIRE Research Graph.

## Vocabulary based cleaning 

The aggregation processes run independently one from another and continuously. Each aggregation process, depending on the characteristics of the records exposed by the data source, makes use of one or more vocabularies to harmonise the values available in a given field.
A vocabulary is a data structure that defines a list of terms, and for each term defines a list of synonyms:

```xml
<TERMS>
    <TERM native_name="Annotation" code="0018" english_name="Annotation" encoding="OPENAIRE">
        <SYNONYMS>
            <SYNONYM term="Comentario" encoding="CSIC"/>
            <SYNONYM term="Comment/debate" encoding="Aaltodoc Publication Archive"/>
            <SYNONYM term="annotation" encoding="OPENAIRE-PR202112"/>
            [...]
        </SYNONYMS>
        <RELATIONS/>
    </TERM>
    <TERM native_name="Article" code="0001" english_name="Article" encoding="OPENAIRE">
        <SYNONYMS>
            <SYNONYM term="A1 Alkuperäisartikkeli tieteellisessä aikakauslehdessä" encoding="Aaltodoc Publication Archive"/>
            <SYNONYM term="A4 Artikkeli konferenssijulkaisussa" encoding="Aaltodoc Publication Archive"/>
            <SYNONYM term="Article" encoding="OTHER"/>
            <SYNONYM term="Article (author)" encoding="OTHER"/>
            [...]
```

Each vocabulary is typically used to control and harmonise the values available in a specific field characterising the bibliographic records. The example above provides a preview of the vocabulary used to clean the [result's instance typology](/data-model/entities/result#instance).

The content of the vocabularies can be accessed on [api.openaire.eu/vocabularies](https://api.openaire.eu/vocabularies/).

Given a value provided in the original records, the cleaning process looks for a synonym and, when found, resolves the corresponding term which is used in turn to build the cleaned record.
Each aggregation process applies vocabularies according to their definitions in a given moment of time, however, it could be the case that a vocabulary changes after the aggregation of one data source has finished, thus the aggregated content does not reflect the current status of the controlled vocabularies.

In addition, the integration of ScholeXplorer and DOIBoost and some enrichment processes applied on the raw and on the de-duplicated graph may introduce values that do not comply with the current status of the OpenAIRE controlled vocabularies. For these reasons, we included a final step of cleansing at the end of the workflow materialisation. 

## Filtering

Bibliographic records that do not meet minimal requirements for being part of the OpenAIRE Research Graph are eliminated during this phase. 
Currently, the only criteria applied horizontally to the entire graph aims at excluding scientific results whose title is not meaningful for citation purposes.
Then, different criteria are applied in the pre-processing of specific sub-collections:

* [Crossref filtering](/data-provision/aggregation/doiboost#crossref-filtering)

## Country cleaning

This phase is responsible for removing the country information from result records that match specific criteria. The need for this phase is driven by the fact that some datasources, although referred of national pertinence, they contain material that is not always related to the given country. 

