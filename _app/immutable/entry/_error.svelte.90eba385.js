import{S as g,i as v,s as b,k as E,q as m,l as $,m as q,r as p,h as f,b as x,E as u,u as h,F as d,G as S}from"../chunks/index.52f6bd99.js";import{p as k}from"../chunks/stores.831372e9.js";function y(n){var c;let e,s=n[0].status+"",r,o,l=((c=n[0].error)==null?void 0:c.message)+"",i;return{c(){e=E("h1"),r=m(s),o=m(": "),i=m(l)},l(a){e=$(a,"H1",{});var t=q(e);r=p(t,s),o=p(t,": "),i=p(t,l),t.forEach(f)},m(a,t){x(a,e,t),u(e,r),u(e,o),u(e,i)},p(a,[t]){var _;t&1&&s!==(s=a[0].status+"")&&h(r,s),t&1&&l!==(l=((_=a[0].error)==null?void 0:_.message)+"")&&h(i,l)},i:d,o:d,d(a){a&&f(e)}}}function C(n,e,s){let r;return S(n,k,o=>s(0,r=o)),[r]}class H extends g{constructor(e){super(),v(this,e,C,y,b,{})}}export{H as default};