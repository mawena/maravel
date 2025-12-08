import{V as c}from"./VPagination-DeWQbSgu.js";import{r as d,c as v,o as g,b as n,aU as m,l as s,f as P,e as r,d as o,s as a}from"./main-7JdyGFby.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as C}from"./AppCardCode-CUjMQLDl.js";import{V as z,a as f}from"./VRow-GpmvwSSA.js";import"./vue3-perfect-scrollbar-BTKqCwUF.js";import"./VCard-D0LXqtBI.js";import"./VAvatar-sg7CZdU7.js";import"./VImg-Bk3huQTU.js";import"./VCardText-DYTBPo8J.js";import"./VDivider-CIpTZ8Ni.js";/* empty css              */const S={class:"d-flex flex-column gap-6 px-4"},j={__name:"DemoPaginationSize",setup(_){const e=d(1),t=d(2),l=d(3);return(i,u)=>(g(),v("div",S,[n(c,{modelValue:s(e),"onUpdate:modelValue":u[0]||(u[0]=p=>m(e)?e.value=p:null),length:7,size:"small"},null,8,["modelValue"]),n(c,{modelValue:s(t),"onUpdate:modelValue":u[1]||(u[1]=p=>m(t)?t.value=p:null),length:7},null,8,["modelValue"]),n(c,{modelValue:s(l),"onUpdate:modelValue":u[2]||(u[2]=p=>m(l)?l.value=p:null),length:7,"total-visible":i.$vuetify.display.xs?1:7,size:"large"},null,8,["modelValue","total-visible"])]))}},w={class:"d-flex flex-column gap-6"},I={__name:"DemoPaginationColor",setup(_){const e=d(1),t=d(2),l=d(3);return(i,u)=>(g(),v("div",w,[n(c,{modelValue:s(e),"onUpdate:modelValue":u[0]||(u[0]=p=>m(e)?e.value=p:null),length:7,"active-color":"success"},null,8,["modelValue"]),n(c,{modelValue:s(t),"onUpdate:modelValue":u[1]||(u[1]=p=>m(t)?t.value=p:null),length:7,"active-color":"error"},null,8,["modelValue"]),n(c,{modelValue:s(l),"onUpdate:modelValue":u[2]||(u[2]=p=>m(l)?l.value=p:null),length:7,"active-color":"info"},null,8,["modelValue"])]))}},T={__name:"DemoPaginationTotalVisible",setup(_){const e=d(1);return(t,l)=>(g(),P(c,{modelValue:s(e),"onUpdate:modelValue":l[0]||(l[0]=i=>m(e)?e.value=i:null),length:15,"total-visible":t.$vuetify.display.mdAndUp?7:3},null,8,["modelValue","total-visible"]))}},B={__name:"DemoPaginationLength",setup(_){const e=d(1);return(t,l)=>(g(),P(c,{modelValue:s(e),"onUpdate:modelValue":l[0]||(l[0]=i=>m(e)?e.value=i:null),length:15},null,8,["modelValue"]))}},E={__name:"DemoPaginationIcons",setup(_){const e=d(1);return(t,l)=>(g(),P(c,{modelValue:s(e),"onUpdate:modelValue":l[0]||(l[0]=i=>m(e)?e.value=i:null),length:5,"prev-icon":"tabler-caret-left","next-icon":"tabler-caret-right"},null,8,["modelValue"]))}},O={};function A(_,e){return g(),P(c,{length:5,disabled:""})}const k=y(O,[["render",A]]),L={__name:"DemoPaginationOutlineCircle",setup(_){const e=d(1);return(t,l)=>(g(),P(c,{modelValue:s(e),"onUpdate:modelValue":l[0]||(l[0]=i=>m(e)?e.value=i:null),variant:"outlined",length:5,rounded:"circle"},null,8,["modelValue"]))}},N={__name:"DemoPaginationCircle",setup(_){const e=d(1);return(t,l)=>(g(),P(c,{modelValue:s(e),"onUpdate:modelValue":l[0]||(l[0]=i=>m(e)?e.value=i:null),length:5,rounded:"circle"},null,8,["modelValue"]))}},R={__name:"DemoPaginationOutline",setup(_){const e=d(1);return(t,l)=>(g(),P(c,{modelValue:s(e),"onUpdate:modelValue":l[0]||(l[0]=i=>m(e)?e.value=i:null),variant:"outlined",length:5},null,8,["modelValue"]))}},Y={__name:"DemoPaginationBasic",setup(_){const e=d(1);return(t,l)=>(g(),P(c,{modelValue:s(e),"onUpdate:modelValue":l[0]||(l[0]=i=>m(e)?e.value=i:null),length:5},null,8,["modelValue"]))}},q={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
  />
