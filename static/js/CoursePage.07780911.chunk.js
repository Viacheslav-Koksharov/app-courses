"use strict";(self.webpackChunkapp_courses=self.webpackChunkapp_courses||[]).push([[254],{7585:function(n,e,t){t.d(e,{Z:function(){return x}});var i,r,o=t(5243),s=t(168),l=t(6444),a=t(8582).B.desktop,c=l.ZP.div(i||(i=(0,s.Z)(["\n  position: relative;\n  height: 100vh;\n"]))),d=l.ZP.div(r||(r=(0,s.Z)(["\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  transform: translate(-50%, -20%);\n\n  @media screen and (min-width: ","px) {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n"])),a),u=t(184),x=function(n){var e=n.ariaLabel,t=n.height,i=n.width,r=n.radius,s=n.color;return(0,u.jsx)(c,{children:(0,u.jsx)(d,{children:(0,u.jsx)(o.W0,{ariaLabel:e,height:t,width:i,radius:r,color:s})})})}},7153:function(n,e,t){t.d(e,{S:function(){return s},W:function(){return l}});var i=t(9439),r=t(2791),o=t(184),s=(0,r.createContext)({lesson:void 0,setLesson:function(){}}),l=function(n){var e=n.children,t=(0,r.useState)(),l=(0,i.Z)(t,2),a={lesson:l[0],setLesson:l[1]};return(0,o.jsx)(s.Provider,{value:a,children:e})}},1905:function(n,e,t){t.d(e,{$:function(){return o}});var i=t(9843),r=t.n(i),o=function(n,e){var t=new(r());t.loadSource(e),t.attachMedia(n)}},5471:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var i,r,o,s,l,a,c,d,u=t(2791),x=t(3433),h=t(7689),f=t(8009),p=t(7153),v=t(168),m=t(6444),g=t(1087),j=t(2450),Z=t(8582),w=j.O.accent,b=Z.B.desktop,k=m.ZP.ul(i||(i=(0,v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  width: 100%;\n  margin: 0 auto 20px;\n\n  @media screen and (min-width: ","px) {\n    justify-content: flex-start;\n  }\n"])),b),P=m.ZP.li(r||(r=(0,v.Z)(["\n  width: calc((100% - 20px) / 2);\n  margin: 0 0 10px 0;\n  padding: 10px;\n  text-align: center;\n  font-size: 12px;\n  color: ",";\n  border: 2px solid ",";\n  border-radius: 5px;\n\n  :hover {\n    background-color: ",";\n    transform: scale(1.005);\n  }\n\n  @media screen and (min-width: ","px) {\n    width: calc((100% - 40px) / 5);\n    margin: 0 10px 10px 0;\n\n    &:nth-child(5n) {\n      margin: 0 0 10px 0;\n    }\n  }\n"])),(function(n){return n.theme.text}),w,w,b),C=(0,m.ZP)(g.rU)(o||(o=(0,v.Z)(["\n  display: block;\n"]))),L=t(184),y=function(n){var e=n.lessons,t=(0,u.useContext)(p.S).setLesson,i=(0,u.useMemo)((function(){return(0,x.Z)(e).sort((function(n,e){return n.order-e.order}))}),[e]),r=function(n,e){n.preventDefault(),"locked"===(null===e||void 0===e?void 0:e.status)?function(n){var e=n.order,t=n.title;(0,f.Am)("The video for the lesson ".concat(e,' "').concat(t,'" is locked!'))}(e):t(e)};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(k,{children:null===i||void 0===i?void 0:i.map((function(n){return(0,L.jsx)(P,{theme:!0,onClick:function(e){return r(e,n)},children:(0,L.jsxs)(C,{to:"lesson",children:[(0,L.jsxs)("b",{children:["Lesson ",n.order,"."]}),(0,L.jsx)("br",{}),n.title]})},n.id)}))}),(0,L.jsx)(h.j3,{})]})},z=t(7585),M=t(3654),S=t(1565),D=t(9121),F=t(6913),O=t(9959),W=t(1905),_=t(7345),B=j.O.accent,T=m.ZP.h1(s||(s=(0,v.Z)(["\n  margin: 0 0 20px;\n  text-align: center;\n  font-size: 30px;\n"]))),$=m.ZP.div(l||(l=(0,v.Z)(["\n  width: 60%;\n  height: 60%;\n  margin: 0 auto 20px;\n"]))),A=m.ZP.p(a||(a=(0,v.Z)(["\n  margin: 0 0 20px;\n  text-align: center;\n  font-size: 18px;\n  font-weight: 600;\n  color: ",";\n"])),B),E=m.ZP.ul(c||(c=(0,v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 90%;\n  margin: 0 auto 20px;\n"]))),R=m.ZP.li(d||(d=(0,v.Z)(["\n  margin: 0 10px 0 0;\n  text-align: center;\n  font-size: 16px;\n  color: ",";\n"])),(function(n){return n.theme.accent})),U=function(){var n,e,t=(0,u.useContext)(_.M).token,i=(0,F.Z)(O.MC,t),r=i.response,o=i.isLoading,s=i.error,l=(0,u.useRef)(null),a=null===r||void 0===r?void 0:r.lessons[0],c=null===a||void 0===a?void 0:a.link,d=null===a||void 0===a?void 0:a.duration,x=j.O.main;return(0,u.useEffect)((function(){if(O.Fc&&c){var n=l.current;n&&(0,W.$)(n,c)}}),[c]),(0,L.jsxs)(L.Fragment,{children:[o&&(0,L.jsx)(z.Z,{ariaLabel:"ThreeDots",height:100,width:100,radius:5,color:x}),r&&(0,L.jsxs)(p.W,{children:[(0,L.jsxs)(T,{children:["Course: ",null===r||void 0===r?void 0:r.title]}),(0,L.jsx)($,{children:c&&d?(0,L.jsx)("video",{ref:l,width:"100%",height:"100%",controls:!0}):(0,L.jsx)("img",{src:D,alt:"video unavailable"})}),(0,L.jsxs)(A,{children:["Description: ",null===r||void 0===r?void 0:r.description]}),(0,L.jsx)(E,{children:null===r||void 0===r||null===(n=r.meta)||void 0===n||null===(e=n.skills)||void 0===e?void 0:e.map((function(n){return(0,L.jsxs)(R,{children:["#",n]},n)}))}),(0,L.jsx)(y,{lessons:null===r||void 0===r?void 0:r.lessons})]}),s&&(0,L.jsx)(M.Z,{error:s,image:S})]})}},9121:function(n,e,t){n.exports=t.p+"static/media/video_unavailable.9c62b7f0311c482086c9.png"}}]);
//# sourceMappingURL=CoursePage.07780911.chunk.js.map