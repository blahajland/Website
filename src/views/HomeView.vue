<script setup lang="ts">
import BlockCard from '@/components/cards/BlockCard.vue'
import BlahajButton from '@/library/vue/BlahajButton.vue'
import CustomGap from '@/library/vue/CustomGap.vue'
import GridContainer from '@/components/containers/GridContainer.vue'
import SlideableContainer from '@/components/containers/SlideableContainer.vue'
import ContentContainer from '@/components/roots/ContentContainer.vue'
import RandomTitle from '@/fetchables/RandomTitle.vue'
import AppsList from '@/fetchables/AppsList.vue'
import UsersList from '@/fetchables/UsersList.vue'
import LoadingState from '@/components/LoadingState.vue'
import PageContainer from '@/components/roots/PageContainer.vue'
import DonatorsList from '@/fetchables/DonatorsList.vue'
import SpinningBlahaj from '@/components/SpinningBlahaj.vue'
import ThingsContainer from '@/components/containers/ThingsContainer.vue'

import links from '@/assets/json/links.json'

import { assets } from '@/library/ts/static-tools'
import { changeLoc } from '@/library/ts/common-tools'
import BulletpointContainer from '@/components/containers/BulletpointContainer.vue'
import BulletpointCard from '@/components/cards/BulletpointCard.vue'
</script>

