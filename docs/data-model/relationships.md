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

|  # | Source entity type |  Target entity type |  Relation type |         Relation name        |    Inverse relation name    |
|:--:|:------------------:|:-------------------:|:-------------:|:---------------------------:|:----------------------------:|
| 1  | [Project](entities/project)            | [Result](entities/result)              | outcome       | produces                    | isProducedBy                 |
| 2  | [Project](entities/project)            | [Organization](entities/organization)        | participation | hasParticipant                |     isParticipant           |
| 3  | [Project](entities/project)            | [Community](entities/community) | relationship  | isRelatedTo                 | isRelatedTo                  |
| 4  | [Result](entities/result)             | [Result](entities/result)              | similarity    | isAmongTopNSimilarDocuments | HasAmongTopNSimilarDocuments |
| 5  | [Result](entities/result)             | [Result](entities/result)              | supplement    | isSupplementTo              | isSupplementedBy             |
| 6  | [Result](entities/result)             | [Result](entities/result)              | relationship  | isRelatedTo                 | isRelatedTo                  |
| 7  | [Result](entities/result)             | [Result](entities/result)              | relationship  | IsPartOf                    | HasPart                      |    
| 8  | [Result](entities/result)             | [Result](entities/result)              | relationship  | IsDocumentedBy              | Documents                      |
| 9  | [Result](entities/result)             | [Result](entities/result)              | relationship  | IsObsoletedBy                    |    Obsoletes                   |
| 10 | [Result](entities/result)             | [Result](entities/result)              | relationship  | IsSourceOf                  | IsDerivedFrom                      |
| 11 | [Result](entities/result)             | [Result](entities/result)              | relationship  | IsCompiledBy                    | Compiles                      |
| 12 | [Result](entities/result)             | [Result](entities/result)              | relationship  | IsRequiredBy                     |     Requires                  |
| 13 | [Result](entities/result)             | [Result](entities/result)              | relationship  | IsCitedBy                     |    Cites                   |
| 14 | [Result](entities/result)             | [Result](entities/result)              | relationship  | IsReferencedBy                    | References                      |
| 15 | [Result](entities/result)             | [Result](entities/result)              | relationship  | IsReviewedBy                     |    IsVariantFormOf                   |
| 16 | [Result](entities/result)             | [Result](entities/result)              | relationship  | IsOriginalFormOf                    | IsCitedBy                      |
| 17 | [Result](entities/result)             | [Result](entities/result)              | relationship  | IsVersionOf                    | HasVersion                      |
| 18 | [Result](entities/result)             | [Result](entities/result)              | relationship  | IsIdenticalTo                    | IsIdenticalTo                      |
| 19 | [Result](entities/result)             | [Result](entities/result)              | relationship  | IsPreviousVersionOf                    | IsNewVersionOf                      |
| 20 | [Result](entities/result)             | [Result](entities/result)              | relationship  | IsContinuedBy                    | Continues                      |
| 21 | [Result](entities/result)             | [Result](entities/result)              | relationship  | IsDescribedBy                    | Describes                      |
| 22 | [Result](entities/result)             | [Organization](entities/organization)        | affiliation   | hasAuthorInstitution        | isAuthorInstitutionOf        |
| 23 | [Result](entities/result)             | [Data source](entities/data-source)         | provision     | isHostedBy                  | hosts                        |
| 24 | [Result](entities/result)             | [Data source](entities/data-source)         | provision     | isProvidedBy                | provides                     |
| 25 | [Result](entities/result)             | [Community](entities/community) | relationship  | isRelatedTo                 | isRelatedTo                  |
| 26 | [Organization](entities/organization)       | [Community](entities/community) | relationship  | isRelatedTo                 | isRelatedTo                  |
| 27 | [Data source](entities/data-source)        | [Community](entities/community) | relationship  | isRelatedTo                 | isRelatedTo                  |
| 28 | [Data source](entities/data-source)        | [Organization](entities/organization)        | provision     | isProvidedBy                     |    provides              |

