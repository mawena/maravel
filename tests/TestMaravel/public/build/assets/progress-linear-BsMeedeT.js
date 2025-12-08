import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as g,o as m,b as e,b9 as t,r as f,aU as V,l as n,e as s,d as o,t as L,f as y,E as B,bj as k,w as $,s as l}from"./main-7JdyGFby.js";import{_ as M}from"./AppCardCode-CUjMQLDl.js";import{V as x,a as v}from"./VRow-GpmvwSSA.js";import"./vue3-perfect-scrollbar-BTKqCwUF.js";import"./VCard-D0LXqtBI.js";import"./VAvatar-sg7CZdU7.js";import"./VImg-Bk3huQTU.js";import"./VCardText-DYTBPo8J.js";import"./VDivider-CIpTZ8Ni.js";/* empty css              */const I={},D={class:"demo-space-y"};function U(p,a){return m(),g("div",D,[e(t,{color:"rgb(var(--v-theme-primary))","model-value":"75",striped:""}),e(t,{color:"rgb(var(--v-theme-success))","model-value":"55",striped:""}),e(t,{color:"rgb(var(--v-theme-warning))","model-value":"35",striped:""})])}const j=_(I,[["render",U]]),T={class:"demo-space-y"},R={__name:"DemoProgressLinearSlots",setup(p){const a=f(20),r=f(33),u=f(78);return(i,c)=>(m(),g("div",T,[e(t,{modelValue:n(u),"onUpdate:modelValue":c[0]||(c[0]=d=>V(u)?u.value=d:null),color:"primary",height:"8"},null,8,["modelValue"]),e(t,{modelValue:n(a),"onUpdate:modelValue":c[1]||(c[1]=d=>V(a)?a.value=d:null),color:"primary",height:"20"},{default:s(({value:d})=>[o("span",null,L(Math.ceil(d))+"%",1)]),_:1},8,["modelValue"]),e(t,{modelValue:n(r),"onUpdate:modelValue":c[2]||(c[2]=d=>V(r)?r.value=d:null),height:"20",color:"primary"},{default:s(()=>[o("span",null,L(Math.ceil(n(r)))+"%",1)]),_:1},8,["modelValue"])]))}},C={},S={class:"demo-space-y"};function N(p,a){return m(),g("div",S,[e(t,{"model-value":"78",height:"8",color:"primary",rounded:!1}),e(t,{"model-value":"20",color:"primary",height:"20",rounded:!1}),e(t,{"model-value":"33",height:"20",color:"primary",rounded:!1})])}const E=_(C,[["render",N]]),Y={};function A(p,a){return m(),y(t,{color:"primary",indeterminate:"",reverse:""})}const q=_(Y,[["render",A]]),z={};function F(p,a){return m(),y(t,{indeterminate:"",color:"primary"})}const G=_(z,[["render",F]]),H={class:"demo-space-y"},J={__name:"DemoProgressLinearBuffering",setup(p){const a=f(10),r=f(20),u=f(),i=()=>{clearInterval(u.value),u.value=setInterval(()=>{a.value+=Math.random()*10+5,r.value+=Math.random()*10+6},2e3)};return B(i),k(()=>{clearInterval(u.value)}),$(a,()=>{if(a.value<100)return!1;a.value=0,r.value=10,i()}),(c,d)=>(m(),g("div",H,[e(t,{modelValue:n(a),"onUpdate:modelValue":d[0]||(d[0]=h=>V(a)?a.value=h:null),color:"primary","buffer-value":n(r)},null,8,["modelValue","buffer-value"])]))}},K={},O={class:"demo-space-y"};function Q(p,a){return m(),g("div",O,[e(t,{"model-value":"15",color:"primary"}),e(t,{"model-value":"30",color:"secondary"}),e(t,{"model-value":"45",color:"success"})])}const W=_(K,[["render",Q]]),X={ts:`<script setup lang="ts">
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)

  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)

onBeforeUnmount(() => {
  clearInterval(interval.value)
})

watch(modelValue, () => {
  if (modelValue.value < 100)
    return false

  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      :buffer-value="bufferValue"
    />
  </div>
</template>
`,js:`<script setup>
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)
  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)
onBeforeUnmount(() => {
  clearInterval(interval.value)
})
watch(modelValue, () => {
  if (modelValue.value < 100)
    return false
  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      :buffer-value="bufferValue"
    />
  </div>
</template>
`},Z={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      color="success"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      color="success"
    />
  </div>
</template>
`},ee={ts:`<template>
  <VProgressLinear
    indeterminate
    color="primary"
  />
</template>
`,js:`<template>
  <VProgressLinear
    indeterminate
    color="primary"
  />
</template>
`},re={ts:`<template>
  <VProgressLinear
    color="primary"
    indeterminate
    reverse
  />
</template>
`,js:`<template>
  <VProgressLinear
    color="primary"
    indeterminate
    reverse
  />
</template>
`},oe={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="78"
      height="8"
      color="primary"
      :rounded="false"
    />

    <VProgressLinear
      model-value="20"
      color="primary"
      height="20"
      :rounded="false"
    />

    <VProgressLinear
      model-value="33"
      height="20"
      color="primary"
      :rounded="false"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="78"
      height="8"
      color="primary"
      :rounded="false"
    />

    <VProgressLinear
      model-value="20"
      color="primary"
      height="20"
      :rounded="false"
    />

    <VProgressLinear
      model-value="33"
      height="20"
      color="primary"
      :rounded="false"
    />
  </div>
</template>
`},le={ts:`<script setup lang="ts">
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <span>{{ Math.ceil(value) }}%</span>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <span>{{ Math.ceil(knowledge) }}%</span>
    </VProgressLinear>
  </div>
</template>
`,js:`<script setup>
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <span>{{ Math.ceil(value) }}%</span>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <span>{{ Math.ceil(knowledge) }}%</span>
    </VProgressLinear>
  </div>
</template>
`},ae={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      color="rgb(var(--v-theme-primary))"
      model-value="75"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-success))"
      model-value="55"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-warning))"
      model-value="35"
      striped
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      color="rgb(var(--v-theme-primary))"
      model-value="75"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-success))"
      model-value="55"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-warning))"
      model-value="35"
      striped
    />
  </div>
