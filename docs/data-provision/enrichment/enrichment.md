# Enrichment

## Mining

The OpenAIRE Graph is enriched by links mined by OpenAIRE’s full-text mining algorithms that scan the plaintexts of publications for funding information, references to datasets, software URIs, accession numbers of bioetities, and EPO patent mentions. Custom mining modules also link research objects to specific research communities, initiatives and infrastructures. In addition, other inference modules provide content-based document classification, document similarity, citation matching, and author affiliation matching.

**Project mining** in OpenAIRE text mines the full-texts of publications in order to extract matches to funding project codes/IDs. The mining algorithm works by utilising (i) the grant identifier, and (ii) the project acronym (if available) of each project. The mining algorithm: (1) Preprocesses/normalizes the full-texts using several functions, which depend on the characteristics of each funder (i.e., the format of the grant identifiers), such as stopword and/or punctuation removal, tokenization, stemming, converting to lowercase; then (2) String matching of grant identifiers against the normalized text is done using database techniques; and (3) The results are validated and cleaned using the context near the match by looking at the context around the matched ID for relevant metadata and positive or negative words/phrases, in order to calculate a confidence value for each publication-->project link. A confidence threshold is set to optimise high accuracy while minimising false positives, such as matches with page or report numbers, post/zip codes, parts of telephone numbers, DOIs or URLs, accession numbers. The algorithm also applies rules for disambiguating results, as different funders can share identical project IDs; for example, grant number 633172 could refer to H2020 project EuroMix but also to Australian-funded NHMRC project “Brain activity (EEG) analysis and brain imaging techniques to measure the neurobiological effects of sleep apnea”. Project mining works very well and was the first Text & Data Mining (TDM) service of OpenAIRE. Performance results vary from funder to funder but precision is higher than 98% for all funders and 99.5% for EC projects. Recall is higher than 95% (99% for EC projects), when projects are properly acknowledged using project/grant IDs.

**Dataset extraction** runs on publications full-texts as described in “High pass text-filtering for Citation matching”, TPDL 2017[1]. In particular, we search for citations to datasets using their DOIs, titles and other metadata (i.e., dates, creator names, publishers, etc.). We extract parts of the text which look like citations and search for datasets using database join and pattern matching techniques. Based on the experiments described in the paper, precision of the dataset extraction module is 98.5% and recall is 97.4% but it is also probably overestimated since it does not take into account corruptions that may take place during pdf to text extraction. It is calculated on the extracted full-texts of small samples from PubMed and arXiv.

