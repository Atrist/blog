(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{636:function(s,t,a){s.exports=a.p+"assets/img/162_fig1.319c08bc.png"},637:function(s,t,a){s.exports=a.p+"assets/img/162_fig2.6d2c1a32.png"},638:function(s,t,a){s.exports=a.p+"assets/img/162_fig3.05f0db2b.png"},791:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"https://leetcode-cn.com/leetbook/detail/top-interview-questions-medium/",target:"_blank",rel:"noopener noreferrer"}},[s._v("leetcode 中级算法"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/find-peak-element/description/",target:"_blank",rel:"noopener noreferrer"}},[s._v("寻找峰值"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"寻找峰值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#寻找峰值"}},[s._v("#")]),s._v(" 寻找峰值")]),s._v(" "),n("p",[s._v("峰值元素是指其值大于左右相邻值的元素。")]),s._v(" "),n("p",[s._v("给定一个输入数组 nums，其中 "),n("code",[s._v("nums[i] ≠ nums[i+1]")]),s._v("，找到峰值元素并返回其索引。")]),s._v(" "),n("p",[s._v("数组可能包含多个峰值，在这种情况下，返回任何一个峰值所在位置即可。")]),s._v(" "),n("p",[s._v("你可以假设 "),n("code",[s._v("nums[-1] = nums[n] = -∞")]),s._v("。")]),s._v(" "),n("h3",{attrs:{id:"示例-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例-1"}},[s._v("#")]),s._v(" 示例 1:")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("输入: nums "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1,2")]),s._v(",3,1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n输出: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n解释: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" 是峰值元素，你的函数应该返回其索引 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"示例-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[s._v("#")]),s._v(" 示例 2:")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("输入: nums "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1,2")]),s._v(",1,3,5,6,4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n输出: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 或 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" \n解释: 你的函数可以返回索引 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("，其峰值元素为 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("；\n     或者返回索引 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("， 其峰值元素为 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[s._v("#")]),s._v(" 说明:")]),s._v(" "),n("p",[s._v("你的解法应该是 "),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[s._v("O")]),n("mo",{attrs:{stretchy:"false"}},[s._v("(")]),n("mi",[s._v("l")]),n("mi",[s._v("o")]),n("mi",[s._v("g")]),n("mi",[s._v("N")]),n("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("O(logN)")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")]),n("span",{staticClass:"mopen"},[s._v("(")]),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.01968em"}},[s._v("l")]),n("span",{staticClass:"mord mathdefault"},[s._v("o")]),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[s._v("g")]),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[s._v("N")]),n("span",{staticClass:"mclose"},[s._v(")")])])])])]),s._v(" 时间复杂度的。")],1),s._v(" "),n("h2",{attrs:{id:"方法一-线性扫描"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法一-线性扫描"}},[s._v("#")]),s._v(" 方法一: 线性扫描")]),s._v(" "),n("p",[s._v("本方法利用了连续的两个元素 nums[j] 和 nums[j + 1] 不会相等这一事实。于是，我们可以从头开始遍历 nums 数组。每当我们遇到数字 nums[i]，只需要检查它是否大于下一个元素 nums[i+1] 即可判断 nums[i] 是否是峰值。可以通过分别讨论问题的全部三种可能情况来理解本方法的思路。")]),s._v(" "),n("p",[s._v("情况 1. 所有的数字以降序排列。这种情况下，第一个元素即为峰值。我们首先检查当前元素是否大于下个元素。第一个元素满足这一条件，因此被正确判断为峰值。此时，我们不需要继续向下判断，也就不会有需要判断 nums[i] 和上一个元素 nums[i-1] 的大小的情况。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(636),alt:""}})]),s._v(" "),n("p",[s._v("情况 2. 所有的数字以升序排列。这种情况下，我们会一直比较 nums[i] 与 nums[i+1] 以判断 nums[i] 是否是峰值元素。没有元素符合这一条件，说明处于上坡而非峰值。于是，在结尾，我们返回末尾元素作为峰值元素，得到正确结果。在这种情况下，我们同样不需要比较 nums[i] 和上一个元素 nums[i-1]，因为处于上坡是 nums[i] 不是峰值的充分条件。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(637),alt:""}})]),s._v(" "),n("p",[s._v("情况 3. 峰值出现在中间某处。这种情况下，当遍历上升部分时，与情况 2 相同，没有元素满足 nums[i] > nums[i + 1]。我们不需要比较 nums[i] 和上一个元素 nums[i-1]。当到达峰值元素时，nums[i] > nums[i + 1] 条件满足。此时，我们同样不需要比较 nums[i] 和上一个元素 nums[i-1]。这是由于“遍历会到达第i个元素”本身就说明上一个元素（第i- 1个）不满足 nums[i] > nums[i + 1] 这一条件，也就说明 nums[i-1] < nums[i]。于是，我们同样可以得到正确结果。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(638),alt:""}})]),s._v(" "),n("h3",{attrs:{id:"代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[s._v("#")]),s._v(" 代码")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @param {number[]} nums\n * @return {number}\n */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("findPeakElement")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("nums")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h3",{attrs:{id:"复杂度分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#复杂度分析"}},[s._v("#")]),s._v(" 复杂度分析")]),s._v(" "),n("ul",[n("li",[s._v("时间复杂度 : O(n)。 我们对长度为 n 的数组 nums 只进行一次遍历。")]),s._v(" "),n("li",[s._v("空间复杂度 : O(1)。 只使用了常数空间。")])]),s._v(" "),n("h2",{attrs:{id:"方法二-递归二分查找"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法二-递归二分查找"}},[s._v("#")]),s._v(" 方法二：递归二分查找")]),s._v(" "),n("h3",{attrs:{id:"算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#算法"}},[s._v("#")]),s._v(" 算法")]),s._v(" "),n("p",[s._v("我们可以将 nums 数组中的任何给定序列视为交替的升序和降序序列。通过利用这一点，以及“可以返回任何一个峰作为结果”的要求，我们可以利用二分查找来找到所需的峰值元素。")]),s._v(" "),n("p",[s._v("在简单的二分查找中，我们处理的是一个有序数列，并通过在每一步减少搜索空间来找到所需要的数字。在本例中，我们对二分查找进行一点修改。首先从数组 nums 中找到中间的元素 mid。若该元素恰好位于降序序列或者一个局部下降坡度中（通过将 nums[i] 与右侧比较判断)，则说明峰值会在本元素的左边。于是，我们将搜索空间缩小为 mid 的左边(包括其本身)，并在左侧子数组上重复上述过程。")]),s._v(" "),n("p",[s._v("若该元素恰好位于升序序列或者一个局部上升坡度中（通过将 nums[i] 与右侧比较判断)，则说明峰值会在本元素的右边。于是，我们将搜索空间缩小为 mid 的右边，并在右侧子数组上重复上述过程。")]),s._v(" "),n("p",[s._v("就这样，我们不断地缩小搜索空间，直到搜索空间中只有一个元素，该元素即为峰值元素。")]),s._v(" "),n("p",[s._v("为了理解本方法的原理，让我们再次讨论前文提到的全部三种情况。")]),s._v(" "),n("p",[s._v("情况 1. 这种情况下，首先找到中间元素 3。由于它处于下降坡度，将搜索空间缩小到 [1, 2, 3]。对于此子数组，2 为中间元素，也处于下降坡度中，于是将搜索空间缩小到 [1, 2]。现在 1 是中间元素并同样处于下降坡度，于是将搜索空间缩小到 [1]。 最终 1 作为答案被正确返回。")]),s._v(" "),n("p",[s._v("情况 2. 这种情况下，首先找到中间元素 3。由于它处于上升坡度，将搜索空间缩小到 [4, 5]。对于此子数组，4 为中间元素，也处于上升坡度中，于是将搜索空间缩小到 [5]。 最终 5 作为答案被正确返回。")]),s._v(" "),n("p",[s._v("情况 3. 这种情况下， 峰值位于中间某处。第一个中间元素是 4。它位于上升坡度，表明峰值在其右侧。于是，搜索空间缩小为 [5, 1]。 现在，5 位于下降坡度（相对其右侧相邻元素）, 搜索空间下降为 [5]。于是，5 被正确识别。")]),s._v(" "),n("h3",{attrs:{id:"代码-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码-2"}},[s._v("#")]),s._v(" 代码")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @param {number[]} nums\n * @return {number}\n */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("findPeakElement")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("nums")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("search")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("l"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" r")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("l "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" l"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("parseInt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("l "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("search")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("l"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" mid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("search")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("search")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h3",{attrs:{id:"复杂度分析-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#复杂度分析-2"}},[s._v("#")]),s._v(" 复杂度分析")]),s._v(" "),n("ul",[n("li",[s._v("时间复杂度 : "),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[s._v("O")]),n("mo",{attrs:{fence:"false"}},[s._v("(")]),n("mi",[s._v("l")]),n("mi",[s._v("o")]),n("msub",[n("mi",[s._v("g")]),n("mn",[s._v("2")])],1),n("mo",{attrs:{stretchy:"false"}},[s._v("(")]),n("mi",[s._v("n")]),n("mo",{attrs:{stretchy:"false"}},[s._v(")")]),n("mo",{attrs:{fence:"false"}},[s._v(")")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("O\\big(log_2(n)\\big)")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"1.20001em","vertical-align":"-0.35001em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")]),n("span",{staticClass:"mord"},[n("span",{staticClass:"delimsizing size1"},[s._v("(")])]),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.01968em"}},[s._v("l")]),n("span",{staticClass:"mord mathdefault"},[s._v("o")]),n("span",{staticClass:"mord"},[n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[s._v("g")]),n("span",{staticClass:"msupsub"},[n("span",{staticClass:"vlist-t vlist-t2"},[n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.30110799999999993em"}},[n("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.03588em","margin-right":"0.05em"}},[n("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),n("span",{staticClass:"sizing reset-size6 size3 mtight"},[n("span",{staticClass:"mord mtight"},[s._v("2")])])])]),n("span",{staticClass:"vlist-s"},[s._v("​")])]),n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[n("span")])])])])]),n("span",{staticClass:"mopen"},[s._v("(")]),n("span",{staticClass:"mord mathdefault"},[s._v("n")]),n("span",{staticClass:"mclose"},[s._v(")")]),n("span",{staticClass:"mord"},[n("span",{staticClass:"delimsizing size1"},[s._v(")")])])])])])]),s._v("。每一步都将搜索空间减半。因此，总的搜索空间只需要 "),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[s._v("l")]),n("mi",[s._v("o")]),n("msub",[n("mi",[s._v("g")]),n("mn",[s._v("2")])],1),n("mo",{attrs:{stretchy:"false"}},[s._v("(")]),n("mi",[s._v("n")]),n("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("log_2(n)")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.01968em"}},[s._v("l")]),n("span",{staticClass:"mord mathdefault"},[s._v("o")]),n("span",{staticClass:"mord"},[n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[s._v("g")]),n("span",{staticClass:"msupsub"},[n("span",{staticClass:"vlist-t vlist-t2"},[n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.30110799999999993em"}},[n("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.03588em","margin-right":"0.05em"}},[n("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),n("span",{staticClass:"sizing reset-size6 size3 mtight"},[n("span",{staticClass:"mord mtight"},[s._v("2")])])])]),n("span",{staticClass:"vlist-s"},[s._v("​")])]),n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[n("span")])])])])]),n("span",{staticClass:"mopen"},[s._v("(")]),n("span",{staticClass:"mord mathdefault"},[s._v("n")]),n("span",{staticClass:"mclose"},[s._v(")")])])])])]),s._v(" 步。其中 n 为 nums 数组的长度。")],1),s._v(" "),n("li",[s._v("空间复杂度: "),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[s._v("O")]),n("mo",{attrs:{fence:"false"}},[s._v("(")]),n("mi",[s._v("l")]),n("mi",[s._v("o")]),n("msub",[n("mi",[s._v("g")]),n("mn",[s._v("2")])],1),n("mo",{attrs:{stretchy:"false"}},[s._v("(")]),n("mi",[s._v("n")]),n("mo",{attrs:{stretchy:"false"}},[s._v(")")]),n("mo",{attrs:{fence:"false"}},[s._v(")")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("O\\big(log_2(n)\\big)")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"1.20001em","vertical-align":"-0.35001em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")]),n("span",{staticClass:"mord"},[n("span",{staticClass:"delimsizing size1"},[s._v("(")])]),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.01968em"}},[s._v("l")]),n("span",{staticClass:"mord mathdefault"},[s._v("o")]),n("span",{staticClass:"mord"},[n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[s._v("g")]),n("span",{staticClass:"msupsub"},[n("span",{staticClass:"vlist-t vlist-t2"},[n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.30110799999999993em"}},[n("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.03588em","margin-right":"0.05em"}},[n("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),n("span",{staticClass:"sizing reset-size6 size3 mtight"},[n("span",{staticClass:"mord mtight"},[s._v("2")])])])]),n("span",{staticClass:"vlist-s"},[s._v("​")])]),n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[n("span")])])])])]),n("span",{staticClass:"mopen"},[s._v("(")]),n("span",{staticClass:"mord mathdefault"},[s._v("n")]),n("span",{staticClass:"mclose"},[s._v(")")]),n("span",{staticClass:"mord"},[n("span",{staticClass:"delimsizing size1"},[s._v(")")])])])])])]),s._v("。每一步都将搜索空间减半。因此，总的搜索空间只需要 "),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[s._v("l")]),n("mi",[s._v("o")]),n("msub",[n("mi",[s._v("g")]),n("mn",[s._v("2")])],1),n("mo",{attrs:{stretchy:"false"}},[s._v("(")]),n("mi",[s._v("n")]),n("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("log_2(n)")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.01968em"}},[s._v("l")]),n("span",{staticClass:"mord mathdefault"},[s._v("o")]),n("span",{staticClass:"mord"},[n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[s._v("g")]),n("span",{staticClass:"msupsub"},[n("span",{staticClass:"vlist-t vlist-t2"},[n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.30110799999999993em"}},[n("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.03588em","margin-right":"0.05em"}},[n("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),n("span",{staticClass:"sizing reset-size6 size3 mtight"},[n("span",{staticClass:"mord mtight"},[s._v("2")])])])]),n("span",{staticClass:"vlist-s"},[s._v("​")])]),n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[n("span")])])])])]),n("span",{staticClass:"mopen"},[s._v("(")]),n("span",{staticClass:"mord mathdefault"},[s._v("n")]),n("span",{staticClass:"mclose"},[s._v(")")])])])])]),s._v("步。于是，递归树的深度为 "),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[s._v("l")]),n("mi",[s._v("o")]),n("msub",[n("mi",[s._v("g")]),n("mn",[s._v("2")])],1),n("mo",{attrs:{stretchy:"false"}},[s._v("(")]),n("mi",[s._v("n")]),n("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("log_2(n)")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.01968em"}},[s._v("l")]),n("span",{staticClass:"mord mathdefault"},[s._v("o")]),n("span",{staticClass:"mord"},[n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[s._v("g")]),n("span",{staticClass:"msupsub"},[n("span",{staticClass:"vlist-t vlist-t2"},[n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.30110799999999993em"}},[n("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.03588em","margin-right":"0.05em"}},[n("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),n("span",{staticClass:"sizing reset-size6 size3 mtight"},[n("span",{staticClass:"mord mtight"},[s._v("2")])])])]),n("span",{staticClass:"vlist-s"},[s._v("​")])]),n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[n("span")])])])])]),n("span",{staticClass:"mopen"},[s._v("(")]),n("span",{staticClass:"mord mathdefault"},[s._v("n")]),n("span",{staticClass:"mclose"},[s._v(")")])])])])]),s._v("。")],1)]),s._v(" "),n("h2",{attrs:{id:"方法三-迭代二分查找"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法三-迭代二分查找"}},[s._v("#")]),s._v(" 方法三：迭代二分查找")]),s._v(" "),n("h3",{attrs:{id:"算法-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#算法-2"}},[s._v("#")]),s._v(" 算法")]),s._v(" "),n("p",[s._v("上述二分查找方法使用了递归。我们可以通过迭代达到同样的效果。本方法即为迭代实现二分查找。")]),s._v(" "),n("h3",{attrs:{id:"代码-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码-3"}},[s._v("#")]),s._v(" 代码")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("findPeakElement")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("nums")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" l"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" r"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("l"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("parseInt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("l"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mid"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" r "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mid\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" l "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" l"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h3",{attrs:{id:"复杂度分析-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#复杂度分析-3"}},[s._v("#")]),s._v(" 复杂度分析")]),s._v(" "),n("ul",[n("li",[s._v("时间复杂度 : "),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[s._v("O")]),n("mo",{attrs:{fence:"false"}},[s._v("(")]),n("mi",[s._v("l")]),n("mi",[s._v("o")]),n("msub",[n("mi",[s._v("g")]),n("mn",[s._v("2")])],1),n("mo",{attrs:{stretchy:"false"}},[s._v("(")]),n("mi",[s._v("n")]),n("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("O\\big(log_2(n)")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"1.20001em","vertical-align":"-0.35001em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")]),n("span",{staticClass:"mord"},[n("span",{staticClass:"delimsizing size1"},[s._v("(")])]),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.01968em"}},[s._v("l")]),n("span",{staticClass:"mord mathdefault"},[s._v("o")]),n("span",{staticClass:"mord"},[n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[s._v("g")]),n("span",{staticClass:"msupsub"},[n("span",{staticClass:"vlist-t vlist-t2"},[n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.30110799999999993em"}},[n("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.03588em","margin-right":"0.05em"}},[n("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),n("span",{staticClass:"sizing reset-size6 size3 mtight"},[n("span",{staticClass:"mord mtight"},[s._v("2")])])])]),n("span",{staticClass:"vlist-s"},[s._v("​")])]),n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[n("span")])])])])]),n("span",{staticClass:"mopen"},[s._v("(")]),n("span",{staticClass:"mord mathdefault"},[s._v("n")]),n("span",{staticClass:"mclose"},[s._v(")")])])])])]),s._v("。 每一步都将搜索空间减半。因此，总的搜索空间只需要 "),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[s._v("l")]),n("mi",[s._v("o")]),n("msub",[n("mi",[s._v("g")]),n("mn",[s._v("2")])],1),n("mo",{attrs:{stretchy:"false"}},[s._v("(")]),n("mi",[s._v("n")]),n("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("log_2(n)")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.01968em"}},[s._v("l")]),n("span",{staticClass:"mord mathdefault"},[s._v("o")]),n("span",{staticClass:"mord"},[n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[s._v("g")]),n("span",{staticClass:"msupsub"},[n("span",{staticClass:"vlist-t vlist-t2"},[n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.30110799999999993em"}},[n("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.03588em","margin-right":"0.05em"}},[n("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),n("span",{staticClass:"sizing reset-size6 size3 mtight"},[n("span",{staticClass:"mord mtight"},[s._v("2")])])])]),n("span",{staticClass:"vlist-s"},[s._v("​")])]),n("span",{staticClass:"vlist-r"},[n("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[n("span")])])])])]),n("span",{staticClass:"mopen"},[s._v("(")]),n("span",{staticClass:"mord mathdefault"},[s._v("n")]),n("span",{staticClass:"mclose"},[s._v(")")])])])])]),s._v("步。其中 n 为 nums 数组的长度。")],1),s._v(" "),n("li",[s._v("空间复杂度 : O(1)。 只使用了常数空间。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);