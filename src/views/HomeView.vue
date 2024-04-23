<script setup>
import ContentBlock from '@/components/ContentBlock.vue'
import CustomButton from '@/components/CustomButton.vue'
import CustomGap from '@/components/CustomGap.vue'
import BlockGrid from '@/components/BlockGrid.vue'
import SlideableList from '@/components/SlideableList.vue'

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
        <CustomButton>
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
    <CustomGap gap="64px" />
    <h2>Why ?</h2>
    <p>Why should you consider <b>Blahaj Land</b> for your needs ? ;3</p>
    <BlockGrid>
      <ContentBlock>
        <h3>Host your own website for free!</h3>
        <p>With <b>blahaj.land</b> you can easily host your own static site for free!</p>
      </ContentBlock>
      <ContentBlock>
        <h3>Cloud storage</h3>
        <p>Starting at <b>1€&sol;month</b></p>
      </ContentBlock>
      <ContentBlock>
        <h3>Communication services</h3>
        <p>E-mail, Matrix, Send and more !</p>
      </ContentBlock>
    </BlockGrid>
    <SlideableList>
      <ContentBlock>
        <h3>Send</h3>
        <!--p>Send any big files securely!</p-->
      </ContentBlock>
      <ContentBlock>
        <h3>Haste</h3>
      </ContentBlock>
      <ContentBlock>
        <h3>E-mail</h3>
        <!--p> Access your emails securely through the <b>webmail app</b> or any <b>other client</b>!</p-->
      </ContentBlock>
      <ContentBlock>
        <h3>PrettyHeroes</h3>
      </ContentBlock>
      <ContentBlock>
        <h3>PrettyHeroes</h3>
      </ContentBlock>
      <ContentBlock>
        <h3>PrettyHeroes</h3>
      </ContentBlock>
      <ContentBlock>
        <h3>PrettyHeroes</h3>
      </ContentBlock>
      <ContentBlock>
        <h3>PrettyHeroes</h3>
      </ContentBlock>
      <ContentBlock>
        <h3>PrettyHeroes</h3>
      </ContentBlock>
      <ContentBlock>
        <h3>PrettyHeroes</h3>
      </ContentBlock>
      <ContentBlock>
        <h3>PrettyHeroes</h3>
      </ContentBlock>
      <ContentBlock>
        <h3>PrettyHeroes</h3>
      </ContentBlock>
      <ContentBlock>
        <h3>PrettyHeroes</h3>
      </ContentBlock>
      <ContentBlock>
        <h3>PrettyHeroes</h3>
      </ContentBlock>
      <ContentBlock>
        <h3>PrettyHeroes</h3>
      </ContentBlock>
    </SlideableList>
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