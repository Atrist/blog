(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{456:function(t,n,e){},457:function(t,n,e){},464:function(t,n,e){"use strict";var r=e(456);e.n(r).a},465:function(t,n,e){"use strict";var r=e(457);e.n(r).a},466:function(t,n,e){var r=e(244),i=e(237),o=e(467),a=e(471);t.exports=function(t,n){if(null==t)return{};var e=r(a(t),(function(t){return[t]}));return n=i(n),o(t,e,(function(t,e){return n(t,e[0])}))}},467:function(t,n,e){var r=e(161),i=e(468),o=e(156);t.exports=function(t,n,e){for(var a=-1,s=n.length,u={};++a<s;){var p=n[a],c=r(t,p);e(c,p)&&i(u,o(p,t),c)}return u}},468:function(t,n,e){var r=e(469),i=e(156),o=e(159),a=e(105),s=e(61);t.exports=function(t,n,e,u){if(!a(t))return t;for(var p=-1,c=(n=i(n,t)).length,l=c-1,f=t;null!=f&&++p<c;){var m=s(n[p]),v=e;if(p!=l){var g=f[m];void 0===(v=u?u(g,m,f):void 0)&&(v=a(g)?g:o(n[p+1])?[]:{})}r(f,m,v),f=f[m]}return t}},469:function(t,n,e){var r=e(470),i=e(158),o=Object.prototype.hasOwnProperty;t.exports=function(t,n,e){var a=t[n];o.call(t,n)&&i(a,e)&&(void 0!==e||n in t)||r(t,n,e)}},470:function(t,n,e){var r=e(245);t.exports=function(t,n,e){"__proto__"==n&&r?r(t,n,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[n]=e}},471:function(t,n,e){var r=e(238),i=e(472),o=e(474);t.exports=function(t){return r(t,o,i)}},472:function(t,n,e){var r=e(157),i=e(473),o=e(239),a=e(240),s=Object.getOwnPropertySymbols?function(t){for(var n=[];t;)r(n,o(t)),t=i(t);return n}:a;t.exports=s},473:function(t,n,e){var r=e(243)(Object.getPrototypeOf,Object);t.exports=r},474:function(t,n,e){var r=e(241),i=e(475),o=e(160);t.exports=function(t){return o(t)?r(t,!0):i(t)}},475:function(t,n,e){var r=e(105),i=e(242),o=e(476),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var n=i(t),e=[];for(var s in t)("constructor"!=s||!n&&a.call(t,s))&&e.push(s);return e}},476:function(t,n){t.exports=function(t){var n=[];if(null!=t)for(var e in Object(t))n.push(e);return n}},482:function(t,n,e){},489:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return f}));e(27);var r={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;e.e(3).then(e.t.bind(null,562,7)).then((function(n){t.comp=n.default}))},methods:{clickCallback:function(t){var n=this.$pagination.getSpecificPageLink(t-1);this.$router.push(n)}}},i=(e(464),e(5)),o=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.comp?e(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,a=(e(465),Object(i.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?e("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?e("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),s=(e(236),e(107)),u=e.n(s),p=e(466),c=e.n(p),l={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return c()(this.$props,u.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},f=Object(i.a)(l,(function(){var t=this.$createElement,n=this._self._c||t;return"vssue"===this.$service.comment.service?n("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?n("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},540:function(t,n,e){"use strict";var r=e(482);e.n(r).a},568:function(t,n,e){"use strict";e.r(n);e(162),e(3);var r=e(163),i=e.n(r),o=e(7),a=e(489),s={components:{NavigationIcon:o.n,ClockIcon:o.a,TagIcon:o.q},data:function(){return{paginationComponent:null}},computed:{pages:function(){return this.$pagination.pages}},created:function(){this.paginationComponent=this.getPaginationComponent()},methods:{getPaginationComponent:function(){return a.b},resolvePostDate:function(t){return i()(t).format(this.$themeConfig.dateFormat||"ddd MMM DD YYYY")},resolvePostTags:function(t){return!t||Array.isArray(t)?t:[t]}}},u=(e(540),e(5)),p=Object(u.a)(s,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"base-list-layout"}},[e("div",{staticClass:"ui-posts",attrs:{itemscope:"",itemtype:"http://schema.org/Blog"}},t._l(t.pages,(function(n){return e("article",{key:n.key,staticClass:"ui-post",attrs:{itemprop:"blogPost",itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[e("meta",{attrs:{itemprop:"mainEntityOfPage",content:n.path}}),t._v(" "),e("header",{staticClass:"ui-post-title",attrs:{itemprop:"name headline"}},[e("NavLink",{attrs:{link:n.path}},[t._v(t._s(n.title))])],1),t._v(" "),e("p",{staticClass:"ui-post-summary",attrs:{itemprop:"description"}},[t._v("\n        "+t._s(n.frontmatter.summary||n.summary)+"\n        ")]),t._v(" "),e("footer",[n.frontmatter.author?e("div",{staticClass:"ui-post-meta ui-post-author",attrs:{itemprop:"publisher author",itemtype:"http://schema.org/Person",itemscope:""}},[e("NavigationIcon"),t._v(" "),e("span",{attrs:{itemprop:"name"}},[t._v(t._s(n.frontmatter.author))]),t._v(" "),n.frontmatter.location?e("span",{attrs:{itemprop:"address"}},[t._v("\n              in "+t._s(n.frontmatter.location)+"\n          ")]):t._e()],1):t._e(),t._v(" "),n.frontmatter.date?e("div",{staticClass:"ui-post-meta ui-post-date"},[e("ClockIcon"),t._v(" "),e("time",{attrs:{pubdate:"",itemprop:"datePublished",datetime:n.frontmatter.date}},[t._v("\n            "+t._s(t.resolvePostDate(n.frontmatter.date))+"\n          ")])],1):t._e(),t._v(" "),n.frontmatter.tags?e("div",{staticClass:"ui-post-meta ui-post-tag",attrs:{itemprop:"keywords"}},[e("TagIcon"),t._v(" "),t._l(t.resolvePostTags(n.frontmatter.tags),(function(n){return e("router-link",{key:n,attrs:{to:"/tag/"+n}},[t._v("\n            "+t._s(n)+"\n          ")])}))],2):t._e()])])})),0),t._v(" "),t.$pagination.length>1&&t.paginationComponent?e(t.paginationComponent,{tag:"component"}):t._e()],1)}),[],!1,null,null,null);n.default=p.exports}}]);