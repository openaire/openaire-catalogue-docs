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

As of September 2020, three procedures are in place to relate a research product to a research initiative, infrastructure (RI) or community (RC) based on:

* subjects (2.7M results tagged)

* Zenodo community (16K results tagged)

* the data source it comes from (250K results tagged)

The list of subjects, Zenodo communities and data sources used to enrich the products are defined by the managers of the community gateway or infrastructure monitoring dashboard associated with the RC/RI.

## Propagation

This process “propagates” properties and links from one product to another if between the two there is a “strong” semantic relationship.

As of September 2020, the following procedures are in place:
Propagation of the property “country” to results from institutional repositories: e.g. publication collected from an institutional repository maintained by an italian university will be enriched with the property “country = IT”.

* Propagation of links to projects: e.g. publication linked to project P “is supplemented by” a dataset D. Dataset D will get the link to project P. The relationships considered for this procedure are “isSupplementedBy” and “supplements”.

* Propagation of related community/infrastructure/initiative from organizations to products via affiliation relationships: e.g. a publication with an author affiliated with organization O. The manager of the community gateway C declared that the outputs of O are all relevant for his/her community C. The publication is tagged as relevant for C.

* Propagation of related community/infrastructure/initiative to related products: e.g. publication associated to community C is supplemented by a dataset D. Dataset D will get the association to C. The relationships considered for this procedure are “isSupplementedBy” and “supplements”.

* Propagation of ORCID identifiers to related products, if the products have the same authors: e.g. publication has ORCID for its authors and is supplemented by a dataset D. Dataset D has the same authors as the publication. Authors of D are enriched with the ORCIDs available in the publication. The relationships considered for this procedure are “isSupplementedBy” and “supplements”.