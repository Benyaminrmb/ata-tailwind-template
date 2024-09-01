<template>
  <button
    :disabled="props.disabled"
    :class="[
      {
        'bg-primary': !props.disabled,
        'bg-gray-400': props.disabled
      }
    ]"
    class="pt-1 size-10 lg:size-12 rounded-full bg-primary justify-center items-center">
    <main-mask :icon="`angle-${props.angle}`" color="text-white" />
  </button>
</template>
<script setup lang="ts">
const props = defineProps({
  angle: { type: String, default: '' },
  disabled: { type: Boolean, default: false }
})
</script>