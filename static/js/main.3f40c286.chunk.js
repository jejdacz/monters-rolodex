(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(12),n(3)),i=n(4),l=n(5),u=n(6),m=(n(13),function(e){var t=e.item;return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{src:"https://robohash.org/".concat(t.id,"?set=set1&siye=180x180"),alt:"monster ".concat(t.name)}),r.a.createElement("h2",null,t.name),r.a.createElement("p",null,t.email))}),h=(n(14),function(e){var t=e.innerElement,n=e.items,a=e.keyProp,o=void 0===a?"id":a;return r.a.createElement("div",{className:"card-list"},n.map((function(e){return r.a.createElement(t,{key:e[o],item:e})})))}),d=(n(15),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=(n(16),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleChange=function(t){return e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLocaleLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monsters rolodex"),r.a.createElement(d,{placeholder:"search monster",handleChange:this.handleChange}),r.a.createElement(h,{innerElement:m,items:a}))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.3f40c286.chunk.js.map