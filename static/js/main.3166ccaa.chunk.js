(this.webpackJsonpfetch=this.webpackJsonpfetch||[]).push([[0],{15:function(e,t,a){e.exports=a(40)},21:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),c=a.n(r),o=a(3),m=a.n(o),s=a(14),u=a(2),i=(a(21),a(22));function p(e){var t=Object(n.useState)({hits:[]}),a=Object(u.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(null),p=Object(u.a)(o,2),d=p[0],E=(p[1],Object(n.useState)("photo")),b=Object(u.a)(E,2),h=b[0],f=(b[1],Object(n.useState)("query")),g=Object(u.a)(f,2),v=g[0],y=(g[1],Object(n.useState)(12)),w=Object(u.a)(y,2),j=w[0],k=(w[1],Object(n.useState)(!1)),O=Object(u.a)(k,2),N=O[0],I=O[1],x=Object(n.useState)(!1),S=Object(u.a)(x,2),_=S[0],C=S[1],R="https://pixabay.com/api/?key=14263556-460dd996bd11666b3aafc8d29&q="+encodeURIComponent(v)+"&image_type"+h+"editors_choice=true&colors="+d;return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!1),I(!0),e.prev=2,e.next=5,i(R);case 5:t=e.sent,c(t.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),C(!0);case 12:I(!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}})()()}),[R]),console.log(r.hits),l.a.createElement("div",{className:"row"},_&&l.a.createElement("div",null,"Something went wrong ..."),N?l.a.createElement("div",null,"Loading ..."):l.a.createElement(l.a.Fragment,null,r.hits.slice(0,j).map((function(e){return l.a.createElement("div",{className:"col-6 col-sm-3 p-3 text-center"},l.a.createElement("div",{className:"card"},l.a.createElement("img",{className:"m-3 img-fluid align-self-center PixImage",src:e.largeImageURL,alt:""}),l.a.createElement("div",{className:"card-footer"},l.a.createElement("small",null,"Author: ",l.a.createElement("strong",null,e.user)),l.a.createElement("p",{className:"fa-sm"},"Downloads: ",e.downloads," "),l.a.createElement("button",{className:"btn btn-success align-self-end m-2",href:e.largeImageURL,onClick:function(){return window.open(e.largeImageURL,"_blank")}},l.a.createElement("i",{className:"fas fa-file-download"})))))}))))}function d(e){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.scroll()}},l.a.createElement("input",{name:"Seach",value:e.query,type:"text",placeholder:"search...",onChange:e.setQuery}),l.a.createElement("br",null),l.a.createElement("label",null,"Color:  ",l.a.createElement("select",{name:"colors",value:"",onChange:""},l.a.createElement("option",{value:"Red"},"Red"),l.a.createElement("option",{value:"Green"},e.value),l.a.createElement("option",{value:"Blue"},"blue"))," ")," ",l.a.createElement("br",null),l.a.createElement("input",{type:"number",name:"quantity",pattern:"[0-9]*",placeholder:"results",min:"1",max:"20",onKeyDown:function(e){return/[\+\-\.\,]$/.test(e.key)&&e.preventDefault()}}),l.a.createElement("br",null)," ",l.a.createElement("label",null," ",l.a.createElement("input",{name:"imgType",value:"Photo",type:"radio",checked:"Photo"===e.Image_type,onChange:e.setImage_type})," Photo "),l.a.createElement("br",null)," ",l.a.createElement("label",null," ",l.a.createElement("input",{name:"imgType",value:"Illustration",type:"radio",checked:"Illustration"===e.Image_type,onChange:e.setImage_type})," Illustration "),l.a.createElement("br",null)," ",l.a.createElement("label",null," ",l.a.createElement("input",{name:"imgType",value:"Vector",type:"radio",checked:"Vector"===e.Image_type,onChange:e.setImage_type})," Vector "),l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Search")))}var E=function(e){return window.scrollTo({top:e.current.offsetTop,left:0,behavior:"smooth"})};var b=function(){var e=Object(n.useRef)(null);return l.a.createElement("div",{className:"App container-fluid bg-dark"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col bg-dark text-center text-white"},l.a.createElement("div",{class:"jumbotron bg-dark"},l.a.createElement("h1",{class:"display-4"},"Welcome"),l.a.createElement("p",{class:"lead"},"to Spectral apps fetch project"),l.a.createElement("p",null,"Description:")),l.a.createElement("hr",null))),l.a.createElement("div",{className:"row mt-2"},l.a.createElement("div",{id:"search",className:"col bg-dark text-center text-white"},l.a.createElement(d,{scroll:function(){return E(e)},value:"yellow"}),l.a.createElement("hr",null))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{ref:e,id:"gallery",className:"col bg-dark"},l.a.createElement(p,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.3166ccaa.chunk.js.map