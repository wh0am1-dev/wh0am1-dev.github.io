import{n as b,F as q,G as k,s as w,H as z}from"./index.c5549ec8.js";const u=[];function A(t,o){return{subscribe:T(t,o).subscribe}}function T(t,o=b){let r;const n=new Set;function a(e){if(w(t,e)&&(t=e,r)){const i=!u.length;for(const s of n)s[1](),u.push(s,t);if(i){for(let s=0;s<u.length;s+=2)u[s][0](u[s+1]);u.length=0}}}function f(e){a(e(t))}function l(e,i=b){const s=[e,i];return n.add(s),n.size===1&&(r=o(a)||b),e(t),()=>{n.delete(s),n.size===0&&r&&(r(),r=null)}}return{set:a,update:f,subscribe:l}}function F(t,o,r){const n=!Array.isArray(t),a=n?[t]:t,f=o.length<2;return A(r,l=>{let e=!1;const i=[];let s=0,_=b;const p=()=>{if(s)return;_();const c=o(n?i[0]:i,l);f?l(c):_=z(c)?c:b},y=a.map((c,d)=>q(c,m=>{i[d]=m,s&=~(1<<d),e&&p()},()=>{s|=1<<d}));return e=!0,p(),function(){k(y),_(),e=!1}})}var g;const v=((g=globalThis.__sveltekit_t8f7v4)==null?void 0:g.base)??"";var h;const G=((h=globalThis.__sveltekit_t8f7v4)==null?void 0:h.assets)??v;export{G as a,v as b,F as d,T as w};
