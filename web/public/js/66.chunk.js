"use strict";(self.webpackChunkisland_install_front=self.webpackChunkisland_install_front||[]).push([[66,858,911],{9678:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(3411),c=a(4494),l=a(5477);const o=(0,c.$j)((function(e){return e}))((function(e){var t=r.Z.getState().common.loading;return n.createElement("div",{className:" circular-progress ".concat(t?"show-progress":"")},n.createElement(l.Z,{size:60,color:"primary"}))}))},6105:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),c=a(6912),l=a(2285),o=a(3411),s=a(5347),i=a(4494),u=function(e){return r.createElement(l.Z,(0,n.Z)({},e,{direction:"up"}))};const m=(0,i.$j)((function(e){return e}))((function(e){return r.createElement("div",{className:"snackbar-container"},r.createElement(c.Z,{open:Boolean(o.Z.getState().common.snackbar),anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:5e3,onClose:function(){o.Z.dispatch({type:s.Sn,val:""})},TransitionComponent:u,message:o.Z.getState().common.snackbar}))}))},66:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(8390),r=a(7294),c=a(4494),l=a(9669),o=a.n(l),s=a(3411),i=a(5347),u=a(9678),m=a(6105);const d=(0,c.$j)((function(e){return e}))((function(e){var t=(0,r.useRef)(null),a=(0,r.useState)(""),c=(0,n.Z)(a,2),l=c[0],d=c[1];(0,r.useEffect)((function(){d(e.match.params.name),p(e.match.params.id)}),[]);var p=function(e){s.Z.dispatch({type:i.br,val:!0}),o()({method:"GET",url:"/api/app/detail",params:{id:e}}).then((function(e){0==e.data.code?t.current.innerText=e.data.result&&e.data.result.value?e.data.result.value:"":s.Z.dispatch({type:i.Sn,val:e.data.result})})).catch((function(e){console.log(e),s.Z.dispatch({type:i.Sn,val:"请求错误"})})).finally((function(){s.Z.dispatch({type:i.br,val:!1})}))};return r.createElement("section",{className:"online-container"},r.createElement("header",{className:"online-header"},r.createElement("div",{className:"header-logo"},"Crab")),r.createElement("div",{className:"online-preview-content"},r.createElement("div",{className:"oltitle"},"查看 ",l," 描述文件"),r.createElement("pre",{className:"olPreview",ref:t})),r.createElement(u.Z,null),r.createElement(m.Z,null))}))}}]);