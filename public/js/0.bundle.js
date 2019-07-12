webpackJsonp([0],{535:function(t,e,s){var a=s(1)(s(536),s(537),!0,null,null,null);t.exports=a.exports},536:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"copyright"}},537:function(t,e){t.exports={render:function(t,e){var s=e._c;return s("section",{staticClass:"copyright"},[s("div",{staticClass:"container"},[s("div",{staticClass:"default-content"},[s("router-link",{attrs:{to:"/pages/term-of-services"}},[e._v("Term |")]),e._v(" "),s("router-link",{attrs:{to:"/pages/privacy"}},[e._v(" Privacy | ")]),e._v(" "),s("span",[e._v(" © 2019 checko.me")])],1)])])},staticRenderFns:[]}},552:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(553),n=s.n(a),r=s(559),i=s.n(r),o=s(535),c=s.n(o),l=s(562),u=s.n(l),p=s(219),h=s.n(p),f=s(245),v=s.n(f);e.default={name:"index",data:function(){return{posts:{},allPost:{},sortBy:"likes.like_count",loading:!0,sortOptions:[{name:"by date",value:"created_at"},{name:"by popular",value:"likes.like_count"}]}},methods:{loadPage:function(t){var e=this;t in this.allPost?this.posts=this.allPost[t]:(this.loading=!0,axios.get("frontend/offers/all",{params:{page:t,sortBy:this.sortBy}}).then(function(s){e.posts=Object.freeze(s.data),e.allPost[t]=Object.freeze(s.data)}).catch(function(t){console.log(t)}).finally(function(){e.loading=!1}))},refresh:function(){this.allPost={},this.loadPage(this.posts.current_page||1)},sortHandler:function(t){this.sortBy=t.value,this.refresh()}},components:{offer:n.a,offerForm:i.a,copyright:c.a,pagination:u.a,preloader:h.a,appSelect:v.a},props:{urlPage:{required:!1,type:Number,default:1}},created:function(){this.loadPage(this.urlPage)}}},553:function(t,e,s){var a=s(1)(s(554),s(558),!1,null,null,null);t.exports=a.exports},554:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(0),n=s.n(a),r=s(555),i=s.n(r);e.default={name:"offer_post",data:function(){return{likes:[],userLiked:!1}},computed:{dateFormat:function(){var t=this.$store.getters.getDateFormatDefault.value;return n()(this.post.created_at).format(t)},likeCount:function(){return this.likes.length||""},userAlreadyLike:function(){return this.userLiked=this.likes.includes(this.$store.getters.userID),{liked:this.userLiked}}},methods:{like:function(){var t=this;if(this.$store.getters.userLoginStatus){if(this.likes.includes(this.$store.getters.userID)){var e=this.likes.findIndex(function(e){return e===t.$store.getters.userID});this.likes.splice(e,1)}else this.likes.push(this.$store.getters.userID);axios.post("/frontend/offers/like/".concat(this.post.post_id)).then(function(){}).catch(function(t){console.log(t)})}else this.$notify({duration:3e3,type:"warning",text:"Only auth user can like"})}},components:{Avatar:i.a},created:function(){this.likes=JSON.parse(this.post.users_id)},props:{post:{type:Object,required:!0}}}},555:function(t,e,s){var a=s(1)(s(556),s(557),!1,null,null,null);t.exports=a.exports},556:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"index",computed:{avatarStatus:function(){return this.user?!!this.user.avatar:!!this.avatar},avatarPath:function(){return this.user?this.user.avatar:this.avatar},userInitials:function(){var t=(this.user||this.name).split(" "),e=[];return e.push(t[0].split("")[0]),t.length>1&&e.push(t[1].split("")[0]),e.join("")}},props:{user:{type:Object,required:!1},name:{type:String,required:!1},avatar:{type:String,required:!1}}}},557:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user_avatar"},[this.avatarStatus?e("span",{staticClass:"avatar-wrapper image",style:{backgroundImage:"url("+this.avatarPath+")"}}):e("span",{staticClass:"avatar-wrapper"},[this._v("\n        "+this._s(this.userInitials)+"\n    ")])])},staticRenderFns:[]}},558:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"offer__item"},[s("div",{staticClass:"meta"},[s("Avatar",{attrs:{avatar:t.post.avatar,name:t.post.name}}),t._v(" "),s("div",[s("div",{staticClass:"user_name"},[t._v("\n                "+t._s(t.post.name)+"\n            ")]),t._v(" "),s("div",{staticClass:"date"},[t._v("\n                "+t._s(t.dateFormat)+"\n            ")])]),t._v(" "),s("button",{staticClass:"like_button",class:t.userAlreadyLike,on:{click:t.like}},[s("span",{staticClass:"icon"},[s("svg",[s("use",{attrs:{"xlink:href":"/images/sprites.svg#sprite-like"}})])]),t._v(" "),s("span",{staticClass:"like_count"},[t._v(t._s(t.likeCount))])])],1),t._v(" "),s("p",[t._v(t._s(t.post.content))])])},staticRenderFns:[]}},559:function(t,e,s){var a=s(1)(s(560),s(561),!1,null,null,null);t.exports=a.exports},560:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"offers_form",data:function(){return{list:[],content:""}},computed:{userAuth:function(){return this.$store.getters.userLoginStatus}},methods:{singIn:function(){this.$router.push({name:"Registration"})},send:function(){var t=this;this.content&&axios.post("/frontend/offers/create",{content:this.content}).then(function(){t.content="",t.$emit("send")}).catch(function(t){console.log(t)})}}}},561:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"offer-form-wrapper"},[s("h2",[t._v("To offer")]),t._v(" "),t.userAuth?s("div",[s("p",[t._v("Сюда нужно написать текст, вроде того, что если вы не нашли своей проблемы среди вопросов,\n            то вы можете  задать свой вопрос, и мы ответим на него в течениии стольки-то. на английскойм текст нужен\n        ")]),t._v(" "),s("form",{attrs:{action:"/frontend/offers/create",method:"post"},on:{submit:function(e){return e.preventDefault(),t.send(e)}}},[s("label",[s("div",{staticClass:"icon-wrapper"},[s("span",{staticClass:"icon"},[s("svg",[s("use",{attrs:{"xlink:href":"/images/sprites.svg#sprite-comment"}})])]),t._v(" "),s("span",[t._v("Offer")])]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{name:"content",cols:"30",rows:"10"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]),t._v(" "),s("button",{staticClass:"button",attrs:{type:"submit"}},[t._v("TO OFFER")])])]):s("div",[s("p",[t._v("Сюда нужно написать текст, вроде того, что если вы не нашли своей проблемы среди вопросов")]),t._v(" "),s("button",{staticClass:"button",on:{click:t.singIn}},[t._v("Sing in")])])])},staticRenderFns:[]}},562:function(t,e,s){var a=s(1)(s(563),s(564),!1,null,null,null);t.exports=a.exports},563:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"pagination",data:function(){return{page:"",max:5,showMoreNext:!1,showMorePrev:!1}},computed:{renderPages:function(){var t=this.max,e=(t-1)/2,s=Number(this.page),a=Number(this.allPage),n=!1,r=!1;a>t&&(s>t-e&&(n=!0),s<a-e&&(r=!0));var i=[];if(n&&!r)for(var o=a-(t-2);o<a;o++)i.push(o);else if(!n&&r)for(var c=2;c<t;c++)i.push(c);else if(n&&r)for(var l=Math.floor(t/2)-1,u=s-l;u<=s+l;u++)i.push(u);else for(var p=2;p<a;p++)i.push(p);return this.showMorePrev=n,this.showMoreNext=r,i}},methods:{changePage:function(t){this.page!==t&&(this.page=t,this.changeURL(),this.$emit("change_page",this.page))},nextPage:function(){this.page!==this.allPage&&(this.page=this.page+1,this.changeURL(),this.$emit("change_page",this.page))},prevPage:function(){1!==this.page&&(this.page=this.page-1,this.changeURL(),this.$emit("change_page",this.page))},showMorePrevFun:function(){this.page=this.page-Math.floor(this.page/2),this.changeURL(),this.$emit("change_page",this.page)},showMoreNextFun:function(){this.page+=Math.floor((this.allPage-this.page)/2),this.changeURL(),this.$emit("change_page",this.page)},changeURL:function(){var t=window.location.protocol+"//"+window.location.host+window.location.pathname+"?urlPage="+this.page;window.history.pushState({path:t},"",t)},historyPushDetect:function(){var t=this;window.onpopstate=function(e){var s,a,n;e.state&&(t.page=(s="urlPage",a=null,n=[],location.search.substr(1).split("&").forEach(function(t){(n=t.split("="))[0]===s&&(a=decodeURIComponent(n[1]))}),+a),t.$emit("change_page",t.page))}}},watch:{currentPage:function(t){this.page=t}},props:{allPage:{required:!0,type:Number,default:1},currentPage:{required:!0,type:Number,default:1}},beforeDestroy:function(){window.onpopstate=null},created:function(){this.historyPushDetect(),this.page=this.currentPage}}},564:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.allPage>1?s("ul",{staticClass:"pagination"},[s("li",{staticClass:"prev-arrow pagination_arrow",on:{click:t.prevPage}},[s("div",{staticClass:"arrow"})]),t._v(" "),s("li",{class:{active:1===t.page},on:{click:function(e){return t.changePage(1)}}},[t._v("1\n    ")]),t._v(" "),t.showMorePrev?s("li",{on:{click:t.showMorePrevFun}},[t._v("\n        ...\n    ")]):t._e(),t._v(" "),t._l(t.renderPages,function(e){return s("li",{class:{active:t.page===e},on:{click:function(s){return t.changePage(e)}}},[t._v(t._s(e)+"\n    ")])}),t._v(" "),t.showMoreNext?s("li",{on:{click:t.showMoreNextFun}},[t._v("\n        ...\n    ")]):t._e(),t._v(" "),s("li",{class:{active:t.page===t.allPage},on:{click:function(e){return t.changePage(t.allPage)}}},[t._v(t._s(t.allPage)+"\n    ")]),t._v(" "),s("li",{staticClass:"next-arrow pagination_arrow",on:{click:t.nextPage}},[s("div",{staticClass:"arrow"})])],2):t._e()},staticRenderFns:[]}},565:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"default-content offer-page"},[s("preloader",{attrs:{active:t.loading}}),t._v(" "),s("h1",[t._v("Offers")]),t._v(" "),s("p",[t._v("Сюда нужно написать текст, предложите свои пожелания замечание,\n            нам очень важно ваше мнение, чтобы сделать наш сервис лучше\n        ")]),t._v(" "),s("div",{staticClass:"sort"},[s("appSelect",{attrs:{list:t.sortOptions,name:"sort",default_value:t.sortOptions[1]},on:{change:t.sortHandler}})],1),t._v(" "),s("div",{staticClass:"offers__list"},[s("transition-group",{attrs:{name:"list"}},t._l(t.posts.data,function(t){return s("offer",{key:t.post_id,attrs:{post:t}})}),1)],1),t._v(" "),s("pagination",{attrs:{"current-page":t.posts.current_page,"all-page":t.posts.last_page},on:{change_page:t.loadPage}}),t._v(" "),s("offerForm",{on:{send:t.refresh}}),t._v(" "),s("copyright")],1)])},staticRenderFns:[]}},595:function(t,e,s){var a=s(1)(s(552),s(565),!1,null,null,null);t.exports=a.exports}});