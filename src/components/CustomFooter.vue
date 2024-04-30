<script setup></script>

<template>
  <div class="CustomFooter">
    <slot></slot>
  </div>
</template>

<style lang="sass">
.CustomFooter
  width: 100%
  display: flex
  justify-content: center
  align-items: center

  > *
    margin: 0

  a
    font-weight: 700
    text-decoration: none
    color: inherit

@media (min-width: 1201px)
  .CustomFooter
    flex-direction: row
    gap: 24px
    padding: 0 0 12px

@media (max-width: 1200px)
  .CustomFooter
    flex-direction: column
    gap: 16px
    padding: 64px 0 32px
</style>
