<script setup></script>

<template>
  <div class="TopBar">
    <RouterLink to="/">
      <img src="/images/logo.png" alt="Logo" />
    </RouterLink>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<style>
.TopBar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--background);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  z-index: 5;
}

.TopBar > a > img {
  height: 32px;
  filter: var(--filter);
}

.TopBar > div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  gap: 8px;
}
</style>
