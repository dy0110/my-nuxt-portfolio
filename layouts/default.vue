<template>
  <v-app>
    <theHeader />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <theFooter />
  </v-app>
</template>

<script>
import theHeader from '../components/theHeader'
import theFooter from '../components/theFooter'

export default {
  components: {
    theHeader,
    theFooter
  }
}
</script>
