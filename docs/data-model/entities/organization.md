---
sidebar_position: 3
---

# Organization

Organizations include companies, research centers or institutions involved as project partners or as responsible of operating data sources. Information about organizations are collected from funder databases like CORDA, registries of data sources like OpenDOAR and re3Data, and CRIS systems, as being related to projects or data sources.


--- 

## The `Organization` object

### id
_Type: String &bull; Cardinality: ONE_

The OpenAIRE id for the organization, created according to the [OpenAIRE entity identifier and PID mapping policy](entity-identifiers).

```json
"id": "20|openorgs____::b84450f9864182c67b8611b5593f4250"
```

### legalshortname
_Type: String &bull; Cardinality: ONE_

The legal name in short form of the organization.

```json
"legalshortname": "ARC"
```

### legalname
_Type: String &bull; Cardinality: ONE_

The legal name of the organization.

```json
"legalname": "Athena Research and Innovation Center In Information Communication & Knowledge Technologies"
```

### alternativenames
_Type: String &bull; Cardinality: MANY_

Alternative names that identify the organization.

```json
"alternativenames": [
    "Athena Research and Innovation Center In Information Communication & Knowledge Technologies",
    "Athena RIC",
    "ARC",
    ...
]
```

### websiteurl
_Type: String &bull; Cardinality: ONE_

The websiteurl of the organization.

```json
"websiteurl": "https://www.athena-innovation.gr/el/announce/pressreleases.html"
```

### country
_Type: [Country](other#country) &bull; Cardinality: ONE_

The country where the organization is located.

```json
"country":{
    "code": "GR",
    "label": "Greece"
}
```

### pid
_Type: [OrganizationPid](other#organizationpid) &bull; Cardinality: MANY_

The list of persistent identifiers for the organization.

```json
"pid": [
    {
        "scheme": "ISNI",
        "value": "0000 0004 0393 5688"
    },
    { 
        "scheme": "GRID",
        "value":
        "grid.19843.37"
    },
    ...
]
```