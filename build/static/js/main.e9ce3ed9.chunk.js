(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},44:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var n=c(2),i=c.n(n),s=c(18),a=c.n(s),o=(c(23),c.p,c(24),c(0));var r=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"Tohirov Muhammaddiyor"})})},l=c(3),j=c(9),h=c.n(j),u=(c(44),function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(),a=Object(l.a)(s,2),r=a[0],j=a[1],u=Object(n.useState)(),d=Object(l.a)(u,2),b=d[0],O=d[1],p=Object(n.useState)(),g=Object(l.a)(p,2),x=g[0],f=g[1],m=Object(n.useState)(),v=Object(l.a)(m,2),y=v[0],k=v[1],C=Object(n.useState)(),S=Object(l.a)(C,2),N=S[0],w=S[1],z=Object(n.useState)(),E=Object(l.a)(z,2),F=E[0],I=E[1];function P(){h.a.get("http://18.223.202.42:3001/api/users").then((function(e){i(e.data)})).catch((function(e){console.log(e)}))}return Object(n.useEffect)((function(){P()})),Object(o.jsxs)("div",{children:[Object(o.jsxs)("form",{children:[Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Ismingizni kiriting!",value:r,onChange:function(e){j(e.target.value)}}),Object(o.jsx)("input",{type:"num",className:"form-control",placeholder:"Yoshingizni kiriting!",value:b,onChange:function(e){O(e.target.value)}}),Object(o.jsx)("input",{type:"email",className:"form-control",placeholder:"Emailingizni kiriting!",value:x,onChange:function(e){f(e.target.value)}}),Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"loginingizni kiriting!",value:y,onChange:function(e){k(e.target.value)}}),Object(o.jsx)("input",{type:"password",className:"form-control",placeholder:"Parolingizni kiriting!",value:N,onChange:function(e){w(e.target.value)}}),Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Adresingizni kiriting!",value:F,onChange:function(e){I(e.target.value)}}),Object(o.jsx)("div",{className:"btn btn-dark",onClick:function(e){e.preventDefault();var t={name:r,email:x,address:F,age:b,login:y,password:N};h.a.post("http://18.223.202.42:3001/api/users",t).then((function(e){P()})).catch((function(e){console.log(e)}))},children:"Yuborish"})]}),Object(o.jsxs)("table",{class:"table",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"#"}),Object(o.jsx)("th",{scope:"col",children:"Ismi"}),Object(o.jsx)("th",{scope:"col",children:"Yoshi"}),Object(o.jsx)("th",{scope:"col",children:"Emaili"}),Object(o.jsx)("th",{scope:"col",children:"Logini"}),Object(o.jsx)("th",{scope:"col",children:"Paroli"}),Object(o.jsx)("th",{scope:"col",children:"Addresi"})]})}),Object(o.jsx)("tbody",{children:c.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"row",children:t+1}),Object(o.jsx)("td",{children:e.name}),Object(o.jsx)("td",{children:e.age}),Object(o.jsx)("td",{children:Object(o.jsx)("a",{href:"{user.email}",children:e.email})}),Object(o.jsx)("td",{children:e.login}),Object(o.jsx)("td",{children:e.password}),Object(o.jsx)("td",{children:e.address})]})}))})]})]})});var d=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(r,{}),Object(o.jsx)(u,{})]})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,50)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};c(46),c(45);a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),b()}},[[47,1,2]]]);
//# sourceMappingURL=main.e9ce3ed9.chunk.js.map