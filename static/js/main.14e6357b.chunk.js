(this["webpackJsonpfish-market-app"]=this["webpackJsonpfish-market-app"]||[]).push([[0],{18:function(e){e.exports=JSON.parse('{"inventory":[{"id":"fish1","name":"pacific halibut","imagePath":"fish1.jpeg","description":"Everyones favorite white fish. We will cut it to the size you need and ship it.","price":"17.54","options":["fresh","sold out"],"status":"fresh"},{"id":"fish2","name":"lobster","imagePath":"fish2.jpeg","description":"These tender, mouth-watering beauties are a fantastic hit at any dinner party.","price":"32.00","options":["fresh","sold out"],"status":"fresh"},{"id":"fish3","name":"sea scallops","imagePath":"fish3.jpeg","description":"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound","price":"26.84","options":["fresh","sold out"],"status":"sold out"},{"id":"fish4","name":"mahi mahi","imagePath":"fish4.jpeg","description":"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes.","price":"56.20","options":["fresh","sold out"],"status":"fresh"},{"id":"fish5","name":"King Crab","imagePath":"fish5.jpeg","description":"Crack these open and enjoy them plain or with one of our cocktail sauces.","price":"20.24","options":["fresh","sold out"],"status":"sold out"}],"cart":[{"id":"fish1","name":"pacific halibut","price":"17.54","quantity":1},{"id":"fish3","name":"sea scallops","price":"16.84","quantity":1}]}')},23:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),c=a.n(s),l=(a(28),a(19)),o=a(6),i=a(1),m=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),s=a[0],c=a[1],l=Object(n.useState)(!1),o=Object(i.a)(l,2),m=o[0],u=o[1];return r.a.createElement("div",{className:"flex justify-center items-center min-h-screen store-bg"},r.a.createElement("div",{className:"w-1/3 flex flex-wrap flex-col justify-center items-center rounded-large border border-gray-800 bg-gray-200 px-4 py-6"},r.a.createElement("h2",{className:"text-2xl uppercase font-medium mb-2"},"please enter a store name"),r.a.createElement("label",{className:"mb-3 w-2/3"},r.a.createElement("input",{type:"text",value:s,onChange:function(e){return c(e.target.value)},placeholder:"STORE NAME",className:"border rounded-large px-6 py-3 w-full focus:outline-none",onKeyDown:function(t){return function(t){13===t.keyCode&&(s.length>0?(u(!1),e.history.push("/store/".concat(s))):u(!0))}(t)}})),r.a.createElement("span",{className:"".concat(m?"":"hidden"," text-red-600 text-left mb-3")},"Please enter the store name"),r.a.createElement("img",{src:"assets/images/next.png",alt:"next",className:"cursor-pointer w-10",onClick:function(){s.length>0?(u(!1),e.history.push("/store/".concat(s))):u(!0)}})))},u=a(11),d=a(22),f=function(e){var t=e.text,a=e.styleClasses;return r.a.createElement("button",{className:"font-medium py-1 px-5 rounded-full uppercase cursor-pointer text-white focus:outline-none ".concat(a),type:"button",onClick:function(t){t.preventDefault(),e.onClick&&e.onClick(t)}},t)},p=function(e){return r.a.createElement("div",{className:"flex items-center"},r.a.createElement("span",{className:"".concat("sold out"===e.status?"cursor-not-allowed":"cursor-pointer"," ").concat(0===e.quantity?"cursor-not-allowed":""," flaticon-minus focus:outline-none font-bold"),onClick:function(t){return e.decreaseQuantity(t)}}),r.a.createElement("p",{className:"text-2xl px-5 font-proxima-nova font-bold"},e.quantity),r.a.createElement("span",{className:"".concat("sold out"===e.status?"cursor-not-allowed":"cursor-pointer"," flaticon-add focus:outline-none font-bold"),onClick:function(t){return e.increaseQuantity(t)}}))},h=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),s=a[0],c=a[1],l=Object(n.useState)(!1),o=Object(i.a)(l,2),m=o[0],u=o[1];return r.a.createElement("div",{className:"mb-3 mt-12 rounded-large border ".concat(e.inventoryData&&"sold out"===e.inventoryData.status?"sold-out-bg":"")},r.a.createElement("div",{className:"p-2 ".concat(e.inventoryData&&"sold out"===e.inventoryData.status?"opacity-25 cursor-not-allowed":"")},r.a.createElement("div",{className:"relative"},r.a.createElement("img",{src:"assets/images/fish-icon.png",alt:"fish",className:"fish-position"}),r.a.createElement("p",{className:"text-position text-white text-sm font-bold font-proxima-nova-alt"},"$",Number(e.inventoryData&&e.inventoryData.price).toFixed(2))),r.a.createElement("div",{className:"flex"},r.a.createElement("img",{src:"assets/images/".concat(e.inventoryData&&e.inventoryData.imagePath),alt:"fish",className:"w-40 h-40 z-no rounded-large border-2 border-dotted border-black"}),r.a.createElement("div",{className:"w-full flex flex-col justify-between px-3 px-3"},r.a.createElement("div",{className:""},r.a.createElement("h3",{className:"font-carrinady font-bold uppercase text-4xl break-all"},e.inventoryData&&e.inventoryData.name),r.a.createElement("p",{className:"font-proxima-nova font-medium text-lg"},e.inventoryData&&e.inventoryData.description)),r.a.createElement("div",{className:"flex justify-end items-center"},m&&r.a.createElement("p",{className:"text-red-600 text-sm font-medium pr-4"},"Please increase the quantity."),r.a.createElement(p,{quantity:s,increaseQuantity:function(){"sold out"!==e.inventoryData.status&&(c(s+1),u(!1))},decreaseQuantity:function(){"sold out"!==e.inventoryData.status&&0!==s&&c(s-1)},status:e.inventoryData&&e.inventoryData.status}),r.a.createElement(f,{text:"order",styleClasses:"bg-black text-lg ml-4 font-proxima-nova-alt ".concat(e.inventoryData&&"sold out"===e.inventoryData.status?"cursor-not-allowed":""),onClick:function(){"sold out"!==e.inventoryData.status&&(s>0?e.handleOrder&&(e.handleOrder(e.inventoryData.id,s),c(0)):u(!0))}}))))))},b=function(e){return r.a.createElement("div",{className:"px-3 py-5"},r.a.createElement("div",{className:"font-archistico-bold"},r.a.createElement("h1",{className:"flex justify-center uppercase text-7xl text-theme-red leading-tight"},"fish",r.a.createElement("span",{className:"flex justify-center items-center w-32 uppercase text-3xl px-4 text-green-500 text-center"},"of the"),"day"),r.a.createElement("h2",{className:"uppercase text-xl font-phosphate-inline text-center tracking-huge"},r.a.createElement("span",{className:"flaticon-fish mirror mr-3"}),"a fresh seafood market",r.a.createElement("span",{className:"flaticon-fish"}))),r.a.createElement("h3",{className:"text-lg text-center font-bold text-red-600 mt-4 ".concat(e.noDataError?"":"hidden")},"No data in the market, please add data..."),e.storeData&&e.storeData.inventory&&e.storeData.inventory.map((function(t,a){return r.a.createElement(h,{inventoryData:t,key:a,handleOrder:function(t,a){return e.handleOrder(t,a)}})})))},v=function(e){return r.a.createElement(r.a.Fragment,null,e.cartData.name&&r.a.createElement("div",{className:"border-b border-dotted border-gray-400 py-2 font-proxima-nova"},r.a.createElement("div",{className:"flex justify-between items-center"},r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("p",{className:"capitalize font-medium text-base"},e.cartData.name),r.a.createElement("p",{className:"font-medium text-base"},"( ",e.cartData.quantity," ",e.cartData.quantity>1?"pounds":"pound"," )")),r.a.createElement("p",{className:"font-bold text-base"},"$",Number(e.cartData.price).toFixed(2)))))},E=function(e){return r.a.createElement("div",{className:"px-3 pt-5"},r.a.createElement("div",{className:"border-theme-red border-b-2 pb-5 mb-5"},r.a.createElement("h1",{className:"uppercase text-2xl font-phosphate-inline text-center"},r.a.createElement("span",{className:"flaticon-fish mirror mr-5"}),"cart",r.a.createElement("span",{className:"flaticon-shopping-cart ml-5"}))),r.a.createElement("h3",{className:"text-lg text-center font-bold text-red-600 mt-4 ".concat(e.noDataError?"":"hidden")},"No data in the cart, please add data..."),r.a.createElement("div",{className:"min-height"},e.storeData&&e.storeData.cart&&e.storeData.cart.map((function(e,t){return r.a.createElement(v,{cartData:e,key:t})}))),r.a.createElement("div",{className:"flex justify-between border-theme-red border-t-2 py-3"},r.a.createElement("p",{className:"uppercase text-2xl font-proxima-nova font-bold"},"total"),r.a.createElement("p",{className:"text-2xl"},"$",function(){var t=0;return e.storeData.cart&&0!==e.storeData.cart.length&&e.storeData.cart.forEach((function(e){t+=Number(e.price)})),t.toFixed(2)}())))},x=function(e){return r.a.createElement("label",{className:"flex items-center cursor-pointer"},r.a.createElement("span",{className:"flaticon-image text-theme-blue mr-3"}),r.a.createElement("p",{className:"text-sm ".concat(e.fileName&&e.fileName.length?"":"text-gray-500")},e.fileName?e.fileName:"IMAGE PATH"),r.a.createElement("input",{type:"file",className:"hidden",onChange:function(t){return e.handleFileChange(t)}}))},N=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),s=a[0],c=a[1],l=Object(n.useState)(e.title),o=Object(i.a)(l,2),m=o[0],u=o[1],d=e.list,f=function(){c(!1)};Object(n.useEffect)((function(){c(!1),e.value?u(e.value):u(e.title)}),[e.list,e.title,e.value]),Object(n.useEffect)((function(){return setTimeout((function(){s?window.addEventListener("click",f):window.removeEventListener("click",f)}),0),function(){window.removeEventListener("click",f)}}),[s]);var p=s?"flaticon-chevron-upwards-arrow":"flaticon-down-chevron",h=d&&d.length?"cursor-pointer":"cursor-not-allowed";return r.a.createElement("div",{className:"relative"},r.a.createElement("div",{className:"dropdown inline-flex ".concat(h),onClick:function(){d&&d.length&&c(!s)}},r.a.createElement("div",{className:"".concat(e.listWidth," flex items-center justify-between border border-black bg-white border rounded-lg px-3")},d&&d.length?r.a.createElement("p",{className:"uppercase text-sm font-sans"},m):r.a.createElement("p",{className:"capitalize text-sm font-sans text-light-gray"},"no data available"),r.a.createElement("span",{className:"".concat(p," text-theme-blue")}))),s&&r.a.createElement("ul",{className:"".concat(e.width," dropdown-content absolute border border-black rounded bg-white z-40")},d&&d.map((function(t,a){return r.a.createElement("li",{className:"uppercase text-left px-3 text-sm font-sans py-1 hover:bg-blue-200 cursor-pointer",key:a,onClick:function(){return u(a=t),c(!1),void(e.onSelectItem&&e.onSelectItem(a));var a}},t)}))))},y=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),s=a[0],c=a[1],l=Object(n.useState)(""),o=Object(i.a)(l,2),m=o[0],u=o[1],d=Object(n.useState)(""),p=Object(i.a)(d,2),h=p[0],b=p[1],v=Object(n.useState)(""),E=Object(i.a)(v,2),y=E[0],g=E[1],w=Object(n.useState)(""),j=Object(i.a)(w,2),D=j[0],k=j[1];Object(n.useEffect)((function(){e.inventoryData?(c(e.inventoryData.name),u(e.inventoryData.price),b(e.inventoryData.description),g(e.inventoryData.status),k(e.inventoryData.imagePath)):(c(""),u(""),b(""),g(""),k(""))}),[e.inventoryData]);var O=function(t,a){switch(t&&t.persist&&t.persist(),a){case"name":c(t.target.value);break;case"description":b(t.target.value);break;case"price":u(t.target.value)}e.handleChange&&e.handleChange(t,a,e.inventoryData.id)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"text-red-600 text-sm font-bold ".concat(e.error?"":"hidden")},"Please enter all the details..."),r.a.createElement("div",{className:"border rounded-lg border-black mb-4"},r.a.createElement("div",{className:"flex border-b border-black"},r.a.createElement("div",{className:"flex-grow px-2"},r.a.createElement("label",{className:"flex items-center h-full cursor-pointer",htmlFor:"name"},r.a.createElement("img",{src:"assets/images/map-fish-cleaning.png",alt:"fish",className:"mr-2 w-6"}),r.a.createElement("input",{type:"text",placeholder:"FISH NAME",value:s,className:"bg-transparent focus:outline-none",onChange:function(e){return O(e,"name")}}))),r.a.createElement("div",{className:"flex-grow border-l border-r border-black px-2"},r.a.createElement("label",{className:"flex items-center h-full cursor-pointer",htmlFor:"price"},r.a.createElement("span",{className:"flaticon-dollar text-theme-blue"}),r.a.createElement("input",{type:"number",placeholder:"PRICE",value:m,className:"bg-transparent focus:outline-none",onChange:function(e){return O(e,"price")}}))),r.a.createElement("div",{className:"flex-grow ml-3 px-2 py-1"},r.a.createElement(N,{value:y,title:"Select Option",list:e.inventoryData&&e.inventoryData.options,onSelectItem:function(t){var a,n;a=t,"option"===(n="option")&&g(a),e.handleChange&&e.handleChange(a,n,e.inventoryData.id)},listWidth:"w-40",width:"w-32"}))),r.a.createElement("div",{className:"p-2 border-b border-black"},r.a.createElement("label",{className:"flex items-center cursor-pointer",htmlFor:"desc"},r.a.createElement("span",{className:"flaticon-google text-theme-blue mr-3"}),r.a.createElement("textarea",{rows:"3",placeholder:"DESCRIPTION",className:"w-full bg-transparent focus:outline-none",value:h,onChange:function(e){return O(e,"description")}}))),r.a.createElement("div",{className:"p-2 border-b border-black"},r.a.createElement(x,{fileName:D,handleFileChange:function(t){k(t.target.files[0].name),e.handleChange&&e.handleChange(t.target.files[0].name,"file",e.inventoryData.id)},value:D})),e.isNewFish?r.a.createElement("div",{className:"flex justify-around p-2 fish-hook-bg"},r.a.createElement(f,{text:"save fish",styleClasses:"bg-green-600 text-xs",onClick:function(){return e.saveFish()}}),r.a.createElement(f,{text:"remove fish",styleClasses:"bg-red-600 text-xs as",onClick:function(){return e.removeNewFish()}})):r.a.createElement("div",{className:"flex justify-center p-2 fish-hook-bg"},r.a.createElement(f,{text:"remove fish",styleClasses:"bg-red-600 text-xs",onClick:function(){return e.removeFish(e.inventoryData.id)}}))))},g=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),s=a[0],c=a[1],l=Object(n.useState)([]),o=Object(i.a)(l,2),m=o[0],u=o[1],d=Object(n.useState)(!1),f=Object(i.a)(d,2),p=f[0],h=f[1],b=Object(n.useState)(!1),v=Object(i.a)(b,2),E=v[0],x=v[1];return r.a.createElement("div",{className:"py-5"},r.a.createElement("div",{className:"flex justify-between items-center"},r.a.createElement("div",{className:"tile w-16",title:s?"unfold":"fold",onClick:function(){return c(!s),void(s?e.unfold():e.fold())}}),r.a.createElement("h1",{className:"uppercase text-2xl font-phosphate-inline text-center"},r.a.createElement("span",{className:"flaticon-fish mirror mr-5"}),"inventory",r.a.createElement("span",{className:"flaticon-home ml-5"})),r.a.createElement("div",{className:"tile-reverse w-20",title:"logout",onClick:function(){return e.logout()}})),r.a.createElement("div",{className:"flex justify-between items-center border-theme-red border-t-2 mx-3 pt-6 mt-5"},r.a.createElement("div",{className:"tile w-64 left-12",title:"load sample fishes",onClick:function(){return e.onClickLoadFishes()}}),r.a.createElement("div",{className:"tile-reverse w-48 right-12",title:"add fish",onClick:function(){return u([{id:"",name:"",price:"",options:["fresh","sold out"],status:"fresh",description:"",imagePath:""}]),void h(!0)}})),r.a.createElement("h3",{className:"text-lg text-center font-bold text-red-600 mt-4 ".concat(e.noDataError?"":"hidden")},"No data in the inventory, please add data..."),r.a.createElement("div",{className:"px-3 py-6"},p&&m.length>0&&r.a.createElement(y,{isNewFish:p,inventoryData:m[0],saveFish:function(){var t=m;""===t[0].name&&""===t[0].price&&""===t[0].description&&""===t[0].imagePath?x(!0):(x(!1),e.updateInventory(t),u([]),h(!1))},handleChange:function(e,t){return function(e,t){var a=m;switch(t){case"name":a[0].name=e.target.value;break;case"description":a[0].description=e.target.value;break;case"price":a[0].price=e.target.value;break;case"option":a[0].status=e;break;case"file":a[0].imagePath=e}u(a)}(e,t)},removeNewFish:function(){x(!1),u([])},error:E}),e.storeData&&e.storeData.inventory&&e.storeData.inventory.map((function(t,a){return r.a.createElement(y,{inventoryData:t,key:a,handleChange:function(t,a,n){return e.handleChange(t,a,n)},removeFish:function(t){return e.removeFish(t)}})}))))},w=a(18),j=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),s=a[0],c=a[1],l=Object(n.useState)(!1),o=Object(i.a)(l,2),m=o[0],f=o[1];Object(n.useEffect)((function(){s&&s.inventory&&0===s.inventory.length?f(!0):f(!1)}),[s]);var p=function(e,t){var a={inventory:e},n=Object.assign({},a),r={cart:t},s=Object.assign({},r),l=Object(d.a)({},n,{},s);c(l)};return r.a.createElement("div",{className:"flex home-bg"},r.a.createElement("section",{className:"w-5/12 order border-theme-red border-r-2"},r.a.createElement(b,{storeData:s,handleOrder:function(e,t){var a=s.inventory,n=s.cart,r={id:e,name:"",quantity:t,price:""};if(a.map((function(e){return e.id===r.id&&(r.name=e.name,r.price=e.price*r.quantity),a})),n.length){var c=!0;n.map((function(e,t){return e.id===r.id&&(c=!1,n[t].price=Number(r.price)+Number(e.price),n[t].quantity=r.quantity+e.quantity),n})),c&&(n=[r].concat(Object(u.a)(n)))}else n=[r];p(a,n)},updateStoreData:p,noDataError:m})),r.a.createElement("section",{className:"w-2/12 cart"},r.a.createElement(E,{storeData:s,noDataError:m})),r.a.createElement("section",{className:"w-5/12 inventory border-theme-red border-l-2"},r.a.createElement(g,{storeData:s,logout:function(){e.history.goBack()},onClickLoadFishes:function(){s&&s.inventory&&0===s.inventory.length?f(!0):(c(w),f(!1))},fold:function(){var e=document.querySelector(".order"),t=document.querySelector(".cart"),a=document.querySelector(".inventory"),n=document.querySelector(".home-bg"),r=e.offsetWidth/2/38,s=t.offsetWidth/2/38;e.style.transform="skewY("+s+"deg)",t.style.transform="skewY(-"+r+"deg)",a.style.transform="skewY("+s+"deg)",n.classList.add("fold"),e.classList.add("order-section-border"),a.classList.add("inventory-section-border"),t.classList.add("cart-section-border")},unfold:function(){var e=document.querySelector(".order"),t=document.querySelector(".cart"),a=document.querySelector(".inventory"),n=document.querySelector(".home-bg");e.style.transform="none",t.style.transform="none",a.style.transform="none",n.classList.remove("fold"),e.classList.remove("order-section-border"),a.classList.remove("inventory-section-border"),t.classList.remove("cart-section-border")},handleChange:function(e,t,a){return function(e,t,a){var n=s.inventory,r=s.cart;n.forEach((function(r,s){if(r.id===a)switch(t){case"name":n[s].name=e.target.value;break;case"description":n[s].description=e.target.value;break;case"price":n[s].price=e.target.value;break;case"option":n[s].status=e;break;case"file":n[s].imagePath=e}})),r.forEach((function(n,s){if(n.id===a)switch(t){case"name":r[s].name=e.target.value;break;case"price":r[s].price=e.target.value}})),p(n,r)}(e,t,a)},updateInventory:function(e){var t=s.inventory,a=s.cart;if(t.length){for(var n=function(a){var n="fish"+String(a+1),r=!0;t.forEach((function(e){e.id===n&&(r=!1)})),r&&(e[0].id=n)},r=0;r<=t.length;r++)n(r);t=[].concat(Object(u.a)(e),Object(u.a)(t)),p(t,a)}else e[0].id="fish1",p(t=e,a)},removeFish:function(e){return function(e){var t=s.inventory,a=s.cart;t.forEach((function(a,n){a.id===e&&t.splice(n,1)})),a.forEach((function(t,n){t.id===e&&a.splice(n,1)})),p(t,a)}(e)},noDataError:m})))},D=function(){var e=Object(n.useState)({name:"fish1",quantity:2,price:12.34}),t=Object(i.a)(e,1)[0],a=Object(n.useState)(""),s=Object(i.a)(a,2),c=s[0],l=s[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"mb-4 border-b"},r.a.createElement("h2",{className:"text-6xl font-bold"},"Fonts"),r.a.createElement("div",{className:"mb-2"},r.a.createElement("h2",{className:"text-2xl"},"Archistico Bold Font"),r.a.createElement("p",{className:"font-archistico-bold text-4xl"},"abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ")),r.a.createElement("div",{className:"mb-2"},r.a.createElement("h2",{className:"text-2xl"},"Archistico Simple Font"),r.a.createElement("p",{className:"font-archistico-simple text-4xl"},"abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ")),r.a.createElement("div",{className:"mb-2"},r.a.createElement("h2",{className:"text-2xl"},"Carrinady Font"),r.a.createElement("p",{className:"font-carrinady text-4xl"},"abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ")),r.a.createElement("div",{className:"mb-2"},r.a.createElement("h2",{className:"text-2xl"},"Phosphate Inline Font"),r.a.createElement("p",{className:"font-phosphate-inline text-4xl"},"abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ")),r.a.createElement("div",{className:"mb-2"},r.a.createElement("h2",{className:"text-2xl"},"Proxima Nova Alt Regular Font"),r.a.createElement("p",{className:"font-proxima-nova-alt text-4xl"},"abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ")),r.a.createElement("div",{className:"mb-2"},r.a.createElement("h2",{className:"text-2xl"},"Proxima Nova Regular Font"),r.a.createElement("p",{className:"font-proxima-nova text-4xl"},"abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ"))),r.a.createElement("section",{className:"mb-4 border-b"},r.a.createElement("h2",{className:"text-2xl font-bold"},"Icons"),r.a.createElement("div",{className:""},r.a.createElement("span",{className:"flaticon-home"}),r.a.createElement("span",{className:"flaticon-shopping-cart"}),r.a.createElement("span",{className:"flaticon-add"}),r.a.createElement("span",{className:"flaticon-minus"}),r.a.createElement("span",{className:"flaticon-dollar"}),r.a.createElement("span",{className:"flaticon-google"}),r.a.createElement("span",{className:"flaticon-image"}),r.a.createElement("span",{className:"flaticon-chevron-upwards-arrow"}),r.a.createElement("span",{className:"flaticon-down-chevron"}),r.a.createElement("span",{className:"flaticon-fish"}))),r.a.createElement("section",{className:"mb-4 border-b"},r.a.createElement("h2",{className:"text-2xl font-bold"},"Atoms"),r.a.createElement("div",{className:""},r.a.createElement(f,{text:"save fish",styleClasses:"bg-green-600 text-xs"}),r.a.createElement(f,{text:"remove fish",styleClasses:"bg-red-600 text-xs"}),r.a.createElement(f,{text:"order",styleClasses:"bg-black text-sm"}),r.a.createElement("div",{className:"w-64"},r.a.createElement(v,{cartData:t})),r.a.createElement(p,{quantity:1}),r.a.createElement(x,null))),r.a.createElement("section",{className:"mb-4 border-b"},r.a.createElement("h2",{className:"text-2xl font-bold"},"Molecules"),r.a.createElement("div",{className:""},r.a.createElement(N,{value:c,title:"Select option",list:["fresh","sold out"],onSelectItem:function(e){var t;t=e,"sample"==="sample"&&l(t)},listWidth:"w-40",width:"w-32"}))),r.a.createElement("section",{className:"mb-4 border-b"},r.a.createElement("h2",{className:"text-2xl font-bold"},"Organisms"),r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"w-1/3 mr-2"},r.a.createElement(h,null)),r.a.createElement("div",{className:"w-2/3"},r.a.createElement(y,null)))))},k=function(){return r.a.createElement("div",{className:"flex items-center justify-center min-h-screen"},r.a.createElement("h1",{className:"text-4xl text-blue-700 font-bold"},"Page Not found"))};var O=function(){return r.a.createElement(l.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:m}),r.a.createElement(o.a,{path:"/store/:storename",component:j}),r.a.createElement(o.a,{path:"/styleguide",component:D}),r.a.createElement(o.a,{component:k})))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.14e6357b.chunk.js.map