(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,n){"use strict";(function(e){var n=e.window.localStorage,r={login:function(e){console.log("login data: ",e);var t=e.user,r=e.isSuccess,c=t.username,a=t._id;n.username=c,n.userId=a,n.isSuccess=r,n.role=t.role},setDatalogin:function(e){n.login=JSON.stringify(e)},getDataLogin:function(){return n.login?JSON.parse(n.login):void 0},isSuccess:function(){return n.isSuccess},userId:function(){return n.userId},username:function(){return n.userName},role:function(){return n.role},isMD:function(){return"MD"===n.role},isNurse:function(){return"NURSE"===n.role},logout:function(){n.clear()}};t.a=r}).call(this,n(20))},56:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var r=n(5),c=n(1),a=n.n(c),o=n(24),i=n.n(o),s=n(39),u=n(36),O=n(15),l=n(16),j=n(18),b=n(17),p=(n(56),n(30)),d=n(6),f=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return console.log("mct report error"),Object(r.jsx)("div",{children:"Not Found"})}}]),n}(c.Component),E=n(13),g=function(e){var t=e.component,n=e.exact,c=void 0!==n&&n,a=e.path,o=e.authenticated;return Object(r.jsx)(d.b,{exact:c,path:a,render:function(e){return o?Object(r.jsx)(t,Object(E.a)({},e)):Object(r.jsx)(d.a,{to:{pathname:"/greeting"}})}})};g.defaultProps={exact:!1,authenticated:!1};var v=g,h=n(27),m=n(37),L=n.n(m),T=n(21),x=n.n(T),S=n.p+"static/media/logo.6ce24c58.svg",_=function(e){var t=function(e){var t=Object(c.useState)(e),n=Object(h.a)(t,2),r=n[0],a=n[1];return[r,function(e){return a((function(t){var n=x.a.assign(t,e);return Object(E.a)({},n)}))}]}({data:[]}),n=Object(h.a)(t,2),a=(n[0],n[1],e.className);return Object(r.jsx)("div",{className:L()("greeting-wrapper",a),children:Object(r.jsx)("img",{src:S,className:"App-logo",alt:"logo"})})};_.defaultProps={className:""};var G=_,N=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("span",{children:"Sign In"})})},U=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)("main",{className:"div-root",children:Object(r.jsx)(p.a,{children:Object(r.jsxs)(d.d,{children:[Object(r.jsx)(d.b,{path:"/sign-in",name:"Sign In",component:N}),Object(r.jsx)(d.b,{path:"/greeting",name:"Greeting",component:G}),Object(r.jsx)(v,{path:"/",name:"full",component:f}),Object(r.jsx)(d.b,{path:"*",name:"notFound",component:f})]})})})}}]),n}(a.a.Component);U.defaultProps={};var A=U,y=(n(59),n(60),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)(A,{})})}}]),n}(c.Component)),I=n(12),P=n(40),R={loading:{},login:{user:{}}},k=n(22),w={LOGIN_REQUEST:"LOGIN_REQUEST",LOGIN_COMPLETE:"LOGIN_COMPLETE",GET_ALL_DATA_REQUEST:"GET_ALL_DATA_REQUEST",GET_ALL_DATA_COMPLETE:"GET_ALL_DATA_COMPLETE",RELOAD_PAGE_REQUEST:"RELOAD_PAGE_REQUEST",LOGOUT_REQUEST:"LOGOUT_REQUEST",LOGOUT_COMPLETE:"LOGOUT_COMPLETE"};var C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R.login,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.LOGIN_COMPLETE:return t.data;case w.LOGOUT_COMPLETE:return t;default:return e}},M=Object(I.c)({login:C});var D=function(e,t){return t.type===w.LOGOUT_REQUEST?(k.a.logout(),R):M(e,t)},Q=n(11),J=n.n(Q),F=n(19),B="http://service-cloud-1.appspot.com";"".concat(B,"/user/login"),"".concat(B,"/user/login"),"".concat(B,"/checkin/getall"),"".concat(B,"/booking/getall"),n(38);var q=J.a.mark(H),z=J.a.mark(K);function H(){var e,t,n,r,c;return J.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e=!0;case 1:if(!e){a.next=14;break}return a.next=4,Object(F.c)(w.LOGIN_REQUEST);case 4:return t=a.sent,n=t.data,r=n.email,"nhabanh@itrvn.com",(null===(c={isSuccess:!0,user:Object(E.a)({role:"nhabanh@itrvn.com"===r?"MD":"NURSE"},n)})||void 0===c?void 0:c.isSuccess)&&k.a.login(c),a.next=12,Object(F.b)({type:w.LOGIN_COMPLETE,data:c});case 12:a.next=1;break;case 14:case"end":return a.stop()}}),q)}function K(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(F.a)(H);case 2:case"end":return e.stop()}}),z)}var V=J.a.mark(W);function W(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(F.a)(K);case 2:case"end":return e.stop()}}),V)}var X=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),Y=function(){var e=Object(P.a)();return Object(E.a)(Object(E.a)({},Object(I.e)(D,X,Object(I.a)(e))),{},{runSaga:e.run(W)})}();u.sessionService.initSessionService(Y),i.a.render(Object(r.jsx)(s.a,{store:Y,children:Object(r.jsx)(y,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.2c7df446.chunk.js.map