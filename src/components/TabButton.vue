<script setup></script>

<template>
  <div class="TabButton">
    <slot></slot>
    <hr />
  </div>
</template>

<style>
@media screen and (min-width: 1201px) {
  .TabButton {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    min-width: 180px;
    padding-top: 8px;
    border-radius: var(--radius-small);
    transition: var(--trans);
    cursor: pointer;
  }

  .TabButton > p {
    margin: 0;
    text-align: center;
    font-weight: 700;
  }

  .TabButton > hr {
    margin: 0;
    height: 3px;
    background: var(--hover);
    width: 100%;
    border: none;
    border-radius: var(--radius-inf);
  }

  .TabButton:hover {
    background: var(--hover);
  }

  .TabButton:active {
    background: var(--blahaj);
  }

  .TabButton:hover > hr {
    background: var(--blahaj);
  }
}

@media screen and (max-width: 1200px) {
  .TabButton {
    display: none;
  }
}
</style>
