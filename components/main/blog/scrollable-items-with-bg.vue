<template>
  <div class="flex flex-wrap w-full bg-gray-700 p-12">
    <div class="flex flex-wrap w-full container mx-auto px-3 gap-12">
      <div class="flex w-full gap-2 items-center justify-between">
        <title-bar icon="loader" title="رویداد های حوزه ورزش و تناسب اندام" />
        <div class="flex w-full gap-2 items-center flex-1 whitespace-nowrap">
          <main-tab-select />
        </div>
      </div>
      <div
        class="grid grid-cols-1 relative lg:grid-cols-4 w-full gap-3 lg:gap-6">
        <span class="absolute left-0">
          <arrow-button icon="angle-left" />
        </span>
        <div
          v-for="blog in blogs"
          class="flex hover:shadow-lg hover:scale-105 transition ease-out flex-wrap w-full default-banner-img-height relative rounded-2xl overflow-hidden">
          <img :src="blog.img" alt="wdawd" class="w-full h-full flex" />
          <div class="absolute w-full h-full top-0 left-0">
            <div
              class="flex w-full h-full items-end p-4 transition ease-out from-black/50 to-30% to-transparent bg-gradient-to-t">
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
    img: '/blog/img.png',
    title: 'اجلاس بین المللی تجارت غذا در ایران با رویکرد تجارت محور',
  },
  {
    img: '/blog/img_1.png ',
    title: 'نشست هم اندیشی حوزه غذا',
  },
  {
    img: '/blog/img_2.png',
    title: 'اجلاس بین المللی تجارت غذا در ایران با رویکرد',
  },
  {
    img: '/blog/img_3.png',
    title: 'هفتمین نمایشگاه بین المللی',
  },
]
</script>
