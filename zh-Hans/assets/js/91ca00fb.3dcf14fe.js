"use strict";(self.webpackChunkuopensail_github_io=self.webpackChunkuopensail_github_io||[]).push([[4649],{3929:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var i=t(9294),s=t(4848),a=t(8453);const r={},o="Application of the ESMM Model in AppS",l={authorsImageUrls:[]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Major Advantages of ESMM",id:"major-advantages-of-esmm",level:3},{value:"Differences Between ESMM and MMOE",id:"differences-between-esmm-and-mmoe",level:3},{value:"Architectural Differences",id:"architectural-differences",level:4},{value:"Application Scenarios",id:"application-scenarios",level:4},{value:"Performance Aspects",id:"performance-aspects",level:4},{value:"Application",id:"application",level:2},{value:"Similarity in Basic Structure Between ESMM and MMOE",id:"similarity-in-basic-structure-between-esmm-and-mmoe",level:3},{value:"Key Components of the ESMM Model",id:"key-components-of-the-esmm-model",level:3},{value:"Two Expert Networks",id:"two-expert-networks",level:4},{value:"Two Gating Mechanisms",id:"two-gating-mechanisms",level:4},{value:"Experimental Results and Effects",id:"experimental-results-and-effects",level:2},{value:"Further Reading",id:"further-reading",level:2}];function d(e){const n={a:"a",center:"center",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"In modern recommendation systems, particularly within the AppS business environment, predicting user behaviors such as Click-Through Rate (CTR) and Conversion Rate (CVR) is crucial for enhancing user satisfaction and driving business growth. The ESMM model, with its unique architecture and efficient multi-task learning capability, offers an outstanding solution for the AppS business."}),"\n",(0,s.jsxs)(n.center,{children:["\n",(0,s.jsx)(n.img,{title:"",src:"../../static/images/ESMM-origin.webp",alt:"",width:"400","data-align":"center"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"ESMM, short for Entire Space Multi-task Model, is a multi-task learning model specifically designed to tackle problems related to ad recommendations and user behavior prediction. The core idea of ESMM is to enhance the overall performance of the model by simultaneously learning multiple related tasks. This approach not only shares potential information between different tasks but also effectively alleviates the issue of data sparsity."}),"\n",(0,s.jsx)(n.p,{children:"The ESMM model is typically applied to predict CTR and CVR. Traditional methods often train two separate models to predict CTR and CVR, whereas ESMM simultaneously performs these two prediction tasks within a unified framework, thereby capturing the correlation between them more effectively."}),"\n",(0,s.jsxs)(n.p,{children:["To learn more about the foundational concepts of ESMM, you can read this\xa0",(0,s.jsx)(n.a,{href:"https://arxiv.org/abs/1804.07931",children:"academic paper on ESMM"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"major-advantages-of-esmm",children:"Major Advantages of ESMM"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Data Efficiency"}),": By sharing the feature space, ESMM can better utilize data, especially in sparse data scenarios."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Performance Enhancement"}),": By jointly learning multiple tasks, ESMM can better capture the mutual influences between related tasks, improving the accuracy of predictions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Simplified Architecture"}),": Compared to training multiple models independently, ESMM provides a more streamlined and efficient solution."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"differences-between-esmm-and-mmoe",children:"Differences Between ESMM and MMOE"}),"\n",(0,s.jsx)(n.p,{children:"In multi-task learning, besides ESMM, there is another popular model known as MMOE (Multi-gate Mixture-of-Experts). Both MMOE and ESMM aim to enhance the performance of multiple tasks by sharing information, but they exhibit significant differences in architecture and application scenarios:"}),"\n",(0,s.jsx)(n.h4,{id:"architectural-differences",children:"Architectural Differences"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ESMM"}),": ESMM conducts multi-task learning by sharing the entire feature space. It primarily uses a unified network structure to simultaneously predict multiple tasks (such as CTR and CVR) and enhances overall performance by sharing underlying features."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"MMOE"}),": MMOE employs a more complex structure by introducing multiple expert networks and gating mechanisms to dynamically select suitable features and model paths for each task. Each task has its own gating network to select the most relevant information from multiple experts."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"application-scenarios",children:"Application Scenarios"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ESMM"}),": Suitable for scenarios where tasks are highly related and require extensive information sharing, particularly when data is sparse and efficient information utilization is needed."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"MMOE"}),": More flexible and applicable to scenarios where task correlations are weaker or personalized feature selection is required. Due to its complex selection mechanism, MMOE performs better in situations with conflicting task requirements."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"performance-aspects",children:"Performance Aspects"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ESMM"}),": Provides stable performance improvements between related tasks through its simplified network architecture and efficient feature sharing."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"MMOE"}),": Capable of offering higher prediction accuracy in complex task environments through flexible expert selection mechanisms, especially when task requirements are diverse."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"application",children:"Application"}),"\n",(0,s.jsx)(n.h3,{id:"similarity-in-basic-structure-between-esmm-and-mmoe",children:"Similarity in Basic Structure Between ESMM and MMOE"}),"\n",(0,s.jsx)(n.p,{children:"The ESMM model shares many structural similarities with the traditional MMOE model. Both employ a multi-task learning framework to enhance the performance of different tasks by sharing information. However, the ESMM model adopts a different approach in the final conversion rate prediction: it calculates the predicted Conversion Rate (pCVR) as the product of two towers, a design aimed at fully capturing the interaction between CTR and CVR."}),"\n",(0,s.jsx)(n.h3,{id:"key-components-of-the-esmm-model",children:"Key Components of the ESMM Model"}),"\n",(0,s.jsxs)(n.center,{children:["\n",(0,s.jsx)(n.img,{title:"",src:"../../static/images/ESMM.webp",alt:"",width:"400","data-align":"center"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"two-expert-networks",children:"Two Expert Networks"}),"\n",(0,s.jsx)(n.p,{children:"When applied to the AppS business, ESMM uses two expert networks. These expert networks are responsible for handling features related to CTR and CVR tasks, respectively. Through specialized network structures, ESMM can better extract and utilize task-specific information, thereby enhancing prediction accuracy."}),"\n",(0,s.jsx)(n.h4,{id:"two-gating-mechanisms",children:"Two Gating Mechanisms"}),"\n",(0,s.jsx)(n.p,{children:"In addition to expert networks, ESMM also employs two gating mechanisms to control the CTR and CVR tasks separately. These gating mechanisms dynamically adjust the selection and utilization of features for each task, ensuring that each task receives the most suitable information flow. Through optimization of gating mechanisms, ESMM provides more precise results in complex user behavior predictions."}),"\n",(0,s.jsx)(n.h2,{id:"experimental-results-and-effects",children:"Experimental Results and Effects"}),"\n",(0,s.jsx)(n.p,{children:'In practical applications within the AppS business, the ESMM model has demonstrated significant results through A/B testing. In the "Guess You Like" module, the ESMM model successfully achieved a 6.45% increase in average distribution per user.'}),"\n",(0,s.jsxs)(n.center,{children:["\n",(0,s.jsx)(n.img,{title:"",src:"../../static/images/ESMM-AB.png",alt:"",width:"522","data-align":"center"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://arxiv.org/abs/1804.07931",children:"Entire Space Multi-Task Model: An Effective Approach for Estimating ... - arXiv"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://easyrec.readthedocs.io/en/latest/models/esmm.html",children:"ESMM \u2014 easy_rec 0.8.5 documentation"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/dai08srhg/ESMM",children:"GitHub - dai08srhg/ESMM: PyTorch implementation of Entire Space Multitask Model (ESMM)"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(6540);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}},9294:e=>{e.exports=JSON.parse('{"permalink":"/zh-Hans/blog/AppS/ESMM","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/AppS/ESMM.md","source":"@site/blog/AppS/ESMM.md","title":"Application of the ESMM Model in AppS","description":"In modern recommendation systems, particularly within the AppS business environment, predicting user behaviors such as Click-Through Rate (CTR) and Conversion Rate (CVR) is crucial for enhancing user satisfaction and driving business growth. The ESMM model, with its unique architecture and efficient multi-task learning capability, offers an outstanding solution for the AppS business.","date":"2025-03-29T04:45:30.000Z","tags":[],"readingTime":3.825,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"Application of DeepFM Model in AppS","permalink":"/zh-Hans/blog/AppS/DeepFM"},"nextItem":{"title":"Application of FM Model in AppS","permalink":"/zh-Hans/blog/AppS/FM"}}')}}]);