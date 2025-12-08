import{a as m,b as _,V as f,d as x,c as D,e as k}from"./VList-BD6Dg9I8.js";import{f as d,o as n,e as t,c as V,F as L,h,b as e,t as y,Z as w,k as P,s as i,b9 as W,bd as U,be as G,b1 as M,a$ as H,d as p,af as j,r as K,p as C,aU as Q,l as v}from"./main-7JdyGFby.js";import{V as S}from"./VAvatar-sg7CZdU7.js";import{V as J}from"./VDivider-CIpTZ8Ni.js";import{V as E}from"./VBadge-D5jKdopQ.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as B}from"./VListItemAction-BMnkLarI.js";import{V as T}from"./VCheckbox-DKfuVZm8.js";import{_ as Z}from"./AppCardCode-CUjMQLDl.js";import{V as q,a as g}from"./VRow-GpmvwSSA.js";import{V as o}from"./VCardText-DYTBPo8J.js";import"./ssrBoot-CA1KQA2w.js";import"./VImg-Bk3huQTU.js";import"./VCheckboxBtn-CBQDHvrp.js";import"./VSelectionControl-lb_mBfMr.js";import"./form-BuGlugVy.js";import"./VInput-U8KQD51r.js";import"./vue3-perfect-scrollbar-BTKqCwUF.js";import"./VCard-D0LXqtBI.js";/* empty css              */const X={__name:"DemoListShaped",setup(b){const a=[{text:"Cupcake sesame snaps dessert marzipan.",icon:"tabler-brand-instagram"},{text:"Jelly beans jelly-o gummi bears chupa chups marshmallow.",icon:"tabler-brand-facebook"},{text:"Bonbon macaroon gummies pie jelly",icon:"tabler-brand-twitter"}];return(s,c)=>(n(),d(f,null,{default:t(()=>[(n(),V(L,null,h(a,(l,r)=>e(m,{key:r,value:l.text,rounded:"shaped"},{prepend:t(()=>[e(w,{icon:l.icon},null,8,["icon"])]),default:t(()=>[e(_,{textContent:y(l.text)},null,8,["textContent"])]),_:2},1032,["value"])),64))]),_:1}))}},ee={__name:"DemoListProgressList",setup(b){const a=[{avatar:"tabler-brand-react",title:"React is a JavaScript library for building user interfaces",language:"react",amount:90},{avatar:"tabler-brand-bootstrap",title:"Bootstrap is an open source toolkit",language:"bootstrap",amount:80},{avatar:"tabler-brand-vue",title:"Vue.js is the Progressive JavaScript Framework",language:"vue",amount:65},{avatar:"tabler-brand-angular",title:"Angular implements Functional Programming concepts",language:"angular",amount:75},{avatar:"tabler-brand-javascript",title:"JavaScript is the programming language of the Web",language:"javascript",amount:70}],s={react:"info",bootstrap:"primary",vue:"success",angular:"error",javascript:"warning"};return(c,l)=>(n(),d(f,{lines:"two",border:""},{default:t(()=>[(n(),V(L,null,h(a,(r,u)=>(n(),V(L,{key:r.language},[e(m,null,{prepend:t(()=>[e(S,{size:"36",rounded:"",variant:"tonal",icon:r.avatar,color:s[r.language]},null,8,["icon","color"])]),default:t(()=>[e(_,null,{default:t(()=>[i(y(r.title),1)]),_:2},1024),e(x,{class:"mt-2"},{default:t(()=>[e(W,{height:"6",rounded:"","rounded-bar":"","model-value":r.amount,color:s[r.language]},null,8,["model-value","color"])]),_:2},1024)]),_:2},1024),u!==a.length-1?(n(),d(J,{key:0})):P("",!0)],64))),64))]),_:1}))}},te={class:"ms-4"},ae={class:"text-xs text-disabled"},se={__name:"DemoListUserList",setup(b){const a=[{avatar:U,name:"Caroline Black",status:"Online",lastVisited:"13 minutes ago"},{avatar:G,name:"Alfred Copeland",status:"Away",lastVisited:"11 minutes ago"},{avatar:M,name:"Celia Schneider",status:"Offline",lastVisited:"9 minutes ago"},{avatar:H,name:"Max Rogan",status:"In Meeting",lastVisited:"28 minutes ago"}],s={Online:"success",Away:"warning",Offline:"secondary","In Meeting":"error"};return(c,l)=>(n(),d(f,{lines:"two",border:""},{default:t(()=>[(n(),V(L,null,h(a,(r,u)=>(n(),V(L,{key:r.name},[e(m,null,{prepend:t(()=>[e(S,{image:r.avatar},null,8,["image"])]),append:t(()=>[e(j,{size:"small"},{default:t(()=>l[0]||(l[0]=[i(" Add ")])),_:1,__:[0]})]),default:t(()=>[e(_,null,{default:t(()=>[i(y(r.name),1)]),_:2},1024),e(x,{class:"mt-1"},{default:t(()=>[e(E,{dot:"",location:"start center","offset-x":"2",color:s[r.status],class:"me-3"},{default:t(()=>[p("span",te,y(r.status),1)]),_:2},1032,["color"]),p("span",ae,y(r.lastVisited),1)]),_:2},1024)]),_:2},1024),u!==a.length-1?(n(),d(J,{key:0})):P("",!0)],64))),64))]),_:1}))}},ie=["innerHTML"],le={__name:"DemoListThreeLine",setup(b){const a=[{type:"subheader",title:"Today"},{prependAvatar:U,title:"Brunch this weekend?",subtitle:`<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`},{type:"divider",inset:!0},{prependAvatar:G,title:"Summer BBQ",subtitle:`<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`},{type:"divider",inset:!0},{prependAvatar:M,title:"Oui oui",subtitle:'<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?'},{type:"divider",inset:!0},{prependAvatar:H,title:"Birthday gift",subtitle:'<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?'}];return(s,c)=>(n(),d(f,{lines:"three",items:a,"item-props":""},{subtitle:t(({subtitle:l})=>[p("div",{innerHTML:l},null,8,ie)]),_:1}))}},re={__name:"DemoListTwoLinesAndSubheader",setup(b){const a=[{color:"blue",icon:"tabler-clipboard-text",subtitle:"Jan 20, 2014",title:"Vacation itinerary"},{color:"amber",icon:"tabler-device-mobile-rotated",subtitle:"Jan 10, 2014",title:"Kitchen remodel"}],s=[{subtitle:"Jan 9, 2014",title:"Photos"},{subtitle:"Jan 17, 2014",title:"Recipes"},{subtitle:"Jan 28, 2014",title:"Work"}];return(c,l)=>(n(),d(f,{lines:"two"},{default:t(()=>[e(D,{inset:""},{default:t(()=>l[0]||(l[0]=[i(" Folders ")])),_:1,__:[0]}),(n(),V(L,null,h(s,r=>e(m,{key:r.title,title:r.title,subtitle:r.subtitle},{prepend:t(()=>[e(S,{color:"secondary",variant:"tonal"},{default:t(()=>[e(w,{size:22,icon:"tabler-folder"})]),_:1})]),append:t(()=>[e(j,{variant:"text",color:"default",icon:"tabler-info-circle"})]),_:2},1032,["title","subtitle"])),64)),e(J,{inset:""}),e(D,{inset:""},{default:t(()=>l[1]||(l[1]=[i(" Files ")])),_:1,__:[1]}),(n(),V(L,null,h(a,r=>e(m,{key:r.title,title:r.title,subtitle:r.subtitle},{prepend:t(()=>[e(S,{color:"secondary",variant:"tonal"},{default:t(()=>[e(w,{size:22,icon:r.icon},null,8,["icon"])]),_:2},1024)]),append:t(()=>[e(j,{variant:"text",color:"default",icon:"tabler-info-circle"})]),_:2},1032,["title","subtitle"])),64))]),_:1}))}},ne={__name:"DemoListSubGroup",setup(b){const a=K(["Users","Admin"]),s=[["Management","tabler-users"],["Settings","tabler-settings"]],c=[["Create","tabler-plus"],["Read","tabler-file"],["Update","tabler-reload"],["Delete","tabler-trash"]];return(l,r)=>(n(),d(f,{opened:v(a),"onUpdate:opened":r[0]||(r[0]=u=>Q(a)?a.value=u:null)},{default:t(()=>[e(m,{"prepend-icon":"tabler-home",title:"Home",value:"Home"}),e(k,{value:"Users"},{activator:t(({props:u})=>[e(m,C(u,{"prepend-icon":"tabler-users",title:"Users"}),null,16)]),default:t(()=>[e(k,{value:"Admin"},{activator:t(({props:u})=>[e(m,C(u,{title:"Admin"}),null,16)]),default:t(()=>[(n(),V(L,null,h(s,([u,I],A)=>e(m,{key:A,value:u,title:u,"prepend-icon":I},null,8,["value","title","prepend-icon"])),64))]),_:1}),e(k,{value:"Actions"},{activator:t(({props:u})=>[e(m,C(u,{title:"Actions"}),null,16)]),default:t(()=>[(n(),V(L,null,h(c,([u,I],A)=>e(m,{key:A,value:u,title:u,"prepend-icon":I},null,8,["value","title","prepend-icon"])),64))]),_:1})]),_:1})]),_:1},8,["opened"]))}},oe={};function ue(b,a){return n(),d(f,{lines:"three",density:"compact","select-strategy":"classic",class:"action-item-group-list"},{default:t(()=>[e(D,null,{default:t(()=>a[0]||(a[0]=[i("General")])),_:1,__:[0]}),e(m,{value:"notifications"},{prepend:t(({isActive:s})=>[e(B,null,{default:t(()=>[e(T,{"model-value":s,color:"primary",class:"mt-1"},null,8,["model-value"])]),_:2},1024)]),default:t(()=>[e(_,null,{default:t(()=>a[1]||(a[1]=[i("Notifications")])),_:1,__:[1]}),e(x,null,{default:t(()=>a[2]||(a[2]=[i("Notify me about updates to apps or games that I downloaded")])),_:1,__:[2]})]),_:1}),e(m,{value:"sound"},{prepend:t(({isActive:s})=>[e(B,null,{default:t(()=>[e(T,{"model-value":s,color:"primary",class:"mt-1"},null,8,["model-value"])]),_:2},1024)]),default:t(()=>[e(_,null,{default:t(()=>a[3]||(a[3]=[i("Sound")])),_:1,__:[3]}),e(x,null,{default:t(()=>a[4]||(a[4]=[i("Auto-update apps at any time. Data charges may apply")])),_:1,__:[4]})]),_:1}),e(m,{value:"widgets"},{prepend:t(({isActive:s})=>[e(B,null,{default:t(()=>[e(T,{"model-value":s,color:"primary",class:"mt-1"},null,8,["model-value"])]),_:2},1024)]),default:t(()=>[e(_,null,{default:t(()=>a[5]||(a[5]=[i("Auto-add widgets")])),_:1,__:[5]}),e(x,null,{default:t(()=>a[6]||(a[6]=[i("Automatically add home screen widgets when downloads complete")])),_:1,__:[6]})]),_:1})]),_:1})}const pe=Y(oe,[["render",ue]]),me={__name:"DemoListNav",setup(b){const a=[{title:"My Files",value:1,prependIcon:"tabler-folder"},{title:"Shared with me",value:2,prependIcon:"tabler-users"},{title:"Starred",value:3,prependIcon:"tabler-star"},{title:"Recent",value:4,prependIcon:"tabler-history"},{title:"Offline",value:5,prependIcon:"tabler-circle-check"},{title:"Uploads",value:6,prependIcon:"tabler-upload"},{title:"Backups",value:7,prependIcon:"tabler-cloud-upload"}];return(s,c)=>(n(),d(f,{nav:"",lines:!1},{default:t(()=>[(n(),V(L,null,h(a,l=>e(m,{key:l.value,value:l.value},{prepend:t(()=>[e(w,{icon:l.prependIcon},null,8,["icon"])]),default:t(()=>[e(_,null,{default:t(()=>[i(y(l.title),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1}))}},de={__name:"DemoListDensity",setup(b){const a=[{title:"halvah icing marshmallow",value:1},{title:"Cake caramels donut danish muffin biscuit",value:2},{title:"Chocolate cake pie lollipop",value:3},{title:"Apple pie toffee pudding gummi bears",value:4},{title:"Jujubes chupa chups cheesecake tart",value:5},{title:"Candy fruitcake bonbon sesame snaps dessert",value:6},{title:"Candy wafer tiramisu sugar plum sweet.",value:7},{title:"Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.",value:8}];return(s,c)=>(n(),d(f,{density:"comfortable",items:a}))}},ce={__name:"DemoListRounded",setup(b){const a=[{title:"Cupcake sesame snaps dessert marzipan.",value:1,props:{prependIcon:"tabler-brand-instagram",rounded:"xl"}},{title:"Jelly beans jelly-o gummi bears chupa chups marshmallow.",value:2,props:{prependIcon:"tabler-brand-facebook",rounded:"xl"}},{title:"Bonbon macaroon gummies pie jelly",value:3,props:{prependIcon:"tabler-brand-twitter",rounded:"xl"}},{title:"halvah icing marshmallow",value:4,props:{prependIcon:"tabler-brand-instagram",rounded:"xl"}}];return(s,c)=>(n(),d(f,{items:a}))}},ve={__name:"DemoListBasic",setup(b){const a=["Cras justo odio","Dapibus ac facilisis in","Morbi leo risus","Porta ac consectetur ac"];return(s,c)=>(n(),d(f,{items:a}))}},be={ts:`<template>
  <VList
    lines="three"
    density="compact"
    select-strategy="classic"
    class="action-item-group-list"
  >
    <VListSubheader>General</VListSubheader>

    <VListItem value="notifications">
      <template #prepend="{ isActive }">
        <VListItemAction>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-1"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Notifications</VListItemTitle>
      <VListItemSubtitle>Notify me about updates to apps or games that I downloaded</VListItemSubtitle>
    </VListItem>

    <VListItem value="sound">
      <template #prepend="{ isActive }">
        <VListItemAction>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-1"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Sound</VListItemTitle>
      <VListItemSubtitle>Auto-update apps at any time. Data charges may apply</VListItemSubtitle>
    </VListItem>

    <VListItem value="widgets">
      <template #prepend="{ isActive }">
        <VListItemAction>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-1"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Auto-add widgets</VListItemTitle>
      <VListItemSubtitle>Automatically add home screen widgets when downloads complete</VListItemSubtitle>
    </VListItem>
  </VList>