**Software extraction** runs also on parts of the text which look like citations. We search the citations for links to software in open software repositories, specifically github, sourceforge, bitbucket and the google code archive. After that, we search for links that are included in Software Heritage (SH, https://www.softwareheritage.org) and return the permanent URL that SH provides for each software project. We also enrich this content with user names, titles and descriptions of the software projects using web mining techniques. Since software mining is based on URL matching, our precision is 100% (we return a software link only if we find it in the text and there is no need to disambiguate). As for recall rate, this is not calculable for this mining task. Although we apply all the necessary normalizations to the URLs in order to overcome usual issues (e.g., http or https, existence of www or not, lower/upper case), we do not calculate cases where a software is mentioned using its name and not by a link from the supported software repositories.

**For the extraction of bio-entities**, we focus on Protein Data Bank (PDB) entries. We have downloaded the database with PDB codes and we update it regularly. We search through the whole publication’s full-text for references to PDB codes. We apply disambiguation rules (e.g., there are PDB codes that are the same as antibody codes or other issues) so that we return valid results. Current precision is 98%. Although it's risky to mention recall rates since these are usually overestimated, we have calculated a recall rate of 98% using small samples from pubmed publications. Moreover, our technique is able to identify about 30% more links to proteins than the ones that are tagged in Pubmed xmls.

**Other text-mining modules** include mining for links to EPO patents, or custom mining modules for linking research objects to specific research communities, initiatives and infrastructures, e.g. COVID-19 mining module. Apart from text-mining modules, OpenAIRE also provides a document classification service that employs analysis of free text stemming from the abstracts of the publications. The purpose of applying a document classification module is to assign a scientific text one or more predefined content classes. In OpenAIRE, the currently used taxonomies are arXiv, MeSH (Medical Subject Headings), ACM and DDC (Dewey Decimal Classification, or Dewey Decimal System).

## Bulk Tagging/Deduction

The Deduction process (also known as “bulk tagging”) enriches each record with new information that can be derived from the existing property values.

This process is used to associate results to community/research initiatives that are part of OpenAIRE. 
As of November 2022, three procedures are in place to relate a research product to a research initiative, infrastructure (RI) or community (RC) based on:

* subjects: it is possible to specify a list of subjects that are relevant for the RC/RI. Every time one of the subjects is found among the subjects of a result, the result is linked to the RC/RI.

<p align="center">
    <img loading="lazy" alt="Bulktagging Subject" src="/img/docs/enrichment/bulktagging_subject.png" width="50%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>


* data sources: it is possible to list a set of data sources relevant for the RC/RI. All the results collected from these data sources will be linked to the RC/RI
<p align="center">
    <img loading="lazy" alt="Bulktagging Data source" src="/img/docs/enrichment/bulktagging_datasource.png" width="50%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>

 When only some results collected from a datasource are relevant for the RC/RI, it is possible to specify a set of selection constraints (SC) that have to be verified before linking the result to the 
community. The selection constraint has the form <strong>SC = S1 or S2 or ... or Sn</strong>. The generic Si has the form <strong>Si = s<sub>i1</sub> and s<sub>i2</sub> and ...and s<sub>in</sub></strong> and each s<sub>ij</sub> is a condition on a specific field of the result. The set of fields that can be specified is <strong>F={title, author, contributor, description, orcid}</strong>, 
while the set of condition can be among <strong>V={contains, equals, not_contains, not_equals, contains_ignorecase, equals_ignorecase, not_contains_ignorecase, not_equal_ignorecase}</strong>, and the value is free text.
A possible selection criteria can be: “All the products whose contributor contains DARIAH “

<p align="center">
    <img loading="lazy" alt="Bulktagging Data source" src="/img/docs/enrichment/bulktagging_selconstraints.png" width="70%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>

* Zenodo community: it is possible to list a set of Zenodo communities relevant for the RC/RI. All the products collected from the listed Zenodo communities are linked to the RC/RI


<p align="center">
    <img loading="lazy" alt="Bulktagging Zenodo Community" src="/img/docs/enrichment/bulktagging_zenodo.png" width="50%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>


The list of subjects, Zenodo communities and data sources used to enrich the products are defined by the managers of the community gateway or infrastructure monitoring dashboard associated with the RC/RI.

## Propagation

This process enriches the graph by adding new links and/or new properties. The new information is added by exploiting existing semantic 
relationships and values between the involved entities 

As of November 2022, the following procedures are in place:

* Country propagation: updates the property “country” of a results. This happens when the result is collected from an institutional datasource or when the datasource hosting the result is inserted in a whitelist. For all the results whose hosting datasource verifies one of the conditions above, the country of the organization providing the datasource is added to the country of the result: e.g. publication collected from an institutional repository maintained by an italian university will be enriched with the property “country = IT”.
<p align="center">
    <img loading="lazy" alt="Country Propagation" src="/img/docs/enrichment/propagation_country.png" width="50%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>

* Project propagation: adds a "isProducedBy" relationship (and its inverse) between a Project P and Result R1, if R1 has a strong semantic relationship with another Result R2 and P produces R2: e.g. publication linked to project P “is supplemented by” a dataset D. Dataset D will get the link to project P. The relationships considered for this procedure are “isSupplementedBy” and “isSupplementTo”.
<p align="center">
    <img loading="lazy" alt="Project Propagation" src="/img/docs/enrichment/propagation_resulttoproject.png" width="40%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>
* Result to RC/RI through organization propagation. The manager of the RC/RI can specify a set of organizations whose product are relevant for the 
community.  
Each result having such a relation of affiliation with at least one organization relevant for the RC/RI will be linked to it.
<p align="center">
    <img loading="lazy" alt="Result to community through organization propagation" src="/img/docs/enrichment/propagation_resulttocommunitythroughorganization.png" width="50%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>

* Result to RC/RI through semantic relation: extends the set of products linked to a RC/RI by exploiting strong semantic relationships between the results;
e.g. if a result R1 is associated to the community C and is supplemented by a result R2 then the result R2 will be linked to the community. The relationships considered for this procedure are “isSupplementedBy” and “supplements”.
<p align="center">
    <img loading="lazy" alt="Result to community through semantic relation propagation" src="/img/docs/enrichment/propagation_resulttocommunitythroughsemrel.png" width="40%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>
* ORCID identifiers to result through semantic relation. This propagation enriches the results by adding ORCID identifiers to authors. The added ORCID will be marked as "potential" since they have been inserted through propagation. 
The process considers the set of overlapping authors between results (R1 and R2) linked with a strong semantic relationship (IsSupplementedBy, IsSupplementTo). 
For each author A in the overlapping set, if R1 provides the ORCID value for A and R2 does not, then the author A in R2 will be enriched with the information of the ORCID found in R1.

<p align="center">
    <img loading="lazy" alt="Orcid propation through semantic relation" src="/img/docs/enrichment/propagation_orcid.png" width="40%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>

* affiliation to organization through institutional repository. This propagation adds one "hasAuthorInstitution" relationship (and its inverse) 
between a Result R and Organization O, 
if R was collected from a datasource D with type institutional repository, and D was provided by O. 
<p align="center">
    <img loading="lazy" alt="Affiliation propagation through institutional repository" src="/img/docs/enrichment/propagation_affiliationistrepo.png" width="40%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>

* affiliation to organization through semantic relation. This propagation adds one "hasAuthorInstitution" relationship (and its inverse) between a 
Result R and an Organization O, 
if R has an affiliation relation with an organization O1 that is in relation "isChildOf" with O.

<p align="center">
    <img loading="lazy" alt="Affiliation propagation through semantic relation" src="/img/docs/enrichment/propagation_organizationsemrel.png" width="40%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>
 The algorithm exploits only the organization leaves that are in a "IsChildOf" relation with another organization. So far one single step is done
<p align="center">
    <img loading="lazy" alt="propagation strategy" src="/img/docs/enrichment/organization_tree.png" width="40%" className="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module"/>
</p>