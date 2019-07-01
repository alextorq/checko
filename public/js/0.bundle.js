webpackJsonp([0,1],{246:function(t,e,r){var s=r(1)(r(575),r(576),!1,null,null,null);t.exports=s.exports},572:function(t,e,r){var s=r(1)(r(573),r(574),!1,null,null,null);t.exports=s.exports},573:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"FormInput",data:function(){return{}},computed:{pathToIcon:function(){return'<use  xlink:href="/images/sprites.svg#sprite-'.concat(this.icon,'"></use>')},focus:function(){return{focus:!!this.value,error:!!this.errors.length}}},methods:{validate:function(){this.required&&(this.value?this.$emit("error",{action:!1,filed:"empty",name:"".concat(this.name),message:""}):this.$emit("error",{action:!0,filed:"empty",name:"".concat(this.name),message:"The ".concat(this.label," field is required.")})),this.min&&this.minValidate(),this.email&&this.emailValidate(this.min)},minValidate:function(){this.value.length<this.min?this.value&&this.$emit("error",{action:!0,filed:"length",name:this.name,message:"min chars is ".concat(this.min)}):this.$emit("error",{action:!1,filed:"length",name:this.name,message:""})},emailValidate:function(){!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.value)&&this.value?this.$emit("error",{action:!0,filed:"email",name:this.name,message:"Е-mail fail. Please type in your correct e-mail."}):this.$emit("error",{action:!1,filed:"email",name:this.name,message:""})}},props:{name:{type:String,required:!0},label:{type:String,required:!0},icon:{type:String,required:!1},min:{type:Number,required:!1},value:{type:String,required:!0},required:{type:Boolean,required:!1},errors:{type:Array,default:function(){return[]},required:!1},email:{type:Boolean,required:!1}}}},574:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-item",class:t.focus},[t.icon?r("span",{staticClass:"icon"},[r("svg",{domProps:{innerHTML:t._s(t.pathToIcon)}})]):t._e(),t._v(" "),r("input",{attrs:{type:"text",name:t.name,id:t.name},domProps:{value:t.value},on:{keyup:t.validate,input:function(e){return t.$emit("input",e.target.value)}}}),t._v(" "),r("label",{attrs:{for:t.name}},[t._v("\n        "+t._s(t.label)+"\n    ")]),t._v(" "),r("span",{staticClass:"correct-icon"},[r("span",{staticClass:"correct"},[r("svg",{staticStyle:{"enable-background":"new 0 0 16.8 10.9"},attrs:{version:"1.1",id:"Слой_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 16.8 10.9","xml:space":"preserve"}},[r("path",{staticClass:"st1",attrs:{d:"M14.4,0.5L9.6,6.1C9.5,6.2,9.4,6.4,9.2,6.5l-0.9,1L6.1,4.8l0,0L2.4,0.5C1.9-0.1,1-0.2,0.5,0.3\n            c-0.6,0.5-0.6,1.3-0.1,1.9l7,8.2c0.4,0.4,0.9,0.6,1.4,0.4c0,0,0,0,0,0c0,0,0.1,0,0.1,0c0,0,0,0,0,0c0,0,0.1,0,0.1,0c0,0,0,0,0,0\n            c0,0,0.1,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0-0.1c0,0,0,0,0,0\n            l7.1-8.2c0.5-0.6,0.4-1.4-0.1-1.9C15.8-0.2,14.9-0.1,14.4,0.5z"}})])]),t._v(" "),r("span",{staticClass:"incorrect"},[r("svg",{staticStyle:{"enable-background":"new 0 0 26.5 26.5"},attrs:{version:"1.1",id:"Слой_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 26.5 26.5","xml:space":"preserve"}},[r("path",{staticClass:"st1",attrs:{d:"M15.4,13.2L26,2.6C26.6,2,26.6,1,26,0.4c-0.6-0.6-1.5-0.6-2.1,0L13.2,11.1L2.6,0.4C2-0.1,1-0.1,0.4,0.4\n                    C-0.1,1-0.1,2,0.4,2.6l10.7,10.7L0.4,23.9c-0.6,0.6-0.6,1.5,0,2.1s1.5,0.6,2.1,0l10.7-10.7L23.9,26c0.6,0.6,1.5,0.6,2.1,0\n                    c0.6-0.6,0.6-1.5,0-2.1L15.4,13.2z"}})])])]),t._v(" "),r("ul",{staticClass:"error-message"},t._l(t.errors,function(e){return r("li",[e.message?r("span",[t._v(t._s(e.message))]):r("span",[t._v(" "+t._s(e))])])}),0)])},staticRenderFns:[]}},575:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(572),a=r.n(s),i=r(245),n=r.n(i);function o(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e.default={name:"FormRegistration",data:function(){return{form:{name:{value:"",errors:[],serverErrors:[]},email:{value:"",errors:[],serverErrors:[]},password:{value:"",errors:[],serverErrors:[]},password_confirmation:{value:"",errors:[],serverErrors:[]}}}},computed:{nameError:function(){return this.form.name.errors.concat(this.form.name.serverErrors)},emailError:function(){return this.form.email.errors.concat(this.form.email.serverErrors)},passwordError:function(){return this.form.password.errors.concat(this.form.password.serverErrors)},password_confirmationError:function(){return this.form.password_confirmation.errors.concat(this.form.password_confirmation.serverErrors)}},methods:{errorUpdate:function(t){this.clearError(t.name);var e=this.form[t.name].errors,r=t.filed,s=-1;e.forEach(function(t,e){t.filed===r&&(s=e)});var a=!!(s+1);t.action&&!a?e.push(t):a&&!t.action&&e.splice(s,1)},validate:function(){for(var t in this.form)this.$refs[t]&&this.$refs[t].validate();for(var e in this.form){if((e=this.form[e]).errors.length)return!1}return!0},clearError:function(t){if(t)this.form[t].serverErrors=[];else for(var e in this.form)(e=this.form[e]).serverErrors=[]},send:function(){var t=this;this.validate()&&axios.post("/register",{name:this.form.name.value,email:this.form.email.value,password:this.form.password.value,password_confirmation:this.form.password_confirmation.value}).then(function(e){t.$store.commit("updateUser",e.data),t.$router.push({name:"CheckList"})}).catch(function(e){422===e.response.status&&t.showErrors(e.response.data.errors)})},showErrors:function(t){for(var e in t){var r,s=t[e];(r=this.form[e].serverErrors).push.apply(r,o(s))}}},components:{inputForm:a.a,inputFormPassword:n.a}}},576:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-registration form-center-wrapper"},[r("form",{attrs:{action:"/",method:"post"},on:{submit:function(e){return e.preventDefault(),t.send(e)}}},[t._m(0),t._v(" "),r("inputForm",{ref:"name",attrs:{name:"name",label:"Username",icon:"user",required:!0,errors:t.nameError,min:4},on:{error:t.errorUpdate},model:{value:t.form.name.value,callback:function(e){t.$set(t.form.name,"value",e)},expression:"form.name.value"}}),t._v(" "),r("inputForm",{ref:"email",attrs:{name:"email",label:"Е-mail",icon:"mail",required:!0,errors:t.emailError,email:!0},on:{error:t.errorUpdate},model:{value:t.form.email.value,callback:function(e){t.$set(t.form.email,"value",e)},expression:"form.email.value"}}),t._v(" "),r("inputFormPassword",{ref:"password",attrs:{name:"password",label:"Password",min:8,icon:"password",required:!0,errors:t.passwordError},on:{error:t.errorUpdate},model:{value:t.form.password.value,callback:function(e){t.$set(t.form.password,"value",e)},expression:"form.password.value"}}),t._v(" "),r("inputFormPassword",{ref:"password_confirmation",attrs:{name:"password_confirmation",label:"Repeat password",min:8,icon:"password",required:!0,repeat:t.form.password.value,errors:t.password_confirmationError},on:{error:t.errorUpdate},model:{value:t.form.password_confirmation.value,callback:function(e){t.$set(t.form.password_confirmation,"value",e)},expression:"form.password_confirmation.value"}}),t._v(" "),r("div",{staticClass:"flex-row jcb aic form-links"},[r("button",{staticClass:"button"},[t._v("SING UP")]),t._v(" "),r("router-link",{attrs:{to:"/login"}},[t._v("I have an account")])],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex-row jcb ais top-row"},[e("h2",[this._v("Sign up and start your "),e("span",[this._v("7 day free trial")])]),this._v(" "),e("div",{staticClass:"sing-with-wrapper flex-row jcb aic"},[e("span",[this._v("Sign in with")]),this._v(" "),e("ul",{staticClass:"sing-with__list flex-row jcb aic"},[e("li",{staticClass:"sing-with__item"},[e("a",{attrs:{href:"/provider?provider=google"}},[e("img",{attrs:{src:"/images/google.png",alt:"google"}})])]),this._v(" "),e("li",{staticClass:"sing-with__item"},[e("a",{attrs:{href:"/provider?provider=facebook"}},[e("img",{attrs:{src:"/images/facebook.png",alt:"facebook"}})])]),this._v(" "),e("li",{staticClass:"sing-with__item"},[e("a",{attrs:{href:"/provider?provider=twitter"}},[e("img",{attrs:{src:"/images/twitter.png",alt:"twitter"}})])])])])])}]}},577:function(t,e,r){var s=r(1)(r(578),r(579),!1,null,null,null);t.exports=s.exports},578:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"copyright"}},579:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"copyright"},[e("div",{staticClass:"container"},[e("div",{staticClass:"default-content"},[e("router-link",{attrs:{to:"/pages/term-of-services"}},[this._v("Term |")]),this._v(" "),e("router-link",{attrs:{to:"/pages/privacy"}},[this._v(" Privacy | ")]),this._v(" "),e("span",[this._v(" © 2019 checko.me")])],1)])])},staticRenderFns:[]}},588:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(246),a=r.n(s),i=r(577),n=r.n(i);e.default={name:"index",data:function(){return{allList:1}},components:{RegistrationForm:a.a,copyright:n.a},created:function(){var t=this;axios.get("frontend/checklist/amountLst").then(function(e){t.allList=+e.data}).catch(function(t){console.log(t)})}}},589:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page_about"},[r("section",{staticClass:"heroimage__about"},[r("div",{staticClass:"container"},[r("div",{staticClass:"about-content"},[t._m(0),t._v(" "),r("div",{staticClass:"image-wrapper"},[r("img",{attrs:{src:"/images/monitor.svg",alt:"Monitor"}}),t._v(" "),r("div",{staticClass:"video"},[r("video",{attrs:{autoplay:"",muted:""},domProps:{muted:!0}},[r("source",{attrs:{src:"/video/introduce.mp4"}})])])])])])]),t._v(" "),t._m(1),t._v(" "),r("section",{staticClass:"all_check-list"},[r("div",{staticClass:"container"},[r("div",{staticClass:"about-content"},[t._m(2),t._v(" "),r("div",{staticClass:"amount"},[t._v(t._s(t.allList))])])])]),t._v(" "),r("section",{staticClass:"form"},[r("div",{staticClass:"container"},[r("RegistrationForm")],1)]),t._v(" "),t._m(3)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[this._v("\n                    A simple way to create"),e("br"),this._v("\n                    and share a check-list\n                ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"advantages"},[e("div",{staticClass:"container"},[e("div",{staticClass:"about-content"},[e("ul",[e("li",[e("div",{staticClass:"title caption"},[e("span",{staticClass:"logo-icon"},[e("img",{attrs:{src:"/images/check_green.svg",alt:"checko"}})]),this._v("\n                            Simple interface\n                        ")]),this._v(" "),e("div",{staticClass:"text"},[this._v("\n                            We’ve tried to create a truly simple and convenient service for managing check-lists\n                        ")])]),this._v(" "),e("li",[e("div",{staticClass:"title caption"},[e("span",{staticClass:"logo-icon"},[e("img",{attrs:{src:"/images/check_green.svg",alt:"checko"}})]),this._v("\n                            Time-saving\n                        ")]),this._v(" "),e("div",{staticClass:"text"},[this._v("\n                            It is not an obligatory step to sign in so that you can create and share a check-list.\n                            It’s enough to create tasks and share a link with an executor.\n                        ")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"caption"},[this._v("\n                    check"),e("span",{staticClass:"logo-icon"},[e("img",{attrs:{src:"/images/check_green.svg",alt:"checko"}})]),this._v(" sheets created\n                ")])},function(){var t=this.$createElement;return(this._self._c||t)("copyright")}]}},595:function(t,e,r){var s=r(1)(r(588),r(589),!1,null,null,null);t.exports=s.exports}});