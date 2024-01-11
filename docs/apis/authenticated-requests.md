# Guide for authenticated requests

The OpenAIRE APIs can be accessed over HTTPS both by authenticated and non authenticated requests. Currently, there is **an adjustment period until October 2022**, when the rate limit for both authenticated and non authenticated requests is up to 7200 requests per hour. **After this period we plan to significantly lower the rate limit of non authenticated requests up to 60 requests per hour.**

Please consider to make authenticated requests to achieve better rate limits. Check our Privacy Policy [here](http://www.openaire.eu/privacy-policy).

### OpenAIRE APIs - Rate limits

<table>
  <tr>
    <td>Not authenticated requests</td>
    <td>Up to 7200 requests per hour  <br/>soon to decrease - please see above</td>
  </tr>
  <tr>
    <td>Authenticated requests</td>
    <td>Up to 7200 request per hour</td>
  </tr>
</table>

OpenAIRE APIs can be used for both authentication and authorization. Our OAuth 2.0 implementation, conforms to the OpenID Connect specification, and is [OpenID Certified](https://openid.net/certification/). OpenID Connect is a simple identity layer on top of the OAuth 2.0 protocol. For more information about OAuth2.0 please visit the [OAuth2.0 official site](https://oauth.net/2/). For more information about OpenID Connect please visit the [OpenID Connect official site](https://openid.net/connect/).

## Requests

To access the OpenAIRE APIs with better rate limits, send your access token using the Authorization header.

```js
GET https://api.openaire.eu/{resourceServicePath}
Authorization: Bearer {ACCESS_TOKEN}
```

<!-- To get an access token, we support [**personal access token**](./personalToken.html) creation and [**service registration**](./registeredService.html). -->

## Response Headers

|  Name   |  D   |
| --- | --- |
| x-ratelimit-limit | The maximum number of requests allowed for the client in one time window. |
| x-ratelimit-used | The number of requests already made by the client in the current time window. |

The OpenAIRE APIs use a sliding time window of one hour.

## Error Messages

404 - Not found

```json
{
	"error": "Not found",
	"description": "Invald request path."
}
```

403 - Invalid Access Token

```json
{
	"error": "Token invalid",
	"description": "Authorization header value invalid."
}
```

429 - Rate limit abuse for unauthenticated user

```json
{
	"error": "Too many requests",
	"description": "Request rate exceeded. Slow down."
}
```

429 - Rate limit abuse

```json
{
	"error": "Too many requests",
	"description": "Request rate exceeded. Slow down."
}
```