<template lang="pug">
PageContainer
  SpinningBlahaj
  ContentContainer
    template(#title)
      Suspense
        RandomTitle
        template(#fallback)
          h1 :3
      p Welcome to #[b Blahaj Land]! Hope you enjoy your stay.
    GridContainer(:rows='4')
      BlockCard(color='#ACD3DC')
        p Take a tour and see #[b what's inside :3]
        BlahajButton(
          background='var(--background)',
          hover='var(--surface1)',
          @click='changeLoc("#p1", false)'
        )
          img(alt='Blahaj', :src='assets.images.icons.get("open")')
          p Discover
      BlockCard(color='#F0C1B7')
        p Create your account and #[b pass the vibe check &gt;:3]
        BlahajButton(
          background='var(--background)',
          hover='var(--surface1)',
          @click='changeLoc(links.signup)'
        )
          img(alt='Sign up', :src='assets.images.icons.get("signup")')
          p Sign up
      BlockCard(color='#B1BCE1')
        p Just want to hang around? Join our #[b Discord]
        BlahajButton(
          background='var(--background)',
          hover='var(--surface1)',
          @click='changeLoc(links.discord)'
        )
          img(alt='Discord', :src='assets.images.icons.get("discord")')
          p Join
      BlockCard(color='#DCDCDC')
        p Already part of the community? Get access to #[b all the apps]
        BlahajButton(
          background='var(--background)',
          hover='var(--surface1)',
          @click='changeLoc(links.login)'
        )
          img(alt='Log in', :src='assets.images.icons.get("login")')
          p Open Dashboard
  CustomGap(gap='32px')
  ContentContainer
    template(#title)
      h2#p1 Why?
      p Why should you consider #[b Blahaj Land] for your needs ? ;3
    BulletpointContainer(color='#d3ddff')
      template(#image)
        img(:src='assets.images.pictures.get("screenshot1")', alt='Screenshot 1')
      BulletpointCard(color='#B1BCE1')
        img(alt='Website', :src='assets.images.icons.get("website")')
        h3 Host your own website for free!
        p With #[b blahaj.land] you can easily host your own static site for free!
      BulletpointCard(color='#ACD3DC')
        img(alt='Switch server', :src='assets.images.icons.get("switch")')
        h3 Transition with ease
        p
          | If you switch from #[b neocities.org], #[b Github Pages], or any other host, you'll
          | get #[b 15GB] of storage and a month of #[b Premium] for free.
      BulletpointCard(color='#C8E7FF')
        img(alt='Friends', :src='assets.images.icons.get("friend")')
        h3 Bring your friends in!
        p
          | For every person you invite, you'll get #[b 5GB] of storage. If they make a donation,
          | you'll get an extra #[b 10GB].
    CustomGap.displayOnDesktop(gap='48px')
    CustomGap.displayOnMobile(gap='0')
    BulletpointContainer(is-inverted, color='#f3d8ff')
      template(#image)
        img(:src='assets.images.pictures.get("screenshot2")', alt='Screenshot 2')
      BulletpointCard(color='#DEAAFF')
        img(alt='Communication', :src='assets.images.icons.get("communication")')
        h3 Communication services
        p E-mail, Fediverse, Send and #[b more]!
      BulletpointCard(color='#ECBCFD')
        img(alt='Cloud', :src='assets.images.icons.get("cloud")')
        h3 Cloud storage
        p #[b 1GB] of free storage. Get more storage, starting at #[b 1€&sol;month]
      BulletpointCard(color='#FFCBF2')
        img(alt='Pride flag', :src='assets.images.icons.get("rosa")')
        h3 Queer powered, queer friendly
        p Everybody is welcome here. You always will be.
  ContentContainer
    template(#title)
      h2#p2 Services
      p The stuff we host >:3
    Suspense
      template(#fallback)
        LoadingState
      SlideableContainer
        AppsList
  ContentContainer
    template(#title)
      h2#p3 User sites
      p Here you can view our user's sites :3
    Suspense
      template(#fallback)
        LoadingState
      SlideableContainer
        UsersList
  ContentContainer
    template(#title)
      h2#p4 Tiers
      p Get more features and support the website >83
    GridContainer
      BlockCard(color='#BCDBFF')
        h2 Starter
        h3 Free
        p
          | &bull; Email, Send, Vaultwarden, Haste #[b &amp; more] #[br] &bull; #[b 1GB] of
          | Nextcloud storage #[br] &bull; One #[b hosted site]
        BlahajButton(
          background='var(--background)',
          hover='var(--surface1)',
          @click='changeLoc(links.signup)'
        )
          img(alt='Sign up', :src='assets.images.icons.get("signup")')
          p Join
      BlockCard(color='#FFCEF1')
        h2 Supporter
        h3 Starting at 1€/month
        p
          | &bull; #[b 10GB] of Nextcloud storage #[br] &bull; #[b Unlimited] site hosting #[br]
          | &bull; All the advantages of the #[b Starter] tier
        BlahajButton(
          background='var(--background)',
          hover='var(--surface1)',
          @click='changeLoc(links.donate)'
        )
          img(alt='Donate', :src='assets.images.icons.get("donate")')
          p Donate
      BlockCard(color='#FFE5A3')
        h2 Premium
        h3 Starting at 5€/month
        p
          | &bull; #[b 250GB] of Nextcloud storage #[br] &bull; #[b Discord bot] hosting #[br]
          | &bull; All the advantages of the #[b Supporter] tier
        BlahajButton(
          background='var(--background)',
          hover='var(--surface1)',
          @click='changeLoc(links.donate)'
        )
          img(alt='Donate', :src='assets.images.icons.get("donate")')
          p Donate
  ContentContainer
    template(#title)
      h2#p5 Donations
      p Thanks for your #[i kind] donations &lt;3
    Suspense
      template(#fallback)
        LoadingState
      SlideableContainer
        DonatorsList
  ContentContainer(last)
    template(#title)
      h3 Let's keep in touch
    ThingsContainer
      BlahajButton(@click='changeLoc(links.mail)')
        img(alt='Mail', :src='assets.images.icons.get("mail")')
        p.displayOnDesktop E-mail
      BlahajButton(@click='changeLoc(links.discord)')
        img(alt='Discord', :src='assets.images.icons.get("discord")')
        p.displayOnDesktop Discord
      BlahajButton(@click='changeLoc(links.github)')
        img(alt='GitHub', :src='assets.images.icons.get("github")')
        p.displayOnDesktop GitHub
      BlahajButton(@click='changeLoc(links.tiktok)')
        img(alt='TikTok', :src='assets.images.icons.get("tiktok")')
        p.displayOnDesktop TikTok
</template>
