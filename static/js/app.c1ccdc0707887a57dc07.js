webpackJsonp([1],{"/Doo":function(t,e,n){var a=n("wITD");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("54279fb6",a,!1,{})},"3Gu/":function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n",""])},"8gwm":function(t,e,n){var a=n("K4Pf");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("78542bfc",a,!1,{})},"Ag/I":function(t,e,n){var a=n("mRr/");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("36aed886",a,!1,{})},K4Pf:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n.loader[data-v-6428c8d2]{\n  height: 100px;\n  width: 100%;\n  text-align: center;\n  padding: 1em;\n  margin: 0 auto 1em;\n  display: inline-block;\n  vertical-align: top;\n}\nsvg path[data-v-6428c8d2] {\n  fill: #ffa035;\n}\n",""])},KwyM:function(t,e,n){var a=n("ki2I");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("46c0c15e",a,!1,{})},NHnr:function(t,e,n){"use strict";function a(t){A||n("KwyM")}function o(){return{name:M.a.name.firstName()+" "+M.a.name.lastName(),content:M.a.random.words(20)}}function i(t){X||n("ae1/")}function r(t){gt||n("/Doo")}function l(t){Ut||n("mbQi")}function s(t){Ht||n("Ag/I")}function d(t){Ue||n("8gwm")}function c(t){He||n("Ry4p")}Object.defineProperty(e,"__esModule",{value:!0});var m=n("7+uW"),u=n("Dd8w"),p=n.n(u),f=n("NYxO"),v={name:"navigation",methods:{logout:function(){var t=this;this.$store.dispatch("AUTH_LOGOUT").then(function(){return t.$router.push("/")})}},computed:p()({},Object(f.b)(["getProfile","isAuthenticated","isProfileLoaded"]),Object(f.c)({authLoading:function(t){return"loading"===t.auth.status},name:function(t){return t.user.profile.title+" "+t.user.profile.name}}))},h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isAuthenticated?n("div",[n("nav",{staticClass:"navbar navbar-expand-md navbar-dark bg-dark mb-4"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Altkeep")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarCollapse"}},[t._m(1),t._v(" "),n("ul",{staticClass:"navbar-nav ml-auto"},[n("li",{staticClass:"nav-item active"},[n("a",{staticClass:"nav-link",on:{click:t.logout}},[t._v("Log out "),n("span",{staticClass:"sr-only"},[t._v("(current)")])])])])])])]):t._e()},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"navbar-nav mr-auto"},[n("li",{staticClass:"nav-item active"},[n("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Home "),n("span",{staticClass:"sr-only"},[t._v("(current)")])])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Link")])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link disabled",attrs:{href:"#"}},[t._v("Disabled")])])])}];h._withStripped=!0;var b={render:h,staticRenderFns:g},_=b,x=n("VU/8"),w=x(v,_,!1,null,null,null);w.options.__file="src/components/navigation/index.vue";var C=w.exports,k={name:"sqreen-footer"},y=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},E=[];y._withStripped=!0;var S={render:y,staticRenderFns:E},U=S,A=!1,R=n("VU/8"),T=a,L=R(k,U,!1,T,"data-v-62fe346e",null);L.options.__file="src/components/footer/index.vue";var O=L.exports,P=n("mtWM"),F=n.n(P),j={components:{SqreenFooter:O,Navigation:C},name:"app",created:function(){this.$store.getters.isAuthenticated&&this.$store.dispatch("USER_REQUEST")}},H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("navigation"),t._v(" "),n("router-view")],1)},N=[];H._withStripped=!0;var I={render:H,staticRenderFns:N},Q=I,V=n("VU/8"),z=V(j,Q,!1,null,null,null);z.options.__file="src/App.vue";var G=z.exports,D=n("/ocq"),B=n("FfS/"),M=n.n(B),Z=function(t){for(var e=[],n=1;n<=t;n++)e.push(o());return e}(10),q={name:"feedItem",props:{feed:Object}},K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"feed-item"},[n("h1",[t._v(t._s(t.feed.name))]),t._v(" "),n("p",[t._v(t._s(t.feed.content))])])},W=[];K._withStripped=!0;var J={render:K,staticRenderFns:W},Y=J,X=!1,tt=n("VU/8"),et=i,nt=tt(q,Y,!1,et,"data-v-52f8aebe",null);nt.options.__file="src/components/home/feedItem.vue";var at=nt.exports,ot={name:"contact",data:function(){return{world:"So its working well",contacts:[]}},mounted:function(){var t=this;F.a.get("/contact").then(function(e){t.contacts=e.data.data}).catch(function(e){console.log(e),console.log("came here"),t.$store.dispatch("AUTH_LOGOUT")})},methods:{}},it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact"},t._l(t.contacts,function(e){return n("div",[t._v("\n      "+t._s(e.fullName)+"\n   ")])}))},rt=[];it._withStripped=!0;var lt={render:it,staticRenderFns:rt},st=lt,dt=n("VU/8"),ct=dt(ot,st,!1,null,null,null);ct.options.__file="src/components/home/contact.vue";var mt=ct.exports,ut={name:"cards",data:function(){return{articles:[],sarticles:[],article:{id:"",title:"",body:""},article_id:"",pagination:{},edit:!1,search:"",current_page_url:""}},mounted:function(){},created:function(){this.fetchArticles()},methods:{stopEditing:function(){$("#modalLarge").modal("hide"),$("body").removeClass("modal-open"),$(".modal-backdrop").remove(),this.edit=!1},fetchArticles:function(t){var e=this;this.current_page_url=t;var n=this;t=t||"/articles",F.a.get(t).then(function(t){var a=t.data;console.log(a.data),e.articles=a.data,n.makePagination(a.meta,a.links)}).catch(function(t){return console.log(t)})},makePagination:function(t,e){},deleteArticle:function(t){},clearArticle:function(){$("#modalLarge").modal("show"),this.edit=!1,this.article.id="",this.article.article_id="",this.article.title="",this.article.body=""},addArticle:function(){},editArticle:function(t){$("#modalLarge").modal("show"),this.edit=!0,this.article.id=t.id,this.article.article_id=t.id,this.article.title=t.title,this.article.body=t.body}},computed:{filteredArticles:function(){var t=this;return this.articles.filter(function(e){return console.log(t.search),e.title.toLowerCase().match(t.search.toLowerCase())||e.body.toLowerCase().match(t.search.toLowerCase())})}}},pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container cards"},[n("h2",[t._v("Articles")]),t._v(" "),n("button",{staticClass:"btn btn-primary mb-2",attrs:{type:"button"},on:{click:function(e){t.clearArticle()}}},[t._v("Add")]),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.addArticle(e)}}},[n("div",{staticClass:"modal modal-fullscreen",attrs:{id:"modalLarge",tabindex:"-1",role:"dialog","aria-labelledby":"modalLargeLabel","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title",attrs:{type:"text",id:"modalLargeLabel"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.article.title,expression:"article.title"}],attrs:{placeholder:"Title"},domProps:{value:t.article.title},on:{input:function(e){e.target.composing||t.$set(t.article,"title",e.target.value)}}})]),t._v(" "),n("button",{staticClass:"close",attrs:{"aria-label":"Close"},on:{click:t.stopEditing}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.article.body,expression:"article.body"}],staticClass:"form-control",attrs:{type:"text",id:"largetextarea",rows:"10",placeholder:"Body"},domProps:{value:t.article.body},on:{input:function(e){e.target.composing||t.$set(t.article,"body",e.target.value)}}}),t._v(" "),t._m(0)])])])]),t._v(" "),n("h3",[t._v(" Search ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control mb-4",attrs:{type:"text",placeholder:"Search for..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),n("nav",{attrs:{"aria-label":"Page navigation example"}},[n("ul",{staticClass:"pagination"},[n("li",{staticClass:"page-item",class:[{disabled:!t.pagination.prev_page_url}]},[n("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){t.fetchArticles(t.pagination.prev_page_url)}}},[t._v("Previous")])]),t._v(" "),n("li",{staticClass:"page-item disabled"},[n("a",{staticClass:"page-link text-dark"},[t._v("Page "+t._s(t.pagination.current_page)+" of "+t._s(t.pagination.last_page))])]),t._v(" "),n("li",{staticClass:"page-item",class:[{disabled:!t.pagination.next_page_url}]},[n("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){t.fetchArticles(t.pagination.next_page_url)}}},[t._v("Next")])])])]),t._v(" "),n("div",{staticClass:"row"},t._l(t.filteredArticles,function(e){return n("div",{key:e.id,staticClass:"col-md-4",on:{click:function(n){t.editArticle(e)}}},[n("div",{staticClass:"card mb-4 box-shadow"},[n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"card-text"},[t._v(t._s(e.sbody))]),t._v(" "),n("div",{staticClass:"d-flex justify-content-between align-items-center"},[n("small",{staticClass:"text-muted"},[t._v(t._s(e.label))]),t._v(" "),n("div",{staticClass:"btn-group"},[n("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"}},[t._v("View")]),t._v(" "),n("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button",id:"deleteButton"},on:{click:[function(t){t.stopPropagation()},function(n){t.deleteArticle(e.id)}]}},[t._v("Delete")])])])])])])}))])},ft=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-secondary",attrs:{type:"submit","aria-hidden":"true","data-toggle":"modal","data-target":"#modalLarge"}},[t._v("Save")])])}];pt._withStripped=!0;var vt={render:pt,staticRenderFns:ft},ht=vt,gt=!1,bt=n("VU/8"),_t=r,xt=bt(ut,ht,!1,_t,null,null);xt.options.__file="src/components/home/cards.vue";var wt=xt.exports,Ct={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(){var t=this,e=this.email,n=this.password;this.$store.dispatch("AUTH_REQUEST",{email:e,password:n}).then(function(){t.$router.push("/")})}}},kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("form",{staticClass:"form-signin",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[n("img",{staticClass:"mb-4",attrs:{src:"https://getbootstrap.com/assets/brand/bootstrap-solid.svg",alt:"",width:"72",height:"72"}}),t._v(" "),n("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("Please sign in")]),t._v(" "),n("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("Email address")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),n("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("Password")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),t._m(0),t._v(" "),n("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[t._v("Sign in")]),t._v(" "),n("p",{staticClass:"mt-5 mb-3 text-muted"},[t._v("© 2017-2018")])])])},yt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"checkbox mb-3"},[n("label",[n("input",{attrs:{type:"checkbox",value:"remember-me"}}),t._v(" Remember me\n        ")])])}];kt._withStripped=!0;var Et={render:kt,staticRenderFns:yt},St=Et,Ut=!1,At=n("VU/8"),Rt=l,Tt=At(Ct,St,!1,Rt,"data-v-70c98a68",null);Tt.options.__file="src/components/login/index.vue";var Lt=Tt.exports,Ot={components:{Login:Lt,FeedItem:at,contact:mt,cards:wt},name:"home",computed:p()({},Object(f.b)(["isAuthenticated","authStatus"]),{loading:function(){return"loading"===this.authStatus&&!this.isAuthenticated}}),data:function(){return{fakeFeed:Z}}},$t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loading?n("loading"):t._e(),t._v(" "),t.isAuthenticated?n("div",[n("cards")],1):t._e(),t._v(" "),t.isAuthenticated||"loading"===t.authStatus?t._e():n("div",[n("login")],1)],1)},Pt=[];$t._withStripped=!0;var Ft={render:$t,staticRenderFns:Pt},jt=Ft,Ht=!1,Nt=n("VU/8"),It=s,Qt=Nt(Ot,jt,!1,It,null,null);Qt.options.__file="src/components/home/index.vue";var Vt=Qt.exports,zt={name:"account",computed:Object(f.c)({profile:function(t){return t.user.profile}})},Gt=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},Dt=[];Gt._withStripped=!0;var Bt={render:Gt,staticRenderFns:Dt},Mt=Bt,Zt=n("VU/8"),qt=Zt(zt,Mt,!1,null,null,null);qt.options.__file="src/components/account/index.vue";var Kt,Wt,Jt,Yt=qt.exports,Xt=n("bOdI"),te=n.n(Xt),ee=n("//Fk"),ne=n.n(ee),ae=n("+6Bu"),oe=n.n(ae),ie={auth:{POST:{token:"This-is-a-mocked-token"}},"user/me":{GET:{name:"doggo",title:"sir"}}},re=function(t){var e=t.url,n=t.method;oe()(t,["url","method"]);return new ne.a(function(t,a){setTimeout(function(){try{t(ie[e][n||"GET"])}catch(t){a(new Error(t))}},1e3)})},le=re,se={status:"",profile:{}},de={getProfile:function(t){return t.profile},isProfileLoaded:function(t){return!!t.profile.name}},ce=te()({},"USER_REQUEST",function(t){var e=t.commit,n=t.dispatch;e("USER_REQUEST"),le({url:"user/me"}).then(function(t){e("USER_SUCCESS",t)}).catch(function(t){e("USER_ERROR"),n("AUTH_LOGOUT")})}),me=(Kt={},te()(Kt,"USER_REQUEST",function(t){t.status="loading"}),te()(Kt,"USER_SUCCESS",function(t,e){t.status="success",m.a.set(t,"profile",e)}),te()(Kt,"USER_ERROR",function(t){t.status="error"}),te()(Kt,"AUTH_LOGOUT",function(t){t.profile={}}),Kt),ue={state:se,getters:de,actions:ce,mutations:me},pe={token:localStorage.getItem("user-token")||"",status:"",hasLoadedOnce:!1},fe={isAuthenticated:function(t){return!!t.token},authStatus:function(t){return t.status}},ve=(Wt={},te()(Wt,"AUTH_REQUEST",function(t,e){var n=t.commit,a=t.dispatch;return new ne.a(function(t,o){n("AUTH_REQUEST"),console.log(e),F()({url:"/login",data:e,method:"POST"}).then(function(e){var o="Bearer "+e.data.auth.access_token;console.log(o),localStorage.setItem("user-token",o),F.a.defaults.headers.common.Authorization=o,n("AUTH_SUCCESS",e),a("USER_REQUEST"),t(e)}).catch(function(t){n("AUTH_ERROR",t),localStorage.removeItem("user-token"),o(t)})})}),te()(Wt,"AUTH_LOGOUT",function(t){var e=t.commit;t.dispatch;return new ne.a(function(t,n){e("AUTH_LOGOUT"),localStorage.removeItem("user-token"),t()})}),Wt),he=(Jt={},te()(Jt,"AUTH_REQUEST",function(t){t.status="loading"}),te()(Jt,"AUTH_SUCCESS",function(t,e){t.status="success",t.token="Bearer "+e.data.auth.access_token,t.hasLoadedOnce=!0}),te()(Jt,"AUTH_ERROR",function(t){t.status="error",t.hasLoadedOnce=!0}),te()(Jt,"AUTH_LOGOUT",function(t){t.token=""}),Jt),ge={state:pe,getters:fe,actions:ve,mutations:he};m.a.use(f.a);var be=new f.a.Store({modules:{user:ue,auth:ge},strict:!0});m.a.use(D.a);var _e=function(t,e,n){if(!be.getters.isAuthenticated)return void n();n("/")},xe=function(t,e,n){if(be.getters.isAuthenticated)return void n();n("/login")},we=new D.a({mode:"history",routes:[{path:"/",name:"Home",component:Vt},{path:"/account",name:"Account",component:Yt,beforeEnter:xe},{path:"/login",name:"Login",component:Lt,beforeEnter:_e}]}),Ce={name:"loading",props:{},components:{},data:function(){return{}}},ke=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loader loader--style2"},[n("svg",{staticStyle:{"enable-background":"new 0 0 50 50"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 50 50","xml:space":"preserve"}},[n("path",{attrs:{fill:"#000",d:"M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"}},[n("animateTransform",{attrs:{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"}})],1)])])},ye=[];ke._withStripped=!0;var Ee={render:ke,staticRenderFns:ye},Se=Ee,Ue=!1,Ae=n("VU/8"),Re=d,Te=Ae(Ce,Se,!1,Re,"data-v-6428c8d2",null);Te.options.__file="src/components/lib/loading.vue";var Le=Te.exports,Oe={name:"center-container"},$e=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},Pe=[];$e._withStripped=!0;var Fe={render:$e,staticRenderFns:Pe},je=Fe,He=!1,Ne=n("VU/8"),Ie=c,Qe=Ne(Oe,je,!1,Ie,"data-v-896ab43a",null);Qe.options.__file="src/components/lib/center-container.vue";var Ve=Qe.exports;if(F.a.defaults.baseURL="https://aws.techthatinterest.com/api",void 0==F.a.defaults.headers.common.Authorization){var ze=localStorage.getItem("user-token");F.a.defaults.headers.common.Authorization=ze}m.a.config.productionTip=!1,m.a.component("loading",Le),m.a.component("center-container",Ve),new m.a({el:"#app",router:we,store:be,template:"<App/>",components:{App:G}})},NdeB:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,'\n.form-signin[data-v-70c98a68] {\nheight: 100%;\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: auto;\n}\n.form-signin .checkbox[data-v-70c98a68] {\n  font-weight: 400;\n}\n.form-signin .form-control[data-v-70c98a68] {\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px;\n}\n.form-signin .form-control[data-v-70c98a68]:focus {\n  z-index: 2;\n}\n.form-signin input[type="email"][data-v-70c98a68] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-signin input[type="password"][data-v-70c98a68] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n   \n\n  \n',""])},QMUH:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},Ry4p:function(t,e,n){var a=n("3Gu/");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("24e09985",a,!1,{})},"ae1/":function(t,e,n){var a=n("QMUH");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("22d26efe",a,!1,{})},ki2I:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n",""])},"mRr/":function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},mbQi:function(t,e,n){var a=n("NdeB");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("3abdd08d",a,!1,{})},wITD:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,'\n#largetextarea{\n   resize: 100%;\n  outline: none;\n  width: 100%;\n  border: none;\n  height: 100%;\n}\n@media (max-width: 767px) {\n.modal.modal-fullscreen, .bootstrap-fs-modal .modal {\n     -webkit-box-shadow: 0px 0px 0px 100px white;\n             box-shadow: 0px 0px 0px 100px white;\n}\n.modal.modal-fullscreen .modal-dialog, .bootstrap-fs-modal .modal .modal-dialog {\n     margin: 0;\n     height: 100%;\n     max-width: 100%;\n}\n.modal.modal-fullscreen .modal-dialog .modal-content, .bootstrap-fs-modal .modal .modal-dialog .modal-content {\n     border-style: none;\n     border-radius: 0;\n     height: 100%;\n}\n.modal.modal-fullscreen .modal-dialog .modal-content .modal-header, .bootstrap-fs-modal .modal .modal-dialog .modal-content .modal-header {\n     -webkit-box-pack: start;\n         -ms-flex-pack: start;\n             justify-content: flex-start;\n     min-height: 50px;\n     line-height: 50px;\n     padding: 0;\n     background-color:white;\n}\n.modal.modal-fullscreen .modal-dialog .modal-content .modal-header .modal-title, .bootstrap-fs-modal .modal .modal-dialog .modal-content .modal-header .modal-title {\n     white-space: nowrap;\n     line-height: 50px;\n     font-size: 1.1rem;\n     padding-bottom: 10px;\n}\n.modal.modal-fullscreen .modal-dialog .modal-content .modal-header .close, .bootstrap-fs-modal .modal .modal-dialog .modal-content .modal-header .close {\n     float: none;\n     -webkit-box-ordinal-group: 0;\n         -ms-flex-order: -1;\n             order: -1;\n     margin: 0;\n     padding: 0;\n     margin-right: 12px;\n     height: 50px;\n     color: transparent;\n     text-shadow: none;\n     opacity: 1;\n}\n.modal.modal-fullscreen .modal-dialog .modal-content .modal-header .close:before, .bootstrap-fs-modal .modal .modal-dialog .modal-content .modal-header .close:before {\n     border-style: solid;\n     border-color: #007bff;\n     border-width: 0.15em 0.15em 0 0;\n     content: \'\';\n     display: inline-block;\n     height: 0.5em;\n     left: 0.55em;\n     position: relative;\n     top: 0.28em;\n     -webkit-transform: rotate(-45deg);\n             transform: rotate(-45deg);\n     vertical-align: top;\n     width: 0.5em;\n     -webkit-transform: rotate(-135deg);\n             transform: rotate(-135deg);\n}\n.modal.modal-fullscreen .modal-dialog .modal-content .modal-footer, .bootstrap-fs-modal .modal .modal-dialog .modal-content .modal-footer {\n     position: absolute;\n     top: 0;\n     right: 0;\n     padding: 0;\n     margin: 0 10px 0 0;\n     height: 50px;\n     min-height: 50px;\n     line-height: 50px;\n     background-color: white;\n}\n.modal.modal-fullscreen .modal-dialog .modal-content .modal-footer .btn, .bootstrap-fs-modal .modal .modal-dialog .modal-content .modal-footer .btn {\n     border: none;\n     background-color: transparent;\n     margin: 0 0 0 10px;\n     padding: 0;\n     outline: none;\n     -webkit-box-shadow: none;\n             box-shadow: none;\n     font-size: 1.0rem;\n     color: #007bff;\n}\n.modal.modal-fullscreen .modal-dialog .modal-content .modal-footer .btn:hover, .modal.modal-fullscreen .modal-dialog .modal-content .modal-footer .btn:active, .bootstrap-fs-modal .modal .modal-dialog .modal-content .modal-footer .btn:hover, .bootstrap-fs-modal .modal .modal-dialog .modal-content .modal-footer .btn:active {\n     text-decoration: underline;\n}\n.modal.modal-fullscreen .modal-dialog .modal-content .modal-footer .btn[data-dismiss="modal"], .bootstrap-fs-modal .modal .modal-dialog .modal-content .modal-footer .btn[data-dismiss="modal"] {\n     display: none;\n}\n.modal.modal-fullscreen .modal-dialog .modal-content .modal-footer .material-icons, .bootstrap-fs-modal .modal .modal-dialog .modal-content .modal-footer .material-icons {\n     vertical-align: middle;\n}\n.modal.modal-fullscreen .modal-dialog .modal-content .modal-footer .fa, .bootstrap-fs-modal .modal .modal-dialog .modal-content .modal-footer .fa {\n     vertical-align: middle;\n     font-size: 1.25em;\n}\n.modal.modal-fullscreen .modal-dialog .modal-content .modal-body, .bootstrap-fs-modal .modal .modal-dialog .modal-content .modal-body {\n     -ms-flex-negative: 3;\n         flex-shrink: 3;\n     overflow: auto;\n     -webkit-overflow-scrolling: touch;\n}\n.modal.modal-fullscreen-bottom-footer .modal-dialog .modal-content .modal-footer, .modal-fullscreen-bottom-footer .modal .modal-dialog .modal-content .modal-footer {\n     position: inherit;\n     top: inherit;\n     right: inherit;\n     padding: 15px;\n     margin: 0;\n}\n.modal.modal-fullscreen-bottom-footer .modal-dialog .modal-content .modal-footer .btn, .modal-fullscreen-bottom-footer .modal .modal-dialog .modal-content .modal-footer .btn {\n     margin: 0 0 0 18px;\n}\n}\n@media (min-width: 768px) {\n.modal.modal-fullscreen .modal-dialog .modal-content, .bootstrap-fs-modal .modal .modal-dialog .modal-content {\n     max-height: calc(100vh - 60px);\n}\n.modal.modal-fullscreen .modal-dialog .modal-content .modal-body, .bootstrap-fs-modal .modal .modal-dialog .modal-content .modal-body {\n     -ms-flex-negative: 3;\n         flex-shrink: 3;\n     overflow: auto;\n     -webkit-overflow-scrolling: touch;\n}\n}\n\n',""])}},["NHnr"]);
//# sourceMappingURL=app.c1ccdc0707887a57dc07.js.map