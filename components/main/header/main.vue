<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <main-header-logo-link class="hidden lg:flex" />
      <label class="btn btn-ghost drawer-button lg:hidden" for="my-drawer">
        <main-mask
          :active="true"
          active-color="text-secondary"
          icon="bars-sort" />
      </label>
    </div>
    <div class="navbar-center">
      <main-header-logo-link class="flex lg:hidden" />

      <main-header-menu-ul class="menu-horizontal hidden lg:flex has-border" />
    </div>
    <div class="navbar-end h-full">
      <div class="flex flex-row h-full items-center gap-1">
        <a class="hidden lg:flex btn btn-ghost">
          <main-mask :active="true" active-color="text-secondary" icon="magnifying-glass" />
          <span class="lg:flex hidden">جستجو</span>
        </a>

        <div class="hidden lg:flex h-1/3 w-[2px] items-center justify-center bg-secondary rounded-full"></div>
        <a class="btn btn-ghost">
          <main-mask :active="true" active-color="text-secondary" icon="user" />
          <span class="lg:flex hidden"> پنل کاربری </span>
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>
