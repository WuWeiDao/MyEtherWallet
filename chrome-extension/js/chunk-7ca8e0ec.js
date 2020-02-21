(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ca8e0ec"],{"2bdf":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"manage-ens-container"},[n("h3",[t._v(t._s(t.$t("ens.manage"))+" "+t._s(t.domainName))]),n("b-btn",{directives:[{name:"show",rawName:"v-show",value:t.resolverMultiCoinSupport,expression:"resolverMultiCoinSupport"},{name:"b-toggle",rawName:"v-b-toggle.multicoinsec",modifiers:{multicoinsec:!0}}],staticClass:"collapse-open-button",attrs:{variant:"primary"}},[n("p",[t._v(t._s(t.$t("ens.multi-coin")))])]),n("b-collapse",{staticClass:"collapse-content",attrs:{id:"multicoinsec",visible:t.resolverMultiCoinSupport,accordion:"manage-ens-accordion"}},[n("div",{staticClass:"form-container"},[n("form",{staticClass:"manage-multi-coin-form"},[n("div",{staticClass:"title-and-dropdown-container"},[n("h4",[t._v(t._s(t.$t("ens.multi-coin"))+":")]),n("b-dd",{staticClass:"dropdown-button-2",attrs:{text:t.selectedCurrency}},t._l(Object.keys(t.supportedCoins),(function(e,r){return n("b-dd-item",{key:e+r,on:{click:function(n){return t.addCurrencyInput(e)}}},[t._v(t._s(e))])})),1)],1),t._l(t.currencyInputs,(function(e,r){return n("div",{key:r.id,staticClass:"multi-coin-input-container"},[n("label",{attrs:{for:"updateResolver"}},[t._v(t._s(r)+":")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"v.value"}],attrs:{placeholder:e.name+" address",type:"text",name:"updateResolver"},domProps:{value:e.value},on:{input:function(n){n.target.composing||t.$set(e,"value",n.target.value)}}}),n("i",{class:["validity-indication fa",""===e.value||e.validator.validate(e.value)?"valid fa-check-circle-o":"error fa-times-circle-o"]}),n("i",{staticClass:"fa fa-lg fa-times",on:{click:function(){t.removeCoinInput(r)}}})])})),n("div",{staticClass:"multi-coin-submit-container"},[n("button",{class:t.isValidAddresses?"":"disabled",on:{click:function(e){return e.preventDefault(),t.checkAndSendCurrency(e)}}},[t._v(" "+t._s(t.$t("common.save"))+" ")])])],2)])]),n("b-btn",{directives:[{name:"show",rawName:"v-show",value:t.resolverTxtSupport,expression:"resolverTxtSupport"},{name:"b-toggle",rawName:"v-b-toggle.textrecords",modifiers:{textrecords:!0}}],staticClass:"collapse-open-button",attrs:{variant:"primary"}},[n("p",[t._v(t._s(t.$t("ens.txt-record")))])]),n("b-collapse",{staticClass:"collapse-content",attrs:{id:"textrecords",visible:!t.resolverMultiCoinSupport&&t.resolverTxtSupport,accordion:"manage-ens-accordion"}},[n("div",{staticClass:"form-container"},[n("form",{staticClass:"manage-multi-coin-form"},[n("div",{staticClass:"title-and-dropdown-container"},[n("h4",[t._v(t._s(t.$t("ens.txt-record"))+":")]),n("b-dd",{staticClass:"dropdown-button-2",attrs:{text:t._f("capitalize")(t.selectedText)}},t._l(Object.keys(t.txtRecords),(function(e,r){return n("b-dd-item",{key:e+r,on:{click:function(n){return t.addTxtInput(e)}}},[t._v(t._s(t._f("capitalize")(e)))])})),1)],1),t._l(t.txtRecordInputs,(function(e,r){return n("div",{key:r.id,staticClass:"multi-coin-input-container"},[n("label",{attrs:{for:"updateResolver"}},[t._v(t._s(t._f("capitalize")(r))+":")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.txtRecordInputs[r],expression:"txtRecordInputs[k]"},{name:"validate",rawName:"v-validate",value:t.getValidation(r),expression:"getValidation(k)"}],attrs:{placeholder:t._f("capitalize")(r),name:r,type:"text"},domProps:{value:t.txtRecordInputs[r]},on:{input:function(e){e.target.composing||t.$set(t.txtRecordInputs,r,e.target.value)}}}),n("i",{class:["validity-indication fa",t.txtRecordInputs[r]&&""!==t.txtRecordInputs[r]&&!t.errors.hasOwnProperty(""+r)?"valid fa-check-circle-o":"error fa-times-circle-o"]}),n("i",{staticClass:"fa fa-lg fa-times",on:{click:function(){t.removeTxtInput(r)}}})])})),n("div",{staticClass:"multi-coin-submit-container"},[n("button",{class:t.validTextRecords?"disabled":"",on:{click:function(e){return e.preventDefault(),t.checkAndSendTxtRecs(e)}}},[t._v(" "+t._s(t.$t("common.save"))+" ")])])],2)])]),n("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.transferens",modifiers:{transferens:!0}}],staticClass:"collapse-open-button",attrs:{variant:"primary"}},[n("p",[t._v(t._s(t.$t("ens.transfer-domain")))])]),n("b-collapse",{staticClass:"collapse-content",attrs:{id:"transferens",visible:!t.resolverMultiCoinSupport&&!t.resolverTxtSupport,accordion:"manage-ens-accordion"}},[n("div",{staticClass:"form-container"},[n("form",{staticClass:"manage-form"},[n("div",{staticClass:"input-container"},[n("label",{attrs:{for:"transferEns"}},[t._v(t._s(t.$t("ens.transfer-to"))+":")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.transferTo,expression:"transferTo"}],attrs:{type:"text",name:"transferEns",placeholder:"0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D"},domProps:{value:t.transferTo},on:{input:function(e){e.target.composing||(t.transferTo=e.target.value)}}})]),n("div",{staticClass:"submit-container"},[n("button",{class:t.isAddress(t.transferTo)?"":"disabled",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.transferDomain(t.transferTo)}}},[t._v(" "+t._s(t.$t("ens.transfer"))+" ")])])])])]),n("interface-bottom-text",{attrs:{"link-text":t.$t("common.help-center"),question:t.$t("common.have-issues"),link:"https://kb.myetherwallet.com"}})],1)},s=[],a=(n("a4d3"),n("99af"),n("4de4"),n("7db0"),n("d81d"),n("b0c0"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("fc11")),i=n("539d"),o=n("b7d3"),c=n("2f62"),u=n("ce96"),l=n("1131"),d=n.n(l),p=n("3c35f");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(n,!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m={components:{"interface-bottom-text":i["a"]},props:{domainName:{type:String,default:""},setMultiCoin:{type:Function,default:function(){}},setRecord:{type:Function,default:function(){}},transferDomain:{type:Function,default:function(){}},tld:{type:String,default:""},resolverMultiCoinSupport:{type:Boolean,default:!1},resolverTxtSupport:{type:Boolean,default:!1},supportedCoins:{type:Object,default:function(){}},txtRecords:{type:Object,default:function(){}}},data:function(){var t=this.copySupported(),e={};for(var n in t)t[n].hasOwnProperty("value")&&""===t[n].value&&delete t[n];for(var r in this.txtRecords)""!==this.txtRecords[r]&&(e[r]=this.txtRecords[r]);return{transferTo:"",multiCoinSupport:!1,isAddress:o["a"],currencyInputs:t,selectedCurrency:"ETH",selectedText:"Email",hasError:!1,txtRecordInputs:e}},computed:v({},Object(c["b"])(["web3"]),{isValidAddresses:function(){for(var t in this.currencyInputs)if(""!==this.currencyInputs[t].value&&!this.currencyInputs[t].validator.validate(this.currencyInputs[t].value))return!1;return!0},validTextRecords:function(){for(var t in this.txtRecordInputs)if(this.txtRecordInputs[t]&&""!==this.txtRecordInputs[t])return!1;return!0}}),watch:{currencyInputs:{handler:function(t){this.currencyInputs=t},deep:!0},txtRecordInputs:{handler:function(t){this.txtRecordInputs=t},deep:!0}},mounted:function(){"."===this.domainName&&this.$router.push("/interface/dapps/manage-ens")},methods:{getValidation:function(t){var e=p["a"].find((function(e){return e.name.toLowerCase()===t.toLowerCase()}));switch(e.type){case"url":return"required|url:require_protocol";case"email":return"email|required";default:return"required"}},copySupported:function(){var t=d.a._.map(this.supportedCoins,d.a._.clone),e={};return t.forEach((function(t){e[t.symbol]=t})),e},addCurrencyInput:function(t){this.selectedCurrency=t;var e=this.copySupported(),n=Object.assign({},this.currencyInputs);n[t]?u["e"].responseHandler("Currency ".concat(t," is already added for ").concat(this.domainName),u["e"].WARN):(n[t]=e[t],this.currencyInputs=n)},addTxtInput:function(t){this.selectedText=t;var e=Object.assign({},this.txtRecordInputs);e[t]?u["e"].responseHandler("Text Record ".concat(t," input is already added for ").concat(this.domainName),u["e"].WARN):(e[t]=this.txtRecordInputs[t],this.txtRecordInputs=e)},removeCoinInput:function(t){var e=Object.assign({},this.currencyInputs);e[t].value="",this.currencyInputs=e},removeTxtInput:function(t){var e=Object.assign({},this.txtRecordInputs);e[t]="",this.txtRecordInputs=e},checkAndSendTxtRecs:function(){var t={},e=Object.assign({},this.txtRecordInputs),n=Object.assign({},this.txtRecords);Object.keys(n).forEach((function(r){e[r]&&n[r]!==e[r]&&(t[r]=e[r])})),Object.keys(t).length>0&&this.setRecord(t)},checkAndSendCurrency:function(){var t=[],e=Object.assign({},this.currencyInputs),n=Object.assign({},this.supportedCoins);Object.keys(n).forEach((function(r){e[r]&&n[r].value!==e[r].value&&t.push(e[r])})),t.length>0&&this.setMultiCoin(t)}}},b=m,h=(n("2f4a"),n("2877")),y=Object(h["a"])(b,r,s,!1,null,"b9cf391c",null),x=y.exports;n.d(e,"default",(function(){return x}))},"2f4a":function(t,e,n){"use strict";var r=n("7b55"),s=n.n(r);s.a},"3c35f":function(t,e,n){"use strict";var r=[{name:"email",type:"email"},{name:"url",type:"url"},{name:"avatar",type:"url"},{name:"description",type:"string"},{name:"notice",type:"string"},{name:"keywords",type:"string"},{name:"vnd.twitter",type:"string"},{name:"vnd.github",type:"string"}];e["a"]=r},"7b55":function(t,e,n){}}]);