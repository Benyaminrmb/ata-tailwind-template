<template>
  <div class="flex flex-wrap w-full">
    <div class="grid grid-cols-2 lg:grid-cols-4 w-full gap-3 lg:gap-6 relative">
      <span
        class="absolute left-0 h-full flex -translate-x-3 items-center z-10">
        <arrow-button
          color="bg-gray-800"
          class="bg-gray-800"
          icon="angle-left" />
      </span>
      <scrollable-item
        :title="blog.title"
        :img="blog.img"
        v-for="blog in blogs" />
      <span
        class="absolute right-0 h-full flex translate-x-3 items-center z-10">
        <arrow-button
          color="bg-gray-800"
          class="bg-gray-800"
          icon="angle-right" />
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import ScrollableItem from '~/components/main/blog/scrollable-item.vue'

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
