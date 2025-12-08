import{_ as q}from"./AppTextField-2IS70PnL.js";import{_ as B}from"./DialogCloseBtn-BX7qR9em.js";import{V as h,a as G,b as O}from"./VCard-D0LXqtBI.js";import{V}from"./VCardText-DYTBPo8J.js";import{V as J,a as f}from"./VRow-GpmvwSSA.js";import{r as g,f as C,o as y,e as a,b as e,l as n,aU as b,af as d,s as r,b7 as j,b8 as _,an as R,a0 as H,aI as W,Y as $,a5 as E,b$ as Y,a7 as Z,d as k,Z as K,p as Q,c as I,F as N,w as X,b9 as ee,h as ae}from"./main-7JdyGFby.js";import{V as D}from"./VDialog-By-T7n_4.js";import{V as le,a as oe}from"./VToolbar-DQdkI8MX.js";import{V as M}from"./VSpacer-BOTWrIDY.js";import{V as F,c as U,a as T}from"./VList-BD6Dg9I8.js";import{V as S}from"./VDivider-CIpTZ8Ni.js";import{V as A}from"./VListItemAction-BMnkLarI.js";import{V as P}from"./VCheckbox-DKfuVZm8.js";import{V as te,a as ie}from"./VRadioGroup-CilT9Trh.js";import{_ as se}from"./AppCardCode-CUjMQLDl.js";import"./form-BuGlugVy.js";import"./VTextField-DdAXD61i.js";/* empty css                   */import"./VCounter-muzn6vBk.js";import"./VImg-Bk3huQTU.js";import"./VField-Cnag0GiO.js";import"./easing-Bybner-F.js";import"./VInput-U8KQD51r.js";import"./forwardRefs-C-GTDzx5.js";import"./VAvatar-sg7CZdU7.js";/* empty css              */import"./VOverlay-BMzCYiWA.js";import"./delay-9Hi4eTuF.js";import"./lazy-cOdXnimE.js";import"./scopeId-j0VLF_1N.js";import"./dialog-transition-B9GC1vyq.js";import"./ssrBoot-CA1KQA2w.js";import"./VCheckboxBtn-CBQDHvrp.js";import"./VSelectionControl-lb_mBfMr.js";import"./vue3-perfect-scrollbar-BTKqCwUF.js";const re={__name:"DemoDialogForm",setup(v){const t=g(!1),s=g(""),l=g(""),o=g(""),i=g(""),m=g(""),p=g(),x=g([]);return(z,c)=>{const L=B,w=q;return y(),C(D,{modelValue:n(t),"onUpdate:modelValue":c[10]||(c[10]=u=>b(t)?t.value=u:null),"max-width":"600"},{activator:a(({props:u})=>[e(d,j(_(u)),{default:a(()=>c[11]||(c[11]=[r(" Open Dialog ")])),_:2,__:[11]},1040)]),default:a(()=>[e(L,{onClick:c[0]||(c[0]=u=>t.value=!n(t))}),e(h,{title:"User Profile"},{default:a(()=>[e(V,null,{default:a(()=>[e(J,null,{default:a(()=>[e(f,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(w,{modelValue:n(s),"onUpdate:modelValue":c[1]||(c[1]=u=>b(s)?s.value=u:null),label:"First Name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(w,{modelValue:n(l),"onUpdate:modelValue":c[2]||(c[2]=u=>b(l)?l.value=u:null),label:"Middle Name",placeholder:"peter"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(w,{modelValue:n(o),"onUpdate:modelValue":c[3]||(c[3]=u=>b(o)?o.value=u:null),label:"Last Name","persistent-hint":"",placeholder:"Doe"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12"},{default:a(()=>[e(w,{modelValue:n(i),"onUpdate:modelValue":c[4]||(c[4]=u=>b(i)?i.value=u:null),label:"Email",placeholder:"johndoe@email.com"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12"},{default:a(()=>[e(w,{modelValue:n(m),"onUpdate:modelValue":c[5]||(c[5]=u=>b(m)?m.value=u:null),label:"Password",autocomplete:"on",type:"password",placeholder:"············"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12",sm:"6"},{default:a(()=>[e(w,{modelValue:n(p),"onUpdate:modelValue":c[6]||(c[6]=u=>b(p)?p.value=u:null),label:"Age",type:"number",placeholder:"18"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12",sm:"6"},{default:a(()=>[e(w,{modelValue:n(x),"onUpdate:modelValue":c[7]||(c[7]=u=>b(x)?x.value=u:null),label:"Interests",placeholder:"Sports, Music, Movies"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(V,{class:"d-flex justify-end flex-wrap gap-3"},{default:a(()=>[e(d,{variant:"tonal",color:"secondary",onClick:c[8]||(c[8]=u=>t.value=!1)},{default:a(()=>c[12]||(c[12]=[r(" Close ")])),_:1,__:[12]}),e(d,{onClick:c[9]||(c[9]=u=>t.value=!1)},{default:a(()=>c[13]||(c[13]=[r(" Save ")])),_:1,__:[13]})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},ne=H({...Z(),...Y({variant:"text"})},"VToolbarItems"),ce=R()({name:"VToolbarItems",props:ne(),setup(v,t){let{slots:s}=t;return W({VBtn:{color:$(()=>v.color),height:"inherit",variant:$(()=>v.variant)}}),E(()=>{var l;return e("div",{class:["v-toolbar-items",v.class],style:v.style},[(l=s.default)==null?void 0:l.call(s)])}),{}}}),de={__name:"DemoDialogFullscreen",setup(v){const t=g(!1);return(s,l)=>(y(),C(D,{modelValue:n(t),"onUpdate:modelValue":l[2]||(l[2]=o=>b(t)?t.value=o:null),fullscreen:"",scrim:!1,transition:"dialog-bottom-transition"},{activator:a(({props:o})=>[e(d,j(_(o)),{default:a(()=>l[3]||(l[3]=[r(" Open Dialog ")])),_:2,__:[3]},1040)]),default:a(()=>[e(h,null,{default:a(()=>[k("div",null,[e(le,{color:"primary"},{default:a(()=>[e(d,{icon:"",variant:"plain",onClick:l[0]||(l[0]=o=>t.value=!1)},{default:a(()=>[e(K,{color:"white",icon:"tabler-x"})]),_:1}),e(oe,null,{default:a(()=>l[4]||(l[4]=[r("Settings")])),_:1,__:[4]}),e(M),e(ce,null,{default:a(()=>[e(d,{variant:"text",onClick:l[1]||(l[1]=o=>t.value=!1)},{default:a(()=>l[5]||(l[5]=[r(" Save ")])),_:1,__:[5]})]),_:1})]),_:1})]),e(F,{lines:"two"},{default:a(()=>[e(U,null,{default:a(()=>l[6]||(l[6]=[r("User Controls")])),_:1,__:[6]}),e(T,{title:"Content filtering",subtitle:"Set the content filtering level to restrict apps that can be downloaded"}),e(T,{title:"Password",subtitle:"Require password for purchase or use password to restrict purchase"})]),_:1}),e(S),e(F,{lines:"two","select-strategy":"classic",class:"full-screen-dialog-list"},{default:a(()=>[e(U,null,{default:a(()=>l[7]||(l[7]=[r("General")])),_:1,__:[7]}),e(T,{title:"Notifications",subtitle:"Notify me about updates to apps or games that I downloaded",value:"Notifications"},{prepend:a(({isActive:o})=>[e(A,{start:""},{default:a(()=>[e(P,{"model-value":o,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1}),e(T,{title:"Sound",subtitle:"Auto-update apps at any time. Data charges may apply",value:"Sound"},{prepend:a(({isActive:o})=>[e(A,{start:""},{default:a(()=>[e(P,{"model-value":o,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1}),e(T,{title:"Auto-add widgets",subtitle:"Automatically add home screen widgets",value:"Auto-add widgets"},{prepend:a(({isActive:o})=>[e(A,{start:""},{default:a(()=>[e(P,{"model-value":o,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},ue={__name:"DemoDialogOverflowed",setup(v){const t=g(!1);return(s,l)=>{const o=B;return y(),C(D,{modelValue:n(t),"onUpdate:modelValue":l[3]||(l[3]=i=>b(t)?t.value=i:null),class:"v-dialog-sm"},{activator:a(({props:i})=>[e(d,Q({color:"primary"},i),{default:a(()=>l[4]||(l[4]=[r(" Open Dialog ")])),_:2,__:[4]},1040)]),default:a(()=>[e(o,{onClick:l[0]||(l[0]=i=>t.value=!n(t))}),e(h,{title:"Use Google's location service?"},{default:a(()=>[e(V,null,{default:a(()=>l[5]||(l[5]=[r(" Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy. Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet. Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate. Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll. Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie. ")])),_:1,__:[5]}),e(V,{class:"d-flex justify-end flex-wrap gap-3"},{default:a(()=>[e(d,{color:"secondary",variant:"tonal",onClick:l[1]||(l[1]=i=>t.value=!1)},{default:a(()=>l[6]||(l[6]=[r(" Disagree ")])),_:1,__:[6]}),e(d,{onClick:l[2]||(l[2]=i=>t.value=!1)},{default:a(()=>l[7]||(l[7]=[r(" Agree ")])),_:1,__:[7]})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},pe={__name:"DemoDialogNesting",setup(v){const t=g(!1),s=g(!1);return(l,o)=>{const i=B;return y(),I(N,null,[e(d,{onClick:o[0]||(o[0]=m=>t.value=!0)},{default:a(()=>o[8]||(o[8]=[r(" Open Dialog ")])),_:1,__:[8]}),e(D,{modelValue:n(t),"onUpdate:modelValue":o[4]||(o[4]=m=>b(t)?t.value=m:null),class:"v-dialog-sm"},{default:a(()=>[e(i,{onClick:o[1]||(o[1]=m=>t.value=!1)}),e(h,{title:"Dialog"},{default:a(()=>[e(V,null,{default:a(()=>o[9]||(o[9]=[r(" Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding. ")])),_:1,__:[9]}),e(V,{class:"d-flex justify-end flex-wrap gap-3"},{default:a(()=>[e(d,{variant:"tonal",color:"secondary",onClick:o[2]||(o[2]=m=>t.value=!1)},{default:a(()=>o[10]||(o[10]=[r(" Close ")])),_:1,__:[10]}),e(d,{onClick:o[3]||(o[3]=m=>s.value=!n(s))},{default:a(()=>o[11]||(o[11]=[r(" Open Dialog 2 ")])),_:1,__:[11]})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(D,{modelValue:n(s),"onUpdate:modelValue":o[7]||(o[7]=m=>b(s)?s.value=m:null),class:"v-dialog-sm"},{default:a(()=>[e(i,{onClick:o[5]||(o[5]=m=>s.value=!1)}),e(h,{title:"Dialog 2"},{default:a(()=>[e(V,null,{default:a(()=>o[12]||(o[12]=[r("I'm a nested dialog.")])),_:1,__:[12]}),e(V,{class:"d-flex flex-wrap gap-3"},{default:a(()=>[e(M),e(d,{onClick:o[6]||(o[6]=m=>s.value=!1)},{default:a(()=>o[13]||(o[13]=[r(" Close ")])),_:1,__:[13]})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}},me={__name:"DemoDialogLoader",setup(v){const t=g(!1);return X(t,s=>{s&&setTimeout(()=>{t.value=!1},4e3)}),(s,l)=>(y(),I(N,null,[e(d,{disabled:n(t),onClick:l[0]||(l[0]=o=>t.value=!0)},{default:a(()=>l[2]||(l[2]=[r(" Start loading ")])),_:1,__:[2]},8,["disabled"]),e(D,{modelValue:n(t),"onUpdate:modelValue":l[1]||(l[1]=o=>b(t)?t.value=o:null),width:"300"},{default:a(()=>[e(h,{color:"primary",width:"300"},{default:a(()=>[e(V,{class:"pt-3"},{default:a(()=>[l[3]||(l[3]=r(" Please stand by ")),e(ee,{indeterminate:"","bg-color":"rgba(var(--v-theme-surface), 0.1)",height:8,class:"mb-0 mt-4"})]),_:1,__:[3]})]),_:1})]),_:1},8,["modelValue"])],64))}},ge={__name:"DemoDialogScrollable",setup(v){const t=[{label:"Bahamas, The",value:"bahamas"},{label:"Bahrain",value:"bahrain"},{label:"Bangladesh",value:"bangladesh"},{label:"Barbados",value:"barbados"},{label:"Belarus",value:"belarus"},{label:"Belgium",value:"belgium"},{label:"Belize",value:"belize"},{label:"Benin",value:"benin"},{label:"Bhutan",value:"bhutan"},{label:"Bolivia",value:"bolivia"},{label:"Bosnia and Herzegovina",value:"bosnia"},{label:"Botswana",value:"botswana"},{label:"Brazil",value:"brazil"},{label:"Brunei",value:"brunei"},{label:"Bulgaria",value:"bulgaria"},{label:"Burkina Faso",value:"burkina"}],s=g(""),l=g(!1);return(o,i)=>{const m=B;return y(),C(D,{modelValue:n(l),"onUpdate:modelValue":i[4]||(i[4]=p=>b(l)?l.value=p:null),scrollable:"","max-width":"350","content-class":"scrollable-dialog"},{activator:a(({props:p})=>[e(d,j(_(p)),{default:a(()=>i[5]||(i[5]=[r(" Open Dialog ")])),_:2,__:[5]},1040)]),default:a(()=>[e(m,{onClick:i[0]||(i[0]=p=>l.value=!n(l))}),e(h,null,{default:a(()=>[e(G,{class:"pb-5"},{default:a(()=>[e(O,null,{default:a(()=>i[6]||(i[6]=[r("Select Country")])),_:1,__:[6]})]),_:1}),e(S),e(V,{style:{"block-size":"300px"}},{default:a(()=>[e(te,{modelValue:n(s),"onUpdate:modelValue":i[1]||(i[1]=p=>b(s)?s.value=p:null),inline:!1},{default:a(()=>[(y(),I(N,null,ae(t,p=>e(ie,{key:p.label,label:p.label,value:p.value,color:"primary"},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),e(S),e(V,{class:"d-flex justify-end flex-wrap gap-3 pt-5 overflow-visible"},{default:a(()=>[e(d,{color:"secondary",variant:"tonal",onClick:i[2]||(i[2]=p=>l.value=!1)},{default:a(()=>i[7]||(i[7]=[r(" Close ")])),_:1,__:[7]}),e(d,{onClick:i[3]||(i[3]=p=>l.value=!1)},{default:a(()=>i[8]||(i[8]=[r(" Save ")])),_:1,__:[8]})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},be={__name:"DemoDialogPersistent",setup(v){const t=g(!1);return(s,l)=>{const o=B;return y(),C(D,{modelValue:n(t),"onUpdate:modelValue":l[3]||(l[3]=i=>b(t)?t.value=i:null),persistent:"",class:"v-dialog-sm"},{activator:a(({props:i})=>[e(d,j(_(i)),{default:a(()=>l[4]||(l[4]=[r(" Open Dialog ")])),_:2,__:[4]},1040)]),default:a(()=>[e(o,{onClick:l[0]||(l[0]=i=>t.value=!n(t))}),e(h,{title:"Use Google's location service?"},{default:a(()=>[e(V,null,{default:a(()=>l[5]||(l[5]=[r(" Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running. ")])),_:1,__:[5]}),e(V,{class:"d-flex justify-end gap-3 flex-wrap"},{default:a(()=>[e(d,{color:"secondary",variant:"tonal",onClick:l[1]||(l[1]=i=>t.value=!1)},{default:a(()=>l[6]||(l[6]=[r(" Disagree ")])),_:1,__:[6]}),e(d,{onClick:l[2]||(l[2]=i=>t.value=!1)},{default:a(()=>l[7]||(l[7]=[r(" Agree ")])),_:1,__:[7]})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},fe={__name:"DemoDialogBasic",setup(v){const t=g(!1);return(s,l)=>{const o=B;return y(),C(D,{modelValue:n(t),"onUpdate:modelValue":l[2]||(l[2]=i=>b(t)?t.value=i:null),width:"500"},{activator:a(({props:i})=>[e(d,j(_(i)),{default:a(()=>l[3]||(l[3]=[r(" Click Me ")])),_:2,__:[3]},1040)]),default:a(()=>[e(o,{onClick:l[0]||(l[0]=i=>t.value=!n(t))}),e(h,{title:"Privacy Policy"},{default:a(()=>[e(V,null,{default:a(()=>l[4]||(l[4]=[r(" Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. ")])),_:1,__:[4]}),e(V,{class:"d-flex justify-end"},{default:a(()=>[e(d,{onClick:l[1]||(l[1]=i=>t.value=!1)},{default:a(()=>l[5]||(l[5]=[r(" I accept ")])),_:1,__:[5]})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},Ve={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    width="500"
  >
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Click Me
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Privacy Policy">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies.
      </VCardText>

      <VCardText class="d-flex justify-end">
        <VBtn @click="isDialogVisible = false">
          I accept
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    width="500"
  >
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Click Me
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Privacy Policy">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies.
      </VCardText>

      <VCardText class="d-flex justify-end">
        <VBtn @click="isDialogVisible = false">
          I accept
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},ve={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const age = ref()
const interest = ref<string[]>([])
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    max-width="600"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="User Profile">
      <VCardText>
        <VRow>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <AppTextField
              v-model="firstName"
              label="First Name"
              placeholder="John"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <AppTextField
              v-model="middleName"
              label="Middle Name"
              placeholder="peter"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <AppTextField
              v-model="lastName"
              label="Last Name"
              persistent-hint
              placeholder="Doe"
            />
          </VCol>
          <VCol cols="12">
            <AppTextField
              v-model="email"
              label="Email"
              placeholder="johndoe@email.com"
            />
          </VCol>
          <VCol cols="12">
            <AppTextField
              v-model="password"
              label="Password"
              autocomplete="on"
              type="password"
              placeholder="············"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextField
              v-model="age"
              label="Age"
              type="number"
              placeholder="18"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextField
              v-model="interest"
              label="Interests"
              placeholder="Sports, Music, Movies"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const age = ref()
const interest = ref([])
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    max-width="600"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="User Profile">
      <VCardText>
        <VRow>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <AppTextField
              v-model="firstName"
              label="First Name"
              placeholder="John"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <AppTextField
              v-model="middleName"
              label="Middle Name"
              placeholder="peter"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <AppTextField
              v-model="lastName"
              label="Last Name"
              persistent-hint
              placeholder="Doe"
            />
          </VCol>
          <VCol cols="12">
            <AppTextField
              v-model="email"
              label="Email"
              placeholder="johndoe@email.com"
            />
          </VCol>
          <VCol cols="12">
            <AppTextField
              v-model="password"
              label="Password"
              autocomplete="on"
              type="password"
              placeholder="············"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextField
              v-model="age"
              label="Age"
              type="number"
              placeholder="18"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextField
              v-model="interest"
              label="Interests"
              placeholder="Sports, Music, Movies"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},ke={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <!-- Toolbar -->
      <div>
        <VToolbar color="primary">
          <VBtn
            icon
            variant="plain"
            @click="isDialogVisible = false"
          >
            <VIcon
              color="white"
              icon="tabler-x"
            />
          </VBtn>

          <VToolbarTitle>Settings</VToolbarTitle>

          <VSpacer />

          <VToolbarItems>
            <VBtn
              variant="text"
              @click="isDialogVisible = false"
            >
              Save
            </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>

      <!-- List -->
      <VList lines="two">
        <VListSubheader>User Controls</VListSubheader>
        <VListItem
          title="Content filtering"
          subtitle="Set the content filtering level to restrict apps that can be downloaded"
        />
        <VListItem
          title="Password"
          subtitle="Require password for purchase or use password to restrict purchase"
        />
      </VList>

      <VDivider />

      <!-- List -->
      <VList
        lines="two"
        select-strategy="classic"
        class="full-screen-dialog-list"
      >
        <VListSubheader>General</VListSubheader>

        <VListItem
          title="Notifications"
          subtitle="Notify me about updates to apps or games that I downloaded"
          value="Notifications"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Sound"
          subtitle="Auto-update apps at any time. Data charges may apply"
          value="Sound"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Auto-add widgets"
          subtitle="Automatically add home screen widgets"
          value="Auto-add widgets"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>
      </VList>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <!-- Toolbar -->
      <div>
        <VToolbar color="primary">
          <VBtn
            icon
            variant="plain"
            @click="isDialogVisible = false"
          >
            <VIcon
              color="white"
              icon="tabler-x"
            />
          </VBtn>

          <VToolbarTitle>Settings</VToolbarTitle>

          <VSpacer />

          <VToolbarItems>
            <VBtn
              variant="text"
              @click="isDialogVisible = false"
            >
              Save
            </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>

      <!-- List -->
      <VList lines="two">
        <VListSubheader>User Controls</VListSubheader>
        <VListItem
          title="Content filtering"
          subtitle="Set the content filtering level to restrict apps that can be downloaded"
        />
        <VListItem
          title="Password"
          subtitle="Require password for purchase or use password to restrict purchase"
        />
      </VList>

      <VDivider />

      <!-- List -->
      <VList
        lines="two"
        select-strategy="classic"
        class="full-screen-dialog-list"
      >
        <VListSubheader>General</VListSubheader>

        <VListItem
          title="Notifications"
          subtitle="Notify me about updates to apps or games that I downloaded"
          value="Notifications"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Sound"
          subtitle="Auto-update apps at any time. Data charges may apply"
          value="Sound"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Auto-add widgets"
          subtitle="Automatically add home screen widgets"
          value="Auto-add widgets"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>
      </VList>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
`},ye={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)

watch(isDialogVisible, value => {
  if (!value)
    return

  setTimeout(() => {
    isDialogVisible.value = false
  }, 4000)
})
<\/script>

<template>
  <!-- Dialog Activator -->
  <VBtn
    :disabled="isDialogVisible"
    @click="isDialogVisible = true"
  >
    Start loading
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    width="300"
  >
    <VCard
      color="primary"
      width="300"
    >
      <VCardText class="pt-3">
        Please stand by
        <VProgressLinear
          indeterminate
          bg-color="rgba(var(--v-theme-surface), 0.1)"
          :height="8"
          class="mb-0 mt-4"
        />
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)

watch(isDialogVisible, value => {
  if (!value)
    return
  setTimeout(() => {
    isDialogVisible.value = false
  }, 4000)
})
<\/script>

<template>
  <!-- Dialog Activator -->
  <VBtn
    :disabled="isDialogVisible"
    @click="isDialogVisible = true"
  >
    Start loading
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    width="300"
  >
    <VCard
      color="primary"
      width="300"
    >
      <VCardText class="pt-3">
        Please stand by
        <VProgressLinear
          indeterminate
          bg-color="rgba(var(--v-theme-surface), 0.1)"
          :height="8"
          class="mb-0 mt-4"
        />
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},he={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
const isDialogTwoShow = ref(false)
<\/script>

<template>
  <VBtn @click="isDialogVisible = true">
    Open Dialog
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = false" />

    <VCard title="Dialog">
      <VCardText>
        Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogTwoShow = !isDialogTwoShow">
          Open Dialog 2
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>

  <!-- Dialog 2 -->
  <VDialog
    v-model="isDialogTwoShow"
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogTwoShow = false" />

    <VCard title="Dialog 2">
      <VCardText>I'm a nested dialog.</VCardText>
      <VCardText class="d-flex flex-wrap gap-3">
        <VSpacer />
        <VBtn @click="isDialogTwoShow = false">
          Close
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
const isDialogTwoShow = ref(false)
<\/script>

<template>
  <VBtn @click="isDialogVisible = true">
    Open Dialog
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = false" />

    <VCard title="Dialog">
      <VCardText>
        Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogTwoShow = !isDialogTwoShow">
          Open Dialog 2
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>

  <!-- Dialog 2 -->
  <VDialog
    v-model="isDialogTwoShow"
    class="v-dialog-sm"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogTwoShow = false" />

    <VCard title="Dialog 2">
      <VCardText>I'm a nested dialog.</VCardText>
      <VCardText class="d-flex flex-wrap gap-3">
        <VSpacer />
        <VBtn @click="isDialogTwoShow = false">
          Close
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},De={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
      >
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy.

        Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet.

        Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate.

        Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll.

        Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
      >
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy.

        Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet.

        Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate.

        Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll.

        Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie.
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},we={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <VCardText>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Agree
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},Ce={ts:`<script lang="ts" setup>
const countryList = [
  { label: 'Bahamas, The', value: 'bahamas' },
  { label: 'Bahrain', value: 'bahrain' },
  { label: 'Bangladesh', value: 'bangladesh' },
  { label: 'Barbados', value: 'barbados' },
  { label: 'Belarus', value: 'belarus' },
  { label: 'Belgium', value: 'belgium' },
  { label: 'Belize', value: 'belize' },
  { label: 'Benin', value: 'benin' },
  { label: 'Bhutan', value: 'bhutan' },
  { label: 'Bolivia', value: 'bolivia' },
  { label: 'Bosnia and Herzegovina', value: 'bosnia' },
  { label: 'Botswana', value: 'botswana' },
  { label: 'Brazil', value: 'brazil' },
  { label: 'Brunei', value: 'brunei' },
  { label: 'Bulgaria', value: 'bulgaria' },
  { label: 'Burkina Faso', value: 'burkina' },
]

const selectedCountry = ref('')
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    scrollable
    max-width="350"
    content-class="scrollable-dialog"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard>
      <VCardItem class="pb-5">
        <VCardTitle>Select Country</VCardTitle>
      </VCardItem>

      <VDivider />
      <VCardText style="block-size: 300px;">
        <VRadioGroup
          v-model="selectedCountry"
          :inline="false"
        >
          <VRadio
            v-for="country in countryList"
            :key="country.label"
            :label="country.label"
            :value="country.value"
            color="primary"
          />
        </VRadioGroup>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex justify-end flex-wrap gap-3 pt-5 overflow-visible">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.scrollable-dialog {
  overflow: visible !important;
}
</style>
`,js:`<script setup>
const countryList = [
  {
    label: 'Bahamas, The',
    value: 'bahamas',
  },
  {
    label: 'Bahrain',
    value: 'bahrain',
  },
  {
    label: 'Bangladesh',
    value: 'bangladesh',
  },
  {
    label: 'Barbados',
    value: 'barbados',
  },
  {
    label: 'Belarus',
    value: 'belarus',
  },
  {
    label: 'Belgium',
    value: 'belgium',
  },
  {
    label: 'Belize',
    value: 'belize',
  },
  {
    label: 'Benin',
    value: 'benin',
  },
  {
    label: 'Bhutan',
    value: 'bhutan',
  },
  {
    label: 'Bolivia',
    value: 'bolivia',
  },
  {
    label: 'Bosnia and Herzegovina',
    value: 'bosnia',
  },
  {
    label: 'Botswana',
    value: 'botswana',
  },
  {
    label: 'Brazil',
    value: 'brazil',
  },
  {
    label: 'Brunei',
    value: 'brunei',
  },
  {
    label: 'Bulgaria',
    value: 'bulgaria',
  },
  {
    label: 'Burkina Faso',
    value: 'burkina',
  },
]

const selectedCountry = ref('')
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    scrollable
    max-width="350"
    content-class="scrollable-dialog"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard>
      <VCardItem class="pb-5">
        <VCardTitle>Select Country</VCardTitle>
      </VCardItem>

      <VDivider />
      <VCardText style="block-size: 300px;">
        <VRadioGroup
          v-model="selectedCountry"
          :inline="false"
        >
          <VRadio
            v-for="country in countryList"
            :key="country.label"
            :label="country.label"
            :value="country.value"
            color="primary"
          />
        </VRadioGroup>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex justify-end flex-wrap gap-3 pt-5 overflow-visible">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogVisible = false">
          Save
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.scrollable-dialog {
  overflow: visible !important;
}
</style>
`},sa={__name:"dialog",setup(v){return(t,s)=>{const l=fe,o=se,i=be,m=ge,p=me,x=pe,z=ue,c=de,L=re;return y(),C(J,null,{default:a(()=>[e(f,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Basic",code:n(Ve)},{default:a(()=>[s[0]||(s[0]=k("p",null,"A dialog contains two slots, one for its activator and one for its content (default). Good for Privacy Policies.",-1)),e(l)]),_:1,__:[0]},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Persistent",code:n(we)},{default:a(()=>[s[1]||(s[1]=k("p",null,[r("Use "),k("code",null,"persistent"),r(" prop to create persistent dialog.")],-1)),e(i)]),_:1,__:[1]},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Scrollable",code:n(Ce)},{default:a(()=>[s[2]||(s[2]=k("p",null,[r("Use "),k("code",null,"scrollable"),r(" prop to create scrollable dialog.")],-1)),e(m)]),_:1,__:[2]},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Loader",code:n(ye)},{default:a(()=>[s[3]||(s[3]=k("p",null,[r("The "),k("code",null,"v-dialog"),r(" component makes it easy to create a customized loading experience for your application.")],-1)),e(p)]),_:1,__:[3]},8,["code"])]),_:1}),e(f,{col:"12",md:"6"},{default:a(()=>[e(o,{title:"Nesting",code:n(he)},{default:a(()=>[s[4]||(s[4]=k("p",null,"Dialogs can be nested: you can open one dialog from another.",-1)),e(x)]),_:1,__:[4]},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Overflowed",code:n(De)},{default:a(()=>[s[5]||(s[5]=k("p",null,"Modals that do not fit within the available window space will scroll the container.",-1)),e(z)]),_:1,__:[5]},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Fullscreen",code:n(ke)},{default:a(()=>[s[6]||(s[6]=k("p",null,"Due to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens.",-1)),e(c)]),_:1,__:[6]},8,["code"])]),_:1}),e(f,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Form",code:n(ve)},{default:a(()=>[s[7]||(s[7]=k("p",null,"Just a simple example of a form in a dialog.",-1)),e(L)]),_:1,__:[7]},8,["code"])]),_:1})]),_:1})}}};export{sa as default};
