if(!self.define){let e,i={};const l=(l,r)=>(l=new URL(l+".js",r).href,i[l]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=i,document.head.appendChild(e)}else e=l,importScripts(l),i()})).then((()=>{let e=i[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(r,n)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const u=e=>l(e,s),t={module:{uri:s},exports:o,require:u};i[s]=Promise.all(r.map((e=>t[e]||u(e)))).then((e=>(n(...e),o)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/498.5cd02a38.css",revision:null},{url:"/css/app.90a3774c.css",revision:null},{url:"/fonts/Montserrat-VariableFont_wght.eaa5c372.ttf",revision:null},{url:"/img/auto.b5c5b42a.webp",revision:null},{url:"/img/auto350x350.0acf4fcb.webp",revision:null},{url:"/img/createSite.1049040b.webp",revision:null},{url:"/img/dezinsector.ad03bbf5.webp",revision:null},{url:"/img/dezinsector350x350.daa04bfe.webp",revision:null},{url:"/img/grid.083a2545.webp",revision:null},{url:"/img/grid350x350.0bb58b41.webp",revision:null},{url:"/img/icons.d17049d2.svg",revision:null},{url:"/img/lawyer.f650991b.webp",revision:null},{url:"/img/lawyer350x350.ef7d9bca.webp",revision:null},{url:"/img/meban.29fedc62.webp",revision:null},{url:"/img/meban350x350.eb852e59.webp",revision:null},{url:"/img/portfolio.07290078.webp",revision:null},{url:"/img/portfolio350x350.e89f7722.webp",revision:null},{url:"/img/zamokservis-angarsk350x350.f2aeb022.webp",revision:null},{url:"/index.html",revision:"ac08624ee933803084eba567f83f01b8"},{url:"/js/285.1f8d03ed.js",revision:null},{url:"/js/498.8be3e48f.js",revision:null},{url:"/js/999.71dfe63b.js",revision:null},{url:"/js/about.14b4ddb7.js",revision:null},{url:"/js/app.150981bb.js",revision:null},{url:"/js/chunk-vendors.0e240d45.js",revision:null},{url:"/manifest.json",revision:"fab2c40e24c73938e83f2d54c7c12216"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
