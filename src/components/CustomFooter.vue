<script setup></script>

<template>
  <div class="CustomFooter">
    <slot> </slot>
  </div>
</template>

<style>
@media screen and (min-width: 1201px) {
  .CustomFooter {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 32px;
    padding: 0 0 12px;
  }

  .CustomFooter > * {
    margin: 0;
  }

  .CustomFooter a {
    font-weight: 700;
    text-decoration: none;
    color: inherit;
  }
}

@media screen and (max-width: 1200px) {
  .CustomFooter {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 64px 0 32px;
  }

  .CustomFooter > * {
    margin: 0;
  }

  .CustomFooter a {
    font-weight: 700;
    text-decoration: none;
    color: inherit;
  }
}
</style>
