(this["webpackJsonpyalantis-test-task"]=this["webpackJsonpyalantis-test-task"]||[]).push([[0],{29:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(6),r=n.n(s),i=(n(29),n(11)),l=n(3),o=n(20),u=n(4),j="LOAD_EMPLOYEES",m="SET_ACTIVE_EMPLOYEES",b=n(5),p=n(10),d=n.n(p),h=n(21),O=n(22),y=n(23),f=n.n(y),v=new function e(){var t=this;Object(O.a)(this,e),this.getAll=Object(h.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(t.URL);case 2:if(!((n=e.sent).status<200&&n.status>299)){e.next=5;break}throw new Error("Could not get  ".concat(t.URL,", status: ").concat(n.status));case 5:return e.next=7,n.data;case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)}))),this.URL="https://yalantis-react-school-api.yalantis.com/api/task0/users"},x=function(e){return e.sort((function(e,t){return e.lastName.localeCompare(t.lastName)}))},g=function(e){var t=new Date(e),n=t.getDate(),c=t.toLocaleString("en-us",{month:"long"}),a=t.getFullYear();return"".concat(n," ").concat(c,", ").concat(a," year")},N=function(e){return new Date(e).toLocaleString("en-us",{month:"long"})},_=function(e){localStorage.setItem("activeEmployees",JSON.stringify(e))},E=function(){var e=function(){var e=localStorage.getItem("activeEmployees");return e?JSON.parse(e):[]}();return{type:m,payload:e}},L=function(e){return e.employees},S=function(e){return e.activeEmployees},w=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],k=(n(53),n(24)),D=n(0),A=function(e){var t=e.children,n=Object(k.a)(e,["children"]),c=n.title,a=n.className;return Object(D.jsxs)("div",{className:a,children:[Object(D.jsx)("h3",{className:"title letter__title",children:c}),t]})},J=(n(55),function(e){var t=Object.assign({},e),n=Object(l.b)(),c=Object(l.c)(S),a=t.employee,s=a.firstName,r=a.lastName,i=a.id,o="".concat(r," ").concat(s),u=c.findIndex((function(e){return e.id===i}))>=0,j=function(e){n(u?function(e){return function(t,n){var c=n().activeEmployees.filter((function(t){return t.id!==e.id}));_(c),t({type:m,payload:c})}}(a):function(e){return function(t,n){var c=n(),a=[].concat(Object(b.a)(c.activeEmployees),[e]);_(a),t({type:m,payload:a})}}(a))};return Object(D.jsxs)("div",{className:"employee",children:[Object(D.jsx)("h3",{className:"title employee__title ".concat(u?"employee__title--active":""),children:o}),Object(D.jsxs)("form",{action:"",children:[Object(D.jsxs)("label",{className:"employee__status-label",children:[Object(D.jsx)("input",{className:"employee__status-button",type:"radio",name:"status-employee",value:"false",checked:!u,onChange:j}),Object(D.jsx)("span",{children:"not active"})]}),Object(D.jsxs)("label",{className:"employee__status-label",children:[Object(D.jsx)("input",{className:"employee__status-button",type:"radio",name:"status-employee",value:"true",checked:!!u,onChange:j}),Object(D.jsx)("span",{children:"active"})]})]})]})}),C=function(){var e=Object(l.c)(L),t=Object(l.b)();return Object(c.useEffect)((function(){t((function(e){v.getAll().then((function(t){e({type:j,payload:t})}))})),t(E())}),[]),w.map((function(t){var n=[],c=x(function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"A";return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).filter((function(t){return t.lastName[0]===e}))}(e,t));return 0!==c.length&&(n=c.map((function(e){return Object(D.jsx)(J,{employee:e},e.id)}))),Object(D.jsx)(A,{className:"letter",title:t,children:0!==n.length?n:"- - - -"},t)}))},I=(n(56),function(){return Object(D.jsxs)("section",{className:"employees column",children:[Object(D.jsx)("h2",{className:"title section__title",children:"Employees"}),Object(D.jsx)("div",{className:"letters",children:Object(D.jsx)(C,{})})]})}),M=function(e){var t=Object.assign({},e).employee,n=t.lastName,c=t.firstName,a=t.convertedDate,s="".concat(n," ").concat(c);return Object(D.jsxs)("li",{className:"birthdays-list__item",children:[s," - ",a]})},P=function(e){var t=Object.assign({},e),n=t.employeesList,c=t.month,a=x(n.filter((function(e){return N(e.dob)===c}))),s=a.map((function(e){return Object(D.jsx)(M,{employee:e},e.id)}));return 0===a.length?null:Object(D.jsxs)("ul",{className:"birthdays-list",children:[Object(D.jsx)("h3",{className:"birthdays-list__title",children:c}),s]})},R=["January","February","March","April","May","June","July","August","September","October","November","December"],U=(n(57),function(){var e=Object(l.c)(S),t=e.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{convertedDate:g(e.dob)})})),n=function(e){var t=new Date,n=N(t),c=e.indexOf(n);return 0===c?e:c===e.length-1?[e[c]].concat(Object(b.a)(e.slice(0,e.length-1))):c>0&&c!==e.length-1?[].concat(Object(b.a)(e.slice(c,e.length)),Object(b.a)(e.slice(0,c))):void 0}(R).map((function(e){return Object(D.jsx)(P,{month:e,employeesList:t},e)}));return Object(D.jsxs)("section",{className:"employees-birthday column",children:[Object(D.jsx)("h2",{className:"title section__title",children:"Employees Birthday"}),0===e.length?"Employees List is empty":n]})}),Y=(n(58),function(){return Object(D.jsxs)("div",{className:"employees-page",children:[Object(D.jsx)("h1",{className:"employees-page__title title",children:"Employees Page"}),Object(D.jsxs)("div",{className:"container",children:[Object(D.jsx)(I,{}),Object(D.jsx)(U,{})]})]})}),B=(n(59),Object(i.b)((function(e,t){return t.type===j?Object(u.a)(Object(u.a)({},e),{},{employees:t.payload}):t.type===m?Object(u.a)(Object(u.a)({},e),{},{activeEmployees:t.payload}):e}),{employees:[],activeEmployees:[]},Object(i.a)(o.a))),F=function(){return Object(D.jsx)(l.a,{store:B,children:Object(D.jsx)("div",{className:"app",children:Object(D.jsx)(Y,{})})})};r.a.render(Object(D.jsx)(a.a.StrictMode,{children:Object(D.jsx)(F,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.63b3b027.chunk.js.map