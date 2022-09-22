---
sidebar_position: 3
---

# Organization

Organizations include companies, research centers or institutions involved as project partners or as responsible of operating data sources. Information about organizations are collected from funder databases like CORDA, registries of data sources like OpenDOAR and re3Data, and CRIS systems, as being related to projects or data sources.


--- 

## The `Organization` object

### id
_Type: String &bull; Cardinality: ONE_

Main entity identifier, created according to the [OpenAIRE entity identifier and PID mapping policy](entity-identifiers).

### legalshortname
_Type: String &bull; Cardinality: ONE_

The legal name in short form of the organization.

### legalname
_Type: String &bull; Cardinality: ONE_

The legal name of the organization.

### alternativenames
_Type: String &bull; Cardinality: MANY_

The alternative names of the organization.

### websiteurl
_Type: String &bull; Cardinality: ONE_

The websiteurl of the organization.

### country
_Type: [Country](other#country) &bull; Cardinality: ONE_

The country where the organization is located.

### pid
_Type: [OrganizationPid](other#organizationpid) &bull; Cardinality: MANY_

The list of persistent identifiers for the organization.

