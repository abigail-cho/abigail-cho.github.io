---
layout: page
title: Install the Cloudflare Enforcer
description: How-to article
img: 
importance: 5
category: Professional
related_publications: 
---

A procedural article describing how to install the company's proprietary code on the reader's server using a Cloudflare Worker. This installation was required to use this company's more popular products, but often, the person installing this code was not an expert developer. This proved to be a significant barrier to entry and a friction point during onboarding, especially because the early versions of this article were mostly full of technical jargon and did not have clear prerequisites. 

I chose to include this article because it showcases more technical instructions, but it also demonstrates the expertise of the audience I was writing for. This audience had some experience with command-line interfaces, for example, but not as much with Cloudflare or installing certain programs. Therefore, I presented the information as clearly and succinctly as possible, and I warned readers at steps where past users stumbled. 

This article was available publicly on the company's documentation site, so none of the content has been redacted in the sample below. The current version can be found <a href="https://edocs.humansecurity.com/docs/install-the-cloudflare-enforcer">here</a>. You can download a PDF version <a href="/assets/pdf/Install-the-Cloudflare-Enforcer.pdf" target="_blank">here</a>.

<hr>

# Install the Cloudflare Enforcer

If your organization uses **Cloudflare,** you can use HUMAN's Cloudflare **Enforcer** to protect against malicious behavior. The Cloudflare Enforcer is installed using a Cloudflare **Worker,** or a snippet of code, and is deployed to your content delivery network (CDN). The Enforcer dictates how traffic should be handled per your organization's standards.

You can learn how to install the Cloudflare Enforcer with this article.

## Prerequisites

