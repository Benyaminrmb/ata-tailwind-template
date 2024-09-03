<template>
  <div class="flex flex-wrap w-full gap-6">
    <div class="flex w-full flex-wrap container mx-auto">
      <main-blog-hero-item />
      <main-blog-scrollable-items />
    </div>

    <main-blog-scrollable-items-with-bg />
    <main-blog-media-items />


  </div>
</template>
<script setup lang="ts">
import TitleBar from '~/components/main/title-bar.vue'
import ArrowLink from '~/components/arrow-link.vue'
import TextIcon from '~/components/text-icon.vue'
</script>
