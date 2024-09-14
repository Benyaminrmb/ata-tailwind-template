<template>
  <div class="flex flex-wrap w-full container mx-auto gap-12 mb-6">
    <div class="flex flex-wrap gap-2 w-full items-center justify-between">
      <title-bar icon="loader" title="رویداد های حوزه ورزش و تناسب اندام" />
      <div class="flex gap-2 items-center flex-1 justify-end whitespace-nowrap">
        <arrow-link text="مشاهده همه ویدیو ها" icon="angle-left" />
      </div>
    </div>

    <div class="lg:grid flex flex-wrap lg:grid-cols-8 w-full gap-3">
      <div class="flex gap-3 flex-wrap col-span-5 w-full">
        <div
          class="flex flex-wrap w-full gap-3 bg-white shadow-md p-3 rounded-2xl">
          <div class="flex w-full relative">
            <img class="rounded-2xl" src="/blog/bg/white-man.png" alt="awd" />
            <div
              class="flex text-sm gap-2 absolute bottom-0 right-0 bg-white p-2 py-4 rounded-tl-2xl items-center">
              <text-icon icon="play" text="21:15 دقیقه" />
              <text-icon
                font-type="fas"
                icon="calendar"
                bg-color=""
                color="text-gray-500"
                text="1403/10/5" />
            </div>
          </div>

          <div class="flex w-full">
            <h2 class="font-modam text-xl">
              ششمین همایش صنعت غذا در نمایشگاه فیتکس
            </h2>
          </div>
          <div class="flex w-full">
            <div class="flex flex-col w-full text-gray-500">
              <main-lorem class="text-sm lg:text-base" />
            </div>
          </div>
        </div>
        <div
          class="w-full hidden lg:flex bg-white rounded-2xl justify-center items-center shadow-md p-3 py-6">
          <span class="flex"> بنر تبلیغاتی نزدیک ترین همایش یا رویداد </span>
        </div>
      </div>
      <div class="flex lg:hidden flex-wrap w-full">
        <div class="flex gap-3 carousel w-full">
          <scrollable-item
            v-for="i in 5"
            class="carousel-item w-[13rem]"
            title=" ششمین همایش صنعت غذا در نمایشگاه فیتکس "
            img="/blog/bg/white-man.png" />
        </div>
      </div>

      <div class="lg:flex hidden flex-wrap gap-3 col-span-3 w-full">
        <div
          v-for="i in 5"
          class="grid self-start grid-cols-6 gap-2 w-full bg-white rounded-2xl shadow-md p-3">
          <div class="flex">
            <div class="flex col-span-2 w-full size-20">
              <img
                src="/blog/bg/white-man.png"
                alt="awdawg"
                class="w-full rounded-2xl object-cover" />
            </div>

          <div class="flex col-span-4 w-full">
            <h2 class="text-secondary font-semibold">
              ششمین همایش صنعت غذا با رویکرد تجارت محور همراه با صادرات
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
import ScrollableItem from '~/components/main/blog/scrollable-item.vue'
</script>
