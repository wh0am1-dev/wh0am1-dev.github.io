import{S as Z,i as y,s as ee,e as k,k as q,t as M,c as j,a as E,l as S,b as T,d as m,m as Q,o as _,f as P,g as p,h as A,n as R,p as te,q as G,r as se,u as J,j as re,v as ae,w as oe,x as ne,y as ce,z as ie}from"../chunks/index.6f10c2eb.js";import{i as he}from"../chunks/Project.svelte_svelte_type_style_lang.940d4446.js";import"../chunks/paths.0203503b.js";function U(o,e,l){const s=o.slice();return s[1]=e[l],s}function W(o){let e,l=o[1]+"",s,u;return{c(){e=k("span"),s=M(l),u=q(),this.h()},l(r){e=j(r,"SPAN",{class:!0});var h=E(e);s=T(h,l),u=S(h),h.forEach(m),this.h()},h(){_(e,"class","m-1 rounded-full border border-stone-300 px-3 py-0.5 text-stone-800 dark:border-stone-700 dark:text-stone-100 svelte-ach14h")},m(r,h){P(r,e,h),p(e,s),p(e,u)},p(r,h){h&1&&l!==(l=r[1]+"")&&A(s,l)},d(r){r&&m(e)}}}function fe(o){let e,l,s,u,r,h,g,x=o[0].title+"",$,w,v,a=o[0].description+"",C,t,i=o[0].from+"",n,H,I=o[0].to+"",N,O,D,z,V=o[0].tech,d=[];for(let f=0;f<V.length;f+=1)d[f]=W(U(o,V,f));return{c(){e=k("a"),l=k("section"),s=k("img"),h=q(),g=k("h3"),$=M(x),w=q(),v=k("p"),C=q(),t=k("p"),n=M(i),H=M(" - "),N=M(I),O=q(),D=k("div");for(let f=0;f<d.length;f+=1)d[f].c();this.h()},l(f){e=j(f,"A",{href:!0,target:!0,rel:!0,class:!0});var b=E(e);l=j(b,"SECTION",{class:!0});var c=E(l);s=j(c,"IMG",{src:!0,alt:!0,class:!0}),h=S(c),g=j(c,"H3",{class:!0});var L=E(g);$=T(L,x),L.forEach(m),w=S(c),v=j(c,"P",{class:!0});var le=E(v);le.forEach(m),C=S(c),t=j(c,"P",{class:!0});var B=E(t);n=T(B,i),H=T(B," - "),N=T(B,I),B.forEach(m),O=S(c),D=j(c,"DIV",{class:!0});var K=E(D);for(let F=0;F<d.length;F+=1)d[F].l(K);K.forEach(m),c.forEach(m),b.forEach(m),this.h()},h(){Q(s.src,u=o[0].img)||_(s,"src",u),_(s,"alt",r=o[0].title),_(s,"class","aspect-square w-16 rounded-md bg-stone-900 object-cover xl:w-32 svelte-ach14h"),_(g,"class","mt-4 text-stone-800 dark:text-stone-100 xl:mt-8 svelte-ach14h"),_(v,"class","mt-1 text-stone-500 dark:text-stone-400 xl:mt-2 svelte-ach14h"),_(t,"class","mt-4 text-stone-500 dark:text-stone-400 xl:mt-8 svelte-ach14h"),_(D,"class","mt-4 flex flex-wrap xl:mt-8 svelte-ach14h"),_(l,"class","h-full rounded-md border border-stone-300 p-4 shadow-md dark:border-stone-700 md:p-8 svelte-ach14h"),_(e,"href",z=o[0].link),_(e,"target","_blank"),_(e,"rel","noopener noreferrer"),_(e,"class","svelte-ach14h")},m(f,b){P(f,e,b),p(e,l),p(l,s),p(l,h),p(l,g),p(g,$),p(l,w),p(l,v),v.innerHTML=a,p(l,C),p(l,t),p(t,n),p(t,H),p(t,N),p(l,O),p(l,D);for(let c=0;c<d.length;c+=1)d[c]&&d[c].m(D,null)},p(f,[b]){if(b&1&&!Q(s.src,u=f[0].img)&&_(s,"src",u),b&1&&r!==(r=f[0].title)&&_(s,"alt",r),b&1&&x!==(x=f[0].title+"")&&A($,x),b&1&&a!==(a=f[0].description+"")&&(v.innerHTML=a),b&1&&i!==(i=f[0].from+"")&&A(n,i),b&1&&I!==(I=f[0].to+"")&&A(N,I),b&1){V=f[0].tech;let c;for(c=0;c<V.length;c+=1){const L=U(f,V,c);d[c]?d[c].p(L,b):(d[c]=W(L),d[c].c(),d[c].m(D,null))}for(;c<d.length;c+=1)d[c].d(1);d.length=V.length}b&1&&z!==(z=f[0].link)&&_(e,"href",z)},i:R,o:R,d(f){f&&m(e),te(d,f)}}}function ue(o,e,l){let{project:s}=e;return o.$$set=u=>{"project"in u&&l(0,s=u.project)},[s]}class _e extends Z{constructor(e){super(),y(this,e,ue,fe,ee,{project:0})}}function X(o,e,l){const s=o.slice();return s[1]=e[l],s}function Y(o){let e,l,s,u;return l=new _e({props:{project:o[1]}}),{c(){e=k("div"),ae(l.$$.fragment),s=q(),this.h()},l(r){e=j(r,"DIV",{class:!0});var h=E(e);oe(l.$$.fragment,h),s=S(h),h.forEach(m),this.h()},h(){_(e,"class","basis-full p-4 xl:basis-1/2")},m(r,h){P(r,e,h),ne(l,e,null),p(e,s),u=!0},p(r,h){const g={};h&1&&(g.project=r[1]),l.$set(g)},i(r){u||(G(l.$$.fragment,r),u=!0)},o(r){J(l.$$.fragment,r),u=!1},d(r){r&&m(e),ce(l)}}}function pe(o){let e,l=o[0].oss.title+"",s,u,r,h=o[0].oss.description+"",g,x,$,w,v=o[0].oss.projects,a=[];for(let t=0;t<v.length;t+=1)a[t]=Y(X(o,v,t));const C=t=>J(a[t],1,1,()=>{a[t]=null});return{c(){e=k("h1"),s=M(l),u=q(),r=k("h5"),g=M(h),x=q(),$=k("div");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){e=j(t,"H1",{});var i=E(e);s=T(i,l),i.forEach(m),u=S(t),r=j(t,"H5",{class:!0});var n=E(r);g=T(n,h),n.forEach(m),x=S(t),$=j(t,"DIV",{class:!0});var H=E($);for(let I=0;I<a.length;I+=1)a[I].l(H);H.forEach(m),this.h()},h(){_(r,"class","text-center"),_($,"class","mt-16 flex flex-wrap items-stretch")},m(t,i){P(t,e,i),p(e,s),P(t,u,i),P(t,r,i),p(r,g),P(t,x,i),P(t,$,i);for(let n=0;n<a.length;n+=1)a[n]&&a[n].m($,null);w=!0},p(t,[i]){if((!w||i&1)&&l!==(l=t[0].oss.title+"")&&A(s,l),(!w||i&1)&&h!==(h=t[0].oss.description+"")&&A(g,h),i&1){v=t[0].oss.projects;let n;for(n=0;n<v.length;n+=1){const H=X(t,v,n);a[n]?(a[n].p(H,i),G(a[n],1)):(a[n]=Y(H),a[n].c(),G(a[n],1),a[n].m($,null))}for(ie(),n=v.length;n<a.length;n+=1)C(n);se()}},i(t){if(!w){for(let i=0;i<v.length;i+=1)G(a[i]);w=!0}},o(t){a=a.filter(Boolean);for(let i=0;i<a.length;i+=1)J(a[i]);w=!1},d(t){t&&m(e),t&&m(u),t&&m(r),t&&m(x),t&&m($),te(a,t)}}}function me(o,e,l){let s;return re(o,he,u=>l(0,s=u)),[s]}class be extends Z{constructor(e){super(),y(this,e,me,pe,ee,{})}}export{be as default};
