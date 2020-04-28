(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{115:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(124),c=t(118),i=t(119),s=t.n(i),m=(t(132),t(120)),o=t(121),u=t(108),d=t.n(u);function p(e){var a=e.siteConfig;return l.a.createElement("header",{className:s()("hero hero--primary",d.a.heroBanner,d.a.heroGraphback)},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3 text--left"},l.a.createElement("div",{className:d.a.heroImage},l.a.createElement("img",{src:"/img/logo.png",alt:"logo"})),l.a.createElement("p",{className:"hero__title"},a.tagline),l.a.createElement("ul",null,l.a.createElement("li",null,"Open Platform for Rapid Development of Volunteer Management Systems"),l.a.createElement("li",null,"Reference implementation to cover basic use cases"),l.a.createElement("li",null,"Out of the box components for Forms and Maps"),l.a.createElement("li",null,"Keycloak based security and Role based authentication"),l.a.createElement("li",null,"Live updates and tracking thanks to GraphQL subscriptions")),l.a.createElement("div",{className:d.a.buttons},l.a.createElement(o.a,{className:s()("button button--primary button--lg button--rounded",d.a.getStarted),to:Object(m.a)("docs/gettingstarted")},"Get Started"))))))}var E=t(109),g=t.n(E),f=[{title:l.a.createElement(l.a.Fragment,null,"Get reference app and define your data"),imageUrl:"img/input.png",description:l.a.createElement(l.a.Fragment,null)},{title:l.a.createElement(l.a.Fragment,null,"Use components and forms"),imageUrl:"img/config.png",description:l.a.createElement(l.a.Fragment,null)},{title:l.a.createElement(l.a.Fragment,null,"Deploy"),imageUrl:"img/rocket.png",description:l.a.createElement(l.a.Fragment,null)}];function v(e){var a=e.imageUrl,t=e.title,n=e.description,r=Object(m.a)(a);return l.a.createElement("div",{className:"text--center"},r&&l.a.createElement("div",{className:"text--center"},l.a.createElement("img",{className:g.a.featureImage,src:r,alt:t})),l.a.createElement("h3",{className:g.a.featureTitle},t),l.a.createElement("p",null,n))}function h(){return l.a.createElement("div",{className:g.a.splitContainer},l.a.createElement("div",{className:s()(g.a.leftSplit,g.a.featureSticky)},l.a.createElement("div",{className:g.a.stickyContent},l.a.createElement("h2",{className:"hero__subtitle"},"Open Volunteer Platform Workflow"),l.a.createElement("p",null,"Open Volunteer Platform lets you build and deploy applications to help your organization with all volunteering efforts. Simply define your business model for Volunteers and Recipients and Deploy it to Cloud in hours instead of days."))),l.a.createElement("div",{className:g.a.rightSplit},l.a.createElement("div",{className:s()(g.a.splitRow,g.a.before)}),f&&f.length&&f.map((function(e,a){return l.a.createElement("div",{className:g.a.splitRow,key:a},l.a.createElement(v,e))})),l.a.createElement("div",{className:s()(g.a.splitRow,g.a.after)})))}var N=t(110),b=t.n(N);function y(){const e=()=>{document.getElementById("underscore").classList.toggle("hidden")};return Object(n.useEffect)(()=>{const a=setInterval(e,400);return()=>clearInterval(a)}),l.a.createElement("div",{id:"underscore",className:b.a.underscore},"_")}function w({phrase:e}){let a=1,t=!1,r=!1;const c=async()=>{document.getElementById("text").innerHTML=e.substring(0,a);const n=t?m:s;await o(),i()||n()},i=()=>r||a===e.length+1&&!t||0===a&&t,s=()=>{a<e.length+1&&a++},m=()=>{a>0&&a--},o=async()=>{t||a!==e.length+1||await u(),t&&0===a&&await u()},u=()=>(t=!t,r=!0,new Promise(e=>{setTimeout(()=>{r=!1,e()},3e3)}));return Object(n.useEffect)(()=>{const e=setInterval(c,120);return()=>clearInterval(e)}),l.a.createElement("span",{id:"text"})}function k(){return l.a.createElement("div",null,l.a.createElement("div",{className:b.a.terminalHeader},l.a.createElement("p",null,"Quick start!")),l.a.createElement("div",{className:b.a.terminal},l.a.createElement("span",null,">\xa0\xa0"),l.a.createElement(w,{phrase:"npx openvp init yourproject"}),l.a.createElement(y,null)))}var O=t(111),C=t.n(O);function F(e){var a,t=e.open,n=e.close;return console.log(t),l.a.createElement("div",{className:s()(C.a.modalWindow,{"hide-modal":!t})},l.a.createElement("div",{className:C.a.modalBackground}),l.a.createElement("a",{href:"#video",className:C.a.close,onClick:n},"close"),l.a.createElement("div",{className:C.a.modalContent},l.a.createElement("div",{className:C.a.youtubeWrapper},l.a.createElement("iframe",((a={className:C.a.youtubeIFrame,frameBorder:"0",width:"560",height:"310",scrolling:"no",marginHeight:"0",marginWidth:"0",src:"https://www.youtube.com/embed/wmpEiffqxy8?autoplay=0"}).frameBorder="0",a.allowFullScreen=!0,a.align="middle",a)))))}function S(){var e=Object(n.useState)(!1),a=e[0],t=e[1],r=function(e){e.preventDefault(),t(!a)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(F,{open:a,close:r}),l.a.createElement("section",{id:"video",className:C.a.videoSection},l.a.createElement("div",{className:"text--center"},l.a.createElement("h2",{className:C.a.subtitle},"Open Volunteer Platform in 10 minutes"),l.a.createElement("div",{className:C.a.videoComponent},l.a.createElement("a",{href:"#",className:C.a.play,onClick:r},l.a.createElement("img",{src:Object(m.a)("img/play.png"),alt:""}))))))}a.default=function(){const e=Object(c.a)(),{siteConfig:a={}}=e;return l.a.createElement(r.a,{title:a.title,description:"Open Volunteer Platform <head />"},l.a.createElement(p,{siteConfig:a}),l.a.createElement(h,null),l.a.createElement(k,null),l.a.createElement(S,null))}}}]);