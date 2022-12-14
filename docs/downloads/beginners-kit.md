---
sidebar_position: 2
---

# Beginners kit

This kit includes the dump of a subset of the graph in the same [model](../data-model/data-model) of the full 
graph dump (add Zenodo link), and some examples showing how to process it (add Zenodo link).

The subset of the graph is done by selecting the results having specific characteristics. The criteria for the selection 
can be expressed in the style used for the [BulkTagging of data sources](../data-provision/enrichment/bulk-tagging). 
The dumped subset of the graph is made by results published in the last six months, the entities linked to this set, and all the relations among the selected set of entities. 
To create the dump, first of all we select all the results verifying the condition (in this case being published between 2022-12-dd ans 2022-06-dd) 
<p align="center">
    <img loading="lazy" alt="Result Selection" src="/img/docs/dumpsubset/result-subset-selection.png" width="50%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>

Once the results have been chosen, we proceed selecting the other entities (Organization, Project, Data source) involved in the dump.
For one entity to be included in the dump, there must exist at least one relation between that entity and one of the selected results.

<p align="center">
    <img loading="lazy" alt="Result Selection" src="/img/docs/dumpsubset/other-entities-selection.png" width="50%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>

When all the entities have been determined, we start adding the relations between them. One relation is added to the dump only if 
both the source and the target of the relation are between entities selected for the dump. All the other relations are discarded.


<p align="center">
    <img loading="lazy" alt="Result Selection" src="/img/docs/dumpsubset/subset.png" width="50%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>



