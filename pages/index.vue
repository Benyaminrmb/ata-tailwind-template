<template>
  <div class="flex flex-wrap w-full gap-6">
    <div class="flex w-full flex-wrap container mx-auto">
      <main-blog-hero-item />
      <main-blog-scrollable-items />
    </div>

    <main-blog-scrollable-items-with-bg />
    <main-blog-media-items />

    <main-sections-instagram />
    <main-sections-about />
    <main-sections-customers />


  </div>
</template>
<script setup lang="ts">
const toast = useToast()
const items = [
  '/img.png',
  '/blog/img_1.png',
  '/blog/img_2.png',
  '/blog/img_3.png',
  '/img_1.png',
  '/img_2.png',
  '/phone-bg-1.png',
  '/phone-bg-2.png',

  '/img_3.png',
]
const carouselRef = ref()

import TitleBar from '~/components/main/title-bar.vue'
import ArrowLink from '~/components/arrow-link.vue'
import TextIcon from '~/components/text-icon.vue'
</script>
