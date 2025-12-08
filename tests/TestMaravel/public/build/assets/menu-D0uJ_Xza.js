import{V as l,a as x}from"./VList-BD6Dg9I8.js";import{V as L}from"./VTooltip-MyqPu7tM.js";import{f as b,o as V,e,b as t,d as p,af as m,b7 as c,b8 as d,p as M,s as i,r as y,a as k,l as v,bd as h,aU as C,c as O,F as D,h as P,t as S}from"./main-7JdyGFby.js";import{V as u}from"./VMenu-D3AJz5Bm.js";import{V as I,d as A}from"./VCard-D0LXqtBI.js";import{V as $}from"./VDivider-CIpTZ8Ni.js";import{V as j}from"./VCardText-DYTBPo8J.js";import{_ as F}from"./AppCardCode-CUjMQLDl.js";import{V as E,a as f}from"./VRow-GpmvwSSA.js";import"./ssrBoot-CA1KQA2w.js";import"./VImg-Bk3huQTU.js";import"./VAvatar-sg7CZdU7.js";import"./VOverlay-BMzCYiWA.js";import"./easing-Bybner-F.js";import"./delay-9Hi4eTuF.js";import"./lazy-cOdXnimE.js";import"./scopeId-j0VLF_1N.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-B9GC1vyq.js";import"./vue3-perfect-scrollbar-BTKqCwUF.js";/* empty css              */const R={__name:"DemoMenuActivatorAndTooltip",setup(_){const a=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(s,o)=>(V(),b(u,{location:"top"},{activator:e(({props:n})=>[t(L,{location:"top"},{activator:e(({props:r})=>[t(m,c(d(M(n,r))),{default:e(()=>o[0]||(o[0]=[i(" Dropdown w/ Tooltip ")])),_:2,__:[0]},1040)]),default:e(()=>[o[1]||(o[1]=p("span",null,"I am a Tooltip",-1))]),_:2,__:[1]},1024)]),default:e(()=>[t(l,{items:a})]),_:1}))}},G={__name:"DemoMenuPopover",setup(_){const a=y(!1);return(s,o)=>{const n=k("IconBtn");return V(),b(u,{modelValue:v(a),"onUpdate:modelValue":o[0]||(o[0]=r=>C(a)?a.value=r:null),location:"top"},{activator:e(({props:r})=>[t(m,c(d(r)),{default:e(()=>o[1]||(o[1]=[i(" Menu as Popover ")])),_:2,__:[1]},1040)]),default:e(()=>[t(I,{"max-width":"300"},{default:e(()=>[t(l,null,{default:e(()=>[t(x,{"prepend-avatar":v(h),title:"John Leider",subtitle:"Founder of Vuetify",class:"mx-0"},null,8,["prepend-avatar"])]),_:1}),t($),t(j,null,{default:e(()=>o[2]||(o[2]=[i(" Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake. Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee. ")])),_:1,__:[2]}),t(A,null,{default:e(()=>[t(n,{icon:"tabler-heart"}),t(n,{icon:"tabler-bookmark"}),t(n,{icon:"tabler-thumb-down"})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},H={__name:"DemoMenuOpenOnHover",setup(_){const a=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(s,o)=>(V(),b(u,{"open-on-hover":""},{activator:e(({props:n})=>[t(m,c(d(n)),{default:e(()=>o[0]||(o[0]=[i(" On hover ")])),_:2,__:[0]},1040)]),default:e(()=>[t(l,{items:a})]),_:1}))}},J={class:"demo-space-x"},N={__name:"DemoMenuLocation",setup(_){const a=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(s,o)=>(V(),O("div",J,[t(u,{location:"top"},{activator:e(({props:n})=>[t(m,c(d(n)),{default:e(()=>o[0]||(o[0]=[i(" Top ")])),_:2,__:[0]},1040)]),default:e(()=>[t(l,{items:a})]),_:1}),t(u,{location:"bottom"},{activator:e(({props:n})=>[t(m,c(d(n)),{default:e(()=>o[1]||(o[1]=[i(" Bottom ")])),_:2,__:[1]},1040)]),default:e(()=>[t(l,{items:a})]),_:1}),t(u,{location:"start"},{activator:e(({props:n})=>[t(m,c(d(n)),{default:e(()=>o[2]||(o[2]=[i(" Start ")])),_:2,__:[2]},1040)]),default:e(()=>[t(l,{items:a})]),_:1}),t(u,{location:"end"},{activator:e(({props:n})=>[t(m,c(d(n)),{default:e(()=>o[3]||(o[3]=[i(" End ")])),_:2,__:[3]},1040)]),default:e(()=>[t(l,{items:a})]),_:1})]))}},U={class:"demo-space-x"},X={__name:"DemoMenuCustomTransitions",setup(_){const a=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(s,o)=>(V(),O("div",U,[t(u,{transition:"scale-transition"},{activator:e(({props:n})=>[t(m,c(d(n)),{default:e(()=>o[0]||(o[0]=[i(" Scale Transition ")])),_:2,__:[0]},1040)]),default:e(()=>[t(l,{items:a})]),_:1}),t(u,{transition:"slide-x-transition"},{activator:e(({props:n})=>[t(m,c(d(n)),{default:e(()=>o[1]||(o[1]=[i(" Slide X Transition ")])),_:2,__:[1]},1040)]),default:e(()=>[t(l,{items:a})]),_:1}),t(u,{transition:"slide-y-transition"},{activator:e(({props:n})=>[t(m,c(d(n)),{default:e(()=>o[2]||(o[2]=[i(" Slide Y Transition ")])),_:2,__:[2]},1040)]),default:e(()=>[t(l,{items:a})]),_:1})]))}},Y={class:"demo-space-x"},z={__name:"DemoMenuBasic",setup(_){const a=["primary","secondary","success","info","warning","error"],s=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(o,n)=>(V(),O("div",Y,[(V(),O(D,null,P(a,r=>t(u,{key:r},{activator:e(({props:B})=>[t(m,M({color:r,ref_for:!0},B),{default:e(()=>[i(S(r),1)]),_:2},1040,["color"])]),default:e(()=>[t(l,{items:s})]),_:2},1024)),64))]))}},W={ts:`<script lang="ts" setup>
import { mergeProps } from 'vue'

const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <VMenu location="top">
    <template #activator="{ props: menuProps }">
      <VTooltip location="top">
        <template #activator="{ props: tooltipProps }">
          <VBtn v-bind="mergeProps(menuProps, tooltipProps)">
            Dropdown w/ Tooltip
          </VBtn>
        </template>
        <span>I am a Tooltip</span>
      </VTooltip>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`,js:`<script setup>
import { mergeProps } from 'vue'

const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <VMenu location="top">
    <template #activator="{ props: menuProps }">
      <VTooltip location="top">
        <template #activator="{ props: tooltipProps }">
          <VBtn v-bind="mergeProps(menuProps, tooltipProps)">
            Dropdown w/ Tooltip
          </VBtn>
        </template>
        <span>I am a Tooltip</span>
      </VTooltip>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`},q={ts:`<script lang="ts" setup>
const menusVariant = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu
      v-for="menu in menusVariant"
      :key="menu"
    >
      <template #activator="{ props }">
        <VBtn
          :color="menu"
          v-bind="props"
        >
          {{ menu }}
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const menusVariant = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error',
]

const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu
      v-for="menu in menusVariant"
      :key="menu"
    >
      <template #activator="{ props }">
        <VBtn
          :color="menu"
          v-bind="props"
        >
          {{ menu }}
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},K={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu transition="scale-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Scale Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-x-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide X Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-y-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide Y Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu transition="scale-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Scale Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-x-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide X Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-y-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide Y Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},Q={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu location="top">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Top
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="bottom">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Bottom
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="start">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Start
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="end">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          End
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu location="top">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Top
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="bottom">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Bottom
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="start">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Start
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="end">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          End
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},Z={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <VMenu open-on-hover>
    <template #activator="{ props }">
      <VBtn v-bind="props">
        On hover
      </VBtn>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <VMenu open-on-hover>
    <template #activator="{ props }">
      <VBtn v-bind="props">
        On hover
      </VBtn>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`},tt={ts:`<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'

const menu = ref(false)
<\/script>

<template>
  <VMenu
    v-model="menu"
    location="top"
  >
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Menu as Popover
      </VBtn>
    </template>

    <VCard max-width="300">
      <VList>
        <VListItem
          :prepend-avatar="avatar1"
          title="John Leider"
          subtitle="Founder of Vuetify"
          class="mx-0"
        />
      </VList>

      <VDivider />

      <VCardText>
        Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake.
        Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee.
      </VCardText>

      <VCardActions>
        <IconBtn icon="tabler-heart" />
        <IconBtn icon="tabler-bookmark" />
        <IconBtn icon="tabler-thumb-down" />
      </VCardActions>
    </VCard>
  </VMenu>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'

const menu = ref(false)
<\/script>

<template>
  <VMenu
    v-model="menu"
    location="top"
  >
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Menu as Popover
      </VBtn>
    </template>

    <VCard max-width="300">
      <VList>
        <VListItem
          :prepend-avatar="avatar1"
          title="John Leider"
          subtitle="Founder of Vuetify"
          class="mx-0"
        />
      </VList>

      <VDivider />

      <VCardText>
        Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake.
        Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee.
      </VCardText>

      <VCardActions>
        <IconBtn icon="tabler-heart" />
        <IconBtn icon="tabler-bookmark" />
        <IconBtn icon="tabler-thumb-down" />
      </VCardActions>
    </VCard>
  </VMenu>
</template>
`},wt={__name:"menu",setup(_){return(a,s)=>{const o=z,n=F,r=X,B=N,w=H,g=G,T=R;return V(),b(E,{class:"match-height"},{default:e(()=>[t(f,{cols:"12",md:"6"},{default:e(()=>[t(n,{title:"Basic",code:v(q)},{default:e(()=>[s[0]||(s[0]=p("p",null," Remember to put the element that activates the menu in the activator slot. ",-1)),t(o)]),_:1,__:[0]},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:e(()=>[t(n,{title:"Custom transitions",code:v(K)},{default:e(()=>[s[1]||(s[1]=p("p",null,[i("Vuetify comes with 3 standard transitions, "),p("code",null,"scale"),i(", "),p("code",null,"slide-x"),i(" and "),p("code",null,"slide-y"),i(". Use "),p("code",null,"transition"),i(" prop to add transition to a menu.")],-1)),t(r)]),_:1,__:[1]},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:e(()=>[t(n,{title:"Location",code:v(Q)},{default:e(()=>[s[2]||(s[2]=p("p",null,[i("Menu can be offset relative to the activator by using the "),p("code",null,"location"),i(" prop.")],-1)),t(B)]),_:1,__:[2]},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:e(()=>[t(n,{title:"Open on hover",code:v(Z)},{default:e(()=>[s[3]||(s[3]=p("p",null,[i("Menus can be accessed using hover instead of clicking with the "),p("code",null,"open-on-hover"),i(" prop.")],-1)),t(w)]),_:1,__:[3]},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:e(()=>[t(n,{title:"Popover",code:v(tt)},{default:e(()=>[s[4]||(s[4]=p("p",null,"A menu can be configured to be static when opened, allowing it to function as a popover. This can be useful when there are multiple interactive items within the menu contents.",-1)),t(g)]),_:1,__:[4]},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:e(()=>[t(n,{title:"Activator and tooltip",code:v(W)},{default:e(()=>[s[5]||(s[5]=p("p",null,[i("With the new "),p("code",null,"v-slot"),i(" syntax, nested activators such as those seen with a "),p("code",null,"v-menu"),i(" and "),p("code",null,"v-tooltip"),i(" attached to the same activator button, need a particular setup in order to function correctly")],-1)),t(T)]),_:1,__:[5]},8,["code"])]),_:1})]),_:1})}}};export{wt as default};
