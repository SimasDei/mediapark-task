(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,a,t){e.exports=t(58)},33:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(24),s=t.n(c),o=(t(33),t(3)),i=t(4),u=t(6),l=t(5),m=t(7),h=t(2),p=t(8),f=t(26),g=t(12),b={searchTerm:"dogs",queries:["dogs"],images:[]},d=Object(p.c)({images:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_IMAGES":return Object(g.a)({},e,{images:a.payload});case"SEARCH_TERM":return Object(g.a)({},e,{queries:a.payload});case"SAVE_QUERY":return Object(g.a)({},e,{queries:e.queries.concat(a.payload)});default:return e}}}),v=[f.a],E=Object(p.d)(d,{},p.a.apply(void 0,v)),y=t(27),_=t.n(y),O={ACCESS_KEY:"2d6042741b2c1c6e257f47b57c04e2229c6baaaec7a4331efee58eda276037bf",API_ROOT:"https://api.unsplash.com"},j=function(e){return function(a){var t=O.ACCESS_KEY,n=O.API_ROOT,r=e.searchTerm.trim();r.length>0?_.a.get("".concat(n,"/photos/random/?client_id=").concat(t,"&query=").concat(r,"&count=20")).then(function(e){var t=e.data.map(function(e){return e.urls.regular});a({type:"GET_IMAGES",payload:{imgUrl:t}})}).catch(function(e){return console.log(e)}):console.error({message:"Invalid search term"})}},S=function(e){return function(a){e.length>0?a({type:"SAVE_QUERY",payload:e}):console.error({message:"No query to save"})}},w=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault();var a=t.refs.search.value;t.props.images.searchTerm=a,t.props.getImages(t.props.images)},t.handleOnSave=function(){var e=t.refs.search.value;t.props.saveQuery(e)},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"search__container item"},r.a.createElement("form",{className:"search__form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"search__field"},r.a.createElement("label",{htmlFor:"search"},r.a.createElement("input",{className:"search__input",type:"text",id:"search",name:"search",placeholder:"Search for an Image",ref:"search"}))),r.a.createElement("div",{className:"search__buttons"},r.a.createElement("button",{className:"search__button",type:"submit"},"Search"),r.a.createElement("button",{onClick:this.handleOnSave,className:"search__button",type:"button"},"Save"))))}}]),a}(n.Component),N=Object(h.b)(function(e){return{images:e.images}},{searchTerm:function(e){return function(a){a({type:"SEARCH_TERM",payload:e})}},getImages:j,saveQuery:S})(w),A=function(e){return r.a.createElement("div",{className:"image__container"},r.a.createElement("img",{className:"image__img",src:e.url,alt:""}))},I=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(c)))).renderImages=function(){var e=t.props.images.images;if(e.imgUrl)return e.imgUrl.map(function(e){return r.a.createElement(A,{key:e,url:e})})},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"images__container item"},this.renderImages())}}]),a}(n.Component),q=Object(h.b)(function(e){return{images:e.images}},{getImages:j})(I),k=Object(h.b)(function(e){return{images:e.images}},{getImages:j})(function(e){return r.a.createElement("div",{className:"query__container"},r.a.createElement("p",null,e.query),r.a.createElement("button",{onClick:function(){var a={searchTerm:e.query};e.getImages(a)},className:"query__button"},"Search"))}),C=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(c)))).renderQueries=function(){return t.props.images.queries.map(function(e){return r.a.createElement(k,{key:e,query:e})})},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"queries__container item"},this.renderQueries())}}]),a}(n.Component),T=Object(h.b)(function(e){return{images:e.images}},{saveQuery:S})(C),R=(t(57),function(e){function a(){return Object(o.a)(this,a),Object(u.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{store:E},r.a.createElement("div",{className:"App"},r.a.createElement("main",{className:"container"},r.a.createElement(N,null),r.a.createElement(q,null),r.a.createElement(T,null))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.87f6b573.chunk.js.map