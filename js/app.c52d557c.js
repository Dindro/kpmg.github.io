(function(t){function e(e){for(var a,r,s=e[0],o=e[1],l=e[2],d=0,f=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,s=1;s<n.length;s++){var o=n[s];0!==i[o]&&(a=!1)}a&&(c.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},c=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=o;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"102c":function(t,e,n){},"1a27":function(t,e,n){},"257f":function(t,e,n){},"30d4":function(t,e,n){},"3ae0":function(t,e,n){"use strict";n.r(e),e["default"]={id:"trash-usage",viewBox:"0 0 24 24",url:n.p+"img/icons.c1ed37c7.svg#trash",toString:function(){return this.url}}},"41d3":function(t,e,n){"use strict";n("b1cb")},"4ddb":function(t,e,n){"use strict";n("e47c")},"53d6":function(t,e,n){"use strict";n.r(e),e["default"]={id:"cross-usage",viewBox:"0 0 24 24",url:n.p+"img/icons.c1ed37c7.svg#cross",toString:function(){return this.url}}},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},c=[],r=n("2877"),s={},o=Object(r["a"])(s,i,c,!1,null,null,null),l=o.exports,u=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("hero",t._b({staticClass:"mt-64 mt-md-112"},"hero",t.hero,!1)),n("contacts-form",t._b({staticClass:"mt-40 mt-md-64",on:{add:t.addContact}},"contacts-form",t.contactsForm,!1)),n("card-contact-list",t._b({staticClass:"mt-40 mt-md-80",on:{action:function(e){var n=e.id;return t.removeContact(n)}}},"card-contact-list",t.contacts,!1))],1)},f=[],m=(n("d81d"),n("5530")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero"},[t.title?n("h1",{staticClass:"hero__title"},[t._v(t._s(t.title))]):t._e(),n("breadcrumbs",t._b({},"breadcrumbs",t.breadcrumbs,!1))],1)},v=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"breadcrumbs"},t._l(t.items,(function(e,a){return n("li",{key:a},[n("router-link",{staticClass:"breadcrumbs__item",attrs:{to:e.to}},[t._v(t._s(e.text))])],1)})),0)},_=[],b={props:{items:Array}},C=b,y=(n("a8ec"),Object(r["a"])(C,h,_,!1,null,null,null)),O=y.exports,g={components:{Breadcrumbs:O},props:{title:String,breadcrumbs:Object}},k=g,j=(n("c23d"),Object(r["a"])(k,p,v,!1,null,null,null)),w=j.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contacts-form"},[n("form",{staticClass:"contacts-form__form",attrs:{action:""}},[t.form.title?n("h4",{staticClass:"contacts-form__title"},[t._v(t._s(t.form.title))]):t._e(),t.form.field?n("field-input",t._b({model:{value:t.name,callback:function(e){t.name=e},expression:"name"}},"field-input",t.form.field,!1)):t._e(),n("btn",t._b({staticClass:"contacts-form__submit",attrs:{disabled:""===t.name},nativeOn:{click:function(e){return t.add(e)}}},"btn",t.form.button,!1))],1),t.card?n("div",{staticClass:"contacts-form__preview"},[n("card-contact-shell",t._b({},"card-contact-shell",t.cardPreview,!1))],1):t._e()])},E=[],S=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-contact-shell"},[t.title?n("h4",{staticClass:"card-contact-shell__title"},[t._v(t._s(t.title))]):t._e(),n("card-contact",t._b({},"card-contact",t.card,!1))],1)}),$=[],T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-contact",class:[t.to&&"has-link"]},[n("div",{staticClass:"card-contact__header"},[n("h4",{staticClass:"card-contact__title"},[t._v(t._s(t.fields.name))]),t.action?n("div",{staticClass:"card-contact__action"},[n("popover-confirm",{attrs:{title:t.actionConfirmTitle},on:{confirm:t.handleAction}},[n("btn",{attrs:{morph:"",icon:t.action.icon}})],1)],1):t._e()]),t.fieldsWithouteName&&Object.keys(t.fieldsWithouteName).length?n("div",{staticClass:"card-contact__fields"},t._l(t.fieldsWithouteName,(function(e,a){return n("div",{key:a,staticClass:"card-contact__field card-contact-field"},[n("p",{staticClass:"card-contact-field__key"},[t._v(t._s(a))]),n("p",{staticClass:"card-contact-field__value"},[t._v(t._s(e))])])})),0):t._e(),t.to?n("router-link",{staticClass:"card-contact__link",attrs:{to:t.to}}):t._e()],1)},A=[],N=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button",class:[t.morph&&"button--morph"],attrs:{type:t.type},on:{click:t.handleClick}},[t.text?n("span",{staticClass:"button__text"},[t._v(t._s(t.text))]):t._e(),t.icon?n("icn",t._b({staticClass:"button__icon"},"icn",t.icon,!1)):t._e()],1)}),F=[],D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon",class:["icon--"+t.sizeMod,"icon--"+t.nameShort]},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg"}},[n("use",{attrs:{"xlink:href":t.path,"xmlns:xlink":"http://www.w3.org/1999/xlink"}})])])},P=[],M=(n("ac1f"),n("1276"),{props:{size:Number,name:String},computed:{path:function(){return n("6f32")("./".concat(this.name,".svg")).default.url},nameShort:function(){return this.getName(this.name)},sizeMod:function(){return this.size||this.getSize(this.name)}},methods:{getSize:function(t){var e=t.split("/");if(!(e.length<=1)){var n=parseInt(e[0]);if(n&&!isNaN(n))return n}},getName:function(t){var e=t.split("/");return e.length<=1?t:e[1]}}}),I=M,L=(n("d27c"),Object(r["a"])(I,D,P,!1,null,null,null)),B=L.exports,R={components:{Icn:B},props:{type:{type:String,default:"button"},text:String,icon:Object,morph:Boolean},methods:{handleClick:function(t){this.$emit("click",t)}}},z=R,V=(n("76ca"),Object(r["a"])(z,N,F,!1,null,null,null)),W=V.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"popover-confirm"},[t._t("default")],2)},J=[],U={props:{title:String},mounted:function(){var t=this,e=this.$slots.default[0].elm;e.addEventListener("click",(function(e){e.preventDefault();var n=window.confirm(t.title);n&&t.$emit("confirm")}))}},q=U,G=Object(r["a"])(q,H,J,!1,null,null,null),K=G.exports,Q={inheritAttrs:!1,components:{Btn:W,PopoverConfirm:K},props:{id:Number,fields:Object,to:Object,action:Object,actionConfirmTitle:String},computed:{fieldsWithouteName:function(){var t=Object.assign({},this.fields);return delete t.name,t}},methods:{handleAction:function(){this.$emit("action",this.$props)}}},X=Q,Y=(n("fe73"),Object(r["a"])(X,T,A,!1,null,null,null)),Z=Y.exports,tt={components:{CardContact:Z},props:{title:String,card:Object}},et=tt,nt=(n("b36a"),Object(r["a"])(et,S,$,!1,null,null,null)),at=nt.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-shell"},[n("input",{staticClass:"input",attrs:{type:t.type,readonly:t.readonly,disabled:t.disabled,name:t.name,id:t.id,placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}),n("label",{staticClass:"input-shell-label",class:[t.isExist&&"input-shell-label--exist"]},[t._v(t._s(t.label))])])},ct=[],rt={inheritAttrs:!1,props:{value:{type:String,value:""},type:{type:String,default:"text"},label:String,placeholder:String,disabled:Boolean,readonly:Boolean,name:String,id:String},computed:{isExist:function(){return""!==this.value}}},st=rt,ot=(n("41d3"),Object(r["a"])(st,it,ct,!1,null,null,null)),lt=ot.exports,ut={components:{CardContactShell:at,FieldInput:lt,Btn:W},props:{form:Object,preview:Object},data:function(){return{name:""}},computed:{card:function(){return this.name?{fields:{name:this.name}}:null},cardPreview:function(){return Object.assign({},this.preview,{card:this.card})}},methods:{add:function(){this.$emit("add",this.card),this.name=""}}},dt=ut,ft=(n("fa6f"),Object(r["a"])(dt,x,E,!1,null,null,null)),mt=ft.exports,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("div",{staticClass:"card-contact-list"},[n("div",{staticClass:"card-contact-list__items"},t._l(t.items,(function(e){return n("div",{key:e.id,staticClass:"card-contact-list__item"},[n("card-contact",t._b({on:{action:t.handleAction}},"card-contact",e,!1))],1)})),0)]):t._e()},vt=[],ht={components:{CardContact:Z},props:{items:Array},methods:{handleAction:function(t){this.$emit("action",t)}}},_t=ht,bt=(n("c945"),Object(r["a"])(_t,pt,vt,!1,null,null,null)),Ct=bt.exports,yt=n("2f62"),Ot={components:{Hero:w,ContactsForm:mt,CardContactList:Ct},data:function(){return{hero:{title:"Контакты",breadcrumbs:{items:[{text:"Контакты",to:{name:"contacts"}}]}},contactsForm:{form:{title:"Добавить контакт",field:{name:"NAME",label:"Имя",placeholder:"Например Петр"},button:{type:"submit",text:"Добавить"}},preview:{title:"Предпросмотр"}}}},computed:Object(m["a"])({},Object(yt["c"])({contacts:function(t){var e=t.contacts.map((function(t){var e={actionConfirmTitle:"Вы уверены что хотите удалить?",action:{icon:{name:"24/trash"}},to:{name:"contacts-detail",params:{id:t.id}}};return Object.assign({},t,e)}));return{items:e}}})),methods:Object(m["a"])({},Object(yt["b"])({addContact:"ADD_CONTACT",removeContact:"REMOVE_CONTACT"}))},gt=Ot,kt=Object(r["a"])(gt,d,f,!1,null,null,null),jt=kt.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("hero",t._b({staticClass:"mt-64 mt-md-112"},"hero",t.hero,!1)),n("contacts-form-edit",t._b({staticClass:"mt-64",attrs:{card:t.card},on:{add:t.addField,remove:t.removeField,rename:t.renameField,load:t.loadFields}},"contacts-form-edit",t.form,!1))],1)},xt=[],Et=(n("7db0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contacts-form-edit"},[n("form",{staticClass:"contacts-form-edit__form"},[n("div",{staticClass:"contacts-form-edit__name"},[n("field-input",{attrs:{value:t.fieldsName.value,label:t.form.name.name},on:{input:function(e){return t.input(e,t.fieldsName,"value")}}}),n("div",{staticClass:"contacts-form-fields-actions"},[t.fieldsName.cancel?n("popover-confirm",{attrs:{title:t.form.fields.cancelPopover},on:{confirm:function(e){return t.cancel(t.fieldsName)}}},[n("btn",{attrs:{morph:"",icon:{name:"24/cross"}}})],1):t._e(),t.fieldsName.save?n("btn",{attrs:{morph:"",icon:{name:"24/save"}},on:{click:function(e){return t.save(t.fieldsName)}}}):t._e()],1)],1),n("div",{staticClass:"contacts-form-edit__fields contacts-form-fields"},[t.form.fields.title?n("p",{staticClass:"contacts-form-fields__title"},[t._v(t._s(t.form.fields.title))]):t._e(),t._l(t.fields,(function(e,a){return n("div",{key:a,staticClass:"contacts-form-fields__field"},[n("div",{staticClass:"contacts-form-fields__key"},[n("field-input",{attrs:{value:e.key,label:t.form.fields.name},on:{input:function(n){return t.input(n,e,"key")}}})],1),n("div",{staticClass:"contacts-form-fields__value"},[n("field-input",{attrs:{value:e.value,label:t.form.fields.value},on:{input:function(n){return t.input(n,e,"value")}}})],1),n("div",{staticClass:"contacts-form-fields-actions"},[e.cancel?n("popover-confirm",{attrs:{title:t.form.fields.cancelPopover},on:{confirm:function(n){return t.cancel(e)}}},[n("btn",{attrs:{morph:"",icon:{name:"24/cross"}}})],1):t._e(),e.save?n("btn",{attrs:{morph:"",icon:{name:"24/save"}},on:{click:function(n){return t.save(e)}}}):t._e(),e.remove?n("popover-confirm",{attrs:{title:t.form.fields.removePopover},on:{confirm:function(n){return t.remove(e)}}},[n("btn",{attrs:{morph:"",icon:{name:"24/trash"}}})],1):t._e()],1)])}))],2),t.fieldsState?n("btn",{staticClass:"contacts-form-edit__state",attrs:{text:t.form.state},on:{click:t.loadState}}):t._e()],1),n("div",{staticClass:"contacts-form-edit__preview"},[n("card-contact-shell",t._b({},"card-contact-shell",t.cardPreview,!1))],1)])}),St=[],$t=(n("4de4"),n("4fad"),n("498a"),n("3835")),Tt={components:{CardContactShell:at,FieldInput:lt,Btn:W,PopoverConfirm:K},props:{card:Object,form:Object,preview:Object},data:function(){return{fieldAdditional:{key:"",value:"",save:!1,cancel:!1,remove:!1},fieldsTemp:[],fieldsState:null}},computed:{cardPreview:function(){return{title:this.preview.title,card:this.card}},fields:function(){var t=this.fieldsTemp.filter((function(t){return"name"!==t.keyTemp}));return t.push(this.fieldAdditional),t},fieldsName:function(){var t=this.fieldsTemp.find((function(t){return"name"===t.keyTemp}));return t}},methods:{cancel:function(t){t.key=t.keyTemp,t.value=t.valueTemp,t.save=!1,t.cancel=!1},add:function(){this.$emit("add",{key:this.fieldAdditional.key.trim(),value:this.fieldAdditional.value.trim()}),this.fieldAdditional.key="",this.fieldAdditional.value="",this.fieldAdditional.save=!1},save:function(t){if(this.saveState(),t!==this.fieldAdditional){var e={key:t.keyTemp,keyRename:t.key,value:t.value};this.$emit("rename",e)}else this.add()},remove:function(t){this.saveState(),this.$emit("remove",t.keyTemp)},input:function(t,e,n){e[n]=t;var a=e.key.trim()!==e.keyTemp||e.value.trim()!==e.valueTemp,i=""!==e.key.trim()&&""!==e.value.trim();e===this.fieldAdditional?e.save=a&&i:(e.save=a&&i,e.cancel=a)},saveState:function(){this.fieldsState=Object.assign({},this.card.fields)},loadState:function(){this.$emit("load",this.fieldsState),this.fieldsState=null}},created:function(){var t=this;this.$watch("card.fields",(function(){for(var e=[],n=Object.entries(t.card.fields),a=0,i=n;a<i.length;a++){var c=Object($t["a"])(i[a],2),r=c[0],s=c[1],o={key:r,keyTemp:r,value:s,valueTemp:s,save:!1,cancel:!1,remove:!0};e.push(o)}t.fieldsTemp=e}),{immediate:!0,deep:!0})}},At=Tt,Nt=(n("4ddb"),Object(r["a"])(At,Et,St,!1,null,null,null)),Ft=Nt.exports,Dt={components:{Hero:w,ContactsFormEdit:Ft},computed:Object(m["a"])(Object(m["a"])({},Object(yt["c"])({contacts:"contacts"})),{},{card:function(){var t=this;return this.contacts.find((function(e){return e.id===+t.$route.params.id}))},hero:function(){var t=this.card.fields.name;return{title:t,breadcrumbs:{items:[{text:"Контакты",to:{name:"contacts"}},{text:t,to:{name:"contacts-detail",params:{id:this.card.id}}}]}}},form:function(){return{form:{name:{name:"Имя"},fields:{title:"Поля",name:"Название поля",value:"Значение поля",cancelPopover:"Отменить изменения?",removePopover:"Уверены, что хотите удалить поле?"},state:"Отменить последнее изменение"},preview:{title:"Предпрсмотр"}}}}),methods:{addField:function(t){this.$store.commit("ADD_FIELD",{contact:this.card,data:t})},removeField:function(t){this.$store.commit("REMOVE_FIELD",{contact:this.card,key:t})},renameField:function(t){this.$store.commit("RENAME_FIELD",{contact:this.card,data:t})},loadFields:function(t){this.$store.commit("SET_FIELDS",{contact:this.card,fields:t})}}},Pt=Dt,Mt=Object(r["a"])(Pt,wt,xt,!1,null,null,null),It=Mt.exports;a["a"].use(u["a"]);var Lt=new u["a"]({mode:"history",routes:[{path:"/",name:"contacts",component:jt},{path:"/:id",name:"contacts-detail",component:It,props:function(t){return{id:t.params.id}}}]});a["a"].use(yt["a"]);var Bt=new yt["a"].Store({state:{contacts:[]},mutations:{ADD_CONTACT:function(t,e){e.id=Date.now(),t.contacts.push(e)},REMOVE_CONTACT:function(t,e){return t.contacts=t.contacts.filter((function(t){return t.id!==e}))},ADD_FIELD:function(t,e){var n=e.contact,i=e.data;a["a"].set(n.fields,i.key,i.value)},REMOVE_FIELD:function(t,e){var n=e.contact,i=e.key;a["a"].delete(n.fields,i)},RENAME_FIELD:function(t,e){var n=e.contact,i=e.data;if(i.key&&i.keyRename)return a["a"].delete(n.fields,i.key),void a["a"].set(n.fields,i.keyRename,i.value);n.fields[i.key]=i.value},SET_FIELDS:function(t,e){var n=e.contact,a=e.fields;return n.fields=a}}});n("a41b");a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(l)},router:Lt,store:Bt}).$mount("#app")},"5a4e":function(t,e,n){},"614b":function(t,e,n){},"6f32":function(t,e,n){var a={"./24/cross.svg":"53d6","./24/save.svg":"823d","./24/trash.svg":"3ae0"};function i(t){var e=c(t);return n(e)}function c(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=c,t.exports=i,i.id="6f32"},"76ca":function(t,e,n){"use strict";n("30d4")},"823d":function(t,e,n){"use strict";n.r(e),e["default"]={id:"save-usage",viewBox:"0 0 24 24",url:n.p+"img/icons.c1ed37c7.svg#save",toString:function(){return this.url}}},"892d":function(t,e,n){},a41b:function(t,e,n){},a8ec:function(t,e,n){"use strict";n("5a4e")},b1cb:function(t,e,n){},b36a:function(t,e,n){"use strict";n("f6f6")},c23d:function(t,e,n){"use strict";n("1a27")},c945:function(t,e,n){"use strict";n("614b")},d27c:function(t,e,n){"use strict";n("892d")},e47c:function(t,e,n){},f6f6:function(t,e,n){},fa6f:function(t,e,n){"use strict";n("102c")},fe73:function(t,e,n){"use strict";n("257f")}});
//# sourceMappingURL=app.c52d557c.js.map