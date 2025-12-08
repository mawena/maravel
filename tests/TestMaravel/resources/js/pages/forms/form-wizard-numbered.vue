<script setup>
import {
  basic,
  modernBasic,
  modernVertical,
  validation,
  vertical,
} from '@/views/demos/forms/form-wizard/form-wizard-numbered/demoCodeFormWizardNumbered'
import DemoFormWizardNumberedBasic from '@/views/demos/forms/form-wizard/form-wizard-numbered/DemoFormWizardNumberedBasic.vue'
import DemoFormWizardNumberedModernBasic from '@/views/demos/forms/form-wizard/form-wizard-numbered/DemoFormWizardNumberedModernBasic.vue'
import DemoFormWizardNumberedModernVertical from '@/views/demos/forms/form-wizard/form-wizard-numbered/DemoFormWizardNumberedModernVertical.vue'
import DemoFormWizardNumberedValidation from '@/views/demos/forms/form-wizard/form-wizard-numbered/DemoFormWizardNumberedValidation.vue'
import DemoFormWizardNumberedVertical from '@/views/demos/forms/form-wizard/form-wizard-numbered/DemoFormWizardNumberedVertical.vue'
</script>

<template>
  <VRow>
    <!-- 👉 Basic -->
    <VCol cols="12">
      <AppCardCode
        variant="outlined"
        title="Basic"
        :code="basic"
      >
        <DemoFormWizardNumberedBasic />
      </AppCardCode>
    </VCol>

    <!-- 👉 Validation -->
    <VCol cols="12">
      <AppCardCode
        variant="outlined"
        title="Validation"
        :code="validation"
      >
        <DemoFormWizardNumberedValidation />
      </AppCardCode>
    </VCol>

    <!-- 👉 Vertical -->
    <VCol cols="12">
      <AppCardCode
        variant="outlined"
        title="Vertical"
        :code="vertical"
      >
        <DemoFormWizardNumberedVertical />
      </AppCardCode>
    </VCol>
  </VRow>

  <VDivider class="my-10 mx-n6" />
  <h3 class="text-h3 my-4">
    Modern
  </h3>

  <VRow>
    <!-- 👉 Modern Vertical -->
    <VCol cols="12">
      <AppCardCode
        variant="outlined"
        title="Modern Vertical"
        :code="modernVertical"
      >
        <DemoFormWizardNumberedModernVertical />
      </AppCardCode>
    </VCol>

    <!-- 👉Modern Basic -->
    <VCol cols="12">
      <AppCardCode
        variant="outlined"
        title="Modern Basic"
        :code="modernBasic"
      >
        <DemoFormWizardNumberedModernBasic />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
