import{V as $,a as W,b as w,d as z}from"./VList-BD6Dg9I8.js";import{V as L}from"./VListItemAction-BMnkLarI.js";import{r as V,f as C,o as c,e as l,b as e,s as t,af as A,Z as v,b7 as M,b8 as J,aU as D,l as o,c as h,d as n,bd as T,be as j,b1 as N,a$ as B,k as g}from"./main-7JdyGFby.js";import{V as a}from"./VChip-C72F9fhC.js";import{V as R}from"./VMenu-D3AJz5Bm.js";import{_ as U}from"./AppCombobox-DeyBi4u4.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as x}from"./VAvatar-sg7CZdU7.js";import{_ as F}from"./AppCardCode-CUjMQLDl.js";import{V as Y,a as d}from"./VRow-GpmvwSSA.js";import"./ssrBoot-CA1KQA2w.js";import"./VImg-Bk3huQTU.js";import"./VDivider-CIpTZ8Ni.js";import"./VSlideGroup-B-2l8qWb.js";import"./VOverlay-BMzCYiWA.js";import"./easing-Bybner-F.js";import"./delay-9Hi4eTuF.js";import"./lazy-cOdXnimE.js";import"./scopeId-j0VLF_1N.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-B9GC1vyq.js";import"./form-BuGlugVy.js";import"./VSelect-bXJTNHr2.js";import"./VTextField-DdAXD61i.js";/* empty css                   */import"./VCounter-muzn6vBk.js";import"./VField-Cnag0GiO.js";import"./VInput-U8KQD51r.js";import"./VCheckboxBtn-CBQDHvrp.js";import"./VSelectionControl-lb_mBfMr.js";import"./filter-D7y4hkNL.js";import"./vue3-perfect-scrollbar-BTKqCwUF.js";import"./VCard-D0LXqtBI.js";import"./VCardText-DYTBPo8J.js";/* empty css              */const O={__name:"DemoChipExpandable",setup(u){const i=V(!1);return(r,m)=>(c(),C(R,{modelValue:o(i),"onUpdate:modelValue":m[1]||(m[1]=p=>D(i)?i.value=p:null),transition:"scale-transition"},{activator:l(({props:p})=>[e(a,M(J(p)),{default:l(()=>m[2]||(m[2]=[t(" VueJS ")])),_:2,__:[2]},1040)]),default:l(()=>[e($,null,{default:l(()=>[e(W,null,{append:l(()=>[e(L,{class:"ms-3"},{default:l(()=>[e(A,{icon:"",variant:"text",size:"x-small",color:"default",onClick:m[0]||(m[0]=p=>i.value=!1)},{default:l(()=>[e(v,{size:"20",icon:"tabler-x"})]),_:1})]),_:1})]),default:l(()=>[e(w,{class:"mb-2"},{default:l(()=>m[3]||(m[3]=[t(" VueJS ")])),_:1,__:[3]}),e(z,null,{default:l(()=>m[4]||(m[4]=[t("The Progressive JavaScript Framework")])),_:1,__:[4]})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},Z={__name:"DemoChipInSelects",setup(u){const i=V(["Programming","Playing games","Sleeping"]),r=V(["Streaming","Eating","Programming","Playing games","Sleeping"]);return(m,p)=>{const b=U;return c(),C(b,{modelValue:o(i),"onUpdate:modelValue":p[0]||(p[0]=_=>D(i)?i.value=_:null),chips:"",clearable:"",multiple:"","closable-chips":"","clear-icon":"tabler-circle-x",items:o(r),label:"Your favorite hobbies","prepend-icon":"tabler-filter"},null,8,["modelValue","items"])}}},q={},G={class:"demo-space-x"};function H(u,i){return c(),h("div",G,[e(a,{size:"x-small"},{default:l(()=>i[0]||(i[0]=[t(" x-small chip ")])),_:1,__:[0]}),e(a,{size:"small"},{default:l(()=>i[1]||(i[1]=[t(" small chip ")])),_:1,__:[1]}),e(a,{size:"default"},{default:l(()=>i[2]||(i[2]=[t(" Default ")])),_:1,__:[2]}),e(a,{size:"large"},{default:l(()=>i[3]||(i[3]=[t(" large chip ")])),_:1,__:[3]}),e(a,{size:"x-large"},{default:l(()=>i[4]||(i[4]=[t(" x-large chip ")])),_:1,__:[4]})])}const K=y(q,[["render",H]]),Q={class:"demo-space-x"},X={__name:"DemoChipWithAvatar",setup(u){return(i,r)=>(c(),h("div",Q,[e(a,null,{default:l(()=>[e(x,{start:"",image:o(T)},null,8,["image"]),r[0]||(r[0]=n("span",null,"John Doe",-1))]),_:1,__:[0]}),e(a,null,{default:l(()=>[e(x,{start:"",image:o(j)},null,8,["image"]),r[1]||(r[1]=n("span",null,"Darcy Nooser",-1))]),_:1,__:[1]}),e(a,{pill:"",label:!1,"prepend-avatar":o(N)},{default:l(()=>r[2]||(r[2]=[n("span",null,"Felicia Risker",-1)])),_:1,__:[2]},8,["prepend-avatar"]),e(a,{pill:"",label:!1},{default:l(()=>[e(x,{start:"",image:o(B)},null,8,["image"]),r[3]||(r[3]=n("span",null,"Minnie Mostly",-1))]),_:1,__:[3]})]))}},ii={},ei={class:"demo-space-x"};function li(u,i){return c(),h("div",ei,[e(a,null,{default:l(()=>[e(v,{start:"",icon:"tabler-user"}),i[0]||(i[0]=t(" Account "))]),_:1,__:[0]}),e(a,{color:"primary"},{default:l(()=>[e(v,{start:"",icon:"tabler-star"}),i[1]||(i[1]=t(" Premium "))]),_:1,__:[1]}),e(a,{color:"secondary"},{default:l(()=>[e(v,{start:"",icon:"tabler-cake"}),i[2]||(i[2]=t(" 1 Year "))]),_:1,__:[2]}),e(a,{color:"success"},{default:l(()=>[e(v,{start:"",icon:"tabler-bell"}),i[3]||(i[3]=t(" Notification "))]),_:1,__:[3]}),e(a,{color:"info"},{default:l(()=>[e(v,{start:"",icon:"tabler-messages"}),i[4]||(i[4]=t(" Message "))]),_:1,__:[4]}),e(a,{color:"warning"},{default:l(()=>[e(v,{start:"",icon:"tabler-alert-triangle"}),i[5]||(i[5]=t(" Warning "))]),_:1,__:[5]}),e(a,{color:"error"},{default:l(()=>[e(v,{start:"",icon:"tabler-alert-circle"}),i[6]||(i[6]=t(" Error "))]),_:1,__:[6]})])}const ti=y(ii,[["render",li]]),ai={class:"demo-space-x"},ri={__name:"DemoChipClosable",setup(u){const i=V(!0),r=V(!0),m=V(!0),p=V(!0),b=V(!0),_=V(!0),S=V(!0);return(I,s)=>(c(),h("div",ai,[o(i)?(c(),C(a,{key:0,closable:"","onClick:close":s[0]||(s[0]=f=>i.value=!o(i))},{default:l(()=>s[7]||(s[7]=[t(" Default ")])),_:1,__:[7]})):g("",!0),o(r)?(c(),C(a,{key:1,closable:"",color:"primary","onClick:close":s[1]||(s[1]=f=>r.value=!o(r))},{default:l(()=>s[8]||(s[8]=[t(" Primary ")])),_:1,__:[8]})):g("",!0),o(m)?(c(),C(a,{key:2,closable:"",color:"secondary","onClick:close":s[2]||(s[2]=f=>m.value=!o(m))},{default:l(()=>s[9]||(s[9]=[t(" Secondary ")])),_:1,__:[9]})):g("",!0),o(p)?(c(),C(a,{key:3,closable:"",color:"success","onClick:close":s[3]||(s[3]=f=>p.value=!o(p))},{default:l(()=>s[10]||(s[10]=[t(" Success ")])),_:1,__:[10]})):g("",!0),o(b)?(c(),C(a,{key:4,closable:"",color:"info","onClick:close":s[4]||(s[4]=f=>b.value=!o(b))},{default:l(()=>s[11]||(s[11]=[t(" Info ")])),_:1,__:[11]})):g("",!0),o(_)?(c(),C(a,{key:5,closable:"",color:"warning","onClick:close":s[5]||(s[5]=f=>_.value=!o(_))},{default:l(()=>s[12]||(s[12]=[t(" Warning ")])),_:1,__:[12]})):g("",!0),o(S)?(c(),C(a,{key:6,closable:"",color:"error","onClick:close":s[6]||(s[6]=f=>S.value=!o(S))},{default:l(()=>s[13]||(s[13]=[t(" Error ")])),_:1,__:[13]})):g("",!0)]))}},oi={},si={class:"demo-space-x"};function ni(u,i){return c(),h("div",si,[e(a,{label:!1},{default:l(()=>i[0]||(i[0]=[t(" Default ")])),_:1,__:[0]}),e(a,{label:!1,color:"primary"},{default:l(()=>i[1]||(i[1]=[t(" Primary ")])),_:1,__:[1]}),e(a,{label:!1,color:"secondary"},{default:l(()=>i[2]||(i[2]=[t(" Secondary ")])),_:1,__:[2]}),e(a,{label:!1,color:"success"},{default:l(()=>i[3]||(i[3]=[t(" Success ")])),_:1,__:[3]}),e(a,{label:!1,color:"info"},{default:l(()=>i[4]||(i[4]=[t(" Info ")])),_:1,__:[4]}),e(a,{label:!1,color:"warning"},{default:l(()=>i[5]||(i[5]=[t(" Warning ")])),_:1,__:[5]}),e(a,{label:!1,color:"error"},{default:l(()=>i[6]||(i[6]=[t(" Error ")])),_:1,__:[6]})])}const pi=y(oi,[["render",ni]]),ci={},mi={class:"demo-space-x"};function ui(u,i){return c(),h("div",mi,[e(a,{variant:"outlined"},{default:l(()=>i[0]||(i[0]=[t(" Default ")])),_:1,__:[0]}),e(a,{color:"primary",variant:"outlined"},{default:l(()=>i[1]||(i[1]=[t(" Primary ")])),_:1,__:[1]}),e(a,{color:"secondary",variant:"outlined"},{default:l(()=>i[2]||(i[2]=[t(" Secondary ")])),_:1,__:[2]}),e(a,{color:"success",variant:"outlined"},{default:l(()=>i[3]||(i[3]=[t(" Success ")])),_:1,__:[3]}),e(a,{color:"info",variant:"outlined"},{default:l(()=>i[4]||(i[4]=[t(" Info ")])),_:1,__:[4]}),e(a,{color:"warning",variant:"outlined"},{default:l(()=>i[5]||(i[5]=[t(" Warning ")])),_:1,__:[5]}),e(a,{color:"error",variant:"outlined"},{default:l(()=>i[6]||(i[6]=[t(" Error ")])),_:1,__:[6]})])}const di=y(ci,[["render",ui]]),Vi={},Ci={class:"demo-space-x"};function fi(u,i){return c(),h("div",Ci,[e(a,{variant:"elevated"},{default:l(()=>i[0]||(i[0]=[t(" Default ")])),_:1,__:[0]}),e(a,{color:"primary",variant:"elevated"},{default:l(()=>i[1]||(i[1]=[t(" Primary ")])),_:1,__:[1]}),e(a,{color:"secondary",variant:"elevated"},{default:l(()=>i[2]||(i[2]=[t(" Secondary ")])),_:1,__:[2]}),e(a,{color:"success",variant:"elevated"},{default:l(()=>i[3]||(i[3]=[t(" Success ")])),_:1,__:[3]}),e(a,{color:"info",variant:"elevated"},{default:l(()=>i[4]||(i[4]=[t(" Info ")])),_:1,__:[4]}),e(a,{color:"warning",variant:"elevated"},{default:l(()=>i[5]||(i[5]=[t(" Warning ")])),_:1,__:[5]}),e(a,{color:"error",variant:"elevated"},{default:l(()=>i[6]||(i[6]=[t(" Error ")])),_:1,__:[6]})])}const vi=y(Vi,[["render",fi]]),hi={},bi={class:"demo-space-x"};function _i(u,i){return c(),h("div",bi,[e(a,null,{default:l(()=>i[0]||(i[0]=[t(" Default ")])),_:1,__:[0]}),e(a,{color:"primary"},{default:l(()=>i[1]||(i[1]=[t(" Primary ")])),_:1,__:[1]}),e(a,{color:"secondary"},{default:l(()=>i[2]||(i[2]=[t(" Secondary ")])),_:1,__:[2]}),e(a,{color:"success"},{default:l(()=>i[3]||(i[3]=[t(" Success ")])),_:1,__:[3]}),e(a,{color:"info"},{default:l(()=>i[4]||(i[4]=[t(" Info ")])),_:1,__:[4]}),e(a,{color:"warning"},{default:l(()=>i[5]||(i[5]=[t(" Warning ")])),_:1,__:[5]}),e(a,{color:"error"},{default:l(()=>i[6]||(i[6]=[t(" Error ")])),_:1,__:[6]})])}const gi=y(hi,[["render",_i]]),yi={ts:`<script lang="ts" setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<script setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`},Si={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`},xi={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`},Ii={ts:`<script lang="ts" setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle class="mb-2">
          VueJS
        </VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-3">
            <VBtn
              icon
              variant="text"
              size="x-small"
              color="default"
              @click="isMenuVisible = false"
            >
              <VIcon
                size="20"
                icon="tabler-x"
              />
            </VBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`,js:`<script setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle class="mb-2">
          VueJS
        </VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-3">
            <VBtn
              icon
              variant="text"
              size="x-small"
              color="default"
              @click="isMenuVisible = false"
            >
              <VIcon
                size="20"
                icon="tabler-x"
              />
            </VBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`},Di={ts:`<script lang="ts" setup>
