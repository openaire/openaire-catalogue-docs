# Collectors - API protocols

The section is a collection from the [Redmine Wiki](https://support.openaire.eu/projects/openaire/wiki/API_protocols) page and describes the API protocols that are supported by D-NET for the collection of metadata and full-texts.
We also give a description of the plugins associated to the API protocols for metadata collection. Plug-ins for the full-text download are described in the wiki section [[Fulltext_Download]].

The living document is at https://support.openaire.eu/projects/openaire/wiki/API_protocols

## Protocols for metadata collection

### OAI

* Protocol name: oai
* Environment:
  * non-Hadoop: PROD+BETA+DEV
  * Hadoop: PROD+BETA+DEV
* Plugin class: eu.dnetlib.data.collector.plugins.oai.OaiCollectorPlugin
* Plugin description: Harvests records from an OAI-PMH endpoint
* Support incremental collection: Yes
* Supported file formats: XML
* Plugin parameters:
** baseUrl: base URL of the endpoint (mandatory)
** ID XPath: xpath where the value to be used to forge the dnet identifier for each record can be found (mandatory)
** format: OAI metadataPrefix (mandatory)
** set: list of sets to be harvested (optional). When not provided all records are harvested.


### OAI sets

* Protocol name: oai_sets
* Plugin class: eu.dnetlib.data.collector.plugins.oaisets.OaiSetsCollectorPlugin
* Plugin description: Collects metadata about OAI sets available from an OAI-PMH endpoint
* Support incremental collection: No
* Supported file formats: XML
* Plugin parameters:
** baseUrl: base URL of the endpoint (mandatory)
** ID XPath: xpath where the value to be used to forge the dnet identifier for each record can be found (mandatory)

### HTTP

* Protocol name: http
* Plugin class: eu.dnetlib.data.collector.plugins.HttpCollectorPlugin
* Plugin description: Collects metadata records from one XML file available at a remote location. The plugin will split the input file into several XML records based on the splitOnElement parameter. For file available from the local file system see protocol `file`. For file located in the web application classpath see protocol `classpath`. For the collection of distinct files from a remote folder see `httpList` and `httpWithFileName`.
* Support incremental collection: No
* Supported file formats: XML
* Plugin parameters:
** baseUrl: base URL of the endpoint (mandatory)
** ID XPath: xpath where the value to be used to forge the dnet identifier for each record can be found (mandatory)
** splitOnElement: name of the XML field that identifies the root of each records in the input file (mandatory). Example: for an input file like @<container><record><a>aaa</a></record><record><a>2222</a></record></container>@ the splitOnElement parameter must be set to `record`. Please note that the value must not be an xpath, but the name of the element. This plugin will not work properly if the element can be repeated inside the same XML record, as in :  @<container><record><a>aaa</a><record>I am inside another record field</record></record></container>@

### HTTP LIST

* Protocol name: httpList
* Available since: Feb 2015
* Plugin class: eu.dnetlib.data.collector.plugins.httplist.HttpListCollectorPlugin
* Plugin description: Collects metadata records from a remote endpoint when the path of each record is provided via a text file (one by line). In other words, the data source has an "index file" where the paths to the metadata records are listed one per line. The plugin reads each line of the index file and downloads from the URL provided in each line. The index line can also contain a partial URL as the baseURL is used as prefix to each line in the index file.
* Support incremental collection: No
* Supported file formats: XML for the metadata records, textual file for the list of locations of the records.
* Plugin parameters:
** baseUrl: base URL to construct the final URLs to the metadata records to download (mandatory)
** ID XPath: xpath where the value to be used to forge the dnet identifier for each record can be found (mandatory)
** listUrl: URL to the the index file listing the locations (mandatory)

### HTTP WITH FILENAME

* Protocol name: HTTPWithFileName
* Available since: May 2018
* Plugin class: eu.dnetlib.data.collector.plugins.httpfilename.HTTPWithFileNameCollectorPlugin
* Plugin description: Collects metadata records from a remote HTTP endpoint where the available XML files are listed in a standard index file. 
* Support incremental collection: No
* Supported file formats: XML, json
* Plugin parameters:
** baseUrl: URL to the list of files  (mandatory)
** ID XPath: xpath where the value to be used to forge the dnet identifier for each record can be found (mandatory). In case of json format, refer to the xpath that is valid after the conversion from json to xml via the org.json library.
** filter : MIRIAM???

### FILE

* Protocol name: file
* Plugin class: eu.dnetlib.data.collector.plugins.FileCollectorPlugin
* Plugin description: Collects metadata records from one XML file available at a local location on the file system. The plugin will split the input file into several XML records based on the splitOnElement parameter. For file available from a remote location see protocol `http`. For file located in the web application classpath see protocol `classpath`. For collecting all files in a folder see protocol `filesystem`.
* Support incremental collection: No
* Supported file formats: XML
* Plugin parameters:
** baseUrl: base URL of the endpoint (mandatory)
** ID XPath: xpath where the value to be used to forge the dnet identifier for each record can be found (mandatory)
** splitOnElement: name of the XML field that identifies the root of each records in the input file (mandatory). Example: for an input file like @<container><record><a>aaa</a></record><record><a>2222</a></record></container>@ the splitOnElement parameter must be set to `record`. Please note that the value must not be an xpath, but the name of the element. This plugin will not work properly if the element can be repeated inside the same XML record, as in :  @<container><record><a>aaa</a><record>I am inside another record field</record></record></container>@

### FILESYSTEM

* Protocol name: filesystem
* Plugin class: eu.dnetlib.data.collector.plugins.filesystem.FilesystemCollectorPlugin
* Plugin description: Collects metadata records from one folder the file system. Each file must be a single metadata record. In case of json files, they are collected and transformed in XML. For the collection of one XML file containing several metadata records see protocol `file`. For the collection of files from archives see protocols `zip`, `tarGz`.
* Support incremental collection: No
* Supported file formats: XML, json
* Plugin parameters:
** baseUrl: base URL of the endpoint (mandatory)
** ID XPath: xpath where the value to be used to forge the dnet identifier for each record can be found (mandatory). In case of json format, refer to the xpath that is valid after the conversion from json to xml via the org.json library.
** extensions: comma separated list of extensions. (optional) 
** fileFormat: xml or json. Default to xml. (optional)
** setObjIdentifierFromFileName: true if you want the dnet identifier to be forged based on the file name instead of the ID XPath.

### CLASSPATH

* Protocol name: classpath
* Plugin class: eu.dnetlib.data.collector.plugins.ClasspathCollectorPlugin
* Plugin description: Collects metadata records from one XML file available in the classpath of the web application. The plugin will split the input file into several XML records based on the splitOnElement parameter. For file available from a remote location see protocol `http`. For file available from the local file system see protocol `file`.
* Support incremental collection: No
* Supported file formats: XML
* Plugin parameters:
** baseUrl: base URL of the endpoint (mandatory)
** ID XPath: xpath where the value to be used to forge the dnet identifier for each record can be found (mandatory)
** splitOnElement: name of the XML field that identifies the root of each records in the input file (mandatory). Example: for an input file like @<container><record><a>aaa</a></record><record><a>2222</a></record></container>@ the splitOnElement parameter must be set to `record`. Please note that the value must not be an xpath, but the name of the element. This plugin will not work properly if the element can be repeated inside the same XML record, as in :  @<container><record><a>aaa</a><record>I am inside another record field</record></record></container>@

### File CSV (deprecated, use HTTP CSV instead)

* Protocol name: fileCSV
* Plugin class: eu.dnetlib.data.collector.plugins.FileCSVCollectorPlugin

### HTTP CSV

* Protocol name: httpCSV
* Plugin class: eu.dnetlib.data.collector.plugins.HttpCSVCollectorPlugin
* Plugin description: Reads one CSV file with header and generate one XML metadata record per line. Lines with invalid quotes are skipped.
* Support incremental collection: No
* Supported file formats: csv, tsv
* Plugin parameters:
** baseUrl: base URL of the endpoint (mandatory)
** ID XPath: xpath where the value to be used to forge the dnet identifier for each record can be found (mandatory)
** separator: string used to separate columns (optional). When empty `\t` is assumed.
** identifier: name of the column where the value to be used to forge dnet identifier for each record can be found (mandatory)
** quote: char used in the CSV for quoting (optional). When empty, no quotation char is considered.

### EXCEL

* Protocol name: excelFile
* Available since: June 2017
* Plugin class: eu.dnetlib.data.collector.plugins.excel.ReadExcelPlugin
* Plugin description: Collects metadata records from one sheet of an excel file with headers. The data is converted from excel to csv and the same classes used by `httpCSV` are used.
* Support incremental collection: No
* Supported file formats: Excel with header
* Plugin parameters: *@MIRIAM can you please add param descriptions below?*
** baseUrl: base URL of the endpoint (mandatory)
** ID XPath: xpath where the value to be used to forge the dnet identifier for each record can be found (mandatory)
** argument: 
** header_row:
** file_to_save
** remove_empty_lines
** remove_lines_with_id
** col_id
** tmp_file
** remove_tmp_file
** sheet_number
** separator
** quote

### FTP (S)

* Protocol name: ftp
* Plugin class: eu.dnetlib.data.collector.plugins.ftp.FtpCollectorPlugin
* Plugin description: Collects XML metadata records with a given extension from an FTP site with login authentication. The plugin can be configured to: (i) go recursively into subfolders; (ii) collect files with multiple extensions.
* Support incremental collection: Yes
* Supported file formats: XML
* Plugin parameters:
** baseUrl: base URL of the endpoint, must include the path on the SFTP site where to start the collection (mandatory) 
** ID XPath: xpath where the value to be used to forge the dnet identifier for each record can be found (mandatory)
** username and password: for SFTP authentication (mandatory)
** recursive: set to true to enable recursion. False to only visit the folder identified by baseUrl. (mandatory)
** extensions: comma separated list of extensions. (mandatory)

### SFTP

* Protocol name: sftp
* Available since: March 2016
** Authentication via private key supported since June 2022
* Plugin class: eu.dnetlib.data.collector.plugins.sftp.SftpCollectorPlugin
* Plugin description: Collects XML metadata records with a given extension from an SFTP site with login or public/private key authentication. The plugin can be configured to: (i) go recursively into subfolders; (ii) collect files with multiple extensions.
* Support incremental collection: Yes
* Supported file formats: XML
* Plugin parameters:
** baseUrl: base URL of the endpoint, must include the path on the FTP site where to start the collection (mandatory) 
** ID XPath: xpath where the value to be used to forge the dnet identifier for each record can be found (mandatory)
** username : for authentication (mandatory) 
** authMethod: method for the authentication (optional, default value "login". For private key authentication enter the value "key")
** password: mandatory when using the default authentication method (authMethod is blank or "login")
** privateKeyPath: mandatory when using the private key authentication method (authMethod is "key") - it is the path to the file system where to find the private key (ppk file)
** recursive: set to true to enable recursion. False to only visit the folder identified by baseUrl. (mandatory)
** extensions: comma separated list of extensions. (mandatory)

### REST

* Protocol name: rest_json2xml
* Available since: Dec 2017
* Plugin class: eu.dnetlib.data.collector.plugins.rest.RestCollectorPlugin
* Plugin description: Collects metadata records from a REST endpoint. It features a number of parameters to support its adoption for the collection for almost any REST API, regardless their peculiarities for handling pagination and returning json or XML.
* Support incremental collection: No
* Supported file formats: Json, XML
* Plugin parameters: 
    e.g. https://v2.sherpa.ac.uk/cgi/retrieve?api-key=12345-67890-ABCD&format=Json&item-type=repository&offset=0&order=id&limit=10
** baseUrl: base URL of the endpoint (mandatory), e.g. _https://v2.sherpa.ac.uk/cgi/retrieve_
** ID XPath: xpath where the value to be used to forge the dnet identifier for each record can be found (mandatory), e.g. _//*[local-name()='system_metadata']/*[local-name()='id']_
** resumptionType: {scan, count, discover, page, deep-cursor} (mandatory), e.g. _discover_
*** scan: evaluated the resumptionXPath
*** count: evaluate the resultTotalXPath
*** discover: unknown of total results
*** page: for paging items
*** deep-cursor (>= v1.4.0/2020): handling of Solr cursor (like on CrossRef), _queryParams_ must have '&cursor=*'
** resumptionParam: argument key (mandatory), e.g. _offset_
** resumptionXpath: used by scan, e.g. ___
** resultTotalXpath: used by count, e.g. _//*[local-name()='system_metadata']/*[local-name()='id'][1]_
** resultFormatParam: argument key, e.g. _format_
** resultFormatValue:  (mandatory), value of the parameter _resultOutputParam_ of the REST request e.g. _Json_
** resultOutputFormat: {json,xml} (optional) when not specified it defaults to the value specified in _resultFormatValue_. It is expected, in that case, that _resultFormatValue_ is set to _json_ or _xml_. (param added in February 2021 to support use cases like the one of the EU Open Data Portal: it returns json but the request should be made with the param _output_format=standard_) 
** resultSizeParam: argument key (mandatory), e.g. _limit_
** resultSizeValue: argument value >=2 , empty input field -> default is _100_
** queryParams: more specific argument like _api-key_, _item-type_, _order_, ...
** entityXpath: xslt entity path (mandatory), e.g. _//*[local-name()='items']_
** authMethod: {bearer} (optional), together with *authToken*
** authToken: [string] (optional), actually only in combination with _authMethod: bearer_ because on use of the HTTP-Header authorization method.

> The *Param(s) arguments are depended on the API endpoint.

### Mongo Dump

* Protocol name: mongoDump
* Available since: Feb 2015
* Plugin class: eu.dnetlib.data.collector.plugins.mongo.MongoDumpPlugin
* Plugin description: Collects metadata records from a mongo dump stored in the local file system. The dump must be generated from a D-Net mdstore. This plugin is useful when we have collected a very big collection of records in one infrastructure (e.g. BETA) and we want to add it to another infrastructure (e.g. PRODUCTION) without having to rely on the external data source again.
* Support incremental collection: No
* Supported file formats: mongo dump in json format generated from a D-Net mdstore. To be more precise, each json object must contain an element called `body` containing the XML metadata record in a format compatible with D-NET (i.e. an OAI record with `dri:*` elements in the header).
* Plugin parameters:
** baseUrl: path to the dump on the local file system (mandatory)
** ID XPath: xpath where the value to be used to forge the dnet identifier for each record can be found (mandatory but ignored, as the dnet identifier is assumed to be already in the XML records.)

Note that this protocol is not yet been registered in the OpenAIRE infrastructures.

### TARGZ

* Protocol name: targz
* Available since: Jan 2015
* Plugin class: eu.dnetlib.data.collector.plugins.archive.targz.TarGzCollectorPlugin
* Plugin description: Collects metadata records from a tar gz archive located in the local file system. Each file in the archive is assumed to be one XML metadata record
* Support incremental collection: No
* Supported file formats: targz archive containing XML files
* Plugin parameters:
** baseUrl: path to the archive in the local file system (mandatory)
** ID XPath: xpath where the value to be used to forge the dnet identifier for each record can be found (mandatory)

### ZIP

* Protocol name: zip
* Available since: Jan 2015
* Plugin class: eu.dnetlib.data.collector.plugins.archive.zip.ZipCollectorPlugin
* Plugin description: Collects metadata records from a zip archive located in the local file system. Each file in the archive is assumed to be one XML metadata record
* Support incremental collection: No
* Supported file formats: zip archive containing XML files
* Plugin parameters:
** baseUrl: path to the archive in the local file system (mandatory)
** ID XPath: xpath where the value to be used to forge the dnet identifier for each record can be found (mandatory)


### GZIP

* Protocol name: fileGzip
* Plugin class: eu.dnetlib.data.collector.plugins.FileGZipCollectorPlugin
* Plugin description: Collects metadata records from a gzipped file located in the local file system. The plugin will split the input file into several XML records based on the splitOnElement parameter.
* Support incremental collection: No
* Supported file formats: XML file in gz format
* Plugin parameters:
** baseUrl: path to the file in the local file system (mandatory)
** ID XPath: xpath where the value to be used to forge the dnet identifier for each record can be found (mandatory)
** ** splitOnElement: name of the XML field that identifies the root of each records in the input file (mandatory). Example: for an input file like @<container><record><a>aaa</a></record><record><a>2222</a></record></container>@ the splitOnElement parameter must be set to `record`. Please note that the value must not be an xpath, but the name of the element. This plugin will not work properly if the element can be repeated inside the same XML record, as in :  @<container><record><a>aaa</a><record>I am inside another record field</record></record></container>@

<pre><code class="html">
Note: HADOOP fileGzip plugin: eu.dnetlib.dhp.collection.plugin.file.FileGZipCollectorPlugin

availability: DEV and BETA

The GZIP plugin for the HADOOP environment has a slightly different naming in labels but the functionality should be the same.

</code></pre>

### schema.org/Dataset

* Protocol name: Schema.org
* Available since: November 2018
* Plugin class: eu.dnetlib.data.collector.plugins.schemaorg.SchemaOrgPlugin
* Plugin description: Collects schema.org/Dataset records published in accessible html pages. Supported microformats are JSON-LD. In a high level description, the plugin is comprised of the following modules:
** Repository - A Java Iterable that iterates over an external repository, collecting available html web page endpoints that must be parsed to extract schema.org/Dataset records
** Endpoint Access - A Java Iterator that polls the repository queue for enspoints to process. It identifies the JSON-LD records containing schema.org/Dataset description and extracts them
** Dataset Mapping - A Java iterator that retrieves the extracted schema.org/Dataset entries and maps them to OpenAIRE compatible dataset xml descriptions
* Supported Repository protocols:
** sitemapindex - Given a sitemapindex.xml file, the plugin will access sequentially all sitemap files and extract the endpoints to later be processed by the transformation pipeline
** HTTP API listing - Given a GET URL, the plugin will sequentially retrieve page by page all listed entries, extract endpoints from the result and provide them for processing to the transformation pipeline
*** The HTTP API listing process is sensitive to the exposed repository API. Currently one implementation targeting the Keggle (https://www.kaggle.com/) API is provided
* Support incremental collection: No
* Supported file formats:
** Repository Access - sitemaps & http API for listing records
** Repository Document endpoints - html web pages
** Dataset records - schema.org/Dataset microformat
* Plugin parameters:
** Repository Agnostic
*** consumerBlockPolling: (Boolean) Whether the consumer threads should block waiting for next endpoint to be retrieved from the repository or not. If false, the final consumer should handle waiting exterenally. If false, the final consumer should handle NoSuchElementException exception if no endpoint was retrieved within the configured timeout. The value defaults to true if left empty
*** consumerBlockPollingTimeout: (Long) The amount of units (see consumerBlockPollingTimeoutUnit) to block waiting for an endpoint to be retrieved from the repository. The value defaults to 2 if left empty
*** consumerBlockPollingTimeoutUnit: (java.util.concurrent.TimeUnit) The unit to measure the timeout in (consumerBlockPollingTimeout). The value defaults to TimeUnit.MINUTES if left empty
*** endpointCharset: (java.nio.charset.Charset) The Charset to use reading the html web page. The value defaults to UTF-8 if left empty
*** updatedDateFormat: (String) the format to use when parsing the "dateModified" property. The value defaults to "YYYY-MM-DD" if left empty
*** createdDateFormat: (String) the format to use when parsing the "dateCreated" property. The value defaults to "YYYY-MM-DD" if left empty
*** publicationDateFormat: (String) the format to use when parsing the "datePublished" property. The value defaults to "YYYY-MM-DD" if left empty
*** contributorFallbackType: (DatasetDocument.Contributor.ContributorType) the contributor type to fall back to for identified contributors for which no direct inference can be made on their contribution type. The value defaults to "Other" if left empty
*** identifierMappingARK: (CSV String) a coma separated list of strings that if found in an Identifier @PropertyValue data type should indicate that the identifier value should be classified as an ARK identifier.  The value defaults to "null" if left empty
*** identifierMappingDOI: (CSV String) a coma separated list of strings that if found in an Identifier @PropertyValue data type should indicate that the identifier value should be classified as an DOI identifier.  The value defaults to "null" if left empty
*** identifierMappingHandle: (CSV String) a coma separated list of strings that if found in an Identifier @PropertyValue data type should indicate that the identifier value should be classified as an Handle identifier.  The value defaults to "null" if left empty
*** identifierMappingPURL: (CSV String) a coma separated list of strings that if found in an Identifier @PropertyValue data type should indicate that the identifier value should be classified as an PURL identifier.  The value defaults to "null" if left empty
*** identifierMappingURN: (CSV String) a coma separated list of strings that if found in an Identifier @PropertyValue data type should indicate that the identifier value should be classified as an URN identifier.  The value defaults to "null" if left empty
*** identifierMappingURL: (CSV String) a coma separated list of strings that if found in an Identifier @PropertyValue data type should indicate that the identifier value should be classified as an URL identifier.  The value defaults to "null" if left empty
*** identifierFallbackType: (DatasetDocument.Identifier.IdentifierType) the fallback type to use as the type of identifier in case no other inference can be made. The value defaults to "null" if left empty
*** identifierFallbackURL: (Boolean) a value indicating that if no identifier could be retrieved, the URL property (if available) should be used as the identifier. The value default to "true" if left empty
** Sitemap Repository
*** repositoryAccessType: (String) the directive to use to drive the repository access plugin to use the sitemap index methodology. The value must be set to "sitemapindex"
*** baseUrl: (String) the url where the sitemapindex.xml file is available
*** sitemap_queueSize: (Integer) the size of the blocking queue that will hold the extracted endpoints from the repository and will then be used to feed the transformation pipeline
*** sitemap_IndexCharset: (java.nio.charset.Charset) The Charset to use reading the sitemap index file. The value defaults to UTF-8 if left empty (this is also the sitemap specification value)
*** sitemap_FileCharset: (java.nio.charset.Charset) The Charset to use reading the individual sitemap files. The value defaults to UTF-8 if left empty (this is also the sitemap specification value)
*** sitemap_FileSchema: (SitemapFileIterator.Options.SitemapSchemaType) The schema of the individual sitemap files. Can be one of Text or Xml as per the sitemap specification. The value default to "Xml" if left empty
*** sitemap_FileType: (SitemapFileIterator.Options.SitemapFileType) The schema of the individual sitemap files. Can be one of Text or GZ as per the sitemap specification. The value default to "Text" if left empty
*** sitemap_producerBlockPollingTimeout: (Long) The amount of units (see sitemap_producerBlockPollingTimeoutUnit) to block waiting for a slot in the queue to put a retrieved endpoint. The value defaults to 20 if left empty
*** sitemap_producerBlockPollingTimeoutUnit: (java.util.concurrent.TimeUnit) The unit to measure the timeout in (sitemap_producerBlockPollingTimeout). The value defaults to TimeUnit.MINUTES if left empty
** HTTP API (Kaggle) Repository
*** repositoryAccessType: (String) the directive to use to drive the repository access plugin to use the sitemap index methodology. The value must be set to "httpapi-kaggle"
*** baseUrl: (String) the base url that should be used to construct the individual dataset endpoint url given the API listing response for each page
*** httpapi-kaggle_queueSize: (Integer) the size of the blocking queue that will hold the extracted endpoints from the repository and will then be used to feed the transformation pipeline
*** httpapi-kaggle_APICharset: (java.nio.charset.Charset) The Charset to use reading the API response. The value defaults to UTF-8 if left empty
*** httpapi-kaggle_APICharset: (java.nio.charset.Charset) The Charset to use reading the API response. The value defaults to UTF-8 if left empty
*** httpapi-kaggle_queryUrl: (String) The query GET url to call to access pages of results. The query string should contain a page placeholder token to facilitate paged retreival of results
*** httpapi-kaggle_queryPagePlaceholder: (String) The query GET url page placeholder token. The value defaults to "{PAGE}" if left empty
*** httpapi-kaggle_responsePropertyTotalDataset: (String) The API response json property that holds the number of total records available. The value defaults to "totalDatasetListItems" if left empty
*** httpapi-kaggle_responsePropertyDatasetList: (String) The API response json property that holds the list of page results. The value defaults to "datasetListItems" if left empty
*** httpapi-kaggle_responsePropertyDatasetUrl: (String) The API response json property that holds the url fragments for each dataset in the response. The value defaults to "datasetUrl" if left empty
*** httpapi-kaggle_responseBaseDatasetUrl: (String) The base url that should be used to construct the individual dataset endpoint url given the API listing response for each page. The value defaults to the value of the "baseUrl" configuration property if left empty
*** httpapi-kaggle_producerBlockPollingTimeout: (Long) The amount of units (see httpapi-kaggle_producerBlockPollingTimeoutUnit) to block waiting for a slot in the queue to put a retrieved endpoint. The value defaults to 20 if left empty
*** httpapi-kaggle_producerBlockPollingTimeoutUnit: (java.util.concurrent.TimeUnit) The unit to measure the timeout in (httpapi-kaggle_producerBlockPollingTimeout). The value defaults to TimeUnit.MINUTES if left empty

Usage example
<pre><code class="java">
public static void main(String[] args) throws Exception {
	ConsoleAppender console = new ConsoleAppender();
	console.setLayout(new PatternLayout("%d [%p|%c|%C{1}] %m%n"));
	console.setThreshold(Level.DEBUG);
	console.activateOptions();
	Logger.getLogger("eu.dnetlib.data.collector.plugins").addAppender(console);

	HashMap<String,String> params = new HashMap<>();
	params.put("consumerBlockPolling", Boolean.toString(true));
	params.put("consumerBlockPollingTimeout", "2");
	params.put("consumerBlockPollingTimeoutUnit", TimeUnit.MINUTES.toString());
	params.put("endpointCharset", StandardCharsets.UTF_8.name());
	params.put("updatedDateFormat", "YYYY-MM-DD");
	params.put("createdDateFormat", "YYYY-MM-DD");
	params.put("publicationDateFormat", "YYYY-MM-DD");
	params.put("contributorFallbackType", DatasetDocument.Contributor.ContributorType.Other.toString());
	params.put("identifierFallbackType", null);
	params.put("identifierFallbackURL", Boolean.toString(true));
	params.put("identifierMappingARK", "ark, ARK");
	params.put("identifierMappingDOI", "doi, DOI");
	params.put("identifierMappingHandle", "Handle, HANDLE");
	params.put("identifierMappingPURL", "purl, PURL");
	params.put("identifierMappingURN", "urn, URN");
	params.put("identifierMappingURL", "url, URL");

	params.put("repositoryAccessType", "sitemapindex");
	params.put("sitemap_queueSize", "100");
	params.put("sitemap_IndexCharset", StandardCharsets.UTF_8.name());
	params.put("sitemap_FileCharset", StandardCharsets.UTF_8.name());
	params.put("sitemap_FileSchema", SitemapFileIterator.Options.SitemapSchemaType.Text.toString());
	params.put("sitemap_FileType", SitemapFileIterator.Options.SitemapFileType.GZ.toString());
	params.put("sitemap_producerBlockPollingTimeout", "20");
	params.put("sitemap_producerBlockPollingTimeoutUnit", TimeUnit.MINUTES.toString());
	//params.put("repositoryAccessType", "httpapi-kaggle");
	//params.put("httpapi-kaggle_queueSize", "100");
	//params.put("httpapi-kaggle_APICharset", StandardCharsets.UTF_8.name());
	//params.put("httpapi-kaggle_queryUrl", "https://www.kaggle.com/datasets_v2.json?sortBy=updated&group=public&page={PAGE}&pageSize=20&size=sizeAll&filetype=fileTypeAll&license=licenseAll");
	//params.put("httpapi-kaggle_queryPagePlaceholder", "{PAGE}");
	//params.put("httpapi-kaggle_responsePropertyTotalDataset", "totalDatasetListItems");
	//params.put("httpapi-kaggle_responsePropertyDatasetList", "datasetListItems");
	//params.put("httpapi-kaggle_responsePropertyDatasetUrl", "datasetUrl");
	//params.put("httpapi-kaggle_responseBaseDatasetUrl", "https://www.kaggle.com");
	//params.put("httpapi-kaggle_producerBlockPollingTimeout", "20");
	//params.put("httpapi-kaggle_producerBlockPollingTimeoutUnit", TimeUnit.MINUTES.toString());

	InterfaceDescriptor descriptor = new InterfaceDescriptor();
	descriptor.setId("schema.org - reactome");
	descriptor.setBaseUrl("https://reactome.org/sitemapindex.xml");
	//descriptor.setId("schema.org - kaggle");
	//descriptor.setBaseUrl("https://www.kaggle.com");

	descriptor.setParams(params);

	SchemaOrgPlugin schemaOrgPlugin = new SchemaOrgPlugin();

	Iterable<String> iterable = schemaOrgPlugin.collect(descriptor, null, null);

	for(String item : iterable) {
		if(item == null) continue;
		System.out.println(item);
	}
}
</code></pre>

## Collector plugins for specific data sources

For the collection of metadata from some data sources, specific plugins were required and have been implemented. Unlikely they can be re-used for other data sources.

### PANGAEA: Datasets by Project

* Protocol name: datasetsbyproject
* Plugin class: eu.dnetlib.data.collector.plugins.datasets.DatasetsByProjectPlugin
* Plugin description: Given a list of projects provided in a csv file, the plugin search the target endpoint for metadata records related to those projects. 
* Support incremental collection: No
* Supported file formats: Response from the endpoint must be in XML. The input csv file has the following format: @project id on the endpoint;project acronym;project name;OpenAIRE info:eu project string@, example: @4106;EPOCA;European Project on Ocean Acidification;info:eu-repo/grantAgreement/EC/FP7/211384@.
* Plugin parameters:
** baseUrl: URL to the CSV. Can be local or remote (mandatory)
** ID XPath: xpath where the value to be used to forge the dnet identifier for each record can be found (mandatory)

### PANGAEA: Datasets by Journal

* Protocol name: datasetsbyjournal
This protocol has no plugin associated but it is rather used as marker for the assignment of the correct workflows that calls `eu.dnetlib.data.collector.plugins.datasets.DatasetsByJournalIterator` for the collection from PANGAEA of publications published in Open Access journals (based on an intersection with DOAJ) and the relative datasets.


### Re3Data

* Protocol name: re3data
* Available since: Sept 2015
* Plugin class: eu.dnetlib.data.collector.plugins.datasources.Re3DataCollectorPlugin
* Plugin description: Collects metadata about data repositories from re3data API.
* Support incremental collection: No
* Supported file formats: XML
* Plugin parameters:
** baseUrl: base URL of the endpoint (mandatory)
** ID XPath: xpath where the value to be used to forge the dnet identifier for each record can be found (mandatory)

### GRIST (europePMC API)

* Protocol name: gristProjects
* Available since: Apr 2016
* Plugin class: eu.dnetlib.data.collector.plugins.projects.grist.GristCollectorPlugin
* Plugin description: Plugin to collect metadata record about projects and fundings via the europePMC GRIST API. Currently used in OpenAIRE only for WellcomeTrust projects.
* Support incremental collection: No
* Supported file formats: XML in grist core format
* Plugin parameters:
** baseUrl: base URL of the endpoint (mandatory)
** ID XPath: xpath where the value to be used to forge the dnet identifier for each record can be found (mandatory)

### GTR-2 for RCUK projects

* Protocol name: gtr2Projects
* Available since: Dec 2016
* Plugin class: eu.dnetlib.data.collector.plugins.projects.gtr2.Gtr2CollectorPlugin
* Plugin description: Collects metadata about projects, organizations, principal investigators of RCUK projects via the Gtr-2 HTTP API
* Support incremental collection: Yes, but not supported by the endpoint
* Supported file formats: XML
* Plugin parameters:
** baseUrl: base URL of the endpoint (mandatory)
** ID XPath: xpath where the value to be used to forge the dnet identifier for each record can be found (mandatory)

### OpenTrials API 

The API protocol has been deleted as the OpenTrials API were not maintained. The plugin code is still available just in case.
Currently OpenTrials content is collected from a csv generated by processing a database dump.


### remoteMdStore

* Protocol name: remoteMdStore
* Environment:
  * non-Hadoop: PROD+BETA+DEV
* Available since: April 2020
* Plugin class: eu.dnetlib.data.collector.plugins.remotemdstore.RemoteMdstorePlugin
* Plugin description: Collects metadata records from a given mdStore at a different environment like PROD, BETA, DEV.
* Support incremental collection: No
* Supported file formats: XML
* Plugin parameters: 
** baseUrl: base URL of the endpoint (mandatory), e.g. _mongodb://services.openaire.eu:27017/_
** remote_database: _mdstore_
** remote_mdstore_id: _id of remote mdstore native or transformed_
** ID XPath: xpath where the value to be used to forge the dnet identifier for each record can be found (mandatory), e.g. _//*[local-name()='system_metadata']/*[local-name()='id']_


### BioSchemas

* Protocol name: Bioschemas
* Environment:
  * non-Hadoop: PROD+BETA+DEV
* Available since: 2021
* TODO


### SparQL

* Protocol name: sparql
* Environment:
  * non-Hadoop: PROD+BETA+DEV
* Available since:
* TODO


### openDAP

* Protocol name: sparql
* Environment:
  * non-Hadoop: PROD+BETA+DEV
* Available since:
* TODO


### sword

* Protocol name: sword/SWORD
* Environment:
  * PROD: non-Hadoop
* Available since:
* TODO


## Protocols for full-text collection

### Files from metadata

* Protocol name: files_from_metadata
* Plugin class: eu.dnetlib.data.collector.plugins.filesfrommetadata.FilesFromMetadataCollectorPlugin
* Plugin description: This protocol supports the collection of full-texts based on information available in already collected metadata records. Typical example is the case when the metadata records contain links to the PDF of the relative full-texts.
* Plugin parameters:
** baseUrl: (mandatory but ignored)
** ID XPath: xpath where the value to be used to forge the dnet identifier for each record can be found (mandatory but ignored)
** basePath: path on the local file system where the full-text files must be stored. (mandatory) 

When you associate a download workflow to API with this protocol, you'll have to select the proper download plugins. See  [[Fulltext_Download]] for details on the available plugins.

### Files from mdstore

* Protocol name: files_from_mdstore
* Plugin class: eu.dnetlib.data.collector.plugins.filesfrommetadata.FilesFromMetadataCollectorPlugin
* Plugin description: This protocol supports the collection of full-texts in cases when they have already been collected as metadata records. Typical example is the case of JATS XML records: they can be seen as metadata records, but they also contains the full-texts of publications. Instead of collecting twice from a remote location, this plugins enable the copy of records from the metadata stores of a data source to an object store.
* Plugin parameters:
** baseUrl: (mandatory but ignored)
** ID XPath: xpath where the value to be used to forge the dnet identifier for each record can be found (mandatory but ignored)
** basePath: path on the local file system where the full-text files must be stored. (mandatory)

