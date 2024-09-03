<template>
  <div class="flex flex-col h-full">
    <main-header-navbar
      class="flex-shrink-0 sticky top-0 z-10 custom-gradient " />
    <div class="flex-grow flex overflow-hidden">
      <input id="my-drawer" class="drawer-toggle peer" type="checkbox" />

      <div
        class="drawer-content flex-grow h-full transition-transform ease-out peer-checked:-translate-x-14">
        <div class="min-h-full flex flex-col">
          <div class="py-6 flex-grow">
            <div class="relative">
              <img
                alt="bubble"
                class="absolute right-0 top-32 -z-10 w-60"
                src="/circle.svg" />

              <main-header-breadcrumb class="container mx-auto px-3 " :is-breadcrumb="false" />

              <div class="mt-6">
                <slot />
              </div>
            </div>
          </div>
          <main-footer-main class="mt-auto" />
        </div>
      </div>

      <div class="drawer-side fixed inset-y-0 right-0">
        <label
          aria-label="close sidebar"
          class="drawer-overlay"
          for="my-drawer"></label>
        <div
          class="bg-secondary pt-[4.5rem] text-secondary-content h-full w-80 p-4 overflow-y-auto">
          <main-header-menu-ul class="has-border menu-lg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
