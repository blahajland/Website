<script setup>

</script>

<template>
  <div class="FormContainer">
    <slot></slot>
  </div>
</template>

<style scoped lang="sass">
.FormContainer
  padding: 0 256px
  display: flex
  flex-direction: column
  justify-content: start
  align-items: stretch
  gap: 12px
</style>