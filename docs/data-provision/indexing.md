# Indexing

The final version of the OpenAIRE Research Graph is indexed on a Solr server that is used by the OpenAIRE portals (EXPLORE, CONNECT, PROVIDE) and APIs, the latter adopted by several third-party applications and organizations, such as:

* The OpenAIRE Research Graph APIs and Portals will offer to the EOSC (European Open Science Cloud) an Open Science Resource Catalogue, keeping an up to date map of all research results (publications, datasets, software), services, organizations, projects, funders in Europe and beyond.

* DSpace & EPrints repositories can install the OpenAIRE plugin to expose OpenAIRE compliant metadata records via their OAI-PMH endpoint and offer to researchers the possibility to link their depositions to the funding project, by selecting it from the list of project provided by OpenAIRE.

* EC participant portal (Sygma - System for Grant Management) uses the OpenAIRE API in the “Continuous Reporting” section. Sygma automatically fetches from the OpenAIRE Search API the list of publications and datasets in the OpenAIRE Research Graph that are linked to the project. The user can select the research products from the list and easily compile the continuous reporting data of the project.

* ScholExplorer is used by different players of the scholarly communication ecosystem. For example, [Elsevier](https://www.elsevier.com/authors/tools-and-resources/research-data/data-base-linking) uses its API to make the links between 
publications and datasets automatically appear on ScienceDirect.
ScholExplorer indexes the links among the four major types of research products (API v3) available in the OpenAIRE Research Graph and makes them available through an HTTP API that allows 
to search them by the following criteria:
  * Links whose source object has a given PID or PID type;
  * Links whose source object has been published by a given data source ("data source as publisher");
  * Links that were collected from a given data source ("data source as provider").
