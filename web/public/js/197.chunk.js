(self.webpackChunkisland_install_front=self.webpackChunkisland_install_front||[]).push([[197],{7577:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a(7294);const l=function(e){return n.createElement("div",{className:"input-cmp-container"},n.createElement("div",{className:"input-cmp-content"},e.label?n.createElement("div",{className:"input-cmp-label"},n.createElement("label",{className:"input-label"},e.label)):null,n.createElement("div",{className:"input-context"},n.createElement("input",{type:e.type||"text",className:"".concat(e.inputErr?"input-border-hl":""," input-cmp-input"),value:e.value,onChange:function(){e.change&&e.change(event.target.value)},onBlur:blur,placeholder:e.placeholder||"请输入"}),e.inputErr?n.createElement("div",{className:"input-cmp-error"},n.createElement("p",null,e.inputErr)):null)))}},2263:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Z});var n=a(8390),l=a(7294),s=a(7577),c=a(282),r=a(2387),i=a(6134),o=a(1581),m=a(5932),d=a(381),u=a.n(d),p=a(3411),h=a(5347),j=a(9669),E=a.n(j),f=a(4494),v=a(8623),y=a(4313),b=a(9525),g=a(6856);const k=function(e){var t=(0,l.useState)(""),a=(0,n.Z)(t,2),s=a[0],r=a[1],i=(0,l.useState)("dsfdsfdfdsfdsf"),o=(0,n.Z)(i,2),m=o[0],d=o[1];(0,l.useEffect)((function(){e.open&&("view"==e.type?d(e.data.value||""):"edit"===e.type&&r(e.data.value||""))}),[e.open]);var u=function(){e.close()};return l.createElement(v.Z,{open:e.open,close:u,"aria-labelledby":"upload-file-title"},l.createElement(y.Z,null,e.title),l.createElement(b.Z,null,l.createElement("section",{className:"workload-dialog"},"view"===e.type?l.createElement("div",{className:"workdialog-view"},l.createElement("pre",{className:"preview-pre"},m)):"edit"===e.type?l.createElement("div",{className:"workdialog-edit"},l.createElement("textarea",{className:"textarea-input",value:s,onChange:function(e){r(e.target.value)}})):null)),l.createElement(g.Z,null,l.createElement(c.Z,{className:"common-btn",color:"primary",onClick:u},"关闭"),"edit"===e.type?l.createElement(c.Z,{className:"common-btn",color:"primary",onClick:function(){e.confirm(s)}},"保存"):null))},Z=(0,f.$j)((function(e){return e}))((function(e){var t=(0,l.useState)(""),a=(0,n.Z)(t,2),d=a[0],j=a[1],f=(0,l.useState)(""),v=(0,n.Z)(f,2),y=v[0],b=v[1],g=(0,l.useState)([]),Z=(0,n.Z)(g,2),w=Z[0],N=Z[1],S=(0,l.useState)(1),z=(0,n.Z)(S,2),Y=z[0],_=z[1],C=(0,l.useState)(0),M=(0,n.Z)(C,2),x=M[0],D=M[1],T=(0,l.useState)([]),O=(0,n.Z)(T,2),H=O[0],P=O[1],G=(0,l.useState)(1),V=(0,n.Z)(G,2),q=V[0],B=V[1],U=(0,l.useState)(0),F=(0,n.Z)(U,2),I=F[0],L=F[1],$=(0,l.useState)([]),A=(0,n.Z)($,2),J=A[0],K=A[1],Q=(0,l.useState)(1),R=(0,n.Z)(Q,2),W=R[0],X=R[1],ee=(0,l.useState)(0),te=(0,n.Z)(ee,2),ae=te[0],ne=te[1],le=(0,l.useState)(),se=(0,n.Z)(le,2),ce=se[0],re=se[1],ie=Boolean(ce),oe=(0,l.useState)(),me=(0,n.Z)(oe,2),de=me[0],ue=me[1],pe=(0,l.useState)(!1),he=(0,n.Z)(pe,2),je=he[0],Ee=he[1],fe=(0,l.useState)(""),ve=(0,n.Z)(fe,2),ye=ve[0],be=ve[1],ge=(0,l.useState)(""),ke=(0,n.Z)(ge,2),Ze=ke[0],we=ke[1],Ne=(0,l.useState)(""),Se=(0,n.Z)(Ne,2),ze=Se[0],Ye=Se[1],_e=function(){p.Z.dispatch({type:h.br,val:!0}),E()({method:"GET",url:"/api/cluster/traitlist",params:{limit:3,offset:3*(Y-1)}}).then((function(e){0===e.data.code?(D(e.data.result.total||0),N(e.data.result.rows||[])):p.Z.dispatch({type:h.Sn,val:e.data.result||""})})).catch((function(e){console.log(e)})).finally((function(){p.Z.dispatch({type:h.br,val:!1})}))},Ce=function(){p.Z.dispatch({type:h.br,val:!0}),E()({method:"GET",url:"/api/cluster/workloadlist",params:{limit:3,offset:3*(q-1)}}).then((function(e){0===e.data.code?(L(e.data.result.total||0),P(e.data.result.rows||[])):p.Z.dispatch({type:h.Sn,val:e.data.result||""})})).catch((function(e){console.log(e)})).finally((function(){p.Z.dispatch({type:h.br,val:!1})}))},Me=function(){p.Z.dispatch({type:h.br,val:!0}),E()({method:"GET",url:"/api/cluster/vendorlist",params:{limit:3,offset:3*(W-1)}}).then((function(e){0===e.data.code?(ne(e.data.result.total||0),K(e.data.result.rows||[])):p.Z.dispatch({type:h.Sn,val:e.data.result||""})})).catch((function(e){console.log(e)})).finally((function(){p.Z.dispatch({type:h.br,val:!1})}))};(0,l.useEffect)((function(){xe(),_e(),Ce(),Me()}),[]),(0,l.useEffect)((function(){_e()}),[Y]),(0,l.useEffect)((function(){Ce()}),[q]),(0,l.useEffect)((function(){Me()}),[W]);var xe=function(){p.Z.dispatch({type:h.br,val:!0}),E()({method:"GET",url:"/api/cluster/mirror"}).then((function(e){0===e.data.code?j(e.data.result):p.Z.dispatch({type:h.Sn,val:e.data.result}),p.Z.dispatch({type:h.br,val:!1})})).catch((function(e){console.log(e),p.Z.dispatch({type:h.br,val:!1})}))},De=function(e,t){Ye(t),console.log("click type ===",ze),ue(e),console.log("curInstance: ",de),re(event.target)},Te=function(){Ee(!1),we(""),be("")};return l.createElement("div",{className:"page-container workload-container"},l.createElement("div",{className:"page-title"},l.createElement("p",null,"工作负载")),l.createElement("div",{className:"workload-content",style:{display:"none"}},l.createElement("div",{className:"host-input"},l.createElement(s.Z,{change:function(e){b(""),j(e)},inputErr:y,value:d})),l.createElement("div",{className:"host-btn"},l.createElement(c.Z,{variant:"contained",color:"primary",className:"btn-item",onClick:function(){""!=d.trim()?(p.Z.dispatch({type:h.br,val:!0}),E()({method:"POST",url:"/api/cluster/mirror",headers:{"Content-Type":"application/json"},data:{mirror:d}}).then((function(e){p.Z.dispatch({type:h.Sn,val:e.data.result||""}),p.Z.dispatch({type:h.br,val:!1})})).catch((function(e){console.log(e),p.Z.dispatch({type:h.br,val:!1})}))):b("请输入")}},"保存"))),l.createElement("div",{className:"table-list"},l.createElement("p",{className:"table-title"},"trait 管理"),l.createElement("div",{className:"instance-list"},l.createElement("table",{className:"table"},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{width:"7%"},"主键"),l.createElement("th",{width:"10%"},"名称"),l.createElement("th",{width:"30%"},"版本"),l.createElement("th",{width:"8%"},"类型"),l.createElement("th",{width:"15%"},"创建时间"),l.createElement("th",{width:"15%"},"更新时间"),l.createElement("th",{width:"5%"},"操作"))),l.createElement("tbody",{style:{position:"relative"}},w.map((function(e,t){return l.createElement("tr",{key:e.id},l.createElement("td",null,l.createElement("div",{className:"app-td"},e.id)),l.createElement("td",null,e.name||""),l.createElement("td",null,e.apiVersion||""),l.createElement("td",null,e.type?"用户新增":"内置"),l.createElement("td",null,u()(e.created_at).format("YYYY-MM-DD hh:mm:ss")),l.createElement("td",null,u()(e.updated_at).format("YYYY-MM-DD hh:mm:ss")),l.createElement("td",{"data-item":e,onClick:function(){De(e,"trait")}},l.createElement("i",{className:"iconfont icon_navigation_more",style:{cursor:"pointer"}})))})))),l.createElement("div",{className:"pagination-content"},l.createElement(m.Z,{count:Math.ceil(x/3),page:Y,shape:"rounded",onChange:function(e,t){_(t)}})))),l.createElement("div",{className:"table-list"},l.createElement("p",{className:"table-title"},"workloadType 管理"),l.createElement("div",{className:"instance-list"},l.createElement("table",{className:"table"},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{width:"7%"},"主键"),l.createElement("th",{width:"10%"},"名称"),l.createElement("th",{width:"30%"},"版本"),l.createElement("th",{width:"8%"},"类型"),l.createElement("th",{width:"15%"},"创建时间"),l.createElement("th",{width:"15%"},"更新时间"),l.createElement("th",{width:"5%"},"操作"))),l.createElement("tbody",{style:{position:"relative"}},H.map((function(e,t){return l.createElement("tr",{key:e.id},l.createElement("td",null,l.createElement("div",{className:"app-td"},e.id)),l.createElement("td",null,e.name||""),l.createElement("td",null,e.apiVersion||""),l.createElement("td",null,e.type?"用户新增":"内置"),l.createElement("td",null,u()(e.created_at).format("YYYY-MM-DD hh:mm:ss")),l.createElement("td",null,u()(e.updated_at).format("YYYY-MM-DD hh:mm:ss")),l.createElement("td",{"data-item":e,onClick:function(){De(e,"workload")}},l.createElement("i",{className:"iconfont icon_navigation_more",style:{cursor:"pointer"}})))})))),l.createElement("div",{className:"pagination-content"},l.createElement(m.Z,{count:Math.ceil(I/3),page:q,shape:"rounded",onChange:function(e,t){B(t)}})))),l.createElement("div",{className:"table-list"},l.createElement("p",{className:"table-title"},"workloadVendor 管理"),l.createElement("div",{className:"instance-list"},l.createElement("table",{className:"table"},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{width:"7%"},"主键"),l.createElement("th",{width:"10%"},"名称"),l.createElement("th",{width:"30%"},"版本"),l.createElement("th",{width:"8%"},"类型"),l.createElement("th",{width:"15%"},"创建时间"),l.createElement("th",{width:"15%"},"更新时间"),l.createElement("th",{width:"5%"},"操作"))),l.createElement("tbody",{style:{position:"relative"}},J.map((function(e,t){return l.createElement("tr",{key:e.id},l.createElement("td",null,l.createElement("div",{className:"app-td"},e.id)),l.createElement("td",null,e.name||""),l.createElement("td",null,e.apiVersion||""),l.createElement("td",null,e.type?"用户新增":"内置"),l.createElement("td",null,u()(e.created_at).format("YYYY-MM-DD hh:mm:ss")),l.createElement("td",null,u()(e.updated_at).format("YYYY-MM-DD hh:mm:ss")),l.createElement("td",{"data-item":e,onClick:function(){De(e,"vendor")}},l.createElement("i",{className:"iconfont icon_navigation_more",style:{cursor:"pointer"}})))})))),l.createElement("div",{className:"pagination-content"},l.createElement(m.Z,{count:Math.ceil(ae/3),page:W,shape:"rounded",onChange:function(e,t){X(t)}})))),l.createElement(r.ZP,{open:ie,anchorEl:ce,anchorOrigin:{horizontal:"left",vertical:"bottom"},transformOrigin:{horizontal:"right",vertical:"top"},onClose:function(){re(null)}},l.createElement(i.Z,null,l.createElement(o.Z,{key:"1",style:{minHeight:"40px",lineHeight:"40px"},onClick:function(){re(null),Ee(!0),we("view"),be("查看内容")}},l.createElement("div",{className:"staticPopoverMenu"},l.createElement("i",{className:"iconfont icon_view"}),"  查看")),l.createElement(o.Z,{key:"2",style:{minHeight:"40px",lineHeight:"40px"},onClick:function(){re(null),Ee(!0),we("edit"),be("编辑内容")}},l.createElement("div",{className:"staticPopoverMenu"},l.createElement("i",{className:"iconfont icon_daochu"}),"  编辑")),l.createElement(o.Z,{key:"3",style:{minHeight:"40px",lineHeight:"40px"},onClick:function(){re(null),p.Z.dispatch({type:h.br,val:!0});var e="";"trait"===ze?e="/api/cluster/deletetrait":"workload"===ze?e="/api/cluster/deleteworkload":"vendor"===ze?e="/api/cluster/deletevendor":(console.error("--程序错误--无法确定当前点击的是哪个列表类型--"),p.Z.dispatch({type:h.br,val:!1})),E()({method:"GET",url:e,params:{id:de.id}}).then((function(e){0===e.data.code&&("trait"===ze?_e():"workload"===ze?Ce():"vendor"===ze&&Me()),p.Z.dispatch({type:h.Sn,val:e.data.result||""})})).catch((function(e){console.log(e),p.Z.dispatch({type:h.Sn,val:"请求错误"})})).finally((function(){p.Z.dispatch({type:h.br,val:!1})}))}},l.createElement("div",{className:"staticPopoverMenu"},l.createElement("i",{className:"iconfont icon_baseline_delete"}),"  删除")))),l.createElement(k,{open:je,title:ye,type:Ze,data:de,close:Te,confirm:function(e){console.log(e),p.Z.dispatch({type:h.br,val:!0}),console.log("confirm type ===",ze);var t="";"trait"===ze?t="/api/cluster/edittrait?id=".concat(de.id||""):"workload"===ze?t="/api/cluster/editworkload?id=".concat(de.id||""):"vendor"===ze?t="/api/cluster/editvendor?id=".concat(de.id||""):(console.error("--程序错误--无法确定当前点击的是哪个列表类型--"),p.Z.dispatch({type:h.br,val:!1})),E()({url:t,method:"POST",headers:{"Content-Type":"application/json"},data:{value:e}}).then((function(e){0===e.data.code&&(Te(),"trait"===ze?_e():"workload"===ze?Ce():"vendor"===ze&&Me()),p.Z.dispatch({type:h.Sn,val:e.data.result||""})})).catch((function(e){console.error(e),p.Z.dispatch({type:h.Sn,val:"请求错误"})})).finally((function(){p.Z.dispatch({type:h.br,val:!1})}))}}))}))},6700:(e,t,a)=>{var n={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":7093,"./es-do":5251,"./es-do.js":5251,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":7093,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":7060,"./it-ch":150,"./it-ch.js":150,"./it.js":7060,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":9787,"./ky.js":9787,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":238,"./ru.js":238,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5893,"./ss.js":5893,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function l(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=s,e.exports=l,l.id=6700}}]);