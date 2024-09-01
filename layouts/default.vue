<template>
  <div
    class="flex flex-wrap w-full overflow-hidden container relative mx-auto px-3">
    <main-header-navbar />
    <div class="drawer !h-full flex flex-wrap w-full">
      <input id="my-drawer" class="drawer-toggle peer" type="checkbox" />

      <div
        class="drawer-content !h-full w-full peer-checked:-translate-x-14 transition ease-out">
        <div class="flex mt-6 flex-wrap w-full gap-6 z-0 relative">
          <img
            alt="bubble"
            class="absolute right-0 top-32 -z-10 w-60"
            src="/circle.svg" />

          <main-header-breadcrumb :is-breadcrumb="false" />

          <div class="flex h-full relative flex-wrap w-full grow">
            <slot />
          </div>
          <main-footer-main />
        </div>
      </div>
      <div class="drawer-side !h-full top-auto">
        <label
          aria-label="close sidebar"
          class="drawer-overlay"
          for="my-drawer"></label>
        <div class="bg-secondary text-secondary-content min-h-full w-80 p-4">
          <main-header-menu-ul class="has-border menu-lg" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
