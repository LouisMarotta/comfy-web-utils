<template>
  <img v-if="logoUrl" :src="logoUrl" class="w-4 h-4 invert dark:invert-0" alt="logo" />
</template>

<script setup>
import { computed } from 'vue'
import * as simpleIcons from 'simple-icons'

const props = defineProps({
  logo: {
    type: String,
    required: true
  }
})

const logoUrl = computed(() => {
  const icon = simpleIcons[props.logo] ||
               simpleIcons['si' + props.logo.charAt(0).toUpperCase() + props.logo.slice(1)]

  if (!icon?.path) {
    return ''
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="${icon.path}" fill="currentColor"/></svg>`
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
})
</script>