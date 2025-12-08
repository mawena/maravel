<script setup>
import {
  basic,
  clearable,
  density,
  multiple,
  noDataWithChips,
  variant,
} from '@/views/demos/forms/form-elements/combobox/demoCodeCombobox'
</script>

<template>
  <VRow class="match-height">
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 Basic -->
      <AppCardCode
        title="Basic"
        :code="basic"
      >
        <p>With Combobox, you can allow a user to create new values that may not be present in a provided items list.</p>

        <DemoComboboxBasic />
      </AppCardCode>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 Density -->
      <AppCardCode
        title="Density"
        :code="density"
      >
        <p>
          You can use <code>Density</code> prop to reduce combobox height and lower max height of list items. Available options are: <code>default</code>, <code>comfortable</code>, and <code>compact</code>.
        </p>

        <DemoComboboxDensity />
      </AppCardCode>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 Variant -->
      <AppCardCode
        title="Variant"
        :code="variant"
      >
        <p>Use <code>solo</code>, <code>outlined</code>, <code>underlined</code>, <code>filled</code> and <code>plain</code> options of <code>variant</code> prop to change the look of combobox. </p>

        <DemoComboboxVariant />
      </AppCardCode>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 Multiple -->
      <AppCardCode
        title="Multiple"
        :code="multiple"
      >
        <p>Previously known as tags - user is allowed to enter more than 1 value</p>

        <DemoComboboxMultiple />
      </AppCardCode>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 No data with chips -->
      <AppCardCode
        title="No data with chips"
        :code="noDataWithChips"
      >
        <p>Previously known as tags - user is allowed to enter more than 1 value</p>

        <DemoComboboxNoDataWithChips />
      </AppCardCode>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 Clearable -->

      <AppCardCode
        title="Clearable"
        :code="clearable"
      >
        <p>Use <code>clearable</code> prop to clear combobox.</p>

        <DemoComboboxClearable />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
