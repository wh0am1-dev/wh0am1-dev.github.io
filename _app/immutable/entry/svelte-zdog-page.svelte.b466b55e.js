import{S as H,i as Y,s as K,C as wt,D as bt,E as St,F as Ct,g,d as y,J as q,K as O,a as T,c as F,b as k,h as E,L as qt,o as ee,w as Tt,M as ce,N as le,m as j,n as z,k as tt,l as et,O as re,P as Pt,Q as pe,y as w,q as Ft,z as b,r as Mt,A as S,G as W,B as C,H as Q}from"../chunks/index.b8cd550d.js";var $=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R={},de={get exports(){return R},set exports(u){R=u}},rt={},ve={get exports(){return rt},set exports(u){rt=u}};/*!
 * Zdog v1.1.3
 * Round, flat, designer-friendly pseudo-3D engine
 * Licensed MIT
 * https://zzz.dog
 * Copyright 2020 Metafizzy
 */var Ot;function G(){return Ot||(Ot=1,function(u){(function(n,r){u.exports?u.exports=r():n.Zdog=r()})($,function(){var r={};r.TAU=Math.PI*2,r.extend=function(i,o){for(var f in o)i[f]=o[f];return i},r.lerp=function(i,o,f){return(o-i)*f+i},r.modulo=function(i,o){return(i%o+o)%o};var t={2:function(i){return i*i},3:function(i){return i*i*i},4:function(i){return i*i*i*i},5:function(i){return i*i*i*i*i}};return r.easeInOut=function(i,o){if(o==1)return i;i=Math.max(0,Math.min(1,i));var f=i<.5,e=f?i:1-i;e/=.5;var s=t[o]||t[2],h=s(e);return h/=2,f?h:1-h},r})}(ve)),rt}var nt={},me={get exports(){return nt},set exports(u){nt=u}},Ut;function ne(){return Ut||(Ut=1,function(u){(function(n,r){u.exports?u.exports=r():n.Zdog.CanvasRenderer=r()})($,function(){var r={isCanvas:!0};return r.begin=function(t){t.beginPath()},r.move=function(t,i,o){t.moveTo(o.x,o.y)},r.line=function(t,i,o){t.lineTo(o.x,o.y)},r.bezier=function(t,i,o,f,e){t.bezierCurveTo(o.x,o.y,f.x,f.y,e.x,e.y)},r.closePath=function(t){t.closePath()},r.setPath=function(){},r.renderPath=function(t,i,o,f){this.begin(t,i),o.forEach(function(e){e.render(t,i,r)}),f&&this.closePath(t,i)},r.stroke=function(t,i,o,f,e){o&&(t.strokeStyle=f,t.lineWidth=e,t.stroke())},r.fill=function(t,i,o,f){o&&(t.fillStyle=f,t.fill())},r.end=function(){},r})}(me)),nt}var it={},ge={get exports(){return it},set exports(u){it=u}},Dt;function ie(){return Dt||(Dt=1,function(u){(function(n,r){u.exports?u.exports=r():n.Zdog.SvgRenderer=r()})($,function(){var r={isSvg:!0},t=r.round=function(o){return Math.round(o*1e3)/1e3};function i(o){return t(o.x)+","+t(o.y)+" "}return r.begin=function(){},r.move=function(o,f,e){return"M"+i(e)},r.line=function(o,f,e){return"L"+i(e)},r.bezier=function(o,f,e,s,h){return"C"+i(e)+i(s)+i(h)},r.closePath=function(){return"Z"},r.setPath=function(o,f,e){f.setAttribute("d",e)},r.renderPath=function(o,f,e,s){var h="";e.forEach(function(a){h+=a.render(o,f,r)}),s&&(h+=this.closePath(o,f)),this.setPath(o,f,h)},r.stroke=function(o,f,e,s,h){e&&(f.setAttribute("stroke",s),f.setAttribute("stroke-width",h))},r.fill=function(o,f,e,s){var h=e?s:"none";f.setAttribute("fill",h)},r.end=function(o,f){o.appendChild(f)},r})}(ge)),it}var st={},ye={get exports(){return st},set exports(u){st=u}},Bt;function L(){return Bt||(Bt=1,function(u){(function(n,r){if(u.exports)u.exports=r(G());else{var t=n.Zdog;t.Vector=r(t)}})($,function(r){function t(e){this.set(e)}var i=r.TAU;t.prototype.set=function(e){return this.x=e&&e.x||0,this.y=e&&e.y||0,this.z=e&&e.z||0,this},t.prototype.write=function(e){return e?(this.x=e.x!=null?e.x:this.x,this.y=e.y!=null?e.y:this.y,this.z=e.z!=null?e.z:this.z,this):this},t.prototype.rotate=function(e){if(e)return this.rotateZ(e.z),this.rotateY(e.y),this.rotateX(e.x),this},t.prototype.rotateZ=function(e){o(this,e,"x","y")},t.prototype.rotateX=function(e){o(this,e,"y","z")},t.prototype.rotateY=function(e){o(this,e,"x","z")};function o(e,s,h,a){if(!(!s||s%i===0)){var c=Math.cos(s),l=Math.sin(s),v=e[h],d=e[a];e[h]=v*c-d*l,e[a]=d*c+v*l}}t.prototype.isSame=function(e){return e?this.x===e.x&&this.y===e.y&&this.z===e.z:!1},t.prototype.add=function(e){return e?(this.x+=e.x||0,this.y+=e.y||0,this.z+=e.z||0,this):this},t.prototype.subtract=function(e){return e?(this.x-=e.x||0,this.y-=e.y||0,this.z-=e.z||0,this):this},t.prototype.multiply=function(e){return e==null?this:(typeof e=="number"?(this.x*=e,this.y*=e,this.z*=e):(this.x*=e.x!=null?e.x:1,this.y*=e.y!=null?e.y:1,this.z*=e.z!=null?e.z:1),this)},t.prototype.transform=function(e,s,h){return this.multiply(h),this.rotate(s),this.add(e),this},t.prototype.lerp=function(e,s){return this.x=r.lerp(this.x,e.x||0,s),this.y=r.lerp(this.y,e.y||0,s),this.z=r.lerp(this.z,e.z||0,s),this},t.prototype.magnitude=function(){var e=this.x*this.x+this.y*this.y+this.z*this.z;return f(e)};function f(e){return Math.abs(e-1)<1e-8?1:Math.sqrt(e)}return t.prototype.magnitude2d=function(){var e=this.x*this.x+this.y*this.y;return f(e)},t.prototype.copy=function(){return new t(this)},t})}(ye)),st}var ot={},xe={get exports(){return ot},set exports(u){ot=u}},Lt;function D(){return Lt||(Lt=1,function(u){(function(n,r){if(u.exports)u.exports=r(G(),L(),ne(),ie());else{var t=n.Zdog;t.Anchor=r(t,t.Vector,t.CanvasRenderer,t.SvgRenderer)}})($,function(r,t,i,o){var f=r.TAU,e={x:1,y:1,z:1};function s(a){this.create(a||{})}s.prototype.create=function(a){this.children=[],r.extend(this,this.constructor.defaults),this.setOptions(a),this.translate=new t(a.translate),this.rotate=new t(a.rotate),this.scale=new t(e).multiply(this.scale),this.origin=new t,this.renderOrigin=new t,this.addTo&&this.addTo.addChild(this)},s.defaults={},s.optionKeys=Object.keys(s.defaults).concat(["rotate","translate","scale","addTo"]),s.prototype.setOptions=function(a){var c=this.constructor.optionKeys;for(var l in a)c.indexOf(l)!=-1&&(this[l]=a[l])},s.prototype.addChild=function(a){this.children.indexOf(a)==-1&&(a.remove(),a.addTo=this,this.children.push(a))},s.prototype.removeChild=function(a){var c=this.children.indexOf(a);c!=-1&&this.children.splice(c,1)},s.prototype.remove=function(){this.addTo&&this.addTo.removeChild(this)},s.prototype.update=function(){this.reset(),this.children.forEach(function(a){a.update()}),this.transform(this.translate,this.rotate,this.scale)},s.prototype.reset=function(){this.renderOrigin.set(this.origin)},s.prototype.transform=function(a,c,l){this.renderOrigin.transform(a,c,l),this.children.forEach(function(v){v.transform(a,c,l)})},s.prototype.updateGraph=function(){this.update(),this.updateFlatGraph(),this.flatGraph.forEach(function(a){a.updateSortValue()}),this.flatGraph.sort(s.shapeSorter)},s.shapeSorter=function(a,c){return a.sortValue-c.sortValue},Object.defineProperty(s.prototype,"flatGraph",{get:function(){return this._flatGraph||this.updateFlatGraph(),this._flatGraph},set:function(a){this._flatGraph=a}}),s.prototype.updateFlatGraph=function(){this.flatGraph=this.getFlatGraph()},s.prototype.getFlatGraph=function(){var a=[this];return this.addChildFlatGraph(a)},s.prototype.addChildFlatGraph=function(a){return this.children.forEach(function(c){var l=c.getFlatGraph();Array.prototype.push.apply(a,l)}),a},s.prototype.updateSortValue=function(){this.sortValue=this.renderOrigin.z},s.prototype.render=function(){},s.prototype.renderGraphCanvas=function(a){if(!a)throw new Error("ctx is "+a+". Canvas context required for render. Check .renderGraphCanvas( ctx ).");this.flatGraph.forEach(function(c){c.render(a,i)})},s.prototype.renderGraphSvg=function(a){if(!a)throw new Error("svg is "+a+". SVG required for render. Check .renderGraphSvg( svg ).");this.flatGraph.forEach(function(c){c.render(a,o)})},s.prototype.copy=function(a){var c={},l=this.constructor.optionKeys;l.forEach(function(d){c[d]=this[d]},this),r.extend(c,a);var v=this.constructor;return new v(c)},s.prototype.copyGraph=function(a){var c=this.copy(a);return this.children.forEach(function(l){l.copyGraph({addTo:c})}),c},s.prototype.normalizeRotate=function(){this.rotate.x=r.modulo(this.rotate.x,f),this.rotate.y=r.modulo(this.rotate.y,f),this.rotate.z=r.modulo(this.rotate.z,f)};function h(a){return function(c){function l(v){this.create(v||{})}return l.prototype=Object.create(a.prototype),l.prototype.constructor=l,l.defaults=r.extend({},a.defaults),r.extend(l.defaults,c),l.optionKeys=a.optionKeys.slice(0),Object.keys(l.defaults).forEach(function(v){!l.optionKeys.indexOf(v)!=1&&l.optionKeys.push(v)}),l.subclass=h(l),l}}return s.subclass=h(s),s})}(xe)),ot}var at={},$e={get exports(){return at},set exports(u){at=u}},Nt;function se(){return Nt||(Nt=1,function(u){(function(n,r){u.exports?u.exports=r():n.Zdog.Dragger=r()})($,function(){var r=typeof window<"u",t="mousedown",i="mousemove",o="mouseup";r&&(window.PointerEvent?(t="pointerdown",i="pointermove",o="pointerup"):"ontouchstart"in window&&(t="touchstart",i="touchmove",o="touchend"));function f(){}function e(s){this.create(s||{})}return e.prototype.create=function(s){this.onDragStart=s.onDragStart||f,this.onDragMove=s.onDragMove||f,this.onDragEnd=s.onDragEnd||f,this.bindDrag(s.startElement)},e.prototype.bindDrag=function(s){s=this.getQueryElement(s),s&&(s.style.touchAction="none",s.addEventListener(t,this))},e.prototype.getQueryElement=function(s){return typeof s=="string"&&(s=document.querySelector(s)),s},e.prototype.handleEvent=function(s){var h=this["on"+s.type];h&&h.call(this,s)},e.prototype.onmousedown=e.prototype.onpointerdown=function(s){this.dragStart(s,s)},e.prototype.ontouchstart=function(s){this.dragStart(s,s.changedTouches[0])},e.prototype.dragStart=function(s,h){s.preventDefault(),this.dragStartX=h.pageX,this.dragStartY=h.pageY,r&&(window.addEventListener(i,this),window.addEventListener(o,this)),this.onDragStart(h)},e.prototype.ontouchmove=function(s){this.dragMove(s,s.changedTouches[0])},e.prototype.onmousemove=e.prototype.onpointermove=function(s){this.dragMove(s,s)},e.prototype.dragMove=function(s,h){s.preventDefault();var a=h.pageX-this.dragStartX,c=h.pageY-this.dragStartY;this.onDragMove(h,a,c)},e.prototype.onmouseup=e.prototype.onpointerup=e.prototype.ontouchend=e.prototype.dragEnd=function(){window.removeEventListener(i,this),window.removeEventListener(o,this),this.onDragEnd()},e})}($e)),at}var ht={},we={get exports(){return ht},set exports(u){ht=u}},Vt;function be(){return Vt||(Vt=1,function(u){(function(n,r){if(u.exports)u.exports=r(G(),D(),se());else{var t=n.Zdog;t.Illustration=r(t,t.Anchor,t.Dragger)}})($,function(r,t,i){function o(){}var f=r.TAU,e=t.subclass({element:void 0,centered:!0,zoom:1,dragRotate:!1,resize:!1,onPrerender:o,onDragStart:o,onDragMove:o,onDragEnd:o,onResize:o});r.extend(e.prototype,i.prototype),e.prototype.create=function(h){t.prototype.create.call(this,h),i.prototype.create.call(this,h),this.setElement(this.element),this.setDragRotate(this.dragRotate),this.setResize(this.resize)},e.prototype.setElement=function(h){if(h=this.getQueryElement(h),!h)throw new Error("Zdog.Illustration element required. Set to "+h);var a=h.nodeName.toLowerCase();a=="canvas"?this.setCanvas(h):a=="svg"&&this.setSvg(h)},e.prototype.setSize=function(h,a){h=Math.round(h),a=Math.round(a),this.isCanvas?this.setSizeCanvas(h,a):this.isSvg&&this.setSizeSvg(h,a)},e.prototype.setResize=function(h){this.resize=h,this.resizeListener||(this.resizeListener=this.onWindowResize.bind(this)),h?(window.addEventListener("resize",this.resizeListener),this.onWindowResize()):window.removeEventListener("resize",this.resizeListener)},e.prototype.onWindowResize=function(){this.setMeasuredSize(),this.onResize(this.width,this.height)},e.prototype.setMeasuredSize=function(){var h,a,c=this.resize=="fullscreen";if(c)h=window.innerWidth,a=window.innerHeight;else{var l=this.element.getBoundingClientRect();h=l.width,a=l.height}this.setSize(h,a)},e.prototype.renderGraph=function(h){this.isCanvas?this.renderGraphCanvas(h):this.isSvg&&this.renderGraphSvg(h)},e.prototype.updateRenderGraph=function(h){this.updateGraph(),this.renderGraph(h)},e.prototype.setCanvas=function(h){this.element=h,this.isCanvas=!0,this.ctx=this.element.getContext("2d"),this.setSizeCanvas(h.width,h.height)},e.prototype.setSizeCanvas=function(h,a){this.width=h,this.height=a;var c=this.pixelRatio=window.devicePixelRatio||1;this.element.width=this.canvasWidth=h*c,this.element.height=this.canvasHeight=a*c;var l=c>1&&!this.resize;l&&(this.element.style.width=h+"px",this.element.style.height=a+"px")},e.prototype.renderGraphCanvas=function(h){h=h||this,this.prerenderCanvas(),t.prototype.renderGraphCanvas.call(h,this.ctx),this.postrenderCanvas()},e.prototype.prerenderCanvas=function(){var h=this.ctx;if(h.lineCap="round",h.lineJoin="round",h.clearRect(0,0,this.canvasWidth,this.canvasHeight),h.save(),this.centered){var a=this.width/2*this.pixelRatio,c=this.height/2*this.pixelRatio;h.translate(a,c)}var l=this.pixelRatio*this.zoom;h.scale(l,l),this.onPrerender(h)},e.prototype.postrenderCanvas=function(){this.ctx.restore()},e.prototype.setSvg=function(h){this.element=h,this.isSvg=!0,this.pixelRatio=1;var a=h.getAttribute("width"),c=h.getAttribute("height");this.setSizeSvg(a,c)},e.prototype.setSizeSvg=function(h,a){this.width=h,this.height=a;var c=h/this.zoom,l=a/this.zoom,v=this.centered?-c/2:0,d=this.centered?-l/2:0;this.element.setAttribute("viewBox",v+" "+d+" "+c+" "+l),this.resize?(this.element.removeAttribute("width"),this.element.removeAttribute("height")):(this.element.setAttribute("width",h),this.element.setAttribute("height",a))},e.prototype.renderGraphSvg=function(h){h=h||this,s(this.element),this.onPrerender(this.element),t.prototype.renderGraphSvg.call(h,this.element)};function s(h){for(;h.firstChild;)h.removeChild(h.firstChild)}return e.prototype.setDragRotate=function(h){if(h)h===!0&&(h=this);else return;this.dragRotate=h,this.bindDrag(this.element)},e.prototype.dragStart=function(){this.dragStartRX=this.dragRotate.rotate.x,this.dragStartRY=this.dragRotate.rotate.y,i.prototype.dragStart.apply(this,arguments)},e.prototype.dragMove=function(h,a){var c=a.pageX-this.dragStartX,l=a.pageY-this.dragStartY,v=Math.min(this.width,this.height),d=c/v*f,p=l/v*f;this.dragRotate.rotate.x=this.dragStartRX-p,this.dragRotate.rotate.y=this.dragStartRY-d,i.prototype.dragMove.apply(this,arguments)},e})}(we)),ht}var ut={},Se={get exports(){return ut},set exports(u){ut=u}},It;function Rt(){return It||(It=1,function(u){(function(n,r){if(u.exports)u.exports=r(L());else{var t=n.Zdog;t.PathCommand=r(t.Vector)}})($,function(r){function t(e,s,h){this.method=e,this.points=s.map(i),this.renderPoints=s.map(o),this.previousPoint=h,this.endRenderPoint=this.renderPoints[this.renderPoints.length-1],e=="arc"&&(this.controlPoints=[new r,new r])}function i(e){return e instanceof r?e:new r(e)}function o(e){return new r(e)}t.prototype.reset=function(){var e=this.points;this.renderPoints.forEach(function(s,h){var a=e[h];s.set(a)})},t.prototype.transform=function(e,s,h){this.renderPoints.forEach(function(a){a.transform(e,s,h)})},t.prototype.render=function(e,s,h){return this[this.method](e,s,h)},t.prototype.move=function(e,s,h){return h.move(e,s,this.renderPoints[0])},t.prototype.line=function(e,s,h){return h.line(e,s,this.renderPoints[0])},t.prototype.bezier=function(e,s,h){var a=this.renderPoints[0],c=this.renderPoints[1],l=this.renderPoints[2];return h.bezier(e,s,a,c,l)};var f=9/16;return t.prototype.arc=function(e,s,h){var a=this.previousPoint,c=this.renderPoints[0],l=this.renderPoints[1],v=this.controlPoints[0],d=this.controlPoints[1];return v.set(a).lerp(c,f),d.set(l).lerp(c,f),h.bezier(e,s,v,d,l)},t})}(Se)),ut}var ft={},Ce={get exports(){return ft},set exports(u){ft=u}},Wt;function B(){return Wt||(Wt=1,function(u){(function(n,r){if(u.exports)u.exports=r(G(),L(),Rt(),D());else{var t=n.Zdog;t.Shape=r(t,t.Vector,t.PathCommand,t.Anchor)}})($,function(r,t,i,o){var f=o.subclass({stroke:1,fill:!1,color:"#333",closed:!0,visible:!0,path:[{}],front:{z:1},backface:!0});f.prototype.create=function(a){o.prototype.create.call(this,a),this.updatePath(),this.front=new t(a.front||this.front),this.renderFront=new t(this.front),this.renderNormal=new t};var e=["move","line","bezier","arc"];f.prototype.updatePath=function(){this.setPath(),this.updatePathCommands()},f.prototype.setPath=function(){},f.prototype.updatePathCommands=function(){var a;this.pathCommands=this.path.map(function(c,l){var v=Object.keys(c),d=v[0],p=c[d],m=v.length==1&&e.indexOf(d)!=-1;m||(d="line",p=c);var x=d=="line"||d=="move",_=Array.isArray(p);x&&!_&&(p=[p]),d=l===0?"move":d;var P=new i(d,p,a);return a=P.endRenderPoint,P})},f.prototype.reset=function(){this.renderOrigin.set(this.origin),this.renderFront.set(this.front),this.pathCommands.forEach(function(a){a.reset()})},f.prototype.transform=function(a,c,l){this.renderOrigin.transform(a,c,l),this.renderFront.transform(a,c,l),this.renderNormal.set(this.renderOrigin).subtract(this.renderFront),this.pathCommands.forEach(function(v){v.transform(a,c,l)}),this.children.forEach(function(v){v.transform(a,c,l)})},f.prototype.updateSortValue=function(){var a=this.pathCommands.length,c=this.pathCommands[0].endRenderPoint,l=this.pathCommands[a-1].endRenderPoint,v=a>2&&c.isSame(l);v&&(a-=1);for(var d=0,p=0;p<a;p++)d+=this.pathCommands[p].endRenderPoint.z;this.sortValue=d/a},f.prototype.render=function(a,c){var l=this.pathCommands.length;if(!(!this.visible||!l)&&(this.isFacingBack=this.renderNormal.z>0,!(!this.backface&&this.isFacingBack))){if(!c)throw new Error("Zdog renderer required. Set to "+c);var v=l==1;c.isCanvas&&v?this.renderCanvasDot(a,c):this.renderPath(a,c)}};var s=r.TAU;f.prototype.renderCanvasDot=function(a){var c=this.getLineWidth();if(c){a.fillStyle=this.getRenderColor();var l=this.pathCommands[0].endRenderPoint;a.beginPath();var v=c/2;a.arc(l.x,l.y,v,0,s),a.fill()}},f.prototype.getLineWidth=function(){return this.stroke?this.stroke==!0?1:this.stroke:0},f.prototype.getRenderColor=function(){var a=typeof this.backface=="string"&&this.isFacingBack,c=a?this.backface:this.color;return c},f.prototype.renderPath=function(a,c){var l=this.getRenderElement(a,c),v=this.pathCommands.length==2&&this.pathCommands[1].method=="line",d=!v&&this.closed,p=this.getRenderColor();c.renderPath(a,l,this.pathCommands,d),c.stroke(a,l,this.stroke,p,this.getLineWidth()),c.fill(a,l,this.fill,p),c.end(a,l)};var h="http://www.w3.org/2000/svg";return f.prototype.getRenderElement=function(a,c){if(c.isSvg)return this.svgElement||(this.svgElement=document.createElementNS(h,"path"),this.svgElement.setAttribute("stroke-linecap","round"),this.svgElement.setAttribute("stroke-linejoin","round")),this.svgElement},f})}(Ce)),ft}var ct={},Re={get exports(){return ct},set exports(u){ct=u}},jt;function oe(){return jt||(jt=1,function(u){(function(n,r){if(u.exports)u.exports=r(D());else{var t=n.Zdog;t.Group=r(t.Anchor)}})($,function(r){var t=r.subclass({updateSort:!1,visible:!0});return t.prototype.updateSortValue=function(){var i=0;this.flatGraph.forEach(function(o){o.updateSortValue(),i+=o.sortValue}),this.sortValue=i/this.flatGraph.length,this.updateSort&&this.flatGraph.sort(r.shapeSorter)},t.prototype.render=function(i,o){this.visible&&this.flatGraph.forEach(function(f){f.render(i,o)})},t.prototype.updateFlatGraph=function(){var i=[];this.flatGraph=this.addChildFlatGraph(i)},t.prototype.getFlatGraph=function(){return[this]},t})}(Re)),ct}var lt={},Ee={get exports(){return lt},set exports(u){lt=u}},Xt;function ae(){return Xt||(Xt=1,function(u){(function(n,r){if(u.exports)u.exports=r(B());else{var t=n.Zdog;t.Rect=r(t.Shape)}})($,function(r){var t=r.subclass({width:1,height:1});return t.prototype.setPath=function(){var i=this.width/2,o=this.height/2;this.path=[{x:-i,y:-o},{x:i,y:-o},{x:i,y:o},{x:-i,y:o}]},t})}(Ee)),lt}var pt={},_e={get exports(){return pt},set exports(u){pt=u}},Ht;function Pe(){return Ht||(Ht=1,function(u){(function(n,r){if(u.exports)u.exports=r(B());else{var t=n.Zdog;t.RoundedRect=r(t.Shape)}})($,function(r){var t=r.subclass({width:1,height:1,cornerRadius:.25,closed:!1});return t.prototype.setPath=function(){var i=this.width/2,o=this.height/2,f=Math.min(i,o),e=Math.min(this.cornerRadius,f),s=i-e,h=o-e,a=[{x:s,y:-o},{arc:[{x:i,y:-o},{x:i,y:-h}]}];h&&a.push({x:i,y:h}),a.push({arc:[{x:i,y:o},{x:s,y:o}]}),s&&a.push({x:-s,y:o}),a.push({arc:[{x:-i,y:o},{x:-i,y:h}]}),h&&a.push({x:-i,y:-h}),a.push({arc:[{x:-i,y:-o},{x:-s,y:-o}]}),s&&a.push({x:s,y:-o}),this.path=a},t})}(_e)),pt}var dt={},ze={get exports(){return dt},set exports(u){dt=u}},Yt;function Et(){return Yt||(Yt=1,function(u){(function(n,r){if(u.exports)u.exports=r(B());else{var t=n.Zdog;t.Ellipse=r(t.Shape)}})($,function(r){var t=r.subclass({diameter:1,width:void 0,height:void 0,quarters:4,closed:!1});return t.prototype.setPath=function(){var i=this.width!=null?this.width:this.diameter,o=this.height!=null?this.height:this.diameter,f=i/2,e=o/2;this.path=[{x:0,y:-e},{arc:[{x:f,y:-e},{x:f,y:0}]}],this.quarters>1&&this.path.push({arc:[{x:f,y:e},{x:0,y:e}]}),this.quarters>2&&this.path.push({arc:[{x:-f,y:e},{x:-f,y:0}]}),this.quarters>3&&this.path.push({arc:[{x:-f,y:-e},{x:0,y:-e}]})},t})}(ze)),dt}var vt={},Ae={get exports(){return vt},set exports(u){vt=u}},Kt;function ke(){return Kt||(Kt=1,function(u){(function(n,r){if(u.exports)u.exports=r(G(),B());else{var t=n.Zdog;t.Polygon=r(t,t.Shape)}})($,function(r,t){var i=t.subclass({sides:3,radius:.5}),o=r.TAU;return i.prototype.setPath=function(){this.path=[];for(var f=0;f<this.sides;f++){var e=f/this.sides*o-o/4,s=Math.cos(e)*this.radius,h=Math.sin(e)*this.radius;this.path.push({x:s,y:h})}},i})}(Ae)),vt}var mt={},Ge={get exports(){return mt},set exports(u){mt=u}},Qt;function qe(){return Qt||(Qt=1,function(u){(function(n,r){if(u.exports)u.exports=r(G(),L(),D(),Et());else{var t=n.Zdog;t.Hemisphere=r(t,t.Vector,t.Anchor,t.Ellipse)}})($,function(r,t,i,o){var f=o.subclass({fill:!0}),e=r.TAU;f.prototype.create=function(){o.prototype.create.apply(this,arguments),this.apex=new i({addTo:this,translate:{z:this.diameter/2}}),this.renderCentroid=new t},f.prototype.updateSortValue=function(){this.renderCentroid.set(this.renderOrigin).lerp(this.apex.renderOrigin,3/8),this.sortValue=this.renderCentroid.z},f.prototype.render=function(h,a){this.renderDome(h,a),o.prototype.render.apply(this,arguments)},f.prototype.renderDome=function(h,a){if(this.visible){var c=this.getDomeRenderElement(h,a),l=Math.atan2(this.renderNormal.y,this.renderNormal.x),v=this.diameter/2*this.renderNormal.magnitude(),d=this.renderOrigin.x,p=this.renderOrigin.y;if(a.isCanvas){var m=l+e/4,x=l-e/4;h.beginPath(),h.arc(d,p,v,m,x)}else a.isSvg&&(l=(l-e/4)/e*360,this.domeSvgElement.setAttribute("d","M "+-v+",0 A "+v+","+v+" 0 0 1 "+v+",0"),this.domeSvgElement.setAttribute("transform","translate("+d+","+p+" ) rotate("+l+")"));a.stroke(h,c,this.stroke,this.color,this.getLineWidth()),a.fill(h,c,this.fill,this.color),a.end(h,c)}};var s="http://www.w3.org/2000/svg";return f.prototype.getDomeRenderElement=function(h,a){if(a.isSvg)return this.domeSvgElement||(this.domeSvgElement=document.createElementNS(s,"path"),this.domeSvgElement.setAttribute("stroke-linecap","round"),this.domeSvgElement.setAttribute("stroke-linejoin","round")),this.domeSvgElement},f})}(Ge)),mt}var gt={},Te={get exports(){return gt},set exports(u){gt=u}},Jt;function Fe(){return Jt||(Jt=1,function(u){(function(n,r){if(u.exports)u.exports=r(G(),Rt(),B(),oe(),Et());else{var t=n.Zdog;t.Cylinder=r(t,t.PathCommand,t.Shape,t.Group,t.Ellipse)}})($,function(r,t,i,o,f){function e(){}var s=o.subclass({color:"#333",updateSort:!0});s.prototype.create=function(){o.prototype.create.apply(this,arguments),this.pathCommands=[new t("move",[{}]),new t("line",[{}])]},s.prototype.render=function(d,p){this.renderCylinderSurface(d,p),o.prototype.render.apply(this,arguments)},s.prototype.renderCylinderSurface=function(d,p){if(this.visible){var m=this.getRenderElement(d,p),x=this.frontBase,_=this.rearBase,P=x.renderNormal.magnitude(),N=x.diameter*P+x.getLineWidth();this.pathCommands[0].renderPoints[0].set(x.renderOrigin),this.pathCommands[1].renderPoints[0].set(_.renderOrigin),p.isCanvas&&(d.lineCap="butt"),p.renderPath(d,m,this.pathCommands),p.stroke(d,m,!0,this.color,N),p.end(d,m),p.isCanvas&&(d.lineCap="round")}};var h="http://www.w3.org/2000/svg";s.prototype.getRenderElement=function(d,p){if(p.isSvg)return this.svgElement||(this.svgElement=document.createElementNS(h,"path")),this.svgElement},s.prototype.copyGraph=e;var a=f.subclass();a.prototype.copyGraph=e;var c=i.subclass({diameter:1,length:1,frontFace:void 0,fill:!0}),l=r.TAU;c.prototype.create=function(){i.prototype.create.apply(this,arguments),this.group=new s({addTo:this,color:this.color,visible:this.visible});var d=this.length/2,p=this.backface||!0;this.frontBase=this.group.frontBase=new f({addTo:this.group,diameter:this.diameter,translate:{z:d},rotate:{y:l/2},color:this.color,stroke:this.stroke,fill:this.fill,backface:this.frontFace||p,visible:this.visible}),this.rearBase=this.group.rearBase=this.frontBase.copy({translate:{z:-d},rotate:{y:0},backface:p})},c.prototype.render=function(){};var v=["stroke","fill","color","visible"];return v.forEach(function(d){var p="_"+d;Object.defineProperty(c.prototype,d,{get:function(){return this[p]},set:function(m){this[p]=m,this.frontBase&&(this.frontBase[d]=m,this.rearBase[d]=m,this.group[d]=m)}})}),c})}(Te)),gt}var yt={},Me={get exports(){return yt},set exports(u){yt=u}},Zt;function Oe(){return Zt||(Zt=1,function(u){(function(n,r){if(u.exports)u.exports=r(G(),L(),Rt(),D(),Et());else{var t=n.Zdog;t.Cone=r(t,t.Vector,t.PathCommand,t.Anchor,t.Ellipse)}})($,function(r,t,i,o,f){var e=f.subclass({length:1,fill:!0}),s=r.TAU;e.prototype.create=function(){f.prototype.create.apply(this,arguments),this.apex=new o({addTo:this,translate:{z:this.length}}),this.renderApex=new t,this.renderCentroid=new t,this.tangentA=new t,this.tangentB=new t,this.surfacePathCommands=[new i("move",[{}]),new i("line",[{}]),new i("line",[{}])]},e.prototype.updateSortValue=function(){this.renderCentroid.set(this.renderOrigin).lerp(this.apex.renderOrigin,1/3),this.sortValue=this.renderCentroid.z},e.prototype.render=function(a,c){this.renderConeSurface(a,c),f.prototype.render.apply(this,arguments)},e.prototype.renderConeSurface=function(a,c){if(this.visible){this.renderApex.set(this.apex.renderOrigin).subtract(this.renderOrigin);var l=this.renderNormal.magnitude(),v=this.renderApex.magnitude2d(),d=this.renderNormal.magnitude2d(),p=Math.acos(d/l),m=Math.sin(p),x=this.diameter/2*l,_=x*m<v;if(_){var P=Math.atan2(this.renderNormal.y,this.renderNormal.x)+s/2,N=v/m,Gt=Math.acos(x/N),V=this.tangentA,I=this.tangentB;V.x=Math.cos(Gt)*x*m,V.y=Math.sin(Gt)*x,I.set(this.tangentA),I.y*=-1,V.rotateZ(P),I.rotateZ(P),V.add(this.renderOrigin),I.add(this.renderOrigin),this.setSurfaceRenderPoint(0,V),this.setSurfaceRenderPoint(1,this.apex.renderOrigin),this.setSurfaceRenderPoint(2,I);var Z=this.getSurfaceRenderElement(a,c);c.renderPath(a,Z,this.surfacePathCommands),c.stroke(a,Z,this.stroke,this.color,this.getLineWidth()),c.fill(a,Z,this.fill,this.color),c.end(a,Z)}}};var h="http://www.w3.org/2000/svg";return e.prototype.getSurfaceRenderElement=function(a,c){if(c.isSvg)return this.surfaceSvgElement||(this.surfaceSvgElement=document.createElementNS(h,"path"),this.surfaceSvgElement.setAttribute("stroke-linecap","round"),this.surfaceSvgElement.setAttribute("stroke-linejoin","round")),this.surfaceSvgElement},e.prototype.setSurfaceRenderPoint=function(a,c){var l=this.surfacePathCommands[a].renderPoints[0];l.set(c)},e})}(Me)),yt}var xt={},Ue={get exports(){return xt},set exports(u){xt=u}},te;function De(){return te||(te=1,function(u){(function(n,r){if(u.exports)u.exports=r(G(),D(),B(),ae());else{var t=n.Zdog;t.Box=r(t,t.Anchor,t.Shape,t.Rect)}})($,function(r,t,i,o){var f=o.subclass();f.prototype.copyGraph=function(){};var e=r.TAU,s=["frontFace","rearFace","leftFace","rightFace","topFace","bottomFace"],h=r.extend({},i.defaults);delete h.path,s.forEach(function(l){h[l]=!0}),r.extend(h,{width:1,height:1,depth:1,fill:!0});var a=t.subclass(h);a.prototype.create=function(l){t.prototype.create.call(this,l),this.updatePath(),this.fill=this.fill},a.prototype.updatePath=function(){s.forEach(function(l){this[l]=this[l]},this)},s.forEach(function(l){var v="_"+l;Object.defineProperty(a.prototype,l,{get:function(){return this[v]},set:function(d){this[v]=d,this.setFace(l,d)}})}),a.prototype.setFace=function(l,v){var d=l+"Rect",p=this[d];if(!v){this.removeChild(p);return}var m=this.getFaceOptions(l);m.color=typeof v=="string"?v:this.color,p?p.setOptions(m):p=this[d]=new f(m),p.updatePath(),this.addChild(p)},a.prototype.getFaceOptions=function(l){return{frontFace:{width:this.width,height:this.height,translate:{z:this.depth/2}},rearFace:{width:this.width,height:this.height,translate:{z:-this.depth/2},rotate:{y:e/2}},leftFace:{width:this.depth,height:this.height,translate:{x:-this.width/2},rotate:{y:-e/4}},rightFace:{width:this.depth,height:this.height,translate:{x:this.width/2},rotate:{y:e/4}},topFace:{width:this.width,height:this.depth,translate:{y:-this.height/2},rotate:{x:-e/4}},bottomFace:{width:this.width,height:this.depth,translate:{y:this.height/2},rotate:{x:e/4}}}[l]};var c=["color","stroke","fill","backface","front","visible"];return c.forEach(function(l){var v="_"+l;Object.defineProperty(a.prototype,l,{get:function(){return this[v]},set:function(d){this[v]=d,s.forEach(function(p){var m=this[p+"Rect"],x=typeof this[p]=="string",_=l=="color"&&x;m&&!_&&(m[l]=d)},this)}})}),a})}(Ue)),xt}(function(u){(function(n,r){u.exports&&(u.exports=r(G(),ne(),ie(),L(),D(),se(),be(),Rt(),B(),oe(),ae(),Pe(),Et(),ke(),qe(),Fe(),Oe(),De()))})($,function(r,t,i,o,f,e,s,h,a,c,l,v,d,p,m,x,_,P){return r.CanvasRenderer=t,r.SvgRenderer=i,r.Vector=o,r.Anchor=f,r.Dragger=e,r.Illustration=s,r.PathCommand=h,r.Shape=a,r.Group=c,r.Rect=l,r.RoundedRect=v,r.Ellipse=d,r.Polygon=p,r.Hemisphere=m,r.Cylinder=x,r.Cone=_,r.Box=P,r})})(de);const X=R;function Be(u){let n;const r=u[2].default,t=wt(r,u,u[1],null);return{c(){t&&t.c()},l(i){t&&t.l(i)},m(i,o){t&&t.m(i,o),n=!0},p(i,[o]){t&&t.p&&(!n||o&2)&&bt(t,r,i,i[1],n?Ct(r,i[1],o,null):St(i[1]),null)},i(i){n||(g(t,i),n=!0)},o(i){y(t,i),n=!1},d(i){t&&t.d(i)}}}function Le(u,n,r){let{$$slots:t={},$$scope:i}=n;const o=At(X.Ellipse,n);return u.$$set=f=>{r(3,n=q(q({},n),O(f))),"$$scope"in f&&r(1,i=f.$$scope)},n=O(n),[o,i,t]}class _t extends H{constructor(n){super(),Y(this,n,Le,Be,K,{node:0})}get node(){return this.$$.ctx[0]}}function Ne(u){let n;return{c(){n=ce("svg"),this.h()},l(r){n=le(r,"svg",{width:!0,height:!0}),j(n).forEach(E),this.h()},h(){z(n,"width",u[1]),z(n,"height",u[2])},m(r,t){k(r,n,t),u[8](n)},p(r,t){t&2&&z(n,"width",r[1]),t&4&&z(n,"height",r[2])},d(r){r&&E(n),u[8](null)}}}function Ve(u){let n;return{c(){n=tt("canvas"),this.h()},l(r){n=et(r,"CANVAS",{width:!0,height:!0}),j(n).forEach(E),this.h()},h(){z(n,"width",u[1]),z(n,"height",u[2])},m(r,t){k(r,n,t),u[7](n)},p(r,t){t&2&&z(n,"width",r[1]),t&4&&z(n,"height",r[2])},d(r){r&&E(n),u[7](null)}}}function Ie(u){let n,r;function t(s,h){if(s[0]==="canvas")return Ve;if(s[0]==="svg")return Ne}let i=t(u),o=i&&i(u);const f=u[6].default,e=wt(f,u,u[5],null);return{c(){o&&o.c(),n=T(),e&&e.c()},l(s){o&&o.l(s),n=F(s),e&&e.l(s)},m(s,h){o&&o.m(s,h),k(s,n,h),e&&e.m(s,h),r=!0},p(s,[h]){i===(i=t(s))&&o?o.p(s,h):(o&&o.d(1),o=i&&i(s),o&&(o.c(),o.m(n.parentNode,n))),e&&e.p&&(!r||h&32)&&bt(e,f,s,s[5],r?Ct(f,s[5],h,null):St(s[5]),null)},i(s){r||(g(e,s),r=!0)},o(s){y(e,s),r=!1},d(s){o&&o.d(s),s&&E(n),e&&e.d(s)}}}function We(u,n,r){const t=["element","update","width","height"];let i=qt(n,t),{$$slots:o={},$$scope:f}=n,{element:e="canvas"}=n,{update:s=void 0}=n,{width:h}=n,{height:a}=n,c;const l={scene:new X.Anchor,subscribers:[],subscribe:p=>(l.subscribers.push(p),()=>l.subscribers=l.subscribers.filter(m=>m!==p))};Je(l),fe(l.scene),ee(()=>{const p=new X.Illustration({...i,element:c});p.addChild(l.scene),p.updateGraph();let m;s&&(m=l.subscribe(s(l.scene)));let x;const _=(P=0)=>{l.subscribers.forEach(N=>N(P)),p.updateRenderGraph(),x=requestAnimationFrame(_)};return _(),()=>{m==null||m(),cancelAnimationFrame(x)}});function v(p){Tt[p?"unshift":"push"](()=>{c=p,r(3,c)})}function d(p){Tt[p?"unshift":"push"](()=>{c=p,r(3,c)})}return u.$$set=p=>{n=q(q({},n),O(p)),r(10,i=qt(n,t)),"element"in p&&r(0,e=p.element),"update"in p&&r(4,s=p.update),"width"in p&&r(1,h=p.width),"height"in p&&r(2,a=p.height),"$$scope"in p&&r(5,f=p.$$scope)},[e,h,a,c,s,f,o,v,d]}class je extends H{constructor(n){super(),Y(this,n,We,Ie,K,{element:0,update:4,width:1,height:2})}}function Xe(u){let n;const r=u[2].default,t=wt(r,u,u[1],null);return{c(){t&&t.c()},l(i){t&&t.l(i)},m(i,o){t&&t.m(i,o),n=!0},p(i,[o]){t&&t.p&&(!n||o&2)&&bt(t,r,i,i[1],n?Ct(r,i[1],o,null):St(i[1]),null)},i(i){n||(g(t,i),n=!0)},o(i){y(t,i),n=!1},d(i){t&&t.d(i)}}}function He(u,n,r){let{$$slots:t={},$$scope:i}=n;const o=At(X.RoundedRect,n);return u.$$set=f=>{r(3,n=q(q({},n),O(f))),"$$scope"in f&&r(1,i=f.$$scope)},n=O(n),[o,i,t]}class he extends H{constructor(n){super(),Y(this,n,He,Xe,K,{node:0})}get node(){return this.$$.ctx[0]}}function Ye(u){let n;const r=u[2].default,t=wt(r,u,u[1],null);return{c(){t&&t.c()},l(i){t&&t.l(i)},m(i,o){t&&t.m(i,o),n=!0},p(i,[o]){t&&t.p&&(!n||o&2)&&bt(t,r,i,i[1],n?Ct(r,i[1],o,null):St(i[1]),null)},i(i){n||(g(t,i),n=!0)},o(i){y(t,i),n=!1},d(i){t&&t.d(i)}}}function Ke(u,n,r){let{$$slots:t={},$$scope:i}=n;const o=At(X.Shape,n);return u.$$set=f=>{r(3,n=q(q({},n),O(f))),"$$scope"in f&&r(1,i=f.$$scope)},n=O(n),[o,i,t]}class A extends H{constructor(n){super(),Y(this,n,Ke,Ye,K,{node:0})}get node(){return this.$$.ctx[0]}}const zt=Symbol(),Qe=()=>Pt(zt).scene,Je=u=>re(zt,u),Ze=u=>pe(Pt(zt).subscribe(u)),ue=Symbol(),tr=()=>Pt(ue),fe=u=>re(ue,u),At=(u,n)=>{const r=Qe(),t=tr(),{update:i,...o}=n,f=new u(o);return fe(f),i&&Ze(i(f)),ee(()=>(t.addChild(f),r.updateGraph(),()=>{t.removeChild(f),t.updateGraph(),r.updateGraph()})),f};function er(u){let n,r;return n=new he({props:{width:2,height:4,cornerRadius:1,translate:{y:14,z:2},rotate:{x:R.TAU/4},color:kt,stroke:4,fill:!0}}),{c(){w(n.$$.fragment)},l(t){b(n.$$.fragment,t)},m(t,i){S(n,t,i),r=!0},p:Q,i(t){r||(g(n.$$.fragment,t),r=!0)},o(t){y(n.$$.fragment,t),r=!1},d(t){C(n,t)}}}function rr(u){let n,r;return n=new he({props:{width:2,height:4,cornerRadius:1,translate:{y:14,z:2},rotate:{x:-R.TAU/8},color:kt,stroke:4,fill:!0}}),{c(){w(n.$$.fragment)},l(t){b(n.$$.fragment,t)},m(t,i){S(n,t,i),r=!0},p:Q,i(t){r||(g(n.$$.fragment,t),r=!0)},o(t){y(n.$$.fragment,t),r=!1},d(t){C(n,t)}}}function nr(u){let n,r,t,i,o,f;return n=new _t({props:{diameter:2,quarters:2,translate:{x:-2,y:1,z:4.5},rotate:{z:-R.TAU/4},color:U,stroke:.5,backface:!1}}),t=new _t({props:{diameter:2,quarters:2,translate:{x:2,y:1,z:4.5},rotate:{z:-R.TAU/4},backface:!1,color:U,stroke:.5}}),o=new _t({props:{diameter:3,quarters:2,translate:{y:2.5,z:4.5},rotate:{z:R.TAU/4},backface:!1,color:lr,stroke:.5,closed:!0,fill:!0}}),{c(){w(n.$$.fragment),r=T(),w(t.$$.fragment),i=T(),w(o.$$.fragment)},l(e){b(n.$$.fragment,e),r=F(e),b(t.$$.fragment,e),i=F(e),b(o.$$.fragment,e)},m(e,s){S(n,e,s),k(e,r,s),S(t,e,s),k(e,i,s),S(o,e,s),f=!0},p:Q,i(e){f||(g(n.$$.fragment,e),g(t.$$.fragment,e),g(o.$$.fragment,e),f=!0)},o(e){y(n.$$.fragment,e),y(t.$$.fragment,e),y(o.$$.fragment,e),f=!1},d(e){C(n,e),e&&E(r),C(t,e),e&&E(i),C(o,e)}}}function ir(u){let n,r;return n=new A({props:{translate:{z:1,y:M},color:J,stroke:6}}),{c(){w(n.$$.fragment)},l(t){b(n.$$.fragment,t)},m(t,i){S(n,t,i),r=!0},p:Q,i(t){r||(g(n.$$.fragment,t),r=!0)},o(t){y(n.$$.fragment,t),r=!1},d(t){C(n,t)}}}function sr(u){let n,r;return n=new A({props:{path:[{y:0},{y:M}],translate:{y:M},rotate:{x:R.TAU/8},color:J,stroke:4,$$slots:{default:[ir]},$$scope:{ctx:u}}}),{c(){w(n.$$.fragment)},l(t){b(n.$$.fragment,t)},m(t,i){S(n,t,i),r=!0},p(t,i){const o={};i&1&&(o.$$scope={dirty:i,ctx:t}),n.$set(o)},i(t){r||(g(n.$$.fragment,t),r=!0)},o(t){y(n.$$.fragment,t),r=!1},d(t){C(n,t)}}}function or(u){let n,r;return n=new A({props:{translate:{z:1,y:M},color:J,stroke:6}}),{c(){w(n.$$.fragment)},l(t){b(n.$$.fragment,t)},m(t,i){S(n,t,i),r=!0},p:Q,i(t){r||(g(n.$$.fragment,t),r=!0)},o(t){y(n.$$.fragment,t),r=!1},d(t){C(n,t)}}}function ar(u){let n,r;return n=new A({props:{path:[{y:0},{y:M}],translate:{y:M},rotate:{x:R.TAU/8},color:J,stroke:4,$$slots:{default:[or]},$$scope:{ctx:u}}}),{c(){w(n.$$.fragment)},l(t){b(n.$$.fragment,t)},m(t,i){S(n,t,i),r=!0},p(t,i){const o={};i&1&&(o.$$scope={dirty:i,ctx:t}),n.$set(o)},i(t){r||(g(n.$$.fragment,t),r=!0)},o(t){y(n.$$.fragment,t),r=!1},d(t){C(n,t)}}}function hr(u){let n,r,t,i,o,f;return n=new A({props:{translate:{y:-9.5},color:J,stroke:12,$$slots:{default:[nr]},$$scope:{ctx:u}}}),t=new A({props:{path:[{y:0},{y:M}],translate:{x:-5,y:-2},rotate:{x:-R.TAU/4},color:U,stroke:4,$$slots:{default:[sr]},$$scope:{ctx:u}}}),o=new A({props:{path:[{y:0},{y:M}],translate:{x:5,y:-2},rotate:{x:R.TAU/4},color:U,stroke:4,$$slots:{default:[ar]},$$scope:{ctx:u}}}),{c(){w(n.$$.fragment),r=T(),w(t.$$.fragment),i=T(),w(o.$$.fragment)},l(e){b(n.$$.fragment,e),r=F(e),b(t.$$.fragment,e),i=F(e),b(o.$$.fragment,e)},m(e,s){S(n,e,s),k(e,r,s),S(t,e,s),k(e,i,s),S(o,e,s),f=!0},p(e,s){const h={};s&1&&(h.$$scope={dirty:s,ctx:e}),n.$set(h);const a={};s&1&&(a.$$scope={dirty:s,ctx:e}),t.$set(a);const c={};s&1&&(c.$$scope={dirty:s,ctx:e}),o.$set(c)},i(e){f||(g(n.$$.fragment,e),g(t.$$.fragment,e),g(o.$$.fragment,e),f=!0)},o(e){y(n.$$.fragment,e),y(t.$$.fragment,e),y(o.$$.fragment,e),f=!1},d(e){C(n,e),e&&E(r),C(t,e),e&&E(i),C(o,e)}}}function ur(u){let n,r,t,i,o,f;return n=new A({props:{path:[{y:0},{y:12}],translate:{x:-$t},rotate:{x:R.TAU/4},color:U,stroke:4,$$slots:{default:[er]},$$scope:{ctx:u}}}),t=new A({props:{path:[{y:0},{y:12}],translate:{x:$t},rotate:{x:-R.TAU/8},color:U,stroke:4,$$slots:{default:[rr]},$$scope:{ctx:u}}}),o=new A({props:{path:[{x:-1.5},{x:1.5}],translate:{y:-6.5},rotate:{x:R.TAU/8},color:kt,stroke:9,$$slots:{default:[hr]},$$scope:{ctx:u}}}),{c(){w(n.$$.fragment),r=T(),w(t.$$.fragment),i=T(),w(o.$$.fragment)},l(e){b(n.$$.fragment,e),r=F(e),b(t.$$.fragment,e),i=F(e),b(o.$$.fragment,e)},m(e,s){S(n,e,s),k(e,r,s),S(t,e,s),k(e,i,s),S(o,e,s),f=!0},p(e,s){const h={};s&1&&(h.$$scope={dirty:s,ctx:e}),n.$set(h);const a={};s&1&&(a.$$scope={dirty:s,ctx:e}),t.$set(a);const c={};s&1&&(c.$$scope={dirty:s,ctx:e}),o.$set(c)},i(e){f||(g(n.$$.fragment,e),g(t.$$.fragment,e),g(o.$$.fragment,e),f=!0)},o(e){y(n.$$.fragment,e),y(t.$$.fragment,e),y(o.$$.fragment,e),f=!1},d(e){C(n,e),e&&E(r),C(t,e),e&&E(i),C(o,e)}}}function fr(u){let n,r;return n=new A({props:{path:[{x:-$t},{x:$t}],translate:{y:2},stroke:4,color:U,$$slots:{default:[ur]},$$scope:{ctx:u}}}),{c(){w(n.$$.fragment)},l(t){b(n.$$.fragment,t)},m(t,i){S(n,t,i),r=!0},p(t,i){const o={};i&1&&(o.$$scope={dirty:i,ctx:t}),n.$set(o)},i(t){r||(g(n.$$.fragment,t),r=!0)},o(t){y(n.$$.fragment,t),r=!1},d(t){C(n,t)}}}function cr(u){let n,r,t,i,o,f,e,s;return r=new je({props:{element:"svg",width:240,height:240,zoom:5,dragRotate:!0,rotate:{y:-R.TAU/8},update:pr,$$slots:{default:[fr]},$$scope:{ctx:u}}}),{c(){n=tt("main"),w(r.$$.fragment),t=T(),i=tt("h1"),o=tt("small"),f=Ft("made with"),e=Ft(`
    svelte-zdog`),this.h()},l(h){n=et(h,"MAIN",{class:!0});var a=j(n);b(r.$$.fragment,a),t=F(a),i=et(a,"H1",{class:!0});var c=j(i);o=et(c,"SMALL",{class:!0});var l=j(o);f=Mt(l,"made with"),l.forEach(E),e=Mt(c,`
    svelte-zdog`),c.forEach(E),a.forEach(E),this.h()},h(){z(o,"class","svelte-1m9yk97"),z(i,"class","svelte-1m9yk97"),z(n,"class","svelte-1m9yk97")},m(h,a){k(h,n,a),S(r,n,null),W(n,t),W(n,i),W(i,o),W(o,f),W(i,e),s=!0},p(h,[a]){const c={};a&1&&(c.$$scope={dirty:a,ctx:h}),r.$set(c)},i(h){s||(g(r.$$.fragment,h),s=!0)},o(h){y(r.$$.fragment,h),s=!1},d(h){h&&E(n),C(r)}}}const lr="#e88",J="#ffe0da",kt="#ffb700",U="#444",$t=3,M=6,pr=u=>n=>u.rotate.y+=.005;class vr extends H{constructor(n){super(),Y(this,n,null,cr,K,{})}}export{vr as default};
