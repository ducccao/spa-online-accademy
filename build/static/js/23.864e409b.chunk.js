(this["webpackJsonpspa-online-academy"]=this["webpackJsonpspa-online-academy"]||[]).push([[23],{643:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return z}));var a=c(8),n=c(17),s=c(6),i=c(342),l=c(352),r=c(54),o=c(357),j=c(341),d=c(642),b=c(84),h=c(339),u=c(358),O=c(343),x=c(297),f=c(354),p=c(153),m=c(449),g=c(411),v=c(409),_=c(433),C=c(410),y=c(408),S=c(20),w=c.n(S),k=c(0),W=c.n(k),L=c(383),N=c.n(L),E=(c(384),c(16)),I=c(22),D=c(505),F=c(2),J=Object(p.a)((function(e){return{formControl:{minWidth:120},selectEmpty:{}}})),R=Object(s.a)({root:{color:b.a[400],"&$checked":{color:b.a[600]}},checked:{}})((function(e){return Object(F.jsx)(d.a,Object(n.a)({color:"default"},e))}));function U(e){var t=e.row,c=J(),n=Object(k.useState)(t.flag_reviewable),s=Object(a.a)(n,2),i=s[0],l=s[1];return Object(k.useEffect)((function(){}),[]),Object(F.jsxs)(y.a,{hover:!0,children:[Object(F.jsx)(v.a,{align:"left",component:"th",scope:"row",children:t.lesson_id}),Object(F.jsx)(v.a,{align:"left",children:t.lesson_name}),Object(F.jsx)(v.a,{align:"left",children:Object(F.jsx)(D.a,{className:c.checkbox,control:Object(F.jsx)(R,{checked:i,onChange:function(e){l(e.target.checked);var c="".concat(E.b,"/api/instructor/toggle-preview"),a={flag_reviewable:e.target.checked,lesson_id:+t.lesson_id};w.a.patch(c,a,{}).then((function(e){})).catch((function(e){}))},name:"checkedG"})})}),Object(F.jsx)(v.a,{align:"left",children:t.chap_id}),Object(F.jsx)(v.a,{align:"left",children:t.chap_name})]})}Object(s.a)({root:{color:b.a[400],"&$checked":{color:b.a[600]}},checked:{}})((function(e){return Object(F.jsx)(d.a,Object(n.a)({color:"default"},e))}));var $=Object(p.a)((function(e){return{formControl:{minWidth:120},selectEmpty:{}}}));function z(e){var t=e.email,c=$(),n=W.a.useState(""),s=Object(a.a)(n,2),d=(s[0],s[1],W.a.useState("")),b=Object(a.a)(d,2),p=b[0],S=b[1],L=Object(k.useState)([]),D=Object(a.a)(L,2),J=D[0],R=D[1],z=Object(k.useState)(""),A=Object(a.a)(z,2),G=A[0],K=A[1],P=Object(k.useState)(0),q=Object(a.a)(P,2),B=q[0],H=q[1],M=Object(k.useState)(!1),Q=Object(a.a)(M,2),T=Q[0],V=Q[1],X=Object(k.useState)(""),Y=Object(a.a)(X,2),Z=Y[0],ee=Y[1],te=Object(k.useState)([1,2,3]),ce=Object(a.a)(te,2),ae=ce[0],ne=ce[1],se=Object(k.useState)([]),ie=Object(a.a)(se,2),le=ie[0],re=ie[1],oe=Object(k.useState)(null),je=Object(a.a)(oe,2),de=je[0],be=je[1],he=Object(k.useState)(null),ue=Object(a.a)(he,2),Oe=ue[0],xe=ue[1],fe=Object(k.useState)(""),pe=Object(a.a)(fe,2),me=(pe[0],pe[1]),ge=Object(k.useState)(!1),ve=Object(a.a)(ge,2),_e=ve[0],Ce=ve[1],ye={};function Se(e){var t="".concat(E.b,"/api/instructor/chap-exists/").concat(+e);w.a.get(t,{}).then((function(e){ne(e.data.chap_exists)})).catch((function(e){ne([])}))}Object(k.useEffect)((function(){var e=sessionStorage.getItem("user_login_id");H(+e),function(){var e="".concat(E.b,"/api/instructor/uploaded-course/").concat(t);w.a.get(e,ye).then((function(e){R(e.data.uploaded_course)}))}()}),[]);function we(e){var t="".concat(E.b,"/api/instructor/lesson-exists/").concat(+e);w.a.get(t,{}).then((function(e){re(e.data.lesson_exists)})).catch((function(e){re([])}))}var ke=function(e){var t=new FormData;if(""!==G&&""!==p&&""!==Z&&""!==B){t.append("lesson_video",Oe),t.append("course_id",+G),t.append("chap_id",+de),t.append("lesson_name",p),t.append("lesson_content",Z),t.append("user_id",B),Ce(!0);var c="".concat(E.b,"/api/instructor/upload-lesson");w.a.post(c,t,{}).then((function(e){Ce(!1),V(!T);Object(I.a)("Success!","Lesson upload success!",2500,"success")})).catch((function(e){Ce(!1),V(!T);Object(I.a)("error!","Something broke!",2500,"error")}))}else{Object(I.a)("error!","Cannot empty!",2500,"error")}};return Object(k.useEffect)((function(){Se(G),we(de)}),[T,_e]),Object(F.jsxs)(i.a,{container:!0,children:[Object(F.jsx)(i.a,{item:!0,xs:12,children:Object(F.jsxs)(h.a,{fullWidth:!0,className:c.formControl,children:[Object(F.jsx)(u.a,{id:"demo-simple-select-error-label",children:"Course uploaded"}),Object(F.jsx)(f.a,{fullWidth:!0,labelId:"demo-simple-select-error-label",id:"demo-simple-select-error",value:G,onChange:function(e){K(e.target.value),Se(e.target.value),V(!T)},children:J.map((function(e){return Object(F.jsx)(O.a,{name:e.course_name,value:e.course_id,children:e.course_name},e.course_id)}))})]})}),Object(F.jsxs)(i.a,{item:!0,xs:12,children:[Object(F.jsx)(l.a,{my:3,children:Object(F.jsx)(r.a,{variant:"h6",children:"Chapter exists information"})}),Object(F.jsx)(l.a,{my:3,children:Object(F.jsx)(_.a,{component:x.a,children:Object(F.jsxs)(m.a,{className:c.table,"aria-label":"simple table",children:[Object(F.jsx)(C.a,{children:Object(F.jsxs)(y.a,{children:[Object(F.jsx)(v.a,{align:"left",children:"Chap id"}),Object(F.jsx)(v.a,{align:"left",children:"Chap name"}),Object(F.jsx)(v.a,{align:"left",children:"Course name"})]})}),Object(F.jsx)(g.a,{children:ae.map((function(e){return Object(F.jsxs)(y.a,{hover:!0,children:[Object(F.jsx)(v.a,{align:"left",component:"th",scope:"row",children:e.chap_id}),Object(F.jsx)(v.a,{align:"left",children:e.chap_name}),Object(F.jsx)(v.a,{align:"left",children:e.course_name})]},e.chap_id)}))})]})})})]}),Object(F.jsx)(i.a,{item:!0,xs:12,children:Object(F.jsxs)(h.a,{fullWidth:!0,className:c.formControl,children:[Object(F.jsx)(u.a,{children:"Choose chapter to upload lesson"}),Object(F.jsx)(f.a,{fullWidth:!0,value:de,onChange:function(e){V(!T),be(e.target.value),we(e.target.value)},children:ae.map((function(e){return Object(F.jsx)(O.a,{value:e.chap_id,children:e.chap_name},e.chap_id)}))})]})}),Object(F.jsxs)(i.a,{item:!0,xs:12,children:[Object(F.jsx)(l.a,{my:3,children:Object(F.jsx)(r.a,{variant:"h6",children:"Lesson exists information"})}),Object(F.jsx)(l.a,{my:3,children:Object(F.jsx)(_.a,{component:x.a,children:Object(F.jsxs)(m.a,{className:c.table,"aria-label":"simple table",children:[Object(F.jsx)(C.a,{children:Object(F.jsxs)(y.a,{children:[Object(F.jsx)(v.a,{align:"left",children:"Lesson id"}),Object(F.jsx)(v.a,{align:"left",children:"Lesson name"}),Object(F.jsx)(v.a,{align:"left",children:"Is allow preview"}),Object(F.jsx)(v.a,{align:"left",children:"Chap id"}),Object(F.jsx)(v.a,{align:"left",children:"Chap name"})]})}),Object(F.jsx)(g.a,{children:le.map((function(e){return Object(F.jsx)(U,{row:e},e.lesson_id)}))})]})})})]}),Object(F.jsx)(i.a,{item:!0,xs:12,children:Object(F.jsx)(l.a,{my:3,children:Object(F.jsx)(h.a,{fullWidth:!0,children:Object(F.jsx)(o.a,{fullWidth:!0,onKeyPress:function(e){13===e.which&&ke()},label:"Lesson name",value:p,onChange:function(e){return S(e.target.value)}})})})}),Object(F.jsxs)(i.a,{item:!0,xs:12,children:[Object(F.jsx)(l.a,{my:3,children:Object(F.jsx)(r.a,{variant:"h6",component:"p",children:"Lesson content"})}),Object(F.jsx)(h.a,{fullWidth:!0,children:Object(F.jsx)(N.a,{theme:"snow",value:Z,onChange:ee})})]}),Object(F.jsxs)(i.a,{item:!0,xs:12,children:[Object(F.jsx)(l.a,{my:3,children:Object(F.jsx)(r.a,{variant:"h6",component:"p",children:"Lesson video"})}),Object(F.jsx)(h.a,{fullWidth:!0,children:Object(F.jsx)("input",{id:"input-b2",name:"input-b2",type:"file",className:"file",onChange:function(e){return function(e){me(e.target.files[0]);var t=new FileReader,c=e.target.files[0];t.onload=function(){xe(c)},t.readAsDataURL(c)}(e)},"data-browse-on-zone-click":"true"})})]}),Object(F.jsx)(i.a,{item:!0,xs:12,children:Object(F.jsx)(l.a,{my:3,children:!0===_e?Object(F.jsx)(j.a,{className:c.btn,fullWidth:!0,variant:"outlined",color:"primary",onClick:ke,children:"Loading ..."}):Object(F.jsxs)(j.a,{className:c.btn,variant:"contained",color:"primary",onClick:ke,children:["Upload"," "]})})})]})}}}]);
//# sourceMappingURL=23.864e409b.chunk.js.map