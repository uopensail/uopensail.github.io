"use strict";(self.webpackChunkuopensail_github_io=self.webpackChunkuopensail_github_io||[]).push([[7086],{6141:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"concepts/recall","title":"\u53ec\u56de","description":"\u5b9a\u4f4d","source":"@site/docs/concepts/recall.md","sourceDirName":"concepts","slug":"/concepts/recall","permalink":"/docs/concepts/recall","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concepts/recall.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u6392\u5e8f","permalink":"/docs/concepts/rank"},"next":{"title":"\u91cd\u6392","permalink":"/docs/concepts/rerank"}}');var r=l(4848),c=l(8453);const t={},i="\u53ec\u56de",a={},o=[{value:"\u5b9a\u4f4d",id:"\u5b9a\u4f4d",level:2},{value:"\u6838\u5fc3\u67b6\u6784",id:"\u6838\u5fc3\u67b6\u6784",level:2},{value:"1. \u5339\u914d\u53ec\u56de (Match Recall)",id:"1-\u5339\u914d\u53ec\u56de-match-recall",level:3},{value:"2. \u6a21\u578b\u53ec\u56de (Model Recall)",id:"2-\u6a21\u578b\u53ec\u56de-model-recall",level:3},{value:"\u7cfb\u7edf\u7279\u6027",id:"\u7cfb\u7edf\u7279\u6027",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u53ec\u56de",children:"\u53ec\u56de"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5b9a\u4f4d",children:"\u5b9a\u4f4d"}),"\n",(0,r.jsx)(n.p,{children:"\u53ec\u56de\u5c42\u4f5c\u4e3a\u63a8\u8350\u7cfb\u7edf\u7684\u7b2c\u4e00\u7ea7\u6f0f\u6597\uff0c\u6838\u5fc3\u4f7f\u547d\u662f\u6570\u4ee5\u4e07\u8ba1\u7684\u7269\u6599\u6c60\u4e2d\u9ad8\u6548\u7b5b\u9009\u51fa\u5343\u7ea7\u5019\u9009\u96c6\uff0c\u9700\u540c\u65f6\u6ee1\u8db3\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u9ad8\u8986\u76d6\u7387\uff1a\u6355\u6349\u7528\u623790%+\u6f5c\u5728\u5174\u8da3\u70b9"}),"\n",(0,r.jsx)(n.li,{children:"\u4f4e\u5ef6\u8fdf\uff1a\u5e73\u5747\u54cd\u5e94\u65f6\u95f4<20ms"}),"\n",(0,r.jsx)(n.li,{children:"\u591a\u6837\u6027\uff1a\u786e\u4fdd\u5019\u9009\u96c6\u8986\u76d620+\u5174\u8da3\u7ef4\u5ea6"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6838\u5fc3\u67b6\u6784",children:"\u6838\u5fc3\u67b6\u6784"}),"\n",(0,r.jsx)(n.mermaid,{value:"graph TD\n    A[\u7528\u6237\u7279\u5f81\u5de5\u7a0b] --\x3e B{\u53ec\u56de\u7b56\u7565\u8def\u7531}\n    B --\x3e C[\u5339\u914d\u53ec\u56de]\n    B --\x3e D[\u6a21\u578b\u53ec\u56de]\n    C --\x3e E[\u5012\u6392\u7d22\u5f15\u67e5\u8be2]\n    D --\x3e F[\u5411\u91cf\u5316\u53ec\u56de]\n    E & F --\x3e G[\u591a\u8def\u5f52\u5e76]"}),"\n",(0,r.jsx)(n.h3,{id:"1-\u5339\u914d\u53ec\u56de-match-recall",children:"1. \u5339\u914d\u53ec\u56de (Match Recall)"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6280\u672f\u539f\u7406"}),"\uff1a\u57fa\u4e8e\u89c4\u5219\u5f15\u64ce\u7684\u7279\u5f81\u7ec4\u5408\u68c0\u7d22"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u5178\u578b\u5e94\u7528\u573a\u666f"}),"\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u51b7\u542f\u52a8\u7528\u6237\u504f\u597d\u6355\u6349"}),"\n",(0,r.jsx)(n.li,{children:"\u5f3a\u7279\u5f81\u5f15\u5bfc\u573a\u666f\uff08\u6bd4\u5982\uff1a\u5730\u7406\u4f4d\u7f6e/\u7d27\u6025\u9700\u6c42\uff09"}),"\n",(0,r.jsx)(n.li,{children:"\u5b9e\u65f6\u70ed\u70b9\u5185\u5bb9\u6355\u6349"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u914d\u7f6e\u77e9\u9635"}),"\uff1a"]}),"\n",(0,r.jsx)(n.p,{children:"\u6839\u636e25\u5c81\u7537\u6027\u7528\u6237\u751f\u6210\u952euser_25_male\uff0c\u4ece\u5012\u6392\u7d22\u5f15\u4e2d\u53ec\u56de\u5546\u54c1\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'[[Pipeline.Recall]]\nname = "demographic_match"  # \u7b56\u7565\u552f\u4e00\u6807\u8bc6\nrecall_type = 0             # \u53ec\u56de\u7c7b\u578b\ntemplate = "user_%d_%s"      # \u7279\u5f81\u7ec4\u5408\u8303\u5f0f\nfields = "age,gender"        # \u4f7f\u7528\u7684\u7528\u6237\u7279\u5f81\nkeys = 20                     # \u7279\u5f81\u7ec4\u5408\u7ef4\u5ea6\ncount = 100                 # \u5355\u6b21\u53ec\u56de\u4e0a\u9650 \n'})}),"\n",(0,r.jsx)(n.h3,{id:"2-\u6a21\u578b\u53ec\u56de-model-recall",children:"2. \u6a21\u578b\u53ec\u56de (Model Recall)"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u5e38\u7684\u65b9\u6848\u662f\u53cc\u5854\u53ec\u56de\uff0c\u5373\u7528\u6237\u7279\u5f81\u7ecf\u8fc7DNN\u4ea7\u751f\u4e00\u7ec4\u591a\u7ef4\u5411\u91cf\uff0c\u7269\u6599\u7279\u5f81\u7ecf\u8fc7\u4e8b\u5148\u5904\u7406\u597d\u4e5f\u4ea7\u751f\u4e00\u7ec4\u591a\u7ef4\u5411\u91cf\uff0c\u7136\u540e\u7528\u5411\u91cf\u67e5\u627e\u7684\u65b9\u5f0f\u5728\u7269\u6599\u6c60\u4e2d\u627e\u5230\u8ddd\u79bb\u6700\u8fd1\u7684N\u4e2a\u5411\u91cf\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# \u53cc\u5854\u6a21\u578b\u7ed3\u6784\u793a\u610f\nuser_tower = DNN(user_features)\nitem_tower = DNN(item_features)\nsimilarity = cosine(user_tower, item_tower)\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u914d\u7f6e\u77e9\u9635"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'[[Pipeline.Recall]]\nname = "dnn_vector"       # \u7b56\u7565\u6807\u8bc6\nrecall_type = 1    # \u670d\u52a1\u7c7b\u578b\nendpoint = "http://recall-svc.prod:8501"  # \u670d\u52a1\u7aef\u70b9\ncount = 100     # \u5355\u6b21\u53ec\u56de\u4e0a\u9650\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u7cfb\u7edf\u7279\u6027",children:"\u7cfb\u7edf\u7279\u6027"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u591a\u7b56\u7565\u5e76\u884c"}),"\uff1a\u652f\u6301\u591a\u8def\u53ec\u56de\u901a\u9053\u5e76\u884c\u6267\u884c"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u52a8\u6001\u6743\u91cd\u5206\u914d"}),"\uff1a\u57fa\u4e8e\u5b9e\u65f6\u53cd\u9988\u81ea\u52a8\u8c03\u6574\u5404\u901a\u9053\u53ec\u56de\u6bd4\u4f8b"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u964d\u7ea7\u673a\u5236"}),"\uff1a\u572895%\u5206\u4f4d\u5ef6\u8fdf\u8d85100ms\u65f6\u81ea\u52a8\u5207\u6362\u5907\u9009\u7b56\u7565"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>t,x:()=>i});var s=l(6540);const r={},c=s.createContext(r);function t(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);