import{r as g,f,o as c,e as n,b as o,af as l,aU as j,l as i,du as D,c as B,s as e,Z as _,d as s}from"./main-7JdyGFby.js";import{_ as p}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as d,V as b}from"./VRow-GpmvwSSA.js";import{_ as z}from"./AppCardCode-CUjMQLDl.js";import{V as v}from"./VAlert-BepjubYH.js";/* empty css              */import"./vue3-perfect-scrollbar-BTKqCwUF.js";import"./VCard-D0LXqtBI.js";import"./VAvatar-sg7CZdU7.js";import"./VImg-Bk3huQTU.js";import"./VCardText-DYTBPo8J.js";import"./VDivider-CIpTZ8Ni.js";const N={__name:"DemoButtonGroup",setup(u){const t=g(1);return(r,V)=>(c(),f(D,{modelValue:i(t),"onUpdate:modelValue":V[0]||(V[0]=a=>j(t)?t.value=a:null),density:"comfortable"},{default:n(()=>[o(l,{icon:"tabler-align-left"}),o(l,{icon:"tabler-align-center"}),o(l,{icon:"tabler-align-right"}),o(l,{icon:"tabler-align-justified"})]),_:1},8,["modelValue"]))}},R={},U={class:"demo-space-x"};function O(u,t){return c(),B("div",U,[o(l,{href:"https://pixinvent.com/"},{default:n(()=>t[0]||(t[0]=[e(" String Literal ")])),_:1,__:[0]}),o(l,{href:"https://pixinvent.com/",target:"_blank",rel:"noopener noreferrer"},{default:n(()=>t[1]||(t[1]=[e(" Open New Tab ")])),_:1,__:[1]})])}const A=p(R,[["render",O]]),q={},G={class:"demo-space-x"};function Q(u,t){return c(),B("div",G,[o(l,{to:"alert"},{default:n(()=>t[0]||(t[0]=[e(" String Literal ")])),_:1,__:[0]}),o(l,{color:"warning",to:{path:"alert"}},{default:n(()=>t[1]||(t[1]=[e(" Object Path ")])),_:1,__:[1]}),o(l,{color:"success",to:{name:"components-alert"}},{default:n(()=>t[2]||(t[2]=[e(" Named Router ")])),_:1,__:[2]}),o(l,{color:"secondary",to:{path:"alert",query:{plan:"private"}}},{default:n(()=>t[3]||(t[3]=[e(" With Query ")])),_:1,__:[3]})])}const Y=p(q,[["render",Q]]),F={class:"demo-space-x"},Z={class:"custom-loader"},H={__name:"DemoButtonLoaders",setup(u){const t=g([]),r=V=>{t.value[V]=!0,setTimeout(()=>{t.value[V]=!1},3e3)};return(V,a)=>(c(),B("div",F,[o(l,{loading:i(t)[0],disabled:i(t)[0],color:"primary",onClick:a[0]||(a[0]=m=>r(0))},{default:n(()=>a[5]||(a[5]=[e(" Accept Terms ")])),_:1,__:[5]},8,["loading","disabled"]),o(l,{loading:i(t)[1],disabled:i(t)[1],color:"secondary",onClick:a[1]||(a[1]=m=>r(1))},{default:n(()=>[a[6]||(a[6]=e(" Upload ")),o(_,{end:"",icon:"tabler-cloud-upload"})]),_:1,__:[6]},8,["loading","disabled"]),o(l,{loading:i(t)[2],disabled:i(t)[2],color:"success",onClick:a[2]||(a[2]=m=>r(2))},{loader:n(()=>a[7]||(a[7]=[s("span",null,"Loading...",-1)])),default:n(()=>[a[8]||(a[8]=e(" Loader slot "))]),_:1,__:[8]},8,["loading","disabled"]),o(l,{loading:i(t)[3],disabled:i(t)[3],color:"info",onClick:a[3]||(a[3]=m=>r(3))},{loader:n(()=>[s("span",Z,[o(_,{icon:"tabler-refresh"})])]),default:n(()=>[a[9]||(a[9]=e(" Icon Loader "))]),_:1,__:[9]},8,["loading","disabled"]),o(l,{loading:i(t)[4],disabled:i(t)[4],color:"warning",icon:"tabler-cloud-upload",onClick:a[4]||(a[4]=m=>r(4))},null,8,["loading","disabled"])]))}},J=p(H,[["__scopeId","data-v-a713ac43"]]),K={};function M(u,t){return c(),f(b,null,{default:n(()=>[o(d,{cols:"12",sm:"6"},{default:n(()=>[o(l,{block:""},{default:n(()=>t[0]||(t[0]=[e(" Block Button ")])),_:1,__:[0]})]),_:1}),o(d,{cols:"12",sm:"6"},{default:n(()=>[o(l,{variant:"outlined",block:""},{default:n(()=>t[1]||(t[1]=[e(" Block Button ")])),_:1,__:[1]})]),_:1})]),_:1})}const X=p(K,[["render",M]]),h={},tt={class:"demo-space-x"};function ot(u,t){return c(),B("div",tt,[o(l,{size:"x-large"},{default:n(()=>t[0]||(t[0]=[e(" Extra large Button ")])),_:1,__:[0]}),o(l,{color:"success",size:"large"},{default:n(()=>t[1]||(t[1]=[e(" Large Button ")])),_:1,__:[1]}),o(l,{color:"info"},{default:n(()=>t[2]||(t[2]=[e(" Normal Button ")])),_:1,__:[2]}),o(l,{size:"small",color:"warning"},{default:n(()=>t[3]||(t[3]=[e(" Small Button ")])),_:1,__:[3]}),o(l,{size:"x-small",color:"error"},{default:n(()=>t[4]||(t[4]=[e(" Extra small Button ")])),_:1,__:[4]})])}const nt=p(h,[["render",ot]]),et={},lt={class:"demo-space-x"};function rt(u,t){return c(),B("div",lt,[o(l,{icon:"tabler-briefcase",rounded:""}),o(l,{variant:"tonal",icon:"tabler-user-plus"}),o(l,{icon:"tabler-search",variant:"outlined",color:"success"}),o(l,{icon:"tabler-thumb-up",variant:"text",color:"info"}),o(l,{icon:"tabler-star",variant:"tonal",color:"success",rounded:""}),o(l,{icon:"tabler-heart",variant:"text",color:"error"})])}const at=p(et,[["render",rt]]),st={},it={class:"demo-space-x"};function dt(u,t){return c(),B("div",it,[o(l,null,{default:n(()=>[t[0]||(t[0]=e(" Accept ")),o(_,{end:"",icon:"tabler-checkbox"})]),_:1,__:[0]}),o(l,{color:"secondary"},{default:n(()=>[o(_,{start:"",icon:"tabler-circle-minus"}),t[1]||(t[1]=e("Cancel "))]),_:1,__:[1]}),o(l,{color:"success"},{default:n(()=>[t[2]||(t[2]=e(" Upload ")),o(_,{end:"",icon:"tabler-cloud-upload"})]),_:1,__:[2]}),o(l,{color:"info"},{default:n(()=>[o(_,{start:"",icon:"tabler-arrow-left"}),t[3]||(t[3]=e(" Back "))]),_:1,__:[3]}),o(l,{color:"warning"},{default:n(()=>[o(_,{icon:"tabler-settings"})]),_:1}),o(l,{color:"error"},{default:n(()=>[o(_,{icon:"tabler-circle-off"})]),_:1})])}const ct=p(st,[["render",dt]]),ut={},pt={class:"demo-space-x"};function Bt(u,t){return c(),B("div",pt,[o(l,{variant:"tonal"},{default:n(()=>t[0]||(t[0]=[e(" Primary ")])),_:1,__:[0]}),o(l,{color:"secondary",variant:"tonal"},{default:n(()=>t[1]||(t[1]=[e(" Secondary ")])),_:1,__:[1]}),o(l,{color:"success",variant:"tonal"},{default:n(()=>t[2]||(t[2]=[e(" Success ")])),_:1,__:[2]}),o(l,{color:"info",variant:"tonal"},{default:n(()=>t[3]||(t[3]=[e(" Info ")])),_:1,__:[3]}),o(l,{color:"warning",variant:"tonal"},{default:n(()=>t[4]||(t[4]=[e(" Warning ")])),_:1,__:[4]}),o(l,{color:"error",variant:"tonal"},{default:n(()=>t[5]||(t[5]=[e(" Error ")])),_:1,__:[5]})])}const Vt=p(ut,[["render",Bt]]),_t={},mt={class:"demo-space-x"};function ft(u,t){return c(),B("div",mt,[o(l,{variant:"plain"},{default:n(()=>t[0]||(t[0]=[e(" Primary ")])),_:1,__:[0]}),o(l,{color:"secondary",variant:"plain"},{default:n(()=>t[1]||(t[1]=[e(" Secondary ")])),_:1,__:[1]}),o(l,{color:"success",variant:"plain"},{default:n(()=>t[2]||(t[2]=[e(" Success ")])),_:1,__:[2]}),o(l,{color:"info",variant:"plain"},{default:n(()=>t[3]||(t[3]=[e(" Info ")])),_:1,__:[3]}),o(l,{color:"warning",variant:"plain"},{default:n(()=>t[4]||(t[4]=[e(" Warning ")])),_:1,__:[4]}),o(l,{color:"error",variant:"plain"},{default:n(()=>t[5]||(t[5]=[e(" Error ")])),_:1,__:[5]})])}const vt=p(_t,[["render",ft]]),gt={},bt={class:"demo-space-x"};function xt(u,t){return c(),B("div",bt,[o(l,{variant:"text"},{default:n(()=>t[0]||(t[0]=[e(" Primary ")])),_:1,__:[0]}),o(l,{variant:"text",color:"secondary"},{default:n(()=>t[1]||(t[1]=[e(" Secondary ")])),_:1,__:[1]}),o(l,{variant:"text",color:"success"},{default:n(()=>t[2]||(t[2]=[e(" Success ")])),_:1,__:[2]}),o(l,{variant:"text",color:"info"},{default:n(()=>t[3]||(t[3]=[e(" Info ")])),_:1,__:[3]}),o(l,{variant:"text",color:"warning"},{default:n(()=>t[4]||(t[4]=[e(" Warning ")])),_:1,__:[4]}),o(l,{variant:"text",color:"error"},{default:n(()=>t[5]||(t[5]=[e(" Error ")])),_:1,__:[5]})])}const yt=p(gt,[["render",xt]]),kt={},wt={class:"demo-space-x"};function St(u,t){return c(),B("div",wt,[o(l,null,{default:n(()=>t[0]||(t[0]=[e(" Normal Button ")])),_:1,__:[0]}),o(l,{rounded:"lg",color:"secondary"},{default:n(()=>t[1]||(t[1]=[e(" Rounded Button ")])),_:1,__:[1]}),o(l,{rounded:0,color:"success"},{default:n(()=>t[2]||(t[2]=[e(" Tile Button ")])),_:1,__:[2]}),o(l,{rounded:"pill",color:"info"},{default:n(()=>t[3]||(t[3]=[e(" Pill Button ")])),_:1,__:[3]})])}const It=p(kt,[["render",St]]),$t={},Et={class:"demo-space-x"};function Tt(u,t){return c(),B("div",Et,[o(l,{variant:"flat"},{default:n(()=>t[0]||(t[0]=[e(" Primary ")])),_:1,__:[0]}),o(l,{variant:"flat",color:"secondary"},{default:n(()=>t[1]||(t[1]=[e(" Secondary ")])),_:1,__:[1]}),o(l,{variant:"flat",color:"success"},{default:n(()=>t[2]||(t[2]=[e(" Success ")])),_:1,__:[2]}),o(l,{variant:"flat",color:"info"},{default:n(()=>t[3]||(t[3]=[e(" Info ")])),_:1,__:[3]}),o(l,{variant:"flat",color:"warning"},{default:n(()=>t[4]||(t[4]=[e(" Warning ")])),_:1,__:[4]}),o(l,{variant:"flat",color:"error"},{default:n(()=>t[5]||(t[5]=[e(" Error ")])),_:1,__:[5]})])}const Pt=p($t,[["render",Tt]]),Lt={},Ct={class:"demo-space-x"};function Wt(u,t){return c(),B("div",Ct,[o(l,{variant:"outlined"},{default:n(()=>t[0]||(t[0]=[e(" Primary ")])),_:1,__:[0]}),o(l,{variant:"outlined",color:"secondary"},{default:n(()=>t[1]||(t[1]=[e(" Secondary ")])),_:1,__:[1]}),o(l,{variant:"outlined",color:"success"},{default:n(()=>t[2]||(t[2]=[e(" Success ")])),_:1,__:[2]}),o(l,{variant:"outlined",color:"info"},{default:n(()=>t[3]||(t[3]=[e(" Info ")])),_:1,__:[3]}),o(l,{variant:"outlined",color:"warning"},{default:n(()=>t[4]||(t[4]=[e(" Warning ")])),_:1,__:[4]}),o(l,{variant:"outlined",color:"error"},{default:n(()=>t[5]||(t[5]=[e(" Error ")])),_:1,__:[5]})])}const jt=p(Lt,[["render",Wt]]),Dt={},zt={class:"demo-space-x"};function Nt(u,t){return c(),B("div",zt,[o(l,{color:"primary"},{default:n(()=>t[0]||(t[0]=[e(" Primary ")])),_:1,__:[0]}),o(l,{color:"secondary"},{default:n(()=>t[1]||(t[1]=[e(" Secondary ")])),_:1,__:[1]}),o(l,{color:"success"},{default:n(()=>t[2]||(t[2]=[e(" Success ")])),_:1,__:[2]}),o(l,{color:"info"},{default:n(()=>t[3]||(t[3]=[e(" Info ")])),_:1,__:[3]}),o(l,{color:"warning"},{default:n(()=>t[4]||(t[4]=[e(" Warning ")])),_:1,__:[4]}),o(l,{color:"error"},{default:n(()=>t[5]||(t[5]=[e(" Error ")])),_:1,__:[5]})])}const Rt=p(Dt,[["render",Nt]]),Ut={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VBtn block>
        Block Button
      </VBtn>
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VBtn
        variant="outlined"
        block
      >
        Block Button
      </VBtn>
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VBtn block>
        Block Button
      </VBtn>
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VBtn
        variant="outlined"
        block
      >
        Block Button
      </VBtn>
    </VCol>
  </VRow>
</template>
`},Ot={ts:`<template>
  <div class="demo-space-x">
    <VBtn color="primary">
      Primary
    </VBtn>
    <VBtn color="secondary">
      Secondary
    </VBtn>
    <VBtn color="success">
      Success
    </VBtn>
    <VBtn color="info">
      Info
    </VBtn>
    <VBtn color="warning">
      Warning
    </VBtn>
    <VBtn color="error">
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn color="primary">
      Primary
    </VBtn>
    <VBtn color="secondary">
      Secondary
    </VBtn>
    <VBtn color="success">
      Success
    </VBtn>
    <VBtn color="info">
      Info
    </VBtn>
    <VBtn color="warning">
      Warning
    </VBtn>
    <VBtn color="error">
      Error
    </VBtn>
  </div>
</template>
`},At={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="flat">
      Primary
    </VBtn>

    <VBtn
      variant="flat"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="flat"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="flat"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="flat"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="flat"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="flat">
      Primary
    </VBtn>

    <VBtn
      variant="flat"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="flat"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="flat"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="flat"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="flat"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},qt={ts:`<script lang="ts" setup>
const toggleExclusive = ref(1)
<\/script>

<template>
  <VBtnToggle
    v-model="toggleExclusive"
    density="comfortable"
  >
    <VBtn icon="tabler-align-left" />
    <VBtn icon="tabler-align-center" />
    <VBtn icon="tabler-align-right" />
    <VBtn icon="tabler-align-justified" />
  </VBtnToggle>
</template>
`,js:`<script setup>
const toggleExclusive = ref(1)
<\/script>

<template>
  <VBtnToggle
    v-model="toggleExclusive"
    density="comfortable"
  >
    <VBtn icon="tabler-align-left" />
    <VBtn icon="tabler-align-center" />
    <VBtn icon="tabler-align-right" />
    <VBtn icon="tabler-align-justified" />
  </VBtnToggle>
</template>
`},Gt={ts:`<template>
  <div class="demo-space-x">
    <VBtn>
      Accept
      <VIcon
        end
        icon="tabler-checkbox"
      />
    </VBtn>

    <VBtn color="secondary">
      <VIcon
        start
        icon="tabler-circle-minus"
      />Cancel
    </VBtn>

    <VBtn color="success">
      Upload
      <VIcon
        end
        icon="tabler-cloud-upload"
      />
    </VBtn>

    <VBtn color="info">
      <VIcon
        start
        icon="tabler-arrow-left"
      />
      Back
    </VBtn>

    <VBtn color="warning">
      <VIcon icon="tabler-settings" />
    </VBtn>

    <VBtn color="error">
      <VIcon icon="tabler-circle-off" />
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn>
      Accept
      <VIcon
        end
        icon="tabler-checkbox"
      />
    </VBtn>

    <VBtn color="secondary">
      <VIcon
        start
        icon="tabler-circle-minus"
      />Cancel
    </VBtn>

    <VBtn color="success">
      Upload
      <VIcon
        end
        icon="tabler-cloud-upload"
      />
    </VBtn>

    <VBtn color="info">
      <VIcon
        start
        icon="tabler-arrow-left"
      />
      Back
    </VBtn>

    <VBtn color="warning">
      <VIcon icon="tabler-settings" />
    </VBtn>

    <VBtn color="error">
      <VIcon icon="tabler-circle-off" />
    </VBtn>
  </div>
</template>
`},Qt={ts:`<template>
  <div class="demo-space-x">
    <VBtn
      icon="tabler-briefcase"
      rounded
    />

    <VBtn
      variant="tonal"
      icon="tabler-user-plus"
    />

    <VBtn
      icon="tabler-search"
      variant="outlined"
      color="success"
    />

    <VBtn
      icon="tabler-thumb-up"
      variant="text"
      color="info"
    />

    <VBtn
      icon="tabler-star"
      variant="tonal"
      color="success"
      rounded
    />

    <VBtn
      icon="tabler-heart"
      variant="text"
      color="error"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn
      icon="tabler-briefcase"
      rounded
    />

    <VBtn
      variant="tonal"
      icon="tabler-user-plus"
    />

    <VBtn
      icon="tabler-search"
      variant="outlined"
      color="success"
    />

    <VBtn
      icon="tabler-thumb-up"
      variant="text"
      color="info"
    />

    <VBtn
      icon="tabler-star"
      variant="tonal"
      color="success"
      rounded
    />

    <VBtn
      icon="tabler-heart"
      variant="text"
      color="error"
    />
  </div>
</template>
`},Yt={ts:`<template>
  <div class="demo-space-x">
    <VBtn href="https://pixinvent.com/">
      String Literal
    </VBtn>

    <VBtn
      href="https://pixinvent.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open New Tab
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn href="https://pixinvent.com/">
      String Literal
    </VBtn>

    <VBtn
      href="https://pixinvent.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open New Tab
    </VBtn>
  </div>
</template>
`},Ft={ts:`<script lang="ts" setup>
const loadings = ref<boolean[]>([])

const load = (i: number) => {
  loadings.value[i] = true
  setTimeout(() => {
    loadings.value[i] = false
  }, 3000)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn
      :loading="loadings[0]"
      :disabled="loadings[0]"
      color="primary"
      @click="load(0)"
    >
      Accept Terms
    </VBtn>

    <VBtn
      :loading="loadings[1]"
      :disabled="loadings[1]"
      color="secondary"
      @click="load(1)"
    >
      Upload
      <VIcon
        end
        icon="tabler-cloud-upload"
      />
    </VBtn>

    <VBtn
      :loading="loadings[2]"
      :disabled="loadings[2]"
      color="success"
      @click="load(2)"
    >
      Loader slot
      <template #loader>
        <span>Loading...</span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[3]"
      :disabled="loadings[3]"
      color="info"
      @click="load(3)"
    >
      Icon Loader
      <template #loader>
        <span class="custom-loader">
          <VIcon icon="tabler-refresh" />
        </span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[4]"
      :disabled="loadings[4]"
      color="warning"
      icon="tabler-cloud-upload"
      @click="load(4)"
    />
  </div>
</template>

  <style lang="scss" scoped>
  .custom-loader {
    display: flex;
    animation: loader 1s infinite;
  }

  @keyframes loader {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
  </style>
`,js:`<script setup>
const loadings = ref([])

const load = i => {
  loadings.value[i] = true
  setTimeout(() => {
    loadings.value[i] = false
  }, 3000)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn
      :loading="loadings[0]"
      :disabled="loadings[0]"
      color="primary"
      @click="load(0)"
    >
      Accept Terms
    </VBtn>

    <VBtn
      :loading="loadings[1]"
      :disabled="loadings[1]"
      color="secondary"
      @click="load(1)"
    >
      Upload
      <VIcon
        end
        icon="tabler-cloud-upload"
      />
    </VBtn>

    <VBtn
      :loading="loadings[2]"
      :disabled="loadings[2]"
      color="success"
      @click="load(2)"
    >
      Loader slot
      <template #loader>
        <span>Loading...</span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[3]"
      :disabled="loadings[3]"
      color="info"
      @click="load(3)"
    >
      Icon Loader
      <template #loader>
        <span class="custom-loader">
          <VIcon icon="tabler-refresh" />
        </span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[4]"
      :disabled="loadings[4]"
      color="warning"
      icon="tabler-cloud-upload"
      @click="load(4)"
    />
  </div>
</template>

  <style lang="scss" scoped>
  .custom-loader {
    display: flex;
    animation: loader 1s infinite;
  }

  @keyframes loader {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
  </style>
`},Zt={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Primary
    </VBtn>
    <VBtn
      variant="outlined"
      color="secondary"
    >
      Secondary
    </VBtn>
    <VBtn
      variant="outlined"
      color="success"
    >
      Success
    </VBtn>
    <VBtn
      variant="outlined"
      color="info"
    >
      Info
    </VBtn>
    <VBtn
      variant="outlined"
      color="warning"
    >
      Warning
    </VBtn>
    <VBtn
      variant="outlined"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Primary
    </VBtn>
    <VBtn
      variant="outlined"
      color="secondary"
    >
      Secondary
    </VBtn>
    <VBtn
      variant="outlined"
      color="success"
    >
      Success
    </VBtn>
    <VBtn
      variant="outlined"
      color="info"
    >
      Info
    </VBtn>
    <VBtn
      variant="outlined"
      color="warning"
    >
      Warning
    </VBtn>
    <VBtn
      variant="outlined"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},Ht={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="plain">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="plain"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="plain"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="plain"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="plain"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="plain"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="plain">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="plain"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="plain"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="plain"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="plain"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="plain"
    >
      Error
    </VBtn>
  </div>
</template>
`},Jt={ts:`<template>
  <div class="demo-space-x">
    <VBtn>
      Normal Button
    </VBtn>
    <VBtn
      rounded="lg"
      color="secondary"
    >
      Rounded Button
    </VBtn>
    <VBtn
      :rounded="0"
      color="success"
    >
      Tile Button
    </VBtn>
    <VBtn
      rounded="pill"
      color="info"
    >
      Pill Button
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn>
      Normal Button
    </VBtn>
    <VBtn
      rounded="lg"
      color="secondary"
    >
      Rounded Button
    </VBtn>
    <VBtn
      :rounded="0"
      color="success"
    >
      Tile Button
    </VBtn>
    <VBtn
      rounded="pill"
      color="info"
    >
      Pill Button
    </VBtn>
  </div>
</template>
`},Kt={ts:`<template>
  <div class="demo-space-x">
    <VBtn to="alert">
      String Literal
    </VBtn>

    <VBtn
      color="warning"
      :to="{ path: 'alert' }"
    >
      Object Path
    </VBtn>

    <VBtn
      color="success"
      :to="{ name: 'components-alert' }"
    >
      Named Router
    </VBtn>

    <VBtn
      color="secondary"
      :to="{ path: 'alert', query: { plan: 'private' } }"
    >
      With Query
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn to="alert">
      String Literal
    </VBtn>

    <VBtn
      color="warning"
      :to="{ path: 'alert' }"
    >
      Object Path
    </VBtn>

    <VBtn
      color="success"
      :to="{ name: 'components-alert' }"
    >
      Named Router
    </VBtn>

    <VBtn
      color="secondary"
      :to="{ path: 'alert', query: { plan: 'private' } }"
    >
      With Query
    </VBtn>
  </div>
</template>
`},Mt={ts:`<template>
  <div class="demo-space-x">
    <VBtn size="x-large">
      Extra large Button
    </VBtn>

    <VBtn
      color="success"
      size="large"
    >
      Large Button
    </VBtn>

    <VBtn color="info">
      Normal Button
    </VBtn>

    <VBtn
      size="small"
      color="warning"
    >
      Small Button
    </VBtn>

    <VBtn
      size="x-small"
      color="error"
    >
      Extra small Button
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn size="x-large">
      Extra large Button
    </VBtn>

    <VBtn
      color="success"
      size="large"
    >
      Large Button
    </VBtn>

    <VBtn color="info">
      Normal Button
    </VBtn>

    <VBtn
      size="small"
      color="warning"
    >
      Small Button
    </VBtn>

    <VBtn
      size="x-small"
      color="error"
    >
      Extra small Button
    </VBtn>
  </div>
</template>
`},Xt={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="text">
      Primary
    </VBtn>

    <VBtn
      variant="text"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="text"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="text"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="text"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="text"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="text">
      Primary
    </VBtn>

    <VBtn
      variant="text"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="text"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="text"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="text"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="text"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},ht={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="tonal"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="tonal"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="tonal"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="tonal"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="tonal"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="tonal"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="tonal"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="tonal"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="tonal"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="tonal"
    >
      Error
    </VBtn>
  </div>
</template>
`},Bo={__name:"button",setup(u){return(t,r)=>{const V=Rt,a=z,m=jt,x=Pt,y=It,k=yt,w=vt,S=Vt,I=ct,$=at,E=nt,T=X,P=J,L=Y,C=A,W=N;return c(),f(b,null,{default:n(()=>[o(d,{cols:"12"},{default:n(()=>[o(a,{title:"Colors",code:i(Ot)},{default:n(()=>[r[0]||(r[0]=s("p",null,[e("The "),s("code",null,"color"),e(" prop is used to change the background color of the alert.")],-1)),o(V)]),_:1,__:[0]},8,["code"])]),_:1}),o(d,{cols:"12"},{default:n(()=>[o(a,{title:"Outlined",code:i(Zt)},{default:n(()=>[r[1]||(r[1]=s("p",null,[e("The "),s("code",null,"outlined"),e(" variant option is used to create outlined buttons.")],-1)),o(m)]),_:1,__:[1]},8,["code"])]),_:1}),o(d,{cols:"12"},{default:n(()=>[o(a,{title:"Flat",code:i(At)},{default:n(()=>[r[2]||(r[2]=s("p",null,[e("The "),s("code",null,"flat"),e(" buttons still maintain their background color, but have no box shadow.")],-1)),o(x)]),_:1,__:[2]},8,["code"])]),_:1}),o(d,{cols:"12"},{default:n(()=>[o(a,{title:"Rounded",code:i(Jt)},{default:n(()=>[r[3]||(r[3]=s("p",null,[e("Use the "),s("code",null,"rounded"),e(" prop to control the border radius of buttons.")],-1)),o(y)]),_:1,__:[3]},8,["code"])]),_:1}),o(d,{cols:"12"},{default:n(()=>[o(a,{title:"Text",code:i(Xt)},{default:n(()=>[r[4]||(r[4]=s("p",null,[e("Use "),s("code",null,"text"),e(" variant option to create text button. Text buttons have no box shadow and no background.")],-1)),o(k)]),_:1,__:[4]},8,["code"])]),_:1}),o(d,{cols:"12"},{default:n(()=>[o(a,{title:"Plain",code:i(Ht)},{default:n(()=>[r[5]||(r[5]=s("p",null,[e("Use "),s("code",null,"plain"),e(" variant option to a create a plain button. Plain buttons have a lower baseline opacity that reacts to hover and focus.")],-1)),o(w)]),_:1,__:[5]},8,["code"])]),_:1}),o(d,{cols:"12"},{default:n(()=>[o(a,{title:"Tonal",code:i(ht)},{default:n(()=>[r[6]||(r[6]=s("p",null,[e("Use "),s("code",null,"tonal"),e(" variant option to a create a light background button.")],-1)),o(S)]),_:1,__:[6]},8,["code"])]),_:1}),o(d,{cols:"12"},{default:n(()=>[o(a,{title:"Icon",code:i(Gt)},{default:n(()=>[r[7]||(r[7]=s("p",null,"Icons can be used inside of buttons to add emphasis to the action.",-1)),o(I)]),_:1,__:[7]},8,["code"])]),_:1}),o(d,{cols:"12"},{default:n(()=>[o(a,{title:"Icon Only",code:i(Qt)},{default:n(()=>[r[8]||(r[8]=s("p",null,[e("Use "),s("code",null,"VIcon"),e(" component inside button to create buttons that looks like rest of the theme.")],-1)),o($)]),_:1,__:[8]},8,["code"])]),_:1}),o(d,{cols:"12"},{default:n(()=>[o(a,{title:"Sizing",code:i(Mt)},{default:n(()=>[r[9]||(r[9]=s("p",null,"Buttons can be given different sizing options to fit a multitude of scenarios.",-1)),o(E)]),_:1,__:[9]},8,["code"])]),_:1}),o(d,{cols:"12"},{default:n(()=>[o(a,{title:"Block",code:i(Ut)},{default:n(()=>[r[10]||(r[10]=s("p",null,[e("The "),s("code",null,"block"),e(" prop allows buttons to extend the full available width.")],-1)),o(T)]),_:1,__:[10]},8,["code"])]),_:1}),o(d,{cols:"12"},{default:n(()=>[o(a,{title:"Loaders",code:i(Ft)},{default:n(()=>[r[11]||(r[11]=s("p",null,[e("Using the "),s("code",null,"loading"),e(" prop, you can notify a user that there is processing taking place. The default behavior is to use a "),s("code",null,"v-progress-circular"),e(" component but this can be customized.")],-1)),o(P)]),_:1,__:[11]},8,["code"])]),_:1}),o(d,{cols:"12"},{default:n(()=>[o(a,{title:"Router",code:i(Kt)},{default:n(()=>[r[13]||(r[13]=s("p",null,[e("Use "),s("code",null,"to"),e(" prop to create button with router support.")],-1)),o(v,{color:"warning",variant:"tonal",class:"mb-4"},{default:n(()=>r[12]||(r[12]=[e(" Note: On click of the link button, You will get redirected to another page. ")])),_:1,__:[12]}),o(L)]),_:1,__:[13]},8,["code"])]),_:1}),o(d,{cols:"12"},{default:n(()=>[o(a,{title:"Link",code:i(Yt)},{default:n(()=>[r[15]||(r[15]=s("p",null,[e("Designates that the component is a link. This is automatic when using the "),s("code",null,"href"),e(" or "),s("code",null,"to"),e(" prop.")],-1)),o(v,{color:"warning",variant:"tonal",class:"mb-4"},{default:n(()=>r[14]||(r[14]=[e(" Note: On click of the link button, You will get redirected to another page. ")])),_:1,__:[14]}),o(C)]),_:1,__:[15]},8,["code"])]),_:1}),o(d,{cols:"12"},{default:n(()=>[o(a,{title:"Group",code:i(qt)},{default:n(()=>[r[16]||(r[16]=s("p",null,[e(" Wrap buttons with the "),s("code",null,"v-btn-toggle"),e(" component to create a group button. You can add a visual divider between buttons with the "),s("code",null,"divided"),e(" prop. ")],-1)),o(W)]),_:1,__:[16]},8,["code"])]),_:1})]),_:1})}}};export{Bo as default};
