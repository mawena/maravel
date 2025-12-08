import{V as d}from"./VSwitch-Cnwy1QP1.js";import{r as m,c as v,o as w,b as l,aU as p,l as o,f as b,e as r,s as c,bc as O,d as i,t as L,F as f,h as y}from"./main-7JdyGFby.js";import{_ as $}from"./AppCardCode-CUjMQLDl.js";import{V as D,a as S}from"./VRow-GpmvwSSA.js";import"./VInput-U8KQD51r.js";import"./form-BuGlugVy.js";import"./VImg-Bk3huQTU.js";import"./VSelectionControl-lb_mBfMr.js";import"./vue3-perfect-scrollbar-BTKqCwUF.js";import"./VCard-D0LXqtBI.js";import"./VAvatar-sg7CZdU7.js";import"./VCardText-DYTBPo8J.js";import"./VDivider-CIpTZ8Ni.js";/* empty css              */const U={class:"demo-space-x"},C={__name:"DemoSwitchStates",setup(h){const t=m("on"),e=m("on"),n=m(!0);return(s,a)=>(w(),v("div",U,[l(d,{modelValue:o(t),"onUpdate:modelValue":a[0]||(a[0]=u=>p(t)?t.value=u:null),value:"on",label:"On"},null,8,["modelValue"]),l(d,{label:"Off"}),l(d,{modelValue:o(e),"onUpdate:modelValue":a[1]||(a[1]=u=>p(e)?e.value=u:null),value:"on",disabled:"",label:"On disabled"},null,8,["modelValue"]),l(d,{disabled:"",label:"Off disabled"}),l(d,{modelValue:o(n),"onUpdate:modelValue":a[2]||(a[2]=u=>p(n)?n.value=u:null),loading:"warning",label:`${o(n)?"On":"Off"} loading`},null,8,["modelValue","label"])]))}},T={class:"demo-space-x"},J={__name:"DemoSwitchTrueAndFalseValue",setup(h){const t=m(1),e=m("Show");return(n,s)=>(w(),v("div",T,[l(d,{modelValue:o(t),"onUpdate:modelValue":s[0]||(s[0]=a=>p(t)?t.value=a:null),label:o(t).toString(),"true-value":1,"false-value":0},null,8,["modelValue","label"]),l(d,{modelValue:o(e),"onUpdate:modelValue":s[1]||(s[1]=a=>p(e)?e.value=a:null),label:o(e).toString(),"true-value":"Show","false-value":"Hide"},null,8,["modelValue","label"])]))}},A={__name:"DemoSwitchLabelSlot",setup(h){const t=m(!1);return(e,n)=>(w(),b(d,{modelValue:o(t),"onUpdate:modelValue":n[0]||(n[0]=s=>p(t)?t.value=s:null)},{label:r(()=>[n[1]||(n[1]=c(" Turn on the progress: ")),l(O,{indeterminate:o(t),class:"ms-2"},null,8,["indeterminate"])]),_:1},8,["modelValue"]))}},F={class:"demo-space-x"},M={class:"mt-2 mb-0"},I={__name:"DemoSwitchModelAsArray",setup(h){const t=m(["John"]);return(e,n)=>(w(),v(f,null,[i("div",F,[l(d,{modelValue:o(t),"onUpdate:modelValue":n[0]||(n[0]=s=>p(t)?t.value=s:null),label:"John",value:"John"},null,8,["modelValue"]),l(d,{modelValue:o(t),"onUpdate:modelValue":n[1]||(n[1]=s=>p(t)?t.value=s:null),label:"Jacob",value:"Jacob"},null,8,["modelValue"])]),i("p",M,L(o(t)),1)],64))}},P={class:"demo-space-x"},j={__name:"DemoSwitchColors",setup(h){const t=m(["Primary","Secondary","Success","Info","Warning","Error"]),e=m(["Primary","Secondary","Success","Info","Warning","Error"]);return(n,s)=>(w(),v("div",P,[(w(!0),v(f,null,y(o(e),a=>(w(),b(d,{key:a,modelValue:o(t),"onUpdate:modelValue":s[0]||(s[0]=u=>p(t)?t.value=u:null),label:a,value:a,color:a.toLowerCase()},null,8,["modelValue","label","value","color"]))),128))]))}},z={class:"demo-space-x"},B={__name:"DemoSwitchInset",setup(h){const t=m(!0),e=m(!1);return(n,s)=>(w(),v("div",z,[l(d,{modelValue:o(t),"onUpdate:modelValue":s[0]||(s[0]=a=>p(t)?t.value=a:null),label:`Switch 1: ${o(t).toString()}`},null,8,["modelValue","label"]),l(d,{modelValue:o(e),"onUpdate:modelValue":s[1]||(s[1]=a=>p(e)?e.value=a:null),label:`Switch 2: ${o(e).toString()}`},null,8,["modelValue","label"])]))}},E={class:"demo-space-x"},k={__name:"DemoSwitchBasic",setup(h){const t=m(!0),e=m(!1),n=s=>{const a=s.toString();return a.charAt(0).toUpperCase()+a.slice(1)};return(s,a)=>(w(),v("div",E,[l(d,{modelValue:o(t),"onUpdate:modelValue":a[0]||(a[0]=u=>p(t)?t.value=u:null),label:n(o(t))},null,8,["modelValue","label"]),l(d,{modelValue:o(e),"onUpdate:modelValue":a[1]||(a[1]=u=>p(e)?e.value=u:null),label:n(o(e))},null,8,["modelValue","label"])]))}},W={ts:`<script lang="ts" setup>
const toggleSwitch = ref(true)
const toggleFalseSwitch = ref(false)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="toggleSwitch"
      :label="capitalizedLabel(toggleSwitch)"
    />

    <VSwitch
      v-model="toggleFalseSwitch"
      :label="capitalizedLabel(toggleFalseSwitch)"
    />
  </div>
</template>
`,js:`<script setup>
const toggleSwitch = ref(true)
const toggleFalseSwitch = ref(false)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="toggleSwitch"
      :label="capitalizedLabel(toggleSwitch)"
    />

    <VSwitch
      v-model="toggleFalseSwitch"
      :label="capitalizedLabel(toggleFalseSwitch)"
    />
  </div>
</template>
`},H={ts:`<script lang="ts" setup>
const selectedSwitch = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
const switches = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-for="item in switches"
      :key="item"
      v-model="selectedSwitch"
      :label="item"
      :value="item"
      :color="item.toLowerCase()"
    />
  </div>
</template>
`,js:`<script setup>
const selectedSwitch = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
])

const switches = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-for="item in switches"
      :key="item"
      v-model="selectedSwitch"
      :label="item"
      :value="item"
      :color="item.toLowerCase()"
    />
  </div>
</template>
`},N={ts:`<script lang="ts" setup>
const insetSwitch1 = ref(true)
const insetSwitch2 = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="insetSwitch1"
      :label="\`Switch 1: \${insetSwitch1.toString()}\`"
    />
    <VSwitch
      v-model="insetSwitch2"
      :label="\`Switch 2: \${insetSwitch2.toString()}\`"
    />
  </div>
</template>
`,js:`<script setup>
const insetSwitch1 = ref(true)
const insetSwitch2 = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="insetSwitch1"
      :label="\`Switch 1: \${insetSwitch1.toString()}\`"
    />
    <VSwitch
      v-model="insetSwitch2"
      :label="\`Switch 2: \${insetSwitch2.toString()}\`"
    />
  </div>
</template>
`},R={ts:`<script lang="ts" setup>
const switchMe = ref(false)
<\/script>

<template>
  <VSwitch v-model="switchMe">
    <template #label>
      Turn on the progress: <VProgressCircular
        :indeterminate="switchMe"
        class="ms-2"
      />
    </template>
  </VSwitch>
</template>
`,js:`<script setup>
const switchMe = ref(false)
<\/script>

<template>
  <VSwitch v-model="switchMe">
    <template #label>
      Turn on the progress: <VProgressCircular
        :indeterminate="switchMe"
        class="ms-2"
      />
    </template>
  </VSwitch>
</template>
`},q={ts:`<script lang="ts" setup>
const people = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="people"
      label="John"
      value="John"
    />

    <VSwitch
      v-model="people"
      label="Jacob"
      value="Jacob"
    />
  </div>

  <p class="mt-2 mb-0">
    {{ people }}
  </p>
</template>
`,js:`<script setup>
const people = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="people"
      label="John"
      value="John"
    />

    <VSwitch
      v-model="people"
      label="Jacob"
      value="Jacob"
    />
  </div>

  <p class="mt-2 mb-0">
    {{ people }}
  </p>
</template>
`},G={ts:`<script setup lang="ts">
const switchOn = ref('on')
const switchOnDisabled = ref('on')
const switchOnLoading = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switchOn"
      value="on"
      label="On"
    />

    <VSwitch label="Off" />

    <VSwitch
      v-model="switchOnDisabled"
      value="on"
      disabled
      label="On disabled"
    />

    <VSwitch
      disabled
      label="Off disabled"
    />

    <VSwitch
      v-model="switchOnLoading"
      loading="warning"
      :label="\`\${switchOnLoading ? 'On' : 'Off'} loading\`"
    />
  </div>
</template>
`,js:`<script setup>
const switchOn = ref('on')
const switchOnDisabled = ref('on')
const switchOnLoading = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switchOn"
      value="on"
      label="On"
    />

    <VSwitch label="Off" />

    <VSwitch
      v-model="switchOnDisabled"
      value="on"
      disabled
      label="On disabled"
    />

    <VSwitch
      disabled
      label="Off disabled"
    />

    <VSwitch
      v-model="switchOnLoading"
      loading="warning"
      :label="\`\${switchOnLoading ? 'On' : 'Off'} loading\`"
    />
  </div>
</template>
`},K={ts:`<script lang="ts" setup>
const switch1 = ref(1)
const switch2 = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switch1"
      :label="switch1.toString()"
      :true-value="1"
      :false-value="0"
    />

    <VSwitch
      v-model="switch2"
      :label="switch2.toString()"
      true-value="Show"
      false-value="Hide"
    />
  </div>
</template>
`,js:`<script setup>
const switch1 = ref(1)
const switch2 = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switch1"
      :label="switch1.toString()"
      :true-value="1"
      :false-value="0"
    />

    <VSwitch
      v-model="switch2"
      :label="switch2.toString()"
      true-value="Show"
      false-value="Hide"
    />
  </div>
</template>
`},de={__name:"switch",setup(h){return(t,e)=>{const n=k,s=$,a=B,u=j,g=I,V=A,_=J,x=C;return w(),b(D,null,{default:r(()=>[l(S,{cols:"12",md:"6"},{default:r(()=>[l(s,{title:"Basic",code:o(W)},{default:r(()=>[e[0]||(e[0]=i("p",null,[c("A "),i("code",null,"v-switch"),c(" in its simplest form provides a toggle between 2 values.")],-1)),l(n)]),_:1,__:[0]},8,["code"])]),_:1}),l(S,{cols:"12",md:"6"},{default:r(()=>[l(s,{title:"Inset",code:o(N)},{default:r(()=>[e[1]||(e[1]=i("p",null,[c("To change the default "),i("code",null,"inset"),c(" switch, simply modify the inset prop to a "),i("code",null,"false"),c(" value.")],-1)),l(a)]),_:1,__:[1]},8,["code"])]),_:1}),l(S,{cols:"12",md:"6"},{default:r(()=>[l(s,{title:"Colors",code:o(H)},{default:r(()=>[e[2]||(e[2]=i("p",null,[c("Switches can be colored by using any of the builtin colors and contextual names using the "),i("code",null,"color"),c(" prop.")],-1)),l(u)]),_:1,__:[2]},8,["code"])]),_:1}),l(S,{cols:"12",md:"6"},{default:r(()=>[l(s,{title:"Model as array",code:o(q)},{default:r(()=>[e[3]||(e[3]=i("p",null,[c("Multiple "),i("code",null,"v-switch"),c("'s can share the same "),i("code",null,"v-model"),c(" by using an array.")],-1)),l(g)]),_:1,__:[3]},8,["code"])]),_:1}),l(S,{cols:"12",md:"6"},{default:r(()=>[l(s,{title:"Label slot",code:o(R)},{default:r(()=>[e[4]||(e[4]=i("p",null,[c("Switch labels can be defined in "),i("code",null,"label"),c(" slot - that will allow to use HTML content.")],-1)),l(V)]),_:1,__:[4]},8,["code"])]),_:1}),l(S,{cols:"12",md:"6"},{default:r(()=>[l(s,{title:"True and False Value",code:o(K)},{default:r(()=>[e[5]||(e[5]=i("p",null,[c(" Use "),i("code",null,"false-value"),c(" and "),i("code",null,"true-value"),c(" prop to sets value for truthy and falsy state ")],-1)),l(_)]),_:1,__:[5]},8,["code"])]),_:1}),l(S,{cols:"12",md:"6"},{default:r(()=>[l(s,{title:"States",code:o(G)},{default:r(()=>[e[6]||(e[6]=i("p",null,[i("code",null,"v-switch"),c(" can have different states such as "),i("code",null,"default"),c(", "),i("code",null,"disabled"),c(", and "),i("code",null,"loading"),c(".")],-1)),l(x)]),_:1,__:[6]},8,["code"])]),_:1})]),_:1})}}};export{de as default};
