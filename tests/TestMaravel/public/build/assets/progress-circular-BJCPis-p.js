import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as p,o as n,b as r,bc as o,r as _,E as f,bj as y,e as a,s,t as d,l as t,f as h,d as l}from"./main-7JdyGFby.js";import{_ as z}from"./AppCardCode-CUjMQLDl.js";import{V as w,a as m}from"./VRow-GpmvwSSA.js";import"./vue3-perfect-scrollbar-BTKqCwUF.js";import"./VCard-D0LXqtBI.js";import"./VAvatar-sg7CZdU7.js";import"./VImg-Bk3huQTU.js";import"./VCardText-DYTBPo8J.js";import"./VDivider-CIpTZ8Ni.js";/* empty css              */const x={},$={class:"demo-space-x"};function I(u,i){return n(),p("div",$,[r(o,{size:30,width:"3",color:"primary",indeterminate:""}),r(o,{size:40,color:"primary",indeterminate:""}),r(o,{size:50,color:"primary",indeterminate:""}),r(o,{size:60,color:"primary",indeterminate:""})])}const B=g(x,[["render",I]]),D={class:"demo-space-x"},b={__name:"DemoProgressCircularRotate",setup(u){const i=_(),e=_(0);return f(()=>{i.value=setInterval(()=>{if(e.value===100)return e.value=0;e.value+=10},1e3)}),y(()=>{clearInterval(i.value)}),(v,c)=>(n(),p("div",D,[r(o,{rotate:360,size:70,width:6,"model-value":t(e),color:"primary"},{default:a(()=>[s(d(t(e)),1)]),_:1},8,["model-value"]),r(o,{rotate:90,size:70,width:6,"model-value":t(e),color:"primary"},{default:a(()=>[s(d(t(e)),1)]),_:1},8,["model-value"]),r(o,{rotate:170,size:70,width:6,"model-value":t(e),color:"primary"},{default:a(()=>[s(d(t(e)),1)]),_:1},8,["model-value"]),r(o,{rotate:-90,size:70,width:6,"model-value":t(e),color:"primary"},{default:a(()=>[s(d(t(e)),1)]),_:1},8,["model-value"])]))}},j={},R={class:"demo-space-x"};function U(u,i){return n(),p("div",R,[r(o,{indeterminate:"",color:"primary"}),r(o,{indeterminate:"",color:"secondary"}),r(o,{indeterminate:"",color:"success"}),r(o,{indeterminate:"",color:"info"}),r(o,{indeterminate:"",color:"warning"}),r(o,{indeterminate:"",color:"error"})])}const k=g(j,[["render",U]]),M={},N={class:"demo-space-x"};function S(u,i){return n(),p("div",N,[r(o,{"model-value":"50",color:"primary"}),r(o,{"model-value":"50",color:"secondary"}),r(o,{"model-value":"50",color:"success"}),r(o,{"model-value":"50",color:"info"}),r(o,{"model-value":"50",color:"warning"}),r(o,{"model-value":"50",color:"error"})])}const T=g(M,[["render",S]]),A={ts:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      model-value="50"
      color="primary"
    />

    <VProgressCircular
      model-value="50"
      color="secondary"
    />

    <VProgressCircular
      model-value="50"
      color="success"
    />

    <VProgressCircular
      model-value="50"
      color="info"
    />

    <VProgressCircular
      model-value="50"
      color="warning"
    />

    <VProgressCircular
      model-value="50"
      color="error"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      model-value="50"
      color="primary"
    />

    <VProgressCircular
      model-value="50"
      color="secondary"
    />

    <VProgressCircular
      model-value="50"
      color="success"
    />

    <VProgressCircular
      model-value="50"
      color="info"
    />

    <VProgressCircular
      model-value="50"
      color="warning"
    />

    <VProgressCircular
      model-value="50"
      color="error"
    />
  </div>
</template>
`},E={ts:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      indeterminate
      color="primary"
    />

    <VProgressCircular
      indeterminate
      color="secondary"
    />

    <VProgressCircular
      indeterminate
      color="success"
    />

    <VProgressCircular
      indeterminate
      color="info"
    />

    <VProgressCircular
      indeterminate
      color="warning"
    />

    <VProgressCircular
      indeterminate
      color="error"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      indeterminate
      color="primary"
    />

    <VProgressCircular
      indeterminate
      color="secondary"
    />

    <VProgressCircular
      indeterminate
      color="success"
    />

    <VProgressCircular
      indeterminate
      color="info"
    />

    <VProgressCircular
      indeterminate
      color="warning"
    />

    <VProgressCircular
      indeterminate
      color="error"
    />
  </div>
</template>
`},q={ts:`<script setup lang="ts">
const interval = ref()
const progressValue = ref(0)

onMounted(() => {
  interval.value = setInterval(() => {
    if (progressValue.value === 100)
      return progressValue.value = 0
    progressValue.value += 10
  }, 1000)
})

onBeforeUnmount(() => {
  clearInterval(interval.value)
})
<\/script>

<template>
  <div class="demo-space-x">
    <VProgressCircular
      :rotate="360"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="170"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="-90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>
  </div>
</template>
`,js:`<script setup>
const interval = ref()
const progressValue = ref(0)

onMounted(() => {
  interval.value = setInterval(() => {
    if (progressValue.value === 100)
      return progressValue.value = 0
    progressValue.value += 10
  }, 1000)
})
onBeforeUnmount(() => {
  clearInterval(interval.value)
})
<\/script>

<template>
  <div class="demo-space-x">
    <VProgressCircular
      :rotate="360"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="170"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="-90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>
  </div>
</template>
`},F={ts:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      :size="30"
      width="3"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="40"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="50"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="60"
      color="primary"
      indeterminate
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      :size="30"
      width="3"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="40"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="50"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="60"
      color="primary"
      indeterminate
    />
  </div>
</template>
`},rr={__name:"progress-circular",setup(u){return(i,e)=>{const v=T,c=z,V=k,C=b,P=B;return n(),h(w,{class:"match-height"},{default:a(()=>[r(m,{cols:"12",md:"6"},{default:a(()=>[r(c,{title:"color",code:t(A)},{default:a(()=>[e[0]||(e[0]=l("p",null,[s("Alternate colors can be applied to "),l("code",null,"v-progress-circular"),s(" using the "),l("code",null,"color"),s(" prop.")],-1)),r(v)]),_:1,__:[0]},8,["code"])]),_:1}),r(m,{cols:"12",md:"6"},{default:a(()=>[r(c,{title:"Indeterminate",code:t(E)},{default:a(()=>[e[1]||(e[1]=l("p",null,[s("Using the "),l("code",null,"indeterminate"),s(" prop, a "),l("code",null,"v-progress-circular"),s(" continues to animate indefinitely.")],-1)),r(V)]),_:1,__:[1]},8,["code"])]),_:1}),r(m,{cols:"12",md:"6"},{default:a(()=>[r(c,{title:"Rotate",code:t(q)},{default:a(()=>[e[2]||(e[2]=l("p",null,[s("The "),l("code",null,"rotate"),s(" prop gives you the ability to customize the "),l("code",null,"v-progress-circular"),s("'s origin.")],-1)),r(C)]),_:1,__:[2]},8,["code"])]),_:1}),r(m,{cols:"12",md:"6"},{default:a(()=>[r(c,{title:"Size",code:t(F)},{default:a(()=>[e[3]||(e[3]=l("p",null,[s("The "),l("code",null,"size"),s(" and "),l("code",null,"width"),s(" props allow you to easily alter the size and width of the "),l("code",null,"v-progress-circular"),s(" component.")],-1)),r(P)]),_:1,__:[3]},8,["code"])]),_:1})]),_:1})}}};export{rr as default};