const chips = ref(['Programming', 'Playing games', 'Sleeping'])
const items = ref(['Streaming', 'Eating', 'Programming', 'Playing games', 'Sleeping'])
<\/script>

<template>
  <AppCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="tabler-circle-x"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="tabler-filter"
  />
</template>
`,js:`<script setup>
const chips = ref([
  'Programming',
  'Playing games',
  'Sleeping',
])

const items = ref([
  'Streaming',
  'Eating',
  'Programming',
  'Playing games',
  'Sleeping',
])
<\/script>

<template>
  <AppCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="tabler-circle-x"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="tabler-filter"
  />
</template>
`},ki={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`},Pi={ts:`<template>
  <div class="demo-space-x">
    <VChip :label="false">
      Default
    </VChip>

    <VChip
      :label="false"
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      :label="false"
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      :label="false"
      color="success"
    >
      Success
    </VChip>

    <VChip
      :label="false"
      color="info"
    >
      Info
    </VChip>

    <VChip
      :label="false"
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      :label="false"
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip :label="false">
      Default
    </VChip>

    <VChip
      :label="false"
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      :label="false"
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      :label="false"
      color="success"
    >
      Success
    </VChip>

    <VChip
      :label="false"
      color="info"
    >
      Info
    </VChip>

    <VChip
      :label="false"
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      :label="false"
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`},Ei={ts:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip size="default">
      Default
    </VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip size="default">
      Default
    </VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`},$i={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip>
      <VAvatar
        start
        :image="avatar1"
      />
      <span>John Doe</span>
    </VChip>

    <VChip>
      <VAvatar
        start
        :image="avatar2"
      />
      <span>Darcy Nooser</span>
    </VChip>

    <VChip
      pill
      :label="false"
      :prepend-avatar="avatar3"
    >
      <span>Felicia Risker</span>
    </VChip>

    <VChip
      pill
      :label="false"
    >
      <VAvatar
        start
        :image="avatar4"
      />
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip>
      <VAvatar
        start
        :image="avatar1"
      />
      <span>John Doe</span>
    </VChip>

    <VChip>
      <VAvatar
        start
        :image="avatar2"
      />
      <span>Darcy Nooser</span>
    </VChip>

    <VChip
      pill
      :label="false"
      :prepend-avatar="avatar3"
    >
      <span>Felicia Risker</span>
    </VChip>

    <VChip
      pill
      :label="false"
    >
      <VAvatar
        start
        :image="avatar4"
      />
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`},Wi={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      <VIcon
        start
        icon="tabler-user"
      />
      Account
    </VChip>

    <VChip color="primary">
      <VIcon
        start
        icon="tabler-star"
      />
      Premium
    </VChip>

    <VChip color="secondary">
      <VIcon
        start
        icon="tabler-cake"
      />
      1 Year
    </VChip>

    <VChip color="success">
      <VIcon
        start
        icon="tabler-bell"
      />
      Notification
    </VChip>

    <VChip color="info">
      <VIcon
        start
        icon="tabler-messages"
      />
      Message
    </VChip>

    <VChip color="warning">
      <VIcon
        start
        icon="tabler-alert-triangle"
      />
      Warning
    </VChip>

    <VChip color="error">
      <VIcon
        start
        icon="tabler-alert-circle"
      />
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      <VIcon
        start
        icon="tabler-user"
      />
      Account
    </VChip>

    <VChip color="primary">
      <VIcon
        start
        icon="tabler-star"
      />
      Premium
    </VChip>

    <VChip color="secondary">
      <VIcon
        start
        icon="tabler-cake"
      />
      1 Year
    </VChip>

    <VChip color="success">
      <VIcon
        start
        icon="tabler-bell"
      />
      Notification
    </VChip>

    <VChip color="info">
      <VIcon
        start
        icon="tabler-messages"
      />
      Message
    </VChip>

    <VChip color="warning">
      <VIcon
        start
        icon="tabler-alert-triangle"
      />
      Warning
    </VChip>

    <VChip color="error">
      <VIcon
        start
        icon="tabler-alert-circle"
      />
      Error
    </VChip>
  </div>
</template>
`},de={__name:"chip",setup(u){return(i,r)=>{const m=gi,p=F,b=vi,_=di,S=pi,I=ri,s=ti,f=X,k=K,P=Z,E=O;return c(),C(Y,{class:"match-height"},{default:l(()=>[e(d,{cols:"12",md:"6"},{default:l(()=>[e(p,{title:"Color",code:o(Si)},{default:l(()=>[r[0]||(r[0]=n("p",null,[t("Use "),n("code",null,"color"),t(" prop to change the background color of chips.")],-1)),e(m)]),_:1,__:[0]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(p,{title:"Elevated",code:o(xi)},{default:l(()=>[r[1]||(r[1]=n("p",null,[t("Use "),n("code",null,"elevated"),t(" variant option to create filled chips.")],-1)),e(b)]),_:1,__:[1]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(p,{title:"Outlined",code:o(ki)},{default:l(()=>[r[2]||(r[2]=n("p",null,[t("Use "),n("code",null,"outlined"),t(" variant option to create outline border chips.")],-1)),e(_)]),_:1,__:[2]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(p,{title:"Rounded",code:o(Pi)},{default:l(()=>[r[3]||(r[3]=n("p",null,[t("To use the rounded chip, set "),n("code",null,"label"),t(" props value to "),n("strong",null,"false"),t(".")],-1)),e(S)]),_:1,__:[3]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(p,{title:"Closable",code:o(yi)},{default:l(()=>[r[4]||(r[4]=n("p",null,[t("Closable chips can be controlled with a "),n("code",null,"v-model"),t(".")],-1)),e(I)]),_:1,__:[4]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(p,{title:"With Icon",code:o(Wi)},{default:l(()=>[r[5]||(r[5]=n("p",null,"Chips can use text or any icon available in the Material Icons font library.",-1)),e(s)]),_:1,__:[5]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(p,{title:"With Avatar",code:o($i)},{default:l(()=>[r[6]||(r[6]=n("p",null,[t("Use "),n("code",null,"pill"),t(" prop to remove the "),n("code",null,"v-avatar"),t(" padding.")],-1)),e(f)]),_:1,__:[6]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(p,{title:"Sizes",code:o(Ei)},{default:l(()=>[r[7]||(r[7]=n("p",null,[t("The "),n("code",null,"v-chip"),t(" component can have various sizes from "),n("code",null,"x-small"),t(" to "),n("code",null,"x-large"),t(".")],-1)),e(k)]),_:1,__:[7]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(p,{title:"In Selects",code:o(Di)},{default:l(()=>[r[8]||(r[8]=n("p",null,[t("Selects can use "),n("code",null,"chips"),t(" to display the selected data. Try adding your own tags below.")],-1)),e(P)]),_:1,__:[8]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(p,{title:"Expandable",code:o(Ii)},{default:l(()=>[r[9]||(r[9]=n("p",null,[t("Chips can be combined with "),n("code",null,"v-menu"),t(" to enable a specific set of actions for a chip.")],-1)),e(E)]),_:1,__:[9]},8,["code"])]),_:1})]),_:1})}}};export{de as default};
