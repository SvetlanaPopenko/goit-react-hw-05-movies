"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[193],{7047:function(n,e,t){t.d(e,{Ai:function(){return u},JN:function(){return o},TP:function(){return l},tx:function(){return d},zv:function(){return p}});var r=t(5861),a=t(7757),c=t.n(a),i=t(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="f983fc840eb543faba07dcbe6db19b0b",o=function(){var n=(0,r.Z)(c().mark((function n(){var e,t,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,t=a.length>1?a[1]:void 0,n.next=4,i.Z.get("trending/all/day?api_key=".concat(s,"&page=").concat(e),t);case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(e,t,r){var a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(s,"&language=en-US&query=").concat(e,"&page=").concat(t,"&include_adult=false"),r);case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"),t);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"),t);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"),t);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},7193:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r,a,c,i,s,o,u,l,p=t(5861),d=t(9439),f=t(7757),x=t.n(f),v=t(7689),h=t(168),g=t(8617),j=t(1087),m=t(6444),Z=t(184),w=(0,m.ZP)(j.rU)(r||(r=(0,h.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),b=function(n){var e=n.to,t=n.children;return(0,Z.jsxs)(w,{to:e,children:[(0,Z.jsx)(g.jTe,{size:"24"}),t]})},k=t(2791),_=t(7047),y=t(1679),P=m.ZP.ul(a||(a=(0,h.Z)(["\n    padding: 20px;\n"]))),U=(0,m.ZP)(j.OL)(c||(c=(0,h.Z)(["\ntext-decoration:none;\nfont-size: 24px;\n&:hover,\n&:focus{\n    color: red;\n}\n"]))),S=m.ZP.div(i||(i=(0,h.Z)(["\n    display: flex;\n    align-items:center;\n    justify-content:space-between;\n    gap:20px;\n"]))),z=m.ZP.img(s||(s=(0,h.Z)(["\nwidth: 500px;\n"]))),C=m.ZP.h2(o||(o=(0,h.Z)(["\n    font-size:30px;\n  padding: 10px;\n  color: #cb861e;\n"]))),R=m.ZP.p(u||(u=(0,h.Z)(["\n    font-size: 28px;\n  padding: 10px;\n  color: #614c02;\n  font-weight:900px;\n"]))),T=m.ZP.span(l||(l=(0,h.Z)(["\n    font-size:20px;\n    color: #8d7d07;\n    margin-left: 10px;\n"]))),O=function(n){var e=n.data,t=e.title,r=e.name,a=e.poster_path,c=e.overview,i=e.genres,s=e.vote_average,o=e.release_date;return(0,Z.jsxs)(S,{children:[(0,Z.jsx)("div",{children:(0,Z.jsx)(z,{src:a?"https://image.tmdb.org/t/p/w500".concat(a):y,alt:t||r})}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)(C,{children:t||r}),(0,Z.jsxs)(R,{children:["Release data : ",(null===o||void 0===o?void 0:o.slice(0,4))||"not found"]}),(0,Z.jsxs)(R,{children:["User score :",(0,Z.jsxs)(T,{children:[(10*s).toFixed(1),"%"]})]}),(0,Z.jsxs)(R,{children:["Overview :",(0,Z.jsx)(T,{children:c})]}),(0,Z.jsxs)(R,{children:["Genres :",(0,Z.jsx)(T,{children:i.map((function(n){return n.name})).join(", ")})]})]})]})},A=t(9649),F=t(2906),L=function(){var n,e,t=(0,k.useState)(null),r=(0,d.Z)(t,2),a=r[0],c=r[1],i=(0,k.useState)(!1),s=(0,d.Z)(i,2),o=s[0],u=s[1],l=(0,v.UO)().movieId,f=(0,v.TH)(),h=(0,k.useRef)(null!==(n=null===(e=f.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");if((0,k.useEffect)((function(){var n=new AbortController;u(!0);var e=function(){var e=(0,p.Z)(x().mark((function e(t){var r;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,_.TP)(t,{signal:n.signal});case 3:return r=e.sent,c(r),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:return e.prev=11,u(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(n){return e.apply(this,arguments)}}();return e(l),function(){n.abort()}}),[l]),a)return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(F.W2,{children:[(0,Z.jsx)(b,{to:h.current,children:"Back"}),a&&(0,Z.jsx)(O,{data:a})]}),o&&(0,Z.jsx)(A.a,{}),(0,Z.jsx)(F.W2,{children:(0,Z.jsxs)(P,{children:[(0,Z.jsx)("li",{children:(0,Z.jsx)(U,{to:"cast",state:{from:f},children:"Cast"})}),(0,Z.jsx)("li",{children:(0,Z.jsx)(U,{to:"reviews",state:{from:f},children:"Reviews"})})]})}),(0,Z.jsx)(k.Suspense,{fallback:(0,Z.jsx)(A.a,{}),children:(0,Z.jsx)(v.j3,{})})]})}},1679:function(n,e,t){n.exports=t.p+"static/media/film.abd9e42719ea9f806345.jfif"}}]);
//# sourceMappingURL=193.10bab997.chunk.js.map