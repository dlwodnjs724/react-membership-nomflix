(this.webpackJsonpreact_membership=this.webpackJsonpreact_membership||[]).push([[0],{28:function(e,t,n){e.exports=n.p+"static/media/noPosterSmall.87a0eb6a.png"},45:function(e,t,n){e.exports=n(71)},71:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(37),l=n.n(i),o=n(18),u=n(4),c=n(2),s=n(1);function p(){var e=Object(c.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return p=function(){return e},e}function m(){var e=Object(c.a)(["\n  width: 80px;\n  height: 50px;\n  text-align: center;\n  border-bottom: 3px solid ",";\n  transition: border-bottom 0.5s ease-in-out;\n"]);return m=function(){return e},e}function d(){var e=Object(c.a)(["\n  display: flex;\n"]);return d=function(){return e},e}function f(){var e=Object(c.a)(["\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  background-color: rgba(20, 20, 20, 0.8);\n  z-index: 10;\n  box-shadow: 0 1px 5px 2px rgba(20, 20, 20, 0.8);\n"]);return f=function(){return e},e}var g=s.default.header(f()),v=s.default.ul(d()),h=s.default.li(m(),(function(e){return e.current?"#3498db":"transparent"})),b=Object(s.default)(o.b)(p()),E=Object(u.g)((function(e){var t=e.location.pathname;return r.a.createElement(g,null,r.a.createElement(v,null,r.a.createElement(h,{current:"/"===t},r.a.createElement(b,{to:"/"},"Movies")),r.a.createElement(h,{current:"/tv"===t},r.a.createElement(b,{to:"/tv"},"TV")),r.a.createElement(h,{current:"/search"===t},r.a.createElement(b,{to:"/search"},"Search"))))})),x=n(9),y=n.n(x),_=n(12),j=n(13),O=n(14),w=n(16),k=n(15),S=n(11);function T(){var e=Object(c.a)(["\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n"]);return T=function(){return e},e}function R(){var e=Object(c.a)(["\n  font-size: 15px;\n  font-weight: 600;\n"]);return R=function(){return e},e}function M(){var e=Object(c.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]);return M=function(){return e},e}var U=s.default.div(M()),z=s.default.span(R()),C=s.default.div(T()),N=function(e){var t=e.title,n=e.children;return r.a.createElement(U,null,r.a.createElement(z,null,t),r.a.createElement(C,null,n))};function I(){var e=Object(c.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  font-size: 28px;\n  margin-top: 20px;\n"]);return I=function(){return e},e}var P=s.default.div(I()),F=function(){return r.a.createElement(P,null,r.a.createElement("span",{role:"img","aria-label":"Loading"},"\u23f0"))};function V(){var e=Object(c.a)(["\n  color: ",";\n"]);return V=function(){return e},e}function A(){var e=Object(c.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]);return A=function(){return e},e}var B=s.default.div(A()),D=s.default.span(V(),(function(e){return e.color})),q=function(e){var t=e.text,n=e.color;return r.a.createElement(B,null,r.a.createElement(D,{color:n},t))};function L(){var e=Object(c.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]);return L=function(){return e},e}function J(){var e=Object(c.a)(["\n  display: block;\n  margin-bottom: 3px;\n"]);return J=function(){return e},e}function G(){var e=Object(c.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"]);return G=function(){return e},e}function H(){var e=Object(c.a)(["\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  opacity: 0;\n  transition: opacity 0.1s linear;\n"]);return H=function(){return e},e}function K(){var e=Object(c.a)(["\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n  height: 180px;\n  border-radius: 4px;\n  transition: opacity 0.1s linear;\n"]);return K=function(){return e},e}function Q(){var e=Object(c.a)(["\n  font-size: 12px;\n"]);return Q=function(){return e},e}var W=s.default.div(Q()),X=s.default.div(K(),(function(e){return e.bgUrl})),Y=s.default.span(H()),Z=s.default.div(G(),X,Y),$=s.default.span(J()),ee=s.default.span(L()),te=function(e){var t=e.id,a=e.imageUrl,i=e.title,l=e.rating,u=e.year,c=e.isMovie,s=void 0!==c&&c;return r.a.createElement(o.b,{to:s?"/movie/".concat(t):"/show/".concat(t)},r.a.createElement(W,null,r.a.createElement(Z,null,r.a.createElement(X,{bgUrl:a?"https://image.tmdb.org/t/p/w300".concat(a):n(28)}),r.a.createElement(Y,null,r.a.createElement("span",{role:"img","aria-label":"rating"},"\u2b50")," ",l,"/10")),r.a.createElement($,null,i.length>18?"".concat(i.substring(0,15),"..."):i),r.a.createElement(ee,null,u)))};function ne(){var e=Object(c.a)(["\n  padding: 20px;\n"]);return ne=function(){return e},e}var ae=s.default.div(ne()),re=function(e){var t=e.nowPlaying,n=e.upcoming,a=e.popular,i=e.loading,l=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,null,r.a.createElement("title",null,"Movies | Nomflix")),i?r.a.createElement(F,null):r.a.createElement(ae,null,t&&t.length>0&&r.a.createElement(N,{title:"Now Playing"},t.map((function(e){return r.a.createElement(te,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),n&&n.length>0&&r.a.createElement(N,{title:"Upcoming Movies"},n.map((function(e){return r.a.createElement(te,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),a&&a.length>0&&r.a.createElement(N,{title:"Popular Movies"},a.map((function(e){return r.a.createElement(te,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),l&&r.a.createElement(q,{color:"#e74c3c",text:l})))},ie=n(43),le=n.n(ie).a.create({baseURL:"https://api.themoviedb.org/3"});le.interceptors.request.use((function(e){return e.params=e.params||{},e.params.api_key="ce5267e419a632bd9c0c45d25d815071",e.params.language="en-US",e}));var oe=function(){return le.get("movie/now_playing")},ue=function(){return le.get("movie/upcoming")},ce=function(){return le.get("movie/popular")},se=function(e){return le.get("movie/".concat(e),{params:{append_to_response:"videos"}})},pe=function(e){return le.get("search/movie",{params:{query:encodeURIComponent(e)}})},me=function(){return le.get("tv/top_rated")},de=function(){return le.get("tv/popular")},fe=function(){return le.get("tv/airing_today")},ge=function(e){return le.get("tv/".concat(e),{params:{append_to_response:"videos"}})},ve=function(e){return le.get("search/tv",{params:{query:encodeURIComponent(e)}})},he=function(e){Object(w.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={nowPlaying:null,upcoming:null,popular:null,loading:!0,error:null},e}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var e=Object(_.a)(y.a.mark((function e(){var t,n,a,r,i,l;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe();case 3:return t=e.sent,n=t.data.results,e.next=7,ue();case 7:return a=e.sent,r=a.data.results,e.next=11,ce();case 11:i=e.sent,l=i.data.results,this.setState({nowPlaying:n,upcoming:r,popular:l}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movie information"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,a=e.popular,i=e.error,l=e.loading;return r.a.createElement(re,{nowPlaying:t,upcoming:n,popular:a,loading:l,error:i})}}]),n}(r.a.Component);function be(){var e=Object(c.a)(["\n  padding: 20px;\n"]);return be=function(){return e},e}var Ee=s.default.div(be()),xe=function(e){var t=e.topRated,n=e.popular,a=e.airingToday,i=e.loading,l=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,null,r.a.createElement("title",null,"TV Shows | Nomflix")),i?r.a.createElement(F,null):r.a.createElement(Ee,null,t&&t.length>0&&r.a.createElement(N,{title:"Top Rated Shows"},t.map((function(e){return r.a.createElement(te,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),n&&n.length>0&&r.a.createElement(N,{title:"Popular Shows"},n.map((function(e){return r.a.createElement(te,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),a&&a.length>0&&r.a.createElement(N,{title:"Airing Today"},a.map((function(e){return r.a.createElement(te,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),l&&r.a.createElement(q,{color:"#e74c3c",text:l})))},ye=function(e){Object(w.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={topRated:null,popular:null,airingToday:null,loading:!0,erorr:null},e}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var e=Object(_.a)(y.a.mark((function e(){var t,n,a,r,i,l;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,me();case 3:return t=e.sent,n=t.data.results,e.next=7,de();case 7:return a=e.sent,r=a.data.results,e.next=11,fe();case 11:i=e.sent,l=i.data.results,this.setState({topRated:n,popular:r,airingToday:l}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find TV information"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,a=e.airingToday,i=e.loading,l=e.error;return r.a.createElement(xe,{topRated:t,popular:n,airingToday:a,loading:i,error:l})}}]),n}(r.a.Component);function _e(){var e=Object(c.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]);return _e=function(){return e},e}function je(){var e=Object(c.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]);return je=function(){return e},e}function Oe(){var e=Object(c.a)(["\n  padding: 0 20px;\n"]);return Oe=function(){return e},e}var we=s.default.div(Oe()),ke=s.default.form(je()),Se=s.default.input(_e()),Te=function(e){var t=e.movieResults,n=e.tvResults,a=e.loading,i=e.error,l=e.searchTerm,o=e.handleSubmit,u=e.updateTerm;return r.a.createElement(we,null,r.a.createElement(S.a,null,r.a.createElement("title",null,"Search | Nomflix")),r.a.createElement(ke,{onSubmit:o},r.a.createElement(Se,{placeholder:"Search Movies or TV Shows...",value:l,onChange:u})),a?r.a.createElement(F,null):r.a.createElement(r.a.Fragment,null,t&&t.length>0&&r.a.createElement(N,{title:"Movie Results"},t.map((function(e){return r.a.createElement(te,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),n&&n.length>0&&r.a.createElement(N,{title:"TV Show Results"},n.map((function(e){return r.a.createElement(te,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),i&&r.a.createElement(q,{color:"#e74c3c",text:i}),n&&t&&0===n.length&&0===t.length&&r.a.createElement(q,{text:"Nothing found",color:"#95a5a6"})))},Re=function(e){Object(w.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={movieResults:null,tvResults:null,searchTerm:"",loading:!1,error:null},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchTerm&&e.searchByTerm()},e.updateTerm=function(t){var n=t.target.value;e.setState({searchTerm:n})},e.searchByTerm=Object(_.a)(y.a.mark((function t(){var n,a,r,i,l;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchTerm,e.setState({loading:!0}),t.prev=2,t.next=5,pe(n);case 5:return a=t.sent,r=a.data.results,t.next=9,ve(n);case 9:i=t.sent,l=i.data.results,e.setState({movieResults:r,tvResults:l}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),e.setState({error:"Can't find results."});case 17:return t.prev=17,e.setState({loading:!1}),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[2,14,17,20]])}))),e}return Object(O.a)(n,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.loading,l=e.error;return r.a.createElement(Te,{movieResults:t,tvResults:n,loading:i,error:l,searchTerm:a,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(r.a.Component);function Me(){var e=Object(c.a)(["\n  font-size: 12px;\n  opacity: 0.7;\n  line-height: 1.5;\n  width: 50%;\n"]);return Me=function(){return e},e}function Ue(){var e=Object(c.a)(["\n  margin: 0 10px;\n"]);return Ue=function(){return e},e}function ze(){var e=Object(c.a)([""]);return ze=function(){return e},e}function Ce(){var e=Object(c.a)(["\n  margin: 20px 0;\n"]);return Ce=function(){return e},e}function Ne(){var e=Object(c.a)(["\n  font-size: 32px;\n"]);return Ne=function(){return e},e}function Ie(){var e=Object(c.a)(["\n  width: 70%;\n  margin-left: 10px;\n"]);return Ie=function(){return e},e}function Pe(){var e=Object(c.a)(["\n  width: 30%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  border-radius: 5px;\n"]);return Pe=function(){return e},e}function Fe(){var e=Object(c.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  position: relative;\n  z-index: 1;\n"]);return Fe=function(){return e},e}function Ve(){var e=Object(c.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n  z-index: 0;\n"]);return Ve=function(){return e},e}function Ae(){var e=Object(c.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]);return Ae=function(){return e},e}var Be=s.default.div(Ae()),De=s.default.div(Ve(),(function(e){return e.bgImage})),qe=s.default.div(Fe()),Le=s.default.div(Pe(),(function(e){return e.bgImage})),Je=s.default.div(Ie()),Ge=s.default.div(Ne()),He=s.default.div(Ce()),Ke=s.default.span(ze()),Qe=s.default.span(Ue()),We=s.default.p(Me()),Xe=function(e){var t=e.result,a=e.loading;e.error;return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,null,r.a.createElement("title",null,"Loading | Nomflix")),r.a.createElement(F,null)):r.a.createElement(Be,null,r.a.createElement(S.a,null,r.a.createElement("title",null,t.original_title?t.original_title:t.original_name," ","| Nomflix")),r.a.createElement(De,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),r.a.createElement(qe,null,r.a.createElement(Le,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(28)}),r.a.createElement(Je,null,r.a.createElement(Ge,null,t.original_title?t.original_title:t.original_name),r.a.createElement(He,null,r.a.createElement(Ke,null,t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)),r.a.createElement(Qe,null,"\xb7"),r.a.createElement(Ke,null,t.runtime?t.runtime:t.episode_run_time[0]," min"),r.a.createElement(Qe,null,"\xb7"),r.a.createElement(Ke,null,t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")})))),r.a.createElement(We,null,t.overview))))},Ye=function(e){Object(w.a)(n,e);var t=Object(k.a)(n);function n(e){var a;Object(j.a)(this,n),a=t.call(this,e);var r=e.location.pathname;return a.state={result:null,error:null,loading:!0,isMovie:r.includes("/movie/")},a}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var e=Object(_.a)(y.a.mark((function e(){var t,n,a,r,i,l,o,u;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,a=t.history.push,r=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",a("/"));case 5:if(l=null,e.prev=6,!r){e.next=14;break}return e.next=10,se(i);case 10:o=e.sent,l=o.data,e.next=18;break;case 14:return e.next=16,ge(i);case 16:u=e.sent,l=u.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:"Can't find anything."});case 23:return e.prev=23,this.setState({loading:!1,result:l}),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[6,20,23,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,a=e.loading;return r.a.createElement(Xe,{result:t,error:n,loading:a})}}]),n}(r.a.Component),Ze=function(){return r.a.createElement(o.a,null,r.a.createElement(E,null),r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0,component:he}),r.a.createElement(u.b,{path:"/tv",exact:!0,component:ye}),r.a.createElement(u.b,{path:"/search",component:Re}),r.a.createElement(u.b,{path:"/movie/:id",component:Ye}),r.a.createElement(u.b,{path:"/show/:id",component:Ye}),r.a.createElement(u.a,{from:"*",to:"/"})))},$e=n(44),et=n.n($e);function tt(){var e=Object(c.a)(["\n  ",";\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n  * {\n    box-sizing: border-box\n  }\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 12px;\n    background-color: rgba(20, 20, 20, 1);\n    color: white;\n    padding-top: 50px;\n  }\n"]);return tt=function(){return e},e}var nt=Object(s.createGlobalStyle)(tt(),et.a);var at=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ze,null),r.a.createElement(nt,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(at,null)),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.59dc687b.chunk.js.map