</template>
`,js:`<template>
  <VList
    lines="three"
    density="compact"
    select-strategy="classic"
    class="action-item-group-list"
  >
    <VListSubheader>General</VListSubheader>

    <VListItem value="notifications">
      <template #prepend="{ isActive }">
        <VListItemAction>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-1"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Notifications</VListItemTitle>
      <VListItemSubtitle>Notify me about updates to apps or games that I downloaded</VListItemSubtitle>
    </VListItem>

    <VListItem value="sound">
      <template #prepend="{ isActive }">
        <VListItemAction>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-1"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Sound</VListItemTitle>
      <VListItemSubtitle>Auto-update apps at any time. Data charges may apply</VListItemSubtitle>
    </VListItem>

    <VListItem value="widgets">
      <template #prepend="{ isActive }">
        <VListItemAction>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-1"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Auto-add widgets</VListItemTitle>
      <VListItemSubtitle>Automatically add home screen widgets when downloads complete</VListItemSubtitle>
    </VListItem>
  </VList>
</template>
`},ge={ts:`<script setup lang="ts">
const items = ['Cras justo odio', 'Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac']
<\/script>

<template>
  <VList :items="items" />
</template>
`,js:`<script setup>
const items = [
  'Cras justo odio',
  'Dapibus ac facilisis in',
  'Morbi leo risus',
  'Porta ac consectetur ac',
]
<\/script>

