(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(48)},27:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),o=a.n(r),l=(a(25),a(27),a(50)),i=a(52),s=a(51),m=a(5),u=a.n(m),p=a(12),v=a(11),g=a(15),h=a(6),d=a(7),E=a(9),f=a(8),b=a(10),N="https://api.themoviedb.org/3/",y="dc0bad0bf93f7c92b544f119e245de37",_="https://image.tmdb.org/t/p/",w=(a(31),a(33),function(e){var t=e.image,a=e.title;return c.a.createElement("div",{className:"heroImage",style:{width:"100%",background:"linear-gradient(to bottom, rgba(0,0,0,0.01) 30%, rgba(0,0,0,0.08) 49%, rgba(0,0,0,0.40) 61%,rgba(0,0,0,1) 95%),\n        url('".concat(_).concat("w1280").concat(t,"')")}},c.a.createElement("div",{className:"heroImage-content"},c.a.createElement("div",{className:"heroImage-text"},c.a.createElement("h1",null,a))))}),k=(a(35),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(E.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(c)))).state={value:""},a.timeout=null,a.search=function(e){var t=a.props.searchItems;a.setState({value:e.target.value}),clearTimeout(a.timeout),a.timeout=setTimeout(function(){t(a.state.value)},500)},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"searchbar"},c.a.createElement("div",{className:"searchbar-content"},c.a.createElement("form",null,c.a.createElement("input",{type:"text",name:"movie",className:"searchbar-input",placeholder:"Search movies",onChange:this.search}),c.a.createElement("button",null,"Search"))))}}]),t}(c.a.Component)),j=a(49),S=(a(37),function(e){var t=e.clickable,a=e.movkey,n=e.movieName,r=e.movie;return c.a.createElement("div",{className:"movies-content col-lg-4 col-md-6"},t?c.a.createElement(j.a,{to:{pathname:"/".concat(a),movieName:"".concat(n)}},c.a.createElement("div",{className:"movie__box"},c.a.createElement("img",{style:{height:"450px",width:"100%",borderBottom:"2px solid #f5821e"},src:r.poster_path?"".concat(_).concat("w500").concat(r.poster_path):"/Movies_App/images/no_image.jpg",alt:r.title}),c.a.createElement("div",{className:"movie__text"},c.a.createElement("h3",null,r.title.length<20?"".concat(r.title):"".concat(r.title.substring(0,25),"..."))))):c.a.createElement("div",{className:"movie__box"},c.a.createElement("img",{style:{height:"450px",width:"100%"},src:r.poster_path?"".concat(_).concat("w500").concat(r.poster_path):"./images/no_image.jpg",alt:r.title}),c.a.createElement("div",{className:"movie__text"},c.a.createElement("h3",null,r.title.length<20?"".concat(r.title):"".concat(r.title.substring(0,25),"...")))))}),O=(a(41),function(){return c.a.createElement("div",{className:"loader"})}),x=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(E.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(c)))).state={movies:[],heroImage:"",loading:!1,currentPage:0,totalPages:0,searchTerm:""},a.componentDidMount=function(){if(localStorage.getItem("HomeState")){var e=JSON.parse(localStorage.getItem("HomeState"));a.setState(Object(g.a)({},e))}else{a.setState({loading:!0});var t="".concat(N,"movie/popular?api_key=").concat(y,"&language=en-US&page=1");a.loadData(t)}},a.loadMoreItems=function(){var e="";a.setState({loading:!0}),e=""===a.state.searchTerm?"".concat(N,"movie/popular?api_key=").concat(y,"&language=en-US&page=").concat(a.state.currentPage+1):"".concat(N,"search/movie?api_key=").concat(y,"&query=").concat(a.state.searchTerm,"&language=en-US&page=").concat(a.state.currentPage+1),a.loadData(e)},a.searchItems=function(e){var t;a.setState({loading:!0,movies:[],searchTerm:e}),t=""===a.state.searchTerm?"".concat(N,"movie/popular?api_key=").concat(y,"&language=en-US&page=1"):"".concat(N,"search/movie?api_key=").concat(y,"&query=").concat(e),a.loadData(t)},a.loadData=function(){var e=Object(v.a)(u.a.mark(function e(t){var n,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,a.setState({movies:Object(p.a)(a.state.movies).concat(Object(p.a)(c.results)),heroImage:a.state.heroImage||c.results[0],loading:!1,currentPage:c.page,totalPages:c.total_pages},function(){""===a.state.searchTerm&&localStorage.setItem("HomeState",JSON.stringify(a.state))});case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},this.state.heroImage?c.a.createElement("div",{className:"heroImage"},c.a.createElement(w,{image:this.state.heroImage.backdrop_path,title:this.state.heroImage.original_title}),c.a.createElement(k,{searchItems:this.searchItems})):null,c.a.createElement("div",{className:"result"},c.a.createElement("h1",null,""!==this.state.searchTerm||this.state.loading?"Search Results":"Popular Movies")),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},Object.keys(this.state.movies).map(function(t){return c.a.createElement(S,{key:t,movie:e.state.movies[t],movieName:e.state.movies[t].original_title,movkey:e.state.movies[t].id,clickable:!0})}))),this.state.loading?c.a.createElement(O,null):null,this.state.currentPage<=this.state.totalPages&&!this.state.loading?c.a.createElement("div",{className:"container"},c.a.createElement("button",{className:"loading-button col-xs-12",onClick:this.loadMoreItems},"Load More")):null)}}]),t}(n.Component),I=function(){return c.a.createElement("header",{className:"App-header"},c.a.createElement(j.a,{to:"/Movies_App",className:"navigation-link",style:{color:"#f5821e",textDecoration:"none"}},c.a.createElement("h1",{className:"App-title"},"Movies App")))},M=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("h1",{style:{textAlign:"center",color:"#fff"}},"This page does not exist."))},A=(a(43),function(e){var t=e.movieTitle;return c.a.createElement("div",{className:"navigation"},c.a.createElement("div",{className:"navigation-content"},c.a.createElement(j.a,{to:"/Movies_App",className:"navigation-link"},c.a.createElement("p",null,"Home")),c.a.createElement("p",null,"/"),c.a.createElement("p",null,t)))}),D=(a(45),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(E.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(c)))).state={loading:!1,activeMovie:[],directors:[],actors:[],genres:[]},a.componentDidMount=Object(v.a)(u.a.mark(function e(){var t,n,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=a.props.match.params.movieId,localStorage.getItem("".concat(t))?(n=JSON.parse(localStorage.getItem("".concat(t))),a.setState(Object(g.a)({},n))):(a.setState({loading:!0}),c="".concat(N,"movie/").concat(t,"?api_key=").concat(y,"&langyage=en-US"),a.loadData(c));case 2:case"end":return e.stop()}},e,this)})),a.loadData=function(){var e=Object(v.a)(u.a.mark(function e(t){var n,c,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.props.match.params.movieId,e.next=3,fetch(t);case 3:return c=e.sent,e.next=6,c.json();case 6:(r=e.sent).status_code?a.setState({loading:!1}):a.setState({activeMovie:r,genres:r.genres},Object(v.a)(u.a.mark(function e(){var t,c,r,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(N,"movie/").concat(n,"/credits?api_key=").concat(y),e.next=3,fetch(t);case 3:return c=e.sent,e.next=6,c.json();case 6:r=e.sent,o=r.crew.filter(function(e){return"Director"===e.job}),a.setState({actors:r.cast,directors:o,loading:!1},function(){localStorage.setItem("".concat(n),JSON.stringify(a.state))});case 9:case"end":return e.stop()}},e,this)})));case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.genres,a=e.activeMovie,n=e.directors,r=e.loading,o=t.map(function(e,t){return c.a.createElement("p",{key:t},e.name)}),l=n.map(function(e,t){return c.a.createElement("p",{key:t},e.name)}),i=Object(p.a)(this.state.actors).slice(0,4).map(function(e,t){return c.a.createElement("p",{key:t},e.name)});return c.a.createElement("div",{className:"movie"},c.a.createElement("div",{className:"container"},a?c.a.createElement(c.a.Fragment,null,c.a.createElement(A,{movieTitle:a.original_title}),c.a.createElement("h1",null,a.original_title),c.a.createElement("div",{className:"movieinfo container",style:{background:a.backdrop_path?"url('".concat(_).concat("w1280").concat(a.backdrop_path,"')"):"#000000"}})):null,r?c.a.createElement(O,null):null,a?c.a.createElement("div",{className:"details container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-8 col-xs-12"},c.a.createElement("h2",null,"More Information About ",a.original_title),c.a.createElement("div",{className:"movie-content"},c.a.createElement("p",null,"Release Date: "),c.a.createElement("p",null,a.release_date)),c.a.createElement("div",{className:"movie-content"},c.a.createElement("p",null,"Duration: "),c.a.createElement("p",null," ",a.runtime," minutes")),c.a.createElement("p",{className:"movie-overview"},a.overview),c.a.createElement("div",{className:"table"},c.a.createElement("div",{className:"table-cell"},c.a.createElement("p",null,"Genre:"),o)),c.a.createElement("div",{className:"table"},c.a.createElement("div",{className:"table-cell"},c.a.createElement("p",null,"Original Title: "),c.a.createElement("p",null,a.original_title))),c.a.createElement("div",{className:"table"},c.a.createElement("div",{className:"table-cell"},c.a.createElement("p",null,"Director:"),l)),c.a.createElement("div",{className:"table"},c.a.createElement("div",{className:"table-cell"},c.a.createElement("p",null,"Actors:"),i))),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("img",{style:{height:"450px",width:"100%",borderBottom:"2px solid #f5821e"},src:a.poster_path?"".concat(_).concat("w500").concat(a.poster_path):"./images/no_image.jpg",alt:a.title})))):null))}}]),t}(c.a.Component)),T=function(){return c.a.createElement(l.a,null,c.a.createElement("div",null,c.a.createElement(I,null),c.a.createElement(i.a,null,c.a.createElement(s.a,{exact:!0,path:"/Movies_App",component:x}),c.a.createElement(s.a,{path:"/:movieId",component:D}),c.a.createElement(s.a,{component:M}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.c21e0cbb.chunk.js.map