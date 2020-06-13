(this["webpackJsonpwkt-map"]=this["webpackJsonpwkt-map"]||[]).push([[0],{42:function(e,t,a){e.exports={navbarBrand:"header_navbarBrand__2WSmN"}},45:function(e,t,a){e.exports={map:"map_map__1cjP6"}},48:function(e,t,a){e.exports={actions:"shapeItem_actions__1rf7J"}},50:function(e,t,a){e.exports={title:"editPanel_title__3xB3B"}},54:function(e,t,a){e.exports=a(66)},64:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),l=a(18),i=a(28),s=a(42),u=a.n(s),m=function(){return r.a.createElement(i.a,{bg:"dark",variant:"dark",sticky:"top"},r.a.createElement(i.a.Brand,{href:"/",className:"".concat(u.a.navbarBrand," align-middle")},r.a.createElement("i",{className:"fas fa-map-marked fa-2x"}),r.a.createElement("span",null,"WKT Map")),r.a.createElement(i.a.Collapse,{className:"justify-content-end"},r.a.createElement(i.a.Text,null,r.a.createElement("a",{href:"https://github.com/sbstnkng/wkt-map",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github fa-2x"})))))},f=a(69),p=a(70),d=a(71),h=a(44),b=a.n(h),E=a(45),v=a.n(E),g=[52.52226,13.413144],y=function(e){if(void 0!==e&&0!==e.length)return e.filter((function(e){return e.visible})).map((function(e){return e.geoJson.coordinates[0].map((function(e){return[e[1],e[0]]}))}))},k=function(e){var t=e.shapes;return r.a.createElement(p.a,{bounds:y(t),center:g,zoom:16,maxZoom:22,className:v.a.map},r.a.createElement(d.a,{maxZoom:22,maxNativeZoom:19,attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),function(e){return e.filter((function(e){return e.visible})).map((function(e){return r.a.createElement(f.a,{key:b()(e),data:e.geoJson,color:e.color,weight:2})}))}(t))};k.defaultProps={shapes:[]};var w=k,N=a(52),x=a(51),S=a(35),j=a(39),O=a(23),C=a(14),B=a(53),_=a(48),I=a.n(_),W=function(e){var t=e.shape,a=e.deleteItem,n=e.updateItemVisibility,c=e.editItem,o=t.label,l=t.wkt,i=function(){n(Object(j.a)(Object(j.a)({},t),{},{visible:!t.visible}))};return r.a.createElement(B.a,{body:!0,className:"my-2"},r.a.createElement(O.a,{className:"align-items-center"},r.a.createElement(C.a,{className:"text-truncate"},o),r.a.createElement(C.a,{className:"text-truncate",xs:8},l),r.a.createElement(C.a,{className:I.a.actions},r.a.createElement("i",{className:"delete fas fa-trash",style:{color:"#e83e8c"},onClick:function(){return a(t)}}),r.a.createElement("i",{className:"edit fas fa-edit",style:{color:"#28a745"},onClick:function(){return c(t)}}),function(e){var t="#17a2b8",a="fa-eye";return e.visible||(t="#6c757d",a="fa-eye-slash"),r.a.createElement("i",{className:"fas ".concat(a),style:{color:t},onClick:i})}(t))))},J=a(27),P=a(17),T=a(38),L=a(49),G=function(e){return"string"==typeof e},K=function(e){return!G(e)||function(e){return!G(e)||0===e.length}(e.trim())},z=function(e){return K(e)?new T.Point([]):L.parse(e)},M=function(e){var t=e.id,a=e.show,c=e.handleClose,o=e.handleSave,i=e.editShape,s=Object(n.useState)(""),u=Object(l.a)(s,2),m=u[0],f=u[1],p=Object(n.useState)(""),d=Object(l.a)(p,2),h=d[0],b=d[1],E=Object(n.useState)(!0),v=Object(l.a)(E,2),g=v[0],y=v[1],k=Object(n.useRef)();Object(n.useEffect)((function(){f(i.label||"Shape-".concat(t)),b(i.wkt),k.current&&k.current.focus()}),[i,t,a]);var w=function(e){var t=e.bbox(),a=(t[0]+t[2])/2;return[(t[1]+t[3])/2,a]},N=function(e){var t=function(e){if(!e)return!1;try{return z(e),!0}catch(t){return!1}}(e);y(t)};return r.a.createElement(J.a,{show:a,onHide:c},r.a.createElement(J.a.Header,{closeButton:!0},r.a.createElement(J.a.Title,null,"New Shape")),r.a.createElement(J.a.Body,null,r.a.createElement(P.a,{onSubmit:function(e){if(e.preventDefault(),g){var a=z(h);o({id:t,label:m,wkt:h,geoJson:a,color:"teal",centerPoint:w(a),visible:!0}),f(""),b("")}}},r.a.createElement(P.a.Group,{as:O.a,controlId:"formBasicLabel"},r.a.createElement(P.a.Label,{column:!0,sm:2},"Label"),r.a.createElement(C.a,{sm:10},r.a.createElement(P.a.Control,{type:"text",placeholder:"Shape Label",value:m,onChange:function(e){return f(e.target.value)}}))),r.a.createElement(P.a.Group,{as:O.a,controlId:"formBasicCoordinates"},r.a.createElement(P.a.Label,{column:!0,sm:2},"Geometry"),r.a.createElement(C.a,{sm:10},r.a.createElement(P.a.Control,{ref:k,as:"textarea",rows:"6",placeholder:"WKT Coordinates",isInvalid:!g,value:h,onChange:function(e){return b(e.target.value)},onBlur:function(e){return N(e.target.value)}}),r.a.createElement(P.a.Control.Feedback,{type:"invalid"},"Please provide valid WKT data."))),r.a.createElement(P.a.Group,{as:O.a},r.a.createElement(C.a,{sm:{span:10,offset:2}},r.a.createElement(S.a,{variant:"primary",type:"submit"},"Save shape"))))))},Z=function(e){var t=e.children;return r.a.createElement("section",{className:"my-3"},t)},F=a(50),H=a.n(F),V=function(e){var t=e.shapes,a=e.updateShapes,c=Object(n.useState)(!1),o=Object(l.a)(c,2),i=o[0],s=o[1],u=Object(n.useState)({}),m=Object(l.a)(u,2),f=m[0],p=m[1],d=function(){s(!1),p({})},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};p(e),s(!0)},b=function(e){var n=t.filter((function(t){return t!==e}));a(n)},E=function(e){var n=[];n=t.find((function(t){return t.id===e.id}))?t.map((function(t){return t.id===e.id?e:t})):[].concat(Object(N.a)(t),[e]),a(n)};return r.a.createElement(x.a,null,r.a.createElement(Z,null,r.a.createElement("div",{className:H.a.title},r.a.createElement("span",{className:"text-muted"},"Add WKT formatted shapes"),r.a.createElement(S.a,{variant:"primary",size:"sm",onClick:function(){return h()}},r.a.createElement("i",{className:"fas fa-plus"})," New")),r.a.createElement("div",{className:"pt-3"},t.map((function(e){return r.a.createElement(W,{key:e.id,shape:e,deleteItem:b,updateItemVisibility:E,editItem:function(e){return h(e)}})})))),r.a.createElement(M,{show:i,handleClose:d,handleSave:function(e){d(),E(e)},id:f.id||t.length+1,editShape:f}))},A=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement(w,{shapes:a}),r.a.createElement(V,{shapes:a,updateShapes:c}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(64),a(65);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.6fab1e1a.chunk.js.map