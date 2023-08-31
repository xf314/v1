await __OSL.all(["vue"]);const{defineComponent : b,computed : g,openBlock : f,createElementBlock : w,normalizeClass : c,normalizeStyle : Y,createElementVNode : h,ref : I,resolveComponent : m,createBlock : V,withCtx : u,renderSlot : p,createTextVNode : ne,toDisplayString : se,inject : Pe,createVNode : S,createCommentVNode : j,toRefs : N,provide : Re,reactive : Z,createSlots : F,Fragment : ze,mergeProps : ie,onMounted : Ve,onUpdated : Ie,resolveDynamicComponent : Ne,renderList : Te,isRef : He,onUnmounted : Ze}=__OSL.get("vue");import{b as k,i as M,_ as $,T as re,s as le,g as ae,ae as Ee,af as Le,ao as pe,F as Ae,B as We,ap as Fe,aq as Ye,V as Ge,aj as Xe,y as he,o as q,t as K,ar as be}from"./index-f2648606.js";const qe=b({name:"IconInfoCircleFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:o}){const t=k("icon"),s=g(()=>[t,`${t}-info-circle-fill`,{[`${t}-spin`]:e.spin}]),i=g(()=>{const n={};return e.size&&(n.fontSize=M(e.size)?`${e.size}px`:e.size),e.rotate&&(n.transform=`rotate(${e.rotate}deg)`),n});return{cls:s,innerStyle:i,onClick:n=>{o("click",n)}}}}),Ke=["stroke-width","stroke-linecap","stroke-linejoin"],Ue=h("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z",fill:"currentColor",stroke:"none"},null,-1),Je=[Ue];function Qe(e,o,t,s,i,r){return f(),w("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:c(e.cls),style:Y(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:o[0]||(o[0]=(...n)=>e.onClick&&e.onClick(...n))},Je,14,Ke)}var U=$(qe,[["render",Qe]]);const Zo=Object.assign(U,{install:(e,o)=>{var t;const s=(t=o?.iconPrefix)!=null?t:"";e.component(s+U.name,U)}}),xe=b({name:"Popover",components:{Trigger:re},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},title:String,content:String,trigger:{type:[String,Array],default:"hover"},position:{type:String,default:"top"},contentClass:{type:[String,Array,Object]},contentStyle:{type:Object},arrowClass:{type:[String,Array,Object]},arrowStyle:{type:Object},popupContainer:{type:[String,Object]}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0},setup(e,{emit:o}){const t=k("popover"),s=I(e.defaultPopupVisible),i=g(()=>{var a;return(a=e.popupVisible)!=null?a:s.value}),r=a=>{s.value=a,o("update:popupVisible",a),o("popupVisibleChange",a)},n=g(()=>[`${t}-popup-content`,e.contentClass]),l=g(()=>[`${t}-popup-arrow`,e.arrowClass]);return{prefixCls:t,computedPopupVisible:i,contentCls:n,arrowCls:l,handlePopupVisibleChange:r}}});function eo(e,o,t,s,i,r){const n=m("trigger");return f(),V(n,{class:c(e.prefixCls),trigger:e.trigger,position:e.position,"popup-visible":e.computedPopupVisible,"popup-offset":10,"content-class":e.contentCls,"content-style":e.contentStyle,"arrow-class":e.arrowCls,"arrow-style":e.arrowStyle,"show-arrow":"","popup-container":e.popupContainer,"animation-name":"zoom-in-fade-out","auto-fit-transform-origin":"",onPopupVisibleChange:e.handlePopupVisibleChange},{content:u(()=>[h("div",{class:c(`${e.prefixCls}-title`)},[p(e.$slots,"title",{},()=>[ne(se(e.title),1)])],2),h("div",{class:c(`${e.prefixCls}-content`)},[p(e.$slots,"content",{},()=>[ne(se(e.content),1)])],2)]),default:u(()=>[p(e.$slots,"default")]),_:3},8,["class","trigger","position","popup-visible","content-class","content-style","arrow-class","arrow-style","popup-container","onPopupVisibleChange"])}var J=$(xe,[["render",eo]]);const $e=Object.assign(J,{install:(e,o)=>{le(e,o);const t=ae(o);e.component(t+J.name,J)}}),Eo=Object.freeze(Object.defineProperty({__proto__:null,Popover:$e,default:$e},Symbol.toStringTag,{value:"Module"})),oo=b({name:"IconMore",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:o}){const t=k("icon"),s=g(()=>[t,`${t}-more`,{[`${t}-spin`]:e.spin}]),i=g(()=>{const n={};return e.size&&(n.fontSize=M(e.size)?`${e.size}px`:e.size),e.rotate&&(n.transform=`rotate(${e.rotate}deg)`),n});return{cls:s,innerStyle:i,onClick:n=>{o("click",n)}}}}),to=["stroke-width","stroke-linecap","stroke-linejoin"],no=h("path",{d:"M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z",fill:"currentColor",stroke:"none"},null,-1),so=h("path",{d:"M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z"},null,-1),io=[no,so];function ro(e,o,t,s,i,r){return f(),w("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:c(e.cls),style:Y(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:o[0]||(o[0]=(...n)=>e.onClick&&e.onClick(...n))},io,14,to)}var Q=$(oo,[["render",ro]]);const lo=Object.assign(Q,{install:(e,o)=>{var t;const s=(t=o?.iconPrefix)!=null?t:"";e.component(s+Q.name,Q)}}),ue=Symbol("ArcoDropdown"),ao=b({name:"DropdownPanel",components:{Scrollbar:Ee,Empty:Le},props:{loading:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},bottomOffset:{type:Number,default:0},onScroll:{type:[Function,Array]},onReachBottom:{type:[Function,Array]}},emits:["scroll","reachBottom"],setup(e,{emit:o,slots:t}){const s=k("dropdown"),i=Pe(ue,{}),r=I(),n=d=>{const{scrollTop:y,scrollHeight:T,offsetHeight:G}=d.target;T-(y+G)<=e.bottomOffset&&o("reachBottom",d),o("scroll",d)},l=g(()=>{if(M(i.popupMaxHeight))return{maxHeight:`${i.popupMaxHeight}px`};if(!i.popupMaxHeight)return{maxHeight:"none",overflowY:"hidden"}}),a=g(()=>[s,{[`${s}-has-footer`]:!!t.footer}]);return{prefixCls:s,cls:a,style:l,wrapperRef:r,handleScroll:n}}});function po(e,o,t,s,i,r){const n=m("empty"),l=m("Scrollbar");return f(),w("div",{class:c(e.cls)},[e.isEmpty?(f(),w("div",{key:0,class:c(`${e.prefixCls}-empty`)},[p(e.$slots,"empty",{},()=>[S(n)])],2)):j("v-if",!0),S(l,{ref:"wrapperRef",class:c(`${e.prefixCls}-list-wrapper`),style:Y(e.style),onScroll:e.handleScroll},{default:u(()=>[h("ul",{class:c(`${e.prefixCls}-list`)},[p(e.$slots,"default")],2)]),_:3},8,["class","style","onScroll"]),e.$slots.footer&&!e.isEmpty?(f(),w("div",{key:1,class:c(`${e.prefixCls}-footer`)},[p(e.$slots,"footer")],2)):j("v-if",!0)],2)}var Oe=$(ao,[["render",po]]);const uo=b({name:"Dropdown",components:{Trigger:re,DropdownPanel:Oe},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"bottom"},popupContainer:{type:[String,Object]},popupMaxHeight:{type:[Boolean,Number],default:!0},hideOnSelect:{type:Boolean,default:!0}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,select:(e,o)=>!0},setup(e,{emit:o}){const{defaultPopupVisible:t,popupVisible:s,popupMaxHeight:i}=N(e),r=k("dropdown"),{computedPopupVisible:n,handlePopupVisibleChange:l}=pe({defaultPopupVisible:t,popupVisible:s,emit:o});return Re(ue,Z({popupMaxHeight:i,onOptionClick:(d,y)=>{o("select",d,y),e.hideOnSelect&&l(!1)}})),{prefixCls:r,computedPopupVisible:n,handlePopupVisibleChange:l}}});function co(e,o,t,s,i,r){const n=m("DropdownPanel"),l=m("Trigger");return f(),V(l,{"popup-visible":e.computedPopupVisible,"animation-name":"slide-dynamic-origin","auto-fit-transform-origin":"",trigger:e.trigger,position:e.position,"popup-offset":4,"popup-container":e.popupContainer,"opened-class":`${e.prefixCls}-open`,onPopupVisibleChange:e.handlePopupVisibleChange},{content:u(()=>[S(n,null,F({default:u(()=>[p(e.$slots,"content")]),_:2},[e.$slots.footer?{name:"footer",fn:u(()=>[p(e.$slots,"footer")])}:void 0]),1024)]),default:u(()=>[p(e.$slots,"default")]),_:3},8,["popup-visible","trigger","position","popup-container","opened-class","onPopupVisibleChange"])}var E=$(uo,[["render",co]]);const fo=b({name:"Doption",props:{value:{type:[String,Number,Object]},disabled:{type:Boolean,default:!1},active:Boolean,uninjectContext:Boolean},emits:{click:e=>!0},setup(e,{emit:o}){const t=k("dropdown-option"),s=I(),i=g(()=>{var a,d,y;return(y=(d=e.value)!=null?d:(a=s.value)==null?void 0:a.textContent)!=null?y:void 0}),r=e.uninjectContext?void 0:Pe(ue,void 0),n=a=>{e.disabled||(o("click",a),r?.onOptionClick(i.value,a))},l=g(()=>[t,{[`${t}-disabled`]:e.disabled,[`${t}-active`]:e.active}]);return{prefixCls:t,cls:l,liRef:s,handleClick:n}}});function go(e,o,t,s,i,r){return f(),w("li",{ref:"liRef",class:c([e.cls,{[`${e.prefixCls}-has-suffix`]:!!e.$slots.suffix}]),onClick:o[0]||(o[0]=(...n)=>e.handleClick&&e.handleClick(...n))},[e.$slots.icon?(f(),w("span",{key:0,class:c(`${e.prefixCls}-icon`)},[p(e.$slots,"icon")],2)):j("v-if",!0),h("span",{class:c(`${e.prefixCls}-content`)},[p(e.$slots,"default")],2),e.$slots.suffix?(f(),w("span",{key:1,class:c(`${e.prefixCls}-suffix`)},[p(e.$slots,"suffix")],2)):j("v-if",!0)],2)}var R=$(fo,[["render",go]]);const mo=b({name:"Dgroup",props:{title:String},setup(){return{prefixCls:k("dropdown-group")}}});function vo(e,o,t,s,i,r){return f(),w(ze,null,[h("li",{class:c(`${e.prefixCls}-title`)},[p(e.$slots,"title",{},()=>[ne(se(e.title),1)])],2),p(e.$slots,"default")],64)}var L=$(mo,[["render",vo]]);const ho=b({name:"Dsubmenu",components:{Trigger:re,DropdownPanel:Oe,DropdownOption:R,IconRight:Ae},props:{value:{type:[String,Number]},disabled:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"rt"},popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},optionProps:{type:Object}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0},setup(e,{emit:o}){const{defaultPopupVisible:t,popupVisible:s}=N(e),i=k("dropdown"),{computedPopupVisible:r,handlePopupVisibleChange:n}=pe({defaultPopupVisible:t,popupVisible:s,emit:o});return{prefixCls:i,computedPopupVisible:r,handlePopupVisibleChange:n}}});function bo(e,o,t,s,i,r){const n=m("IconRight"),l=m("dropdown-option"),a=m("dropdown-panel"),d=m("Trigger");return f(),V(d,{"popup-visible":e.computedPopupVisible,trigger:e.trigger,position:e.position,disabled:e.disabled,"popup-offset":4,onPopupVisibleChange:e.handlePopupVisibleChange},{content:u(()=>[S(a,{class:c(`${e.prefixCls}-submenu`)},F({default:u(()=>[p(e.$slots,"content")]),_:2},[e.$slots.footer?{name:"footer",fn:u(()=>[p(e.$slots,"footer")])}:void 0]),1032,["class"])]),default:u(()=>[S(l,ie(e.optionProps,{active:e.computedPopupVisible,"uninject-context":""}),F({suffix:u(()=>[p(e.$slots,"suffix",{},()=>[S(n)])]),default:u(()=>[p(e.$slots,"default")]),_:2},[e.$slots.icon?{name:"icon",fn:u(()=>[p(e.$slots,"icon")])}:void 0]),1040,["active"])]),_:3},8,["popup-visible","trigger","position","disabled","onPopupVisibleChange"])}var A=$(ho,[["render",bo]]);const $o=b({name:"DropdownButton",components:{IconMore:lo,Button:We,ButtonGroup:Fe,Dropdown:E},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"br"},popupContainer:{type:[String,Object]},disabled:{type:Boolean,default:!1},type:{type:String},size:{type:String},buttonProps:{type:Object},hideOnSelect:{type:Boolean,default:!0}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,click:e=>!0,select:(e,o)=>!0},setup(e,{emit:o}){const{defaultPopupVisible:t,popupVisible:s}=N(e),i=k("dropdown"),{computedPopupVisible:r,handlePopupVisibleChange:n}=pe({defaultPopupVisible:t,popupVisible:s,emit:o});return{prefixCls:i,computedPopupVisible:r,handleClick:d=>{o("click",d)},handleSelect:(d,y)=>{o("select",d,y)},handlePopupVisibleChange:n}}});function yo(e,o,t,s,i,r){const n=m("Button"),l=m("IconMore"),a=m("Dropdown"),d=m("ButtonGroup");return f(),V(d,null,{default:u(()=>[S(n,ie({size:e.size,type:e.type,disabled:e.disabled},e.buttonProps,{onClick:e.handleClick}),{default:u(()=>[p(e.$slots,"default")]),_:3},16,["size","type","disabled","onClick"]),S(a,{"popup-visible":e.computedPopupVisible,trigger:e.trigger,position:e.position,"popup-container":e.popupContainer,"hide-on-select":e.hideOnSelect,onSelect:e.handleSelect,onPopupVisibleChange:e.handlePopupVisibleChange},{content:u(()=>[p(e.$slots,"content")]),default:u(()=>[S(n,{size:e.size,type:e.type,disabled:e.disabled},{icon:u(()=>[p(e.$slots,"icon",{popupVisible:e.computedPopupVisible},()=>[S(l)])]),_:3},8,["size","type","disabled"])]),_:3},8,["popup-visible","trigger","position","popup-container","hide-on-select","onSelect","onPopupVisibleChange"])]),_:3})}var W=$($o,[["render",yo]]);const ye=Object.assign(E,{Option:R,Group:L,Submenu:A,Button:W,install:(e,o)=>{le(e,o);const t=ae(o);e.component(t+E.name,E),e.component(t+R.name,R),e.component(t+L.name,L),e.component(t+A.name,A),e.component(t+W.name,W)}}),Lo=Object.freeze(Object.defineProperty({__proto__:null,Dgroup:L,Doption:R,Dropdown:ye,DropdownButton:W,Dsubmenu:A,default:ye},Symbol.toStringTag,{value:"Module"})),Ao=e=>{const o={},t=I([]),s=()=>{if(o.value){const i=Ye(o.value,e);(i.length!==t.value.length||i.toString()!==t.value.toString())&&(t.value=i)}};return Ve(()=>s()),Ie(()=>s()),{children:o,components:t}},Wo=Symbol("LayoutSiderInjectionKey"),Fo=Symbol("SiderInjectionKey"),Co=b({name:"IconDragDot",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:o}){const t=k("icon"),s=g(()=>[t,`${t}-drag-dot`,{[`${t}-spin`]:e.spin}]),i=g(()=>{const n={};return e.size&&(n.fontSize=M(e.size)?`${e.size}px`:e.size),e.rotate&&(n.transform=`rotate(${e.rotate}deg)`),n});return{cls:s,innerStyle:i,onClick:n=>{o("click",n)}}}}),wo=["stroke-width","stroke-linecap","stroke-linejoin"],ko=h("path",{d:"M40 17v2h-2v-2h2ZM25 17v2h-2v-2h2ZM10 17v2H8v-2h2ZM40 29v2h-2v-2h2ZM25 29v2h-2v-2h2ZM10 29v2H8v-2h2Z",fill:"currentColor",stroke:"none"},null,-1),So=h("path",{d:"M40 17v2h-2v-2h2ZM25 17v2h-2v-2h2ZM10 17v2H8v-2h2ZM40 29v2h-2v-2h2ZM25 29v2h-2v-2h2ZM10 29v2H8v-2h2Z"},null,-1),Po=[ko,So];function zo(e,o,t,s,i,r){return f(),w("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:c(e.cls),style:Y(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:o[0]||(o[0]=(...n)=>e.onClick&&e.onClick(...n))},Po,14,wo)}var x=$(Co,[["render",zo]]);const Vo=Object.assign(x,{install:(e,o)=>{var t;const s=(t=o?.iconPrefix)!=null?t:"";e.component(s+x.name,x)}});var Oo=b({name:"ResizeTrigger",components:{ResizeObserver:Ge,IconDragDot:Vo,IconDragDotVertical:Xe},props:{prefixCls:{type:String,required:!0},direction:{type:String,default:"horizontal"}},emits:["resize"],setup(e,{emit:o}){const{direction:t,prefixCls:s}=N(e),i=g(()=>t?.value==="horizontal");return{classNames:g(()=>[s.value,{[`${s.value}-horizontal`]:i.value,[`${s.value}-vertical`]:!i.value}]),onResize:l=>{o("resize",l)},isHorizontal:i}}});function Bo(e,o,t,s,i,r){const n=m("IconDragDot"),l=m("IconDragDotVertical"),a=m("ResizeObserver");return f(),V(a,{onResize:e.onResize},{default:u(()=>[h("div",{class:c(e.classNames)},[j(" @slot 自定义内容 "),p(e.$slots,"default",{},()=>[h("div",{class:c(`${e.prefixCls}-icon-wrapper`)},[j(" @slot 自定义 icon "),p(e.$slots,"icon",{},()=>[e.isHorizontal?(f(),V(n,{key:0,class:c(`${e.prefixCls}-icon`)},null,8,["class"])):(f(),V(l,{key:1,class:c(`${e.prefixCls}-icon`)},null,8,["class"]))])],2)])],2)]),_:3},8,["onResize"])}var _o=$(Oo,[["render",Bo]]),jo=Object.defineProperty,Ce=Object.getOwnPropertySymbols,Do=Object.prototype.hasOwnProperty,Mo=Object.prototype.propertyIsEnumerable,we=(e,o,t)=>o in e?jo(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,ee=(e,o)=>{for(var t in o||(o={}))Do.call(o,t)&&we(e,t,o[t]);if(Ce)for(var t of Ce(o))Mo.call(o,t)&&we(e,t,o[t]);return e};const Be="left",_e="right",ce="top",de="bottom",Ro=[Be,_e,ce,de];function ke(e,o){if(e===0)return 0;const t=e-o;return t<=0?0:t}function oe(e){return[ce,de].indexOf(e)>-1}const Io=b({name:"ResizeBox",components:{ResizeTrigger:_o},inheritAttrs:!1,props:{width:{type:Number},height:{type:Number},component:{type:String,default:"div"},directions:{type:Array,default:()=>["right"]}},emits:{"update:width":e=>!0,"update:height":e=>!0,movingStart:e=>!0,moving:(e,o)=>!0,movingEnd:e=>!0},setup(e,{emit:o}){const{height:t,width:s,directions:i}=N(e),[r,n]=he(null,Z({value:s})),[l,a]=he(null,Z({value:t})),d=I(),y=Z({}),T=k("resizebox"),G=g(()=>[T]),fe=g(()=>ee(ee(ee({},M(r.value)?{width:`${r.value}px`}:{}),M(l.value)?{height:`${l.value}px`}:{}),y)),je=g(()=>i.value.filter(v=>Ro.includes(v))),C={direction:"",startPageX:0,startPageY:0,startWidth:0,startHeight:0,moving:!1,padding:{left:0,right:0,top:0,bottom:0}};function ge(v){if(!C.moving)return;const{startPageX:_,startPageY:D,startWidth:O,startHeight:B,direction:X}=C;let P=O,z=B;const me=v.pageX-_,ve=v.pageY-D;switch(X){case Be:P=O-me,n(P),o("update:width",P);break;case _e:P=O+me,n(P),o("update:width",P);break;case ce:z=B-ve,a(z),o("update:height",z);break;case de:z=B+ve,a(z),o("update:height",z);break}o("moving",{width:P,height:z},v)}function H(v){C.moving=!1,K(window,"mousemove",ge),K(window,"mouseup",H),K(window,"contextmenu",H),document.body.style.cursor="default",o("movingEnd",v)}function De(v,_){var D,O;o("movingStart",_),C.moving=!0,C.startPageX=_.pageX,C.startPageY=_.pageY,C.direction=v;const{top:B,left:X,right:P,bottom:z}=C.padding;C.startWidth=ke(((D=d.value)==null?void 0:D.clientWidth)||0,X+P),C.startHeight=ke(((O=d.value)==null?void 0:O.clientHeight)||0,B+z),q(window,"mousemove",ge),q(window,"mouseup",H),q(window,"contextmenu",H),document.body.style.cursor=oe(v)?"row-resize":"col-resize"}function Me(v,_){const{width:D,height:O}=_.contentRect,B=oe(v)?O:D;C.padding[v]=B,y[`padding-${v}`]=`${B}px`}return{prefixCls:T,classNames:G,styles:fe,wrapperRef:d,onMoveStart:De,isHorizontal:oe,allowDirections:je,onTiggerResize:Me}}});function No(e,o,t,s,i,r){const n=m("ResizeTrigger");return f(),V(Ne(e.component),ie({ref:"wrapperRef",class:e.classNames},e.$attrs,{style:e.styles}),{default:u(()=>[p(e.$slots,"default"),(f(!0),w(ze,null,Te(e.allowDirections,l=>(f(),V(n,{key:l,"prefix-cls":`${e.prefixCls}-trigger`,class:c(`${e.prefixCls}-direction-${l}`),direction:e.isHorizontal(l)?"horizontal":"vertical",onMousedown:a=>{e.onMoveStart(l,a)},onResize:a=>{e.onTiggerResize(l,a)}},F({default:u(()=>[e.$slots["resize-trigger"]?p(e.$slots,"resize-trigger",{key:0,direction:l}):j("v-if",!0)]),_:2},[e.$slots["resize-trigger-icon"]?{name:"icon",fn:u(()=>[p(e.$slots,"resize-trigger-icon",{direction:l})])}:void 0]),1032,["prefix-cls","class","direction","onMousedown","onResize"]))),128))]),_:3},16,["class","style"])}var te=$(Io,[["render",No]]);const Se=Object.assign(te,{install:(e,o)=>{le(e,o);const t=ae(o);e.component(t+te.name,te)}}),Yo=Object.freeze(Object.defineProperty({__proto__:null,ResizeBox:Se,default:Se},Symbol.toStringTag,{value:"Module"}));function Go(e,o){const t=g(()=>He(e)?e.value:e);let s="";Ve(()=>{s=be.subscribe((i,r)=>{t.value&&(!r||r===t.value)&&o(!!i[t.value])})}),Ze(()=>{s&&be.unsubscribe(s)})}export{ye as D,Zo as I,Wo as L,$e as P,Se as R,Fo as S,Ao as a,Eo as b,Lo as c,lo as d,R as e,_o as f,Yo as m,Go as u};