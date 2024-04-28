<script setup>
import { IS_COLOR, IS_CSS_VAR } from '@/assets/js/propsTools.js'

defineProps({
  color: {
    default: 'var(--blahaj)',
    validator(value) {
      return value instanceof String && (IS_COLOR.test(value) || IS_CSS_VAR.test(value))
    }
  },
  font: {
    default: '#101010',
    validator(value) {
      return value instanceof String && (IS_COLOR.test(value) || IS_CSS_VAR.test(value))
    }
  },
  orientation: {
    default: 'row',
    validator(value) {
      return ['column', 'row'].includes(value)
    }
  },
  clickable: {
    default: false,
    validator(value) {
      return value instanceof Boolean
    }
  }
})
</script>

<template>
  <div class="SmallCard" :class="{ clickable: clickable }">
    <slot></slot>
  </div>
</template>

<style>
@media screen and (min-width: 1201px) {
  .SmallCard {
    background: v-bind(color);
    border-radius: var(--radius-small);
    display: flex;
    flex-direction: v-bind(orientation);
    justify-content: start;
    align-items: center;
    padding: 24px;
    transition: var(--trans);
    color: v-bind(font);
    gap: 16px;
    flex: 0 0 128px;
  }

  .SmallCard * {
    margin: 0;
    text-align: center;
  }

  .SmallCard > img {
    height: 64px;
    border-radius: var(--radius-inf);
  }

  .SmallCard > p {
    overflow: hidden;
    line-clamp: 2;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .SmallCard.clickable:hover {
    background: color-mix(in srgb, v-bind(color), var(--hover));
  }

  .SmallCard.clickable:active {
    background: var(--blahaj);
  }
}

@media screen and (max-width: 1200px) {
  .SmallCard {
    background: v-bind(color);
    border-radius: var(--radius-small);
    display: flex;
    flex-direction: v-bind(orientation);
    justify-content: center;
    align-items: center;
    padding: 24px 32px;
    transition: var(--trans);
    color: v-bind(font);
    gap: 24px;
  }

  .SmallCard * {
    margin: 0;
    text-align: center;
  }

  .SmallCard > img {
    height: 64px;
    border-radius: var(--radius-inf);
  }

  .SmallCard > p {
    overflow: hidden;
    line-clamp: 2;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .SmallCard.clickable:hover {
    background: color-mix(in srgb, v-bind(color), var(--hover));
  }

  .SmallCard.clickable:active {
    background: var(--blahaj);
  }
}
</style>
