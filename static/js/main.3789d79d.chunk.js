(this["webpackJsonpsimple-monsters-app"]=this["webpackJsonpsimple-monsters-app"]||[]).push([[0],{17:function(e,n,t){e.exports=t(44)},22:function(e,n,t){},23:function(e,n,t){},41:function(e,n,t){},42:function(e,n,t){},43:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(11),c=t.n(r),i=(t(22),t(12)),s=t(13),l=t(16),u=t(15),h=(t(23),t(14)),d=t.n(h),m=(t(41),function(e){return a.a.createElement("div",{className:"card-container"},a.a.createElement("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:"monster"}),a.a.createElement("h2",null,e.monster.name),a.a.createElement("p",null,e.monster.email))}),p=(t(42),function(e){return a.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return a.a.createElement(m,{key:e.id,monster:e})})))}),f=(t(43),function(e){var n=e.placeholder,t=e.handleChange;return a.a.createElement("input",{className:"search",type:"text",placeholder:n,onChange:t})}),v=function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).state={monsters:[],searchField:""},e.handleChange=function(n){e.setState({searchField:n.target.value})},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;d()("https://jsonplaceholder.typicode.com/users").then((function(n){e.setState({monsters:n.data})}))}},{key:"render",value:function(){var e=this.state,n=e.monsters,t=e.searchField,o=n.filter((function(e){return e.name.toLowerCase().includes(t.toLocaleLowerCase())}));return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Monsters"),a.a.createElement(f,{placeholder:"Search Monsters",handleChange:this.handleChange}),a.a.createElement(p,{monsters:o}))}}]),t}(o.Component),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Simple-Monsters-App-React",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/Simple-Monsters-App-React","/service-worker.js");g?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(n,e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.3789d79d.chunk.js.map