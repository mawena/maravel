import{an as X,a0 as G,aF as K,au as Q,ao as h,bX as aa,av as ta,r as d,a1 as P,P as ea,dA as na,cg as la,w as M,E as ia,dB as oa,X as sa,a5 as ra,b as t,p as j,bN as ca,aw as ba,b$ as ua,ay as ka,az as ma,aA as Va,ch as da,aZ as Sa,cZ as pa,c4 as fa,c3 as va,b9 as Ba,aE as ga,c as I,o as x,e,s as n,af as V,aU as p,l as u,Z as y,F as C,f as ya,d as S}from"./main-7JdyGFby.js";import{a as q,m as xa}from"./VOverlay-BMzCYiWA.js";import{f as _a}from"./forwardRefs-C-GTDzx5.js";import{u as Ia}from"./scopeId-j0VLF_1N.js";import{_ as Ta}from"./AppCardCode-CUjMQLDl.js";import{V as wa,a as _}from"./VRow-GpmvwSSA.js";import"./easing-Bybner-F.js";import"./delay-9Hi4eTuF.js";import"./lazy-cOdXnimE.js";import"./VImg-Bk3huQTU.js";import"./vue3-perfect-scrollbar-BTKqCwUF.js";import"./VCard-D0LXqtBI.js";import"./VAvatar-sg7CZdU7.js";import"./VCardText-DYTBPo8J.js";import"./VDivider-CIpTZ8Ni.js";/* empty css              */function Ca(b){const i=P(b());let o=-1;function a(){clearInterval(o)}function r(){a(),Sa(()=>i.value=b())}function c(v){const s=v?getComputedStyle(v):{transitionDuration:.2},m=parseFloat(s.transitionDuration)*1e3||200;if(a(),i.value<=0)return;const g=performance.now();o=window.setInterval(()=>{const T=performance.now()-g+m;i.value=Math.max(b()-T,0),i.value<=0&&a()},m)}return da(a),{clear:a,time:i,start:c,reset:r}}const $a=G({multiLine:Boolean,text:String,timer:[Boolean,String],timeout:{type:[Number,String],default:5e3},vertical:Boolean,...Va({location:"bottom"}),...ma(),...ka(),...ua(),...ba(),...ca(xa({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),f=X()({name:"VSnackbar",props:$a(),emits:{"update:modelValue":b=>!0},setup(b,i){let{slots:o}=i;const a=K(b,"modelValue"),{positionClasses:r}=Q(b),{scopeId:c}=Ia(),{themeClasses:v}=h(b),{colorClasses:s,colorStyles:m,variantClasses:g}=aa(b),{roundedClasses:T}=ta(b),l=Ca(()=>Number(b.timeout)),k=d(),E=d(),$=P(!1),F=P(0),R=d(),H=ea(na,void 0);la(()=>!!H,()=>{const B=pa();fa(()=>{R.value=B.mainStyles.value})}),M(a,O),M(()=>b.timeout,O),ia(()=>{a.value&&O()});let U=-1;function O(){l.reset(),window.clearTimeout(U);const B=Number(b.timeout);if(!a.value||B===-1)return;const w=oa(E.value);l.start(w),U=window.setTimeout(()=>{a.value=!1},B)}function N(){l.reset(),window.clearTimeout(U)}function z(){$.value=!0,N()}function A(){$.value=!1,O()}function J(B){F.value=B.touches[0].clientY}function W(B){Math.abs(F.value-B.changedTouches[0].clientY)>50&&(a.value=!1)}function Y(){$.value&&A()}const Z=sa(()=>b.location.split(" ").reduce((B,w)=>(B[`v-snackbar--${w}`]=!0,B),{}));return ra(()=>{const B=q.filterProps(b),w=!!(o.default||o.text||b.text);return t(q,j({ref:k,class:["v-snackbar",{"v-snackbar--active":a.value,"v-snackbar--multi-line":b.multiLine&&!b.vertical,"v-snackbar--timer":!!b.timer,"v-snackbar--vertical":b.vertical},Z.value,r.value,b.class],style:[R.value,b.style]},B,{modelValue:a.value,"onUpdate:modelValue":D=>a.value=D,contentProps:j({class:["v-snackbar__wrapper",v.value,s.value,T.value,g.value],style:[m.value],onPointerenter:z,onPointerleave:A},B.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0,onTouchstartPassive:J,onTouchend:W,onAfterLeave:Y},c),{default:()=>{var D,L;return[va(!1,"v-snackbar"),b.timer&&!$.value&&t("div",{key:"timer",class:"v-snackbar__timer"},[t(Ba,{ref:E,color:typeof b.timer=="string"?b.timer:"info",max:b.timeout,"model-value":l.time.value},null)]),w&&t("div",{key:"content",class:"v-snackbar__content",role:"status","aria-live":"polite"},[((D=o.text)==null?void 0:D.call(o))??b.text,(L=o.default)==null?void 0:L.call(o)]),o.actions&&t(ga,{defaults:{VBtn:{variant:"text",ripple:!1,slim:!0}}},{default:()=>[t("div",{class:"v-snackbar__actions"},[o.actions({isActive:a})])]})]},activator:o.activator})}),_a({},k)}}),Oa={class:"demo-space-x"},Da={__name:"DemoSnackbarTransition",setup(b){const i=d(!1),o=d(!1),a=d(!1);return(r,c)=>(x(),I("div",Oa,[t(V,{onClick:c[0]||(c[0]=v=>i.value=!0)},{default:e(()=>c[6]||(c[6]=[n(" fade snackbar ")])),_:1,__:[6]}),t(f,{modelValue:u(i),"onUpdate:modelValue":c[1]||(c[1]=v=>p(i)?i.value=v:null),transition:"fade-transition",location:"top start"},{default:e(()=>c[7]||(c[7]=[n(" I'm a fade transition snackbar. ")])),_:1,__:[7]},8,["modelValue"]),t(V,{onClick:c[2]||(c[2]=v=>o.value=!0)},{default:e(()=>c[8]||(c[8]=[n(" Scale snackbar ")])),_:1,__:[8]}),t(f,{modelValue:u(o),"onUpdate:modelValue":c[3]||(c[3]=v=>p(o)?o.value=v:null),transition:"scale-transition",location:"bottom end"},{default:e(()=>c[9]||(c[9]=[n(" I'm a scale transition snackbar. ")])),_:1,__:[9]},8,["modelValue"]),t(V,{onClick:c[4]||(c[4]=v=>a.value=!0)},{default:e(()=>c[10]||(c[10]=[n(" scroll y reverse ")])),_:1,__:[10]}),t(f,{modelValue:u(a),"onUpdate:modelValue":c[5]||(c[5]=v=>p(a)?a.value=v:null),transition:"scroll-y-reverse-transition",location:"top end"},{default:e(()=>c[11]||(c[11]=[n(" I'm a scroll y reverse transition snackbar. ")])),_:1,__:[11]},8,["modelValue"])]))}},Ua={class:"demo-space-x"},Pa={__name:"DemoSnackbarVariants",setup(b){const i=d(!1),o=d(!1),a=d(!1),r=d(!1),c=d(!1);return(v,s)=>(x(),I("div",Ua,[t(V,{onClick:s[0]||(s[0]=m=>i.value=!0)},{default:e(()=>s[10]||(s[10]=[n(" Default ")])),_:1,__:[10]}),t(f,{modelValue:u(i),"onUpdate:modelValue":s[1]||(s[1]=m=>p(i)?i.value=m:null),location:"top start"},{default:e(()=>s[11]||(s[11]=[n(" Jelly chocolate bar candy canes apple pie. ")])),_:1,__:[11]},8,["modelValue"]),t(V,{onClick:s[2]||(s[2]=m=>o.value=!0)},{default:e(()=>s[12]||(s[12]=[n(" tonal ")])),_:1,__:[12]}),t(f,{modelValue:u(o),"onUpdate:modelValue":s[3]||(s[3]=m=>p(o)?o.value=m:null),location:"top end",variant:"tonal"},{default:e(()=>s[13]||(s[13]=[n(" Ice cream cake candy canes. ")])),_:1,__:[13]},8,["modelValue"]),t(V,{onClick:s[4]||(s[4]=m=>a.value=!0)},{default:e(()=>s[14]||(s[14]=[n(" Text ")])),_:1,__:[14]}),t(f,{modelValue:u(a),"onUpdate:modelValue":s[5]||(s[5]=m=>p(a)?a.value=m:null),location:"end center",variant:"text"},{default:e(()=>s[15]||(s[15]=[n(" Pie icing biscuit soufflé liquorice topping. ")])),_:1,__:[15]},8,["modelValue"]),t(V,{onClick:s[6]||(s[6]=m=>r.value=!0)},{default:e(()=>s[16]||(s[16]=[n(" Outlined ")])),_:1,__:[16]}),t(f,{modelValue:u(r),"onUpdate:modelValue":s[7]||(s[7]=m=>p(r)?r.value=m:null),location:"bottom end",variant:"outlined",color:"error"},{default:e(()=>s[17]||(s[17]=[n(" Oat cake caramels sesame snaps candy. ")])),_:1,__:[17]},8,["modelValue"]),t(V,{onClick:s[8]||(s[8]=m=>c.value=!0)},{default:e(()=>s[18]||(s[18]=[n(" Flat ")])),_:1,__:[18]}),t(f,{modelValue:u(c),"onUpdate:modelValue":s[9]||(s[9]=m=>p(c)?c.value=m:null),location:"bottom start",variant:"flat",color:"error"},{default:e(()=>s[19]||(s[19]=[n(" Oat cake caramels sesame snaps candy. ")])),_:1,__:[19]},8,["modelValue"])]))}},Ea={class:"demo-space-x"},Fa={__name:"DemoSnackbarPosition",setup(b){const i=d(!1),o=d(!1),a=d(!1),r=d(!1),c=d(!1),v=d(!1),s=d(!1),m=d(!1),g=d(!1);return(T,l)=>(x(),I("div",Ea,[t(V,{icon:"",variant:"text",onClick:l[0]||(l[0]=k=>o.value=!0)},{default:e(()=>[t(y,{icon:"tabler-arrow-up"})]),_:1}),t(f,{modelValue:u(o),"onUpdate:modelValue":l[1]||(l[1]=k=>p(o)?o.value=k:null),location:"top"},{default:e(()=>l[18]||(l[18]=[n(" I'm a top snackbar. ")])),_:1,__:[18]},8,["modelValue"]),t(V,{icon:"",variant:"text",onClick:l[2]||(l[2]=k=>a.value=!0)},{default:e(()=>[t(y,{icon:"tabler-arrow-up-right"})]),_:1}),t(f,{modelValue:u(a),"onUpdate:modelValue":l[3]||(l[3]=k=>p(a)?a.value=k:null),location:"top end"},{default:e(()=>l[19]||(l[19]=[n(" I'm a top right snackbar. ")])),_:1,__:[19]},8,["modelValue"]),t(V,{icon:"",variant:"text",onClick:l[4]||(l[4]=k=>s.value=!0)},{default:e(()=>[t(y,{icon:"tabler-arrow-right"})]),_:1}),t(f,{modelValue:u(s),"onUpdate:modelValue":l[5]||(l[5]=k=>p(s)?s.value=k:null),location:"end center"},{default:e(()=>l[20]||(l[20]=[n(" I'm a center end snackbar. ")])),_:1,__:[20]},8,["modelValue"]),t(V,{icon:"",variant:"text",onClick:l[6]||(l[6]=k=>r.value=!0)},{default:e(()=>[t(y,{icon:"tabler-arrow-down-right"})]),_:1}),t(f,{modelValue:u(r),"onUpdate:modelValue":l[7]||(l[7]=k=>p(r)?r.value=k:null),location:"bottom end"},{default:e(()=>l[21]||(l[21]=[n(" I'm a bottom end snackbar. ")])),_:1,__:[21]},8,["modelValue"]),t(V,{icon:"",variant:"text",onClick:l[8]||(l[8]=k=>c.value=!0)},{default:e(()=>[t(y,{icon:"tabler-arrow-down"})]),_:1}),t(f,{modelValue:u(c),"onUpdate:modelValue":l[9]||(l[9]=k=>p(c)?c.value=k:null)},{default:e(()=>l[22]||(l[22]=[n(" I'm a bottom snackbar. ")])),_:1,__:[22]},8,["modelValue"]),t(V,{icon:"",variant:"text",onClick:l[10]||(l[10]=k=>v.value=!0)},{default:e(()=>[t(y,{icon:"tabler-arrow-down-left"})]),_:1}),t(f,{modelValue:u(v),"onUpdate:modelValue":l[11]||(l[11]=k=>p(v)?v.value=k:null),location:"bottom start"},{default:e(()=>l[23]||(l[23]=[n(" I'm a bottom start snackbar. ")])),_:1,__:[23]},8,["modelValue"]),t(V,{icon:"",variant:"text",onClick:l[12]||(l[12]=k=>m.value=!0)},{default:e(()=>[t(y,{icon:"tabler-arrow-left"})]),_:1}),t(f,{modelValue:u(m),"onUpdate:modelValue":l[13]||(l[13]=k=>p(m)?m.value=k:null),location:"start center"},{default:e(()=>l[24]||(l[24]=[n(" I'm a center start snackbar. ")])),_:1,__:[24]},8,["modelValue"]),t(V,{icon:"",variant:"text",onClick:l[14]||(l[14]=k=>i.value=!0)},{default:e(()=>[t(y,{icon:"tabler-arrow-up-left"})]),_:1}),t(f,{modelValue:u(i),"onUpdate:modelValue":l[15]||(l[15]=k=>p(i)?i.value=k:null),location:"top start"},{default:e(()=>l[25]||(l[25]=[n(" I'm a top start snackbar. ")])),_:1,__:[25]},8,["modelValue"]),t(V,{icon:"",variant:"text",onClick:l[16]||(l[16]=k=>g.value=!0)},{default:e(()=>[t(y,{icon:"tabler-arrows-minimize"})]),_:1}),t(f,{modelValue:u(g),"onUpdate:modelValue":l[17]||(l[17]=k=>p(g)?g.value=k:null),location:"center"},{default:e(()=>l[26]||(l[26]=[n(" I'm a center snackbar. ")])),_:1,__:[26]},8,["modelValue"])]))}},Ra={__name:"DemoSnackbarVertical",setup(b){const i=d(!1);return(o,a)=>(x(),I(C,null,[t(V,{onClick:a[0]||(a[0]=r=>i.value=!0)},{default:e(()=>a[4]||(a[4]=[n(" Open Snackbar ")])),_:1,__:[4]}),t(f,{modelValue:u(i),"onUpdate:modelValue":a[3]||(a[3]=r=>p(i)?i.value=r:null),vertical:""},{actions:e(()=>[t(V,{color:"success",onClick:a[1]||(a[1]=r=>i.value=!1)},{default:e(()=>a[5]||(a[5]=[n(" Undo ")])),_:1,__:[5]}),t(V,{color:"error",onClick:a[2]||(a[2]=r=>i.value=!1)},{default:e(()=>a[6]||(a[6]=[n(" Close ")])),_:1,__:[6]})]),default:e(()=>[a[7]||(a[7]=n(" Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy. "))]),_:1,__:[7]},8,["modelValue"])],64))}},Aa={__name:"DemoSnackbarTimeout",setup(b){const i=d(!1);return(o,a)=>(x(),I(C,null,[t(V,{onClick:a[0]||(a[0]=r=>i.value=!0)},{default:e(()=>a[2]||(a[2]=[n(" Open Snackbar ")])),_:1,__:[2]}),t(f,{modelValue:u(i),"onUpdate:modelValue":a[1]||(a[1]=r=>p(i)?i.value=r:null),timeout:2e3},{default:e(()=>a[3]||(a[3]=[n(" My timeout is set to 2000. ")])),_:1,__:[3]},8,["modelValue"])],64))}},La={__name:"DemoSnackbarMultiLine",setup(b){const i=d(!1);return(o,a)=>(x(),I(C,null,[t(V,{onClick:a[0]||(a[0]=r=>i.value=!0)},{default:e(()=>a[3]||(a[3]=[n(" Open Snackbar ")])),_:1,__:[3]}),t(f,{modelValue:u(i),"onUpdate:modelValue":a[2]||(a[2]=r=>p(i)?i.value=r:null),"multi-line":""},{actions:e(()=>[t(V,{color:"error",onClick:a[1]||(a[1]=r=>i.value=!1)},{default:e(()=>a[4]||(a[4]=[n(" Close ")])),_:1,__:[4]})]),default:e(()=>[a[5]||(a[5]=n(" I am a multi-line snackbar. I can have more than one line. This is another line that is quite long. "))]),_:1,__:[5]},8,["modelValue"])],64))}},Ma={__name:"DemoSnackbarWithAction",setup(b){const i=d(!1);return(o,a)=>(x(),I(C,null,[t(V,{onClick:a[0]||(a[0]=r=>i.value=!0)},{default:e(()=>a[3]||(a[3]=[n(" Open Snackbar ")])),_:1,__:[3]}),t(f,{modelValue:u(i),"onUpdate:modelValue":a[2]||(a[2]=r=>p(i)?i.value=r:null)},{actions:e(()=>[t(V,{color:"error",onClick:a[1]||(a[1]=r=>i.value=!1)},{default:e(()=>a[4]||(a[4]=[n(" Close ")])),_:1,__:[4]})]),default:e(()=>[a[5]||(a[5]=n(" Hello, I'm a snackbar with actions. "))]),_:1,__:[5]},8,["modelValue"])],64))}},ja={__name:"DemoSnackbarBasic",setup(b){const i=d(!1);return(o,a)=>(x(),I(C,null,[t(V,{onClick:a[0]||(a[0]=r=>i.value=!0)},{default:e(()=>a[2]||(a[2]=[n(" Open Snackbar ")])),_:1,__:[2]}),t(f,{modelValue:u(i),"onUpdate:modelValue":a[1]||(a[1]=r=>p(i)?i.value=r:null)},{default:e(()=>a[3]||(a[3]=[n(" Hello, I'm a snackbar ")])),_:1,__:[3]},8,["modelValue"])],64))}},qa={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- SnackBar -->
  <VSnackbar v-model="isSnackbarVisible">
    Hello, I'm a snackbar
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- SnackBar -->
  <VSnackbar v-model="isSnackbarVisible">
    Hello, I'm a snackbar
  </VSnackbar>
</template>
`},Ha={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    multi-line
  >
    I am a multi-line snackbar. I can have more than one line. This is another line that is quite long.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    multi-line
  >
    I am a multi-line snackbar. I can have more than one line. This is another line that is quite long.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},Na={ts:`<script lang="ts" setup>
const isSnackbarTopStartVisible = ref(false)
const isSnackbarTopVisible = ref(false)
const isSnackbarTopEndVisible = ref(false)
const isSnackbarBottomEndVisible = ref(false)
const isSnackbarBottomVisible = ref(false)
const isSnackbarBottomStartVisible = ref(false)
const isSnackbarEndVisible = ref(false)
const isSnackbarStartVisible = ref(false)
const isSnackbarCenteredVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- top  -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopVisible = true"
    >
      <VIcon icon="tabler-arrow-up" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopVisible"
      location="top"
    >
      I'm a top snackbar.
    </VSnackbar>

    <!-- top end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopEndVisible = true"
    >
      <VIcon icon="tabler-arrow-up-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopEndVisible"
      location="top end"
    >
      I'm a top right snackbar.
    </VSnackbar>

    <!-- center end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarEndVisible = true"
    >
      <VIcon icon="tabler-arrow-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarEndVisible"
      location="end center"
    >
      I'm a center end snackbar.
    </VSnackbar>

    <!-- bottom end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomEndVisible = true"
    >
      <VIcon icon="tabler-arrow-down-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomEndVisible"
      location="bottom end"
    >
      I'm a bottom end snackbar.
    </VSnackbar>

    <!-- bottom -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomVisible = true"
    >
      <VIcon icon="tabler-arrow-down" />
    </VBtn>

    <VSnackbar v-model="isSnackbarBottomVisible">
      I'm a bottom snackbar.
    </VSnackbar>

    <!-- bottom start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomStartVisible = true"
    >
      <VIcon icon="tabler-arrow-down-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomStartVisible"
      location="bottom start"
    >
      I'm a bottom start snackbar.
    </VSnackbar>

    <!-- center start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarStartVisible = true"
    >
      <VIcon icon="tabler-arrow-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarStartVisible"
      location="start center"
    >
      I'm a center start snackbar.
    </VSnackbar>

    <!-- top start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopStartVisible = true"
    >
      <VIcon icon="tabler-arrow-up-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopStartVisible"
      location="top start"
    >
      I'm a top start snackbar.
    </VSnackbar>

    <!-- center -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarCenteredVisible = true"
    >
      <VIcon icon="tabler-arrows-minimize" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarCenteredVisible"
      location="center"
    >
      I'm a center snackbar.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isSnackbarTopStartVisible = ref(false)
const isSnackbarTopVisible = ref(false)
const isSnackbarTopEndVisible = ref(false)
const isSnackbarBottomEndVisible = ref(false)
const isSnackbarBottomVisible = ref(false)
const isSnackbarBottomStartVisible = ref(false)
const isSnackbarEndVisible = ref(false)
const isSnackbarStartVisible = ref(false)
const isSnackbarCenteredVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- top  -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopVisible = true"
    >
      <VIcon icon="tabler-arrow-up" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopVisible"
      location="top"
    >
      I'm a top snackbar.
    </VSnackbar>

    <!-- top end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopEndVisible = true"
    >
      <VIcon icon="tabler-arrow-up-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopEndVisible"
      location="top end"
    >
      I'm a top right snackbar.
    </VSnackbar>

    <!-- center end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarEndVisible = true"
    >
      <VIcon icon="tabler-arrow-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarEndVisible"
      location="end center"
    >
      I'm a center end snackbar.
    </VSnackbar>

    <!-- bottom end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomEndVisible = true"
    >
      <VIcon icon="tabler-arrow-down-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomEndVisible"
      location="bottom end"
    >
      I'm a bottom end snackbar.
    </VSnackbar>

    <!-- bottom -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomVisible = true"
    >
      <VIcon icon="tabler-arrow-down" />
    </VBtn>

    <VSnackbar v-model="isSnackbarBottomVisible">
      I'm a bottom snackbar.
    </VSnackbar>

    <!-- bottom start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomStartVisible = true"
    >
      <VIcon icon="tabler-arrow-down-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomStartVisible"
      location="bottom start"
    >
      I'm a bottom start snackbar.
    </VSnackbar>

    <!-- center start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarStartVisible = true"
    >
      <VIcon icon="tabler-arrow-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarStartVisible"
      location="start center"
    >
      I'm a center start snackbar.
    </VSnackbar>

    <!-- top start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopStartVisible = true"
    >
      <VIcon icon="tabler-arrow-up-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopStartVisible"
      location="top start"
    >
      I'm a top start snackbar.
    </VSnackbar>

    <!-- center -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarCenteredVisible = true"
    >
      <VIcon icon="tabler-arrows-minimize" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarCenteredVisible"
      location="center"
    >
      I'm a center snackbar.
    </VSnackbar>
  </div>
</template>
`},za={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    :timeout="2000"
  >
    My timeout is set to 2000.
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    :timeout="2000"
  >
    My timeout is set to 2000.
  </VSnackbar>
</template>
`},Ja={ts:`<script lang="ts" setup>
const isSnackbarFadeVisible = ref(false)
const isSnackbarScaleVisible = ref(false)
const isSnackbarScrollReverseVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- fade -->
    <VBtn @click="isSnackbarFadeVisible = true">
      fade snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarFadeVisible"
      transition="fade-transition"
      location="top start"
    >
      I'm a fade transition snackbar.
    </VSnackbar>

    <!-- scale -->
    <VBtn @click="isSnackbarScaleVisible = true">
      Scale snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScaleVisible"
      transition="scale-transition"
      location="bottom end"
    >
      I'm a scale transition snackbar.
    </VSnackbar>

    <!-- scroll y reverse -->
    <VBtn @click="isSnackbarScrollReverseVisible = true">
      scroll y reverse
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scroll-y-reverse-transition"
      location="top end"
    >
      I'm a scroll y reverse transition snackbar.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isSnackbarFadeVisible = ref(false)
const isSnackbarScaleVisible = ref(false)
const isSnackbarScrollReverseVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- fade -->
    <VBtn @click="isSnackbarFadeVisible = true">
      fade snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarFadeVisible"
      transition="fade-transition"
      location="top start"
    >
      I'm a fade transition snackbar.
    </VSnackbar>

    <!-- scale -->
    <VBtn @click="isSnackbarScaleVisible = true">
      Scale snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScaleVisible"
      transition="scale-transition"
      location="bottom end"
    >
      I'm a scale transition snackbar.
    </VSnackbar>

    <!-- scroll y reverse -->
    <VBtn @click="isSnackbarScrollReverseVisible = true">
      scroll y reverse
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scroll-y-reverse-transition"
      location="top end"
    >
      I'm a scroll y reverse transition snackbar.
    </VSnackbar>
  </div>
</template>
`},Wa={ts:`<script lang="ts" setup>
const isDefaultSnackbarVisible = ref(false)
const isTonalSnackbarVisible = ref(false)
const isTextSnackbarVisible = ref(false)
const isOutlinedSnackbarVisible = ref(false)
const isFlatSnackbarVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- Default toggle btn -->
    <VBtn @click="isDefaultSnackbarVisible = true">
      Default
    </VBtn>

    <!-- Default snackbar -->
    <VSnackbar
      v-model="isDefaultSnackbarVisible"
      location="top start"
    >
      Jelly chocolate bar candy canes apple pie.
    </VSnackbar>

    <!-- tonal toggle btn -->
    <VBtn @click="isTonalSnackbarVisible = true">
      tonal
    </VBtn>

    <!-- tonal snackbar -->
    <VSnackbar
      v-model="isTonalSnackbarVisible"
      location="top end"
      variant="tonal"
    >
      Ice cream cake candy canes.
    </VSnackbar>

    <!-- Text toggle btn -->
    <VBtn @click="isTextSnackbarVisible = true">
      Text
    </VBtn>

    <!-- Text snackbar -->
    <VSnackbar
      v-model="isTextSnackbarVisible"
      location="end center"
      variant="text"
    >
      Pie icing biscuit soufflé liquorice topping.
    </VSnackbar>

    <!-- Outline toggle btn -->
    <VBtn @click="isOutlinedSnackbarVisible = true">
      Outlined
    </VBtn>

    <!-- Outline snackbar -->
    <VSnackbar
      v-model="isOutlinedSnackbarVisible"
      location="bottom end"
      variant="outlined"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>

    <!-- flat toggle btn -->
    <VBtn @click="isFlatSnackbarVisible = true">
      Flat
    </VBtn>

    <!-- flat snackbar -->
    <VSnackbar
      v-model="isFlatSnackbarVisible"
      location="bottom start"
      variant="flat"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isDefaultSnackbarVisible = ref(false)
const isTonalSnackbarVisible = ref(false)
const isTextSnackbarVisible = ref(false)
const isOutlinedSnackbarVisible = ref(false)
const isFlatSnackbarVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- Default toggle btn -->
    <VBtn @click="isDefaultSnackbarVisible = true">
      Default
    </VBtn>

    <!-- Default snackbar -->
    <VSnackbar
      v-model="isDefaultSnackbarVisible"
      location="top start"
    >
      Jelly chocolate bar candy canes apple pie.
    </VSnackbar>

    <!-- tonal toggle btn -->
    <VBtn @click="isTonalSnackbarVisible = true">
      tonal
    </VBtn>

    <!-- tonal snackbar -->
    <VSnackbar
      v-model="isTonalSnackbarVisible"
      location="top end"
      variant="tonal"
    >
      Ice cream cake candy canes.
    </VSnackbar>

    <!-- Text toggle btn -->
    <VBtn @click="isTextSnackbarVisible = true">
      Text
    </VBtn>

    <!-- Text snackbar -->
    <VSnackbar
      v-model="isTextSnackbarVisible"
      location="end center"
      variant="text"
    >
      Pie icing biscuit soufflé liquorice topping.
    </VSnackbar>

    <!-- Outline toggle btn -->
    <VBtn @click="isOutlinedSnackbarVisible = true">
      Outlined
    </VBtn>

    <!-- Outline snackbar -->
    <VSnackbar
      v-model="isOutlinedSnackbarVisible"
      location="bottom end"
      variant="outlined"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>

    <!-- flat toggle btn -->
    <VBtn @click="isFlatSnackbarVisible = true">
      Flat
    </VBtn>

    <!-- flat snackbar -->
    <VSnackbar
      v-model="isFlatSnackbarVisible"
      location="bottom start"
      variant="flat"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>
  </div>
</template>
`},Ya={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <VSnackbar
    v-model="isSnackbarVisible"
    vertical
  >
    Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy.

    <template #actions>
      <VBtn
        color="success"
        @click="isSnackbarVisible = false"
      >
        Undo
      </VBtn>

      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <VSnackbar
    v-model="isSnackbarVisible"
    vertical
  >
    Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy.

    <template #actions>
      <VBtn
        color="success"
        @click="isSnackbarVisible = false"
      >
        Undo
      </VBtn>

      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},Za={ts:`<script lang="ts" setup>
const isSnackbarVisibility = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisibility = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar v-model="isSnackbarVisibility">
    Hello, I'm a snackbar with actions.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisibility = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisibility = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisibility = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar v-model="isSnackbarVisibility">
    Hello, I'm a snackbar with actions.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisibility = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},ut={__name:"snackbar",setup(b){return(i,o)=>{const a=ja,r=Ta,c=Ma,v=La,s=Aa,m=Ra,g=Fa,T=Pa,l=Da;return x(),ya(wa,{class:"match-height"},{default:e(()=>[t(_,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Basic",code:u(qa)},{default:e(()=>[o[0]||(o[0]=S("p",null,[n("The "),S("code",null,"v-snackbar"),n(" component is used to display a quick message to a user. Snackbars support positioning, removal delay, and callbacks.")],-1)),t(a)]),_:1,__:[0]},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"With Action",code:u(Za)},{default:e(()=>[o[1]||(o[1]=S("p",null,[n("Use "),S("code",null,"actions"),n(" slot to add action button. A "),S("code",null,"v-snackbar"),n(" in its simplest form displays a temporary and closable notification to the user.")],-1)),t(c)]),_:1,__:[1]},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Multi Line",code:u(Ha)},{default:e(()=>[o[2]||(o[2]=S("p",null,[n("The "),S("code",null,"multi-line"),n(" property extends the height of the "),S("code",null,"v-snackbar"),n(" to give you a little more room for content.")],-1)),t(v)]),_:1,__:[2]},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Timeout",code:u(za)},{default:e(()=>[o[3]||(o[3]=S("p",null,[n("The "),S("code",null,"timeout"),n(" property lets you customize the delay before the "),S("code",null,"v-snackbar"),n(" is hidden.")],-1)),t(s)]),_:1,__:[3]},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Vertical",code:u(Ya)},{default:e(()=>[o[4]||(o[4]=S("p",null,[n("The "),S("code",null,"vertical"),n(" property allows you to stack the content of your "),S("code",null,"v-snackbar"),n(".")],-1)),t(m)]),_:1,__:[4]},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Position",code:u(Na)},{default:e(()=>[o[5]||(o[5]=S("p",null,[n("Use "),S("code",null,"location"),n(" prop to change the position of snackbar.")],-1)),t(g)]),_:1,__:[5]},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Variants",code:u(Wa)},{default:e(()=>[o[6]||(o[6]=S("p",null,[n("Apply different styles to the snackbar using props such as "),S("code",null,"shaped"),n(", "),S("code",null,"rounded"),n(", "),S("code",null,"color"),n(", "),S("code",null,"text"),n(", "),S("code",null,"outlined"),n(", "),S("code",null,"tile"),n(" and more.")],-1)),t(T)]),_:1,__:[6]},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:e(()=>[t(r,{title:"Transition",code:u(Ja)},{default:e(()=>[o[7]||(o[7]=S("p",null,"Use transition prop to sets the component transition.",-1)),t(l)]),_:1,__:[7]},8,["code"])]),_:1})]),_:1})}}};export{ut as default};
