(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,n){e.exports=n(62)},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(23),r=n.n(a),c=n(4),i=n(0),o=n.n(i),s=n(5),l=(n(51),function(e){return function(e){return function(t){e(t)}}}),u=n(7),p={appName:"Cogoport",appLoaded:!1,search_origin:"",search_destination:""},h=n(6),m=Object(s.combineReducers)({common:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP_LOAD":return Object(u.a)({},e,{appLoaded:!0});case"SEARCH_ORIGIN":return Object(u.a)({},e,{search_origin:t.search_origin});case"SEARCH_DESTINATION":return Object(u.a)({},e,{search_destination:t.search_destination});default:return e}},router:h.c}),O=n(27),d=n.n(O)()(),b=Object(h.b)(d),g=Object(s.createStore)(m,Object(s.applyMiddleware)(b,l)),E=n(64),f=n(65),v=n(10),y=n(11),j=n(14),N=n(13),C=n(15),I=n(12),_=(n(58),n(59),n(60),n(61),function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(j.a)(this,Object(N.a)(t).call(this,e))).onChangeOrigin=n.onChangeOrigin.bind(Object(I.a)(n)),n}return Object(C.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){}},{key:"onChangeOrigin",value:function(e){this.props.onChangeOrigin(e.target.value)}},{key:"onChangeDestination",value:function(e){this.props.onChangeDestination(e.target.value)}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("nav",null,o.a.createElement("div",{className:"logo"})),o.a.createElement("section",null,o.a.createElement("div",{className:"container"},o.a.createElement("div",null,o.a.createElement("p",{className:"title"},"Experience complete freight rate visibility."),o.a.createElement("p",{className:"subtitle"},"Compare freight rates instantly across any port pair with a detailed cost breakup."),o.a.createElement("div",{className:"grid-container"},o.a.createElement("div",{className:"flex-item"},o.a.createElement("p",{className:"selectbox-title"},"ORIGIN PORT"),o.a.createElement("input",{type:"text",className:"input search",placeholder:"Type here...",onKeyUp:this.onSearch,value:this.props.search,onKeyPress:this.onEnter,onChange:this.onChangeInput})),o.a.createElement("div",{className:"flex-item"},o.a.createElement("p",{className:"selectbox-title"},"DESTINATION PORT"),o.a.createElement("input",{type:"text",className:"input search",placeholder:"Type here...",onKeyUp:this.onSearch,value:this.props.search,onKeyPress:this.onEnter,onChange:this.onChangeInput})))))))}}]),t}(o.a.Component)),A=Object(c.connect)(function(e){return Object(u.a)({},e.common)},function(e){return{onChangeOrigin:function(t){return e({type:"SEARCH_ORIGIN",value:t})},onChangeDestination:function(t){return e({type:"SEARCH_DESTINATION",value:t})},onLoad:function(){return e({type:"APP_LOAD"})}}})(_),R=function(e){function t(){return Object(v.a)(this,t),Object(j.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return o.a.createElement(A,null)}}]),t}(o.a.Component),S=Object(c.connect)(null,null)(R);r.a.render(o.a.createElement(c.Provider,{store:g},o.a.createElement(h.a,{history:d},o.a.createElement(E.a,null,o.a.createElement(f.a,{path:"/",component:S})))),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.e65ee052.chunk.js.map