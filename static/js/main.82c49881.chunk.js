(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{12:function(t,e,n){"use strict";n.d(e,"d",(function(){return b})),n.d(e,"b",(function(){return j})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return f}));var r=n(6),a=n.n(r),c=n(14),i=n(9),s=n.n(i),u=n(3);s.a.defaults.baseURL="https://connections-api.herokuapp.com";var o=function(t){s.a.defaults.headers.common.Authorization="Bearer ".concat(t)},l=function(){s.a.defaults.headers.common.Authorization=""},b=Object(u.c)("auth/register",function(){var t=Object(c.a)(a.a.mark((function t(e,n){var r,c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,s.a.post("/users/signup",e);case 4:return c=t.sent,i=c.data,o(i.token),t.abrupt("return",i);case 10:t.prev=10,t.t0=t.catch(1),r(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}()),j=Object(u.c)("auth/ligin",function(){var t=Object(c.a)(a.a.mark((function t(e,n){var r,c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,s.a.post("/users/login",e);case 4:return c=t.sent,i=c.data,o(i.token),t.abrupt("return",i);case 10:t.prev=10,t.t0=t.catch(1),r(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}()),d=Object(u.c)("auth/logout",function(){var t=Object(c.a)(a.a.mark((function t(e,n){var r,c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,c=n.getState,i=c(),console.log(i),o(i.auth.token),t.prev=4,t.next=7,s.a.post("/users/logout");case 7:l(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(4),r(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[4,10]])})));return function(e,n){return t.apply(this,arguments)}}()),f=Object(u.c)("auth/currentUser",function(){var t=Object(c.a)(a.a.mark((function t(e,n){var r,c,i,u,l;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,c=n.getState,i=c(),console.log(i),o(i.auth.token),console.log(i),t.prev=5,t.next=8,s.a.get("/users/current");case 8:return u=t.sent,l=u.data,t.abrupt("return",l);case 13:t.prev=13,t.t0=t.catch(5),r(t.t0.message);case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,n){return t.apply(this,arguments)}}())},16:function(t,e,n){t.exports={list:"InfoNav_list__2VLS8",activeItem:"InfoNav_activeItem__QepvF",notActiveItem:"InfoNav_notActiveItem__zr1i2"}},17:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(t){return t.auth.isAuth},a=function(t){return t.auth.user}},21:function(t,e,n){t.exports={list:"AuthNav_list__1nQNS",activeItem:"AuthNav_activeItem__2pd5L",notActiveItem:"AuthNav_notActiveItem__1rMZY"}},23:function(t,e,n){t.exports={userIcon:"UserMenu_userIcon__vn3AE",title:"UserMenu_title__1U0Q5",box:"UserMenu_box__3rAck",btn:"UserMenu_btn__2Ii-W"}},26:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return b}));var r=n(6),a=n.n(r),c=n(14),i=n(9),s=n.n(i),u=n(3);s.a.defaults.baseURL="https://61960f1e902243001762fa15.mockapi.io";var o=Object(u.c)("fetchContact",function(){var t=Object(c.a)(a.a.mark((function t(e,n){var r,c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,s.a.get("/contacts");case 4:return c=t.sent,i=c.data,t.abrupt("return",i);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",r(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),l=Object(u.c)("addContact",function(){var t=Object(c.a)(a.a.mark((function t(e,n){var r,c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,s.a.post("/contacts",e);case 4:return c=t.sent,i=c.data,t.abrupt("return",i);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",r(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),b=Object(u.c)("deleteContact",function(){var t=Object(c.a)(a.a.mark((function t(e,n){var r,c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,s.a.delete("/contacts/".concat(e));case 4:return c=t.sent,i=c.data.id,t.abrupt("return",i);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",r(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}())},39:function(t,e,n){"use strict";e.a=n.p+"static/media/sprite.c1aea847.svg"},40:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(3),a=Object(r.b)("contact/filter")},43:function(t,e,n){t.exports={container:"Container_container__32IHI"}},44:function(t,e,n){t.exports={header:"HeaderNavigation_header__FIWUA"}},45:function(t,e,n){t.exports={Loader:"Loader_Loader__3rtUR"}},51:function(t,e,n){},80:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(19),i=n.n(c),s=(n(51),n(10)),u=n(2),o=n(12),l=n(17),b=n(41),j=n(43),d=n.n(j),f=n(1);var h=function(t){var e=t.children;return Object(f.jsx)("div",{className:d.a.container,children:e})};var p=function(t){var e=t.isAuth,n=t.component;return Object(f.jsx)(f.Fragment,{children:e?Object(f.jsx)(n,{}):Object(f.jsx)(u.a,{to:"/login"})})};var v=function(t){var e=t.isAuth,n=t.component;return Object(f.jsx)(f.Fragment,{children:e&&Object(f.jsx)(u.a,{to:"/contacts"})||Object(f.jsx)(n,{})})},O=n(39),m=n(23),x=n.n(m);var g=function(){var t=Object(s.b)(),e=Object(s.c)(l.b);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:x.a.box,children:[Object(f.jsx)("svg",{className:x.a.userIcon,children:Object(f.jsx)("use",{href:O.a+"#user"})}),Object(f.jsxs)("p",{className:x.a.title,children:["Welcome,",e]})]}),Object(f.jsx)("button",{className:x.a.btn,type:"button",onClick:function(){return t(Object(o.c)())},children:"Log out"})]})},_=n(13),A=n(21),k=n.n(A);var w=function(){return Object(f.jsxs)("ul",{className:k.a.list,children:[Object(f.jsx)("li",{children:Object(f.jsx)(_.b,{to:"/register",className:function(t){return t.isActive?k.a.activeItem:k.a.notActiveItem},children:"Register"})}),Object(f.jsx)("li",{children:Object(f.jsx)(_.b,{to:"/login",className:function(t){return t.isActive?k.a.activeItem:k.a.notActiveItem},children:"Login"})})]})},y=n(16),N=n.n(y);var I=function(){return Object(f.jsxs)("ul",{className:N.a.list,children:[Object(f.jsx)("li",{className:N.a.item,children:Object(f.jsx)(_.b,{to:"/",className:function(t){return t.isActive?N.a.activeItem:N.a.notActiveItem},children:"Home"})}),Object(f.jsx)("li",{children:Object(f.jsx)(_.b,{to:"/contacts",className:function(t){return t.isActive?N.a.activeItem:N.a.notActiveItem},children:"Contacts"})})]})},C=n(44),L=n.n(C);var M=function(){var t=Object(s.c)(l.a);return Object(f.jsxs)("header",{className:L.a.header,children:[Object(f.jsx)(I,{}),t?Object(f.jsx)(g,{}):Object(f.jsx)(w,{})]})},U=n(45),W=n.n(U),z=function(t){return Object(f.jsx)("div",{id:W.a.Loader,children:Object(f.jsxs)("svg",{width:t.width,height:t.height,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:t.color,"aria-label":t.label,children:[Object(f.jsxs)("circle",{cx:"15",cy:"15",r:t.radius+6,children:[Object(f.jsx)("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),Object(f.jsx)("animate",{attributeName:"fillOpacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),Object(f.jsxs)("circle",{cx:"60",cy:"15",r:t.radius,attributeName:"fillOpacity",from:"1",to:"0.3",children:[Object(f.jsx)("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),Object(f.jsx)("animate",{attributeName:"fillOpacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),Object(f.jsxs)("circle",{cx:"105",cy:"15",r:t.radius+6,children:[Object(f.jsx)("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),Object(f.jsx)("animate",{attributeName:"fillOpacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})})};z.defaultProps={height:80,width:80,color:"#c46c1b",label:"audio-loading",radius:9};var V=z,S=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,87))})),F=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,88))})),R=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,89))})),B=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,90))}));var E,H,Q=function(){var t=Object(s.c)(l.a),e=Object(s.b)();return Object(r.useEffect)((function(){e(Object(o.a)())}),[e]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(M,{}),Object(f.jsx)(b.a,{}),Object(f.jsx)(h,{children:Object(f.jsx)(r.Suspense,{fallback:Object(f.jsx)(V,{}),children:Object(f.jsxs)(u.d,{children:[Object(f.jsx)(u.b,{path:"/",element:Object(f.jsx)(v,{isAuth:t,component:F})}),Object(f.jsx)(u.b,{path:"/contacts",element:Object(f.jsx)(p,{isAuth:t,component:S})}),Object(f.jsx)(u.b,{path:"/register",element:Object(f.jsx)(v,{isAuth:t,component:B})}),Object(f.jsx)(u.b,{path:"/login",element:Object(f.jsx)(v,{isAuth:t,component:R})})]})})})]})},J=n(28),P=n(3),Y=n(4),Z=n(11),q=n(40),D=n(26),G=Object(P.d)([],(E={},Object(Z.a)(E,D.b.fulfilled,(function(t,e){return e.payload})),Object(Z.a)(E,D.c.fulfilled,(function(t,e){var n=e.payload;return t.map((function(t){return t.name.toLowerCase()})).includes(n.name.toLowerCase())?alert("".concat(n.name," is already in contacts")):[n].concat(Object(J.a)(t))})),Object(Z.a)(E,D.a.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),E)),K=Object(P.d)("",Object(Z.a)({},q.a,(function(t,e){return e.payload}))),T=n(15),X=Object(P.e)({name:"auth",initialState:{user:{name:"",email:""},token:"",isAuth:!1},extraReducers:(H={},Object(Z.a)(H,o.d.fulfilled,(function(t,e){var n=e.payload;t.user=n,t.token=n.token,t.isAuth=!0})),Object(Z.a)(H,o.b.fulfilled,(function(t,e){var n=e.payload;t.user=n,t.token=n.token,t.isAuth=!0})),Object(Z.a)(H,o.c.fulfilled,(function(t,e){t.user={name:"",email:""},t.token="",t.isAuth=!1})),Object(Z.a)(H,o.a.fulfilled,(function(t,e){var n=e.payload;t.user=n,t.isAuth=!0})),H)}).reducer,$=n(46),tt={key:"auth",storage:n.n($).a,whitelist:["token"]},et=Object(Y.b)({items:G,filter:K}),nt=Object(J.a)(Object(P.f)({serializableCheck:{ignoredActions:[T.a,T.f,T.b,T.c,T.d,T.e]}})),rt=Object(P.a)({reducer:{contacts:et,auth:Object(T.g)(tt,X)},middleware:nt});i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(s.a,{store:rt,children:Object(f.jsx)(_.a,{children:Object(f.jsx)(Q,{})})})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.82c49881.chunk.js.map