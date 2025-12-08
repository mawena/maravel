import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as b,V as v}from"./VRow-GpmvwSSA.js";import{V as k}from"./form-BuGlugVy.js";import{V as y}from"./VCheckbox-DKfuVZm8.js";import{f as u,k as _,o as l,e as n,c as x,F as R,h as w,p as f,b as c,v as W,d as p,y as $,s as D,t as g,r as h,aU as C,l as d,Z as V}from"./main-7JdyGFby.js";import{_ as U}from"./CustomRadiosWithImage-rnVVIwFU.js";import{_ as j}from"./CustomRadiosWithIcon-BexwIJjd.js";import{V as B}from"./VSpacer-BOTWrIDY.js";import{_ as G}from"./AppCardCode-CUjMQLDl.js";import{_ as F}from"./CustomRadios-DnvJEFyy.js";/* empty css              */import"./VCheckboxBtn-CBQDHvrp.js";import"./VSelectionControl-lb_mBfMr.js";import"./VInput-U8KQD51r.js";import"./VImg-Bk3huQTU.js";import"./VRadioGroup-CilT9Trh.js";import"./VAvatar-sg7CZdU7.js";import"./vue3-perfect-scrollbar-BTKqCwUF.js";import"./VCard-D0LXqtBI.js";import"./VCardText-DYTBPo8J.js";import"./VDivider-CIpTZ8Ni.js";const q=["src"],E={__name:"CustomCheckboxesWithImage",props:{selectedCheckbox:{type:Array,required:!0},checkboxContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedCheckbox"],setup(i,{emit:a}){const e=i,m=a,o=t=>{typeof t!="boolean"&&t!==null&&m("update:selectedCheckbox",t)};return(t,r)=>e.checkboxContent&&e.selectedCheckbox?(l(),u(v,{key:0,class:"custom-input-wrapper"},{default:n(()=>[(l(!0),x(R,null,w(e.checkboxContent,s=>(l(),u(b,f({key:s.value,ref_for:!0},i.gridColumn),{default:n(()=>[c(k,{class:W(["custom-input custom-checkbox rounded cursor-pointer w-100",e.selectedCheckbox.includes(s.value)?"active":""])},{default:n(()=>[p("div",null,[c(y,{id:`custom-checkbox-with-img-${s.value}`,"model-value":e.selectedCheckbox,value:s.value,"onUpdate:modelValue":o},null,8,["id","model-value","value"])]),p("img",{src:s.bgImage,alt:"bg-img",class:"custom-checkbox-image"},null,8,q)]),_:2},1032,["class"]),s.label||t.$slots.label?(l(),u(k,{key:0,for:`custom-checkbox-with-img-${s.value}`,class:"cursor-pointer"},{default:n(()=>[$(t.$slots,"label",{label:s.label},()=>[D(g(s.label),1)],!0)]),_:2},1032,["for"])):_("",!0)]),_:2},1040))),128))]),_:3})):_("",!0)}},A=I(E,[["__scopeId","data-v-33ec7233"]]),P="/build/assets/custom-checkbox-img-1-CN62rwL8.png",N="/build/assets/custom-checkbox-img-2-CESZ7JlS.png",T="/build/assets/custom-checkbox-img-3-CFGEoD3K.png",L={__name:"DemoCustomInputCustomCheckboxesWithImage",setup(i){const a=[{bgImage:P,value:"basic"},{bgImage:N,value:"premium"},{bgImage:T,value:"enterprise"}],e=h(["basic"]);return(m,o)=>{const t=A;return l(),u(t,{"selected-checkbox":d(e),"onUpdate:selectedCheckbox":o[0]||(o[0]=r=>C(e)?e.value=r:null),"checkbox-content":a,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-checkbox"])}}},J="/build/assets/custom-radio-img-1-YrBKH0Sm.png",O="/build/assets/custom-radio-img-2-Ph1YXgv1.png",K="/build/assets/custom-radio-img-3-Bg8gANbN.png",Y={__name:"DemoCustomInputCustomRadiosWithImage",setup(i){const a=[{bgImage:J,value:"basic"},{bgImage:O,value:"premium"},{bgImage:K,value:"enterprise"}],e=h("basic");return(m,o)=>{const t=U;return l(),u(t,{"selected-radio":d(e),"onUpdate:selectedRadio":o[0]||(o[0]=r=>C(e)?e.value=r:null),"radio-content":a,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"])}}},Z={class:"d-flex flex-column align-center text-center gap-2"},H={class:"cr-title text-base"},X={class:"text-sm clamp-text mb-0"},M={__name:"CustomCheckboxesWithIcon",props:{selectedCheckbox:{type:Array,required:!0},checkboxContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedCheckbox"],setup(i,{emit:a}){const e=i,m=a,o=t=>{typeof t!="boolean"&&t!==null&&m("update:selectedCheckbox",t)};return(t,r)=>e.checkboxContent&&e.selectedCheckbox?(l(),u(v,{key:0,class:"custom-input-wrapper"},{default:n(()=>[(l(!0),x(R,null,w(e.checkboxContent,s=>(l(),u(b,f({key:s.title,ref_for:!0},i.gridColumn),{default:n(()=>[c(k,{class:W(["custom-input custom-checkbox-icon rounded cursor-pointer",e.selectedCheckbox.includes(s.value)?"active":""])},{default:n(()=>[$(t.$slots,"default",{item:s},()=>[p("div",Z,[c(V,f({ref_for:!0},s.icon,{class:"text-high-emphasis"}),null,16),p("h6",H,g(s.title),1),p("p",X,g(s.desc),1)])],!0),p("div",null,[c(y,{"model-value":e.selectedCheckbox,value:s.value,"onUpdate:modelValue":o},null,8,["model-value","value"])])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3})):_("",!0)}},Q=I(M,[["__scopeId","data-v-fb25eaf8"]]),ee={__name:"DemoCustomInputCustomCheckboxesWithIcon",setup(i){const a=[{title:"Backup",desc:"Backup every file from your project.",value:"backup",icon:{icon:"tabler-server-2",size:"28"}},{title:"Encrypt",desc:"Translate your data to encrypted text.",value:"encrypt",icon:{icon:"tabler-ban",size:"28"}},{title:"Site Lock",desc:"Security tool to protect your website.",value:"site-lock",icon:{icon:"tabler-lock",size:"28"}}],e=h(["backup"]);return(m,o)=>{const t=Q;return l(),u(t,{"selected-checkbox":d(e),"onUpdate:selectedCheckbox":o[0]||(o[0]=r=>C(e)?e.value=r:null),"checkbox-content":a,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-checkbox"])}}},te={__name:"DemoCustomInputCustomRadiosWithIcon",setup(i){const a=[{title:"Starter",desc:"For freelancers who work with multiple clients",value:"starter",icon:{icon:"tabler-rocket",size:"28"}},{title:"Personal",desc:"Join our talented community of talented digital agencies",value:"personal",icon:{icon:"tabler-star",size:"28"}},{title:"Enterprise",desc:"Team plan for free upto 15 seats",value:"enterprise",icon:{icon:"tabler-crown",size:"28"}}],e=h("starter");return(m,o)=>{const t=j;return l(),u(t,{"selected-radio":d(e),"onUpdate:selectedRadio":o[0]||(o[0]=r=>C(e)?e.value=r:null),"radio-content":a,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"])}}},oe={class:"flex-grow-1"},se={class:"d-flex align-center mb-2"},ce={class:"cr-title text-base"},ne={key:0,class:"text-disabled text-body-2"},ae={class:"text-sm mb-0"},le={__name:"CustomCheckboxes",props:{selectedCheckbox:{type:Array,required:!0},checkboxContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedCheckbox"],setup(i,{emit:a}){const e=i,m=a,o=t=>{typeof t!="boolean"&&t!==null&&m("update:selectedCheckbox",t)};return(t,r)=>e.checkboxContent&&e.selectedCheckbox?(l(),u(v,{key:0,class:"custom-input-wrapper"},{default:n(()=>[(l(!0),x(R,null,w(e.checkboxContent,s=>(l(),u(b,f({key:s.title,ref_for:!0},i.gridColumn),{default:n(()=>[c(k,{class:W(["custom-input custom-checkbox rounded cursor-pointer",e.selectedCheckbox.includes(s.value)?"active":""])},{default:n(()=>[p("div",null,[c(y,{"model-value":e.selectedCheckbox,value:s.value,"onUpdate:modelValue":o},null,8,["model-value","value"])]),$(t.$slots,"default",{item:s},()=>[p("div",oe,[p("div",se,[p("h6",ce,g(s.title),1),c(B),s.subtitle?(l(),x("span",ne,g(s.subtitle),1)):_("",!0)]),p("p",ae,g(s.desc),1)])],!0)]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3})):_("",!0)}},re=I(le,[["__scopeId","data-v-cb9d7fbe"]]),ie={__name:"DemoCustomInputCustomCheckboxes",setup(i){const a=[{title:"Discount",subtitle:"20%",desc:"Wow! Get 20% off on your next purchase!",value:"discount"},{title:"Updates",subtitle:"Free",desc:"Get Updates regarding related products.",value:"updates"}],e=h(["discount"]);return(m,o)=>{const t=re;return l(),u(t,{"selected-checkbox":d(e),"onUpdate:selectedCheckbox":o[0]||(o[0]=r=>C(e)?e.value=r:null),"checkbox-content":a,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-checkbox"])}}},ue={__name:"DemoCustomInputCustomRadios",setup(i){const a=[{title:"Basic",subtitle:"Free",desc:"Get 1 project with 1 team member.",value:"basic"},{title:"Premium",subtitle:"$45.80",value:"premium",desc:"Get 5 projects with 5 team members."}],e=h("basic");return(m,o)=>{const t=F;return l(),u(t,{"selected-radio":d(e),"onUpdate:selectedRadio":o[0]||(o[0]=r=>C(e)?e.value=r:null),"radio-content":a,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-radio"])}}},me={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Discount',
    subtitle: '20%',
    desc: 'Wow! Get 20% off on your next purchase!',
    value: 'discount',
  },
  {
    title: 'Updates',
    subtitle: 'Free',
    desc: 'Get Updates regarding related products.',
    value: 'updates',
  },
]

const selectedCheckbox = ref(['discount'])
<\/script>

<template>
  <CustomCheckboxes
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`,js:`<script setup>
const checkboxContent = [
  {
    title: 'Discount',
    subtitle: '20%',
    desc: 'Wow! Get 20% off on your next purchase!',
    value: 'discount',
  },
  {
    title: 'Updates',
    subtitle: 'Free',
    desc: 'Get Updates regarding related products.',
    value: 'updates',
  },
]

const selectedCheckbox = ref(['discount'])
<\/script>

<template>
  <CustomCheckboxes
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`},de={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: { icon: 'tabler-server-2', size: '28' },
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: { icon: 'tabler-ban', size: '28' },
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: { icon: 'tabler-lock', size: '28' },
  },
]

const selectedCheckbox = ref(['backup'])
<\/script>

<template>
  <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
const checkboxContent = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: {
      icon: 'tabler-server-2',
      size: '28',
    },
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: {
      icon: 'tabler-ban',
      size: '28',
    },
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: {
      icon: 'tabler-lock',
      size: '28',
    },
  },
]

const selectedCheckbox = ref(['backup'])
<\/script>

<template>
  <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},pe={ts:`<script setup lang="ts">
import bg1 from '@images/pages/custom-checkbox-img-1.png'
import bg2 from '@images/pages/custom-checkbox-img-2.png'
import bg3 from '@images/pages/custom-checkbox-img-3.png'

const checkboxContent: { bgImage: string; value: string }[] = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithImage
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
import bg1 from '@images/pages/custom-checkbox-img-1.png'
import bg2 from '@images/pages/custom-checkbox-img-2.png'
import bg3 from '@images/pages/custom-checkbox-img-3.png'

const checkboxContent = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithImage
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},be={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const radioContent: CustomInputContent[] = [
  {
    title: 'Basic',
    subtitle: 'Free',
    desc: 'Get 1 project with 1 team member.',
    value: 'basic',
  },
  {
    title: 'Premium',
    subtitle: '$45.80',
    value: 'premium',
    desc: 'Get 5 projects with 5 team members.',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`,js:`<script setup>
const radioContent = [
  {
    title: 'Basic',
    subtitle: 'Free',
    desc: 'Get 1 project with 1 team member.',
    value: 'basic',
  },
  {
    title: 'Premium',
    subtitle: '$45.80',
    value: 'premium',
    desc: 'Get 5 projects with 5 team members.',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`},ge={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const radioContent: CustomInputContent[] = [
  {
    title: 'Starter',
    desc: 'For freelancers who work with multiple clients',
    value: 'starter',
    icon: { icon: 'tabler-rocket', size: '28' },
  },
  {
    title: 'Personal',
    desc: 'Join our talented community of talented digital agencies',
    value: 'personal',
    icon: { icon: 'tabler-star', size: '28' },
  },
  {
    title: 'Enterprise',
    desc: 'Team plan for free upto 15 seats',
    value: 'enterprise',
    icon: { icon: 'tabler-crown', size: '28' },
  },
]

const selectedRadio = ref('starter')
<\/script>

<template>
  <CustomRadiosWithIcon
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
const radioContent = [
  {
    title: 'Starter',
    desc: 'For freelancers who work with multiple clients',
    value: 'starter',
    icon: {
      icon: 'tabler-rocket',
      size: '28',
    },
  },
  {
    title: 'Personal',
    desc: 'Join our talented community of talented digital agencies',
    value: 'personal',
    icon: {
      icon: 'tabler-star',
      size: '28',
    },
  },
  {
    title: 'Enterprise',
    desc: 'Team plan for free upto 15 seats',
    value: 'enterprise',
    icon: {
      icon: 'tabler-crown',
      size: '28',
    },
  },
]

const selectedRadio = ref('starter')
<\/script>

<template>
  <CustomRadiosWithIcon
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},he={ts:`<script setup lang="ts">
import bg1 from '@images/pages/custom-radio-img-1.png'
import bg2 from '@images/pages/custom-radio-img-2.png'
import bg3 from '@images/pages/custom-radio-img-3.png'

const radioContent: { bgImage: string; value: string }[] = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithImage
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
import bg1 from '@images/pages/custom-radio-img-1.png'
import bg2 from '@images/pages/custom-radio-img-2.png'
import bg3 from '@images/pages/custom-radio-img-3.png'

const radioContent = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithImage
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},qe={__name:"custom-input",setup(i){return(a,e)=>{const m=ue,o=G,t=ie,r=te,s=ee,z=Y,S=L;return l(),u(v,null,{default:n(()=>[c(b,{cols:"12",md:"6"},{default:n(()=>[c(o,{title:"Custom Radios",code:d(be)},{default:n(()=>[c(m)]),_:1},8,["code"])]),_:1}),c(b,{cols:"12",md:"6"},{default:n(()=>[c(o,{title:"Custom Checkboxes",code:d(me)},{default:n(()=>[c(t)]),_:1},8,["code"])]),_:1}),c(b,{cols:"12",md:"6"},{default:n(()=>[c(o,{title:"Custom Radios With Icon",code:d(ge)},{default:n(()=>[c(r)]),_:1},8,["code"])]),_:1}),c(b,{cols:"12",md:"6"},{default:n(()=>[c(o,{title:"Custom Checkboxes With Icon",code:d(de)},{default:n(()=>[c(s)]),_:1},8,["code"])]),_:1}),c(b,{cols:"12",md:"6"},{default:n(()=>[c(o,{title:"Custom Radios With Image",code:d(he)},{default:n(()=>[c(z)]),_:1},8,["code"])]),_:1}),c(b,{cols:"12",md:"6"},{default:n(()=>[c(o,{title:"Custom Checkboxes With Image",code:d(pe)},{default:n(()=>[c(S)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{qe as default};
