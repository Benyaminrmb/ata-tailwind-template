<template>
  <div role="tablist" class="tabs tabs-dark tabs-bordered lg:flex hidden">
    <a
      role="tab"
      v-for="item in items"
      :class="[
        {
          'tab-active': item.active,
        },
      ]"
      class="tab"
      >{{ item.title }}</a
    >
  </div>
  <select class="select select-bordered flex lg:hidden font-iransans">
    <option v-for="item in items">{{ item.title }}</option>
  </select>
</template>
<script setup lang="ts">
const items = [
  {
    title: 'همه رویداد ها',
    active: true,
  },
  {
    title: 'ورزشی',
    active: false,
  },
  {
    title: 'تغذیه',
    active: false,
  },
  {
    title: 'خودرو',
    active: false,
  },
]
</script>
