import{n as o}from"./index-38cc7a10.js";await __OSL.all(["xbp/es/button","xbp/es/button/style","vue"]);const{unref:n,toDisplayString:a,createElementVNode:r,createTextVNode:s,resolveComponent:d,withCtx:c,createVNode:i,createStaticVNode:u,openBlock:p,createElementBlock:v}=__OSL.get("vue"),m={class:"home"},b={class:"t111"},x=u('<div class="box">1</div><div class="box">1</div><div class="box">1</div><div class="box">1</div><div class="box">1</div>',5),{Button:h}=__OSL.get("xbp/es/button"),f={components:{XButton:h}},V=Object.assign(f,{__name:"Home",setup(g){return(e,t)=>{const _=d("x-button");return p(),v("div",m,[s(a(n(o))+" - home ",1),r("div",b,a(e.$t("xt1.hh")),1),i(_,{onClick:t[0]||(t[0]=l=>e.$router.push({path:`/${n(o)}/about`}))},{default:c(()=>[s("goto about")]),_:1}),i(_,{onClick:t[1]||(t[1]=l=>e.$router.push({path:`/${n(o)}/echart`}))},{default:c(()=>[s("goto Echart")]),_:1}),x])}}});export{V as default};
