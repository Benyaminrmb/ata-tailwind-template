<template>
  <div
    class="flex hover:shadow-lg hover:scale-105 transition ease-out flex-wrap default-blog-img-height relative rounded-2xl overflow-hidden">
    <img :src="props.img" alt="wdawd" class="w-full object-cover h-full flex" />
    <div class="absolute w-full h-full top-0 left-0">
      <div
        class="flex w-full h-full items-end p-4 transition ease-out from-black/50 to-30% to-transparent bg-gradient-to-t">
        <h2 class="font-modam self-end text-white lg:text-xl">
          {{ props.title }}
        </h2>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  img: {type: String, default: ''},
  title: {type: String, default: ''},
})
</script>
