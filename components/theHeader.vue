<template>
  <div>
    <v-toolbar id="app_header" extended color="primary">
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon color="white">
          dehaze
        </v-icon>
      </v-btn>

      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon color="white">
          favorite
        </v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list dense>
        <v-subheader id="sub_header">
          {{ listTitle }}
        </v-subheader>
        <v-divider />
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="list_item">
              <nuxt-link :to="item.to">
                {{ ' ' + item.title }}
              </nuxt-link>
            </v-list-item-title>
          </v-list-item-content>
          <v-spacer />
          <v-spacer />
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Daichi Yoshida's PortForio",
      listTitle: 'Contents',
      drawer: null,
      items: [
        { title: 'Home', icon: 'home', to: '/' },
        { title: 'Profile', icon: 'person', to: '/profile' },
        { title: 'Skill', icon: 'laptop_mac', to: '/skill' },
        { title: 'Repositories', icon: 'folder', to: '/repositories' },
        { title: 'Contact', icon: 'email', to: '/contact' }
      ]
    }
  }
}
</script>

<style scoped>
#app_header {
  color: white;
}

#sub_header {
  font-size: 26px;
}

.list_item {
  font-size: 24px;
}
</style>
