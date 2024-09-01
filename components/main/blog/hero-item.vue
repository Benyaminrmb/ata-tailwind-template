<template>
  <div class="flex flex-wrap lg:grid grid-cols-6 w-full bg-white rounded-2xl mb-3">
    <div class="flex w-full col-span-3">
      <img class="w-full flex rounded-2xl" src="/img.png" alt="awd" />
    </div>
    <div
      class="flex w-full flex-wrap flex-col gap-3 lg:gap-6 col-span-3 p-5 pb-9 lg:pb-8 lg:p-8 relative">
      <div class="lg:flex flex-col w-full hidden">
        <div class="flex justify-between w-full text-slate-400 text-sm">
          <a class="flex gap-2 items-center">
            <main-mask
              icon="grid-round-2"
              s="3"
              active
              active-color="text-slate-400" />
            ورزش و تناسب اندام
          </a>
          <span class="flex gap-2 items-center">
            <main-mask
              icon="calendar"
              s="3"
              active
              active-color="text-slate-400" />
            1403/12/09
          </span>
        </div>
      </div>
      <div class="flex flex-col w-full">
        <h2 class="font-modam text-justify font-semibold lg:text-xl">
          اجلاس بین المللی تجارت غذا در ایران با رویکرد تجارت محور
        </h2>
      </div>
      <div class="flex flex-col w-full">
        <main-lorem class="text-sm lg:text-base" />
      </div>

      <div
        class="flex absolute lg:relative bottom-0 translate-y-5 lg:translate-y-0 flex-col w-full items-center lg:items-end">
        <div class="flex gap-6">
          <arrow-button disabled angle="right" />
          <arrow-button angle="left" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
