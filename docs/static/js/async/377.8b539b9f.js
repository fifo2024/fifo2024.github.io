/*! For license information please see 377.8b539b9f.js.LICENSE.txt */
(self.webpackChunk_fifo_rspress_blog=self.webpackChunk_fifo_rspress_blog||[]).push([["377"],{82618:function(e,n,s){"use strict";s.r(n);var t=s("35250"),i=s("51325");function r(e){let n=Object.assign({p:"p",h2:"h2",a:"a",pre:"pre",code:"code"},(0,i.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"GitHub push\u5931\u8D25\u600E\u4E48\u529E\uFF0C\u6709\u4E24\u4E2A\u5730\u65B9\u9700\u8981\u914D\u7F6E\uFF0C\u8BF7\u63A5\u7740\u5F80\u4E0B\u770B"}),"\n",(0,t.jsxs)(n.h2,{id:"1-\u914D\u7F6Egit\u4E2D\u7684config\u6587\u4EF6",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1-\u914D\u7F6Egit\u4E2D\u7684config\u6587\u4EF6",children:"#"}),"1. \u914D\u7F6E.git\u4E2D\u7684config\u6587\u4EF6"]}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679C\u4F60\u7528\u7684vscode\u7F16\u8F91\u5668\uFF0C\u53EF\u4EE5\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA.vscode\u76EE\u5F55\uFF0C\u7136\u540E\u5728\u6B64\u76EE\u5F55\u4E0B\u521B\u5EFAsettings.json\u6587\u4EF6\uFF0C\u8FD9\u4E2A\u914D\u7F6E\u6587\u4EF6\u662F\u7528\u6765\u8BBE\u7F6E\u9879\u76EE\u4E2D\u54EA\u4E9B\u6587\u4EF6\u662F\u5426\u53EF\u4EE5\u9690\u85CF\u7684\uFF0C\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",meta:"",children:'{\n    "files.exclude": {\n        "**/.git": false,\n        "**/.svn": true,\n        "**/.hg": true,\n        "**/CVS": true,\n        "**/.DS_Store": true,\n        "**/.browserslistrc": true,\n        "**/.babelrc": false,\n        "**/.editorconfig": true,\n        "**/.npmrc": false,\n        "package-lock.json": true\n    }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u53EF\u4EE5\u628A.git\u8BBE\u7F6E\u4E3Afalse\uFF0C\u663E\u793A\u51FA\u6765\uFF0C\u5E76\u5728.git\u76EE\u5F55\u4E0B\u627E\u5230config\u6587\u4EF6\uFF0C\u8FDB\u884Cconfig\u6587\u4EF6\u7684\u7F16\u8F91\uFF0C\u65B0\u7684\u6587\u4EF6\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",meta:"",children:'[core]\n    repositoryformatversion = 0\n    filemode = true\n    bare = false\n    logallrefupdates = true\n    ignorecase = true\n    precomposeunicode = true\n[remote "origin"]\n    url = https://github.com/zhifou/node-nest-ejs.git\n    fetch = +refs/heads/*:refs/remotes/origin/*\n[branch "main"]\n    remote = origin\n    merge = refs/heads/main\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u4EEC\u9700\u8981\u505A\u7684\u4E8B\u60C5\u662F\uFF0C\u5C06url\u7684\u5730\u5740\u4E2D\u7684github.com\u57DF\u540D\u524D\u52A0\u4E0A\u7528\u6237\u540D\uFF0C"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",meta:"",children:"url = https://zhifou@github.com/zhifou/node-nest-ejs.git\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8FD9\u6837\u7B7E\u5165\u7684\u65F6\u5019\u5C31\u4F7F\u7528\u6307\u5B9A\u7684\u7528\u6237\u540D\u7B7E\u5165\u4E86\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679C\u7B2C\u4E00\u6B65\u7684\u8BBE\u7F6E\u540E\uFF0C\u8FD8\u51FA\u73B0\u4EE5\u4E0B\u9519\u8BEF\uFF0C\u8BF7\u63A5\u7740\u914D\u7F6E"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",meta:"",children:"Push failed: Failed with error: unable to access 'https://github.com/zhifou/node-nest-ejs/': \nOpenSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"2-\u9879\u76EE\u672C\u5730\u6839\u76EE\u5F55\u4E0B\u6267\u884Cgit\u547D\u4EE4",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2-\u9879\u76EE\u672C\u5730\u6839\u76EE\u5F55\u4E0B\u6267\u884Cgit\u547D\u4EE4",children:"#"}),"2. \u9879\u76EE\u672C\u5730\u6839\u76EE\u5F55\u4E0B\u6267\u884C.git\u547D\u4EE4"]}),"\n",(0,t.jsx)(n.p,{children:"\u8FD9\u4E2A\u662F\u548CGit\u7684http\u4EE3\u7406\u6709\u5173\u7684\u95EE\u9898\uFF0CGit\u652F\u6301\u4E09\u79CD\u534F\u8BAE\uFF1Agit://\u3001ssh://\u548Chttp:// \uFF0C\u672C\u6765push\u7684\u65F6\u5019\u5E94\u8BE5\u8D70ssh\u96A7\u9053\u7684\uFF0C\u4F46\u662F\u56E0\u4E3A\u8BBE\u7F6E\u4E86http\u4EE3\u7406\uFF0C\u6240\u4EE5\u5C31\u8D70\u4E86http\u7684\u4EE3\u7406\uFF0C\u4E8E\u662F\u5C31\u63D0\u4EA4\u4E0D\u4E86\u4E86\u3002"}),"\n",(0,t.jsx)(n.p,{children:"OK\uFF0C\u627E\u5230\u539F\u56E0\u4E86\uFF0C\u90A3\u5C31\u53D6\u6D88http\u4EE3\u7406\u5427"}),"\n",(0,t.jsx)(n.p,{children:"\u89E3\u51B3\u529E\u6CD5\uFF1A"}),"\n",(0,t.jsx)(n.p,{children:"\u5728github\u9879\u76EE\u5728\u672C\u5730\u7684\u6839\u76EE\u5F55\u4E0B\u6253\u5F00git\u547D\u4EE4\u884C\uFF0C"}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",meta:"",children:"git config --global --unset http.proxy\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u7136\u540E\u518D\u6B21\u4F7F\u7528git push\uFF0COK\uFF0C\u95EE\u9898\u89E3\u51B3\uFF0C\u672C\u6765\u8FD8\u60F3\u7740\u9700\u8981\u518D\u8BBE\u7F6E\u4E00\u4E0Bssh\u5462\uFF0C\u6CA1\u6709\u60F3\u5230\u4E0D\u7528\u4E86\u3002"})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(r,e)})):r(e)}n.default=c,c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["..%2Fsource%2F_posts%2F2024-03-01-git-push-error.md"]={toc:[{id:"1-\u914D\u7F6Egit\u4E2D\u7684config\u6587\u4EF6",text:"1. \u914D\u7F6E.git\u4E2D\u7684config\u6587\u4EF6",depth:2},{id:"2-\u9879\u76EE\u672C\u5730\u6839\u76EE\u5F55\u4E0B\u6267\u884Cgit\u547D\u4EE4",text:"2. \u9879\u76EE\u672C\u5730\u6839\u76EE\u5F55\u4E0B\u6267\u884C.git\u547D\u4EE4",depth:2}],title:"",frontmatter:{layout:"post",title:"Git Push\u5931\u8D25\u600E\u4E48\u529E?",date:"2024-03-01T16:30:00.000Z",categories:["\u4EE3\u7801\u7BA1\u7406"],tags:["git"]}}}}]);