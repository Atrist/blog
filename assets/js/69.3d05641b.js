(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{638:function(t,a,s){"use strict";s.r(a);var e=s(5),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://github.com/haizlin/fe-interview/blob/master/category/history.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端面试每日 3+1"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/Advanced-Frontend/Daily-Interview-Question/blob/master/datum/summary.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Daily-Interview-Question"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://xiangshuo.blog.csdn.net/article/details/89744816",target:"_blank",rel:"noopener noreferrer"}},[t._v("【HTML】元素的 alt 和 title 有什么区别？前端向朔"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing",target:"_blank",rel:"noopener noreferrer"}},[t._v("外边距重叠 mdn 文档"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"html-元素的-alt-和-title-有什么区别？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html-元素的-alt-和-title-有什么区别？"}},[t._v("#")]),t._v(" [html] 元素的 alt 和 title 有什么区别？")]),t._v(" "),s("h3",{attrs:{id:"alt-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alt-属性"}},[t._v("#")]),t._v(" ALT 属性")]),t._v(" "),s("p",[t._v("最常见用在 "),s("code",[t._v("<img>")]),t._v(" 标签上，那我们先来看下 "),s("code",[t._v("<img>")]),t._v(" 标签的 "),s("code",[t._v("alt")]),t._v(" 属性。")]),t._v(" "),s("p",[s("code",[t._v("alt")]),t._v(" 属性是一个必需的属性，它规定在图像无法显示时的替代文本。")]),t._v(" "),s("p",[t._v("假设由于下列原因用户无法查看图像，"),s("code",[t._v("alt")]),t._v(" 属性可以为图像提供替代的信息：")]),t._v(" "),s("ul",[s("li",[t._v("网速太慢")]),t._v(" "),s("li",[s("code",[t._v("src")]),t._v(" 属性中的错误")]),t._v(" "),s("li",[t._v("浏览器禁用图像")]),t._v(" "),s("li",[t._v("用户使用的是屏幕阅读器")])]),t._v(" "),s("p",[s("code",[t._v("<img>")]),t._v(" 标签的 "),s("code",[t._v("alt")]),t._v(" 属性指定了替代文本，用于在图像无法显示或者用户禁用图像显示时，代替图像显示在浏览器中的内容。")]),t._v(" "),s("p",[t._v("强烈推荐您在文档的每个图像中都使用这个属性。这样即使图像无法显示，用户还是可以看到关于丢失了什么东西的一些信息。而且对于残疾人来说，"),s("code",[t._v("alt")]),t._v(" 属性通常是他们了解图像内容的唯一方式。")]),t._v(" "),s("h4",{attrs:{id:"注释和提示："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注释和提示："}},[t._v("#")]),t._v(" 注释和提示：")]),t._v(" "),s("p",[t._v("注释："),s("code",[t._v("alt")]),t._v(" 属性的值是一个最多可以包含 "),s("code",[t._v("1024")]),t._v(" 个字符的字符串，其中包括空格和标点。这个字符串必须包含在引号中。这段 alt 文本中可以包含对特殊字符的实体引用，但它不允许包含其他类别的标记，尤其是不允许有任何样式标签。")]),t._v(" "),s("p",[t._v("注释：当用户把鼠标移动到 "),s("code",[t._v("img")]),t._v(" 元素上时，"),s("code",[t._v("Internet Explorer")]),t._v(" 会显示出 "),s("code",[t._v("alt")]),t._v(" 属性的值。这种行为并不正确。所有其他的浏览器正在向规范靠拢，只要当图像无法显示时，才会显示出替代文本。")]),t._v(" "),s("p",[t._v("提示：如果需要为图像创建工具提示，请使用 "),s("code",[t._v("title")]),t._v(" 属性。")]),t._v(" "),s("h4",{attrs:{id:"用法和语法："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用法和语法："}},[t._v("#")]),t._v(" 用法和语法：")]),t._v(" "),s("p",[t._v("用法："),s("code",[t._v("alt")]),t._v(" 属性只能用在 "),s("code",[t._v("img")]),t._v("、"),s("code",[t._v("area")]),t._v(" 和 "),s("code",[t._v("input")]),t._v(" 元素中（包括 "),s("code",[t._v("applet")]),t._v(" 元素）。对于 "),s("code",[t._v("input")]),t._v(" 元素，"),s("code",[t._v("alt")]),t._v(" 属性意在用来替换提交按钮的图片。比如：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("image.gif"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Submit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h5",{attrs:{id:"语法："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法："}},[t._v("#")]),t._v(" 语法：")]),t._v(" "),s("p",[t._v("规定图像的替代文本")]),t._v(" "),s("p",[s("code",[t._v("alt")]),t._v(" 文本的使用原则：")]),t._v(" "),s("ul",[s("li",[t._v("如果图像包含信息 - 使用 "),s("code",[t._v("alt")]),t._v(" 描述图像")]),t._v(" "),s("li",[t._v("如果图像在 "),s("code",[t._v("a")]),t._v(" 元素中 - 使用 "),s("code",[t._v("alt")]),t._v(" 描述目标链接")]),t._v(" "),s("li",[t._v("如果图像仅供装饰 - 使用 "),s("code",[t._v('alt=""')])])]),t._v(" "),s("h3",{attrs:{id:"title-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#title-属性"}},[t._v("#")]),t._v(" TITLE 属性")]),t._v(" "),s("h4",{attrs:{id:"定义和用法："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义和用法："}},[t._v("#")]),t._v(" 定义和用法：")]),t._v(" "),s("p",[s("code",[t._v("title")]),t._v(" 属性规定关于元素的额外信息。")]),t._v(" "),s("p",[t._v("这些信息通常会在鼠标移到元素上时显示一段工具提示文本（"),s("code",[t._v("tooltip text")]),t._v("）。")]),t._v(" "),s("p",[t._v("提示："),s("code",[t._v("title")]),t._v(" 属性常与 "),s("code",[t._v("form")]),t._v(" 以及 "),s("code",[t._v("a")]),t._v(" 元素一同使用，以提供关于输入格式和链接目标的信息。同时它也是 "),s("code",[t._v("abbr")]),t._v(" 和 "),s("code",[t._v("acronym")]),t._v(" 元素的必需属性。当然 "),s("code",[t._v("title")]),t._v(" 属性是比较广泛使用的，可以用在除了"),s("code",[t._v("base")]),t._v("，"),s("code",[t._v("basefont")]),t._v("，"),s("code",[t._v("head")]),t._v("，"),s("code",[t._v("html")]),t._v("，"),s("code",[t._v("meta")]),t._v("，"),s("code",[t._v("param")]),t._v("，"),s("code",[t._v("script")]),t._v(" 和 "),s("code",[t._v("title")]),t._v(" 之外的所有标签。但是并不是必须的。")]),t._v(" "),s("p",[s("code",[t._v("title")]),t._v(" 属性有一个很好的用途，即为链接添加描述性文字，特别是当连接本身并不是十分清楚的表达了链接的目的。这样就使得访问者知道那些链接将会带他们到什么地方，他们就不会加载一个可能完全不感兴趣的页面。另外一个潜在的应用就是为图像提供额外的说明信息，比如日期或者其他非本质的信息。")]),t._v(" "),s("h3",{attrs:{id:"title-标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#title-标签"}},[t._v("#")]),t._v(" TITLE 标签")]),t._v(" "),s("p",[t._v("看时间还早，我们继续来看下 "),s("code",[t._v("<title>")]),t._v(" 标签吧。")]),t._v(" "),s("p",[s("code",[t._v("<title>")]),t._v("元素可定义文档的标题。")]),t._v(" "),s("p",[t._v("浏览器会以特殊的方式来使用标题，并且通常把它放置在浏览器窗口的标题栏或状态栏上。同样，当把文档加入用户的链接列表或者收藏夹或书签列表时，标题将成为该文档链接的默认名称。")]),t._v(" "),s("p",[t._v("提示： "),s("code",[t._v("<title>")]),t._v(" 标签是 "),s("code",[t._v("<head>")]),t._v("标签中唯一要求包含的东西。")]),t._v(" "),s("p",[s("strong",[t._v("延伸阅读：")]),t._v(" 标题里是什么？")]),t._v(" "),s("p",[t._v("一定要选择一个正确的标题，这对于定义文档并确保它能够在 Web 上有效利用来说是十分重要的。")]),t._v(" "),s("p",[t._v("请记住，用户可以用任何顺序、独立地访问文档集中的每一个文档。所以，文档的标题不仅应当根据其他文档的上下文定义，而且还要显示其自身的特点。")]),t._v(" "),s("p",[t._v("含有文档引用排序的标题通常不是什么好标题。举个例子，像“第十六章”或“第五部分”这样的标题，对读者理解其内容方面毫无用处。描述性更强的标题，像“第十六章：HTML 标题”，或者“第五部分：如何使用标题”，这样的标题不仅表达了它在一个大型文档集中的位置，还说明了文档的具体内容，吸引读者更有兴趣读下去。")]),t._v(" "),s("p",[t._v("自我引用的标题也没有什么用处。像“主页”这样的标题和内容毫无关系，类似的还有“反馈页”或“常用链接”等。你应该设计一个能够传达一定内容和目的的标题，令读者凭这个标题就可以判断是否有必要访问这个页面。“元素的 alt 和 title 有什么区别 - Issue”，这就是一个描述性的标题。")]),t._v(" "),s("p",[t._v("人们常常会花费大量时间去创建 Web 文档，但却经常只是因为一个不吸引人或无意义的标题，而把这些努力全都浪费掉了。当自动为用户搜集链接的特殊软件在 Web 上越来越流行时，只有网页的标题才会作为与页面相关的描述性词语，被插入到庞大的链接数据库中。因此，我们怎么强调这一点都不过分：请为自己的每个文档都认真地选择一个描述性的、实用的并与上下文独立的标题。")]),t._v(" "),s("h2",{attrs:{id:"css-请描述-margin-边界叠加是什么及解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-请描述-margin-边界叠加是什么及解决方案"}},[t._v("#")]),t._v(" [css] 请描述 margin 边界叠加是什么及解决方案")]),t._v(" "),s("p",[t._v("块的上外边距"),s("code",[t._v("(margin-top")]),t._v(")和下外边距("),s("code",[t._v("margin-bottom")]),t._v(")有时合并(折叠)为单个边距，其大小为单个边距的最大值(或如果它们相等，则仅为其中一个)，这种行为称为"),s("strong",[t._v("边距折叠")]),t._v("。")]),t._v(" "),s("p",[t._v("有三种情况会形成外边距重叠：")]),t._v(" "),s("h4",{attrs:{id:"同一层相邻元素之间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同一层相邻元素之间"}},[t._v("#")]),t._v(" 同一层相邻元素之间")]),t._v(" "),s("p",[t._v("相邻的两个元素之间的外边距重叠，除非后一个元素加上"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/clear",target:"_blank",rel:"noopener noreferrer"}},[t._v("clear-fix 清除浮动"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p:nth-child(1)")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-bottom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 13px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p:nth-child(2)")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 87px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("下边界范围会..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("...会跟这个元素的上边界范围重叠。"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("p",[t._v("这个例子如果以为边界会合并的话，理所当然会猜测上下 2 个元素会合并一个 100px 的边界范围，但其实会发生边界折叠，只会挑选最大边界范围留下，所以这个例子的边界范围其实是 87px。")]),t._v(" "),s("h4",{attrs:{id:"没有内容将父元素和后代元素分开"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#没有内容将父元素和后代元素分开"}},[t._v("#")]),t._v(" 没有内容将父元素和后代元素分开")]),t._v(" "),s("p",[t._v("如果没有边框"),s("code",[t._v("border")]),t._v("，内边距 "),s("code",[t._v("padding")]),t._v("，行内内容，也没有创建"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context",target:"_blank",rel:"noopener noreferrer"}},[t._v("块级格式上下文"),s("OutboundLink")],1),t._v("或"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/clear",target:"_blank",rel:"noopener noreferrer"}},[t._v("清除浮动"),s("OutboundLink")],1),t._v("来分开一个块级元素的上边界 "),s("code",[t._v("margin-top")]),t._v(" 与其内一个或多个后代块级元素的上边界"),s("code",[t._v("margin-top")]),t._v("；或没有边框，内边距，行内内容，高度 "),s("code",[t._v("height")]),t._v("，最小高度 "),s("code",[t._v("min-height")]),t._v(" 或 最大高度 "),s("code",[t._v("max-height")]),t._v(" 来分开一个块级元素的下边界"),s("code",[t._v("margin-bottom")]),t._v(" 与其内的一个或多个后代后代块元素的下边界 "),s("code",[t._v("margin-bottom")]),t._v("，则就会出现父块元素和其内后代块元素外边界重叠，重叠部分最终会溢出到父级块元素外面。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("section")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 13px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-bottom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 87px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("header")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 87px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("footer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-bottom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 13px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("section")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("header")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("上边界重叠 87"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("header")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("footer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("下边界重叠 87 不能再高了"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("footer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("section")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br")])]),s("h4",{attrs:{id:"空的块级元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#空的块级元素"}},[t._v("#")]),t._v(" 空的块级元素")]),t._v(" "),s("p",[t._v("当一个块元素上边界"),s("code",[t._v("margin-top")]),t._v(" 直接贴到元素下边界"),s("code",[t._v("margin-bottom")]),t._v("时也会发生边界折叠。这种情况会发生在一个块元素完全没有设定边框"),s("code",[t._v("border")]),t._v("、内边距"),s("code",[t._v("padding")]),t._v("、高度"),s("code",[t._v("height")]),t._v("、最小高度"),s("code",[t._v("min-height")]),t._v(" 、最大高度"),s("code",[t._v("max-height")]),t._v(" 、内容设定为"),s("code",[t._v("inline")]),t._v("或是加上"),s("code",[t._v("clear-fix")]),t._v("的时候。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("​​​​​​p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 13px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-bottom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 87px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("上边界范围是 87 ..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("... 上边界范围是 87"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("p",[t._v("一些需要注意的地方：")]),t._v(" "),s("ul",[s("li",[t._v("上述情况的组合会产生更复杂的外边距折叠。")]),t._v(" "),s("li",[t._v("即使某一外边距为 "),s("code",[t._v("0")]),t._v("，这些规则仍然适用。因此就算父元素的外边距是 "),s("code",[t._v("0")]),t._v("，第一个或最后一个子元素的外边距仍然会“溢出”到父元素的外面。")]),t._v(" "),s("li",[t._v("如果参与折叠的外边距中包含负值，折叠后的外边距的值为最大的正边距与最小的负边距（即绝对值最大的负边距）的和,；也就是说如果有-13px 8px 100px 叠在一起，边界范围的技术就是 "),s("code",[t._v("100px -13px")]),t._v(" 的 "),s("code",[t._v("87px")]),t._v("。")]),t._v(" "),s("li",[t._v("如果所有参与折叠的外边距都为负，折叠后的外边距的值为最小的负边距的值。这一规则适用于相邻元素和嵌套元素。")])]),t._v(" "),s("p",[t._v("以上这些内容都是发生在 "),s("code",[t._v("Block-Level")]),t._v(" 的元素，设定 "),s("code",[t._v("floating")]),t._v(" 和 "),s("code",[t._v("absolutely positioned")]),t._v(" 的元素完全不用担心边界重叠的问题。")]),t._v(" "),s("h2",{attrs:{id:"js-返回到顶部的方法有哪些？把其中一个方法出来"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-返回到顶部的方法有哪些？把其中一个方法出来"}},[t._v("#")]),t._v(" [js] 返回到顶部的方法有哪些？把其中一个方法出来")]),t._v(" "),s("h3",{attrs:{id:"_1-a-锚点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-a-锚点"}},[t._v("#")]),t._v(" 1. "),s("code",[t._v("<a>")]),t._v("锚点")]),t._v(" "),s("p",[t._v("利用 "),s("code",[t._v("a")]),t._v(" 标签的锚点。在顶部放一个 "),s("code",[t._v("a")]),t._v(" 标签 "),s("code",[t._v('<a name="top">顶部</a>')]),t._v("，在需要回到顶部的位置放置一个 "),s("code",[t._v("a")]),t._v(" 标签，地址为 "),s("code",[t._v("top")]),t._v("。 "),s("code",[t._v('<a href="#top">')]),t._v("回到顶部"),s("code",[t._v("</a>")]),t._v("。要做成隐藏的锚点，可以把内部的内容去掉，"),s("code",[t._v("name")]),t._v(" 是必须的。")]),t._v(" "),s("h3",{attrs:{id:"_2-利用-，在-url-后增加-不会让页面刷新，并且可以回到顶部。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-利用-，在-url-后增加-不会让页面刷新，并且可以回到顶部。"}},[t._v("#")]),t._v(" 2. 利用 "),s("code",[t._v("#")]),t._v("，在 url 后增加 "),s("code",[t._v("#")]),t._v(" 不会让页面刷新，并且可以回到顶部。")]),t._v(" "),s("p",[t._v("可以对 "),s("code",[t._v("location.href")]),t._v(" 进行设置 "),s("code",[t._v("location.href += '#'")]),t._v("。当这个方法执行多次即有多个 "),s("code",[t._v("#")]),t._v(" 时，页面不会有响应。")]),t._v(" "),s("h3",{attrs:{id:"_3-scrolltop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-scrolltop"}},[t._v("#")]),t._v(" 3. scrollTop")]),t._v(" "),s("p",[t._v("利用 "),s("code",[t._v("javascript")]),t._v(" 设置 "),s("code",[t._v("scrollTop = 0")]),t._v("，一般设置在最外层，即 "),s("code",[t._v("document.documentElement.scrollTop = 0")]),t._v(" 就可以返回顶部。")]),t._v(" "),s("h2",{attrs:{id:"简单讲解一下-http2-的多路复用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单讲解一下-http2-的多路复用"}},[t._v("#")]),t._v(" 简单讲解一下 http2 的多路复用")]),t._v(" "),s("h3",{attrs:{id:"sisteran-的答案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sisteran-的答案"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/14#issuecomment-465547222",target:"_blank",rel:"noopener noreferrer"}},[t._v("sisterAn 的答案"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("HTTP/1")]),t._v(" 中，每次请求都会建立一次"),s("code",[t._v("HTTP")]),t._v("连接，也就是我们常说的"),s("code",[t._v("3")]),t._v("次握手"),s("code",[t._v("4")]),t._v("次挥手，这个过程在一次请求过程中占用了相当长的时间，即使开启了 "),s("code",[t._v("Keep-Alive")]),t._v(" ，解决了多次连接的问题，但是依然有两个效率上的问题：")]),t._v(" "),s("ul",[s("li",[t._v("第一个：串行的文件传输。当请求"),s("code",[t._v("a")]),t._v("文件时，"),s("code",[t._v("b")]),t._v("文件只能等待，等待"),s("code",[t._v("a")]),t._v("连接到服务器、服务器处理文件、服务器返回文件，这三个步骤。我们假设这三步用时都是"),s("code",[t._v("1")]),t._v("秒，那么"),s("code",[t._v("a")]),t._v("文件用时为"),s("code",[t._v("3")]),t._v("秒，"),s("code",[t._v("b")]),t._v("文件传输完成用时为"),s("code",[t._v("6")]),t._v("秒，依此类推。（注：此项计算有一个前提条件，就是浏览器和服务器是单通道传输）")]),t._v(" "),s("li",[t._v("第二个：连接数过多。我们假设"),s("code",[t._v("Apache")]),t._v("设置了最大并发数为"),s("code",[t._v("300")]),t._v("，因为浏览器限制，浏览器发起的最大请求数为"),s("code",[t._v("6")]),t._v("，也就是服务器能承载的最高并发为"),s("code",[t._v("50")]),t._v("，当第"),s("code",[t._v("51")]),t._v("个人访问时，就需要等待前面某个请求处理完成。")])]),t._v(" "),s("p",[t._v("HTTP/2 的多路复用就是为了解决上述的两个性能问题。")]),t._v(" "),s("p",[t._v("在 HTTP/2 中，有两个非常重要的概念，分别是"),s("strong",[t._v("帧（frame）"),s("strong",[t._v("和")]),t._v("流（stream）")]),t._v("。")]),t._v(" "),s("p",[t._v("帧代表着最小的数据单位，每个帧会标识出该帧属于哪个流，流也就是多个帧组成的数据流。")]),t._v(" "),s("p",[t._v("多路复用，就是在一个 "),s("code",[t._v("TCP")]),t._v(" 连接中可以存在多条流。换句话说，也就是可以发送多个请求，对端可以通过帧中的标识知道属于哪个请求。通过这个技术，可以避免 "),s("code",[t._v("HTTP")]),t._v(" 旧版本中的队头阻塞问题，极大的提高传输性能。")]),t._v(" "),s("h3",{attrs:{id:"zodiacsyndicate-的答案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zodiacsyndicate-的答案"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/14#issue-411270072",target:"_blank",rel:"noopener noreferrer"}},[t._v("ZodiacSyndicate 的答案"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("code",[t._v("HTTP2")]),t._v(" 采用二进制格式传输，取代了 "),s("code",[t._v("HTTP1.x")]),t._v(" 的文本格式，二进制格式解析更高效。\n多路复用代替了 "),s("code",[t._v("HTTP1.x")]),t._v(" 的序列和阻塞机制，所有的相同域名请求都通过同一个 "),s("code",[t._v("TCP")]),t._v(" 连接并发完成。在 "),s("code",[t._v("HTTP1.x")]),t._v(" 中，并发多个请求需要多个 "),s("code",[t._v("TCP")]),t._v(" 连接，浏览器为了控制资源会有 "),s("code",[t._v("6-8")]),t._v(" 个 "),s("code",[t._v("TCP")]),t._v(" 连接都限制。")]),t._v(" "),s("p",[s("code",[t._v("HTTP2")]),t._v(" 中")]),t._v(" "),s("ul",[s("li",[t._v("同域名下所有通信都在单个连接上完成，消除了因多个 TCP 连接而带来的延时和内存消耗。")]),t._v(" "),s("li",[t._v("单个连接上可以并行交错的请求和响应，之间互不干扰")])])])}),[],!1,null,null,null);a.default=n.exports}}]);