<script setup></script>

<template>
  <a href="https://blahaj.itsjamie.dev/">
    <img src="/images/spinning-blahaj.gif" alt="Blahaj" />
  </a>
</template>

<!-- scope warranted -->
<style scoped>
a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
}

a > img {
  height: 220px;
  z-index: -1;
}
</style>