<template>
  <VList :items="items" />
</template>
`},fe={ts:`<script lang="ts" setup>
const items = [
  { title: 'halvah icing marshmallow', value: 1 },
  { title: 'Cake caramels donut danish muffin biscuit', value: 2 },
  { title: 'Chocolate cake pie lollipop', value: 3 },
  { title: 'Apple pie toffee pudding gummi bears', value: 4 },
  { title: 'Jujubes chupa chups cheesecake tart', value: 5 },
  { title: 'Candy fruitcake bonbon sesame snaps dessert', value: 6 },
  { title: 'Candy wafer tiramisu sugar plum sweet.', value: 7 },
  { title: 'Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.', value: 8 },
]
<\/script>

<template>
  <VList
    density="comfortable"
    :items="items"
  />
</template>
`,js:`<script setup>
const items = [
  {
    title: 'halvah icing marshmallow',
    value: 1,
  },
  {
    title: 'Cake caramels donut danish muffin biscuit',
    value: 2,
  },
  {
    title: 'Chocolate cake pie lollipop',
    value: 3,
  },
  {
    title: 'Apple pie toffee pudding gummi bears',
    value: 4,
  },
  {
    title: 'Jujubes chupa chups cheesecake tart',
    value: 5,
  },
  {
    title: 'Candy fruitcake bonbon sesame snaps dessert',
    value: 6,
  },
  {
    title: 'Candy wafer tiramisu sugar plum sweet.',
    value: 7,
  },
  {
    title: 'Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.',
    value: 8,
  },
]
<\/script>

