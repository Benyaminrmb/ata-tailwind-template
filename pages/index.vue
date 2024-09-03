<template>
  <div class="flex flex-wrap w-full gap-6">
    <div class="flex w-full flex-wrap container mx-auto px-3 ">
      <main-blog-hero-item />
      <main-blog-scrollable-items/>
    </div>

    <main-blog-scrollable-items-with-bg/>


    <div class="flex flex-wrap w-full container mx-auto md:px-3 gap-12">
      <div class="flex flex-wrap gap-2 w-full items-center justify-between">
        <title-bar icon="loader" title="رویداد های حوزه ورزش و تناسب اندام" />
        <div
          class="flex gap-2 items-center flex-1 justify-end whitespace-nowrap">
         awdawd
        </div>
      </div>
    </div>


  </div>
</template>
<script setup lang="ts">

import TitleBar from '~/components/main/title-bar.vue'
</script>
