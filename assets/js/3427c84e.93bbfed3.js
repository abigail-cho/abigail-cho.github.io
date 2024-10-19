"use strict";(self.webpackChunkabigail_portfolio=self.webpackChunkabigail_portfolio||[]).push([[2659],{7082:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>h,toc:()=>c});var i=r(4848),n=r(8453);const a={id:"getmyweather-api",title:"GetMyWeather API",sidebar_label:"GetMyWeather API",description:"API documentation for a fictional weather API.",toc_max_heading_level:4,tags:["Developer","Reference","API"]},s=void 0,h={id:"technical/getMyWeatherAPI/getmyweather-api",title:"GetMyWeather API",description:"API documentation for a fictional weather API.",source:"@site/docs/technical/getMyWeatherAPI/getMyWeatherAPI.md",sourceDirName:"technical/getMyWeatherAPI",slug:"/technical/getMyWeatherAPI/",permalink:"/docs/technical/getMyWeatherAPI/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"Developer",permalink:"/docs/tags/developer"},{inline:!0,label:"Reference",permalink:"/docs/tags/reference"},{inline:!0,label:"API",permalink:"/docs/tags/api"}],version:"current",frontMatter:{id:"getmyweather-api",title:"GetMyWeather API",sidebar_label:"GetMyWeather API",description:"API documentation for a fictional weather API.",toc_max_heading_level:4,tags:["Developer","Reference","API"]},sidebar:"tutorialSidebar",previous:{title:"Authenticating API calls",permalink:"/docs/technical/authenticating-api-calls"},next:{title:"Install the Cloudflare Enforcer",permalink:"/docs/technical/install-the-cloudflare-enforcer"}},l={},c=[{value:"About this article",id:"about-this-article",level:2},{value:"GetMyWeather API",id:"getmyweather-api",level:2},{value:"What is the GetMyWeather API?",id:"what-is-the-getmyweather-api",level:3},{value:"Registering for a GetMyWeather API Key",id:"registering-for-a-getmyweather-api-key",level:3},{value:"Initializing the GetMyWeather API",id:"initializing-the-getmyweather-api",level:3},{value:"Calling the GetMyWeather API",id:"calling-the-getmyweather-api",level:3},{value:"Providing GetMyWeather API Values",id:"providing-getmyweather-api-values",level:3},{value:"Interpreting the Return Package",id:"interpreting-the-return-package",level:3},{value:"Trust",id:"trust",level:4},{value:"Inserting the Return Package",id:"inserting-the-return-package",level:3},{value:"Troubleshooting and Errors",id:"troubleshooting-and-errors",level:3}];function o(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"about-this-article",children:"About this article"}),"\n",(0,i.jsxs)(t.p,{children:["A sample API document written for a fake weather application, GetMyWeather. GetMyWeather is a forecast service that shows forecast information at a time and place. This application is unique because it allows users to get the weather at different levels, from a state to an individual address, with the ",(0,i.jsx)(t.code,{children:"specificity"})," parameter. This document describes what the API is and how it can be used."]}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsx)(t.h2,{id:"getmyweather-api",children:"GetMyWeather API"}),"\n",(0,i.jsx)(t.h3,{id:"what-is-the-getmyweather-api",children:"What is the GetMyWeather API?"}),"\n",(0,i.jsxs)(t.p,{children:["GetMyWeather, published by GetMyWeather, Inc., is a micro forecast service that shows detailed forecast information for a given time and place. GetMyWeather is unique because it can be used to find the weather of an entire state to the weather exactly at your home address using its ",(0,i.jsx)(t.strong,{children:"specificity"})," parameter. This capability is\r\nwhy GetMyWeather is referred to as a \u201cmicro forecast\u201d service. Thus, GetMyWeather is ideal for sites that feature outdoor activity, such as camping or hiking sites."]}),"\n",(0,i.jsx)(t.p,{children:"GetMyWeather, Inc. offers a GetMyWeather API, which allows you to call and access the GetMyWeather service and embed it in your own website. This document details how you can connect to and implement the API."}),"\n",(0,i.jsx)(t.h3,{id:"registering-for-a-getmyweather-api-key",children:"Registering for a GetMyWeather API Key"}),"\n",(0,i.jsx)(t.p,{children:"You must have an authentication key to use the GetMyWeather API. To get a key:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Go to ",(0,i.jsx)(t.a,{href:"https://getmyweather.com",children:"GetMyWeather.com"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Follow the instructions to register for a key."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Costs are subject to usage, with further details on our site. A free key is available for application development and testing."}),"\n",(0,i.jsx)(t.h3,{id:"initializing-the-getmyweather-api",children:"Initializing the GetMyWeather API"}),"\n",(0,i.jsx)(t.p,{children:"The GetMyWeather API must only be initialized once per web session. To initialize the API, insert the following code into your webpage:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"<script type=\"text/javascript\"> \r\n    var weatherForecast; \r\n    function init() { \r\n    weatherForecast = new getWeather(document.getElementById('forecast')} \r\n<\/script>\n"})}),"\n",(0,i.jsx)(t.h3,{id:"calling-the-getmyweather-api",children:"Calling the GetMyWeather API"}),"\n",(0,i.jsx)(t.p,{children:"To call the API:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Insert the following into your webpage:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<script async defer src="https://www.getmyweather.com/getWeather?key=<YOUR_KEY>&callback=init&location=<LATITUDE>:<LONGITUDE>&specificity=<SPECIFICITY>&time=<TIME>"><\/script> \n'})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:["Provide appropriate values for the parameters above. For more information on GetMyWeather's parameters, see ",(0,i.jsx)(t.a,{href:"#providing-getmyweather-api-values",children:"Providing GetMyWeather API Values"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"providing-getmyweather-api-values",children:"Providing GetMyWeather API Values"}),"\n",(0,i.jsxs)(t.p,{children:["The GetMyWeather API has various parameters that ",(0,i.jsx)(t.strong,{children:"must"})," be provided per API call. For more information on calling the API, see ",(0,i.jsx)(t.a,{href:"#calling-the-getmyweather-api",children:"Calling the GetMyWeatherAPI"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The required parameters are:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Units"}),(0,i.jsx)(t.th,{children:"Other"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"key"})}),(0,i.jsx)(t.td,{children:"The API authentication key provided by GetMyWeather, Inc. upon registration."}),(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:["See ",(0,i.jsx)(t.a,{href:"#registering-for-a-getmyweather-api-key",children:"Registering for a GetMyWeather API Key"})," for more information."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"location"})}),(0,i.jsx)(t.td,{children:"The geographical location for the forecast."}),(0,i.jsx)(t.td,{children:"Latitude and longitude"}),(0,i.jsx)(t.td,{children:"ISO 6709"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"specificity"})}),(0,i.jsxs)(t.td,{children:["The radius of the area for the forecast, centered on the ",(0,i.jsx)(t.code,{children:"location"}),"."]}),(0,i.jsx)(t.td,{children:"Meters"}),(0,i.jsxs)(t.td,{children:["Minimum: 10 meters",(0,i.jsx)("br",{})," Maximum: 100,000 meters"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"time"})}),(0,i.jsx)(t.td,{children:"What time in the future at which to request the forecast."}),(0,i.jsx)(t.td,{children:"Hours"}),(0,i.jsx)(t.td,{children:"Decimals allowed"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"interpreting-the-return-package",children:"Interpreting the Return Package"}),"\n",(0,i.jsx)(t.p,{children:"GetMyWeather will return an HTML package on a successful call. Below is a sample repsonse."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<div class="forecast"> \r\n    <div class="temperature">78</div> \r\n    <div class="windspeed">15</div> \r\n    <div class="chanceRain">30</div> \r\n    <div class="trust">80</div> \r\n</div>\n'})}),"\n",(0,i.jsx)(t.p,{children:"The return parameters are:"}),"\n",(0,i.jsx)(t.admonition,{title:"Note",type:"info",children:(0,i.jsx)(t.p,{children:"The return package is static. To change the return parameters, you must call the API again with new input parameters."})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Units"}),(0,i.jsx)(t.th,{children:"Other"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"temperature"})}),(0,i.jsx)(t.td,{children:"The predicted degrees of the forecast."}),(0,i.jsx)(t.td,{children:"Fahrenheit"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"windspeed"})}),(0,i.jsx)(t.td,{children:"The predicted wind speed of the forecast."}),(0,i.jsx)(t.td,{children:"Miles per hour"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"chanceRain"})}),(0,i.jsx)(t.td,{children:"The predicted chance of rain of the forecast."}),(0,i.jsx)(t.td,{children:"A percentage value between 0-100."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"trust"})}),(0,i.jsx)(t.td,{children:"The degree of confidence the API has in its forecast prediction."}),(0,i.jsx)(t.td,{children:"A percentage value between 0-100."}),(0,i.jsxs)(t.td,{children:["0 is very unreliable and 100 is absolutely reliable. See ",(0,i.jsx)(t.a,{href:"#trust",children:"Trust"})," for more information."]})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"trust",children:"Trust"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"trust"})," is a return parameter unique to GetMyWeather, and it can be affected by ",(0,i.jsx)(t.code,{children:"specificity"})," and ",(0,i.jsx)(t.code,{children:"time"}),". Large values for ",(0,i.jsx)(t.code,{children:"specificity"})," and ",(0,i.jsx)(t.code,{children:"time"})," will return a ",(0,i.jsx)(t.strong,{children:"low"})," ",(0,i.jsx)(t.code,{children:"trust"})," value and vice versa."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"trust"})," is useful for displaying how reliable the forecast is to your website's users. For example, using ",(0,i.jsx)(t.code,{children:"trust"}),", you'll be abel to show users that this morning's forecast at the office has a 90% chance of occurring. On the other hand, a forecast two weeks from now over the entire state of California may only have a 10% chance of occurring."]}),"\n",(0,i.jsx)(t.h3,{id:"inserting-the-return-package",children:"Inserting the Return Package"}),"\n",(0,i.jsxs)(t.p,{children:["To insert the return package, include the empty element ",(0,i.jsx)(t.code,{children:'div id="forecast"></div>'})," in your HTML wherever you want your package to appear. Your browser will then replace the empty element with the return package."]}),"\n",(0,i.jsx)(t.h3,{id:"troubleshooting-and-errors",children:"Troubleshooting and Errors"}),"\n",(0,i.jsx)(t.p,{children:"If GetMyWeather cannot provide a forecast, it will return one of the following messages for troubleshooting purposes."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'"Invalid key"'}),"\n",(0,i.jsx)(t.li,{children:'"Invalid parameter format"'}),"\n",(0,i.jsx)(t.li,{children:'"Parameter out of range"'}),"\n",(0,i.jsx)(t.li,{children:'"Server unavailable"'}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>h});var i=r(6540);const n={},a=i.createContext(n);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);