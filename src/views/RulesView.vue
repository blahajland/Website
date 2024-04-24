<script setup>
import { changeLoc } from '@/assets/js/linkTools.js'
import TabGroup from '@/components/containers/TabGroup.vue'
import TabButton from '@/components/TabButton.vue'
import PageSection from '@/components/containers/PageSection.vue'
import BlockGrid from '@/components/containers/BlockGrid.vue'
import ContentBlock from '@/components/blocks/ContentBlock.vue'
</script>

<template>
  <div class="RulesView">
    <TabGroup>
      <TabButton @click="changeLoc('#r1', false)">
        <p>Rules</p>
      </TabButton>
      <TabButton @click="changeLoc('#r2', false)">
        <p>Terms of Service</p>
      </TabButton>
    </TabGroup>
    <a href="https://blahaj.itsjamie.dev/">
      <img src="/images/spinning-blahaj.gif" alt="Blahaj" />
    </a>
    <PageSection>
      <template #title>
        <h1 id="r1">Rules</h1>
        <p>Last updated : 14/11/2023</p>
      </template>
      <BlockGrid>
        <ContentBlock color="#C3FFD4">
          <h3>Respectful Behavior</h3>
          <p>
            Treat others with respect and kindness. Do not engage in behavior that may be perceived
            as disrespectful, offensive, or harmful. Remember that behind each username is a real
            person.
          </p>
        </ContentBlock>
        <ContentBlock color="#B1BCE1">
          <h3>Anti-Discrimination</h3>
          <p>
            Absolutely no tolerance for homophobia, transphobia, bigotry, or racism. This includes
            offensive language, slurs, or any form of discrimination based on race, gender, sexual
            orientation, or identity.
          </p>
        </ContentBlock>
        <ContentBlock color="#ACD3DC">
          <h3>Content Piracy</h3>
          <p>
            Do not share or promote links to pirated content, unless explicitly allowed by the
            server owner. Respect intellectual property rights and adhere to copyright laws.
          </p>
        </ContentBlock>
        <ContentBlock color="#C8E7FF">
          <h3>Anti-Spam</h3>
          <p>
            Refrain from spamming the channels with repetitive messages, excessive emojis, or any
            form of unwanted content.
          </p>
        </ContentBlock>
        <ContentBlock color="#DEAAFF">
          <h3>Zalgo-Free Zone</h3>
          <p>
            Do not use zalgo text or any other forms of disruptive formatting that make messages
            difficult to read. Maintain clear and comprehensible communication.
          </p>
        </ContentBlock>
        <ContentBlock color="#ECBCFD">
          <h3>Spoiler Etiquette</h3>
          <p>
            If discussing sensitive content, use spoliers and ensure you tag the spoilered content
            accordingly.
          </p>
        </ContentBlock>
        <ContentBlock color="#FFCBF2">
          <h3>NSFW Guidelines</h3>
          <p>
            Explicit adult content is strictly prohibited outside of designated NSFW channels. The
            definition of NSFW content is at the discretion of the server moderators and
            administrators. Violation of this rule may result in immediate action.
          </p>
        </ContentBlock>
      </BlockGrid>
    </PageSection>
    <PageSection :last="true">
      <template #title>
        <h1 id="r2">Terms of Service</h1>
        <p>Last updated : --/--/20--</p>
      </template>
      <BlockGrid>
        <ContentBlock color="#DCDCDC">
          <h3>Coming soon !</h3>
          <p>More infos on the <b>Discord</b> server.</p>
        </ContentBlock>
      </BlockGrid>
    </PageSection>
  </div>
</template>

<style>
.RulesView {
  padding-bottom: 64px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: stretch;
  gap: 8px;
}

.RulesView * {
  margin: 0;
}

.RulesView > h1 {
  font-size: 2.5em;
}

.RulesView > a:first-of-type {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
}

.RulesView > a > img {
  height: 220px;
  z-index: -1;
}
</style>
