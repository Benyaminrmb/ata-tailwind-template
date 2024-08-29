<template>
  <div class="drawer flex flex-wrap w-full">
    <input id="my-drawer" class="drawer-toggle" type="checkbox" />
    <div class="drawer-content w-full">
      <div class="flex flex-wrap w-full">
        <main-header-main />
        <div class="flex flex-1 h-full flex-wrap w-full grow">
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
