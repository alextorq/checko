webpackJsonp([0,1],{246:function(r,e,t){var s=t(1)(t(575),t(576),!1,null,null,null);r.exports=s.exports},572:function(r,e,t){var s=t(1)(t(573),t(574),!1,null,null,null);r.exports=s.exports},573:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"FormInput",data:function(){return{}},computed:{pathToIcon:function(){return'<use  xlink:href="/images/sprites.svg#sprite-'.concat(this.icon,'"></use>')},focus:function(){return{focus:!!this.value,error:!!this.errors.length}}},methods:{validate:function(){this.required&&(this.value?this.$emit("error",{action:!1,filed:"empty",name:"".concat(this.name),message:""}):this.$emit("error",{action:!0,filed:"empty",name:"".concat(this.name),message:"The ".concat(this.label," field is required.")})),this.min&&this.minValidate(),this.email&&this.emailValidate(this.min)},minValidate:function(){this.value.length<this.min?this.value&&this.$emit("error",{action:!0,filed:"length",name:this.name,message:"min chars is ".concat(this.min)}):this.$emit("error",{action:!1,filed:"length",name:this.name,message:""})},emailValidate:function(){!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.value)&&this.value?this.$emit("error",{action:!0,filed:"email",name:this.name,message:"Е-mail fail. Please type in your correct e-mail."}):this.$emit("error",{action:!1,filed:"email",name:this.name,message:""})}},props:{name:{type:String,required:!0},label:{type:String,required:!0},icon:{type:String,required:!1},min:{type:Number,required:!1},value:{type:String,required:!0},required:{type:Boolean,required:!1},errors:{type:Array,default:function(){return[]},required:!1},email:{type:Boolean,required:!1}}}},574:function(r,e){r.exports={render:function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{staticClass:"form-item",class:r.focus},[r.icon?t("span",{staticClass:"icon"},[t("svg",{domProps:{innerHTML:r._s(r.pathToIcon)}})]):r._e(),r._v(" "),t("input",{attrs:{type:"text",name:r.name,id:r.name},domProps:{value:r.value},on:{keyup:r.validate,input:function(e){return r.$emit("input",e.target.value)}}}),r._v(" "),t("label",{attrs:{for:r.name}},[r._v("\n        "+r._s(r.label)+"\n    ")]),r._v(" "),t("span",{staticClass:"correct-icon"},[t("span",{staticClass:"correct"},[t("svg",{staticStyle:{"enable-background":"new 0 0 16.8 10.9"},attrs:{version:"1.1",id:"Слой_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 16.8 10.9","xml:space":"preserve"}},[t("path",{staticClass:"st1",attrs:{d:"M14.4,0.5L9.6,6.1C9.5,6.2,9.4,6.4,9.2,6.5l-0.9,1L6.1,4.8l0,0L2.4,0.5C1.9-0.1,1-0.2,0.5,0.3\n            c-0.6,0.5-0.6,1.3-0.1,1.9l7,8.2c0.4,0.4,0.9,0.6,1.4,0.4c0,0,0,0,0,0c0,0,0.1,0,0.1,0c0,0,0,0,0,0c0,0,0.1,0,0.1,0c0,0,0,0,0,0\n            c0,0,0.1,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0-0.1c0,0,0,0,0,0\n            l7.1-8.2c0.5-0.6,0.4-1.4-0.1-1.9C15.8-0.2,14.9-0.1,14.4,0.5z"}})])]),r._v(" "),t("span",{staticClass:"incorrect"},[t("svg",{staticStyle:{"enable-background":"new 0 0 26.5 26.5"},attrs:{version:"1.1",id:"Слой_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 26.5 26.5","xml:space":"preserve"}},[t("path",{staticClass:"st1",attrs:{d:"M15.4,13.2L26,2.6C26.6,2,26.6,1,26,0.4c-0.6-0.6-1.5-0.6-2.1,0L13.2,11.1L2.6,0.4C2-0.1,1-0.1,0.4,0.4\n                    C-0.1,1-0.1,2,0.4,2.6l10.7,10.7L0.4,23.9c-0.6,0.6-0.6,1.5,0,2.1s1.5,0.6,2.1,0l10.7-10.7L23.9,26c0.6,0.6,1.5,0.6,2.1,0\n                    c0.6-0.6,0.6-1.5,0-2.1L15.4,13.2z"}})])])]),r._v(" "),t("ul",{staticClass:"error-message"},r._l(r.errors,function(e){return t("li",[e.message?t("span",[r._v(r._s(e.message))]):t("span",[r._v(" "+r._s(e))])])}),0)])},staticRenderFns:[]}},575:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t(572),a=t.n(s),i=t(245),n=t.n(i);function o(r){return function(r){if(Array.isArray(r)){for(var e=0,t=new Array(r.length);e<r.length;e++)t[e]=r[e];return t}}(r)||function(r){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r))return Array.from(r)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e.default={name:"FormRegistration",data:function(){return{form:{name:{value:"",errors:[],serverErrors:[]},email:{value:"",errors:[],serverErrors:[]},password:{value:"",errors:[],serverErrors:[]},password_confirmation:{value:"",errors:[],serverErrors:[]}}}},computed:{nameError:function(){return this.form.name.errors.concat(this.form.name.serverErrors)},emailError:function(){return this.form.email.errors.concat(this.form.email.serverErrors)},passwordError:function(){return this.form.password.errors.concat(this.form.password.serverErrors)},password_confirmationError:function(){return this.form.password_confirmation.errors.concat(this.form.password_confirmation.serverErrors)}},methods:{errorUpdate:function(r){this.clearError(r.name);var e=this.form[r.name].errors,t=r.filed,s=-1;e.forEach(function(r,e){r.filed===t&&(s=e)});var a=!!(s+1);r.action&&!a?e.push(r):a&&!r.action&&e.splice(s,1)},validate:function(){for(var r in this.form)this.$refs[r]&&this.$refs[r].validate();for(var e in this.form){if((e=this.form[e]).errors.length)return!1}return!0},clearError:function(r){if(r)this.form[r].serverErrors=[];else for(var e in this.form)(e=this.form[e]).serverErrors=[]},send:function(){var r=this;this.validate()&&axios.post("/register",{name:this.form.name.value,email:this.form.email.value,password:this.form.password.value,password_confirmation:this.form.password_confirmation.value}).then(function(e){r.$store.commit("updateUser",e.data),r.$router.push({name:"CheckList"})}).catch(function(e){422===e.response.status&&r.showErrors(e.response.data.errors)})},showErrors:function(r){for(var e in r){var t,s=r[e];(t=this.form[e].serverErrors).push.apply(t,o(s))}}},components:{inputForm:a.a,inputFormPassword:n.a}}},576:function(r,e){r.exports={render:function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{staticClass:"form-registration-wrapper"},[t("form",{attrs:{action:"/",method:"post"},on:{submit:function(e){return e.preventDefault(),r.send(e)}}},[r._m(0),r._v(" "),t("inputForm",{ref:"name",attrs:{name:"name",label:"Username",icon:"user",required:!0,errors:r.nameError,min:4},on:{error:r.errorUpdate},model:{value:r.form.name.value,callback:function(e){r.$set(r.form.name,"value",e)},expression:"form.name.value"}}),r._v(" "),t("inputForm",{ref:"email",attrs:{name:"email",label:"Е-mail",icon:"mail",required:!0,errors:r.emailError,email:!0},on:{error:r.errorUpdate},model:{value:r.form.email.value,callback:function(e){r.$set(r.form.email,"value",e)},expression:"form.email.value"}}),r._v(" "),t("inputFormPassword",{ref:"password",attrs:{name:"password",label:"Password",min:8,icon:"password",required:!0,errors:r.passwordError},on:{error:r.errorUpdate},model:{value:r.form.password.value,callback:function(e){r.$set(r.form.password,"value",e)},expression:"form.password.value"}}),r._v(" "),t("inputFormPassword",{ref:"password_confirmation",attrs:{name:"password_confirmation",label:"Repeat password",min:8,icon:"password",required:!0,repeat:r.form.password.value,errors:r.password_confirmationError},on:{error:r.errorUpdate},model:{value:r.form.password_confirmation.value,callback:function(e){r.$set(r.form.password_confirmation,"value",e)},expression:"form.password_confirmation.value"}}),r._v(" "),t("div",{staticClass:"flex-row jcb aic"},[t("button",{staticClass:"button"},[r._v("SING UP")]),r._v(" "),t("router-link",{attrs:{to:"/login"}},[r._v("I have an account")])],1)],1)])},staticRenderFns:[function(){var r=this.$createElement,e=this._self._c||r;return e("h2",[this._v("Sign up and start your "),e("span",[this._v("7 day free trial")])])}]}},585:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t(246),a=t.n(s);e.default={name:"index",data:function(){return{allList:1}},components:{RegistrationForm:a.a},created:function(){var r=this;axios.get("frontend/checklist/amountLst").then(function(e){r.allList=+e.data}).catch(function(r){console.log(r)})}}},586:function(r,e){r.exports={render:function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{staticClass:"page_about"},[t("section",{staticClass:"heroimage__about"},[t("div",{staticClass:"container"},[r._m(0),r._v(" "),t("div",{staticClass:"image-wrapper"},[t("img",{attrs:{src:"/images/monitor.svg",alt:"Monitor"}}),r._v(" "),t("div",{staticClass:"video"},[t("video",{attrs:{autoplay:"",muted:""},domProps:{muted:!0}},[t("source",{attrs:{src:"/video/introduce.mp4"}})])])])])]),r._v(" "),r._m(1),r._v(" "),t("section",{staticClass:"all_check-list"},[t("div",{staticClass:"container"},[r._m(2),r._v(" "),t("div",{staticClass:"amount"},[r._v(r._s(r.allList))])])]),r._v(" "),t("section",{staticClass:"form"},[t("div",{staticClass:"container"},[t("RegistrationForm")],1)]),r._v(" "),t("section",{staticClass:"copyright"},[t("div",{staticClass:"container"},[t("router-link",{attrs:{to:"/pages/term-of-services"}},[r._v("Term of services")])],1)])])},staticRenderFns:[function(){var r=this.$createElement,e=this._self._c||r;return e("h1",[this._v("\n                A simple way to create"),e("br"),this._v("\n                and share a check-list\n            ")])},function(){var r=this.$createElement,e=this._self._c||r;return e("section",{staticClass:"advantages"},[e("div",{staticClass:"container"},[e("ul",[e("li",[e("div",{staticClass:"title caption"},[e("span",{staticClass:"logo-icon"},[e("img",{attrs:{src:"/images/check_green.svg",alt:"checko"}})]),this._v("\n                        Simple interface\n                    ")]),this._v(" "),e("div",{staticClass:"text"},[this._v("\n                        We’ve tried to create a truly simple and convenient service for managing check-lists\n                    ")])]),this._v(" "),e("li",[e("div",{staticClass:"title caption"},[e("span",{staticClass:"logo-icon"},[e("img",{attrs:{src:"/images/check_green.svg",alt:"checko"}})]),this._v("\n                        Time-saving\n                    ")]),this._v(" "),e("div",{staticClass:"text"},[this._v("\n                        It is not an obligatory step to sign in so that you can create and share a check-list.\n                        It’s enough to create tasks and share a link with an executor.\n                    ")])])])])])},function(){var r=this.$createElement,e=this._self._c||r;return e("div",{staticClass:"caption"},[this._v("\n                check"),e("span",{staticClass:"logo-icon"},[e("img",{attrs:{src:"/images/check_green.svg",alt:"checko"}})]),this._v(" sheets created\n            ")])}]}},592:function(r,e,t){var s=t(1)(t(585),t(586),!1,null,null,null);r.exports=s.exports}});