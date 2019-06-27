webpackJsonp([3],{572:function(e,r,t){var s=t(1)(t(573),t(574),!1,null,null,null);e.exports=s.exports},573:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={name:"FormInput",data:function(){return{}},computed:{pathToIcon:function(){return'<use  xlink:href="/images/sprites.svg#sprite-'.concat(this.icon,'"></use>')},focus:function(){return{focus:!!this.value,error:!!this.errors.length}}},methods:{validate:function(){this.required&&(this.value?this.$emit("error",{action:!1,filed:"empty",name:"".concat(this.name),message:""}):this.$emit("error",{action:!0,filed:"empty",name:"".concat(this.name),message:"The ".concat(this.label," field is required.")})),this.min&&this.minValidate(),this.email&&this.emailValidate(this.min)},minValidate:function(){this.value.length<this.min?this.value&&this.$emit("error",{action:!0,filed:"length",name:this.name,message:"min chars is ".concat(this.min)}):this.$emit("error",{action:!1,filed:"length",name:this.name,message:""})},emailValidate:function(){!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.value)&&this.value?this.$emit("error",{action:!0,filed:"email",name:this.name,message:"Е-mail fail. Please type in your correct e-mail."}):this.$emit("error",{action:!1,filed:"email",name:this.name,message:""})}},props:{name:{type:String,required:!0},label:{type:String,required:!0},icon:{type:String,required:!1},min:{type:Number,required:!1},value:{type:String,required:!0},required:{type:Boolean,required:!1},errors:{type:Array,default:function(){return[]},required:!1},email:{type:Boolean,required:!1}}}},574:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"form-item",class:e.focus},[e.icon?t("span",{staticClass:"icon"},[t("svg",{domProps:{innerHTML:e._s(e.pathToIcon)}})]):e._e(),e._v(" "),t("input",{attrs:{type:"text",name:e.name,id:e.name},domProps:{value:e.value},on:{keyup:e.validate,input:function(r){return e.$emit("input",r.target.value)}}}),e._v(" "),t("label",{attrs:{for:e.name}},[e._v("\n        "+e._s(e.label)+"\n    ")]),e._v(" "),t("span",{staticClass:"correct-icon"},[t("span",{staticClass:"correct"},[t("svg",{staticStyle:{"enable-background":"new 0 0 16.8 10.9"},attrs:{version:"1.1",id:"Слой_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 16.8 10.9","xml:space":"preserve"}},[t("path",{staticClass:"st1",attrs:{d:"M14.4,0.5L9.6,6.1C9.5,6.2,9.4,6.4,9.2,6.5l-0.9,1L6.1,4.8l0,0L2.4,0.5C1.9-0.1,1-0.2,0.5,0.3\n            c-0.6,0.5-0.6,1.3-0.1,1.9l7,8.2c0.4,0.4,0.9,0.6,1.4,0.4c0,0,0,0,0,0c0,0,0.1,0,0.1,0c0,0,0,0,0,0c0,0,0.1,0,0.1,0c0,0,0,0,0,0\n            c0,0,0.1,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0-0.1c0,0,0,0,0,0\n            l7.1-8.2c0.5-0.6,0.4-1.4-0.1-1.9C15.8-0.2,14.9-0.1,14.4,0.5z"}})])]),e._v(" "),t("span",{staticClass:"incorrect"},[t("svg",{staticStyle:{"enable-background":"new 0 0 26.5 26.5"},attrs:{version:"1.1",id:"Слой_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 26.5 26.5","xml:space":"preserve"}},[t("path",{staticClass:"st1",attrs:{d:"M15.4,13.2L26,2.6C26.6,2,26.6,1,26,0.4c-0.6-0.6-1.5-0.6-2.1,0L13.2,11.1L2.6,0.4C2-0.1,1-0.1,0.4,0.4\n                    C-0.1,1-0.1,2,0.4,2.6l10.7,10.7L0.4,23.9c-0.6,0.6-0.6,1.5,0,2.1s1.5,0.6,2.1,0l10.7-10.7L23.9,26c0.6,0.6,1.5,0.6,2.1,0\n                    c0.6-0.6,0.6-1.5,0-2.1L15.4,13.2z"}})])])]),e._v(" "),t("ul",{staticClass:"error-message"},e._l(e.errors,function(r){return t("li",[r.message?t("span",[e._v(e._s(r.message))]):t("span",[e._v(" "+e._s(r))])])}),0)])},staticRenderFns:[]}},579:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s=t(572),i=t.n(s),n=t(245),a=t.n(n);function o(e){return function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.default={name:"ForgotPassword",data:function(){return{form:{email:{value:"",errors:[],serverErrors:[]},password:{value:"",errors:[],serverErrors:[]}}}},computed:{emailError:function(){return this.form.email.errors.concat(this.form.email.serverErrors)},passwordError:function(){return this.form.password.errors.concat(this.form.password.serverErrors)}},methods:{errorUpdate:function(e){this.clearError(e.name);var r=this.form[e.name].errors,t=e.filed,s=-1;r.forEach(function(e,r){e.filed===t&&(s=r)});var i=!!(s+1);e.action&&!i?r.push(e):i&&!e.action&&r.splice(s,1)},validate:function(){for(var e in this.form)this.$refs[e]&&this.$refs[e].validate();for(var r in this.form){if((r=this.form[r]).errors.length)return!1}return!0},clearError:function(e){if(e)this.form[e].serverErrors=[];else for(var r in this.form)(r=this.form[r]).serverErrors=[]},send:function(){var e=this;this.validate()&&axios.post("/password/email",{email:this.form.email.value}).then(function(r){e.$notify({duration:-1,type:"success",text:"A message has been sent to you by email with instructions on how to reset your password."})}).catch(function(r){422===r.response.status&&e.showErrors(r.response.data.errors)})},showErrors:function(e){for(var r in e){var t,s=e[r];(t=this.form[r].serverErrors).push.apply(t,o(s))}}},components:{inputForm:i.a,inputFormPassword:a.a}}},580:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"form-registration-wrapper form-forgot"},[t("form",{attrs:{action:"/",method:"post"},on:{submit:function(r){return r.preventDefault(),e.send(r)}}},[e._m(0),e._v(" "),t("inputForm",{ref:"email",attrs:{name:"email",label:"Е-mail",icon:"mail",required:!0,errors:e.emailError,email:!0},on:{error:e.errorUpdate},model:{value:e.form.email.value,callback:function(r){e.$set(e.form.email,"value",r)},expression:"form.email.value"}}),e._v(" "),t("div",{staticClass:"flex-row jcb aic"},[t("button",{staticClass:"button"},[e._v("Send")]),e._v(" "),t("div",{staticClass:"form-links"},[t("router-link",{attrs:{to:"/registration"}},[e._v("Create account")])],1)])],1)])},staticRenderFns:[function(){var e=this.$createElement,r=this._self._c||e;return r("div",[r("h2",[this._v("Forgot your password?")]),this._v(" "),r("div",{staticClass:"text-default"},[this._v("\n                Enter your email address that you used to register.\n                We'll send you an email with your username and a link to reset your password.\n            ")])])}]}},590:function(e,r,t){var s=t(1)(t(579),t(580),!1,null,null,null);e.exports=s.exports}});