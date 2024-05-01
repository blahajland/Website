<script setup>
import ValidIcon from '@/components/inputs/assets/ValidIcon.vue'
import { ref } from 'vue'
import InvalidIcon from '@/components/inputs/assets/InvalidIcon.vue'
import ShowIcon from '@/components/inputs/assets/ShowIcon.vue'

const props = defineProps({
  input: {
    type: Object,
    required: true,
    validator(value) {
      return Object.prototype.hasOwnProperty.call(value, 'value')
    }
  },
  placeholder: {
    type: String,
    default: 'Value',
    validator(value) {
      return value !== ''
    }
  },
  pattern: {
    type: String,
    default: ''
  }
})

const VALIDATOR_STATE = {
  NONE: 0,
  VALID: 1,
  INVALID: 2
}

let reg
try {
  reg = new RegExp(props.pattern)
} catch (e) {
  console.log(`INVALID REGEX ${e}`)
  reg = undefined
}

const validator = ref(VALIDATOR_STATE.NONE)
const isShown = ref(false)

function validateString(event) {
  let value = event.target.value
  let val = VALIDATOR_STATE.NONE
  if (value === '') {
    val = VALIDATOR_STATE.INVALID
  } else if (reg !== undefined) {
    val = reg.test(value) ? VALIDATOR_STATE.VALID : VALIDATOR_STATE.INVALID
  }
  validator.value = val
  // eslint-disable-next-line vue/no-mutating-props
  props.input.value = value
}


</script>

<template>
  <div class="BlahajPassword" :class="{valid : validator === 1, invalid : validator === 2}">
    <div>
      <p>{{ placeholder }} &bull; mandatory</p>
      <input :type="isShown ? 'text' : 'password'"
             :value="input.value"
             @input="(e) => validateString(e)"
             autocomplete="password" />
    </div>
    <InvalidIcon v-if="validator === 2" size="24px" color="#FF2020" />
    <ValidIcon v-if="validator === 1" size="24px" color="#20FF20" />
    <ShowIcon :is-shown="isShown" size="24px" color="var(--text)" @click="isShown = !isShown"/>
  </div>
</template>

<style scoped lang="sass">
.BlahajPassword
  padding: 4px 16px 8px
  border-radius: var(--radius-med)
  background: var(--hover)
  display: flex
  flex-direction: row
  justify-content: stretch
  align-items: center
  gap: 16px
  transition: var(--trans)

  *
    margin: 0

  &:hover
    background: var(--blahaj)

  &.valid
    background: color-mix(in srgb, var(--hover), green 20%)

  &.invalid
    background: color-mix(in srgb, var(--hover), red 20%)

  > div
    display: flex
    flex-direction: column
    justify-content: stretch
    align-items: stretch
    gap: 4px
    flex-grow: 1

    > input
      border-radius: var(--radius-small)
      color: var(--text)
      padding: 8px
      flex-grow: 1
      background: none
      border: none

    > p
      font-size: 10px
      opacity: 0.66
</style>