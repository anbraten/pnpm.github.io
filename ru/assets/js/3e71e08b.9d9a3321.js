(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{145:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return i})),a.d(n,"metadata",(function(){return p})),a.d(n,"toc",(function(){return c})),a.d(n,"default",(function(){return s}));var t=a(3),r=a(8),o=(a(0),a(394)),i={id:"workspaces",title:"Workspaces",original_id:"workspaces"},p={unversionedId:"workspaces",id:"version-3.x/workspaces",isDocsHomePage:!1,title:"Workspaces",description:"pnpm supports concurrent actions in multi-package repositories (workspaces). A workspace must have a pnpm-workspace.yaml file in its root. A workspace also may have a .npmrc in its root.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-3.x/workspaces.md",slug:"/workspaces",permalink:"/ru/3.x/workspaces",editUrl:"https://crowdin.com/project/pnpm/ru",version:"3.x",sidebar:"version-3.x/docs",previous:{title:"pnpmfile.js",permalink:"/ru/3.x/pnpmfile"},next:{title:"Aliases",permalink:"/ru/3.x/aliases"}},c=[{value:"Workspace ranges (workspace:)",id:"workspace-ranges-workspace",children:[]},{value:"Publishing workspace packages",id:"publishing-workspace-packages",children:[]},{value:"Options",id:"options",children:[{value:"link-workspace-packages",id:"link-workspace-packages",children:[]},{value:"shared-workspace-lockfile",id:"shared-workspace-lockfile",children:[]}]}],l={toc:c};function s(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},l,a,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"pnpm supports concurrent actions in multi-package repositories (workspaces). A workspace must have a ",Object(o.b)("a",{parentName:"p",href:"/ru/3.x/pnpm-workspace_yaml"},"pnpm-workspace.yaml")," file in its root. A workspace also may have a ",Object(o.b)("a",{parentName:"p",href:"/ru/3.x/npmrc"},".npmrc")," in its root."),Object(o.b)("h2",{id:"workspace-ranges-workspace"},"Workspace ranges (workspace:)"),Object(o.b)("p",null,"Supported since v3.7.0."),Object(o.b)("p",null,"By default, pnpm will link packages from the workspace if the available packages match the declared ranges. For instance, ",Object(o.b)("inlineCode",{parentName:"p"},"foo@1.0.0")," is linked into ",Object(o.b)("inlineCode",{parentName:"p"},"bar")," if ",Object(o.b)("inlineCode",{parentName:"p"},"bar")," has ",Object(o.b)("inlineCode",{parentName:"p"},'"foo": "^1.0.0"')," in dependencies. But if ",Object(o.b)("inlineCode",{parentName:"p"},"bar")," has ",Object(o.b)("inlineCode",{parentName:"p"},'"foo": "2.0.0"')," in dependencies and ",Object(o.b)("inlineCode",{parentName:"p"},"foo@2.0.0")," is not in the workspace then ",Object(o.b)("inlineCode",{parentName:"p"},"foo@2.0.0")," will be installed from the registry. This behavior introduces some uncertainty."),Object(o.b)("p",null,"Luckily, pnpm supports the ",Object(o.b)("inlineCode",{parentName:"p"},"workspace:")," protocol (same as in Yarn v2). When this protocol is used pnpm will refuse to resolve to anything else than a local workspace package. So if you set ",Object(o.b)("inlineCode",{parentName:"p"},'"foo": "workspace:2.0.0"')," installation will fail telling that no ",Object(o.b)("inlineCode",{parentName:"p"},'"foo@2.0.0"')," is present in the workspace."),Object(o.b)("h2",{id:"publishing-workspace-packages"},"Publishing workspace packages"),Object(o.b)("p",null,"When a workspace package is packed into an archive (whether it's through ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm pack")," or one of the publish commands like ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm publish"),"), we dynamically replace any ",Object(o.b)("inlineCode",{parentName:"p"},"workspace:")," dependency by:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The corresponding version in the target workspace (if you use ",Object(o.b)("inlineCode",{parentName:"li"},"*"),")"),Object(o.b)("li",{parentName:"ul"},"The associated semver range (for any other range type)")),Object(o.b)("p",null,"So for example, if we assume we have three workspace packages whose current version is ",Object(o.b)("inlineCode",{parentName:"p"},"1.5.0"),", the following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "foo": "workspace:*",\n    "bar": "workspace:^1.2.3"\n  }\n}\n')),Object(o.b)("p",null,"Will be transformed into:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "foo": "1.5.0",\n    "bar": "^1.2.3"\n  }\n}\n')),Object(o.b)("p",null,"This feature allows you to not have to depend on something else than your local workspace packages, while still being able to publish the resulting packages to the remote registry without having to run intermediary publish steps - your consumers will be able to use your published workspaces as any other package, still benefiting from the guarantees semver offers."),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("h3",{id:"link-workspace-packages"},"link-workspace-packages"),Object(o.b)("p",null,"Added in: v2.14.0"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Default: ",Object(o.b)("strong",{parentName:"li"},"true")),Object(o.b)("li",{parentName:"ul"},"Type: ",Object(o.b)("strong",{parentName:"li"},"Boolean"))),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", locally available packages are linked to ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," instead of being downloaded from the registry. This is very convenient in a multi-package repository."),Object(o.b)("h4",{id:"usage"},"Usage"),Object(o.b)("p",null,"Create a ",Object(o.b)("inlineCode",{parentName:"p"},".npmrc")," file in the root of your multi-package repository with the following content:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"link-workspace-packages = true\n")),Object(o.b)("p",null,"Create a ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," file with the following content:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - '**'\n")),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm recursive install"),"."),Object(o.b)("h3",{id:"shared-workspace-lockfile"},"shared-workspace-lockfile"),Object(o.b)("p",null,"Added in: v2.17.0 (initially named ",Object(o.b)("inlineCode",{parentName:"p"},"shared-workspace-shrinkwrap"),")"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Default: ",Object(o.b)("strong",{parentName:"li"},"true")),Object(o.b)("li",{parentName:"ul"},"Type: ",Object(o.b)("strong",{parentName:"li"},"Boolean"))),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", pnpm creates a single ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," file in the root of the workspace (in the directory that contains the ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," file). A shared lockfile also means that all dependencies of all workspace packages will be in a single ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules"),"."),Object(o.b)("p",null,"Advantages of this option:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"every dependency is a singleton"),Object(o.b)("li",{parentName:"ul"},"faster installations in a multi-package repository"),Object(o.b)("li",{parentName:"ul"},"fewer changes in code reviews")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE:")," even though all the dependencies will be hard linked into the root ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules"),", packages will have access only to those dependencies that are declared in their ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),". So pnpm's strictness is preserved."))}s.isMDXComponent=!0},394:function(e,n,a){"use strict";a.d(n,"a",(function(){return b})),a.d(n,"b",(function(){return m}));var t=a(0),r=a.n(t);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),s=function(e){var n=r.a.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},b=function(e){var n=s(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(a),d=t,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return a?r.a.createElement(m,p(p({ref:n},l),{},{components:a})):r.a.createElement(m,p({ref:n},l))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:t,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);