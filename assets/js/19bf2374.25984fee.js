"use strict";(self.webpackChunkseekyou_blog=self.webpackChunkseekyou_blog||[]).push([[9977],{2888:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>x,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var c=i(5893),l=i(1151);const r={slug:"Git",title:"Git \u57fa\u672c\u64cd\u4f5c",authors:["seekyou"],tags:["Git","seekyou",2024]},d=void 0,s={id:"note/Git/git",title:"Git \u57fa\u672c\u64cd\u4f5c",description:"\u4e3a\u4e86\u5373\u5c06\u5230\u6765\u7684\u5f00\u6e90\u6d3b\u52a8\uff0c\u91cd\u65b0\u590d\u4e60\u4e00\u4e0bgit\u3002",source:"@site/docs/note/Git/git.md",sourceDirName:"note/Git",slug:"/note/Git/Git",permalink:"/docs/note/Git/Git",draft:!1,unlisted:!1,tags:[{label:"Git",permalink:"/docs/tags/git"},{label:"seekyou",permalink:"/docs/tags/seekyou"},{label:"2024",permalink:"/docs/tags/2024"}],version:"current",frontMatter:{slug:"Git",title:"Git \u57fa\u672c\u64cd\u4f5c",authors:["seekyou"],tags:["Git","seekyou","2024"]},sidebar:"Note",previous:{title:"\u7b14\u8bb0\uff1a\u8ba1\u7b97\u673a\u7f3a\u5931\u7684\u4e00\u8bfe",permalink:"/docs/note/The-Note-of-Missing-Semester"},next:{title:"Git \u64cd\u4f5c\u624b\u518c",permalink:"/docs/note/Git/Git+"}},t={},h=[{value:"\u57fa\u7840 command",id:"\u57fa\u7840-command",level:2},{value:"user.config",id:"userconfig",level:3},{value:"init :\u521b\u5efa\u672c\u5730\u4ed3\u5e93",id:"init-\u521b\u5efa\u672c\u5730\u4ed3\u5e93",level:3},{value:"clone :\u83b7\u53d6\u8fdc\u7a0b\u4ed3\u5e93",id:"clone-\u83b7\u53d6\u8fdc\u7a0b\u4ed3\u5e93",level:3},{value:"remote :\u8fdc\u7a0b\u4ed3\u5e93",id:"remote-\u8fdc\u7a0b\u4ed3\u5e93",level:3},{value:"branch :\u5206\u652f",id:"branch-\u5206\u652f",level:3},{value:"add \uff1a\u8ffd\u8e2a\u53d8\u66f4",id:"add-\u8ffd\u8e2a\u53d8\u66f4",level:3},{value:"gitignore\uff1a\u5ffd\u7565\u6587\u4ef6",id:"gitignore\u5ffd\u7565\u6587\u4ef6",level:3},{value:"fetch \u548c pull",id:"fetch-\u548c-pull",level:3},{value:"diff:\u5bf9\u6bd4\u4e0d\u540c",id:"diff\u5bf9\u6bd4\u4e0d\u540c",level:3},{value:"commit\uff1a\u63d0\u4ea4\u5230\u672c\u5730\u5b58\u50a8\u5e93",id:"commit\u63d0\u4ea4\u5230\u672c\u5730\u5b58\u50a8\u5e93",level:3},{value:"rm\uff1a\u79fb\u9664\u6587\u4ef6",id:"rm\u79fb\u9664\u6587\u4ef6",level:3},{value:"reset HEAD\uff1a\u53d6\u6d88\u6682\u5b58\u7684\u6587\u4ef6",id:"reset-head\u53d6\u6d88\u6682\u5b58\u7684\u6587\u4ef6",level:3},{value:"checkout\uff1a\u8fd8\u539f",id:"checkout\u8fd8\u539f",level:3},{value:"log: \u67e5\u770b\u63d0\u4ea4\u5386\u53f2",id:"log-\u67e5\u770b\u63d0\u4ea4\u5386\u53f2",level:3},{value:"push\uff1a\u63d0\u4ea4\u5230\u8fdc\u7a0b\u4ed3\u5e93",id:"push\u63d0\u4ea4\u5230\u8fdc\u7a0b\u4ed3\u5e93",level:3}];function o(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"\u4e3a\u4e86\u5373\u5c06\u5230\u6765\u7684\u5f00\u6e90\u6d3b\u52a8\uff0c\u91cd\u65b0\u590d\u4e60\u4e00\u4e0bgit\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u57fa\u7840-command",children:"\u57fa\u7840 command"}),"\n",(0,c.jsx)(n.h3,{id:"userconfig",children:"user.config"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:'git config --global user.name "seekyou"\r\ngit config --global user.email "xxx@gmail.com"\n'})}),"\n",(0,c.jsx)(n.h3,{id:"init-\u521b\u5efa\u672c\u5730\u4ed3\u5e93",children:"init :\u521b\u5efa\u672c\u5730\u4ed3\u5e93"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"git init\n"})}),"\n",(0,c.jsx)(n.h3,{id:"clone-\u83b7\u53d6\u8fdc\u7a0b\u4ed3\u5e93",children:"clone :\u83b7\u53d6\u8fdc\u7a0b\u4ed3\u5e93"}),"\n",(0,c.jsx)(n.p,{children:"\u514b\u9686\u8fdc\u7a0b\u4ed3\u5e93\u5230\u672c\u5730"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:'git clone + "url"\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u4ec5\u514b\u9686\u9ed8\u8ba4\u5206\u652f"}),"\n",(0,c.jsx)(n.h3,{id:"remote-\u8fdc\u7a0b\u4ed3\u5e93",children:"remote :\u8fdc\u7a0b\u4ed3\u5e93"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"git remote -v\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u83b7\u53d6\u4e86fetch\u548cpush\u7684\u4e24\u4e2a\u5730\u5740\uff0c\u5206\u522b\u662f\u62c9\u53d6\u5730\u5740\u548c\u63d0\u4ea4\u5730\u5740\r\n\uff08\u901a\u5e38\u662f\u7528\u7684\u540c\u4e00\u4e2a\u5730\u5740\uff0c\u6781\u5c11\u6570\u662f\u6743\u9650\u63a7\u5236\u7ba1\u7406\u548c\u955c\u50cf\u4ed3\u5e93\u8bbe\u7f6e\u63d0\u9ad8\u901f\u5ea6\u4ee5\u53ca\u4e0d\u540c\u7f51\u7edc\u4e0b\u7684\u4ee3\u7406\u5bfc\u81f4\uff09"}),"\n",(0,c.jsx)(n.h3,{id:"branch-\u5206\u652f",children:"branch :\u5206\u652f"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"git branch \n"})}),"\n",(0,c.jsx)(n.p,{children:"\u83b7\u53d6\u5206\u652f\u5217\u8868"}),"\n",(0,c.jsx)(n.h3,{id:"add-\u8ffd\u8e2a\u53d8\u66f4",children:"add \uff1a\u8ffd\u8e2a\u53d8\u66f4"}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u5bf9\u4ed3\u5e93\u5185\u5bb9\u8fdb\u884c\u6539\u52a8\u540e\u4f7fgit\u5bf9\u53d8\u66f4\u8ffd\u8e2a\r\n\u4f8b\u5982"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"git add readme.md\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5219\u4f1a\u5c06readme\u6587\u4ef6\u5b58\u5165\u6682\u5b58\u533a\u5b9e\u73b0\u8ffd\u8e2a\u3002\u5bf9\u4e8e Git \u6709\u8bb0\u5f55\u7684\u6587\u4ef6\uff0cGit \u53ef\u4ee5\u8ba1\u7b97\u51fa\u53d8\u52a8\u5e76\u6807\u8bb0\u4e3a\u5df2\u4fee\u6539\u6587\u4ef6\uff0c\u800c\u6ca1\u6709\u8bb0\u5f55\u7684\u5219\u9700\u8981\u5c06\u6709\u9700\u8981\u7684\u6587\u4ef6\u52a0\u5165\u6682\u5b58\u533a\u4ee5\u4fbf\u7ba1\u7406\uff0c\u8fd9\u65f6\u5019\u4f7f\u7528",(0,c.jsx)(n.code,{children:"status"}),"\u547d\u4ee4\u5373\u53ef\u83b7\u5f97\u6587\u4ef6\u7684\u72b6\u6001."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"git status\n"})}),"\n",(0,c.jsx)(n.h3,{id:"gitignore\u5ffd\u7565\u6587\u4ef6",children:"gitignore\uff1a\u5ffd\u7565\u6587\u4ef6"}),"\n",(0,c.jsx)(n.p,{children:"\u5bf9\u4e8e\u4e00\u4e9b\u4e0e\u9879\u76ee\u672c\u8eab\u65e0\u5173\u7684\u6587\u4ef6 \u4f8b\u5982git,.gitignore\u7b49\u53ef\u4ee5\u901a\u8fc7\u7f16\u8f91.gitignore\u6587\u4ef6\u5b9e\u73b0\u5ffd\u89c6\u5176\u5b58\u5728\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"fetch-\u548c-pull",children:"fetch \u548c pull"}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u6211\u4eec\u5bf9\u672c\u5730\u6587\u4ef6\u8fdb\u884c\u7f16\u8f91\u7684\u540c\u65f6\u53ef\u80fd\u4f1a\u6709\u5176\u4ed6\u4eba\u4e5f\u5728\u5bf9\u9879\u76ee\u505a\u51fa\u8d21\u732e\uff0c\u8fd9\u5c31\u4f1a\u9020\u6210\u672c\u5730\u548c\u8fdc\u7a0b\u4ed3\u5e93\u7684\u4e0d\u540c\u6b65\uff0c\u8fd9\u65f6\u5019\u901a\u8fc7\u4f7f\u7528",(0,c.jsx)(n.code,{children:"fetch"}),"\u6216",(0,c.jsx)(n.code,{children:"pull"}),"\u64cd\u4f5c\u8bbf\u95ee\u8fdc\u7a0b\u4ed3\u5e93\uff0c\u5c06\u672c\u5730\u6ca1\u6709\u7684\u6570\u636e\u5168\u90e8\u62c9\u53d6\u5230\u672c\u5730\u3002\u7c7b\u4f3c\u4e8e\u66f4\u65b0\u64cd\u4f5c\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"git pull /fetch \n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"pull "}),"\u4f1a\u81ea\u52a8\u5408\u5e76\u5230\u5f53\u524d\u5206\u652f\uff0c\u4f46\u4e5f\u4f1a\u5b58\u5728\u4e00\u4e9b\u51b2\u7a81\u9700\u8981\u624b\u52a8\u5904\u7406\uff0c\u800c",(0,c.jsx)(n.code,{children:"fetch"}),"\u6539\u4e0d\u56de\u81ea\u52a8\u5408\u5e76\u4fee\u6539\u4ed3\u5e93\u5185\u6587\u4ef6\uff0c\u800c\u662f\u9700\u8981\u81ea\u5df1\u624b\u52a8\u5408\u5e76\u3002\r\n\u4f7f\u7528\u573a\u666f"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u5982\u679c\u4f60\u60f3\u67e5\u770b\u8fdc\u7a0b\u4ed3\u5e93\u7684\u6700\u65b0\u72b6\u6001\uff0c\u4f46\u4e0d\u60f3\u7acb\u5373\u5408\u5e76\u5230\u672c\u5730\u5206\u652f\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,c.jsx)(n.code,{children:"git fetch"}),"\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u5982\u679c\u4f60\u5e0c\u671b\u7acb\u5373\u5c06\u8fdc\u7a0b\u4ed3\u5e93\u7684\u6700\u65b0\u53d8\u5316\u5408\u5e76\u5230\u4f60\u7684\u5f53\u524d\u5206\u652f\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,c.jsx)(n.code,{children:"git pull"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"diff\u5bf9\u6bd4\u4e0d\u540c",children:"diff:\u5bf9\u6bd4\u4e0d\u540c"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"git diff \n"})}),"\n",(0,c.jsx)(n.p,{children:"\u7528\u4e8e\u6bd4\u5bf9\u6bcf\u4e2a\u88ab\u8ffd\u8e2a\u6587\u4ef6\u7684\u53d8\u66f4"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u5982\u679c\u8981\u6bd4\u8f83\u5de5\u4f5c\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u4e0e\u6700\u65b0\u63d0\u4ea4\u4e4b\u95f4\u7684\u5dee\u5f02\uff0c\u4f7f\u7528",(0,c.jsx)(n.code,{children:"git diff HEAD"}),"\u547d\u4ee4\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u5982\u679c\u6211\u4eec\u5df2\u7ecf\u63d0\u4ea4\u4e86\u5148\u524d\u7684\u66f4\u6539\uff0c\u7136\u540e\u53c8\u5bf9\u6587\u4ef6\u8fdb\u884c\u4e86\u4fee\u6539\uff0c\u7136\u540e\u8fd0\u884c",(0,c.jsx)(n.code,{children:"git diff --cached"}),"\uff0c\u5b83\u4f1a\u663e\u793a\u6682\u5b58\u533a\u4e2d\u4e0e\u6700\u65b0\u63d0\u4ea4\u4e0d\u540c\u7684\u5185\u5bb9\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"commit\u63d0\u4ea4\u5230\u672c\u5730\u5b58\u50a8\u5e93",children:"commit\uff1a\u63d0\u4ea4\u5230\u672c\u5730\u5b58\u50a8\u5e93"}),"\n",(0,c.jsxs)(n.p,{children:["\u5c06add\u540e\u7684\u53d8\u66f4\u7684\u63d0\u4ea4\u3002\u4f7f\u7528\u53c2\u6570",(0,c.jsx)(n.code,{children:"-m"}),"\u6dfb\u52a0\u63d0\u4ea4\u62a5\u544a\u3001\u4fee\u6539\u4ecb\u7ecd"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:'git commit -m "\u4fee\u6539\u4ecb\u7ecd"\n'})}),"\n",(0,c.jsx)(n.p,{children:"-a\uff1a\u5168\u63d0\u4ea4"}),"\n",(0,c.jsx)(n.p,{children:"\u53ef\u4ee5\u4f7f\u7528-a\u53c2\u6570\u6765\u5c06\u6240\u6709\u53d8\u66f4\u76f4\u63a5\u63d0\u4ea4\u800c\u4e0d\u7528\u4f7f\u7528add\u547d\u4ee4\uff0c \u5373"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:'git commit -a -m "\u4fee\u6539\u4ecb\u7ecd"\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u4f46\u8981\u5c0f\u5fc3\uff0c\u8fd9\u6837\u53ef\u80fd\u4f1a\u628a\u4e0d\u60f3\u63d0\u4ea4\u7684\u6587\u4ef6\u4e5f\u7ed9\u63d0\u4ea4\u4e86\uff0c\u6700\u597d\u548c",(0,c.jsx)(n.code,{children:"gitignore"}),"\u6587\u4ef6\u914d\u7f6e\u4e00\u8d77\u914d\u5408\u4f7f\u7528"]}),"\n",(0,c.jsx)(n.p,{children:"--amend\uff1a\u91cd\u65b0\u63d0\u4ea4"}),"\n",(0,c.jsx)(n.p,{children:"\u6709\u65f6\u5019\u6211\u4eec\u4f1a\u8bef\u64cd\u4f5c\u5728\u67d0\u6b21\u63d0\u4ea4\u4e2d\u5c11\u63d0\u4ea4\u4e86\u67d0\u4e9b\u6587\u4ef6\uff0c\u9664\u4e86\u76f4\u63a5\u518d\u63d0\u4ea4\u4e00\u6b21\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528"}),"\n",(0,c.jsx)(n.p,{children:"--amend\u53c2\u6570\u6765\u8865\u9f50\u9057\u6f0f\u7684\u6587\u4ef6\uff0c\u5982\u4e0b\u64cd\u4f5c"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"git commit -m \u201c\u4fee\u6539\u4ecb\u7ecd\u201d\r\ngit add renamed.txt\r\ngit commit --amend\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u8fd9\u6837\u5c31\u53ea\u6709\u4e00\u6761\u8bf4\u660e\u4e3a\u201c\u4fee\u6539\u4ecb\u7ecd\u201d\u7684\u63d0\u4ea4\u88ab\u8bb0\u5f55\u4e0b\u6765\uff0c\u7b2c\u4e8c\u6b21\u63d0\u4ea4\u7684\u5185\u5bb9\u4f1a\u8986\u76d6\u7b2c\u4e00\u6b21\u7684\u63d0\u4ea4\u3002\u5373\u4f7f\u7528log\u547d\u4ee4\u7684 \u65f6\u5019\u663e\u793a\u8bb0\u5f55\u53ea\u6709\u4e00\u6761\u6709\u5173\u201c\u4fee\u6539\u4ecb\u7ecd\u201d"}),"\n",(0,c.jsx)(n.h3,{id:"rm\u79fb\u9664\u6587\u4ef6",children:"rm\uff1a\u79fb\u9664\u6587\u4ef6"}),"\n",(0,c.jsx)(n.p,{children:"Git \u53ef\u4ee5\u79fb\u9664\u67d0\u4e2a\u6587\u4ef6\uff0c\u6211\u4eec\u4ee5\u201cToRemove.txt\u201d\u4e3a\u4f8b\uff0c\u90a3\u4e48\u53ef\u4ee5\u901a\u8fc7rm\u547d\u4ee4 \u6765\u5b9e\u73b0"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"rm ToRemove.txt\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u8fd9\u6837\u5c31\u4ece\u6587\u4ef6\u7cfb\u7edf\u4e2d\u5220\u9664\u4e86\uff0c\u63a5\u4e0b\u6765\u8ba9 Git \u8bb0\u5f55\u6b64\u6b21\u64cd\u4f5c"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"git rm ToRemove.txt\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u8be5\u6587\u4ef6\u5df2\u7ecf\u653e\u5165\u4e86\u6682\u5b58\u533a\uff0c\u90a3\u4e48\u9700\u8981\u52a0\u5165-f\u53c2\u6570 \u6765\u5f3a\u5236\u79fb\u9664\uff0c\u8fd9\u4e2a\u53c2\u6570\u53ef\u4ee5\u8ba4\u4f5c\u662f Git \u9632\u6b62\u8bef\u5220\u64cd\u4f5c\u800c\u52a0\u7684\u4fdd\u9669"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"git rm -f ToRemove.txt\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u53e6\u4e00\u79cd\u60c5\u51b5\u53ef\u80fd\u66f4\u52a0\u5e38\u7528\uff0c\u5373\u6211\u4eec\u4ec5\u4ec5\u662f\u60f3\u5c06\u5176\u4ece\u6682\u5b58\u533a\u79fb\u9664\u800c\u4e0d\u5e0c\u671b\u628a\u5b83\u4ece\u78c1\u76d8\u4e0a\u5220\u9664\uff0c\u90a3\u4e48\u53ef\u4ee5\u52a0\u5165--cached\u53c2\u6570\u6765\u5b9e\u73b0"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"git rm --cache ToRemove.txt\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u90a3\u4e48\u201cToRemove.txt\u201d\u4f1a\u518d\u6b21\u56de\u5230\u201cUntracked files\u201d\u5217\u8868\u4e2d\u5e76\u4e14\u4e5f\u4f1a\u4fdd\u7559\u5728\u78c1\u76d8\u4e0a\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"reset-head\u53d6\u6d88\u6682\u5b58\u7684\u6587\u4ef6",children:"reset HEAD\uff1a\u53d6\u6d88\u6682\u5b58\u7684\u6587\u4ef6"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"git rest HEAD a.txt\n"})}),"\n",(0,c.jsx)(n.p,{children:"a.txt\u5c06\u51fa\u73b0\u5728\u201c\u672a\u8ffd\u8e2a\u6587\u4ef6\u201d\u4e2d"}),"\n",(0,c.jsx)(n.h3,{id:"checkout\u8fd8\u539f",children:"checkout\uff1a\u8fd8\u539f"}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u4e0d\u60f3\u4fdd\u7559\u5bf9\u6587\u4ef6\u7684\u4fee\u6539\u5462\uff0c\u53ef\u4ee5\u4f7f\u7528checkout\u547d\u4ee4\u6765\u4f7f\u5176\u8fd8\u539f\u5230\u4e0a\u6b21\u63d0\u4ea4\u7684\u6837\u5b50\u3002\r\n\u5373\u8be5\u6587\u4ef6\u4e4b\u95f4\u8fd4\u56de\u4e0a\u6b21\u63d0\u4ea4\u7684\u72b6\u6001\uff0c\u672c\u5730\u4fee\u6539\u5168\u90e8\u6d88\u5931\u3002"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u4ece\u6682\u5b58\u533a\u6062\u590d\u6587\u4ef6"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"git checkout -- file\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u4ece\u6307\u5b9a\u5206\u652f\u4e2d\u83b7\u53d6\u6587\u4ef6"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"git checkout branch_name -- file\n"})}),"\n",(0,c.jsx)(n.h3,{id:"log-\u67e5\u770b\u63d0\u4ea4\u5386\u53f2",children:"log: \u67e5\u770b\u63d0\u4ea4\u5386\u53f2"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"git log\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u6b64\u547d\u4ee4\u4f1a\u6309\u65f6\u95f4\u5012\u53d9\u663e\u793a\u6240\u6709\u63d0\u4ea4\uff0c\u5305\u62ec SHA-1 \u6821\u9a8c\u548c\u3001\u4f5c\u8005\u540d\u5b57\u3001\u90ae\u4ef6\u5730\u5740\u3001\u65f6\u95f4\u548c\u63d0\u4ea4\u8bf4\u660e\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"push\u63d0\u4ea4\u5230\u8fdc\u7a0b\u4ed3\u5e93",children:"push\uff1a\u63d0\u4ea4\u5230\u8fdc\u7a0b\u4ed3\u5e93"}),"\n",(0,c.jsx)(n.p,{children:"\u53ea\u5b58\u5728\u672c\u5730\u7684\u4ee3\u7801\u4ed3\u5e93\u63a5\u4e0b\u6765\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6765\u5c06\u672c\u5730\u5b58\u50a8\u5e93\u4e2d\u7684\u53d8\u52a8\u540c\u6b65\u5230\u8fdc\u7a0b\u4ed3\u5e93\uff0c\u8fd9\u4e00\u6b65\u4f60\u9700\u8981\u63d0\u4f9b\u5728 Gitee \u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u6216\u8005\u914d\u7f6egithub\u7684ssh\u5bc6\u94a5\u83b7\u53d6 push \u6743\u9650\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"git push (\u5bf9\u5e94\u5206\u652f)\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u4e0d\u5c0f\u5fc3\u63a8\u9001\u4e86\u9519\u8bef\u7684\u5206\u652f\uff1a"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\u56de\u6eda\u66f4\u6539\uff1a",(0,c.jsx)(n.code,{children:"git reset"}),"\u6216",(0,c.jsx)(n.code,{children:"git revert"}),"\u7b49\u547d\u4ee4\u56de\u6eda\u66f4\u6539\uff0c\u4f8b\u5982\u4f7f\u7528",(0,c.jsx)(n.code,{children:"git reset HEAD~1"}),"\u6765\u64a4\u9500\u4e0a\u4e00\u6b21\u63d0\u4ea4\uff0c\u5e76\u4fdd\u7559\u4fee\u6539\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"\u5f3a\u5236\u63a8\u9001\uff1a\u5728\u56de\u6eda\u66f4\u6539\u540e\uff0c\u5c06\u672c\u5730\u5206\u652f\u63a8\u9001\u5230\u8fdc\u7a0b\u5206\u652f\u65f6\uff0c\u4f60\u9700\u8981\u4f7f\u7528--force\u9009\u9879\u6765\u8986\u76d6\u4e4b\u524d\u7684\u63a8\u9001\u3002\u8fd9\u662f\u56e0\u4e3a\u4f60\u6b63\u5728\u6539\u53d8\u5df2\u7ecf\u5b58\u5728\u4e8e\u8fdc\u7a0b\u4ed3\u5e93\u4e2d\u7684\u63d0\u4ea4\u5386\u53f2\u3002\u4f8b\u5982\uff0c\u4f7f\u7528git push origin your_branch --force\u6765\u5f3a\u5236\u63a8\u9001\u672c\u5730\u5206\u652f\u5230\u8fdc\u7a0b\u5206\u652f\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u56de\u6eda\u547d\u4ee4\u8bf4\u660e\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u4f7f\u7528",(0,c.jsx)(n.code,{children:"git reset HEAD~1"}),"\u5c06\u53d6\u6d88\u6682\u5b58\u7684\u66f4\u6539\u5e76\u5c06\u5b83\u4eec\u79fb\u51fa\u6682\u5b58\u533a\uff0c\u4f46\u4e0d\u4f1a\u5220\u9664\u5bf9\u5de5\u4f5c\u76ee\u5f55\u7684\u66f4\u6539\u3002\u8fd9\u6837\u53ef\u4ee5\u8ba9\u4f60\u91cd\u65b0\u8003\u8651\u54ea\u4e9b\u66f4\u6539\u9700\u8981\u63d0\u4ea4\u6216\u91cd\u505a\u3002\u53ef\u80fd\u4f1a\u4fee\u6539\u63d0\u4ea4\u5386\u53f2."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"git revert"}),"\u4e0d\u4f1a\u4fee\u6539\u63d0\u4ea4\u5386\u53f2\uff0c\u800c\u662f\u5728\u5386\u53f2\u4e0a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u63d0\u4ea4\u6765\u64a4\u9500\u4e4b\u524d\u7684\u66f4\u6539\u3002\u8fd9\u4f7f\u5f97\u5b83\u5728\u534f\u4f5c\u73af\u5883\u4e2d\u66f4\u5b89\u5168\uff0c\u56e0\u4e3a\u5b83\u4e0d\u4f1a\u6539\u53d8\u5df2\u7ecf\u5171\u4eab\u7684\u63d0\u4ea4\u5386\u53f2\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u6211\u4eec\u5e94\u8be5\u9075\u5b88\u8fdc\u7a0b\u5206\u652f\u4e0d\u8981\u5f3a\u5236\u56de\u6eda\u5386\u53f2\u8bb0\u5f55\u7684\u7ea6\u5b9a git push --force \uff0c\u751a\u81f3\u5e94\u8be5\u8bbe\u7f6e\u8fdc\u7a0b\u5206\u652f\u4e3a\u88ab\u4fdd\u62a4\u5206\u652f\uff0c\u5426\u5219\u4e00\u65e6\u56de\u6eda\u5386\u53f2\u8bb0\u5f55\u4f1a\u5bfc\u81f4\u8fdc\u7a0b\u7684 commit \u8bb0\u5f55\u6d88\u5931\uff0c\u5982\u679c\u8fd9\u4e9b commit \u8bb0\u5f55\u88ab\u5176\u4ed6\u4eba\u5408\u5e76/\u53d8\u57fa\u65f6\u6240\u4f7f\u7528\uff0c\u90a3\u4e48\u5728\u63d0\u4ea4\u4ee3\u7801\u7684\u65f6\u5019\u5c31\u4e0d\u5f97\u4e0d\u91cd\u65b0\u89e3\u51b3\u51b2\u7a81\u95ee\u9898\uff0c\u56de\u6eda\u8fd9\u4e9b\u63d0\u4ea4\uff0c\u6240\u4ee5\u5373\u4f7f\u60f3\u56de\u6eda\u8fdc\u7a0b\u63d0\u4ea4\uff0c\u4e5f\u5e94\u8be5\u901a\u8fc7\u65b0\u5efa\u63d0\u4ea4\u7684\u65b9\u5f0f\u6765\u56de\u6eda\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u89e3\u51b3\u51e0\u4e4e\u5168\u90e8\u7684\u95ee\u9898\u3002"})]})}function x(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>d});var c=i(7294);const l={},r=c.createContext(l);function d(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);