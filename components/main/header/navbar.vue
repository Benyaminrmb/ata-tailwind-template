<template>
  <div class="z-50 px-0">
    <div class="navbar w-full lg:container lg:mx-auto">


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
          <main-mask
            :active="true"
            active-color="text-secondary"
            icon="magnifying-glass" />
          <span class="lg:flex hidden">جستجو</span>
        </a>

        <div class="divider-2"></div>
        <a class="btn btn-ghost">
          <main-mask :active="true" active-color="text-secondary" icon="user" />
          <span class="lg:flex hidden"> پنل کاربری </span>
        </a>
      </div>
    </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
