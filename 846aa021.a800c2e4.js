(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{109:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return u}));var r=t(1),a=t(6),o=(t(0),t(123)),c={id:"serverfullstack",title:"Out of the box Node.js server"},l={id:"serverfullstack",title:"Out of the box Node.js server",description:"# Open Volunteer Full Stack Server",source:"@site/../docs/full_stack_server.md",permalink:"/docs/serverfullstack",editUrl:"https://github.com/aerogear/OpenVolunteerPlatform/edit/master/website/../docs/full_stack_server.md",sidebar:"docs",previous:{title:"OVP client reference",permalink:"/docs/clientref"},next:{title:"Data Model",permalink:"/docs/datamodel"}},i=[{value:"Integrations",id:"integrations",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Docker Image",id:"docker-image",children:[{value:"Running together with required services",id:"running-together-with-required-services",children:[]}]}],s={rightToc:i};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"open-volunteer-full-stack-server"},"Open Volunteer Full Stack Server"),Object(o.b)("p",null,"Node.js implementation for GraphQL based API"),Object(o.b)("h2",{id:"integrations"},"Integrations"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Graphback (Apollo GraphQL template)"),Object(o.b)("li",{parentName:"ul"},"Keycloak (Authentication)"),Object(o.b)("li",{parentName:"ul"},"AMQ Online (MQTT)"),Object(o.b)("li",{parentName:"ul"},"MongoDB")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"This project has been created using Graphback.\nRun the project using the following steps:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Install")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"yarn install\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Start the Mongo database and MQTT client")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"docker-compose up -d\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Start the server")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"yarn start:server\n")),Object(o.b)("h2",{id:"docker-image"},"Docker Image"),Object(o.b)("p",null,"Server comes with docker file that can be used to build ready to use image.\nReference application is actively tracked and pushed to docker registry"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"docker.io/wtrocki/openvolunteer")),Object(o.b)("p",null,"Docker image supports following environment variables:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"## MongoDB connection\nMONGO_USER=user\nMONGO_PASSWORD=password\nMONGO_ADMIN_PASSWORD=password\nMONGO_DATABASE=showcase\nMONGO_HOST=\n\n## MQTT with AMQ\nMQTT_HOST=\nMQTT_PORT=\nMQTT_PASSWORD=\nMQTT_USERNAME=\nMQTT_PROTOCOL= \n\n# Hack to enable keycloak with self signed certs\n# don't do it in production\nNODE_TLS_REJECT_UNAUTHORIZED=0 \n\nBACKUP_DEMO_DATA=true\nUSE_DEMO_DATA=false\n")),Object(o.b)("h3",{id:"running-together-with-required-services"},"Running together with required services"),Object(o.b)("p",null,"Example docker-compose that can be used to launch OpenVolunter application"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'version: \'3\'\nservices:\n  server:\n        image: wtrocki/openvolunteer\n        environment:\n            - MONGO_USER=user\n            - MONGO_PASSWORD=password\n            - MONGO_ADMIN_PASSWORD=password\n            - MONGO_DATABASE=showcase\n            - MONGO_HOST=\n            - BACKUP_DEMO_DATA=false\n            - USE_DEMO_DATA=true\n  mongodb:\n        image: centos/mongodb-34-centos7\n        container_name: "mongodb"\n        environment:\n          - MONGODB_USER=user\n          - MONGODB_PASSWORD=password\n          - MONGODB_ADMIN_PASSWORD=password\n          - MONGODB_DATABASE=showcase\n        ports:\n            - 27017:27017\n  keycloak:\n    image: jboss/keycloak:3.4.3.Final\n    ports:\n      - "8080:8080"\n    environment:\n      DB_VENDOR: h2\n      KEYCLOAK_USER: admin\n      KEYCLOAK_PASSWORD: admin\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"NOTE: You need to execute npm run keycloak:config or import realm from ./integrations/keycloak/realm-export.json as in local machine to be able to use docker compose.")))}u.isMDXComponent=!0},123:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},O={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,d=p["".concat(c,".").concat(b)]||p[b]||O[b]||o;return t?a.a.createElement(d,l({ref:n},s,{components:t})):a.a.createElement(d,l({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=b;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);