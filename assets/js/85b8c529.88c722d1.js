"use strict";(self.webpackChunkuopensail_github_io=self.webpackChunkuopensail_github_io||[]).push([[8239],{2821:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>c,metadata:()=>r,toc:()=>x});const r=JSON.parse('{"id":"concepts/overview","title":"RecGo\u63a8\u8350\u7cfb\u7edf\u67b6\u6784\u7b80\u4ecb","description":"\u672c\u7cfb\u7edf\u91c7\u7528\u6a21\u5757\u5316\u5de5\u4e1a\u6d41\u6c34\u7ebf\u8bbe\u8ba1\uff0c\u5c06\u63a8\u8350\u6d41\u7a0b\u89e3\u8026\u4e3a\u516d\u5927\u6838\u5fc3\u7ec4\u4ef6\uff0c\u5f62\u6210\u5b8c\u6574\u7684\u63a8\u8350\u751f\u4ea7\u94fe\u8def\uff1a","source":"@site/docs/concepts/overview.md","sourceDirName":"concepts","slug":"/concepts/overview","permalink":"/docs/concepts/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concepts/overview.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u7269\u6599\u6c60","permalink":"/docs/concepts/item-pool"},"next":{"title":"\u6d41\u6c34\u7ebf","permalink":"/docs/concepts/pipeline"}}');var i=s(4848),t=s(8453);const c={},o="RecGo\u63a8\u8350\u7cfb\u7edf\u67b6\u6784\u7b80\u4ecb",l={},x=[];function p(e){const n={br:"br",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"recgo\u63a8\u8350\u7cfb\u7edf\u67b6\u6784\u7b80\u4ecb",children:"RecGo\u63a8\u8350\u7cfb\u7edf\u67b6\u6784\u7b80\u4ecb"})}),"\n",(0,i.jsx)(n.p,{children:"\u672c\u7cfb\u7edf\u91c7\u7528\u6a21\u5757\u5316\u5de5\u4e1a\u6d41\u6c34\u7ebf\u8bbe\u8ba1\uff0c\u5c06\u63a8\u8350\u6d41\u7a0b\u89e3\u8026\u4e3a\u516d\u5927\u6838\u5fc3\u7ec4\u4ef6\uff0c\u5f62\u6210\u5b8c\u6574\u7684\u63a8\u8350\u751f\u4ea7\u94fe\u8def\uff1a"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"1. \u7269\u6599\u6c60\uff08Item Pool\uff09"}),(0,i.jsx)(n.br,{}),"\n",'\u4f5c\u4e3a\u7cfb\u7edf\u7684"\u539f\u6599\u4ed3\u5e93"\uff0c\u8d1f\u8d23\u5546\u54c1\u5b58\u50a8\u3001\u8d28\u91cf\u8fc7\u6ee4\u3002\u901a\u8fc7\u5e93\u5b58\u72b6\u6001\u3001\u65f6\u6548\u6027\u7b49\u4e1a\u52a1\u89c4\u5219\u7b5b\u9009\u53ef\u63a8\u8350\u5546\u54c1\uff0c\u6784\u5efa\u9ad8\u8d28\u91cf\u5019\u9009\u5546\u54c1\u5e93\u3002']}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2. \u6d41\u6c34\u7ebf\uff08Pipeline\uff09"}),(0,i.jsx)(n.br,{}),"\n",'\u626e\u6f14"\u751f\u4ea7\u8c03\u5ea6\u4e2d\u5fc3"\u89d2\u8272\uff0c\u901a\u8fc7\u53ef\u7f16\u6392\u7684\u6d41\u7a0b\u6a21\u677f\u534f\u8c03\u5404\u7ec4\u4ef6\u5de5\u4f5c\u3002\u652f\u6301\u591a\u7b56\u7565AB\u5b9e\u9a8c\uff0c\u6839\u636e\u7528\u6237\u7c7b\u578b\u52a8\u6001\u5206\u914d\u6d41\u91cf\u81f3\u4e0d\u540c\u7b56\u7565\u7ec4\u5408\uff08\u5982\u4fdd\u5b88\u63a8\u8350\u3001\u65b0\u54c1\u63a2\u7d22\u3001\u4fc3\u9500\u5bfc\u8d2d\uff09\uff0c\u5b9e\u73b0\u7b56\u7565\u7684\u7075\u6d3b\u90e8\u7f72\u4e0e\u7070\u5ea6\u53d1\u5e03\u3002']}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"3. \u9891\u63a7\u7cfb\u7edf\uff08Frequency Control\uff09"}),(0,i.jsx)(n.br,{}),"\n",'\u627f\u62c5"\u7528\u6237\u4f53\u9a8c\u5b88\u62a4\u8005"\u804c\u8d23\uff0c\u57fa\u4e8e\u65f6\u95f4\u6ed1\u52a8\u7a97\u53e3\u5206\u6790\u7528\u6237\u5386\u53f2\u884c\u4e3a\uff0c\u5bf9\u91cd\u590d\u51fa\u73b0\u7684\u5546\u54c1/\u7c7b\u76ee\u8fdb\u884c\u667a\u80fd\u62e6\u622a\u3002\u91c7\u7528\u5206\u7ea7\u7ba1\u63a7\u7b56\u7565\uff0c\u5bf9\u9ad8\u4ef7\u5546\u54c1\u5b9e\u65bd\u4e25\u683c\u9891\u63a7\uff0c\u5bf9\u5feb\u6d88\u54c1\u9002\u5f53\u653e\u5bbd\u9650\u5236\u3002']}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"4. \u53ec\u56de\u7cfb\u7edf\uff08Recall\uff09"}),(0,i.jsx)(n.br,{}),"\n",'\u4f5c\u4e3a"\u5019\u9009\u96c6\u751f\u4ea7\u8f66\u95f4"\uff0c\u5305\u542b\u5339\u914d\u53ec\u56de\u4e0e\u6a21\u578b\u53ec\u56de\u53cc\u5f15\u64ce\u3002\u5339\u914d\u53ec\u56de\u901a\u8fc7\u7528\u6237\u663e\u6027\u7279\u5f81\u5b9e\u73b0\u7cbe\u51c6\u68c0\u7d22\uff0c\u6a21\u578b\u53ec\u56de\u5229\u7528\u5d4c\u5165\u5411\u91cf\u6355\u6349\u6df1\u5c42\u5174\u8da3\uff0c\u4e24\u8005\u534f\u540c\u4fdd\u969c\u53ec\u56de\u7ed3\u679c\u7684\u8986\u76d6\u7387\u4e0e\u76f8\u5173\u6027\u3002']}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"5. \u6392\u5e8f\u7cfb\u7edf\uff08Rank\uff09"}),(0,i.jsx)(n.br,{}),"\n",'\u62c5\u4efb"\u5546\u54c1\u8d28\u91cf\u68c0\u6d4b\u5b98"\uff0c\u91c7\u7528\u89c4\u5219+\u6a21\u578b\u53cc\u9636\u6bb5\u6392\u5e8f\u3002\u89c4\u5219\u5c42\u5feb\u901f\u6267\u884c\u8fd0\u8425\u7b56\u7565\uff08\u5982\u4fc3\u9500\u52a0\u6743\uff09\uff0c\u6a21\u578b\u5c42\u901a\u8fc7CTR\u9884\u4f30\u8fdb\u884c\u7cbe\u7ec6\u5316\u6253\u5206\uff0c\u517c\u987e\u4e1a\u52a1\u76ee\u6807\u4e0e\u7528\u6237\u4f53\u9a8c\u7684\u5e73\u8861\u3002']}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"6. \u91cd\u6392\u7cfb\u7edf\uff08Rerank\uff09"}),(0,i.jsx)(n.br,{}),"\n",'\u4f5c\u4e3a"\u6700\u7ec8\u88c5\u914d\u7ebf"\uff0c\u901a\u8fc7\u591a\u6837\u6027\u7ea6\u675f\u3001\u75b2\u52b3\u5ea6\u8870\u51cf\u7b49\u7b56\u7565\u4f18\u5316\u5217\u8868\u5c55\u793a\u6548\u679c\u3002\u4fdd\u969c\u63a8\u8350\u7ed3\u679c\u5728\u54c1\u724c\u3001\u4ef7\u683c\u5e26\u3001\u7c7b\u76ee\u7b49\u7ef4\u5ea6\u7684\u5408\u7406\u5206\u5e03\uff0c\u907f\u514d\u540c\u8d28\u5316\u63a8\u8350\u5e26\u6765\u7684\u7528\u6237\u4f53\u9a8c\u4e0b\u964d\u3002']}),"\n",(0,i.jsx)(n.p,{children:"\u6574\u4e2a\u7cfb\u7edf\u901a\u8fc7API\u7f51\u5173\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\uff0c\u63a5\u6536\u7528\u6237\u7279\u5f81\u4e0e\u4e0a\u4e0b\u6587\u53c2\u6570\u540e\uff0c\u4f9d\u6b21\u6267\u884c\u9891\u63a7\u8fc7\u6ee4\u2192\u591a\u8def\u53ec\u56de\u2192\u6df7\u5408\u6392\u5e8f\u2192\u591a\u6837\u6027\u8c03\u6574\u7684\u6807\u51c6\u5316\u751f\u4ea7\u6d41\u7a0b\uff0c\u6700\u7ec8\u8f93\u51fa30-50\u4e2a\u6709\u5e8f\u5546\u54c1ID\u5217\u8868\uff0c\u54cd\u5e94\u5ef6\u8fdf\u63a7\u5236\u5728200ms\u4ee5\u5185\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mermaid",children:"\ngraph TD\n    A[\u7528\u6237\u8bf7\u6c42] --\x3e B{\u6d41\u91cf\u5206\u914d}\n    B --\x3e|Pipeline 1| C1[Pipeline 1]\n    B --\x3e|Pipeline 2| D1[Pipeline 2]\n    B --\x3e|Pipeline 3| E1[Pipeline 3]\n\n    subgraph Pipeline 1\n        C1 --\x3e C2{\u5e76\u884c\u9891\u63a7}\n        C2 --\x3e C21[\u9891\u63a71]\n        C2 --\x3e C22[\u9891\u63a72]\n        C2 --\x3e C23[\u9891\u63a73]\n        C21 --\x3e C3{\u5e76\u884c\u53ec\u56de}\n        C22 --\x3e C3\n        C23 --\x3e C3\n        C3 --\x3e C31[\u5339\u914d\u53ec\u56de]\n        C3 --\x3e C32[\u6a21\u578b\u53ec\u56de]\n        C31 --\x3e C4[\u6a21\u578b\u6392\u5e8f]\n        C32 --\x3e C4\n        C4 --\x3e C5{\u5e76\u884c\u91cd\u6392}\n        C5 --\x3e C51[\u6253\u6563]\n        C5 --\x3e C52[\u8c03\u6743]\n        C5 --\x3e C53[\u5f3a\u63d2]\n        C51 --\x3e C6[\u63a8\u8350\u7ed3\u679c]\n        C52 --\x3e C6\n        C53 --\x3e C6\n    end\n\n    subgraph Pipeline 2\n        D1 --\x3e D2{\u5e76\u884c\u9891\u63a7}\n        D2 --\x3e D21[\u9891\u63a74]\n        D2 --\x3e D22[\u9891\u63a75]\n        D21 --\x3e D3{\u5e76\u884c\u53ec\u56de}\n        D22 --\x3e D3\n        D3 --\x3e D31[\u5339\u914d\u53ec\u56de]\n        D3 --\x3e D32[\u6a21\u578b\u53ec\u56de]\n        D31 --\x3e D4[\u6a21\u578b\u6392\u5e8f]\n        D32 --\x3e D4\n        D4 --\x3e D5{\u5e76\u884c\u91cd\u6392}\n        D5 --\x3e D51[\u6253\u6563]\n        D5 --\x3e D52[\u8c03\u6743]\n        D51 --\x3e D6[\u63a8\u8350\u7ed3\u679c]\n        D52 --\x3e D6\n    end\n\n    subgraph Pipeline 3\n        E1 --\x3e E2{\u5e76\u884c\u9891\u63a7}\n        E2 --\x3e E21[\u9891\u63a75]\n        E2 --\x3e E22[\u9891\u63a76]\n        E21 --\x3e E3{\u5e76\u884c\u53ec\u56de}\n        E22 --\x3e E3\n        E3 --\x3e E31[\u5339\u914d\u53ec\u56de]\n        E3 --\x3e E32[\u6a21\u578b\u53ec\u56de]\n        E31 --\x3e E4[\u89c4\u5219\u6392\u5e8f]\n        E32 --\x3e E4\n        E4 --\x3e E5{\u5e76\u884c\u91cd\u6392}\n        E5 --\x3e E51[\u6253\u6563]\n        E5 --\x3e E52[\u8c03\u6743]\n        E51 --\x3e E6[\u63a8\u8350\u7ed3\u679c]\n        E52 --\x3e E6\n    end\n\n    classDef pipeline1 fill:#e6f3ff,stroke:#4d90fe\n    classDef pipeline2 fill:#e6ffe6,stroke:#34a853\n    classDef pipeline3 fill:#fff3e6,stroke:#f9ab00\n    classDef freqCtrl fill:#ffe6e6,stroke:#dc3545\n    classDef rerank fill:#e6ffe6,stroke:#28a745\n\n    class C2,D2,E2 freqCtrl\n    class C5,D5,E5 rerank\n    class C1,C3,C4,C6 pipeline1\n    class D1,D3,D4,D6 pipeline2\n    class E1,E3,E4,E6 pipeline3\n"})})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var r=s(6540);const i={},t=r.createContext(i);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);