(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{658:function(s,t,a){s.exports=a.p+"assets/img/121_fig1.eae19025.png"},795:function(s,t,a){"use strict";a.r(t);var n=a(5),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"https://leetcode-cn.com/leetbook/detail/top-interview-questions-easy/",target:"_blank",rel:"noopener noreferrer"}},[s._v("leetcode 初级算法"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/description/",target:"_blank",rel:"noopener noreferrer"}},[s._v("买卖股票的最佳时机"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"买卖股票的最佳时机"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#买卖股票的最佳时机"}},[s._v("#")]),s._v(" 买卖股票的最佳时机")]),s._v(" "),n("p",[s._v("给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。")]),s._v(" "),n("p",[s._v("如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。")]),s._v(" "),n("p",[s._v("注意：你不能在买入股票前卖出股票。")]),s._v(" "),n("h3",{attrs:{id:"示例-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例-1"}},[s._v("#")]),s._v(" 示例 1:")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("输入: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7,1")]),s._v(",5,3,6,4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n输出: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n解释: 在第 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 天（股票价格 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("）的时候买入，在第 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" 天（股票价格 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("）的时候卖出，最大利润 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("-1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" 。\n     注意利润不能是 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("-1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(", 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"示例-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[s._v("#")]),s._v(" 示例 2:")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("输入: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7,6")]),s._v(",4,3,1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n输出: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n解释: 在这种情况下, 没有交易完成, 所以最大利润为 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"方法一-暴力法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法一-暴力法"}},[s._v("#")]),s._v(" 方法一：暴力法")]),s._v(" "),n("p",[s._v("我们需要找出给定数组中两个数字之间的最大差值（即，最大利润）。此外，第二个数字（卖出价格）必须大于第一个数字（买入价格）。")]),s._v(" "),n("p",[s._v("形式上，对于每组 i 和 j（其中 j > ij>i）我们需要找出 $\\max(prices[j] - prices[i])$ 。")]),s._v(" "),n("h3",{attrs:{id:"代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[s._v("#")]),s._v(" 代码")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @param {number[]} prices\n * @return {number}\n */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("maxProfit")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("prices")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" maxprofit "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("prices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" j"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("j"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("prices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("j"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" profit "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" prices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" prices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("profit "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" maxprofit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" maxprofit "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" profit\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" maxprofit\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("复杂度分析")]),s._v(" "),n("ul",[n("li",[s._v("时间复杂度：$O(n^2)$。循环运行 $\\dfrac{n (n-1)}{2}$ 次。")]),s._v(" "),n("li",[s._v("空间复杂度：O(1)。只使用了常数个变量。")])]),s._v(" "),n("h2",{attrs:{id:"方法二-一次遍历"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法二-一次遍历"}},[s._v("#")]),s._v(" 方法二：一次遍历")]),s._v(" "),n("h3",{attrs:{id:"算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#算法"}},[s._v("#")]),s._v(" 算法")]),s._v(" "),n("p",[s._v("假设给定的数组为："),n("code",[s._v("[7, 1, 5, 3, 6, 4]")])]),s._v(" "),n("p",[s._v("如果我们在图表上绘制给定数组中的数字，我们将会得到：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(658),alt:""}})]),s._v(" "),n("p",[s._v("我们来假设自己来购买股票。随着时间的推移，每天我们都可以选择出售股票与否。那么，假设在第 i 天，如果我们要在今天卖股票，那么我们能赚多少钱呢？")]),s._v(" "),n("p",[s._v("显然，如果我们真的在买卖股票，我们肯定会想：如果我是在历史最低点买的股票就好了！太好了，在题目中，我们只要用一个变量记录一个历史最低价格 "),n("code",[s._v("minprice")]),s._v("，我们就可以假设自己的股票是在那天买的。那么我们在第 i 天卖出股票能得到的利润就是 "),n("code",[s._v("prices[i] - minprice")]),s._v("。")]),s._v(" "),n("p",[s._v("因此，我们只需要遍历价格数组一遍，记录历史最低点，然后在每一天考虑这么一个问题：如果我是在历史最低点买进的，那么我今天卖出能赚多少钱？当考虑完所有天数之时，我们就得到了最好的答案。")]),s._v(" "),n("h3",{attrs:{id:"代码-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码-2"}},[s._v("#")]),s._v(" 代码")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @param {number[]} prices\n * @return {number}\n */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("maxProfit")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("prices")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" minprice "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("Infinity")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" maxprofit "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("prices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("prices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" minprice"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" minprice "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" prices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("prices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" minprice "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" maxprofit "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" maxprofit "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" prices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" minprice       \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" maxprofit\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h3",{attrs:{id:"复杂度分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#复杂度分析"}},[s._v("#")]),s._v(" 复杂度分析")]),s._v(" "),n("ul",[n("li",[s._v("时间复杂度：O(n)，只需要遍历一次。")]),s._v(" "),n("li",[s._v("空间复杂度：O(1)，只使用了常数个变量。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);