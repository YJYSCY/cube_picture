(function(){"use strict";var t={8511:function(t,e,a){var i=a(6848),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Box3D")],1)},s=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bodyOne"},[e("div",{staticClass:"box"},[e("div",{staticClass:"box1",on:{mouseover:t.expandBox,mouseleave:t.collapseBox}},[e("div",{staticClass:"font",style:{backgroundImage:"url("+t.getValidImage(0)+")"}}),e("div",{staticClass:"back",style:{backgroundImage:"url("+t.getValidImage(1)+")"}}),e("div",{staticClass:"top",style:{backgroundImage:"url("+t.getValidImage(2)+")"}}),e("div",{staticClass:"bottom",style:{backgroundImage:"url("+t.getValidImage(3)+")"}}),e("div",{staticClass:"left",style:{backgroundImage:"url("+t.getValidImage(4)+")"}}),e("div",{staticClass:"right",style:{backgroundImage:"url("+t.getValidImage(5)+")"}}),e("div",{staticClass:"i-font",style:{backgroundImage:"url("+t.getValidImage(6)+")"}}),e("div",{staticClass:"i-back",style:{backgroundImage:"url("+t.getValidImage(7)+")"}}),e("div",{staticClass:"i-top",style:{backgroundImage:"url("+t.getValidImage(8)+")"}}),e("div",{staticClass:"i-bottom",style:{backgroundImage:"url("+t.getValidImage(9)+")"}}),e("div",{staticClass:"i-left",style:{backgroundImage:"url("+t.getValidImage(10)+")"}}),e("div",{staticClass:"i-right",style:{backgroundImage:"url("+t.getValidImage(11)+")"}})])]),e("div",{staticClass:"buttonCe",on:{click:function(e){t.drawer=!0}}},[e("i",{staticClass:"el-icon-caret-left"})]),e("div",{staticClass:"control_center"},[e("el-drawer",{attrs:{title:"魔方风格控制台",visible:t.drawer,direction:t.direction,"before-close":t.handleClose,modal:!1,size:"20%"},on:{"update:visible":function(e){t.drawer=e}}},[e("el-button",{staticStyle:{background:"linear-gradient(45deg, #fff, #ffccff)"},on:{click:t.heisiGirl}},[e("span",{staticStyle:{background:"linear-gradient(45deg, #ff456f, #ffcc00)","-webkit-background-clip":"text",color:"transparent"}},[t._v(" 黑丝小姐姐 ")])]),e("el-button",{staticStyle:{position:"absolute",background:"linear-gradient(45deg, #fff, #ffccff)","margin-top":"60px","margin-left":"-110px"},on:{click:t.baisiGirl}},[e("span",{staticStyle:{background:"linear-gradient(45deg, #00456f, #12cc00)","-webkit-background-clip":"text",color:"transparent"}},[t._v(" 白丝小姐姐 ")])]),e("el-button",{staticStyle:{position:"absolute",background:"linear-gradient(45deg, #fff, #ffccff)","margin-top":"120px","margin-left":"-110px"},on:{click:t.baisiGirl}},[e("span",{staticStyle:{background:"linear-gradient(45deg, #00606f, #124000)","-webkit-background-clip":"text",color:"transparent"}},[t._v(" 清纯小姐姐 ")])])],1)],1)])},o=[],l=(a(4114),{data(){return{drawer:!1,direction:"rtl",images:[],imagesOne:[],fetchInterval:null,timeoutDuration:5e3}},methods:{heisiGirl(){this.images=[],this.startFetchingOne()},baisiGirl(){this.images=[],this.startFetchingTwo()},qcGirl(){this.images=[],this.startFetching()},getValidImage(t){return this.images[t]&&this.images[t].length>0?this.images[t]:this.images[14]||"@assets/image1.png"},expandBox(){},collapseBox(){},async fetchImages(){try{const t=await this.$axios.get("/api/ksxjj.php?type=json");this.images.length<15&&this.images.push(t.data.img)}catch(t){console.error("请求出错:",t)}},startFetching(){this.fetchInterval=setInterval((async()=>{await this.fetchImages(),this.images.length>=15&&(clearInterval(this.fetchInterval),console.log("获取图片成功，停止请求"))}),1e3)},async fetchImagesOne(){try{const t=await this.$axios.get("/api/heisi.php?type=json");this.images.length<15&&this.images.push(t.data.img)}catch(t){console.error("请求出错:",t)}},startFetchingOne(){this.fetchInterval=setInterval((async()=>{await this.fetchImagesOne(),this.images.length>=15&&(clearInterval(this.fetchInterval),console.log("获取图片成功，停止请求"))}),1e3)},async fetchImagesTwo(){try{const t=await this.$axios.get("/api/baisi.php?type=json");this.images.length<15&&this.images.push(t.data.img)}catch(t){console.error("请求出错:",t)}},startFetchingTwo(){this.fetchInterval=setInterval((async()=>{await this.fetchImagesTwo(),this.images.length>=15&&(clearInterval(this.fetchInterval),console.log("获取图片成功，停止请求"))}),1e3)}},mounted(){this.startFetching()}}),c=l,g=a(1656),u=(0,g.A)(c,r,o,!1,null,"5bb82fc4",null),d=u.exports,f={name:"App",components:{Box3D:d}},h=f,m=(0,g.A)(h,n,s,!1,null,null,null),p=m.exports,b=a(9143),v=a.n(b),y=a(4373);i["default"].use(v()),i["default"].config.productionTip=!1,i["default"].prototype.$axios=y.A,new i["default"]({render:t=>t(p)}).$mount("#app")}},e={};function a(i){var n=e[i];if(void 0!==n)return n.exports;var s=e[i]={id:i,loaded:!1,exports:{}};return t[i].call(s.exports,s,s.exports,a),s.loaded=!0,s.exports}a.m=t,function(){a.amdO={}}(),function(){var t=[];a.O=function(e,i,n,s){if(!i){var r=1/0;for(g=0;g<t.length;g++){i=t[g][0],n=t[g][1],s=t[g][2];for(var o=!0,l=0;l<i.length;l++)(!1&s||r>=s)&&Object.keys(a.O).every((function(t){return a.O[t](i[l])}))?i.splice(l--,1):(o=!1,s<r&&(r=s));if(o){t.splice(g--,1);var c=n();void 0!==c&&(e=c)}}return e}s=s||0;for(var g=t.length;g>0&&t[g-1][2]>s;g--)t[g]=t[g-1];t[g]=[i,n,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,i){var n,s,r=i[0],o=i[1],l=i[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(l)var g=l(a)}for(e&&e(i);c<r.length;c++)s=r[c],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(g)},i=self["webpackChunkcube_picture"]=self["webpackChunkcube_picture"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=a.O(void 0,[504],(function(){return a(8511)}));i=a.O(i)})();
//# sourceMappingURL=app.f6492dcd.js.map