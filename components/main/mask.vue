<template>
  <span :class="iconClass" :style="iconStyle" class="flex" />
</template>

<script setup>
// Import necessary Vue features
import { computed } from 'vue'

// Define props using defineProps()
const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: false,
    default: null
  },
  s: {
    type: [String, Number],
    required: false,
    default: 5
  },
  fontType: {
    type: String,
    required: false,
    default: 'fal'
  },
  color: {
    type: String,
    required: false,
    default: null
  },
  activeColor: {
    type: String,
    required: false
  }
})

// Computed properties
const fontTypeName = computed(() => {
  return props.active ? 'fas' : props.fontType
})

const isFontAwesome = computed(() => {
  // Assuming that if the icon doesn't have an extension, it's a FontAwesome icon
  return !props.icon.includes('.')
})

const colorClass = computed(() => {
  if (props.active) {
    if (isFontAwesome.value) {
      return props.activeColor ? props.activeColor : 'text-primary'
    }
    return props.activeColor ? props.activeColor : 'bg-primary'
  }

  if (props.color) {
    return props.color
  }

  return isFontAwesome.value ? 'text-slate-800' : 'bg-slate-800'
})

const iconClass = computed(() => {
  if (isFontAwesome.value) {
    return `${fontSize.value} ${colorClass.value} ${fontTypeName.value} fa-${props.icon}`
  } else {
    return `${size.value} ${colorClass.value}`
  }
})

const iconStyle = computed(() => {
  if (!isFontAwesome.value) {
    return `-webkit-mask: url(/images/app/${props.icon}) no-repeat center; mask: url(/images/app/${props.icon}) no-repeat center;`
  }
  return ''
})

const size = computed(() => {
  switch (Number(props.s)) {
    case 2:
      return 'w-2 h-2'
    case 3:
      return 'w-3 h-3'
    case 4:
      return 'w-4 h-4'
    case 6:
      return 'w-6 h-6'
    case 7:
      return 'w-7 h-7'
    case 8:
      return 'w-8 h-8'
    case 9:
      return 'w-9 h-9'
    case 10:
      return 'w-10 h-10'
    default:
      return 'w-5 h-5'
  }
})

const fontSize = computed(() => {
  switch (Number(props.s)) {
    case 2:
      return 'text-sm'
    case 3:
      return 'text-base'
    case 4:
      return 'text-xl'
    case 5:
      return 'text-xl'
    case 6:
      return 'text-3xl'
    case 7:
      return 'text-4xl'
    case 8:
      return 'text-5xl'
    case 9:
      return 'text-6xl'
    case 10:
      return 'text-7xl'
    default:
      return 'text-xl'
  }
})
</script>
