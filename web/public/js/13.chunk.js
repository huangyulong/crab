"use strict";(self.webpackChunkisland_install_front=self.webpackChunkisland_install_front||[]).push([[13],{8013:(e,a,t)=>{t.r(a),t.d(a,{default:()=>m});var n=t(8390),l=t(7294),i=t(4494),s=t(282),c=t(9669),o=t.n(c),r=t(3411),p=t(5347);const m=(0,i.$j)((function(e){return e}))((function(e){var a=(0,l.useState)('apiVersion: aam.globalsphare.com/v1alpha1\nkind: Application\nmetadata:\n  name: example\n  version: 0.0.1\n  description: 样例应用\n  keywords:\n    - 样例应用\n  author: example@example.com\n  maintainers:\n    - email: example@example.com\n      name: example\n      web: https://example.com\n  repositories: ["https://github.com/example/example.git"]\n  bugs: https://github.com/example/example/issues\n  licenses:\n    - type: LGPL\n      url: https://license.spec.com'),t=(0,n.Z)(a,2),i=t[0],c=t[1];return l.createElement("section",{className:"page-container online-container"},l.createElement("div",{className:"page-title"},"创建WorkloadType"),l.createElement("section",{className:"trait-content"},l.createElement("div",{className:"trait-textarea"},l.createElement("textarea",{className:"textarea-input",value:i,onChange:function(e){c(e.target.value)}})),l.createElement("div",{className:"online-btns"},l.createElement(s.Z,{className:"online-btn",variant:"contained",color:"primary",onClick:function(){(""!==i.trim()||(r.Z.dispatch({type:p.Sn,val:"请输入trait内容"}),0))&&(r.Z.dispatch({type:p.br,val:!0}),o()({method:"POST",url:"/api/online/createworkloadtype",data:{value:i},headers:{"Content-Type":"application/json"}}).then((function(e){r.Z.dispatch({type:p.Sn,val:e.data.result})})).catch((function(e){console.log(e),r.Z.dispatch({type:p.Sn,val:"请求错误"})})).finally((function(){r.Z.dispatch({type:p.br,val:!1})})))}},"保存"))))}))}}]);