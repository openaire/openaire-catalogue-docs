# EMBL-EBIs Protein Data Bank in Europe

This section describes the mapping implemented for [EMBL-EBIs Protein Data Bank in Europe](https://www.ebi.ac.uk/).

The Europe PMC RESTful Web Service gives the [datalinks API](https://europepmc.org/RestfulWebService#!/Europe32PMC32Articles32RESTful32API)to retrieve data-literature links in Scholix format .

## how data is collected
Starting from the Pubmed collection, we exploit this API to get all the related bioentities related to a Publication with a specific PubMed identifier.

Following this request: `https://www.ebi.ac.uk/europepmc/webservices/rest/MED/$PMID/datalinks?format=json` we store for each pubmedID the links related.


## Mapping
The table below describes the mapping from the EBI links records to the OpenAIRE Graph dump format.


| *OpenAIRE Result field path*   | PubMed record field xpath      | Notes                                                                                                                                                         |
|--------------------------------|--------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|