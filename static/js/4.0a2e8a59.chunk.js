(this["webpackJsonpmy-social-app"]=this["webpackJsonpmy-social-app"]||[]).push([[4],{392:function(e,s,t){"use strict";t.d(s,"a",(function(){return r}));var a=t(8),i=t(86),n=(t(0),t(20)),c=t(16),o=t(1),d=function(e){return{isAuth:e.auth.isAuth}};function r(e){return Object(c.b)(d,{})((function(s){var t=s.isAuth,c=Object(i.a)(s,["isAuth"]);return t?Object(o.jsx)(e,Object(a.a)({},c)):Object(o.jsx)(n.a,{to:"/login"})}))}},394:function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__2fMWs",dialogsItems:"Dialogs_dialogsItems__3ehDJ",messagesItems:"Dialogs_messagesItems__3ajEu"}},395:function(e,s,t){e.exports={dialogsItem:"DialogItem_dialogsItem__398uG",activeLink:"DialogItem_activeLink__2GnyC"}},396:function(e,s,t){},403:function(e,s,t){"use strict";t.r(s);var a=t(8),i=(t(0),t(394)),n=t.n(i),c=t(395),o=t.n(c),d=t(31),r=t(1),u=function(e){return Object(r.jsx)("div",{className:o.a.dialogsItem,children:Object(r.jsx)(d.c,{to:"/dialogs/".concat(e.id),activeClassName:o.a.activeLink,children:e.name})})},j=t(396),l=t.n(j),m=function(e){return Object(r.jsx)("div",{className:l.a.messageItem,children:e.message})},g=t(72),b=t(188),O=t(53),f=Object(g.a)(10),h=Object(g.b)(2),x=Object(b.a)({form:"dialogAddMessageForm"})((function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)("div",{children:Object(O.c)("new messages","newMessagesText",[g.c,h,f],O.b)}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"send"})})]})})),v=function(e){var s=e.dialogsPage,t=s.dialogsData.map((function(e){return Object(r.jsx)(u,{name:e.name,id:e.id},e.id)})),a=s.messagesData.map((function(e){return Object(r.jsx)(m,{message:e.message},e.id)}));return Object(r.jsxs)("div",{className:n.a.dialogs,children:[Object(r.jsx)("div",{className:n.a.dialogsItems,children:t}),Object(r.jsxs)("div",{className:n.a.messagesItems,children:[a,Object(r.jsx)(x,{onSubmit:function(s){e.addMessages(s.newMessagesText)}})]})]})},_=t(16),p=t(392),I=t(19),D=t(165);s.default=Object(I.d)(Object(_.b)((function(e){return{dialogsPage:e.dialogsPage}}),Object(a.a)({},D.a)),p.a)(v)}}]);
//# sourceMappingURL=4.0a2e8a59.chunk.js.map