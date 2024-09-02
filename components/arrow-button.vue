<template>
  <button
    v-if="isBtn"
    :disabled="props.disabled"
    :class="[
      {
        [color]: !props.disabled,
        'bg-gray-400': props.disabled,
      },
    ]"
    class="flex size-10 lg:size-12 rounded-full justify-center items-center">
    <main-mask :icon="`${props.icon}`" color="text-white" />
  </button>
  <span
    v-else
    :class="[
      {
        [color]: !props.disabled,
        'bg-gray-400': props.disabled,
      },
    ]"
    class="flex size-10 lg:size-12 rounded-full justify-center items-center">
    <main-mask :icon="`${props.icon}`" color="text-white" />
  </span>
</template>
<script setup lang="ts">
const props = defineProps({
  icon: {type: String, default: ''},
  disabled: {type: Boolean, default: false},
  isBtn: {type: Boolean, default: true},
  color: {type: String, default: 'primary-gradient'},
})
</script>
