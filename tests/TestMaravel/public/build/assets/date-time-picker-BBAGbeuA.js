import{_ as s}from"./AppDateTimePicker-B-_iYTUO.js";import{r as u,f as r,o as i,aU as _,l as o,e as n,b as l}from"./main-7JdyGFby.js";import{_ as b}from"./AppCardCode-CUjMQLDl.js";import{V as h,a as d}from"./VRow-GpmvwSSA.js";import"./VField-Cnag0GiO.js";import"./form-BuGlugVy.js";import"./easing-Bybner-F.js";import"./VInput-U8KQD51r.js";import"./VImg-Bk3huQTU.js";import"./vue3-perfect-scrollbar-BTKqCwUF.js";import"./VCard-D0LXqtBI.js";import"./VAvatar-sg7CZdU7.js";import"./VCardText-DYTBPo8J.js";import"./VDivider-CIpTZ8Ni.js";/* empty css              */const A={__name:"DemoDateTimePickerInline",setup(p){const e=u("");return(m,a)=>{const t=s;return i(),r(t,{modelValue:o(e),"onUpdate:modelValue":a[0]||(a[0]=c=>_(e)?e.value=c:null),label:"Inline",placeholder:"Select Date",config:{inline:!0}},null,8,["modelValue"])}}},F={__name:"DemoDateTimePickerDisabledRange",setup(p){const e=new Date,m=e.toLocaleString("default",{month:"2-digit"}),a=e.getFullYear(),t=u("");return(c,D)=>{const f=s;return i(),r(f,{modelValue:o(t),"onUpdate:modelValue":D[0]||(D[0]=g=>_(t)?t.value=g:null),label:"Disabled Range",placeholder:"Select date",config:{dateFormat:"Y-m-d",disable:[{from:`${o(a)}-${o(m)}-20`,to:`${o(a)}-${o(m)}-25`}]}},null,8,["modelValue","config"])}}},V={__name:"DemoDateTimePickerHumanFriendly",setup(p){const e=u("");return(m,a)=>{const t=s;return i(),r(t,{modelValue:o(e),"onUpdate:modelValue":a[0]||(a[0]=c=>_(e)?e.value=c:null),label:"Human Friendly",placeholder:"Select date",config:{dateFormat:"F j, Y"}},null,8,["modelValue"])}}},S={__name:"DemoDateTimePickerRange",setup(p){const e=u("");return(m,a)=>{const t=s;return i(),r(t,{modelValue:o(e),"onUpdate:modelValue":a[0]||(a[0]=c=>_(e)?e.value=c:null),label:"Range",placeholder:"Select date",config:{mode:"range"}},null,8,["modelValue"])}}},v={__name:"DemoDateTimePickerMultipleDates",setup(p){const e=u("");return(m,a)=>{const t=s;return i(),r(t,{modelValue:o(e),"onUpdate:modelValue":a[0]||(a[0]=c=>_(e)?e.value=c:null),label:"Multiple Dates",placeholder:"Select date",config:{mode:"multiple",dateFormat:"Y-m-d"}},null,8,["modelValue"])}}},Y={__name:"DemoDateTimePickerDateAndTime",setup(p){const e=u("");return(m,a)=>{const t=s;return i(),r(t,{modelValue:o(e),"onUpdate:modelValue":a[0]||(a[0]=c=>_(e)?e.value=c:null),label:"Date & TIme",placeholder:"Select date and time",config:{enableTime:!0,dateFormat:"Y-m-d H:i"}},null,8,["modelValue"])}}},$={__name:"DemoDateTimePickerTimePicker",setup(p){const e=u("");return(m,a)=>{const t=s;return i(),r(t,{modelValue:o(e),"onUpdate:modelValue":a[0]||(a[0]=c=>_(e)?e.value=c:null),label:"Time picker",placeholder:"Select time",config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i"}},null,8,["modelValue"])}}},R={__name:"DemoDateTimePickerBasic",setup(p){const e=u("");return(m,a)=>{const t=s;return i(),r(t,{modelValue:o(e),"onUpdate:modelValue":a[0]||(a[0]=c=>_(e)?e.value=c:null),label:"Default",placeholder:"Select date"},null,8,["modelValue"])}}},M={ts:`<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Default"
    placeholder="Select date"
  />
</template>
`,js:`<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Default"
    placeholder="Select date"
  />
</template>
`},w={ts:`<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Date & TIme"
    placeholder="Select date and time"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
  />
</template>
`,js:`<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Date & TIme"
    placeholder="Select date and time"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
  />
</template>
`},H={ts:`<script setup lang="ts">
const now = new Date()
const currentMonth = now.toLocaleString('default', { month: '2-digit' })
const currentYear = now.getFullYear()
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Disabled Range"
    placeholder="Select date"
    :config="{ dateFormat: 'Y-m-d', disable: [{ from: \`\${currentYear}-\${currentMonth}-20\`, to: \`\${currentYear}-\${currentMonth}-25\` }] }"
  />
</template>
`,js:`<script setup>
const now = new Date()
const currentMonth = now.toLocaleString('default', { month: '2-digit' })
const currentYear = now.getFullYear()
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Disabled Range"
    placeholder="Select date"
    :config="{ dateFormat: 'Y-m-d', disable: [{ from: \`\${currentYear}-\${currentMonth}-20\`, to: \`\${currentYear}-\${currentMonth}-25\` }] }"
  />
</template>
`},j={ts:`<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Human Friendly"
    placeholder="Select date"
    :config="{ dateFormat: 'F j, Y' }"
  />
</template>
`,js:`<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Human Friendly"
    placeholder="Select date"
    :config="{ dateFormat: 'F j, Y' }"
  />
</template>
`},x={ts:`<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Inline"
    placeholder="Select Date"
    :config="{ inline: true }"
  />
</template>
`,js:`<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Inline"
    placeholder="Select Date"
    :config="{ inline: true }"
  />
</template>
`},I={ts:`<script setup lang="ts">
const multipleDate = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="multipleDate"
    label="Multiple Dates"
    placeholder="Select date"
    :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
  />
</template>
`,js:`<script setup>
const multipleDate = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="multipleDate"
    label="Multiple Dates"
    placeholder="Select date"
    :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
  />
</template>
`},U={ts:`<script setup lang="ts">
const dateRange = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="dateRange"
    label="Range"
    placeholder="Select date"
    :config="{ mode: 'range' }"
  />
</template>
`,js:`<script setup>
const dateRange = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="dateRange"
    label="Range"
    placeholder="Select date"
    :config="{ mode: 'range' }"
  />
</template>
`},y={ts:`<script setup lang="ts">
const time = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="time"
    label="Time picker"
    placeholder="Select time"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  />
</template>
`,js:`<script setup>
const time = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="time"
    label="Time picker"
    placeholder="Select time"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  />
</template>
`},ee={__name:"date-time-picker",setup(p){return(e,m)=>{const a=R,t=b,c=$,D=Y,f=v,g=S,T=V,k=F,P=A;return i(),r(h,null,{default:n(()=>[l(d,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Basic",code:o(M)},{default:n(()=>[l(a)]),_:1},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Time Picker",code:o(y)},{default:n(()=>[l(c)]),_:1},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Date and Time",code:o(w)},{default:n(()=>[l(D)]),_:1},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Multiple Dates",code:o(I)},{default:n(()=>[l(f)]),_:1},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Range",code:o(U)},{default:n(()=>[l(g)]),_:1},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Human Friendly",code:o(j)},{default:n(()=>[l(T)]),_:1},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Disabled Range",code:o(H)},{default:n(()=>[l(k)]),_:1},8,["code"])]),_:1}),l(d,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Inline",code:o(x)},{default:n(()=>[l(P)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{ee as default};
