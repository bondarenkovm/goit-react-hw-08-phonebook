"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[665],{9665:function(n,e,r){r.r(e),r.d(e,{default:function(){return G}});var t,o,a,i,s,c,l,d,u,p=r(9434),m=r(8893),x=r(6916),f=function(n){return n.filter},b=function(n){return n.contacts.items},h=function(n){return n.contacts.isLoading},g=function(n){return n.contacts.error},j=(0,x.P1)([b,f],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),v=r(5705),Z=r(6727),y=r(168),k=r(7402),w=(0,k.Z)(v.l0)(t||(t=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  font-weight: 500;\n  padding: 5px;\n  border: 1px solid black;\n  border-radius: 5px;\n"]))),C=(0,k.Z)(v.Bc)(o||(o=(0,y.Z)(["\n  color: red;\n  margin-left: auto;\n"]))),z=k.Z.label(a||(a=(0,y.Z)(["\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n  font-size: 20px;\n"]))),T=k.Z.button(i||(i=(0,y.Z)(["\n  width: 150px;\n  padding: 5px 10px;\n  border-radius: 5px;\n  font-size: 15px;\n  font-weight: 500;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  background-color: green;\n  transition: 250ms;\n  margin-left: auto;\n  margin-right: auto;\n  :hover {\n    scale: 1.05;\n  }\n  :active {\n    scale: 0.95;\n    background-color: blue;\n  }\n  :disabled {\n    background-color: red;\n    color: black;\n  }\n"]))),A=r(5218),F=r(184),N=Z.Ry().shape({name:Z.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"The name may contain only letters!!!").min(3,"Too short").max(15,"Too long").required("Required").trim(),number:Z.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits!!!").min(5,"Too short").max(10,"Too long").required("Required").trim()}),_=function(){var n=(0,p.I0)(),e=(0,p.v9)(b);return(0,F.jsx)(v.J9,{initialValues:{name:"",number:""},validationSchema:N,onSubmit:function(r,t){var o=t.resetForm;if(e.some((function(n){return n.name===r.name})))return(0,A.Am)("".concat(r.name," is alreary in contacts"),{style:{background:"#ca1616",color:"#fff"}}),void o();n((0,m.uK)(r)),o()},children:(0,F.jsxs)(w,{children:[(0,F.jsxs)(z,{htmlFor:"name",children:["Name:",(0,F.jsx)(v.gN,{type:"text",name:"name"})]}),(0,F.jsx)(C,{name:"name",component:"div"}),(0,F.jsxs)(z,{htmlFor:"number",children:["Number:",(0,F.jsx)(v.gN,{type:"tel",name:"number"})]}),(0,F.jsx)(C,{name:"number",component:"div"}),(0,F.jsx)(T,{type:"submit",children:"ADD CONTACT"})]})})},q=r(8991),L=k.Z.label(s||(s=(0,y.Z)(["\n  display: flex;\n  justify-content: space-between;\n  font-size: 20px;\n  margin-bottom: 20px;\n  font-weight: 500;\n"]))),D=function(){var n=(0,p.v9)(f),e=(0,p.I0)();return(0,F.jsxs)(L,{children:["Find contacts by name:",(0,F.jsx)("input",{type:"text",value:n,onChange:function(n){var r=n.target.value;e((0,q.h)(r))}})]})},I=r(2791),P=k.Z.ul(c||(c=(0,y.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 0;\n  margin: 0;\n"]))),R=k.Z.li(l||(l=(0,y.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 15px;\n  font-size: 20px;\n  padding: 2px;\n  border: 1px solid black;\n  border-radius: 5px;\n"]))),S=k.Z.button(d||(d=(0,y.Z)(["\n  padding: 5px 10px;\n  border-radius: 5px;\n  font-size: 15px;\n  font-weight: 500;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  background-color: red;\n  transition: 250ms;\n  &:hover {\n    scale: 1.05;\n  }\n  &:active {\n    scale: 0.95;\n    background-color: blue;\n  }\n"]))),K=r(8966),B=function(){var n=(0,p.v9)(j),e=(0,p.v9)(h),r=(0,p.v9)(g),t=(0,p.I0)();(0,I.useEffect)((function(){t((0,m.yF)())}),[t]);return(0,F.jsxs)(F.Fragment,{children:[e&&!r&&(0,F.jsx)(K.g4,{height:"40",width:"40",radius:"9",color:"#4fa94d",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0}),(0,F.jsx)(P,{children:n.map((function(n){var e=n.id,r=n.name,o=n.number;return(0,F.jsxs)(R,{children:[(0,F.jsxs)("span",{children:[r,":"]}),(0,F.jsx)("span",{children:o}),(0,F.jsx)(S,{type:"button",onClick:function(){return function(n){t((0,m.GK)(n))}(e)},children:"Delete"})]},e)}))})]})},E=k.Z.div(u||(u=(0,y.Z)(["\n  width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n  padding: 10px;\n  text-align: center;\n  background-color: rgb(163, 244, 217);\n  border: 2px solid black;\n  border-radius: 10px;\n"])));var G=function(){return(0,F.jsxs)(E,{children:[(0,F.jsx)("h1",{children:"Phonebook"}),(0,F.jsx)(_,{}),(0,F.jsx)("h2",{children:"Contacts"}),(0,F.jsx)(D,{}),(0,F.jsx)(B,{})]})}}}]);
//# sourceMappingURL=665.ff7ff35c.chunk.js.map