</template>
`},F={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    rounded="circle"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    rounded="circle"
  />
</template>
`},G={ts:`<script setup lang="ts">
const pageSuccess = ref(1)
const pageError = ref(2)
const pageInfo = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="pageSuccess"
      :length="7"
      active-color="success"
    />
    <VPagination
      v-model="pageError"
      :length="7"
      active-color="error"
    />
    <VPagination
      v-model="pageInfo"
      :length="7"
      active-color="info"
    />
  </div>
</template>
`,js:`<script setup>
const pageSuccess = ref(1)
const pageError = ref(2)
const pageInfo = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="pageSuccess"
      :length="7"
      active-color="success"
    />
    <VPagination
      v-model="pageError"
      :length="7"
      active-color="error"
    />
    <VPagination
      v-model="pageInfo"
      :length="7"
      active-color="info"
    />
  </div>
</template>
`},H={ts:`<template>
  <VPagination
    :length="5"
    disabled
  />
</template>
`,js:`<template>
  <VPagination
    :length="5"
    disabled
  />
</template>
`},J={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    prev-icon="tabler-caret-left"
    next-icon="tabler-caret-right"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    prev-icon="tabler-caret-left"
    next-icon="tabler-caret-right"
  />
</template>
`},K={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
  />
</template>
`},M={ts:`<script setup lang="ts">
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    variant="outlined"
    :length="5"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    variant="outlined"
    :length="5"
  />
</template>
`},Q={ts:`<script setup lang="ts">
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    variant="outlined"
    :length="5"
    rounded="circle"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    variant="outlined"
    :length="5"
    rounded="circle"
  />
</template>
`},W={ts:`<script setup lang="ts">
const xSmallPagination = ref(1)
const smallPagination = ref(2)
const largePagination = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6 px-4">
    <VPagination
      v-model="xSmallPagination"
      :length="7"
      size="small"
    />
    <VPagination
      v-model="smallPagination"
      :length="7"
    />
    <VPagination
      v-model="largePagination"
      :length="7"
      :total-visible="$vuetify.display.xs ? 1 : 7"
      size="large"
    />
  </div>
</template>
`,js:`<script setup>
const xSmallPagination = ref(1)
const smallPagination = ref(2)
const largePagination = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6 px-4">
    <VPagination
      v-model="xSmallPagination"
      :length="7"
      size="small"
    />
    <VPagination
      v-model="smallPagination"
      :length="7"
    />
    <VPagination
      v-model="largePagination"
      :length="7"
      :total-visible="$vuetify.display.xs ? 1 : 7"
      size="large"
    />
  </div>
</template>
`},X={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
    :total-visible="$vuetify.display.mdAndUp ? 7 : 3"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
    :total-visible="$vuetify.display.mdAndUp ? 7 : 3"
  />
</template>
`},pe={__name:"pagination",setup(_){return(e,t)=>{const l=Y,i=C,u=R,p=N,V=L,x=k,h=E,b=B,D=T,U=I,$=j;return g(),P(z,{class:"match-height"},{default:r(()=>[n(f,{cols:"12",md:"6"},{default:r(()=>[n(i,{title:"Basic",code:s(q)},{default:r(()=>[t[0]||(t[0]=o("p",null,[a("The "),o("code",null,"v-pagination"),a(" component is used to separate long sets of data.")],-1)),n(l)]),_:1,__:[0]},8,["code"])]),_:1}),n(f,{cols:"12",md:"6"},{default:r(()=>[n(i,{title:"Outline",code:s(M)},{default:r(()=>[t[1]||(t[1]=o("p",null,[a("The "),o("code",null,"variant='outline'"),a(" prop is used to give outline to pagination item.")],-1)),n(u)]),_:1,__:[1]},8,["code"])]),_:1}),n(f,{cols:"12",md:"6"},{default:r(()=>[n(i,{title:"Circle",code:s(F)},{default:r(()=>[t[2]||(t[2]=o("p",null,[a("The "),o("code",null,"rounded"),a(" prop allows you to render pagination buttons with alternative styles.")],-1)),n(p)]),_:1,__:[2]},8,["code"])]),_:1}),n(f,{cols:"12",md:"6"},{default:r(()=>[n(i,{title:"Outline Circle",code:s(Q)},{default:r(()=>[t[3]||(t[3]=o("p",null,[a("The "),o("code",null,"variant='outline'"),a(" and "),o("code",null,"rounded"),a(" prop is used to give rounded outline to pagination item.")],-1)),n(V)]),_:1,__:[3]},8,["code"])]),_:1}),n(f,{cols:"12",md:"6"},{default:r(()=>[n(i,{title:"Disabled",code:s(H)},{default:r(()=>[t[4]||(t[4]=o("p",null,[a("Pagination items can be manually deactivated using the "),o("code",null,"disabled"),a(" prop.")],-1)),n(x)]),_:1,__:[4]},8,["code"])]),_:1}),n(f,{cols:"12",md:"6"},{default:r(()=>[n(i,{title:"Icons",code:s(J)},{default:r(()=>[t[5]||(t[5]=o("p",null,[a("Previous and next page icons can be customized with the "),o("code",null,"prev-icon"),a(" and "),o("code",null,"next-icon"),a(" props.")],-1)),n(h)]),_:1,__:[5]},8,["code"])]),_:1}),n(f,{cols:"12",md:"6"},{default:r(()=>[n(i,{title:"Length",code:s(K)},{default:r(()=>[t[6]||(t[6]=o("p",null,[a("Using the "),o("code",null,"length"),a(" prop you can set the length of "),o("code",null,"v-pagination"),a(", if the number of page buttons exceeds the parent container, it will truncate the list.")],-1)),n(b)]),_:1,__:[6]},8,["code"])]),_:1}),n(f,{cols:"12",md:"6"},{default:r(()=>[n(i,{title:"Total visible",code:s(X)},{default:r(()=>[t[7]||(t[7]=o("p",null,[a("You can also manually set the maximum number of visible page buttons with the "),o("code",null,"total-visible"),a(" prop.")],-1)),n(D)]),_:1,__:[7]},8,["code"])]),_:1}),n(f,{cols:"12",md:"6"},{default:r(()=>[n(i,{title:"Color",code:s(G)},{default:r(()=>[t[8]||(t[8]=o("p",null,[a("Use "),o("code",null,"active-color"),a(" prop for create different color pagination.")],-1)),n(U)]),_:1,__:[8]},8,["code"])]),_:1}),n(f,{cols:"12",md:"6"},{default:r(()=>[n(i,{title:"Size",code:s(W)},{default:r(()=>[t[9]||(t[9]=o("p",null,[a("Use "),o("code",null,"size"),a(" prop to sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: "),o("strong",null,"x-small"),a(", "),o("strong",null,"small"),a(", "),o("strong",null,"default"),a(", "),o("strong",null,"large"),a(", and "),o("strong",null,"x-large"),a(".")],-1)),n($)]),_:1,__:[9]},8,["code"])]),_:1})]),_:1})}}};export{pe as default};
