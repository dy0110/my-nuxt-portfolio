<template>
  <v-card flat max-width="600" class="mx-auto">
    <v-card-title class="headline">
      <v-avatar left color="secondary">
        <span class="headline">
          <v-icon color="white" size="36">person</v-icon>
        </span>
      </v-avatar>
      &nbsp;Profile
    </v-card-title>
    <v-card-text>
      <!-- NOTE 画像が無い場合はアイコンを表示する-->
      <v-avatar
        v-if="user === undefined"
        class="mb-2"
        left
        color="accent"
        size="96"
      >
        <span class="white--text display-1">D</span>
      </v-avatar>
      <v-avatar v-else class="mb-2" left color="accent" size="96">
        <img :src="user.avatar_url" alt="アバター" />
      </v-avatar>
      <div>
        <p class="headline">
          Yoshida Daichi
        </p>
        <p class="subtitle-2">
          生年月日: 1995/1/10
          <br />
          出身: 宮城県
        </p>
      </div>
      <v-spacer />
      <div class="subtitle-1">
        2017年4月から2019年8月まで都内のSES企業に勤務していました。
        <br />
        2019年9月から都内のスタートアップ企業にてフロントエンジニアとして勤務します。
        <br />
        前職でもフロント側の実装に携わった経験から、以下の技術に関心を持っています。
        <br />
        <ul class="my-2">
          <li>モダンなフロントエンドの開発(Vue.js,Nuxt.js,React.jsなど...)</li>
          <li>モバイルアプリの開発(ネイティブ,Flutter,ReactNative,Cordova)</li>
        </ul>
        趣味は以下のようになります。
        <ul class="my-2">
          <li>プラモデル</li>
          <li>サッカー</li>
          <li>ゲーム</li>
          <li>コードを書くこと(プログラミングの勉強)</li>
        </ul>
        特にプラモデルに関しては完成品をSNSに投稿したり、
        関東近辺の模型展示会に参加して楽しんでいます。
      </div>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <scrollTopButton />
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import scrollTopButton from '../components/scrollTopButton'

export default {
  components: {
    scrollTopButton
  },
  computed: {
    ...mapGetters({
      user: 'user/getGithubUserData'
    })
  }
}
</script>
