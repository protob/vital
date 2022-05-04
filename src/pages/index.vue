<script setup lang="ts">
import { useSampleStore } from '~/stores/sample'

const sample = useSampleStore()
const counter = $ref(sample.counter)

const router = useRouter()

const { t } = useI18n()

const popupMsg = (msg) => {
  alert(msg)
}

</script>

<template>
  <div>
    <h1 class="text-4xl text-center">
      VITAL
    </h1>
    <GraphQL />
    <SampleStore />
    <div class="container mx-auto  pt-6">
      <div class="flex flex-row  justify-center">
        <div class="mr-2">
          <prt-button @click="popupMsg('Hello')">
            Click me
          </prt-button>
        </div>

        <router-link to="/about" :title="t('button.about')">
          <prt-button>About</prt-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
