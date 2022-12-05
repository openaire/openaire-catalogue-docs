---

sidebar_position: 1

---



# Project


The information about the projects related to the result


### id

_Type: String &bull; Cardinality: ONE_


Main entity identifier, created according to the [OpenAIRE entity identifier and PID mapping policy](../../data-model/pids-and-identifiers).


```json

"id": "40|corda__h2020::70ea22400fd890c5033cb31642c4ae68"

```


### code

_Type: String &bull; Cardinality: ONE_


Τhe grant agreement code of the project.


```json

"code": "777541"

```


### acronym

_Type: String &bull; Cardinality: ONE_


Project's acronym.


```json

"acronym": "OpenAIRE-Advance"

```


### title

_Type: String &bull; Cardinality: ONE_


Project's title.


```json

"title": "OpenAIRE Advancing Open Scholarship"

```


### funder

_Type [Funder](funder.md)  &bull; Cardinality: ONE_


Information about the funder funding the project


```json


"funder": {
                "shortName": "EC",
                "name": "European Commission",
                "jurisdiction": "EU",
                "fundingStream": "H2020"
            }


```

### provenace


_Type [Provenance](../../data-model/entities/other#provenance-2)  &bull; Cardinality: ONE_


The reason why the project is associated to the result


```json


"provenance": {
                  "provenance": "Harvested",
                  "trust": "0.900000000000000022"
              }

```


### validated


_Type [Validated](validated.md)  &bull; Cardinality: ONE_


Specifies it the association between the project and the result was validated


```json


"validated": {
                "validationDate": "2021-0101",
                "validatedByFunder": true
            }

```

