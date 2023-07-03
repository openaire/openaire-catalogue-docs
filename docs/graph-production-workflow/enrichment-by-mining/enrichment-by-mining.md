import DocCardList from '@theme/DocCardList';


# Enrichment by mining

**OpenAIRE** collects the full-texts of the publications, in order to apply TDM (Text and Data Mining) algorithms on them and enrich the Graph with inference links.

The collection of the full-texts is handled by the internal **PDF Aggregation Service**. This service uses the publications’ urls, from the OpenAIRE Graph and state-of-the-art algorithms, to crawl the web and try to locate and download the full-texts of the open access publications, while focusing on the most recent ones. It respects the servers of the repositories and publishers and avoids overloading them.

The service is orchestrating a distributed execution system, on the cloud, with multiple microservices running in parallel, in order to efficiently process and download a large number of publications. The microservices store the generated report records for the publications, in a database, and the full-texts in an S3 Object Store.

On the publication-page level, it applies text-mining algorithms to analyze the structure of the page, extract the full-text url and download the file. Additionally, it tracks various performance indicators to optimize the crawling speed, during execution.

The PDF Aggregation Service is also capable of bulk-importing full-texts from compatible data sources, which increases the collection speed of full-texts.

The different Text and Data Mining (TDM) algorithms used in the graph-enrichment process are grouped in the following categories.

<DocCardList></DocCardList>