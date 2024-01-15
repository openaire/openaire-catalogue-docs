# Broker API


## Introduction

The Broker Service is available to use via the OpenAIRE Content Provider Dashboard. Thanks to the Broker, repositories, publishers or aggregators can exchange metadata and enrich their local metadata collection by subscribing to notifications of different types. The Broker is able to notify providers when the OpenAIRE Graph contains information that is not available in the original collection of the data source. In particular, the data source manager can subscribe via the [Content Provider Dashboard](https://provide.openaire.eu) and be notified about:

*   Additional PIDs of its publications (e.g. DOIs)
*   Links to projects
*   ORCID that can be associated to an author of datasource publications
*   Links to Open Access versions
*   Additional classification subjects (e.g. subjects from standard schemes like ACM, JEL and DDC)
*   Abstracts identified in duplicate publications
*   Missing publication dates

All Repository managers approaching the Content Provider Dashboard will be offered the possibility to preview a set of enrichments relative to their repository that OpenAIRE can derive from the Graph. More specifically, enrichments will be organized into categories named topics and representing the different types of enrichments OpenAIRE can build. For each topic the preview consists of 100 “enrichment events”, a subset of all the possible enrichments pertinent to a given repository in the OpenAIRE Graph, that the user can explore by applying filters on different criteria and the total number of events that can be potentially built is highlighted in the UI. Repository managers can create subscriptions for specific topics and that include the filtering criteria they used to analyze the enrichments preview, or can subscribe to all the available topics with no restrictions at once. Once the repository manager creates a subscription, the algorithm analyzing the OpenAIRE Graph will produce the full set of enrichments for the manager's repository, possibly far beyond the 100 enrichments available in the preview. The enrichments will be made available as notifications in a dedicated section in the Content Provider Dashboard UI to be further checked as well as through the broker service API for programmatic access. Notifications will be sent to subscribers every time the OpenAIRE Graph will be updated and analyzed to derive the enrichments.

## Usage Example

The following commands indicate how the broker API documented at [api.openaire.eu/broker](https://api.openaire.eu/broker/swagger-ui/index.html) can be used to access the set of enrichments:

1.  Get the list of subscriptions for a given subscriber, e.g.
    
    ```js
    curl -X GET --header 'Accept: application/json' 'https://api.openaire.eu/broker/subscriptions?email=[subscriber_email]'
    ```
    
2.  Extract the subscription ID and use it to access the 1st page of enrichment notification records
    
    ```js
    curl -X GET --header 'Accept: application/json' 'https://api.openaire.eu/broker/scroll/notifications/bySubscriptionId/[sub-1234]'
    ```
    
3.  Extract the scroll ID from the response to request subsequent pages
    
    ```js
    curl -X GET --header 'Accept: application/json' 'https://api.openaire.eu/broker/scroll/notifications/[scroll_id]'
    ```    

To simplify accessing the enrichment notification records, please check the OpenAIRE broker cmdline client available on [GitHub](https://github.com/openaire/broker-cmdline-client).

## Terms of Use and SLA

APIs are free-to-use (no sign-up needed) by any third-party service

**Metadata license is CC-BY**: the metadata records retuned by the service can be freely re-used by commercial and non-commercial partners under CC-BY license, hence as long as OpenAIRE is acknowledged as data source.

**Quality of Service**: all API services are running in production 24/7 within the OpenAIRE infrastructure premises deployed at the [data center](http://icm.edu.pl/en/centre-of-technology/) facilities of the [Interdisciplinary Centre for Mathematical and Computational Modelling](http://icm.edu.pl/en/) (ICM).

**APIs rate limits**: please check [here](./authentication).