"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[349],{7047:function(n,e,t){t.d(e,{Ai:function(){return s},JN:function(){return u},TP:function(){return l}});var r=t(5861),a=t(7757),i=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="f983fc840eb543faba07dcbe6db19b0b",u=function(){var n=(0,r.Z)(i().mark((function n(){var e,t,r,a=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,t=a.length>1?a[1]:void 0,n.next=4,c.Z.get("trending/all/day?api_key=".concat(o,"&page=").concat(e),t);case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e,t,r){var a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(o,"&language=en-US&query=").concat(e,"&page=").concat(t,"&include_adult=false"),r);case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(o,"&language=en-US"),t);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},2940:function(n,e,t){t.d(e,{z:function(){return o}});var r,a=t(168),i=t(6444).ZP.button(r||(r=(0,a.Z)(["\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  :hover,\n  :focus {\n    background-color: #303f9f;\n  }\n"]))),c=t(184),o=function(n){var e=n.onClick;return(0,c.jsx)(i,{onClick:e,type:"button",children:"More"})}},3078:function(n,e,t){t.d(e,{s:function(){return f}});var r,a,i=t(7689),c=t(168),o=t(6444),u=t(1087),s=(0,o.ZP)(u.OL)(r||(r=(0,c.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n\n  &.active {\n    color: white;\n    background-color: orangered}\n    "]))),l=o.ZP.div(a||(a=(0,c.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n"]))),p=t(184),d=function(n){var e=n.movie,t=e.title,r=e.name,a=e.poster_path,c=e.release_date,o=e.id,u=(0,i.TH)();return(0,p.jsx)(l,{children:(0,p.jsx)(s,{to:"movies/".concat(o),state:{from:u},children:(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{children:(0,p.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w500".concat(a):"",alt:t||r})}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:t||r}),(0,p.jsxs)("p",{children:["Release data : ",(null===c||void 0===c?void 0:c.slice(0,4))||"not found"]})]})]})})})},f=function(n){var e=n.movies;return(0,p.jsx)("ul",{children:e.map((function(n){return(0,p.jsx)(d,{movie:n},n.id)}))})}},7349:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var r=t(3433),a=t(5861),i=t(9439),c=t(7757),o=t.n(c),u=t(9649),s=t(2791),l=t(7047),p=t(184),d=function(n){var e=n.title,t=n.children;return(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:e}),t]})},f=t(3078),x=t(2940),h=function(){var n=(0,s.useState)([]),e=(0,i.Z)(n,2),t=e[0],c=e[1],h=(0,s.useState)(1),v=(0,i.Z)(h,2),g=v[0],b=v[1],m=(0,s.useState)(!1),w=(0,i.Z)(m,2),j=w[0],Z=w[1],k=(0,s.useState)(0),y=(0,i.Z)(k,2),_=y[0],C=y[1];if((0,s.useEffect)((function(){var n=new AbortController;Z(!0);var e=function(){var e=(0,a.Z)(o().mark((function e(t){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.JN)(t,{signal:n.signal});case 3:return a=e.sent,C(a.total_pages),c((function(n){return 1===t?a.results:[].concat((0,r.Z)(n),(0,r.Z)(a.results))})),e.abrupt("return",a.results);case 9:e.prev=9,e.t0=e.catch(0),c([]),console.log(e.t0);case 13:return e.prev=13,Z(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(n){return e.apply(this,arguments)}}();return e(g),function(){n.abort()}}),[g]),t)return(0,p.jsxs)("main",{children:[(0,p.jsx)(d,{children:"Trending movies"}),(0,p.jsx)("div",{children:!!t.length&&(0,p.jsx)(f.s,{movies:t})}),!!t.length&&g<=_&&(0,p.jsx)(x.z,{onClick:function(){b((function(n){return n+1}))}}),j&&(0,p.jsx)(u.a,{})]})}}}]);
//# sourceMappingURL=349.d9b31374.chunk.js.map