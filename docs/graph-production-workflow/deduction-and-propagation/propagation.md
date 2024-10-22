# Propagation

This process enriches the graph by adding new links and/or new properties. The new information is added by exploiting existing semantic 
relationships and values between the involved entities 

As of November 2022, the following procedures are in place:

* Country propagation: updates the property “country” of a research product. This happens when the research product is collected from an institutional datasource or when the datasource hosting the research product is inserted in a whitelist. For all the research products whose hosting datasource verifies one of the conditions above, the country of the organization providing the datasource is added to the country of the research product: e.g. publication collected from an institutional repository maintained by an italian university will be enriched with the property “country = IT”.
<p align="center">
    <img loading="lazy" alt="Country Propagation" src={require('../../assets/img/enrichment/propagation_country.png').default} width="50%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>

* Project propagation: adds a "isProducedBy" relationship (and its inverse) between a Project P and research product R1, if R1 has a strong semantic relationship with another research product R2 and P produces R2: e.g. publication linked to project P “is supplemented by” a dataset D. Dataset D will get the link to project P. The relationships considered for this procedure are “isSupplementedBy” and “isSupplementTo”.
<p align="center">
    <img loading="lazy" alt="Project Propagation" src={require('../../assets/img/enrichment/propagation_resulttoproject.png').default} width="40%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>
* Research product to RC/RI through organization propagation. The manager of the RC/RI can specify a set of organizations whose product are relevant for the 
community.  
Each research product having such a relation of affiliation with at least one organization relevant for the RC/RI will be linked to it.
<p align="center">
    <img loading="lazy" alt="Research product to community through organization propagation" src={require('../../assets/img/enrichment/propagation_resulttocommunitythroughorganization.png').default} 
    width="50%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>

* Research product to RC/RI through semantic relation: extends the set of products linked to a RC/RI by exploiting strong semantic relationships between the research products;
e.g. if a research product R1 is associated to the community C and is supplemented by a research product R2 then R2 will be linked to the community. The relationships considered for this procedure are “isSupplementedBy” and “supplements”.
<p align="center">
    <img loading="lazy" alt="Research product to community through semantic relation propagation" src={require('../../assets/img/enrichment/propagation_resulttocommunitythroughsemrel.png').default} width="40%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>
* ORCID identifiers to research product through semantic relation. This propagation enriches the research products by adding ORCID identifiers to authors. The added ORCID will be marked as "potential" since they have been inserted through propagation. 
The process considers the set of overlapping authors between research products (R1 and R2) linked with a strong semantic relationship (IsSupplementedBy, IsSupplementTo). 
For each author A in the overlapping set, if R1 provides the ORCID value for A and R2 does not, then the author A in R2 will be enriched with the information of the ORCID found in R1.

<p align="center">
    <img loading="lazy" alt="Orcid propation through semantic relation" src={require('../../assets/img/enrichment/propagation_orcid.png').default} width="40%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>

* affiliation to organization through institutional repository. This propagation adds one "hasAuthorInstitution" relationship (and its inverse) 
between a research product R and Organization O, 
if R was collected from a datasource D with type institutional repository, and D was provided by O. 
<p align="center">
    <img loading="lazy" alt="Affiliation propagation through institutional repository" src={require('../../assets/img/enrichment/propagation_affiliationistrepo.png').default} width="40%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>

* affiliation to organization through semantic relation. This propagation adds one "hasAuthorInstitution" relationship (and its inverse) between a 
research product R and an Organization O, 
if R has an affiliation relation with an organization O1 that is in relation "isChildOf" with O.

<p align="center">
    <img loading="lazy" alt="Affiliation propagation through semantic relation" src={require('../../assets/img/enrichment/propagation_organizationsemrel.png').default} width="40%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>
 The algorithm exploits only the organization leaves that are in a "IsChildOf" relation with another organization. So far one single step is done
<p align="center">
    <img loading="lazy" alt="propagation strategy" src={require('../../assets/img/enrichment/organization_tree.png').default} width="40%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>