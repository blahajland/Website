<script setup>

</script>

<template>
  <div class="SlideableList">
    <div class="SlideButton">
      <img src="/icons/left.png" alt="&lt;">
    </div>
    <div class="SlideContainer">
      <slot>
      </slot>
    </div>
    <div class="SlideButton">
      <img src="/icons/right.png" alt="&gt;">
    </div>
  </div>
</template>

<style>
.SlideableList {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
  width: 100%;
}

.SlideButton {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.SlideButton > img {
  height: 24px;
}

.SlideContainer {
  flex: 1 0;
  -ms-overflow-style: none;
  scrollbar-width: none;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  gap: 16px;
  overflow: scroll;
}

.SlideContainer::-webkit-scrollbar {
  display: none;
}
</style>