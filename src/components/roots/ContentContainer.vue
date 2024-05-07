<script setup>
import CustomGap from '@/library/vue/CustomGap.vue'

defineProps({
  last: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <slot name="title"></slot>
  <CustomGap gap="24px" />
  <slot></slot>
  <CustomGap v-if="!last" gap="72px" />
</template>