<template>
  <VList
    density="comfortable"
    :items="items"
  />
</template>
`},Ve={ts:`<script lang="ts" setup>
const items = [
  { title: 'My Files', value: 1, prependIcon: 'tabler-folder' },
  { title: 'Shared with me', value: 2, prependIcon: 'tabler-users' },
  { title: 'Starred', value: 3, prependIcon: 'tabler-star' },
  { title: 'Recent', value: 4, prependIcon: 'tabler-history' },
  { title: 'Offline', value: 5, prependIcon: 'tabler-circle-check' },
  { title: 'Uploads', value: 6, prependIcon: 'tabler-upload' },
  { title: 'Backups', value: 7, prependIcon: 'tabler-cloud-upload' },
]
<\/script>

<template>
  <VList
    nav
    :lines="false"
  >
    <VListItem
      v-for="item in items"
      :key="item.value"
      :value="item.value"
    >
      <template #prepend>
        <VIcon :icon="item.prependIcon" />
      </template>

      <VListItemTitle>
        {{ item.title }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'My Files',
    value: 1,
    prependIcon: 'tabler-folder',
  },
  {
    title: 'Shared with me',
    value: 2,
    prependIcon: 'tabler-users',
  },
  {
    title: 'Starred',
    value: 3,
    prependIcon: 'tabler-star',
  },
  {
    title: 'Recent',
    value: 4,
    prependIcon: 'tabler-history',
  },
  {
    title: 'Offline',
    value: 5,
    prependIcon: 'tabler-circle-check',
  },
  {
    title: 'Uploads',
    value: 6,
    prependIcon: 'tabler-upload',
  },
  {
    title: 'Backups',
    value: 7,
    prependIcon: 'tabler-cloud-upload',
  },
]
<\/script>

