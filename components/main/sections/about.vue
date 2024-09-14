<template>
  <div class="flex flex-wrap w-full bg-white p-3 py-12">
    <div class="flex flex-wrap w-full container relative mx-auto gap-12">
      <div class="flex flex-wrap w-full gap-2 items-center justify-between">
        <title-bar
          icon-color="bg-white"
          color="text-secondary"
          icon="white-icon.svg"
          title="درباره گروه رسانه ای آتا" />
      </div>
      <div
        class="flex flex-wrap lg:grid gap-28 flex-col-reverse relative lg:grid-cols-7 w-full">
        <div class="flex col-span-4 flex-wrap">
          <div class="flex flex-col gap-6">
            <h4 class="text-gray-600 font-bold font-modam text-xl">
              آتا ؛ ایده، تولید و اجرا
            </h4>
            <main-lorem :x="3" />
          </div>
          <div
            class="z-10 hidden lg:flex gap-6 flex-row absolute bottom-0 right-0 w-3/4 rounded-2xl p-6 bg-slate-800">
              <span
                v-for="i in 3"
                class="flex gap-2 items-center justify-center">
                <main-mask icon="headphones" s="6" color="text-white" />
                <span class="text-slate-200">عنوان اول</span>
              </span>

            <div
              class="flex gap-2 items-center flex-1 justify-end whitespace-nowrap">
              <arrow-link
                text-color="text-white"
                text="درباره ما بیشتر بدانید"
                icon="angle-left" />
            </div>
          </div>
        </div>
        <div
          class="flex col-span-3 gap-3 w-full justify-center items-center flex-wrap">
          <div class="flex w-full sm:w-1/2 lg:w-full relative">
            <div
              class="w-full rounded-b-xl justify-center items-center overflow-hidden">
              <img
                src="/img_3.png"
                class="w-full rounded-t-full"
                alt="awd " />
            </div>

            <div
              class="absolute flex gap-2 px-4 lg:px-6 flex-col top-3 right-3 p-2 lg:p-3 bg-white rounded-2xl border border-slate-100 shadow-2xl">
                <span
                  class="font-extrabold pl-4 text-sm lg:text-lg self-start font-modam text-secondary">
                  شرکت کننده
                </span>
              <span
                class="font-bold text-base lg:text-3xl self-end font-iransans text-accent">
                  1759+
                </span>
            </div>

            <div
              class="absolute flex gap-2 px-4 lg:px-6 flex-col bottom-2 lg:bottom-24 left-2 lg:-left-6 p-2 lg:p-3 bg-white rounded-2xl border border-slate-100 shadow-2xl">
                <span
                  class="font-extrabold pl-4 text-sm lg:text-lg self-start font-modam text-secondary">
                  رویداد
                </span>
              <span
                class="font-bold text-base lg:text-3xl self-end font-iransans text-secondary">
                  172+
                </span>
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex lg:hidden gap-2 items-center flex-1 justify-center whitespace-nowrap">
        <arrow-link

          text="درباره ما بیشتر بدانید"
          icon="angle-left" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ArrowLink from '~/components/arrow-link.vue'
import TitleBar from '~/components/main/title-bar.vue'
</script>