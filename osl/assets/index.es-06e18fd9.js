function h(r,e){return e===void 0&&(e=15),+parseFloat(Number(r).toPrecision(e))}function n(r){var e=r.toString().split(/[eE]/),t=(e[0].split(".")[1]||"").length-+(e[1]||0);return t>0?t:0}function u(r){if(r.toString().indexOf("e")===-1)return Number(r.toString().replace(".",""));var e=n(r);return e>0?h(Number(r)*Math.pow(10,e)):Number(r)}function v(r){f&&(r>Number.MAX_SAFE_INTEGER||r<Number.MIN_SAFE_INTEGER)&&console.warn(r+" is beyond boundary when transfer to integer, the results may not be accurate")}function s(r){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var a=e[0],d=e.slice(1);return d.reduce(function(o,l){return r(o,l)},a)}}var i=s(function(r,e){var t=u(r),a=u(e),d=n(r)+n(e),o=t*a;return v(o),o/Math.pow(10,d)}),b=s(function(r,e){var t=Math.pow(10,Math.max(n(r),n(e)));return(i(r,t)+i(e,t))/t}),g=s(function(r,e){var t=Math.pow(10,Math.max(n(r),n(e)));return(i(r,t)-i(e,t))/t}),c=s(function(r,e){var t=u(r),a=u(e);return v(t),v(a),i(t/a,h(Math.pow(10,n(e)-n(r))))});function p(r,e){var t=Math.pow(10,e),a=c(Math.round(Math.abs(i(r,t))),t);return r<0&&a!==0&&(a=i(a,-1)),a}var f=!0;function M(r){r===void 0&&(r=!0),f=r}var N={strip:h,plus:b,minus:g,times:i,divide:c,round:p,digitLength:n,float2Fixed:u,enableBoundaryChecking:M};export{c as d,N as i,g as m,b as p,i as t};
