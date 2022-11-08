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
                  "Frequency": 1
                },
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
                      "ID": "MT121216",
                      "IDScheme": "ENA",
                      "IDURL": "http://identifiers.org/ebi/ena.embl:MT121216"
                    },
                    "Title": "MT121216",
                    "Publisher": {
                      "Name": "Europe PMC"
                    }
                  },
                  "Frequency": 1
                },
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
                      "ID": "KF367457",
                      "IDScheme": "ENA",
                      "IDURL": "http://identifiers.org/ebi/ena.embl:KF367457"
                    },
                    "Title": "KF367457",
                    "Publisher": {
                      "Name": "Europe PMC"
                    }
                  },
                  "Frequency": 1
                },
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
                      "ID": "MN996532",
                      "IDScheme": "ENA",
                      "IDURL": "http://identifiers.org/ebi/ena.embl:MN996532"
                    },
                    "Title": "MN996532",
                    "Publisher": {
                      "Name": "Europe PMC"
                    }
                  },
                  "Frequency": 1
                },
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
                      "ID": "MT072864",
                      "IDScheme": "ENA",
                      "IDURL": "http://identifiers.org/ebi/ena.embl:MT072864"
                    },
                    "Title": "MT072864",
                    "Publisher": {
                      "Name": "Europe PMC"
                    }
                  },
                  "Frequency": 1
                }
              ]
            }
          }
        ]
      },
      {
        "Name": "Protein Structures",
        "NameLong": "Protein structures in PDBe",
        "CategoryLinkCount": 2,
        "Section": [
          {
            "ObtainedBy": "tm_accession",
            "Tags": [
              "supporting_data"
            ],
            "SectionLinkCount": 2,
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
                      "ID": "6VW1",
                      "IDScheme": "PDB",
                      "IDURL": "http://identifiers.org/pdbe/pdb:6VW1"
                    },
                    "Title": "6VW1",
                    "Publisher": {
                      "Name": "Europe PMC"
                    }
                  },
                  "Frequency": 1
                },
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
                      "ID": "2AJF",
                      "IDScheme": "PDB",
                      "IDURL": "http://identifiers.org/pdbe/pdb:2AJF"
                    },
                    "Title": "2AJF",
                    "Publisher": {
                      "Name": "Europe PMC"
                    }
                  },
                  "Frequency": 1
                }
              ]
            }
          }
        ]
      },
      {
        "Name": "Altmetric",
        "CategoryLinkCount": 1,
        "Section": [
          {
            "ObtainedBy": "ext_links",
            "Tags": [
              "altmetrics"
            ],
            "SectionLinkCount": 1,
            "Linklist": {
              "Link": [
                {
                  "ObtainedBy": "ext_links",
                  "PublicationDate": "15-10-2020",
                  "LinkProvider": {
                    "Name": "Europe PMC"
                  },
                  "RelationshipType": {
                    "Name": "IsReferencedBy"
                  },
                  "Source": {
                    "Type": {
                      "Name": "literature"
                    },
                    "Identifier": {
                      "ID": "33024307",
                      "IDScheme": "PMID"
                    }
                  },
                  "Target": {
                    "Type": {
                      "Name": "dataset"
                    },
                    "Identifier": {
                      "ID": "https://www.altmetric.com/details/91880755",
                      "IDScheme": "URL",
                      "IDURL": "https://www.altmetric.com/details/91880755"
                    },
                    "Title": "Characteristics of SARS-CoV-2 and COVID-19",
                    "Publisher": {
                      "Name": "Altmetric"
                    },
                    "ImageURL": "https://api.altmetric.com/v1/donut/91880755_64.png"
                  }
                }
              ]
            }
          }
        ]
      },
      {
        "Name": "BioStudies: supplemental material and supporting data",
        "CategoryLinkCount": 1,
        "Section": [
          {
            "ObtainedBy": "ext_links",
            "Tags": [
              "supporting_data"
            ],
            "SectionLinkCount": 1,
            "Linklist": {
              "Link": [
                {
                  "ObtainedBy": "ext_links",
                  "PublicationDate": "11-03-2021",
                  "LinkProvider": {
                    "Name": "Europe PMC"
                  },
                  "RelationshipType": {
                    "Name": "IsReferencedBy"
                  },
                  "Source": {
                    "Type": {
                      "Name": "literature"
                    },
                    "Identifier": {
                      "ID": "33024307",
                      "IDScheme": "PMID"
                    }
                  },
                  "Target": {
                    "Type": {
                      "Name": "dataset"
                    },
                    "Identifier": {
                      "ID": "http://www.ebi.ac.uk/biostudies/studies/S-EPMC7537588?xr=true",
                      "IDScheme": "URL",
                      "IDURL": "http://www.ebi.ac.uk/biostudies/studies/S-EPMC7537588?xr=true"
                    },
                    "Title": "Characteristics of SARS-CoV-2 and COVID-19.",
                    "Publisher": {
                      "Name": "BioStudies: supplemental material and supporting data"
                    }
                  }
                }
              ]
            }
          }
        ]
      }
    ]
  }
}
```

## Mapping
The table below describes the mapping from the EBI links records to the OpenAIRE Graph dump format.


| *OpenAIRE Result field path*   | PubMed record field xpath      | Notes                                                                                                                                                         |
|--------------------------------|--------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|