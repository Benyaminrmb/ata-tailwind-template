<template>
  <div class="flex w-full gap-3">
    <div class="w-full bg-white rounded-2xl p-4 lg:p-5">

      <div class="breadcrumbs p-0 w-full text-sm">
        <ul>
          <li >خانه</li>
          <li class="active">اخبار و مقالات</li>
        </ul>
      </div>

    </div>
    <div class="w-full flex-1 items-center justify-center flex bg-white rounded-2xl gap-2 p-4 lg:p-5">
      <main-mask
          :active="true"
          active-color="text-secondary"
          class="!hidden lg:!flex"
          icon="phone-volume"
          s="3" />
      <main-mask
          :active="true"
          active-color="text-secondary"
          class="!flex lg:!hidden"
          icon="phone-volume"
      />
      <span class="whitespace-nowrap hidden gap-1 lg:flex">
        <span>
          پشتیبانی:
        </span>
        <span class="dir-ltr">
           021 - 123456
        </span>
      </span>

    </div>
  </div>
</template>
<script lang="ts" setup>
</script>