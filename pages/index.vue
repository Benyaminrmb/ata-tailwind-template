<template>
  <div class="flex flex-wrap w-full">
    <main-blog-hero-item />

    <div class="flex flex-wrap w-full">
      <div class="grid grid-cols-4 w-full gap-6">
        <div
          v-for="blog in blogs"
          class="flex flex-wrap w-full default-blog-img-height relative">
          <img :src="blog.img" alt="wdawd" class="w-full h-full flex" />
          <div class="absolute w-full h-full top-0 left-0">
            <div class="flex w-full">
              <h2 class="font-modam font-semibold">
                awdawd
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const blogs=[
  {
    img: '/blog/img.png',
    title: 'هفتمین نمایشگاه بین المللی',
    link: 'https://www.theatlantic.com/magazine/archive'
  }
]
</script>
