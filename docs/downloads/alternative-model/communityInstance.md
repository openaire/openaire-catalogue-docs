---

sidebar_position: 1

---

# CommunityInstance

It is a subclass of [Instance](../../data-model/entities/research-product#instance) extended with information regarding the collection and hosting source for this materialization of the research product.

### hostedby
_Type: [CfHbKeyValue](./cfhb) &bull; Cardinality: ONE_

Information about the source from which the instance can be viewed or downloaded.

```json

"hostedby": {
                "key": "issn___print::35ee75a5ad42581d604be113a8f56427",
                "value": "New Phytologist"
            },
            
```

### collectedfrom
_Type: [CfHbKeyValue](./cfhb) &bull; Cardinality: ONE_

Information about the source from which the record has been collected


```json

"collectedfrom": {
                "key": "openaire____::081b82f96300b6a6e3d282bad31cb6e2",
                "value": "Crossref"
            }
```