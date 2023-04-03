# hasAuthorInstitution
#### Inverse relationship type: `isAuthorInstitutionOf` 

This relationship connects [Results](/data-model/entities/result) with the affiliated [Organizations](/data-model/entities/organization) for their authors.

<span className="todo">
Specifically, we collect those relations from the following data sources:
[TODO: add more details and enrich the following list]
</span>

* MAG
* Institutional repositories

Last but to least, the final graph is also enriched with `hasAuthorInstitution` relationships through the Propagation process; you can find more details 
[here](/graph-production-workflow/deduction-and-propagation/propagation).