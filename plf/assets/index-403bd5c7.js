await __OSL.all(["xbp/theme/index.less","vue-router","vue-i18n","axios","@xbp/color","pinia","xbp/es/locale/lang/zh-cn","xbp/es/locale/lang/en-us","xbp/es/message","xbp/es/message/style","vue","xbp/es/dropdown","xbp/es/dropdown/style","xbp/es/theme-button","xbp/es/theme-button/style","xbp/es/dynamic","xbp/es/dynamic/style","xbp/es/avatar","xbp/es/avatar/style","xbp/es/menu","xbp/es/menu/style","xbp/es/tabs","xbp/es/tabs/style","nprogress","xbp/es/config-provider","xbp/es/config-provider/style"]);const Tn=function(){const t=typeof document<"u"&&document.createElement("link").relList;return t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}(),Sn=function(e,t){return new URL(e,t).href},et={},N=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=Sn(a,r),a in et)return;et[a]=!0;const o=a.endsWith(".css"),i=o?'[rel="stylesheet"]':"";if(!!r)for(let f=s.length-1;f>=0;f--){const g=s[f];if(g.href===a&&(!o||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${i}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Tn,o||(c.as="script",c.crossOrigin=""),c.href=a,document.head.appendChild(c),o)return new Promise((f,g)=>{c.addEventListener("load",f),c.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t()).catch(a=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a})};const{createRouter:wn,createWebHashHistory:On}=__OSL.get("vue-router"),In=[{path:"/",redirect:"/home"},{name:"xhome",path:"/home",component:()=>N(()=>import("./Home-32ae34a0.js"),["./Home-32ae34a0.js","./Home-becc25e2.css"],import.meta.url)},{name:"xabout",path:"/about",component:()=>N(()=>import("./About-767692a9.js"),["./About-767692a9.js","./About-85b3a714.css"],import.meta.url)},{name:"xnopermission",path:"/nopermission",component:()=>N(()=>import("./NoPermission-983d9903.js"),[],import.meta.url)}],V=e=>{E.push(e)},Ln=e=>{for(let t of e)E.addRoute(t)},E=wn({history:On(),routes:In}),Cn={starter_title:"Vite3+Vue3 微前端 portal"},jn={starter_title:"Vite3+Vue3  Micro frontends portal"},An={zh_CN:Cn,en_US:jn};const{createI18n:En}=__OSL.get("vue-i18n"),Pn=En({legacy:!1,locale:"",messages:An});const Mn=__OSL.get("axios").default,ze=Mn.create({baseURL:"",timeout:3e3,headers:{}});ze.defaults.headers.post["Content-Type"]="application/json";function Xe(e){ze.defaults.headers.common.Authorization=e}const qt=[],Pe=[];function kn(e,t){qt.push([e,t])}function Bn(e,t){Pe.push([e,t])}let tt=new Date().getTime();function Dn(){return tt++,`r-${tt}`}let oe=0;const nt=5,Gt=[],Me={};function Nn(e){return{id:Dn(),args:e,state:0}}async function ke(){if(oe>=nt){console.log(`send sendReqCount[${oe}] >= REQ_MAX[${nt}]`);return}let e=Gt.shift();if(e===void 0)return;const t=Me[e];if(!t){console.log("send req is empty");return}oe++,t.state=1,ke();let n=null,r=null;console.log("send args",t.args),t.args.mock?r={data:t.args.mock,config:t.args}:r=await ze(t.args).catch(s=>{n=s}),t.state=2,oe--,n?t.cb({state:!1,data:n}):t.cb({state:!0,data:r}),delete Me[t.id],ke()}function Ht(e){return new Promise((t,n)=>{const r={};qt.forEach(a=>{Object.assign(r,a[0](e))});const s={...Nn(r),cb:({state:a,data:o})=>{a?(console.log("res",o),Pe.forEach(i=>{const d=i[0](o);d&&(o=d)}),t(o)):(console.error("data error ",o),Pe.forEach(i=>{Object.assign(o,i[1](o))}),n(o))}};Me[s.id]=s,Gt.push(s.id),ke()})}const{setThemeColor:Vn}=__OSL.get("@xbp/color"),Rn=!1;console.log("x isDev:",Rn);const Un=60*60*1e3*24;function Fn(e,t){sessionStorage.setItem(e,t,Un)}function zn(e=4){return new Promise(t=>{setTimeout(()=>{t()},e)})}function Xn(e){return Yt(e)}function Wn(e,t){return Yt(e,t)}const Yt=(e,t)=>new Promise((n,r)=>{let s=null;if(e.indexOf(".js")>0?(s=document.createElement("script"),s.type="module",t&&(s.id=t)):e.indexOf(".css")>0&&(s=document.createElement("link"),s.type="text/css",s.rel="stylesheet"),!s){r(`url [${e}] type error`);return}s.onload=function(){s.onload=null,s.onerror=null,n("")},s.onerror=function(){s.onload=null,s.onerror=null,r(`url:[${e}] loadjs error`)},e.indexOf(".js")>0?s.src=e:s.href=e,document.head.appendChild(s)}),Kt="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzNhYjRhNjc1NWY4YzQyOGMxNDJlMzciLCJuYW1lIjoi6LaF57qn566h55CG5ZGYIiwiYWNjb3VudCI6InhhZG1pbiIsImlhdCI6MTY4ODk1NTg3NiwiZXhwIjoxNjg5MTI4Njc2fQ.dpV8b4u2r0zi-yLP9NVFUwAoyChS0vHiZ17vR6Bi1PQ",Jt={_id:"633ab4a6755f8c428c142e37",account:"xadmin",name:"超级管理员",roles:[],fns:[],theme:"light",lang:"zh_CN",avatar:"",menus:[{id:"90",pid:"0",title:"首页",name:"home",path:"/home",host:""},{id:"102",pid:"0",title:"app-3d",name:" xbp-3d",host:""},{id:"10201",pid:"102",title:"cesium demo",path:"/xbp-3d/3d"},{id:"10202",pid:"102",title:"3d-home",path:"/xbp-3d/home"},{id:"10203",pid:"102",title:"3d-about",path:"/xbp-3d/about"},{id:"103",pid:"0",title:"app-test2",name:" xbp-t2",host:""},{id:"10301",pid:"103",title:"t2-home",path:"/xbp-t2/home"},{id:"10302",pid:"103",title:"t2-about",path:"/xbp-t2/about"},{id:"10306",pid:"105",title:"t2-echart",show:!1,path:"/xbp-t2/echart",target:"_black"},{id:"101",pid:"0",title:"系统管理",name:" xbp-sys",host:""},{id:"10101",pid:"101",title:"用户管理",path:"/xbp-sys/a1",target:"_black"},{id:"10102",pid:"101",title:"角色管理",path:"/xbp-sys/a2"},{id:"10103",pid:"101",title:"功能管理",path:"/xbp-sys/a3"},{id:"10104",pid:"101",title:"菜单管理",path:"/xbp-sys/a4"},{id:"99",pid:"0",title:"关于我们",name:"about",path:"/about",host:""}]};function qn(e){return Ht({url:"/api/user/login",method:"post",data:e,mock:{code:200,data:Jt,token:Kt}})}async function Gn(){return Ht({url:"/api/user/getUserInfo",method:"post",mock:{code:200,data:Jt,token:Kt}})}var Hn=typeof global=="object"&&global&&global.Object===Object&&global;const Qt=Hn;var Yn=typeof self=="object"&&self&&self.Object===Object&&self,Kn=Qt||Yn||Function("return this")();const O=Kn;var Jn=O.Symbol;const R=Jn;var Zt=Object.prototype,Qn=Zt.hasOwnProperty,Zn=Zt.toString,K=R?R.toStringTag:void 0;function er(e){var t=Qn.call(e,K),n=e[K];try{e[K]=void 0;var r=!0}catch{}var s=Zn.call(e);return r&&(t?e[K]=n:delete e[K]),s}var tr=Object.prototype,nr=tr.toString;function rr(e){return nr.call(e)}var or="[object Null]",ar="[object Undefined]",rt=R?R.toStringTag:void 0;function z(e){return e==null?e===void 0?ar:or:rt&&rt in Object(e)?er(e):rr(e)}function X(e){return e!=null&&typeof e=="object"}var sr="[object Symbol]";function ir(e){return typeof e=="symbol"||X(e)&&z(e)==sr}var cr=Array.isArray;const We=cr;var ur=/\s/;function lr(e){for(var t=e.length;t--&&ur.test(e.charAt(t)););return t}var dr=/^\s+/;function fr(e){return e&&e.slice(0,lr(e)+1).replace(dr,"")}function L(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var ot=0/0,pr=/^[-+]0x[0-9a-f]+$/i,gr=/^0b[01]+$/i,_r=/^0o[0-7]+$/i,mr=parseInt;function at(e){if(typeof e=="number")return e;if(ir(e))return ot;if(L(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=L(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=fr(e);var n=gr.test(e);return n||_r.test(e)?mr(e.slice(2),n?2:8):pr.test(e)?ot:+e}var hr="[object AsyncFunction]",br="[object Function]",yr="[object GeneratorFunction]",vr="[object Proxy]";function en(e){if(!L(e))return!1;var t=z(e);return t==br||t==yr||t==hr||t==vr}var xr=O["__core-js_shared__"];const be=xr;var st=function(){var e=/[^.]+$/.exec(be&&be.keys&&be.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function $r(e){return!!st&&st in e}var Tr=Function.prototype,Sr=Tr.toString;function M(e){if(e!=null){try{return Sr.call(e)}catch{}try{return e+""}catch{}}return""}var wr=/[\\^$.*+?()[\]{}|]/g,Or=/^\[object .+?Constructor\]$/,Ir=Function.prototype,Lr=Object.prototype,Cr=Ir.toString,jr=Lr.hasOwnProperty,Ar=RegExp("^"+Cr.call(jr).replace(wr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Er(e){if(!L(e)||$r(e))return!1;var t=en(e)?Ar:Or;return t.test(M(e))}function Pr(e,t){return e?.[t]}function k(e,t){var n=Pr(e,t);return Er(n)?n:void 0}var Mr=k(O,"WeakMap");const Be=Mr;var it=Object.create,kr=function(){function e(){}return function(t){if(!L(t))return{};if(it)return it(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const Br=kr;function Dr(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}var Nr=function(){try{var e=k(Object,"defineProperty");return e({},"",{}),e}catch{}}();const ct=Nr;function Vr(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var Rr=9007199254740991,Ur=/^(?:0|[1-9]\d*)$/;function Fr(e,t){var n=typeof e;return t=t??Rr,!!t&&(n=="number"||n!="symbol"&&Ur.test(e))&&e>-1&&e%1==0&&e<t}function tn(e,t,n){t=="__proto__"&&ct?ct(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function nn(e,t){return e===t||e!==e&&t!==t}var zr=Object.prototype,Xr=zr.hasOwnProperty;function rn(e,t,n){var r=e[t];(!(Xr.call(e,t)&&nn(r,n))||n===void 0&&!(t in e))&&tn(e,t,n)}function _e(e,t,n,r){var s=!n;n||(n={});for(var a=-1,o=t.length;++a<o;){var i=t[a],d=r?r(n[i],e[i],i,n,e):void 0;d===void 0&&(d=e[i]),s?tn(n,i,d):rn(n,i,d)}return n}var Wr=9007199254740991;function on(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Wr}function an(e){return e!=null&&on(e.length)&&!en(e)}var qr=Object.prototype;function qe(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||qr;return e===n}function Gr(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var Hr="[object Arguments]";function ut(e){return X(e)&&z(e)==Hr}var sn=Object.prototype,Yr=sn.hasOwnProperty,Kr=sn.propertyIsEnumerable,Jr=ut(function(){return arguments}())?ut:function(e){return X(e)&&Yr.call(e,"callee")&&!Kr.call(e,"callee")};const Qr=Jr;function Zr(){return!1}var cn=typeof exports=="object"&&exports&&!exports.nodeType&&exports,lt=cn&&typeof module=="object"&&module&&!module.nodeType&&module,eo=lt&&lt.exports===cn,dt=eo?O.Buffer:void 0,to=dt?dt.isBuffer:void 0,no=to||Zr;const un=no;var ro="[object Arguments]",oo="[object Array]",ao="[object Boolean]",so="[object Date]",io="[object Error]",co="[object Function]",uo="[object Map]",lo="[object Number]",fo="[object Object]",po="[object RegExp]",go="[object Set]",_o="[object String]",mo="[object WeakMap]",ho="[object ArrayBuffer]",bo="[object DataView]",yo="[object Float32Array]",vo="[object Float64Array]",xo="[object Int8Array]",$o="[object Int16Array]",To="[object Int32Array]",So="[object Uint8Array]",wo="[object Uint8ClampedArray]",Oo="[object Uint16Array]",Io="[object Uint32Array]",x={};x[yo]=x[vo]=x[xo]=x[$o]=x[To]=x[So]=x[wo]=x[Oo]=x[Io]=!0;x[ro]=x[oo]=x[ho]=x[ao]=x[bo]=x[so]=x[io]=x[co]=x[uo]=x[lo]=x[fo]=x[po]=x[go]=x[_o]=x[mo]=!1;function Lo(e){return X(e)&&on(e.length)&&!!x[z(e)]}function Ge(e){return function(t){return e(t)}}var ln=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Z=ln&&typeof module=="object"&&module&&!module.nodeType&&module,Co=Z&&Z.exports===ln,ye=Co&&Qt.process,jo=function(){try{var e=Z&&Z.require&&Z.require("util").types;return e||ye&&ye.binding&&ye.binding("util")}catch{}}();const U=jo;var ft=U&&U.isTypedArray,Ao=ft?Ge(ft):Lo;const Eo=Ao;var Po=Object.prototype,Mo=Po.hasOwnProperty;function dn(e,t){var n=We(e),r=!n&&Qr(e),s=!n&&!r&&un(e),a=!n&&!r&&!s&&Eo(e),o=n||r||s||a,i=o?Gr(e.length,String):[],d=i.length;for(var c in e)(t||Mo.call(e,c))&&!(o&&(c=="length"||s&&(c=="offset"||c=="parent")||a&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||Fr(c,d)))&&i.push(c);return i}function fn(e,t){return function(n){return e(t(n))}}var ko=fn(Object.keys,Object);const Bo=ko;var Do=Object.prototype,No=Do.hasOwnProperty;function Vo(e){if(!qe(e))return Bo(e);var t=[];for(var n in Object(e))No.call(e,n)&&n!="constructor"&&t.push(n);return t}function He(e){return an(e)?dn(e):Vo(e)}function Ro(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var Uo=Object.prototype,Fo=Uo.hasOwnProperty;function zo(e){if(!L(e))return Ro(e);var t=qe(e),n=[];for(var r in e)r=="constructor"&&(t||!Fo.call(e,r))||n.push(r);return n}function Ye(e){return an(e)?dn(e,!0):zo(e)}var Xo=k(Object,"create");const te=Xo;function Wo(){this.__data__=te?te(null):{},this.size=0}function qo(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Go="__lodash_hash_undefined__",Ho=Object.prototype,Yo=Ho.hasOwnProperty;function Ko(e){var t=this.__data__;if(te){var n=t[e];return n===Go?void 0:n}return Yo.call(t,e)?t[e]:void 0}var Jo=Object.prototype,Qo=Jo.hasOwnProperty;function Zo(e){var t=this.__data__;return te?t[e]!==void 0:Qo.call(t,e)}var ea="__lodash_hash_undefined__";function ta(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=te&&t===void 0?ea:t,this}function P(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}P.prototype.clear=Wo;P.prototype.delete=qo;P.prototype.get=Ko;P.prototype.has=Zo;P.prototype.set=ta;function na(){this.__data__=[],this.size=0}function me(e,t){for(var n=e.length;n--;)if(nn(e[n][0],t))return n;return-1}var ra=Array.prototype,oa=ra.splice;function aa(e){var t=this.__data__,n=me(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():oa.call(t,n,1),--this.size,!0}function sa(e){var t=this.__data__,n=me(t,e);return n<0?void 0:t[n][1]}function ia(e){return me(this.__data__,e)>-1}function ca(e,t){var n=this.__data__,r=me(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function C(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}C.prototype.clear=na;C.prototype.delete=aa;C.prototype.get=sa;C.prototype.has=ia;C.prototype.set=ca;var ua=k(O,"Map");const ne=ua;function la(){this.size=0,this.__data__={hash:new P,map:new(ne||C),string:new P}}function da(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function he(e,t){var n=e.__data__;return da(t)?n[typeof t=="string"?"string":"hash"]:n.map}function fa(e){var t=he(this,e).delete(e);return this.size-=t?1:0,t}function pa(e){return he(this,e).get(e)}function ga(e){return he(this,e).has(e)}function _a(e,t){var n=he(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function W(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}W.prototype.clear=la;W.prototype.delete=fa;W.prototype.get=pa;W.prototype.has=ga;W.prototype.set=_a;function pn(e,t){for(var n=-1,r=t.length,s=e.length;++n<r;)e[s+n]=t[n];return e}var ma=fn(Object.getPrototypeOf,Object);const gn=ma;function ha(){this.__data__=new C,this.size=0}function ba(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function ya(e){return this.__data__.get(e)}function va(e){return this.__data__.has(e)}var xa=200;function $a(e,t){var n=this.__data__;if(n instanceof C){var r=n.__data__;if(!ne||r.length<xa-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new W(r)}return n.set(e,t),this.size=n.size,this}function q(e){var t=this.__data__=new C(e);this.size=t.size}q.prototype.clear=ha;q.prototype.delete=ba;q.prototype.get=ya;q.prototype.has=va;q.prototype.set=$a;function Ta(e,t){return e&&_e(t,He(t),e)}function Sa(e,t){return e&&_e(t,Ye(t),e)}var _n=typeof exports=="object"&&exports&&!exports.nodeType&&exports,pt=_n&&typeof module=="object"&&module&&!module.nodeType&&module,wa=pt&&pt.exports===_n,gt=wa?O.Buffer:void 0,_t=gt?gt.allocUnsafe:void 0;function Oa(e,t){if(t)return e.slice();var n=e.length,r=_t?_t(n):new e.constructor(n);return e.copy(r),r}function Ia(e,t){for(var n=-1,r=e==null?0:e.length,s=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[s++]=o)}return a}function mn(){return[]}var La=Object.prototype,Ca=La.propertyIsEnumerable,mt=Object.getOwnPropertySymbols,ja=mt?function(e){return e==null?[]:(e=Object(e),Ia(mt(e),function(t){return Ca.call(e,t)}))}:mn;const Ke=ja;function Aa(e,t){return _e(e,Ke(e),t)}var Ea=Object.getOwnPropertySymbols,Pa=Ea?function(e){for(var t=[];e;)pn(t,Ke(e)),e=gn(e);return t}:mn;const hn=Pa;function Ma(e,t){return _e(e,hn(e),t)}function bn(e,t,n){var r=t(e);return We(e)?r:pn(r,n(e))}function ka(e){return bn(e,He,Ke)}function Ba(e){return bn(e,Ye,hn)}var Da=k(O,"DataView");const De=Da;var Na=k(O,"Promise");const Ne=Na;var Va=k(O,"Set");const Ve=Va;var ht="[object Map]",Ra="[object Object]",bt="[object Promise]",yt="[object Set]",vt="[object WeakMap]",xt="[object DataView]",Ua=M(De),Fa=M(ne),za=M(Ne),Xa=M(Ve),Wa=M(Be),A=z;(De&&A(new De(new ArrayBuffer(1)))!=xt||ne&&A(new ne)!=ht||Ne&&A(Ne.resolve())!=bt||Ve&&A(new Ve)!=yt||Be&&A(new Be)!=vt)&&(A=function(e){var t=z(e),n=t==Ra?e.constructor:void 0,r=n?M(n):"";if(r)switch(r){case Ua:return xt;case Fa:return ht;case za:return bt;case Xa:return yt;case Wa:return vt}return t});const Je=A;var qa=Object.prototype,Ga=qa.hasOwnProperty;function Ha(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&Ga.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var Ya=O.Uint8Array;const $t=Ya;function Qe(e){var t=new e.constructor(e.byteLength);return new $t(t).set(new $t(e)),t}function Ka(e,t){var n=t?Qe(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var Ja=/\w*$/;function Qa(e){var t=new e.constructor(e.source,Ja.exec(e));return t.lastIndex=e.lastIndex,t}var Tt=R?R.prototype:void 0,St=Tt?Tt.valueOf:void 0;function Za(e){return St?Object(St.call(e)):{}}function es(e,t){var n=t?Qe(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var ts="[object Boolean]",ns="[object Date]",rs="[object Map]",os="[object Number]",as="[object RegExp]",ss="[object Set]",is="[object String]",cs="[object Symbol]",us="[object ArrayBuffer]",ls="[object DataView]",ds="[object Float32Array]",fs="[object Float64Array]",ps="[object Int8Array]",gs="[object Int16Array]",_s="[object Int32Array]",ms="[object Uint8Array]",hs="[object Uint8ClampedArray]",bs="[object Uint16Array]",ys="[object Uint32Array]";function vs(e,t,n){var r=e.constructor;switch(t){case us:return Qe(e);case ts:case ns:return new r(+e);case ls:return Ka(e,n);case ds:case fs:case ps:case gs:case _s:case ms:case hs:case bs:case ys:return es(e,n);case rs:return new r;case os:case is:return new r(e);case as:return Qa(e);case ss:return new r;case cs:return Za(e)}}function xs(e){return typeof e.constructor=="function"&&!qe(e)?Br(gn(e)):{}}var $s="[object Map]";function Ts(e){return X(e)&&Je(e)==$s}var wt=U&&U.isMap,Ss=wt?Ge(wt):Ts;const ws=Ss;var Os="[object Set]";function Is(e){return X(e)&&Je(e)==Os}var Ot=U&&U.isSet,Ls=Ot?Ge(Ot):Is;const Cs=Ls;var js=1,As=2,Es=4,yn="[object Arguments]",Ps="[object Array]",Ms="[object Boolean]",ks="[object Date]",Bs="[object Error]",vn="[object Function]",Ds="[object GeneratorFunction]",Ns="[object Map]",Vs="[object Number]",xn="[object Object]",Rs="[object RegExp]",Us="[object Set]",Fs="[object String]",zs="[object Symbol]",Xs="[object WeakMap]",Ws="[object ArrayBuffer]",qs="[object DataView]",Gs="[object Float32Array]",Hs="[object Float64Array]",Ys="[object Int8Array]",Ks="[object Int16Array]",Js="[object Int32Array]",Qs="[object Uint8Array]",Zs="[object Uint8ClampedArray]",ei="[object Uint16Array]",ti="[object Uint32Array]",v={};v[yn]=v[Ps]=v[Ws]=v[qs]=v[Ms]=v[ks]=v[Gs]=v[Hs]=v[Ys]=v[Ks]=v[Js]=v[Ns]=v[Vs]=v[xn]=v[Rs]=v[Us]=v[Fs]=v[zs]=v[Qs]=v[Zs]=v[ei]=v[ti]=!0;v[Bs]=v[vn]=v[Xs]=!1;function pe(e,t,n,r,s,a){var o,i=t&js,d=t&As,c=t&Es;if(n&&(o=s?n(e,r,s,a):n(e)),o!==void 0)return o;if(!L(e))return e;var f=We(e);if(f){if(o=Ha(e),!i)return Dr(e,o)}else{var g=Je(e),m=g==vn||g==Ds;if(un(e))return Oa(e,i);if(g==xn||g==yn||m&&!s){if(o=d||m?{}:xs(e),!i)return d?Ma(e,Sa(o,e)):Aa(e,Ta(o,e))}else{if(!v[g])return s?e:{};o=vs(e,g,i)}}a||(a=new q);var p=a.get(e);if(p)return p;a.set(e,o),Cs(e)?e.forEach(function(l){o.add(pe(l,t,n,l,e,a))}):ws(e)&&e.forEach(function(l,u){o.set(u,pe(l,t,n,u,e,a))});var b=c?d?Ba:ka:d?Ye:He,y=f?void 0:b(e);return Vr(y||e,function(l,u){y&&(u=l,l=e[u]),rn(o,u,pe(l,t,n,u,e,a))}),o}var ni=1,ri=4;function oi(e){return pe(e,ni|ri)}var ai=function(){return O.Date.now()};const ve=ai;var si="Expected a function",ii=Math.max,ci=Math.min;function F(e,t,n){var r,s,a,o,i,d,c=0,f=!1,g=!1,m=!0;if(typeof e!="function")throw new TypeError(si);t=at(t)||0,L(n)&&(f=!!n.leading,g="maxWait"in n,a=g?ii(at(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m);function p(T){var j=r,Y=s;return r=s=void 0,c=T,o=e.apply(Y,j),o}function b(T){return c=T,i=setTimeout(u,t),f?p(T):o}function y(T){var j=T-d,Y=T-c,Ze=t-j;return g?ci(Ze,a-Y):Ze}function l(T){var j=T-d,Y=T-c;return d===void 0||j>=t||j<0||g&&Y>=a}function u(){var T=ve();if(l(T))return _(T);i=setTimeout(u,y(T))}function _(T){return i=void 0,m&&r?p(T):(r=s=void 0,o)}function $(){i!==void 0&&clearTimeout(i),c=0,r=d=s=i=void 0}function w(){return i===void 0?o:_(ve())}function H(){var T=ve(),j=l(T);if(r=arguments,s=this,d=T,j){if(i===void 0)return b(d);if(g)return clearTimeout(i),i=setTimeout(u,t),p(d)}return i===void 0&&(i=setTimeout(u,t)),o}return H.cancel=$,H.flush=w,H}var ui="Expected a function";function li(e,t,n){var r=!0,s=!0;if(typeof e!="function")throw new TypeError(ui);return L(n)&&(r="leading"in n?!!n.leading:r,s="trailing"in n?!!n.trailing:s),F(e,t,{leading:r,maxWait:t,trailing:s})}const{reactive:di,watchPostEffect:fi,watch:pi}=__OSL.get("vue"),{defineStore:gi}=__OSL.get("pinia"),{useI18n:_i}=__OSL.get("vue-i18n"),mi=__OSL.get("xbp/es/locale/lang/zh-cn").default,hi=__OSL.get("xbp/es/locale/lang/en-us").default,{Message:Re}=__OSL.get("xbp/es/message"),bi={zh_CN:mi,en_US:hi};let ee=null;function It(){ee&&(ee.close(),ee=null)}function yi(){ee||(ee=Re.loading({content:"loading 加载中",duration:0,closable:!0}))}function $n(e){Fn("token",e),Xe(e)}function vi(){sessionStorage.getItem("token")&&Xe(sessionStorage.getItem("token")),kn(function(e){return console.log("x-ajax-request config",e),yi(),e},function(e){return console.log("x-ajax-request error",e),Promise.reject(e)}),Bn(function(e){console.log("x-ajax-response ",e),It();const{config:t,data:n}=e,{code:r,msg:s}=n;if(r!==200){Re.error(s);return}return t.url==="/api/user/login"&&$n(n.token),n.data},function(e){console.log("x-ajax-response error",e),It(),Re.error({content:e.message,duration:2e3,closable:!0})})}vi();const re=gi("systemStore",()=>{console.log("xx useSystemStore init ");const{locale:e,mergeLocaleMessage:t}=_i(),n=di({showLoginWin:!1,lang:"",theme:"",primaryColor:"#165DFF",leftMenuCollapsed:!1,uiLang:{},langList:[],userInfo:{_id:"",account:"",avatar:"",theme:"",name:"",lang:"",roles:[],permissionList:[]},menuId:"",menus:[],menuTabId:"",menuTabs:[],beforeFullPath:""});function r(l){let u=n.menus.find(_=>_.id===l);u&&V(u.path)}function s(l){let u=null;for(let _=n.menus.length-1;_>=0;_--){const $=n.menus[_];if(l.startsWith($.path)){u=$;break}}return u}function a(l){if(n.menuTabs.length===0)return;let u=n.menuTabs.findIndex(H=>H.id===l);if(u===-1)return;let _=n.menuTabs[u];if(!_)return;const $=n.menuTabId===_.id;let w="/";n.menuTabs.length===1?n.menuTabs=[]:($&&(u===n.menuTabs.length-1?w=n.menuTabs[u-1].fullPath:w=n.menuTabs[u+1].fullPath),n.menuTabs.splice(u,1)),$&&V(w)}const o=F(({menus:l,fullPath:u})=>{if(!u||u==="/"||l.length===0)return;console.log("x system setMenuAndTabs",u);let _=l.find(w=>w.path===u);_?n.menuId=_.id:n.menuId="";let $=n.menuTabs.find(w=>w.fullPath===u);$||(_=s(u),console.log("x system setMenuAndTabs findLastMenu menu",_),_?$={id:new Date().getTime()+"",name:_.name,title:_.title,icon:_.icon,fullPath:u}:($={id:new Date().getTime()+"",title:"not find!",fullPath:u},$.name=$.id),n.menuTabs.push($)),n.menuTabId=$.id},200);E.beforeEach((l,u,_)=>{n.beforeFullPath=l.fullPath,_()}),pi(()=>[n.menus,n.beforeFullPath],()=>{o({menus:n.menus,fullPath:n.beforeFullPath})},{immediate:!0}),fi(()=>{n.primaryColor&&Vn(n.primaryColor)});function i(l){n.langList=l}async function d(){Xe(""),n.token="",n.userInfo={_id:"",account:"",avatar:"",theme:"",name:"",lang:"",roles:[],permissionList:[]},n.showLoginWin=!0}async function c(){if(await zn(0),!sessionStorage.getItem("token")){d();return}const u=await Gn().catch(_=>{console.error("getUserInfo",_)});if(!u){d();return}console.log("x initUser res ",u),g(u)}function f(l){console.log("x setMenus menus ",l);for(let u of l)u.icon||(u.icon="xp-menu1");n.menus=l}function g(l){n.theme=l.theme||"light",n.lang=l.lang||"zh_CN",n.userInfo=l,y(n.userInfo.theme),b(n.userInfo.lang),f(oi(n.userInfo.menus))}async function m({account:l,password:u}){const _=await qn({account:l,password:u});if(_)return g(_),_}function p(){$n(""),d()}function b(l){let u=l;u&&e.value!==u&&(n.langList.find(_=>_.id===u)||(u=n.langList[0].id),n.uiLang=bi[u],e.value=u,n.lang=u,n.userInfo.lang!==u&&(n.userInfo.lang=u))}function y(l){l&&n.userInfo.theme!==l&&(n.theme=l,n.userInfo.theme=l)}return i([{id:"zh_CN",value:"中文"},{id:"en_US",value:"English"}]),c(),{state:n,login:m,logout:p,changeLang:b,changeTheme:y,setLangList:i,mergeLocaleMessage:t,changeUrlByMenuId:r,deleteMenuTabs:a}});const{renderSlot:xi,resolveComponent:xe,createVNode:$i,createTextVNode:Lt,createElementVNode:Ti,renderList:Si,Fragment:wi,openBlock:$e,createElementBlock:Oi,toDisplayString:Ii,withCtx:Te,createBlock:Ct}=__OSL.get("vue"),Li={class:"dropdown-btn"},{ref:Ci}=__OSL.get("vue"),{Dropdown:ji}=__OSL.get("xbp/es/dropdown"),{Doption:Ai}=__OSL.get("xbp/es/dropdown"),Ei={components:{XDropdown:ji,XDoption:Ai}},jt=Object.assign(Ei,{__name:"Dropdown",props:{active:{type:String,default:""},list:{type:Array,default:()=>[]}},emits:["select"],setup(e,{emit:t}){const n=Ci(!1);function r(s){t("select",s)}return(s,a)=>{const o=xe("icon"),i=xe("x-doption"),d=xe("x-dropdown");return $e(),Ct(d,{"popup-visible":n.value,"onUpdate:popupVisible":a[0]||(a[0]=c=>n.value=c),onSelect:r},{content:Te(()=>[($e(!0),Oi(wi,null,Si(e.list,c=>($e(),Ct(i,{key:c.id,value:c.id,active:c.id===e.active},{default:Te(()=>[Lt(Ii(c.value),1)]),_:2},1032,["value","active"]))),128))]),default:Te(()=>[Ti("span",Li,[xi(s.$slots,"default"),Lt(),$i(o,{name:n.value?"xp-arrow_up":"xp-arrow_down"},null,8,["name"])])]),_:3},8,["popup-visible"])}}}),Pi=""+new URL("df-avatar-b9a54527.png",import.meta.url).href;const{resolveComponent:ae,createVNode:B,createElementVNode:se,toDisplayString:Mi,unref:At,withCtx:Se,openBlock:ie,createElementBlock:we,createCommentVNode:ki,createBlock:Bi}=__OSL.get("vue"),Di={class:"logo"},Ni={class:"title"},Vi={class:"right-box"},Ri=["src"],Ui=["src"],{computed:Oe,ref:Fi,reactive:zi}=__OSL.get("vue"),{ThemeButton:Xi}=__OSL.get("xbp/es/theme-button"),{Avatar:Wi}=__OSL.get("xbp/es/avatar"),{Dynamic:qi}=__OSL.get("xbp/es/dynamic"),Gi={components:{XThemeButton:Xi,XAvatar:Wi,XDynamic:qi}},Hi=Object.assign(Gi,{__name:"index",setup(e){const t=()=>N(()=>import("./MenuDrawer-9f445c0c.js"),["./MenuDrawer-9f445c0c.js","./MenuDrawer-43e6c9e7.css"],import.meta.url),{state:n,logout:r,changeTheme:s,changeLang:a}=re(),o=Fi(null),i=zi({appMenuVisible:!1,headerHeight:0,userMeunList:[{id:"logout",icon:"x-logout",value:"退出"}]}),d=Oe({get:()=>n.theme,set:b=>{s(b)}}),c=Oe({get:()=>n.lang,set:b=>{a(b)}}),f=Oe({get:()=>n?.userInfo?.avatar??""});function g(){if(i.appMenuVisible){i.appMenuVisible=!1;return}i.headerHeight=o.value.offsetHeight,i.appMenuVisible=!0}function m(b){c.value!==b&&(c.value=b)}function p(b){switch(console.log(" userCommand ",b),b){case"logout":r();break}}return(b,y)=>{const l=ae("icon"),u=ae("x-theme-button"),_=ae("x-avatar"),$=ae("x-dynamic");return ie(),we("header",{class:"portal-header",ref_key:"refMain",ref:o},[se("div",Di,[se("div",{class:"menu-btn",onClick:g},[B(l,{name:i.appMenuVisible?"xp-close":"xp-menu"},null,8,["name"])]),se("div",Ni,Mi(b.$t("starter_title")),1)]),se("div",Vi,[B(jt,{onSelect:m,active:c.value,list:At(n).langList},{default:Se(()=>[B(l,{name:"xp-i18n"})]),_:1},8,["active","list"]),B(u,{modelValue:d.value,"onUpdate:modelValue":y[0]||(y[0]=w=>d.value=w)},null,8,["modelValue"]),B(jt,{onSelect:p,list:i.userMeunList},{default:Se(()=>[B(_,{class:"user-avatar"},{default:Se(()=>[f.value?(ie(),we("img",{key:0,src:f.value,alt:""},null,8,Ri)):(ie(),we("img",{key:1,src:At(Pi),alt:""},null,8,Ui))]),_:1})]),_:1},8,["list"])]),i.appMenuVisible?(ie(),Bi($,{key:0,is:t,top:i.headerHeight,modelValue:i.appMenuVisible,"onUpdate:modelValue":y[1]||(y[1]=w=>i.appMenuVisible=w)},null,8,["top","modelValue"])):ki("",!0)],512)}}});const{renderList:Et,Fragment:Ie,openBlock:I,createElementBlock:Le,resolveComponent:ce,mergeProps:Pt,createBlock:D,createCommentVNode:Mt,toDisplayString:kt,createTextVNode:Bt,withCtx:J}=__OSL.get("vue"),{computed:Yi}=__OSL.get("vue"),{SubMenu:Ki}=__OSL.get("xbp/es/menu"),{MenuItem:Ji}=__OSL.get("xbp/es/menu"),Qi={components:{XSubMenu:Ki,XMenuItem:Ji}},Zi=Object.assign(Qi,{name:"MenuTree",inheritAttrs:!1},{__name:"MenuTree",props:{rootId:{type:String,default:"0"},id:{type:String,default:"0"},pid:{type:String,default:"0"},title:{type:String,default:""},icon:{type:String,default:""},show:{type:Boolean,default:!1},treeData:{type:Array,default:()=>[]}},setup(e){const t=e,n=Yi(()=>t.treeData.filter(r=>r.pid===t.id));return(r,s)=>{const a=ce("MenuTree",!0),o=ce("icon"),i=ce("x-sub-menu"),d=ce("x-menu-item");return n.value.length>0?(I(),Le(Ie,{key:0},[e.id===e.rootId?(I(!0),Le(Ie,{key:0},Et(n.value,c=>(I(),D(a,Pt({key:c.id},{id:c.id,pid:c.pid,title:c.title,icon:c.icon,show:c.show,rootId:e.rootId,treeData:e.treeData}),null,16))),128)):(I(),D(i,{key:e.id},{icon:J(()=>[e.icon?(I(),D(o,{key:0,name:e.icon},null,8,["name"])):Mt("",!0)]),title:J(()=>[Bt(kt(e.title),1)]),default:J(()=>[(I(!0),Le(Ie,null,Et(n.value,c=>(I(),D(a,Pt({key:c.id},{id:c.id,pid:c.pid,title:c.title,icon:c.icon,show:c.show,rootId:e.rootId,treeData:e.treeData}),null,16))),128))]),_:1}))],64)):(I(),D(d,{key:e.id},{icon:J(()=>[e.icon?(I(),D(o,{key:0,name:e.icon},null,8,["name"])):Mt("",!0)]),default:J(()=>[Bt(" "+kt(e.title),1)]),_:1}))}}});const{normalizeProps:ec,guardReactiveProps:tc,openBlock:nc,createBlock:rc}=__OSL.get("vue"),{watchPostEffect:oc}=__OSL.get("vue"),ac={inheritAttrs:!1},sc=Object.assign(ac,{__name:"index",props:{rootId:{type:String,default:"0"},menus:{type:Array,default:()=>[]}},setup(e){const t=e;return oc(()=>{console.log("ccc    props.menus   ",t.menus)}),(n,r)=>(nc(),rc(Zi,ec(tc({id:e.rootId,rootId:e.rootId,treeData:e.menus})),null,16))}});const ic=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n};const{unref:Ce,normalizeProps:cc,guardReactiveProps:uc,createVNode:Dt,resolveComponent:lc,withCtx:dc,openBlock:fc,createElementBlock:pc,pushScopeId:tu,popScopeId:nu}=__OSL.get("vue"),gc={class:"portal-aside",ref:"refMain"},{ref:ue,watch:Nt}=__OSL.get("vue"),{Menu:_c}=__OSL.get("xbp/es/menu"),mc={components:{XMenu:_c}},hc=Object.assign(mc,{__name:"LeftMenu",props:{isCollapse:{type:Boolean,default:!1}},setup(e){const{state:t,changeUrlByMenuId:n}=re(),r=ue("0"),s=ue(!1),a=ue([]),o=ue([]);function i(m){return m?t.menus.find(p=>p.show!==!1&&p.id===m):null}const d=F(()=>{if(i(t.menuId))return;a.value=[""];const p=[],y=location.hash.split("/")[1],l=t.menus.find(u=>u.pid===r.value&&u.name===y);l&&p.push(l.id),o.value=p},200);Nt(()=>E.currentRoute.value.fullPath,d);function c(m){let p=i(m);if(!p){d();return}V(p.path);const b=[p.pid];p.pid!==r.value&&(p=t.menus?.find(y=>y.id===p.pid),p&&p.pid!==r.value&&b.push(p.pid)),o.value=b,a.value=[m]}Nt(()=>t.menuId,c);function f(m){console.log("onSubClick key",m)}function g(m){n(m)}return(m,p)=>{const b=lc("x-menu");return fc(),pc("aside",gc,[Dt(b,{style:{width:"200px"},"show-collapse-button":"",theme:Ce(t).theme,"auto-scroll-into-view":"",collapsed:s.value,"onUpdate:collapsed":p[0]||(p[0]=y=>s.value=y),"selected-keys":a.value,"onUpdate:selectedKeys":p[1]||(p[1]=y=>a.value=y),"open-keys":o.value,"onUpdate:openKeys":p[2]||(p[2]=y=>o.value=y),onMenuItemClick:g,onSubMenuClick:f},{default:dc(()=>[Dt(Ce(sc),cc(uc({id:r.value,rootId:r.value,menus:Ce(t).menus})),null,16)]),_:1},8,["theme","collapsed","selected-keys","open-keys"])],512)}}}),bc=ic(hc,[["__scopeId","data-v-879a676a"]]);const{unref:le,renderList:yc,Fragment:vc,openBlock:Q,createElementBlock:Vt,resolveComponent:je,createBlock:Ae,createCommentVNode:Rt,toDisplayString:xc,createTextVNode:$c,withCtx:Ut}=__OSL.get("vue"),Tc={class:"main-tabs"},{Tabs:Sc}=__OSL.get("xbp/es/tabs"),{TabPane:wc}=__OSL.get("xbp/es/tabs"),Oc={components:{XTabs:Sc,XTabPane:wc}},Ic=Object.assign(Oc,{__name:"MainTabs",setup(e){const{state:t,deleteMenuTabs:n}=re();function r(a){console.log("x onDelete ",a),n(a)}function s(a){console.log("x onTabClick ",a);let o=t.menuTabs.find(i=>i.id===a);V(o.fullPath)}return(a,o)=>{const i=je("icon"),d=je("x-tab-pane"),c=je("x-tabs");return Q(),Vt("div",Tc,[le(t).menuTabs.length>0?(Q(),Ae(c,{key:0,type:"card","hide-content":"","active-key":le(t).menuTabId,"onUpdate:activeKey":o[0]||(o[0]=f=>le(t).menuTabId=f),editable:!0,onDelete:r,onTabClick:s,"auto-switch":""},{default:Ut(()=>[(Q(!0),Vt(vc,null,yc(le(t).menuTabs,f=>(Q(),Ae(d,{key:f.id,closable:f.name!=="home"},{title:Ut(()=>[f.icon?(Q(),Ae(i,{key:0,name:f.icon},null,8,["name"])):Rt("",!0),$c(" "+xc(f.title),1)]),_:2},1032,["closable"]))),128))]),_:1},8,["active-key"])):Rt("",!0)])}}});const{defineStore:Lc}=__OSL.get("pinia"),Ue=__OSL.get("nprogress").default,{watchEffect:Cc,watch:jc}=__OSL.get("vue");Ue.configure({showSpinner:!1});let Fe={};function Ac(){try{let e=localStorage.getItem("hostMap");e&&(Fe=JSON.parse(e))}catch{}}Ac();const Ec=Lc("loadAppStore",()=>{const{state:e,mergeLocaleMessage:t}=re(),n={};console.log("xx loadAppStore init ");async function r(f){if(console.log(`xx loadApp [${new Date().getTime()}]:`,f),n[f])return;const g=Fe.df??"/v1";let m=Fe[f]??g;if(window.__XBP_DEV_APP===f){let _=`${location.origin}/src/index.js`;await s(f,_);return}let p=`${m}/${f}`;const b=await fetch(`${p}/manifest.json?t=${new Date().getTime()}`).catch(_=>{console.log(`subapp [${f}] not find`,_)});if(!b?.ok)return;console.log("x fetch entry ",b);const y=await b.json();console.log("x fetch manifest ",y);let l=null;for(const _ in y){const $=y[_];if($.isEntry){l=$;break}}if(!l)return;const u=`${p}/${l.file}`;if(l.css)for(const _ of l.css){const $=`${p}/${_}`;Xn($)}await s(f,u)}async function s(f,g){const m=await N(()=>import(g),[],import.meta.url);console.log("x subRes ",m);const p=await m.default();return n[f]=p,a(p)}async function a(f){Ln(f.routes),V("");const g=f.i18n;if(typeof g=="function"){const m=e.lang;m&&g(m).then(p=>{t(m,p)})}else for(let m in g)t(m,g[m])}Cc(()=>{const f=e.lang;if(f)for(const g in n){const p=n[g].i18n;typeof p=="function"&&p(f).then(b=>{t(f,b)})}});const o=F(()=>{Ue.done()},50),i=({to:f,from:g})=>{g.fullPath!==f.fullPath&&Ue.start()};E.beforeEach((f,g,m)=>{i({to:f,from:g}),m()});const d=["about","home","3d"],c=F(()=>{const g=location.hash.split("/")[1]??"";if(!g){V("/home"),o();return}if(d.includes(g)){o();return}r(g).then(()=>{o()})},20);jc(()=>E.currentRoute.value.fullPath,c)});const{unref:de,createVNode:fe,resolveComponent:Ee,createElementVNode:ge,openBlock:Ft,createBlock:zt,createCommentVNode:Pc,withCtx:Mc}=__OSL.get("vue"),kc={class:"portal-content-main"},Bc={class:"portal-content"},Dc={class:"app-view"},Nc=ge("footer",{class:"portal-footer"},null,-1),{ConfigProvider:Vc}=__OSL.get("xbp/es/config-provider"),{Dynamic:Rc}=__OSL.get("xbp/es/dynamic"),Uc={components:{XConfigProvider:Vc,XDynamic:Rc}},Fc=Object.assign(Uc,{__name:"App",setup(e){const{state:t}=re();Ec();const n=()=>N(()=>import("./index-a0364445.js"),["./index-a0364445.js","./index-1f87a8ff.css"],import.meta.url);return(r,s)=>{const a=Ee("router-view"),o=Ee("x-dynamic"),i=Ee("x-config-provider");return Ft(),zt(i,{locale:de(t).uiLang},{default:Mc(()=>[fe(Hi,{class:"portal-header"}),ge("main",kc,[fe(bc),ge("div",Bc,[fe(Ic),ge("main",Dc,[fe(a)])])]),Nc,de(t).showLoginWin?(Ft(),zt(o,{key:0,is:n,modelValue:de(t).showLoginWin,"onUpdate:modelValue":s[0]||(s[0]=d=>de(t).showLoginWin=d)},null,8,["modelValue"])):Pc("",!0)]),_:1},8,["locale"])}}}),Xt=5,h="@@xdragContext",zc={name:"xdrag",mounted:function(e,t){getComputedStyle(e).position==="static"&&(e.style.position="relative");const r=document.createElement("div");r.className="x-drag-ctr",r.style.position="absolute",r.style.pointerEvents="all",r.style.cursor="move",r.style.zIndex=2,r.style.background="transparent",r.style.width="100%",r.style.height="100%",r.style.left="0px",r.style.top="0px",r.setAttribute("draggable",!0);const s=e.attributes;for(let a=0;a<s.length;a++){const o=s[a],i=o.name;if(i.startsWith("data-")){const d=i.substring(5);d.startsWith("v-")||r.setAttribute(`data-${d}`,o.value)}}e.appendChild(r),e[h]||(e[h]={}),e[h].dragstart=a=>{const o=a.pageX,i=a.pageY;e[h].startX=o,e[h].startY=i,e[h].lastX=o,e[h].lastY=i,e[h].xdraging=!0;const d={startX:o,startY:i},c=t.value&&t.value.start;c&&c(a,d)},e[h].drag=li(function(a){if(!e[h].xdraging)return;const o=a.pageX,i=a.pageY;if(Math.abs(i-e[h].lastY)>Xt||Math.abs(o-e[h].lastX)>Xt){e[h].lastX=o,e[h].lastY=i;const d={startX:e[h].startX,startY:e[h].startY,moveX:o,moveY:i,width:o-e[h].startX,height:i-e[h].startY},c=t.value&&t.value.move;c&&c(a,d)}},100),e[h].dragend=a=>{e[h].xdraging=!1;const o=t.value&&t.value.end;o&&o(a)},r.addEventListener("dragstart",e[h].dragstart),r.addEventListener("drag",e[h].drag),r.addEventListener("dragend",e[h].dragend),e[h].dragCtrDom=r},beforeUnmount(e){const t=e[h].dragCtrDom;t.removeEventListener("dragstart",e[h].dragstart),t.removeEventListener("drag",e[h].drag),t.removeEventListener("dragend",e[h].dragend),e[h].drag.cancel&&e[h].drag.cancel(),e.removeChild(e[h].dragCtrDom),delete e[h]}},S="@@xresizeContext",Xc={name:"xresize",mounted:function(e,t){e[S]||(e[S]={});const n=e.getBoundingClientRect();e[S].size={width:n.width,height:n.height},e[S].change=F(function(){const r=e.getBoundingClientRect();(e[S].size.height!==r.height||e[S].size.width!==r.width)&&(e[S].size={width:r.width,height:r.height},t.value())},Number(t.arg)||50),e[S].ro=new window.ResizeObserver(e[S].change),e[S].ro.observe(e)},beforeUnmount(e){e[S].ro.disconnect(),e[S].change=null,e[S].ro=null,e[S].size=null,delete e[S]}},Wc=[zc,Xc],qc=e=>{for(const t of Wc)e.directive(t.name,t)};const{createElementVNode:Gc,normalizeClass:Hc,openBlock:Yc,createElementBlock:Kc}=__OSL.get("vue"),Jc=["xlink:href"],Wt={__name:"index",props:{name:{type:String,default:""}},setup(e){return(t,n)=>(Yc(),Kc("svg",{class:Hc(["svg-icon",e.name]),"aria-hidden":"true"},[Gc("use",{"xlink:href":`#${e.name}`},null,8,Jc)],2))}},Qc=Object.assign(Wt,{install:e=>{e.component("icon",Wt)}});const{createApp:Zc}=__OSL.get("vue"),{createPinia:eu}=__OSL.get("pinia"),G=Zc(Fc);qc(G);G.use(eu());G.use(E);G.use(Pn);G.use(Qc);G.mount(document.querySelector("#xbp-portal"));setTimeout(()=>{const e=new URL(""+new URL("../font/iconfont.js?_v=20230713",import.meta.url).href,self.location).href;Wn(e)},200);export{ic as _,re as u};
