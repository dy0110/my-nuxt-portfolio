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
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
