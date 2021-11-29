(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{13:function(e,t,n){"use strict";n.d(t,"d",(function(){return j})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"a",(function(){return h}));var r=n(6),a=n.n(r),c=n(14),i=n(9),s=n.n(i),u=n(22),o=n(3);s.a.defaults.baseURL="https://connections-api.herokuapp.com";var l=function(e){s.a.defaults.headers.common.Authorization="Bearer ".concat(e)},b=function(){s.a.defaults.headers.common.Authorization=""},j=Object(o.c)("auth/register",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,s.a.post("/users/signup",t);case 4:return c=e.sent,i=c.data,console.log(i),l(i.token),e.abrupt("return",i);case 11:e.prev=11,e.t0=e.catch(1),u.b.error(" You are already registered"),r(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}()),d=Object(o.c)("auth/ligin",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,s.a.post("/users/login",t);case 4:return c=e.sent,i=c.data,l(i.token),e.abrupt("return",i);case 10:e.prev=10,e.t0=e.catch(1),u.b.success("No such user"),r(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),f=Object(o.c)("auth/logout",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,c=n.getState,i=c(),console.log(i),l(i.auth.token),e.prev=4,e.next=7,s.a.post("/users/logout");case 7:b(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),r(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t,n){return e.apply(this,arguments)}}()),h=Object(o.c)("auth/currentUser",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,i,u,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.rejectWithValue,c=n.getState,null!==(i=c()).auth.token){e.next=4;break}return e.abrupt("return");case 4:return console.log(i),l(i.auth.token),console.log(i),e.prev=7,e.next=10,s.a.get("/users/current");case 10:return u=e.sent,o=u.data,e.abrupt("return",o);case 15:e.prev=15,e.t0=e.catch(7),r(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[7,15]])})));return function(t,n){return e.apply(this,arguments)}}())},16:function(e,t,n){e.exports={list:"InfoNav_list__2VLS8",activeItem:"InfoNav_activeItem__QepvF",notActiveItem:"InfoNav_notActiveItem__zr1i2"}},17:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r=function(e){return e.auth.isAuth},a=function(e){return e.auth.user.name}},21:function(e,t,n){e.exports={list:"AuthNav_list__1nQNS",activeItem:"AuthNav_activeItem__2pd5L",notActiveItem:"AuthNav_notActiveItem__1rMZY"}},24:function(e,t,n){e.exports={userIcon:"UserMenu_userIcon__vn3AE",title:"UserMenu_title__1U0Q5",box:"UserMenu_box__3rAck",btn:"UserMenu_btn__2Ii-W"}},27:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return b}));var r=n(6),a=n.n(r),c=n(14),i=n(9),s=n.n(i),u=n(3);s.a.defaults.baseURL="https://connections-api.herokuapp.com";var o=Object(u.c)("fetchContact",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWidthValue,e.prev=1,e.next=4,s.a.get("/contacts");case 4:return c=e.sent,i=c.data,e.abrupt("return",i);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),l=Object(u.c)("addContact",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWidthValue,e.prev=1,e.next=4,s.a.post("/contacts",t);case 4:return c=e.sent,i=c.data,e.abrupt("return",i);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),b=Object(u.c)("deleteContact",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWidthValue,e.prev=1,e.next=4,s.a.delete("/contacts/".concat(t));case 4:if(200!==e.sent.status){e.next=9;break}return e.abrupt("return",t);case 9:throw new Error({message:"error"});case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,n){return e.apply(this,arguments)}}())},32:function(e,t,n){"use strict";t.a=n.p+"static/media/sprite.c1aea847.svg"},41:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(3),a=Object(r.b)("contact/filter")},43:function(e,t,n){e.exports={container:"Container_container__32IHI"}},44:function(e,t,n){e.exports={header:"HeaderNavigation_header__FIWUA"}},45:function(e,t,n){e.exports={Loader:"Loader_Loader__3rtUR"}},52:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(19),i=n.n(c),s=(n(52),n(11)),u=n(2),o=n(13),l=n(17),b=n(22),j=(n(78),n(43)),d=n.n(j),f=n(1);var h=function(e){var t=e.children;return Object(f.jsx)("div",{className:d.a.container,children:t})};var p=function(e){var t=e.isAuth,n=e.component;return Object(f.jsx)(f.Fragment,{children:t?Object(f.jsx)(n,{}):Object(f.jsx)(u.a,{to:"/login"})})};var O=function(e){var t=e.isAuth,n=e.component;return Object(f.jsx)(f.Fragment,{children:t?Object(f.jsx)(u.a,{to:"/contacts"})&&Object(f.jsx)(n,{}):Object(f.jsx)(n,{})})},v=n(32),m=n(24),x=n.n(m);var g=function(){var e=Object(s.b)(),t=Object(s.c)(l.b);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:x.a.box,children:[Object(f.jsx)("svg",{className:x.a.userIcon,children:Object(f.jsx)("use",{href:v.a+"#user"})}),Object(f.jsxs)("p",{className:x.a.title,children:["Welcome,",t]})]}),Object(f.jsx)("button",{className:x.a.btn,type:"button",onClick:function(){return e(Object(o.c)())},children:"Log out"})]})},_=n(10),k=n(21),A=n.n(k);var w=function(){return Object(f.jsxs)("ul",{className:A.a.list,children:[Object(f.jsx)("li",{children:Object(f.jsx)(_.b,{to:"/register",className:function(e){return e.isActive?A.a.activeItem:A.a.notActiveItem},children:"Register"})}),Object(f.jsx)("li",{children:Object(f.jsx)(_.b,{to:"/login",className:function(e){return e.isActive?A.a.activeItem:A.a.notActiveItem},children:"Login"})})]})},y=n(16),N=n.n(y);var I=function(){return Object(f.jsxs)("ul",{className:N.a.list,children:[Object(f.jsx)("li",{className:N.a.item,children:Object(f.jsx)(_.b,{to:"/",className:function(e){return e.isActive?N.a.activeItem:N.a.notActiveItem},children:"Home"})}),Object(f.jsx)("li",{children:Object(f.jsx)(_.b,{to:"/contacts",className:function(e){return e.isActive?N.a.activeItem:N.a.notActiveItem},children:"Contacts"})})]})},C=n(44),L=n.n(C);var M=function(){var e=Object(s.c)(l.a);return Object(f.jsxs)("header",{className:L.a.header,children:[Object(f.jsx)(I,{}),e?Object(f.jsx)(g,{}):Object(f.jsx)(w,{})]})},U=n(45),W=n.n(U),z=function(e){return Object(f.jsx)("div",{id:W.a.Loader,children:Object(f.jsxs)("svg",{width:e.width,height:e.height,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:e.color,"aria-label":e.label,children:[Object(f.jsxs)("circle",{cx:"15",cy:"15",r:e.radius+6,children:[Object(f.jsx)("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),Object(f.jsx)("animate",{attributeName:"fillOpacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),Object(f.jsxs)("circle",{cx:"60",cy:"15",r:e.radius,attributeName:"fillOpacity",from:"1",to:"0.3",children:[Object(f.jsx)("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),Object(f.jsx)("animate",{attributeName:"fillOpacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),Object(f.jsxs)("circle",{cx:"105",cy:"15",r:e.radius+6,children:[Object(f.jsx)("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),Object(f.jsx)("animate",{attributeName:"fillOpacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})})};z.defaultProps={height:80,width:80,color:"#c46c1b",label:"audio-loading",radius:9};var V=z,S=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,89))})),F=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,90))})),R=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,91))})),E=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,92))}));var B,H,Q=function(){var e=Object(s.c)(l.a);console.log(e);var t=Object(s.b)();return Object(r.useEffect)((function(){t(Object(o.a)())}),[t]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(M,{}),Object(f.jsx)(b.a,{}),Object(f.jsx)(h,{children:Object(f.jsx)(r.Suspense,{fallback:Object(f.jsx)(V,{}),children:Object(f.jsxs)(u.d,{children:[Object(f.jsx)(u.b,{path:"/",element:Object(f.jsx)(O,{isAuth:e,component:F})}),Object(f.jsx)(u.b,{path:"/contacts",element:Object(f.jsx)(p,{isAuth:e,component:S})}),Object(f.jsx)(u.b,{path:"/register",element:Object(f.jsx)(O,{isAuth:e,component:E})}),Object(f.jsx)(u.b,{path:"/login",element:Object(f.jsx)(O,{isAuth:e,component:R})})]})})})]})},J=n(29),Y=n(3),P=n(4),Z=n(12),q=n(41),D=n(27),G=Object(Y.d)([],(B={},Object(Z.a)(B,D.b.fulfilled,(function(e,t){return t.payload})),Object(Z.a)(B,D.c.fulfilled,(function(e,t){var n=t.payload;return e.map((function(e){return e.name.toLowerCase()})).includes(n.name.toLowerCase())?alert("".concat(n.name," is already in contacts")):[n].concat(Object(J.a)(e))})),Object(Z.a)(B,D.a.fulfilled,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),B)),K=Object(Y.d)("",Object(Z.a)({},q.a,(function(e,t){return t.payload}))),T=n(15),X=Object(Y.e)({name:"auth",initialState:{user:{name:"",email:""},token:"",isAuth:!1},extraReducers:(H={},Object(Z.a)(H,o.d.fulfilled,(function(e,t){var n=t.payload;e.user=n.user,e.token=n.token,e.isAuth=!0})),Object(Z.a)(H,o.b.fulfilled,(function(e,t){var n=t.payload;e.user=n.user,e.token=n.token,e.isAuth=!0})),Object(Z.a)(H,o.c.fulfilled,(function(e,t){e.user={name:"",email:""},e.token="",e.isAuth=!1})),Object(Z.a)(H,o.a.fulfilled,(function(e,t){var n=t.payload;e.user=n,e.isAuth=!0})),H)}).reducer,$=n(46),ee={key:"auth",storage:n.n($).a,whitelist:["token"]},te=Object(P.b)({items:G,filter:K}),ne=Object(J.a)(Object(Y.f)({serializableCheck:{ignoredActions:[T.a,T.f,T.b,T.c,T.d,T.e]}})),re=Object(Y.a)({reducer:{contacts:te,auth:Object(T.g)(ee,X)},middleware:ne}),ae=Object(T.h)(re),ce=n(47);i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(s.a,{store:re,children:Object(f.jsx)(ce.a,{persistor:ae,loading:null,children:Object(f.jsx)(_.a,{children:Object(f.jsx)(Q,{})})})})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.36abd9ec.chunk.js.map