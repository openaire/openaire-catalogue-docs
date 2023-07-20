---
title: The Relationship object
---

# The `Relationship` object

A relationship in the Graph is represented with the data type presented in this page, which aims to model a directed edge between two nodes, providing information about its semantics, provenance and validation.

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
_Type: [Provenance](/data-model/entities/other#provenance-1) &bull; Cardinality: ONE_

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