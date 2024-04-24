<script setup></script>

<template>
  <div class="TabGroup">
    <slot></slot>
  </div>
</template>

<style>
.TabGroup {
  position: sticky;
  top: 66px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  gap: 16px;
  z-index: 5;
  background: var(--background);
}
</style>
