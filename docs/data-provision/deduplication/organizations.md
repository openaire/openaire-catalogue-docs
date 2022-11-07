---
sidebar_position: 2
---

# Organizations

The organizations in OpenAIRE are aggregated from different registries (e.g. CORDA, OpenDOAR, Re3data, ROR). In some cases, a registry provides organizations as entities with their own persistent identifier. In other cases, those organizations are extracted from other main entities provided by the registry (e.g. datasources, projects, etc.).

The deduplication of organizations is enhanced by the OpenOrgs Database, a tool that allow the NOADs (i.e. the National OpenAccess Desks) to support the deduplication algorithm by providing feedbacks on organization relations and curate organization entities (e.g. legalname, pid, etc.).

Duplicates among organizations are therefore managed through three different stages:
  * *Creation of Suggestions*: executes an automatic workflow that performs the deduplication and prepare new suggestions for the NOADs to be processed in the OpenOrgs Database;
  * *Curation by the NOADs*: manual curation of the organizations performed by the NOADs through the OpenOrgs Database;
  * *Creation of Representative Organizations*: executes an automatic workflow that creates curated organizations and exposes them on the OpenAIRE Research Graph by using the NOADs' feedback from the OpenOrgs Database.

Note that these are not meant to be sequential, each workflow can be executed independently from the other.

The next sections describe the above mentioned stages.

### Creation of Suggestions

This stage executes an automatic workflow that faces the *candidate identification* and the *duplicates identification* stages of the deduplication to provide suggestions for the NOADs in the OpenOrgs Database.

#### Candidate identification (clustering)

To match the requirements of limiting the number of comparisons, OpenAIRE clustering for organizatins works with four functions:
* *URL-based function*: the function generates the URL domain when this is provided as part of the record properties;
* *Title-based functions*: 
	* generate strings dependent to the keywords in the legalname;
	* generate strings obtained as an alternation of the function prefix(3) and suffix(3) (and vice versa) on the first 3 words of the legalname;
	* generate strings obtained as a concatenation of ngrams of the legalname; 

#### Duplicates identification (pair-wise comparisons)

For each pair of organization in a cluster the following strategy (depicted in the figure below) is applied.
The comparison goes through different stages:
1. *grid id check*: comparison of the grid ids. If the grid id is equivalent, then the similarity relation is drawn. If the grid id is not available, the comparison proceeds to the next stage;
2. *early exits*: comparison of the numbers in the legalname, the country and the website url. No similarity relation is drawn in this stage, the comparison proceeds only if the compared fields verified the conditions of equivalence;
3. *city check*: comparison of the city names in the legalname. The comparison proceeds only if the legalnames shares at least 10% of cities;
4. *keyword check*: comparison of the keywords in the legalname. The comparison proceeds only if the legalnames shares at least 70% of keywords;
5. *legalname check*: comparison of the normalized legalnames with the Jaro Winkler distance to determine if it is higher than 0.9. If so, a similarity relation is drawn. Otherwise, no similarity relation is drawn.

<p align="center">
    <img loading="lazy" alt="Organization Decision Tree" src="/img/docs/decisiontree-organization.png" width="100%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>

### Curation by the NOADs

All the similarity relations drawn by the algorithm involving the decision tree are exposed on the OpenOrgs Database, which can be used by the NOADs to give feedbacks and to curate organizations.
A NOAD can:
 * *edit organization metadata*: legalname, pid, country, url, parent relations, etc.;   
 * *approve suggested duplicates*: establish if a similarity relation is valid;
 * *discard suggested duplicates*: establish if a similarity relation is wrong;
 * *create similarity relations*: add a new similarity relation not drawn by the algorithm.

Note that if a NOAD does not provide a feedback on a similarity relation suggested by the algorithm, then such relation is considered as valid.

### Creation of Representative Organizations

This stage executes an automatic workflow that faces the *duplicates grouping* stage to create representative organizations and to expose them on the OpenAIRE Research Graph. Such organizations are obtained via transitive closure and relations used comes from the NOADs' feedback collected through the OpenOrgs Database.

#### Duplicates grouping (transitive closure)

Once the similarity relations between pairs of organizations have been collected, the groups of equivalent organizations are obtained (transitive closure, i.e. “mesh”). From such sets a new representative organization is obtained, which inherits all properties from the merged records and keeps track of their provenance.

The IDs of the representative organizations are obtained by the OpenOrgs Database that creates a unique ``openorgs`` ID for each approved organization. In case an organization is not approved by the NOAD, the ID is obtained by appending the prefix ``pending_org`` to the MD5 of the first ID (given their lexicographical ordering).