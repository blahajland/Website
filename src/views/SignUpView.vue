<script setup>
import PageContainer from '@/components/containers/PageContainer.vue'
import FormContainer from '@/components/containers/FormContainer.vue'
import { ref } from 'vue'
import BlahajInput from '@/components/inputs/BlahajInput.vue'
import SpinningBlahaj from '@/components/SpinningBlahaj.vue'
import BlahajPassword from '@/components/inputs/BlahajPassword.vue'
import CustomGap from '@/components/CustomGap.vue'
import BlahajButton from '@/components/inputs/BlahajButton.vue'

const formData = ref(
  {
    fullName:
      { value: '' },
    userName: { value: '' },
    password: {
      pass1: { value: '' },
      pass2: { value: '' }
    },
    backupEmail: { value: '' },
    discordId: { value: '' }
  }
)

</script>

<template>

  <div class="ViewRules">
    <SpinningBlahaj />
    <PageContainer>
      <template #title>
        <h1>Sign up</h1>
        <p>awa uwu ewe</p>
      </template>
      <FormContainer>
        <BlahajInput :input="formData.fullName" placeholder="Display name" :is-mandatory="true" datatype="name" />
        <BlahajInput :input="formData.userName" placeholder="User name" datatype="username" pattern="^a*$" />
        <BlahajInput :input="formData.backupEmail" placeholder="E-mail address"
                     :is-mandatory="true" datatype="email" />
        <BlahajPassword :input="formData.password.pass1" placeholder="Password" />
        <BlahajPassword :input="formData.password.pass2" placeholder="Retype your password" />
        <BlahajInput :input="formData.discordId" placeholder="Discord ID" />
        <CustomGap gap="16px" />
        <BlahajButton style="align-self: center; padding: 20px 40px" color="var(--hover)" hover="var(--blahaj)">
          <p>Sign up</p>
        </BlahajButton>
      </FormContainer>
    </PageContainer>
  </div>
</template>
