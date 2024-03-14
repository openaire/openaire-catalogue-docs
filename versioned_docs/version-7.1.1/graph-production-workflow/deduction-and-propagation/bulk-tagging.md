# Deduction

The Deduction process (also known as “bulk tagging”) enriches each record with new information that can be derived from the existing property values.

This process is used to associate research products to community/research initiatives that are part of OpenAIRE. 
As of November 2022, three procedures are in place to relate a research product to a research initiative, infrastructure (RI) or community (RC) based on:

* subjects: it is possible to specify a list of subjects that are relevant for the RC/RI. Every time one of the subjects is found among the subjects of a research products, the research products is linked to the RC/RI.

<p align="center">
    <img loading="lazy" alt="Bulktagging Subject" src={require('../../assets/img/enrichment/bulktagging_subject.png').default} width="50%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>


* data sources: it is possible to list a set of data sources relevant for the RC/RI. All research products collected from these data sources will be linked to the RC/RI
<p align="center">
    <img loading="lazy" alt="Bulktagging Data source" src={require('../../assets/img/enrichment/bulktagging_datasource.png').default} width="50%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>

When only some research products collected from a datasource are relevant for the RC/RI, it is possible to specify a set of selection constraints (SC) that have to be verified before linking the research product to the 
community. The selection constraint has the form <strong>SC = S1 or S2 or ... or Sn</strong>. The generic Si has the form <strong>Si = s<sub>i1</sub> and s<sub>i2</sub> and ...and s<sub>in</sub></strong> and each s<sub>ij</sub> is a condition on a specific field of the research product. The set of fields that can be specified is <strong>F={title, author, contributor, description, orcid}</strong>, 
while the set of condition can be among <strong>V={contains, equals, not_contains, not_equals, contains_ignorecase, equals_ignorecase, not_contains_ignorecase, not_equal_ignorecase}</strong>, and the value is free text.
A possible selection criteria can be: “All the products whose contributor contains DARIAH “

<p align="center">
    <img loading="lazy" alt="Bulktagging Data source" src={require('../../assets/img/enrichment/bulktagging_selconstraints.png').default} width="70%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>

* Zenodo community: it is possible to list a set of Zenodo communities relevant for the RC/RI. All the products collected from the listed Zenodo communities are linked to the RC/RI


<p align="center">
    <img loading="lazy" alt="Bulktagging Zenodo Community" src={require('../../assets/img/enrichment/bulktagging_zenodo.png').default} width="50%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>


The list of subjects, Zenodo communities and data sources used to enrich the products are defined by the managers of the community gateway or infrastructure monitoring dashboard associated with the RC/RI.
