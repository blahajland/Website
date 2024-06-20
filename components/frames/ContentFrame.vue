<script lang="ts" setup>
import CustomGap from "@/components/CustomGap.vue";

defineProps({
  last: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <slot name="title" />
  <CustomGap gap="16px" />
  <slot />
  <CustomGap :gap="`${last ? '32' : '72'}px`" />
</template>
