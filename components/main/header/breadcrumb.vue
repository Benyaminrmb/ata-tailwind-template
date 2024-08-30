<template>
  <div class="flex w-full gap-3">
    <div class="w-full bg-white rounded-2xl p-2 lg:p-3">
      <div v-if="props.isBreadcrumb" class="breadcrumbs p-0 w-full text-sm">
        <ul>
          <li>خانه</li>
          <li class="active">اخبار و مقالات</li>
        </ul>
      </div>
      <div v-else class="flex w-full gap-3 h-full justify-center items-center">
        <div class="w-full grow flex gap-2">
          <div class="w-full hidden lg:flex scrollbar-hide overflow-x-auto">
            <button
              v-for="btn in buttons"
              :class="[{'btn-primary': btn.active}]"
              class="btn btn-ghost">
              <main-mask
                :active="true"
                :active-color="btn.active ? 'text-white' : 'text-secondary'"
                :icon="btn.icon" />
              {{ btn.label }}
            </button>
          </div>
          <div class="w-full flex lg:hidden">
            <div class="dropdown w-full">
              <div class="flex w-full gap-2" role="button" tabindex="0">
                <div class="w-full grow flex gap-2">
                  <main-mask
                    :active="true"
                    active-color="text-secondary"
                    icon="grid-round-2" />
                  <span class="text-sm"> همه حوزه ها </span>
                </div>
                <div
                  class="flex-none flex bg-white items-center justify-center gap-2">
                  <main-mask font-type="fas" icon="chevron-down" s="3" />
                </div>
              </div>

              <ul
                class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                tabindex="0">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="flex-none hidden lg:flex bg-white items-center justify-center gap-2">
          <button class="btn btn-ghost">
            سایر دسته بندی ها
            <main-mask
              :active="true"
              active-color="text-secondary"
              icon="arrow-left-long" />
          </button>
        </div>
      </div>
    </div>
    <div
      class="w-full flex-1 items-center justify-center flex bg-white rounded-2xl gap-2 p-4 lg:p-5">
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
        icon="phone-volume" />
      <span class="whitespace-nowrap hidden gap-1 lg:flex">
        <span> پشتیبانی: </span>
        <span class="dir-ltr"> 021 - 123456 </span>
      </span>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  isBreadcrumb: {
    type: Boolean,
    default: true,
  },
})
const buttons = [
  {label: 'همه حوزه ها', icon: 'grid-round-2', active: false},
  {label: 'تغذیه و سلامتی', icon: 'heart', active: false},
  {label: 'سرگرمی', icon: 'gamepad', active: false},
  {label: 'محیط  ', icon: 'sun', active: false},
  {label: 'ورزشی و تناسب اندام', icon: 'headphones', active: false},
]
</script>
<style>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
