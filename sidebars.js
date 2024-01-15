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
          type: 'category', 
          label: "Relationships",
          link: {
            type: 'generated-index',
            description: 'This section describes the relationships between entities in the OpenAIRE Graph: they way they are modelled as well as the different relationship types currently supported.'
          },
          items: [
            { type: 'doc', id: 'data-model/relationships/relationship-object' },
            { type: 'doc', id: 'data-model/relationships/relationship-types' },
          ]
        }, 
        { type: 'doc', id: 'data-model/pids-and-identifiers' },
      ]
    },
    {
      type: 'category', 
      label: "Public APIs",
      link: {type: 'doc', id: 'apis/home'},
      items: [
        {
          type: 'category', 
          label: "Search API",
          link: { type: 'doc', id: 'apis/search-api/search-api' },
          items: [
            { type: 'doc', id: 'apis/search-api/results' },
            { type: 'doc', id: 'apis/search-api/projects' },
            { type: 'doc', id: 'apis/search-api/response-metadata-format' },
          ]
        }, 
        {      
          type: "link",
          label: "ScholeXplorer API",
          href: "https://api.scholexplorer.openaire.eu/swagger-ui/index.html?urls.primaryName=Scholexplorer%20API%20V2.0"
        },
        {      
          type: "doc",
          id: "apis/dspace-eprints-api",
        },
        {      
          type: "doc",
          id: "apis/broker-api"
        },
        { type: 'doc', id: 'apis/terms' },
        { type: 'doc', id: 'apis/authentication' },
        { type: 'doc', id: 'apis/specification-changelog' },
      ]
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
      link: {type: 'doc', id: 'graph-production-workflow/graph-production-workflow'},
      items: [
        {
          type: 'category',
          label: "Aggregation",
          link: {type: 'doc', id: 'graph-production-workflow/aggregation/aggregation'},
          items: [
            {
              type: 'doc',
              label: "OpenAIRE compatible sources",
              id: 'graph-production-workflow/aggregation/compatible-sources',
            },
            {
            type: 'category',
              label: "Non-compatible sources",
              link: { type: 'generated-index' },
              items: [
                { type: 'doc', id: 'graph-production-workflow/aggregation/non-compatible-sources/doiboost', label: 'DOIBoost' },
                { type: 'doc', id: 'graph-production-workflow/aggregation/non-compatible-sources/pubmed' },
                { type: 'doc', id: 'graph-production-workflow/aggregation/non-compatible-sources/datacite' },
                { type: 'doc', id: 'graph-production-workflow/aggregation/non-compatible-sources/ebi', label: 'EMBL-EBI' },
                { type: 'doc', id: 'graph-production-workflow/aggregation/non-compatible-sources/uniprot', label: 'UniProtKB/Swiss-Prot' }
              ]
            }
          ]
        },
        {
          type: 'doc', 
          id: 'graph-production-workflow/merge-by-id'
        },
        {
          type: 'category', 
          label: "Enrichment by mining",
          link: {type: 'doc', id: 'graph-production-workflow/enrichment-by-mining/enrichment-by-mining'},
          items: [
              { type: 'doc', id: 'graph-production-workflow/enrichment-by-mining/affiliation_matching' },
              { type: 'doc', id: 'graph-production-workflow/enrichment-by-mining/citation_matching' },
              { type: 'doc', id: 'graph-production-workflow/enrichment-by-mining/classifies' },
              { type: 'doc', id: 'graph-production-workflow/enrichment-by-mining/documents_similarity' },
              { type: 'doc', id: 'graph-production-workflow/enrichment-by-mining/acks' },
              { type: 'doc', id: 'graph-production-workflow/enrichment-by-mining/cites' },
              { type: 'doc', id: 'graph-production-workflow/enrichment-by-mining/metadata_extraction' },
            ]
        },
        { type: 'doc', id: 'graph-production-workflow/cleaning' },
        {
          type: 'category', 
          label: "Deduplication",
          link: {type: 'doc', id: 'graph-production-workflow/deduplication/deduplication'},
          items: [
            { type: 'doc', id: 'graph-production-workflow/deduplication/research-products' },
            { type: 'doc', id: 'graph-production-workflow/deduplication/organizations' },
          ]
        }, 
        {
          type: 'category',
          label: "Deduction & propagation",
          link: { 
            type: 'generated-index' ,
            description: 'The OpenAIRE Graph is further enriched by the deduction and propagation processes descibed in this section.'

          },
          items: [
            { type: 'doc', id: 'graph-production-workflow/deduction-and-propagation/bulk-tagging' },
            { type: 'doc', id: 'graph-production-workflow/deduction-and-propagation/propagation' },
          ]
        },
        {
          type: 'category',
          label: "Indicators ingestion",
          link: {type: 'doc', id: 'graph-production-workflow/indicators-ingestion/indicators-ingestion'},

          items: [
            { type: 'doc', id: 'graph-production-workflow/indicators-ingestion/impact-indicators' },
            { type: 'doc', id: 'graph-production-workflow/indicators-ingestion/usage-counts' },
          ]
        },
        { type: 'doc', id: 'graph-production-workflow/finalisation' },
        { type: 'doc', id: 'graph-production-workflow/indexing' },
        { type: 'doc', id: 'graph-production-workflow/stats' }
      ]
    },
    // {
    //   type: "link",
    //   label: "Learning center",
    //   href: "https://openplato.eu/"
    // },
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
