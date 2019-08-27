<template>
  <v-layout column justify-center align-left>
    <v-flex xs12 sm8 md6>
      <profileCard />
      <timeLine />
    </v-flex>
  </v-layout>
</template>

<script>
import profileCard from '../components/profileCard'
import timeLine from '../components/timeLine'

export default {
  components: {
    profileCard,
    timeLine
  }
}
</script>
