<template>
  <div class="PageFrame">
    <slot></slot>
  </div>
</template>

<style lang="sass">
.PageFrame
  display: flex
  flex-direction: column
  justify-content: start
  align-items: stretch
  gap: 8px

  *
    margin: 0

  @media (min-width: 1201px)
    margin: 137px 0 72px

    > h1
      font-size: 2.5em

    > p 
      font-size: 1.2em

  @media (max-width: 1200px)
    padding: 96px 24px 0

    > h1
      font-size: 2em
</style>
