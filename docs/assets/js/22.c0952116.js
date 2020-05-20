(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{532:function(s,a,n){"use strict";n.r(a);var t=n(5),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境"}},[s._v("#")]),s._v(" 环境")]),s._v(" "),n("ol",[n("li",[s._v("ubuntu18.04")]),s._v(" "),n("li",[s._v("mongodb")])]),s._v(" "),n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("h3",{attrs:{id:"_1-下载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载"}},[s._v("#")]),s._v(" 1. 下载")]),s._v(" "),n("p",[s._v("下载网址: "),n("a",{attrs:{href:"https://www.mongodb.com/download-center/community",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.mongodb.com/download-center/community"),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-ubuntu1804-4.2.5.tgz\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"_2-安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装"}},[s._v("#")]),s._v(" 2. 安装")]),s._v(" "),n("ol",[n("li",[s._v("解压")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf mongodb-linux-*-4.2.5.tgz\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[s._v("设置环境变量")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("mongodb-install-directory"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/bin/* /usr/local/bin/\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"_3-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置"}},[s._v("#")]),s._v(" 3. 配置")]),s._v(" "),n("ol",[n("li",[s._v("改写配置文件"),n("code",[s._v("/etc/mongod.conf")])])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Where and how to store data.")]),s._v("\nstorage:\n  dbPath: /var/lib/mongodb\n  journal:\n    enabled: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# where to write logging data.")]),s._v("\nsystemLog:\n  destination: "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n  logAppend: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  path: /var/log/mongodb/mongod.log\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# network interfaces")]),s._v("\nnet:\n  port: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v("\n  bindIp: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# how the process runs")]),s._v("\nprocessManagement:\n  timeZoneInfo: /usr/share/zoneinfo\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[s._v("使用配置文件,启动服务")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("mongod --dbpath /var/lib/mongo --logpath /var/log/mongodb/mongod.log --fork -f /etc/mongod.conf \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);