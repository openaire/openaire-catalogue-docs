# Response metadata format

In this page, we elaborate on the metadata response format, as well as response headers and errors. 

## Main response

The OpenAIRE Search API supports the following types of response formats: 

* XML
* JSON
* CSV
* TSV 

In the next paragraphs, we elaborate on the respective metadata formats. 

### XML/JSON

The default format of delivered records is oaf (OpenAIRE Format - current version 1.0):

* XML schema: https://www.openaire.eu/schema/1.0/oaf-1.0.xsd
* Documentation: https://www.openaire.eu/schema/1.0/doc/oaf-1.0.html

For the list of changes [click here](https://www.openaire.eu/openaire-xml-schema-change-announcement).

Note that latest versions of the XML schema and documentation are also available at the following permanent links:

* XML schema: https://www.openaire.eu/schema/latest/oaf.xsd
* Documentation: https://www.openaire.eu/schema/latest/doc/oaf.html

Older versions:

* oaf v0.3 [XML schema](https://www.openaire.eu/schema/0.3/oaf-0.3.xsd) and [documentation](https://www.openaire.eu/schema/0.3/doc/oaf-0.3.html)
* oaf v0.2 [XML schema](https://www.openaire.eu/schema/0.2/oaf-0.2.xsd) and [documentation](https://www.openaire.eu/schema/0.2/doc/oaf-0.2.html)
* oaf v0.1 [XML schema](https://www.openaire.eu/schema/0.1/oaf-0.1.xsd) and [documentation](https://www.openaire.eu/schema/0.1/doc/oaf-0.1.html)


### CSV/TSV

The API returns in comma-separated files (CSV) or tab-separated files (TSV) the following fields:

* Title
* AUthors
* Publicatioy year
* DOI
* Download from
* Publication type
* Journal
* Funder
* Project name (GA Number)
* Access

## Headers

|  Name   |  Description   |
| --- | --- |
| x-ratelimit-limit | The maximum number of requests allowed for the client in one time window. |
| x-ratelimit-used | The number of requests already made by the client in the current time window. |

The OpenAIRE APIs use a sliding time window of one hour.

## Errors

### General 

404 - Not found

```json
{
	"error": "Not found",
	"description": "Invald request path."
}
```

429 - Rate limit abuse

```json
{
	"error": "Too many requests",
	"description": "Request rate exceeded. Slow down."
}
```

### Only for authenticated requests 

400 - Missing grant type
```json
{
	"error": "invalid_request",
	"error_description": "Missing grant type"
}
```

400 - Wrong grant type

```json
{
	"error": "unsupported_grant_type",
	"error_description": "Unsupported grant type: ..."
}
```

400 - Missing Refresh Token
```json

{  
	"status" : "error", 
	"code" : "400", 
	"message" : "Bad Request", 
	"description" : "Missing refreshToken parameter" 
}
```

401 - Missing username or/and password
```json
{
	"error": "unauthorized",
	"error_description": "Client id must not be empty!"
}
```

401 - Wrong username or/and password
```json
{
	"error": "unauthorized",
	"error_description": "Bad credentials"
}
```

401 - Invalid Refresh Token (for authenticated requests)
```json

{  
	"status" : "error", 
	"code" : "401", 
	"message" : "Unauthorised", 
	"description" : "Invalid refreshToken token" 
}
```

401 - Invalid client assertion
```json
{
	"error":"invalid_client",
	"error_description":"Bad client credentials"
}
```

401 - Client assertion for missing service
```json
{
	"error":"invalid_client",
	"error_description":"Could not find client {SERVICE_ID}"
}
```

401 - Expired signed jwt

```json
{
	"error":"unauthorized",
	"error_description":"Assertion Token in expired: {EXPIRATION_TIME}"
}
```

403 - Invalid Access Token

```json
{
	"error": "Token invalid",
	"description": "Authorization header value invalid."
}
```
