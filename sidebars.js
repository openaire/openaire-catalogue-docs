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
            description: 'The main entities of the OpenAIRE Research Graph are listed below.'
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
      type: 'category', 
      label: "Downloads",
      link: {
        type: 'generated-index',
        description: 'All resources, available for download, are listed below. For the versions available in Zenodo, please refer to the Changelog section.'
      },
      items: [
        { type: 'doc', id: 'downloads/full-graph'},
        { type: 'doc', id: 'downloads/beginners-kit' },
        { type: 'doc', id: 'downloads/subgraphs' },
        { type: 'doc', id: 'downloads/related-datasets' },
      ]
    }, 
    {
      type: 'category', 
      label: "Graph production workflow",
      link: {type: 'doc', id: 'data-provision/data-provision'},
      items: [
        {
          type: 'category',
          label: "Aggregation",
          link: {type: 'doc', id: 'data-provision/aggregation/aggregation'},
          items: [
            {
              type: 'doc',
              label: "OpenAIRE compatible sources",
              id: 'data-provision/aggregation/compatible-sources',
            },
            {
            type: 'category',
              label: "Non-compatible sources",
              link: { type: 'generated-index' },
              items: [
                { type: 'doc', id: 'data-provision/aggregation/non-compatible-sources/doiboost', label: 'DOIBoost' },
                { type: 'doc', id: 'data-provision/aggregation/non-compatible-sources/pubmed' },
                { type: 'doc', id: 'data-provision/aggregation/non-compatible-sources/datacite' },
                { type: 'doc', id: 'data-provision/aggregation/non-compatible-sources/ebi', label: 'EMBL-EBI' },
              ]
            }
          ]
        },
        {
          type: 'doc', 
          id: 'data-provision/merge-by-id'
        },
        {
          type: 'category', 
          label: "Enrichment by mining",
          link: {
            type: 'generated-index',
            description: 'The OpenAIRE Research Graph is enriched using the different Text and Data Mining (TDM) algorithms that are grouped in the following categories.'
          },
          items: [
              { type: 'doc', id: 'data-provision/enrichment-by-mining/affiliation_matching' },
              { type: 'doc', id: 'data-provision/enrichment-by-mining/citation_matching' },
              { type: 'doc', id: 'data-provision/enrichment-by-mining/classifies' },
              { type: 'doc', id: 'data-provision/enrichment-by-mining/documents_similarity' },
              { type: 'doc', id: 'data-provision/enrichment-by-mining/acks' },
              { type: 'doc', id: 'data-provision/enrichment-by-mining/cites' },
              { type: 'doc', id: 'data-provision/enrichment-by-mining/metadata_extraction' },
            ]
        },
        { type: 'doc', id: 'data-provision/cleaning' },
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
          label: "Deduction & propagation",
          link: { 
            type: 'generated-index' ,
            description: 'The OpenAIRE Research Graph is further enriched by the deduction and propagation processes descibed in this section.'

          },
          items: [
            { type: 'doc', id: 'data-provision/deduction-and-propagation/bulk-tagging' },
            { type: 'doc', id: 'data-provision/deduction-and-propagation/propagation' },
          ]
        },
        {
          type: 'category',
          label: "Indicators ingestion",
          link: { 
            type: 'generated-index' ,
            description: 'In this step, the following types of indicators are ingested in the OpenAIRE Research Graph.'

          },
          items: [
            { type: 'doc', id: 'data-provision/indicators-ingestion/impact-scores' },
            { type: 'doc', id: 'data-provision/indicators-ingestion/usage-counts' },
          ]
        },
        { type: 'doc', id: 'data-provision/finalisation' },
        { type: 'doc', id: 'data-provision/indexing' },
        { type: 'doc', id: 'data-provision/stats' }
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
    // {
    //   type: 'doc', 
    //   id: 'faq'
    // },
    {
      type: 'doc', 
      id: 'license'
    },  
    {
      type: 'doc', 
      id: 'changelog'
    },
    {
      type: "link",
      label: "Helpdesk",
      href: "https://graph.openaire.eu/support"
    },
  ]
};

module.exports = sidebars;
