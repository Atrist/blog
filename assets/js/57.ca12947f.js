(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{613:function(t,s,a){"use strict";a.r(s);var e=a(4),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://leetcode-cn.com/leetbook/detail/top-interview-questions-easy/",target:"_blank",rel:"noopener noreferrer"}},[t._v("leetcode 初级算法"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/merge-two-sorted-lists/description/",target:"_blank",rel:"noopener noreferrer"}},[t._v("合并两个有序链表"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"合并两个有序链表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并两个有序链表"}},[t._v("#")]),t._v(" 合并两个有序链表")]),t._v(" "),a("p",[t._v("将两个升序链表合并为一个新的 "),a("strong",[t._v("升序")]),t._v(" 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。")]),t._v(" "),a("h3",{attrs:{id:"示例："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例："}},[t._v("#")]),t._v(" 示例：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("输入：1-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n输出：1-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"方法一：递归"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法一：递归"}},[t._v("#")]),t._v(" 方法一：递归")]),t._v(" "),a("h3",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),a("p",[t._v("我们可以如下递归地定义两个链表里的 "),a("code",[t._v("merge")]),t._v(" 操作（忽略边界情况，比如空链表等）：")]),t._v(" "),a("section",[a("eqn",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mo",{attrs:{fence:"true"}},[t._v("{")]),a("mtable",{attrs:{rowspacing:"0.15999999999999992em",columnalign:"left left",columnspacing:"1em"}},[a("mtr",[a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[a("mrow",[a("mi",[t._v("l")]),a("mi",[t._v("i")]),a("mi",[t._v("s")]),a("mi",[t._v("t")]),a("mn",[t._v("1")]),a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mn",[t._v("0")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")]),a("mo",[t._v("+")]),a("mi",[t._v("m")]),a("mi",[t._v("e")]),a("mi",[t._v("r")]),a("mi",[t._v("g")]),a("mi",[t._v("e")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("l")]),a("mi",[t._v("i")]),a("mi",[t._v("s")]),a("mi",[t._v("t")]),a("mn",[t._v("1")]),a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mn",[t._v("1")]),a("mo",[t._v(":")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("l")]),a("mi",[t._v("i")]),a("mi",[t._v("s")]),a("mi",[t._v("t")]),a("mn",[t._v("2")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1)],1)],1),a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[a("mrow",[a("mi",[t._v("l")]),a("mi",[t._v("i")]),a("mi",[t._v("s")]),a("mi",[t._v("t")]),a("mn",[t._v("1")]),a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mn",[t._v("0")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")]),a("mo",[t._v("<")]),a("mi",[t._v("l")]),a("mi",[t._v("i")]),a("mi",[t._v("s")]),a("mi",[t._v("t")]),a("mn",[t._v("2")]),a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mn",[t._v("0")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1)],1)],1)],1),a("mtr",[a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[a("mrow",[a("mi",[t._v("l")]),a("mi",[t._v("i")]),a("mi",[t._v("s")]),a("mi",[t._v("t")]),a("mn",[t._v("2")]),a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mn",[t._v("0")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")]),a("mo",[t._v("+")]),a("mi",[t._v("m")]),a("mi",[t._v("e")]),a("mi",[t._v("r")]),a("mi",[t._v("g")]),a("mi",[t._v("e")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("l")]),a("mi",[t._v("i")]),a("mi",[t._v("s")]),a("mi",[t._v("t")]),a("mn",[t._v("1")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("l")]),a("mi",[t._v("i")]),a("mi",[t._v("s")]),a("mi",[t._v("t")]),a("mn",[t._v("2")]),a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mn",[t._v("1")]),a("mo",[t._v(":")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1)],1)],1),a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[a("mrow",[a("mi",[t._v("o")]),a("mi",[t._v("t")]),a("mi",[t._v("h")]),a("mi",[t._v("e")]),a("mi",[t._v("r")]),a("mi",[t._v("w")]),a("mi",[t._v("i")]),a("mi",[t._v("s")]),a("mi",[t._v("e")])],1)],1)],1)],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\n\\left\\{ \\begin{array}{ll} list1[0] + merge(list1[1:], list2) & list1[0] < list2[0] \\\\ list2[0] + merge(list1, list2[1:]) & otherwise \\end{array} \\right.\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"2.40003em","vertical-align":"-0.95003em"}}),a("span",{staticClass:"minner"},[a("span",{staticClass:"mopen delimcenter",staticStyle:{top:"0em"}},[a("span",{staticClass:"delimsizing size3"},[t._v("{")])]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mtable"},[a("span",{staticClass:"arraycolsep",staticStyle:{width:"0.5em"}}),a("span",{staticClass:"col-align-l"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.45em"}},[a("span",{staticStyle:{top:"-3.61em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathdefault"},[t._v("i")]),a("span",{staticClass:"mord mathdefault"},[t._v("s")]),a("span",{staticClass:"mord mathdefault"},[t._v("t")]),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord"},[t._v("0")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mord mathdefault"},[t._v("m")]),a("span",{staticClass:"mord mathdefault"},[t._v("e")]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),a("span",{staticClass:"mord mathdefault"},[t._v("e")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathdefault"},[t._v("i")]),a("span",{staticClass:"mord mathdefault"},[t._v("s")]),a("span",{staticClass:"mord mathdefault"},[t._v("t")]),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v(":")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathdefault"},[t._v("i")]),a("span",{staticClass:"mord mathdefault"},[t._v("s")]),a("span",{staticClass:"mord mathdefault"},[t._v("t")]),a("span",{staticClass:"mord"},[t._v("2")]),a("span",{staticClass:"mclose"},[t._v(")")])])]),a("span",{staticStyle:{top:"-2.4099999999999997em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathdefault"},[t._v("i")]),a("span",{staticClass:"mord mathdefault"},[t._v("s")]),a("span",{staticClass:"mord mathdefault"},[t._v("t")]),a("span",{staticClass:"mord"},[t._v("2")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord"},[t._v("0")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mord mathdefault"},[t._v("m")]),a("span",{staticClass:"mord mathdefault"},[t._v("e")]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),a("span",{staticClass:"mord mathdefault"},[t._v("e")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathdefault"},[t._v("i")]),a("span",{staticClass:"mord mathdefault"},[t._v("s")]),a("span",{staticClass:"mord mathdefault"},[t._v("t")]),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathdefault"},[t._v("i")]),a("span",{staticClass:"mord mathdefault"},[t._v("s")]),a("span",{staticClass:"mord mathdefault"},[t._v("t")]),a("span",{staticClass:"mord"},[t._v("2")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v(":")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.9500000000000004em"}},[a("span")])])])]),a("span",{staticClass:"arraycolsep",staticStyle:{width:"0.5em"}}),a("span",{staticClass:"arraycolsep",staticStyle:{width:"0.5em"}}),a("span",{staticClass:"col-align-l"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.45em"}},[a("span",{staticStyle:{top:"-3.61em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathdefault"},[t._v("i")]),a("span",{staticClass:"mord mathdefault"},[t._v("s")]),a("span",{staticClass:"mord mathdefault"},[t._v("t")]),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord"},[t._v("0")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("<")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathdefault"},[t._v("i")]),a("span",{staticClass:"mord mathdefault"},[t._v("s")]),a("span",{staticClass:"mord mathdefault"},[t._v("t")]),a("span",{staticClass:"mord"},[t._v("2")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord"},[t._v("0")]),a("span",{staticClass:"mclose"},[t._v("]")])])]),a("span",{staticStyle:{top:"-2.4099999999999997em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[t._v("o")]),a("span",{staticClass:"mord mathdefault"},[t._v("t")]),a("span",{staticClass:"mord mathdefault"},[t._v("h")]),a("span",{staticClass:"mord mathdefault"},[t._v("e")]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02691em"}},[t._v("w")]),a("span",{staticClass:"mord mathdefault"},[t._v("i")]),a("span",{staticClass:"mord mathdefault"},[t._v("s")]),a("span",{staticClass:"mord mathdefault"},[t._v("e")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.9500000000000004em"}},[a("span")])])])]),a("span",{staticClass:"arraycolsep",staticStyle:{width:"0.5em"}})])]),a("span",{staticClass:"mclose nulldelimiter"})])])])])])])],1),a("p",[t._v("也就是说，两个链表头部值较小的一个节点与剩下元素的 "),a("code",[t._v("merge")]),t._v(" 操作结果合并。")]),t._v(" "),a("h3",{attrs:{id:"算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法"}},[t._v("#")]),t._v(" 算法")]),t._v(" "),a("p",[t._v("我们直接将以上递归过程建模，同时需要考虑边界情况。")]),t._v(" "),a("p",[t._v("如果 "),a("code",[t._v("l1")]),t._v(" 或者 "),a("code",[t._v("l2")]),t._v(" 一开始就是空链表 ，那么没有任何操作需要合并，所以我们只需要返回非空链表。否则，我们要判断 "),a("code",[t._v("l1")]),t._v(" 和 "),a("code",[t._v("l2")]),t._v(" 哪一个链表的头节点的值更小，然后递归地决定下一个添加到结果里的节点。如果两个链表有一个为空，递归结束。")]),t._v(" "),a("h3",{attrs:{id:"代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {ListNode} l1\n * @param {ListNode} l2\n * @return {ListNode}\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("mergeTwoLists")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" l2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" l2\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" l1\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeTwoLists")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" l1\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeTwoLists")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" l2\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("h3",{attrs:{id:"复杂度分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复杂度分析"}},[t._v("#")]),t._v(" 复杂度分析")]),t._v(" "),a("ul",[a("li",[t._v("时间复杂度："),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("n")]),a("mo",[t._v("+")]),a("mi",[t._v("m")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n + m)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathdefault"},[t._v("n")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault"},[t._v("m")]),a("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v("，其中 n 和 m 分别为两个链表的长度。因为每次调用递归都会去掉 l1 或者 l2 的头节点（直到至少有一个链表为空），函数 mergeTwoList 至多只会递归调用每个节点一次。因此，时间复杂度取决于合并后的链表长度，即 "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("n")]),a("mo",[t._v("+")]),a("mi",[t._v("m")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n+m)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathdefault"},[t._v("n")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault"},[t._v("m")]),a("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v("。")],1),t._v(" "),a("li",[t._v("空间复杂度："),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("n")]),a("mo",[t._v("+")]),a("mi",[t._v("m")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n + m)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathdefault"},[t._v("n")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault"},[t._v("m")]),a("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v("，其中 n 和 m 分别为两个链表的长度。递归调用 "),a("code",[t._v("mergeTwoLists")]),t._v(" 函数时需要消耗栈空间，栈空间的大小取决于递归调用的深度。结束递归调用时 "),a("code",[t._v("mergeTwoLists")]),t._v(" 函数最多调用 n+m 次，因此空间复杂度为 "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("n")]),a("mo",[t._v("+")]),a("mi",[t._v("m")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n+m)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathdefault"},[t._v("n")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault"},[t._v("m")]),a("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v("。")],1)]),t._v(" "),a("h2",{attrs:{id:"方法二：迭代"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法二：迭代"}},[t._v("#")]),t._v(" 方法二：迭代")]),t._v(" "),a("h3",{attrs:{id:"思路-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路-2"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),a("p",[t._v("我们可以用迭代的方法来实现上述算法。当 l1 和 l2 都不是空链表时，判断 l1 和 l2 哪一个链表的头节点的值更小，将较小值的节点添加到结果里，当一个节点被添加到结果里之后，将对应链表中的节点向后移一位。")]),t._v(" "),a("h3",{attrs:{id:"算法-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法-2"}},[t._v("#")]),t._v(" 算法")]),t._v(" "),a("p",[t._v("首先，我们设定一个哨兵节点 prehead ，这可以在最后让我们比较容易地返回合并后的链表。我们维护一个 prev 指针，我们需要做的是调整它的 next 指针。然后，我们重复以下过程，直到 l1 或者 l2 指向了 null ：如果 l1 当前节点的值小于等于 l2 ，我们就把 l1 当前的节点接在 prev 节点的后面同时将 l1 指针往后移一位。否则，我们对 l2 做同样的操作。不管我们将哪一个元素接在了后面，我们都需要把 prev 向后移一位。")]),t._v(" "),a("p",[t._v("在循环终止的时候， l1 和 l2 至多有一个是非空的。由于输入的两个链表都是有序的，所以不管哪个链表是非空的，它包含的所有元素都比前面已经合并链表中的所有元素都要大。这意味着我们只需要简单地将非空链表接在合并链表的后面，并返回合并链表即可。")]),t._v(" "),a("h3",{attrs:{id:"代码-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码-2"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {ListNode} l1\n * @param {ListNode} l2\n * @return {ListNode}\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("mergeTwoLists")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" l2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" l2\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" l1\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        head "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        l2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        head "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        l1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" prevHead "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" l2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            l2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            l1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        head "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可")]),t._v("\n     head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" l2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" prevHead\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br")])]),a("h3",{attrs:{id:"复杂度分析-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复杂度分析-2"}},[t._v("#")]),t._v(" 复杂度分析")]),t._v(" "),a("ul",[a("li",[t._v("时间复杂度："),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("n")]),a("mo",[t._v("+")]),a("mi",[t._v("m")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n + m)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathdefault"},[t._v("n")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault"},[t._v("m")]),a("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" ，其中 n 和 m 分别为两个链表的长度。因为每次循环迭代中，l1 和 l2 只有一个元素会被放进合并链表中， 因此 while 循环的次数不会超过两个链表的长度之和。所有其他操作的时间复杂度都是常数级别的，因此总的时间复杂度为 "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("n")]),a("mo",[t._v("+")]),a("mi",[t._v("m")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n+m)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathdefault"},[t._v("n")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault"},[t._v("m")]),a("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v("。")],1),t._v(" "),a("li",[t._v("空间复杂度："),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mn",[t._v("1")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(1)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" 。我们只需要常数的空间存放若干变量。")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);