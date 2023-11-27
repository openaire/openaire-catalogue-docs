# Relationship types

The following table lists all the possible relation semantics found in the graph dump.

Note: the labels used to specify the semantic of the relationships are (for the large) inherited from the [DataCite metadata kernel](https://schema.datacite.org/meta/kernel-4.4/doc/DataCite-MetadataKernel_v4.4.pdf), which provides a description for them.

|  # | Source entity type                     | Target entity type                     | Relation name / inverse                                    | Provenance                                      |
|:--:|:--------------------------------------:|:--------------------------------------:|:----------------------------------------------------------:|:-----------------------------------------------:|
| 1  | [Project](/data-model/entities/project)            | [Result](/data-model/entities/result)              | produces / isProducedBy                                    | Harvested, Inferred by OpenAIRE, Linked by user |
| 2  | [Project](/data-model/entities/project)            | [Organization](/data-model/entities/organization)  | hasParticipant / isParticipant                             | Harvested                                       |
| 3  | [Project](/data-model/entities/project)            | [Community](/data-model/entities/community)        | IsRelatedTo / IsRelatedTo                                  | Linked by user                                  |
| 4  | [Result](/data-model/entities/result)              | [Result](/data-model/entities/result)              | IsAmongTopNSimilarDocuments / HasAmongTopNSimilarDocuments | Inferred by OpenAIRE                            |
| 5  | [Result](/data-model/entities/result)              | [Result](/data-model/entities/result)              | IsSupplementTo / IsSupplementedBy                          | Harvested                                       |
| 6  | [Result](/data-model/entities/result)              | [Result](/data-model/entities/result)              | IsRelatedTo / IsRelatedTo                                  | Harvested, Inferred by OpenAIRE, Linked by user |
| 7  | [Result](/data-model/entities/result)              | [Result](/data-model/entities/result)              | IsPartOf / HasPart                                         | Harvested                                       |
| 8  | [Result](/data-model/entities/result)              | [Result](/data-model/entities/result)              | IsDocumentedBy / Documents                                 | Harvested                                       |
| 9  | [Result](/data-model/entities/result)              | [Result](/data-model/entities/result)              | IsObsoletedBy / Obsoletes                                  | Harvested                                       |
| 10 | [Result](/data-model/entities/result)              | [Result](/data-model/entities/result)              | IsSourceOf / IsDerivedFrom                                 | Harvested                                       |
| 11 | [Result](/data-model/entities/result)              | [Result](/data-model/entities/result)              | IsCompiledBy / Compiles                                    | Harvested                                       |
| 12 | [Result](/data-model/entities/result)              | [Result](/data-model/entities/result)              | IsRequiredBy / Requires                                    | Harvested                                       |
| 13 | [Result](/data-model/entities/result)              | [Result](/data-model/entities/result)              | IsCitedBy / Cites                                          | Harvested, Inferred by OpenAIRE                 |
| 14 | [Result](/data-model/entities/result)              | [Result](/data-model/entities/result)              | IsReferencedBy / References                                | Harvested                                       |
| 15 | [Result](/data-model/entities/result)              | [Result](/data-model/entities/result)              | IsReviewedBy / Reviews                                     | Harvested                                       |
| 16 | [Result](/data-model/entities/result)              | [Result](/data-model/entities/result)              | IsOriginalFormOf / IsVariantFormOf                         | Harvested                                       |
| 17 | [Result](/data-model/entities/result)              | [Result](/data-model/entities/result)              | IsVersionOf / HasVersion                                   | Harvested                                       |
| 18 | [Result](/data-model/entities/result)              | [Result](/data-model/entities/result)              | IsIdenticalTo / IsIdenticalTo                              | Harvested                                       |
| 19 | [Result](/data-model/entities/result)              | [Result](/data-model/entities/result)              | IsPreviousVersionOf / IsNewVersionOf                       | Harvested                                       |
| 20 | [Result](/data-model/entities/result)              | [Result](/data-model/entities/result)              | IsContinuedBy / Continues                                  | Harvested                                       |
| 21 | [Result](/data-model/entities/result)              | [Result](/data-model/entities/result)              | IsDescribedBy / Describes                                  | Harvested                                       |
| 22 | [Result](/data-model/entities/result)              | [Organization](/data-model/entities/organization)  | hasAuthorInstitution / isAuthorInstitutionOf               | Harvested, Inferred by OpenAIRE                 |
| 23 | [Result](/data-model/entities/result)              | [Data source](/data-model/entities/data-source)    | isHostedBy / hosts                                         | Harvested, Inferred by OpenAIRE                 |
| 24 | [Result](/data-model/entities/result)              | [Data source](/data-model/entities/data-source)    | isProvidedBy / provides                                    | Harvested                                       |
| 25 | [Result](/data-model/entities/result)              | [Community](/data-model/entities/community)        | IsRelatedTo / IsRelatedTo                                  | Harvested, Inferred by OpenAIRE, Linked by user |
| 26 | [Organization](/data-model/entities/organization)  | [Community](/data-model/entities/community)        | IsRelatedTo / IsRelatedTo                                  | Linked by user                                  |
| 27 | [Organization](/data-model/entities/organization)  | [Organization](/data-model/entities/organization)  | IsChildOf / IsParentOf                                     | Linked by user                                  |
| 28 | [Data source](/data-model/entities/data-source)    | [Community](/data-model/entities/community)        | IsRelatedTo / IsRelatedTo                                  | Linked by user                                  |
| 29 | [Data source](/data-model/entities/data-source)    | [Organization](/data-model/entities/organization)  | isProvidedBy / provides                                    | Harvested                                       |
