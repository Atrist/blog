(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{835:function(s,t,a){"use strict";a.r(t);var e=a(5),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"配置-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-node"}},[s._v("#")]),s._v(" 配置 node")]),s._v(" "),a("ol",[a("li",[s._v("下载 node")]),s._v(" "),a("li",[s._v("解压")])]),s._v(" "),a("h2",{attrs:{id:"配置环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置环境变量"}},[s._v("#")]),s._v(" 配置环境变量")]),s._v(" "),a("p",[s._v("系统级变量设置环境为/etc/environment /etc/profile 等。不要轻易修改，否则可能造成系统错误。")]),s._v(" "),a("p",[s._v("用户级变量设置路径为～/.bashrc 和~/.profile。.profile 负责本用户所有环境变量的设置。而.bashrc 只负责控制台调用的环境变量。所以如果你的路径只在控制台使用，那么把它添加到.bashrc 即可。否则，最好直接添加到.profile 中。")]),s._v(" "),a("p",[s._v("在文件末尾添加：")]),s._v(" "),a("p",[s._v('例 1. export JAVA_HOME="your path"')]),s._v(" "),a("p",[s._v("例 2. exprot PATH=$PATH:YourPath")]),s._v(" "),a("p",[s._v("注意下面几点：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("如果是系统已有变量，如 PATH，那么采用例 2 的连接方法。用$PATH调用已有的设置，一个冒号后添加自己的路径，如果不连接原来的$PATH，那么 PATH 被覆盖，后果很严重。")])]),s._v(" "),a("li",[a("p",[s._v("如果是自己新设置的变量，按例 1。")])]),s._v(" "),a("li",[a("p",[s._v("变量名和变量值之间的等号=两侧不能有空格，否则报错！")])]),s._v(" "),a("li",[a("p",[s._v("等号右侧的变量值可以加双引号（例 1）也可以不加（例 2）")])])]),s._v(" "),a("h2",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),a("ol",[a("li",[s._v("下载源代码")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("启动后台引用")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pm2 start ./bigData/index.js\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"需要在-koa-后台应用中写一个静态资源放行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需要在-koa-后台应用中写一个静态资源放行"}},[s._v("#")]),s._v(" 需要在 koa 后台应用中写一个静态资源放行")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" serve "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"koa-static"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("serve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./dist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);