(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{730:function(s,a,t){"use strict";t.r(a);var n=t(5),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://leetcode-cn.com/leetbook/detail/top-interview-questions-medium/",target:"_blank",rel:"noopener noreferrer"}},[s._v("leetcode 中级算法"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/increasing-triplet-subsequence/description/",target:"_blank",rel:"noopener noreferrer"}},[s._v("递增的三元子序列"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/increasing-triplet-subsequence/solution/c-xian-xing-shi-jian-fu-za-du-xiang-xi-jie-xi-da-b/",target:"_blank",rel:"noopener noreferrer"}},[s._v("正直清澈方欣欣的解法"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"递增的三元子序列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#递增的三元子序列"}},[s._v("#")]),s._v(" 递增的三元子序列")]),s._v(" "),t("p",[s._v("给定一个未排序的数组，判断这个数组中是否存在长度为 3 的递增子序列。")]),s._v(" "),t("p",[s._v("数学表达式如下:")]),s._v(" "),t("blockquote",[t("p",[s._v("如果存在这样的 i, j, k,  且满足 0 ≤ i < j < k ≤ n-1， "),t("br"),s._v("\n使得 arr[i] < arr[j] < arr[k] ，返回 true ; 否则返回 false 。")])]),s._v(" "),t("h3",{attrs:{id:"说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[s._v("#")]),s._v(" 说明:")]),s._v(" "),t("p",[s._v("要求算法的时间复杂度为 O(n)，空间复杂度为 O(1) 。")]),s._v(" "),t("h3",{attrs:{id:"示例-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例-1"}},[s._v("#")]),s._v(" 示例 1:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("输入: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1,2")]),s._v(",3,4,5"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n输出: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"示例-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[s._v("#")]),s._v(" 示例 2:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("输入: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5,4")]),s._v(",3,2,1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n输出: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),t("p",[s._v("首先，新建两个变量 "),t("code",[s._v("small")]),s._v(" 和 "),t("code",[s._v("mid")]),s._v(" ，分别用来保存题目要我们求的长度为 3 的递增子序列的最小值和中间值。")]),s._v(" "),t("p",[s._v("接着，我们遍历数组，每遇到一个数字，我们将它和 "),t("code",[s._v("small")]),s._v(" 和 "),t("code",[s._v("mid")]),s._v(" 相比，若小于等于 "),t("code",[s._v("small")]),s._v(" ，则替换 "),t("code",[s._v("small")]),s._v("；否则，若小于等于 "),t("code",[s._v("mid")]),s._v("，则替换 "),t("code",[s._v("mid")]),s._v("；否则，若大于 "),t("code",[s._v("mid")]),s._v("，则说明我们找到了长度为 3 的递增数组！")]),s._v(" "),t("p",[s._v("上面的求解过程中有个问题：当已经找到了长度为 2 的递增序列，这时又来了一个比 small 还小的数字，为什么可以直接替换 "),t("code",[s._v("small")]),s._v(" 呢，这样 "),t("code",[s._v("small")]),s._v(" 和 "),t("code",[s._v("mid")]),s._v(" 在原数组中并不是按照索引递增的关系呀？")]),s._v(" "),t("p",[s._v("Trick 就在这里了！假如当前的 "),t("code",[s._v("small")]),s._v(" 和 "),t("code",[s._v("mid")]),s._v(" 为 "),t("code",[s._v("[3, 5]")]),s._v("，这时又来了个 "),t("code",[s._v("1")]),s._v("。假如我们不将 "),t("code",[s._v("small")]),s._v(" 替换为 "),t("code",[s._v("1")]),s._v("，那么，当下一个数字是 "),t("code",[s._v("2")]),s._v("，后面再接上一个 3 的时候，我们就没有办法发现这个 "),t("code",[s._v("[1,2,3]")]),s._v(" 的递增数组了！也就是说，我们替换最小值，是为了后续能够更好地更新中间值！")]),s._v(" "),t("p",[s._v("另外，即使我们更新了 "),t("code",[s._v("small")]),s._v(" ，这个 "),t("code",[s._v("small")]),s._v(" 在 "),t("code",[s._v("mid")]),s._v(" 后面，没有严格遵守递增顺序，但它隐含着的真相是，有一个比 "),t("code",[s._v("small")]),s._v(" 大比 "),t("code",[s._v("mid")]),s._v(" 小的前·最小值出现在 "),t("code",[s._v("mid")]),s._v(" 之前。因此，当后续出现比 "),t("code",[s._v("mid")]),s._v(" 大的值的时候，我们一样可以通过当前 "),t("code",[s._v("small")]),s._v(" 和 "),t("code",[s._v("mid")]),s._v(" 推断的确存在着长度为 3 的递增序列。 所以，这样的替换并不会干扰我们后续的计算！")]),s._v(" "),t("h3",{attrs:{id:"代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[s._v("#")]),s._v(" 代码")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @param {number[]} nums\n * @return {boolean}\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("increasingTriplet")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("nums")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" length "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" nums"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" small "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("Infinity")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" mid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("Infinity")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" num "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("of")]),s._v(" nums"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" small"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            small "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" num\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" mid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            mid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("h3",{attrs:{id:"复杂度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复杂度"}},[s._v("#")]),s._v(" 复杂度")]),s._v(" "),t("ul",[t("li",[s._v("时间复杂度: O(n)")]),s._v(" "),t("li",[s._v("空间复杂度: O(1)")])])])}),[],!1,null,null,null);a.default=e.exports}}]);