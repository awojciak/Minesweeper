(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),s=n(8),i=n.n(s),o=(n(15),n(1)),c=n(2),l=n(3),u=n(6),d=n(4),h=n(5);n(16);function b(t){var e;return e=!0===t.marked?"markedField":"unmarkedField",r.a.createElement("button",{className:e,onClick:t.onClick,onContextMenu:t.onContextMenu},t.value)}window.addEventListener("contextmenu",function(t){t.preventDefault()});var m=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"newField",value:function(t){var e=this;return r.a.createElement(b,{marked:this.props.marked[t],value:this.props.fields[t],onClick:function(){return e.props.onClick(t)},onContextMenu:function(){e.props.onContextMenu(t)}})}},{key:"render",value:function(){for(var t=[],e=0;e<10;e++){for(var n=[],a=0;a<10;a++)n.push(this.newField(10*e+a));t.push(r.a.createElement("div",{className:"row"},n))}return r.a.createElement("div",null,t)}}]),e}(a.Component);function k(t){for(var e=Array(t).fill(!1),n=10;0!==n;){var a=Math.floor(99*Math.random());e[a]||(n--,e[a]=!0)}return e}var f=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(u.a)(this,Object(d.a)(e).call(this,t))).state={fields:Array(100).fill(!0),marks:10,clicked:Array(100).fill(!1),bombs:k(100),marked:Array(100).fill(!1),counter:0,stat:!0,banner:"P\xf3ki co \u017cyjesz"},n.clickHandler=n.clickHandler.bind(Object(o.a)(Object(o.a)(n))),n.contextMenuHandler=n.contextMenuHandler.bind(Object(o.a)(Object(o.a)(n))),n}return Object(h.a)(e,t),Object(l.a)(e,[{key:"clickHandler",value:function(t){var e=this.state.clicked,n=this.state.fields,a=this.state.counter,r=this.state.stat,s=this.state.banner;if(!e[t]&&r){if(!1===this.state.marked[t]&&!1===this.state.bombs[t]){var i=0;t-10>=0&&!0===this.state.bombs[t-10]&&i++,t+10<=99&&!0===this.state.bombs[t+10]&&i++,t%10!==0&&!0===this.state.bombs[t-1]&&i++,t%10!==9&&!0===this.state.bombs[t+1]&&i++,t%10!==0&&t-11>=0&&!0===this.state.bombs[t-11]&&i++,t%10!==9&&t+11<=99&&!0===this.state.bombs[t+11]&&i++,t%10!==9&&t-9>=0&&!0===this.state.bombs[t-9]&&i++,t%10!==0&&t+9<=99&&!0===this.state.bombs[t+9]&&i++,n[t]=i,e[t]=!0,a++}else!1===this.state.marked[t]&&!0===this.state.bombs[t]&&(r=!1,e[t]=!0,n[t]="#",a++,s="Bardzo si\u0119 stara\u0142e\u015b, lecz gr\u0119 przerypa\u0142e\u015b");100===a&&(s="Brawo! Zwyci\u0119stwo!",r=!1),this.setState({fields:n,clicked:e,counter:a,stat:r,banner:s})}}},{key:"contextMenuHandler",value:function(t){var e=this.state.clicked,n=this.state.marked,a=this.state.counter,r=this.state.marks,s=this.state.banner,i=this.state.stat;e[t]&&!n[t]&&null!==this.state.fields||i&&(!n[t]&&r>0?(n[t]=!0,e[t]=!0,a++,r--):n[t]&&(n[t]=!1,e[t]=!1,a--,r++),100===a&&(s="Brawo! Zwyci\u0119stwo!",i=!1),this.setState({marked:n,clicked:e,counter:a,marks:r,stat:i,banner:s}))}},{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement("div",null,this.state.banner," ",r.a.createElement("br",null)," Ilo\u015b\u0107 znacznik\xf3w do wykorzystania: ",this.state.marks," ",r.a.createElement("br",null)),r.a.createElement(m,{fields:this.state.fields,onClick:function(e){return t.clickHandler(e)},onContextMenu:function(e){t.contextMenuHandler(e)},marked:this.state.marked}))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,n){t.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.cf3ada48.chunk.js.map