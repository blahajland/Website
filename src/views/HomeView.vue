<script setup>
import ContentBlock from '@/components/cards/ContentBlock.vue'
import CustomButton from '@/components/CustomButton.vue'
import CustomGap from '@/components/CustomGap.vue'
import BlockGrid from '@/components/containers/BlockGrid.vue'
import SlideableList from '@/components/containers/SlideableList.vue'
import SideBlock from '@/components/cards/SideBlock.vue'
import { changeLoc } from '@/assets/js/linkTools.js'
import PageSection from '@/components/containers/PageSection.vue'

const randomTitles = [
  'Unlock your inner gay!',
  'Welcome back uwu',
  'Be afraid and naked',
  'Meow meow meow meow meow',
  'Blahaj go spinny',
  'Be silly, burn Google Drive',
  'the blahaj is very tired he is eepy',
  'Don\'t click 6 times on the 6th bullet point...',
  'Be gay, do crimes',
  'Blahaj is life! Blahaj is everything!',
  'Shork goodness'
]

const randomTitle = randomTitles[Math.floor(Math.random() * randomTitles.length)]
</script>

<template>
  <div class="HomeView">
    <a href="https://blahaj.itsjamie.dev/">
      <img src="/images/spinning-blahaj.gif" alt="Blahaj">
    </a>
    <h1>{{ randomTitle }}</h1>
    <p>Welcome to <b>Blahaj Land</b>! Hope you enjoy your stay.</p>
    <CustomGap gap="16px" />
    <BlockGrid>
      <ContentBlock color="#ACD3DC">
        <p>Take a tour and see <b>what's inside :3</b></p>
        <CustomButton @click="changeLoc('#p1',false)">
          <p>Discover</p>
        </CustomButton>
      </ContentBlock>
      <ContentBlock color="#F0C1B7">
        <p>Join our Discord server and <b>pass the vibe check &gt;:3</b></p>
        <CustomButton>
          <p>Join</p>
        </CustomButton>
      </ContentBlock>
      <ContentBlock color="#DCDCDC">
        <p>Already part of the community? Get access to <b>all the apps</b></p>
        <CustomButton>
          <p>Open</p>
        </CustomButton>
      </ContentBlock>
    </BlockGrid>
    <CustomGap gap="96px" />
    <PageSection>
      <template #title>
        <h2 id="p1">Why ?</h2>
        <p>Why should you consider <b>Blahaj Land</b> for your needs ? ;3</p>
      </template>
      <BlockGrid>
        <ContentBlock color="#B5C4E2">
          <img src="/icons/website.png" alt="Website">
          <h3>Host your own website for free!</h3>
          <p>With <b>blahaj.land</b> you can easily host your own static site for free!</p>
        </ContentBlock>
        <ContentBlock color="#B1BCE1">
          <img src="/icons/cloud.png" alt="Cloud">
          <h3>Cloud storage</h3>
          <p>Starting at <b>1€&sol;month</b></p>
        </ContentBlock>
        <ContentBlock color="#ACD3DC">
          <img src="/icons/communication.png" alt="Communication">
          <h3>Communication services</h3>
          <p>E-mail, Matrix, Send and more !</p>
        </ContentBlock>
      </BlockGrid>
    </PageSection>
    <PageSection>
      <template #title>
        <h2 id="p2">Services</h2>
        <p>The stuff we host >:3</p>
      </template>
      <SlideableList>
        <SideBlock color="#FFF6AD">
          <template #image>
            <img src="/icons/apps/haste.png" alt="Haste">
          </template>
          <h3>Haste</h3>
          <p>A free and private pastebin alternative for sharing code snippets and text securely.</p>
        </SideBlock>
        <SideBlock color="#FFAD8D">
          <template #image>
            <img src="/icons/apps/hedgedoc.png" alt="HedgeDoc">
          </template>
          <h3>HedgeDoc</h3>
          <p>An open-source collaborative markdown editor that respects privacy and allows to easily share docs.</p>
        </SideBlock>
        <SideBlock color="#7BC8FF">
          <template #image>
            <img src="/icons/apps/nextcloud.png" alt="Nextcloud">
          </template>
          <h3>Nextcloud</h3>
          <p>An all-in-one solution for file sharing, calendar, contacts, and more, hosted on your own cloud server.</p>
        </SideBlock>
        <SideBlock color="#FFA0A7">
          <template #image>
            <img src="/icons/apps/piped.png" alt="Send">
          </template>
          <h3>Piped</h3>
          <p>A private YouTube player with no ads or tracking, perfect for watching content without compromising
            privacy.</p>
        </SideBlock>
        <SideBlock color="#76CEFF">
          <template #image>
            <img src="/icons/apps/send.png" alt="Send">
          </template>
          <h3>Send</h3>
          <p>Securely transfer large files between devices using sharing links with up to 2,5GB capacity per file.</p>
        </SideBlock>
        <SideBlock color="#7DACFF">
          <template #image>
            <img src="/icons/apps/vaultwarden.png" alt="Vaultwarden">
          </template>
          <h3>Vaultwarden</h3>
          <p>The best password manager for securely storing and managing passwords.</p>
        </SideBlock>
        <SideBlock color="#FF9E81">
          <template #image>
            <img src="/icons/apps/lutim.png" alt="Lutim">
          </template>
          <h3>Lutim</h3>
          <p>An image hosting app similar to Imgur, but private and free.</p>
        </SideBlock>
        <SideBlock color="#FF8490">
          <template #image>
            <img src="/icons/apps/prettyheroes.png" alt="PrettyHeroes">
          </template>
          <h3>PrettyHeroes</h3>
          <p>A simple and colorful About Me page creator with no account creation needed.</p>
        </SideBlock>
        <SideBlock color="#CEF0FF">
          <template #image>
            <img src="/icons/apps/mail.png" alt="Mail">
          </template>
          <h3>Mail</h3>
          <p>Access your emails securely from the webmail interface or with any preferred client.</p>
        </SideBlock>
      </SlideableList>
    </PageSection>
    <PageSection>
      <template #title>
        <h2 id="p3">User sites</h2>
        <p>Here you can view our user's sites :3</p>
        <SlideableList>
          <SideBlock>
            <template #image>
              <img src="/icons/join.png" alt="User">
            </template>
            <p>TODO</p>
          </SideBlock>
        </SlideableList>
      </template>
    </PageSection>
    <PageSection>
      <template #title>
        <h2 id="p4">Tiers</h2>
        <p>Get more features and support the website! >83</p>
      </template>
        <BlockGrid>
          <SideBlock>
            <template #image>
              <img src="/icons/join.png" alt="User">
            </template>
            <p>TODO</p>
          </SideBlock>
        </BlockGrid>
    </PageSection>
    <PageSection>
      <template #title>
        <h2 id="p6">Props</h2>
        <p>You're &ast;ahem&ast; <i>transitionning</i> from another service? hehe...</p>
      </template>
      <BlockGrid>
        <SideBlock>
          <template #image>
            <img src="/icons/join.png" alt="User">
          </template>
          <p>TODO</p>
        </SideBlock>
      </BlockGrid>
    </PageSection>
    <PageSection :last='true'>
      <template #title>
        <h2 id="p5">Props</h2>
        <p>You're &ast;ahem&ast; <i>transitionning</i> from another service? hehe...</p>
      </template>
      <BlockGrid>
        <SideBlock>
          <template #image>
            <img src="/icons/join.png" alt="User">
          </template>
          <p>TODO</p>
        </SideBlock>
      </BlockGrid>
    </PageSection>
  </div>

</template>

<style>

.HomeView {
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: stretch;
  gap: 8px;
}

.HomeView * {
  margin: 0;
}

.HomeView > h1 {
  font-size: 2.5em;
}

.HomeView > a:first-of-type {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
}

.HomeView > a > img {
  height: 220px;
  z-index: -1;
}

/*.HomeView > a > img:hover {
  filter: brightness(110%);
}*/
</style>