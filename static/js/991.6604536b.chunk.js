"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[991],{7047:function(n,e,t){t.d(e,{Ai:function(){return s},JN:function(){return p},TP:function(){return u},tx:function(){return x},zv:function(){return d}});var r=t(5861),i=t(7757),o=t.n(i),a=t(1243);a.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="f983fc840eb543faba07dcbe6db19b0b",p=function(){var n=(0,r.Z)(o().mark((function n(){var e,t,r,i=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:1,t=i.length>1?i[1]:void 0,n.next=4,a.Z.get("trending/all/day?api_key=".concat(c,"&page=").concat(e),t);case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(e,t,r){var i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("search/movie?api_key=".concat(c,"&language=en-US&query=").concat(e,"&page=").concat(t,"&include_adult=false"),r);case 2:return i=n.sent,n.abrupt("return",i.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(e,t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"),t);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e,t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"),t);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(o().mark((function n(e,t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"),t);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},2940:function(n,e,t){t.d(e,{z:function(){return c}});var r,i=t(168),o=t(6444).ZP.button(r||(r=(0,i.Z)(["\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  margin: 0 auto;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  :hover,\n  :focus {\n    background-color: #303f9f;\n  }\n"]))),a=t(184),c=function(n){var e=n.onClick;return(0,a.jsx)(o,{onClick:e,type:"button",children:"More"})}},3725:function(n,e,t){t.d(e,{s:function(){return z}});var r,i,o,a,c,p,s,u,d,x=t(7689),l=t(168),f=t(6444),h=t(1087),g=(0,f.ZP)(h.OL)(r||(r=(0,l.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n\n  &.active {\n    color: white;\n    background-color: orangered;\n  }\n"]))),b=f.ZP.div(i||(i=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),v=f.ZP.div(o||(o=(0,l.Z)(["\n  display: block;\n  border: 1px solid black;\n  border-radius: 4px;\n  width: 360px;\n   box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover {\n    box-shadow: 2px 3px 5px #c7fc07, -1px -3px 5px #0f70de;\n    transform: scale(1.05);\n    cursor: zoom-in;\n    border: none;\n     \n    }\n"]))),m=f.ZP.img(a||(a=(0,l.Z)(["\n  width: 100%;\n  object-fit: cover;\n height: 540px;\n"]))),Z=(f.ZP.div(c||(c=(0,l.Z)(["\n  border: 1px solid black;\n  border-radius: 4px;\n\n  > a {\n    text-decoration: none;\n  }\n"]))),f.ZP.h2(p||(p=(0,l.Z)(["\nfont-size:26px;\n  padding: 7px;\n  margin-top: 8px;\n  margin-bottom: 0;\n color: #cb861e;\nheight: 80px;\nwhite-space: pre-wrap;\n\n"])))),w=f.ZP.p(s||(s=(0,l.Z)(["\n  font-size: 28px;\n  padding: 10px;\n  color: #614c02;\n  font-weight:700;\n "]))),k=f.ZP.div(u||(u=(0,l.Z)(["\n  padding:10px;\n"]))),y=t(7216),j=t(184),P=function(n){var e=n.movie,t=e.title,r=e.name,i=e.poster_path,o=e.release_date,a=e.id,c=(0,x.TH)();return(0,j.jsx)(b,{children:(0,j.jsx)(g,{to:"/movies/".concat(a),state:{from:c},children:(0,j.jsxs)(v,{children:[(0,j.jsx)(m,{src:i?"https://image.tmdb.org/t/p/w500".concat(i):y,alt:t||r}),(0,j.jsxs)(k,{children:[(0,j.jsx)(Z,{children:t||r}),(0,j.jsxs)(w,{children:["Release data : ",(null===o||void 0===o?void 0:o.slice(0,4))||"not found"]})]})]})})})},_=f.ZP.ul(d||(d=(0,l.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n    margin: 0 auto;\n    flex-wrap:wrap;\n"]))),z=function(n){var e=n.movies;return(0,j.jsx)(_,{children:e.map((function(n){return(0,j.jsx)(P,{movie:n},n.id)}))})}},4814:function(n,e,t){t.d(e,{$:function(){return d}});var r,i,o=t(2906),a=t(168),c=t(6444),p=c.ZP.section(r||(r=(0,a.Z)(["\n  padding: 30px 0;\n"]))),s=c.ZP.h1(i||(i=(0,a.Z)(["\n  text-align: center;\n  font-size: 32px;\n"]))),u=t(184),d=function(n){var e=n.title,t=n.children;return(0,u.jsx)(p,{children:(0,u.jsxs)(o.W2,{children:[(0,u.jsx)(s,{children:e}),t]})})}},2991:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,i,o,a,c,p=t(3433),s=t(5861),u=t(9439),d=t(7757),x=t.n(d),l=t(7047),f=t(2940),h=t(9649),g=t(3725),b=t(168),v=t(6444),m=v.ZP.header(r||(r=(0,b.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),Z=v.ZP.form(i||(i=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),w=v.ZP.button(o||(o=(0,b.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  :hover {\n    opacity: 1;\n  }\n"]))),k=v.ZP.span(a||(a=(0,b.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n"]))),y=v.ZP.input(c||(c=(0,b.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),j=t(9126),P=t(184),_=function(n){var e=n.onSubmit;return(0,P.jsx)(m,{children:(0,P.jsxs)(Z,{onSubmit:function(n){n.preventDefault(),e(n.target.search.value.trim().toLowerCase()),n.currentTarget.reset()},children:[(0,P.jsxs)(w,{type:"submit",children:[(0,P.jsx)(j.dVI,{width:60,height:60}),(0,P.jsx)(k,{children:"Search"})]}),(0,P.jsx)(y,{name:"search",type:"text",autocomplete:"off",autoFocus:!0,placeholder:"Search movies"})]})})},z=t(4814),S=t(2791),C=t(1087),U=function(){var n,e=(0,S.useState)([]),t=(0,u.Z)(e,2),r=t[0],i=t[1],o=(0,S.useState)(""),a=(0,u.Z)(o,2),c=a[0],d=a[1],b=(0,S.useState)(1),v=(0,u.Z)(b,2),m=v[0],Z=v[1],w=(0,S.useState)(0),k=(0,u.Z)(w,2),y=k[0],j=k[1],U=(0,S.useState)(!1),q=(0,u.Z)(U,2),A=q[0],L=q[1],T=(0,C.lr)(),N=(0,u.Z)(T,2),R=N[0],$=N[1],D=null!==(n=R.get("query"))&&void 0!==n?n:"";(0,S.useEffect)((function(){var n=new AbortController,e=function(){var e=(0,s.Z)(x().mark((function e(t,r){var o;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,D&&t){e.next=3;break}return e.abrupt("return");case 3:return L(!0),e.next=6,(0,l.Ai)(t,r,{signal:n.signal});case 6:return o=e.sent,j(o.total_pages),i((function(n){return 1===r?o.results:[].concat((0,p.Z)(n),(0,p.Z)(o.results))})),console.log(o.results),e.abrupt("return",o);case 13:e.prev=13,e.t0=e.catch(0),i([]),console.log(e.t0);case 17:return e.prev=17,L(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[0,13,17,20]])})));return function(n,t){return e.apply(this,arguments)}}();return e(D,m),function(){n.abort()}}),[D,m]);if(r)return(0,P.jsxs)("main",{children:[(0,P.jsx)(_,{movieName:D,onSubmit:function(n){""!==n&&n!==c&&($(""!==n?{query:n}:{}),i([]),Z(1),d(n))}}),(0,P.jsx)(z.$,{children:(0,P.jsx)(g.s,{movies:r})}),A&&(0,P.jsx)(h.a,{}),!!r.length&&m<y&&(0,P.jsx)(f.z,{onClick:function(){Z((function(n){return n+1}))}})]})}},7216:function(n,e,t){n.exports=t.p+"static/media/film.97693e8cf0c6a3b92420.jpg"}}]);
//# sourceMappingURL=991.6604536b.chunk.js.map