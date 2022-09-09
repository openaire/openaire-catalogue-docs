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

### target
_Type: [Node](#the-node-object) &bull; Cardinality: ONE_

Represents the target node in the relation.

### reltype
_Type: [RelType](#the-reltype-object) &bull; Cardinality: ONE_

Represent the semantics of the relation between two nodes of the graph.

### provenance
_Type: [Provenance](entities/other#provenance-1) &bull; Cardinality: ONE_

Indicates the process that produced (or provided) the information.

### validated
_Type: Boolean &bull; Cardinality: ONE_

Indicates weather or not the relation was validated.

### validationDate
_Type: String &bull; Cardinality: ONE_

Indicates the validation date of the relation - applies only when the validated flag is set to true.

--- 

## The `Node` object

The Node data type contains the minimum information needed to identify a graph node, its identifier and entity type.


### id
_Type: String &bull; Cardinality: ONE_

OpenAIRE identifier of the node in the graph.

### type
_Type: String &bull; Cardinality: ONE_

Graph node type.


## The `RelType` object

The RelType data type models the semantic of the relationship among two nodes.

### type
_Type: String &bull; Cardinality: ONE_

Relation category, e.g. affiliation, citation, see table Relation typologies.

### name
_Type: String &bull; Cardinality: ONE_

Further specifies the relation semantic, indicating the relation direction, e.g. Cites, isCitedBy.


--- 

## Relationship types

The following table lists all the possible relation semantics found in the graph dump.

|  # | source entity type |  target entity type |  relType.type |         relType.name        |    relType.name (inverse)    |
|:--:|:------------------:|:-------------------:|:-------------:|:---------------------------:|:----------------------------:|
| 1  | [Project](entities/project)            | [Result](entities/result)              | outcome       | produces                    | isProducedBy                 |
| 2  | [Result](entities/result)             | [Organization](entities/organization)        | affiliation   | hasAuthorInstitution        | isAuthorInstitutionOf        |
| 3  | [Result](entities/result)             | [Result](entities/result)              | similarity    | isAmongTopNSimilarDocuments | HasAmongTopNSimilarDocuments |
| 4  | [Project](entities/project)            | [Organization](entities/organization)        | participation | isParticipant               | hasParticipant               |
| 5  | [Result](entities/result)             | [Result](entities/result)              | supplement    | isSupplementTo              | isSupplementedBy             |
| 6  | [Result](entities/result)             | [Result](entities/result)              | relationship  | isRelatedTo                 | isRelatedTo                  |
| 7  | [Data source](entities/data-source)        | [Organization](entities/organization)        | provision     | provides                    | isProvidedBy                 |
| 8  | [Result](entities/result)             | [Data source](entities/data-source)         | provision     | isHostedBy                  | hosts                        |
| 9  | [Result](entities/result)             | [Data source](entities/data-source)         | provision     | isProvidedBy                | provides                     |
| 10 | [Result](entities/result)             | [CommunityInitiative](entities/community) | relationship  | isRelatedTo                 | isRelatedTo                  |
| 11 | [Organization](entities/organization)       | [CommunityInitiative](entities/community) | relationship  | isRelatedTo                 | isRelatedTo                  |
| 12 | [Data source](entities/data-source)        | [CommunityInitiative](entities/community) | relationship  | isRelatedTo                 | isRelatedTo                  |
| 13 | [Project](entities/project)            | [CommunityInitiative](entities/community) | relationship  | isRelatedTo                 | isRelatedTo                  |