* A **Cloudflare account.** You can sign up for an account from [Cloudflare's website.](https://www.cloudflare.com/)
* A **command-line interface (CLI).**
* A text editor.
* **Node Version Manager (nvm)** installed on your device. See nvm’s [GitHub repository](about://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) to troubleshoot installation issues.
* The latest version of **Node.js.** After installing nvm, enter `nvm install stable` in your CLI to install it.
* **Wrangler** installed on your device. You can enter `npm install -g wrangler` in your CLI to install it.
* Your unique HUMAN information:
  * Your **Application ID.** You can find this under **Platform Settings > Applications > Overview** in the HUMAN console.
  * Your **Server Token.** You can find this under **Platform Settings > Applications > Status & Settings > Server Token.**
  * Your **Risk Cookie Key.** You can find this under **Bot Defender > Policies > Policy Settings > Policy Information.**

## Installation

There are two parts to the Cloudflare Enforcer installation:

1. [Create the Cloudflare worker](install-the-cloudflare-enforcer.md#create-the-cloudflare-worker)
2. [Install the HUMAN Enforcer](install-the-cloudflare-enforcer.md#install-the-human-enforcer)

The majority of the installation process is done through a CLI.

### Create the Cloudflare Worker

1. Enter `npm create cloudflare@latest`.
2. When prompted, enter a folder name to create your Worker in. In the example below, we've named our folder `HUMAN-cloudflare-enforcer`.

```sh
npm create cloudflare@latest

using create-cloudflare version 2.21.1
╭ Create an application with Cloudflare Step 1 of 3
│ 
╰ In which directory do you want to create your application? also used as application name
  ./HUMAN-cloudflare-enforcer
```

3. When prompted, select the `"Hello World" Worker` option and hit `return` to proceed.

```sh
│ dir ./cloudflare-enforcer
│
╰ What type of application do you want to create?
  ● "Hello World" Worker
  ○ "Hello World" Worker (Python)
  ○ "Hello World" Durable Object
  ○ Website or web app
  ○ Example router & proxy Worker
  ○ Scheduled Worker (Cron Trigger)
  ○ Queue consumer & producer Worker
  ○ API starter (OpenAPI compliant)
  ○ Worker built from a template hosted in a git repository
```

4. Select whether to install the Worker using TypeScript. By default, the Worker will install in JavaScript.

> **Note**
>
> Whether you use TypeScript or JavaScript is up to you, but be sure to **remember what you chose.** Later in the installation, you will need to choose the code snippet that corresponds to the language you installed in.
```sh
├ What type of application do you want to create?
│ type "Hello World" Worker
│
╰ Do you want to use TypeScript?
  Yes / No
```

5. When prompted, select `No` to deploying your application.

```sh
╭ Deploy with Cloudflare Step 3 of 3
│ 
╰ Do you want to deploy your application?
  Yes / No
```

Afterwards, you should receive a success message that reads `APPLICATION CREATED`. This means you created a basic Cloudflare Worker, and you're ready to move on to installing the HUMAN Enforcer.

### Install the HUMAN Enforcer

1. Enter `cd folder_name` to open the folder you created in **Create the Cloudflare Worker, Step 2.** Based on our earlier example, we would enter `cd HUMAN-cloudflare-enforcer`.
2. Enter `npm i --save @humansecurity/cloudflare-enforcer`. This will install the latest Cloudflare Enforcer from HUMAN.
3. Enter `cd src` to enter the `src` folder.
4. With your preferred text editor, open `index.ts` or `index.js` depending on your choice in **Create the Cloudflare Worker, Step 4** to open the file. The `.ts` file is for TypeScript installations, while `.js` is for JavaScript.

> **Note**
> 
> You can check the file type you have by entering `ls` while inside the `src` folder. This will show you your `index` file's type.

5. Delete all the code currently in the `index` file. The following snippet shows all the default code you should delete.

```sh
/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
export default {
        async fetch(request, env, ctx) {
                return new Response('Hello World!');
        },
};
```

6. Copy the appropriate code snippet, either TypeScript or JavaScript, from below and paste it into your `index` file.

> **Note**
>
> In addition to choosing between TypeScript and JavaScript, you must also make sure to pick the right type of Worker. This can either be an ES Module or Service Module, and it depends on your Cloudflare configuration. You can see some examples from both Workers in [Cloudflare's documentation.](https://developers.cloudflare.com/workers/reference/migrate-to-module-workers/)
<details>
<summary>ES Module Syntax: JavaScript</summary>
```javascript
import {
    HumanSecurityEnforcer
} from "@humansecurity/cloudflare-enforcer";

const config = {
    px_app_id: '<APP_ID>',
    px_auth_token: '<AUTH_TOKEN>',
    px_cookie_secret: '<COOKIE_SECRET>',
    // ...
};

export default {
    async fetch(request, env, ctx) {
        // create a new enforcer
        const enforcer = await HumanSecurityEnforcer.initialize(config, env);

        // call enforce
        const retVal = await enforcer.enforce(ctx, request);

        // if enforce returned a response, return that response
        if (retVal instanceof Response) {
            return retVal;
        }

        // retrieve the resource from the cache or origin server
        // make sure to use the value returned from enforce
        const response = await fetch(retVal);

        // call postEnforce and return the resulting response
        return await enforcer.postEnforce(ctx, response);
    },
};
```
</details>
<details>
<summary>ES Module Syntax: TypeScript</summary>
```typescript
import {
    HumanSecurityEnforcer,
    HumanSecurityConfiguration
} from '@humansecurity/cloudflare-enforcer';

const config: HumanSecurityConfiguration = {
    px_app_id: '<APP_ID>',
    px_auth_token: '<AUTH_TOKEN>',
    px_cookie_secret: '<COOKIE_SECRET>',
    // ...
};

interface Env {
    // If using Human Security features that require the PXKV Namespace
    PXKV: KVNamespace;
}

export default {
    async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise < Response > {
        // create a new enforcer
        const enforcer = await HumanSecurityEnforcer.initialize(config, env);

        // call enforce
        const retVal = await enforcer.enforce(ctx, request);

        // if enforce returned a response, return that response
        if (retVal instanceof Response) {
            return retVal;
        }

        // retrieve the resource from the cache or origin server
        // make sure to use the value returned from enforce
        const response = await fetch(retVal);

        // call postEnforce and return the resulting response
        return await enforcer.postEnforce(ctx, response);
    },
};
```
</details>
<details>
<summary>Service Worker Syntax: JavaScript</summary>
```javascript
import {
    HumanSecurityEnforcer
} from '@humansecurity/cloudflare-enforcer';

// define an enforcer configuration however you see fit
const config = {
    px_app_id: '<APP_ID>',
    px_auth_token: '<AUTH_TOKEN>',
    px_cookie_secret: '<COOKIE_SECRET>',
    // ...
};

async function handleEvent(event) {
    // provide the enforcer configuration as an argument and await the returned Promise
    // to receive an instance of the HumanSecurityEnforcer
    const enforcer = await HumanSecurityEnforcer.initialize(config);

    // call enforce
    const retVal = await enforcer.enforce(event);

    // if enforce returned a response, return that response
    if (retVal instanceof Response) {
        return retVal;
    }

    // retrieve the resource from the cache or origin server
    // make sure to use the value returned from enforce
    const response = await fetch(retVal);

    // call postEnforce and return the resulting response
    return await enforcer.postEnforce(event, response);
}

addEventListener('fetch', (event) => {
    event.respondWith(handleEvent(event));
});
```
</details>
<details>
<summary>>Service Worker Syntax: TypeScript</summary>
```typescript
import {
    HumanSecurityEnforcer,
    HumanSecurityConfiguration
} from "@humansecurity/cloudflare-enforcer";

const config: HumanSecurityConfiguration = {
    px_app_id: '<APP_ID>',
    px_auth_token: '<AUTH_TOKEN>',
    px_cookie_secret: '<COOKIE_SECRET>',
    // ...
};

async function handleEvent(event: FetchEvent): Promise < Response > {
    // create a new enforcer
    const enforcer = await HumanSecurityEnforcer.initialize(config);

    // call enforce
    const retVal = await enforcer.enforce(event);

    // if enforce returned a response, return that response
    if (retVal instanceof Response) {
        return retVal;
    }

    // retrieve the resource from the cache or origin server
    // make sure to use the value returned from enforce
    const response = await fetch(retVal);

    // call postEnforce and return the resulting response
    return await enforcer.postEnforce(event, response);
}

addEventListener('fetch', (event) => {
    event.respondWith(handleEvent(event));
});
```
</details>

7. Update the `px_app_id`, `px_auth_token`, and `px_cookie_secret` fields with your **Application ID, Server Token,** and **Risk Cookie Key** respectively.

> **Note**
>
> These are the **minimum** required fields that **must be completed** in order for the Enforcer to work. You can always return to this file to customize your Enforcer later with our [optional configurations.](https://edocs.humansecurity.com/docs/configuration-cloudflare)
```sh
// define an enforcer configuration however you see fit
const config = {
    px_app_id: '<APP_ID>',
    px_auth_token: '<AUTH_TOKEN>',
    px_cookie_secret: '<COOKIE_SECRET>',
    // ...
};
```

8. Hit `ESC` to leave editing mode, then enter `:x` to save and close the file.
9. Enter `npx wrangler deploy` to deploy your Worker. You may be prompted to log in to your Cloudflare account.
10. Navigate to your Cloudflare dashboard and open **Workers & Pages.** Your new Worker with the HUMAN Enforcer should appear with the same name you gave it in **Create the Cloudflare Worker, Step 2.**
11. Select the Worker, then select **Settings > Triggers > Add route** under **Routes** to add the URL or URL patterns for the Enforcer to monitor.

Your Cloudflare Enforcer has been successfully installed with the minimum requirements to monitor activity on your Cloudflare CDN. You can further customize the Enforcer’s behavior by referencing our [configuration options.](https://edocs.humansecurity.com/docs/configuration-cloudflare)

Once you finish installing, be sure to contact HUMAN to complete your tuning process.