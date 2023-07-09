"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[135],{135:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(165),a=r(861),s=r(439),i=r(689),c=r(87),o=r(390),u=r(791),p="MovieDetails_goBackButton__gD2UR",l="MovieDetails_movieDetailsContainer__hxmcN",d="MovieDetails_movieInfo__4EKMk",h="MovieDetails_genresContainer__89sAX",v="MovieDetails_additionalInfoList__LrD0C",f="MovieDetails_additionalInfoLink__fMh92",m="MovieDetails_loadingMessage__2eYP6",x=r(184),_=function(){var e,t,r=(0,u.useState)({}),_=(0,s.Z)(r,2),g=_[0],j=_[1],w=(0,u.useState)([]),Z=(0,s.Z)(w,2),k=Z[0],b=Z[1],y=(0,i.UO)().id,D=null!==(e=null===(t=(0,i.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";(0,u.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.TP)(y);case 3:t=e.sent,j(t),b(t.genres),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[y]);var M=g.poster_path?"https://image.tmdb.org/t/p/w500".concat(g.poster_path):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930",N=10*g.vote_average;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(c.rU,{to:D,children:(0,x.jsx)("button",{className:p,children:"\u2190 Go back"})}),(0,x.jsxs)("div",{className:l,children:[(0,x.jsx)("img",{src:M,alt:g.title,width:250}),(0,x.jsxs)("div",{className:d,children:[(0,x.jsx)("h2",{children:g.title}),(0,x.jsxs)("p",{children:["User score: ",N," %"]}),(0,x.jsx)("h3",{children:"Overview"}),(0,x.jsx)("p",{children:g.overview}),(0,x.jsx)("h4",{children:"Genres"}),(0,x.jsx)("div",{className:h,children:k.map((function(e){return(0,x.jsx)("p",{children:e.name},e.id)}))})]})]}),(0,x.jsx)("hr",{}),(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{children:"Additional information"}),(0,x.jsxs)("ul",{className:v,children:[(0,x.jsx)("li",{children:(0,x.jsx)(c.rU,{to:{pathname:"cast",state:{from:D}},className:f,children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(c.rU,{to:{pathname:"reviews",state:{from:D}},className:f,children:"Reviews"})})]})]}),(0,x.jsx)("hr",{}),(0,x.jsx)(u.Suspense,{fallback:(0,x.jsx)("div",{className:m,children:"Page loading. Please wait..."}),children:(0,x.jsx)(i.j3,{})})]})}},390:function(e,t,r){r.d(t,{IQ:function(){return l},Jh:function(){return p},TP:function(){return u},vw:function(){return c},z1:function(){return o}});var n=r(165),a=r(861),s=r(243),i="9cd3003f00fa34df086a65205d0cd538",c=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:i}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:i,query:t}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(t),{params:{api_key:i}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),{params:{api_key:i}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits"),{params:{api_key:i}});case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=135.ccab74d6.chunk.js.map