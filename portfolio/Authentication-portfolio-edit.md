# Authentication

Acme uses API keys to authenticate requests. To use the Acme v2 API, you **must** authenticate every request you make. Requests without authentication will fail.

## Getting an API key 

To get your API key, you must have an Acme platform account. 

1. Log in to your Acme account and navigate to **Account Settings.**
2. Find the **Acme API Integration** and select **Generate Token.**
3. Copy your **API Key.**

<!-- theme: danger -->

> #### Warning
> Your API key is **unique** to your account and carry many privileges, so keep it secure! **Do not** share your key with others or store it in publicly accessible areas. 

For further details, review our [customer documentation.](https://help.acme.co/docs/integrating-with-the-acme-api)

## Authenticating requests 

You can authenticate using your API key as the token with `--header 'X-API-key: <YOUR_API_TOKEN>'`. You do **not** need to provide a password. 

For example, to authorize a request to get a list of conversions: 

<!--
title: "Authorization example"
lineNumbers: true
-->

```json
curl --request GET \
  --url https://app.acme.co/v2/conversions/ \
  --header 'X-API-key: <YOUR_API_TOKEN>' \
  --header 'Accept: application/json'
```

### Authenticating requests with API version 1

Authenticating requests with Acme's [v1 API](https://acme.sample.co/docs/v1/) (`https://api.acme.co/v1/`) is different from authenticating requests with the our v2 API. When authenticating with API v1, you must authenticate with your API key as the bearer token using `--header 'Authorization: Bearer <YOUR_API_TOKEN>'` instead. 

If you are using both APIs, then we recommend using both authorization headers in your requests to either domain. 

<!--
title: "Both authorizations example"
lineNumbers: true
-->

```json
curl --request GET \
  --url https://app.acme.co/v2/conversions/ \
  --header 'X-API-key: <YOUR_API_TOKEN>' \
  --header 'Authorization: Bearer <YOUR_API_TOKEN>' \
  --header 'Accept: application/json'
```