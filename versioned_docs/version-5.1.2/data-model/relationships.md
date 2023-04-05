---
sidebar_position: 2
---

# Relationships

A relationship in the graph is represented by the following data type, which aims to model a directed edge between two nodes, providing information about the semantic of the relation, its provenance and validation.

--- 

## The `Relationship` object

### source
_Type: [Node](#the-node-object) &bull; Cardinality: ONE_

Represents the source node in the relation.

```json
"source": {
    "id": "20|openorgs____::1cb75a3ad756e4c83e455e3e7347643b",
    "type": "organization"
}
```

### target
_Type: [Node](#the-node-object) &bull; Cardinality: ONE_

Represents the target node in the relation.

```json
"target": {
    "id": "10|doajarticles::022409068174087a003647ff46070f7f",
    "type": "datasource"
}
```

### reltype
_Type: [RelType](#the-reltype-object) &bull; Cardinality: ONE_

Represent the semantics of the relation between two nodes of the graph.

```json
"reltype": {
    "name": "provides",
    "type": "provision"
}
```
### provenance
_Type: [Provenance](entities/other#provenance-1) &bull; Cardinality: ONE_

Indicates the process that produced (or provided) the information.

```json
"provenance": {
    "provenance": "Harvested",
    "trust":"0.900"
}
```

### validated
_Type: Boolean &bull; Cardinality: ONE_

Indicates weather or not the relation was validated.

```json
"validated": true
```

### validationDate
_Type: String &bull; Cardinality: ONE_

Indicates the validation date of the relation - applies only when the validated flag is set to true.

```json
"validationDate": "2022-09-02"
```

--- 

## The `Node` object

The Node data type contains the minimum information needed to identify a graph node, its identifier and entity type.


### id
_Type: String &bull; Cardinality: ONE_

OpenAIRE identifier of the node in the graph.

```json
"id": "10|doajarticles::022409068174087a003647ff46070f7f"
```
    
### type
_Type: String &bull; Cardinality: ONE_

Graph node type.

```json
"type": "datasource"
```

## The `RelType` object

The RelType data type models the semantic of the relationship among two nodes.

### type
_Type: String &bull; Cardinality: ONE_

Relation category, e.g. affiliation, citation, see table Relation typologies.

```json
"name": "provides"
```

### name
_Type: String &bull; Cardinality: ONE_

Further specifies the relation semantic, indicating the relation direction, e.g. Cites, isCitedBy.

```json
"type": "provision"
```
--- 

## Relationship types

The following table lists all the possible relation semantics found in the graph dump.

Note: the labels used to specify the semantic of the relationships are (for the large) inherited from the [DataCite metadata kernel](https://schema.datacite.org/meta/kernel-4.4/doc/DataCite-MetadataKernel_v4.4.pdf), which provides a description for them.

|  # | Source entity type                     | Target entity type                     | Relation name / inverse                                    | Provenance                                      |
|:--:|:--------------------------------------:|:--------------------------------------:|:----------------------------------------------------------:|:-----------------------------------------------:|
| 1  | [Project](entities/project)            | [Result](entities/result)              | produces / isProducedBy                                    | Harvested, Inferred by OpenAIRE, Linked by user |
| 2  | [Project](entities/project)            | [Organization](entities/organization)  | hasParticipant / isParticipant                             | Harvested                                       |
| 3  | [Project](entities/project)            | [Community](entities/community)        | IsRelatedTo / IsRelatedTo                                  | Linked by user                                  |
| 4  | [Result](entities/result)              | [Result](entities/result)              | IsAmongTopNSimilarDocuments / HasAmongTopNSimilarDocuments | Inferred by OpenAIRE                            |
| 5  | [Result](entities/result)              | [Result](entities/result)              | IsSupplementTo / IsSupplementedBy                          | Harvested                                       |
| 6  | [Result](entities/result)              | [Result](entities/result)              | IsRelatedTo / IsRelatedTo                                  | Harvested, Inferred by OpenAIRE, Linked by user |
| 7  | [Result](entities/result)              | [Result](entities/result)              | IsPartOf / HasPart                                         | Harvested                                       |
| 8  | [Result](entities/result)              | [Result](entities/result)              | IsDocumentedBy / Documents                                 | Harvested                                       |
| 9  | [Result](entities/result)              | [Result](entities/result)              | IsObsoletedBy / Obsoletes                                  | Harvested                                       |
| 10 | [Result](entities/result)              | [Result](entities/result)              | IsSourceOf / IsDerivedFrom                                 | Harvested                                       |
| 11 | [Result](entities/result)              | [Result](entities/result)              | IsCompiledBy / Compiles                                    | Harvested                                       |
| 12 | [Result](entities/result)              | [Result](entities/result)              | IsRequiredBy / Requires                                    | Harvested                                       |
| 13 | [Result](entities/result)              | [Result](entities/result)              | IsCitedBy / Cites                                          | Harvested, Inferred by OpenAIRE                 |
| 14 | [Result](entities/result)              | [Result](entities/result)              | IsReferencedBy / References                                | Harvested                                       |
| 15 | [Result](entities/result)              | [Result](entities/result)              | IsReviewedBy / Reviews                                     | Harvested                                       |
| 16 | [Result](entities/result)              | [Result](entities/result)              | IsOriginalFormOf / IsVariantFormOf                         | Harvested                                       |
| 17 | [Result](entities/result)              | [Result](entities/result)              | IsVersionOf / HasVersion                                   | Harvested                                       |
| 18 | [Result](entities/result)              | [Result](entities/result)              | IsIdenticalTo / IsIdenticalTo                              | Harvested                                       |
| 19 | [Result](entities/result)              | [Result](entities/result)              | IsPreviousVersionOf / IsNewVersionOf                       | Harvested                                       |
| 20 | [Result](entities/result)              | [Result](entities/result)              | IsContinuedBy / Continues                                  | Harvested                                       |
| 21 | [Result](entities/result)              | [Result](entities/result)              | IsDescribedBy / Describes                                  | Harvested                                       |
| 22 | [Result](entities/result)              | [Organization](entities/organization)  | hasAuthorInstitution / isAuthorInstitutionOf               | Harvested, Inferred by OpenAIRE                 |
| 23 | [Result](entities/result)              | [Data source](entities/data-source)    | isHostedBy / hosts                                         | Harvested, Inferred by OpenAIRE                 |
| 24 | [Result](entities/result)              | [Data source](entities/data-source)    | isProvidedBy / provides                                    | Harvested                                       |
| 25 | [Result](entities/result)              | [Community](entities/community)        | IsRelatedTo / IsRelatedTo                                  | Harvested, Inferred by OpenAIRE, Linked by user |
| 26 | [Organization](entities/organization)  | [Community](entities/community)        | IsRelatedTo / IsRelatedTo                                  | Linked by user                                  |
| 27 | [Organization](entities/organization)  | [Organization](entities/organization)  | IsChildOf / IsParentOf                                     | Linked by user                                  |
| 28 | [Data source](entities/data-source)    | [Community](entities/community)        | IsRelatedTo / IsRelatedTo                                  | Linked by user                                  |
| 29 | [Data source](entities/data-source)    | [Organization](entities/organization)  | isProvidedBy / provides                                    | Harvested                                       |

