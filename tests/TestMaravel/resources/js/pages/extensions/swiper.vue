<script setup>
import {
  autoplay,
  basic,
  centeredSlidesOption1,
  centeredSlidesOption2,
  coverflowEffect,
  cubeEffect,
  fade,
  gallery,
  grid,
  lazyLoading,
  multipleSlidesPerView,
  navigation,
  pagination,
  progress,
  responsiveBreakpoints,
  virtualSlides,
} from '@/views/demos/components/swiper/demoCodeSwiper'
</script>

<template>
  <VRow>
    <VCol>
      <AppCardCode
        title="Basic"
        :code="basic"
      >
        <DemoSwiperBasic />
      </AppCardCode>
    </VCol>

    <VCol>
      <AppCardCode
        title="Navigation"
        :code="navigation"
      >
        <DemoSwiperNavigation />
      </AppCardCode>
    </VCol>

    <VCol>
      <AppCardCode
        title="Pagination"
        :code="pagination"
      >
        <DemoSwiperPagination />
      </AppCardCode>
    </VCol>

    <VCol>
      <AppCardCode
        title="Progress"
        :code="progress"
      >
        <DemoSwiperProgress />
      </AppCardCode>
    </VCol>

    <VCol>
      <AppCardCode
        title="Multiple Slides Per View"
        :code="multipleSlidesPerView"
      >
        <DemoSwiperMultipleSlidesPerView />
      </AppCardCode>
    </VCol>

    <VCol>
      <AppCardCode
        title="Grid"
        :code="grid"
      >
        <DemoSwiperGrid />
      </AppCardCode>
    </VCol>

    <VCol>
      <AppCardCode
        variant="text"
        title="Centered Slides Option 1"
        :code="centeredSlidesOption1"
      >
        <DemoSwiperCenteredSlidesOption1 />
      </AppCardCode>
    </VCol>

    <VCol>
      <AppCardCode
        title="Centered Slides Option 2"
        :code="centeredSlidesOption2"
      >
        <DemoSwiperCenteredSlidesOption2 />
      </AppCardCode>
    </VCol>

    <VCol>
      <AppCardCode
        title="Fade"
        :code="fade"
      >
        <DemoSwiperFade />
      </AppCardCode>
    </VCol>

    <VCol>
      <AppCardCode
        title="Cube Effect"
        :code="cubeEffect"
      >
        <DemoSwiperCubeEffect />
      </AppCardCode>
    </VCol>

    <VCol>
      <AppCardCode
        title="Coverflow Effect"
        :code="coverflowEffect"
      >
        <DemoSwiperCoverflowEffect />
      </AppCardCode>
    </VCol>

    <VCol>
      <AppCardCode
        title="Autoplay"
        :code="autoplay"
      >
        <DemoSwiperAutoplay />
      </AppCardCode>
    </VCol>

    <VCol>
      <AppCardCode
        title="Gallery"
        :code="gallery"
      >
        <DemoSwiperGallery />
      </AppCardCode>
    </VCol>

    <VCol>
      <AppCardCode
        title="Lazy Loading"
        :code="lazyLoading"
      >
        <DemoSwiperLazyLoading />
      </AppCardCode>
    </VCol>

    <VCol>
      <AppCardCode
        title="Responsive Breakpoints"
        :code="responsiveBreakpoints"
      >
        <DemoSwiperResponsiveBreakpoints />
      </AppCardCode>
    </VCol>

    <VCol>
      <AppCardCode
        title="Virtual Slides"
        :code="virtualSlides"
      >
        <DemoSwiperVirtualSlides />
      </AppCardCode>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core-scss/template/libs/swiper"
</style>
