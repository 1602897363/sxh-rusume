import{d as s,h as e,r as o,c as a,O as l,P as t,f as n,F as r,Q as i,m as d,Y as c,D as u,R as p,S as g,N as m,Z as h}from"./@vue.28b264ab.js";import{u as f}from"./vuex.d5b9355a.js";import{_ as b}from"./TitleB.80feeb7b.js";import{a as k}from"./ant-design-vue.badc52d7.js";p("data-v-5039d04c");const v={class:"info-box"},C={class:"skill-box"},w={class:"progress-box"};g();var x=s({expose:[],setup(s){h((s=>({"1cc83a2c":u(x)})));const p=f();e("技能特长"),console.log(p.state.user.userInfo.skillList,"skilllist");const g=o(p.state.user.userInfo.skillList),x=a((()=>p.state.app.themeColor)),_=s=>{"add"==s?g.length>10?k.warning("最多允许添加10条记录"):(g.push({skill:"javascript",degreeDesc:"良好",degree:"50"}),j(),k.success("添加成功")):1!=g.length?(g.pop(),j(),k.success("删除成功")):k.warning("至少需要一条数据")},j=()=>{const s=p.state.user.userInfo;s.skillList=g,p.commit("user/setUserInfo",s)};return(s,e)=>{const o=m("a-progress");return l(),t("div",v,[n(b,{title:"基础技能",iconName:"tool",backgroundColor:"#fff",backgroundColorChange:!1,borderColor:"black","font-size":"14px","show-tool":!0,showDelete:!1,"show-set":!1,size:"small",color:"black",onBtnClick:_}),(l(!0),t(r,null,i(u(g),((s,e)=>(l(),t("div",null,[n("div",C,[n("div",null,[d(n("input",{class:"input_dash","onUpdate:modelValue":e=>s.skill=e,onChange:j,style:{width:"5rem"}},null,40,["onUpdate:modelValue"]),[[c,s.skill]])]),n("div",null,[d(n("input",{class:"input_dash","onUpdate:modelValue":e=>s.degreeDesc=e,onChange:j,style:{"text-align":"right",width:"5rem"}},null,40,["onUpdate:modelValue"]),[[c,s.degreeDesc]])])]),n("div",w,[n(o,{percent:s.degree,"show-info":!1,strokeColor:"#9e9494"},null,8,["percent"])])])))),256))])}}});x.__scopeId="data-v-5039d04c";export{x as _};
