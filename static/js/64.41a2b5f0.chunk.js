"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[64],{7047:function(n,e,t){t.d(e,{Ai:function(){return o},JN:function(){return s},TP:function(){return f},tx:function(){return v},zv:function(){return p}});var r=t(5861),a=t(7757),u=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="f983fc840eb543faba07dcbe6db19b0b",s=function(){var n=(0,r.Z)(u().mark((function n(){var e,t,r,a=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,t=a.length>1?a[1]:void 0,n.next=4,c.Z.get("trending/all/day?api_key=".concat(i,"&page=").concat(e),t);case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(e,t,r){var a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&page=").concat(t,"&include_adult=false"),r);case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e,t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"),t);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e,t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"),t);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(u().mark((function n(e,t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"),t);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},3064:function(n,e,t){t.r(e),t.d(e,{default:function(){return d}});var r=t(5861),a=t(9439),u=t(7757),c=t.n(u),i=t(7047),s=t(9649),o=t(184),f=function(n){var e=n.review,t=e.autor,r=e.content;return(0,o.jsxs)("li",{children:[(0,o.jsx)("h3",{children:t}),(0,o.jsx)("p",{children:r})]})},p=t(5373),v=t(2791),l=t(7689),d=function(){var n=(0,v.useState)([]),e=(0,a.Z)(n,2),t=e[0],u=e[1],d=(0,v.useState)(!1),h=(0,a.Z)(d,2),g=h[0],x=h[1],w=(0,l.UO)().movieId;return(0,v.useEffect)((function(){var n=new AbortController;x(!0);var e=function(){var e=(0,r.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.tx)(t,{signal:n.signal});case 3:return r=e.sent,u(r.results),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,x(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(n){return e.apply(this,arguments)}}();return e(w),function(){n.abort()}}),[w]),(0,o.jsxs)("main",{children:[(0,o.jsx)(p.D,{children:"Reviews"}),(0,o.jsxs)("ul",{children:[t.map((function(n){return(0,o.jsx)(f,{review:n},n.id)})),g&&(0,o.jsx)(s.a,{}),!!t.length||(0,o.jsx)("p",{children:"We don`t have reviews for this movie"})]})]})}},5373:function(n,e,t){t.d(e,{D:function(){return a}});var r=t(184),a=function(n){var e=n.title,t=n.children;return(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:e}),t]})}}}]);
//# sourceMappingURL=64.41a2b5f0.chunk.js.map