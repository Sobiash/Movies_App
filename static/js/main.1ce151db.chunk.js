(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(47)},26:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),o=a.n(r),l=(a(24),a(26),a(49)),i=a(51),s=a(50),m=a(5),u=a.n(m),v=a(12),p=a(11),h=a(6),d=a(7),g=a(9),E=a(8),f=a(10),b="https://api.themoviedb.org/3/",N="dc0bad0bf93f7c92b544f119e245de37",_="https://image.tmdb.org/t/p/",w=(a(30),a(32),function(e){return c.a.createElement("div",{className:"heroImage",style:{width:"100%",background:"linear-gradient(to bottom, rgba(0,0,0,0.01) 30%, rgba(0,0,0,0.08) 49%, rgba(0,0,0,0.40) 61%,rgba(0,0,0,1) 95%),\n        url('".concat(_).concat("w1280").concat(e.image,"')")}},c.a.createElement("div",{className:"heroImage-content"},c.a.createElement("div",{className:"heroImage-text"},c.a.createElement("h1",null,e.title))))}),y=(a(34),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(c)))).state={value:""},a.timeout=null,a.search=function(e){a.setState({value:e.target.value}),clearTimeout(a.timeout),a.timeout=setTimeout(function(){a.props.searchItems(a.state.value)},500)},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"searchbar"},c.a.createElement("div",{className:"searchbar-content"},c.a.createElement("form",null,c.a.createElement("input",{type:"text",name:"movie",className:"searchbar-input",placeholder:"Search movies",onChange:this.search}),c.a.createElement("button",null,"Search"))))}}]),t}(c.a.Component)),k=a(48),j=(a(36),function(e){return c.a.createElement("div",{className:"movies-content col-lg-4 col-md-6"},e.clickable?c.a.createElement(k.a,{to:{pathname:"/".concat(e.movkey),movieName:"".concat(e.movieName)}},c.a.createElement("div",{className:"movie__box"},c.a.createElement("img",{style:{height:"450px",width:"100%",borderBottom:"2px solid #f5821e"},src:e.movie.poster_path?"".concat(_).concat("w500").concat(e.movie.poster_path):"./images/no_image.jpg",alt:e.movie.title}),c.a.createElement("div",{className:"movie__text"},c.a.createElement("h3",null,e.movie.title.length<20?"".concat(e.movie.title):"".concat(e.movie.title.substring(0,25),"..."))))):c.a.createElement("div",{className:"movie__box"},c.a.createElement("img",{style:{height:"450px",width:"100%"},src:e.movie.poster_path?"".concat(_).concat("w500").concat(e.movie.poster_path):"./images/no_image.jpg",alt:e.movie.title}),c.a.createElement("div",{className:"movie__text"},c.a.createElement("h3",null,e.movie.title.length<20?"".concat(e.movie.title):"".concat(e.movie.title.substring(0,25),"...")))))}),x=(a(40),function(){return c.a.createElement("div",{className:"loader"})}),O=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(c)))).state={movies:[],heroImage:"",loading:!1,currentPage:0,totalPages:0,searchTerm:""},a.componentDidMount=function(){a.setState({loading:!0});var e="".concat(b,"movie/popular?api_key=").concat(N,"&language=en-US&page=1");a.loadData(e)},a.loadMoreItems=function(){var e="";a.setState({loading:!0}),e=""===a.state.searchTerm?"".concat(b,"movie/popular?api_key=").concat(N,"&language=en-US&page=").concat(a.state.currentPage+1):"".concat(b,"search/movie?api_key=").concat(N,"&query=").concat(a.state.searchTerm,"&language=en-US&page=").concat(a.state.currentPage+1),a.loadData(e)},a.searchItems=function(e){var t;a.setState({loading:!0,movies:[],searchTerm:e}),t=""===a.state.searchTerm?"".concat(b,"movie/popular?api_key=").concat(N,"&language=en-US&page=1"):"".concat(b,"search/movie?api_key=").concat(N,"&query=").concat(e),a.loadData(t)},a.loadData=function(){var e=Object(p.a)(u.a.mark(function e(t){var n,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,a.setState({movies:Object(v.a)(a.state.movies).concat(Object(v.a)(c.results)),heroImage:a.state.heroImage||c.results[0],loading:!1,currentPage:c.page,totalPages:c.total_pages});case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},this.state.heroImage?c.a.createElement("div",{className:"heroImage"},c.a.createElement(w,{image:this.state.heroImage.backdrop_path,title:this.state.heroImage.original_title}),c.a.createElement(y,{searchItems:this.searchItems})):null,c.a.createElement("div",{className:"result"},c.a.createElement("h1",null,""!==this.state.searchTerm||this.state.loading?"Search Results":"Popular Movies")),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},Object.keys(this.state.movies).map(function(t){return c.a.createElement(j,{key:t,movie:e.state.movies[t],movieName:e.state.movies[t].original_title,movkey:e.state.movies[t].id,clickable:!0})}))),this.state.loading?c.a.createElement(x,null):null,this.state.currentPage<=this.state.totalPages&&!this.state.loading?c.a.createElement("div",{className:"container"},c.a.createElement("button",{className:"loading-button col-xs-12",onClick:this.loadMoreItems},"Load More")):null)}}]),t}(n.Component),I=function(){return c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",{className:"App-title"},"Movies App"))},S=function(){return c.a.createElement("h1",null,"This page does not exist.")},M=(a(42),function(e){return c.a.createElement("div",{className:"navigation"},c.a.createElement("div",{className:"navigation-content"},c.a.createElement(k.a,{to:"/Movies_App",className:"navigation-link"},c.a.createElement("p",null,"Home")),c.a.createElement("p",null,"/"),c.a.createElement("p",null,e.movieTitle)))}),D=(a(44),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(c)))).state={loading:!1,activeMovie:[],directors:[],actors:[],genres:[]},a.componentDidMount=Object(p.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({loading:!0}),t="".concat(b,"movie/").concat(a.props.match.params.movieId,"?api_key=").concat(N,"&langyage=en-US"),a.loadData(t);case 3:case"end":return e.stop()}},e,this)})),a.loadData=function(){var e=Object(p.a)(u.a.mark(function e(t){var n,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:(c=e.sent).status_code?a.setState({loading:!1}):a.setState({activeMovie:c,genres:c.genres},Object(p.a)(u.a.mark(function e(){var t,n,c,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(b,"movie/").concat(a.props.match.params.movieId,"/credits?api_key=").concat(N),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,r=c.crew.filter(function(e){return"Director"===e.job}),a.setState({actors:c.cast,directors:r,loading:!1});case 9:case"end":return e.stop()}},e,this)})));case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.genres.map(function(e,t){return c.a.createElement("p",{key:t},e.name)}),t=this.state.activeMovie,a=this.state.directors.map(function(e,t){return c.a.createElement("p",{key:t},e.name)}),n=Object(v.a)(this.state.actors).slice(0,4).map(function(e,t){return c.a.createElement("p",{key:t},e.name)});return c.a.createElement("div",{className:"movie"},c.a.createElement("div",{className:"container"},c.a.createElement(M,{movieTitle:t.original_title}),c.a.createElement("h1",null,t.original_title),c.a.createElement("div",{className:"movieinfo container",style:{background:t.backdrop_path?"url('".concat(_).concat("w1280").concat(t.backdrop_path,"')"):"#000000"}}),this.state.loading?c.a.createElement(x,null):null,c.a.createElement("div",{className:"details container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-8 col-xs-12"},c.a.createElement("h2",null,"More Information About ",t.original_title),c.a.createElement("div",{className:"movie-content"},c.a.createElement("p",null,"Release Date: "),c.a.createElement("p",null,t.release_date)),c.a.createElement("div",{className:"movie-content"},c.a.createElement("p",null,"Duration: "),c.a.createElement("p",null," ",t.runtime," minutes")),c.a.createElement("p",{className:"movie-overview"},t.overview),c.a.createElement("div",{className:"table"},c.a.createElement("div",{className:"table-cell"},c.a.createElement("p",null,"Genre:"),c.a.createElement("p",null,e))),c.a.createElement("div",{className:"table"},c.a.createElement("div",{className:"table-cell"},c.a.createElement("p",null,"Original Title: "),c.a.createElement("p",null,t.original_title))),c.a.createElement("div",{className:"table"},c.a.createElement("div",{className:"table-cell"},c.a.createElement("p",null,"Director:"),c.a.createElement("p",null,a))),c.a.createElement("div",{className:"table"},c.a.createElement("div",{className:"table-cell"},c.a.createElement("p",null,"Actors:"),c.a.createElement("p",null,n)))),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("img",{style:{height:"450px",width:"100%",borderBottom:"2px solid #f5821e"},src:t.poster_path?"".concat(_).concat("w500").concat(t.poster_path):"./images/no_image.jpg",alt:t.title}))))))}}]),t}(c.a.Component)),T=function(){return c.a.createElement(l.a,null,c.a.createElement("div",null,c.a.createElement(I,null),c.a.createElement(i.a,null,c.a.createElement(s.a,{exact:!0,path:"/Movies_App",component:O}),c.a.createElement(s.a,{path:"/:movieId",component:D}),c.a.createElement(s.a,{component:S}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.1ce151db.chunk.js.map