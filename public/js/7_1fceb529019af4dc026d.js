webpackJsonp([7],{573:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(574),a=s.n(n),r=s(244),i=s.n(r);e.default={name:"List",computed:{settingsDateFormat:function(){return this.$store.getters.getDateFormat},settingsDateFormatDefault:function(){return this.$store.getters.getDateFormatDefault},getProgressDisplay:function(){return this.$store.getters.getProgressDisplay},settingsProgressDisplayDefault:function(){return this.$store.getters.getProgressDisplayDefault},getNewListForComplete:function(){return this.$store.getters.getNewListForComplete},getOrderCreateSettingDefault:function(){return this.$store.getters.getOrderCreateSetting}},methods:{updateSettings:function(t){this.$store.dispatch("updateSettings",t)}},components:{SwitchButton:a.a,AppSelect:i.a}}},574:function(t,e,s){var n=s(1)(s(575),s(576),!1,null,null,null);t.exports=n.exports},575:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"checkbox",data:function(){return{status:!1}},computed:{selected:function(){return{selected:this.status}}},methods:{update:function(){this.$emit("update",{value:this.status,nameSetting:this.name})}},props:{name:{type:String,required:!0},default_value:{type:Boolean,default:!1,required:!1}},created:function(){this.status=this.default_value}}},576:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"switch-button",class:t.selected},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.status,expression:"status"}],staticClass:"input-button",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.status)?t._i(t.status,null)>-1:t.status},on:{change:[function(e){var s=t.status,n=e.target,a=!!n.checked;if(Array.isArray(s)){var r=t._i(s,null);n.checked?r<0&&(t.status=s.concat([null])):r>-1&&(t.status=s.slice(0,r).concat(s.slice(r+1)))}else t.status=a},t.update]}})])},staticRenderFns:[]}},577:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"settings-menu settings general-settings"},[s("li",{staticClass:"settings-menu__item"},[t._v("\n        Date format\n        "),s("AppSelect",{attrs:{list:t.settingsDateFormat,default_value:t.settingsDateFormatDefault,name:"dateFormat"},on:{change:t.updateSettings}})],1),t._v(" "),s("li",{staticClass:"settings-menu__item"},[t._v("\n        Progress display\n        "),s("AppSelect",{attrs:{list:t.getProgressDisplay,name:"progressDisplay",default_value:t.settingsProgressDisplayDefault},on:{change:t.updateSettings}})],1),t._v(" "),s("li",{staticClass:"settings-menu__item"},[t._v("\n        Add new items to the end of the list\n        "),s("SwitchButton",{attrs:{default_value:t.getOrderCreateSettingDefault,name:"addToEndList"},on:{update:t.updateSettings}})],1)])},staticRenderFns:[]}},593:function(t,e,s){var n=s(1)(s(573),s(577),!1,null,null,null);t.exports=n.exports}});