<template>
  <div class="flex flex-wrap bg-[#F7F9FA] w-full p-3 py-12 mb-6">
    <div class="flex flex-wrap w-full container relative mx-auto gap-12">
      <div class="flex justify-center w-full">
        <h4 class="font-extrabold text-2xl font-modam">
          مجموعه هایی که افتخار <span class="text-accent">همکاری</span> با آنها
          را داشته ایم
        </h4>
      </div>
      <div class="flex justify-center relative dir-ltr w-full">
        <span
          class="absolute left-0 h-full flex -translate-x-3 items-center z-10">
          <arrow-button
            color="bg-gray-800"
            class="bg-gray-800"
            icon="angle-left" />
        </span>
        <div class="carousel gap-6 flex w-full">
          <div
            class="carousel-item relative p-3 rounded-xl bg-white w-24 h-24"
            v-for="item in items"
            :key="item">
            <img :src="item" alt="carousel-img" class="object-cover w-full" />
          </div>
        </div>

        <span
          class="absolute right-0 h-full flex translate-x-3 items-center z-10">
          <arrow-button
            color="bg-gray-800"
            class="bg-gray-800"
            icon="angle-right" />
        </span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
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
</script>
