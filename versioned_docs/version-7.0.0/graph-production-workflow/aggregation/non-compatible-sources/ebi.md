# EMBL-EBIs Protein Data Bank in Europe

This section describes the mapping implemented for [EMBL-EBIs Protein Data Bank in Europe](https://www.ebi.ac.uk/).

The Europe PMC RESTful Web Service gives the [datalinks API](https://europepmc.org/RestfulWebService#!/Europe32PMC32Articles32RESTful32API) to retrieve data-literature links in Scholix format.

## How the data is collected

Starting from the Pubmed collection, the API below is used to obtain the bioentities related to publications for each PubMed identifier.

Example:

```commandline
curl -s "https://www.ebi.ac.uk/europepmc/webservices/rest/MED/33024307/datalinks?format=json" | jq '.'
{
  "version": "6.8",
  "hitCount": 9,
  "request": {
    "id": "33024307",
    "source": "MED"
  },
  "dataLinkList": {
    "Category": [
      {
        "Name": "Nucleotide Sequences",
        "CategoryLinkCount": 5,
        "Section": [
          {
            "ObtainedBy": "tm_accession",
            "Tags": [
              "supporting_data"
            ],
            "SectionLinkCount": 5,
            "Linklist": {
              "Link": [
                {
                  "ObtainedBy": "tm_accession",
                  "PublicationDate": "04-11-2022",
                  "LinkProvider": {
                    "Name": "Europe PMC"
                  },
                  "RelationshipType": {
                    "Name": "References"
                  },
                  "Source": {
                    "Type": {
                      "Name": "literature"
                    },
                    "Identifier": {
                      "ID": "33024307",
                      "IDScheme": "MED"
                    }
                  },
                  "Target": {
                    "Type": {
                      "Name": "dataset"
                    },
                    "Identifier": {
                      "ID": "AY278488",
                      "IDScheme": "ENA",
                      "IDURL": "http://identifiers.org/ebi/ena.embl:AY278488"
                    },
                    "Title": "AY278488",
                    "Publisher": {
                      "Name": "Europe PMC"
                    }
                  },
            [...]
```

## Mapping
The table below describes the mapping from the EBI links records to the OpenAIRE Graph Dataset format.
We filter all the target links with pid type **ena**, **pdb** or **uniprot**
For each target we construct a Bioentity with the following mapping


| OpenAIRE Research Product field path  | EBI record field xpath                                   | Notes                                                         |
|-----------------------------|----------------------------------------------------------|---------------------------------------------------------------|
| `id`                        | `target/identifier/ID` and  `target/identifier/IDScheme` | id in the form `SCHEMA_________::md5(pid)`                    |
| `pid`                       | `target/identifier/ID` and  `target/identifier/IDScheme` | `classid = classname = schema`                                |
| `publicationdate`           | `target/PublicationDate`                                 | clean and normalize the format of the date to be `YYYY-mm-dd` |
| `maintitle`                 | `target/Title`                                           |                                                               |
| **Instance Mapping**        |                                                          |                                                               |
| `instance.type`             |                                                          | `Bioentity`                                                   |
| `type`                      |                                                          | `Dataset`                                                     | 
| `instance.pid`              | `target/identifier/ID` and  `target/identifier/IDScheme` | `classid = classname = schema`                                |
| `instance.url`              | `target/identifier/IDURL`                                | Copy the value as it is                                       |
| `instance.publicationdate`  | `//PubmedPubDate`                                        | clean and normalize the format of the date to be YYYY-mm-dd   |


### Relation Mapping
| OpenAIRE Relation Semantic and inverse | Source/Target type  | Notes                                                                    |
|----------------------------------------|---------------------|--------------------------------------------------------------------------|
| `IsRelatedTo`                          | `ResearchProduct/ResearchProduct`     | we create relationships between the BioEntity and the pubmed publication |
