<template>
  <!-- TODO async dataでStoreへGithubのユーザー情報を注入 -->
  <v-layout column justify-center align-left>
    <v-flex xs12 sm8 md6>
      <div class="display-2 my-2">
        <v-avatar left color="secondary" size="60">
          <span class="display-2">
            <v-icon color="white" size="48">
              laptop_mac
            </v-icon>
          </span>
        </v-avatar>
        &nbsp;Daichi Yoshida's PortForio
      </div>
      <v-divider class="my-3" />
      <div class="headline mb-3">
        Yoshida Daichi のポートフォリオへようこそ
        <br />
        Nuxt.js + Vuetify で構成されています
      </div>
    </v-flex>
  </v-layout>
</template>
