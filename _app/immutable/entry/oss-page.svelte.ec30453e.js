import{S as W,i as X,s as Y,x as Z,y,z as ee,p as G,q as z,A as te,e as w,B as P,t as M,c as E,a as D,C as q,b as S,d as h,D as R,l as $,f as x,g as v,h as B,E as le,F as re,G as ae,j as oe,H as ne}from"../chunks/index.40efe46b.js";import{i as ie}from"../chunks/Navbar.svelte_svelte_type_style_lang.5ac8e4d0.js";import"../chunks/paths.047f7640.js";import{C as ce}from"../chunks/Card.f3da552d.js";const U=r=>location.hostname===new URL(r).hostname;function J(r,e,t){const l=r.slice();return l[1]=e[t],l}function K(r){let e,t=r[1]+"",l,n;return{c(){e=w("span"),l=M(t),n=P(),this.h()},l(a){e=E(a,"SPAN",{class:!0});var i=D(e);l=S(i,t),n=q(i),i.forEach(h),this.h()},h(){$(e,"class","rounded-full border border-stone-300 px-3 py-0.5 text-stone-800 dark:border-stone-700 dark:text-stone-100")},m(a,i){x(a,e,i),v(e,l),v(e,n)},p(a,i){i&1&&t!==(t=a[1]+"")&&B(l,t)},d(a){a&&h(e)}}}function fe(r){let e,t,l,n,a,i,g=r[0].title+"",I,C,m,b=r[0].from+"",k,f,L=r[0].to+"",s,u,o,H=r[0].description+"",T,j,A=r[0].tech,d=[];for(let c=0;c<A.length;c+=1)d[c]=K(J(r,A,c));return{c(){e=w("div"),t=w("img"),a=P(),i=w("h3"),I=M(g),C=P(),m=w("p"),k=M(b),f=M(" - "),s=M(L),u=P(),o=w("p"),T=P(),j=w("div");for(let c=0;c<d.length;c+=1)d[c].c();this.h()},l(c){e=E(c,"DIV",{class:!0});var _=D(e);t=E(_,"IMG",{src:!0,alt:!0,class:!0}),a=q(_),i=E(_,"H3",{class:!0});var p=D(i);I=S(p,g),p.forEach(h),C=q(_),m=E(_,"P",{class:!0});var V=D(m);k=S(V,b),f=S(V," - "),s=S(V,L),V.forEach(h),u=q(_),o=E(_,"P",{class:!0});var se=D(o);se.forEach(h),_.forEach(h),T=q(c),j=E(c,"DIV",{class:!0});var N=D(j);for(let F=0;F<d.length;F+=1)d[F].l(N);N.forEach(h),this.h()},h(){R(t.src,l=r[0].img)||$(t,"src",l),$(t,"alt",n=r[0].title),$(t,"class","aspect-square w-16 rounded-md bg-stone-900 object-cover md:w-24 xl:w-32"),$(i,"class","text-stone-800 dark:text-stone-100"),$(m,"class","text-stone-500 dark:text-stone-400"),$(o,"class","mt-1 leading-none text-stone-500 dark:text-stone-400"),$(e,"class","flex flex-col gap-2 xl:gap-4"),$(j,"class","mt-4 flex flex-wrap gap-2")},m(c,_){x(c,e,_),v(e,t),v(e,a),v(e,i),v(i,I),v(e,C),v(e,m),v(m,k),v(m,f),v(m,s),v(e,u),v(e,o),o.innerHTML=H,x(c,T,_),x(c,j,_);for(let p=0;p<d.length;p+=1)d[p]&&d[p].m(j,null)},p(c,_){if(_&1&&!R(t.src,l=c[0].img)&&$(t,"src",l),_&1&&n!==(n=c[0].title)&&$(t,"alt",n),_&1&&g!==(g=c[0].title+"")&&B(I,g),_&1&&b!==(b=c[0].from+"")&&B(k,b),_&1&&L!==(L=c[0].to+"")&&B(s,L),_&1&&H!==(H=c[0].description+"")&&(o.innerHTML=H),_&1){A=c[0].tech;let p;for(p=0;p<A.length;p+=1){const V=J(c,A,p);d[p]?d[p].p(V,_):(d[p]=K(V),d[p].c(),d[p].m(j,null))}for(;p<d.length;p+=1)d[p].d(1);d.length=A.length}},d(c){c&&h(e),c&&h(T),c&&h(j),le(d,c)}}}function ue(r){let e,t;return e=new ce({props:{href:r[0].link,newTab:!U(r[0].link),$$slots:{default:[fe]},$$scope:{ctx:r}}}),{c(){Z(e.$$.fragment)},l(l){y(e.$$.fragment,l)},m(l,n){ee(e,l,n),t=!0},p(l,[n]){const a={};n&1&&(a.href=l[0].link),n&1&&(a.newTab=!U(l[0].link)),n&17&&(a.$$scope={dirty:n,ctx:l}),e.$set(a)},i(l){t||(G(e.$$.fragment,l),t=!0)},o(l){z(e.$$.fragment,l),t=!1},d(l){te(e,l)}}}function he(r,e,t){let{project:l}=e;return r.$$set=n=>{"project"in n&&t(0,l=n.project)},[l]}class _e extends W{constructor(e){super(),X(this,e,he,ue,Y,{project:0})}}function O(r,e,t){const l=r.slice();return l[1]=e[t],l}function Q(r){let e,t,l,n;return t=new _e({props:{project:r[1]}}),{c(){e=w("div"),Z(t.$$.fragment),l=P(),this.h()},l(a){e=E(a,"DIV",{class:!0});var i=D(e);y(t.$$.fragment,i),l=q(i),i.forEach(h),this.h()},h(){$(e,"class","basis-full p-4 lg:basis-1/2")},m(a,i){x(a,e,i),ee(t,e,null),v(e,l),n=!0},p(a,i){const g={};i&1&&(g.project=a[1]),t.$set(g)},i(a){n||(G(t.$$.fragment,a),n=!0)},o(a){z(t.$$.fragment,a),n=!1},d(a){a&&h(e),te(t)}}}function pe(r){let e,t,l=r[0].oss.title+"",n,a,i,g=r[0].oss.description+"",I,C,m,b,k=r[0].oss.projects,f=[];for(let s=0;s<k.length;s+=1)f[s]=Q(O(r,k,s));const L=s=>z(f[s],1,1,()=>{f[s]=null});return{c(){e=P(),t=w("h1"),n=M(l),a=P(),i=w("h5"),I=M(g),C=P(),m=w("div");for(let s=0;s<f.length;s+=1)f[s].c();this.h()},l(s){re("svelte-7stl4b",document.head).forEach(h),e=q(s),t=E(s,"H1",{});var o=D(t);n=S(o,l),o.forEach(h),a=q(s),i=E(s,"H5",{class:!0});var H=D(i);I=S(H,g),H.forEach(h),C=q(s),m=E(s,"DIV",{class:!0});var T=D(m);for(let j=0;j<f.length;j+=1)f[j].l(T);T.forEach(h),this.h()},h(){document.title="carlos aguilar / open-source",$(i,"class","text-center"),$(m,"class","mt-16 flex flex-wrap items-stretch")},m(s,u){x(s,e,u),x(s,t,u),v(t,n),x(s,a,u),x(s,i,u),v(i,I),x(s,C,u),x(s,m,u);for(let o=0;o<f.length;o+=1)f[o]&&f[o].m(m,null);b=!0},p(s,[u]){if((!b||u&1)&&l!==(l=s[0].oss.title+"")&&B(n,l),(!b||u&1)&&g!==(g=s[0].oss.description+"")&&B(I,g),u&1){k=s[0].oss.projects;let o;for(o=0;o<k.length;o+=1){const H=O(s,k,o);f[o]?(f[o].p(H,u),G(f[o],1)):(f[o]=Q(H),f[o].c(),G(f[o],1),f[o].m(m,null))}for(ne(),o=k.length;o<f.length;o+=1)L(o);ae()}},i(s){if(!b){for(let u=0;u<k.length;u+=1)G(f[u]);b=!0}},o(s){f=f.filter(Boolean);for(let u=0;u<f.length;u+=1)z(f[u]);b=!1},d(s){s&&h(e),s&&h(t),s&&h(a),s&&h(i),s&&h(C),s&&h(m),le(f,s)}}}function me(r,e,t){let l;return oe(r,ie,n=>t(0,l=n)),[l]}class be extends W{constructor(e){super(),X(this,e,me,pe,Y,{})}}export{be as default};
