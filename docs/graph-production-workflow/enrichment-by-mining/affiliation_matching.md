---
sidebar_position: 1
---

# Affiliation matching

***Short description:***  The goal of the affiliation matching module is to pair affiliations with organizations listed in either OpenAIRE or ROR organization database. 
Depending on the data source, we currently employ two distinct methodologies:

	* The first method revolves around affiliations extracted from PDF and XML documents, which are subsequently matched with organizations within the OpenAIRE database.
	* The second concerns affiliations retrieved from platforms such as Crossref, PubMed, and Datacite, and are matched to organizations of the ROR database. 


***Algorithmic details of the first method:***

*The buckets concept*

In order to get the best possible results, the algorithm should compare every affiliation with every organization. However, this approach would be very inefficient and slow, because it would involve the processing of the cartesian product (all possible pairs) of millions of affiliations and thousands of organizations. To avoid this, IIS has introduced the concept of buckets. A bucket is a smaller group of affiliations and organizations that have been selected to be matched with one another. The matching algorithm compares only these affiliations and organizations that belong to the same bucket.

*Affiliation matching process*

Every affiliation in a given *bucket* is compared with every organization in the same bucket multiple times, each time by using a different algorithm (*voter*). Each *voter* is assigned a number (match strength) that describes the estimated correctness of the result of its comparison. All the affiliation-organization pairs that have been matched by at least one *voter*, will be assigned the match strength > 0 (the actual number depends on the voters, its calculation method will be shown later).

It is very important for the algorithm to group the affiliations and organizations properly i.e. the ones that have a chance to match should be in the same *bucket*. To guarantee this, the affiliation matching module allows to create different methods of dividing the affiliations and organizations into *buckets*, and to use all of these methods in a single matching process. The specific method of grouping the affiliations and organizations into *bucket* and then joining them into pairs is carried out by the service called *Joiner*.

Every *joiner* can be linked with many different *voters* that will tell if the affiliation-organization pairs joined match or not. By providing new *joiners* and *voters* one can extend the matching algorithm with countless new methods for matching affiliations with organizations, thus adjusting the algorithm to his or her needs.

All the affiliations and organizations are sequentially computed by all the *matchers*. In every *matcher* they are grouped by some *joiner* in pairs, and then these pairs are processed by all the *voters* in the *matcher*. Every affiliation-organization pair that has been matched at least once is assigned the match strength that depends on the match strengths of the *voters* that pointed the given pair is a match. 

**NOTE:** There can be many organizations matched with a given affiliation, each of them matched with a different match strength. The user of the module can set a match strength threshold which will limit the results to only those matches that have the match strength greater than the specified threshold.

*Calculation of the match strength of the affiliation-organization pair matched by multiple matchers*

It often happens that the given affiliation-organization pair is returned as a match by more than one matcher, each time with a different match strength. In such a case **the match with the highest match strength will be selected**.

*Calculation of the match strength of the affiliation-organization pair within a single matcher*

Every voter has a match strength that is in the range (0, 1]. **The voter match strength says what the quotient of correct matches to all matches guessed by this voter is, and is based on real data and hundreds of matches prepared by hand.**

The match strength of the given affiliation-organization pair is based on the match strengths of all the voters in the matcher that have pointed that the pair is a match. It will always be less than or equal to 1 and greater than the match strength of each single voter that matched the given pair.

The total match strength is calculated in such a way that each consecutive voter reduces (by its match strength) the gap of uncertainty about the correctness of the given match.

***Parameters:***

