import{_ as z}from"./AppSelect-B8s5BIHD.js";import{_ as R}from"./AppTextField-2IS70PnL.js";import{_ as q}from"./AppStepper-DhECtmfK.js";import{a as i,V as h}from"./VRow-GpmvwSSA.js";import{V as j}from"./VCard-D0LXqtBI.js";import{V as B}from"./VCardText-DYTBPo8J.js";import{V as N}from"./VForm-Bx7ooBF6.js";import{V as $,a as S}from"./VWindowItem-D3zVc_00.js";import{r as b,f as D,o as y,e as a,b as e,d as r,aU as W,l,af as v,s as C,Z as k,c as U,_ as ae,t as u,F as O,a_ as E,v as te}from"./main-7JdyGFby.js";import{_ as se}from"./AppCardCode-CUjMQLDl.js";import{V as P}from"./VDivider-CIpTZ8Ni.js";import{r as A,e as re,p as ie,d as de,u as G}from"./validators-DpYrMFzk.js";import"./form-BuGlugVy.js";import"./VSelect-bXJTNHr2.js";import"./VTextField-DdAXD61i.js";/* empty css                   */import"./VCounter-muzn6vBk.js";import"./VImg-Bk3huQTU.js";import"./VField-Cnag0GiO.js";import"./easing-Bybner-F.js";import"./VInput-U8KQD51r.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-BD6Dg9I8.js";import"./ssrBoot-CA1KQA2w.js";import"./VAvatar-sg7CZdU7.js";import"./dialog-transition-B9GC1vyq.js";import"./VMenu-D3AJz5Bm.js";import"./VOverlay-BMzCYiWA.js";import"./delay-9Hi4eTuF.js";import"./lazy-cOdXnimE.js";import"./scopeId-j0VLF_1N.js";import"./VCheckboxBtn-CBQDHvrp.js";import"./VSelectionControl-lb_mBfMr.js";import"./VChip-C72F9fhC.js";import"./VSlideGroup-B-2l8qWb.js";import"./VSlideGroupItem-C5e019Ze.js";/* empty css              */import"./vue3-perfect-scrollbar-BTKqCwUF.js";import"./helpers-DK5QwNv0.js";const ne={class:"pa-6"},me={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},ce={__name:"DemoFormWizardIconsModernVertical",setup(I){const f=[{title:"Account Details",icon:"tabler-file-description",subtitle:"Setup account details"},{title:"Personal Info",icon:"tabler-user",subtitle:"Add personal info"},{title:"Social Links",icon:"tabler-link",subtitle:"Add social links"}],m=b(0),V=b(!1),w=b(!1),t=b({username:"",email:"",password:"",cPassword:"",firstName:"",lastName:"",country:void 0,language:void 0,twitter:"",facebook:"",googlePlus:"",linkedIn:""}),L=()=>{console.log(t.value)};return(_,o)=>{const T=q,n=R,g=z;return y(),D(h,null,{default:a(()=>[e(i,{cols:"12",md:"4"},{default:a(()=>[r("div",ne,[e(T,{"current-step":l(m),"onUpdate:currentStep":o[0]||(o[0]=s=>W(m)?m.value=s:null),direction:"vertical",items:f,"icon-size":"24",class:"stepper-icon-step-bg"},null,8,["current-step"])])]),_:1}),e(i,{cols:"12",md:"8"},{default:a(()=>[e(j,null,{default:a(()=>[e(B,null,{default:a(()=>[e(N,null,{default:a(()=>[e($,{modelValue:l(m),"onUpdate:modelValue":o[15]||(o[15]=s=>W(m)?m.value=s:null),class:"disable-tab-transition"},{default:a(()=>[e(S,null,{default:a(()=>[e(h,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>o[18]||(o[18]=[r("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),r("p",{class:"mb-0"}," Enter your Account Details ",-1)])),_:1,__:[18]}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).username,"onUpdate:modelValue":o[1]||(o[1]=s=>l(t).username=s),placeholder:"CarterLeonardo",label:"Username"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).email,"onUpdate:modelValue":o[2]||(o[2]=s=>l(t).email=s),placeholder:"carterleonardo@gmail.com",label:"Email"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).password,"onUpdate:modelValue":o[3]||(o[3]=s=>l(t).password=s),label:"Password",placeholder:"············",type:l(V)?"text":"password","append-inner-icon":l(V)?"tabler-eye-off":"tabler-eye","onClick:appendInner":o[4]||(o[4]=s=>V.value=!l(V))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).cPassword,"onUpdate:modelValue":o[5]||(o[5]=s=>l(t).cPassword=s),label:"Confirm Password",placeholder:"············",type:l(w)?"text":"password","append-inner-icon":l(w)?"tabler-eye-off":"tabler-eye","onClick:appendInner":o[6]||(o[6]=s=>w.value=!l(w))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:a(()=>[e(h,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>o[19]||(o[19]=[r("h6",{class:"text-h6 font-weight-medium"}," Personal Info ",-1),r("p",{class:"mb-0"}," Setup Information ",-1)])),_:1,__:[19]}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).firstName,"onUpdate:modelValue":o[7]||(o[7]=s=>l(t).firstName=s),label:"First Name",placeholder:"Leonard"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).lastName,"onUpdate:modelValue":o[8]||(o[8]=s=>l(t).lastName=s),label:"Last Name",placeholder:"Carter"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(g,{modelValue:l(t).country,"onUpdate:modelValue":o[9]||(o[9]=s=>l(t).country=s),label:"Country",placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(g,{modelValue:l(t).language,"onUpdate:modelValue":o[10]||(o[10]=s=>l(t).language=s),label:"Language",placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:a(()=>[e(h,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>o[20]||(o[20]=[r("h6",{class:"text-h6 font-weight-medium"}," Social Links ",-1),r("p",{class:"mb-0"}," Add Social Links ",-1)])),_:1,__:[20]}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).twitter,"onUpdate:modelValue":o[11]||(o[11]=s=>l(t).twitter=s),placeholder:"https://twitter.com/abc",label:"Twitter"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).facebook,"onUpdate:modelValue":o[12]||(o[12]=s=>l(t).facebook=s),placeholder:"https://facebook.com/abc",label:"Facebook"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).googlePlus,"onUpdate:modelValue":o[13]||(o[13]=s=>l(t).googlePlus=s),placeholder:"https://plus.google.com/abc",label:"Google+"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).linkedIn,"onUpdate:modelValue":o[14]||(o[14]=s=>l(t).linkedIn=s),placeholder:"https://linkedin.com/abc",label:"LinkedIn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),r("div",me,[e(v,{color:"secondary",variant:"tonal",disabled:l(m)===0,onClick:o[16]||(o[16]=s=>m.value--)},{default:a(()=>[e(k,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),o[21]||(o[21]=C(" Previous "))]),_:1,__:[21]},8,["disabled"]),f.length-1===l(m)?(y(),D(v,{key:0,color:"success",onClick:L},{default:a(()=>o[22]||(o[22]=[C(" submit ")])),_:1,__:[22]})):(y(),D(v,{key:1,onClick:o[17]||(o[17]=s=>m.value++)},{default:a(()=>[o[23]||(o[23]=C(" Next ")),e(k,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1,__:[23]}))])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},pe={ts:`<script setup lang="ts">
import customWizardAccount from '@images/svg/wizard-account.svg'
import customWizardAddress from '@images/svg/wizard-address.svg'
import customWizardPersonal from '@images/svg/wizard-personal.svg'
import customWizardSocialLink from '@images/svg/wizard-social-link.svg'
import customWizardSubmit from '@images/svg/wizard-submit.svg'

const iconsSteps = [
  {
    title: 'Account Details',
    icon: customWizardAccount,
  },
  {
    title: 'Personal Info',
    icon: customWizardPersonal,
  },
  {
    title: 'Address',
    icon: customWizardAddress,
  },
  {
    title: 'Social Links',
    icon: customWizardSocialLink,
  },
  {
    title: 'Review & Submit',
    icon: customWizardSubmit,
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: 'johndoe',
  email: 'john.doe@email.com',
  password: 'johndoe@J2',
  cPassword: 'johndoe@J2',
  firstName: 'John',
  lastName: 'Doe',
  country: 'UK',
  language: 'English',
  address: '98 Borough bridge Road, Birmingham',
  landmark: 'Borough bridge',
  pincode: '658921',
  city: 'Birmingham',
  twitter: 'https://twitter.com/abc',
  facebook: 'https://facebook.com/abc',
  googlePlus: 'https://plus.google.com/abc',
  LinkedIn: 'https://linkedin.com/abc',
})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="iconsSteps"
        align="center"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->
      <VForm>
        <VWindow
          v-model="currentStep"
          class="disable-tab-transition"
        >
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Account Details
                </h6>
                <p class="mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.username"
                  placeholder="CarterLeonardo"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.email"
                  placeholder="carterleonardo@gmail.com"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  autocomplete="password"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.cPassword"
                  label="Confirm Password"
                  autocomplete="confirm-password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Personal Info
                </h6>
                <p class="mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.firstName"
                  label="First Name"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.lastName"
                  label="Last Name"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.country"
                  label="Country"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.language"
                  label="Language"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Address
                </h6>
                <p class="mb-0">
                  Enter Your Address.
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.address"
                  placeholder="98 Borough bridge Road, Birmingham"
                  label="Address"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.landmark"
                  placeholder="Borough bridge"
                  label="Landmark"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.pincode"
                  placeholder="658921"
                  label="Pincode"
                  type="number"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.city"
                  placeholder="New York"
                  label="City"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Social Links
                </h6>
                <p class="mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.twitter"
                  placeholder="https://twitter.com/abc"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.facebook"
                  placeholder="https://facebook.com/abc"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.LinkedIn"
                  placeholder="https://linkedin.com/abc"
                  label="LinkedIn"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <div class="text-base">
              <h6 class="text-base font-weight-medium mb-2">
                Account
              </h6>

              <p class="mb-1">
                {{ formData.username }}
              </p>
              <p class="mb-1">
                {{ formData.email }}
              </p>

              <VDivider class="my-4" />

              <h6 class="text-base font-weight-medium mb-2">
                Personal Info
              </h6>

              <p class="mb-1">
                {{ formData.firstName }}
              </p>
              <p class="mb-1">
                {{ formData.lastName }}
              </p>
              <p class="mb-1">
                {{ formData.country }}
              </p>
              <p class="mb-1">
                {{ formData.language }}
              </p>

              <VDivider class="my-4" />

              <h6 class="text-base font-weight-medium mb-2">
                Address
              </h6>

              <p class="mb-1">
                {{ formData.address }}
              </p>
              <p class="mb-1">
                {{ formData.landmark }}
              </p>
              <p class="mb-1">
                {{ formData.pincode }}
              </p>
              <p class="mb-1">
                {{ formData.city }}
              </p>

              <VDivider class="my-4" />

              <h6 class="text-base font-weight-medium mb-2">
                Social Links
              </h6>

              <p class="mb-1">
                {{ formData.twitter }}
              </p>
              <p class="mb-1">
                {{ formData.facebook }}
              </p>
              <p class="mb-1">
                {{ formData.googlePlus }}
              </p>
              <p class="mb-1">
                {{ formData.LinkedIn }}
              </p>
            </div>
          </VWindowItem>
        </VWindow>

        <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
          <VBtn
            color="secondary"
            variant="tonal"
            :disabled="currentStep === 0"
            @click="currentStep--"
          >
            <VIcon
              icon="tabler-arrow-left"
              start
              class="flip-in-rtl"
            />
            Previous
          </VBtn>

          <VBtn
            v-if="iconsSteps.length - 1 === currentStep"
            color="success"
            @click="onSubmit"
          >
            submit
          </VBtn>

          <VBtn
            v-else
            @click="currentStep++"
          >
            Next

            <VIcon
              icon="tabler-arrow-right"
              end
              class="flip-in-rtl"
            />
          </VBtn>
        </div>
      </VForm>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
import customWizardAccount from '@images/svg/wizard-account.svg'
import customWizardAddress from '@images/svg/wizard-address.svg'
import customWizardPersonal from '@images/svg/wizard-personal.svg'
import customWizardSocialLink from '@images/svg/wizard-social-link.svg'
import customWizardSubmit from '@images/svg/wizard-submit.svg'

const iconsSteps = [
  {
    title: 'Account Details',
    icon: customWizardAccount,
  },
  {
    title: 'Personal Info',
    icon: customWizardPersonal,
  },
  {
    title: 'Address',
    icon: customWizardAddress,
  },
  {
    title: 'Social Links',
    icon: customWizardSocialLink,
  },
  {
    title: 'Review & Submit',
    icon: customWizardSubmit,
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: 'johndoe',
  email: 'john.doe@email.com',
  password: 'johndoe@J2',
  cPassword: 'johndoe@J2',
  firstName: 'John',
  lastName: 'Doe',
  country: 'UK',
  language: 'English',
  address: '98 Borough bridge Road, Birmingham',
  landmark: 'Borough bridge',
  pincode: '658921',
  city: 'Birmingham',
  twitter: 'https://twitter.com/abc',
  facebook: 'https://facebook.com/abc',
  googlePlus: 'https://plus.google.com/abc',
  LinkedIn: 'https://linkedin.com/abc',
})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="iconsSteps"
        align="center"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->
      <VForm>
        <VWindow
          v-model="currentStep"
          class="disable-tab-transition"
        >
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Account Details
                </h6>
                <p class="mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.username"
                  placeholder="CarterLeonardo"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.email"
                  placeholder="carterleonardo@gmail.com"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  autocomplete="password"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.cPassword"
                  label="Confirm Password"
                  autocomplete="confirm-password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Personal Info
                </h6>
                <p class="mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.firstName"
                  label="First Name"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.lastName"
                  label="Last Name"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.country"
                  label="Country"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.language"
                  label="Language"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Address
                </h6>
                <p class="mb-0">
                  Enter Your Address.
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.address"
                  placeholder="98 Borough bridge Road, Birmingham"
                  label="Address"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.landmark"
                  placeholder="Borough bridge"
                  label="Landmark"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.pincode"
                  placeholder="658921"
                  label="Pincode"
                  type="number"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.city"
                  placeholder="New York"
                  label="City"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Social Links
                </h6>
                <p class="mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.twitter"
                  placeholder="https://twitter.com/abc"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.facebook"
                  placeholder="https://facebook.com/abc"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.LinkedIn"
                  placeholder="https://linkedin.com/abc"
                  label="LinkedIn"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <div class="text-base">
              <h6 class="text-base font-weight-medium mb-2">
                Account
              </h6>

              <p class="mb-1">
                {{ formData.username }}
              </p>
              <p class="mb-1">
                {{ formData.email }}
              </p>

              <VDivider class="my-4" />

              <h6 class="text-base font-weight-medium mb-2">
                Personal Info
              </h6>

              <p class="mb-1">
                {{ formData.firstName }}
              </p>
              <p class="mb-1">
                {{ formData.lastName }}
              </p>
              <p class="mb-1">
                {{ formData.country }}
              </p>
              <p class="mb-1">
                {{ formData.language }}
              </p>

              <VDivider class="my-4" />

              <h6 class="text-base font-weight-medium mb-2">
                Address
              </h6>

              <p class="mb-1">
                {{ formData.address }}
              </p>
              <p class="mb-1">
                {{ formData.landmark }}
              </p>
              <p class="mb-1">
                {{ formData.pincode }}
              </p>
              <p class="mb-1">
                {{ formData.city }}
              </p>

              <VDivider class="my-4" />

              <h6 class="text-base font-weight-medium mb-2">
                Social Links
              </h6>

              <p class="mb-1">
                {{ formData.twitter }}
              </p>
              <p class="mb-1">
                {{ formData.facebook }}
              </p>
              <p class="mb-1">
                {{ formData.googlePlus }}
              </p>
              <p class="mb-1">
                {{ formData.LinkedIn }}
              </p>
            </div>
          </VWindowItem>
        </VWindow>

        <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
          <VBtn
            color="secondary"
            variant="tonal"
            :disabled="currentStep === 0"
            @click="currentStep--"
          >
            <VIcon
              icon="tabler-arrow-left"
              start
              class="flip-in-rtl"
            />
            Previous
          </VBtn>

          <VBtn
            v-if="iconsSteps.length - 1 === currentStep"
            color="success"
            @click="onSubmit"
          >
            submit
          </VBtn>

          <VBtn
            v-else
            @click="currentStep++"
          >
            Next

            <VIcon
              icon="tabler-arrow-right"
              end
              class="flip-in-rtl"
            />
          </VBtn>
        </div>
      </VForm>
    </VCardText>
  </VCard>
</template>
`},ue={ts:`<script setup lang="ts">
import customWizardAccount from '@images/svg/wizard-account.svg'
import customWizardAddress from '@images/svg/wizard-address.svg'
import customWizardPersonal from '@images/svg/wizard-personal.svg'
import customWizardSocialLink from '@images/svg/wizard-social-link.svg'
import customWizardSubmit from '@images/svg/wizard-submit.svg'

const iconsSteps = [
  {
    title: 'Account Details',
    icon: customWizardAccount,
  },
  {
    title: 'Personal Info',
    icon: customWizardPersonal,
  },
  {
    title: 'Address',
    icon: customWizardAddress,
  },
  {
    title: 'Social Links',
    icon: customWizardSocialLink,
  },
  {
    title: 'Review & Submit',
    icon: customWizardSubmit,
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: 'johndoe',
  email: 'john.doe@email.com',
  password: 'johndoe@J2',
  cPassword: 'johndoe@J2',
  firstName: 'John',
  lastName: 'Doe',
  country: 'UK',
  language: 'English',
  address: '98 Borough bridge Road, Birmingham',
  landmark: 'Borough bridge',
  pincode: '658921',
  city: 'Birmingham',
  twitter: 'https://twitter.com/abc',
  facebook: 'https://facebook.com/abc',
  googlePlus: 'https://plus.google.com/abc',
  LinkedIn: 'https://linkedin.com/abc',
})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <!-- 👉 Stepper -->
  <div class="mb-6">
    <AppStepper
      v-model:current-step="currentStep"
      :items="iconsSteps"
    />
  </div>

  <VCard>
    <VCardText>
      <!-- 👉 stepper content -->
      <VForm>
        <VWindow
          v-model="currentStep"
          class="disable-tab-transition"
        >
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Account Details
                </h6>
                <p class="mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.username"
                  placeholder="CarterLeonardo"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.email"
                  placeholder="carterleonardo@gmail.com"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.cPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Personal Info
                </h6>
                <p class="mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.firstName"
                  label="First Name"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.lastName"
                  label="Last Name"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.country"
                  label="Country"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.language"
                  label="Language"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Address
                </h6>
                <p class="mb-0">
                  Enter Your Address.
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.address"
                  placeholder="98 Borough bridge Road, Birmingham"
                  label="Address"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.landmark"
                  placeholder="Borough bridge"
                  label="Landmark"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.pincode"
                  placeholder="658921"
                  label="Pincode"
                  type="number"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.city"
                  placeholder="New York"
                  label="City"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Social Links
                </h6>
                <p class="mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.twitter"
                  placeholder="https://twitter.com/abc"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.facebook"
                  placeholder="https://facebook.com/abc"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.LinkedIn"
                  placeholder="https://linkedin.com/abc"
                  label="LinkedIn"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <div class="text-base">
              <h6 class="text-base font-weight-medium mb-2">
                Account
              </h6>

              <p class="mb-1">
                {{ formData.username }}
              </p>
              <p class="mb-1">
                {{ formData.email }}
              </p>

              <VDivider class="my-4" />

              <h6 class="text-base font-weight-medium mb-2">
                Personal Info
              </h6>

              <p class="mb-1">
                {{ formData.firstName }}
              </p>
              <p class="mb-1">
                {{ formData.lastName }}
              </p>
              <p class="mb-1">
                {{ formData.country }}
              </p>
              <p class="mb-1">
                {{ formData.language }}
              </p>

              <VDivider class="my-4" />

              <h6 class="text-base font-weight-medium mb-2">
                Address
              </h6>

              <p class="mb-1">
                {{ formData.address }}
              </p>
              <p class="mb-1">
                {{ formData.landmark }}
              </p>
              <p class="mb-1">
                {{ formData.pincode }}
              </p>
              <p class="mb-1">
                {{ formData.city }}
              </p>

              <VDivider class="my-4" />

              <h6 class="text-base font-weight-medium mb-2">
                Social Links
              </h6>

              <p class="mb-1">
                {{ formData.twitter }}
              </p>
              <p class="mb-1">
                {{ formData.facebook }}
              </p>
              <p class="mb-1">
                {{ formData.googlePlus }}
              </p>
              <p class="mb-1">
                {{ formData.LinkedIn }}
              </p>
            </div>
          </VWindowItem>
        </VWindow>

        <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
          <VBtn
            color="secondary"
            variant="tonal"
            :disabled="currentStep === 0"
            @click="currentStep--"
          >
            <VIcon
              icon="tabler-arrow-left"
              start
              class="flip-in-rtl"
            />
            Previous
          </VBtn>

          <VBtn
            v-if="iconsSteps.length - 1 === currentStep"
            color="success"
            @click="onSubmit"
          >
            submit
          </VBtn>

          <VBtn
            v-else
            @click="currentStep++"
          >
            Next

            <VIcon
              icon="tabler-arrow-right"
              end
              class="flip-in-rtl"
            />
          </VBtn>
        </div>
      </VForm>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
import customWizardAccount from '@images/svg/wizard-account.svg'
import customWizardAddress from '@images/svg/wizard-address.svg'
import customWizardPersonal from '@images/svg/wizard-personal.svg'
import customWizardSocialLink from '@images/svg/wizard-social-link.svg'
import customWizardSubmit from '@images/svg/wizard-submit.svg'

const iconsSteps = [
  {
    title: 'Account Details',
    icon: customWizardAccount,
  },
  {
    title: 'Personal Info',
    icon: customWizardPersonal,
  },
  {
    title: 'Address',
    icon: customWizardAddress,
  },
  {
    title: 'Social Links',
    icon: customWizardSocialLink,
  },
  {
    title: 'Review & Submit',
    icon: customWizardSubmit,
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: 'johndoe',
  email: 'john.doe@email.com',
  password: 'johndoe@J2',
  cPassword: 'johndoe@J2',
  firstName: 'John',
  lastName: 'Doe',
  country: 'UK',
  language: 'English',
  address: '98 Borough bridge Road, Birmingham',
  landmark: 'Borough bridge',
  pincode: '658921',
  city: 'Birmingham',
  twitter: 'https://twitter.com/abc',
  facebook: 'https://facebook.com/abc',
  googlePlus: 'https://plus.google.com/abc',
  LinkedIn: 'https://linkedin.com/abc',
})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <!-- 👉 Stepper -->
  <div class="mb-6">
    <AppStepper
      v-model:current-step="currentStep"
      :items="iconsSteps"
    />
  </div>

  <VCard>
    <VCardText>
      <!-- 👉 stepper content -->
      <VForm>
        <VWindow
          v-model="currentStep"
          class="disable-tab-transition"
        >
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Account Details
                </h6>
                <p class="mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.username"
                  placeholder="CarterLeonardo"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.email"
                  placeholder="carterleonardo@gmail.com"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.cPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Personal Info
                </h6>
                <p class="mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.firstName"
                  label="First Name"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.lastName"
                  label="Last Name"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.country"
                  label="Country"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.language"
                  label="Language"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Address
                </h6>
                <p class="mb-0">
                  Enter Your Address.
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.address"
                  placeholder="98 Borough bridge Road, Birmingham"
                  label="Address"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.landmark"
                  placeholder="Borough bridge"
                  label="Landmark"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.pincode"
                  placeholder="658921"
                  label="Pincode"
                  type="number"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.city"
                  placeholder="New York"
                  label="City"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Social Links
                </h6>
                <p class="mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.twitter"
                  placeholder="https://twitter.com/abc"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.facebook"
                  placeholder="https://facebook.com/abc"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.LinkedIn"
                  placeholder="https://linkedin.com/abc"
                  label="LinkedIn"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <div class="text-base">
              <h6 class="text-base font-weight-medium mb-2">
                Account
              </h6>

              <p class="mb-1">
                {{ formData.username }}
              </p>
              <p class="mb-1">
                {{ formData.email }}
              </p>

              <VDivider class="my-4" />

              <h6 class="text-base font-weight-medium mb-2">
                Personal Info
              </h6>

              <p class="mb-1">
                {{ formData.firstName }}
              </p>
              <p class="mb-1">
                {{ formData.lastName }}
              </p>
              <p class="mb-1">
                {{ formData.country }}
              </p>
              <p class="mb-1">
                {{ formData.language }}
              </p>

              <VDivider class="my-4" />

              <h6 class="text-base font-weight-medium mb-2">
                Address
              </h6>

              <p class="mb-1">
                {{ formData.address }}
              </p>
              <p class="mb-1">
                {{ formData.landmark }}
              </p>
              <p class="mb-1">
                {{ formData.pincode }}
              </p>
              <p class="mb-1">
                {{ formData.city }}
              </p>

              <VDivider class="my-4" />

              <h6 class="text-base font-weight-medium mb-2">
                Social Links
              </h6>

              <p class="mb-1">
                {{ formData.twitter }}
              </p>
              <p class="mb-1">
                {{ formData.facebook }}
              </p>
              <p class="mb-1">
                {{ formData.googlePlus }}
              </p>
              <p class="mb-1">
                {{ formData.LinkedIn }}
              </p>
            </div>
          </VWindowItem>
        </VWindow>

        <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
          <VBtn
            color="secondary"
            variant="tonal"
            :disabled="currentStep === 0"
            @click="currentStep--"
          >
            <VIcon
              icon="tabler-arrow-left"
              start
              class="flip-in-rtl"
            />
            Previous
          </VBtn>

          <VBtn
            v-if="iconsSteps.length - 1 === currentStep"
            color="success"
            @click="onSubmit"
          >
            submit
          </VBtn>

          <VBtn
            v-else
            @click="currentStep++"
          >
            Next

            <VIcon
              icon="tabler-arrow-right"
              end
              class="flip-in-rtl"
            />
          </VBtn>
        </div>
      </VForm>
    </VCardText>
  </VCard>
</template>
`},Ve={ts:`<script setup lang="ts">
const numberedSteps = [
  {
    title: 'Account Details',
    icon: 'tabler-file-description',
    subtitle: 'Setup account details',
  },
  {
    title: 'Personal Info',
    icon: 'tabler-user',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    icon: 'tabler-link',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',

})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="4"
    >
      <!-- 👉 Stepper -->
      <div class="pa-6">
        <AppStepper
          v-model:current-step="currentStep"
          direction="vertical"
          :items="numberedSteps"
          icon-size="24"
          class="stepper-icon-step-bg"
        />
      </div>
    </VCol>

    <!-- 👉 stepper content -->
    <VCol
      cols="12"
      md="8"
    >
      <VCard>
        <VCardText>
          <VForm>
            <VWindow
              v-model="currentStep"
              class="disable-tab-transition"
            >
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Account Details
                    </h6>
                    <p class="mb-0">
                      Enter your Account Details
                    </p>
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.username"
                      placeholder="CarterLeonardo"
                      label="Username"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.email"
                      placeholder="carterleonardo@gmail.com"
                      label="Email"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.password"
                      label="Password"
                      placeholder="············"
                      :type="isPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                      @click:append-inner="isPasswordVisible = !isPasswordVisible"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.cPassword"
                      label="Confirm Password"
                      placeholder="············"
                      :type="isCPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                      @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Personal Info
                    </h6>
                    <p class="mb-0">
                      Setup Information
                    </p>
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.firstName"
                      label="First Name"
                      placeholder="Leonard"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.lastName"
                      label="Last Name"
                      placeholder="Carter"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.country"
                      label="Country"
                      placeholder="Select Country"
                      :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.language"
                      label="Language"
                      placeholder="Select Language"
                      :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Social Links
                    </h6>
                    <p class="mb-0">
                      Add Social Links
                    </p>
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.twitter"
                      placeholder="https://twitter.com/abc"
                      label="Twitter"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.facebook"
                      placeholder="https://facebook.com/abc"
                      label="Facebook"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.googlePlus"
                      placeholder="https://plus.google.com/abc"
                      label="Google+"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.LinkedIn"
                      placeholder="https://linkedin.com/abc"
                      label="LinkedIn"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
            </VWindow>
            <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
              <VBtn
                color="secondary"
                variant="tonal"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                <VIcon
                  icon="tabler-arrow-left"
                  start
                  class="flip-in-rtl"
                />
                Previous
              </VBtn>
              <VBtn
                v-if="numberedSteps.length - 1 === currentStep"
                color="success"
                @click="onSubmit"
              >
                submit
              </VBtn>
              <VBtn
                v-else
                @click="currentStep++"
              >
                Next
                <VIcon
                  icon="tabler-arrow-right"
                  end
                  class="flip-in-rtl"
                />
              </VBtn>
            </div>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const numberedSteps = [
  {
    title: 'Account Details',
    icon: 'tabler-file-description',
    subtitle: 'Setup account details',
  },
  {
    title: 'Personal Info',
    icon: 'tabler-user',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    icon: 'tabler-link',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',
})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="4"
    >
      <!-- 👉 Stepper -->
      <div class="pa-6">
        <AppStepper
          v-model:current-step="currentStep"
          direction="vertical"
          :items="numberedSteps"
          icon-size="24"
          class="stepper-icon-step-bg"
        />
      </div>
    </VCol>

    <!-- 👉 stepper content -->
    <VCol
      cols="12"
      md="8"
    >
      <VCard>
        <VCardText>
          <VForm>
            <VWindow
              v-model="currentStep"
              class="disable-tab-transition"
            >
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Account Details
                    </h6>
                    <p class="mb-0">
                      Enter your Account Details
                    </p>
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.username"
                      placeholder="CarterLeonardo"
                      label="Username"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.email"
                      placeholder="carterleonardo@gmail.com"
                      label="Email"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.password"
                      label="Password"
                      placeholder="············"
                      :type="isPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                      @click:append-inner="isPasswordVisible = !isPasswordVisible"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.cPassword"
                      label="Confirm Password"
                      placeholder="············"
                      :type="isCPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                      @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Personal Info
                    </h6>
                    <p class="mb-0">
                      Setup Information
                    </p>
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.firstName"
                      label="First Name"
                      placeholder="Leonard"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.lastName"
                      label="Last Name"
                      placeholder="Carter"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.country"
                      label="Country"
                      placeholder="Select Country"
                      :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.language"
                      label="Language"
                      placeholder="Select Language"
                      :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Social Links
                    </h6>
                    <p class="mb-0">
                      Add Social Links
                    </p>
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.twitter"
                      placeholder="https://twitter.com/abc"
                      label="Twitter"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.facebook"
                      placeholder="https://facebook.com/abc"
                      label="Facebook"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.googlePlus"
                      placeholder="https://plus.google.com/abc"
                      label="Google+"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.LinkedIn"
                      placeholder="https://linkedin.com/abc"
                      label="LinkedIn"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
            </VWindow>
            <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
              <VBtn
                color="secondary"
                variant="tonal"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                <VIcon
                  icon="tabler-arrow-left"
                  start
                  class="flip-in-rtl"
                />
                Previous
              </VBtn>
              <VBtn
                v-if="numberedSteps.length - 1 === currentStep"
                color="success"
                @click="onSubmit"
              >
                submit
              </VBtn>
              <VBtn
                v-else
                @click="currentStep++"
              >
                Next
                <VIcon
                  icon="tabler-arrow-right"
                  end
                  class="flip-in-rtl"
                />
              </VBtn>
            </div>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
`},fe={ts:`<script setup lang="ts">
import { VForm } from 'vuetify/components/VForm'
import customWizardAccount from '@images/svg/wizard-account.svg'
import customWizardAddress from '@images/svg/wizard-address.svg'
import customWizardPersonal from '@images/svg/wizard-personal.svg'
import customWizardSocialLink from '@images/svg/wizard-social-link.svg'
import customWizardSubmit from '@images/svg/wizard-submit.svg'

const iconsSteps = [
  {
    title: 'Account Details',
    icon: customWizardAccount,
  },
  {
    title: 'Personal Info',
    icon: customWizardPersonal,
  },
  {
    title: 'Address',
    icon: customWizardAddress,
  },
  {
    title: 'Social Links',
    icon: customWizardSocialLink,
  },
  {
    title: 'Review & Submit',
    icon: customWizardSubmit,
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
const isCurrentStepValid = ref(true)
const refAccountForm = ref<VForm>()
const refPersonalForm = ref<VForm>()
const refSocialLinkForm = ref<VForm>()
const refAddressForm = ref<VForm>()

const accountForm = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
})

const personalForm = ref({
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
})

const socialForm = ref({
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',
})

const addressForm = ref({
  address: '',
  landmark: '',
  city: '',
  pincode: '',
})

const validateAccountForm = () => {
  refAccountForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    }
    else { isCurrentStepValid.value = false }
  })
}

const validatePersonalForm = () => {
  refPersonalForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    }
    else { isCurrentStepValid.value = false }
  })
}

const validateAddressForm = () => {
  refAddressForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    }
    else { isCurrentStepValid.value = false }
  })
}

const validateSocialLinkForm = () => {
  refSocialLinkForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    }
    else { isCurrentStepValid.value = false }
  })
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="iconsSteps"
        :is-active-step-valid="isCurrentStepValid"
        align="center"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->

      <VWindow
        v-model="currentStep"
        class="disable-tab-transition"
      >
        <VWindowItem>
          <VForm
            ref="refAccountForm"
            @submit.prevent="validateAccountForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Account Details
                </h6>
                <p class="mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.username"
                  placeholder="CarterLeonardo"
                  :rules="[requiredValidator]"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.email"
                  placeholder="carterleonardo@gmail.com"
                  :rules="[requiredValidator, emailValidator]"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.password"
                  placeholder="············"
                  label="Password"
                  :rules="[requiredValidator, passwordValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  autocomplete="password"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.cPassword"
                  placeholder="············"
                  label="Confirm Password"
                  autocomplete="confirm-password"
                  :rules="[requiredValidator, confirmedValidator(accountForm.cPassword, accountForm.password)]"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    disabled
                  >
                    <VIcon
                      icon="tabler-arrow-left"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="tabler-arrow-right"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refPersonalForm"
            @submit.prevent="validatePersonalForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Personal Info
                </h6>
                <p class="mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="personalForm.firstName"
                  label="First Name"
                  :rules="[requiredValidator]"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="personalForm.lastName"
                  label="Last Name"
                  :rules="[requiredValidator]"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="personalForm.country"
                  label="Country"
                  :rules="[requiredValidator]"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="personalForm.language"
                  label="Language"
                  :rules="[requiredValidator]"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="tabler-arrow-left"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="tabler-arrow-right"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refAddressForm"
            @submit.prevent="validateAddressForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Address
                </h6>
                <p class="mb-0">
                  Enter Your Address.
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="addressForm.address"
                  :rules="[requiredValidator]"
                  placeholder="98 Borough bridge Road, Birmingham"
                  label="Address"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="addressForm.landmark"
                  :rules="[requiredValidator]"
                  placeholder="Borough bridge"
                  label="Landmark"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="addressForm.pincode"
                  :rules="[requiredValidator]"
                  placeholder="658921"
                  label="Pincode"
                  type="number"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="addressForm.city"
                  :rules="[requiredValidator]"
                  placeholder="New York"
                  label="City"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="tabler-arrow-left"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="tabler-arrow-right"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refSocialLinkForm"
            @submit.prevent="validateSocialLinkForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Social Links
                </h6>
                <p class="mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.twitter"
                  placeholder="https://twitter.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.facebook"
                  placeholder="https://facebook.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.LinkedIn"
                  placeholder="https://linkedin.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="LinkedIn"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="tabler-arrow-left"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="tabler-arrow-right"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <div class="text-base">
            <h6 class="text-base font-weight-medium mb-2">
              Account
            </h6>

            <p class="mb-1">
              {{ accountForm.username }}
            </p>
            <p class="mb-1">
              {{ accountForm.email }}
            </p>

            <VDivider class="my-4" />

            <h6 class="text-base font-weight-medium mb-2">
              Personal Info
            </h6>

            <p class="mb-1">
              {{ personalForm.firstName }}
            </p>
            <p class="mb-1">
              {{ personalForm.lastName }}
            </p>
            <p class="mb-1">
              {{ personalForm.country }}
            </p>
            <p class="mb-1">
              {{ personalForm.language }}
            </p>

            <VDivider class="my-4" />

            <h6 class="text-base font-weight-medium mb-2">
              Address
            </h6>

            <p class="mb-1">
              {{ addressForm.address }}
            </p>
            <p class="mb-1">
              {{ addressForm.landmark }}
            </p>
            <p class="mb-1">
              {{ addressForm.pincode }}
            </p>
            <p class="mb-1">
              {{ addressForm.city }}
            </p>

            <VDivider class="my-4" />

            <h6 class="text-base font-weight-medium mb-2">
              Social Links
            </h6>

            <p class="mb-1">
              {{ socialForm.twitter }}
            </p>
            <p class="mb-1">
              {{ socialForm.facebook }}
            </p>
            <p class="mb-1">
              {{ socialForm.googlePlus }}
            </p>
            <p class="mb-1">
              {{ socialForm.LinkedIn }}
            </p>
          </div>
          <VCol cols="12">
            <div class="d-flex flex-wrap gap-4 justify-space-between mt-8">
              <VBtn
                color="secondary"
                variant="tonal"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                <VIcon
                  icon="tabler-arrow-left"
                  start
                  class="flip-in-rtl"
                />
                Previous
              </VBtn>

              <VBtn
                color="success"
                @click="console.log('Form Submitted')"
              >
                submit
              </VBtn>
            </div>
          </VCol>
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
import { VForm } from 'vuetify/components/VForm'
import customWizardAccount from '@images/svg/wizard-account.svg'
import customWizardAddress from '@images/svg/wizard-address.svg'
import customWizardPersonal from '@images/svg/wizard-personal.svg'
import customWizardSocialLink from '@images/svg/wizard-social-link.svg'
import customWizardSubmit from '@images/svg/wizard-submit.svg'

const iconsSteps = [
  {
    title: 'Account Details',
    icon: customWizardAccount,
  },
  {
    title: 'Personal Info',
    icon: customWizardPersonal,
  },
  {
    title: 'Address',
    icon: customWizardAddress,
  },
  {
    title: 'Social Links',
    icon: customWizardSocialLink,
  },
  {
    title: 'Review & Submit',
    icon: customWizardSubmit,
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
const isCurrentStepValid = ref(true)
const refAccountForm = ref()
const refPersonalForm = ref()
const refSocialLinkForm = ref()
const refAddressForm = ref()

const accountForm = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
})

const personalForm = ref({
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
})

const socialForm = ref({
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',
})

const addressForm = ref({
  address: '',
  landmark: '',
  city: '',
  pincode: '',
})

const validateAccountForm = () => {
  refAccountForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    } else {
      isCurrentStepValid.value = false
    }
  })
}

const validatePersonalForm = () => {
  refPersonalForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    } else {
      isCurrentStepValid.value = false
    }
  })
}

const validateAddressForm = () => {
  refAddressForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    } else {
      isCurrentStepValid.value = false
    }
  })
}

const validateSocialLinkForm = () => {
  refSocialLinkForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    } else {
      isCurrentStepValid.value = false
    }
  })
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="iconsSteps"
        :is-active-step-valid="isCurrentStepValid"
        align="center"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->

      <VWindow
        v-model="currentStep"
        class="disable-tab-transition"
      >
        <VWindowItem>
          <VForm
            ref="refAccountForm"
            @submit.prevent="validateAccountForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Account Details
                </h6>
                <p class="mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.username"
                  placeholder="CarterLeonardo"
                  :rules="[requiredValidator]"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.email"
                  placeholder="carterleonardo@gmail.com"
                  :rules="[requiredValidator, emailValidator]"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.password"
                  placeholder="············"
                  label="Password"
                  :rules="[requiredValidator, passwordValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  autocomplete="password"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.cPassword"
                  placeholder="············"
                  label="Confirm Password"
                  autocomplete="confirm-password"
                  :rules="[requiredValidator, confirmedValidator(accountForm.cPassword, accountForm.password)]"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    disabled
                  >
                    <VIcon
                      icon="tabler-arrow-left"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="tabler-arrow-right"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refPersonalForm"
            @submit.prevent="validatePersonalForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Personal Info
                </h6>
                <p class="mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="personalForm.firstName"
                  label="First Name"
                  :rules="[requiredValidator]"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="personalForm.lastName"
                  label="Last Name"
                  :rules="[requiredValidator]"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="personalForm.country"
                  label="Country"
                  :rules="[requiredValidator]"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="personalForm.language"
                  label="Language"
                  :rules="[requiredValidator]"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="tabler-arrow-left"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="tabler-arrow-right"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refAddressForm"
            @submit.prevent="validateAddressForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Address
                </h6>
                <p class="mb-0">
                  Enter Your Address.
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="addressForm.address"
                  :rules="[requiredValidator]"
                  placeholder="98 Borough bridge Road, Birmingham"
                  label="Address"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="addressForm.landmark"
                  :rules="[requiredValidator]"
                  placeholder="Borough bridge"
                  label="Landmark"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="addressForm.pincode"
                  :rules="[requiredValidator]"
                  placeholder="658921"
                  label="Pincode"
                  type="number"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="addressForm.city"
                  :rules="[requiredValidator]"
                  placeholder="New York"
                  label="City"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="tabler-arrow-left"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="tabler-arrow-right"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refSocialLinkForm"
            @submit.prevent="validateSocialLinkForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Social Links
                </h6>
                <p class="mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.twitter"
                  placeholder="https://twitter.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.facebook"
                  placeholder="https://facebook.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.LinkedIn"
                  placeholder="https://linkedin.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="LinkedIn"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="tabler-arrow-left"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="tabler-arrow-right"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <div class="text-base">
            <h6 class="text-base font-weight-medium mb-2">
              Account
            </h6>

            <p class="mb-1">
              {{ accountForm.username }}
            </p>
            <p class="mb-1">
              {{ accountForm.email }}
            </p>

            <VDivider class="my-4" />

            <h6 class="text-base font-weight-medium mb-2">
              Personal Info
            </h6>

            <p class="mb-1">
              {{ personalForm.firstName }}
            </p>
            <p class="mb-1">
              {{ personalForm.lastName }}
            </p>
            <p class="mb-1">
              {{ personalForm.country }}
            </p>
            <p class="mb-1">
              {{ personalForm.language }}
            </p>

            <VDivider class="my-4" />

            <h6 class="text-base font-weight-medium mb-2">
              Address
            </h6>

            <p class="mb-1">
              {{ addressForm.address }}
            </p>
            <p class="mb-1">
              {{ addressForm.landmark }}
            </p>
            <p class="mb-1">
              {{ addressForm.pincode }}
            </p>
            <p class="mb-1">
              {{ addressForm.city }}
            </p>

            <VDivider class="my-4" />

            <h6 class="text-base font-weight-medium mb-2">
              Social Links
            </h6>

            <p class="mb-1">
              {{ socialForm.twitter }}
            </p>
            <p class="mb-1">
              {{ socialForm.facebook }}
            </p>
            <p class="mb-1">
              {{ socialForm.googlePlus }}
            </p>
            <p class="mb-1">
              {{ socialForm.LinkedIn }}
            </p>
          </div>
          <VCol cols="12">
            <div class="d-flex flex-wrap gap-4 justify-space-between mt-8">
              <VBtn
                color="secondary"
                variant="tonal"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                <VIcon
                  icon="tabler-arrow-left"
                  start
                  class="flip-in-rtl"
                />
                Previous
              </VBtn>

              <VBtn
                color="success"
                @click="console.log('Form Submitted')"
              >
                submit
              </VBtn>
            </div>
          </VCol>
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},be={ts:`<script setup lang="ts">
const numberedSteps = [
  {
    title: 'Account Details',
    icon: 'tabler-file-description',
    subtitle: 'Setup account details',
  },
  {
    title: 'Personal Info',
    icon: 'tabler-user',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    icon: 'tabler-link',
    subtitle: 'Add social links',
  },

]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',

})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VRow>
      <VCol
        cols="12"
        md="4"
        :class="$vuetify.display.smAndDown ? 'border-b' : 'border-e'"
      >
        <VCardText>
          <!-- 👉 Stepper -->
          <AppStepper
            v-model:current-step="currentStep"
            direction="vertical"
            :items="numberedSteps"
            icon-size="24"
            class="stepper-icon-step-bg"
          />
        </VCardText>
      </VCol>
      <!-- 👉 stepper content -->
      <VCol
        cols="12"
        md="8"
      >
        <VCardText>
          <VForm>
            <VWindow
              v-model="currentStep"
              class="disable-tab-transition"
            >
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Account Details
                    </h6>
                    <p class="mb-0">
                      Enter your Account Details
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.username"
                      placeholder="CarterLeonardo"
                      label="Username"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.email"
                      placeholder="carterleonardo@gmail.com"
                      label="Email"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.password"
                      label="Password"
                      placeholder="············"
                      :type="isPasswordVisible ? 'text' : 'password'"
                      autocomplete="password"
                      :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                      @click:append-inner="isPasswordVisible = !isPasswordVisible"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.cPassword"
                      label="Confirm Password"
                      autocomplete="confirm-password"
                      placeholder="············"
                      :type="isCPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                      @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Personal Info
                    </h6>
                    <p class="mb-0">
                      Setup Information
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.firstName"
                      label="First Name"
                      placeholder="Leonard"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.lastName"
                      label="Last Name"
                      placeholder="Carter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.country"
                      label="Country"
                      placeholder="Select Country"
                      :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.language"
                      label="Language"
                      placeholder="Select Language"
                      :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Social Links
                    </h6>
                    <p class="mb-0">
                      Add Social Links
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.twitter"
                      placeholder="https://twitter.com/abc"
                      label="Twitter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.facebook"
                      placeholder="https://facebook.com/abc"
                      label="Facebook"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.googlePlus"
                      placeholder="https://plus.google.com/abc"
                      label="Google+"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.LinkedIn"
                      placeholder="https://linkedin.com/abc"
                      label="LinkedIn"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
            </VWindow>

            <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
              <VBtn
                color="secondary"
                variant="tonal"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                <VIcon
                  icon="tabler-arrow-left"
                  start
                  class="flip-in-rtl"
                />
                Previous
              </VBtn>

              <VBtn
                v-if="numberedSteps.length - 1 === currentStep"
                color="success"
                @click="onSubmit"
              >
                submit
              </VBtn>

              <VBtn
                v-else
                @click="currentStep++"
              >
                Next

                <VIcon
                  icon="tabler-arrow-right"
                  end
                  class="flip-in-rtl"
                />
              </VBtn>
            </div>
          </VForm>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
`,js:`<script setup>
const numberedSteps = [
  {
    title: 'Account Details',
    icon: 'tabler-file-description',
    subtitle: 'Setup account details',
  },
  {
    title: 'Personal Info',
    icon: 'tabler-user',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    icon: 'tabler-link',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',
})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VRow>
      <VCol
        cols="12"
        md="4"
        :class="$vuetify.display.smAndDown ? 'border-b' : 'border-e'"
      >
        <VCardText>
          <!-- 👉 Stepper -->
          <AppStepper
            v-model:current-step="currentStep"
            direction="vertical"
            :items="numberedSteps"
            icon-size="24"
            class="stepper-icon-step-bg"
          />
        </VCardText>
      </VCol>
      <!-- 👉 stepper content -->
      <VCol
        cols="12"
        md="8"
      >
        <VCardText>
          <VForm>
            <VWindow
              v-model="currentStep"
              class="disable-tab-transition"
            >
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Account Details
                    </h6>
                    <p class="mb-0">
                      Enter your Account Details
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.username"
                      placeholder="CarterLeonardo"
                      label="Username"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.email"
                      placeholder="carterleonardo@gmail.com"
                      label="Email"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.password"
                      label="Password"
                      placeholder="············"
                      :type="isPasswordVisible ? 'text' : 'password'"
                      autocomplete="password"
                      :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                      @click:append-inner="isPasswordVisible = !isPasswordVisible"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.cPassword"
                      label="Confirm Password"
                      autocomplete="confirm-password"
                      placeholder="············"
                      :type="isCPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                      @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Personal Info
                    </h6>
                    <p class="mb-0">
                      Setup Information
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.firstName"
                      label="First Name"
                      placeholder="Leonard"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.lastName"
                      label="Last Name"
                      placeholder="Carter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.country"
                      label="Country"
                      placeholder="Select Country"
                      :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.language"
                      label="Language"
                      placeholder="Select Language"
                      :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Social Links
                    </h6>
                    <p class="mb-0">
                      Add Social Links
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.twitter"
                      placeholder="https://twitter.com/abc"
                      label="Twitter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.facebook"
                      placeholder="https://facebook.com/abc"
                      label="Facebook"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.googlePlus"
                      placeholder="https://plus.google.com/abc"
                      label="Google+"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.LinkedIn"
                      placeholder="https://linkedin.com/abc"
                      label="LinkedIn"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
            </VWindow>

            <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
              <VBtn
                color="secondary"
                variant="tonal"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                <VIcon
                  icon="tabler-arrow-left"
                  start
                  class="flip-in-rtl"
                />
                Previous
              </VBtn>

              <VBtn
                v-if="numberedSteps.length - 1 === currentStep"
                color="success"
                @click="onSubmit"
              >
                submit
              </VBtn>

              <VBtn
                v-else
                @click="currentStep++"
              >
                Next

                <VIcon
                  icon="tabler-arrow-right"
                  end
                  class="flip-in-rtl"
                />
              </VBtn>
            </div>
          </VForm>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
`},we={xmlns:"http://www.w3.org/2000/svg",width:"54",height:"54"};function ge(I,f){return y(),U("svg",we,f[0]||(f[0]=[r("g",{fill:"currentColor"},[r("path",{d:"M54 7.2V4a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v3.2h1.8v36H.9a.9.9 0 1 0 0 1.8h25.2v1.8c0 .042.019.08.024.12A3.596 3.596 0 0 0 23.4 50.4c0 1.985 1.615 3.6 3.6 3.6s3.6-1.615 3.6-3.6a3.596 3.596 0 0 0-2.724-3.48c.005-.04.024-.078.024-.12V45h25.2a.9.9 0 1 0 0-1.8h-.9v-36zM28.8 50.4c0 .993-.807 1.8-1.8 1.8s-1.8-.807-1.8-1.8.807-1.8 1.8-1.8 1.8.807 1.8 1.8M5.4 1.8h43.2a3.6 3.6 0 0 1 3.6 3.6H1.8a3.6 3.6 0 0 1 3.6-3.6m43 41.4H5.6a2 2 0 0 1-2-2v-32a2 2 0 0 1 2-2h42.8a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2"}),r("path",{d:"M45 36.9H31.5a.9.9 0 1 0 0 1.8H45a.9.9 0 1 0 0-1.8M9 32.4h9a.9.9 0 1 0 0-1.8H9a.9.9 0 1 0 0 1.8m18 0h13.5a.9.9 0 1 0 0-1.8H27a.9.9 0 1 0 0 1.8m-5.139-1.539a.93.93 0 0 0-.261.639c0 .234.099.468.261.639a.95.95 0 0 0 .639.261.95.95 0 0 0 .639-.261.95.95 0 0 0 .261-.639.95.95 0 0 0-.261-.639c-.333-.333-.945-.333-1.278 0M27 36.9H13.5a.9.9 0 1 0 0 1.8H27a.9.9 0 1 0 0-1.8M9 38.7a.95.95 0 0 0 .639-.261.95.95 0 0 0 .261-.639.9.9 0 0 0-.261-.63c-.333-.342-.936-.342-1.278-.009a.95.95 0 0 0-.261.639c0 .234.099.468.261.639A.95.95 0 0 0 9 38.7m35.361-7.839a.93.93 0 0 0-.261.639c0 .234.099.468.261.639A.95.95 0 0 0 45 32.4a.95.95 0 0 0 .639-.261.95.95 0 0 0 .261-.639.95.95 0 0 0-.261-.639c-.333-.333-.936-.333-1.278 0M45 18H31.5a.9.9 0 1 0 0 1.8H45a.9.9 0 1 0 0-1.8m0 6.3h-9a.9.9 0 1 0 0 1.8h9a.9.9 0 1 0 0-1.8m-18 1.8h1.8a.9.9 0 1 0 0-1.8H27a.9.9 0 1 0 0 1.8m0-12.6h13.5a.9.9 0 1 0 0-1.8H27a.9.9 0 1 0 0 1.8m18 0a.95.95 0 0 0 .639-.261.9.9 0 0 0 .261-.639.9.9 0 0 0-.261-.639c-.342-.333-.945-.333-1.278 0a.95.95 0 0 0-.261.639c0 .234.099.468.261.639A.95.95 0 0 0 45 13.5m-17.739 4.761A.93.93 0 0 0 27 18.9c0 .234.099.468.261.639a.95.95 0 0 0 .639.261.95.95 0 0 0 .639-.261.95.95 0 0 0 .261-.639.93.93 0 0 0-.261-.639.94.94 0 0 0-1.278 0m4.5 6.3a.95.95 0 0 0-.261.639c0 .234.099.468.261.639a.95.95 0 0 0 .639.261.95.95 0 0 0 .639-.261.95.95 0 0 0 .261-.639.95.95 0 0 0-.261-.639c-.333-.333-.945-.333-1.278 0M19.5 11.7h-8.4a3 3 0 0 0-3 3v8.4a3 3 0 0 0 3 3h8.4a3 3 0 0 0 3-3v-8.4a3 3 0 0 0-3-3m-1.8 12.6h-4.8a3 3 0 0 1-3-3v-4.8a3 3 0 0 1 3-3h4.8a3 3 0 0 1 3 3v4.8a3 3 0 0 1-3 3"})],-1)]))}const M={render:ge},ve={xmlns:"http://www.w3.org/2000/svg",width:"54",height:"54"};function Ce(I,f){return y(),U("svg",ve,f[0]||(f[0]=[ae('<g fill="currentColor"><path d="M54 3.864c0-1.986-1.615-3.6-3.6-3.6H3.6a3.604 3.604 0 0 0-3.6 3.6c0 1.673 1.152 3.07 2.7 3.472v43.7l2.7-2.7 5.4 5.4 5.4-5.4 5.4 5.4 5.4-5.4 5.4 5.4 5.4-5.4 5.4 5.4 5.4-5.4 2.7 2.7v-43.7c1.548-.402 2.7-1.8 2.7-3.472M49.5 46.69l-.9-.9-5.4 5.4-5.4-5.4-5.4 5.4-5.4-5.4-5.4 5.4-5.4-5.4-5.4 5.4-5.4-5.4-.9.9V4.764h45zm1.8-41.27V2.965H2.7v2.458a1.8 1.8 0 0 1 .9-3.358h46.8a1.8 1.8 0 0 1 .9 3.358z"></path><path d="M39.6 36.264H26.1a.9.9 0 1 0 0 1.8h13.5a.9.9 0 1 0 0-1.8m3.861.261a.93.93 0 0 0-.261.639c0 .234.099.468.261.639a.95.95 0 0 0 .639.26.95.95 0 0 0 .639-.26.95.95 0 0 0 .261-.64.93.93 0 0 0-.261-.638.94.94 0 0 0-1.278 0m.639-12.861H30.6a.9.9 0 1 0 0 1.8h13.5a.9.9 0 1 0 0-1.8m0 6.3h-9a.9.9 0 1 0 0 1.8h9a.9.9 0 1 0 0-1.8m-18.9.9a.9.9 0 0 0 .9.9h1.8a.9.9 0 1 0 0-1.8h-1.8a.9.9 0 0 0-.9.9m15.3-12.6a.9.9 0 0 0-.9-.9H26.1a.9.9 0 1 0 0 1.8h13.5a.9.9 0 0 0 .9-.9m2.961-.639a.93.93 0 0 0-.261.639c0 .234.099.468.261.639a.95.95 0 0 0 .639.26.93.93 0 0 0 .639-.26.95.95 0 0 0 .261-.64.95.95 0 0 0-.261-.638c-.333-.333-.945-.333-1.278 0m-15.822 7.578a.93.93 0 0 0 .261-.64.93.93 0 0 0-.261-.638c-.333-.333-.936-.333-1.278 0a.93.93 0 0 0-.261.639.93.93 0 0 0 .261.639.95.95 0 0 0 .639.26.95.95 0 0 0 .639-.26m4.5 6.3a.91.91 0 0 0 0-1.278c-.333-.333-.936-.333-1.278 0a.95.95 0 0 0-.261.639c0 .234.099.468.261.639a.95.95 0 0 0 .639.26.95.95 0 0 0 .639-.26M15.3 19.255v-.991a.9.9 0 1 0-1.8 0v.993c-.982.2-1.877.721-2.536 1.502a3.1 3.1 0 0 0-.715 2.342 3.28 3.28 0 0 0 1.245 2.242l2.006 1.56v4.895a2.7 2.7 0 0 1-1.8-2.534.9.9 0 1 0-1.8 0 4.51 4.51 0 0 0 3.6 4.409v.79a.9.9 0 1 0 1.8 0v-.794c.982-.2 1.877-.72 2.537-1.501a3.1 3.1 0 0 0 .714-2.345 3.28 3.28 0 0 0-1.245-2.239l-2.006-1.56V21.13a2.7 2.7 0 0 1 1.8 2.535.9.9 0 1 0 1.8 0 4.51 4.51 0 0 0-3.6-4.41m.9 9.75c.315.244.52.612.56 1.006.04.37-.067.723-.297.995a2.7 2.7 0 0 1-1.163.787v-3.49zm-3.6-5.082a1.48 1.48 0 0 1-.56-1.008 1.32 1.32 0 0 1 .297-.994 2.7 2.7 0 0 1 1.163-.787v3.49z"></path><circle cx="36" cy="10.164" r="1"></circle><circle cx="32.4" cy="10.164" r="1"></circle><circle cx="39.6" cy="10.164" r="1"></circle><circle cx="28.8" cy="10.164" r="1"></circle><circle cx="43.2" cy="10.164" r="1"></circle><circle cx="18" cy="10.164" r="1"></circle><circle cx="21.6" cy="10.164" r="1"></circle><circle cx="25.2" cy="10.164" r="1"></circle><circle cx="46.8" cy="10.164" r="1"></circle><circle cx="14.4" cy="10.164" r="1"></circle><circle cx="10.8" cy="10.164" r="1"></circle><circle cx="7.2" cy="10.164" r="1"></circle></g>',1)]))}const H={render:Ce},he={xmlns:"http://www.w3.org/2000/svg",width:"58",height:"54"};function Se(I,f){return y(),U("svg",he,f[0]||(f[0]=[r("g",{fill:"currentColor"},[r("path",{d:"M53.857.283H4a4 4 0 0 0-4 4V40.64a4 4 0 0 0 4 4h32.643v9.077l6.75-6.75 6.75 6.75V44.64h3.714a4 4 0 0 0 4-4V4.283a4 4 0 0 0-4-4m-5.643 48.779-4.821-4.822-4.822 4.822V38.517q.02.01.037.019a9.6 9.6 0 0 0 4.785 1.282 9.6 9.6 0 0 0 4.785-1.282c.011-.007.025-.01.036-.019zm.283-13.118q-.228.2-.467.38a8 8 0 0 1-.58.4q-.058.034-.114.07a7 7 0 0 1-.496.272l-.145.07q-.242.117-.492.216-.096.036-.193.07-.233.086-.472.157-.128.036-.259.067a7 7 0 0 1-.43.1c-.123.024-.248.04-.373.057-.114.016-.227.037-.343.047a8 8 0 0 1-.741.038 8 8 0 0 1-.742-.038c-.114-.011-.227-.03-.342-.047q-.187-.024-.373-.057c-.145-.028-.288-.065-.43-.1q-.13-.032-.26-.067a7 7 0 0 1-.471-.157q-.098-.034-.193-.07a8 8 0 0 1-1.133-.559 8 8 0 0 1-.602-.4l-.092-.068a7.7 7.7 0 0 1-3.075-6.15c0-4.253 3.46-7.714 7.714-7.714 4.253 0 7.714 3.46 7.714 7.714a7.69 7.69 0 0 1-2.61 5.769m3.432 6.767h-1.786V37.05a9.6 9.6 0 0 0 2.893-6.875c0-5.317-4.326-9.642-9.643-9.642s-9.643 4.325-9.643 9.642a9.6 9.6 0 0 0 2.893 6.875v5.661H5.929a4 4 0 0 1-4-4v-32.5a4 4 0 0 1 4-4h46a4 4 0 0 1 4 4v32.5a4 4 0 0 1-4 4"}),r("path",{d:"M11.747 12.598a3.32 3.32 0 0 0-.766 2.51c.099.944.585 1.82 1.334 2.402l2.15 1.673v5.243a2.89 2.89 0 0 1-1.93-2.715.964.964 0 1 0-1.928 0 4.83 4.83 0 0 0 3.857 4.724v.847a.964.964 0 1 0 1.929 0v-.85a4.8 4.8 0 0 0 2.718-1.61c.59-.697.861-1.588.765-2.511a3.52 3.52 0 0 0-1.334-2.4l-2.15-1.67v-5.244a2.89 2.89 0 0 1 1.93 2.715.964.964 0 1 0 1.928 0 4.83 4.83 0 0 0-3.857-4.724V9.926a.964.964 0 1 0-1.929 0v1.065a4.8 4.8 0 0 0-2.717 1.607m5.611 8.836c.337.261.556.656.6 1.078.041.396-.072.775-.32 1.066a2.9 2.9 0 0 1-1.245.844v-3.74zM13.5 15.99a1.58 1.58 0 0 1-.6-1.08 1.4 1.4 0 0 1 .32-1.065 2.87 2.87 0 0 1 1.245-.843v3.738zm10.607-1.243h22.179a.964.964 0 1 0 0-1.929H24.107a.964.964 0 1 0 0 1.929m0 5.786h10.607a.964.964 0 1 0 0-1.929H24.107a.964.964 0 1 0 0 1.929m0 5.785h7.714a.964.964 0 1 0 0-1.928h-7.714a.964.964 0 1 0 0 1.928m-13.5 6.75h20.25a.964.964 0 1 0 0-1.928h-20.25a.964.964 0 1 0 0 1.928"})],-1)]))}const K={render:Se},ye={xmlns:"http://www.w3.org/2000/svg",width:"54",height:"54"};function ke(I,f){return y(),U("svg",ye,f[0]||(f[0]=[r("g",{fill:"currentColor"},[r("path",{d:"M50 3.6H27.9V.9a.9.9 0 1 0-1.8 0v2.7H4a4 4 0 0 0-4 4v29.8a4 4 0 0 0 4 4h20.827L13.764 52.464a.899.899 0 1 0 1.272 1.272L26.1 42.673V51.3a.9.9 0 1 0 1.8 0v-8.627l11.064 11.063a.9.9 0 0 0 1.272 0 .9.9 0 0 0 0-1.272L29.173 41.4H50a4 4 0 0 0 4-4V7.6a4 4 0 0 0-4-4m-1.8 36H5.8a4 4 0 0 1-4-4V9.4a4 4 0 0 1 4-4h42.4a4 4 0 0 1 4 4v26.2a4 4 0 0 1-4 4"}),r("path",{d:"M32.4 37.8a.9.9 0 0 0 .9-.9v-2.7a.9.9 0 1 0-1.8 0v2.7a.9.9 0 0 0 .9.9m3.6-8.1a.9.9 0 0 0-.9.9v6.3a.9.9 0 1 0 1.8 0v-6.3a.9.9 0 0 0-.9-.9m3.6 1.8a.9.9 0 0 0-.9.9v4.5a.9.9 0 1 0 1.8 0v-4.5a.9.9 0 0 0-.9-.9m3.6-6.3a.9.9 0 0 0-.9.9v10.8a.9.9 0 1 0 1.8 0V26.1a.9.9 0 0 0-.9-.9m3.6 3.6a.9.9 0 0 0-.9.9v7.2a.9.9 0 1 0 1.8 0v-7.2a.9.9 0 0 0-.9-.9M7.2 34.2h9a.9.9 0 1 0 0-1.8h-9a.9.9 0 1 0 0 1.8M20.7 36H7.2a.9.9 0 1 0 0 1.8h13.5a.9.9 0 1 0 0-1.8m6.26-19.254a10 10 0 0 0-.073-.637q-.025-.192-.058-.382a11 11 0 0 0-.153-.7q-.037-.156-.08-.311a10 10 0 0 0-.232-.704q-.052-.15-.11-.297a10 10 0 0 0-.285-.636c-.053-.112-.104-.225-.162-.335a10 10 0 0 0-.296-.513c-.082-.137-.16-.275-.249-.409q-.122-.174-.25-.344c-.124-.171-.245-.344-.38-.508l-.002-.002c-.21-.254-.428-.502-.663-.737a10 10 0 0 0-.706-.634l-.035-.032c-.155-.128-.32-.242-.481-.36-.123-.092-.245-.187-.375-.273-.122-.08-.25-.152-.375-.228a10 10 0 0 0-.55-.318c-.099-.051-.2-.096-.3-.145a10 10 0 0 0-.674-.301q-.134-.05-.266-.097a11 11 0 0 0-.732-.242q-.146-.039-.294-.075a10 10 0 0 0-.71-.156q-.191-.033-.384-.058a11 11 0 0 0-.63-.072 10 10 0 0 0-.487-.024c-.107-.003-.21-.016-.318-.016-.081 0-.16.01-.241.013-.08.001-.158-.006-.238-.002l-.355.021-.01.01C10.495 7.674 6.3 12.127 6.3 17.55c0 5.707 4.643 10.35 10.35 10.35 2.591 0 4.957-.964 6.775-2.544.025-.02.056-.03.08-.053.014-.014.018-.033.032-.048a10.32 10.32 0 0 0 3.419-6.817l.017-.014.018-.396c.004-.08-.004-.157-.002-.236 0-.08.011-.16.011-.242 0-.11-.014-.217-.016-.326q-.007-.239-.025-.478zM17.1 9.023q.136.004.268.013a9 9 0 0 1 .886.12q.09.015.18.034.369.077.724.186l.044.013a8.59 8.59 0 0 1 5.61 5.609q.005.022.012.044.109.355.186.723.019.09.034.181a9 9 0 0 1 .12.886q.009.133.013.268H17.1zm-9 8.527c0-4.254 3.127-7.782 7.2-8.433v8.878l.002.012.031.893h.494l5.68 5.679A8.5 8.5 0 0 1 16.65 26.1c-4.714 0-8.55-3.836-8.55-8.55m14.77 5.847L18.373 18.9h6.71a8.5 8.5 0 0 1-2.213 4.497M35.1 13.5h7.2a.9.9 0 1 0 0-1.8h-7.2a.9.9 0 1 0 0 1.8m11.07-1.539a.88.88 0 0 0-.27.639c0 .243.098.477.261.63.17.171.395.27.639.27a.95.95 0 0 0 .639-.261.95.95 0 0 0 .261-.639.95.95 0 0 0-.261-.639c-.342-.333-.955-.324-1.269 0M44.1 9h2.7a.9.9 0 1 0 0-1.8h-2.7a.9.9 0 1 0 0 1.8m-9 0h1.8a.9.9 0 1 0 0-1.8h-1.8a.9.9 0 1 0 0 1.8m5.4 0a.93.93 0 0 0 .639-.261.93.93 0 0 0 .261-.639.93.93 0 0 0-.261-.639c-.333-.333-.955-.333-1.278 0a.92.92 0 0 0-.261.639c0 .243.098.468.261.639.17.162.395.261.639.261"})],-1)]))}const J={render:ke},Ae={xmlns:"http://www.w3.org/2000/svg",width:"54",height:"54"};function xe(I,f){return y(),U("svg",Ae,f[0]||(f[0]=[r("g",{fill:"currentColor"},[r("path",{d:"M50.4 13.5V2.687A2.69 2.69 0 0 0 47.714 0h-3.627A2.69 2.69 0 0 0 41.4 2.687V13.5H4a4 4 0 0 0-4 4v21.7a4 4 0 0 0 4 4h37.4v2.04l3.6 6.3v1.56a.9.9 0 1 0 1.8 0v-1.56l3.6-6.3V43.2a3.6 3.6 0 0 0 3.6-3.6V17.1a3.6 3.6 0 0 0-3.6-3.6m-1.8-3.6h-5.4V8.1h5.4zm-5.4-7.213c0-.49.398-.887.886-.887h3.628c.488 0 .886.398.886.887V6.3h-5.4zM1.8 38.4V18.3a3 3 0 0 1 3-3h33.6a3 3 0 0 1 3 3v20.1a3 3 0 0 1-3 3H4.8a3 3 0 0 1-3-3m44.1 11.086L43.85 45.9h4.1zm2.7-5.386h-5.4V11.7h5.4zm2.7-2.7a.9.9 0 0 1-.9-.9V16.2a.9.9 0 1 1 1.8 0v24.3a.9.9 0 0 1-.9.9"}),r("path",{d:"M35.1 23.4h-2.7a.9.9 0 1 0 0 1.8h2.7a.9.9 0 1 0 0-1.8m-16.2-1.8h2.7a.9.9 0 1 0 0-1.8h-2.7a.9.9 0 1 0 0 1.8m16.2-1.8h-6.3a.9.9 0 1 0 0 1.8h6.3a.9.9 0 1 0 0-1.8m-9.9 1.8a.95.95 0 0 0 .639-.261.95.95 0 0 0 .261-.639.95.95 0 0 0-.261-.639c-.342-.333-.945-.333-1.278 0a.95.95 0 0 0-.261.639c0 .234.099.468.261.639a.93.93 0 0 0 .639.261m-3.6 2.7a.9.9 0 0 0 .9.9h6.3a.9.9 0 1 0 0-1.8h-6.3a.9.9 0 0 0-.9.9m-2.7.9a.95.95 0 0 0 .639-.261.95.95 0 0 0 .261-.639.93.93 0 0 0-.261-.639c-.342-.333-.945-.333-1.278 0A.93.93 0 0 0 18 24.3c0 .234.099.468.261.639a.93.93 0 0 0 .639.261m-9-4.41v-.99a.9.9 0 1 0-1.8 0v.994c-.982.2-1.877.721-2.536 1.502a3.1 3.1 0 0 0-.715 2.342 3.28 3.28 0 0 0 1.245 2.242L8.1 28.44v4.894A2.7 2.7 0 0 1 6.3 30.8a.9.9 0 1 0-1.8 0 4.51 4.51 0 0 0 3.6 4.409V36a.9.9 0 1 0 1.8 0v-.794c.982-.2 1.877-.72 2.537-1.501a3.1 3.1 0 0 0 .714-2.345 3.28 3.28 0 0 0-1.245-2.239L9.9 27.56v-4.894a2.7 2.7 0 0 1 1.8 2.534.9.9 0 1 0 1.8 0 4.51 4.51 0 0 0-3.6-4.41m.9 9.752c.315.243.52.611.56 1.006.04.369-.067.722-.297.994-.313.37-.718.63-1.163.788v-3.49l.9.701zm-3.6-5.083a1.48 1.48 0 0 1-.56-1.008c-.038-.368.067-.72.297-.993.313-.37.718-.63 1.163-.788v3.49l-.9-.7zm14.53 4.601c-1.97 1.026-2.635 2.989-2.876 5.024l-1.117-.936c-.882-.74-2.162.527-1.272 1.272l2.525 2.116c.592.497 1.51.183 1.536-.636.066-1.95.158-4.268 2.114-5.286 1.026-.534.117-2.089-.91-1.554m5.985 3.59c-1.246.289-2.664 1.875-3.542.096-.512-1.04-2.065-.128-1.554.908.465.944 1.35 1.604 2.402 1.737a3 3 0 0 0 1.52-.203c.367-.143 1.742-1.176 2.04-.645.565 1.011 2.12.104 1.554-.908-.484-.865-1.462-1.207-2.42-.985"})],-1)]))}const Y={render:xe},Fe={class:"text-base"},Pe={class:"mb-1"},De={class:"mb-1"},Ie={class:"mb-1"},Le={class:"mb-1"},Te={class:"mb-1"},We={class:"mb-1"},Ne={class:"mb-1"},Be={class:"mb-1"},_e={class:"mb-1"},Ue={class:"mb-1"},ze={class:"mb-1"},Re={class:"mb-1"},qe={class:"mb-1"},je={class:"mb-1"},$e={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},Ee={__name:"DemoFormWizardIconsBasic",setup(I){const f=[{title:"Account Details",icon:M},{title:"Personal Info",icon:K},{title:"Address",icon:H},{title:"Social Links",icon:J},{title:"Review & Submit",icon:Y}],m=b(0),V=b(!1),w=b(!1),t=b({username:"johndoe",email:"john.doe@email.com",password:"johndoe@J2",cPassword:"johndoe@J2",firstName:"John",lastName:"Doe",country:"UK",language:"English",address:"98 Borough bridge Road, Birmingham",landmark:"Borough bridge",pincode:"658921",city:"Birmingham",twitter:"https://twitter.com/abc",facebook:"https://facebook.com/abc",googlePlus:"https://plus.google.com/abc",linkedIn:"https://linkedin.com/abc"}),L=()=>{console.log(t.value)};return(_,o)=>{const T=q,n=R,g=z;return y(),D(j,null,{default:a(()=>[e(B,null,{default:a(()=>[e(T,{"current-step":l(m),"onUpdate:currentStep":o[0]||(o[0]=s=>W(m)?m.value=s:null),items:f,align:"center"},null,8,["current-step"])]),_:1}),e(P),e(B,null,{default:a(()=>[e(N,null,{default:a(()=>[e($,{modelValue:l(m),"onUpdate:modelValue":o[19]||(o[19]=s=>W(m)?m.value=s:null),class:"disable-tab-transition"},{default:a(()=>[e(S,null,{default:a(()=>[e(h,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>o[22]||(o[22]=[r("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),r("p",{class:"mb-0"}," Enter your Account Details ",-1)])),_:1,__:[22]}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).username,"onUpdate:modelValue":o[1]||(o[1]=s=>l(t).username=s),placeholder:"CarterLeonardo",label:"Username"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).email,"onUpdate:modelValue":o[2]||(o[2]=s=>l(t).email=s),placeholder:"carterleonardo@gmail.com",label:"Email"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).password,"onUpdate:modelValue":o[3]||(o[3]=s=>l(t).password=s),label:"Password",placeholder:"············",type:l(V)?"text":"password",autocomplete:"password","append-inner-icon":l(V)?"tabler-eye-off":"tabler-eye","onClick:appendInner":o[4]||(o[4]=s=>V.value=!l(V))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).cPassword,"onUpdate:modelValue":o[5]||(o[5]=s=>l(t).cPassword=s),label:"Confirm Password",autocomplete:"confirm-password",placeholder:"············",type:l(w)?"text":"password","append-inner-icon":l(w)?"tabler-eye-off":"tabler-eye","onClick:appendInner":o[6]||(o[6]=s=>w.value=!l(w))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:a(()=>[e(h,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>o[23]||(o[23]=[r("h6",{class:"text-h6 font-weight-medium"}," Personal Info ",-1),r("p",{class:"mb-0"}," Setup Information ",-1)])),_:1,__:[23]}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).firstName,"onUpdate:modelValue":o[7]||(o[7]=s=>l(t).firstName=s),label:"First Name",placeholder:"Leonard"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).lastName,"onUpdate:modelValue":o[8]||(o[8]=s=>l(t).lastName=s),label:"Last Name",placeholder:"Carter"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(g,{modelValue:l(t).country,"onUpdate:modelValue":o[9]||(o[9]=s=>l(t).country=s),label:"Country",placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(g,{modelValue:l(t).language,"onUpdate:modelValue":o[10]||(o[10]=s=>l(t).language=s),label:"Language",placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:a(()=>[e(h,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>o[24]||(o[24]=[r("h6",{class:"text-h6 font-weight-medium"}," Address ",-1),r("p",{class:"mb-0"}," Enter Your Address. ",-1)])),_:1,__:[24]}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).address,"onUpdate:modelValue":o[11]||(o[11]=s=>l(t).address=s),placeholder:"98 Borough bridge Road, Birmingham",label:"Address"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).landmark,"onUpdate:modelValue":o[12]||(o[12]=s=>l(t).landmark=s),placeholder:"Borough bridge",label:"Landmark"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).pincode,"onUpdate:modelValue":o[13]||(o[13]=s=>l(t).pincode=s),placeholder:"658921",label:"Pincode",type:"number"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).city,"onUpdate:modelValue":o[14]||(o[14]=s=>l(t).city=s),placeholder:"New York",label:"City"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:a(()=>[e(h,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>o[25]||(o[25]=[r("h6",{class:"text-h6 font-weight-medium"}," Social Links ",-1),r("p",{class:"mb-0"}," Add Social Links ",-1)])),_:1,__:[25]}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).twitter,"onUpdate:modelValue":o[15]||(o[15]=s=>l(t).twitter=s),placeholder:"https://twitter.com/abc",label:"Twitter"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).facebook,"onUpdate:modelValue":o[16]||(o[16]=s=>l(t).facebook=s),placeholder:"https://facebook.com/abc",label:"Facebook"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).googlePlus,"onUpdate:modelValue":o[17]||(o[17]=s=>l(t).googlePlus=s),placeholder:"https://plus.google.com/abc",label:"Google+"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).linkedIn,"onUpdate:modelValue":o[18]||(o[18]=s=>l(t).linkedIn=s),placeholder:"https://linkedin.com/abc",label:"LinkedIn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:a(()=>[r("div",Fe,[o[26]||(o[26]=r("h6",{class:"text-base font-weight-medium mb-2"}," Account ",-1)),r("p",Pe,u(l(t).username),1),r("p",De,u(l(t).email),1),e(P,{class:"my-4"}),o[27]||(o[27]=r("h6",{class:"text-base font-weight-medium mb-2"}," Personal Info ",-1)),r("p",Ie,u(l(t).firstName),1),r("p",Le,u(l(t).lastName),1),r("p",Te,u(l(t).country),1),r("p",We,u(l(t).language),1),e(P,{class:"my-4"}),o[28]||(o[28]=r("h6",{class:"text-base font-weight-medium mb-2"}," Address ",-1)),r("p",Ne,u(l(t).address),1),r("p",Be,u(l(t).landmark),1),r("p",_e,u(l(t).pincode),1),r("p",Ue,u(l(t).city),1),e(P,{class:"my-4"}),o[29]||(o[29]=r("h6",{class:"text-base font-weight-medium mb-2"}," Social Links ",-1)),r("p",ze,u(l(t).twitter),1),r("p",Re,u(l(t).facebook),1),r("p",qe,u(l(t).googlePlus),1),r("p",je,u(l(t).linkedIn),1)])]),_:1})]),_:1},8,["modelValue"]),r("div",$e,[e(v,{color:"secondary",variant:"tonal",disabled:l(m)===0,onClick:o[20]||(o[20]=s=>m.value--)},{default:a(()=>[e(k,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),o[30]||(o[30]=C(" Previous "))]),_:1,__:[30]},8,["disabled"]),f.length-1===l(m)?(y(),D(v,{key:0,color:"success",onClick:L},{default:a(()=>o[31]||(o[31]=[C(" submit ")])),_:1,__:[31]})):(y(),D(v,{key:1,onClick:o[21]||(o[21]=s=>m.value++)},{default:a(()=>[o[32]||(o[32]=C(" Next ")),e(k,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1,__:[32]}))])]),_:1})]),_:1})]),_:1})}}},Ge={class:"mb-6"},Me={class:"text-base"},He={class:"mb-1"},Ke={class:"mb-1"},Je={class:"mb-1"},Ye={class:"mb-1"},Ze={class:"mb-1"},Oe={class:"mb-1"},Qe={class:"mb-1"},Xe={class:"mb-1"},el={class:"mb-1"},ll={class:"mb-1"},ol={class:"mb-1"},al={class:"mb-1"},tl={class:"mb-1"},sl={class:"mb-1"},rl={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},il={__name:"DemoFormWizardIconsModernBasic",setup(I){const f=[{title:"Account Details",icon:M},{title:"Personal Info",icon:K},{title:"Address",icon:H},{title:"Social Links",icon:J},{title:"Review & Submit",icon:Y}],m=b(0),V=b(!1),w=b(!1),t=b({username:"johndoe",email:"john.doe@email.com",password:"johndoe@J2",cPassword:"johndoe@J2",firstName:"John",lastName:"Doe",country:"UK",language:"English",address:"98 Borough bridge Road, Birmingham",landmark:"Borough bridge",pincode:"658921",city:"Birmingham",twitter:"https://twitter.com/abc",facebook:"https://facebook.com/abc",googlePlus:"https://plus.google.com/abc",linkedIn:"https://linkedin.com/abc"}),L=()=>{console.log(t.value)};return(_,o)=>{const T=q,n=R,g=z;return y(),U(O,null,[r("div",Ge,[e(T,{"current-step":l(m),"onUpdate:currentStep":o[0]||(o[0]=s=>W(m)?m.value=s:null),items:f},null,8,["current-step"])]),e(j,null,{default:a(()=>[e(B,null,{default:a(()=>[e(N,null,{default:a(()=>[e($,{modelValue:l(m),"onUpdate:modelValue":o[19]||(o[19]=s=>W(m)?m.value=s:null),class:"disable-tab-transition"},{default:a(()=>[e(S,null,{default:a(()=>[e(h,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>o[22]||(o[22]=[r("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),r("p",{class:"mb-0"}," Enter your Account Details ",-1)])),_:1,__:[22]}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).username,"onUpdate:modelValue":o[1]||(o[1]=s=>l(t).username=s),placeholder:"CarterLeonardo",label:"Username"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).email,"onUpdate:modelValue":o[2]||(o[2]=s=>l(t).email=s),placeholder:"carterleonardo@gmail.com",label:"Email"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).password,"onUpdate:modelValue":o[3]||(o[3]=s=>l(t).password=s),label:"Password",placeholder:"············",type:l(V)?"text":"password","append-inner-icon":l(V)?"tabler-eye-off":"tabler-eye","onClick:appendInner":o[4]||(o[4]=s=>V.value=!l(V))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).cPassword,"onUpdate:modelValue":o[5]||(o[5]=s=>l(t).cPassword=s),label:"Confirm Password",placeholder:"············",type:l(w)?"text":"password","append-inner-icon":l(w)?"tabler-eye-off":"tabler-eye","onClick:appendInner":o[6]||(o[6]=s=>w.value=!l(w))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:a(()=>[e(h,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>o[23]||(o[23]=[r("h6",{class:"text-h6 font-weight-medium"}," Personal Info ",-1),r("p",{class:"mb-0"}," Setup Information ",-1)])),_:1,__:[23]}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).firstName,"onUpdate:modelValue":o[7]||(o[7]=s=>l(t).firstName=s),label:"First Name",placeholder:"Leonard"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).lastName,"onUpdate:modelValue":o[8]||(o[8]=s=>l(t).lastName=s),label:"Last Name",placeholder:"Carter"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(g,{modelValue:l(t).country,"onUpdate:modelValue":o[9]||(o[9]=s=>l(t).country=s),label:"Country",placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(g,{modelValue:l(t).language,"onUpdate:modelValue":o[10]||(o[10]=s=>l(t).language=s),label:"Language",placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:a(()=>[e(h,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>o[24]||(o[24]=[r("h6",{class:"text-h6 font-weight-medium"}," Address ",-1),r("p",{class:"mb-0"}," Enter Your Address. ",-1)])),_:1,__:[24]}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).address,"onUpdate:modelValue":o[11]||(o[11]=s=>l(t).address=s),placeholder:"98 Borough bridge Road, Birmingham",label:"Address"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).landmark,"onUpdate:modelValue":o[12]||(o[12]=s=>l(t).landmark=s),placeholder:"Borough bridge",label:"Landmark"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).pincode,"onUpdate:modelValue":o[13]||(o[13]=s=>l(t).pincode=s),placeholder:"658921",label:"Pincode",type:"number"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).city,"onUpdate:modelValue":o[14]||(o[14]=s=>l(t).city=s),placeholder:"New York",label:"City"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:a(()=>[e(h,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>o[25]||(o[25]=[r("h6",{class:"text-h6 font-weight-medium"}," Social Links ",-1),r("p",{class:"mb-0"}," Add Social Links ",-1)])),_:1,__:[25]}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).twitter,"onUpdate:modelValue":o[15]||(o[15]=s=>l(t).twitter=s),placeholder:"https://twitter.com/abc",label:"Twitter"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).facebook,"onUpdate:modelValue":o[16]||(o[16]=s=>l(t).facebook=s),placeholder:"https://facebook.com/abc",label:"Facebook"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).googlePlus,"onUpdate:modelValue":o[17]||(o[17]=s=>l(t).googlePlus=s),placeholder:"https://plus.google.com/abc",label:"Google+"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).linkedIn,"onUpdate:modelValue":o[18]||(o[18]=s=>l(t).linkedIn=s),placeholder:"https://linkedin.com/abc",label:"LinkedIn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:a(()=>[r("div",Me,[o[26]||(o[26]=r("h6",{class:"text-base font-weight-medium mb-2"}," Account ",-1)),r("p",He,u(l(t).username),1),r("p",Ke,u(l(t).email),1),e(P,{class:"my-4"}),o[27]||(o[27]=r("h6",{class:"text-base font-weight-medium mb-2"}," Personal Info ",-1)),r("p",Je,u(l(t).firstName),1),r("p",Ye,u(l(t).lastName),1),r("p",Ze,u(l(t).country),1),r("p",Oe,u(l(t).language),1),e(P,{class:"my-4"}),o[28]||(o[28]=r("h6",{class:"text-base font-weight-medium mb-2"}," Address ",-1)),r("p",Qe,u(l(t).address),1),r("p",Xe,u(l(t).landmark),1),r("p",el,u(l(t).pincode),1),r("p",ll,u(l(t).city),1),e(P,{class:"my-4"}),o[29]||(o[29]=r("h6",{class:"text-base font-weight-medium mb-2"}," Social Links ",-1)),r("p",ol,u(l(t).twitter),1),r("p",al,u(l(t).facebook),1),r("p",tl,u(l(t).googlePlus),1),r("p",sl,u(l(t).linkedIn),1)])]),_:1})]),_:1},8,["modelValue"]),r("div",rl,[e(v,{color:"secondary",variant:"tonal",disabled:l(m)===0,onClick:o[20]||(o[20]=s=>m.value--)},{default:a(()=>[e(k,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),o[30]||(o[30]=C(" Previous "))]),_:1,__:[30]},8,["disabled"]),f.length-1===l(m)?(y(),D(v,{key:0,color:"success",onClick:L},{default:a(()=>o[31]||(o[31]=[C(" submit ")])),_:1,__:[31]})):(y(),D(v,{key:1,onClick:o[21]||(o[21]=s=>m.value++)},{default:a(()=>[o[32]||(o[32]=C(" Next ")),e(k,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1,__:[32]}))])]),_:1})]),_:1})]),_:1})],64)}}},dl={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},nl={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},ml={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},cl={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},pl={class:"text-base"},ul={class:"mb-1"},Vl={class:"mb-1"},fl={class:"mb-1"},bl={class:"mb-1"},wl={class:"mb-1"},gl={class:"mb-1"},vl={class:"mb-1"},Cl={class:"mb-1"},hl={class:"mb-1"},Sl={class:"mb-1"},yl={class:"mb-1"},kl={class:"mb-1"},Al={class:"mb-1"},xl={class:"mb-1"},Fl={class:"d-flex flex-wrap gap-4 justify-space-between mt-8"},Pl={__name:"DemoFormWizardIconsValidation",setup(I){const f=[{title:"Account Details",icon:M},{title:"Personal Info",icon:K},{title:"Address",icon:H},{title:"Social Links",icon:J},{title:"Review & Submit",icon:Y}],m=b(0),V=b(!1),w=b(!1),t=b(!0),L=b(),_=b(),o=b(),T=b(),n=b({username:"",email:"",password:"",cPassword:""}),g=b({firstName:"",lastName:"",country:void 0,language:void 0}),s=b({twitter:"",facebook:"",googlePlus:"",linkedIn:""}),F=b({address:"",landmark:"",city:"",pincode:""}),Q=()=>{var c;(c=L.value)==null||c.validate().then(d=>{d.valid?(m.value++,t.value=!0):t.value=!1})},X=()=>{var c;(c=_.value)==null||c.validate().then(d=>{d.valid?(m.value++,t.value=!0):t.value=!1})},ee=()=>{var c;(c=T.value)==null||c.validate().then(d=>{d.valid?(m.value++,t.value=!0):t.value=!1})},le=()=>{var c;(c=o.value)==null||c.validate().then(d=>{d.valid?(m.value++,t.value=!0):t.value=!1})};return(c,d)=>{const oe=q,x=R,Z=z;return y(),D(j,null,{default:a(()=>[e(B,null,{default:a(()=>[e(oe,{"current-step":l(m),"onUpdate:currentStep":d[0]||(d[0]=p=>W(m)?m.value=p:null),items:f,"is-active-step-valid":l(t),align:"center"},null,8,["current-step","is-active-step-valid"])]),_:1}),e(P),e(B,null,{default:a(()=>[e($,{modelValue:l(m),"onUpdate:modelValue":d[24]||(d[24]=p=>W(m)?m.value=p:null),class:"disable-tab-transition"},{default:a(()=>[e(S,null,{default:a(()=>[e(l(N),{ref_key:"refAccountForm",ref:L,onSubmit:E(Q,["prevent"])},{default:a(()=>[e(h,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>d[25]||(d[25]=[r("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),r("p",{class:"mb-0"}," Enter your Account Details ",-1)])),_:1,__:[25]}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(x,{modelValue:l(n).username,"onUpdate:modelValue":d[1]||(d[1]=p=>l(n).username=p),placeholder:"CarterLeonardo",rules:["requiredValidator"in c?c.requiredValidator:l(A)],label:"Username"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(x,{modelValue:l(n).email,"onUpdate:modelValue":d[2]||(d[2]=p=>l(n).email=p),placeholder:"carterleonardo@gmail.com",rules:["requiredValidator"in c?c.requiredValidator:l(A),"emailValidator"in c?c.emailValidator:l(re)],label:"Email"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(x,{modelValue:l(n).password,"onUpdate:modelValue":d[3]||(d[3]=p=>l(n).password=p),placeholder:"············",label:"Password",rules:["requiredValidator"in c?c.requiredValidator:l(A),"passwordValidator"in c?c.passwordValidator:l(ie)],type:l(V)?"text":"password",autocomplete:"password","append-inner-icon":l(V)?"tabler-eye-off":"tabler-eye","onClick:appendInner":d[4]||(d[4]=p=>V.value=!l(V))},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(x,{modelValue:l(n).cPassword,"onUpdate:modelValue":d[5]||(d[5]=p=>l(n).cPassword=p),placeholder:"············",label:"Confirm Password",autocomplete:"confirm-password",rules:["requiredValidator"in c?c.requiredValidator:l(A),("confirmedValidator"in c?c.confirmedValidator:l(de))(l(n).cPassword,l(n).password)],type:l(w)?"text":"password","append-inner-icon":l(w)?"tabler-eye-off":"tabler-eye","onClick:appendInner":d[6]||(d[6]=p=>w.value=!l(w))},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),e(i,{cols:"12"},{default:a(()=>[r("div",dl,[e(v,{color:"secondary",variant:"tonal",disabled:""},{default:a(()=>[e(k,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),d[26]||(d[26]=C(" Previous "))]),_:1,__:[26]}),e(v,{type:"submit"},{default:a(()=>[d[27]||(d[27]=C(" Next ")),e(k,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1,__:[27]})])]),_:1})]),_:1})]),_:1},512)]),_:1}),e(S,null,{default:a(()=>[e(l(N),{ref_key:"refPersonalForm",ref:_,onSubmit:E(X,["prevent"])},{default:a(()=>[e(h,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>d[28]||(d[28]=[r("h6",{class:"text-h6 font-weight-medium"}," Personal Info ",-1),r("p",{class:"mb-0"}," Setup Information ",-1)])),_:1,__:[28]}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(x,{modelValue:l(g).firstName,"onUpdate:modelValue":d[7]||(d[7]=p=>l(g).firstName=p),label:"First Name",rules:["requiredValidator"in c?c.requiredValidator:l(A)],placeholder:"Leonard"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(x,{modelValue:l(g).lastName,"onUpdate:modelValue":d[8]||(d[8]=p=>l(g).lastName=p),label:"Last Name",rules:["requiredValidator"in c?c.requiredValidator:l(A)],placeholder:"Carter"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(Z,{modelValue:l(g).country,"onUpdate:modelValue":d[9]||(d[9]=p=>l(g).country=p),label:"Country",rules:["requiredValidator"in c?c.requiredValidator:l(A)],placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(Z,{modelValue:l(g).language,"onUpdate:modelValue":d[10]||(d[10]=p=>l(g).language=p),label:"Language",rules:["requiredValidator"in c?c.requiredValidator:l(A)],placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12"},{default:a(()=>[r("div",nl,[e(v,{color:"secondary",variant:"tonal",onClick:d[11]||(d[11]=p=>m.value--)},{default:a(()=>[e(k,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),d[29]||(d[29]=C(" Previous "))]),_:1,__:[29]}),e(v,{type:"submit"},{default:a(()=>[d[30]||(d[30]=C(" Next ")),e(k,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1,__:[30]})])]),_:1})]),_:1})]),_:1},512)]),_:1}),e(S,null,{default:a(()=>[e(l(N),{ref_key:"refAddressForm",ref:T,onSubmit:E(ee,["prevent"])},{default:a(()=>[e(h,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>d[31]||(d[31]=[r("h6",{class:"text-h6 font-weight-medium"}," Address ",-1),r("p",{class:"mb-0"}," Enter Your Address. ",-1)])),_:1,__:[31]}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(x,{modelValue:l(F).address,"onUpdate:modelValue":d[12]||(d[12]=p=>l(F).address=p),rules:["requiredValidator"in c?c.requiredValidator:l(A)],placeholder:"98 Borough bridge Road, Birmingham",label:"Address"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(x,{modelValue:l(F).landmark,"onUpdate:modelValue":d[13]||(d[13]=p=>l(F).landmark=p),rules:["requiredValidator"in c?c.requiredValidator:l(A)],placeholder:"Borough bridge",label:"Landmark"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(x,{modelValue:l(F).pincode,"onUpdate:modelValue":d[14]||(d[14]=p=>l(F).pincode=p),rules:["requiredValidator"in c?c.requiredValidator:l(A)],placeholder:"658921",label:"Pincode",type:"number"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(x,{modelValue:l(F).city,"onUpdate:modelValue":d[15]||(d[15]=p=>l(F).city=p),rules:["requiredValidator"in c?c.requiredValidator:l(A)],placeholder:"New York",label:"City"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12"},{default:a(()=>[r("div",ml,[e(v,{color:"secondary",variant:"tonal",onClick:d[16]||(d[16]=p=>m.value--)},{default:a(()=>[e(k,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),d[32]||(d[32]=C(" Previous "))]),_:1,__:[32]}),e(v,{type:"submit"},{default:a(()=>[d[33]||(d[33]=C(" Next ")),e(k,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1,__:[33]})])]),_:1})]),_:1})]),_:1},512)]),_:1}),e(S,null,{default:a(()=>[e(l(N),{ref_key:"refSocialLinkForm",ref:o,onSubmit:E(le,["prevent"])},{default:a(()=>[e(h,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>d[34]||(d[34]=[r("h6",{class:"text-h6 font-weight-medium"}," Social Links ",-1),r("p",{class:"mb-0"}," Add Social Links ",-1)])),_:1,__:[34]}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(x,{modelValue:l(s).twitter,"onUpdate:modelValue":d[17]||(d[17]=p=>l(s).twitter=p),placeholder:"https://twitter.com/abc",rules:["requiredValidator"in c?c.requiredValidator:l(A),"urlValidator"in c?c.urlValidator:l(G)],label:"Twitter"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(x,{modelValue:l(s).facebook,"onUpdate:modelValue":d[18]||(d[18]=p=>l(s).facebook=p),placeholder:"https://facebook.com/abc",rules:["requiredValidator"in c?c.requiredValidator:l(A),"urlValidator"in c?c.urlValidator:l(G)],label:"Facebook"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(x,{modelValue:l(s).googlePlus,"onUpdate:modelValue":d[19]||(d[19]=p=>l(s).googlePlus=p),placeholder:"https://plus.google.com/abc",rules:["requiredValidator"in c?c.requiredValidator:l(A),"urlValidator"in c?c.urlValidator:l(G)],label:"Google+"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(x,{modelValue:l(s).linkedIn,"onUpdate:modelValue":d[20]||(d[20]=p=>l(s).linkedIn=p),placeholder:"https://linkedin.com/abc",rules:["requiredValidator"in c?c.requiredValidator:l(A),"urlValidator"in c?c.urlValidator:l(G)],label:"LinkedIn"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12"},{default:a(()=>[r("div",cl,[e(v,{color:"secondary",variant:"tonal",onClick:d[21]||(d[21]=p=>m.value--)},{default:a(()=>[e(k,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),d[35]||(d[35]=C(" Previous "))]),_:1,__:[35]}),e(v,{type:"submit"},{default:a(()=>[d[36]||(d[36]=C(" Next ")),e(k,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1,__:[36]})])]),_:1})]),_:1})]),_:1},512)]),_:1}),e(S,null,{default:a(()=>[r("div",pl,[d[37]||(d[37]=r("h6",{class:"text-base font-weight-medium mb-2"}," Account ",-1)),r("p",ul,u(l(n).username),1),r("p",Vl,u(l(n).email),1),e(P,{class:"my-4"}),d[38]||(d[38]=r("h6",{class:"text-base font-weight-medium mb-2"}," Personal Info ",-1)),r("p",fl,u(l(g).firstName),1),r("p",bl,u(l(g).lastName),1),r("p",wl,u(l(g).country),1),r("p",gl,u(l(g).language),1),e(P,{class:"my-4"}),d[39]||(d[39]=r("h6",{class:"text-base font-weight-medium mb-2"}," Address ",-1)),r("p",vl,u(l(F).address),1),r("p",Cl,u(l(F).landmark),1),r("p",hl,u(l(F).pincode),1),r("p",Sl,u(l(F).city),1),e(P,{class:"my-4"}),d[40]||(d[40]=r("h6",{class:"text-base font-weight-medium mb-2"}," Social Links ",-1)),r("p",yl,u(l(s).twitter),1),r("p",kl,u(l(s).facebook),1),r("p",Al,u(l(s).googlePlus),1),r("p",xl,u(l(s).linkedIn),1)]),e(i,{cols:"12"},{default:a(()=>[r("div",Fl,[e(v,{color:"secondary",variant:"tonal",disabled:l(m)===0,onClick:d[22]||(d[22]=p=>m.value--)},{default:a(()=>[e(k,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),d[41]||(d[41]=C(" Previous "))]),_:1,__:[41]},8,["disabled"]),e(v,{color:"success",onClick:d[23]||(d[23]=p=>console.log("Form Submitted"))},{default:a(()=>d[42]||(d[42]=[C(" submit ")])),_:1,__:[42]})])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}}},Dl={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},Il={__name:"DemoFormWizardIconsVertical",setup(I){const f=[{title:"Account Details",icon:"tabler-file-description",subtitle:"Setup account details"},{title:"Personal Info",icon:"tabler-user",subtitle:"Add personal info"},{title:"Social Links",icon:"tabler-link",subtitle:"Add social links"}],m=b(0),V=b(!1),w=b(!1),t=b({username:"",email:"",password:"",cPassword:"",firstName:"",lastName:"",country:void 0,language:void 0,twitter:"",facebook:"",googlePlus:"",linkedIn:""}),L=()=>{console.log(t.value)};return(_,o)=>{const T=q,n=R,g=z;return y(),D(j,null,{default:a(()=>[e(h,null,{default:a(()=>[e(i,{cols:"12",md:"4",class:te(_.$vuetify.display.smAndDown?"border-b":"border-e")},{default:a(()=>[e(B,null,{default:a(()=>[e(T,{"current-step":l(m),"onUpdate:currentStep":o[0]||(o[0]=s=>W(m)?m.value=s:null),direction:"vertical",items:f,"icon-size":"24",class:"stepper-icon-step-bg"},null,8,["current-step"])]),_:1})]),_:1},8,["class"]),e(i,{cols:"12",md:"8"},{default:a(()=>[e(B,null,{default:a(()=>[e(N,null,{default:a(()=>[e($,{modelValue:l(m),"onUpdate:modelValue":o[15]||(o[15]=s=>W(m)?m.value=s:null),class:"disable-tab-transition"},{default:a(()=>[e(S,null,{default:a(()=>[e(h,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>o[18]||(o[18]=[r("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),r("p",{class:"mb-0"}," Enter your Account Details ",-1)])),_:1,__:[18]}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).username,"onUpdate:modelValue":o[1]||(o[1]=s=>l(t).username=s),placeholder:"CarterLeonardo",label:"Username"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).email,"onUpdate:modelValue":o[2]||(o[2]=s=>l(t).email=s),placeholder:"carterleonardo@gmail.com",label:"Email"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).password,"onUpdate:modelValue":o[3]||(o[3]=s=>l(t).password=s),label:"Password",placeholder:"············",type:l(V)?"text":"password",autocomplete:"password","append-inner-icon":l(V)?"tabler-eye-off":"tabler-eye","onClick:appendInner":o[4]||(o[4]=s=>V.value=!l(V))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).cPassword,"onUpdate:modelValue":o[5]||(o[5]=s=>l(t).cPassword=s),label:"Confirm Password",autocomplete:"confirm-password",placeholder:"············",type:l(w)?"text":"password","append-inner-icon":l(w)?"tabler-eye-off":"tabler-eye","onClick:appendInner":o[6]||(o[6]=s=>w.value=!l(w))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:a(()=>[e(h,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>o[19]||(o[19]=[r("h6",{class:"text-h6 font-weight-medium"}," Personal Info ",-1),r("p",{class:"mb-0"}," Setup Information ",-1)])),_:1,__:[19]}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).firstName,"onUpdate:modelValue":o[7]||(o[7]=s=>l(t).firstName=s),label:"First Name",placeholder:"Leonard"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).lastName,"onUpdate:modelValue":o[8]||(o[8]=s=>l(t).lastName=s),label:"Last Name",placeholder:"Carter"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(g,{modelValue:l(t).country,"onUpdate:modelValue":o[9]||(o[9]=s=>l(t).country=s),label:"Country",placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(g,{modelValue:l(t).language,"onUpdate:modelValue":o[10]||(o[10]=s=>l(t).language=s),label:"Language",placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:a(()=>[e(h,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>o[20]||(o[20]=[r("h6",{class:"text-h6 font-weight-medium"}," Social Links ",-1),r("p",{class:"mb-0"}," Add Social Links ",-1)])),_:1,__:[20]}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).twitter,"onUpdate:modelValue":o[11]||(o[11]=s=>l(t).twitter=s),placeholder:"https://twitter.com/abc",label:"Twitter"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).facebook,"onUpdate:modelValue":o[12]||(o[12]=s=>l(t).facebook=s),placeholder:"https://facebook.com/abc",label:"Facebook"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).googlePlus,"onUpdate:modelValue":o[13]||(o[13]=s=>l(t).googlePlus=s),placeholder:"https://plus.google.com/abc",label:"Google+"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(t).linkedIn,"onUpdate:modelValue":o[14]||(o[14]=s=>l(t).linkedIn=s),placeholder:"https://linkedin.com/abc",label:"LinkedIn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),r("div",Dl,[e(v,{color:"secondary",variant:"tonal",disabled:l(m)===0,onClick:o[16]||(o[16]=s=>m.value--)},{default:a(()=>[e(k,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),o[21]||(o[21]=C(" Previous "))]),_:1,__:[21]},8,["disabled"]),f.length-1===l(m)?(y(),D(v,{key:0,color:"success",onClick:L},{default:a(()=>o[22]||(o[22]=[C(" submit ")])),_:1,__:[22]})):(y(),D(v,{key:1,onClick:o[17]||(o[17]=s=>m.value++)},{default:a(()=>[o[23]||(o[23]=C(" Next ")),e(k,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1,__:[23]}))])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},wo={__name:"form-wizard-icons",setup(I){return(f,m)=>{const V=se,w=ce;return y(),U(O,null,[e(h,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(V,{variant:"outlined",title:"Basic",code:l(pe)},{default:a(()=>[e(Ee)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(V,{variant:"outlined",title:"Validation",code:l(fe)},{default:a(()=>[e(Pl)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(V,{variant:"outlined",title:"Vertical",code:l(be)},{default:a(()=>[e(Il)]),_:1},8,["code"])]),_:1})]),_:1}),e(P,{class:"my-10 mx-n6"}),m[0]||(m[0]=r("h3",{class:"text-h3 my-4"}," Modern ",-1)),e(h,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(V,{variant:"outlined",title:"Modern basic",code:l(ue)},{default:a(()=>[e(il)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(V,{variant:"outlined",title:"Modern Vertical",code:l(Ve)},{default:a(()=>[e(w)]),_:1},8,["code"])]),_:1})]),_:1})],64)}}};export{wo as default};
