webpackJsonp([3],{527:function(e,r,t){var s=t(1)(t(528),t(529),!1,null,null,null);e.exports=s.exports},528:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={name:"index",data:function(){return{type:"password"}},computed:{pathToIcon:function(){return'<use  xlink:href="/images/sprites.svg#sprite-'.concat(this.icon,'"></use>')},focus:function(){return{focus:!!this.value,error:!!this.errors.length}}},methods:{validate:function(){this.required&&(this.value?this.$emit("error",{action:!1,filed:"empty",name:this.name,message:""}):this.$emit("error",{action:!0,filed:"empty",name:this.name,message:"The ".concat(this.label," field is required.")})),this.repeat&&this.repeatValidate(),this.min&&this.minValidate(this.min)},repeatValidate:function(){this.repeat!==this.value&&this.value?this.$emit("error",{action:!0,filed:"repeat",name:this.name,message:"the password not equal"}):this.$emit("error",{action:!1,filed:"repeat",name:this.name,message:""})},minValidate:function(e){this.value.length<e&&this.value?this.$emit("error",{action:!0,filed:"length",name:this.name,message:"min chars is ".concat(e)}):this.$emit("error",{action:!1,filed:"length",name:this.name,message:""})}},props:{name:{type:String,required:!0},label:{type:String,required:!0},min:{type:Number,required:!1},value:{type:String,required:!0},icon:{type:String,required:!1},repeat:{type:String,required:!1},required:{type:Boolean,required:!1},errors:{type:Array,default:function(){return[]},required:!1},autocomplete:{type:String,required:!1}}}},529:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"form-item password",class:e.focus},[e.icon?t("span",{staticClass:"icon"},[t("svg",{domProps:{innerHTML:e._s(e.pathToIcon)}})]):e._e(),e._v(" "),t("input",{attrs:{type:e.type,name:e.name,id:e.name,autocomplete:e.autocomplete},domProps:{value:e.value},on:{keyup:e.validate,input:function(r){return e.$emit("input",r.target.value)}}}),e._v(" "),t("label",{attrs:{for:e.name}},[e._v("\n        "+e._s(e.label)+"\n    ")]),e._v(" "),t("span",{staticClass:"show-password",on:{mousedown:function(r){e.type="text"},mouseup:function(r){e.type="password"}}},[t("svg",[t("use",{attrs:{"xlink:href":"/images/sprites.svg#sprite-view"}})])]),e._v(" "),t("ul",{staticClass:"error-message"},e._l(e.errors,function(r){return t("li",[r.message?t("span",[e._v(e._s(r.message))]):t("span",[e._v(" "+e._s(r))])])}),0)])},staticRenderFns:[]}},578:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s=t(527),n=t.n(s),a=t(579),o=t.n(a),i=t(582),u=t.n(i);function l(e){return function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.default={name:"Account",data:function(){return{form:{oldPassword:{value:"",errors:[],serverErrors:[]},newPassword:{value:"",errors:[],serverErrors:[]},newPassword_confirmation:{value:"",errors:[],serverErrors:[]}}}},computed:{oldPasswordError:function(){return this.form.oldPassword.errors.concat(this.form.oldPassword.serverErrors)},newPasswordError:function(){return this.form.newPassword.errors.concat(this.form.newPassword.serverErrors)},newPassword_confirmation:function(){return this.form.newPassword_confirmation.errors.concat(this.form.newPassword_confirmation.serverErrors)},userName:function(){return this.$store.getters.userName},userInitials:function(){return this.$store.getters.userInitials},userLoginStatus:function(){return this.$store.getters.userLoginStatus},userEmail:function(){return this.$store.state.user.user.email}},methods:{errorUpdate:function(e){this.clearError(e.name);var r=this.form[e.name].errors,t=e.filed,s=-1;r.forEach(function(e,r){e.filed===t&&(s=r)});var n=!!(s+1);e.action&&!n?r.push(e):n&&!e.action&&r.splice(s,1)},validate:function(){for(var e in this.form)this.$refs[e]&&this.$refs[e].validate();for(var r in this.form){if((r=this.form[r]).errors.length)return!1}return!0},clearError:function(e){if(e)this.form[e].serverErrors=[];else for(var r in this.form)(r=this.form[r]).serverErrors=[]},send:function(){var e=this;this.validate()&&axios.post("/frontend/user/change_password",{oldPassword:this.form.oldPassword.value,newPassword:this.form.newPassword.value,newPassword_confirmation:this.form.newPassword_confirmation.value}).then(function(){e.clearForm(),e.$notify({duration:1e3,type:"success",text:"Password is change"})}).catch(function(r){422===r.response.status?e.showErrors(r.response.data.errors):e.$notify({duration:1e3,type:"error",text:r.response.data.message})})},clearForm:function(){for(var e in this.form)this.form[e]&&(this.form[e].value="")},showErrors:function(e){for(var r in e){var t,s=e[r];(t=this.form[r].serverErrors).push.apply(t,l(s))}},logout:function(){this.$store.dispatch("logout")}},components:{inputFormPassword:n.a,nameInput:o.a,Avatar:u.a}}},579:function(e,r,t){var s=t(1)(t(580),t(581),!1,null,null,null);e.exports=s.exports},580:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={name:"NameInput",data:function(){return{name:"",rules:{min:{required:!0,value:4}},errors:[]}},computed:{focus:function(){return{focus:!!this.value,error:!!this.errors.length}}},methods:{focusInput:function(){this.$refs.name.focus()},validate:function(){this.name?this.errors.includes("the name is required")&&this.errors.splice(this.errors.indexOf("the name is required"),1):this.errors.includes("the name is required")||this.errors.push("the name is required"),this.rules.min.required&&this.minValidate()},minValidate:function(){this.name.length<this.rules.min.value?this.name&&(this.errors.includes("min chars is ".concat(this.rules.min.value))||this.errors.push("min chars is ".concat(this.rules.min.value))):this.errors.includes("min chars is ".concat(this.rules.min.value))&&this.errors.splice(this.errors.indexOf("min chars is ".concat(this.rules.min.value)),1)},changeName:function(){var e=this;this.errors.length<1&&this.value!==this.name&&axios.post("/frontend/user/change_name",{name:this.name}).then(function(){e.$notify({duration:1e3,type:"success",text:"Name is change"}),e.$store.commit("updateUserField",{field:"name",value:e.name})}).catch(function(r){e.$notify({duration:1e3,type:"error",text:r.response.data.message})})}},created:function(){this.name=this.value},watch:{value:function(e){this.name=e}},props:{value:{type:String,required:!0}}}},581:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"name-wrapper",class:e.focus},[t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.name,expression:"name",modifiers:{trim:!0}}],ref:"name",attrs:{type:"text",name:"name",size:e.name.length},domProps:{value:e.name},on:{keyup:e.validate,blur:[e.changeName,function(r){return e.$forceUpdate()}],input:function(r){r.target.composing||(e.name=r.target.value.trim())}}}),e._v(" "),t("span",{staticClass:"icon",on:{click:e.focusInput}},[t("svg",[t("use",{attrs:{"xlink:href":"/images/sprites.svg#sprite-edit"}})])]),e._v(" "),t("ul",{staticClass:"error-message"},e._l(e.errors,function(r){return t("li",[t("span",[e._v(e._s(r))])])}),0)])},staticRenderFns:[]}},582:function(e,r,t){var s=t(1)(t(583),t(584),!1,null,null,null);e.exports=s.exports},583:function(e,r,t){"use strict";function s(e){return function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.default={name:"Avatar",data:function(){return{selectedFile:null,errors:[],loading:!1}},computed:{avatar:function(){return this.$store.state.user.user.avatar},avatarStatus:function(){return!!this.$store.state.user.user.avatar},userInitials:function(){return this.$store.getters.userInitials},loadingStyle:function(){return{loading:this.loading}}},methods:{onFileChanged:function(e){this.selectedFile=e.target.files[0],this.onUpload(),this.clearError()},onUpload:function(){var e=this,r=new FormData;r.append("avatar",this.selectedFile,this.selectedFile.name),this.loading=!0,axios.post("/frontend/user/change_avatar",r).then(function(r){e.updateUser(r.data)}).catch(function(r){422===r.response.status?e.showErrors(r.response.data.errors):e.$notify({duration:1e3,type:"error",text:r.response.data.message})}).finally(function(){e.loading=!1})},showErrors:function(e){var r;(r=this.errors).push.apply(r,s(e.avatar))},clearError:function(){this.errors=[]},updateUser:function(e){this.$store.commit("updateUserField",{field:"avatar",value:e})}}}},584:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"avatar-container",class:e.loadingStyle},[t("span",{staticClass:"loading-icon"},[t("span",[t("svg",[t("use",{attrs:{"xlink:href":"/images/sprites.svg#sprite-circle"}})])])]),e._v(" "),!0===e.avatarStatus?t("div",{staticClass:"avatar-wrapper",style:{backgroundImage:"url("+e.avatar+")"}},[t("input",{staticClass:"custom-file-input",attrs:{type:"file",name:"avatar",accept:".jpg, .jpeg, .png, .gif, .svg"},on:{change:e.onFileChanged}}),e._v(" "),t("span",{staticClass:"icon"},[t("svg",[t("use",{attrs:{"xlink:href":"/images/sprites.svg#sprite-edit"}})])])]):t("div",{staticClass:"avatar-wrapper empty"},[e._v("\n        "+e._s(e.userInitials)+"\n        "),t("input",{staticClass:"custom-file-input",attrs:{type:"file",name:"avatar"},on:{change:e.onFileChanged}}),e._v(" "),t("span",{staticClass:"icon"},[t("svg",[t("use",{attrs:{"xlink:href":"/images/sprites.svg#sprite-edit"}})])])]),e._v(" "),t("ul",{staticClass:"errors-list"},e._l(e.errors,function(r){return t("li",[e._v(e._s(r))])}),0)])},staticRenderFns:[]}},585:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"settings account"},[e.userLoginStatus?t("div",{staticClass:"account-info"},[t("Avatar"),e._v(" "),t("div",{staticClass:"info-wrapper"},[t("div",{staticClass:"account-info__name"},[t("nameInput",{attrs:{value:e.userName}})],1),e._v(" "),t("span",{staticClass:"account-info__email"},[e._v("\n                "+e._s(e.userEmail)+"\n            ")])])],1):e._e(),e._v(" "),t("div",{staticClass:"form-title"},[e._v("Change Password")]),e._v(" "),t("form",{attrs:{method:"post",action:"/frontend/user/change_password"},on:{submit:function(r){return r.preventDefault(),e.send(r)}}},[t("inputFormPassword",{ref:"oldPassword",attrs:{name:"oldPassword",label:"Old password",min:8,icon:"password",required:!0,autocomplete:"current-password",errors:e.oldPasswordError},on:{error:e.errorUpdate},model:{value:e.form.oldPassword.value,callback:function(r){e.$set(e.form.oldPassword,"value",r)},expression:"form.oldPassword.value"}}),e._v(" "),t("inputFormPassword",{ref:"newPassword",attrs:{name:"newPassword",label:"New password",min:8,icon:"password",required:!0,autocomplete:"new-password",errors:e.newPasswordError},on:{error:e.errorUpdate},model:{value:e.form.newPassword.value,callback:function(r){e.$set(e.form.newPassword,"value",r)},expression:"form.newPassword.value"}}),e._v(" "),t("inputFormPassword",{ref:"newPassword_confirmation",attrs:{name:"newPassword_confirmation",label:"Repeat password",min:8,icon:"password",required:!0,repeat:e.form.newPassword.value,autocomplete:"new-password",errors:e.newPassword_confirmation},on:{error:e.errorUpdate},model:{value:e.form.newPassword_confirmation.value,callback:function(r){e.$set(e.form.newPassword_confirmation,"value",r)},expression:"form.newPassword_confirmation.value"}}),e._v(" "),t("input",{attrs:{type:"hidden",name:"username",autocomplete:"username"}}),e._v(" "),t("button",{staticClass:"button",attrs:{type:"submit"}},[e._v("Change")])],1),e._v(" "),t("button",{staticClass:"logout",on:{click:e.logout}},[e._v("Logout")])])},staticRenderFns:[]}},594:function(e,r,t){var s=t(1)(t(578),t(585),!1,null,null,null);e.exports=s.exports}});