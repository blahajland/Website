<script setup>
import CustomGap from '@/components/CustomGap.vue'

defineProps({
  last: {
    type: Boolean,
    default: false,
    validator(value) {
      return value !== undefined
    }
  }
})
</script>

<template>
  <slot name="title"></slot>
  <CustomGap gap="16px" />
  <slot></slot>
  <CustomGap v-if="!last" gap="64px" />
</template>
