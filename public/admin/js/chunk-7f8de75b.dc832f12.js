(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f8de75b"],{"1b74":function(e,t,n){"use strict";var i=n("61ad"),a=n.n(i);a.a},2188:function(e,t,n){"use strict";var i=n("ab12"),a=n.n(i);a.a},"61ad":function(e,t,n){},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(e){return["half","half-left","half-right","full","fill"].includes(e)}}}}},a9ef:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"interface-markdown",class:{float:!e.options.tabbed}},[e.preview&&e.options.tabbed?e._e():n("v-textarea",{staticClass:"textarea",attrs:{id:e.name,value:e.value,placeholder:e.options.placeholder,rows:+e.options.rows},on:{input:function(t){return e.$emit("input",t)}}}),e.preview||!e.options.tabbed?n("div",{staticClass:"preview",style:{height:23*e.options.rows+"px"},domProps:{innerHTML:e._s(e.compiledMarkdown)}}):e._e(),e.options.tabbed?n("div",{staticClass:"toolbar"},[n("span",{class:{active:!e.preview},on:{click:function(t){e.preview=!1}}},[n("v-icon",{attrs:{name:"code",size:"24"}}),e._v("\n      "+e._s(e.$t("interfaces.markdown.edit"))+"\n    ")],1),n("span",{class:{active:e.preview},on:{click:function(t){e.preview=!0}}},[n("v-icon",{attrs:{name:"visibility",size:"24"}}),e._v("\n      "+e._s(e.$t("interfaces.markdown.preview"))+"\n    ")],1)]):e._e()],1)},a=[],l=n("0e54"),r=n.n(l),o=n("8db2"),s=n.n(o),u={mixins:[s.a],data:function(){return{preview:!1}},computed:{compiledMarkdown:function(){return this.value?r()(this.value,{sanitize:!0}):this.value}}},c=u,d=(n("1b74"),n("2188"),n("2877")),p=Object(d["a"])(c,i,a,!1,null,"5d2ee813",null);t["default"]=p.exports},ab12:function(e,t,n){}}]);
//# sourceMappingURL=chunk-7f8de75b.dc832f12.js.map