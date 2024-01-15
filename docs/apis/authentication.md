# Guide for authenticated requests

The OpenAIRE APIs can be accessed over HTTPS both by authenticated and non authenticated requests.
You can use authenticated requests to increase the rate limit of your requests (please refer [here](./terms#authentication--limits) for the current API rate limits).
There are 2 main modes that you can use to authenticate API requests: 

* [Personal access tokens](#personal-access-token)
* [Registered services](#registered-services)


In the following, we elaborate on these modes. 

## Personal access token

To access the OpenAIRE APIs with better rate limits you can use your personal access token. To have access to the following functionalities you need to login to OpenAIRE. In case you are not already a member you will need to register first and provide your [Personal information](https://develop.openaire.eu/personal-info).

:::info New!
The registration process has been updated! In order to visit the Personal Token and Registered Services functionalities you need to fill in the Personal Information form available [here](https://develop.openaire.eu/personal-info). This update will not affect the operation of your existing services. However, if you want to register a new service or access/modify an existing one, you will need to provide your personal information first.
:::

### How to create your personal access token

To create your personal access token go to [your personal access token page](https://develop.openaire.eu/personal-token) and copy it!

:::info
Your access token is valid for an hour.
:::

:::caution
Do not share your personal access token. Send your personal access token over HTTPS.
:::

### How to use your personal access token

To access the OpenAIRE APIs send your personal access token using the Authorization header.
```js
GET https://api.openaire.eu/{resourceServicePath}
Authorization: Bearer {ACCESS_TOKEN}
```

### An hour is not enough? What to do.

To prolong your access to our APIs you can use a **refresh token** that allows you to programmatically issue a new access token.

To get your refresh tokeng go to [your personal access token page](https://develop.openaire.eu/personal-token) and click the **"Get a refresh token"** button to get your refresh token.

OpenAIRE refresh token expires after 1 month.

In case you already have a refresh token a new one will be issued and the old one will no longer be valid.

Please copy your refresh token and store it confidentially. You will not be able to retrieve it. Do not share your refresh token. Send your refresh token over HTTPS.

Since the OpenAIRE refresh token expires after one month, when a client gets a refresh token, this token must be stored securely to keep it from being used by potential attackers. If a refresh token is leaked, it may be used to obtain new access tokens and access protected resources until a new one is issued or it expires.

To get a personal access token using your refresh token you need to make the following request:
```js
GET https://services.openaire.eu/uoa-user-management/api/users/getAccessToken?refreshToken={your_refresh_token}
```

The response has the following format:
```json
{ 
	"access_token": "...",
	"token_type": "Bearer",
	"refresh_token": "...",
	"expires_in": "...",
	"scope": "...",
	"id_token": "..."
}
```

## Registered services

If you have a service (client) that you want to interact with the OpenAIRE APIs you need to register it.

:::info
You can register up to 5 services.
:::

We offer two ways of authenticting your service: the Basic Authentication and the Advanced Authentication.

### Which one is for me?

|     | How | Client Credential Issuer | Authentication Method |
| --- | --- | --- | --- |
| **Basic** | Client ID & Client Secret | OpenAIRE AAI server | Client Secret (Basic) |
| **Advanced** | Private Key signed JWT | Service owner | Private Key JWT Client Authentication |

For the **Basic Authentication** method the OpenAIRE AAI server generates a pair of _Client ID_ and _Client Secret_ credentials for your service upon its registration. The service sends the client id and client secret when authenticating to the OpenAIRE AAI Server to obtain the access token for the OpenAIRE APIs. The OpenAIRE AAI server checks whether the client id and client secret sent is valid. [Continue reading for the Basic Authentication](#basic-service-authentication-and-registration).

For the **Advanced Authentication** method your service does not send a client secret but it uses a _self signed client assertion_ to authenticate to the OpenAIRE AAI server in order to obtain the access token for the OpenAIRE APIs. The client assertion is a JWT that must be signed with RSASSA using SHA-256 hash algorithm. The OpenAIRE AAI server validates the client assertion using the public key that you have provided upon the service registration.  [Continue reading for the Advanced Authentication](#advanced-service-authentication-and-registration).

:::info
The Advanced Authentication method allows the OpenAIRE AAI server to verify that the client authentication request at the token endpoint was signed by your service and not altered in any way. This is more computation intensive compared to the Basic Authentication but it ensures non-repudiation. On the other hand, the Basic Authentication is more lightweight and easy to deploy but it does not provide signature verification, and there is always a possibility of the Client ID/secret credentials being stolen. Note that tThe Advanced authentication method gives a higher level of security to the process as long as it is used correctly, i.e. when the signed JWT has a short duration. When the duration of the JWT is long, the process is no different from the basic one.
:::

### Basic service authentication and registration

To have access to the following functionalities you need to login to OpenAIRE. In case you are not already a member you will need to register first and provide your [Personal information](https://develop.openaire.eu/personal-info).

New! The registration process has been updated! In order to visit the Personal Token and Registered Services functionalities you need to fill in the Personal Information form available [here](https://develop.openaire.eu/personal-info). This update will not affect the operation of your existing services. However, if you want to register a new service or access/modify an existing one, you will need to provide your personal information first.

For the **Basic Authentication** method the OpenAIRE AAI server generates a pair of _Client ID_ and _Client Secret_ for your service upon its registration. The service uses the client id and client secret to obtain the access token for the OpenAIRE APIs. The OpenAIRE AAI server checks whether the client id and client secret sent is valid.

#### How to register your service

To register your service you need to:

1.  Go to your [Registered Services](https://develop.openaire.eu/apis) page and click the **\+ New Service** button.
2.  Provide the mandatory information for your service.
3.  Select the **Basic** Security level.
4.  Click the **Create** button.

Once your service is created, the _Client ID_ and _Client Secret_ will appear on your screen. Click "OK" and your new service will be appear in the list of your [Registered Services](https://develop.openaire.eu/apis) page.

#### How to make a request

##### Step 1. Request for an access token

To make an access token request use the _Client ID_ and _Client Secret_ of your service.
```js
curl -u {CLIENT_ID}:{CLIENT_SECRET} \
-X POST 'https://aai.openaire.eu/oidc/token' \
-d 'grant_type=client_credentials'
```

where **\{CLIENT_ID\}** and **\{CLIENT_SECRET\}** are the _Client ID_ and _Client Secret_ assigned to your service upon registration.

The response is:
```json
{
	"access_token": ...,
	"token_type": "Bearer",
	"expires_in": ...
}
```

Store the access token confidentially on the service side.

##### Step 2. Make a request

To access the OpenAIRE APIs send the access token returned in **Step 1**.
```js
GET https://api.openaire.eu/{resourceServicePath}
Authorization: Bearer {ACCESS_TOKEN}
```

### Advanced service authentication and registration


To have access to the following functionalities you need to login to OpenAIRE. In case you are not already a member you will need to register first and provide your [Personal information](https://develop.openaire.eu/personal-info).

:::info New! 
The registration process has been updated! In order to visit the Personal Token and Registered Services functionalities you need to fill in the Personal Information form available [here](https://develop.openaire.eu/personal-info). This update will not affect the operation of your existing services. However, if you want to register a new service or access/modify an existing one, you will need to provide your personal information first.
::: 

For the **Advanced Authentication** method your service does not send a client secret but it uses a _self signed client assertion_ to obtain the access token for the OpenAIRE APIs. The client assertion is a JWT that must be signed with RSASSA using SHA-256 hash algorithm. The OpenAIRE AAI server validates the client assertion using the public key that you have provided upon the service registration.

#### Prepare to register your service

Before you register your service you need to prepare a pair of a private key and a public key on your side.

:::info
We accept keys signed with RSASSA using SHA-256 hash algorithm.
:::

To create the key pair you have the following options:

* Use OpenAIRE authorization server built in tool. You can access the service here: [https://aai.openaire.eu/oidc/generate-oidc-keystore](https://aai.openaire.eu/oidc/generate-oidc-keystore).  
    The response is your **Public and Private Keypair** and has the following format:
    ```json
    { 
    	"p" : ...,
    	"kty" : "RSA",
    	"q" : ...,
    	"d" : ...,
    	"e" : "AQAB",
    	"kid" : ...,
    	"qi" : ..., 
    	"dp" : ..., 
    	"alg" : "RS256",
    	"dq" : ...,
    	"n" : ....
    }
    ```

    Use the public key parameters (kty, e, kid, alg, n) to create your **Public Key** in the following format:
    ```json
    {
    	"kty": "RSA",
    	"e": "AQAB",
    	"kid": ...,
    	"alg": "RS256",
    	"n": ...
    }
    ```

:::info
Store both the **Public and Private keypair** and the **Public key**. You will need them to register your service.
:::

:::caution
Store the **Public and Private keypair** confidentially on the service side.
:::

* Use openssl and then convert the keys to jwk format using PEM to JWK scripts, such as [https://github.com/danedmunds/pem-to-jwk](https://github.com/danedmunds/pem-to-jwk). Alternatively, the client application can read the key pair in PEM format and then convert them, using JWK libraries. Use the public key parameters (kty, e, kid, alg, n) to the service registration.

:::info
You can also provide a public key in JWK format that can be accessed using a link.
:::

#### How to register your service

To register your service you need to:

1.  Go to your [Registered Services](https://develop.openaire.eu/apis) page and click the **\+ New Service** button.
2.  Provide the mandatory information for your service.
3.  Select the **Advanced** Security level.
4.  Use the public key parameters (kty, e, kid, alg, n) you previously produced to declare your **"Public Key"** **"By value"** in the following format:
    ```json
    {
    	"kty": "RSA",
    	"e": "AQAB",
    	"kid": ...,
    	"alg": "RS256",
    	"n": ...
    }
    ```
    **\- OR -**
    
    If your service has a public key in JWK format that can be accessed using a link, you can set **“Public Key”** to **“By URL”**.
    
5.  Click the **Create** button.

Once your service is created it will appear in the list of your [Registered Services](https://develop.openaire.eu/apis) page, with the **Service Id** that was automatically assigned to it by the AAI OpenAIRE service.

#### How to make a request

##### Step 1. Create and sign a JWT

Your service must create and sign a JWT and include it in the request to token endpoint as described in the [OpenID Connect Core 1.0, 9. Client Authentication](https://openid.net/specs/openid-connect-core-1_0.html#ClientAuthentication).

To create a JWT you can use [https://mkjose.org/](https://mkjose.org/). To do so you need to create a **payload** that should contain the following claims:

```json
{
	"iss": "{SERVICE_ID}",
	"sub": "{SERVICE_ID}",
	"aud": "https://aai.openaire.eu/oidc/token",
	"jti": "{RANDOM_STRING}",
	"exp": {EXPIRATION_TIME_OF_SIGNED_JWT}                            
}
```

* **iss**, _(required)_ the “issuer” claim identifies the principal that issued the JWT. The value is the **Service Id** that was created when you registered your service.
* **sub**, _(required)_ the “subject” claim identifies the principal that is the subject of the JWT. The value is the **Service Id** that was created when you registered your service.
* aud, _(required)_ the “audience” claim identifies the recipients that the JWT is intended for. The value is **https://aai.openaire.eu/oidc/token**>.
* **jti**, _(required)_ The “JWT ID” claim provides a unique identifier for the JWT. The value is a random string.
* **exp**, _(required)_ the “expiration time” claim identifies the expiration time on or after which the JWT **MUST NOT** be accepted for processing. The value is a timestamp in **epoch format**.

Fill in the payload in the form available at [https://mkjose.org/](https://mkjose.org/), select the Signing Algorithm to be **RS256 using SHA-256** and paste the **Public and Private Keypair** previously created.

To check your JWT you can go to [https://jwt.io/](https://jwt.io/). The **header** should contain the following claims:
```json
{
	"alg": "RS256",
	"kid": ...
}
```

where **kid** is the one of your **Public and Private Keypair** you used to sign the JWT in **Step 1**.

:::caution
Store the signed key confidentially on the service side. You will need it in Step 2.
:::

##### Step 2. Request for an access token

To make an access token request use the _signed JWT_ that you created in **Step 1**. The OpenAIRE AAI server will check if the signed JWT is valid using the public key that you declared in the **"How to register your service"** process.
```js
	curl -k -X POST "https://aai.openaire.eu/oidc/token" \
	-d "grant_type=client_credentials" \
	-d "client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer" \
	-d "client_assertion=\{signedJWT\}"
```
where **\{signedJWT\}** is the signed JWT created in **Step 1**.

The response is:
```json
{
	"access_token": {ACCESS_TOKEN}
	"token_type":"Bearer",
	"expires_in": ...,
	"scope":"openid"
}
```

Store the access token confidentially on the service side.

##### Step 3. Make a request

To access the OpenAIRE APIs send the access token returned in **Step 2**.
```js
	GET https://test.openaire.eu/{resourceServicePath}
	Authorization: Bearer {ACCESS_TOKEN}
```