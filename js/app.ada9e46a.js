(function(t){function e(e){for(var i,r,n=e[0],c=e[1],u=e[2],d=0,p=[];d<n.length;d++)r=n[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],i=!0,n=1;n<o.length;n++){var c=o[n];0!==a[c]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=o[0]))}return t}var i={},a={app:0},s=[];function r(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=i,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(o,i,function(e){return t[e]}.bind(null,i));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/cabify-challenge/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var u=0;u<n.length;u++)e(n[u]);var l=c;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"32fc":function(t,e){t.exports="data:image/png;base64,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"},5057:function(t,e){t.exports="data:image/png;base64,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"},"56d7":function(t,e,o){"use strict";o.r(e);var i=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("section",{staticClass:"products"},[o("h1",{staticClass:"main"},[t._v("Shopping cart")]),o("ProductList")],1),o("ProductSummary")],1)},s=[],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"product-list"},[t._m(0),o("ProductListItem")],1)},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"products-list tableHead"},[o("li",{staticClass:"products-list-title row"},[o("div",{staticClass:"col-product"},[t._v("Product details")]),o("div",{staticClass:"col-quantity"},[t._v("Quantity")]),o("div",{staticClass:"col-price"},[t._v("Price")]),o("div",{staticClass:"col-total"},[t._v("Total")])])])}],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.co.products.length?t._e():i("div",{staticClass:"empty-cart"},[i("h2",[t._v("Cart is empty.")])]),t._l(t.co.products,(function(e,a){return i("ul",{key:a,staticClass:"products-list"},[i("li",{staticClass:"product row"},[i("div",{staticClass:"col-product"},[i("figure",{staticClass:"product-image"},[i("img",{attrs:{src:o("bb6e")("./"+e.img),alt:e.name},on:{click:function(o){return t.openModal(e)}}}),i("div",{staticClass:"product-description"},[i("h1",{on:{click:function(o){return t.openModal(e)}}},[t._v(t._s(e.name))]),i("p",{staticClass:"product-code"},[t._v("Product code "+t._s(e.id))])])])]),i("div",{staticClass:"col-quantity"},[i("button",{staticClass:"count",on:{click:function(o){return t.co.decrease(e)}}},[t._v("-")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.quantity,expression:"product.quantity"}],staticClass:"product-quantity",attrs:{type:"number",disabled:""},domProps:{value:e.quantity},on:{input:function(o){o.target.composing||t.$set(e,"quantity",o.target.value)}}}),i("button",{staticClass:"count",on:{click:function(o){return t.co.scan(e.code)}}},[t._v("+")])]),i("div",{staticClass:"col-price"},[i("span",{staticClass:"product-price"},[t._v(t._s(e.price))]),i("span",{staticClass:"product-currency currency"},[t._v("€")])]),i("div",{staticClass:"col-total"},[i("span",{staticClass:"product-price"},[t._v(t._s(e.quantity*e.price))]),i("span",{staticClass:"product-currency currency"},[t._v("€")])]),i("el-dialog",{attrs:{visible:t.modalVisible,width:"80%","show-close":!1,"append-to-body":!0,top:"72px"},on:{"update:visible":function(e){t.modalVisible=e}}},[t.selectProduct?i("el-row",[i("el-col",{attrs:{span:16}},[i("div",{staticClass:"modal__image"},[i("img",{attrs:{src:o("bb6e")("./"+t.selectProduct.img_max),alt:t.selectProduct.name}})])]),i("el-col",{attrs:{span:8}},[i("button",{staticClass:"el-dialog__headerbtn",attrs:{type:"button"},on:{click:function(e){t.modalVisible=!t.modalVisible}}},[i("i",{staticClass:"el-dialog__close el-icon el-icon-close"})]),i("div",{staticClass:"modal__text"},[i("ul",[i("li",[i("span",{staticClass:"modal__text-name"},[t._v(t._s(t.selectProduct.name))]),i("span",{staticClass:"modal__text-price"},[t._v(t._s(t.selectProduct.price)+"€")])])]),i("p",{staticClass:"modal__text-description"},[t._v(" "+t._s(t.selectProduct.description)+" ")]),i("p",{staticClass:"modal__text-code"},[t._v("Product code "+t._s(t.selectProduct.id))]),i("div",{staticClass:"modal__text-cart"},[i("button",{attrs:{type:"submit"},on:{click:function(e){return t.scanProduct(t.selectProduct.code)}}},[t._v("Add to cart")])])])])],1):t._e()],1)],1)])}))],2)},u=[],l=o("8781");class d{constructor(){this.products=l}scan(t){const e=this.products.find(e=>e.code===t);e.quantity+=1}decrease(t){t.quantity>1?t.quantity-=1:this.remove(t.id)}remove(t){const e=this.products.findIndex(e=>e.id===t);-1!=e&&this.products.splice(e,1)}get mugPromo(){return this.calcMugPromo()}calcMugPromo(){var t=this.products.find(t=>"MUG"===t.code);if(t){var e=Math.ceil((t.quantity-1)/2)*t.price;return e}return null}get shirtPromo(){return this.calcShirtPromo()}calcShirtPromo(){const t=3;var e=this.products.find(t=>"TSHIRT"===t.code);if(e){const i=.05*e.price*t;var o=Math.ceil((e.quantity-(t-1))/t)*i;return o}return null}get productsCount(){return this.calcQuantity()}calcQuantity(){return this.products.reduce((t,e)=>t+e.quantity,0)}get subTotal(){return this.calcSubTotal()}calcSubTotal(){return this.products.reduce((t,e)=>t+e.price*e.quantity,0)}get total(){return this.subTotal-(this.calcMugPromo()+this.calcShirtPromo())}}var p={name:"ProductListItem",data(){return{modalVisible:!1,selectProduct:null,co:new d}},methods:{openModal(t){this.selectProduct=t,this.modalVisible=!this.modalVisible},scanProduct(t){this.co.scan(t),this.modalVisible=!this.modalVisible}}},m=p,h=(o("64c6"),o("2877")),g=Object(h["a"])(m,c,u,!1,null,null,null),f=g.exports,v={name:"ProductList",components:{ProductListItem:f}},b=v,A=Object(h["a"])(b,r,n,!1,null,null,null),C=A.exports,y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("aside",{staticClass:"product-summary summary"},[o("h1",{staticClass:"main"},[t._v("Order Summary")]),o("ul",{staticClass:"summary-items wrapper border"},[o("li",[o("span",{staticClass:"summary-items-number"},[t._v(t._s(t.co.productsCount)+" Items")]),o("span",{staticClass:"summary-items-price"},[t._v(t._s(t.co.subTotal)),o("span",{staticClass:"currency"},[t._v("€")])])])]),o("div",{staticClass:"summary-discounts wrapper-half border"},[o("h2",[t._v("Discounts")]),o("ul",[t.co.mugPromo?o("li",[o("span",[t._v("2x1 Mug offer")]),o("span",[t._v("-"+t._s(t.co.mugPromo)+"€")])]):t._e(),t.co.shirtPromo?o("li",[o("span",[t._v("x3 Shirt offer")]),o("span",[t._v("-"+t._s(t.co.shirtPromo)+"€")])]):t._e(),t._m(0)])]),o("div",{staticClass:"summary-total wrapper"},[o("ul",[o("li",[o("span",{staticClass:"summary-total-cost"},[t._v("Total cost")]),o("span",{staticClass:"summary-total-price"},[t._v(t._s(t.co.total)+"€")])])]),o("button",{attrs:{type:"submit"}},[t._v("Checkout")])])])},L=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",[o("span",[t._v("Promo code")]),o("span",[t._v("0€")])])}],M={name:"ProductSummary",data(){return{co:new d}}},I=M,S=Object(h["a"])(I,y,L,!1,null,null,null),x=S.exports,K={name:"App",components:{ProductList:C,ProductSummary:x}},Y=K,q=Object(h["a"])(Y,a,s,!1,null,null,null),W=q.exports,V=o("5c96");o("0fae"),o("5aea");i["default"].use(V["Dialog"]),i["default"].use(V["Row"]),i["default"].use(V["Col"]),i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(W)}}).$mount("#app")},"5aea":function(t,e,o){},"64c6":function(t,e,o){"use strict";o("da30")},"67ac":function(t,e,o){t.exports=o.p+"img/mug-max.e0865a87.jpg"},"6b99":function(t,e,o){t.exports=o.p+"img/cap-max.c8bfec55.jpg"},"70de":function(t,e,o){t.exports=o.p+"img/shirt-max.0b890048.jpg"},8781:function(t){t.exports=JSON.parse('[{"id":"X7R2OPX","img":"shirt.png","img_max":"shirt-max.jpg","name":"Shirt","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","code":"TSHIRT","quantity":3,"price":20},{"id":"X2G2OPZ","img":"mug.png","img_max":"mug-max.jpg","name":"Mug","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","code":"MUG","quantity":4,"price":5},{"id":"X3W2OPY","img":"cap.png","img_max":"cap-max.jpg","name":"Cap","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","code":"CAP","quantity":4,"price":10}]')},b874:function(t,e,o){t.exports=o.p+"img/background.d42ba7e3.png"},bb6e:function(t,e,o){var i={"./background.png":"b874","./cap-max.jpg":"6b99","./cap.png":"cd2b","./mug-max.jpg":"67ac","./mug.png":"5057","./shirt-max.jpg":"70de","./shirt.png":"32fc"};function a(t){var e=s(t);return o(e)}function s(t){if(!o.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=s,t.exports=a,a.id="bb6e"},cd2b:function(t,e){t.exports="data:image/png;base64,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"},da30:function(t,e,o){}});
//# sourceMappingURL=app.ada9e46a.js.map