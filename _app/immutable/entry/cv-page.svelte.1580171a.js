import{S as le,i as se,s as re,r as Y,v as Z,w as y,p as K,q as O,x as ee,e as $,y as P,t as G,c as g,a as I,z as V,b as z,d as u,A as X,l as v,f as H,g as _,h as W,B as te,C as de,D as ie,j as $e,E as ce}from"../chunks/index.c5549ec8.js";import{i as ge}from"../chunks/Navbar.svelte_svelte_type_style_lang.293b9cb7.js";import{C as ve}from"../chunks/Card.d5a5897c.js";import"../chunks/paths.9c2f85a1.js";function fe(r,e,l){const s=r.slice();return s[1]=e[l],s}function ue(r){let e,l=r[1]+"",s,n;return{c(){e=$("span"),s=G(l),n=P(),this.h()},l(o){e=g(o,"SPAN",{class:!0});var c=I(e);s=z(c,l),n=V(c),c.forEach(u),this.h()},h(){v(e,"class","rounded-full border border-stone-300 px-3 py-0.5 text-stone-800 dark:border-stone-700 dark:text-stone-100")},m(o,c){H(o,e,c),_(e,s),_(e,n)},p(o,c){c&1&&l!==(l=o[1]+"")&&W(s,l)},d(o){o&&u(e)}}}function ke(r){let e,l,s,n,o,c,d=r[0].company+"",B,J,k,q=r[0].position+"",S,N,w,M=r[0].from+"",A,R,E=r[0].to+"",T,j,m,C=r[0].description+"",L,D,p=r[0].tech,x=[];for(let h=0;h<p.length;h+=1)x[h]=ue(fe(r,p,h));return{c(){e=$("div"),l=$("img"),o=P(),c=$("h3"),B=G(d),J=P(),k=$("h5"),S=G(q),N=P(),w=$("p"),A=G(M),R=G(" - "),T=G(E),j=P(),m=$("p"),L=P(),D=$("div");for(let h=0;h<x.length;h+=1)x[h].c();this.h()},l(h){e=g(h,"DIV",{class:!0});var a=I(e);l=g(a,"IMG",{src:!0,alt:!0,class:!0}),o=V(a),c=g(a,"H3",{class:!0});var b=I(c);B=z(b,d),b.forEach(u),J=V(a),k=g(a,"H5",{class:!0});var t=I(k);S=z(t,q),t.forEach(u),N=V(a),w=g(a,"P",{class:!0});var f=I(w);A=z(f,M),R=z(f," - "),T=z(f,E),f.forEach(u),j=V(a),m=g(a,"P",{class:!0});var i=I(m);i.forEach(u),a.forEach(u),L=V(h),D=g(h,"DIV",{class:!0});var F=I(D);for(let U=0;U<x.length;U+=1)x[U].l(F);F.forEach(u),this.h()},h(){X(l.src,s=r[0].logo)||v(l,"src",s),v(l,"alt",n=r[0].company),v(l,"class","aspect-square w-16 rounded-md object-cover md:w-24 xl:w-32"),v(c,"class","text-stone-800 dark:text-stone-100"),v(k,"class","text-stone-800 dark:text-stone-100"),v(w,"class","text-stone-500 dark:text-stone-400"),v(m,"class","mt-1 leading-none text-stone-500 dark:text-stone-400"),v(e,"class","flex flex-col gap-2 xl:gap-4"),v(D,"class","mt-4 flex flex-wrap gap-2")},m(h,a){H(h,e,a),_(e,l),_(e,o),_(e,c),_(c,B),_(e,J),_(e,k),_(k,S),_(e,N),_(e,w),_(w,A),_(w,R),_(w,T),_(e,j),_(e,m),m.innerHTML=C,H(h,L,a),H(h,D,a);for(let b=0;b<x.length;b+=1)x[b]&&x[b].m(D,null)},p(h,a){if(a&1&&!X(l.src,s=h[0].logo)&&v(l,"src",s),a&1&&n!==(n=h[0].company)&&v(l,"alt",n),a&1&&d!==(d=h[0].company+"")&&W(B,d),a&1&&q!==(q=h[0].position+"")&&W(S,q),a&1&&M!==(M=h[0].from+"")&&W(A,M),a&1&&E!==(E=h[0].to+"")&&W(T,E),a&1&&C!==(C=h[0].description+"")&&(m.innerHTML=C),a&1){p=h[0].tech;let b;for(b=0;b<p.length;b+=1){const t=fe(h,p,b);x[b]?x[b].p(t,a):(x[b]=ue(t),x[b].c(),x[b].m(D,null))}for(;b<x.length;b+=1)x[b].d(1);x.length=p.length}},d(h){h&&u(e),h&&u(L),h&&u(D),te(x,h)}}}function we(r){let e,l;return e=new ve({props:{href:r[0].link,$$slots:{default:[ke]},$$scope:{ctx:r}}}),{c(){Y(e.$$.fragment)},l(s){Z(e.$$.fragment,s)},m(s,n){y(e,s,n),l=!0},p(s,[n]){const o={};n&1&&(o.href=s[0].link),n&17&&(o.$$scope={dirty:n,ctx:s}),e.$set(o)},i(s){l||(K(e.$$.fragment,s),l=!0)},o(s){O(e.$$.fragment,s),l=!1},d(s){ee(e,s)}}}function be(r,e,l){let{job:s}=e;return r.$$set=n=>{"job"in n&&l(0,s=n.job)},[s]}class Ee extends le{constructor(e){super(),se(this,e,be,we,re,{job:0})}}function je(r){let e,l,s,n,o,c,d=r[0].title+"",B,J,k,q=r[0].when+"",S,N,w,M=r[0].where+"",A,R,E,T=r[0].description+"";return{c(){e=$("div"),l=$("img"),o=P(),c=$("h3"),B=G(d),J=P(),k=$("p"),S=G(q),N=P(),w=$("p"),A=G(M),R=P(),E=$("p"),this.h()},l(j){e=g(j,"DIV",{class:!0});var m=I(e);l=g(m,"IMG",{src:!0,alt:!0,class:!0}),o=V(m),c=g(m,"H3",{class:!0});var C=I(c);B=z(C,d),C.forEach(u),J=V(m),k=g(m,"P",{class:!0});var L=I(k);S=z(L,q),L.forEach(u),N=V(m),w=g(m,"P",{class:!0});var D=I(w);A=z(D,M),D.forEach(u),R=V(m),E=g(m,"P",{class:!0});var p=I(E);p.forEach(u),m.forEach(u),this.h()},h(){X(l.src,s=r[0].img)||v(l,"src",s),v(l,"alt",n=r[0].title),v(l,"class","aspect-square w-16 rounded-md bg-stone-900 object-cover md:w-24 xl:w-32"),v(c,"class","text-stone-800 dark:text-stone-100"),v(k,"class","text-stone-500 dark:text-stone-400"),v(w,"class","text-stone-500 dark:text-stone-400"),v(E,"class","mt-1 leading-none text-stone-500 dark:text-stone-400"),v(e,"class","flex flex-col gap-2 xl:gap-4")},m(j,m){H(j,e,m),_(e,l),_(e,o),_(e,c),_(c,B),_(e,J),_(e,k),_(k,S),_(e,N),_(e,w),_(w,A),_(e,R),_(e,E),E.innerHTML=T},p(j,m){m&1&&!X(l.src,s=j[0].img)&&v(l,"src",s),m&1&&n!==(n=j[0].title)&&v(l,"alt",n),m&1&&d!==(d=j[0].title+"")&&W(B,d),m&1&&q!==(q=j[0].when+"")&&W(S,q),m&1&&M!==(M=j[0].where+"")&&W(A,M),m&1&&T!==(T=j[0].description+"")&&(E.innerHTML=T)},d(j){j&&u(e)}}}function He(r){let e,l;return e=new ve({props:{href:r[0].link,$$slots:{default:[je]},$$scope:{ctx:r}}}),{c(){Y(e.$$.fragment)},l(s){Z(e.$$.fragment,s)},m(s,n){y(e,s,n),l=!0},p(s,[n]){const o={};n&1&&(o.href=s[0].link),n&3&&(o.$$scope={dirty:n,ctx:s}),e.$set(o)},i(s){l||(K(e.$$.fragment,s),l=!0)},o(s){O(e.$$.fragment,s),l=!1},d(s){ee(e,s)}}}function Ie(r,e,l){let{workshop:s}=e;return r.$$set=n=>{"workshop"in n&&l(0,s=n.workshop)},[s]}class De extends le{constructor(e){super(),se(this,e,Ie,He,re,{workshop:0})}}function he(r,e,l){const s=r.slice();return s[1]=e[l],s}function _e(r,e,l){const s=r.slice();return s[4]=e[l],s}function pe(r){let e,l,s,n;return l=new Ee({props:{job:r[4]}}),{c(){e=$("div"),Y(l.$$.fragment),s=P(),this.h()},l(o){e=g(o,"DIV",{class:!0});var c=I(e);Z(l.$$.fragment,c),s=V(c),c.forEach(u),this.h()},h(){v(e,"class","basis-full p-4 lg:basis-1/2")},m(o,c){H(o,e,c),y(l,e,null),_(e,s),n=!0},p(o,c){const d={};c&1&&(d.job=o[4]),l.$set(d)},i(o){n||(K(l.$$.fragment,o),n=!0)},o(o){O(l.$$.fragment,o),n=!1},d(o){o&&u(e),ee(l)}}}function me(r){let e,l,s,n;return l=new De({props:{workshop:r[1]}}),{c(){e=$("div"),Y(l.$$.fragment),s=P(),this.h()},l(o){e=g(o,"DIV",{class:!0});var c=I(e);Z(l.$$.fragment,c),s=V(c),c.forEach(u),this.h()},h(){v(e,"class","basis-full p-4 lg:basis-1/2")},m(o,c){H(o,e,c),y(l,e,null),_(e,s),n=!0},p(o,c){const d={};c&1&&(d.workshop=o[1]),l.$set(d)},i(o){n||(K(l.$$.fragment,o),n=!0)},o(o){O(l.$$.fragment,o),n=!1},d(o){o&&u(e),ee(l)}}}function xe(r){let e,l,s=r[0].cv.title+"",n,o,c,d=r[0].cv.description+"",B,J,k,q,S,N,w,M=r[0].cv.workshops.title+"",A,R,E,T=r[0].cv.workshops.description+"",j,m,C,L,D=r[0].cv.jobs,p=[];for(let t=0;t<D.length;t+=1)p[t]=pe(_e(r,D,t));const x=t=>O(p[t],1,1,()=>{p[t]=null});let h=r[0].cv.workshops.list,a=[];for(let t=0;t<h.length;t+=1)a[t]=me(he(r,h,t));const b=t=>O(a[t],1,1,()=>{a[t]=null});return{c(){e=P(),l=$("h1"),n=G(s),o=P(),c=$("h5"),B=G(d),J=P(),k=$("div");for(let t=0;t<p.length;t+=1)p[t].c();q=P(),S=$("hr"),N=P(),w=$("h1"),A=G(M),R=P(),E=$("h5"),j=G(T),m=P(),C=$("div");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){de("svelte-87db9u",document.head).forEach(u),e=V(t),l=g(t,"H1",{});var i=I(l);n=z(i,s),i.forEach(u),o=V(t),c=g(t,"H5",{class:!0});var F=I(c);B=z(F,d),F.forEach(u),J=V(t),k=g(t,"DIV",{class:!0});var U=I(k);for(let Q=0;Q<p.length;Q+=1)p[Q].l(U);U.forEach(u),q=V(t),S=g(t,"HR",{}),N=V(t),w=g(t,"H1",{});var oe=I(w);A=z(oe,M),oe.forEach(u),R=V(t),E=g(t,"H5",{class:!0});var ae=I(E);j=z(ae,T),ae.forEach(u),m=V(t),C=g(t,"DIV",{class:!0});var ne=I(C);for(let Q=0;Q<a.length;Q+=1)a[Q].l(ne);ne.forEach(u),this.h()},h(){document.title="carlos aguilar / curriculum",v(c,"class","text-center"),v(k,"class","mt-16 flex flex-wrap items-stretch"),v(E,"class","text-center"),v(C,"class","mt-16 flex flex-wrap items-stretch")},m(t,f){H(t,e,f),H(t,l,f),_(l,n),H(t,o,f),H(t,c,f),_(c,B),H(t,J,f),H(t,k,f);for(let i=0;i<p.length;i+=1)p[i]&&p[i].m(k,null);H(t,q,f),H(t,S,f),H(t,N,f),H(t,w,f),_(w,A),H(t,R,f),H(t,E,f),_(E,j),H(t,m,f),H(t,C,f);for(let i=0;i<a.length;i+=1)a[i]&&a[i].m(C,null);L=!0},p(t,[f]){if((!L||f&1)&&s!==(s=t[0].cv.title+"")&&W(n,s),(!L||f&1)&&d!==(d=t[0].cv.description+"")&&W(B,d),f&1){D=t[0].cv.jobs;let i;for(i=0;i<D.length;i+=1){const F=_e(t,D,i);p[i]?(p[i].p(F,f),K(p[i],1)):(p[i]=pe(F),p[i].c(),K(p[i],1),p[i].m(k,null))}for(ce(),i=D.length;i<p.length;i+=1)x(i);ie()}if((!L||f&1)&&M!==(M=t[0].cv.workshops.title+"")&&W(A,M),(!L||f&1)&&T!==(T=t[0].cv.workshops.description+"")&&W(j,T),f&1){h=t[0].cv.workshops.list;let i;for(i=0;i<h.length;i+=1){const F=he(t,h,i);a[i]?(a[i].p(F,f),K(a[i],1)):(a[i]=me(F),a[i].c(),K(a[i],1),a[i].m(C,null))}for(ce(),i=h.length;i<a.length;i+=1)b(i);ie()}},i(t){if(!L){for(let f=0;f<D.length;f+=1)K(p[f]);for(let f=0;f<h.length;f+=1)K(a[f]);L=!0}},o(t){p=p.filter(Boolean);for(let f=0;f<p.length;f+=1)O(p[f]);a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)O(a[f]);L=!1},d(t){t&&u(e),t&&u(l),t&&u(o),t&&u(c),t&&u(J),t&&u(k),te(p,t),t&&u(q),t&&u(S),t&&u(N),t&&u(w),t&&u(R),t&&u(E),t&&u(m),t&&u(C),te(a,t)}}}function Pe(r,e,l){let s;return $e(r,ge,n=>l(0,s=n)),[s]}class Le extends le{constructor(e){super(),se(this,e,Pe,xe,re,{})}}export{Le as default};
