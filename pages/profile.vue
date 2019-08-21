<template>
  <v-layout column justify-center align-left>
    <v-flex xs12 sm8 md6>
      <profileCard />
      <!-- TODO タイムラインを置く -->
    </v-flex>
  </v-layout>
</template>

<script>
import profileCard from '../components/profileCard'

export default {
  components: {
    profileCard
  }
}
</script>
