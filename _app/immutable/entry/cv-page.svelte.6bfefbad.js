import{S as se,i as ae,s as oe,k,a as P,q as S,l as E,m as x,c as q,r as A,h as p,a0 as Y,n as m,b as D,R as _,u as T,P as Z,$ as re,g as Q,f as ce,d as U,Q as ie,y as he,z as fe,A as ue,B as _e,v as me}from"../chunks/index.50d05884.js";import{i as pe}from"../chunks/Project.svelte_svelte_type_style_lang.09a6d096.js";import"../chunks/paths.ac82bb73.js";function y(n,e,t){const s=n.slice();return s[1]=e[t],s}function ee(n){let e,t=n[1]+"",s,u;return{c(){e=k("span"),s=S(t),u=P(),this.h()},l(a){e=E(a,"SPAN",{class:!0});var f=x(e);s=A(f,t),u=q(f),f.forEach(p),this.h()},h(){m(e,"class","m-1 rounded-full border border-stone-300 px-3 py-0.5 text-stone-800 dark:border-stone-700 dark:text-stone-100 svelte-ach14h")},m(a,f){D(a,e,f),_(e,s),_(e,u)},p(a,f){f&1&&t!==(t=a[1]+"")&&T(s,t)},d(a){a&&p(e)}}}function ve(n){let e,t,s,u,a,f,b,w=n[0].company+"",$,H,g,o=n[0].position+"",V,l,c,i=n[0].description+"",I,j,C=n[0].from+"",z,R,L=n[0].to+"",G,F,M,J,B=n[0].tech,v=[];for(let h=0;h<B.length;h+=1)v[h]=ee(y(n,B,h));return{c(){e=k("a"),t=k("section"),s=k("img"),f=P(),b=k("h3"),$=S(w),H=P(),g=k("h5"),V=S(o),l=P(),c=k("p"),I=P(),j=k("p"),z=S(C),R=S(" - "),G=S(L),F=P(),M=k("div");for(let h=0;h<v.length;h+=1)v[h].c();this.h()},l(h){e=E(h,"A",{href:!0,target:!0,rel:!0,class:!0});var d=x(e);t=E(d,"SECTION",{class:!0});var r=x(t);s=E(r,"IMG",{src:!0,alt:!0,class:!0}),f=q(r),b=E(r,"H3",{class:!0});var N=x(b);$=A(N,w),N.forEach(p),H=q(r),g=E(r,"H5",{class:!0});var W=x(g);V=A(W,o),W.forEach(p),l=q(r),c=E(r,"P",{class:!0});var ne=x(c);ne.forEach(p),I=q(r),j=E(r,"P",{class:!0});var O=x(j);z=A(O,C),R=A(O," - "),G=A(O,L),O.forEach(p),F=q(r),M=E(r,"DIV",{class:!0});var X=x(M);for(let K=0;K<v.length;K+=1)v[K].l(X);X.forEach(p),r.forEach(p),d.forEach(p),this.h()},h(){Y(s.src,u=n[0].logo)||m(s,"src",u),m(s,"alt",a=n[0].company),m(s,"class","aspect-square w-16 rounded-md object-cover xl:w-32 svelte-ach14h"),m(b,"class","mt-4 text-stone-800 dark:text-stone-100 xl:mt-8 svelte-ach14h"),m(g,"class","mt-4 text-stone-800 dark:text-stone-100 xl:mt-8 svelte-ach14h"),m(c,"class","mt-1 text-stone-500 dark:text-stone-400 xl:mt-2 svelte-ach14h"),m(j,"class","mt-4 text-stone-500 dark:text-stone-400 xl:mt-8 svelte-ach14h"),m(M,"class","mt-4 flex flex-wrap xl:mt-8 svelte-ach14h"),m(t,"class","h-full rounded-md border border-stone-300 p-4 shadow-md dark:border-stone-700 md:p-8 svelte-ach14h"),m(e,"href",J=n[0].link),m(e,"target","_blank"),m(e,"rel","noopener noreferrer"),m(e,"class","svelte-ach14h")},m(h,d){D(h,e,d),_(e,t),_(t,s),_(t,f),_(t,b),_(b,$),_(t,H),_(t,g),_(g,V),_(t,l),_(t,c),c.innerHTML=i,_(t,I),_(t,j),_(j,z),_(j,R),_(j,G),_(t,F),_(t,M);for(let r=0;r<v.length;r+=1)v[r]&&v[r].m(M,null)},p(h,[d]){if(d&1&&!Y(s.src,u=h[0].logo)&&m(s,"src",u),d&1&&a!==(a=h[0].company)&&m(s,"alt",a),d&1&&w!==(w=h[0].company+"")&&T($,w),d&1&&o!==(o=h[0].position+"")&&T(V,o),d&1&&i!==(i=h[0].description+"")&&(c.innerHTML=i),d&1&&C!==(C=h[0].from+"")&&T(z,C),d&1&&L!==(L=h[0].to+"")&&T(G,L),d&1){B=h[0].tech;let r;for(r=0;r<B.length;r+=1){const N=y(h,B,r);v[r]?v[r].p(N,d):(v[r]=ee(N),v[r].c(),v[r].m(M,null))}for(;r<v.length;r+=1)v[r].d(1);v.length=B.length}d&1&&J!==(J=h[0].link)&&m(e,"href",J)},i:Z,o:Z,d(h){h&&p(e),re(v,h)}}}function de(n,e,t){let{job:s}=e;return n.$$set=u=>{"job"in u&&t(0,s=u.job)},[s]}class be extends se{constructor(e){super(),ae(this,e,de,ve,oe,{job:0})}}function te(n,e,t){const s=n.slice();return s[1]=e[t],s}function le(n){let e,t,s,u;return t=new be({props:{job:n[1]}}),{c(){e=k("div"),he(t.$$.fragment),s=P(),this.h()},l(a){e=E(a,"DIV",{class:!0});var f=x(e);fe(t.$$.fragment,f),s=q(f),f.forEach(p),this.h()},h(){m(e,"class","basis-full p-4 xl:basis-1/2")},m(a,f){D(a,e,f),ue(t,e,null),_(e,s),u=!0},p(a,f){const b={};f&1&&(b.job=a[1]),t.$set(b)},i(a){u||(Q(t.$$.fragment,a),u=!0)},o(a){U(t.$$.fragment,a),u=!1},d(a){a&&p(e),_e(t)}}}function ge(n){let e,t=n[0].cv.title+"",s,u,a,f=n[0].cv.description+"",b,w,$,H,g=n[0].cv.jobs,o=[];for(let l=0;l<g.length;l+=1)o[l]=le(te(n,g,l));const V=l=>U(o[l],1,1,()=>{o[l]=null});return{c(){e=k("h1"),s=S(t),u=P(),a=k("h5"),b=S(f),w=P(),$=k("div");for(let l=0;l<o.length;l+=1)o[l].c();this.h()},l(l){e=E(l,"H1",{});var c=x(e);s=A(c,t),c.forEach(p),u=q(l),a=E(l,"H5",{class:!0});var i=x(a);b=A(i,f),i.forEach(p),w=q(l),$=E(l,"DIV",{class:!0});var I=x($);for(let j=0;j<o.length;j+=1)o[j].l(I);I.forEach(p),this.h()},h(){m(a,"class","text-center"),m($,"class","mt-16 flex flex-wrap items-stretch")},m(l,c){D(l,e,c),_(e,s),D(l,u,c),D(l,a,c),_(a,b),D(l,w,c),D(l,$,c);for(let i=0;i<o.length;i+=1)o[i]&&o[i].m($,null);H=!0},p(l,[c]){if((!H||c&1)&&t!==(t=l[0].cv.title+"")&&T(s,t),(!H||c&1)&&f!==(f=l[0].cv.description+"")&&T(b,f),c&1){g=l[0].cv.jobs;let i;for(i=0;i<g.length;i+=1){const I=te(l,g,i);o[i]?(o[i].p(I,c),Q(o[i],1)):(o[i]=le(I),o[i].c(),Q(o[i],1),o[i].m($,null))}for(me(),i=g.length;i<o.length;i+=1)V(i);ce()}},i(l){if(!H){for(let c=0;c<g.length;c+=1)Q(o[c]);H=!0}},o(l){o=o.filter(Boolean);for(let c=0;c<o.length;c+=1)U(o[c]);H=!1},d(l){l&&p(e),l&&p(u),l&&p(a),l&&p(w),l&&p($),re(o,l)}}}function $e(n,e,t){let s;return ie(n,pe,u=>t(0,s=u)),[s]}class xe extends se{constructor(e){super(),ae(this,e,$e,ge,oe,{})}}export{xe as default};
