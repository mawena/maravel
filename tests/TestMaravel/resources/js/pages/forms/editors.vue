<script setup>
import {
  basicEditor,
  customEditor,
} from '@/views/demos/forms/form-elements/editor/demoCodeEditor'
</script>

<template>
  <VRow>
    <!-- 👉 Basic Editor  -->
    <VCol cols="12">
      <AppCardCode
        title="Basic Editor"
        :code="basicEditor"
      >
        <DemoEditorBasicEditor />
      </AppCardCode>
    </VCol>

    <VCol cols="12">
      <AppCardCode
        title="Custom Editor"
        :code="customEditor"
      >
        <DemoEditorCustomEditor />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
