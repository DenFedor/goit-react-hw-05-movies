"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[217],{915:function(n,e,t){t.d(e,{E3:function(){return l},IV:function(){return u},Tg:function(){return a},YQ:function(){return o},fg:function(){return d},wH:function(){return s}});var r=t(243),i="https://api.themoviedb.org/3/",o="https://image.tmdb.org/t/p/w220_and_h330_face/",c="?api_key=68bc8f2587d307cdd95fbf9f8320ddc0",a=function(){return r.Z.get("".concat(i,"/trending/movie/week").concat(c))},l=function(n){return r.Z.get("".concat(i,"search/movie").concat(c,"&query=").concat(n))},d=function(n){return r.Z.get("".concat(i,"movie/").concat(n).concat(c))},s=function(n){return r.Z.get("".concat(i,"movie/").concat(n,"/reviews").concat(c))},u=function(n){return r.Z.get("".concat(i,"movie/").concat(n,"/credits").concat(c))}},217:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r,i,o,c,a,l,d,s,u=t(439),f=t(915),h=t(791),x=t(689),p=t(277),g=t(168),v=t(444),j=t(87),m=v.ZP.div(r||(r=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),b=v.ZP.div(i||(i=(0,g.Z)(["\n  display: flex;\n  gap: 15px;\n"]))),Z=v.ZP.p(o||(o=(0,g.Z)(["\n& > span{\n  font-weight: 600;\n  font-size: 22px;\n  color: blue;\n\n}\n  font-size: 20px;\n"]))),w=v.ZP.img(c||(c=(0,g.Z)(["\n  object-fit: cover;\n  max-height: 100%;\n  max-width: 100%;\n  border-radius: 10px;\n  box-shadow: rgb(3, 37, 65) 0px 0px 4px 2px;\n  align-self: center;\n  margin-right: 20px;\n"]))),k=(0,v.ZP)(j.rU)(a||(a=(0,g.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: white;\n  font-weight: 500;\n  background-color: rgb(3, 37, 65);\n"]))),_=(0,v.ZP)(j.OL)(l||(l=(0,g.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: white;\n  font-weight: 500;\n  background-color: rgb(3, 37, 65);\n\n  &.active {\n    color: white;\n    background-color: orangered;\n  }\n"]))),y=v.ZP.ul(d||(d=(0,g.Z)(["\n  display: flex;\n  gap: 10px;\n  list-style-type: none;\n"]))),P=v.ZP.p(s||(s=(0,g.Z)(["\nfont-weight: 600;\nfont-size: 22px;\ncolor: blue;\n"]))),O=t(429),S=t(184),z=function(){var n,e,t,r=(0,x.UO)().id,i=(0,h.useState)(null),o=(0,u.Z)(i,2),c=o[0],a=o[1],l=(0,h.useState)(!1),d=(0,u.Z)(l,2),s=d[0],g=d[1],v=(0,h.useState)("idle"),j=(0,u.Z)(v,2),z=j[0],C=j[1],F=null!==(n=null===(e=(0,x.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:p.a.home;if((0,h.useEffect)((function(){g(!0),C("loading"),(0,f.fg)(r).then((function(n){var e=n.data;a(e),C("fulfilled")})).catch((function(n){C("error"),console.log(n)})).finally((function(){g(!1)}))}),[r]),"idle"===z||s)return(0,S.jsx)(S.Fragment,{children:"Loading..."});if("error"===z)return(0,S.jsx)(S.Fragment,{children:"Occured an error"});var G=c.backdrop_path,H=c.title,L=c.genres,U=c.vote_average,Y=c.overview,A=c.release_date,E=L.map((function(n){return n.name})).join(" "),Q=null!==(t=new Date(A).getFullYear())&&void 0!==t?t:"";return(0,S.jsxs)(m,{children:[(0,S.jsx)("div",{children:(0,S.jsx)(k,{to:F,children:"Go back"})}),(0,S.jsxs)(b,{children:[(0,S.jsx)(w,{src:null!=G?f.YQ+G:O,alt:H}),(0,S.jsxs)("div",{children:[(0,S.jsxs)("h2",{children:[H," (",Q,")"]}),(0,S.jsxs)(Z,{children:["User score: ",(0,S.jsxs)("span",{children:[Math.round(10*U),"%"]})]}),(0,S.jsx)("h3",{children:"Overview"}),(0,S.jsx)(Z,{children:Y}),(0,S.jsx)("h3",{children:"Genres"}),(0,S.jsx)(P,{children:null!==E&&void 0!==E?E:"Genres are not available"})]})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("h3",{children:"Additional information"}),(0,S.jsxs)(y,{children:[(0,S.jsx)("li",{children:(0,S.jsx)(_,{to:p.a.cast,replace:!0,state:{from:F},children:"Cast"})}),(0,S.jsx)("li",{children:(0,S.jsx)(_,{to:p.a.reviews,replace:!0,state:{from:F},children:"Reviews"})}),(0,S.jsx)("li",{children:(0,S.jsx)(k,{to:"",replace:!0,state:{from:F},children:"Hide All"})})]}),(0,S.jsx)(h.Suspense,{fallback:(0,S.jsx)("div",{children:"Loading subpage..."}),children:(0,S.jsx)(x.j3,{})})]})]})}},429:function(n,e,t){n.exports=t.p+"static/media/no_image_poster.68ae350692995e841a18.png"}}]);
//# sourceMappingURL=217.fade0cb1.chunk.js.map