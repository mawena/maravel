<script setup>
import {
  basic,
  form,
  fullscreen,
  loader,
  nesting,
  overflowed,
  persistent,
  scrollable,
} from '@/views/demos/components/dialog/demoCodeDialog'
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 Basic -->
      <AppCardCode
        title="Basic"
        :code="basic"
      >
        <p>A dialog contains two slots, one for its activator and one for its content (default). Good for Privacy Policies.</p>

        <DemoDialogBasic />
      </AppCardCode>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 Persistent -->
      <AppCardCode
        title="Persistent"
        :code="persistent"
      >
        <p>Use <code>persistent</code> prop to create persistent dialog.</p>

        <DemoDialogPersistent />
      </AppCardCode>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 Scrollable -->
      <AppCardCode
        title="Scrollable"
        :code="scrollable"
      >
        <p>Use <code>scrollable</code> prop to create scrollable dialog.</p>

        <DemoDialogScrollable />
      </AppCardCode>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 Loader -->
      <AppCardCode
        title="Loader"
        :code="loader"
      >
        <p>The <code>v-dialog</code> component makes it easy to create a customized loading experience for your application.</p>

        <DemoDialogLoader />
      </AppCardCode>
    </VCol>

    <VCol
      col="12"
      md="6"
    >
      <!-- 👉 Nesting -->
      <AppCardCode
        title="Nesting"
        :code="nesting"
      >
        <p>Dialogs can be nested: you can open one dialog from another.</p>

        <DemoDialogNesting />
      </AppCardCode>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 Overflowed -->
      <AppCardCode
        title="Overflowed"
        :code="overflowed"
      >
        <p>Modals that do not fit within the available window space will scroll the container.</p>

        <DemoDialogOverflowed />
      </AppCardCode>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 Fullscreen -->
      <AppCardCode
        title="Fullscreen"
        :code="fullscreen"
      >
        <p>Due to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens.</p>

        <DemoDialogFullscreen />
      </AppCardCode>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 Form -->
      <AppCardCode
        title="Form"
        :code="form"
      >
        <p>Just a simple example of a form in a dialog.</p>

        <DemoDialogForm />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
