(this["webpackJsonpwkt-map"]=this["webpackJsonpwkt-map"]||[]).push([[0],{42:function(e,a,t){e.exports={navbarBrand:"header_navbarBrand__2WSmN"}},44:function(e,a,t){e.exports={map:"map_map__1cjP6"}},47:function(e,a,t){e.exports={actions:"shapeItem_actions__1rf7J"}},49:function(e,a,t){e.exports={title:"editPanel_title__3xB3B"}},53:function(e,a,t){e.exports=t(65)},63:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(19),l=t.n(c),o=t(21),s=t(28),m=t(42),i=t.n(m),u=function(){return r.a.createElement(s.a,{bg:"dark",variant:"dark",sticky:"top"},r.a.createElement(s.a.Brand,{href:"/",className:"".concat(i.a.navbarBrand," align-middle")},r.a.createElement("i",{className:"fas fa-map-marked fa-2x"}),r.a.createElement("span",null,"WKT Map")),r.a.createElement(s.a.Collapse,{className:"justify-content-end"},r.a.createElement(s.a.Text,null,r.a.createElement("a",{href:"https://github.com/sbstnkng/wkt-map",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github fa-2x"})))))},p=t(68),f=t(69),h=t(70),d=t(44),E=t.n(d),b=[52.52226,13.413144],v=function(e){if(void 0===e||0===e.length)return b;var a=0,t=0;return e.forEach((function(e){a+=e.centerPoint[0],t+=e.centerPoint[1]})),[a/e.length,t/e.length]},g=function(e){var a=e.shapes;return r.a.createElement(f.a,{center:v(a),zoom:16,className:E.a.map},r.a.createElement(h.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),function(e){return e.map((function(e,a){return r.a.createElement(p.a,{key:a,data:e.geoJson,color:e.color,weight:2})}))}(a))};g.defaultProps={shapes:[]};var y=g,w=t(39),N=t(51),k=t(50),x=t(35),S=t(23),j=t(14),_=t(52),B=t(47),O=t.n(B),C=function(e){var a=e.id,t=e.shape,n=e.deleteItem,c=t.label,l=t.wkt;return r.a.createElement(_.a,{body:!0,className:"my-2"},r.a.createElement(S.a,{className:"align-items-center"},r.a.createElement(j.a,{className:"text-truncate"},c),r.a.createElement(j.a,{className:"text-truncate",xs:8},l),r.a.createElement(j.a,{className:O.a.actions},r.a.createElement("i",{className:"delete fas fa-trash",style:{color:"#e83e8c"},onClick:function(){return n(a)}}),r.a.createElement("i",{className:"edit fas fa-edit",style:{color:"#28a745"}}),r.a.createElement("i",{className:"info fas fa-info",style:{color:"#17a2b8"}}))))},P=t(27),I=t(17),W=t(38),J=t(48),L=function(e){return"string"==typeof e},T=function(e){return!L(e)||function(e){return!L(e)||0===e.length}(e.trim())},G=function(e){var a=e.show,t=e.handleClose,c=e.handleSave,l=Object(n.useState)(""),s=Object(o.a)(l,2),m=s[0],i=s[1],u=Object(n.useState)(""),p=Object(o.a)(u,2),f=p[0],h=p[1],d=function(e){var a=e.bbox(),t=(a[0]+a[2])/2;return[(a[1]+a[3])/2,t]};return r.a.createElement(P.a,{show:a,onHide:t},r.a.createElement(P.a.Header,{closeButton:!0},r.a.createElement(P.a.Title,null,"New Shape")),r.a.createElement(P.a.Body,null,r.a.createElement(I.a,{onSubmit:function(e){e.preventDefault();var a,t=T(a=f)?new W.Point([]):J.parse(a);c({label:m,wkt:f,geoJson:t,color:"teal",centerPoint:d(t)}),i(""),h("")}},r.a.createElement(I.a.Group,{as:S.a,controlId:"formBasicLabel"},r.a.createElement(I.a.Label,{column:!0,sm:2},"Label"),r.a.createElement(j.a,{sm:10},r.a.createElement(I.a.Control,{type:"text",placeholder:"Shape Label",value:m,onChange:function(e){return i(e.target.value)}}))),r.a.createElement(I.a.Group,{as:S.a,controlId:"formBasicCoordinates"},r.a.createElement(I.a.Label,{column:!0,sm:2},"Geometry"),r.a.createElement(j.a,{sm:10},r.a.createElement(I.a.Control,{as:"textarea",rows:"6",placeholder:"WKT Coordinates",value:f,onChange:function(e){return h(e.target.value)}}))),r.a.createElement(I.a.Group,{as:S.a},r.a.createElement(j.a,{sm:{span:10,offset:2}},r.a.createElement(x.a,{variant:"primary",type:"submit"},"Save shape"))))))},z=function(e){var a=e.children;return r.a.createElement("section",{className:"my-3"},a)},K=t(49),M=t.n(K),H=function(e){var a=e.shapes,t=e.updateShapes,c=Object(n.useState)(!1),l=Object(o.a)(c,2),s=l[0],m=l[1],i=function(){return m(!1)};return r.a.createElement(k.a,null,r.a.createElement(z,null,r.a.createElement("div",{className:M.a.title},r.a.createElement("span",{className:"text-muted"},"Add WKT formatted shapes"),r.a.createElement(x.a,{variant:"primary",size:"sm",onClick:function(){return m(!0)}},r.a.createElement("i",{className:"fas fa-plus"})," New")),r.a.createElement("div",{className:"pt-3"},function(e,a){return e.map((function(e,t){return r.a.createElement(C,{key:t,id:t,shape:e,deleteItem:a})}))}(a,(function(e){var n=a.filter((function(a,t){return t!==e}));t(n)})))),r.a.createElement(G,{show:s,handleClose:i,handleSave:function(e){var n,r;i(),t([].concat(Object(N.a)(a),[Object(w.a)(Object(w.a)({},e),{},{label:(n=e.label,r="Shape-".concat(a.length+1),T(n)?r:n)})]))}}))},A=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),r.a.createElement(y,{shapes:t}),r.a.createElement(H,{shapes:t,updateShapes:c}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(63),t(64);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.0e1e94b5.chunk.js.map