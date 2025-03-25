---
slug: lessons-learned-from-merging-three-kbs
title: Lessons learned from merging three KBs
authors: abby
date: 2025-01-14
tags: [professional]
---

I recently finished merging and moving our suite of documentation into one tool, [ReadMe](https://www.readme.com). I'm not going to pretend it's a perfect tool&mdash;there's a few quibbles I still have with it&mdash;but this docs merger was one of the first projects the ELT asked me to tackle when I started. This meant finding the "good enough" tool, and I learned a lot about what works&mdash;and what doesn't&mdash;when diagnosing a vendor for an org.

<!-- truncate -->

## The problem

To set the stage, the problem was that we had three knowledge bases in three different places using three different platforms:

* **KB A:** docs.humansecurity.com, hosted with Docusaurus
* **KB B:** edocs.humansecurity.com, hosted with Document360
* **KB C:** cleanio.helpdocs.io, hosted with HelpDocs

Each of these originally belonged to separate companies, but they had all since merged into one company. Since then, each knowledge base instead corresponded to subsets of the company's overall product suite. Obviously, the docs weren't prioritized in this merger, which occurred in July 2022. This was almost two years before I started in May 2024.  

Just from the user's standpoint, this was really confusing and inconvenient for a few reasons: 

* If they were using products from two or more of these sets (which many customers were), they had to navigate to completely different sites to find the relevant docs. This was inconvenient and cumbersome. 
* Since each site was hosted with a different tool, the user experience on each site was different, such as different search experiences, feedback forms, and more. This made for a confusing experience when trying to use multiple sites. 
* Only one of the sites (docs.humansecurity.com) was actually linked in our company website. This meant users looking for the other two had no idea where to go, which was frustrating. 

As technical writers know, the last thing you want is to make a user's experience on a docs site frustrating, because users are likely **already** frustrated that they have to be there in the first place. When users finally resort to looking at docs, they probably tried everything else to troubleshoot their problem short of contacting support. If users feel like they can't get their answers quickly or easily from docs, then they skip past them and go straight to support. 

Aside from the readers' experiences, though, I knew there'd be internal problems from these disparate docs as well:

* Different tools for different doc sets meant the process for updating docs would be slightly different each time. This slowed thing down and made it inconvenient for contribution.
* Separating the documentation made it more difficult to apply consistent style across all the docs. This meant the content itself felt like it was written by three different people instead of just one company. 
* Having docs in different places also meant it was harder to consistently own, review, and monitor docs. I had to check multiple places regularly to see if there were review requests or changes since I was last there, which took unnecessary time out of my day. 
* Three different docs sites, which had very different user experiences and outdated branding, gave the impression that the company was still three different businesses and didn't send a unified message or brand.

Just from those problems above, I was already eager to tackle merging these docs. And, luckily, I had support from management as well. 

## The previous attempt

So, just from reading through the above, maybe you're wondering what I was wondering when I first started: if the companies merged in July '22, how come the docs weren't merged before this? 

Actually, it turned out that there **had** been an attempt before I joined. When I first started digging into solving this, my then-manager, the CPO, was very open about the fact that he actually tried to get this to happen before. He brought the two technical writers at the time, along with a variety of other stakeholders, and told them he wanted this to happen. 

So what went wrong? Well, to summarize the seven-month chat history, it seemed like no one could agree on what tool to use. Everyone had an opinion and no one was taking ownership to try to come to a resolution. Unfortunately, the chat ended up dying a bit and never coming to a resolution. Both the technical writers were also laid off around January 2024, which brought the project to a grinding halt. 

## The investigation

Like I mentioned earlier, I knew that a docs merger and possibly a migration to a new tool would be early on the horizon when I started. VPs from Product and Engineering emphasized this need during my interview process, and even a member of ELT said that he needed this to get done. So, as early as my first day on the job, I started assessing the problem.

Now, while upper management told me this was a problem, and their opinions held a lot of weight, I didn't want to just take their word for it. So while I went around introducing myself and getting to know my colleagues, I started asking them their opinions on the docs&mdash;especially people that had been contributing to the documentation during the absence of a technical writer on the team. 

I thought this was an important exercise particularly because we had over 500 articles and I was the only technical writer at that point, so there would be no way for me to manage all the documentation updates on my own. I knew that these same individuals would probably continue to contribute to docs even after the merge, so it was even more important to get their perspectives. This became pretty interesting, because the problems were basically opposite on each group of contributors.

### Knowledge base A

This was hosted on Docusaurus, so the docs were stored in a GitHub repo and updated using a typical docs-as-code format. At first glance, I didn't see anything immediately problematic with this tool&mdash;I actually prefer docs-as-code myself and worked with Docusaurus before. However, as I dug deeper, the issues quickly became more apparent.

#### Contributors

I actually had some trouble figuring out who had been updating these docs, because I had been told that they **had** been updated since the last tech writer was laid off, but there had been very little activity in the repo. When I finally did track them down, I immediately discovered the problem with this knowledge base: only the previous technical writer knew how to contribute to docs in a docs-as-code workflow. Without them, the contributors were very averse to pushing updates. 

Specifically, the contributors in the TW's absence were a product manager and sometimes the Director of Customer Support, but they only did this when absolutely necessary (for example, compliance requirements or for particularly major product releases) because they weren't comfortable with Git or Markdown. In fact, because there was so much hesitance about updating the docs with Git, the support team actually had to start documenting and updating integration guides in Google Docs and publishing them as PDFs instead! Just based on this, I knew that a pure docs-as-code solution probably wouldn't cut it. 

#### Stakeholders

In addition to direct contributors, I sniffed around for interested parties about the docs solutions. In this case, I spoke to a developer that worked with the previous technical writer to customize Docusaurus with extra features. He was actually very enthusiastic about Docusaurus because of this customization, and he told me it was why the previous tech writer liked it too&mdash;along with the fact that it was free, of course. However, since the latter was laid off, this developer had not touched the site or the repo since. 

Another stakeholder I spoke to were VPs of Engineering. We actually had two VPs that represented the two branches of products we had. One of them said he didn't mind what tool we ended up using for docs as long as it was the "right" one that suited our needs best. The second one outright said that he didn't want to use Docusaurus or any open-source tool due to the engineering resources he thought it'd take. 

Now, the latter opinion was in direct conflict with the developer's I mentioned, who was actually a vocal supporter for Docusaurus along with the previous tech writer during the team's original attempt to merge the docs. 

#### Conclusions

While they didn't have any particular preferences for a docs vendor, they said they would definitely prefer a WYSIWYG editor instead. They also didn't understand the Git workflow (creating a branch, pull requests, merging, etc.) and didn't want a tool that required a lot of onboarding to publish something.

## The diagnosis

## The treatment

## The lessons

### 1. Just because you think it's cool doesn't mean it's the best solution

I'll admit it: the docs-as-code thing is super trendy right now and I personally really like it. But I do disagree with the way it's being touted as "the" docs solution for businesses&mdash;especially in tech. It's really good for keeping docs close to code and I think it's really effective if you have developers involved in docs as well because the process is very familiar to them. But it's **not** the end-all-be-all fix for docs processes. 

### 2. Eyes on the prize

### 3. If a VP is telling you "no", then it's a no

This one might come across as blasé, but I feel like this was one of the more obvious takeaways I got from the whole experience&mdash;both from observing what went wrong in [the previous attempt](#the-previous-attempt) as well as when I did my own investigation. 

Look, it's just the facts: **not all stakeholders are made equal.** And if certain ones are saying they don't want to use a specific type of tool no matter what you say to convince them, then you just need to accept that and move on.

I think that there was too much cultural attachment to Docusaurus when I joined&mdash;primarily because it was customizable and free. And, I get it, the team that previously worked on the Docusaurus site did a lot of great work so far and invested a lot of passion into it, so it was hard to let go of.  

But it was clear that a VP of Engineering was adamantly against an open-source solution because of the time it would take to include the same features that out-of-the-box solutions offered. In fact, the CPO even backed them up, saying the company had been sitting on this problem for two years now and they didn't want to wait to customize something to be as good as something we could buy immediately. They wanted something out-of-the-box that solved the big problem **now** (see [number 2](#2-eyes-on-the-prize))&mdash;and, frankly, the Docusaurus configuration at the time was not robust enough to argue that it **was** at that state already. 

So that eliminated Docusaurus and other open-source solutions. And, to be honest, I didn't actually mind this type of restriction. It was basically the only one the leadership imposed on me, and it actually helped eliminate a lot of possible solutions on the market. I knew I was looking for a solution that had a lot of robust features immediately. But the bottom line that I got out of this is that you need to **pick your battles.**

<!-- notes 

    * alexa apparently laid off in dec 2023
    * gleb apparently left in feb 2024
    * original merge effort started in May 2023 and fizzled around nov 2023

-->