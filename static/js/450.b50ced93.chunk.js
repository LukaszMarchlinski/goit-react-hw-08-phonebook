"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[450],{2732:function(n,e,t){t.d(e,{G:function(){return c}});var o,r=t(168),a=t(7691).ZP.h2(o||(o=(0,r.Z)(["\n  display: flex;\n\n  font-size: ",";\n\n  margin-bottom: ",";\n\n  margin-top: ",";\n\n  justify-content: center;\n"])),(function(n){var e=n.size;return e?"".concat(e,"px"):"20px"}),(function(n){var e=n.mb;return e||void 0===e?"15px":"".concat(e,"px")}),(function(n){var e=n.mt;return e||void 0===e?"15px":"".concat(e,"px")})),i=t(184),c=function(n){var e=n.title,t=n.size,o=n.mb,r=n.mt;return(0,i.jsx)(a,{size:t,mb:o,mt:r,children:e})}},1450:function(n,e,t){t.r(e),t.d(e,{default:function(){return gn}});var o,r,a,i,c,l,s,d,u,f,p,b,x,m,h,g,v,Z=t(9439),j=t(4270),C=t(7762),y=t(2791),k=t(9434),w=t(6916),z=function(n){return n.contacts.items},I=function(n){return n.contacts.isLoading},M=function(n){return n.contacts.error},P=(0,w.P1)([z,function(n){return n.contacts.filter}],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),L=t(3634),N=t(6015),S=t(5936),F=t(4162),A=t(7205),O=t(1898),E=t(8347),_=t(5562),W=t(2732),q=t(168),B=t(7691),G=B.ZP.div(o||(o=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),T=t(184),K=function(){var n=(0,k.v9)(z),e=(0,k.I0)(),t=(0,y.useState)(""),o=(0,Z.Z)(t,2),r=o[0],a=o[1],i=(0,y.useState)(""),c=(0,Z.Z)(i,2),l=c[0],s=c[1],d=function(n){var e=n.target,t=e.name,o=e.value;switch(t){case"name":a(o);break;case"number":var r=o.replace(/[^\d\s]/g,"");r.startsWith("48 ")||(r="48 "+r.replace(/^48/,"")),s("+"+r)}};return(0,T.jsxs)(G,{children:[(0,T.jsx)(W.G,{title:"Create new contact"}),(0,T.jsxs)(N.Z,{component:"form",onSubmit:function(t){if(t.preventDefault(),l.replace("+48 ","").length<9)return _.Notify.warning("Phone number must be at least 9 digits long.");var o,i=(0,C.Z)(n);try{for(i.s();!(o=i.n()).done;){var c=o.value;if(c.name.toLowerCase()===r.toLowerCase())return _.Notify.warning("".concat(c.name,", is already in contacts!'"))}}catch(d){i.e(d)}finally{i.f()}e((0,L.uK)({name:r,number:l})),a(""),s("")},children:[(0,T.jsxs)(O.Z,{sx:{width:"25ch",mt:1},children:[(0,T.jsx)(S.Z,{onChange:d,label:"Name",variant:"outlined",color:"info",id:"outlined-basic",sx:{mb:2,"& .MuiInputBase-input":{color:"black"},"& .MuiInputLabel-root":{color:"black"},"& .MuiInputLabel-root.Mui-focused":{color:"#93F600",fontSize:"20px",transform:"translate(14px, -12px) scale(0.75)",backgroundColor:"white",padding:"0 4px"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#1c84fa"},"&:hover fieldset":{borderColor:"#1c84fa"},"&:active fieldset":{borderColor:"#1c84fa"},"& .MuiOutlinedInput-notchedOutline":{borderColor:"#54b95f",borderWidth:"3px"}}},type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces.",value:r,autoComplete:"off",required:!0,style:{background:"rgb(255, 255, 255, 0.8)"}}),(0,T.jsx)(S.Z,{name:"number",type:"tel",onChange:d,value:l,label:"Number",variant:"outlined",color:"info",pattern:"\\+48 \\d{9}",title:"Phone number must start with +48 and be followed by 9 digits",id:"outlined-basic",sx:{mb:1,"& .MuiInputBase-input":{color:"black"},"& .MuiInputLabel-root":{color:"black"},"& .MuiInputLabel-root.Mui-focused":{color:"#93F600",fontSize:"20px",transform:"translate(14px, -12px) scale(0.75)",backgroundColor:"white",padding:"0 4px"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#1c84fa"},"&:hover fieldset":{borderColor:"#1c84fa"},"&:active fieldset":{borderColor:"#1c84fa"},"& .MuiOutlinedInput-notchedOutline":{borderColor:"#54b95f",borderWidth:"3px"},backgroundColor:"ffffff"}},inputProps:{maxLength:13},autoComplete:"off",required:!0,style:{background:"rgb(255, 255, 255, 0.8)"}})]}),(0,T.jsx)(F.Z,{children:(0,T.jsx)(A.Z,{type:"submit",variant:"outlined",color:"info",size:"large",endIcon:(0,T.jsx)(E.Z,{size:"medium"}),sx:{background:"rgb(28, 132, 250, 0.8)",color:"#ffffff",padding:"14px 0px","&:hover":{backgroundColor:"#93F600",borderColor:"#93F600"}},children:"Add contact"})})]})]})},D=t(7840),Y=function(){var n=(0,k.I0)();return(0,T.jsx)(S.Z,{onChange:function(e){var t=e.currentTarget.value;n((0,D.f)(t.toLocaleLowerCase()))},id:"outlined-basic",label:"Search by name",variant:"outlined",color:"info",sx:{mt:1,minWidth:500,"& .MuiInputBase-input":{color:"black"},"& .MuiInputLabel-root":{color:"black"},"& .MuiInputLabel-root.Mui-focused":{color:"#93F600",fontSize:"20px",transform:"translate(14px, -12px) scale(0.75)",backgroundColor:"white",padding:"0 4px"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#1c84fa"},"&:hover fieldset":{borderColor:"#1c84fa"},"&:active fieldset":{borderColor:"#1c84fa"},"& .MuiOutlinedInput-notchedOutline":{borderColor:"#54b95f",borderWidth:"3px"}}}})},$=B.ZP.td(r||(r=(0,q.Z)(["\npadding: 10px 0 10px 0;\n\n\n\n&.tools,\n&.center {\n  text-align: center;\n  \n  }\n  & svg {\n    color: #198754;\n  }\n  &:hover svg {\n    color: #93F600;\n  }\n  \n"]))),J=t(5205),U=t(4919),H=t(3811),Q=t(7247),R=function(n){var e=n.name,t=n.number,o=n.id,r=n.toggleEditModal,a=n.getContactInfo,i=(0,k.I0)();return(0,T.jsxs)("tr",{children:[(0,T.jsx)("td",{children:(0,T.jsx)(J.Z,{color:"info",sx:{fontSize:35,color:"#1c84fa"}})}),(0,T.jsx)($,{children:e}),(0,T.jsx)($,{className:"center",children:t}),(0,T.jsx)($,{className:"tools",children:(0,T.jsx)(H.Z,{id:o,type:"button",size:"small",onClick:function(){var n={name:e,number:t,id:o};r(),a(n)},sx:{"&:focus":{backgroundColor:"#93F600"},"&:hover":{backgroundColor:"#1c84fa"}},children:(0,T.jsx)(U.Z,{})})}),(0,T.jsx)($,{className:"tools",children:(0,T.jsx)(H.Z,{size:"small",id:o,type:"button",onClick:function(){return i((0,L.zY)(o))},sx:{"&:focus":{backgroundColor:"#93F600"},"&:hover":{backgroundColor:"#1c84fa"}},children:(0,T.jsx)(Q.Z,{})})})]})},V=t(6580),X=B.ZP.div(a||(a=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),nn=B.ZP.p(i||(i=(0,q.Z)(["\nmax-width: 500px;\nmargin-top: 30px;\nfont-size: 20px;\ntext-align: center;\ncolor: rgba(0, 0, 0, 0.75);\n"]))),en=B.ZP.div(c||(c=(0,q.Z)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\n\nmargin-top: 15px;\nmin-width: 500px;\n\nborder-radius: 8px;\n"]))),tn=B.ZP.div(l||(l=(0,q.Z)(["\nmargin-top: 30px;\ndisplay: flex;\njustify-content: center;\n"]))),on=B.ZP.table(s||(s=(0,q.Z)(["\nbackground-color: rgba(215, 234, 255, 0.8);\nborder-radius: 8px;\n\npadding: 10px;\n"]))),rn=B.ZP.th(d||(d=(0,q.Z)(["\n  text-align: center;\n  padding: 5px;\n\n  &.start {\n    text-align: start;\n  }\n"]))),an=function(n){var e=n.getContactInfo,t=n.toggleEditModal,o=(0,k.v9)(z),r=(0,k.v9)(I),a=(0,k.v9)(M),i=(0,k.I0)(),c=(0,k.v9)(P);return(0,y.useEffect)((function(){i((0,L.yF)())}),[i]),(0,T.jsxs)(X,{children:[(0,T.jsx)(W.G,{title:"Contacts list"}),(0,T.jsx)(Y,{}),!o.length&&!r&&(0,T.jsx)(nn,{children:"Your contact list is empty. Please add a new contact to see it in the saved list."}),!(!o.length||r)&&(c.length?(0,T.jsx)(en,{children:(0,T.jsxs)(on,{children:[(0,T.jsx)("thead",{children:(0,T.jsxs)("tr",{children:[(0,T.jsx)(rn,{}),(0,T.jsx)(rn,{className:"start",children:"Name"}),(0,T.jsx)(rn,{children:"Number"}),(0,T.jsx)(rn,{}),(0,T.jsx)(rn,{})]})}),(0,T.jsx)("tbody",{children:c.map((function(n){var o=n.id,r=n.name,a=n.number;return(0,T.jsx)(R,{name:r,number:a,id:o,getContactInfo:e,toggleEditModal:t},o)}))})]})}):(0,T.jsx)(nn,{children:"Sorry. No results!"})),r&&!a&&(0,T.jsx)(tn,{children:(0,T.jsx)(V.Z,{color:"success"})})]})},cn=B.ZP.div(u||(u=(0,q.Z)(["\n  display: flex;\n\n  justify-content: space-around;\n  margin-top: 30px;\n"]))),ln=(B.ZP.div(f||(f=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n"]))),t(9823)),sn=t(3462),dn=B.ZP.div(p||(p=(0,q.Z)(["\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  left: 0;\n\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 100;\n"]))),un=B.ZP.div(b||(b=(0,q.Z)(["\n  width: 400px;\n  padding: 40px;\n  position: relative;\n  background-color: rgba(215, 234, 255, 0.9);\n\n  border-radius: 8px;\n"]))),fn=B.ZP.button(x||(x=(0,q.Z)(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  right: 0;\n\n  margin: 5px 5px 0 0;\n\n  width: 40px;\n  height: 40px;\n\n  color: #54b95f;\n  &:hover,\n  &:focus {\n    color: #93F600;\n  }\n\n  padding: 3px;\n  background-color: transparent;\n\n  border: none;\n  border-radius: 50%;\n\n  cursor: pointer;\n  transition: background-color 250ms cubic-bezier(0.445, 0.05, 0.55, 0.95),\n    transform 250ms cubic-bezier(0.445, 0.05, 0.55, 0.95);\n\n  & svg {\n    width: 30px;\n    height: 30px;\n  }\n\n  &:hover,\n  &:focus {\n    background-color: #1c84fa;\n    transform: scale(0.9);\n  }\n"]))),pn=B.ZP.form(m||(m=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),bn=(B.ZP.label(h||(h=(0,q.Z)(["\n  display: flex;\n  align-items: center;\n"]))),B.ZP.input(g||(g=(0,q.Z)(["\n  display: block;\n  height: 50px;\n  border-radius: 5px;\n  margin-left: 10px;\n  padding-left: 15px;\n  font-size: 18px;\n  font-family: inherit;\n  background-color: rgba(255, 255, 255, 0.7);\n  border: 3px solid #54b95f; // Pocz\u0105tkowy kolor obramowania\n  \n  transition: \n    border-color 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275),\n    background-color 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\n\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.9);\n    border-color: #93F600; // Kolor obramowania przy najechaniu\n  }\n\n  &:focus {\n    background-color: rgba(255, 255, 255, 1);\n    border-color: #1c84fa; // Kolor obramowania podczas fokusa\n    outline: none;\n  }: none; // Usu\u0144 domy\u015bln\u0105 obramowanie fokusa\n  }\n     &:first-child {\n    margin-bottom: 10px;\n  }\n"])))),xn=B.ZP.button(v||(v=(0,q.Z)(["\n  align-self: center;\n\n  width: 50px;\n  height: 50px;\n\n  color: #54b95f;\n  &:hover,\n  &:focus {\n    color: #93F600;\n    }\n\n  margin-top: 10px;\n\n  cursor: pointer;\n  border-radius: 50%;\n  border: none;\n\n  background-color: transparent;\n\n  cursor: pointer;\n  transition: background-color 250ms cubic-bezier(0.445, 0.05, 0.55, 0.95),\n    transform 250ms cubic-bezier(0.445, 0.05, 0.55, 0.95);\n\n\n  & svg {\n    height: 30px;\n    width: 30px;\n  }\n  \n\n  &:hover,\n  &:focus {\n    background-color: #1c84fa;\n    transform: scale(0.9);\n  }\n"]))),mn=t(2041),hn=function(n){var e=n.contactInfo,t=n.toggleEditModal,o=(0,y.useState)(e.name),r=(0,Z.Z)(o,2),a=r[0],i=r[1],c=(0,y.useState)(e.number.startsWith("+48 ")?e.number:"+48 "+e.number),l=(0,Z.Z)(c,2),s=l[0],d=l[1],u=(0,k.I0)(),f=function(n){var e=n.target,t=e.name,o=e.value;switch(t){case"name":return i(o);case"number":o.startsWith("+48 ")||(o="+48 "+o.replace(/^\+48\s*/,""));var r=o.replace(/[^\d+ ]/g,"");return void(r.length<=13&&d(r))}};return(0,T.jsx)(dn,{onClick:function(n){n.target===n.currentTarget&&t()},children:(0,T.jsxs)(un,{children:[(0,T.jsx)(fn,{type:"button",onClick:t,children:(0,T.jsx)(ln.Z,{})}),(0,T.jsx)(W.G,{title:"Change contact",mt:0}),(0,T.jsxs)(pn,{onSubmit:function(n){n.preventDefault(),a!==e.name||s!==e.number?(u((0,L.Tk)({id:e.id,name:a,number:s})),t()):_.Notify.info("Edit name or number",mn.T)},children:[(0,T.jsx)(bn,{onChange:f,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:a}),(0,T.jsx)(bn,{value:s,onChange:f,name:"number",type:"tel",label:"Number",pattern:"\\+48\\s\\d{9}",title:"Phone number must start with +48 and be followed by 9 digits",maxLength:"13",autoComplete:"off",required:!0}),(0,T.jsx)(xn,{type:"submit",children:(0,T.jsx)(sn.Z,{})})]})]})})};function gn(){var n=(0,y.useState)(!1),e=(0,Z.Z)(n,2),t=e[0],o=e[1],r=(0,y.useState)(null),a=(0,Z.Z)(r,2),i=a[0],c=a[1],l=function(){o(!t)};return(0,T.jsxs)(cn,{children:[(0,T.jsx)(j.q,{children:(0,T.jsx)("title",{children:"Contacts"})}),(0,T.jsx)(K,{}),t&&(0,T.jsx)(hn,{contactInfo:i,toggleEditModal:l}),(0,T.jsx)(an,{getContactInfo:function(n){c(n)},toggleEditModal:l})]})}}}]);
//# sourceMappingURL=450.b50ced93.chunk.js.map