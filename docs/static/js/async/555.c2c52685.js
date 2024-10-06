/*! For license information please see 555.c2c52685.js.LICENSE.txt */
(self.webpackChunk_fifo_rspress_blog=self.webpackChunk_fifo_rspress_blog||[]).push([["555"],{62246:function(e,n,s){"use strict";s.r(n);var t=s("35250"),i=s("51325");function r(e){let n=Object.assign({h2:"h2",a:"a",pre:"pre",code:"code",ul:"ul",li:"li",h3:"h3"},(0,i.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h2,{id:"\u521B\u5EFA\u9879\u76EE",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u521B\u5EFA\u9879\u76EE",children:"#"}),"\u521B\u5EFA\u9879\u76EE"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",meta:"",children:"pnpm init -y\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"\u5B89\u88C5typescript",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5B89\u88C5typescript",children:"#"}),"\u5B89\u88C5typescript"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",meta:"",children:"pnpm add typescript -D\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"\u5B89\u88C5tsup",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5B89\u88C5tsup",children:"#"}),"\u5B89\u88C5tsup"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",meta:"",children:"pnpm add tsup -D\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"\u914D\u7F6Etsup",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u914D\u7F6Etsup",children:"#"}),"\u914D\u7F6Etsup"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u65B0\u5EFA ",(0,t.jsx)(n.code,{children:"tsup.config.ts"})," \u6587\u4EF6"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{meta:"",children:'import type { Options } from "tsup";\n\nconst config: Options = {\n    entry: ["src/index.ts"],\n    dts: true,\n    sourcemap: true,\n    format: ["iife", "cjs", "esm"],\n    clean: true,\n};\n\nexport default config;\n'})}),"\n",(0,t.jsxs)(n.h2,{id:"\u53D1\u5E03\u7684packagejson\u914D\u7F6E",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u53D1\u5E03\u7684packagejson\u914D\u7F6E",children:"#"}),"\u53D1\u5E03\u7684package.json\u914D\u7F6E"]}),"\n",(0,t.jsxs)(n.h3,{id:"\u5BFC\u51FA\u591A\u79CD\u683C\u5F0Fcjsesmiife\u7684\u914D\u7F6E",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5BFC\u51FA\u591A\u79CD\u683C\u5F0Fcjsesmiife\u7684\u914D\u7F6E",children:"#"}),"\u5BFC\u51FA\u591A\u79CD\u683C\u5F0F\uFF0Ccjs\u3001esm\u3001iife\u7684\u914D\u7F6E"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"cjs\u662Fcommonjs\u7684\u7F29\u5199\uFF0C\u652F\u6301\u4F7F\u7528require\u5BFC\u5165\u6A21\u5757"}),"\n",(0,t.jsx)(n.li,{children:"esm\u662Fes6\u6A21\u5757\u7684\u7F29\u5199\uFF0C\u652F\u6301\u4F7F\u7528import\u5BFC\u5165\u6A21\u5757"}),"\n",(0,t.jsx)(n.li,{children:"iife\u662F\u7ACB\u5373\u6267\u884C\u51FD\u6570\uFF0C\u652F\u6301\u4F7F\u7528script\u6807\u7B7E\u5BFC\u5165\u6A21\u5757"}),"\n",(0,t.jsx)(n.li,{children:"\u6253\u5305\u540E\u7684\u6587\u4EF6\u540D\u683C\u5F0F\u4E3A\uFF1Aindex.cjs\u3001index.mjs\u3001index.global.js\uFF0C\u53E6\u5916types\u5FC5\u987B\u52A0\u4E0A\uFF0C\u5426\u5219\u65E0\u6CD5\u4F7F\u7528\uFF0C\u4F1A\u51FA\u73B0\u8FD9\u4E2A\u95EE\u9898 \u201CModule not found: Error: Default condition should be last one\u201D"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-package.json",meta:"",children:'{\n    "type": "module",\n    "main": "./dist/index.js",\n    "module": "./dist/index.js",\n    "exports": {\n      "require": "./dist/index.cjs",\n      "import": "./dist/index.js",\n      "default": "./dist/index.cjs",\n      "node": "./dist/index.cjs"\n      "types": "./dist/index.d.ts",\n    },\n    "scripts": {\n        "build": "tsup src/index.ts",\n        "start": "npm run build -- --watch",\n        "test": "echo \\"Error: no test specified\\" && exit 1"\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/zhifou/tsup-starter",target:"_blank",rel:"noopener noreferrer",children:"tsup-starter \u6E90\u4EE3\u7801"})}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"tsup\u5B9E\u73B0hooks\u7EC4\u4EF6\u53D1\u5E03",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tsup\u5B9E\u73B0hooks\u7EC4\u4EF6\u53D1\u5E03",children:"#"}),"tsup\u5B9E\u73B0hooks\u7EC4\u4EF6\u53D1\u5E03"]}),"\n",(0,t.jsxs)(n.h2,{id:"\u5B89\u88C5jest\u7EC4\u4EF6",children:[(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5B89\u88C5jest\u7EC4\u4EF6",children:"#"}),"\u5B89\u88C5jest\u7EC4\u4EF6"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",meta:"",children:"pnpm add jest jest-environment-jsdom ts-jest @testing-library/react @testing-library/react-hooks @types/node react-test-renderer ts-node tslib -D\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"useWindowSize\u7EC4\u4EF6"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",meta:"",children:'import { useEffect, useState, useCallback } from "react";\n\ntype Size = { width?: number; height?: number };\n\nconst useWindowSize = () => {\n    const [state, setState] = useState<Size>(() => {\n        const { clientWidth, clientHeight } = (document as Document)\n            .documentElement;\n        return {\n            width: clientWidth,\n            height: clientHeight,\n        };\n    });\n\n    const onResize = useCallback(() => {\n        const { clientWidth, clientHeight } = (document as Document)\n            .documentElement;\n        setState({\n            width: clientWidth,\n            height: clientHeight,\n        });\n    }, []);\n\n    useEffect(() => {\n        window.addEventListener("resize", onResize, false);\n\n        return () => {\n            window.removeEventListener("resize", onResize, false);\n        };\n    }, []);\n\n    return state;\n};\n\nexport default useWindowSize;\n\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u6D4B\u8BD5\u6587\u4EF6 useWindowSize/__tests__/index.test.ts"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:"",children:'import { renderHook } from "@testing-library/react-hooks";\nimport useWindowSize from "../index";\n\ndescribe("useWindowSize", () => {\n    it("should be defined", () => {\n        expect(useWindowSize).toBeDefined();\n    });\n    it("with argument", () => {\n        const hook = renderHook(() => useWindowSize());\n        expect(hook.result.current.width).toEqual(0);\n        expect(hook.result.current.height).toEqual(0);\n    });\n});\n\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/zhifou/hooks",target:"_blank",rel:"noopener noreferrer",children:"hooks \u6E90\u4EE3\u7801"})}),"\n"]})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(r,e)})):r(e)}n.default=d,d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["..%2Fsource%2F_posts%2F2024-03-11-tsup-starter.md"]={toc:[{id:"\u521B\u5EFA\u9879\u76EE",text:"\u521B\u5EFA\u9879\u76EE",depth:2},{id:"\u5B89\u88C5typescript",text:"\u5B89\u88C5typescript",depth:2},{id:"\u5B89\u88C5tsup",text:"\u5B89\u88C5tsup",depth:2},{id:"\u914D\u7F6Etsup",text:"\u914D\u7F6Etsup",depth:2},{id:"\u53D1\u5E03\u7684packagejson\u914D\u7F6E",text:"\u53D1\u5E03\u7684package.json\u914D\u7F6E",depth:2},{id:"\u5BFC\u51FA\u591A\u79CD\u683C\u5F0Fcjsesmiife\u7684\u914D\u7F6E",text:"\u5BFC\u51FA\u591A\u79CD\u683C\u5F0F\uFF0Ccjs\u3001esm\u3001iife\u7684\u914D\u7F6E",depth:3},{id:"tsup\u5B9E\u73B0hooks\u7EC4\u4EF6\u53D1\u5E03",text:"tsup\u5B9E\u73B0hooks\u7EC4\u4EF6\u53D1\u5E03",depth:2},{id:"\u5B89\u88C5jest\u7EC4\u4EF6",text:"\u5B89\u88C5jest\u7EC4\u4EF6",depth:2}],title:"",frontmatter:{layout:"post",title:"tsup \u5165\u95E8",date:"2024-03-11T21:37:00.000Z",categories:["\u6784\u5EFA\u5DE5\u5177"],tags:["tsup"]}}}}]);