<script lang="ts" setup>
import { colorsService } from "blahaj-library";

defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    validator: (clr: string) => colorsService.isValidColor(clr),
    default: "var(--surface2)",
  },
  font: {
    type: String,
    validator: (clr: string) => colorsService.isValidColor(clr),
    default: "#101010",
  },
  href: {
    type: String,
    default: undefined,
  },
});

const stripHttp = (link: string) => {
  const res = new RegExp("^(?:http|https):\\/\\/([a-z0-9.\\-_]+).*$", "i").exec(
    link,
  );
  if (!res || res.length < 2) return link;
  return res[1];
};
</script>

<template>
  <a :class="{ clickable: href }" :href="href" class="UserCard">
    <div>
      <img :alt="title" :src="image" />
    </div>
    <div>
      <h3>{{ title }}</h3>
      <p>{{ stripHttp(website) }}</p>
    </div>
  </a>
</template>

<style lang="sass">

.UserCard
  background: v-bind(color)
  border-radius: var(--radius-small)
  display: flex
  flex-direction: row
  align-items: center
  transition: var(--trans)
  color: v-bind(font)
  text-decoration: none
  gap: 24px

  @media (min-width: 1201px)
    justify-content: start
    padding: 24px
    flex: 0 0

  @media (max-width: 1200px)
    justify-content: center
    padding: 24px 32px

  *
    margin: 0
    text-align: start

  div:first-of-type > img
    height: 64px
    border-radius: var(--radius-inf)

  div:nth-of-type(2)
    display: flex
    flex-direction: column
    justify-content: start
    align-items: start
    width: 128px
    gap: 4px

    > p
      box-sizing: border-box
      max-width: 100%
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
      font-family: monospace
      padding: 4px 8px
      background: #00000020
      border-radius: var(--radius-inf)

  &.clickable
    cursor: pointer

    &:hover
      background: color-mix(in srgb, v-bind(color), var(--surface1))

    &:active
      background: var(--surface2)
</style>
