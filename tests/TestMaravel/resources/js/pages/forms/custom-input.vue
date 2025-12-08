<script setup>
import {
  customCheckboxes,
  customCheckboxesWithIcon,
  customCheckboxesWithImage,
  customRadios,
  customRadiosWithIcon,
  customRadiosWithImage,
} from '@/views/demos/forms/form-elements/custom-input/demoCodeCustomInput'
</script>

<template>
  <VRow>
    <!-- 👉 Custom Radios -->
    <VCol
      cols="12"
      md="6"
    >
      <AppCardCode
        title="Custom Radios"
        :code="customRadios"
      >
        <DemoCustomInputCustomRadios />
      </AppCardCode>
    </VCol>

    <!-- 👉 Custom Checkboxes -->
    <VCol
      cols="12"
      md="6"
    >
      <AppCardCode
        title="Custom Checkboxes"
        :code="customCheckboxes"
      >
        <DemoCustomInputCustomCheckboxes />
      </AppCardCode>
    </VCol>

    <!-- 👉 Custom Radios With Icon -->
    <VCol
      cols="12"
      md="6"
    >
      <AppCardCode
        title="Custom Radios With Icon"
        :code="customRadiosWithIcon"
      >
        <DemoCustomInputCustomRadiosWithIcon />
      </AppCardCode>
    </VCol>

    <!-- 👉 Custom Checkboxes with icon -->
    <VCol
      cols="12"
      md="6"
    >
      <AppCardCode
        title="Custom Checkboxes With Icon"
        :code="customCheckboxesWithIcon"
      >
        <DemoCustomInputCustomCheckboxesWithIcon />
      </AppCardCode>
    </VCol>

    <!-- 👉 Custom Radios with image -->
    <VCol
      cols="12"
      md="6"
    >
      <AppCardCode
        title="Custom Radios With Image"
        :code="customRadiosWithImage"
      >
        <DemoCustomInputCustomRadiosWithImage />
      </AppCardCode>
    </VCol>

    <!-- 👉 Custom Checkboxes with Image -->
    <VCol
      cols="12"
      md="6"
    >
      <AppCardCode
        title="Custom Checkboxes With Image"
        :code="customCheckboxesWithImage"
      >
        <DemoCustomInputCustomCheckboxesWithImage />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
