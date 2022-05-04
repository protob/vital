<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
import { useClient } from 'villus'
useHead({
  title: 'Vital',
  meta: [
    { name: 'description', content: 'Vital Vite Starter' },
  ],
})
useClient({
  url: import.meta.env.VITE_GRAPHQL_ENDPOINT,
})
</script>

<template>
  <RouterView />
</template>
