<template>
  <a class="flex gap-3 items-center cursor-pointer">
    <span class="text-accent">
      {{ text }}
    </span>
    <span
      :class="[
        {
          [color]: !props.disabled,
          'bg-gray-400': props.disabled,
        },
      ]"
      class="flex p-1 px-1.5 rounded-md justify-center gap-1 items-center">
      <main-mask :icon="`${props.icon}`" s="2" color="text-white" />
    </span>
  </a>
</template>
<script setup lang="ts">
const props = defineProps({
  icon: {type: String, default: ''},
  disabled: {type: Boolean, default: false},
  color: {type: String, default: 'primary-gradient'},
  text: {type: String, default: ''},
})
</script>
