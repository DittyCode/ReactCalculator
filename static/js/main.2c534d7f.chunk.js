(this.webpackJsonpreactkurs=this.webpackJsonpreactkurs||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(4),s=n.n(i),r=(n(9),n(3)),l=n(0),u=function(e){var t=e.children,n=e.name;return Object(l.jsx)("main",{className:"main ".concat(n),children:Object(l.jsx)("div",{className:"calculator",children:t})})},d=function(e){var t=e.title;return Object(l.jsx)("h1",{className:"header__heading",children:t})},o=function(e){var t=e.title;return Object(l.jsx)("p",{children:t})},h=function(){var e=new Array(3).fill(0).map((function(e,t){return Object(l.jsx)(o,{title:t+1},t+1)}));return Object(l.jsx)("div",{className:"theme__paragraphs",children:e})},m=Object(a.createContext)({theme:1,setTheme:function(){}}),b=function(){return Object(l.jsx)("div",{className:"theme__ball"})},j=function(e){var t=e.name,n=e.themeName,c=e.onClick,i=Object(a.useContext)(m).theme;return Object(l.jsx)("button",{className:t,"data-theme":n,onClick:c,children:i===n?Object(l.jsx)(b,{}):null})},_=[{name:"theme__btn",theme:"first",id:1},{name:"theme__btn",theme:"second",id:2},{name:"theme__btn",theme:"third",id:3}],p=function(){var e=Object(a.useContext)(m).setTheme,t=function(t){var n=t.target;console.log(n);var a,c=n.dataset.theme;a=c,localStorage.setItem("theme",a),e(c)},n=_.map((function(e){var n=e.name,a=e.theme,c=e.id;return Object(l.jsx)(j,{name:n,themeName:a,onClick:t},c)}));return Object(l.jsxs)("div",{className:"theme__switcher",children:[Object(l.jsx)(h,{}),n]})},v=function(){return Object(l.jsxs)("div",{className:"theme",children:[Object(l.jsx)("h2",{className:"theme__heading",children:"Theme"}),Object(l.jsx)(p,{})]})},f=function(){return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)(d,{title:"calc"}),Object(l.jsx)(v,{})]})},O=function(e){return e.split("")},x=function(e){return["+","-","x","/"].includes(e)},D=function(e){return console.log(O(e).filter((function(e,t){return x(e)&&0!==t}))),O(e).filter((function(e,t){return x(e)}))},y=function(e,t,n){return g(n?O(e).slice(t,n):O(e).slice(t))},g=function(e){return Number(e.join(""))},N=function(e){return Number.isNaN(e)},A=function(e){return Number.isInteger(e)?e:e.toFixed(2)},k=Object(a.createContext)({result:"",setResult:function(){}}),T=function(e){var t=e.value,n=e.name,c=e.type,i=Object(a.useContext)(k),s=i.result,r=i.setResult,u=function(){var e=function(){var e=s.indexOf(D(s)[0]);return{firstValue:y(s,0,e),secondValue:y(s,e+1)}}(),t=e.firstValue,n=e.secondValue;if(!N(t)&&!N(n))switch(D(s)[0]){case"+":return A(t+n);case"-":return A(t-n);case"x":return A(t*n);case"/":return A(t/n);default:console.log("dont have this math operator")}};return Object(l.jsx)("button",{className:n,onClick:function(){switch(c){case"ADD":r((function(e){return e+t}));break;case"RESET":r("");break;case"DEL":var e=s.slice(0,s.length-1);r(e);break;case"MATH":D(s).length||r((function(e){return e+t}));break;case"DOT":!function(){var e=s[s.length-1];s.includes(".")||!x(e)&&r((function(e){return e+t}))}();break;case"EQUAL":!function(){if(D(s).length){var e=u()||0;console.log(u()),r(e.toString())}}();break;default:console.log("".concat(c," is not allowed"))}},children:t})},C=[{dispatch:"ADD",name:"display__btn",value:7,id:1},{dispatch:"ADD",name:"display__btn",value:8,id:2},{dispatch:"ADD",name:"display__btn",value:9,id:3},{dispatch:"DEL",name:"display__btn action",value:"Del",id:4},{dispatch:"ADD",name:"display__btn",value:4,id:5},{dispatch:"ADD",name:"display__btn",value:5,id:6},{dispatch:"ADD",name:"display__btn",value:6,id:7},{dispatch:"MATH",name:"display__btn",value:"+",id:8},{dispatch:"ADD",name:"display__btn",value:1,id:9},{dispatch:"ADD",name:"display__btn",value:2,id:10},{dispatch:"ADD",name:"display__btn",value:3,id:11},{dispatch:"MATH",name:"display__btn",value:"-",id:12},{dispatch:"DOT",name:"display__btn",value:".",id:13},{dispatch:"ADD",name:"display__btn",value:0,id:14},{dispatch:"MATH",name:"display__btn",value:"/",id:15},{dispatch:"MATH",name:"display__btn",value:"x",id:16},{dispatch:"RESET",name:"display__btn display__btn--large reset action",value:"Reset",id:17},{dispatch:"EQUAL",name:"display__btn display__btn--large equal",value:"=",id:18}],E=function(){var e=C.map((function(e){var t=e.id,n=e.name,a=e.value,c=e.dispatch;return Object(l.jsx)(T,{name:n,value:a,type:c},t)}));return Object(l.jsx)("div",{className:"display",children:e})},S=function(){var e=Object(a.useContext)(k).result;return Object(l.jsx)("div",{className:"result",children:Object(l.jsx)("h3",{className:"result__heading",children:e||0})})};var w=function(){var e=Object(a.useState)("first"),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),s=Object(r.a)(i,2),d=s[0],o=s[1];return Object(a.useEffect)((function(){var e;c((e="theme",localStorage.getItem(e)||"first"))}),[]),Object(l.jsx)(m.Provider,{value:{theme:n,setTheme:c},children:Object(l.jsx)(k.Provider,{value:{result:d,setResult:o},children:Object(l.jsxs)(u,{name:n,children:[Object(l.jsx)(f,{}),Object(l.jsx)(S,{}),Object(l.jsx)(E,{})]})})})};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(w,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.2c534d7f.chunk.js.map