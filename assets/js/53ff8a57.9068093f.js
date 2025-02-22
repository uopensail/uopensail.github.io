"use strict";(self.webpackChunkuopensail_github_io=self.webpackChunkuopensail_github_io||[]).push([[6854],{4423:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>x,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"concepts/intro","title":"\u4ecb\u7ecd","description":"RecGo\u63a8\u8350\u7cfb\u7edf\uff1a\u4e00\u4e2a\u667a\u80fd\u5316\u7684\\"\u63a8\u8350\u5de5\u5382\\"","source":"@site/docs/concepts/intro.md","sourceDirName":"concepts","slug":"/concepts/intro","permalink":"/docs/concepts/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concepts/intro.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u9891\u63a7","permalink":"/docs/concepts/frequency-control"},"next":{"title":"\u7269\u6599\u6c60","permalink":"/docs/concepts/item-pool"}}');var l=s(4848),i=s(8453);const c={},t="\u4ecb\u7ecd",o={},d=[{value:"RecGo\u63a8\u8350\u7cfb\u7edf\uff1a\u4e00\u4e2a\u667a\u80fd\u5316\u7684&quot;\u63a8\u8350\u5de5\u5382&quot;",id:"recgo\u63a8\u8350\u7cfb\u7edf\u4e00\u4e2a\u667a\u80fd\u5316\u7684\u63a8\u8350\u5de5\u5382",level:3},{value:"\u4e00\u3001\u5de5\u5382\u7684\u539f\u6599\u8d27\u67b6\uff08\u7269\u6599\u6c60: Item Pool\uff09",id:"\u4e00\u5de5\u5382\u7684\u539f\u6599\u8d27\u67b6\u7269\u6599\u6c60-item-pool",level:4},{value:"\u4e8c\u3001\u591a\u6761\u667a\u80fd\u6d41\u6c34\u7ebf\uff08\u6d41\u6c34\u7ebf: Pipeline\uff09",id:"\u4e8c\u591a\u6761\u667a\u80fd\u6d41\u6c34\u7ebf\u6d41\u6c34\u7ebf-pipeline",level:4},{value:"\u4e09\u3001\u6210\u54c1\u8f93\u51fa\uff08API\u63a5\u53e3\uff09",id:"\u4e09\u6210\u54c1\u8f93\u51faapi\u63a5\u53e3",level:4}];function h(n){const e={code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"})}),"\n",(0,l.jsx)(e.h3,{id:"recgo\u63a8\u8350\u7cfb\u7edf\u4e00\u4e2a\u667a\u80fd\u5316\u7684\u63a8\u8350\u5de5\u5382",children:'RecGo\u63a8\u8350\u7cfb\u7edf\uff1a\u4e00\u4e2a\u667a\u80fd\u5316\u7684"\u63a8\u8350\u5de5\u5382"'}),"\n",(0,l.jsx)(e.p,{children:"\u672c\u7ae0\u8282\u4e3b\u8981\u662f\u5bf9\u63a8\u8350\u7cfb\u7edf\u7684\u6574\u4e2a\u6d41\u7a0b\u8fdb\u884c\u4e86\u7b80\u5355\u7684\u4ecb\u7ecd\uff0c\u5982\u679c\u4e4b\u524d\u5bf9\u8fd9\u4e2a\u65b9\u9762\u5df2\u7ecf\u5f88\u719f\u6089\u4e86\uff0c\u5c31\u53ef\u4ee5\u8df3\u8fc7\u8be5\u7ae0\u8282\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u60f3\u8c61\u4e00\u5bb6\u81ea\u52a8\u5316\u5de5\u5382(",(0,l.jsx)(e.strong,{children:"\u63a8\u8350\u573a\u666f: Scene"}),")\uff0c\u4e13\u95e8\u751f\u4ea7\u7528\u6237\u559c\u6b22\u7684\u63a8\u8350\u5185\u5bb9\u3002\u8fd9\u4e2a\u5de5\u5382\u7684\u8fd0\u4f5c\u6d41\u7a0b\u53ef\u4ee5\u5206\u89e3\u4e3a\u51e0\u4e2a\u5173\u952e\u6a21\u5757\uff1a"]}),"\n",(0,l.jsx)(e.h4,{id:"\u4e00\u5de5\u5382\u7684\u539f\u6599\u8d27\u67b6\u7269\u6599\u6c60-item-pool",children:"\u4e00\u3001\u5de5\u5382\u7684\u539f\u6599\u8d27\u67b6\uff08\u7269\u6599\u6c60: Item Pool\uff09"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u8d27\u67b6\u4e0a\u7684\u8d27\u7269"}),"\uff1a\u6240\u6709\u53ef\u4ee5\u88ab\u63a8\u8350\u7684\u7269\u54c1\uff08\u89c6\u9891/\u5546\u54c1\u7b49\uff09\u90fd\u5728\u8fd9\u91cc\uff0c\u5c31\u50cf\u8d85\u5e02\u8d27\u67b6\u4e0a\u6446\u6ee1\u4e86\u5546\u54c1\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u7b5b\u9009\u8fc7\u6ee4\u5668"}),'\uff1a\u53ef\u4ee5\u8bbe\u7f6e"\u5e03\u5c14\u6761\u4ef6"\uff08\u5982\uff1a\u53ea\u63a8\u8350\u4ef7\u683c\u4f4e\u4e8e100\u5143\u7684\u5546\u54c1\uff09\uff0c\u8fc7\u6ee4\u540e\u5f97\u5230\u7cbe\u51c6\u7684\u5019\u9009\u8d27\u67b6\u3002']}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u7279\u63a8\u52a0\u901f\u5305"}),'\uff1a\u67d0\u4e9b\u70ed\u95e8\u5546\u54c1\u4f1a\u88ab\u8d34\u4e0a"\u4f18\u5148\u63a8\u8350"\u6807\u7b7e\uff0c\u5c31\u50cf\u8d85\u5e02\u628a\u4fc3\u9500\u5546\u54c1\u6446\u653e\u5728\u663e\u773c\u4f4d\u7f6e\u3002']}),"\n"]}),"\n",(0,l.jsx)(e.h4,{id:"\u4e8c\u591a\u6761\u667a\u80fd\u6d41\u6c34\u7ebf\u6d41\u6c34\u7ebf-pipeline",children:"\u4e8c\u3001\u591a\u6761\u667a\u80fd\u6d41\u6c34\u7ebf\uff08\u6d41\u6c34\u7ebf: Pipeline\uff09"}),"\n",(0,l.jsx)(e.p,{children:"\u5de5\u5382\u5185\u6709\u4e0d\u540c\u6d41\u6c34\u7ebf\uff0c\u6bcf\u6761\u90fd\u662f\u72ec\u7acb\u7684\u751f\u4ea7\u8f66\u95f4\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u6309\u6bd4\u4f8b\u5f00\u5de5"}),"\uff1a\u4e0d\u540c\u6d41\u6c34\u7ebf\u53ef\u80fd\u5904\u7406\u4e0d\u540c\u7528\u6237\u7fa4\u4f53\uff08\u4f8b\u5982\uff1a80%\u6d41\u91cf\u8d70A\u7ebf\uff0c20%\u8d70B\u7ebf\uff09"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u56db\u9053\u6838\u5fc3\u5de5\u5e8f"}),"\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"           \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \n           \u2502 \u53ec\u56de\u751f\u4ea7\u7ebf \u2502\u2192 \u521d\u7b5b500\u4ef6\u5019\u9009\u5546\u54c1  \n           \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \n                  \u2193 \n           \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \n           \u2502 \u53ec\u56de\u751f\u4ea7\u7ebf \u2502\u2192 \u521d\u7b5b500\u4ef6\u5019\u9009\u5546\u54c1  \n           \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \n                  \u2193   \n           \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \n           \u2502 \u6392\u5e8f\u52a0\u5de5\u533a \u2502\u2192 \u7cbe\u7ec6\u6253\u5206\u5e76\u6392\u51faTOP100  \n           \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \n                  \u2193  \n           \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \n           \u2502 \u91cd\u6392\u5305\u88c5\u7ad9 \u2502\u2192 \u786e\u4fdd\u7ed3\u679c\u591a\u6837\u6027  \n           \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \n"})}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u5b89\u68c0\u95e8\uff08\u9891\u63a7: Frequency Control\uff09"}),"\uff1a\u6839\u636e\u7528\u6237\u8fd1\u671f\u884c\u4e3a\u62e6\u622a\u4e0d\u5408\u9002\u63a8\u8350\uff08\u5982\uff1a\u7528\u62373\u5929\u5185\u770b\u8fc75\u6b21\u7684\u89c6\u9891\uff0c\u6682\u505c\u63a8\u8350\uff09"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u5bfb\u5b9d\u673a\u5668\u4eba\uff08\u53ec\u56de: Recall\uff09"}),"\uff1a"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u6807\u7b7e\u5bfb\u5b9d\uff08\u5339\u914d\u53ec\u56de: Match Recall\uff09"}),'\uff1a\u6839\u636e\u7528\u6237\u7279\u5f81\uff08\u5982\uff1a\u6027\u522b/\u5174\u8da3\u6807\u7b7e\uff09\u5728\u7d22\u5f15\u5e93\u641c\u7d22\u76f8\u5173\u7269\u54c1\uff08\u5982\uff1a\u7528\u7528\u6237\u5e74\u9f84+\u57ce\u5e02\u751f\u6210\u67e5\u8be2\u952e\uff0c\u6700\u591a\u627e200\u4ef6\u8d27"\uff09']}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"AI\u5bfb\u5b9d\uff08\u6a21\u578b\u53ec\u56de: Model Recall\uff09"}),'\uff1a\u7528AI\u6a21\u578b\u9884\u6d4b\u7528\u6237\u559c\u597d\uff0c\u7c7b\u4f3c"\u731c\u4f60\u559c\u6b22"\u529f\u80fd']}),"\n"]}),"\n",(0,l.jsxs)(e.ol,{start:"3",children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u667a\u80fd\u8bc4\u5206\u673a\uff08\u6392\u5e8f: Rank\uff09"}),"\uff1a"]}),"\n"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u89c4\u5219\u6253\u5206"}),"\uff1a\u6309\u9884\u8bbe\u516c\u5f0f\u8ba1\u7b97\u5f97\u5206\uff08\u5982\uff1a\u70ed\u5ea6=\u64ad\u653e\u91cf\xd70.6+\u70b9\u8d5e\u91cf\xd70.4\uff09"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"AI\u8bc4\u5206"}),"\uff1a\u7528\u66f4\u590d\u6742\u7684AI\u6a21\u578b\u8fdb\u884c\u7cbe\u7ec6\u6392\u5e8f"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u901a\u9053\u4f18\u5148\u7ea7"}),"\uff1a\u8bbe\u7f6e\u4e0d\u540c\u53ec\u56de\u6e20\u9053\u7684\u4f18\u5148\u987a\u5e8f\uff08\u5982\uff1a\u5148\u663e\u793aAI\u63a8\u8350\u7ed3\u679c\uff09"]}),"\n"]}),"\n",(0,l.jsxs)(e.ol,{start:"4",children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u8d28\u68c0\u5173\u5361\uff08\u91cd\u6392: Rerank\uff09"}),"\uff1a"]}),"\n"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u9632\u6b62\u63a8\u8350\u7ed3\u679c\u5355\u4e00\u5316\uff08\u5982\uff1a\u540c\u7c7b\u578b\u5546\u54c1\u6700\u591a\u51fa\u73b03\u6b21\uff09"}),"\n",(0,l.jsx)(e.li,{children:"\u53ef\u8bbe\u7f6e\u591a\u4e2a\u8d28\u68c0\u89c4\u5219\uff08\u5982\uff1a\u54c1\u724c\u91cd\u590d\u6b21\u6570\u3001\u4ef7\u683c\u533a\u95f4\u5206\u5e03\uff09"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h4,{id:"\u4e09\u6210\u54c1\u8f93\u51faapi\u63a5\u53e3",children:"\u4e09\u3001\u6210\u54c1\u8f93\u51fa\uff08API\u63a5\u53e3\uff09"}),"\n",(0,l.jsx)(e.p,{children:"\u6700\u7ec8\u751f\u6210\u7684\u63a8\u8350\u5217\u8868\u4f1a\u901a\u8fc7\u6807\u51c6\u63a5\u53e3\uff08\u5c31\u50cf\u5de5\u5382\u7684\u51fa\u8d27\u901a\u9053\uff09\u63d0\u4f9b\u7ed9APP/\u7f51\u7ad9\u4f7f\u7528\u3002\u6bcf\u4e2a\u63a8\u8350\u573a\u666f\uff08\u89c6\u9891\u6d41/\u7535\u5546\u7ad9\u7b49\uff09\u90fd\u6709\u4e13\u5c5e\u7684\u51fa\u8d27\u6e20\u9053\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-mermaid",children:"graph TD\n    A[\u6d41\u6c34\u7ebf] --\x3e B{\u6761\u4ef6\u5224\u65ad}\n    B --\x3e|\u662f| C[\u6267\u884c\u64cd\u4f5c1]\n    B --\x3e|\u5426| D[\u6267\u884c\u64cd\u4f5c2]\n    C --\x3e E[\u7ed3\u675f]\n    D --\x3e E\n"})})]})}function x(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(h,{...n})}):h(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>t});var r=s(6540);const l={},i=r.createContext(l);function c(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);