(function(e){function t(t){for(var o,i,a=t[0],c=t[1],l=t[2],f=0,h=[];f<a.length;f++)i=a[f],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&h.push(n[i][0]),n[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(h.length)h.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],o=!0,a=1;a<r.length;a++){var c=r[a];0!==n[c]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var o={},n={app:0},s=[];function i(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=o,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"2be4":function(e,t,r){},"466b":function(e,t,r){"use strict";var o=r("2be4"),n=r.n(o);n.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e623"),r("e379"),r("5dc8"),r("37e1");var o=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],i={name:"app",components:{}},a=i,c=r("2877"),l=Object(c["a"])(a,n,s,!1,null,null,null),u=l.exports,f=r("8c4f"),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"wrap"},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"用户名",prop:"user"}},[r("el-input",{model:{value:e.ruleForm.user,callback:function(t){e.$set(e.ruleForm,"user",e._n(t))},expression:"ruleForm.user"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"pass"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.pass,callback:function(t){e.$set(e.ruleForm,"pass",t)},expression:"ruleForm.pass"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("提交")]),r("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)])},d=[],p=(r("99af"),r("d3b7"),{doFormPostDatas:function(e,t,r,o){fetch(e,{method:"POST",headers:{"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"},credentials:"same-origin",body:t}).then((function(e){return e.json()})).then((function(e){r(e)})).catch((function(e){o(e)}))}}),v={data:function(){var e=function(e,t,r){if(!t)return r(new Error("用户名不能为空"));setTimeout((function(){console.log(/^[A-Z]{1}[a-zA-Z0-9]{5,15}$/.test(t)),/^[A-Z]{1}[a-zA-Z0-9]{5,15}$/.test(t)?r():r(new Error("首字母大写, 长度6-16个字符"))}),1e3)},t=function(e,t,r){""===t?r(new Error("请输入密码")):r()};return{ruleForm:{pass:"",user:""},rules:{pass:[{validator:t,trigger:"blur"}],user:[{validator:e,trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;var r="/login",o=t.ruleForm,n=o.pass,s=o.user,i="user=".concat(s,"&pass=").concat(n);p.doFormPostDatas(r,i,(function(e){1e3===e.code?t.$message({message:e.data,type:"success"}):t.$message({message:e.data,type:"error"}),console.log(e)}))}))},resetForm:function(e){this.$refs[e].resetFields()}}},m=v,b=(r("811e"),Object(c["a"])(m,h,d,!1,null,"17ef0593",null)),w=b.exports,g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",{ref:"title",staticClass:"title"}),r("canvas",{attrs:{id:"canvas"},on:{click:e.chessOnclick}})])},y=[],O=(r("cb29"),{name:"HelloWorld",data:function(){return{canvas:null,cxt:null,canvasWidth:600,canvasHeight:600,board:{},over:!1,me:!0,chressBord:[]}},mounted:function(){this.$refs.title.innerHTML="五子棋",this.initCanvas("#canvas",this.canvasWidth,this.canvasHeight),this.drawChessBoard(this.cxt,this.canvasWidth,this.canvasHeight,this.board)},methods:{initCanvas:function(e,t,r){var o=document.querySelector(e);o.width=t,o.height=r;var n=o.getContext("2d");this.cxt=n,this.canvas=o},drawChessBoard:function(e,t,r,o){for(var n=t/15,s=r/15,i=n/2,a=0;a<15;a++)e.moveTo(i+a*n,i),e.lineTo(i+a*n,this.canvasWidth-i),e.stroke(),e.moveTo(i,i+a*s),e.lineTo(this.canvasHeight-i,i+a*s),e.stroke();for(var c=0;c<15;c++){o[c]={};for(var l=0;l<15;l++)o[c][l]=0}},chessOnclick:function(e){if(window.console.log(e.offsetX,e.offsetY),!this.over){var t=e.offsetX,r=e.offsetY,o=Math.floor(t/40),n=Math.floor(r/40);if(0!==this.board[o][n])return window.console.log("44");this.me?(this.board[o][n]=1,this.oneStep(o,n)):(this.board[o][n]=2,this.oneStep(o,n))}},oneStep:function(e,t){var r=this.cxt;r.beginPath(),r.arc(20+40*e,20+40*t,17,0,2*Math.PI),r.closePath();var o=r.createRadialGradient(20+40*e+2,20+40*t-2,18,20+40*e+2,20+40*t-2,0);this.me?(o.addColorStop(0,"#0a0a0a"),o.addColorStop(1,"#636766")):(o.addColorStop(0,"#d1d1d1"),o.addColorStop(1,"#f9f9f9")),r.fillStyle=o,r.fill(),this.win(e,t),this.me=!this.me},computerAI:function(e){for(var t=e.myWin,r=e.computerWin,o=e.winArr,n=[],s=[],i=0,a=0,c=0,l=0;l<15;l++){n[l]=[],s[l]=[];for(var u=0;u<15;u++)n[l][u]=0,s[l][u]=0}for(var f=0;f<15;f++)for(var h=0;h<15;h++)if(this.chressBord[f]||(this.chressBord[f]=[]),this.chressBord[f][h]||(this.chressBord[f][h]=[]),0==this.chressBord[f][h]){for(var d=0;d<this.count;d++)o[f][h][d]&&(1==t[d]?n[f][h]+=200:2==t[d]?n[f][h]+=400:3==t[d]?n[f][h]+=2e3:4==t[d]&&(n[f][h]+=1e4),1==r[d]?s[f][h]+=220:2==r[d]?s[f][h]+=420:3==r[d]?s[f][h]+=2100:4==r[d]&&(s[f][h]+=2e4));n[f][h]>i?(i=n[f][h],a=f,c=h):n[f][h]==i&&s[f][h]>s[a][c]&&(a=f,c=h),s[f][h]>i?(i=s[f][h],a=f,c=h):s[f][h]==i&&n[f][h]>n[a][c]&&(a=f,c=h)}this.oneStep(a,c,!1),this.chressBord[a][c]=2;for(var p=0;p<this.count;p++)o[a][c][p]&&(r[p]++,t[p]=6,5==r[p]&&(this.over=!0));this.over||(this.me=!this.me)},win:function(e,t){var r=this.me?1:2,o=e>=4?e-4:0,n=0;while(o<(e+5>14?14:e+5)){if(this.board[o][t]===r&&n++,n>=5)return this.chessOver();o++}o=t>=4?t-4:0,n=0;while(o<(t+5>14?14:t+5)){if(this.board[e][o]===r&&n++,n>=5)return this.chessOver();o++}if(14-e+t>=4&&14-t+e>=4){n=0;var s=e-4,i=t-4;while(s<e+5){if(s>=0&&i>=0&&s<=14&&i<=14&&(this.board[s][i]===r&&n++,n>=5))return this.chessOver();s++,i++}}if(e+t>=4&&e+t<=24){n=0;var a=e+4,c=t-4;while(a>e-5){if(a>=0&&c>=0&&a<=14&&c<=14&&(this.board[a][c]===r&&n++,n>=5))return this.chessOver();a--,c++}}},chessOver:function(){var e=this.me?"黑子赢":"白子赢";this.over=!0,this.$refs.title.innerHTML=e}},watch:{}}),F=O,x=(r("466b"),Object(c["a"])(F,g,y,!1,null,"24953294",null)),S=x.exports;o["default"].use(f["a"]);var _=new f["a"]({routes:[{path:"/",component:S},{path:"/login",component:w},{path:"/game",component:S}]});_.beforeEach((function(e,t,r){window.console.log(_),window.console.log(window.history),r()}));var C=_,$=r("5c96"),j=r.n($);r("0fae");o["default"].use(j.a),o["default"].config.productionTip=!1,new o["default"]({render:function(e){return e(u)},router:C}).$mount("#app")},"811e":function(e,t,r){"use strict";var o=r("f378"),n=r.n(o);n.a},f378:function(e,t,r){}});
//# sourceMappingURL=app.c16a282b.js.map