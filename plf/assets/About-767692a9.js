import{_ as v}from"./index-403bd5c7.js";await __OSL.all(["xbp/es/color-picker","xbp/es/color-picker/style","vue"]);const{createElementVNode:e,toDisplayString:l,resolveComponent:i,createVNode:m,vModelText:n,withDirectives:p,createTextVNode:g,createStaticVNode:f,openBlock:h,createElementBlock:x,pushScopeId:k,popScopeId:b}=__OSL.get("vue"),o=r=>(k("data-v-fc9e73ca"),r=r(),b(),r),V={class:"about"},S=o(()=>e("h1",null,"about",-1)),q=o(()=>e("h2",null,"h5 原生标签",-1)),y={class:"box"},N=o(()=>e("h3",null,"1 点击选择颜色",-1)),I=o(()=>e("pre",null,l('<input type="color" v-model="color" />'),-1)),O={class:"color-box"},w=o(()=>e("h3",null,"1.2 日期",-1)),B=o(()=>e("pre",null,l('<input type="date" v-model="date" />'),-1)),C=o(()=>e("h3",null,"1.3 range 范围选择",-1)),D=o(()=>e("pre",null,l('<input type="range" v-model="range" />'),-1)),E=f('<div class="box" data-v-fc9e73ca><h3 data-v-fc9e73ca>2 使用 &lt;meter /&gt; 标签测量给定范围内的数据。</h3><pre data-v-fc9e73ca>&lt;p&gt;指定最大10 占用2&lt;/p&gt;</pre><pre data-v-fc9e73ca>&lt;meter value=&quot;0.7&quot;&gt;70%&lt;/meter&gt;</pre><pre data-v-fc9e73ca>&lt;p&gt;直接占用总长70%&lt;/p&gt;</pre><pre data-v-fc9e73ca>&lt;meter value=&quot;2&quot; min=&quot;0&quot; max=&quot;10&quot;&gt;2/10&lt;/meter&gt;</pre><p data-v-fc9e73ca>指定最大10 占用2</p><meter value="0" min="-10" max="10" data-v-fc9e73ca></meter><p data-v-fc9e73ca>直接占用总长70%</p><meter value="0.7" data-v-fc9e73ca></meter></div><div class="box" data-v-fc9e73ca><h3 data-v-fc9e73ca>3 使用 &lt;progress /&gt; 进度条</h3><pre data-v-fc9e73ca>&lt;progress value=&quot;22&quot; max=&quot;100&quot;&gt;&lt;/progress&gt;</pre><progress value="22" max="100" data-v-fc9e73ca></progress></div><div class="box" data-v-fc9e73ca><h3 data-v-fc9e73ca>4 使用 &lt;mark&gt;mark文本&lt;/mark&gt; 标签定义带有记号的文本</h3> 普通文本 <mark data-v-fc9e73ca>mark文本</mark></div><div class="box" data-v-fc9e73ca></div>',4),{ref:u}=__OSL.get("vue"),{ColorPicker:L}=__OSL.get("xbp/es/color-picker"),T={components:{XColorPicker:L}},U=Object.assign(T,{__name:"About",setup(r){const c=u(""),s=u(null),d=u(null);return(A,t)=>{const _=i("x-color-picker");return h(),x("div",V,[S,q,e("div",y,[N,I,e("div",O,[m(_,{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=a=>c.value=a)},null,8,["modelValue"]),g(),p(e("input",{type:"color","onUpdate:modelValue":t[1]||(t[1]=a=>c.value=a)},null,512),[[n,c.value]])]),e("h4",null,l(c.value),1),w,B,p(e("input",{type:"date","onUpdate:modelValue":t[2]||(t[2]=a=>s.value=a)},null,512),[[n,s.value]]),e("h4",null,l(s.value),1),C,D,p(e("input",{type:"range","onUpdate:modelValue":t[3]||(t[3]=a=>d.value=a)},null,512),[[n,d.value]]),e("h4",null,l(d.value),1)]),E])}}}),P=v(U,[["__scopeId","data-v-fc9e73ca"]]);export{P as default};
