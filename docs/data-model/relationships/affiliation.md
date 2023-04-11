# Affiliation

This relationship connects [Results](/data-model/entities/result) with the affiliated [Organizations](/data-model/entities/organization) for their authors.

* **[Result](/data-model/entities/result) hasAuthorInstitution [Organizations](/data-model/entities/organization)**
* **[Organizations](/data-model/entities/organization) isAuthorInstitutionOf [Result](/data-model/entities/result)**

Specifically, OpenAIRE collects those relations from the following data sources:

* MAG
* CNR ExploRA (Institutional repository) as a pilot case. 
 
Note that the aggregation of affiliation links from repositories is supported in the [OpenAIRE Guidelines v4.1-rc1](https://openaire-guidelines-for-literature-repository-managers.readthedocs.io/en/latest/field_creator.html#attribute-affiliationidentifier-r) (yet to be released).

Moreover, the final graph is also enriched with `affiliation` relationships through the following processes
* Context propagation on the Graph, you can find more details [here](/graph-production-workflow/deduction-and-propagation/propagation);
* TDM through the affiliation matching algorithm, you can find more details [here](/graph-production-workflow/enrichment-by-mining/affiliation_matching.md).