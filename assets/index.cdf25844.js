var ae=Object.defineProperty,ce=Object.defineProperties;var fe=Object.getOwnPropertyDescriptors;var ee=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var te=(t,e,n)=>e in t?ae(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,X=(t,e)=>{for(var n in e||(e={}))de.call(e,n)&&te(t,n,e[n]);if(ee)for(var n of ee(e))pe.call(e,n)&&te(t,n,e[n]);return t},W=(t,e)=>ce(t,fe(e));import{S as P,i as A,s as j,e as g,t as ne,a as _,b as re,c as k,d as m,l as R,f as z,p as G,n as D,g as L,r as K,h as se,j as w,k as y,m as B,o as N,q as Y,u as b,v as E,w as T,x as le,y as J,z as Q,A as me,B as q,C as V,D as _e,E as U,F as Z,G as ge}from"./vendor.ef35d6d5.js";const he=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};he();function ve(t){let e,n,l,i,s,r,f;return{c(){e=g("p"),n=ne(`Drag-and-drop an image here, or
  `),l=g("label"),i=ne(`click to select one from your computer
    `),s=g("input"),_(s,"type","file"),re(s,"display","none"),_(l,"class","svelte-gjwl6w")},m(a,u){k(a,e,u),m(e,n),m(e,l),m(l,i),m(l,s),r||(f=[R(window,"dragenter",z(G(t[2]))),R(window,"dragover",z(G(t[3]))),R(window,"drop",z(G(t[4]))),R(s,"input",t[5])],r=!0)},p:D,i:D,o:D,d(a){a&&L(e),r=!1,K(f)}}}function we(t,e,n){let{src:l}=e;function i(u){if(l){const o=l;n(1,l=null),URL.revokeObjectURL(o)}n(1,l=URL.createObjectURL(u))}function s(u){se.call(this,t,u)}function r(u){se.call(this,t,u)}const f=u=>i(u.dataTransfer.files[0]),a=u=>i(u.target.files[0]);return t.$$set=u=>{"src"in u&&n(1,l=u.src)},[i,l,s,r,f,a]}class be extends P{constructor(e){super();A(this,e,we,ve,j,{src:1})}}function ye(t){return t.type=="touchstart"||t.type=="touchmove"||t.type=="touchend"}function C(t,e){let n={};typeof e=="function"?n={onDrag:e}:typeof e=="object"&&(n=e);let l=null;function i(o){return ye(o)?{x:o.touches[0].clientX,y:o.touches[0].clientX}:{x:o.clientX,y:o.clientY}}function s(o){const h=t.getBoundingClientRect();return{x:o.x-h.x,y:o.y-h.y}}function r(o){return{dx:o.x-l.x,dy:o.y-l.y}}function f(o){o.preventDefault(),o.stopPropagation(),l=i(o),n.onStart&&n.onStart(s(l)),window.addEventListener("mousemove",a),window.addEventListener("touchmove",a),window.addEventListener("mouseup",u),window.addEventListener("touchend",u)}function a(o){o.preventDefault(),o.stopPropagation();const h=i(o),p=r(h);l=h,n.onDrag&&n.onDrag(p)}function u(o){o.preventDefault(),o.stopPropagation(),window.removeEventListener("mousemove",a),window.removeEventListener("touchmove",a),window.removeEventListener("mouseup",u),window.removeEventListener("touchend",u)}return t.addEventListener("touchstart",f),t.addEventListener("mousedown",f),{destroy(){t.removeEventListener("touchstart",f),t.removeEventListener("mousedown",f)}}}function ke(t){let e,n,l,i,s,r,f,a,u,o,h,p,c,d,v,S,$,M,O,F,x;return{c(){e=g("div"),n=g("div"),l=w(),i=g("div"),s=w(),r=g("div"),f=w(),a=g("div"),u=w(),o=g("div"),h=w(),p=g("div"),c=w(),d=g("div"),v=w(),S=g("div"),$=w(),M=g("div"),_(n,"class","area svelte-18kwcfp"),_(i,"class","tl svelte-18kwcfp"),_(r,"class","t svelte-18kwcfp"),_(a,"class","tr svelte-18kwcfp"),_(o,"class","r svelte-18kwcfp"),_(p,"class","br svelte-18kwcfp"),_(d,"class","b svelte-18kwcfp"),_(S,"class","bl svelte-18kwcfp"),_(M,"class","l svelte-18kwcfp"),_(e,"class","crop-area svelte-18kwcfp"),_(e,"style",O=`left:${t[0].x}px; top:${t[0].y}px; width:${t[0].w}px; height:${t[0].h}px;`)},m(I,H){k(I,e,H),m(e,n),m(e,l),m(e,i),m(e,s),m(e,r),m(e,f),m(e,a),m(e,u),m(e,o),m(e,h),m(e,p),m(e,c),m(e,d),m(e,v),m(e,S),m(e,$),m(e,M),F||(x=[y(C.call(null,n,t[5](t[1],t[2],t[3],t[4]))),y(C.call(null,i,t[5](t[2],t[1]))),y(C.call(null,r,t[2])),y(C.call(null,a,t[5](t[2],t[3]))),y(C.call(null,o,t[3])),y(C.call(null,p,t[5](t[4],t[3]))),y(C.call(null,d,t[4])),y(C.call(null,S,t[5](t[4],t[1]))),y(C.call(null,M,t[1]))],F=!0)},p(I,[H]){H&1&&O!==(O=`left:${I[0].x}px; top:${I[0].y}px; width:${I[0].w}px; height:${I[0].h}px;`)&&_(e,"style",O)},i:D,o:D,d(I){I&&L(e),F=!1,K(x)}}}function Le(t,e,n){let{bounds:l}=e;function i(u){n(0,l.x+=u.dx,l),n(0,l.w-=u.dx,l)}function s(u){n(0,l.y+=u.dy,l),n(0,l.h-=u.dy,l)}function r(u){n(0,l.w+=u.dx,l)}function f(u){n(0,l.h+=u.dy,l)}const a=(...u)=>o=>u.forEach(h=>h(o));return t.$$set=u=>{"bounds"in u&&n(0,l=u.bounds)},[l,i,s,r,f,a]}class Ee extends P{constructor(e){super();A(this,e,Le,ke,j,{bounds:0})}}function ie(t){let e,n,l;function i(r){t[7](r)}let s={};return t[2]!==void 0&&(s.bounds=t[2]),e=new Ee({props:s}),q.push(()=>V(e,"bounds",i)),{c(){B(e.$$.fragment)},m(r,f){N(e,r,f),l=!0},p(r,f){const a={};!n&&f&4&&(n=!0,a.bounds=r[2],Y(()=>n=!1)),e.$set(a)},i(r){l||(b(e.$$.fragment,r),l=!0)},o(r){E(e.$$.fragment,r),l=!1},d(r){T(e,r)}}}function Ce(t){let e,n,l,i,s,r,f,a=t[2]&&ie(t);return{c(){e=g("div"),n=g("img"),i=w(),a&&a.c(),le(n.src,l=t[0])||_(n,"src",l),_(n,"class","svelte-16apt3o"),_(e,"class","editor svelte-16apt3o")},m(u,o){k(u,e,o),m(e,n),t[6](n),m(e,i),a&&a.m(e,null),s=!0,r||(f=y(C.call(null,e,{onStart:t[3],onDrag:t[4]})),r=!0)},p(u,[o]){(!s||o&1&&!le(n.src,l=u[0]))&&_(n,"src",l),u[2]?a?(a.p(u,o),o&4&&b(a,1)):(a=ie(u),a.c(),b(a,1),a.m(e,null)):a&&(J(),E(a,1,1,()=>{a=null}),Q())},i(u){s||(b(a),s=!0)},o(u){E(a),s=!1},d(u){u&&L(e),t[6](null),a&&a.d(),r=!1,f()}}}function Ie(t,e,n){let{src:l}=e,{bounds:i}=e,s,r;me(()=>{i&&n(2,r=f(i))});function f(c){const d=s.width/s.naturalWidth,v=s.height/s.naturalHeight;return{x:c.x*d,y:c.y*v,w:c.w*d,h:c.h*v}}function a(c){const d=s.naturalWidth/s.width,v=s.naturalHeight/s.height;return{x:c.x*d,y:c.y*v,w:c.w*d,h:c.h*v}}function u(c){n(2,r=W(X({},c),{w:0,h:0}))}function o(c){n(2,r=W(X({},r),{w:r.w+c.dx,h:r.h+c.dy}))}function h(c){q[c?"unshift":"push"](()=>{s=c,n(1,s)})}function p(c){r=c,n(2,r)}return t.$$set=c=>{"src"in c&&n(0,l=c.src),"bounds"in c&&n(5,i=c.bounds)},t.$$.update=()=>{t.$$.dirty&6&&s&&r&&n(5,i=a(r))},[l,s,r,u,o,i,h,p]}class De extends P{constructor(e){super();A(this,e,Ie,Ce,j,{src:0,bounds:5})}}function Se(t,e){const n=t.getContext("2d");return e(n,t),{destroy(){},update(l){n.clearRect(0,0,t.width,t.height),l(n,t)}}}function Re(t){let e;return{c(){e=g("p"),e.textContent="(Draw an area on the image first!)"},m(n,l){k(n,e,l)},p:D,d(n){n&&L(e)}}}function Pe(t){let e,n,l,i;return{c(){e=g("canvas"),re(e,"max-width","100%")},m(s,r){k(s,e,r),l||(i=y(n=Se.call(null,e,t[2])),l=!0)},p(s,r){n&&ge(n.update)&&r&4&&n.update.call(null,s[2])},d(s){s&&L(e),l=!1,i()}}}function Ae(t){let e,n,l,i,s,r,f,a,u,o;function h(d,v){return d[0]?Pe:Re}let p=h(t),c=p(t);return{c(){e=g("p"),n=g("label"),n.textContent="How many mirrored images?",l=w(),i=g("input"),s=w(),r=g("input"),f=w(),c.c(),a=_e(),_(n,"for","mirrors"),_(i,"type","range"),_(i,"min","2"),_(i,"max","20"),_(i,"class","svelte-1ptle7u"),_(r,"id","mirrors"),_(r,"type","number"),_(r,"min","2"),_(r,"max","20"),_(r,"class","svelte-1ptle7u")},m(d,v){k(d,e,v),m(e,n),m(e,l),m(e,i),U(i,t[1]),m(e,s),m(e,r),U(r,t[1]),k(d,f,v),c.m(d,v),k(d,a,v),u||(o=[R(i,"change",t[5]),R(i,"input",t[5]),R(r,"input",t[6])],u=!0)},p(d,[v]){v&2&&U(i,d[1]),v&2&&Z(r.value)!==d[1]&&U(r,d[1]),p===(p=h(d))&&c?c.p(d,v):(c.d(1),c=p(d),c&&(c.c(),c.m(a.parentNode,a)))},i:D,o:D,d(d){d&&L(e),d&&L(f),c.d(d),d&&L(a),u=!1,K(o)}}}function je(t,e,n){let l,{src:i}=e,{bounds:s}=e,r=10,f;function a(){r=Z(this.value),n(1,r)}function u(){r=Z(this.value),n(1,r)}return t.$$set=o=>{"src"in o&&n(3,i=o.src),"bounds"in o&&n(0,s=o.bounds)},t.$$.update=()=>{t.$$.dirty&8&&(n(4,f=new Image),n(4,f.src=i,f)),t.$$.dirty&19&&n(2,l=(o,h)=>{h.width=r*s.w-r,h.height=s.h;for(let p=0;p<r;p++)p%2==0?o.drawImage(f,s.x,s.y,s.w,s.h,p*s.w-p,0,s.w,s.h):(o.save(),o.translate((p+1)*s.w,0),o.scale(-1,1),o.drawImage(f,s.x,s.y,s.w,s.h,p,0,s.w,s.h),o.restore())})},[s,r,l,i,f,a,u]}class Me extends P{constructor(e){super();A(this,e,je,Ae,j,{src:3,bounds:0})}}function oe(t){let e,n,l;function i(r){t[3](r)}let s={src:t[0]};return t[1]!==void 0&&(s.bounds=t[1]),e=new De({props:s}),q.push(()=>V(e,"bounds",i)),{c(){B(e.$$.fragment)},m(r,f){N(e,r,f),l=!0},p(r,f){const a={};f&1&&(a.src=r[0]),!n&&f&2&&(n=!0,a.bounds=r[1],Y(()=>n=!1)),e.$set(a)},i(r){l||(b(e.$$.fragment,r),l=!0)},o(r){E(e.$$.fragment,r),l=!1},d(r){T(e,r)}}}function ue(t){let e,n,l,i,s,r,f,a,u;return i=new Me({props:{src:t[0],bounds:t[1]}}),{c(){e=g("section"),n=g("h1"),n.textContent="2. Mirror",l=w(),B(i.$$.fragment),s=w(),r=g("h1"),r.textContent="3. Save it!",f=w(),a=g("p"),a.textContent="Right click the image and copy or save it!",_(n,"class","svelte-dxor6k"),_(r,"class","svelte-dxor6k"),_(e,"class","svelte-dxor6k")},m(o,h){k(o,e,h),m(e,n),m(e,l),N(i,e,null),m(e,s),m(e,r),m(e,f),m(e,a),u=!0},p(o,h){const p={};h&1&&(p.src=o[0]),h&2&&(p.bounds=o[1]),i.$set(p)},i(o){u||(b(i.$$.fragment,o),u=!0)},o(o){E(i.$$.fragment,o),u=!1},d(o){o&&L(e),T(i)}}}function Oe(t){let e,n,l,i,s,r,f,a,u;function o(d){t[2](d)}let h={};t[0]!==void 0&&(h.src=t[0]),s=new be({props:h}),q.push(()=>V(s,"src",o));let p=t[0]&&oe(t),c=t[0]&&ue(t);return{c(){e=g("main"),n=g("section"),l=g("h1"),l.textContent="1. Pick Image & Area",i=w(),B(s.$$.fragment),f=w(),p&&p.c(),a=w(),c&&c.c(),_(l,"class","svelte-dxor6k"),_(n,"class","svelte-dxor6k"),_(e,"class","svelte-dxor6k")},m(d,v){k(d,e,v),m(e,n),m(n,l),m(n,i),N(s,n,null),m(n,f),p&&p.m(n,null),m(e,a),c&&c.m(e,null),u=!0},p(d,[v]){const S={};!r&&v&1&&(r=!0,S.src=d[0],Y(()=>r=!1)),s.$set(S),d[0]?p?(p.p(d,v),v&1&&b(p,1)):(p=oe(d),p.c(),b(p,1),p.m(n,null)):p&&(J(),E(p,1,1,()=>{p=null}),Q()),d[0]?c?(c.p(d,v),v&1&&b(c,1)):(c=ue(d),c.c(),b(c,1),c.m(e,null)):c&&(J(),E(c,1,1,()=>{c=null}),Q())},i(d){u||(b(s.$$.fragment,d),b(p),b(c),u=!0)},o(d){E(s.$$.fragment,d),E(p),E(c),u=!1},d(d){d&&L(e),T(s),p&&p.d(),c&&c.d()}}}function Be(t,e,n){let l=null,i=null;function s(f){l=f,n(0,l)}function r(f){i=f,n(1,i)}return t.$$.update=()=>{t.$$.dirty&1&&console.log(l)},[l,i,s,r]}class Ne extends P{constructor(e){super();A(this,e,Be,Oe,j,{})}}new Ne({target:document.getElementById("app")});