<template>
  <VList
    nav
    :lines="false"
  >
    <VListItem
      v-for="item in items"
      :key="item.value"
      :value="item.value"
    >
      <template #prepend>
        <VIcon :icon="item.prependIcon" />
      </template>

      <VListItemTitle>
        {{ item.title }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`},Le={ts:`<script setup lang="ts">
interface Language {
  'react': string
  'bootstrap': string
  'vue': string
  'angular': string
  'javascript': string
}

interface Progress {
  avatar: string
  title: string
  language: keyof Language
  amount: number
}

const languageProgress: Progress[] = [
  {
    avatar: 'tabler-brand-react',
    title: 'React is a JavaScript library for building user interfaces',
    language: 'react',
    amount: 90,
  },
  {
    avatar: 'tabler-brand-bootstrap',
    title: 'Bootstrap is an open source toolkit',
    language: 'bootstrap',
    amount: 80,
  },
  {
    avatar: 'tabler-brand-vue',
    title: 'Vue.js is the Progressive JavaScript Framework',
    language: 'vue',
    amount: 65,
  },
  {
    avatar: 'tabler-brand-angular',
    title: 'Angular implements Functional Programming concepts',
    language: 'angular',
    amount: 75,
  },
  {
    avatar: 'tabler-brand-javascript',
    title: 'JavaScript is the programming language of the Web',
    language: 'javascript',
    amount: 70,
  },
]

const resolveStatusColor: Language = {
  react: 'info',
  bootstrap: 'primary',
  vue: 'success',
  angular: 'error',
  javascript: 'warning',
}
<\/script>

<template>
  <VList
    lines="two"
    border
  >
    <template
      v-for="(progress, index) of languageProgress"
      :key="progress.language"
    >
      <VListItem>
        <template #prepend>
          <VAvatar
            size="36"
            rounded
            variant="tonal"
            :icon="progress.avatar"
            :color="resolveStatusColor[progress.language]"
          />
        </template>

        <VListItemTitle>
          {{ progress.title }}
        </VListItemTitle>

        <VListItemSubtitle class="mt-2">
          <VProgressLinear
            height="6"
            rounded
            rounded-bar
            :model-value="progress.amount"
            :color="resolveStatusColor[progress.language]"
          />
        </VListItemSubtitle>
      </VListItem>

      <VDivider v-if="index !== languageProgress.length - 1" />
    </template>
  </VList>
</template>
`,js:`<script setup>
const languageProgress = [
  {
    avatar: 'tabler-brand-react',
    title: 'React is a JavaScript library for building user interfaces',
    language: 'react',
    amount: 90,
  },
  {
    avatar: 'tabler-brand-bootstrap',
    title: 'Bootstrap is an open source toolkit',
    language: 'bootstrap',
    amount: 80,
  },
  {
    avatar: 'tabler-brand-vue',
    title: 'Vue.js is the Progressive JavaScript Framework',
    language: 'vue',
    amount: 65,
  },
  {
    avatar: 'tabler-brand-angular',
    title: 'Angular implements Functional Programming concepts',
    language: 'angular',
    amount: 75,
  },
  {
    avatar: 'tabler-brand-javascript',
    title: 'JavaScript is the programming language of the Web',
    language: 'javascript',
    amount: 70,
  },
]

const resolveStatusColor = {
  react: 'info',
  bootstrap: 'primary',
  vue: 'success',
  angular: 'error',
  javascript: 'warning',
}
<\/script>

<template>
  <VList
    lines="two"
    border
  >
    <template
      v-for="(progress, index) of languageProgress"
      :key="progress.language"
    >
      <VListItem>
        <template #prepend>
          <VAvatar
            size="36"
            rounded
            variant="tonal"
            :icon="progress.avatar"
            :color="resolveStatusColor[progress.language]"
          />
        </template>

        <VListItemTitle>
          {{ progress.title }}
        </VListItemTitle>

        <VListItemSubtitle class="mt-2">
          <VProgressLinear
            height="6"
            rounded
            rounded-bar
            :model-value="progress.amount"
            :color="resolveStatusColor[progress.language]"
          />
        </VListItemSubtitle>
      </VListItem>

      <VDivider v-if="index !== languageProgress.length - 1" />
    </template>
  </VList>
</template>
`},he={ts:`<script lang="ts" setup>
const items = [
  {
    title: 'Cupcake sesame snaps dessert marzipan.',
    value: 1,
    props: {
      prependIcon: 'tabler-brand-instagram',
      rounded: 'xl',
    },
  },
  {
    title: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    value: 2,
    props: {
      prependIcon: 'tabler-brand-facebook',
      rounded: 'xl',
    },
  },
  {
    title: 'Bonbon macaroon gummies pie jelly',
    value: 3,
    props: {
      prependIcon: 'tabler-brand-twitter',
      rounded: 'xl',
    },
  },
  {
    title: 'halvah icing marshmallow',
    value: 4,
    props: {
      prependIcon: 'tabler-brand-instagram',
      rounded: 'xl',
    },
  },
]
<\/script>

<template>
  <VList :items="items" />
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Cupcake sesame snaps dessert marzipan.',
    value: 1,
    props: {
      prependIcon: 'tabler-brand-instagram',
      rounded: 'xl',
    },
  },
  {
    title: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    value: 2,
    props: {
      prependIcon: 'tabler-brand-facebook',
      rounded: 'xl',
    },
  },
  {
    title: 'Bonbon macaroon gummies pie jelly',
    value: 3,
    props: {
      prependIcon: 'tabler-brand-twitter',
      rounded: 'xl',
    },
  },
  {
    title: 'halvah icing marshmallow',
    value: 4,
    props: {
      prependIcon: 'tabler-brand-instagram',
      rounded: 'xl',
    },
  },
]
<\/script>