* input
	* input_document_metadata: [ExtractedDocumentMetadata](https://github.com/openaire/iis/blob/master/iis-schemas/src/main/avro/eu/dnetlib/iis/metadataextraction/ExtractedDocumentMetadata.avdl) avro datastore location. Document metadata is the source of affiliations.
	* input_organizations: [Organization](https://github.com/openaire/iis/blob/master/iis-schemas/src/main/avro/eu/dnetlib/iis/importer/Organization.avdl) avro datastore location. 
 	* input_document_to_project: [DocumentToProject](https://github.com/openaire/iis/blob/master/iis-schemas/src/main/avro/eu/dnetlib/iis/importer/DocumentToProject.avdl) avro datastore location with **imported** document-to-project relations. These relations (alongside with inferred document-project and project-organization relations) are used to generate document-organization pairs which are used as a hint for matching affiliations.
	* input_inferred_document_to_project: [DocumentToProject](https://github.com/openaire/iis/blob/master/iis-schemas/src/main/avro/eu/dnetlib/iis/referenceextraction/project/DocumentToProject.avdl) avro datastore location with **inferred** document-to-project relations. 
 	* input_project_to_organization: [ProjectToOrganization](https://github.com/openaire/iis/blob/master/iis-schemas/src/main/avro/eu/dnetlib/iis/importer/ProjectToOrganization.avdl) avro datastore location. These relations (alongside with infered document-project and document-project relations) are used to generate document-organization pairs which are used as a hint for matching affiliations
* output
	* [MatchedOrganization](https://github.com/openaire/iis/blob/master/iis-wf/iis-wf-affmatching/src/main/resources/eu/dnetlib/iis/wf/affmatching/model/MatchedOrganization.avdl) avro datastore location with matched publications with organizations.

***Limitations:*** -

***Environment:*** 
Java, Spark

***References:*** -

***Authority:*** ICM &bull; ***License:*** AGPL-3.0 &bull; ***Code:*** [CoAnSys/affiliation-organization-matching](https://github.com/CeON/CoAnSys/tree/master/affiliation-organization-matching)


***Algorithmic details of the second method:***

*Categorization*

The affiliations' strings are imported and undergo cleaning, tokenization, and removal of stopwords. Similar to the “buckets concept”  of the first method, the goal is to split the affiliation strings, as well as the ROR organizations, into coherent groups. To achieve this, data preprocessing has already been conducted on ROR's data, involving the analysis of word frequency ('keywords') within the legal names of ROR's organizations to define specific categories. These categories include universities and institutes, laboratories, hospitals, companies, museums, governments, foundation, and rest organizations. ROR's organizations have subsequently been assigned to these categories based on their legal names. The algorithm employs a similar approach to categorize affiliations into these same groups.

*String Shortening*

The objective is to extract pertinent details from each affiliation string. The algorithm divides the string whenever a comma (,) or semicolon (;) is detected. It then applies specific 'rules' to these segments and retains only those containing relevant keywords. Additionally, it trims down the segments by preserving words in proximity to particular keywords like "university," "institute," "laboratory," or "hospital." As a result, the average string length is reduced from 90 to 35 characters.

*Matching with ROR's Database*

The algorithm checks whether a substring containing a keyword is linked to a legal name or to an alternative name in the organizations listed in the ROR's database. In order to identify the most accurate match, the algorithm employs cosine similarity.. Although alternative methods like Levenshtein Distance or Jaro-Winkler Distance were considered for measuring string similarity, it was concluded that cosine similarity was the most appropriate choice for this specific application.

*Refinement*

If multiple matches are found above the desired similarity thresholds, the algorithm performs another check. It applies cosine similarity between the organizations found in the ROR's database and the original affiliation string. This comparison takes into account additional information present in the original affiliation, such as addresses or city names. The algorithm aims to identify the best fit among the potential matches. Note that the case where two or more different organizations share the same name is also considered.

***Parameters:***

* input
	* source of affiliations: JSON Crossref or XML Pubmed or Parquet DataCite files.

	* organizations: [dix_acad.pkl](https://github.com/mkallipo/affiliation-matching/blob/main/dictionaries/dix_acad.pkl), [dix_mult](https://github.com/mkallipo/affiliation-matching/blob/main/dictionaries/dix_mult.pkl, [dix_city](https://github.com/mkallipo/affiliation-matching/blob/main/dictionaries/dix_city.pkl), [dix_country](https://github.com/mkallipo/affiliation-matching/blob/main/dictionaries/dix_country.pkl)  (four pickled dictionaries with keys legalnames and alternativenames of organizations in the ROR database.)

	* similarity thresholds: simU for universities, simG for other organizations (default values are simU = 0.64, simG = 0.87).
    cument-organization pairs which are used as a hint for matching affiliations
    
* output
	* [MatchedOrganization](https://github.com/openaire/iis/blob/master/iis-wf/iis-wf-affmatching/src/main/resources/eu/dnetlib/iis/wf/affmatching/model/MatchedOrganization.avdl) avro datastore location with matched publications with organizations.
    
    
***Limitations:*** -

***Environment:*** 
Python

***References:*** -

***Authority:*** OpenAIRE &bull; ***License:***AGPL-3.0   &bull; ***Code:*** [AffRo](https://github.com/mkallipo/affiliation-matching)



