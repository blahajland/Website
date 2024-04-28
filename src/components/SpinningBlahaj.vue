<script setup></script>

<template>
  <a href="https://blahaj.itsjamie.dev/">
    <img src="/images/spinning-blahaj.gif" alt="Blahaj" />
  </a>
</template>

<!-- scope warranted -->
<style scoped>
@media screen and (min-width: 1201px) {
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 64px 0 32px;
  }

  a > img {
    height: 220px;
    z-index: -1;
  }
}

@media screen and (max-width: 1200px) {
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 96px 0 16px;
  }

  a > img {
    width: 80vw;
    z-index: -1;
  }
}
</style>
