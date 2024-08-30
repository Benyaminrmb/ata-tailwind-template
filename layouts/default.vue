<template>
  <div class="drawer flex flex-wrap w-full">
    <input id="my-drawer" class="drawer-toggle peer" type="checkbox" />
    <div class="drawer-content w-full peer-checked:-translate-x-14 transition ease-out">
      <div class="flex flex-wrap w-full gap-6">
        <div class="flex flex-wrap w-full container mx-auto gap-6 px-3">
          <main-header-navbar />
          <main-header-breadcrumb />
        </div>
        <div class="flex h-full flex-wrap w-full grow container mx-auto">
          <slot />
        </div>
        <main-footer-main />
      </div>
    </div>
    <div class="drawer-side">
      <label
        aria-label="close sidebar"
        class="drawer-overlay"
        for="my-drawer"></label>
      <div class="bg-base-200 text-base-content min-h-full w-80 p-4">
        <main-header-menu-ul class="has-border menu-lg" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
