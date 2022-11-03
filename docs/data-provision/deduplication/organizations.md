---
sidebar_position: 2
---

# Organizations


### Candidate identification (clustering)

To match the requirements of limiting the number of comparisons, OpenAIRE clustering for organizatins works with four functions:
* *URL-based function*: the function generates the URL domain when this is provided as part of the record properties;
* *Title-based functions*: 
	* generate strings dependent to the keywords in the legalname;
	* generate strings obtained as an alternation of the function prefix(3) and suffix(3) (and vice versa) on the first 3 words of the legalname;
	* generate strings obtained as a concatenation of ngrams of the legalname; 

### Duplicates identification (pair-wise comparisons)

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

### Duplicates grouping (transitive closure)
