(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{82:function(t,e,n){t.exports={Box:"ContactForm_Box__2GjH2",Form:"ContactForm_Form__2U9VD",Label:"ContactForm_Label__3vIMh",Input:"ContactForm_Input__30Cs4",Btn:"ContactForm_Btn__2EJgS"}},83:function(t,e,n){t.exports={ContactList:"ContactList_ContactList__QWscR",ContactItem:"ContactList_ContactItem__2fkLM",Text:"ContactList_Text__ckgyX"}},84:function(t,e,n){t.exports={Filter:"Filter_Filter__19QEr",FilterTitle:"Filter_FilterTitle__2MdSY",Input:"Filter_Input__2bL1s"}},88:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return C}));var a=n(18),c=n(0),r=n(26),s=n(82),o=n.n(s),i=n(11),l=n(1);var u=function(){var t=Object(i.b)(),e=Object(c.useState)(""),n=Object(a.a)(e,2),s=n[0],u=n[1],b=Object(c.useState)(""),j=Object(a.a)(b,2),m=j[0],d=j[1],O=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":u(a);break;case"number":d(a);break;default:return}},p=function(){u(""),d("")};return Object(l.jsx)("div",{className:o.a.Box,children:Object(l.jsxs)("form",{className:o.a.Form,onSubmit:function(e){e.preventDefault(),t(Object(r.c)({name:s,number:m})),p()},children:[Object(l.jsxs)("label",{className:o.a.Label,children:["Name",Object(l.jsx)("input",{className:o.a.Input,value:s,type:"text",name:"name",placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:O})]}),Object(l.jsxs)("label",{className:o.a.Label,children:["Number",Object(l.jsx)("input",{className:o.a.Input,type:"tel",value:m,name:"number",placeholder:"Enter number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:O})]}),Object(l.jsx)("button",{className:o.a.Btn,disabled:0===s.length,children:"Add contact"})]})})},b=n(83),j=n.n(b),m=n(27),d=function(t){return t.contacts.filter},O=Object(m.a)([d,function(t){return t.contacts.items}],(function(t,e){var n=t.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))}));var p=function(){var t=Object(i.c)(O);console.log(t);var e=Object(i.b)();return Object(c.useEffect)((function(){e(Object(r.b)())}),[e]),Object(l.jsx)("ul",{className:j.a.ContactList,children:t.map((function(t){var n=t.name,a=t.number,c=t.phone,s=t.id;return Object(l.jsxs)("li",{id:j.a.ContactItem,children:[Object(l.jsx)("p",{className:j.a.Text,children:n}),Object(l.jsx)("p",{className:j.a.Text,children:a||c}),Object(l.jsx)("button",{type:"button",onClick:function(){return e(Object(r.a)(s))},children:"Delete"})]},s)}))})},_=n(84),x=n.n(_),h=n(40);var f=function(){var t=Object(i.c)(d),e=Object(i.b)();return Object(l.jsx)("div",{className:x.a.Filter,children:Object(l.jsxs)("label",{className:x.a.FilterTitle,children:["Find contacts by name",Object(l.jsx)("input",{className:x.a.Input,type:"text",name:"name",value:t,onChange:function(t){e(Object(h.a)(t.currentTarget.value))}})]})})};var C=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{}),Object(l.jsx)(f,{}),Object(l.jsx)(p,{})]})}}}]);
//# sourceMappingURL=3.94cfaf1d.chunk.js.map