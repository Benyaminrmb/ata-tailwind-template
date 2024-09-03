<template>
  <div class="flex gap-1 items-center">
    <span
      :class="[
        {
          [bgColor]: !props.disabled,
          'bg-gray-400': props.disabled,
        },
      ]"
      class="flex p-1 px-1.5 rounded-md justify-center gap-1 items-center">
      <main-mask :icon="icon" s="2" :color="color" :font-type="fontType" />
    </span>
    <span class="color">
      {{ text }}
    </span>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  icon: {type: String, default: ''},
  disabled: {type: Boolean, default: false},
  bgColor: {type: String, default: 'primary-gradient'},
  color: {type: String, default: 'text-white'},
  text: {type: String, default: ''},
  fontType: {
    type: String,
    required: false,
    default: 'fal',
  },
})
</script>
