import{_ as H}from"./AppCardCode-CUjMQLDl.js";import{_ as U}from"./AppSelect-B8s5BIHD.js";import{_ as W}from"./AppTextField-2IS70PnL.js";import{_ as R}from"./AppStepper-DhECtmfK.js";import{V as D}from"./VCardText-DYTBPo8J.js";import{V as E}from"./VDivider-CIpTZ8Ni.js";import{V as T}from"./VForm-Bx7ooBF6.js";import{V as B,a as S}from"./VWindowItem-D3zVc_00.js";import{V as C,a as r}from"./VRow-GpmvwSSA.js";import{r as V,f as F,o as k,e as t,b as e,aU as I,l as o,d as u,af as v,s as g,Z as y,c as $,F as K,a_ as j,v as J}from"./main-7JdyGFby.js";import{V as _}from"./VCard-D0LXqtBI.js";import{r as P,e as O,p as Q,d as X,u as q}from"./validators-DpYrMFzk.js";import"./vue3-perfect-scrollbar-BTKqCwUF.js";import"./form-BuGlugVy.js";import"./VSelect-bXJTNHr2.js";import"./VTextField-DdAXD61i.js";/* empty css                   */import"./VCounter-muzn6vBk.js";import"./VImg-Bk3huQTU.js";import"./VField-Cnag0GiO.js";import"./easing-Bybner-F.js";import"./VInput-U8KQD51r.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-BD6Dg9I8.js";import"./ssrBoot-CA1KQA2w.js";import"./VAvatar-sg7CZdU7.js";import"./dialog-transition-B9GC1vyq.js";import"./VMenu-D3AJz5Bm.js";import"./VOverlay-BMzCYiWA.js";import"./delay-9Hi4eTuF.js";import"./lazy-cOdXnimE.js";import"./scopeId-j0VLF_1N.js";import"./VCheckboxBtn-CBQDHvrp.js";import"./VSelectionControl-lb_mBfMr.js";import"./VChip-C72F9fhC.js";import"./VSlideGroup-B-2l8qWb.js";import"./VSlideGroupItem-C5e019Ze.js";/* empty css              */import"./helpers-DK5QwNv0.js";const Y={ts:`<script setup lang="ts">
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
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
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="numberedSteps"
        class="stepper-icon-step-bg"
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
</template>
`,js:`<script setup>
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
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
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="numberedSteps"
        class="stepper-icon-step-bg"
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
</template>
`},ee={ts:`<script setup lang="ts">
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
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
  <!-- 👉 Stepper -->
  <div class="mb-6">
    <AppStepper
      v-model:current-step="currentStep"
      align="start"
      :items="numberedSteps"
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
</template>
`,js:`<script setup>
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
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
  <!-- 👉 Stepper -->
  <div class="mb-6">
    <AppStepper
      v-model:current-step="currentStep"
      align="start"
      :items="numberedSteps"
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
</template>
`},le={ts:`<script setup lang="ts">
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
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
      <AppStepper
        v-model:current-step="currentStep"
        direction="vertical"
        :items="numberedSteps"
      />
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
                      placeholder="············"
                      label="Password"
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
                      placeholder="············"
                      label="Confirm Password"
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
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
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
      <AppStepper
        v-model:current-step="currentStep"
        direction="vertical"
        :items="numberedSteps"
      />
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
                      placeholder="············"
                      label="Password"
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
                      placeholder="············"
                      label="Confirm Password"
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
`},oe={ts:`<script setup lang="ts">
import { VForm } from 'vuetify/components/VForm'

const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
const isCurrentStepValid = ref(true)
const refAccountForm = ref<VForm>()
const refPersonalForm = ref<VForm>()
const refSocialLinkForm = ref<VForm>()

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

const validateSocialLinkForm = () => {
  refSocialLinkForm.value?.validate().then(valid => {
    if (valid.valid) {
      isCurrentStepValid.value = true

      console.log({
        ...accountForm.value,
        ...personalForm.value,
        ...socialForm.value,
      })
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
        :items="numberedSteps"
        :is-active-step-valid="isCurrentStepValid"
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
                  label="Password"
                  placeholder="············"
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
                  label="Confirm Password"
                  autocomplete="confirm-password"
                  placeholder="············"
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
                  placeholder="https://likedin.com/abc"
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

                  <VBtn
                    color="success"
                    type="submit"
                  >
                    submit
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
import { VForm } from 'vuetify/components/VForm'

const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
const isCurrentStepValid = ref(true)
const refAccountForm = ref()
const refPersonalForm = ref()
const refSocialLinkForm = ref()

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

const validateSocialLinkForm = () => {
  refSocialLinkForm.value?.validate().then(valid => {
    if (valid.valid) {
      isCurrentStepValid.value = true
      console.log({
        ...accountForm.value,
        ...personalForm.value,
        ...socialForm.value,
      })
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
        :items="numberedSteps"
        :is-active-step-valid="isCurrentStepValid"
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
                  label="Password"
                  placeholder="············"
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
                  label="Confirm Password"
                  autocomplete="confirm-password"
                  placeholder="············"
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
                  placeholder="https://likedin.com/abc"
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

                  <VBtn
                    color="success"
                    type="submit"
                  >
                    submit
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},te={ts:`<script setup lang="ts">
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
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
                      placeholder="············"
                      label="Password"
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
                      placeholder="············"
                      label="Confirm Password"
                      autocomplete="confirm-password"
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
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
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
                      placeholder="············"
                      label="Password"
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
                      placeholder="············"
                      label="Confirm Password"
                      autocomplete="confirm-password"
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
`},ae={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},se={__name:"DemoFormWizardNumberedBasic",setup(N){const A=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],n=V(0),c=V(!1),f=V(!1),s=V({username:"",email:"",password:"",cPassword:"",firstName:"",lastName:"",country:void 0,language:void 0,twitter:"",facebook:"",googlePlus:"",linkedIn:""}),h=()=>{console.log(s.value)};return(L,l)=>{const w=R,d=W,b=U;return k(),F(_,null,{default:t(()=>[e(D,null,{default:t(()=>[e(w,{"current-step":o(n),"onUpdate:currentStep":l[0]||(l[0]=a=>I(n)?n.value=a:null),items:A,class:"stepper-icon-step-bg"},null,8,["current-step"])]),_:1}),e(E),e(D,null,{default:t(()=>[e(T,null,{default:t(()=>[e(B,{modelValue:o(n),"onUpdate:modelValue":l[15]||(l[15]=a=>I(n)?n.value=a:null),class:"disable-tab-transition"},{default:t(()=>[e(S,null,{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>l[18]||(l[18]=[u("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),u("p",{class:"mb-0"}," Enter your Account Details ",-1)])),_:1,__:[18]}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).username,"onUpdate:modelValue":l[1]||(l[1]=a=>o(s).username=a),placeholder:"CarterLeonardo",label:"Username"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).email,"onUpdate:modelValue":l[2]||(l[2]=a=>o(s).email=a),placeholder:"carterleonardo@gmail.com",label:"Email"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).password,"onUpdate:modelValue":l[3]||(l[3]=a=>o(s).password=a),label:"Password",placeholder:"············",type:o(c)?"text":"password",autocomplete:"password","append-inner-icon":o(c)?"tabler-eye-off":"tabler-eye","onClick:appendInner":l[4]||(l[4]=a=>c.value=!o(c))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).cPassword,"onUpdate:modelValue":l[5]||(l[5]=a=>o(s).cPassword=a),label:"Confirm Password",autocomplete:"confirm-password",placeholder:"············",type:o(f)?"text":"password","append-inner-icon":o(f)?"tabler-eye-off":"tabler-eye","onClick:appendInner":l[6]||(l[6]=a=>f.value=!o(f))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>l[19]||(l[19]=[u("h6",{class:"text-h6 font-weight-medium"}," Personal Info ",-1),u("p",{class:"mb-0"}," Setup Information ",-1)])),_:1,__:[19]}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).firstName,"onUpdate:modelValue":l[7]||(l[7]=a=>o(s).firstName=a),label:"First Name",placeholder:"Leonard"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).lastName,"onUpdate:modelValue":l[8]||(l[8]=a=>o(s).lastName=a),label:"Last Name",placeholder:"Carter"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(b,{modelValue:o(s).country,"onUpdate:modelValue":l[9]||(l[9]=a=>o(s).country=a),label:"Country",placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(b,{modelValue:o(s).language,"onUpdate:modelValue":l[10]||(l[10]=a=>o(s).language=a),label:"Language",placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>l[20]||(l[20]=[u("h6",{class:"text-h6 font-weight-medium"}," Social Links ",-1),u("p",{class:"mb-0"}," Add Social Links ",-1)])),_:1,__:[20]}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).twitter,"onUpdate:modelValue":l[11]||(l[11]=a=>o(s).twitter=a),placeholder:"https://twitter.com/abc",label:"Twitter"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).facebook,"onUpdate:modelValue":l[12]||(l[12]=a=>o(s).facebook=a),placeholder:"https://facebook.com/abc",label:"Facebook"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).googlePlus,"onUpdate:modelValue":l[13]||(l[13]=a=>o(s).googlePlus=a),placeholder:"https://plus.google.com/abc",label:"Google+"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).linkedIn,"onUpdate:modelValue":l[14]||(l[14]=a=>o(s).linkedIn=a),placeholder:"https://linkedin.com/abc",label:"LinkedIn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),u("div",ae,[e(v,{color:"secondary",variant:"tonal",disabled:o(n)===0,onClick:l[16]||(l[16]=a=>n.value--)},{default:t(()=>[e(y,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),l[21]||(l[21]=g(" Previous "))]),_:1,__:[21]},8,["disabled"]),A.length-1===o(n)?(k(),F(v,{key:0,color:"success",onClick:h},{default:t(()=>l[22]||(l[22]=[g(" submit ")])),_:1,__:[22]})):(k(),F(v,{key:1,onClick:l[17]||(l[17]=a=>n.value++)},{default:t(()=>[l[23]||(l[23]=g(" Next ")),e(y,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1,__:[23]}))])]),_:1})]),_:1})]),_:1})}}},re={class:"mb-6"},ie={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},ne={__name:"DemoFormWizardNumberedModernBasic",setup(N){const A=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],n=V(0),c=V(!1),f=V(!1),s=V({username:"",email:"",password:"",cPassword:"",firstName:"",lastName:"",country:void 0,language:void 0,twitter:"",facebook:"",googlePlus:"",linkedIn:""}),h=()=>{console.log(s.value)};return(L,l)=>{const w=R,d=W,b=U;return k(),$(K,null,[u("div",re,[e(w,{"current-step":o(n),"onUpdate:currentStep":l[0]||(l[0]=a=>I(n)?n.value=a:null),align:"start",items:A},null,8,["current-step"])]),e(_,null,{default:t(()=>[e(D,null,{default:t(()=>[e(T,null,{default:t(()=>[e(B,{modelValue:o(n),"onUpdate:modelValue":l[15]||(l[15]=a=>I(n)?n.value=a:null),class:"disable-tab-transition"},{default:t(()=>[e(S,null,{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>l[18]||(l[18]=[u("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),u("p",{class:"mb-0"}," Enter your Account Details ",-1)])),_:1,__:[18]}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).username,"onUpdate:modelValue":l[1]||(l[1]=a=>o(s).username=a),placeholder:"CarterLeonardo",label:"Username"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).email,"onUpdate:modelValue":l[2]||(l[2]=a=>o(s).email=a),placeholder:"carterleonardo@gmail.com",label:"Email"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).password,"onUpdate:modelValue":l[3]||(l[3]=a=>o(s).password=a),label:"Password",placeholder:"············",type:o(c)?"text":"password","append-inner-icon":o(c)?"tabler-eye-off":"tabler-eye","onClick:appendInner":l[4]||(l[4]=a=>c.value=!o(c))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).cPassword,"onUpdate:modelValue":l[5]||(l[5]=a=>o(s).cPassword=a),label:"Confirm Password",placeholder:"············",type:o(f)?"text":"password","append-inner-icon":o(f)?"tabler-eye-off":"tabler-eye","onClick:appendInner":l[6]||(l[6]=a=>f.value=!o(f))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>l[19]||(l[19]=[u("h6",{class:"text-h6 font-weight-medium"}," Personal Info ",-1),u("p",{class:"mb-0"}," Setup Information ",-1)])),_:1,__:[19]}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).firstName,"onUpdate:modelValue":l[7]||(l[7]=a=>o(s).firstName=a),label:"First Name",placeholder:"Leonard"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).lastName,"onUpdate:modelValue":l[8]||(l[8]=a=>o(s).lastName=a),label:"Last Name",placeholder:"Carter"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(b,{modelValue:o(s).country,"onUpdate:modelValue":l[9]||(l[9]=a=>o(s).country=a),label:"Country",placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(b,{modelValue:o(s).language,"onUpdate:modelValue":l[10]||(l[10]=a=>o(s).language=a),label:"Language",placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>l[20]||(l[20]=[u("h6",{class:"text-h6 font-weight-medium"}," Social Links ",-1),u("p",{class:"mb-0"}," Add Social Links ",-1)])),_:1,__:[20]}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).twitter,"onUpdate:modelValue":l[11]||(l[11]=a=>o(s).twitter=a),placeholder:"https://twitter.com/abc",label:"Twitter"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).facebook,"onUpdate:modelValue":l[12]||(l[12]=a=>o(s).facebook=a),placeholder:"https://facebook.com/abc",label:"Facebook"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).googlePlus,"onUpdate:modelValue":l[13]||(l[13]=a=>o(s).googlePlus=a),placeholder:"https://plus.google.com/abc",label:"Google+"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).linkedIn,"onUpdate:modelValue":l[14]||(l[14]=a=>o(s).linkedIn=a),placeholder:"https://linkedin.com/abc",label:"LinkedIn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),u("div",ie,[e(v,{color:"secondary",variant:"tonal",disabled:o(n)===0,onClick:l[16]||(l[16]=a=>n.value--)},{default:t(()=>[e(y,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),l[21]||(l[21]=g(" Previous "))]),_:1,__:[21]},8,["disabled"]),A.length-1===o(n)?(k(),F(v,{key:0,color:"success",onClick:h},{default:t(()=>l[22]||(l[22]=[g(" submit ")])),_:1,__:[22]})):(k(),F(v,{key:1,onClick:l[17]||(l[17]=a=>n.value++)},{default:t(()=>[l[23]||(l[23]=g(" Next ")),e(y,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1,__:[23]}))])]),_:1})]),_:1})]),_:1})],64)}}},de={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},me={__name:"DemoFormWizardNumberedModernVertical",setup(N){const A=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],n=V(0),c=V(!1),f=V(!1),s=V({username:"",email:"",password:"",cPassword:"",firstName:"",lastName:"",country:void 0,language:void 0,twitter:"",facebook:"",googlePlus:"",linkedIn:""}),h=()=>{console.log(s.value)};return(L,l)=>{const w=R,d=W,b=U;return k(),F(C,null,{default:t(()=>[e(r,{cols:"12",md:"4"},{default:t(()=>[e(w,{"current-step":o(n),"onUpdate:currentStep":l[0]||(l[0]=a=>I(n)?n.value=a:null),direction:"vertical",items:A},null,8,["current-step"])]),_:1}),e(r,{cols:"12",md:"8"},{default:t(()=>[e(_,null,{default:t(()=>[e(D,null,{default:t(()=>[e(T,null,{default:t(()=>[e(B,{modelValue:o(n),"onUpdate:modelValue":l[15]||(l[15]=a=>I(n)?n.value=a:null),class:"disable-tab-transition"},{default:t(()=>[e(S,null,{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>l[18]||(l[18]=[u("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),u("p",{class:"mb-0"}," Enter your Account Details ",-1)])),_:1,__:[18]}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).username,"onUpdate:modelValue":l[1]||(l[1]=a=>o(s).username=a),placeholder:"CarterLeonardo",label:"Username"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).email,"onUpdate:modelValue":l[2]||(l[2]=a=>o(s).email=a),placeholder:"carterleonardo@gmail.com",label:"Email"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).password,"onUpdate:modelValue":l[3]||(l[3]=a=>o(s).password=a),placeholder:"············",label:"Password",type:o(c)?"text":"password","append-inner-icon":o(c)?"tabler-eye-off":"tabler-eye","onClick:appendInner":l[4]||(l[4]=a=>c.value=!o(c))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).cPassword,"onUpdate:modelValue":l[5]||(l[5]=a=>o(s).cPassword=a),placeholder:"············",label:"Confirm Password",type:o(f)?"text":"password","append-inner-icon":o(f)?"tabler-eye-off":"tabler-eye","onClick:appendInner":l[6]||(l[6]=a=>f.value=!o(f))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>l[19]||(l[19]=[u("h6",{class:"text-h6 font-weight-medium"}," Personal Info ",-1),u("p",{class:"mb-0"}," Setup Information ",-1)])),_:1,__:[19]}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).firstName,"onUpdate:modelValue":l[7]||(l[7]=a=>o(s).firstName=a),label:"First Name",placeholder:"Leonard"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).lastName,"onUpdate:modelValue":l[8]||(l[8]=a=>o(s).lastName=a),label:"Last Name",placeholder:"Carter"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(b,{modelValue:o(s).country,"onUpdate:modelValue":l[9]||(l[9]=a=>o(s).country=a),label:"Country",placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(b,{modelValue:o(s).language,"onUpdate:modelValue":l[10]||(l[10]=a=>o(s).language=a),label:"Language",placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>l[20]||(l[20]=[u("h6",{class:"text-h6 font-weight-medium"}," Social Links ",-1),u("p",{class:"mb-0"}," Add Social Links ",-1)])),_:1,__:[20]}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).twitter,"onUpdate:modelValue":l[11]||(l[11]=a=>o(s).twitter=a),placeholder:"https://twitter.com/abc",label:"Twitter"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).facebook,"onUpdate:modelValue":l[12]||(l[12]=a=>o(s).facebook=a),placeholder:"https://facebook.com/abc",label:"Facebook"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).googlePlus,"onUpdate:modelValue":l[13]||(l[13]=a=>o(s).googlePlus=a),placeholder:"https://plus.google.com/abc",label:"Google+"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).linkedIn,"onUpdate:modelValue":l[14]||(l[14]=a=>o(s).linkedIn=a),placeholder:"https://linkedin.com/abc",label:"LinkedIn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),u("div",de,[e(v,{color:"secondary",variant:"tonal",disabled:o(n)===0,onClick:l[16]||(l[16]=a=>n.value--)},{default:t(()=>[e(y,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),l[21]||(l[21]=g(" Previous "))]),_:1,__:[21]},8,["disabled"]),A.length-1===o(n)?(k(),F(v,{key:0,color:"success",onClick:h},{default:t(()=>l[22]||(l[22]=[g(" submit ")])),_:1,__:[22]})):(k(),F(v,{key:1,onClick:l[17]||(l[17]=a=>n.value++)},{default:t(()=>[l[23]||(l[23]=g(" Next ")),e(y,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1,__:[23]}))])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},ue={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},pe={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},ce={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},Ve={__name:"DemoFormWizardNumberedValidation",setup(N){const A=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],n=V(0),c=V(!1),f=V(!1),s=V(!0),h=V(),L=V(),l=V(),w=V({username:"",email:"",password:"",cPassword:""}),d=V({firstName:"",lastName:"",country:void 0,language:void 0}),b=V({twitter:"",facebook:"",googlePlus:"",linkedIn:""}),a=()=>{var m;(m=h.value)==null||m.validate().then(i=>{i.valid?(n.value++,s.value=!0):s.value=!1})},z=()=>{var m;(m=L.value)==null||m.validate().then(i=>{i.valid?(n.value++,s.value=!0):s.value=!1})},M=()=>{var m;(m=l.value)==null||m.validate().then(i=>{i.valid?(s.value=!0,console.log({...w.value,...d.value,...b.value})):s.value=!1})};return(m,i)=>{const Z=R,x=W,G=U;return k(),F(_,null,{default:t(()=>[e(D,null,{default:t(()=>[e(Z,{"current-step":o(n),"onUpdate:currentStep":i[0]||(i[0]=p=>I(n)?n.value=p:null),items:A,"is-active-step-valid":o(s)},null,8,["current-step","is-active-step-valid"])]),_:1}),e(E),e(D,null,{default:t(()=>[e(B,{modelValue:o(n),"onUpdate:modelValue":i[17]||(i[17]=p=>I(n)?n.value=p:null),class:"disable-tab-transition"},{default:t(()=>[e(S,null,{default:t(()=>[e(o(T),{ref_key:"refAccountForm",ref:h,onSubmit:j(a,["prevent"])},{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>i[18]||(i[18]=[u("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),u("p",{class:"mb-0"}," Enter your Account Details ",-1)])),_:1,__:[18]}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(x,{modelValue:o(w).username,"onUpdate:modelValue":i[1]||(i[1]=p=>o(w).username=p),placeholder:"CarterLeonardo",rules:["requiredValidator"in m?m.requiredValidator:o(P)],label:"Username"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(x,{modelValue:o(w).email,"onUpdate:modelValue":i[2]||(i[2]=p=>o(w).email=p),placeholder:"carterleonardo@gmail.com",rules:["requiredValidator"in m?m.requiredValidator:o(P),"emailValidator"in m?m.emailValidator:o(O)],label:"Email"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(x,{modelValue:o(w).password,"onUpdate:modelValue":i[3]||(i[3]=p=>o(w).password=p),label:"Password",placeholder:"············",rules:["requiredValidator"in m?m.requiredValidator:o(P),"passwordValidator"in m?m.passwordValidator:o(Q)],type:o(c)?"text":"password",autocomplete:"password","append-inner-icon":o(c)?"tabler-eye-off":"tabler-eye","onClick:appendInner":i[4]||(i[4]=p=>c.value=!o(c))},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(x,{modelValue:o(w).cPassword,"onUpdate:modelValue":i[5]||(i[5]=p=>o(w).cPassword=p),label:"Confirm Password",autocomplete:"confirm-password",placeholder:"············",rules:["requiredValidator"in m?m.requiredValidator:o(P),("confirmedValidator"in m?m.confirmedValidator:o(X))(o(w).cPassword,o(w).password)],type:o(f)?"text":"password","append-inner-icon":o(f)?"tabler-eye-off":"tabler-eye","onClick:appendInner":i[6]||(i[6]=p=>f.value=!o(f))},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[u("div",ue,[e(v,{color:"secondary",variant:"tonal",disabled:""},{default:t(()=>[e(y,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),i[19]||(i[19]=g(" Previous "))]),_:1,__:[19]}),e(v,{type:"submit"},{default:t(()=>[i[20]||(i[20]=g(" Next ")),e(y,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1,__:[20]})])]),_:1})]),_:1})]),_:1},512)]),_:1}),e(S,null,{default:t(()=>[e(o(T),{ref_key:"refPersonalForm",ref:L,onSubmit:j(z,["prevent"])},{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>i[21]||(i[21]=[u("h6",{class:"text-h6 font-weight-medium"}," Personal Info ",-1),u("p",{class:"mb-0"}," Setup Information ",-1)])),_:1,__:[21]}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(x,{modelValue:o(d).firstName,"onUpdate:modelValue":i[7]||(i[7]=p=>o(d).firstName=p),label:"First Name",rules:["requiredValidator"in m?m.requiredValidator:o(P)],placeholder:"Leonard"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(x,{modelValue:o(d).lastName,"onUpdate:modelValue":i[8]||(i[8]=p=>o(d).lastName=p),label:"Last Name",rules:["requiredValidator"in m?m.requiredValidator:o(P)],placeholder:"Carter"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(G,{modelValue:o(d).country,"onUpdate:modelValue":i[9]||(i[9]=p=>o(d).country=p),label:"Country",rules:["requiredValidator"in m?m.requiredValidator:o(P)],placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(G,{modelValue:o(d).language,"onUpdate:modelValue":i[10]||(i[10]=p=>o(d).language=p),label:"Language",rules:["requiredValidator"in m?m.requiredValidator:o(P)],placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[u("div",pe,[e(v,{color:"secondary",variant:"tonal",onClick:i[11]||(i[11]=p=>n.value--)},{default:t(()=>[e(y,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),i[22]||(i[22]=g(" Previous "))]),_:1,__:[22]}),e(v,{type:"submit"},{default:t(()=>[i[23]||(i[23]=g(" Next ")),e(y,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1,__:[23]})])]),_:1})]),_:1})]),_:1},512)]),_:1}),e(S,null,{default:t(()=>[e(o(T),{ref_key:"refSocialLinkForm",ref:l,onSubmit:j(M,["prevent"])},{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>i[24]||(i[24]=[u("h6",{class:"text-h6 font-weight-medium"}," Social Links ",-1),u("p",{class:"mb-0"}," Add Social Links ",-1)])),_:1,__:[24]}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(x,{modelValue:o(b).twitter,"onUpdate:modelValue":i[12]||(i[12]=p=>o(b).twitter=p),placeholder:"https://twitter.com/abc",rules:["requiredValidator"in m?m.requiredValidator:o(P),"urlValidator"in m?m.urlValidator:o(q)],label:"Twitter"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(x,{modelValue:o(b).facebook,"onUpdate:modelValue":i[13]||(i[13]=p=>o(b).facebook=p),placeholder:"https://facebook.com/abc",rules:["requiredValidator"in m?m.requiredValidator:o(P),"urlValidator"in m?m.urlValidator:o(q)],label:"Facebook"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(x,{modelValue:o(b).googlePlus,"onUpdate:modelValue":i[14]||(i[14]=p=>o(b).googlePlus=p),placeholder:"https://plus.google.com/abc",rules:["requiredValidator"in m?m.requiredValidator:o(P),"urlValidator"in m?m.urlValidator:o(q)],label:"Google+"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(x,{modelValue:o(b).linkedIn,"onUpdate:modelValue":i[15]||(i[15]=p=>o(b).linkedIn=p),placeholder:"https://likedin.com/abc",rules:["requiredValidator"in m?m.requiredValidator:o(P),"urlValidator"in m?m.urlValidator:o(q)],label:"LinkedIn"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[u("div",ce,[e(v,{color:"secondary",variant:"tonal",onClick:i[16]||(i[16]=p=>n.value--)},{default:t(()=>[e(y,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),i[25]||(i[25]=g(" Previous "))]),_:1,__:[25]}),e(v,{color:"success",type:"submit"},{default:t(()=>i[26]||(i[26]=[g(" submit ")])),_:1,__:[26]})])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}}},fe={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},be={__name:"DemoFormWizardNumberedVertical",setup(N){const A=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],n=V(0),c=V(!1),f=V(!1),s=V({username:"",email:"",password:"",cPassword:"",firstName:"",lastName:"",country:void 0,language:void 0,twitter:"",facebook:"",googlePlus:"",linkedIn:""}),h=()=>{console.log(s.value)};return(L,l)=>{const w=R,d=W,b=U;return k(),F(_,null,{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12",md:"4",class:J(L.$vuetify.display.smAndDown?"border-b":"border-e")},{default:t(()=>[e(D,null,{default:t(()=>[e(w,{"current-step":o(n),"onUpdate:currentStep":l[0]||(l[0]=a=>I(n)?n.value=a:null),direction:"vertical",items:A},null,8,["current-step"])]),_:1})]),_:1},8,["class"]),e(r,{cols:"12",md:"8"},{default:t(()=>[e(D,null,{default:t(()=>[e(T,null,{default:t(()=>[e(B,{modelValue:o(n),"onUpdate:modelValue":l[15]||(l[15]=a=>I(n)?n.value=a:null),class:"disable-tab-transition"},{default:t(()=>[e(S,null,{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>l[18]||(l[18]=[u("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),u("p",{class:"mb-0"}," Enter your Account Details ",-1)])),_:1,__:[18]}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).username,"onUpdate:modelValue":l[1]||(l[1]=a=>o(s).username=a),placeholder:"CarterLeonardo",label:"Username"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).email,"onUpdate:modelValue":l[2]||(l[2]=a=>o(s).email=a),placeholder:"carterleonardo@gmail.com",label:"Email"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).password,"onUpdate:modelValue":l[3]||(l[3]=a=>o(s).password=a),placeholder:"············",label:"Password",type:o(c)?"text":"password",autocomplete:"password","append-inner-icon":o(c)?"tabler-eye-off":"tabler-eye","onClick:appendInner":l[4]||(l[4]=a=>c.value=!o(c))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).cPassword,"onUpdate:modelValue":l[5]||(l[5]=a=>o(s).cPassword=a),placeholder:"············",label:"Confirm Password",autocomplete:"confirm-password",type:o(f)?"text":"password","append-inner-icon":o(f)?"tabler-eye-off":"tabler-eye","onClick:appendInner":l[6]||(l[6]=a=>f.value=!o(f))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>l[19]||(l[19]=[u("h6",{class:"text-h6 font-weight-medium"}," Personal Info ",-1),u("p",{class:"mb-0"}," Setup Information ",-1)])),_:1,__:[19]}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).firstName,"onUpdate:modelValue":l[7]||(l[7]=a=>o(s).firstName=a),label:"First Name",placeholder:"Leonard"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).lastName,"onUpdate:modelValue":l[8]||(l[8]=a=>o(s).lastName=a),label:"Last Name",placeholder:"Carter"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(b,{modelValue:o(s).country,"onUpdate:modelValue":l[9]||(l[9]=a=>o(s).country=a),label:"Country",placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(b,{modelValue:o(s).language,"onUpdate:modelValue":l[10]||(l[10]=a=>o(s).language=a),label:"Language",placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>l[20]||(l[20]=[u("h6",{class:"text-h6 font-weight-medium"}," Social Links ",-1),u("p",{class:"mb-0"}," Add Social Links ",-1)])),_:1,__:[20]}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).twitter,"onUpdate:modelValue":l[11]||(l[11]=a=>o(s).twitter=a),placeholder:"https://twitter.com/abc",label:"Twitter"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).facebook,"onUpdate:modelValue":l[12]||(l[12]=a=>o(s).facebook=a),placeholder:"https://facebook.com/abc",label:"Facebook"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).googlePlus,"onUpdate:modelValue":l[13]||(l[13]=a=>o(s).googlePlus=a),placeholder:"https://plus.google.com/abc",label:"Google+"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(d,{modelValue:o(s).linkedIn,"onUpdate:modelValue":l[14]||(l[14]=a=>o(s).linkedIn=a),placeholder:"https://linkedin.com/abc",label:"LinkedIn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),u("div",fe,[e(v,{color:"secondary",variant:"tonal",disabled:o(n)===0,onClick:l[16]||(l[16]=a=>n.value--)},{default:t(()=>[e(y,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),l[21]||(l[21]=g(" Previous "))]),_:1,__:[21]},8,["disabled"]),A.length-1===o(n)?(k(),F(v,{key:0,color:"success",onClick:h},{default:t(()=>l[22]||(l[22]=[g(" submit ")])),_:1,__:[22]})):(k(),F(v,{key:1,onClick:l[17]||(l[17]=a=>n.value++)},{default:t(()=>[l[23]||(l[23]=g(" Next ")),e(y,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1,__:[23]}))])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},ol={__name:"form-wizard-numbered",setup(N){return(A,n)=>{const c=H;return k(),$(K,null,[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[e(c,{variant:"outlined",title:"Basic",code:o(Y)},{default:t(()=>[e(se)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(c,{variant:"outlined",title:"Validation",code:o(oe)},{default:t(()=>[e(Ve)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(c,{variant:"outlined",title:"Vertical",code:o(te)},{default:t(()=>[e(be)]),_:1},8,["code"])]),_:1})]),_:1}),e(E,{class:"my-10 mx-n6"}),n[0]||(n[0]=u("h3",{class:"text-h3 my-4"}," Modern ",-1)),e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[e(c,{variant:"outlined",title:"Modern Vertical",code:o(le)},{default:t(()=>[e(me)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(c,{variant:"outlined",title:"Modern Basic",code:o(ee)},{default:t(()=>[e(ne)]),_:1},8,["code"])]),_:1})]),_:1})],64)}}};export{ol as default};
