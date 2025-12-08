import{a as u,V as c}from"./VRadioGroup-CilT9Trh.js";import{r as m,f as b,o as p,e as i,c as f,F as _,h as G,b as o,l as s,aU as R,d as a,s as n}from"./main-7JdyGFby.js";import{V as y}from"./VDivider-CIpTZ8Ni.js";import{_ as L}from"./AppCardCode-CUjMQLDl.js";import{V as $,a as V}from"./VRow-GpmvwSSA.js";import"./VSelectionControl-lb_mBfMr.js";import"./form-BuGlugVy.js";import"./VInput-U8KQD51r.js";import"./VImg-Bk3huQTU.js";import"./vue3-perfect-scrollbar-BTKqCwUF.js";import"./VCard-D0LXqtBI.js";import"./VAvatar-sg7CZdU7.js";import"./VCardText-DYTBPo8J.js";/* empty css              */const U={__name:"DemoRadioValidation",setup(v){const l=m(1),t=[r=>r!==3?!0:"Do not select the third one!"];return(r,e)=>(p(),b(c,{modelValue:s(l),"onUpdate:modelValue":e[0]||(e[0]=d=>R(l)?l.value=d:null),inline:"",rules:t},{default:i(()=>[(p(),f(_,null,G(3,d=>o(u,{key:d,error:s(l)===3,label:`Radio ${d}`,value:d},null,8,["error","label","value"])),64))]),_:1},8,["modelValue"]))}},C={__name:"DemoRadioIcon",setup(v){const l=m(1);return(t,r)=>(p(),b(c,{modelValue:s(l),"onUpdate:modelValue":r[0]||(r[0]=e=>R(l)?l.value=e:null),"false-icon":"tabler-bell-off","true-icon":"tabler-bell"},{default:i(()=>[(p(),f(_,null,G(2,e=>o(u,{key:e,label:`Radio ${e}`,value:e},null,8,["label","value"])),64))]),_:1},8,["modelValue"]))}},w={__name:"DemoRadioLabelSlot",setup(v){const l=m("DuckDuckGo");return(t,r)=>(p(),b(c,{modelValue:s(l),"onUpdate:modelValue":r[0]||(r[0]=e=>R(l)?l.value=e:null)},{label:i(()=>r[1]||(r[1]=[a("div",null,[n("Your favorite "),a("strong",null,"search engine")],-1)])),default:i(()=>[o(u,{value:"Google"},{label:i(()=>r[2]||(r[2]=[a("div",null,[n(" Of course it's "),a("span",{class:"text-success"}," Google ")],-1)])),_:1}),o(u,{value:"DuckDuckGo"},{label:i(()=>r[3]||(r[3]=[a("div",null,[n(" Definitely "),a("span",{class:"text-primary"}," DuckDuckGo ")],-1)])),_:1})]),_:1},8,["modelValue"]))}},S={__name:"DemoRadioDensity",setup(v){const l=m("radio-1"),t=m("radio-1");return(r,e)=>(p(),f(_,null,[o(c,{modelValue:s(l),"onUpdate:modelValue":e[0]||(e[0]=d=>R(l)?l.value=d:null)},{default:i(()=>[o(u,{label:"Option 1",value:"radio-1",density:"compact"}),o(u,{label:"Option 2",value:"radio-2",density:"compact"})]),_:1},8,["modelValue"]),o(y,{class:"my-3"}),o(c,{modelValue:s(t),"onUpdate:modelValue":e[1]||(e[1]=d=>R(t)?t.value=d:null),inline:""},{default:i(()=>[o(u,{label:"Option 1",value:"radio-1",density:"compact"}),o(u,{label:"Option 2",value:"radio-2",density:"compact"})]),_:1},8,["modelValue"])],64))}},I={__name:"DemoRadioInline",setup(v){const l=m("radio-1"),t=m("radio-1");return(r,e)=>(p(),f(_,null,[o(c,{modelValue:s(l),"onUpdate:modelValue":e[0]||(e[0]=d=>R(l)?l.value=d:null)},{default:i(()=>[o(u,{label:"Option 1",value:"radio-1"}),o(u,{label:"Option 2",value:"radio-2"})]),_:1},8,["modelValue"]),o(y,{class:"my-4"}),o(c,{modelValue:s(t),"onUpdate:modelValue":e[1]||(e[1]=d=>R(t)?t.value=d:null),inline:""},{default:i(()=>[o(u,{label:"Option 1",value:"radio-1"}),o(u,{label:"Option 2",value:"radio-2"})]),_:1},8,["modelValue"])],64))}},j={__name:"DemoRadioColors",setup(v){const l=m("primary"),t=["Primary","Secondary","Success","Info","Warning","Error"];return(r,e)=>(p(),b(c,{modelValue:s(l),"onUpdate:modelValue":e[0]||(e[0]=d=>R(l)?l.value=d:null),inline:""},{default:i(()=>[a("div",null,[(p(),f(_,null,G(t,d=>o(u,{key:d,label:d,color:d.toLocaleLowerCase(),value:d.toLocaleLowerCase()},null,8,["label","color","value"])),64))])]),_:1},8,["modelValue"]))}},B={class:""},E={__name:"DemoRadioBasic",setup(v){const l=m(1);return(t,r)=>(p(),f("div",B,[o(c,{modelValue:s(l),"onUpdate:modelValue":r[0]||(r[0]=e=>R(l)?l.value=e:null)},{default:i(()=>[(p(),f(_,null,G(2,e=>o(u,{key:e,label:`Radio ${e}`,value:e},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]))}},A={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
<\/script>

<template>
  <div class="">
    <VRadioGroup v-model="radioGroup">
      <VRadio
        v-for="n in 2"
        :key="n"
        :label="\`Radio \${n}\`"
        :value="n"
      />
    </VRadioGroup>
  </div>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
<\/script>

<template>
  <div class="">
    <VRadioGroup v-model="radioGroup">
      <VRadio
        v-for="n in 2"
        :key="n"
        :label="\`Radio \${n}\`"
        :value="n"
      />
    </VRadioGroup>
  </div>
</template>
`},F={ts:`<script lang="ts" setup>
const selectedRadio = ref('primary')
const colorsRadio = ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error']
<\/script>

<template>
  <VRadioGroup
    v-model="selectedRadio"
    inline
  >
    <div>
      <VRadio
        v-for="radio in colorsRadio"
        :key="radio"
        :label="radio"
        :color="radio.toLocaleLowerCase()"
        :value="radio.toLocaleLowerCase()"
      />
    </div>
  </VRadioGroup>
</template>
`,js:`<script setup>
const selectedRadio = ref('primary')

const colorsRadio = [
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
]
<\/script>

<template>
  <VRadioGroup
    v-model="selectedRadio"
    inline
  >
    <div>
      <VRadio
        v-for="radio in colorsRadio"
        :key="radio"
        :label="radio"
        :color="radio.toLocaleLowerCase()"
        :value="radio.toLocaleLowerCase()"
      />
    </div>
  </VRadioGroup>
</template>
`},N={ts:`<script lang="ts" setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>

  <VDivider class="my-3" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>

  <VDivider class="my-3" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>
</template>
`},P={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    false-icon="tabler-bell-off"
    true-icon="tabler-bell"
  >
    <VRadio
      v-for="n in 2"
      :key="n"
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    false-icon="tabler-bell-off"
    true-icon="tabler-bell"
  >
    <VRadio
      v-for="n in 2"
      :key="n"
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`},T={ts:`<script lang="ts" setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>

  <VDivider class="my-4" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>

  <VDivider class="my-4" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>
</template>
`},W={ts:`<script lang="ts" setup>
const radios = ref('DuckDuckGo')
<\/script>

<template>
  <VRadioGroup v-model="radios">
    <template #label>
      <div>Your favorite <strong>search engine</strong></div>
    </template>

    <VRadio value="Google">
      <template #label>
        <div>
          Of course it's <span class="text-success">
            Google
          </span>
        </div>
      </template>
    </VRadio>

    <VRadio value="DuckDuckGo">
      <template #label>
        <div>
          Definitely <span class="text-primary">
            DuckDuckGo
          </span>
        </div>
      </template>
    </VRadio>
  </VRadioGroup>
</template>
`,js:`<script setup>
const radios = ref('DuckDuckGo')
<\/script>

<template>
  <VRadioGroup v-model="radios">
    <template #label>
      <div>Your favorite <strong>search engine</strong></div>
    </template>

    <VRadio value="Google">
      <template #label>
        <div>
          Of course it's <span class="text-success">
            Google
          </span>
        </div>
      </template>
    </VRadio>

    <VRadio value="DuckDuckGo">
      <template #label>
        <div>
          Definitely <span class="text-primary">
            DuckDuckGo
          </span>
        </div>
      </template>
    </VRadio>
  </VRadioGroup>
</template>
`},Y={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
const rules = [(value: number) => (value !== 3 ? true : 'Do not select the third one!')]
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    inline
    :rules="rules"
  >
    <VRadio
      v-for="n in 3"
      :key="n"
      :error="radioGroup === 3 "
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
const rules = [value => value !== 3 ? true : 'Do not select the third one!']
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    inline
    :rules="rules"
  >
    <VRadio
      v-for="n in 3"
      :key="n"
      :error="radioGroup === 3 "
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`},to={__name:"radio",setup(v){return(l,t)=>{const r=E,e=L,d=j,D=I,g=S,k=w,O=C,x=U;return p(),b($,{class:"match-height"},{default:i(()=>[o(V,{cols:"12",md:"6"},{default:i(()=>[o(e,{title:"Basic",code:s(A)},{default:i(()=>[t[0]||(t[0]=a("p",null,[n("The "),a("code",null,"v-radio"),n(" component is a simple radio button.")],-1)),o(r)]),_:1,__:[0]},8,["code"])]),_:1}),o(V,{cols:"12",md:"6"},{default:i(()=>[o(e,{title:"Colors",code:s(F)},{default:i(()=>[t[1]||(t[1]=a("p",null,[n("Radios can be colored by using any of the built-in colors and contextual names using the "),a("code",null,"color"),n(" prop.")],-1)),o(d)]),_:1,__:[1]},8,["code"])]),_:1}),o(V,{cols:"12",md:"6"},{default:i(()=>[o(e,{title:"Inline",code:s(T)},{default:i(()=>[t[2]||(t[2]=a("p",null,[n("Use "),a("code",null,"inline"),n(" prop to displays radio buttons in row.")],-1)),o(D)]),_:1,__:[2]},8,["code"])]),_:1}),o(V,{cols:"12",md:"6"},{default:i(()=>[o(e,{title:"Density",code:s(N)},{default:i(()=>[t[3]||(t[3]=a("p",null,[n("Use "),a("code",null,"density"),n(" prop to adjusts the spacing within the component. Available options are: "),a("code",null,"default"),n(", "),a("code",null,"comfortable"),n(", and "),a("code",null,"compact"),n(".")],-1)),o(g)]),_:1,__:[3]},8,["code"])]),_:1}),o(V,{cols:"12",md:"6"},{default:i(()=>[o(e,{title:"Label Slot",code:s(W)},{default:i(()=>[t[4]||(t[4]=a("p",null,[n("Radio Group labels can be defined in "),a("code",null,"label"),n(" slot - that will allow to use HTML content.")],-1)),o(k)]),_:1,__:[4]},8,["code"])]),_:1}),o(V,{cols:"12",md:"6"},{default:i(()=>[o(e,{title:"Icon",code:s(P)},{default:i(()=>[t[5]||(t[5]=a("p",null,[n("Use "),a("code",null,"false-icon"),n(" and "),a("code",null,"true-icon"),n(" prop to set icon on inactive and active state.")],-1)),o(O)]),_:1,__:[5]},8,["code"])]),_:1}),o(V,{cols:"12",md:"6"},{default:i(()=>[o(e,{title:"Validation",code:s(Y)},{default:i(()=>[t[6]||(t[6]=a("p",null,[n("Use "),a("code",null,"rules"),n(" prop to validate a radio. Accepts a mixed array of types "),a("code",null,"function"),n(", "),a("code",null,"boolean"),n(" and "),a("code",null,"string"),n(". Functions pass an input value as an argument and must return either "),a("code",null,"true"),n(" / "),a("code",null,"false"),n(" or a string containing an error message.")],-1)),o(x)]),_:1,__:[6]},8,["code"])]),_:1})]),_:1})}}};export{to as default};
