const E="modulepreload",L=function(n,r){return new URL(n,r).href},m={},c=function(r,i,a){if(!i||i.length===0)return r();const p=document.getElementsByTagName("link");return Promise.all(i.map(e=>{if(e=L(e,a),e in m)return;m[e]=!0;const o=e.endsWith(".css"),v=o?'[rel="stylesheet"]':"";if(!!a)for(let l=p.length-1;l>=0;l--){const _=p[l];if(_.href===e&&(!o||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${v}`))return;const s=document.createElement("link");if(s.rel=o?"stylesheet":E,o||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),o)return new Promise((l,_)=>{s.addEventListener("load",l),s.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>r()).catch(e=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=e,window.dispatchEvent(o),!o.defaultPrevented)throw e})},t="xbp-t2";await __OSL.all(["vue"]);const{unref:R,resolveComponent:$,createVNode:A,openBlock:k,createElementBlock:w}=__OSL.get("vue"),y=["data-tip"],O={__name:"App",setup(n){return(r,i)=>{const a=$("router-view");return k(),w("div",{class:"app-t1","data-tip":R(t)},[A(a)],8,y)}}},d=Object.assign({"./locale/en_US.js":()=>c(()=>import("./en_US-7703b89e.js"),[],import.meta.url),"./locale/zh_CN.js":()=>c(()=>import("./zh_CN-df2a6da3.js"),[],import.meta.url)});function f(n){n!=="en_US"&&(n="zh_CN");const r=`/${n}.js`;let i=null;for(const a in d)a.endsWith(r)&&(i=d[a]);return i?i():(console.error(`app load lang error :${n} is not find !`),f("en_US"))}const P=async n=>(await f(n)).default;let u=`/${t}/home`;const h=[{name:t,component:O,children:[{path:`/${t}/home`,component:()=>c(()=>import("./Home-f5684b5d.js"),["./Home-f5684b5d.js","./Home-8f3c2858.css"],import.meta.url)},{path:`/${t}/echart`,component:()=>c(()=>import("./Echart-6303ffa1.js"),["./Echart-6303ffa1.js","./debounce-cfb0e9ed.js","./Echart-9f71bb28.css"],import.meta.url)},{path:`/${t}/about`,name:"About",component:()=>c(()=>import("./About-0738b697.js"),["./About-0738b697.js","./About-0f4d6838.css"],import.meta.url),children:[{path:`/${t}/about`,component:()=>c(()=>import("./index-40539b1f.js"),[],import.meta.url)},{path:`/${t}/about/echarts`,component:()=>c(()=>import("./echarts-fc3482ec.js"),["./echarts-fc3482ec.js","./debounce-cfb0e9ed.js","./Echart-9f71bb28.css"],import.meta.url)}]}]},{path:`/${t}`,redirect:u},{path:`/${t}/`,redirect:u}];async function I(){return console.log("initApp curRoutes",h),{appName:t,defaultUrl:u,i18n:P,routes:h}}export{I as default,t as n};