(this["webpackJsonpindia-covid19-react"]=this["webpackJsonpindia-covid19-react"]||[]).push([[0],{219:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),i=n.n(r),o=n(58),l=n.n(o),s=n(47),j=n(13),u=n(264),b=n(288),d=n(286),h=n(290),p=["Maharashtra","Rajasthan","Delhi"],O=n(261),x=Object(O.a)((function(){return{mainContainer:{minHeight:"calc(100vh - 112px)",margin:"56px 0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}})),m=n(4),f=Object(O.a)((function(){return{selectContainer:{width:"80vw !important",maxWidth:"500px !important"}}})),g=function(){var e=Object(j.e)(),t=x(),n=f();return Object(m.jsx)("div",{className:t.mainContainer,children:Object(m.jsxs)(u.a,{children:[Object(m.jsx)(b.a,{id:"demo-simple-select-label",children:"Select State"}),Object(m.jsx)(d.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",classes:{root:n.selectContainer},onChange:function(t){e.push("/".concat(t.target.value))},children:p.map((function(e){return Object(m.jsx)(h.a,{value:e.toLowerCase(),children:e})}))})]})})},v=n(80),y=n(79),C=n(270),w=n(275),S=n(274),N=n(50),k=n(269),I=n(271),T=n(291),D=n(272),B=n(273),F=n(276),z=n(277),L=Object(O.a)({root:{backgroundColor:"#ffffff",height:"100%"},topTitle:{fontSize:14},title:{textTransform:"capitalize"},pos:{marginBottom:12},phoneNumberContainer:{"& > a":{color:"inherit",textDecoration:"none"}}}),M=function(e){var t=e.data,n=L(),a=t.category,c=t.subCategory,r=t.city,i=t.description,o=t.address,l=t.name,s=t.sourceUrl,j=t.phone1,u=t.phone2,b=t.phone3,d=t.verified;return Object(m.jsx)(k.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(m.jsxs)(C.a,{className:n.root,variant:"outlined",children:[Object(m.jsx)(I.a,{avatar:Object(m.jsx)(T.a,{"aria-label":"recipe",className:n.avatar,children:l[0]}),action:d?Object(m.jsx)(D.a,{"aria-label":"settings",children:Object(m.jsx)(B.a,{})}):null,title:a||"",subheader:r||""}),Object(m.jsxs)(S.a,{style:{paddingTop:0,paddingBottom:0},children:[c?Object(m.jsx)(N.a,{className:n.topTitle,color:"textSecondary",gutterBottom:!0,children:c}):null,l?Object(m.jsx)(N.a,{className:n.title,variant:"h5",component:"h2",children:l}):null,o?Object(m.jsx)(N.a,{variant:"body2",component:"p",children:o}):null,i?Object(m.jsx)(N.a,{variant:"body2",color:"textSecondary",component:"p",children:i}):null,j||u||b?Object(m.jsxs)(N.a,{variant:"body2",color:"textSecondary",component:"p",className:n.phoneNumberContainer,children:[j?Object(m.jsx)("a",{href:"tel:+91".concat(j),children:j}):null,u?Object(m.jsxs)("a",{href:"tel:+91".concat(u),children:[", ",u]}):null,b?Object(m.jsxs)("a",{href:"tel:+91".concat(b),children:[", ",b]}):null]}):null]}),Object(m.jsxs)(w.a,{disableSpacing:!0,children:[s?Object(m.jsx)("a",{href:s,target:"_blank",children:Object(m.jsx)(D.a,{"aria-label":"share",children:Object(m.jsx)(F.a,{})})}):null,j?Object(m.jsx)("a",{href:"tel:+91".concat(j),children:Object(m.jsx)(D.a,{"aria-label":"share",children:Object(m.jsx)(z.a,{})})}):null]})]})})},U=n(292),W=n(107),_=n.n(W),G=n(108),J=n.n(G),V=n(287),Y=function(){var e=x();return Object(m.jsx)("div",{className:e.mainContainer,children:"This page is not available."})},A=Object(O.a)((function(){return{selectContainer:{margin:"30px",width:"95vw !important"}}})),E=Object(o.withGoogleSheets)(p)((function(e){var t=e.db,n=x(),c=A(),r=Object(j.g)().stateName,i=void 0===r?"":r,o=Object(a.useState)(t[function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(/\w\S*/g,(function(e){return e.replace(/^\w/,(function(e){return e.toUpperCase()}))}))}(i)]||[]),l=Object(y.a)(o,2),s=l[0],u=(l[1],_()(s,"category")),b=Object(a.useState)([]),d=Object(y.a)(b,2),h=d[0],p=d[1],O=function(e,t){p(t)},f=J()(s,(function(e){return!h.length||h.some((function(t){return t.category===e.category}))}));return f.length>1?Object(m.jsxs)("div",{className:n.mainContainer,children:[Object(m.jsx)(V.a,{classes:{root:c.selectContainer},multiple:!0,options:u,getOptionLabel:function(e){return e.category},defaultValue:[],filterSelectedOptions:!0,onChange:O,renderInput:function(e){return Object(m.jsx)(U.a,Object(v.a)(Object(v.a)({},e),{},{variant:"outlined",label:"Select Filters",placeholder:"Select Filters"}))}}),Object(m.jsx)(k.a,{container:!0,spacing:2,style:{padding:15},children:f.map((function(e,t){return e.name?Object(m.jsx)(M,{data:e},"filter-".concat(t)):null}))})]}):Object(m.jsx)(Y,{})})),H=n(278),R=n(279),q=n(280),K=n(281),P=n(282),Q=Object(O.a)((function(){return{title:{flexGrow:1}}})),X=function(){var e=Object(j.e)(),t=Object(j.f)(),n=Q();return Object(m.jsx)(H.a,{position:"fixed",children:Object(m.jsxs)(R.a,{children:["/"!==t.pathname?Object(m.jsx)(D.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:function(){return e.push("/")},children:Object(m.jsx)(q.a,{})}):null,Object(m.jsx)(N.a,{variant:"h6",onClick:function(){return e.push("/")},children:"COVID-19 Information"}),Object(m.jsx)(N.a,{variant:"h6",className:n.title}),Object(m.jsx)(D.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(){return window.open("https://github.com/manishbisht/india-covid19-react/issues/new","_blank")},color:"inherit",children:Object(m.jsx)(K.a,{})}),Object(m.jsx)(D.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(){return window.open("https://github.com/manishbisht/india-covid19-react","_blank")},color:"inherit",children:Object(m.jsx)(P.a,{})})]})})},Z=n(284),$=n(283);function ee(){return Object(m.jsxs)(N.a,{variant:"body2",color:"textSecondary",children:["Copyright \xa9 ",Object(m.jsx)($.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var te=Object(O.a)((function(e){return{footer:{padding:e.spacing(3,2),marginTop:"auto",backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[800]}}}));function ne(){var e=te();return Object(m.jsx)("footer",{className:e.footer,children:Object(m.jsxs)(Z.a,{maxWidth:"sm",children:[Object(m.jsx)(N.a,{variant:"body1",children:"My sticky footer can be found here."}),Object(m.jsx)(ee,{})]})})}var ae=n(285),ce=function(){var e=x();return Object(m.jsx)("div",{className:e.mainContainer,children:Object(m.jsx)(ae.a,{})})},re=n(78),ie={dataLoading:{component:ce}};re.a.initialize("UA-58136220-2"),re.a.pageview(window.location.pathname+window.location.search);var oe=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(s.a,{children:[Object(m.jsx)(X,{}),Object(m.jsx)(j.a,{exact:!0,path:"/:stateName",render:function(){return Object(m.jsx)(l.a,{config:ie,children:Object(m.jsx)(E,{})})}}),Object(m.jsx)(j.a,{exact:!0,path:"/",component:g}),Object(m.jsx)(ne,{})]})})};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(oe,{})}),document.getElementById("root"))}},[[219,1,2]]]);
//# sourceMappingURL=main.8231cc81.chunk.js.map