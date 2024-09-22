import{a as N,b as x,c as E,d as P,e as T,w as k,x as O}from"./chunk-NQJR2REL.js";import{$a as l,Ca as c,Ea as _,Fb as w,Ga as R,Ia as S,La as D,Pb as I,S as y,U as v,Wa as m,X as A,_ as g,_a as s,aa as p,ab as M,da as C,pa as F,qb as d,xb as u,ya as b,yb as h}from"./chunk-V4XBB2IZ.js";var B=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=p({type:o,selectors:[["app-home"]],standalone:!0,features:[u],decls:2,vars:0,template:function(n,r){n&1&&(s(0,"p"),d(1,"home works!"),l())},encapsulation:2})}return o})();var j=[{path:"",component:B},{path:"strategy",loadChildren:()=>import("./chunk-LFDXSFZ3.js").then(o=>o.routes)},{path:"bridge",loadChildren:()=>import("./chunk-2HD3VFYG.js").then(o=>o.routes)},{path:"**",redirectTo:"",pathMatch:"full"}];var Y="@",Z=(()=>{class o{constructor(e,n,r,i,a){this.doc=e,this.delegate=n,this.zone=r,this.animationType=i,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=g(R,{optional:!0}),this.loadingSchedulerFn=g(G,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-HBRL74DD.js").then(r=>r),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(e):n=e(),n.catch(r=>{throw new y(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:i})=>{this._engine=r(this.animationType,this.doc);let a=new i(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,n){let r=this.delegate.createRenderer(e,n);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let i=new f(r);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let z=a.createRenderer(e,n);i.use(z),this.scheduler?.notify(10)}).catch(a=>{i.use(r)}),i}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(n){_()}}static{this.\u0275prov=v({token:o,factory:o.\u0275fac})}}return o})(),f=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,n,r){this.delegate.insertBefore(t,e,n,r)}removeChild(t,e,n){this.delegate.removeChild(t,e,n)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,n,r){this.delegate.setAttribute(t,e,n,r)}removeAttribute(t,e,n){this.delegate.removeAttribute(t,e,n)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,n,r){this.delegate.setStyle(t,e,n,r)}removeStyle(t,e,n){this.delegate.removeStyle(t,e,n)}setProperty(t,e,n){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(t,e,n)),this.delegate.setProperty(t,e,n)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,n){return this.shouldReplay(e)&&this.replay.push(r=>r.listen(t,e,n)),this.delegate.listen(t,e,n)}shouldReplay(t){return this.replay!==null&&t.startsWith(Y)}},G=new A("");function H(o="animations"){return D("NgAsyncAnimations"),C([{provide:S,useFactory:(t,e,n)=>new Z(t,e,n,o),deps:[I,N,F]},{provide:b,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var U={providers:[w({eventCoalescing:!0}),T(j),H()]};var W=()=>["/"],X=()=>["/strategy"],q=()=>["/bridge"],V=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=p({type:o,selectors:[["app-root"]],standalone:!0,features:[u],decls:9,vars:6,consts:[["mat-flat-button","",3,"routerLink"],[1,"ml-5"],["mat-button","",3,"routerLink"]],template:function(n,r){n&1&&(s(0,"mat-toolbar")(1,"button",0),d(2,"Design Patterns"),l(),s(3,"section",1)(4,"button",2),d(5,"Strategy"),l(),s(6,"button",2),d(7,"Bridge"),l()()(),M(8,"router-outlet")),n&2&&(c(),m("routerLink",h(3,W)),c(3),m("routerLink",h(4,X)),c(2),m("routerLink",h(5,q)))},dependencies:[E,k,O,P],encapsulation:2})}return o})();x(V,U).catch(o=>console.error(o));
