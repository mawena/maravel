<script setup>
import {
  basic,
  modernBasic,
  modernVertical,
  validation,
  vertical,
} from '@/views/demos/forms/form-wizard/form-wizard-icons/demoCodeFormWizardIcons'
import DemoFormWizardIconsBasic from '@/views/demos/forms/form-wizard/form-wizard-icons/DemoFormWizardIconsBasic.vue'
import DemoFormWizardIconsModernBasic from '@/views/demos/forms/form-wizard/form-wizard-icons/DemoFormWizardIconsModernBasic.vue'
import DemoFormWizardIconsValidation from '@/views/demos/forms/form-wizard/form-wizard-icons/DemoFormWizardIconsValidation.vue'
import DemoFormWizardIconsVertical from '@/views/demos/forms/form-wizard/form-wizard-icons/DemoFormWizardIconsVertical.vue'
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
        <DemoFormWizardIconsBasic />
      </AppCardCode>
    </VCol>

    <!-- 👉 Validation -->
    <VCol cols="12">
      <AppCardCode
        variant="outlined"
        title="Validation"
        :code="validation"
      >
        <DemoFormWizardIconsValidation />
      </AppCardCode>
    </VCol>

    <!-- 👉 Vertical -->
    <VCol cols="12">
      <AppCardCode
        variant="outlined"
        title="Vertical"
        :code="vertical"
      >
        <DemoFormWizardIconsVertical />
      </AppCardCode>
    </VCol>
  </VRow>

  <VDivider class="my-10 mx-n6" />
  <h3 class="text-h3 my-4">
    Modern
  </h3>

  <VRow>
    <!-- 👉 Modern Basic -->
    <VCol cols="12">
      <AppCardCode
        variant="outlined"
        title="Modern basic"
        :code="modernBasic"
      >
        <DemoFormWizardIconsModernBasic />
      </AppCardCode>
    </VCol>

    <!-- 👉 Modern Vertical -->
    <VCol cols="12">
      <AppCardCode
        variant="outlined"
        title="Modern Vertical"
        :code="modernVertical"
      >
        <DemoFormWizardIconsModernVertical />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
