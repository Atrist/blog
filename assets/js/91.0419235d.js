(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{799:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://leetcode-cn.com/leetbook/detail/top-interview-questions-easy/",target:"_blank",rel:"noopener noreferrer"}},[s._v("leetcode 初级算法"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/house-robber/description/",target:"_blank",rel:"noopener noreferrer"}},[s._v("打家劫舍"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"打家劫舍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打家劫舍"}},[s._v("#")]),s._v(" 打家劫舍")]),s._v(" "),a("p",[s._v("你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，"),a("strong",[s._v("如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警")]),s._v("。")]),s._v(" "),a("p",[s._v("给定一个代表每个房屋存放金额的非负整数数组，计算你 "),a("strong",[s._v("不触动警报装置的情况下")]),s._v(" ，一夜之内能够偷窃到的最高金额。")]),s._v(" "),a("h3",{attrs:{id:"示例-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-1"}},[s._v("#")]),s._v(" 示例 1：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("输入："),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1,2")]),s._v(",3,1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n输出：4\n解释：偷窃 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 号房屋 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("金额 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ，然后偷窃 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" 号房屋 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("金额 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("。\n     偷窃到的最高金额 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" + "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" 。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"示例-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[s._v("#")]),s._v(" 示例 2：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("输入："),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2,7")]),s._v(",9,3,1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n输出：12\n解释：偷窃 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 号房屋 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("金额 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", 偷窃 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" 号房屋 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("金额 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("，接着偷窃 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" 号房屋 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("金额 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("。\n     偷窃到的最高金额 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" + "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" + "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" 。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"提示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提示"}},[s._v("#")]),s._v(" 提示：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("0 <= nums.length <= 100")])]),s._v(" "),a("li",[a("code",[s._v("0 <= nums[i] <= 400")])])]),s._v(" "),a("h2",{attrs:{id:"方法一-动态规划-滚动数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法一-动态规划-滚动数组"}},[s._v("#")]),s._v(" 方法一：动态规划 + 滚动数组")]),s._v(" "),a("p",[s._v("首先考虑最简单的情况。如果只有一间房屋，则偷窃该房屋，可以偷窃到最高总金额。如果只有两间房屋，则由于两间房屋相邻，不能同时偷窃，只能偷窃其中的一间房屋，因此选择其中金额较高的房屋进行偷窃，可以偷窃到最高总金额。")]),s._v(" "),a("p",[s._v("如果房屋数量大于两间，应该如何计算能够偷窃到的最高总金额呢？对于第 "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[s._v("k")]),a("mtext"),a("mo",{attrs:{stretchy:"false"}},[s._v("(")]),a("mi",[s._v("k")]),a("mo",[s._v(">")]),a("mn",[s._v("2")]),a("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("k~(k>2)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03148em"}},[s._v("k")]),a("span",{staticClass:"mspace nobreak"}),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03148em"}},[s._v("k")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[s._v(">")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord"},[s._v("2")]),a("span",{staticClass:"mclose"},[s._v(")")])])])])]),s._v(" 间房屋，有两个选项：")],1),s._v(" "),a("ol",[a("li",[a("p",[s._v("偷窃第 k 间房屋，那么就不能偷窃第 k-1 间房屋，偷窃总金额为前 k-2 间房屋的最高总金额与第 k 间房屋的金额之和。")])]),s._v(" "),a("li",[a("p",[s._v("不偷窃第 k 间房屋，偷窃总金额为前 k-1 间房屋的最高总金额。")])])]),s._v(" "),a("p",[s._v("在两个选项中选择偷窃总金额较大的选项，该选项对应的偷窃总金额即为前 k 间房屋能偷窃到的最高总金额。")]),s._v(" "),a("p",[s._v("用 dp[i] 表示前 i 间房屋能偷窃到的最高总金额，那么就有如下的状态转移方程：")]),s._v(" "),a("p",[s._v("方程：")]),s._v(" "),a("section",[a("eqn",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mtext",{attrs:{mathvariant:"italic"}},[s._v("dp")]),a("mo",{attrs:{stretchy:"false"}},[s._v("[")]),a("mi",[s._v("i")]),a("mo",{attrs:{stretchy:"false"}},[s._v("]")]),a("mo",[s._v("=")]),a("mi",[s._v("max")]),a("mo",[s._v("⁡")]),a("mo",{attrs:{stretchy:"false"}},[s._v("(")]),a("mtext",{attrs:{mathvariant:"italic"}},[s._v("dp")]),a("mo",{attrs:{stretchy:"false"}},[s._v("[")]),a("mi",[s._v("i")]),a("mo",[s._v("−")]),a("mn",[s._v("2")]),a("mo",{attrs:{stretchy:"false"}},[s._v("]")]),a("mo",[s._v("+")]),a("mtext",{attrs:{mathvariant:"italic"}},[s._v("nums")]),a("mo",{attrs:{stretchy:"false"}},[s._v("[")]),a("mi",[s._v("i")]),a("mo",{attrs:{stretchy:"false"}},[s._v("]")]),a("mo",{attrs:{separator:"true"}},[s._v(",")]),a("mtext",{attrs:{mathvariant:"italic"}},[s._v("dp")]),a("mo",{attrs:{stretchy:"false"}},[s._v("[")]),a("mi",[s._v("i")]),a("mo",[s._v("−")]),a("mn",[s._v("1")]),a("mo",{attrs:{stretchy:"false"}},[s._v("]")]),a("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\\textit{dp}[i] = \\max(\\textit{dp}[i-2]+\\textit{nums}[i], \\textit{dp}[i-1])")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord text"},[a("span",{staticClass:"mord textit"},[s._v("dp")])]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathdefault"},[s._v("i")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mop"},[s._v("max")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord text"},[a("span",{staticClass:"mord textit"},[s._v("dp")])]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathdefault"},[s._v("i")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord"},[s._v("2")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[s._v("+")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord text"},[a("span",{staticClass:"mord textit"},[s._v("nums")])]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathdefault"},[s._v("i")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mpunct"},[s._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord text"},[a("span",{staticClass:"mord textit"},[s._v("dp")])]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathdefault"},[s._v("i")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord"},[s._v("1")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mclose"},[s._v(")")])])])])])])],1),a("p",[s._v("边界条件为：")]),s._v(" "),a("section",[a("eqn",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mo",{attrs:{fence:"true"}},[s._v("{")]),a("mtable",{attrs:{rowspacing:"0.3599999999999999em",columnalign:"left left",columnspacing:"1em"}},[a("mtr",[a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[a("mrow",[a("mtext",{attrs:{mathvariant:"italic"}},[s._v("dp")]),a("mo",{attrs:{stretchy:"false"}},[s._v("[")]),a("mn",[s._v("0")]),a("mo",{attrs:{stretchy:"false"}},[s._v("]")]),a("mo",[s._v("=")]),a("mtext",{attrs:{mathvariant:"italic"}},[s._v("nums")]),a("mo",{attrs:{stretchy:"false"}},[s._v("[")]),a("mn",[s._v("0")]),a("mo",{attrs:{stretchy:"false"}},[s._v("]")])],1)],1)],1),a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[a("mtext",[s._v("只有一间房屋，则偷窃该房屋")])],1)],1)],1),a("mtr",[a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[a("mrow",[a("mtext",{attrs:{mathvariant:"italic"}},[s._v("dp")]),a("mo",{attrs:{stretchy:"false"}},[s._v("[")]),a("mn",[s._v("1")]),a("mo",{attrs:{stretchy:"false"}},[s._v("]")]),a("mo",[s._v("=")]),a("mi",[s._v("max")]),a("mo",[s._v("⁡")]),a("mo",{attrs:{stretchy:"false"}},[s._v("(")]),a("mtext",{attrs:{mathvariant:"italic"}},[s._v("nums")]),a("mo",{attrs:{stretchy:"false"}},[s._v("[")]),a("mn",[s._v("0")]),a("mo",{attrs:{stretchy:"false"}},[s._v("]")]),a("mo",{attrs:{separator:"true"}},[s._v(",")]),a("mtext",{attrs:{mathvariant:"italic"}},[s._v("nums")]),a("mo",{attrs:{stretchy:"false"}},[s._v("[")]),a("mn",[s._v("1")]),a("mo",{attrs:{stretchy:"false"}},[s._v("]")]),a("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1)],1)],1),a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[a("mtext",[s._v("只有两间房屋，选择其中金额较高的房屋进行偷窃")])],1)],1)],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\\begin{cases} \\textit{dp}[0] = \\textit{nums}[0] & 只有一间房屋，则偷窃该房屋 \\\\ \\textit{dp}[1] = \\max(\\textit{nums}[0], \\textit{nums}[1]) & 只有两间房屋，选择其中金额较高的房屋进行偷窃 \\end{cases}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"3.0000299999999998em","vertical-align":"-1.25003em"}}),a("span",{staticClass:"minner"},[a("span",{staticClass:"mopen delimcenter",staticStyle:{top:"0em"}},[a("span",{staticClass:"delimsizing size4"},[s._v("{")])]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mtable"},[a("span",{staticClass:"col-align-l"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.69em"}},[a("span",{staticStyle:{top:"-3.69em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.008em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord text"},[a("span",{staticClass:"mord textit"},[s._v("dp")])]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord"},[s._v("0")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mord text"},[a("span",{staticClass:"mord textit"},[s._v("nums")])]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord"},[s._v("0")]),a("span",{staticClass:"mclose"},[s._v("]")])])]),a("span",{staticStyle:{top:"-2.25em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.008em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord text"},[a("span",{staticClass:"mord textit"},[s._v("dp")])]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord"},[s._v("1")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mop"},[s._v("max")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord text"},[a("span",{staticClass:"mord textit"},[s._v("nums")])]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord"},[s._v("0")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mpunct"},[s._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord text"},[a("span",{staticClass:"mord textit"},[s._v("nums")])]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord"},[s._v("1")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mclose"},[s._v(")")])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.19em"}},[a("span")])])])]),a("span",{staticClass:"arraycolsep",staticStyle:{width:"1em"}}),a("span",{staticClass:"col-align-l"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.69em"}},[a("span",{staticStyle:{top:"-3.69em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.008em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord cjk_fallback"},[s._v("只")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("有")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("一")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("间")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("房")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("屋")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("，")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("则")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("偷")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("窃")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("该")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("房")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("屋")])])]),a("span",{staticStyle:{top:"-2.25em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.008em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord cjk_fallback"},[s._v("只")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("有")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("两")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("间")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("房")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("屋")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("，")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("选")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("择")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("其")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("中")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("金")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("额")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("较")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("高")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("的")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("房")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("屋")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("进")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("行")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("偷")]),a("span",{staticClass:"mord cjk_fallback"},[s._v("窃")])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.19em"}},[a("span")])])])])])]),a("span",{staticClass:"mclose nulldelimiter"})])])])])])])],1),a("p",[s._v("​\t\n最终的答案即为 "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mtext",{attrs:{mathvariant:"italic"}},[s._v("dp")]),a("mo",{attrs:{stretchy:"false"}},[s._v("[")]),a("mi",[s._v("n")]),a("mo",[s._v("−")]),a("mn",[s._v("1")]),a("mo",{attrs:{stretchy:"false"}},[s._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\\textit{dp}[n-1]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord text"},[a("span",{staticClass:"mord textit"},[s._v("dp")])]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathdefault"},[s._v("n")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord"},[s._v("1")]),a("span",{staticClass:"mclose"},[s._v("]")])])])])]),s._v("，其中 n 是数组的长度。")],1),s._v(" "),a("h3",{attrs:{id:"代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[s._v("#")]),s._v(" 代码")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @param {number[]} nums\n * @return {number}\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("rob")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("nums")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" dp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("上述方法使用了数组存储结果。考虑到每间房屋的最高总金额只和该房屋的前两间房屋的最高总金额相关，因此可以使用滚动数组，在每个时刻只需要存储前两间房屋的最高总金额。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @param {number[]} nums\n * @return {number}\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("rob")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("nums")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" dp0 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" dp1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" temp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" dp1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        dp1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("max")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dp0 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dp1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        dp0 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" temp\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" dp1\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h3",{attrs:{id:"复杂度分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复杂度分析"}},[s._v("#")]),s._v(" 复杂度分析")]),s._v(" "),a("ul",[a("li",[s._v("时间复杂度："),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[s._v("O")]),a("mo",{attrs:{stretchy:"false"}},[s._v("(")]),a("mi",[s._v("n")]),a("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("O(n)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathdefault"},[s._v("n")]),a("span",{staticClass:"mclose"},[s._v(")")])])])])]),s._v("，其中 n 是数组长度。只需要对数组遍历一次。")],1),s._v(" "),a("li",[s._v("空间复杂度："),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[s._v("O")]),a("mo",{attrs:{stretchy:"false"}},[s._v("(")]),a("mn",[s._v("1")]),a("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("O(1)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord"},[s._v("1")]),a("span",{staticClass:"mclose"},[s._v(")")])])])])]),s._v("。使用滚动数组，可以只存储前两间房屋的最高总金额，而不需要存储整个数组的结果，因此空间复杂度是 O(1)。")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);