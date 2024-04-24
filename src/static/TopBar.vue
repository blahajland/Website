<script setup>
import PN from '@/components/CustomButton.vue'
import { changeLoc } from '@/assets/js/linkTools.js'
import { switchTheme } from '@/assets/js/themeTools.js'
</script>

<template>
  <div class="TopBar">
    <RouterLink to="/">
      <img src="/images/logo.png" alt="Logo" />
    </RouterLink>
    <div>
      <PN @click="changeLoc('https://ko-fi.com/eryncloud/')">
        <img src="/icons/donate.png" alt="Donate" />
        <p>Donate</p>
      </PN>
      <PN @click="changeLoc('https://discord.gg/23ScBhN7xx')">
        <img src="/icons/join.png" alt="Join" />
        <p>Sign up</p>
      </PN>
      <PN @click="changeLoc('https://blahaj.land/yunohost/sso/')">
        <img src="/icons/open.png" alt="Open" />
        <p>Log in</p>
      </PN>
      <PN @click="switchTheme()">
        <img src="/icons/theme.png" alt="Theme" />
        <p>Theme</p>
      </PN>
    </div>
  </div>
</template>

<style>
.TopBar {
  position: sticky;
  top: 0;
  background: var(--background);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
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