<template>
  <VList :items="items" />
</template>
`},_e={ts:`<script lang="ts" setup>
const items = [
  { text: 'Cupcake sesame snaps dessert marzipan.', icon: 'tabler-brand-instagram' },
  { text: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.', icon: 'tabler-brand-facebook' },
  { text: 'Bonbon macaroon gummies pie jelly', icon: 'tabler-brand-twitter' },
]
<\/script>

<template>
  <VList>
    <VListItem
      v-for="(item, i) in items"
      :key="i"
      :value="item.text"
      rounded="shaped"
    >
      <template #prepend>
        <VIcon :icon="item.icon" />
      </template>
      <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
      <VListItemTitle v-text="item.text" />
    </VListItem>
  </VList>
</template>
`,js:`<script setup>
const items = [
  {
    text: 'Cupcake sesame snaps dessert marzipan.',
    icon: 'tabler-brand-instagram',
  },
  {
    text: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    icon: 'tabler-brand-facebook',
  },
  {
    text: 'Bonbon macaroon gummies pie jelly',
    icon: 'tabler-brand-twitter',
  },
]
<\/script>

<template>
  <VList>
    <VListItem
      v-for="(item, i) in items"
      :key="i"
      :value="item.text"
      rounded="shaped"
    >
      <template #prepend>
        <VIcon :icon="item.icon" />
      </template>
      <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
      <VListItemTitle v-text="item.text" />
    </VListItem>
  </VList>
</template>
`},ye={ts:`<script lang="ts" setup>
const open = ref(['Users', 'Admin'])

const admins = [
  ['Management', 'tabler-users'],
  ['Settings', 'tabler-settings'],
]

const cruds = [
  ['Create', 'tabler-plus'],
  ['Read', 'tabler-file'],
  ['Update', 'tabler-reload'],
  ['Delete', 'tabler-trash'],
]
<\/script>

<template>
  <VList v-model:opened="open">
    <VListItem
      prepend-icon="tabler-home"
      title="Home"
      value="Home"
    />

    <VListGroup value="Users">
      <template #activator="{ props }">
        <VListItem
          v-bind="props"
          prepend-icon="tabler-users"
          title="Users"
        />
      </template>

      <VListGroup value="Admin">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Admin"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in admins"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>

      <VListGroup value="Actions">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Actions"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in cruds"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>
    </VListGroup>
  </VList>
</template>
`,js:`<script setup>
const open = ref([
  'Users',
  'Admin',
])

const admins = [
  [
    'Management',
    'tabler-users',
  ],
  [
    'Settings',
    'tabler-settings',
  ],
]

const cruds = [
  [
    'Create',
    'tabler-plus',
  ],
  [
    'Read',
    'tabler-file',
  ],
  [
    'Update',
    'tabler-reload',
  ],
  [
    'Delete',
    'tabler-trash',
  ],
]
<\/script>

<template>
  <VList v-model:opened="open">
    <VListItem
      prepend-icon="tabler-home"
      title="Home"
      value="Home"
    />

    <VListGroup value="Users">
      <template #activator="{ props }">
        <VListItem
          v-bind="props"
          prepend-icon="tabler-users"
          title="Users"
        />
      </template>

      <VListGroup value="Admin">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Admin"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in admins"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>

      <VListGroup value="Actions">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Actions"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in cruds"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>
    </VListGroup>
  </VList>
</template>
`},Ie={ts:`<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

const items = [
  { type: 'subheader', title: 'Today' },
  {
    prependAvatar: avatar1,
    title: 'Brunch this weekend?',
    subtitle: '<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar2,
    title: 'Summer BBQ',
    subtitle: '<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar3,
    title: 'Oui oui',
    subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar4,
    title: 'Birthday gift',
    subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
]
<\/script>

<template>
  <VList
    lines="three"
    :items="items"
    item-props
  >
    <template #subtitle="{ subtitle }">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="subtitle" />
    </template>
  </VList>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

const items = [
  {
    type: 'subheader',
    title: 'Today',
  },
  {
    prependAvatar: avatar1,
    title: 'Brunch this weekend?',
    subtitle: '<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?',
  },
  {
    type: 'divider',
    inset: true,
  },
  {
    prependAvatar: avatar2,
    title: 'Summer BBQ',
    subtitle: '<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.',
  },
  {
    type: 'divider',
    inset: true,
  },
  {
    prependAvatar: avatar3,
    title: 'Oui oui',
    subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  {
    type: 'divider',
    inset: true,
  },
  {
    prependAvatar: avatar4,
    title: 'Birthday gift',
    subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
]
<\/script>

<template>
  <VList
    lines="three"
    :items="items"
    item-props
  >
    <template #subtitle="{ subtitle }">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="subtitle" />
    </template>
  </VList>
</template>
`},Ae={ts:`<script lang="ts" setup>
const files = [
  {
    color: 'blue',
    icon: 'tabler-clipboard-text',
    subtitle: 'Jan 20, 2014',
    title: 'Vacation itinerary',
  },
  {
    color: 'amber',
    icon: 'tabler-device-mobile-rotated',
    subtitle: 'Jan 10, 2014',
    title: 'Kitchen remodel',
  },
]

const folders = [
  {
    subtitle: 'Jan 9, 2014',
    title: 'Photos',
  },
  {
    subtitle: 'Jan 17, 2014',
    title: 'Recipes',
  },
  {
    subtitle: 'Jan 28, 2014',
    title: 'Work',
  },
]
<\/script>

<template>
  <VList lines="two">
    <VListSubheader inset>
      Folders
    </VListSubheader>

    <VListItem
      v-for="folder in folders"
      :key="folder.title"
      :title="folder.title"
      :subtitle="folder.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="22"
            icon="tabler-folder"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="tabler-info-circle"
        />
      </template>
    </VListItem>

    <VDivider inset />

    <VListSubheader inset>
      Files
    </VListSubheader>

    <VListItem
      v-for="file in files"
      :key="file.title"
      :title="file.title"
      :subtitle="file.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="22"
            :icon="file.icon"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="tabler-info-circle"
        />
      </template>
    </VListItem>
  </VList>
</template>
`,js:`<script setup>
const files = [
  {
    color: 'blue',
    icon: 'tabler-clipboard-text',
    subtitle: 'Jan 20, 2014',
    title: 'Vacation itinerary',
  },
  {
    color: 'amber',
    icon: 'tabler-device-mobile-rotated',
    subtitle: 'Jan 10, 2014',
    title: 'Kitchen remodel',
  },
]

const folders = [
  {
    subtitle: 'Jan 9, 2014',
    title: 'Photos',
  },
  {
    subtitle: 'Jan 17, 2014',
    title: 'Recipes',
  },
  {
    subtitle: 'Jan 28, 2014',
    title: 'Work',
  },
]
<\/script>

<template>
  <VList lines="two">
    <VListSubheader inset>
      Folders
    </VListSubheader>

    <VListItem
      v-for="folder in folders"
      :key="folder.title"
      :title="folder.title"
      :subtitle="folder.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="22"
            icon="tabler-folder"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="tabler-info-circle"
        />
      </template>
    </VListItem>

    <VDivider inset />

    <VListSubheader inset>
      Files
    </VListSubheader>

    <VListItem
      v-for="file in files"
      :key="file.title"
      :title="file.title"
      :subtitle="file.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="22"
            :icon="file.icon"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="tabler-info-circle"
        />
      </template>
    </VListItem>
  </VList>
</template>
`},xe={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

interface Status {
  'Online': string
  'Away': string
  'Offline': string
  'In Meeting': string
}

interface Users {
  avatar: string
  name: string
  status: keyof Status
  lastVisited: string
}

const users: Users[] = [
  {
    avatar: avatar1,
    name: 'Caroline Black',
    status: 'Online',
    lastVisited: '13 minutes ago',
  },
  {
    avatar: avatar2,
    name: 'Alfred Copeland',
    status: 'Away',
    lastVisited: '11 minutes ago',
  },
  {
    avatar: avatar3,
    name: 'Celia Schneider',
    status: 'Offline',
    lastVisited: '9 minutes ago',
  },
  {
    avatar: avatar4,
    name: 'Max Rogan',
    status: 'In Meeting',
    lastVisited: '28 minutes ago',
  },
]

const resolveStatusColor: Status = {
  'Online': 'success',
  'Away': 'warning',
  'Offline': 'secondary',
  'In Meeting': 'error',
}
<\/script>

<template>
  <VList
    lines="two"
    border
  >
    <template
      v-for="(user, index) of users"
      :key="user.name"
    >
      <VListItem>
        <template #prepend>
          <VAvatar :image="user.avatar" />
        </template>
        <VListItemTitle>
          {{ user.name }}
        </VListItemTitle>
        <VListItemSubtitle class="mt-1">
          <VBadge
            dot
            location="start center"
            offset-x="2"
            :color="resolveStatusColor[user.status]"
            class="me-3"
          >
            <span class="ms-4">{{ user.status }}</span>
          </VBadge>

          <span class="text-xs text-disabled">{{ user.lastVisited }}</span>
        </VListItemSubtitle>

        <template #append>
          <VBtn size="small">
            Add
          </VBtn>
        </template>
      </VListItem>
      <VDivider v-if="index !== users.length - 1" />
    </template>
  </VList>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

const users = [
  {
    avatar: avatar1,
    name: 'Caroline Black',
    status: 'Online',
    lastVisited: '13 minutes ago',
  },
  {
    avatar: avatar2,
    name: 'Alfred Copeland',
    status: 'Away',
    lastVisited: '11 minutes ago',
  },
  {
    avatar: avatar3,
    name: 'Celia Schneider',
    status: 'Offline',
    lastVisited: '9 minutes ago',
  },
  {
    avatar: avatar4,
    name: 'Max Rogan',
    status: 'In Meeting',
    lastVisited: '28 minutes ago',
  },
]

const resolveStatusColor = {
  'Online': 'success',
  'Away': 'warning',
  'Offline': 'secondary',
  'In Meeting': 'error',
}
<\/script>

<template>
  <VList
    lines="two"
    border
  >
    <template
      v-for="(user, index) of users"
      :key="user.name"
    >
      <VListItem>
        <template #prepend>
          <VAvatar :image="user.avatar" />
        </template>
        <VListItemTitle>
          {{ user.name }}
        </VListItemTitle>
        <VListItemSubtitle class="mt-1">
          <VBadge
            dot
            location="start center"
            offset-x="2"
            :color="resolveStatusColor[user.status]"
            class="me-3"
          >
            <span class="ms-4">{{ user.status }}</span>
          </VBadge>

          <span class="text-xs text-disabled">{{ user.lastVisited }}</span>
        </VListItemSubtitle>

        <template #append>
          <VBtn size="small">
            Add
          </VBtn>
        </template>
      </VListItem>
      <VDivider v-if="index !== users.length - 1" />
    </template>
  </VList>
</template>
`},We={__name:"list",setup(b){return(a,s)=>{const c=ve,l=Z,r=ce,u=de,I=me,A=pe,O=ne,R=re,z=le,F=se,$=ee,N=X;return n(),d(q,{class:"match-height"},{default:t(()=>[e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Basic","no-padding":"",code:v(ge)},{default:t(()=>[e(o,null,{default:t(()=>s[0]||(s[0]=[p("code",null,"v-list",-1),i(" component can contain an avatar, content, actions and much more.")])),_:1,__:[0]}),e(o,null,{default:t(()=>[e(c)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Rounded","no-padding":"",code:v(he)},{default:t(()=>[e(o,null,{default:t(()=>s[1]||(s[1]=[i("You can make "),p("code",null,"v-list-item",-1),i(" rounded using "),p("code",null,"rounded",-1),i(" prop.")])),_:1,__:[1]}),e(o,null,{default:t(()=>[e(r)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Density",code:v(fe),"no-padding":""},{default:t(()=>[e(o,null,{default:t(()=>s[2]||(s[2]=[i("Use "),p("code",null,"density",-1),i(" prop to adjusts the spacing within the component. Available options are: "),p("code",null,"default",-1),i(", "),p("code",null,"comfortable",-1),i(", and "),p("code",null,"compact",-1),i(".")])),_:1,__:[2]}),e(o,null,{default:t(()=>[e(u)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Nav","no-padding":"",code:v(Ve)},{default:t(()=>[e(o,null,{default:t(()=>s[3]||(s[3]=[i("Lists can receive an alternative "),p("code",null,"nav",-1),i(" styling that reduces the width "),p("code",null,"v-list-item",-1),i(" takes up as well as adding a border radius.")])),_:1,__:[3]}),e(o,null,{default:t(()=>[e(I)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Action and item group","no-padding":"",code:v(be)},{default:t(()=>[e(o,null,{default:t(()=>s[4]||(s[4]=[i("A "),p("code",null,"three-line",-1),i(" list with actions. Utilizing "),p("code",null,"v-list-group",-1),i(", easily connect actions to your tiles.")])),_:1,__:[4]}),e(o,null,{default:t(()=>[e(A)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Sub Group","no-padding":"",code:v(ye)},{default:t(()=>[e(o,null,{default:t(()=>s[5]||(s[5]=[i(" Using the "),p("code",null,"v-list-group",-1),i(" component you can create up to 2 levels in depth using the sub-group prop. ")])),_:1,__:[5]}),e(o,null,{default:t(()=>[e(O)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Two lines and subheader","no-padding":"",code:v(Ae)},{default:t(()=>[e(o,null,{default:t(()=>s[6]||(s[6]=[i("Lists can contain subheaders, dividers, and can contain 1 or more lines. The subtitle will overflow with ellipsis if it extends past one line.")])),_:1,__:[6]}),e(o,null,{default:t(()=>[e(R)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Three Line","no-padding":"",code:v(Ie)},{default:t(()=>[e(o,null,{default:t(()=>s[7]||(s[7]=[i("For three line lists, the subtitle will clamp vertically at 2 lines and then ellipsis. This feature uses line-clamp and is not supported in all browsers.")])),_:1,__:[7]}),e(o,null,{default:t(()=>[e(z)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"User List","no-padding":"",code:v(xe)},{default:t(()=>[e(o,null,{default:t(()=>[e(F)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Progress List","no-padding":"",code:v(Le)},{default:t(()=>[e(o,null,{default:t(()=>[e($)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Shaped","no-padding":"",code:v(_e)},{default:t(()=>[e(o,null,{default:t(()=>s[8]||(s[8]=[i(" Shaped lists have rounded borders on one side of the "),p("code",null,"v-list-item",-1),i(". ")])),_:1,__:[8]}),e(o,null,{default:t(()=>[e(N)]),_:1})]),_:1},8,["code"])]),_:1})]),_:1})}}};export{We as default};
