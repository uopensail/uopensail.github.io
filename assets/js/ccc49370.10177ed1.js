"use strict";(self.webpackChunkuopensail_github_io=self.webpackChunkuopensail_github_io||[]).push([[3249],{1021:(e,n,t)=>{t.d(n,{A:()=>g});var i=t(6540),a=t(3115);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):i.push(a)})),i}function r(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=r({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function o(e){const n=e.getBoundingClientRect();return n.top===n.bottom?o(e.parentNode):n}function l(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>o(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.p)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,i.useRef)(void 0),t=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:s,maxHeadingLevel:r}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),o=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let a=n;a<=t;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:s,maxHeadingLevel:r}),c=l(o,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}var u=t(6289),m=t(4848);function f(e){let{toc:n,className:t,linkClassName:i,isChild:a}=e;return n.length?(0,m.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(f,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const h=i.memo(f);function g(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:u,...f}=e;const g=(0,a.p)(),p=c??g.tableOfContents.minHeadingLevel,x=u??g.tableOfContents.maxHeadingLevel,v=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>r({toc:s(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:p,maxHeadingLevel:x});return d((0,i.useMemo)((()=>{if(o&&l)return{linkClassName:o,linkActiveClassName:l,minHeadingLevel:p,maxHeadingLevel:x}}),[o,l,p,x])),(0,m.jsx)(h,{toc:v,className:t,linkClassName:o,...f})}},7191:(e,n,t)=>{t.r(n),t.d(n,{default:()=>b});t(6540);var i=t(4164),a=t(1082),s=t(204),r=t(3750),o=t(569),l=t(3473),c=t(539),d=t(1865),u=t(4848);function m(e){const{nextItem:n,prevItem:t}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,u.jsx)(d.A,{...t,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),n&&(0,u.jsx)(d.A,{...n,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function f(){const{assets:e,metadata:n}=(0,r.e7)(),{title:t,description:i,date:s,tags:o,authors:l,frontMatter:c}=n,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(a.be,{title:c.title_meta??t,description:i,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:s}),l.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),o.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:o.map((e=>e.label)).join(",")})]})}var h=t(7143);function g(){const e=(0,r.J_)();return(0,u.jsx)(h.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var p=t(7959),x=t(8467);function v(e){let{sidebar:n,children:t}=e;const{metadata:i,toc:a}=(0,r.e7)(),{nextItem:s,prevItem:c,frontMatter:d}=i,{hide_table_of_contents:f,toc_min_heading_level:h,toc_max_heading_level:g}=d;return(0,u.jsxs)(o.A,{sidebar:n,toc:!f&&a.length>0?(0,u.jsx)(p.A,{toc:a,minHeadingLevel:h,maxHeadingLevel:g}):void 0,children:[(0,u.jsx)(x.A,{metadata:i}),(0,u.jsx)(l.A,{children:t}),(s||c)&&(0,u.jsx)(m,{nextItem:s,prevItem:c})]})}function b(e){const n=e.content;return(0,u.jsx)(r.in,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(a.e3,{className:(0,i.A)(s.G.wrapper.blogPages,s.G.page.blogPostPage),children:[(0,u.jsx)(f,{}),(0,u.jsx)(g,{}),(0,u.jsx)(v,{sidebar:e.sidebar,children:(0,u.jsx)(n,{})})]})})}},7959:(e,n,t)=>{t.d(n,{A:()=>c});t(6540);var i=t(4164),a=t(1021);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var r=t(4848);const o="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,r.jsx)("div",{className:(0,i.A)(s.tableOfContents,"thin-scrollbar",n),children:(0,r.jsx)(a.A,{...t,linkClassName:o,linkActiveClassName:l})})}},8467:(e,n,t)=>{t.d(n,{A:()=>x});t(6540);var i=t(4164),a=t(539),s=t(7143),r=t(4848);function o(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(s.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function d(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function u(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}var m=t(204),f=t(2362);function h(e){let{className:n}=e;return(0,r.jsx)(f.A,{type:"caution",title:(0,r.jsx)(d,{}),className:(0,i.A)(n,m.G.common.draftBanner),children:(0,r.jsx)(u,{})})}function g(e){let{className:n}=e;return(0,r.jsx)(f.A,{type:"caution",title:(0,r.jsx)(o,{}),className:(0,i.A)(n,m.G.common.unlistedBanner),children:(0,r.jsx)(l,{})})}function p(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(g,{...e})]})}function x(e){let{metadata:n}=e;const{unlisted:t,frontMatter:i}=n;return(0,r.jsxs)(r.Fragment,{children:[(t||i.unlisted)&&(0,r.jsx)(p,{}),i.draft&&(0,r.jsx)(h,{})]})}}}]);