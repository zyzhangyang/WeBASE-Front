(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"9e9m":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a("oCYn");var i=new((n=r)&&n.__esModule?n:{default:n}).default;t.default=i},AAfK:function(e,t,a){var n=a("kY03");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a("SZ7m").default)("169bd46e",n,!1,{})},Iab2:function(e,t,a){(function(a){var n,r,i;r=[],void 0===(i="function"==typeof(n=function(){"use strict";function t(e,t,a){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){o(n.response,t,a)},n.onerror=function(){console.error("could not download file")},n.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(a){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a&&a.global===a?a:void 0,o=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype?function(e,a,o){var s=i.URL||i.webkitURL,l=document.createElement("a");a=a||e.name||"download",l.download=a,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?r(l):n(l.href)?t(e,a,o):r(l,l.target="_blank")):(l.href=s.createObjectURL(e),setTimeout(function(){s.revokeObjectURL(l.href)},4e4),setTimeout(function(){r(l)},0))}:"msSaveOrOpenBlob"in navigator?function(e,a,i){if(a=a||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,i),a);else if(n(e))t(e,a,i);else{var o=document.createElement("a");o.href=e,o.target="_blank",setTimeout(function(){r(o)})}}:function(e,a,n,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return t(e,a,n);var o="application/octet-stream"===e.type,s=/constructor/i.test(i.HTMLElement)||i.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||o&&s)&&"object"==typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},c.readAsDataURL(e)}else{var u=i.URL||i.webkitURL,p=u.createObjectURL(e);r?r.location=p:location.href=p,r=null,setTimeout(function(){u.revokeObjectURL(p)},4e4)}});i.saveAs=o.saveAs=o,e.exports=o})?n.apply(t,r):n)||(e.exports=i)}).call(this,a("yLpj"))},LjWc:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a("gDS+")),r=u(a("P2sY")),i=u(a("qse9")),o=a("mHBk"),s=a("DgvE"),l=u(a("p5Bo")),c=u(a("9e9m"));function u(e){return e&&e.__esModule?e:{default:e}}var p=a("J66h").Base64,d=a("Iab2");t.default={name:"RivateKeyManagement",components:{"v-contentHead":i.default},data:function(){return{userForm:{userName:""},loading:!1,creatUserNameVisible:!1,privateKeyList:localStorage.getItem("privateKeyList")?JSON.parse(localStorage.getItem("privateKeyList")):[],privateKeyHead:[{enName:"address",name:"地址",tdWidth:""},{enName:"publicKey",name:"公钥",tdWidth:""},{enName:"userName",name:"用户",tdWidth:""},{enName:"operate",name:"操作",tdWidth:80}],fileString:"",uploadMap:{},rules:{userName:[{required:!0,message:"请输入用户名",trigger:"blur"},{pattern:/^[A-za-z0-9]+$/,message:"只能是数字或者字母组成",trigger:"blur"},{trigger:"blur",min:3,max:32,message:"长度在 3 到 32 个字符"}]},groupId:localStorage.getItem("groupId")||null}},beforeDestroy:function(){c.default.$off("changeGroup")},mounted:function(){var e=this;c.default.$on("changeGroup",function(t){e.changeGroup(t)})},methods:{changeGroup:function(e){this.groupId=e},creatUserBtn:function(){this.userForm.userName="",this.creatUserNameVisible=!0},initUserName:function(){this.userForm={userName:""}},closeCallback:function(){this.initUserName()},closeUserName:function(){this.creatUserNameVisible=!1,this.initUserName()},sureUserName:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.privateKeyList.map(function(e){return e.userName}).includes(t.userForm.userName)?t.$message({type:"error",message:"用户名不能相同!"}):(t.creatUserNameVisible=!1,t.addUser())})},addUser:function(){var e=this;(0,o.queryCreatePrivateKey)({},{useAes:!1}).then(function(t){var a=t.data;200===t.status?((0,r.default)(a,e.userForm),e.privateKeyList.unshift(a),e.privateKeyList=(0,s.unique)(e.privateKeyList,"privateKey"),localStorage.setItem("privateKeyList",(0,n.default)(e.privateKeyList)),e.$message({type:"success",message:"新增成功"})):e.$message({type:"error",message:a.errorMessage||"系统错误"})}).catch(function(t){e.$message({type:"error",message:"系统错误"})})},copyPubilcKey:function(e){var t=this;e?this.$copyText(e).then(function(e){t.$message({type:"success",showClose:!0,message:"复制成功",duration:2e3})}):this.$message({type:"fail",showClose:!0,message:"key为空，不复制。",duration:2e3})},exportFile:function(e){var t=(0,n.default)(e),a=new Blob([t],{type:"text;charset=utf-8"});d.saveAs(a,e.userName)},importFile:function(e){if(e.target.files.length){this.fileString="";var t=e.target.files[0],a=(Math.ceil(t.size/1024),new FileReader);a.readAsText(t,"UTF-8");var r=this;a.onload=function(e){r.fileString=e.target.result;try{var t={privateKey:p.encode(JSON.parse(r.fileString).privateKey)};(0,o.queryImportPrivateKey)({},t).then(function(e){var t=e.data;200===e.status?(localStorage.setItem("keyInfo",(0,n.default)(t)),r.uploadMap=JSON.parse(r.fileString),r.privateKeyList.unshift(r.uploadMap),r.privateKeyList=(0,s.unique)(r.privateKeyList,"privateKey"),localStorage.setItem("privateKeyList",(0,n.default)(r.privateKeyList)),r.$message({type:"success",message:"导入成功"})):r.$message({type:"error",message:l.default.errCode[e.data.code].cn||"系统错误"})}).catch(function(e){r.$message({type:"error",message:"系统错误"})})}catch(e){r.$message({type:"error",message:"导入失败"})}}}}}}},Qxxu:function(e,t,a){"use strict";a.r(t);var n=a("LjWc"),r=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);t.default=r.a},YUMh:function(e,t,a){"use strict";a.r(t);var n=a("sxul"),r=a("Qxxu");for(var i in r)"default"!==i&&function(e){a.d(t,e,function(){return r[e]})}(i);a("rYv6");var o=a("KHd+"),s=Object(o.a)(r.default,n.a,n.b,!1,null,"117650a5",null);s.options.__file="src/views/rivateKeyManagement/rivateKeyManagement.vue",t.default=s.exports},kY03:function(e,t,a){(e.exports=a("JPst")(!1)).push([e.i,'/*\n * Copyright 2014-2019 the original author or authors.\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n.search-part[data-v-117650a5] {\n    padding: 30px 41px 18px 42px;\n    overflow: hidden;\n}\n.search-part[data-v-117650a5]::after {\n    display: block;\n    content: "";\n    clear: both;\n}\n.search-part-left[data-v-117650a5] {\n    float: left;\n}\n.search-part-left-btn[data-v-117650a5] {\n    border-radius: 20px;\n}\n.search-part-right[data-v-117650a5] {\n    float: right;\n}\n.input-with-select[data-v-117650a5] .el-input__inner {\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    border: 1px solid #eaedf3;\n    -webkit-box-shadow: 0 3px 11px 0 rgba(159, 166, 189, 0.11);\n            box-shadow: 0 3px 11px 0 rgba(159, 166, 189, 0.11);\n}\n.input-with-select[data-v-117650a5] .el-input-group__append {\n    border-top-right-radius: 20px;\n    border-bottom-right-radius: 20px;\n    -webkit-box-shadow: 0 3px 11px 0 rgba(159, 166, 189, 0.11);\n            box-shadow: 0 3px 11px 0 rgba(159, 166, 189, 0.11);\n}\n.input-with-select[data-v-117650a5] .el-button {\n    border: 1px solid #1f83e7;\n    border-radius: inherit;\n    background: #1f83e7;\n    color: #fff;\n}\n.search-table[data-v-117650a5] {\n    padding: 0 40px 0 41px;\n}\n.copy-public-key[data-v-117650a5] {\n    margin-right: 5px;\n}\n.dialog-wrapper[data-v-117650a5] .el-dialog__title {\n    font-size: 18px;\n    color: #fff;\n    font-weight: bold;\n    letter-spacing: 0.5px;\n}\n.dialog-wrapper[data-v-117650a5] .el-dialog__body {\n    padding-top: 10px;\n    padding-bottom: 0;\n}\n.dialog-wrapper[data-v-117650a5] .el-form-item__label {\n    font-size: 12px;\n    color: #00122c;\n}\n.dialog-wrapper[data-v-117650a5] .el-form-item {\n    margin-bottom: 0px;\n    padding-bottom: 20px;\n}\n.dialog-wrapper[data-v-117650a5] .el-dialog__footer {\n    padding-top: 0;\n}\n.dialog-wrapper[data-v-117650a5] .el-button {\n    padding: 10px 20px;\n}\n.dialog-wrapper[data-v-117650a5] .el-input__inner {\n    height: 36px;\n    line-height: 36px;\n    border-radius: 2px;\n}\n.dialog-wrapper[data-v-117650a5] .el-dialog__header {\n    color: #fff;\n    padding-top: 30px;\n    padding-left: 50px;\n}\n.fileinput-button[data-v-117650a5] {\n    position: relative;\n    display: inline-block;\n    overflow: hidden;\n    padding: 10px 20px;\n    color: #fff;\n    background: #1f83e7;\n    border-radius: 20px;\n    border-color: #1f83e7;\n    left: 5px;\n    cursor: pointer;\n}\n.fileinput-button input[data-v-117650a5]{\n    position: absolute;\n    right: -100px;\n    top: 0px;\n    opacity: 0;\n    -ms-filter: \'alpha(opacity=0)\';\n    cursor: pointer;\n    height: 42px;\n}\r\n',""])},rYv6:function(e,t,a){"use strict";var n=a("AAfK");a.n(n).a},sxul:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"rivate-key-management-wrapper"},[a("v-contentHead",{attrs:{headTitle:"私钥管理"},on:{changeGroup:e.changeGroup}}),e._v(" "),a("div",{staticClass:"module-wrapper",staticStyle:{"padding-bottom":"20px"}},[a("div",{staticClass:"search-part"},[a("div",{staticStyle:{display:"flex"}},[a("el-button",{staticClass:"search-part-left-btn",attrs:{type:"primary"},on:{click:e.creatUserBtn}},[e._v("新增用户")]),e._v(" "),a("span",{staticClass:"fileinput-button"},[a("span",[e._v("导入私钥")]),e._v(" "),a("input",{attrs:{type:"file"},on:{change:function(t){return e.importFile(t)}}})])],1)]),e._v(" "),a("div",{staticClass:"search-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.privateKeyList,"tooltip-effect":"dark"}},e._l(e.privateKeyHead,function(t){return a("el-table-column",{key:t.enName,attrs:{label:t.name,"show-overflow-tooltip":"",width:t.tdWidth,align:"center"},scopedSlots:e._u([{key:"default",fn:function(n){return["operate"!=t.enName?["address"===t.enName?a("span",[a("i",{staticClass:"wbs-icon-copy font-12 copy-public-key",attrs:{title:"复制地址"},on:{click:function(a){return e.copyPubilcKey(n.row[t.enName])}}}),e._v("\n                                "+e._s(n.row[t.enName])+"\n                            ")]):"publicKey"===t.enName?a("span",[a("i",{staticClass:"wbs-icon-copy font-12 copy-public-key",attrs:{title:"复制公钥"},on:{click:function(a){return e.copyPubilcKey(n.row[t.enName])}}}),e._v("\n                                "+e._s(n.row[t.enName])+"\n                            ")]):a("span",[e._v(e._s(n.row[t.enName]))])]:[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.exportFile(n.row)}}},[e._v("导出")])]]}}],null,!0)})}),1)],1)]),e._v(" "),e.creatUserNameVisible?a("el-dialog",{staticClass:"dialog-wrapper",attrs:{visible:e.creatUserNameVisible,title:"添加用户名",width:"400px",center:""},on:{"update:visible":function(t){e.creatUserNameVisible=t},close:e.closeCallback}},[a("el-form",{ref:"userForm",attrs:{rules:e.rules,model:e.userForm}},[a("el-form-item",{attrs:{label:"",prop:"userName"}},[a("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.userForm.userName,callback:function(t){e.$set(e.userForm,"userName",t)},expression:"userForm.userName"}})],1)],1),e._v(" "),a("div",{staticClass:"text-right",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.closeUserName}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.sureUserName("userForm")}}},[e._v("确 定")])],1)],1):e._e()],1)},r=[];n._withStripped=!0,a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r})}}]);