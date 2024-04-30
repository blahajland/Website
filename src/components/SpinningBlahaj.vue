<script setup></script>

<template>
  <a href="https://blahaj.itsjamie.dev/">
    <img src="/images/spinning-blahaj.gif" alt="Blahaj" />
  </a>
</template>

<!-- scope warranted -->
<style lang="sass" scoped>

a
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

  > img
    z-index: -1

@media (min-width: 1201px)
  a
    padding: 64px 0 32px

    > img
      height: 220px

@media (max-width: 1200px)
  a
    padding: 96px 0 16px

    > img
      width: 80vw
</style>
