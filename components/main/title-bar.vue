<template>
  <div class="flex w-full gap-2 items-center">
    <arrow-button :is-btn="false" :icon="props.icon" />
    <span class="font-modam font-bold text-xl text-white">
      {{ props.title }}
    </span>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  icon: {type: String, default: ''},
  title: {type: String, default: ''},
})
</script>
