<template>
  <div class="flex flex-wrap w-full">
    <div class="grid grid-cols-2 lg:grid-cols-4 w-full gap-3 lg:gap-6 relative">
      <span
        class="absolute left-0 h-full flex -translate-x-3 items-center z-10">
        <arrow-button color="bg-gray-800" class="bg-gray-800" angle="left" />
      </span>
      <div
        v-for="blog in blogs"
        class="flex hover:shadow-lg hover:scale-105 transition ease-out flex-wrap w-full default-blog-img-height relative rounded-2xl overflow-hidden">
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
      <span
        class="absolute right-0 h-full flex translate-x-3 items-center z-10">
        <arrow-button color="bg-gray-800" class="bg-gray-800" angle="right" />
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
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
