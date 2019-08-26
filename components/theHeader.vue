<template>
  <div>
    <v-toolbar id="app_header" color="primary">
      <v-btn icon active-class large :to="'/'" color="accent">
        <span class="white--text headline">D</span>
        <!-- <img id="header_avater" src="icon.png" alt="" /> -->
      </v-btn>
      <v-toolbar-title id="app_title" to="/" v-text="title" />
      <v-spacer />
      <v-spacer />
      <!-- ヘッダーアイテム -->
      <v-toolbar-items class="hidden-sm-and-down">
        <!-- 大画面時に表示する遷移ボタン -->
        <v-tooltip v-for="(item, i) in items" :key="i" bottom>
          <template v-slot:activator="{ on }">
            <v-btn flat :to="item.to" color="white" class="list_item" v-on="on">
              <v-icon color="white">
                {{ item.icon }}
              </v-icon>
            </v-btn>
          </template>
          <span>{{ item.title }}</span>
        </v-tooltip>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-md-and-up">
        <!-- 小画面時に表示するサイドメニュー表示ボタン -->
        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon color="white">
            dehaze
          </v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- サイドメニュー -->
    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list dense>
        <v-subheader id="sub_header">
          {{ listTitle }}
        </v-subheader>
        <v-divider />
        <!-- NOTE V-listを使うと「unknown custom element」エラーになる -->
        <div v-for="item in items" :key="item.title">
          <v-icon color="secondary">
            {{ item.icon }}
          </v-icon>
          <span class="list_item" @click="$router.push(`${item.to}`)">
            {{ item.title }}
          </span>
          <v-spacer />
          <v-spacer />
        </div>
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
      drawer: false,
      items: [
        { title: 'Home', icon: 'home', to: '/' },
        { title: 'Profile', icon: 'person', to: '/profile' },
        { title: 'Skill', icon: 'keyboard', to: '/skill' },
        { title: 'Repositories', icon: 'folder', to: '/repositories' },
        { title: 'Contact', icon: 'email', to: '/contact' }
      ]
    }
  }
}
</script>

<style scoped>
#app_title {
  font-size: 24px;
  color: white;
}

#sub_header {
  font-size: 26px;
}

.list_item {
  font-size: 24px;
}

#header_avater {
  max-width: 36px;
  max-height: 36px;
}
</style>
