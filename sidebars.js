/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mySidebar: [
    {
      type: 'doc', 
      id: 'intro'
    },
    {
      type: 'category', 
      label: "Data model",
      link: {type: 'doc', id: 'data-model/data-model'},
      items: [
        { type: 'doc', id: 'data-model/pids-and-identifiers' },
        {
          type: 'category', 
          label: "Entities",
          link: {
            type: 'generated-index',
            description: 'The main entities of the OpenAIRE Graph are listed below.'
          },
          items: [
            { type: 'doc', id: 'data-model/entities/result' },
            { type: 'doc', id: 'data-model/entities/data-source' },
            { type: 'doc', id: 'data-model/entities/organization' },
            { type: 'doc', id: 'data-model/entities/project' },
            { type: 'doc', id: 'data-model/entities/community' },
          ]
        }, 
        {
          type: 'doc', 
          id: 'data-model/relationships'
        }
      ]
    },
    {
      type: "link",
      label: "Public API",
      href: "https://graph.openaire.eu/develop/overview.html"
    },
    {
      type: 'doc', 
      id: 'download'
    },
    {
      type: 'category', 
      label: "Data provision",
      link: {type: 'doc', id: 'data-provision/data-provision'},
      items: [
        {
          type: 'category',
          label: "Aggregation",
          link: {type: 'doc', id: 'data-provision/aggregation/aggregation'},
          items: [
            { type: 'doc', id: 'data-provision/aggregation/doiboost', label: 'DOIBoost' },
            { type: 'doc', id: 'data-provision/aggregation/pubmed' },
            { type: 'doc', id: 'data-provision/aggregation/datacite' },
            { type: 'doc', id: 'data-provision/aggregation/ebi', label: 'EMBL-EBI' },
          ]
        },
        {
          type: 'category', 
          label: "Deduplication",
          link: {type: 'doc', id: 'data-provision/deduplication/deduplication'},
          items: [
            { type: 'doc', id: 'data-provision/deduplication/research-products' },
            { type: 'doc', id: 'data-provision/deduplication/organizations' },
          ]
        }, 
        {
          type: 'category', 
          label: "Enrichment",
          link: {type: 'doc', id: 'data-provision/enrichment/enrichment'},
          items: [
            {
              type: 'category', 
              label: "Mining algorithms",
              link: {
                type: 'generated-index',
                description: 'The Text and Data Mining (TDM) algorithms used for enriching the OpenAIRE Graph are grouped in the following main categories:'
              },
              items: [
                { type: 'doc', id: 'data-provision/enrichment/affiliation_matching' },
                { type: 'doc', id: 'data-provision/enrichment/citation_matching' },
                { type: 'doc', id: 'data-provision/enrichment/classifies' },
                { type: 'doc', id: 'data-provision/enrichment/documents_similarity' },
                { type: 'doc', id: 'data-provision/enrichment/acks' },

                { type: 'doc', id: 'data-provision/enrichment/cites' },

                { type: 'doc', id: 'data-provision/enrichment/metadata_extraction' },
              ]
            },
            { type: 'doc', id: 'data-provision/enrichment/impact-scores' },
          ]
        },
        { type: 'doc', id: 'data-provision/post-cleaning' },
        { type: 'doc', id: 'data-provision/indexing' },
        { type: 'doc', id: 'data-provision/stats' },
      ]
    },
    {
      type: "link",
      label: "Learning center",
      href: "https://openplato.eu/"
    },
    {
      type: 'doc', 
      id: 'publications',
      label: "Relevant publications"
    },
    {
      type: 'doc', 
      id: 'faq'
    },
    {
      type: 'doc', 
      id: 'license'
    },  
    {
      type: 'doc', 
      id: 'changelog'
    },
  ]
};

module.exports = sidebars;
