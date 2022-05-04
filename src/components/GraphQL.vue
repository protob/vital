<script lang="ts">
import { useQuery } from 'villus'

export default {
  setup() {
    const AllPosts = `
      query AllPosts {
        post {
          id  
          title
        }
      }
    `

    const { data } = useQuery({
      query: AllPosts,
    })

    return { data }
  },
}
</script>

<template>
  <div>
    <div v-if="data">
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>
