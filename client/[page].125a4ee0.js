import{K as t,L as n,a,b as e,c as r,d as s,i as o,s as i,e as c,S as f,M as u,x as p,y as g,B as l,q as h,I as $,F as m,G as v,N as d,O as y,f as x,g as w,h as b,j as P,l as R,k as j,n as D,o as I,p as S,E,H as k,P as B,Q as V}from"./client.e524b658.js";import{A as q}from"./parseImageSrc.32cd7a00.js";import{P as A,S as F}from"./Pagination.377ffde9.js";function G(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,s=e(t);if(n){var o=e(this).constructor;a=Reflect.construct(s,arguments,o)}else a=s.apply(this,arguments);return r(this,a)}}function H(t,n,a){var e=t.slice();return e[5]=n[a],e}function K(t){for(var n,a,e=[t[5]],r={},s=0;s<e.length;s+=1)r=V(r,e[s]);return n=new F({props:r}),{c:function(){p(n.$$.fragment)},l:function(t){g(n.$$.fragment,t)},m:function(t,e){l(n,t,e),a=!0},p:function(t,a){var r=2&a?d(e,[y(t[5])]):{};n.$set(r)},i:function(t){a||($(n.$$.fragment,t),a=!0)},o:function(t){m(n.$$.fragment,t),a=!1},d:function(t){v(n,t)}}}function L(t){for(var n,a,e,r,s,o=t[1].response,i=[],c=0;c<o.length;c+=1)i[c]=K(H(t,o,c));var f=function(t){return m(i[t],1,1,(function(){i[t]=null}))};return r=new A({props:{pagination:t[1].meta.pagination}}),{c:function(){n=x("div"),a=x("div");for(var t=0;t<i.length;t+=1)i[t].c();e=w(),p(r.$$.fragment),this.h()},l:function(t){n=b(t,"DIV",{class:!0});var s=P(n);a=b(s,"DIV",{class:!0});for(var o=P(a),c=0;c<i.length;c+=1)i[c].l(o);e=R(o),g(r.$$.fragment,o),o.forEach(j),s.forEach(j),this.h()},h:function(){D(a,"class","grid svelte-1g53gb"),D(n,"class","grid-wrap svelte-1g53gb")},m:function(t,o){I(t,n,o),S(n,a);for(var c=0;c<i.length;c+=1)i[c].m(a,null);S(a,e),l(r,a,null),s=!0},p:function(t,n){if(2&n){var s;for(o=t[1].response,s=0;s<o.length;s+=1){var c=H(t,o,s);i[s]?(i[s].p(c,n),$(i[s],1)):(i[s]=K(c),i[s].c(),$(i[s],1),i[s].m(a,e))}for(E(),s=o.length;s<i.length;s+=1)f(s);k()}var u={};2&n&&(u.pagination=t[1].meta.pagination),r.$set(u)},i:function(t){if(!s){for(var n=0;n<o.length;n+=1)$(i[n]);$(r.$$.fragment,t),s=!0}},o:function(t){i=i.filter(Boolean);for(var n=0;n<i.length;n+=1)m(i[n]);m(r.$$.fragment,t),s=!1},d:function(t){t&&j(n),B(i,t),v(r)}}}function M(t){var n,a;return n=new u({props:{pages:t[0],helmet:t[3],change:t[2],$$slots:{default:[L]},$$scope:{ctx:t}}}),{c:function(){p(n.$$.fragment)},l:function(t){g(n.$$.fragment,t)},m:function(t,e){l(n,t,e),a=!0},p:function(t,a){var e=h(a,1)[0],r={};1&e&&(r.pages=t[0]),4&e&&(r.change=t[2]),258&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i:function(t){a||($(n.$$.fragment,t),a=!0)},o:function(t){m(n.$$.fragment,t),a=!1},d:function(t){v(n,t)}}}function N(t){return O.apply(this,arguments)}function O(){return(O=t(n.mark((function t(a){var e,r;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q(this.fetch,"api/posts-browse",{limit:5,page:a.params.page});case 2:return e=t.sent,t.next=5,q(this.fetch,"api/pages-browse");case 5:return r=t.sent,0===e.response.length&&this.error(404),t.abrupt("return",{posts:e,pages:r,page:a.params.page});case 8:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function Q(t,n,a){var e=n.pages,r=n.posts,s=n.page,o={title:"Page ".concat(s)},i=!1;return t.$set=function(t){"pages"in t&&a(0,e=t.pages),"posts"in t&&a(1,r=t.posts),"page"in t&&a(4,s=t.page)},t.$$.update=function(){20&t.$$.dirty&&s&&a(2,i=!i)},[e,r,i,o,s]}var z=function(t){a(e,f);var n=G(e);function e(t){var a;return s(this,e),a=n.call(this),o(c(a),t,Q,M,i,{pages:0,posts:1,page:4}),a}return e}();export default z;export{N as preload};
