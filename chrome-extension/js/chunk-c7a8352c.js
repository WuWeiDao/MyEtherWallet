(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c7a8352c"],{"0200":function(t,e,n){t.exports=n.p+"img/defaultToken.png"},"0810":function(t,e,n){"use strict";var a=n("9a32"),s=n.n(a);s.a},"239d":function(t,e,n){},"2e7b":function(t,e,n){},"434f":function(t,e,n){},4820:function(t,e,n){"use strict";var a=n("69b7"),s=n.n(a);s.a},"50f7":function(t,e,n){},5589:function(t,e,n){"use strict";var a=n("2e7b"),s=n.n(a);s.a},"69b7":function(t,e,n){},"8e92":function(t,e,n){"use strict";var a=n("d43a"),s=n.n(a);s.a},"8f6a":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"crypto-kitties-manager"},[n("interface-container-title",{attrs:{title:t.$t("nftManager.title")}}),!t.isReady&&t.isOnlineAndEth?n("div",{staticClass:"inner-side-menu content-container"},[n("nft-side-menu",{attrs:{"supported-nft-obj":t.sideMenuData,"nft-config":t.nftConfig}}),n("loading-sign",{attrs:{loadingmessage1:t.$t("common.loading")}})],1):t._e(),t.isReady&&t.hasNfts?n("div",{staticClass:"inner-side-menu content-container"},[n("nft-side-menu",{attrs:{"supported-nft-obj":t.sideMenuData,"nft-config":t.nftConfig,"initial-highlighted":t.selectedContract,"loading-complete":t.countsRetrieved,"sent-update":t.sentUpdate},on:{selected:t.changeSelectedContract,openCustomModal:t.openCustomModal,removeCustomNft:t.openRemovalConfirmModal}}),t.showDetails?n("div",[n("nft-details",{attrs:{nft:t.detailsFor,"selected-title":t.nftTitle},on:{nftTransferred:t.removeSentNft,resetNFT:t.resetNFT,back:t.comeBack}})],1):t._e(),t.showDetails?t._e():n("div",[n("content-block-title",{attrs:{"button-text":t.ntfCount,title:t.nftTitle}}),n("div",{staticClass:"grid-container"},[t._l(t.nftToShow,(function(e){return n("div",{key:e.key,staticClass:"kitty"},[n("div",{staticClass:"kitty-img",on:{click:function(n){return t.showNftDetails(e)}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.hasImage(e),expression:"!hasImage(nft)"}],staticClass:"placeholder"},[n("div",{staticClass:"animated-background"})]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.hasImage(e),expression:"hasImage(nft)"}]},[n("img",{attrs:{src:t.getImage(e),alt:""},on:{load:function(n){return t.hasLoaded(e)}}})]),n("p",[t._v("#"+t._s(t._f("ConcatToken")(e.token)))])])])})),n("div",{directives:[{name:"show",rawName:"v-show",value:t.selectedNtf.count>9,expression:"selectedNtf.count > 9"}],staticClass:"internal-nav-container"},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.startIndex>0,expression:"startIndex > 0"}],staticClass:"internal-nav prev",on:{click:function(e){return t.getPrevious()}}},[n("i",{staticClass:"fa fa-chevron-left"})]),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.collectionLoading,expression:"!collectionLoading"}]},[t._v(t._s(t.$t("nftManager.showing-range",{first:t.startIndex,last:t.endIndex})))]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.collectionLoading,expression:"collectionLoading"}]},[t._v(t._s(t.$t("nftManager.loading-range",{first:t.startIndex,last:t.endIndex})))]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.showNextButton,expression:"showNextButton"}],staticClass:"internal-nav next",on:{click:function(e){return t.getNext()}}},[n("i",{staticClass:"fa fa-chevron-right"})])])],2)],1)],1):t._e(),t.isReady&&!t.hasNfts?n("div",{staticClass:"inner-side-menu content-container"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.reLoading,expression:"!reLoading"}]},[n("h3",{staticClass:"no-nft-notice"},[t._v(t._s(t.$t("nftManager.no-nft")))]),n("standard-button",{attrs:{options:t.onlyCustom,"click-function":t.openCustomModal}})],1),n("span",{directives:[{name:"show",rawName:"v-show",value:t.reLoading,expression:"reLoading"}]},[t._v(t._s(t.$t("nftManager.reloading")))])]):t._e(),t.isOnlineAndEth?t._e():n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.online,expression:"!online"}]},[t._v(" "+t._s(t.$t("nftManager.nft-are"))+" ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.online,expression:"online"}]},[t._v(" "+t._s(t.$t("nftManager.not-supported",{value:t.network.type.name_long}))+" ")])]),n("div",{staticClass:"flex--row--align-start mft-manager-content-container"}),n("nft-custom-add-modal",{ref:"customModal",attrs:{"add-token":t.addCustom,"active-address":t.activeAddress}}),n("nft-custom-confirm-remove-modal",{ref:"customRemoveModal",attrs:{"for-removal":t.forRemoval},on:{remove:t.removeCustomNft}})],1)},s=[],o=(n("a4d3"),n("99af"),n("4de4"),n("c740"),n("d81d"),n("fb6a"),n("a434"),n("b0c0"),n("a9e3"),n("9129"),n("b680"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("07ac"),n("25f0"),n("159b"),n("d0ff")),r=(n("96cf"),n("c964")),i=n("fc11"),c=n("8ded"),d=n.n(c),u=n("c1be"),l=n("55c1"),f=function(t,e){var n=e._c;return n("div",{staticClass:"flex--row--align-center content-block-title"},[n("h4",[e._v(e._s(e.props.title))]),n("div",{staticClass:"margin--left--auto"},[n("p",[e._v(e._s(e.props.buttonText))])])])},h=[],p={props:{title:{type:String,default:""},buttonText:{type:String,default:""}}},m=p,v=(n("ee54a1"),n("2877")),g=Object(v["a"])(m,f,h,!0,null,"1903569e",null),b=g.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nft-side-menu"},[n("div",{staticClass:"desktop-menu"},[n("ul",{staticClass:"listing-container"},[t._l(t.sortByCount,(function(e){return n("li",{key:e.key,class:e.contract===t.selected?"selected":"",on:{click:function(n){return t.selectNft(e)}}},[n("span",{staticClass:"title"},[t._v(t._s(e.title))]),n("span",{staticClass:"count"},[t._v("("+t._s(e.count)+")")]),n("i",{directives:[{name:"show",rawName:"v-show",value:e.customNft,expression:"i.customNft"}],staticClass:"fa fa-times-circle clickable remove",on:{click:function(n){return t.removeCustomEntry(e)}}})])})),n("li",[n("span",{staticClass:"add-custom",on:{click:t.openCustomModal}},[t._v("+"+t._s(t.$t("nftManager.custom")))])])],2)]),n("div",{staticClass:"mobile-menu"},[n("b-dropdown",{attrs:{text:"CryptoKitties (5)"}},t._l(t.sortByCount,(function(e){return n("b-dropdown-item",{key:e.key,attrs:{href:"#"}},[t._v(" "+t._s(e.title)+" ("+t._s(e.count)+") ")])})),1)],1)])},y=[],C=(n("4e82"),{props:{supportedNftObj:{type:Object,default:function(){return{}}},initialHighlighted:{type:String,default:""},loadingComplete:{type:Boolean,default:!1},sentUpdate:{type:Number,default:0}},data:function(){return{selected:"",searchResults:[]}},computed:{sortByCount:function(){return Object.values(this.supportedNftObj).sort((function(t,e){return t.count<e.count?1:t.count>e.count?-1:0}))}},watch:{loadingComplete:function(){this.setSelectedToTop()},sentUpdate:function(){this.setSelectedToTop()}},mounted:function(){this.selected=this.initialHighlighted},methods:{openCustomModal:function(){this.$emit("openCustomModal")},setSelectedToTop:function(){this.selected=this.sortByCount[0].contract,this.$emit("selected",this.selected)},selectNft:function(t){this.searchResults=[],t.count>0&&(this.selected=t.contract,this.$emit("selected",t.contract))},showDetails:function(t){this.searchResults=[],this.$emit("showTokenDetails",t)},removeCustomEntry:function(t){this.$emit("removeCustomNft",t)}}}),k=C,x=(n("d3a7"),n("becd"),Object(v["a"])(k,w,y,!1,null,"fe52c908",null)),O=x.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"crypto-kitties-details"},[n("div",{staticClass:"crypto-kitties-details-content-container"},[n("back-button",{nativeOn:{click:function(e){return t.goBack(e)}}}),n("div",{staticClass:"grid-container"},[n("div",{staticClass:"kitty-image"},[n("img",{attrs:{src:t.getImage(t.nft),alt:""}})]),n("div",{staticClass:"kitty-text"},[n("h3",[t._v(t._s(t.$t("nftManager.send-my",{value:t.selectedTitle})))]),n("p",[t._v("#"+t._s(t.nft.token))]),n("div",{staticClass:"address-input-container"},[n("dropdown-address-selector",{attrs:{title:t.$t("sendTx.to-addr")},on:{toAddress:t.prepareTransfer}}),n("div",{staticClass:"send-button-container"},[n("standard-button",{attrs:{"button-disabled":!t.isValidAddress,options:t.sendButton,"click-function":t.transfer}})],1)],1)])])],1)])},N=[],D=n("2f62"),P=n("ce96"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"small-back-button"},[n("p",{on:{click:function(e){return e.preventDefault(),t.back(e)}}},[t._v("< "+t._s(t.$t("common.back")))])])},S=[],I={props:{url:{type:String,default:""}},methods:{back:function(){this.$router.push("/interface/nft-manager")}}},A=I,T=(n("8e92"),Object(v["a"])(A,j,S,!1,null,"6bdf08f6",null)),$=T.exports,M=n("94b2"),R=n("a8f0"),E=n("0200"),B=n.n(E);function F(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?F(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var H={components:{"back-button":$,"dropdown-address-selector":M["a"],"standard-button":R["a"]},props:{selectedTitle:{type:String,default:"Error"},nft:{type:Object,default:function(){return{}}},selectedContract:{type:String,default:"Error"},nftConfig:{type:Object,default:function(){return{}}}},data:function(){return{toAddress:"",tokenContract:{},ERC721tokenContract:{},cryptoKittiesContract:{},cryptoKittiesConfig:"0x06012c8cf97bead5deae237070f9587f8e7a266d",sendButton:{title:this.$t("sendTx.send"),buttonStyle:"green",helpCenter:!0,noMinWidth:!0,fullWidth:!0},isValidAddress:!1}},computed:L({},Object(D["b"])(["account","web3"])),watch:{},mounted:function(){this.ERC721tokenContract=new this.web3.eth.Contract([{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_tokenId",type:"uint256"}],name:"transferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}])},methods:{getImage:function(t){return t.customNft?B.a:t.image},prepareTransfer:function(t){this.toAddress=t.address,this.isValidAddress=t.valid,this.ERC721tokenContract.options.address=this.nft.contract},buildData:function(){return this.nft.contract.toLowerCase()===this.cryptoKittiesConfig.toLowerCase()?(this.cryptoKittiesContract=new this.web3.eth.Contract([{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_tokenId",type:"uint256"}],name:"transfer",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}]),this.cryptoKittiesContract.methods.transfer(this.toAddress,this.nft.token).encodeABI()):this.ERC721tokenContract.methods.transferFrom(this.account.address,this.toAddress,this.nft.token).encodeABI()},transfer:function(){var t=this;if(this.isValidAddress){var e=this.buildData(),n={from:this.account.address,to:this.nft.contract,data:e};this.web3.eth.sendTransaction(n).on("transactionHash",(function(){t.$emit("nftTransferred",t.nft),t.toAddress=""})).catch((function(e){t.$emit("resetNFT",t.nft),P["e"].responseHandler(e,P["e"].ERROR)}))}},goBack:function(){this.$emit("back")}}},K=H,W=(n("a073"),Object(v["a"])(K,_,N,!1,null,"78eef7f5",null)),U=W.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-modal",{ref:"modal",staticClass:"bootstrap-modal nopadding max-height-1",attrs:{title:t.$t("nftManager.add-custom"),"hide-footer":"",centered:""},on:{hidden:t.resetCompState}},[n("form",{staticClass:"tokens-modal-body",on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()}}},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.contractAddress,expression:"contractAddress"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:["custom-input-text-1",""===t.contractAddress||t.validAddress?"":"invalid-address"],attrs:{placeholder:t.$t("nftManager.ph-token-addr"),name:"Address",type:"text"},domProps:{value:t.contractAddress},on:{input:function(e){e.target.composing||(t.contractAddress=e.target.value)}}}),n("span",{directives:[{name:"show",rawName:"v-show",value:""!==t.contractAddress&&!t.validAddress,expression:"contractAddress !== '' && !validAddress"}],staticClass:"error-message"},[t._v(" "+t._s(t.$t("nftManager.invalid-addr"))+" ")]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.nonStandardMessage,expression:"nonStandardMessage"}]},[t._v(" "+t._s(t.$t("nftManager.no-method-no-token",{token:t.tokenSymbol}))+" ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.tokenSymbol,expression:"tokenSymbol"}],staticClass:"custom-input-text-1",attrs:{placeholder:t.$t("nftManager.name"),name:"Symbol",type:"text"},domProps:{value:t.tokenSymbol},on:{input:function(e){e.target.composing||(t.tokenSymbol=e.target.value)}}})]),n("div",{staticClass:"button-block"},[n("button",{class:[t.allFieldsValid?"":"disabled","save-button large-round-button-green-filled clickable"],on:{click:function(e){return e.preventDefault(),t.addCustom(t.contractAddress,t.tokenSymbol)}}},[t._v(" "+t._s(t.$t("common.save"))+" ")]),n("interface-bottom-text",{attrs:{"link-text":t.$t("common.help-center"),question:t.$t("common.dont-know"),link:"https://kb.myetherwallet.com"}})],1)])])],1)},q=[],G=(n("4d63"),n("ac1f"),n("498a"),n("539d")),z=n("b7d3");function J(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function Z(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?J(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):J(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Q={components:{"interface-bottom-text":G["a"]},props:{addToken:{type:Function,default:function(){}},activeAddress:{type:String,default:""}},data:function(){return{contractAddress:"",tokenSymbol:"",tokenDecimal:"",validAddress:!1,nonStandardMessage:!1}},computed:Z({},Object(D["b"])(["web3"]),{allFieldsValid:function(){return!!this.validAddress&&(""!==this.tokenSymbol&&(!this.errors.has("address")&&!this.errors.has("symbol")))}}),watch:{contractAddress:function(t){var e=t.toLowerCase().trim(),n=new RegExp(/[a-zA-Z0-9]/g);this.validAddress=n.test(e)&&Object(z["a"])(e),this.toAddress=e,this.contractAddress=e},tokenSymbol:function(t){this.tokenSymbol=t}},methods:{resetCompState:function(){this.contractAddress="",this.tokenSymbol="",this.tokenDecimal="",this.validAddress=!1,this.nonStandardMessage=!1},addCustom:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.checkIfStandard(e);case 2:a=t.sent,a?this.addToken(e,n):this.nonStandardMessage=!0;case 4:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),openCustomModal:function(){this.$refs.customModal.$refs.modal.show()},checkIfStandard:function(t){var e=this;return new Promise((function(n){var a=new e.web3.eth.Contract([{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"}]);a.options.address=t,a.methods.supportsInterface("0x780e9d63").call().then((function(t){t?n(!0):a.methods.tokenOfOwnerByIndex(e.activeAddress,0).call().then((function(){n(!0)})).catch((function(){n(!1)}))})).catch((function(){n(!1)}))}))}}},X=Q,Y=(n("5589"),Object(v["a"])(X,V,q,!1,null,"a19efa9e",null)),tt=Y.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-modal",{ref:"modal",staticClass:"bootstrap-modal nopadding max-height-1",attrs:{title:t.$t("nftManager.remove-custom"),"hide-footer":"",centered:""}},[n("div",{staticClass:"button-container"},[n("standard-button",{attrs:{options:t.removeButton,"click-function":t.continueRemove}}),n("standard-button",{attrs:{options:t.cancelButton,"click-function":t.cancelRemove}})],1)])],1)},nt=[],at={components:{"standard-button":R["a"]},props:{forRemoval:{type:Object,default:function(){return{}}}},data:function(){return{removeButton:{title:"".concat(this.$t("nftManager.remove")),buttonStyle:"red",helpCenter:!1,noMinWidth:!0,fullWidth:!1},cancelButton:{title:"".concat(this.$t("common.cancel")),buttonStyle:"grey-border",helpCenter:!1,noMinWidth:!0,fullWidth:!1}}},methods:{continueRemove:function(){this.$emit("remove",this.forRemoval),this.$refs.modal.hide()},cancelRemove:function(){this.$refs.modal.hide()}}},st=at,ot=(n("0810"),Object(v["a"])(st,et,nt,!1,null,"bf5fb564",null)),rt=ot.exports,it=(n("baa5"),n("901e")),ct=n.n(it),dt=function(t){return 2*t},ut=function(t){t="0x"==t.substring(0,2)?t.substring(2):t,t=t.substring(0,t.lastIndexOf("1")-1);var e=t.length;e-=dt(32);for(var n=new ct.a("0x"+t.substr(e,dt(32))).toNumber(),a=[],s=0;s<n;s++){e-=dt(1);var o=new ct.a("0x"+t.substr(e,dt(1))).toNumber();e-=dt(o),a.push(new ct.a("0x"+t.substr(e,dt(o))))}return a},lt=[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{constant:!0,inputs:[{name:"tokenAddr",type:"address"},{name:"addr",type:"address"}],name:"getTokenBalance",outputs:[{name:"bal",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"tokenAddr",type:"address"},{name:"owner",type:"address"},{name:"tokenId",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{name:"token",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"number",type:"uint256"}],name:"getByteSize",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_tokenAddresses",type:"address[]"},{name:"_owner",type:"address"}],name:"getTokenBalances",outputs:[{name:"",type:"bytes"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_tokenAddress",type:"address"},{name:"_owner",type:"address"},{name:"idxOffset",type:"uint256"},{name:"count",type:"uint256"}],name:"getOwnedTokens",outputs:[{name:"",type:"bytes"}],payable:!1,stateMutability:"view",type:"function"}],ft=n("1131"),ht=n.n(ft);function pt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function mt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?pt(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):pt(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var vt="https://nft.mewapi.io/nft",gt={components:{"nft-custom-add-modal":tt,"nft-custom-confirm-remove-modal":rt,"loading-sign":u["a"],"content-block-title":b,"nft-side-menu":O,"interface-container-title":l["a"],"nft-details":U,"standard-button":R["a"]},filters:{ConcatToken:function(t){return t?t.length>20?"".concat(t.substr(0,15),"...").concat(t.substr(t.length-6)):t:""}},data:function(){return{nftABI:lt,countPerPage:9,nftConfig:[],tokenHelper:{},mayHaveTokens:[!0,!0],countsRetrieved:!1,showDetails:!1,reLoading:!1,selectedContract:"0x06012c8cf97bead5deae237070f9587f8e7a266d",detailsFor:{},nftTokens:{},nftData:{},ownedTokens:[],tokenContractAddress:"0xeA3352C1a3480Ac5a32Fcd1F2854529BA7193F14",sentUpdate:0,customNFTs:[],forRemoval:{},collectionLoading:!1,onlyCustom:{title:this.$t("nftManager.add-custom"),buttonStyle:"green",helpCenter:!1,noMinWidth:!0,fullWidth:!1},nftObjectClone:{}}},computed:mt({},Object(D["b"])(["account","web3","online","network"]),{endIndex:function(){if(this.nftData[this.selectedContract]){if(!this.nftData[this.selectedContract].details)return 0;var t=this.nftData[this.selectedContract].details.length,e=t>this.countPerPage?this.countPerPage:t;return this.nftData[this.selectedContract].currentIndex+e}return null},nftTitle:function(){return this.nftData[this.selectedContract]?this.nftData[this.selectedContract].title:"".concat(this.$t("common.loading"))},nftToShow:function(){return this.nftData[this.selectedContract]&&this.nftData[this.selectedContract].details?this.nftData[this.selectedContract].details.length>this.countPerPage?this.nftData[this.selectedContract].details.slice(this.nftData[this.selectedContract].currentIndex,this.nftData[this.selectedContract].currentIndex+this.countPerPage):this.nftData[this.selectedContract].details:[]},ntfCount:function(){return this.nftData[this.selectedContract]?this.$t("nftManager.per-page-count",{perPage:this.countPerPage,count:this.nftData[this.selectedContract].count}):this.$t("nftManager.none-owned")},selectedNtf:function(){return this.nftData[this.selectedContract]?this.nftData[this.selectedContract]:{}},showNextButton:function(){if(this.nftData[this.selectedContract]){var t=this.nftData[this.selectedContract].count;return this.endIndex!==t&&this.endIndex<=t}return null},sideMenuData:function(){return this.nftData},startIndex:function(){return this.nftData[this.selectedContract]?this.nftData[this.selectedContract].currentIndex:0},activeAddress:function(){return this.account.address},hasNfts:function(){return Object.values(this.nftData).some((function(t){return t.count>0}))},isReady:function(){return this.isOnlineAndEth&&this.countsRetrieved},isOnlineAndEth:function(){return this.online&&"ETH"===this.network.type.name}}),watch:{},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.setup();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{addCustom:function(t,e){this.reLoading=!0,this.customNFTs.push({ERC721Extension:!0,contract:t,customNft:!0,title:e}),this.$refs.customModal.$refs.modal.hide(),d.a.set("customNFTs",this.customNFTs),this.sentUpdate+=1,this.setup()},removeCustomNft:function(t){this.reLoading=!0;var e=d.a.get("customNFTs");if(void 0!==e&&null!==e){var n=e.findIndex((function(e){return t.contract===e.contract}));e.splice(n,1),d.a.set("customNFTs",e),this.setup(),this.sentUpdate+=1}},openRemovalConfirmModal:function(t){this.forRemoval=t,this.$refs.customRemoveModal.$refs.modal.show()},openCustomModal:function(){this.$refs.customModal.$refs.modal.show()},hasLoaded:function(t){this.$set(t,"loaded",!0)},hasImage:function(t){return!!t.customNft||(!!t.loaded||void 0)},removeSentNft:function(t){this.nftObjectClone=ht.a._.clone(this.nftData[t.contract]);var e=this.nftData[t.contract].details.filter((function(e){return e.token!==t.token}));this.$set(this.nftData[t.contract],"details",e),this.nftData[t.contract].count-=1,0===this.nftData[t.contract].count&&(this.sentUpdate+=1),this.showDetails=!1},resetNFT:function(t){this.nftData[t.contract]=this.nftObjectClone},changeSelectedContract:function(t){this.selectedContract=t,this.showDetails=!1},comeBack:function(){this.showDetails=!1},getImage:function(t){return t.customNft?B.a:t.image},setup:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={count:0,selected:!1,startIndex:0,priorIndex:0,currentIndex:0,details:[]},n=d.a.get("customNFTs"),void 0!==n&&null!==n&&(this.customNFTs=n),t.next=5,this.getTokenConfig();case 5:a=t.sent,s=a.map((function(t){return mt({},t,{contract:t.contractAddress})})).reduce((function(t,e){return e.active&&t.push(e),t}),[]),this.nftConfig=[].concat(Object(o["a"])(this.customNFTs),Object(o["a"])(s)),this.nftData=this.nftConfig.reduce((function(t,n){return t[n.contract]=mt({},n,{},e),t}),{}),"ETH"===this.network.type.name&&(this.getOwnedCounts(),this.getOwned());case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getNftImagePath:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(vt,"?contract=").concat(e,"&token=").concat(n),{mode:"cors",cache:"no-cache",method:"GET"});case 2:return a=t.sent,t.next=5,a.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),getOwnedCounts:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n,a,s,o=this,r=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:this.activeAddress,n=this.nftConfig.filter((function(t){return t.ERC721Extension})).map((function(t){return t.contract})),a=new this.web3.eth.Contract(lt),a.options.address=this.tokenContractAddress,t.next=6,a.methods.getTokenBalances(n,e.toLowerCase()).call();case 6:s=t.sent,ut(s).map((function(t,e){return o.nftData[n[e]].count=Number.isNaN(t.toNumber())?0:t.toNumber(),t.toString()}));case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getOwned:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n,a,s,o=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=o.length>0&&void 0!==o[0]?o[0]:this.activeAddress,n=o.length>1&&void 0!==o[1]?o[1]:this.nftData,this.processing){t.next=11;break}return this.processing=!0,a=Object.keys(n),t.next=7,this.getOwnedTokens(a,e,n);case 7:return s=t.sent,this.ready=!0,this.processing=!1,t.abrupt("return",s);case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getOwnedNonStandard:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var a,s,o=this,r=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=r.length>2&&void 0!==r[2]?r[2]:0,s=r.length>3&&void 0!==r[3]?r[3]:this.countPerPage,fetch("".concat(vt,"?nonStandardContract=").concat(e,"&address=").concat(n,"&offset=").concat(a,"&limit=").concat(s),{mode:"cors",cache:"no-cache",method:"GET"}).then((function(t){return t.json()})).then((function(t){if(t.total){o.nftData[e].count=t.total,o.countsRetrieved=!0;var n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;return e.reduce((function(t,e){return"@tokenvalue@"===e&&(e=n.toString()),t&&"undefined"!==t[e]?t[e]:void 0}),t)},a=o.nftData[e].metadataKeys||["kitties"],s=o.nftData[e].imageKey||"image_url_png",r=n(t,a)?n(t,a).map((function(t){return{contract:e,token:t.id,image:t[s]?"".concat(vt,"/image?path=").concat(t[s]):""}})):[];return r.length>0?(o.nftData[e].details=r.slice(0,9),o.$set(o.nftData[e],"details",r.slice(0,9)),o.nftData[e].details):[]}})).then((function(t){if(t){if(t.length>0)for(var n=t.length>o.countPerPage?o.countPerPage:t.length,a=function(n){Number.isNaN(t[n].token)||""!==t[n].image||o.getNftImagePath(e,t[n].token).then((function(t){o.nftData[e].details[n].image="".concat(vt,"/image?path=").concat(t.image)})).catch((function(){o.nftData[e].details[n]&&(o.nftData[e].details[n].image="")}))},s=0;s<n;s++)a(s);setTimeout((function(){o.reLoading=!1}),3e3)}}));case 3:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),getOwnedStandard:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var a,s,o,r,i=this,c=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=c.length>2&&void 0!==c[2]?c[2]:this.countPerPage,s=c.length>3&&void 0!==c[3]?c[3]:this.activeAddress,o=c.length>4&&void 0!==c[4]?c[4]:void 0,r=c.length>5&&void 0!==c[5]&&c[5],o||(o=new this.web3.eth.Contract(lt),o.options.address=this.tokenContractAddress),o.methods.getOwnedTokens(e,s.toLowerCase(),n,a).call().then((function(t){return ut(t).map((function(t){var n={contract:e,token:t.toNumber(),image:""};return r&&(n.customNft=!0,n.token=t.toFixed(0).toString()),n}))})).then((function(t){if(t){if(i.nftData[e].details=t,i.$set(i.nftData[e],"details",t),t.length>0)for(var n=t.length>i.countPerPage?i.countPerPage:t.length,a=function(n){Number.isNaN(t[n].token)||t[n].customNft?t[n].customNft&&(i.nftData[e].details[n].image=""):i.getNftImagePath(e,t[n].token).then((function(t){i.nftData[e].details[n].image="".concat(vt,"/image?path=").concat(t.image)})).catch((function(){i.nftData[e].details[n]&&(i.nftData[e].details[n].image="")}))},s=0;s<n;s++)a(s);i.collectionLoading=!1}}));case 6:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),getOwnedTokens:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n,a){var s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s=new this.web3.eth.Contract(lt),s.options.address=this.tokenContractAddress,o=0;case 3:if(!(o<e.length)){t.next=10;break}return t.next=6,this.loadForContract(e[o],a,n,s);case 6:a=t.sent;case 7:o++,t.next=3;break;case 10:case"end":return t.stop()}}),t,this)})));function e(e,n,a){return t.apply(this,arguments)}return e}(),getNext:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.account.address;this.collectionLoading=!0;var e=this.nftData[this.selectedContract],n=e.currentIndex+this.countPerPage;n<=e.count?(e.priorIndex=e.currentIndex,e.currentIndex=n):(e.priorIndex=e.currentIndex,e.currentIndex=e.count),e.nonStandard?this.getOwnedNonStandard(e.contract,t,n,this.countPerPage):e.customNft?this.getOwnedStandard(e.contract,n,this.countPerPage,void 0,void 0,!0):this.getOwnedStandard(e.contract,n,this.countPerPage)},getPrevious:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.activeAddress;this.collectionLoading=!0;var e=this.nftData[this.selectedContract],n=e.currentIndex-e.priorIndex;e.currentIndex-n>=0?e.currentIndex=e.currentIndex-n:e.currentIndex=0,e.priorIndex-n>=0?e.priorIndex=e.priorIndex-n:e.priorIndex=0,n=0===e.currentIndex&&0===e.priorIndex?0:e.currentIndex,n>=0&&(e.nonStandard?this.getOwnedNonStandard(e.contract,t,n,this.countPerPage):e.customNft?this.getOwnedStandard(e.contract,n,this.countPerPage,void 0,void 0,!0):this.getOwnedStandard(e.contract,n,this.countPerPage))},getTokenConfig:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(vt,"?supported=true"),{mode:"cors",cache:"no-cache",method:"GET","Cache-Control":"no-cache"});case 2:return e=t.sent,t.next=5,e.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),loadForContract:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var a,s,o=this,r=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=r.length>2&&void 0!==r[2]?r[2]:this.activeAddress,s=r.length>3&&void 0!==r[3]?r[3]:null,!n[e].ERC721Extension){t.next=7;break}return this.getOwnedStandard(e,0,this.countPerPage,a,s,n[e].customNft).then((function(t){o.nftData[e].details=t})),t.abrupt("return",n);case 7:n[e].nonStandard&&this.getOwnedNonStandard(e,a);case 8:return t.abrupt("return",n);case 9:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),showNftDetails:function(t){this.detailsFor=t,this.showDetails=!0}}},bt=gt,wt=(n("cf81"),Object(v["a"])(bt,a,s,!1,null,"7fee02c4",null)),yt=wt.exports;n.d(e,"default",(function(){return yt}))},9922:function(t,e,n){},"9a32":function(t,e,n){},a073:function(t,e,n){"use strict";var a=n("239d"),s=n.n(a);s.a},becd:function(t,e,n){"use strict";var a=n("434f"),s=n.n(a);s.a},c1be:function(t,e,n){"use strict";var a=function(t,e){var n=e._c;return n("div",[n("div",{class:[e.props.color,"loading-container","loading-sign"]},[e._m(0),""!=e.props.loadingmessage1?n("p",{staticClass:"loading-message1"},[e._v(" "+e._s(e.props.loadingmessage1)+" ")]):e._e(),""!=e.props.loadingmessage2?n("p",{staticClass:"loading-message2"},[e._v(" "+e._s(e.props.loadingmessage2)+" ")]):e._e()])])},s=[function(t,e){var n=e._c;return n("div",{staticClass:"lds-spinner"},[n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div")])}],o={name:"LoadingSign",props:{type:{type:String,default:""},loadingmessage1:{type:String,default:""},loadingmessage2:{type:String,default:""},color:{type:String,default:"black"}}},r=o,i=(n("4820"),n("2877")),c=Object(i["a"])(r,a,s,!0,null,"3944612c",null),d=c.exports;n.d(e,"a",(function(){return d}))},cf81:function(t,e,n){"use strict";var a=n("50f7"),s=n.n(a);s.a},d3a7:function(t,e,n){"use strict";var a=n("f1cb"),s=n.n(a);s.a},d43a:function(t,e,n){},ee54a1:function(t,e,n){"use strict";var a=n("9922"),s=n.n(a);s.a},f1cb:function(t,e,n){}}]);