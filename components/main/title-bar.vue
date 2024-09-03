<template>
  <div class="flex gap-2 items-center">
    <arrow-button :is-btn="false" :icon="props.icon" />
    <span
      :class=[color]
      class="font-modam font-bold text-xl">
      {{ props.title }}
    </span>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  icon: {type: String, default: ''},
  title: {type: String, default: ''},
  color: {type: String, default: 'text-secondary'},
})
</script>
