# Getting started

Follow these steps to get started with the Acme API v2. 

## Getting your API key 

You **must** have an existing Acme platform account to generate an API key.  

1. Log in to your Acme account and navigate to **Account Settings.**
2. Find the **Acme API Integration** and select **Generate Token.**
3. Copy your **API Key.** 

<!-- theme: danger -->
> #### Warning
> Your API key is **unique** to your account and carry many privileges, so keep it secure! **Do not** share your key with others or store it in publicly accessible areas. 

For further details, you can review our [customer documentation.](https://help.grin.co/v1/docs/integrating-with-the-grin-api/)

## Sending a request

All requests must be made over HTTPS; calls made over plain HTTP will fail. In addition, each request must have the following: 

* **A host:** The Acme API host is always `https://api.acme.co/`. 
* **A version:** The current version is version 2, and your full URL will look like `https://api.acme.co/v2/`
* **An X-API-key header:** You must use your API key as the token. You do not need to provide a password.
* **A request:** When submitting data to an endpoint via POST or PATCH, you must submit your payload in JSON. 

### Getting a list of conversions

You can test out sending a request to the Acme API v2 by getting a list of conversions from your account. To do so:

```cURL
curl --request GET \
  --url https://api.acme.co/v2/conversions \
  --header 'Accept: application/json' \
  --header 'X-API-key: <YOUR_API_KEY>' 
```

1. Copy and paste the curl example into your preferred text editor. 
2. Copy and paste your API key into the `X-API-key` header. 
3. Copy and paste the code into your terminal. 
4. Hit **Enter.**

You can also try it directly: 

```json http
{
  "method": "GET",
  "url": "https://api.acme.co/v2/conversions",
  "headers": {
    "Accept": "application/json",
    "X-API-key": "Your API key"
  }
}
```

### Sample response 

Acme returns an array of conversion objects for conversions in the account, or an empty array if there are no conversions.