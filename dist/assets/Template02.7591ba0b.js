import{d as o,h as e,r as a,o as l,O as t,P as n,f as r,D as m,u as s,F as p,Q as c,V as u,R as i,S as d}from"./@vue.28b264ab.js";import{V as b}from"./vue-draggable-next.d9a58e90.js";import{c as v,d as j,e as f}from"./RemoveDrag.009c6866.js";import{u as g}from"./vuex.d5b9355a.js";import{a as k}from"./ant-design-vue.badc52d7.js";import"./TitleB.80feeb7b.js";import"./index.7929adaa.js";import"./vue-router.c777b779.js";import"./@ant-design.19885ab0.js";import"./@ctrl.2e36ce53.js";import"./@babel.8557760c.js";import"./regenerator-runtime.07584f52.js";import"./vue-types.6e6d84ba.js";import"./omit.js.0925d6dc.js";import"./resize-observer-polyfill.8deb1e21.js";import"./lodash-es.0d35bab1.js";import"./moment.08a7f518.js";import"./dom-align.f1b5d360.js";import"./array-tree-filter.ab994813.js";import"./shallow-equal.ba8ca136.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./warning.4abaefa0.js";import"./dom-scroll-into-view.e686d464.js";import"./EductionA.fe76b3c1.js";import"./TitleA.49c095b5.js";import"./AutoTextArea.cbfb7c93.js";import"./WorkExperise.a10a0549.js";import"./AvatarTop2.02895f30.js";import"./Skill1.123836d1.js";import"./BaseInfoRight.39d30224.js";const x=u();i("data-v-51cb3264");const h={class:"temp2-box"},y={class:"temp2-box-head"},N={class:"temp2-box-body"},V={class:"left-box"},C={class:"right-box"};d();var A=o({expose:[],emits:{colorChange:o=>Boolean},setup(o,{emit:u}){e(!1);const i=a([{color:"#284676",background:"background-color:#284676"},{color:"#68412C",background:"background-color:#68412C"},{color:"#13442A",background:"background-color:#13442A"},{color:"#1D6357",background:"background-color:#1D6357"},{color:"#9E552E",background:"background-color:#9E552E"}]),d=e([{componentName:"BaseInfoRight"},{componentName:"Skill02"}]),A=e([{componentName:"EductionA"},{componentName:"WorkExperise"}]),E=e([{componentName:"AvatarTop"}]),R=g(),_=o=>{u("colorChange","ii"),R.commit("app/setThemeColor",o)},T=o=>{const e=d.value;d.value=e.filter((e=>o!=e.componentName));const a=A.value;A.value=a.filter((e=>o!=e.componentName));const l=E.value;E.value=l.filter((e=>o!=e.componentName)),k.success(`删除${o}模块成功!`)};return l((()=>{document.body.style.setProperty("--rs-bgcolor-1",i[0].color)})),(o,e)=>(t(),n(p,null,[r("div",h,[r("div",y,[r(m(b),{modelValue:E.value,"onUpdate:modelValue":e[1]||(e[1]=o=>E.value=o),group:{name:"people",pull:"clone",put:!0},sort:!0},{default:x((()=>[r(s,null,{default:x((()=>[(t(!0),n(p,null,c(E.value,(o=>(t(),n("div",{key:o},[r(v,{"component-name":o.componentName,onRemoveComps:T},null,8,["component-name"])])))),128))])),_:1})])),_:1},8,["modelValue"])]),r("div",N,[r("div",V,[r(m(b),{modelValue:d.value,"onUpdate:modelValue":e[2]||(e[2]=o=>d.value=o),group:{name:"people",pull:"clone",put:!0},sort:!0},{default:x((()=>[r(s,null,{default:x((()=>[(t(!0),n(p,null,c(d.value,(o=>(t(),n("div",{key:o},[r(v,{"component-name":o.componentName,onRemoveComps:T},null,8,["component-name"])])))),128))])),_:1})])),_:1},8,["modelValue"])]),r("div",C,[r(m(b),{modelValue:A.value,"onUpdate:modelValue":e[3]||(e[3]=o=>A.value=o),group:{name:"people",pull:"clone",put:!0},sort:!0},{default:x((()=>[r(s,null,{default:x((()=>[(t(!0),n(p,null,c(A.value,(o=>(t(),n("div",{key:o},[r(v,{"component-name":o.componentName,onRemoveComps:T},null,8,["component-name"])])))),128))])),_:1})])),_:1},8,["modelValue"])])])]),r(j,{onRemoveComponent:T}),r(f,{onChangeTheme:_,colors:m(i)},null,8,["colors"])],64))}});A.__scopeId="data-v-51cb3264";export default A;
