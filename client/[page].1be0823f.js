import{A as t,B as n,a,b as e,c as r,d as s,i as o,s as i,e as c,S as f,P as u,C as p,D as g,G as l,q as h,N as $,K as m,L as v,Q as d,R as y,f as b,g as w,h as x,j as R,l as D,k as P,n as j,o as S,p as I,J as k,M as A,z as B,T as E}from"./client.d0b01b82.js";import{A as V}from"./parseImageSrc.421e74b8.js";import{P as q,S as z}from"./Pagination.4d3f4f2d.js";function C(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,s=e(t);if(n){var o=e(this).constructor;a=Reflect.construct(s,arguments,o)}else a=s.apply(this,arguments);return r(this,a)}}function G(t,n,a){var e=t.slice();return e[5]=n[a],e}function J(t){for(var n,a,e=[t[5]],r={},s=0;s<e.length;s+=1)r=E(r,e[s]);return n=new z({props:r}),{c:function(){p(n.$$.fragment)},l:function(t){g(n.$$.fragment,t)},m:function(t,e){l(n,t,e),a=!0},p:function(t,a){var r=2&a?d(e,[y(t[5])]):{};n.$set(r)},i:function(t){a||($(n.$$.fragment,t),a=!0)},o:function(t){m(n.$$.fragment,t),a=!1},d:function(t){v(n,t)}}}function K(t){for(var n,a,e,r,s,o=t[1].response,i=[],c=0;c<o.length;c+=1)i[c]=J(G(t,o,c));var f=function(t){return m(i[t],1,1,(function(){i[t]=null}))};return r=new q({props:{pagination:t[1].meta.pagination}}),{c:function(){n=b("div"),a=b("div");for(var t=0;t<i.length;t+=1)i[t].c();e=w(),p(r.$$.fragment),this.h()},l:function(t){n=x(t,"DIV",{class:!0});var s=R(n);a=x(s,"DIV",{class:!0});for(var o=R(a),c=0;c<i.length;c+=1)i[c].l(o);e=D(o),g(r.$$.fragment,o),o.forEach(P),s.forEach(P),this.h()},h:function(){j(a,"class","grid svelte-1g53gb"),j(n,"class","grid-wrap svelte-1g53gb")},m:function(t,o){S(t,n,o),I(n,a);for(var c=0;c<i.length;c+=1)i[c].m(a,null);I(a,e),l(r,a,null),s=!0},p:function(t,n){if(2&n){var s;for(o=t[1].response,s=0;s<o.length;s+=1){var c=G(t,o,s);i[s]?(i[s].p(c,n),$(i[s],1)):(i[s]=J(c),i[s].c(),$(i[s],1),i[s].m(a,e))}for(k(),s=o.length;s<i.length;s+=1)f(s);A()}var u={};2&n&&(u.pagination=t[1].meta.pagination),r.$set(u)},i:function(t){if(!s){for(var n=0;n<o.length;n+=1)$(i[n]);$(r.$$.fragment,t),s=!0}},o:function(t){i=i.filter(Boolean);for(var n=0;n<i.length;n+=1)m(i[n]);m(r.$$.fragment,t),s=!1},d:function(t){t&&P(n),B(i,t),v(r)}}}function L(t){var n,a;return n=new u({props:{pages:t[0],helmet:t[3],change:t[2],$$slots:{default:[K]},$$scope:{ctx:t}}}),{c:function(){p(n.$$.fragment)},l:function(t){g(n.$$.fragment,t)},m:function(t,e){l(n,t,e),a=!0},p:function(t,a){var e=h(a,1)[0],r={};1&e&&(r.pages=t[0]),4&e&&(r.change=t[2]),258&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i:function(t){a||($(n.$$.fragment,t),a=!0)},o:function(t){m(n.$$.fragment,t),a=!1},d:function(t){v(n,t)}}}function M(t){return N.apply(this,arguments)}function N(){return(N=t(n.mark((function t(a){var e,r;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V(this.fetch,"api/posts-browse",{limit:5,page:a.params.page});case 2:return e=t.sent,t.next=5,V(this.fetch,"api/pages-browse");case 5:return r=t.sent,0===e.response.length&&this.error(404),t.abrupt("return",{posts:e,pages:r,page:a.params.page});case 8:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function Q(t,n,a){var e=n.pages,r=n.posts,s=n.page,o={title:"Page ".concat(s)},i=!1;return t.$set=function(t){"pages"in t&&a(0,e=t.pages),"posts"in t&&a(1,r=t.posts),"page"in t&&a(4,s=t.page)},t.$$.update=function(){20&t.$$.dirty&&s&&a(2,i=!i)},[e,r,i,o,s]}var T=function(t){a(e,f);var n=C(e);function e(t){var a;return s(this,e),a=n.call(this),o(c(a),t,Q,L,i,{pages:0,posts:1,page:4}),a}return e}();export default T;export{M as preload};
