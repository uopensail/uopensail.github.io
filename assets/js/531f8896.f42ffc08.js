"use strict";(self.webpackChunkuopensail_github_io=self.webpackChunkuopensail_github_io||[]).push([[2903],{6488:e=>{e.exports=JSON.parse('{"permalink":"/blog/AppS/MMOE","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/AppS/MMOE.md","source":"@site/blog/AppS/MMOE.md","title":"Application of the MMOE Model in AppS","description":"In the AppS business, recommendation systems need not only to improve user Click-Through Rate (CTR) but also to enhance Conversion Rate (CVR) to achieve comprehensive user engagement and business growth. The Multi-gate Mixture-of-Experts (MMOE) model offers an efficient solution by simultaneously optimizing multiple objectives to meet these business needs.","date":"2025-03-26T00:40:13.000Z","tags":[],"readingTime":4.78,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"Application of FM Model in AppS","permalink":"/blog/AppS/FM"},"nextItem":{"title":"Applicaton Store(AppS) Introduction","permalink":"/blog/AppS/intro"}}')},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(6540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}},8951:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var t=i(6488),s=i(4848),o=i(8453);const r={},a="Application of the MMOE Model in AppS",l={authorsImageUrls:[]},c=[{value:"1. What is MMOE?",id:"1-what-is-mmoe",level:3},{value:"Core Components",id:"core-components",level:4},{value:"Working Principle",id:"working-principle",level:4},{value:"2. Why Use MMOE?",id:"2-why-use-mmoe",level:3},{value:"Business Goals: Considering CTR and CVR",id:"business-goals-considering-ctr-and-cvr",level:4},{value:"Why Choose MMOE?",id:"why-choose-mmoe",level:4},{value:"Application",id:"application",level:2},{value:"Model Architecture and Strategy",id:"model-architecture-and-strategy",level:3},{value:"1. Retaining FM Cross Strategy",id:"1-retaining-fm-cross-strategy",level:4},{value:"2. Expert Network Design",id:"2-expert-network-design",level:4},{value:"3. Gating Mechanism",id:"3-gating-mechanism",level:4},{value:"4. Training Strategy",id:"4-training-strategy",level:4},{value:"5. Online Inference and Ranking",id:"5-online-inference-and-ranking",level:4},{value:"AB Testing Results",id:"ab-testing-results",level:3},{value:"Conclusion",id:"conclusion",level:3},{value:"Further Reading",id:"further-reading",level:2}];function d(e){const n={a:"a",center:"center",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"In the AppS business, recommendation systems need not only to improve user Click-Through Rate (CTR) but also to enhance Conversion Rate (CVR) to achieve comprehensive user engagement and business growth. The Multi-gate Mixture-of-Experts (MMOE) model offers an efficient solution by simultaneously optimizing multiple objectives to meet these business needs."}),"\n",(0,s.jsxs)(n.center,{children:["\n",(0,s.jsx)(n.img,{title:"",src:"../../static/images/MMOE-origin.webp",alt:"","data-align":"center",width:"400"}),"\n"]}),"\n## Introduction\n",(0,s.jsx)(n.p,{children:"In the field of recommendation systems and advertising, models often need to optimize multiple objectives simultaneously, such as Click-Through Rate (CTR) and Conversion Rate (CVR). The Multi-gate Mixture-of-Experts (MMOE) model provides an effective solution by achieving better goal synergy optimization within a multi-task learning framework."}),"\n",(0,s.jsx)(n.h3,{id:"1-what-is-mmoe",children:"1. What is MMOE?"}),"\n",(0,s.jsx)(n.p,{children:'MMOE (Multi-gate Mixture-of-Experts) is a deep learning architecture for multi-task learning, designed to simultaneously optimize multiple related but distinct objectives. It introduces multiple "expert" networks and "gating" mechanisms to dynamically select and combine different expert outputs to meet the needs of different tasks.'}),"\n",(0,s.jsx)(n.h4,{id:"core-components",children:"Core Components"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Expert Networks"}),": Multiple sub-networks, each responsible for learning different representations of input features to meet the needs of different tasks."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Gating Networks"}),": For each task, MMOE introduces an independent gating network responsible for selecting the appropriate combination of experts for the input sample. The gating network dynamically allocates weights to each expert based on input features."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"working-principle",children:"Working Principle"}),"\n",(0,s.jsx)(n.p,{children:"MMOE combines expert networks through the gating mechanism, enabling the model to flexibly select the most suitable feature combinations for each task while sharing basic features. This mechanism allows for the sharing of information between tasks while mitigating negative transfer effects."}),"\n",(0,s.jsx)(n.h3,{id:"2-why-use-mmoe",children:"2. Why Use MMOE?"}),"\n",(0,s.jsx)(n.p,{children:"In business scenarios, especially in advertising and recommendation systems, it is often necessary to optimize multiple key metrics simultaneously. For example, improving Click-Through Rate (CTR) and Conversion Rate (CVR) are common business objectives. Traditional single-task models often struggle to balance these goals, while MMOE offers an ideal solution for multi-objective optimization."}),"\n",(0,s.jsx)(n.h4,{id:"business-goals-considering-ctr-and-cvr",children:"Business Goals: Considering CTR and CVR"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Improving CTR (Click-Through Rate)"}),": CTR is a metric that measures the ability of advertisements or recommendations to attract user clicks. Increasing CTR can directly enhance user interaction and engagement."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Improving CVR (Conversion Rate)"}),": CVR is a metric that measures the ability of users to complete target behaviors (such as purchases, registrations, etc.). Enhancing CVR can directly impact the business's final revenue."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"why-choose-mmoe",children:"Why Choose MMOE?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Task Synergy Optimization"}),": MMOE allows for the simultaneous optimization of CTR and CVR objectives by sharing feature representations of expert networks and using independent gating mechanisms."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Reducing Negative Transfer"}),": Through the combination of experts and gating, MMOE effectively reduces negative transfer effects between tasks, ensuring that optimizing one objective does not significantly harm the other."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Dynamic Adaptability"}),": The dynamic gating mechanism of MMOE enables the model to adjust expert combinations in real-time based on input features, adapting to different user behavior patterns and preferences."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"MMOE demonstrates its strong adaptability and optimization performance in multi-task learning. For scenarios that require simultaneous consideration of multiple business goals, such as optimizing ad CTR and CVR, MMOE provides an efficient and flexible solution. By designing expert and gating structures wisely, MMOE can achieve more refined recommendation and advertising strategies in complex business environments."}),"\n",(0,s.jsx)(n.h2,{id:"application",children:"Application"}),"\n",(0,s.jsx)(n.h3,{id:"model-architecture-and-strategy",children:"Model Architecture and Strategy"}),"\n",(0,s.jsx)(n.h4,{id:"1-retaining-fm-cross-strategy",children:"1. Retaining FM Cross Strategy"}),"\n",(0,s.jsx)(n.p,{children:"In the MMOE architecture, we continue to retain the original Factorization Machine (FM) cross strategy. This strategy excels in modeling low-order feature interactions, effectively capturing the basic relationship between users and content. We integrate FM's output into the final output of MMOE to ensure full utilization of basic feature interaction information."}),"\n",(0,s.jsx)(n.h4,{id:"2-expert-network-design",children:"2. Expert Network Design"}),"\n",(0,s.jsx)(n.p,{children:"The MMOE model employs two expert networks, each focusing on learning different feature combinations. Through diversified expert network design, the model can capture user behavior patterns from different perspectives and enhance adaptability to complex data."}),"\n",(0,s.jsx)(n.h4,{id:"3-gating-mechanism",children:"3. Gating Mechanism"}),"\n",(0,s.jsx)(n.p,{children:"We designed two independent gating networks responsible for optimizing CTR and CVR, respectively:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CTR Gating"}),": Controls the expert combination related to click-through rate features, ensuring that recommended content can attract user clicks."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CVR Gating"}),": Optimizes the feature combination related to download conversion, increasing the probability of users downloading applications."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"4-training-strategy",children:"4. Training Strategy"}),"\n",(0,s.jsx)(n.p,{children:"During model training, we use click and download behaviors as task labels and design a fixed-weight loss function:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Loss Weight Allocation"}),":\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The loss weight for PCTR is set to 0.95, emphasizing the optimization of click behavior."}),"\n",(0,s.jsx)(n.li,{children:"The loss weight for PCTCVR is set to 0.05, ensuring that download behavior receives appropriate attention."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This weight allocation ensures that CTR is the primary optimization direction while also considering the CVR objective."}),"\n",(0,s.jsxs)(n.center,{children:["\n",(0,s.jsx)(n.img,{title:"",src:"../../static/images/mmoe.webp",alt:"","data-align":"center",width:"400"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"5-online-inference-and-ranking",children:"5. Online Inference and Ranking"}),"\n",(0,s.jsx)(n.p,{children:"During online inference, we apply the same weights to PCTR and PCVR and rank them based on the weighted scores. Through this strategy, we can balance the priorities of clicks and downloads in recommendation ranking, optimizing user experience and business metrics."}),"\n",(0,s.jsx)(n.h3,{id:"ab-testing-results",children:"AB Testing Results"}),"\n",(0,s.jsxs)(n.p,{children:['By applying the MMOE model in the "Guess You Like" module, our AB testing results showed a ',(0,s.jsx)(n.strong,{children:"13.1%"})," increase in average distribution per user. This significant improvement validates the effectiveness of the MMOE model in simultaneously optimizing CTR and CVR, bringing higher user engagement and conversion rates to the AppS business."]}),"\n",(0,s.jsxs)(n.center,{children:["\n",(0,s.jsx)(n.img,{title:"",src:"../../static/images/MMOE-AB.png",alt:"",width:"522","data-align":"center"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"The MMOE model achieves comprehensive optimization of CTR and CVR in the AppS business through its flexible expert and gating mechanisms. Combined with the FM cross strategy, MMOE not only enhances the predictive ability of recommendation systems but also improves multi-objective synergy optimization of user behavior, providing strong support for business development."}),"\n",(0,s.jsx)(n.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://dl.acm.org/doi/pdf/10.1145/3219819.3220007",children:"Modeling Task Relationships in Multi-task Learning with\nMulti-gate Mixture-of-Experts"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.yuan-meng.com/posts/mtml/",children:"The Annotated Multi-Task Ranker: An MMoE Code Example"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);