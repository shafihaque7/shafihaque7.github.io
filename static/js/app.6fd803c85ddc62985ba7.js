webpackJsonp([1],{"/Doo":function(n,t,e){var a=e("wITD");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("54279fb6",a,!1,{})},"/ZWz":function(n,t,e){var a=e("Z31V");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("45cd9c8d",a,!1,{})},"/qS7":function(n,t,e){var a=e("xcKf");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("62d18afc",a,!1,{})},"3Gu/":function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n",""])},"8gwm":function(n,t,e){var a=e("K4Pf");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("78542bfc",a,!1,{})},"Ag/I":function(n,t,e){var a=e("mRr/");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("36aed886",a,!1,{})},K4Pf:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,"\n.loader[data-v-6428c8d2]{\n  height: 100px;\n  width: 100%;\n  text-align: center;\n  padding: 1em;\n  margin: 0 auto 1em;\n  display: inline-block;\n  vertical-align: top;\n}\nsvg path[data-v-6428c8d2] {\n  fill: #ffa035;\n}\n",""])},KwyM:function(n,t,e){var a=e("ki2I");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("46c0c15e",a,!1,{})},NHnr:function(n,t,e){"use strict";function a(n){T||e("KwyM")}function o(){return{name:D.a.name.firstName()+" "+D.a.name.lastName(),content:D.a.random.words(20)}}function i(n){tn||e("ae1/")}function r(n){xn||e("/Doo")}function l(n){Tn||e("/qS7")}function s(n){zn||e("mbQi")}function d(n){Wn||e("/ZWz")}function c(n){rt||e("Ag/I")}function m(n){Wt||e("8gwm")}function p(n){re||e("Ry4p")}Object.defineProperty(t,"__esModule",{value:!0});var u=e("7+uW"),f=e("Dd8w"),h=e.n(f),g=e("NYxO"),b={name:"navigation",methods:{logout:function(){var n=this;this.$store.dispatch("AUTH_LOGOUT").then(function(){return n.$router.push("/")})}},computed:h()({},Object(g.b)(["getProfile","isAuthenticated","isProfileLoaded"]),Object(g.c)({authLoading:function(n){return"loading"===n.auth.status},name:function(n){return n.user.profile.title+" "+n.user.profile.name}}))},v=function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.isAuthenticated?e("div",[e("a",{attrs:{href:"#"},on:{click:n.logout}},[e("button",{staticClass:"btn btn-danger float-right",attrs:{type:"button"}},[n._v("Logout")])])]):n._e()},w=[];v._withStripped=!0;var x={render:v,staticRenderFns:w},_=x,y=e("VU/8"),k=y(b,_,!1,null,null,null);k.options.__file="src/components/navigation/index.vue";var S=k.exports,C={name:"sqreen-footer"},E=function(){var n=this,t=n.$createElement;return(n._self._c||t)("div")},A=[];E._withStripped=!0;var U={render:E,staticRenderFns:A},R=U,T=!1,L=e("VU/8"),O=a,N=L(C,R,!1,O,"data-v-62fe346e",null);N.options.__file="src/components/footer/index.vue";var F=N.exports,P=e("mtWM"),I=e.n(P),j={components:{SqreenFooter:F,Navigation:S},name:"app",created:function(){this.$store.getters.isAuthenticated&&this.$store.dispatch("USER_REQUEST")}},H=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},z=[];H._withStripped=!0;var M={render:H,staticRenderFns:z},V=M,B=e("VU/8"),Q=B(j,V,!1,null,null,null);Q.options.__file="src/App.vue";var G=Q.exports,Z=e("/ocq"),q=e("FfS/"),D=e.n(q),K=function(n){for(var t=[],e=1;e<=n;e++)t.push(o());return t}(10),W={name:"feedItem",props:{feed:Object}},J=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"feed-item"},[e("h1",[n._v(n._s(n.feed.name))]),n._v(" "),e("p",[n._v(n._s(n.feed.content))])])},Y=[];J._withStripped=!0;var X={render:J,staticRenderFns:Y},nn=X,tn=!1,en=e("VU/8"),an=i,on=en(W,nn,!1,an,"data-v-52f8aebe",null);on.options.__file="src/components/home/feedItem.vue";var rn=on.exports,ln={name:"contact",data:function(){return{world:"So its working well",contacts:[]}},mounted:function(){var n=this;I.a.get("/contact").then(function(t){n.contacts=t.data.data}).catch(function(t){console.log(t),console.log("came here"),n.$store.dispatch("AUTH_LOGOUT")})},methods:{}},sn=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"contact"},n._l(n.contacts,function(t){return e("div",[n._v("\n      "+n._s(t.fullName)+"\n   ")])}))},dn=[];sn._withStripped=!0;var cn={render:sn,staticRenderFns:dn},mn=cn,pn=e("VU/8"),un=pn(ln,mn,!1,null,null,null);un.options.__file="src/components/home/contact.vue";var fn=un.exports,hn={name:"cards",components:{Navigation:S},data:function(){return{articles:[],sarticles:[],article:{id:"",title:"",body:"",label:"",rows:""},pagination:{},edit:!1,search:"",current_page_url:"",selectedlabel:""}},mounted:function(){var n=this;this.$root.$on("thelabel",function(t){n.selectedlabel=t,n.article.label=t,n.fetchArticles()})},created:function(){this.fetchArticles(),this.$root.$emit("refreshlabel"),0==function(){return void 0!==window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")}()&&console.log("Not mobile device")},methods:{stopEditing:function(){this.edit=!0,$("#modalLarge").modal("hide"),$("body").removeClass("modal-open"),$(".modal-backdrop").remove()},fetchArticles:function(n){var t=this,e="";e=""!=this.selectedlabel?"/articles/"+this.selectedlabel:"/articles","/articles/All Labels"===e&&(e="/articles"),this.current_page_url=n;var a=this;n=n||e,I.a.get(n).then(function(n){var e=n.data;t.articles=e.data,a.makePagination(e.meta,e.links)}).catch(function(n){return console.log(n)})},makePagination:function(n,t){var e={current_page:n.current_page,last_page:n.last_page,next_page_url:t.next,prev_page_url:t.prev};this.pagination=e},deleteArticle:function(n){var t=this;confirm("Are you Sure?")&&I.a.delete("article/"+n).then(function(n){t.fetchArticles(t.current_page_url)}).catch(function(n){return console.log(n)})},clearArticle:function(){$("#modalLarge").modal("show"),this.edit=!1,this.article.id="",this.article.article_id="",this.article.title="",this.article.body="",this.article.rows=10},addArticle:function(){var n=this;0==this.edit?(console.log("It came to add"),this.search="",I.a.post("/article",{title:this.article.title,body:this.article.body,label:this.article.label}).then(function(t){n.edit=!0;var e=t.data.data;n.article.id=e.id,n.fetchArticles(),n.$root.$emit("refreshlabel")}).catch(function(n){return console.log(n)})):(console.log("It came to update"),I.a.put("/article",{article_id:this.article.id,title:this.article.title,body:this.article.body,label:this.article.label}).then(function(t){n.fetchArticles(n.current_page_url),n.$root.$emit("refreshlabel")}).catch(function(n){return console.log(n)}))},editArticle:function(n){$("#modalLarge").modal("show"),this.edit=!0,this.article.id=n.id,this.article.title=n.title,this.article.body=n.body,this.article.label=n.label,this.article.rows=n.rows}},computed:{filteredArticles:function(){var n=this;return this.articles.filter(function(t){return t.title.toLowerCase().match(n.search.toLowerCase())||t.body.toLowerCase().match(n.search.toLowerCase())})}}},gn=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"cards"},[e("button",{staticClass:"btn btn-primary mb-2",attrs:{type:"button"},on:{click:function(t){n.clearArticle()}}},[n._v("Add")]),n._v(" "),e("div",{staticClass:"modal modal-fullscreen",attrs:{id:"modalLarge",tabindex:"-1",role:"dialog","aria-labelledby":"modalLargeLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header mt-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.article.title,expression:"article.title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Title","aria-label":"Title","aria-describedby":"basic-addon1"},domProps:{value:n.article.title},on:{change:n.addArticle,input:function(t){t.target.composing||n.$set(n.article,"title",t.target.value)}}}),n._v(" "),e("button",{staticClass:"close",attrs:{"aria-label":"Close"},on:{click:n.stopEditing}},[e("span",{attrs:{"aria-hidden":"true"}},[n._v("×")])])]),n._v(" "),e("div",{staticClass:"input-group mb-3"},[n._m(0),n._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:n.article.label,expression:"article.label"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Label","aria-label":"Label","aria-describedby":"basic-addon1"},domProps:{value:n.article.label},on:{change:n.addArticle,input:function(t){t.target.composing||n.$set(n.article,"label",t.target.value)}}})]),n._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:n.article.body,expression:"article.body"}],staticClass:"form-control",attrs:{type:"text",id:"largetextarea",rows:n.article.rows,placeholder:"Body"},domProps:{value:n.article.body},on:{change:n.addArticle,input:function(t){t.target.composing||n.$set(n.article,"body",t.target.value)}}}),n._v(" "),e("div",{staticClass:"modal-footer"})])])]),n._v(" "),e("h3",[n._v(" Search ")]),n._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:n.search,expression:"search"}],staticClass:"form-control mb-4 input-lg",attrs:{type:"text",placeholder:"Search in "+n.selectedlabel},domProps:{value:n.search},on:{input:function(t){t.target.composing||(n.search=t.target.value)}}}),n._v(" "),e("div",{staticClass:"row"},n._l(n.filteredArticles,function(t){return e("div",{key:t.id,staticClass:"col-md-3",on:{click:function(e){n.editArticle(t)}}},[e("div",{staticClass:"card mb-3 box-shadow"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[n._v(n._s(t.title))]),n._v(" "),e("p",{staticClass:"card-text"},[n._v(n._s(t.sbody))]),n._v(" "),e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("small",{staticClass:"text-muted"},[n._v(n._s(t.label))]),n._v(" "),e("div",{staticClass:"btn-group"},[e("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button",id:"deleteButton"},on:{click:[function(n){n.stopPropagation()},function(e){n.deleteArticle(t.id)}]}},[n._v("Delete")])])])])])])}))])},bn=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[n._v("@")])])}];gn._withStripped=!0;var vn={render:gn,staticRenderFns:bn},wn=vn,xn=!1,_n=e("VU/8"),yn=r,kn=_n(hn,wn,!1,yn,null,null);kn.options.__file="src/components/home/cards.vue";var Sn=kn.exports,Cn={name:"register",data:function(){return{name:"",email:"",password:""}},methods:{register:function(){var n=this,t=this.name,e=this.email,a=this.password;this.$store.dispatch("AUTH_REGISTER",{name:t,email:e,password:a}).then(function(){n.$router.push("/")})},gotologin:function(){this.$root.$emit("backtologin")}}},En=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"text-center vertical-center"},[e("form",{staticClass:"form-signin",on:{submit:function(t){return t.preventDefault(),n.register(t)}}},[e("h1",{staticClass:"h3 mb-3 font-weight-normal"},[n._v("Altkeep")]),n._v(" "),e("label",{staticClass:"sr-only",attrs:{for:"inputName"}},[n._v("Name")]),n._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:n.name,expression:"name"}],staticClass:"form-control",attrs:{type:"name",id:"inputName",placeholder:"Name",required:""},domProps:{value:n.name},on:{input:function(t){t.target.composing||(n.name=t.target.value)}}}),n._v(" "),e("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[n._v("Email address")]),n._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:n.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:n.email},on:{input:function(t){t.target.composing||(n.email=t.target.value)}}}),n._v(" "),e("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[n._v("Password")]),n._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:n.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:n.password},on:{input:function(t){t.target.composing||(n.password=t.target.value)}}}),n._v(" "),e("div",{staticClass:"checkbox mb-3"}),n._v(" "),e("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[n._v("Signup")]),n._v(" "),e("br"),n._v("\n      Already have an account ? "),e("a",{attrs:{href:"#"},on:{click:n.gotologin}},[n._v("Login")]),n._v(" "),e("p",{staticClass:"mt-5 mb-3 text-muted"},[n._v("© 2018-2019")])])])},An=[];En._withStripped=!0;var Un={render:En,staticRenderFns:An},Rn=Un,Tn=!1,Ln=e("VU/8"),$n=l,On=Ln(Cn,Rn,!1,$n,"data-v-ffa6f514",null);On.options.__file="src/components/register/index.vue";var Nn=On.exports,Fn={name:"login",components:{Register:Nn},data:function(){return{email:"",password:"",signup:!1}},mounted:function(){var n=this;this.$root.$on("backtologin",function(){n.signup=!1})},methods:{login:function(){var n=this,t=this.email,e=this.password;this.$store.dispatch("AUTH_REQUEST",{email:t,password:e}).then(function(){n.$router.push("/")})},gotoregister:function(){this.signup=!0}}},Pn=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[n.signup?n._e():e("div",[e("div",{staticClass:"text-center vertical-center"},[e("form",{staticClass:"form-signin",on:{submit:function(t){return t.preventDefault(),n.login(t)}}},[e("h1",{staticClass:"h3 mb-3 font-weight-normal"},[n._v("Altkeep")]),n._v(" "),e("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[n._v("Email address")]),n._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:n.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:n.email},on:{input:function(t){t.target.composing||(n.email=t.target.value)}}}),n._v(" "),e("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[n._v("Password")]),n._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:n.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:n.password},on:{input:function(t){t.target.composing||(n.password=t.target.value)}}}),n._v(" "),e("div",{staticClass:"checkbox mb-3"}),n._v(" "),e("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[n._v("Sign in")]),n._v(" "),e("br"),n._v("\n        Don't have an account ? "),e("a",{attrs:{href:"#"},on:{click:n.gotoregister}},[n._v("Register")]),n._v(" "),e("p",{staticClass:"mt-5 mb-3 text-muted"},[n._v("© 2018-2019")])])])]),n._v(" "),n.signup?e("div",[e("Register")],1):n._e()])},In=[];Pn._withStripped=!0;var jn={render:Pn,staticRenderFns:In},Hn=jn,zn=!1,Mn=e("VU/8"),Vn=s,Bn=Mn(Fn,Hn,!1,Vn,"data-v-70c98a68",null);Bn.options.__file="src/components/login/index.vue";var Qn=Bn.exports,Gn={components:{Login:Qn,FeedItem:rn,contact:fn,cards:Sn,Navigation:S},name:"leftsidebar",data:function(){return{fakeFeed:K,labels:[],selectedlabel:"",search:""}},mounted:function(){var n=this;this.$root.$on("refreshlabel",function(){n.fetchLabels()})},created:function(){this.fetchLabels()},methods:{changeMenu:function(){$("#wrapper").toggleClass("toggled")},fetchLabels:function(){var n=this;I.a.get("/getuniquelabels").then(function(t){n.labels=t.data}).catch(function(n){return console.log(n)})},allLabels:function(){this.selectedlabel="All Labels",this.$root.$emit("thelabel","All Labels"),window.matchMedia("(max-width: 768px)").matches&&this.changeMenu()},clickedLabel:function(n){this.selectedlabel=n,this.$root.$emit("thelabel",n),window.matchMedia("(max-width: 768px)").matches&&this.changeMenu()}},computed:{filteredLabels:function(){var n=this;return this.labels.filter(function(t){return t.label.toLowerCase().match(n.search.toLowerCase())})}}},Zn=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"leftsidebar"},[e("div",{staticClass:"toggled",attrs:{id:"wrapper"}},[e("div",{attrs:{id:"sidebar-wrapper"}},[e("ul",{staticClass:"sidebar-nav"},[n._m(0),n._v(" "),e("li"),n._v(" "),e("li",[e("div",{staticClass:"pl-2 pr-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.search,expression:"search"}],staticClass:"form-control mb-2 mt-2",attrs:{type:"text",placeholder:"Search for a label"},domProps:{value:n.search},on:{input:function(t){t.target.composing||(n.search=t.target.value)}}})])]),n._v(" "),e("li",{class:{active:"All Labels"==n.selectedlabel,"":!(0==n.selectedlabel)}},[e("a",{attrs:{href:"#"},on:{click:n.allLabels}},[n._v("All Labels")])]),n._v(" "),n._l(n.filteredLabels,function(t){return e("li",{class:{active:n.selectedlabel==t.label,"":!(n.selectedlabel==!t.label)}},[e("a",{attrs:{href:"#"},on:{click:function(e){n.clickedLabel(t.label)}}},[n._v(n._s(t.label))])])})],2)]),n._v(" "),e("div",{attrs:{id:"page-content-wrapper"}},[e("div",{staticClass:"container-fluid"},[e("navigation"),n._v(" "),e("a",{staticClass:"btn btn-secondary mb-2",attrs:{href:"#",id:"menu-toggle"},on:{click:n.changeMenu}},[n._v("Toggle Menu")]),n._v(" "),e("cards")],1)])])])},qn=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("li",{staticClass:"sidebar-brand"},[e("a",{attrs:{href:"#"}},[n._v("\n                            Altkeep\n                        ")])])}];Zn._withStripped=!0;var Dn={render:Zn,staticRenderFns:qn},Kn=Dn,Wn=!1,Jn=e("VU/8"),Yn=d,Xn=Jn(Gn,Kn,!1,Yn,null,null);Xn.options.__file="src/components/home/leftsidebar.vue";var nt=Xn.exports,tt={components:{Login:Qn,FeedItem:rn,contact:fn,cards:Sn,Navigation:S,leftsidebar:nt},name:"home",computed:h()({},Object(g.b)(["isAuthenticated","authStatus"]),{loading:function(){return"loading"===this.authStatus&&!this.isAuthenticated}}),data:function(){return{fakeFeed:K}}},et=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[n.loading?e("loading"):n._e(),n._v(" "),n.isAuthenticated?e("div",[e("leftsidebar")],1):n._e(),n._v(" "),n.isAuthenticated||"loading"===n.authStatus?n._e():e("div",[e("login")],1)],1)},at=[];et._withStripped=!0;var ot={render:et,staticRenderFns:at},it=ot,rt=!1,lt=e("VU/8"),st=c,dt=lt(tt,it,!1,st,null,null);dt.options.__file="src/components/home/index.vue";var ct=dt.exports,mt={name:"account",computed:Object(g.c)({profile:function(n){return n.user.profile}})},pt=function(){var n=this,t=n.$createElement;return(n._self._c||t)("div")},ut=[];pt._withStripped=!0;var ft={render:pt,staticRenderFns:ut},ht=ft,gt=e("VU/8"),bt=gt(mt,ht,!1,null,null,null);bt.options.__file="src/components/account/index.vue";var vt,wt,xt,_t=bt.exports,yt=e("bOdI"),kt=e.n(yt),St=e("//Fk"),Ct=e.n(St),Et=e("+6Bu"),At=e.n(Et),Ut={auth:{POST:{token:"This-is-a-mocked-token"}},"user/me":{GET:{name:"doggo",title:"sir"}}},Rt=function(n){var t=n.url,e=n.method;At()(n,["url","method"]);return new Ct.a(function(n,a){setTimeout(function(){try{n(Ut[t][e||"GET"])}catch(n){a(new Error(n))}},1e3)})},Tt=Rt,Lt={status:"",profile:{}},$t={getProfile:function(n){return n.profile},isProfileLoaded:function(n){return!!n.profile.name}},Ot=kt()({},"USER_REQUEST",function(n){var t=n.commit,e=n.dispatch;t("USER_REQUEST"),Tt({url:"user/me"}).then(function(n){t("USER_SUCCESS",n)}).catch(function(n){t("USER_ERROR"),e("AUTH_LOGOUT")})}),Nt=(vt={},kt()(vt,"USER_REQUEST",function(n){n.status="loading"}),kt()(vt,"USER_SUCCESS",function(n,t){n.status="success",u.a.set(n,"profile",t)}),kt()(vt,"USER_ERROR",function(n){n.status="error"}),kt()(vt,"AUTH_LOGOUT",function(n){n.profile={}}),vt),Ft={state:Lt,getters:$t,actions:Ot,mutations:Nt},Pt={token:localStorage.getItem("user-token")||"",status:"",hasLoadedOnce:!1},It={isAuthenticated:function(n){return!!n.token},authStatus:function(n){return n.status}},jt=(wt={},kt()(wt,"AUTH_REQUEST",function(n,t){var e=n.commit,a=n.dispatch;return new Ct.a(function(n,o){e("AUTH_REQUEST"),console.log(t),I()({url:"/login",data:t,method:"POST"}).then(function(t){var o="Bearer "+t.data.auth.access_token;console.log(o),localStorage.setItem("user-token",o),I.a.defaults.headers.common.Authorization=o,e("AUTH_SUCCESS",t),a("USER_REQUEST"),n(t)}).catch(function(n){e("AUTH_ERROR",n),localStorage.removeItem("user-token"),o(n)})})}),kt()(wt,"AUTH_REGISTER",function(n,t){var e=n.commit,a=n.dispatch;return new Ct.a(function(n,o){e("AUTH_REQUEST"),console.log(t),I()({url:"/register",data:t,method:"POST"}).then(function(t){var o="Bearer "+t.data.auth.access_token;console.log(o),localStorage.setItem("user-token",o),I.a.defaults.headers.common.Authorization=o,e("AUTH_SUCCESS",t),a("USER_REQUEST"),n(t)}).catch(function(n){e("AUTH_ERROR",n),localStorage.removeItem("user-token"),o(n)})})}),kt()(wt,"AUTH_LOGOUT",function(n){var t=n.commit;n.dispatch;return new Ct.a(function(n,e){t("AUTH_LOGOUT"),localStorage.removeItem("user-token"),n()})}),wt),Ht=(xt={},kt()(xt,"AUTH_REQUEST",function(n){n.status="loading"}),kt()(xt,"AUTH_SUCCESS",function(n,t){n.status="success",n.token="Bearer "+t.data.auth.access_token,n.hasLoadedOnce=!0}),kt()(xt,"AUTH_ERROR",function(n){n.status="error",n.hasLoadedOnce=!0}),kt()(xt,"AUTH_LOGOUT",function(n){n.token=""}),xt),zt={state:Pt,getters:It,actions:jt,mutations:Ht};u.a.use(g.a);var Mt=new g.a.Store({modules:{user:Ft,auth:zt},strict:!0});u.a.use(Z.a);var Vt=function(n,t,e){if(!Mt.getters.isAuthenticated)return void e();e("/")},Bt=function(n,t,e){if(Mt.getters.isAuthenticated)return void e();e("/login")},Qt=new Z.a({mode:"history",routes:[{path:"/",name:"Home",component:ct},{path:"/account",name:"Account",component:_t,beforeEnter:Bt},{path:"/login",name:"Login",component:Qn,beforeEnter:Vt},{path:"/register",name:"Register",component:Nn,beforeEnter:Vt}]}),Gt={name:"loading",props:{},components:{},data:function(){return{}}},Zt=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"loader loader--style2"},[e("svg",{staticStyle:{"enable-background":"new 0 0 50 50"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 50 50","xml:space":"preserve"}},[e("path",{attrs:{fill:"#000",d:"M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"}},[e("animateTransform",{attrs:{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"}})],1)])])},qt=[];Zt._withStripped=!0;var Dt={render:Zt,staticRenderFns:qt},Kt=Dt,Wt=!1,Jt=e("VU/8"),Yt=m,Xt=Jt(Gt,Kt,!1,Yt,"data-v-6428c8d2",null);Xt.options.__file="src/components/lib/loading.vue";var ne=Xt.exports,te={name:"center-container"},ee=function(){var n=this,t=n.$createElement;return(n._self._c||t)("div")},ae=[];ee._withStripped=!0;var oe={render:ee,staticRenderFns:ae},ie=oe,re=!1,le=e("VU/8"),se=p,de=le(te,ie,!1,se,"data-v-896ab43a",null);de.options.__file="src/components/lib/center-container.vue";var ce=de.exports;if(I.a.defaults.baseURL="https://gcp.techthatinterest.com/api",void 0==I.a.defaults.headers.common.Authorization){var me=localStorage.getItem("user-token");I.a.defaults.headers.common.Authorization=me}u.a.config.productionTip=!1,u.a.component("loading",ne),u.a.component("center-container",ce),new u.a({el:"#app",router:Qt,store:Mt,template:"<App/>",components:{App:G}})},NdeB:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,'\n.form-signin[data-v-70c98a68] {\nheight: 100%;\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: auto;\n}\n.form-signin .checkbox[data-v-70c98a68] {\n  font-weight: 400;\n}\n.form-signin .form-control[data-v-70c98a68] {\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px;\n}\n.form-signin .form-control[data-v-70c98a68]:focus {\n  z-index: 2;\n}\n.form-signin input[type="email"][data-v-70c98a68] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-signin input[type="password"][data-v-70c98a68] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.vertical-center[data-v-70c98a68] {\n  min-height: 100%;  /* Fallback for browsers do NOT support vh unit */\n  min-height: 100vh; /* These two lines are counted as one :-)       */\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n   \n\n  \n',""])},QMUH:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},Ry4p:function(n,t,e){var a=e("3Gu/");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("24e09985",a,!1,{})},Z31V:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    /*!\n    * Start Bootstrap - Simple Sidebar (https://startbootstrap.com/template-overviews/simple-sidebar)\n    * Copyright 2013-2017 Start Bootstrap\n    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-simple-sidebar/blob/master/LICENSE)\n    */\nli.active{\n      background-color: #696969;\n}\nbody {\n  overflow-x: hidden;\n}\n#wrapper {\n  padding-left: 0;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n#wrapper.toggled {\n  padding-left: 250px;\n}\n#sidebar-wrapper {\n  z-index: 1000;\n  position: fixed;\n  left: 250px;\n  width: 0;\n  height: 100%;\n  margin-left: -250px;\n  overflow-y: auto;\n  background: #000;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n#wrapper.toggled #sidebar-wrapper {\n  width: 250px;\n}\n#page-content-wrapper {\n  width: 100%;\n  position: absolute;\n  padding: 15px;\n}\n#wrapper.toggled #page-content-wrapper {\n  position: absolute;\n  margin-right: -250px;\n}\n\n\n/* Sidebar Styles */\n.sidebar-nav {\n  position: absolute;\n  top: 0;\n  width: 250px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.sidebar-nav li {\n  text-indent: 20px;\n  line-height: 40px;\n}\n.sidebar-nav li a {\n  display: block;\n  text-decoration: none;\n  color: #999999;\n}\n.sidebar-nav li a:hover {\n  text-decoration: none;\n  color: #fff;\n  background: rgba(255, 255, 255, 0.2);\n}\n.sidebar-nav li a:active, .sidebar-nav li a:focus {\n  text-decoration: none;\n}\n.sidebar-nav>.sidebar-brand {\n  height: 65px;\n  font-size: 18px;\n  line-height: 60px;\n}\n.sidebar-nav>.sidebar-brand a {\n  color: #999999;\n}\n.sidebar-nav>.sidebar-brand a:hover {\n  color: #fff;\n  background: none;\n}\n@media(min-width:768px) {\n#wrapper {\n    padding-left: 0;\n}\n#wrapper.toggled {\n    padding-left: 250px;\n}\n#sidebar-wrapper {\n    width: 0;\n}\n#wrapper.toggled #sidebar-wrapper {\n    width: 250px;\n}\n#page-content-wrapper {\n    padding: 20px;\n    position: relative;\n}\n#wrapper.toggled #page-content-wrapper {\n    position: relative;\n    margin-right: 0;\n}\n}\n@media (max-width: 768px) {\n#wrapper {\n      padding-left: 250px;\n}\n#wrapper.toggled {\n        padding-left: 0px;\n}\n#sidebar-wrapper {\n       width: 250;\n}\n#wrapper.toggled #sidebar-wrapper {\n       width: 0px;\n}\n#wrapper #sidebar-wrapper {\n       width: 250px;\n}\n}\n\n\n    \n   \n   \n   ",""])},"ae1/":function(n,t,e){var a=e("QMUH");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("22d26efe",a,!1,{})},ki2I:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n",""])},"mRr/":function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n   /*!\n * Start Bootstrap - Simple Sidebar (https://startbootstrap.com/template-overviews/simple-sidebar)\n * Copyright 2013-2017 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-simple-sidebar/blob/master/LICENSE)\n */\nli.active{\n   background-color: #696969;\n}\nbody {\n  overflow-x: hidden;\n}\n#wrapper {\n  padding-left: 0;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n#wrapper.toggled {\n  padding-left: 250px;\n}\n#sidebar-wrapper {\n  z-index: 1000;\n  position: fixed;\n  left: 250px;\n  width: 0;\n  height: 100%;\n  margin-left: -250px;\n  overflow-y: auto;\n  background: #000;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n#wrapper.toggled #sidebar-wrapper {\n  width: 250px;\n}\n#page-content-wrapper {\n  width: 100%;\n  position: absolute;\n  padding: 15px;\n}\n#wrapper.toggled #page-content-wrapper {\n  position: absolute;\n  margin-right: -250px;\n}\n\n\n/* Sidebar Styles */\n.sidebar-nav {\n  position: absolute;\n  top: 0;\n  width: 250px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.sidebar-nav li {\n  text-indent: 20px;\n  line-height: 40px;\n}\n.sidebar-nav li a {\n  display: block;\n  text-decoration: none;\n  color: #999999;\n}\n.sidebar-nav li a:hover {\n  text-decoration: none;\n  color: #fff;\n  background: rgba(255, 255, 255, 0.2);\n}\n.sidebar-nav li a:active, .sidebar-nav li a:focus {\n  text-decoration: none;\n}\n.sidebar-nav>.sidebar-brand {\n  height: 65px;\n  font-size: 18px;\n  line-height: 60px;\n}\n.sidebar-nav>.sidebar-brand a {\n  color: #999999;\n}\n.sidebar-nav>.sidebar-brand a:hover {\n  color: #fff;\n  background: none;\n}\n@media(min-width:768px) {\n#wrapper {\n    padding-left: 0;\n}\n#wrapper.toggled {\n    padding-left: 250px;\n}\n#sidebar-wrapper {\n    width: 0;\n}\n#wrapper.toggled #sidebar-wrapper {\n    width: 250px;\n}\n#page-content-wrapper {\n    padding: 20px;\n    position: relative;\n}\n#wrapper.toggled #page-content-wrapper {\n    position: relative;\n    margin-right: 0;\n}\n}\n\n\n",""])},mbQi:function(n,t,e){var a=e("NdeB");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("3abdd08d",a,!1,{})},wITD:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n   /* .modal-content{\n      width: 600px;\n      margin: auto;\n   } */\n#largetextarea{\n   resize: 100%;\n  outline: none;\n  width: 100%;\n  border: none;\n  height: 100%;\n}\n@media (max-width: 767px) {\n.modal.modal-fullscreen, .bootstrap-fs-modal .modal {\n     -webkit-box-shadow: 0px 0px 0px 100px white;\n             box-shadow: 0px 0px 0px 100px white;\n}\n.modal.modal-fullscreen .modal-dialog, .bootstrap-fs-modal .modal .modal-dialog {\n     margin: 0;\n     height: 100%;\n     max-width: 100%;\n}\n.modal.modal-fullscreen .modal-dialog .modal-content, .bootstrap-fs-modal .modal .modal-dialog .modal-content {\n     border-style: none;\n     border-radius: 0;\n     height: 100%;\n}\n.modal.modal-fullscreen .modal-dialog .modal-content .modal-header, .bootstrap-fs-modal .modal .modal-dialog .modal-content .modal-header {\n     -webkit-box-pack: start;\n         -ms-flex-pack: start;\n             justify-content: flex-start;\n     min-height: 50px;\n     line-height: 50px;\n     padding: 0;\n     background-color:white;\n}\n.modal.modal-fullscreen .modal-dialog .modal-content .modal-header .modal-title, .bootstrap-fs-modal .modal .modal-dialog .modal-content .modal-header .modal-title {\n     white-space: nowrap;\n     line-height: 50px;\n     font-size: 1.1rem;\n     padding-bottom: 10px;\n}\n.modal.modal-fullscreen .modal-dialog .modal-content .modal-header .close, .bootstrap-fs-modal .modal .modal-dialog .modal-content .modal-header .close {\n     float: none;\n     -webkit-box-ordinal-group: 0;\n         -ms-flex-order: -1;\n             order: -1;\n     margin: 0;\n     padding: 0;\n     margin-right: 20px;\n     height: 50px;\n     color: transparent;\n     text-shadow: none;\n     opacity: 1;\n}\n.modal.modal-fullscreen .modal-dialog .modal-content .modal-header .close:before, .bootstrap-fs-modal .modal .modal-dialog .modal-content .modal-header .close:before {\n     border-style: solid;\n     border-color: #007bff;\n     border-width: 0.15em 0.15em 0 0;\n     content: \'\';\n     display: inline-block;\n     height: 0.5em;\n     left: 0.55em;\n     position: relative;\n     top: 0.28em;\n     -webkit-transform: rotate(-45deg);\n             transform: rotate(-45deg);\n     vertical-align: top;\n     width: 0.5em;\n     -webkit-transform: rotate(-135deg);\n             transform: rotate(-135deg);\n}\n.modal.modal-fullscreen .modal-dialog .modal-content .modal-footer, .bootstrap-fs-modal .modal .modal-dialog .modal-content .modal-footer {\n     position: absolute;\n     top: 0;\n     right: 0;\n     padding: 0;\n     margin: 0 10px 0 0;\n     height: 50px;\n     min-height: 50px;\n     line-height: 50px;\n     background-color: white;\n}\n.modal.modal-fullscreen .modal-dialog .modal-content .modal-footer .btn, .bootstrap-fs-modal .modal .modal-dialog .modal-content .modal-footer .btn {\n     border: none;\n     background-color: transparent;\n     margin: 0 0 0 10px;\n     padding: 0;\n     outline: none;\n     -webkit-box-shadow: none;\n             box-shadow: none;\n     font-size: 1.0rem;\n     color: #007bff;\n}\n.modal.modal-fullscreen .modal-dialog .modal-content .modal-footer .btn:hover, .modal.modal-fullscreen .modal-dialog .modal-content .modal-footer .btn:active, .bootstrap-fs-modal .modal .modal-dialog .modal-content .modal-footer .btn:hover, .bootstrap-fs-modal .modal .modal-dialog .modal-content .modal-footer .btn:active {\n     text-decoration: underline;\n}\n.modal.modal-fullscreen .modal-dialog .modal-content .modal-footer .btn[data-dismiss="modal"], .bootstrap-fs-modal .modal .modal-dialog .modal-content .modal-footer .btn[data-dismiss="modal"] {\n     display: none;\n}\n.modal.modal-fullscreen .modal-dialog .modal-content .modal-footer .material-icons, .bootstrap-fs-modal .modal .modal-dialog .modal-content .modal-footer .material-icons {\n     vertical-align: middle;\n}\n.modal.modal-fullscreen .modal-dialog .modal-content .modal-footer .fa, .bootstrap-fs-modal .modal .modal-dialog .modal-content .modal-footer .fa {\n     vertical-align: middle;\n     font-size: 1.25em;\n}\n.modal.modal-fullscreen .modal-dialog .modal-content .modal-body, .bootstrap-fs-modal .modal .modal-dialog .modal-content .modal-body {\n     -ms-flex-negative: 3;\n         flex-shrink: 3;\n     overflow: auto;\n     -webkit-overflow-scrolling: touch;\n}\n.modal.modal-fullscreen-bottom-footer .modal-dialog .modal-content .modal-footer, .modal-fullscreen-bottom-footer .modal .modal-dialog .modal-content .modal-footer {\n     position: inherit;\n     top: inherit;\n     right: inherit;\n     padding: 15px;\n     margin: 0;\n}\n.modal.modal-fullscreen-bottom-footer .modal-dialog .modal-content .modal-footer .btn, .modal-fullscreen-bottom-footer .modal .modal-dialog .modal-content .modal-footer .btn {\n     margin: 0 0 0 18px;\n}\n}\n@media (min-width: 768px) {\n.modal.modal-fullscreen .modal-dialog .modal-content, .bootstrap-fs-modal .modal .modal-dialog .modal-content {\n     max-height: calc(100vh - 60px);\n}\n.modal.modal-fullscreen .modal-dialog .modal-content .modal-body, .bootstrap-fs-modal .modal .modal-dialog .modal-content .modal-body {\n     -ms-flex-negative: 3;\n         flex-shrink: 3;\n     overflow: auto;\n     -webkit-overflow-scrolling: touch;\n}\n}\n\n',""])},xcKf:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,'\n.form-signin[data-v-ffa6f514] {\nheight: 100%;\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: auto;\n}\n.form-signin .checkbox[data-v-ffa6f514] {\n  font-weight: 400;\n}\n.form-signin .form-control[data-v-ffa6f514] {\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px;\n}\n.form-signin .form-control[data-v-ffa6f514]:focus {\n  z-index: 2;\n}\n.form-signin input[type="email"][data-v-ffa6f514] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-signin input[type="password"][data-v-ffa6f514] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.vertical-center[data-v-ffa6f514] {\n  min-height: 100%;  /* Fallback for browsers do NOT support vh unit */\n  min-height: 100vh; /* These two lines are counted as one :-)       */\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n   \n\n  \n',""])}},["NHnr"]);
//# sourceMappingURL=app.6fd803c85ddc62985ba7.js.map