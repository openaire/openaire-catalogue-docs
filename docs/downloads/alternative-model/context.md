---

sidebar_position: 1

---

# Context

Information related to research initiative/community (RI/RC) related to the result

### code 
_Type: String &bull; Cardinality: ONE_

Code identifying the RI/RC.

```json
"code":"sdsn-gr"

```


### label
_Type: String &bull; Cardinality: ONE_

Label of the RI/RC 

```json
"label":"SDSN - Greece"
```
	
### provenance 
_Type: [Provenance](../../../data-model/entities/other#provenance-2)  &bull; Cardinality: MANY_

Why this result is associated to the RI/RC.

```json

"provenance":[{
                "provenance":"Inferred by OpenAIRE",
                "trust":"0.9"
              },
              ...
   ] 

```

