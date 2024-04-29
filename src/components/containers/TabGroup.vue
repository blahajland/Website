<script setup></script>

<template>
  <div class="TabGroup">
    <slot></slot>
  </div>
</template>

<style>
@media screen and (min-width: 1201px) {
  .TabGroup {
    position: fixed;
    top: 88px;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 0 8px 0;
    gap: 16px;
    z-index: 5;
    background: var(--background);
  }
}

@media screen and (max-width: 1200px) {
  .TabGroup {
    display: none;
  }
}
</style>
