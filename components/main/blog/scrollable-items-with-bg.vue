<template>
  <div class="flex flex-wrap w-full bg-gray-700 p-12">
    <div class="flex flex-wrap w-full container mx-auto md:px-3 gap-12">
      <div class="flex flex-wrap w-full gap-2 items-center justify-between">
        <title-bar icon="loader" title="رویداد های حوزه ورزش و تناسب اندام" />
        <div
          class="flex w-full gap-2 items-center flex-1 justify-end whitespace-nowrap">
          <main-tab-select />
        </div>
      </div>
      <div
        class="flex carousel lg:grid grid-cols-1 md:grid-cols-2 relative lg:grid-cols-4 xl:grid-cols-4 w-full gap-3 lg:gap-6">
        <div
          v-for="(blog, index) in blogs"
          :id="`slide-${index}`"
          class="flex carousel-item justify-center group flex-wrap w-[14rem] sm:w-[17rem] lg:w-full default-banner-img-height relative rounded-2xl overflow-hidden">
          <img
            :src="blog.img"
            alt="wdawd"
            class="w-full object-cover md:group-hover:scale-105 transition ease-out h-full flex rounded-2xl overflow-hidden" />
          <div class="absolute w-full h-full top-0 left-0 justify-center flex">
            <div
              class="flex sm:w-full h-full items-end p-4 transition ease-out from-black/50 to-30% to-transparent bg-gradient-to-t">
              <h2 class="font-modam self-end text-white lg:text-xl">
                {{ blog.title }}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import TitleBar from '~/components/main/title-bar.vue'

const blogs = [
  {
    img: '/blog/bg/2.jpg',
    title: 'اجلاس بین المللی تجارت غذا در ایران با رویکرد تجارت محور',
  },
  {
    img: '/blog/bg/1.jpg ',
    title: 'نشست هم اندیشی حوزه غذا',
  },
  {
    img: '/blog/img.png',
    title: 'اجلاس بین المللی تجارت غذا در ایران با رویکرد',
  },
  {
    img: '/blog/bg/1.jpg',
    title: 'هفتمین نمایشگاه بین المللی',
  },
]
</script>
