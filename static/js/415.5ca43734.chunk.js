"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{7047:function(n,e,t){t.d(e,{Ai:function(){return s},JN:function(){return u},TP:function(){return p},tx:function(){return f},zv:function(){return d}});var r=t(5861),a=t(7757),o=t.n(a),i=t(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="f983fc840eb543faba07dcbe6db19b0b",u=function(){var n=(0,r.Z)(o().mark((function n(){var e,t,r,a=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,t=a.length>1?a[1]:void 0,n.next=4,i.Z.get("trending/all/day?api_key=".concat(c,"&page=").concat(e),t);case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(e,t,r){var a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(c,"&language=en-US&query=").concat(e,"&page=").concat(t,"&include_adult=false"),r);case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e,t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"),t);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e,t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"),t);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e,t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"),t);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},2940:function(n,e,t){t.d(e,{z:function(){return c}});var r,a=t(168),o=t(6444).ZP.button(r||(r=(0,a.Z)(["\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  :hover,\n  :focus {\n    background-color: #303f9f;\n  }\n"]))),i=t(184),c=function(n){var e=n.onClick;return(0,i.jsx)(o,{onClick:e,type:"button",children:"More"})}},3725:function(n,e,t){t.d(e,{s:function(){return P}});var r,a,o,i,c,u,s,p,d,f=t(7689),l=t(168),x=t(6444),g=t(1087),v=(0,x.ZP)(g.OL)(r||(r=(0,l.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n\n  &.active {\n    color: white;\n    background-color: orangered;\n  }\n"]))),h=x.ZP.div(a||(a=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),b=x.ZP.div(o||(o=(0,l.Z)(["\n  display: block;\n  border: 1px solid black;\n  border-radius: 4px;\n   box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover {\n    box-shadow: 2px 3px 5px #c7fc07, -1px -3px 5px #0f70de;\n    transform: scale(1.05);\n    cursor: zoom-in;\n    border: none;\n     \n    }\n"]))),m=x.ZP.img(i||(i=(0,l.Z)(["\n  width: 100%;\n  object-fit: cover;\n height: 540px;\n"]))),Z=(x.ZP.div(c||(c=(0,l.Z)(["\n  border: 1px solid black;\n  border-radius: 4px;\n\n  > a {\n    text-decoration: none;\n  }\n"]))),x.ZP.h2(u||(u=(0,l.Z)(["\nfont-size:26px;\n  padding: 7px;\n  margin-top: 8px;\n  margin-bottom: 0;\n color: #cb861e;\nword-wrap: break-word;\n"])))),w=x.ZP.p(s||(s=(0,l.Z)(["\n  font-size: 28px;\n  padding: 10px;\n  color: #614c02;\n  font-weight:900px;\n "]))),k=(x.ZP.div(p||(p=(0,l.Z)(["\n  padding:10px;\n"]))),t(7216)),j=t(184),y=function(n){var e=n.movie,t=e.title,r=e.name,a=e.poster_path,o=e.release_date,i=e.id,c=(0,f.TH)();return(0,j.jsx)(h,{children:(0,j.jsx)(v,{to:"/movies/".concat(i),state:{from:c},children:(0,j.jsxs)(b,{children:[(0,j.jsx)(m,{src:a?"https://image.tmdb.org/t/p/w500".concat(a):k,alt:t||r}),(0,j.jsxs)("div",{children:[(0,j.jsx)(Z,{children:t||r}),(0,j.jsxs)(w,{children:["Release data : ",(null===o||void 0===o?void 0:o.slice(0,4))||"not found"]})]})]})})})},_=x.ZP.ul(d||(d=(0,l.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n    margin: 0 auto;\n    flex-wrap:wrap;\n"]))),P=function(n){var e=n.movies;return(0,j.jsx)(_,{children:e.map((function(n){return(0,j.jsx)(y,{movie:n},n.id)}))})}},4814:function(n,e,t){t.d(e,{$:function(){return d}});var r,a,o=t(2906),i=t(168),c=t(6444),u=c.ZP.section(r||(r=(0,i.Z)(["\n  padding: 30px 0;\n"]))),s=c.ZP.h1(a||(a=(0,i.Z)(["\n  text-align: center;\n  font-size: 32px;\n"]))),p=t(184),d=function(n){var e=n.title,t=n.children;return(0,p.jsx)(u,{children:(0,p.jsxs)(o.W2,{children:[(0,p.jsx)(s,{children:e}),t]})})}},5415:function(n,e,t){t.r(e);var r=t(3433),a=t(5861),o=t(9439),i=t(7757),c=t.n(i),u=t(9649),s=t(2791),p=t(7047),d=t(4814),f=t(3725),l=t(2940),x=t(184);e.default=function(){var n=(0,s.useState)([]),e=(0,o.Z)(n,2),t=e[0],i=e[1],g=(0,s.useState)(1),v=(0,o.Z)(g,2),h=v[0],b=v[1],m=(0,s.useState)(!1),Z=(0,o.Z)(m,2),w=Z[0],k=Z[1],j=(0,s.useState)(0),y=(0,o.Z)(j,2),_=y[0],P=y[1];if((0,s.useEffect)((function(){var n=new AbortController;k(!0);var e=function(){var e=(0,a.Z)(c().mark((function e(t){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.JN)(t,{signal:n.signal});case 3:return a=e.sent,P(a.total_pages),i((function(n){return 1===t?a.results:[].concat((0,r.Z)(n),(0,r.Z)(a.results))})),e.abrupt("return",a.results);case 9:e.prev=9,e.t0=e.catch(0),i([]),console.log(e.t0.message);case 13:return e.prev=13,k(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(n){return e.apply(this,arguments)}}();return e(h),function(){n.abort()}}),[h]),t)return(0,x.jsxs)("main",{children:[(0,x.jsx)(d.$,{title:"Trending movies",children:!!t.length&&(0,x.jsx)(f.s,{movies:t})}),!!t.length&&h<=_&&(0,x.jsx)(l.z,{onClick:function(){b((function(n){return n+1}))}}),w&&(0,x.jsx)(u.a,{})]})}},7216:function(n,e,t){n.exports=t.p+"static/media/film.97693e8cf0c6a3b92420.jpg"}}]);
//# sourceMappingURL=415.5ca43734.chunk.js.map