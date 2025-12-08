import{_ as S,V as _}from"./AppAutocomplete-C9AhkB2W.js";import{r as f,f as h,o as v,aU as A,l as r,e as l,b as a,dJ as N,Z as T,w as G,p as y,bd as I,be as F,b1 as D,a$ as W,b0 as R,bn as O,bm as H,di as L,d as s,s as n}from"./main-7JdyGFby.js";import{a as U}from"./VList-BD6Dg9I8.js";import{V as E}from"./VChip-C72F9fhC.js";import{a as u,V as w}from"./VRow-GpmvwSSA.js";import{_ as P}from"./AppCardCode-CUjMQLDl.js";import"./form-BuGlugVy.js";import"./VSelect-bXJTNHr2.js";import"./VTextField-DdAXD61i.js";/* empty css                   */import"./VCounter-muzn6vBk.js";import"./VImg-Bk3huQTU.js";import"./VField-Cnag0GiO.js";import"./easing-Bybner-F.js";import"./VInput-U8KQD51r.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-B9GC1vyq.js";import"./VMenu-D3AJz5Bm.js";import"./VOverlay-BMzCYiWA.js";import"./delay-9Hi4eTuF.js";import"./lazy-cOdXnimE.js";import"./scopeId-j0VLF_1N.js";import"./VCheckboxBtn-CBQDHvrp.js";import"./VSelectionControl-lb_mBfMr.js";import"./VAvatar-sg7CZdU7.js";import"./filter-D7y4hkNL.js";import"./ssrBoot-CA1KQA2w.js";import"./VDivider-CIpTZ8Ni.js";import"./VSlideGroup-B-2l8qWb.js";/* empty css              */import"./vue3-perfect-scrollbar-BTKqCwUF.js";import"./VCard-D0LXqtBI.js";import"./VCardText-DYTBPo8J.js";const q={__name:"DemoAutocompleteValidation",setup(g){const t=["foo","bar","fizz","buzz"],e=f(["foo"]),p=[o=>!!o.length||"Select at least one option."];return(o,m)=>{const c=S;return v(),h(c,{modelValue:r(e),"onUpdate:modelValue":m[0]||(m[0]=i=>A(e)?e.value=i:null),items:t,rules:p,placeholder:"Select Option",multiple:""},null,8,["modelValue"])}}},$={__name:"DemoAutocompleteStateSelector",setup(g){const t=f(!1),e=f(null),p=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];return(o,m)=>{const c=S;return v(),h(c,{modelValue:r(e),"onUpdate:modelValue":m[1]||(m[1]=i=>A(e)?e.value=i:null),hint:r(t)?"Click the icon to save":"Click the icon to edit",placeholder:"Select Your State",items:p,readonly:!r(t),label:`State — ${r(t)?"Editable":"Readonly"}`,"persistent-hint":"","prepend-icon":"tabler-building","menu-props":{maxHeight:"200px"}},{append:l(()=>[a(N,{mode:"out-in"},{default:l(()=>[(v(),h(T,{key:`icon-${r(t)}`,color:r(t)?"success":"info",icon:r(t)?"tabler-checks":"tabler-edit-circle",onClick:m[0]||(m[0]=i=>t.value=!r(t))},null,8,["color","icon"]))]),_:1})]),_:1},8,["modelValue","hint","readonly","label"])}}},z={__name:"DemoAutocompleteAsyncItems",setup(g){const t=f(!1),e=f(),p=f(null),o=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],m=f(o),c=i=>{t.value=!0,setTimeout(()=>{m.value=o.filter(d=>(d||"").toLowerCase().includes((i||"").toLowerCase())),t.value=!1},500)};return G(e,i=>{i&&i!==p.value&&c(i)}),(i,d)=>(v(),h(_,{modelValue:r(p),"onUpdate:modelValue":d[0]||(d[0]=b=>A(p)?p.value=b:null),search:r(e),"onUpdate:search":d[1]||(d[1]=b=>A(e)?e.value=b:null),loading:r(t),items:r(m),placeholder:"Search for a state",label:"What state are you from?",variant:"underlined","menu-props":{maxHeight:"200px"}},null,8,["modelValue","search","loading","items"]))}},Y={__name:"DemoAutocompleteSlots",setup(g){const t=f(["Sandra Adams","Britta Holt"]),e=[{name:"Sandra Adams",group:"Group 1",avatar:I},{name:"Ali Connors",group:"Group 1",avatar:F},{name:"Trevor Hansen",group:"Group 1",avatar:D},{name:"Tucker Smith",group:"Group 1",avatar:W},{name:"Britta Holt",group:"Group 2",avatar:R},{name:"Jane Smith ",group:"Group 2",avatar:O},{name:"John Smith",group:"Group 2",avatar:H},{name:"Sandra Williams",group:"Group 2",avatar:L}];return(p,o)=>{const m=S;return v(),h(m,{modelValue:r(t),"onUpdate:modelValue":o[0]||(o[0]=c=>A(t)?t.value=c:null),chips:"","closable-chips":"",multiple:"",items:e,"item-title":"name","item-value":"name",placeholder:"Select User",label:"Select"},{chip:l(({props:c,item:i})=>[a(E,y(c,{"prepend-avatar":i.raw.avatar,text:i.raw.name}),null,16,["prepend-avatar","text"])]),item:l(({props:c,item:i})=>{var d,b,C;return[a(U,y(c,{"prepend-avatar":(d=i==null?void 0:i.raw)==null?void 0:d.avatar,title:(b=i==null?void 0:i.raw)==null?void 0:b.name,subtitle:(C=i==null?void 0:i.raw)==null?void 0:C.group}),null,16,["prepend-avatar","title","subtitle"])]}),_:1},8,["modelValue"])}}},j={__name:"DemoAutocompleteCustomFilter",setup(g){const t=[{name:"Florida",abbr:"FL",id:1},{name:"Georgia",abbr:"GA",id:2},{name:"Nebraska",abbr:"NE",id:3},{name:"California",abbr:"CA",id:4},{name:"New York",abbr:"NY",id:5}];function e(p,o,m){const c=m.raw.name.toLowerCase(),i=m.raw.abbr.toLowerCase(),d=o.toLowerCase();return c.includes(d)||i.includes(d)}return(p,o)=>{const m=S;return v(),h(m,{label:"States",items:t,"custom-filter":e,"item-title":"name","item-value":"abbr",placeholder:"Select State"})}}},J={__name:"DemoAutocompleteChips",setup(g){const t=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(e,p)=>{const o=S;return v(),h(o,{label:"States",items:t,placeholder:"Select State",chips:"",multiple:"","closable-chips":""})}}},B={__name:"DemoAutocompleteClearable",setup(g){const t=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(e,p)=>{const o=S;return v(),h(o,{label:"States",items:t,multiple:"",placeholder:"Select State",clearable:""})}}},K={__name:"DemoAutocompleteMultiple",setup(g){const t=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(e,p)=>{const o=S;return v(),h(o,{label:"States",items:t,placeholder:"Select State",multiple:"",eager:""})}}},X={__name:"DemoAutocompleteVariant",setup(g){const t=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(e,p)=>(v(),h(w,null,{default:l(()=>[a(u,{cols:"12",md:"6"},{default:l(()=>[a(_,{variant:"solo",label:"Solo",items:t,placeholder:"Select State"})]),_:1}),a(u,{cols:"12",md:"6"},{default:l(()=>[a(_,{variant:"outlined",label:"Outlined",placeholder:"Select State",items:t})]),_:1}),a(u,{cols:"12",md:"6"},{default:l(()=>[a(_,{variant:"underlined",label:"Underlined",placeholder:"Select State",items:t})]),_:1}),a(u,{cols:"12",md:"6"},{default:l(()=>[a(_,{variant:"filled",label:"Filled",placeholder:"Select State",items:t})]),_:1}),a(u,{cols:"12",md:"6"},{default:l(()=>[a(_,{variant:"plain",label:"Plain",placeholder:"Select State",items:t})]),_:1})]),_:1}))}},Z={__name:"DemoAutocompleteDensity",setup(g){const t=f("Florida"),e=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(p,o)=>{const m=S;return v(),h(m,{modelValue:r(t),"onUpdate:modelValue":o[0]||(o[0]=c=>A(t)?t.value=c:null),label:"States",density:"compact",placeholder:"Select State",items:e},null,8,["modelValue"])}}},Q={__name:"DemoAutocompleteBasic",setup(g){const t=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(e,p)=>{const o=S;return v(),h(o,{label:"States",items:t,placeholder:"Select State"})}}},ee={ts:`<script setup lang="ts">
const loading = ref(false)
const search = ref()
const select = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const items = ref(states)

const querySelections = (query: string) => {
  loading.value = true

  // Simulated ajax query
  setTimeout(() => {
    items.value = states.filter(state => (state || '').toLowerCase().includes((query || '').toLowerCase()))
    loading.value = false
  }, 500)
}

watch(search, query => {
  query && query !== select.value && querySelections(query)
})
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="items"
    placeholder="Search for a state"
    label="What state are you from?"
    variant="underlined"
    :menu-props="{ maxHeight: '200px' }"
  />
</template>
`,js:`<script setup>
const loading = ref(false)
const search = ref()
const select = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const items = ref(states)

const querySelections = query => {
  loading.value = true

  // Simulated ajax query
  setTimeout(() => {
    items.value = states.filter(state => (state || '').toLowerCase().includes((query || '').toLowerCase()))
    loading.value = false
  }, 500)
}

watch(search, query => {
  query && query !== select.value && querySelections(query)
})
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="items"
    placeholder="Search for a state"
    label="What state are you from?"
    variant="underlined"
    :menu-props="{ maxHeight: '200px' }"
  />
</template>
`},ae={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
  />
</template>
`},te={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    chips
    multiple
    closable-chips
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    chips
    multiple
    closable-chips
  />
</template>
`},oe={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    multiple
    placeholder="Select State"
    clearable
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    multiple
    placeholder="Select State"
    clearable
  />
</template>
`},le={ts:`<script setup lang="ts">
const states = [
  { name: 'Florida', abbr: 'FL', id: 1 },
  { name: 'Georgia', abbr: 'GA', id: 2 },
  { name: 'Nebraska', abbr: 'NE', id: 3 },
  { name: 'California', abbr: 'CA', id: 4 },
  { name: 'New York', abbr: 'NY', id: 5 },
]

function customFilter(itemTitle: any, queryText: any, item: any) {
  const textOne = item.raw.name.toLowerCase()
  const textTwo = item.raw.abbr.toLowerCase()
  const searchText = queryText.toLowerCase()

  return textOne.includes(searchText) || textTwo.includes(searchText)
}
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="states"
    :custom-filter="customFilter"
    item-title="name"
    item-value="abbr"
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const states = [
  {
    name: 'Florida',
    abbr: 'FL',
    id: 1,
  },
  {
    name: 'Georgia',
    abbr: 'GA',
    id: 2,
  },
  {
    name: 'Nebraska',
    abbr: 'NE',
    id: 3,
  },
  {
    name: 'California',
    abbr: 'CA',
    id: 4,
  },
  {
    name: 'New York',
    abbr: 'NY',
    id: 5,
  },
]

function customFilter(itemTitle, queryText, item) {
  const textOne = item.raw.name.toLowerCase()
  const textTwo = item.raw.abbr.toLowerCase()
  const searchText = queryText.toLowerCase()
  
  return textOne.includes(searchText) || textTwo.includes(searchText)
}
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="states"
    :custom-filter="customFilter"
    item-title="name"
    item-value="abbr"
    placeholder="Select State"
  />
</template>
`},ie={ts:`<script setup lang="ts">
const select = ref('Florida')
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    v-model="select"
    label="States"
    density="compact"
    placeholder="Select State"
    :items="items"
  />
</template>
`,js:`<script setup>
const select = ref('Florida')

const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    v-model="select"
    label="States"
    density="compact"
    placeholder="Select State"
    :items="items"
  />
</template>
`},se={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    multiple
    eager
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    multiple
    eager
  />
</template>
`},re={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const friends = ref(['Sandra Adams', 'Britta Holt'])

const people = [
  { name: 'Sandra Adams', group: 'Group 1', avatar: avatar1 },
  { name: 'Ali Connors', group: 'Group 1', avatar: avatar2 },
  { name: 'Trevor Hansen', group: 'Group 1', avatar: avatar3 },
  { name: 'Tucker Smith', group: 'Group 1', avatar: avatar4 },
  { name: 'Britta Holt', group: 'Group 2', avatar: avatar5 },
  { name: 'Jane Smith ', group: 'Group 2', avatar: avatar6 },
  { name: 'John Smith', group: 'Group 2', avatar: avatar7 },
  { name: 'Sandra Williams', group: 'Group 2', avatar: avatar8 },
]
<\/script>

<template>
  <AppAutocomplete
    v-model="friends"
    chips
    closable-chips
    multiple
    :items="people"
    item-title="name"
    item-value="name"
    placeholder="Select User"
    label="Select"
  >
    <template #chip="{ props, item }">
      <VChip
        v-bind="props"
        :prepend-avatar="item.raw.avatar"
        :text="item.raw.name"
      />
    </template>

    <template #item="{ props, item }">
      <VListItem
        v-bind="props"
        :prepend-avatar="item?.raw?.avatar"
        :title="item?.raw?.name"
        :subtitle="item?.raw?.group"
      />
    </template>
  </AppAutocomplete>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const friends = ref([
  'Sandra Adams',
  'Britta Holt',
])

const people = [
  {
    name: 'Sandra Adams',
    group: 'Group 1',
    avatar: avatar1,
  },
  {
    name: 'Ali Connors',
    group: 'Group 1',
    avatar: avatar2,
  },
  {
    name: 'Trevor Hansen',
    group: 'Group 1',
    avatar: avatar3,
  },
  {
    name: 'Tucker Smith',
    group: 'Group 1',
    avatar: avatar4,
  },
  {
    name: 'Britta Holt',
    group: 'Group 2',
    avatar: avatar5,
  },
  {
    name: 'Jane Smith ',
    group: 'Group 2',
    avatar: avatar6,
  },
  {
    name: 'John Smith',
    group: 'Group 2',
    avatar: avatar7,
  },
  {
    name: 'Sandra Williams',
    group: 'Group 2',
    avatar: avatar8,
  },
]
<\/script>

<template>
  <AppAutocomplete
    v-model="friends"
    chips
    closable-chips
    multiple
    :items="people"
    item-title="name"
    item-value="name"
    placeholder="Select User"
    label="Select"
  >
    <template #chip="{ props, item }">
      <VChip
        v-bind="props"
        :prepend-avatar="item.raw.avatar"
        :text="item.raw.name"
      />
    </template>

    <template #item="{ props, item }">
      <VListItem
        v-bind="props"
        :prepend-avatar="item?.raw?.avatar"
        :title="item?.raw?.name"
        :subtitle="item?.raw?.group"
      />
    </template>
  </AppAutocomplete>
</template>
`},ne={ts:`<script setup lang="ts">
const isEditing = ref(false)
const selectedState = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    v-model="selectedState"
    :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
    placeholder="Select Your State"
    :items="states"
    :readonly="!isEditing"
    :label="\`State — \${isEditing ? 'Editable' : 'Readonly'}\`"
    persistent-hint
    prepend-icon="tabler-building"
    :menu-props="{ maxHeight: '200px' }"
  >
    <template #append>
      <VSlideXReverseTransition mode="out-in">
        <VIcon
          :key="\`icon-\${isEditing}\`"
          :color="isEditing ? 'success' : 'info'"
          :icon="isEditing ? 'tabler-checks' : 'tabler-edit-circle'"
          @click="isEditing = !isEditing"
        />
      </VSlideXReverseTransition>
    </template>
  </AppAutocomplete>
</template>
`,js:`<script setup>
const isEditing = ref(false)
const selectedState = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    v-model="selectedState"
    :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
    placeholder="Select Your State"
    :items="states"
    :readonly="!isEditing"
    :label="\`State — \${isEditing ? 'Editable' : 'Readonly'}\`"
    persistent-hint
    prepend-icon="tabler-building"
    :menu-props="{ maxHeight: '200px' }"
  >
    <template #append>
      <VSlideXReverseTransition mode="out-in">
        <VIcon
          :key="\`icon-\${isEditing}\`"
          :color="isEditing ? 'success' : 'info'"
          :icon="isEditing ? 'tabler-checks' : 'tabler-edit-circle'"
          @click="isEditing = !isEditing"
        />
      </VSlideXReverseTransition>
    </template>
  </AppAutocomplete>
</template>
`},me={ts:`<script setup lang="ts">
const items = ['foo', 'bar', 'fizz', 'buzz']
const values = ref(['foo'])
const nameRules = [(v: string) => !!v.length || 'Select at least one option.']
<\/script>

<template>
  <AppAutocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    placeholder="Select Option"
    multiple
  />
</template>
`,js:`<script setup>
const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const values = ref(['foo'])
const nameRules = [v => !!v.length || 'Select at least one option.']
<\/script>

<template>
  <AppAutocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    placeholder="Select Option"
    multiple
  />
</template>
`},pe={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 solo variant  -->
      <VAutocomplete
        variant="solo"
        label="Solo"
        :items="items"
        placeholder="Select State"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 outlined variant -->
      <VAutocomplete
        variant="outlined"
        label="Outlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 underlined variant -->
      <VAutocomplete
        variant="underlined"
        label="Underlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 filled variant  -->
      <VAutocomplete
        variant="filled"
        label="Filled"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!--  👉 plain variant -->
      <VAutocomplete
        variant="plain"
        label="Plain"
        placeholder="Select State"
        :items="items"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 solo variant  -->
      <VAutocomplete
        variant="solo"
        label="Solo"
        :items="items"
        placeholder="Select State"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 outlined variant -->
      <VAutocomplete
        variant="outlined"
        label="Outlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 underlined variant -->
      <VAutocomplete
        variant="underlined"
        label="Underlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 filled variant  -->
      <VAutocomplete
        variant="filled"
        label="Filled"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!--  👉 plain variant -->
      <VAutocomplete
        variant="plain"
        label="Plain"
        placeholder="Select State"
        :items="items"
      />
    </VCol>
  </VRow>
</template>
`},$e={__name:"autocomplete",setup(g){return(t,e)=>{const p=Q,o=P,m=Z,c=X,i=K,d=B,b=J,C=j,V=Y,x=z,k=$,M=q;return v(),h(w,{class:"match-height"},{default:l(()=>[a(u,{cols:"12",md:"6"},{default:l(()=>[a(o,{title:"Basic",code:r(ae)},{default:l(()=>[e[0]||(e[0]=s("p",null,[n(" The "),s("code",null," v-autocomplete "),n(" component offers simple and flexible type-ahead functionality. This is useful when searching large sets of data or even dynamically fetching information from an API. ")],-1)),a(p)]),_:1,__:[0]},8,["code"])]),_:1}),a(u,{cols:"12",md:"6"},{default:l(()=>[a(o,{title:"Density",code:r(ie)},{default:l(()=>[e[1]||(e[1]=s("p",null,[n(" You can use "),s("code",null," density "),n(" prop to adjusts vertical spacing within the component. Available options are: "),s("code",null,"default"),n(", "),s("code",null,"comfortable"),n(", and "),s("code",null,"compact"),n(". ")],-1)),a(m)]),_:1,__:[1]},8,["code"])]),_:1}),a(u,{cols:"12",md:"12"},{default:l(()=>[a(o,{title:"Variant",code:r(pe)},{default:l(()=>[e[2]||(e[2]=s("p",null,[n("Use "),s("code",null,"Solo"),n(", "),s("code",null,"Outlined"),n(", "),s("code",null,"Underlined"),n(", "),s("code",null,"Filled"),n(" and "),s("code",null,"Plain"),n(" options of "),s("code",null,"variant"),n(" prop to change the look of Autocomplete. ")],-1)),a(c)]),_:1,__:[2]},8,["code"])]),_:1}),a(u,{cols:"12",md:"6"},{default:l(()=>[a(o,{title:"Multiple",code:r(se)},{default:l(()=>[e[3]||(e[3]=s("p",null,[n("Use "),s("code",null,"multiple"),n(" prop to select multiple. Accepts array for value")],-1)),a(i)]),_:1,__:[3]},8,["code"])]),_:1}),a(u,{cols:"12",md:"6"},{default:l(()=>[a(o,{title:"Clearable",code:r(oe)},{default:l(()=>[e[4]||(e[4]=s("p",null,[n("Use "),s("code",null,"clearable"),n(" prop to add input clear functionality.")],-1)),a(d)]),_:1,__:[4]},8,["code"])]),_:1}),a(u,{cols:"12",md:"6"},{default:l(()=>[a(o,{title:"Chips",code:r(te)},{default:l(()=>[e[5]||(e[5]=s("p",null,[n("Use "),s("code",null," chips "),n(" prop to use chips in select.")],-1)),a(b)]),_:1,__:[5]},8,["code"])]),_:1}),a(u,{cols:"12",md:"6"},{default:l(()=>[a(o,{title:"Custom-Filter",code:r(le)},{default:l(()=>[e[6]||(e[6]=s("p",null,[n("The "),s("code",null," custom-filter "),n(" prop can be used to filter each individual item with custom logic.In example we will filter state based on their name and abbreviations ")],-1)),a(C)]),_:1,__:[6]},8,["code"])]),_:1}),a(u,{cols:"12",md:"6"},{default:l(()=>[a(o,{title:"Slots",code:r(re)},{default:l(()=>[e[7]||(e[7]=s("p",null,"With the power of slots, you can customize the visual output of the select. In this example we add a profile picture for both the chips and list items using their props. ",-1)),a(V)]),_:1,__:[7]},8,["code"])]),_:1}),a(u,{cols:"12",md:"6"},{default:l(()=>[a(o,{title:"Async items",code:r(ee)},{default:l(()=>[e[8]||(e[8]=s("p",null,"Sometimes you need to load data externally based upon a search query. ",-1)),a(x)]),_:1,__:[8]},8,["code"])]),_:1}),a(u,{cols:"12",md:"6"},{default:l(()=>[a(o,{title:"State Selector",code:r(ne)},{default:l(()=>[e[9]||(e[9]=s("p",null,"Using a combination of v-autocomplete slots and transitions, you can create a stylish toggle able autocomplete field such as below state selector.",-1)),a(k)]),_:1,__:[9]},8,["code"])]),_:1}),a(u,{cols:"12",md:"6"},{default:l(()=>[a(o,{title:"validation",code:r(me)},{default:l(()=>[e[10]||(e[10]=s("p",null,[n("Use "),s("code",null,"rules"),n(" prop to validate autocomplete. Accepts a mixed array of types function, boolean and string. Functions pass an input value as an argument and must return either true / false or a string containing an error message.")],-1)),a(M)]),_:1,__:[10]},8,["code"])]),_:1})]),_:1})}}};export{$e as default};
