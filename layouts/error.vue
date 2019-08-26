<template>
  <v-app>
    <h1 v-if="error.statusCode === 404" class="headline mb-3">
      {{ pageNotFound }}
    </h1>
    <h1 v-else class="headline mb-3">
      {{ otherError }}
    </h1>
    <NuxtLink to="/" class="headline mb-3">
      Home へ戻る
    </NuxtLink>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
