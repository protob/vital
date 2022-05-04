<script setup lang="ts">

import { useSampleStore } from '~/stores/sample'

const sample = useSampleStore()

sample.randomizeCounter()

</script>

<template>
  <nav class="footer text-xl mt-6">
    <h1>STORE</h1>
    <pre>{{ sample.counter }}</pre>
  </nav>
</template>
