"use strict";(self.webpackChunkseekyou_blog=self.webpackChunkseekyou_blog||[]).push([[2182],{5898:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var i=s(5893),r=s(1151);const t={slug:"DBSCAN",title:"\u8bb0\u5f55DBSCAN",authors:["seekyou"],tags:["Note","seekyou","DBSCAN"]},l="About DBSCAN(Density-Based Spatial Clustering of Applications with Noise)",o={permalink:"/zh-Hans/blog/DBSCAN",source:"@site/blog/2024-2-29-DBSCAN/index.md",title:"\u8bb0\u5f55DBSCAN",description:"\u8bb0\u5f55\u4e00\u4e0b\u6700\u8fd1\u4e86\u89e3\u7684\u805a\u7c7b\u7b97\u6cd5\uff1aDBSCAN",date:"2024-02-29T00:00:00.000Z",formattedDate:"2024\u5e742\u670829\u65e5",tags:[{label:"Note",permalink:"/zh-Hans/blog/tags/note"},{label:"seekyou",permalink:"/zh-Hans/blog/tags/seekyou"},{label:"DBSCAN",permalink:"/zh-Hans/blog/tags/dbscan"}],readingTime:11.835,hasTruncateMarker:!0,authors:[{name:"Cui quan",title:"Maintainer of site",url:"https://github.com/cowqer",imageURL:"https://avatars.githubusercontent.com/u/102907373?v=4",key:"seekyou"}],frontMatter:{slug:"DBSCAN",title:"\u8bb0\u5f55DBSCAN",authors:["seekyou"],tags:["Note","seekyou","DBSCAN"]},unlisted:!1,nextItem:{title:"2023\xb7\u5e74\u5ea6\u603b\u7ed3",permalink:"/zh-Hans/blog/2023-sum-up-1"}},a={authorsImageUrls:[void 0]},d=[{value:"Clustering",id:"clustering",level:2},{value:"DBSCAN\u57fa\u672c\u6982\u5ff5",id:"dbscan\u57fa\u672c\u6982\u5ff5",level:2},{value:"DBSCAN\u805a\u7c7b\u601d\u60f3",id:"dbscan\u805a\u7c7b\u601d\u60f3",level:2},{value:"DBSCAN\u7b97\u6cd5\u8bbe\u8ba1",id:"dbscan\u7b97\u6cd5\u8bbe\u8ba1",level:2},{value:"DBSCAN\u5c0f\u7ed3",id:"dbscan\u5c0f\u7ed3",level:2},{value:"DBSCAN\u6269\u5c55",id:"dbscan\u6269\u5c55",level:2}];function c(e){const n={a:"a",br:"br",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u8bb0\u5f55\u4e00\u4e0b\u6700\u8fd1\u4e86\u89e3\u7684\u805a\u7c7b\u7b97\u6cd5\uff1aDBSCAN"}),"\n",(0,i.jsx)(n.p,{children:"DBSCAN is a density-based clustering algorithm that groups together data points that are closely packed, while marking points that lie alone in low-density regions as outliers."}),"\n",(0,i.jsx)(n.p,{children:"Unlike K-means, DBSCAN doesn't require specifying the number of clusters beforehand and is robust to noise and outliers. Along with its hierarchical extensions HDBSCAN, it is applied mostly in Automotive Radar Data."}),"\n",(0,i.jsxs)(n.p,{children:["\u6700\u8fd1\u5bf9\u6709\u5173\u96f7\u8fbe\u6570\u636e\u7684\u805a\u7c7b\u65b9\u6cd5\u505a\u4e86\u4e9b\u8c03\u7814\uff0c\u4e3b\u8981\u770b\u7684\u4e00\u4e9b\u8bc4\u4f30\u6307\u6807\u548c\u6709\u5173DBSCAN\u7684\u65b9\u6cd5\uff0c\u4e8e\u6b64\u91cd\u65b0\u590d\u4e60\u4e00\u4e0bDBSCAN\u3002\u6587\u4ef6\u9644\u4e0a\uff1a\r\n",(0,i.jsx)("a",{href:"RESEARCH-ON-RADAR-DATA-CLUSTERING.pdf",children:"pdf\u6587\u4ef6"})]}),"\n",(0,i.jsx)(n.p,{children:"\u548cK-Means\uff0cBIRCH\u8fd9\u4e9b\u4e00\u822c\u53ea\u9002\u7528\u4e8e\u51f8\u6837\u672c\u96c6\u7684\u805a\u7c7b\u76f8\u6bd4\uff0cDBSCAN\u65e2\u53ef\u4ee5\u9002\u7528\u4e8e\u51f8\u6837\u672c\u96c6\uff0c\u4e5f\u53ef\u4ee5\u9002\u7528\u4e8e\u975e\u51f8\u6837\u672c\u96c6\u3002\u4e0b\u9762\u6211\u4eec\u5c31\u5bf9DBSCAN\u7b97\u6cd5\u7684\u539f\u7406\u505a\u4e00\u4e2a\u603b\u7ed3\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\u51f8\u96c6 (Convex Set):\u5bf9\u4e8e\u8be5\u96c6\u5408\u4e2d\u7684\u4efb\u610f\u4e24\u70b9\uff0c\u8fde\u63a5\u5b83\u4eec\u7684\u7ebf\u6bb5\u4e0a\u7684\u6240\u6709\u70b9\u4e5f\u90fd\u5305\u542b\u5728\u8be5\u96c6\u5408\u4e2d\u3002\r\n\u51f9\u96c6 (Concave Set):\u5bf9\u4e8e\u8be5\u96c6\u5408\u4e2d\u7684\u4efb\u610f\u4e24\u70b9\uff0c\u8fde\u63a5\u5b83\u4eec\u7684\u7ebf\u6bb5\u4e0a\u7684\u6240\u6709\u70b9\u4e5f\u90fd\u4e0d\u5728\u8be5\u96c6\u5408\u4e2d\u3002\n"})}),"\n",(0,i.jsx)(n.h2,{id:"clustering",children:"Clustering"}),"\n",(0,i.jsx)(n.p,{children:"\u805a\u7c7b\u7b97\u6cd5\u4e3b\u8981\u6709 4 \u5927\u7c7b\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Centroid-based Clustering",(0,i.jsx)(n.br,{}),"\n","\u57fa\u4e8e\u8d28\u5fc3\u7684\u805a\u7c7b\u4ece\u8bb8\u591a\u968f\u673a\u5b9a\u4f4d\u7684\u8d28\u5fc3\uff08\u4e2d\u5fc3\u70b9\uff09\u5f00\u59cb\uff0c\u8fd9\u4e9b\u8d28\u5fc3\u5145\u5f53\u6240\u627e\u5230\u7c07\u7684\u4e2d\u5fc3\u3002\u8fd9\u4e9b\u8d28\u5fc3\u88ab\u4e00\u6b65\u6b65\u7ec6\u5316\uff0c\u76f4\u5230\u5b83\u4eec\u6536\u655b\u5230\u7c07\u7684\u771f\u6b63\u4e2d\u5fc3\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["Density-based Clustering",(0,i.jsx)(n.br,{}),"\n","\u57fa\u4e8e\u5bc6\u5ea6\u7684\u805a\u7c7b\u7ec4\u6309\u5176\u9644\u8fd1\u5176\u4ed6\u70b9\u7684\u5bc6\u5ea6\u8fdb\u884c\u5206\u7ec4\u3002\u771f\u6b63\u9760\u8fd1\u7684\u70b9\u5c06\u5f62\u6210\u4e00\u4e2a\u7c07\uff0c\u800c\u5b64\u7acb\u7684\u70b9\u5c06\u88ab\u6807\u8bb0\u4e3a\u5f02\u5e38\u503c"]}),"\n",(0,i.jsxs)(n.li,{children:["Distribution-based Clustering",(0,i.jsx)(n.br,{}),"\n","\u57fa\u4e8e\u5206\u5e03\u7684\u805a\u7c7b\u9996\u5148\u5047\u8bbe\u6bcf\u4e2a\u805a\u7c7b\u90fd\u7531\u4ece\u5df2\u77e5\u5206\u5e03\uff08\u901a\u5e38\u662f\u6b63\u6001\u5206\u5e03\uff09\u4e2d\u91c7\u6837\u7684\u70b9\u7ec4\u6210\u3002\u8be5\u7b97\u6cd5\u7684\u76ee\u6807\u662f\u627e\u5230\u6bcf\u4e2a\u805a\u7c7b\u7684\u5206\u5e03\u53c2\u6570"]}),"\n",(0,i.jsxs)(n.li,{children:["Hierarchical Clustering",(0,i.jsx)(n.br,{}),"\n","\u5f88\u591a\u60c5\u51b5\u4e0b\u7684\u7c07\u5e76\u4e0d\u50cf\u6211\u4eec\u770b\u5230\u7684\u793a\u4f8b\u90a3\u6837\u6e05\u6670\u5730\u5206\u5f00\u3002\u5b83\u4eec\u901a\u5e38\u7531\u8f83\u5c0f\u7684\u7ec4\u7ec4\u6210\uff0c\u8fd9\u4e9b\u7ec4\u53ef\u4ee5\u7ec4\u5408\u5728\u4e00\u8d77\u5f62\u6210\u4e00\u4e2a\u66f4\u5927\u7684\u7c07\uff0c\u6700\u7ec8\u5f97\u5230\u4e00\u4e2a\u5305\u7f57\u4e07\u8c61\u7684\u7c07\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"dbscan\u57fa\u672c\u6982\u5ff5",children:"DBSCAN\u57fa\u672c\u6982\u5ff5"}),"\n",(0,i.jsx)(n.p,{children:"DBSCAN\u7684\u57fa\u672c\u6982\u5ff5\u53ef\u4ee5\u75281\uff0c2\uff0c3\uff0c4\u6765\u603b\u7ed3\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"1\u4e2a\u6838\u5fc3\u601d\u60f3\uff1a\u57fa\u4e8e\u5bc6\u5ea6\u3002\u76f4\u89c2\u6548\u679c\u4e0a\u770b\uff0cDBSCAN\u7b97\u6cd5\u53ef\u4ee5\u627e\u5230\u6837\u672c\u70b9\u7684\u5168\u90e8\u5bc6\u96c6\u533a\u57df\uff0c\u5e76\u628a\u8fd9\u4e9b\u5bc6\u96c6\u533a\u57df\u5f53\u505a\u4e00\u4e2a\u4e00\u4e2a\u7684\u805a\u7c7b\u7c07\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"2\u4e2a\u7b97\u6cd5\u53c2\u6570\uff1a\u90bb\u57df\u534a\u5f84R\u548c\u6700\u5c11\u70b9\u6570\u76eeMinPoints\u3002\u8fd9\u4e24\u4e2a\u7b97\u6cd5\u53c2\u6570\u5b9e\u9645\u53ef\u4ee5\u523b\u753b\u4ec0\u4e48\u53eb\u5bc6\u96c6\uff1a\u5f53\u90bb\u57df\u534a\u5f84R\u5185\u7684\u70b9\u7684\u4e2a\u6570\u5927\u4e8e\u6700\u5c11\u70b9\u6570\u76eeMinPoints\u65f6\uff0c\u5c31\u662f\u5bc6\u96c6"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"3\u79cd\u70b9\u7684\u7c7b\u522b\uff1a\u6838\u5fc3\u70b9\uff0c\u8fb9\u754c\u70b9\u548c\u566a\u58f0\u70b9\u3002\u90bb\u57df\u534a\u5f84R\u5185\u6837\u672c\u70b9\u7684\u6570\u91cf\u5927\u4e8e\u7b49\u4e8eminpoints\u7684\u70b9\u53eb\u505a\u6838\u5fc3\u70b9\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4e0d\u5c5e\u4e8e\u6838\u5fc3\u70b9\u4f46\u5728\u67d0\u4e2a\u6838\u5fc3\u70b9\u7684\u90bb\u57df\u5185\u7684\u70b9\u53eb\u505a\u8fb9\u754c\u70b9\u3002\u65e2\u4e0d\u662f\u6838\u5fc3\u70b9\u4e5f\u4e0d\u662f\u8fb9\u754c\u70b9\u7684\u662f\u566a\u58f0\u70b9"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://img.tg/image/OyvyxD",children:(0,i.jsx)(n.img,{src:"https://ooo.0x0.ooo/2024/02/28/OyvyxD.md.png",alt:"OyvyxD.md.png"})})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"4\u79cd\u70b9\u7684\u5173\u7cfb\uff1a\u5bc6\u5ea6\u76f4\u8fbe\uff0c\u5bc6\u5ea6\u53ef\u8fbe\uff0c\u5bc6\u5ea6\u76f8\u8fde\uff0c\u975e\u5bc6\u5ea6\u76f8\u8fde\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679cP\u4e3a\u6838\u5fc3\u70b9\uff0cQ\u5728P\u7684R\u90bb\u57df\u5185\uff0c\u90a3\u4e48\u79f0P\u5230Q\u5bc6\u5ea6\u76f4\u8fbe\u3002\u4efb\u4f55\u6838\u5fc3\u70b9\u5230\u5176\u81ea\u8eab\u5bc6\u5ea6\u76f4\u8fbe\uff0c\u5bc6\u5ea6\u76f4\u8fbe\u4e0d\u5177\u6709\u5bf9\u79f0\u6027\uff0c\u5982\u679cP\u5230Q\u5bc6\u5ea6\u76f4\u8fbe\uff0c\u90a3\u4e48Q\u5230P\u4e0d\u4e00\u5b9a\u5bc6\u5ea6\u76f4\u8fbe\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u5b58\u5728\u6838\u5fc3\u70b9P2\uff0cP3\uff0c\u2026\u2026\uff0cPn\uff0c\u4e14P1\u5230P2\u5bc6\u5ea6\u76f4\u8fbe\uff0cP2\u5230P3\u5bc6\u5ea6\u76f4\u8fbe\uff0c\u2026\u2026\uff0cP(n-1)\u5230Pn\u5bc6\u5ea6\u76f4\u8fbe\uff0cPn\u5230Q\u5bc6\u5ea6\u76f4\u8fbe\uff0c\u5219P1\u5230Pn(n=1,2...),Q\u5bc6\u5ea6\u53ef\u8fbe\u3002\u5bc6\u5ea6\u53ef\u8fbe\u4e5f\u4e0d\u5177\u6709\u5bf9\u79f0\u6027\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://img.tg/image/OyvgJF",children:(0,i.jsx)(n.img,{src:"https://ooo.0x0.ooo/2024/02/28/OyvgJF.md.png",alt:"OyvgJF.md.png"})})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u5b58\u5728\u6838\u5fc3\u70b9S\uff0c\u4f7f\u5f97S\u5230P\u548cQ\u90fd\u5bc6\u5ea6\u53ef\u8fbe\uff0c\u5219P\u548cPn(n=1,2...),Q\u5bc6\u5ea6\u76f8\u8fde\u3002\u5bc6\u5ea6\u76f8\u8fde\u5177\u6709\u5bf9\u79f0\u6027\uff0c\u5982\u679cP\u548cQ\u5bc6\u5ea6\u76f8\u8fde\uff0c\u90a3\u4e48Q\u548cP\u4e5f\u4e00\u5b9a\u5bc6\u5ea6\u76f8\u8fde\u3002\u5bc6\u5ea6\u76f8\u8fde\u7684\u4e24\u4e2a\u70b9\u5c5e\u4e8e\u540c\u4e00\u4e2a\u805a\u7c7b\u7c07\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u4e24\u4e2a\u70b9\u4e0d\u5c5e\u4e8e\u5bc6\u5ea6\u76f8\u8fde\u5173\u7cfb\uff0c\u5219\u4e24\u4e2a\u70b9\u975e\u5bc6\u5ea6\u76f8\u8fde\u3002\u975e\u5bc6\u5ea6\u76f8\u8fde\u7684\u4e24\u4e2a\u70b9\u5c5e\u4e8e\u4e0d\u540c\u7684\u805a\u7c7b\u7c07\uff0c\u6216\u8005\u5176\u4e2d\u5b58\u5728\u566a\u58f0\u70b9"}),"\n",(0,i.jsx)(n.h2,{id:"dbscan\u805a\u7c7b\u601d\u60f3",children:"DBSCAN\u805a\u7c7b\u601d\u60f3"}),"\n",(0,i.jsx)(n.p,{children:"DBSCAN\u7684\u805a\u7c7b\u5b9a\u4e49\u5f88\u7b80\u5355\uff1a\u7531\u5bc6\u5ea6\u53ef\u8fbe\u5173\u7cfb\u5bfc\u51fa\u7684\u6700\u5927\u5bc6\u5ea6\u76f8\u8fde\u7684\u6837\u672c\u96c6\u5408\uff0c\u5373\u4e3a\u6211\u4eec\u6700\u7ec8\u805a\u7c7b\u7684\u4e00\u4e2a\u7c7b\u522b\uff0c\u6216\u8005\u8bf4\u4e00\u4e2a\u7c07\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u4e2aDBSCAN\u7684\u7c07\u91cc\u9762\u53ef\u4ee5\u6709\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u6838\u5fc3\u5bf9\u8c61\u3002\u5982\u679c\u53ea\u6709\u4e00\u4e2a\u6838\u5fc3\u5bf9\u8c61\uff0c\u5219\u7c07\u91cc\u5176\u4ed6\u7684\u975e\u6838\u5fc3\u5bf9\u8c61\u6837\u672c\u90fd\u5728\u8fd9\u4e2a\u6838\u5fc3\u5bf9\u8c61\u7684\u03f5\u03f5-\u90bb\u57df\u91cc\uff1b\u5982\u679c\u6709\u591a\u4e2a\u6838\u5fc3\u5bf9\u8c61\uff0c\u5219\u7c07\u91cc\u7684\u4efb\u610f\u4e00\u4e2a\u6838\u5fc3\u5bf9\u8c61\u7684\u03f5\u03f5-\u90bb\u57df\u4e2d\u4e00\u5b9a\u6709\u4e00\u4e2a\u5176\u4ed6\u7684\u6838\u5fc3\u5bf9\u8c61\uff0c\u5426\u5219\u8fd9\u4e24\u4e2a\u6838\u5fc3\u5bf9\u8c61\u65e0\u6cd5\u5bc6\u5ea6\u53ef\u8fbe\u3002\u8fd9\u4e9b\u6838\u5fc3\u5bf9\u8c61\u7684\u03f5\u03f5-\u90bb\u57df\u91cc\u6240\u6709\u7684\u6837\u672c\u7684\u96c6\u5408\u7ec4\u6210\u7684\u4e00\u4e2aDBSCAN\u805a\u7c7b\u7c07\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u90a3\u4e48\u600e\u4e48\u624d\u80fd\u627e\u5230\u8fd9\u6837\u7684\u7c07\u6837\u672c\u96c6\u5408\u5462\uff1fDBSCAN\u4f7f\u7528\u7684\u65b9\u6cd5\u5f88\u7b80\u5355\uff0c\u5b83\u4efb\u610f\u9009\u62e9\u4e00\u4e2a\u6ca1\u6709\u7c7b\u522b\u7684\u6838\u5fc3\u5bf9\u8c61\u4f5c\u4e3a\u79cd\u5b50\uff0c\u7136\u540e\u627e\u5230\u6240\u6709\u8fd9\u4e2a\u6838\u5fc3\u5bf9\u8c61\u80fd\u591f\u5bc6\u5ea6\u53ef\u8fbe\u7684\u6837\u672c\u96c6\u5408\uff0c\u5373\u4e3a\u4e00\u4e2a\u805a\u7c7b\u7c07\u3002\u63a5\u7740\u7ee7\u7eed\u9009\u62e9\u53e6\u4e00\u4e2a\u6ca1\u6709\u7c7b\u522b\u7684\u6838\u5fc3\u5bf9\u8c61\u53bb\u5bfb\u627e\u5bc6\u5ea6\u53ef\u8fbe\u7684\u6837\u672c\u96c6\u5408\uff0c\u8fd9\u6837\u5c31\u5f97\u5230\u53e6\u4e00\u4e2a\u805a\u7c7b\u7c07\u3002\u4e00\u76f4\u8fd0\u884c\u5230\u6240\u6709\u6838\u5fc3\u5bf9\u8c61\u90fd\u6709\u7c7b\u522b\u4e3a\u6b62\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4f46\u662f\u6211\u4eec\u8fd8\u662f\u6709\u4e09\u4e2a\u95ee\u9898\u6ca1\u6709\u8003\u8651\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u7b2c\u4e00\u4e2a\u662f\u4e00\u4e9b\u5f02\u5e38\u6837\u672c\u70b9\u6216\u8005\u8bf4\u5c11\u91cf\u6e38\u79bb\u4e8e\u7c07\u5916\u7684\u6837\u672c\u70b9\uff0c\u8fd9\u4e9b\u70b9\u4e0d\u5728\u4efb\u4f55\u4e00\u4e2a\u6838\u5fc3\u5bf9\u8c61\u5728\u5468\u56f4\uff0c\u5728DBSCAN\u4e2d\uff0c\u6211\u4eec\u4e00\u822c\u5c06\u8fd9\u4e9b\u6837\u672c\u70b9\u6807\u8bb0\u4e3a\u566a\u97f3\u70b9\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u7b2c\u4e8c\u4e2a\u662f\u8ddd\u79bb\u7684\u5ea6\u91cf\u95ee\u9898\uff0c\u5373\u5982\u4f55\u8ba1\u7b97\u67d0\u6837\u672c\u548c\u6838\u5fc3\u5bf9\u8c61\u6837\u672c\u7684\u8ddd\u79bb\u3002\u5728DBSCAN\u4e2d\uff0c\u4e00\u822c\u91c7\u7528\u6700\u8fd1\u90bb\u601d\u60f3\uff0c\u91c7\u7528\u67d0\u4e00\u79cd\u8ddd\u79bb\u5ea6\u91cf\u6765\u8861\u91cf\u6837\u672c\u8ddd\u79bb\uff0c\u6bd4\u5982\u6b27\u5f0f\u8ddd\u79bb\u3002\u8fd9\u548cKNN\u5206\u7c7b\u7b97\u6cd5\u7684\u6700\u8fd1\u90bb\u601d\u60f3\u5b8c\u5168\u76f8\u540c\u3002\u5bf9\u5e94\u5c11\u91cf\u7684\u6837\u672c\uff0c\u5bfb\u627e\u6700\u8fd1\u90bb\u53ef\u4ee5\u76f4\u63a5\u53bb\u8ba1\u7b97\u6240\u6709\u6837\u672c\u7684\u8ddd\u79bb\uff0c\u5982\u679c\u6837\u672c\u91cf\u8f83\u5927\uff0c\u5219\u4e00\u822c\u91c7\u7528KD\u6811\u6216\u8005\u7403\u6811\u6765\u5feb\u901f\u7684\u641c\u7d22\u6700\u8fd1\u90bb\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u7b2c\u4e09\u79cd\u95ee\u9898\u6bd4\u8f83\u7279\u6b8a\uff0c\u67d0\u4e9b\u6837\u672c\u53ef\u80fd\u5230\u4e24\u4e2a\u6838\u5fc3\u5bf9\u8c61\u7684\u8ddd\u79bb\u90fd\u5c0f\u4e8e\u03f5\u03f5\uff0c\u4f46\u662f\u8fd9\u4e24\u4e2a\u6838\u5fc3\u5bf9\u8c61\u7531\u4e8e\u4e0d\u662f\u5bc6\u5ea6\u76f4\u8fbe\uff0c\u53c8\u4e0d\u5c5e\u4e8e\u540c\u4e00\u4e2a\u805a\u7c7b\u7c07\uff0c\u90a3\u4e48\u5982\u679c\u754c\u5b9a\u8fd9\u4e2a\u6837\u672c\u7684\u7c7b\u522b\u5462\uff1f\r\n\u4e00\u822c\u6765\u8bf4\uff0c\u6b64\u65f6DBSCAN\u91c7\u7528\u5148\u6765\u540e\u5230\uff0c\u5148\u8fdb\u884c\u805a\u7c7b\u7684\u7c7b\u522b\u7c07\u4f1a\u6807\u8bb0\u8fd9\u4e2a\u6837\u672c\u4e3a\u5b83\u7684\u7c7b\u522b\u3002\u4e5f\u5c31\u662f\u8bf4BDSCAN\u7684\u7b97\u6cd5\u4e0d\u662f\u5b8c\u5168\u7a33\u5b9a\u7684\u7b97\u6cd5\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"dbscan\u7b97\u6cd5\u8bbe\u8ba1",children:"DBSCAN\u7b97\u6cd5\u8bbe\u8ba1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"DBSCAN(DB, distFunc, eps, minPts) {\r\n    C := 0                                                  /* Cluster counter */\r\n    for each point P in database DB {                       /*\u5bf9\u6570\u636e\u96c6\u4e2d\u7684\u6bcf\u4e2a\u70b9\u5904\u7406*/\r\n        if label(P) \u2260 undefined then continue               /* Previously processed in inner loop */\r\n        Neighbors N := RangeQuery(DB, distFunc, P, eps)     /* Find neighbors */\r\n        if |N| < minPts then {                              /* Density check */\r\n            label(P) := Noise                               /* Label as Noise */\r\n            continue\r\n        }\r\n        C := C + 1                                          /* \u82e5\u6ee1\u8db3\u7c07\u6570+1 */\r\n        label(P) := C                                       /* \u7528\u96c6\u7fa4\u6807\u7b7e`C`\u6807\u8bb0\u5f53\u524d\u70b9`P`\u3002 */\r\n        SeedSet S := N \\ {P}                                /* \u6211\u4eec\u521d\u59cb\u5316\u4e00\u4e2a\u79cd\u5b50\u96c6 S \uff0c\u5176\u4e2d\u5305\u542b P \u9664\u5176\u81ea\u8eab\u4e4b\u5916 P \u7684\u6240\u6709\u90bb\u5c45\u3002 */\r\n        for each point Q in S {                             /* Process every seed point Q */\r\n            if label(Q) = Noise then label(Q) := C          /* Change Noise to border point */\r\n            if label(Q) \u2260 undefined then continue           /* Previously processed (e.g., \u5982\u679c\u662f\u8fb9\u754c\u70b9) */\r\n            label(Q) := C                                   /* \u7528\u96c6\u7fa4\u6807\u7b7eC\u6807\u8bb0\u5f53\u524d\u90bb\u5c45\u70b9 */\r\n            Neighbors N := RangeQuery(DB, distFunc, Q, eps) /* Find point Q's neighbors */\r\n            if |N| \u2265 minPts then {                          /* \u5982\u679c\u70b9Q\u7684\u90bb\u5c45\u6570|N|\u5927\u4e8e\u6216\u7b49\u4e8eminPts\uff0c\u5219\u8868\u793a\u5b83\u662f\u6838\u5fc3\u70b9 minPts*/\r\n                S := S \u222a N                                  /* Add new neighbors to seed set */\r\n            }\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"dbscan\u5c0f\u7ed3",children:"DBSCAN\u5c0f\u7ed3"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u4f18\u70b9"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4e0d\u9700\u8981\u5148\u9a8c\u5730\u6307\u5b9a\u6570\u636e\u4e2d\u7684\u7c07\u6570\u3002"}),"\n",(0,i.jsx)(n.li,{children:"DBSCAN\u53ef\u4ee5\u627e\u5230\u4efb\u610f\u5f62\u72b6\u7684\u7c07\u3002"}),"\n",(0,i.jsx)(n.li,{children:"DBSCAN \u5177\u6709\u566a\u58f0\u7684\u6982\u5ff5\uff0c\u5e76\u4e14\u5bf9\u5f02\u5e38\u503c\u5177\u6709\u9c81\u68d2\u6027\u3002"}),"\n",(0,i.jsx)(n.li,{children:"DBSCAN\u8bbe\u8ba1\u7528\u4e8e\u53ef\u4ee5\u52a0\u901f\u533a\u57df\u67e5\u8be2\u7684\u6570\u636e\u5e93\uff0c\u4f8b\u5982\u4f7f\u7528R*\u6811\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u7f3a\u70b9"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["DBSCAN \u7684\u8d28\u91cf\u53d6\u51b3\u4e8e\u51fd\u6570 ",(0,i.jsx)(n.code,{children:"regionQuery(P\uff0c\u03b5)"})," \u4e2d\u4f7f\u7528\u7684\u8ddd\u79bb\u6d4b\u91cf\u503c\u3002\u6700\u5e38\u7528\u7684\u8ddd\u79bb\u5ea6\u91cf\u662f\u6b27\u51e0\u91cc\u5f97\u8ddd\u79bb\u3002\u7279\u522b\u662f\u5bf9\u4e8e\u9ad8\u7ef4\u6570\u636e\uff0c\u7531\u4e8e\u6240\u8c13\u7684\u201c\u7ef4\u8bc5\u5492\u201d\uff0c\u8fd9\u4e2a\u6307\u6807\u51e0\u4e4e\u6beb\u65e0\u7528\u5904\uff0c\u5f88\u96be\u627e\u5230\u5408\u9002\u7684\u03b5\u503c\u3002\u7136\u800c\uff0c\u8fd9\u79cd\u6548\u5e94\u4e5f\u5b58\u5728\u4e8e\u4efb\u4f55\u5176\u4ed6\u57fa\u4e8e\u6b27\u51e0\u91cc\u5f97\u8ddd\u79bb\u7684\u7b97\u6cd5\u4e2d\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"DBSCAN \u5728\u5904\u7406\u5305\u542b\u4e0d\u540c\u5bc6\u5ea6\u805a\u7c7b\u7684\u6570\u636e\u96c6\u65f6\u4f1a\u9047\u5230\u56f0\u96be\u3002\u5b83\u5047\u8bbe\u56e2\u7c07\u5177\u6709\u5747\u5300\u7684\u5bc6\u5ea6\uff0c\u5e76\u4e14\u53ef\u80fd\u65e0\u6cd5\u8bc6\u522b\u5177\u6709\u663e\u7740\u4e0d\u540c\u5c40\u90e8\u5bc6\u5ea6\u7684\u56e2\u7c07\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5728\u6700\u574f\u7684\u60c5\u51b5\u4e0b,DBSCAN\u7684\u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u5373\u6570\u636e\u70b9\u7684\u6570\u91cf\u3002\u5bf9\u4e8e\u5927\u578b\u6570\u636e\u96c6\uff0c\u53ef\u80fd\u5f88\u8d39\u65f6\u95f4\uff0c\u96be\u4ee5\u4fdd\u8bc1\u5b9e\u65f6\u6027\u3002"}),"\n",(0,i.jsxs)(n.li,{children:["DBSCAN \u65e0\u6cd5\u5f88\u597d\u5730\u805a\u7c7b\u5bc6\u5ea6\u5dee\u5f02\u8f83\u5927\u7684\u6570\u636e\u96c6\uff0c\u56e0\u4e3a\u65e0\u6cd5\u4e3a\u6240\u6709\u805a\u7c7b\u9002\u5f53\u9009\u62e9 ",(0,i.jsx)(n.code,{children:"minPts-\u03b5"})," \u7ec4\u5408"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"dbscan\u6269\u5c55",children:"DBSCAN\u6269\u5c55"}),"\n",(0,i.jsx)(n.p,{children:'Generalized DBSCAN (GDBSCAN) is a generalization by the same authors to arbitrary "neighborhood" and "dense" predicates.'}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"\u03b5"})," and ",(0,i.jsx)(n.code,{children:"minPts"}),' parameters are removed from the original algorithm and moved to the predicates. For example, on polygon data, the "neighborhood" could be any intersecting polygon, whereas the density predicate uses the polygon areas instead of just the object count.']}),"\n",(0,i.jsx)(n.p,{children:"Various extensions to the DBSCAN algorithm have been proposed, including methods for parallelization, parameter estimation, and support for uncertain data. The basic idea has been extended to hierarchical clustering by the OPTICS algorithm. DBSCAN is also used as part of subspace clustering algorithms like PreDeCon and SUBCLU."}),"\n",(0,i.jsxs)(n.p,{children:["HDBSCAN* is a hierarchical version of DBSCAN which is also faster than OPTICS, from which a flat partition consisting of the most prominent clusters can be extracted from the hierarchy.\r\n",(0,i.jsx)(n.a,{href:"https://wires.onlinelibrary.wiley.com/doi/full/10.1002/widm.30?saml_referrer",children:"Reference"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>l});var i=s(7294);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);