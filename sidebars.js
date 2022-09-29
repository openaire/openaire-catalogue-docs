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
      type: 'doc', 
      id: 'download'
    },
    {
      type: 'category', 
      label: "Data provision",
      link: {type: 'doc', id: 'data-provision/data-provision'},
      items: [
        { type: 'doc', id: 'data-provision/aggregation' },
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
            { type: 'doc', id: 'data-provision/enrichment/mining' },
            { type: 'doc', id: 'data-provision/enrichment/impact-scores' },
          ]
        },
        { type: 'doc', id: 'data-provision/post-cleaning' },
        { type: 'doc', id: 'data-provision/indexing' },
        { type: 'doc', id: 'data-provision/stats' },
      ]
    },
    {
      type: 'doc', 
      id: 'services'
    },
    {
      type: 'category', 
      label: "Learning center",
      link: { type: 'generated-index' },
      items: [
        { type: 'doc', id: 'learning-center/open-plato' },
        { type: 'doc', id: 'learning-center/tutorials' },
      ]
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
