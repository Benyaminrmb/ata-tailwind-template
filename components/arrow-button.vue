<template>
  <button
    :disabled="props.disabled"
    :class="[
      {
        [color]: !props.disabled,
        'bg-gray-400': props.disabled
      }
    ]"
    class="pt-1 size-10 lg:size-12 rounded-full justify-center items-center">

    <main-mask :icon="`angle-${props.angle}`" color="text-white" />
  </button>
</template>
<script setup lang="ts">
const props = defineProps({
  angle: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  color: { type: String, default: 'bg-primary' }
})
</script>