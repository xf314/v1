import{n as w}from"./index-38cc7a10.js";var A=typeof global=="object"&&global&&global.Object===Object&&global;const M=A;var V=typeof self=="object"&&self&&self.Object===Object&&self,P=M||V||Function("return this")();const E=P;var D=E.Symbol;const _=D;var I=Object.prototype,F=I.hasOwnProperty,R=I.toString,b=_?_.toStringTag:void 0;function G(e){var t=F.call(e,b),r=e[b];try{e[b]=void 0;var a=!0}catch{}var c=R.call(e);return a&&(t?e[b]=r:delete e[b]),c}var z=Object.prototype,H=z.toString;function U(e){return H.call(e)}var X="[object Null]",q="[object Undefined]",$=_?_.toStringTag:void 0;function J(e){return e==null?e===void 0?q:X:$&&$ in Object(e)?G(e):U(e)}function K(e){return e!=null&&typeof e=="object"}var Q="[object Symbol]";function Y(e){return typeof e=="symbol"||K(e)&&J(e)==Q}var Z=/\s/;function ee(e){for(var t=e.length;t--&&Z.test(e.charAt(t)););return t}var te=/^\s+/;function ne(e){return e&&e.slice(0,ee(e)+1).replace(te,"")}function v(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var k=0/0,re=/^[-+]0x[0-9a-f]+$/i,oe=/^0b[01]+$/i,ie=/^0o[0-7]+$/i,ae=parseInt;function C(e){if(typeof e=="number")return e;if(Y(e))return k;if(v(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=v(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=ne(e);var r=oe.test(e);return r||ie.test(e)?ae(e.slice(2),r?2:8):re.test(e)?k:+e}var ce=function(){return E.Date.now()};const T=ce;var se="Expected a function",fe=Math.max,ue=Math.min;function le(e,t,r){var a,c,o,s,i,f,l=0,S=!1,d=!1,p=!0;if(typeof e!="function")throw new TypeError(se);t=C(t)||0,v(r)&&(S=!!r.leading,d="maxWait"in r,o=d?fe(C(r.maxWait)||0,t):o,p="trailing"in r?!!r.trailing:p);function h(n){var u=a,m=c;return a=c=void 0,l=n,s=e.apply(m,u),s}function N(n){return l=n,i=setTimeout(g,t),S?h(n):s}function L(n){var u=n-f,m=n-l,j=t-u;return d?ue(j,o-m):j}function x(n){var u=n-f,m=n-l;return f===void 0||u>=t||u<0||d&&m>=o}function g(){var n=T();if(x(n))return O(n);i=setTimeout(g,L(n))}function O(n){return i=void 0,p&&a?h(n):(a=c=void 0,s)}function B(){i!==void 0&&clearTimeout(i),l=0,a=f=c=i=void 0}function W(){return i===void 0?s:O(T())}function y(){var n=T(),u=x(n);if(a=arguments,c=this,f=n,u){if(i===void 0)return N(f);if(d)return clearTimeout(i),i=setTimeout(g,t),h(f)}return i===void 0&&(i=setTimeout(g,t)),s}return y.cancel=B,y.flush=W,y}await __OSL.all(["echarts","xbp/es/button","xbp/es/button/style","vue"]);const{createTextVNode:de,resolveComponent:me,unref:be,withCtx:ge,createVNode:_e,createElementVNode:pe,openBlock:he,createElementBlock:ye}=__OSL.get("vue"),Te={class:"Echart"},ve=__OSL.get("echarts").default,{ref:Se,onMounted:xe}=__OSL.get("vue"),{Button:Oe}=__OSL.get("xbp/es/button"),je={components:{XButton:Oe}},ke=Object.assign(je,{__name:"echarts",setup(e){const t=Se(null);let r=null;const a=le(async()=>{const o={xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[150,230,224,218,135,147,260],type:"line"}]};r.setOption(o),c()},200);xe(()=>{const o=t.value;r=ve.init(o,""),a()});const c=()=>{if(!r)return;const o=t.value;r.resize({width:o.offsetWidth,height:o.offsetHeight})};return(o,s)=>{const i=me("x-button");return he(),ye("div",Te,[_e(i,{onClick:s[0]||(s[0]=f=>o.$router.push({path:`/${be(w)}/home`}))},{default:ge(()=>[de("goto home")]),_:1}),pe("div",{class:"x-chart",ref_key:"refChart",ref:t},null,512)])}}});export{ke as default};
