import{r as e}from"./index.7929adaa.js";import o from"./Template01.d5054cb1.js";import t from"./html2canvas.30423597.js";import{M as a}from"./jspdf.bb29a5a9.js";import{u as l}from"./vuex.d5b9355a.js";import{d as i,O as n,P as s,f as r,R as m,S as d,N as p,c,X as u,D as f,h as v,U as b,u as g,F as h,Q as y,V as x,q as w,o as j}from"./@vue.28b264ab.js";import k from"./Template02.7591ba0b.js";import T from"./Template03.6f1a9de9.js";import N from"./Template04.cbaa4fcd.js";import{V as _}from"./vue-draggable-next.d9a58e90.js";import{_ as C,a as S,b as I}from"./RemoveDrag.009c6866.js";import{_ as R}from"./EductionA.fe76b3c1.js";import{_ as W}from"./WorkExperise.a10a0549.js";import{a as P,b as z,_ as A}from"./AvatarTop2.02895f30.js";import{_ as B}from"./Skill1.123836d1.js";import{_ as E,a as O}from"./BaseInfoRight.39d30224.js";import{o as D,Z as U,a5 as q,i as M}from"./@ant-design.19885ab0.js";import{M as V,a as H}from"./ant-design-vue.badc52d7.js";import"./vue-router.c777b779.js";import"./@babel.8557760c.js";import"./regenerator-runtime.07584f52.js";import"./vue-types.6e6d84ba.js";import"./omit.js.0925d6dc.js";import"./resize-observer-polyfill.8deb1e21.js";import"./lodash-es.0d35bab1.js";import"./moment.08a7f518.js";import"./dom-align.f1b5d360.js";import"./array-tree-filter.ab994813.js";import"./shallow-equal.ba8ca136.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./warning.4abaefa0.js";import"./dom-scroll-into-view.e686d464.js";import"./@ctrl.2e36ce53.js";import"./fflate.fca59393.js";import"./TitleB.80feeb7b.js";import"./AutoTextArea.cbfb7c93.js";import"./TitleA.49c095b5.js";m("data-v-12bb5867");const J={class:"left-side-tool-box"},L={class:"content-box"},$=r("div",null,"导出",-1),F=r("div",null,"添加",-1),Q=r("div",null,"预览",-1);d();var X=i({expose:[],emits:{exportPdf:()=>Boolean,openAddModal:()=>Boolean,previewPdf:()=>Boolean},setup(e,{emit:o}){const t=()=>{o("exportPdf")},a=()=>{o("openAddModal")},l=()=>{o("previewPdf")};return(e,o)=>{const i=p("rs-svg-icon");return n(),s("div",J,[r("div",L,[r("div",{class:"icon-item",onClick:t},[r(i,{name:"exportIcon",showTool:!1,hoverEffect:!1,color:"black",width:"15px"}),$]),r("div",{class:"icon-item",onClick:a},[r(i,{name:"add",showTool:!1,hoverEffect:!1,color:"black",width:"18px"}),F]),r("div",{class:"icon-item",onClick:l},[r(i,{name:"preview2",showTool:!1,hoverEffect:!1,color:"black",width:"18px"}),Q])])])}}});X.__scopeId="data-v-12bb5867",m("data-v-f15c3fb8");const Z={class:"drag-item-box"},G={class:"drag-item"};d();var K=i({expose:[],props:{componentName:{type:String,default:"JobIntension"},titleType:{type:String,default:"title-01"},titleWidth:{type:String,default:"100%"},titleSize:{type:String,default:"normal"},dragType:{type:String,default:"content"}},emits:{removeComps:e=>Boolean},setup(e,{emit:o}){const t=e,a=c((()=>t.titleType)),l=c((()=>t.titleWidth)),i=c((()=>t.titleSize)),m=e=>{o("removeComps",e)};return c((()=>"content"==t.dragType?"drag-box":"drag-box-display")),(e,o)=>(n(),s("div",Z,[r("div",G,["AvatarTop"==t.componentName?(n(),s(P,{key:0})):u("",!0),"AvatarTop2"==t.componentName?(n(),s(z,{key:1})):u("",!0),"Avatar"==t.componentName?(n(),s(A,{key:2})):u("",!0),"PersonInfo"==t.componentName?(n(),s(E,{key:3})):u("",!0),"BaseInfoRight"==t.componentName?(n(),s(O,{key:4})):u("",!0),"Skill1"==t.componentName?(n(),s(B,{key:5})):u("",!0),"Skill02"==t.componentName?(n(),s(C,{key:6})):u("",!0),"JobIntension"==t.componentName?(n(),s(S,{key:7,titleType:f(a),titleWidth:f(l),titleSize:f(i),onRemove:m},null,8,["titleType","titleWidth","titleSize"])):u("",!0),"Education"==t.componentName?(n(),s(R,{key:8,titleType:f(a),titleWidth:f(l),titleSize:f(i),onRemove:m},null,8,["titleType","titleWidth","titleSize"])):u("",!0),"WorkExperience"==t.componentName?(n(),s(W,{key:9,titleType:f(a),titleWidth:f(l),titleSize:f(i),onRemove:m},null,8,["titleType","titleWidth","titleSize"])):u("",!0),"OpenSourcePro"==t.componentName?(n(),s(I,{key:10,titleType:f(a),titleWidth:f(l),titleSize:f(i),onRemove:m},null,8,["titleType","titleWidth","titleSize"])):u("",!0)])]))}});K.__scopeId="data-v-f15c3fb8";const Y=x();m("data-v-ab12d934");const ee={class:"comps-box"},oe={style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},te=w("取消"),ae=w("确认");d();var le=i({expose:[],props:{visible:{type:Boolean,default:!1}},emits:{changeDrawer:e=>Boolean},setup(e,{emit:o}){const t=e;v("top"),v("All");const a=v([{componentName:"JobIntension"},{componentName:"Education"},{componentName:"WorkExperience"},{componentName:"OpenSourcePro"},{componentName:"Skill02"},{componentName:"BaseInfoRight"},{componentName:"AvatarTop"},{componentName:"AvatarTop2"}]),l=c((()=>t.visible)),i=e=>{o("changeDrawer",e)},m=()=>{o("changeDrawer",!1)};return(e,o)=>{const t=p("a-button"),d=p("a-drawer");return n(),s(d,{title:"自定义模块",placement:"left",closable:!0,mask:!1,width:"500px",visible:f(l),"onUpdate:visible":o[2]||(o[2]=e=>b(l)?l.value=e:null),"after-visible-change":i,onClose:m},{default:Y((()=>[r("div",ee,[r(f(_),{modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=e=>a.value=e),group:{name:"people",pull:"clone",put:!0},sort:!0},{default:Y((()=>[r(g,null,{default:Y((()=>[(n(!0),s(h,null,y(a.value,(e=>(n(),s("div",{key:e},[r(K,{"component-name":e.componentName},null,8,["component-name"])])))),128))])),_:1})])),_:1},8,["modelValue"])]),r("div",oe,[r(t,{style:{"margin-right":"8px"},onClick:m},{default:Y((()=>[te])),_:1}),r(t,{type:"primary",onClick:m},{default:Y((()=>[ae])),_:1})])])),_:1},8,["visible"])}}});le.__scopeId="data-v-ab12d934";const ie=x();m("data-v-5864bef1");const ne={class:"preview-tool-box"},se=w("缩小"),re=w("放大"),me=w("下载");d();var de=i({expose:[],emits:{enlarge:e=>Boolean},setup(e,{emit:o}){const t=()=>{o("enlarge","zoomOut")},a=()=>{o("enlarge","zoomIn")},l=()=>{o("enlarge","downloadPdf")};return(e,o)=>{const i=p("a-tooltip");return n(),s("div",ne,[r(i,null,{title:ie((()=>[se])),default:ie((()=>[r(f(D),{class:"tool-icon-item",onClick:a})])),_:1}),r(i,null,{title:ie((()=>[re])),default:ie((()=>[r(f(U),{class:"tool-icon-item",onClick:t})])),_:1}),r(i,null,{title:ie((()=>[me])),default:ie((()=>[r(f(q),{class:"tool-icon-item",onClick:l})])),_:1})])}}});de.__scopeId="data-v-5864bef1";const pe=x();m("data-v-e043d206");const ce={class:"box"},ue={class:"modal-img-box"},fe={style:{position:"absolute",right:"300px"}};d();var ve=i({expose:[],setup(i){const m=l();v("1");const d=v(!0),b=v(),g=v(0),h=v(!1),y=v("340px"),x=v("476px");c((()=>(console.log(e.currentRoute.value.query,"currentRoute"),e.currentRoute.value.query.name)));const w=v(""),_=v(!1),C=()=>{V.confirm({title:"确认导出pdf文件?",icon:r(M),content:"",onOk:()=>new Promise(((e,o)=>{R(),e("success")})).catch((()=>console.log("下载出错!"))),onCancel(){}})},S=()=>{_.value=!0},I=e=>{_.value=e},R=()=>new Promise(((e,o)=>{window.scrollTo({top:0});const l=document.getElementById("resume");document.getElementById("main"),null==l||l.offsetWidth,null==l||l.offsetHeight,t(l,{height:null==l?void 0:l.offsetHeight,width:null==l?void 0:l.offsetWidth,useCORS:!0,allowTaint:!0}).then((e=>{const o=new a,t=e.toDataURL();o.addImage(t,"image/jpeg",0,0,210,297),o.save("resume.pdf")}))})),W=()=>{window.scrollTo({top:0}),h.value=!0,A()},P=()=>{h.value=!1},z=e=>{if("downloadPdf"==e)return void C();const o=y.value.split("px"),t=x.value.split("px");let a=0,l=0;"zoomOut"==e?(a=1.2*Number(o[0]),l=1.2*Number(t[0])):"zoomIn"==e&&(a=Number(o[0])/1.2,l=Number(t[0])/1.2),a>800?H.info("已放到最大!"):a<200?H.info("已放到最小!"):(y.value=`${a}px`,x.value=`${l}px`)};function A(){return new Promise(((e,o)=>{const a=document.getElementById("resume");null==a||a.offsetWidth,null==a||a.offsetHeight,t(a,{height:null==a?void 0:a.offsetHeight,width:null==a?void 0:a.offsetWidth}).then((o=>{w.value=o.toDataURL()+"",e("success")}))}))}j((async()=>{console.log("onMounted"),console.log(m.state.user.userInfo,"store resume 111"),window.scrollTo({top:0}),await A(),setTimeout((()=>{A(),console.log("刷新")}),300),setTimeout((()=>{d.value=!1}),1e3)}));const B=()=>{window.scrollTo({top:0}),A()},E=c((()=>e.currentRoute.value.query.name));return(e,t)=>{const a=p("a-modal");return n(),s("div",{class:"rs-edit-box",id:"main",key:g.value},[r(X,{onExportPdf:C,onOpenAddModal:S,onPreviewPdf:W}),r(le,{visible:_.value,onChangeDrawer:I},null,8,["visible"]),r("div",ce,[r("div",{class:"rs-edit",id:"resume",ref:b},["resume-01"==f(E)?(n(),s(o,{key:0,onColorChange:B})):u("",!0),"resume-02"==f(E)?(n(),s(k,{key:1,onColorChange:B})):u("",!0),"resume-03"==f(E)?(n(),s(T,{key:2,onColorChange:B})):u("",!0),"resume-04"==f(E)?(n(),s(N,{key:3,onColorChange:B})):u("",!0)],512)]),r(a,{visible:h.value,"onUpdate:visible":t[1]||(t[1]=e=>h.value=e),title:"预览",onOk:P,width:"100%",height:"100vh",wrapClassName:"full-modal"},{default:pe((()=>[r("div",ue,[r("div",fe,[r(de,{onEnlarge:z})]),r("img",{src:w.value,style:[{border:"1px #c8bdbd solid"},{width:y.value,height:x.value}]},null,12,["src"])])])),_:1},8,["visible"])])}}});ve.__scopeId="data-v-e043d206";export default ve;