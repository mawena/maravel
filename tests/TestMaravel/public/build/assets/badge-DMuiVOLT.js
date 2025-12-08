import{c as u,o as f,b as t,e as a,l as o,bd as l,af as B,s,f as w,F as H,h as k,t as O,r as _,M as I,Z as p,d as r}from"./main-7JdyGFby.js";import{V as i}from"./VAvatar-sg7CZdU7.js";import{V as m}from"./VImg-Bk3huQTU.js";import{V as n}from"./VBadge-D5jKdopQ.js";import{a as $,V as S}from"./VTabs-B0iGdVsU.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as E}from"./AppCardCode-CUjMQLDl.js";import{V as C,a as v}from"./VRow-GpmvwSSA.js";import"./forwardRefs-C-GTDzx5.js";import"./easing-Bybner-F.js";import"./VWindowItem-D3zVc_00.js";import"./lazy-cOdXnimE.js";import"./ssrBoot-CA1KQA2w.js";import"./VSlideGroup-B-2l8qWb.js";import"./scopeId-j0VLF_1N.js";import"./vue3-perfect-scrollbar-BTKqCwUF.js";import"./VCard-D0LXqtBI.js";import"./VCardText-DYTBPo8J.js";import"./VDivider-CIpTZ8Ni.js";/* empty css              */const j={class:"demo-space-x"},N={__name:"DemoBadgeTonal",setup(V){return(c,e)=>(f(),u("div",j,[t(n,{content:"5",class:"v-badge--tonal"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1}),t(n,{content:"1",class:"v-badge--tonal",color:"error"},{default:a(()=>[t(B,{color:"error"},{default:a(()=>e[0]||(e[0]=[s(" Default ")])),_:1,__:[0]})]),_:1}),t(n,{icon:"tabler-lock-open",color:"info",class:"v-badge--tonal"},{default:a(()=>[t(i,null,{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1})]))}},M={class:"demo-space-x"},Y={__name:"DemoBadgeMaximumValue",setup(V){return(c,e)=>(f(),u("div",M,[t(n,{content:"99",max:"99","offset-x":"5","offset-y":"-1"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1}),t(n,{content:"100",max:"99","offset-x":"5","offset-y":"-1"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1}),t(n,{content:"1000",max:"999","offset-x":"5","offset-y":"-1"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1})]))}},P={__name:"DemoBadgeTabs",setup(V){const c=[{badge:"3",content:"Item One"},{badge:"1",content:"Item Two"},{badge:"2",content:"Item Three"}];return(e,g)=>(f(),w(S,{grow:""},{default:a(()=>[(f(),u(H,null,k(c,d=>t($,{key:d.content,value:d.content},{default:a(()=>[t(n,{content:d.badge,"offset-x":-18,"offset-y":6},{default:a(()=>[s(O(d.content),1)]),_:2},1032,["content"])]),_:2},1032,["value"])),64))]),_:1}))}},U={class:"demo-space-x"},F={__name:"DemoBadgeShowOnHover",setup(V){const c=_(),e=_(),g=_(),d=I(e),b=I(c),x=I(g);return(A,z)=>(f(),u("div",U,[t(n,{content:"3",transition:"slide-x-transition","model-value":o(d)},{default:a(()=>[t(p,{ref_key:"tRefTwitterBadge",ref:e,size:"25",icon:"tabler-brand-twitter"},null,512)]),_:1},8,["model-value"]),t(n,{content:"5",transition:"scale-transition","model-value":o(b)},{default:a(()=>[t(p,{ref_key:"tRefInstagramBadge",ref:c,size:"25",icon:"tabler-brand-instagram"},null,512)]),_:1},8,["model-value"]),t(n,{content:"1",transition:"slide-x-transition","model-value":o(x)},{default:a(()=>[t(p,{ref_key:"tRefWhatsappBadge",ref:g,size:"25",icon:"tabler-brand-whatsapp"},null,512)]),_:1},8,["model-value"])]))}},L={class:"d-flex align-center"},Z={class:"demo-space-x"},q={__name:"DemoBadgeDynamicNotifications",setup(V){const c=_();return(e,g)=>(f(),u("div",L,[t(n,{content:o(c),"model-value":!!o(c),color:"success",class:"me-5"},{default:a(()=>[t(p,{size:"40",icon:"tabler-brand-vue"})]),_:1},8,["content","model-value"]),r("div",Z,[t(B,{onClick:g[0]||(g[0]=d=>c.value=(o(c)||0)+1)},{default:a(()=>g[2]||(g[2]=[s(" Send Message ")])),_:1,__:[2]}),t(B,{color:"error",onClick:g[1]||(g[1]=d=>c.value=0)},{default:a(()=>g[3]||(g[3]=[s(" Clear Notifications ")])),_:1,__:[3]})])]))}},G={class:"demo-space-x"},J={__name:"DemoBadgeAvatarStatus",setup(V){return(c,e)=>(f(),u("div",G,[t(n,{dot:"",bordered:"",color:"success",location:"bottom end","offset-x":5,"offset-y":1},{default:a(()=>[t(i,{size:"large"},{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1}),t(n,{dot:"",bordered:"",color:"warning",location:"bottom end","offset-x":5,"offset-y":1},{default:a(()=>[t(i,{size:"large"},{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1}),t(n,{dot:"",bordered:"",color:"error",location:"bottom end","offset-x":5,"offset-y":1},{default:a(()=>[t(i,{size:"large"},{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1})]))}},K={class:"demo-space-x"},Q={__name:"DemoBadgeIcon",setup(V){return(c,e)=>(f(),u("div",K,[t(n,null,{badge:a(()=>[t(p,{icon:"tabler-bulb"})]),default:a(()=>[t(i,null,{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1}),t(n,{icon:"tabler-lock-open"},{default:a(()=>[t(i,null,{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1})]))}},X={class:"demo-space-x"},tt={__name:"DemoBadgePosition",setup(V){return(c,e)=>(f(),u("div",X,[t(n,{content:"1",location:"end top"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1}),t(n,{location:"bottom start",content:"2"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1}),t(n,{location:"bottom end",content:"3"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1}),t(n,{location:"top start",content:"4"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1})]))}},at={},et={class:"demo-space-x"};function ot(V,c){return f(),u("div",et,[t(n,{dot:"",color:"primary"},{default:a(()=>[t(p,{size:"25",icon:"tabler-brand-instagram"})]),_:1}),t(n,{dot:"",color:"secondary"},{default:a(()=>[t(p,{size:"25",icon:"tabler-brand-instagram"})]),_:1}),t(n,{dot:"",color:"success"},{default:a(()=>[t(p,{size:"25",icon:"tabler-brand-instagram"})]),_:1}),t(n,{dot:"",color:"info"},{default:a(()=>[t(p,{size:"25",icon:"tabler-brand-instagram"})]),_:1}),t(n,{dot:"",color:"warning"},{default:a(()=>[t(p,{size:"25",icon:"tabler-brand-instagram"})]),_:1}),t(n,{dot:"",color:"error"},{default:a(()=>[t(p,{size:"25",icon:"tabler-brand-instagram"})]),_:1})])}const nt=W(at,[["render",ot]]),st={class:"demo-space-x d-flex align-center flex-wrap"},rt={__name:"DemoBadgeStyle",setup(V){return(c,e)=>(f(),u("div",st,[t(n,{content:"1"},{default:a(()=>[t(B,{variant:"tonal"},{default:a(()=>e[0]||(e[0]=[s(" Default ")])),_:1,__:[0]})]),_:1}),t(n,{content:"5",bordered:""},{default:a(()=>[t(B,{variant:"tonal"},{default:a(()=>e[1]||(e[1]=[s(" Border ")])),_:1,__:[1]})]),_:1}),t(n,{dot:"",location:"bottom end","offset-x":"3","offset-y":"3"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1}),t(n,{inline:"",content:"5"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1}),t(n,{rounded:"sm",content:"5"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1})]))}},dt={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      dot
      bordered
      color="success"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="warning"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="error"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      dot
      bordered
      color="success"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="warning"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="error"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},ct={ts:`<template>
  <div class="demo-space-x">
    <VBadge
      dot
      color="primary"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="secondary"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="success"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="info"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="warning"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="error"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBadge
      dot
      color="primary"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="secondary"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="success"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="info"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="warning"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="error"
    >
      <VIcon
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>
  </div>
</template>
`},lt={ts:`<script lang="ts" setup>
const notifications = ref<number>()
<\/script>

<template>
  <div class="d-flex align-center">
    <VBadge
      :content="notifications"
      :model-value="!!notifications"
      color="success"
      class="me-5"
    >
      <VIcon
        size="40"
        icon="tabler-brand-vue"
      />
    </VBadge>

    <div class="demo-space-x">
      <VBtn @click="notifications = (notifications || 0) + 1">
        Send Message
      </VBtn>

      <VBtn
        color="error"
        @click="notifications = 0"
      >
        Clear Notifications
      </VBtn>
    </div>
  </div>
</template>
`,js:`<script setup>
const notifications = ref()
<\/script>

<template>
  <div class="d-flex align-center">
    <VBadge
      :content="notifications"
      :model-value="!!notifications"
      color="success"
      class="me-5"
    >
      <VIcon
        size="40"
        icon="tabler-brand-vue"
      />
    </VBadge>

    <div class="demo-space-x">
      <VBtn @click="notifications = (notifications || 0) + 1">
        Send Message
      </VBtn>

      <VBtn
        color="error"
        @click="notifications = 0"
      >
        Clear Notifications
      </VBtn>
    </div>
  </div>
</template>
`},it={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- avatar -->
    <VBadge>
      <template #badge>
        <VIcon icon="tabler-bulb" />
      </template>

      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- icon -->
    <VBadge icon="tabler-lock-open">
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- avatar -->
    <VBadge>
      <template #badge>
        <VIcon icon="tabler-bulb" />
      </template>

      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- icon -->
    <VBadge icon="tabler-lock-open">
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},mt={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="99"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="100"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="1000"
      max="999"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="99"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="100"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="1000"
      max="999"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},gt={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- 👉 Top End -->
    <VBadge
      content="1"
      location="end top"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom Start -->
    <VBadge
      location="bottom start"
      content="2"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom End -->
    <VBadge
      location="bottom end"
      content="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 top Start -->
    <VBadge
      location="top start"
      content="4"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- 👉 Top End -->
    <VBadge
      content="1"
      location="end top"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom Start -->
    <VBadge
      location="bottom start"
      content="2"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom End -->
    <VBadge
      location="bottom end"
      content="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 top Start -->
    <VBadge
      location="top start"
      content="4"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},ft={ts:`<script lang="ts" setup>
const tRefInstagramBadge = ref()
const tRefTwitterBadge = ref()
const tRefWhatsappBadge = ref()

const showTwitterBadgeOnHover = useElementHover(tRefTwitterBadge)
const showInstagramBadgeOnHover = useElementHover(tRefInstagramBadge)
const showWhatsappBadgeOnHover = useElementHover(tRefWhatsappBadge)
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="3"
      transition="slide-x-transition"
      :model-value="showTwitterBadgeOnHover"
    >
      <VIcon
        ref="tRefTwitterBadge"
        size="25"
        icon="tabler-brand-twitter"
      />
    </VBadge>

    <VBadge
      content="5"
      transition="scale-transition"
      :model-value="showInstagramBadgeOnHover"
    >
      <VIcon
        ref="tRefInstagramBadge"
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      content="1"
      transition="slide-x-transition"
      :model-value="showWhatsappBadgeOnHover"
    >
      <VIcon
        ref="tRefWhatsappBadge"
        size="25"
        icon="tabler-brand-whatsapp"
      />
    </VBadge>
  </div>
</template>
`,js:`<script setup>
const tRefInstagramBadge = ref()
const tRefTwitterBadge = ref()
const tRefWhatsappBadge = ref()
const showTwitterBadgeOnHover = useElementHover(tRefTwitterBadge)
const showInstagramBadgeOnHover = useElementHover(tRefInstagramBadge)
const showWhatsappBadgeOnHover = useElementHover(tRefWhatsappBadge)
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="3"
      transition="slide-x-transition"
      :model-value="showTwitterBadgeOnHover"
    >
      <VIcon
        ref="tRefTwitterBadge"
        size="25"
        icon="tabler-brand-twitter"
      />
    </VBadge>

    <VBadge
      content="5"
      transition="scale-transition"
      :model-value="showInstagramBadgeOnHover"
    >
      <VIcon
        ref="tRefInstagramBadge"
        size="25"
        icon="tabler-brand-instagram"
      />
    </VBadge>

    <VBadge
      content="1"
      transition="slide-x-transition"
      :model-value="showWhatsappBadgeOnHover"
    >
      <VIcon
        ref="tRefWhatsappBadge"
        size="25"
        icon="tabler-brand-whatsapp"
      />
    </VBadge>
  </div>
</template>
`},pt={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x d-flex align-center flex-wrap">
    <!-- default -->
    <VBadge content="1">
      <VBtn variant="tonal">
        Default
      </VBtn>
    </VBadge>

    <!-- bordered -->
    <VBadge
      content="5"
      bordered
    >
      <VBtn variant="tonal">
        Border
      </VBtn>
    </VBadge>

    <!-- dot -->
    <VBadge
      dot
      location="bottom end"
      offset-x="3"
      offset-y="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- inline -->
    <VBadge
      inline
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- Rounded -->
    <VBadge
      rounded="sm"
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x d-flex align-center flex-wrap">
    <!-- default -->
    <VBadge content="1">
      <VBtn variant="tonal">
        Default
      </VBtn>
    </VBadge>

    <!-- bordered -->
    <VBadge
      content="5"
      bordered
    >
      <VBtn variant="tonal">
        Border
      </VBtn>
    </VBadge>

    <!-- dot -->
    <VBadge
      dot
      location="bottom end"
      offset-x="3"
      offset-y="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- inline -->
    <VBadge
      inline
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- Rounded -->
    <VBadge
      rounded="sm"
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},Vt={ts:`<script setup lang="ts">
const tabs = [
  {
    badge: '3',
    content: 'Item One',
  },
  {
    badge: '1',
    content: 'Item Two',
  },
  {
    badge: '2',
    content: 'Item Three',
  },
]
<\/script>

<template>
  <VTabs grow>
    <VTab
      v-for="tab in tabs"
      :key="tab.content"
      :value="tab.content"
    >
      <VBadge
        :content="tab.badge"
        :offset-x="-18"
        :offset-y="6"
      >
        {{ tab.content }}
      </VBadge>
    </VTab>
  </VTabs>
</template>
`,js:`<script setup>
const tabs = [
  {
    badge: '3',
    content: 'Item One',
  },
  {
    badge: '1',
    content: 'Item Two',
  },
  {
    badge: '2',
    content: 'Item Three',
  },
]
<\/script>

<template>
  <VTabs grow>
    <VTab
      v-for="tab in tabs"
      :key="tab.content"
      :value="tab.content"
    >
      <VBadge
        :content="tab.badge"
        :offset-x="-18"
        :offset-y="6"
      >
        {{ tab.content }}
      </VBadge>
    </VTab>
  </VTabs>
</template>
`},vt={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="5"
      class="v-badge--tonal"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- default -->
    <VBadge
      content="1"
      class="v-badge--tonal"
      color="error"
    >
      <VBtn color="error">
        Default
      </VBtn>
    </VBadge>

    <!-- icon -->
    <VBadge
      icon="tabler-lock-open"
      color="info"
      class="v-badge--tonal"
    >
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="5"
      class="v-badge--tonal"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- default -->
    <VBadge
      content="1"
      class="v-badge--tonal"
      color="error"
    >
      <VBtn color="error">
        Default
      </VBtn>
    </VBadge>

    <!-- icon -->
    <VBadge
      icon="tabler-lock-open"
      color="info"
      class="v-badge--tonal"
    >
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},Et={__name:"badge",setup(V){return(c,e)=>{const g=rt,d=E,b=nt,x=tt,A=Q,z=J,y=q,h=F,T=P,D=Y,R=N;return f(),w(C,{class:"match-height"},{default:a(()=>[t(v,{cols:"12",md:"6"},{default:a(()=>[t(d,{title:"Style",code:o(pt)},{default:a(()=>[e[0]||(e[0]=r("p",null,[s("You can use various props like "),r("code",null,"bordered"),s(", "),r("code",null,"dot"),s(", "),r("code",null,"inline"),s(", "),r("code",null,"rounded"),s(" etc. to style the badge.")],-1)),t(g)]),_:1,__:[0]},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(d,{title:"Color",code:o(ct)},{default:a(()=>[e[1]||(e[1]=r("p",null,[s("Use "),r("code",null,"color"),s(" prop to create various background badges.")],-1)),t(b)]),_:1,__:[1]},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(d,{title:"Position",code:o(gt)},{default:a(()=>[e[2]||(e[2]=r("p",null,[s("You can use "),r("code",null,"location"),s(" prop to change the position of the badge. Possible values are "),r("code",null,"top-end"),s(", "),r("code",null,"bottom-end"),s(", "),r("code",null,"bottom-start"),s(", "),r("code",null,"top-start"),s(".")],-1)),t(x)]),_:1,__:[2]},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(d,{title:"Icon",code:o(it)},{default:a(()=>[e[3]||(e[3]=r("p",null,[s("You can use "),r("code",null,"icon"),s(" prop or use "),r("code",null,"slot"),s(" to render the icon")],-1)),t(A)]),_:1,__:[3]},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(d,{title:"Avatar Status",code:o(dt)},{default:a(()=>[e[4]||(e[4]=r("p",null,"You can use badge with avatar as status.",-1)),t(z)]),_:1,__:[4]},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(d,{title:"Dynamic notifications",code:o(lt)},{default:a(()=>[e[5]||(e[5]=r("p",null,"You can incorporate badges with dynamic content to make things such as a notification system.",-1)),t(y)]),_:1,__:[5]},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(d,{title:"Show on hover",code:o(ft)},{default:a(()=>[e[6]||(e[6]=r("p",null,"You can do many things with visibility control, for example, show badge on hover.",-1)),t(h)]),_:1,__:[6]},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(d,{title:"Tabs",code:o(Vt)},{default:a(()=>[e[7]||(e[7]=r("p",null,"Badges help convey information to the user in a variety of ways.",-1)),t(T)]),_:1,__:[7]},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(d,{title:"Maximum Value",code:o(mt)},{default:a(()=>[e[8]||(e[8]=r("p",null,[s("Use "),r("code",null,"max"),s(" prop to cap the value of the badge content")],-1)),t(D)]),_:1,__:[8]},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(d,{title:"Tonal",code:o(vt)},{default:a(()=>[e[9]||(e[9]=r("p",null,[s("Use class "),r("code",null,"v-badge--tonal"),s(" for using tonal variant badge.")],-1)),t(R)]),_:1,__:[9]},8,["code"])]),_:1})]),_:1})}}};export{Et as default};
