<template>
  <div class="flex gap-2 items-center">
    <arrow-button :is-btn="false" :icon="props.icon" :icon-color="props.iconColor" />
    <span
      :class=[color]
      class="font-modam font-black text-xl">
      {{ props.title }}
    </span>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  icon: {type: String, default: ''},
  title: {type: String, default: ''},
  color: {type: String, default: 'text-secondary'},
  iconColor: {type: String, default: 'text-white'},

})
</script>
