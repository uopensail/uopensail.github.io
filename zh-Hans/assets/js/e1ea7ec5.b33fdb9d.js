"use strict";(self.webpackChunkuopensail_github_io=self.webpackChunkuopensail_github_io||[]).push([[8327],{5466:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"concepts/frequency-control","title":"\u9891\u63a7","description":"\u529f\u80fd\u6982\u8ff0","source":"@site/docs/concepts/frequency-control.md","sourceDirName":"concepts","slug":"/concepts/frequency-control","permalink":"/zh-Hans/docs/concepts/frequency-control","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concepts/frequency-control.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u5982\u4f55\u914d\u7f6eI2I\u53ec\u56de","permalink":"/zh-Hans/docs/best-practices/I2I-Recall-Configuration-Guide"},"next":{"title":"\u4ecb\u7ecd","permalink":"/zh-Hans/docs/concepts/intro"}}');var t=s(4848),c=s(8453);const o={},i="\u9891\u63a7",l={},d=[{value:"\u529f\u80fd\u6982\u8ff0",id:"\u529f\u80fd\u6982\u8ff0",level:2},{value:"\u6838\u5fc3\u7279\u6027",id:"\u6838\u5fc3\u7279\u6027",level:2}];function a(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"\u9891\u63a7",children:"\u9891\u63a7"})}),"\n",(0,t.jsx)(e.h2,{id:"\u529f\u80fd\u6982\u8ff0",children:"\u529f\u80fd\u6982\u8ff0"}),"\n",(0,t.jsx)(e.p,{children:"\u9891\u63a7\uff08Frequency Control\uff0c\u7b80\u79f0freq\uff09\u662f\u57fa\u4e8e\u7528\u6237\u5b9e\u65f6\u884c\u4e3a\u6570\u636e\u7684\u667a\u80fd\u8fc7\u6ee4\uff0c\u901a\u8fc7\u5206\u6790\u7528\u6237\u5728\u8bbe\u5b9a\u65f6\u95f4\u7a97\u53e3\u5185\u7684\u4ea4\u4e92\u884c\u4e3a\u9891\u6b21\uff0c\u81ea\u52a8\u62e6\u622a\u53ef\u80fd\u5f15\u8d77\u8d1f\u9762\u4f53\u9a8c\u7684\u91cd\u590d\u63a8\u8350\u5185\u5bb9\u3002\u5178\u578b\u5e94\u7528\u573a\u666f\u5305\u62ec\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7528\u62373\u5929\u5185\u89c2\u770b5\u6b21\u7684\u77ed\u89c6\u9891\u6682\u505c\u63a8\u8350"}),"\n",(0,t.jsx)(e.li,{children:"\u7528\u623724\u5c0f\u65f6\u5185\u5df2\u6d4f\u89c8\u7684\u76f4\u64ad\u7c7b\u76ee\u964d\u6743\u5904\u7406"}),"\n",(0,t.jsx)(e.li,{children:"\u7528\u62377\u5929\u5185\u91cd\u590d\u70b9\u51fb\u7684\u540c\u7c7b\u578b\u5546\u54c1\u81ea\u52a8\u8fc7\u6ee4"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u6838\u5fc3\u7279\u6027",children:"\u6838\u5fc3\u7279\u6027"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u4e1a\u52a1\u5f3a\u5173\u8054\u6027"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u4e0e\u63a8\u8350\u4e1a\u52a1\u573a\u666f\u6df1\u5ea6\u8026\u5408\uff0c\u652f\u6301\u4e2a\u6027\u5316\u7b56\u7565\u914d\u7f6e"}),"\n",(0,t.jsx)(e.li,{children:"\u52a8\u6001\u8c03\u8282\u63a8\u8350\u751f\u6001\uff0c\u5e73\u8861\u5185\u5bb9\u591a\u6837\u6027\u4e0e\u7528\u6237\u5174\u8da3\u5339\u914d\u5ea6"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u591a\u7ef4\u5ea6\u63a7\u5236"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-toml",children:'# \u7b56\u7565\u53c2\u6570\u77e9\u9635\uff08TOML\u914d\u7f6e\u793a\u4f8b\uff09\n[[Pipeline.Freq]] \nname = "3\u65e55\u5237\u9632\u62a4"  # \u5168\u5c40\u552f\u4e00\u7b56\u7565\u6807\u8bc6\u7b26\ntimespan  = 259200   # \u65f6\u95f4\u7a97\u53e3(\u79d2) \u2190 3\u5929\nfrequency = 5        # \u6700\u5927\u5141\u8bb8\u9891\u6b21\u9608\u503c\naction = "play"   # \u76d1\u63a7\u884c\u4e3a\u7c7b\u578b\uff08\u64ad\u653e/\u70b9\u51fb/\u5206\u4eab\u7b49\uff09\n'})}),"\n",(0,t.jsxs)(e.ol,{start:"3",children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u7b56\u7565\u53e0\u52a0\u80fd\u529b"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u652f\u6301\u591a\u7b56\u7565\u5e76\u884c\u6267\u884c"}),"\n"]}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>i});var r=s(6540);const t={},c=r.createContext(t);function o(n){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),r.createElement(c.Provider,{value:e},n.children)}}}]);