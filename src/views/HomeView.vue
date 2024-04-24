<script setup>
import ContentBlock from '@/components/blocks/ContentBlock.vue'
import CustomButton from '@/components/CustomButton.vue'
import CustomGap from '@/components/CustomGap.vue'
import BlockGrid from '@/components/containers/BlockGrid.vue'
import SlideableList from '@/components/containers/SlideableList.vue'
import SideBlock from '@/components/blocks/SideBlock.vue'
import { changeLoc } from '@/assets/js/linkTools.js'
import PageSection from '@/components/containers/PageSection.vue'
import RandomTitles from '@/assets/json/titles.json'
import SmallBlock from '@/components/blocks/SmallBlock.vue'

const randomTitles = RandomTitles.randomTitles

const randomTitle = randomTitles[Math.floor(Math.random() * randomTitles.length)]
</script>

<template>
  <div class="HomeView">
    <a href="https://blahaj.itsjamie.dev/">
      <img src="/images/spinning-blahaj.gif" alt="Blahaj" />
    </a>
    <PageSection>
      <template #title>
        <h1>{{ randomTitle }}</h1>
        <p>Welcome to <b>Blahaj Land</b>! Hope you enjoy your stay.</p>
      </template>
      <BlockGrid rows="4">
        <ContentBlock color="#ACD3DC">
          <p>Take a tour and see <b>what's inside :3</b></p>
          <CustomButton @click="changeLoc('#p1', false)">
            <p>Discover</p>
          </CustomButton>
        </ContentBlock>
        <ContentBlock color="#F0C1B7">
          <p>Create your account and <b>pass the vibe check &gt;:3</b></p>
          <CustomButton>
            <p>Sing up</p>
          </CustomButton>
        </ContentBlock>
        <ContentBlock color="#B1BCE1">
          <p>Just want to hang around? Join our <b>Discord</b></p>
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
    </PageSection>
    <CustomGap gap="32px" />
    <PageSection>
      <template #title>
        <h2 id="p1">Why ?</h2>
        <p>Why should you consider <b>Blahaj Land</b> for your needs ? ;3</p>
      </template>
      <BlockGrid>
        <ContentBlock color="#B1BCE1">
          <img src="/icons/website.png" alt="Website" />
          <h3>Host your own website for free!</h3>
          <p>With <b>blahaj.land</b> you can easily host your own static site for free!</p>
        </ContentBlock>
        <ContentBlock color="#ACD3DC">
          <img src="/icons/cloud.png" alt="Cloud" />
          <h3>Cloud storage</h3>
          <p>Starting at <b>1€&sol;month</b></p>
        </ContentBlock>
        <ContentBlock color="#C8E7FF">
          <img src="/icons/communication.png" alt="Communication" />
          <h3>Communication services</h3>
          <p>E-mail, blogs, Send and <b>more</b>!</p>
        </ContentBlock>
        <ContentBlock color="#DEAAFF" gap="8px">
          <img src="/icons/friend.png" alt="Communication" />
          <h3>Bring your friends in!</h3>
          <p>
            For every person you invite, you'll get <b>5GB</b> of storage. If they make a donation,
            you'll get an extra <b>10GB</b>.
          </p>
        </ContentBlock>
        <ContentBlock color="#ECBCFD" gap="8px">
          <img src="/icons/switch.png" alt="Communication" />
          <h3>You want to host your website?</h3>
          <p>
            If you switch from <b>neocities.org</b>, <b>Github Pages</b>, or any other host, you'll
            get <b>15GB</b> of storage and a month of <b>Premium</b> for free.
          </p>
        </ContentBlock>
        <ContentBlock color="#FFCBF2">
          <img src="/icons/rosa.png" alt="Communication" />
          <h3>Queer-powered</h3>
          <p>Everybody is welcome here. You always will be.</p>
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
            <img src="/icons/apps/haste.png" alt="Haste" />
          </template>
          <h3>Haste</h3>
          <p>
            A free and private pastebin alternative for sharing code snippets and text securely.
          </p>
        </SideBlock>
        <SideBlock color="#FFCDBA">
          <template #image>
            <img src="/icons/apps/hedgedoc.png" alt="HedgeDoc" />
          </template>
          <h3>HedgeDoc</h3>
          <p>
            An open-source collaborative markdown editor that respects privacy and allows to easily
            share docs.
          </p>
        </SideBlock>
        <SideBlock color="#B8E1FF">
          <template #image>
            <img src="/icons/apps/nextcloud.png" alt="Nextcloud" />
          </template>
          <h3>Nextcloud</h3>
          <p>
            An all-in-one solution for file sharing, calendar, contacts, and more, hosted on your
            own cloud server.
          </p>
        </SideBlock>
        <SideBlock color="#FFB8BD">
          <template #image>
            <img src="/icons/apps/piped.png" alt="Send" />
          </template>
          <h3>Piped</h3>
          <p>
            A private YouTube player with no ads or tracking, perfect for watching content without
            compromising privacy.
          </p>
        </SideBlock>
        <SideBlock color="#B1E3FF">
          <template #image>
            <img src="/icons/apps/send.png" alt="Send" />
          </template>
          <h3>Send</h3>
          <p>
            Securely transfer large files between devices using sharing links with up to 2,5GB
            capacity per file.
          </p>
        </SideBlock>
        <SideBlock color="#B5CFFF">
          <template #image>
            <img src="/icons/apps/vaultwarden.png" alt="Vaultwarden" />
          </template>
          <h3>Vaultwarden</h3>
          <p>The best password manager for securely storing and managing passwords.</p>
        </SideBlock>
        <SideBlock color="#FFD3C6">
          <template #image>
            <img src="/icons/apps/lutim.png" alt="Lutim" />
          </template>
          <h3>Lutim</h3>
          <p>An image hosting app similar to Imgur, but private and free.</p>
        </SideBlock>
        <SideBlock color="#FFBCC3">
          <template #image>
            <img src="/icons/apps/prettyheroes.png" alt="PrettyHeroes" />
          </template>
          <h3>PrettyHeroes</h3>
          <p>A simple and colorful About Me page creator with no account creation needed.</p>
        </SideBlock>
        <SideBlock color="#E0F6FF">
          <template #image>
            <img src="/icons/apps/mail.png" alt="Mail" />
          </template>
          <h3>Mail</h3>
          <p>
            Access your emails securely from the webmail interface or with any preferred client.
          </p>
        </SideBlock>
      </SlideableList>
    </PageSection>
    <PageSection>
      <template #title>
        <h2 id="p3">User sites</h2>
        <p>Here you can view our user's sites :3</p>
      </template>
      <SlideableList>
        <SmallBlock color="#FFC1C6" @click="changeLoc('https://zoey.blahaj.land')">
          <img src="/users/zoey.png" alt="Zoey" />
          <h3>Zoey</h3>
        </SmallBlock>
        <SmallBlock color="#B1FFA9" @click="changeLoc('https://soup.blahaj.land')">
          <img src="/users/soup.png" alt="Soup" />
          <h3>Soup</h3>
        </SmallBlock>
      </SlideableList>
    </PageSection>
    <PageSection>
      <template #title>
        <h2 id="p4">Tiers</h2>
        <p>Get more features and support the website! >83</p>
      </template>
      <BlockGrid>
        <ContentBlock color="#BCDBFF">
          <h2>Starter</h2>
          <h3>Free</h3>
          <p>&bull; Get access to all the apps (except Nextcloud)</p>
          <CustomButton>
            <p>Join</p>
          </CustomButton>
        </ContentBlock>
        <ContentBlock color="#FFCEF1">
          <h2>Supporter</h2>
          <h3>Starting at 1€/month</h3>
          <p>
            &bull; <b>10GB</b> of Nextcloud storage <br />&bull; Get access to all the apps
            <br />&bull; Support Blahaj Land's development
          </p>
          <CustomButton>
            <p>Donate</p>
          </CustomButton>
        </ContentBlock>
        <ContentBlock color="#FFE5A3">
          <h2>Premium</h2>
          <h3>Starting at 5€/month</h3>
          <p>
            &bull; <b>250GB</b> of Nextcloud storage <br />&bull; Get access to all the apps
            <br />&bull; Support Blahaj Land's development
          </p>
          <CustomButton>
            <p>Donate</p>
          </CustomButton>
        </ContentBlock>
      </BlockGrid>
    </PageSection>
    <PageSection :last="true">
      <template #title>
        <h2 id="p5">Donations</h2>
        <p>Thanks or your <i>kind</i> donations &lt;3</p>
        <CustomGap gap="8px" />
        <CustomButton style="align-self: start" color="#FFE5A3">
          <img src="/icons/donate.png" alt="Donate" />
          <p>Donate</p>
        </CustomButton>
      </template>
      <SlideableList>
        <ContentBlock color="#D9F6F2">
          <h3>Magnetron</h3>
          <h3>6.00€</h3>
          <p><i>FIRST</i></p>
        </ContentBlock>
        <ContentBlock color="#C8E7FF">
          <h3>6vz</h3>
          <h3>1.00€</h3>
          <CustomButton>
            <p>Website</p>
          </CustomButton>
        </ContentBlock>
        <ContentBlock color="#FBE4FF">
          <h3>Nerd &bull; 10.00€</h3>
          <p><i> Thanks for all ! You kinda saved my life </i></p>
          <CustomButton>
            <p>Website</p>
          </CustomButton>
        </ContentBlock>
        <ContentBlock color="#FBD1FF">
          <h3>Matth. B</h3>
          <h3>5.00€</h3>
          <p><i>keep it up</i></p>
        </ContentBlock>
        <ContentBlock color="#F9E4DD">
          <h3>Henry Hiles &bull; 11.00€</h3>
          <p><i> Good luck with blahaj.land, keep up the good work Eryn! </i></p>
          <CustomButton>
            <p>Website</p>
          </CustomButton>
        </ContentBlock>
        <ContentBlock color="#FDE4E4">
          <h3>imnotklaus</h3>
          <h3>2.00€</h3>
        </ContentBlock>
      </SlideableList>
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