</template>
`},_e={__name:"progress-linear",setup(p){return(a,r)=>{const u=W,i=M,c=J,d=G,h=q,P=E,b=R,w=j;return m(),y(x,{class:"match-height"},{default:s(()=>[e(v,{cols:"12",md:"6"},{default:s(()=>[e(i,{title:"Color",code:n(Z)},{default:s(()=>[r[0]||(r[0]=o("p",null,[l("Use the props "),o("code",null,"color"),l(" and "),o("code",null,"background-color"),l(" to set colors.")],-1)),e(u)]),_:1,__:[0]},8,["code"])]),_:1}),e(v,{cols:"12",md:"6"},{default:s(()=>[e(i,{title:"Buffering",code:n(X)},{default:s(()=>[r[1]||(r[1]=o("p",null,[l("The primary value is controlled by "),o("code",null,"v-model"),l(", whereas the buffer is controlled by the "),o("code",null,"buffer-value"),l(" prop.")],-1)),e(c)]),_:1,__:[1]},8,["code"])]),_:1}),e(v,{cols:"12",md:"6"},{default:s(()=>[e(i,{title:"Indeterminate",code:n(ee)},{default:s(()=>[r[2]||(r[2]=o("p",null,[l("for continuously animating progress bar,use prop "),o("code",null,"indeterminate"),l(". This indicates continuous process. ")],-1)),e(d)]),_:1,__:[2]},8,["code"])]),_:1}),e(v,{cols:"12",md:"6"},{default:s(()=>[e(i,{title:"Reversed",code:n(re)},{default:s(()=>[r[3]||(r[3]=o("p",null,[l("Use prop "),o("code",null,"reverse"),l(" to animate continuously in reverse direction. The component also has RTL support.")],-1)),e(h)]),_:1,__:[3]},8,["code"])]),_:1}),e(v,{cols:"12",md:"6"},{default:s(()=>[e(i,{title:"Rounded",code:n(oe)},{default:s(()=>[r[4]||(r[4]=o("p",null,[l(" The "),o("code",null," rounded "),l("prop is used to apply a border radius to the v-progress-linear component. By default we have set "),o("code",null,"rounded"),l(" prop true. You can disable it by using "),o("code",null,":rounded='false'"),l(". ")],-1)),e(P)]),_:1,__:[4]},8,["code"])]),_:1}),e(v,{cols:"12",md:"6"},{default:s(()=>[e(i,{title:"Slots",code:n(le)},{default:s(()=>[r[5]||(r[5]=o("p",null,[l("The v-progress-linear component will be responsive to user input when using "),o("code",null,"v-model"),l(". You can use the default slot or bind a local model to display inside of the progress.")],-1)),e(b)]),_:1,__:[5]},8,["code"])]),_:1}),e(v,{cols:"12",md:"6"},{default:s(()=>[e(i,{title:"Striped",code:n(ae)},{default:s(()=>[r[6]||(r[6]=o("p",null,[l(" The "),o("code",null,"striped"),l(" prop is used to apply striped background.")],-1)),e(w)]),_:1,__:[6]},8,["code"])]),_:1})]),_:1})}}};export{_e as default};
