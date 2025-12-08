<script setup>
import {
  simpleFormValidation,
  validatingMultipleRules,
  validationTypes,
} from '@/views/demos/forms/form-validation/demoCodeFormValidation'
</script>

<template>
  <VRow>
    <VCol cols="12">
      <!-- 👉 Simple Form Validation -->
      <AppCardCode
        title="Simple Form Validation"
        :code="simpleFormValidation"
      >
        <p>Use <code>Rules</code> prop to validate the input.</p>

        <DemoFormValidationSimpleFormValidation />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Validating Multiple Rules -->
      <AppCardCode
        title="Validating Multiple Rules"
        :code="validatingMultipleRules"
      >
        <DemoFormValidationValidatingMultipleRules />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Validation Types -->
      <AppCardCode
        title="Validation Types"
        :code="validationTypes"
      >
        <DemoFormValidationValidationTypes />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
