<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-btn large icon @click="scrollToTop()" v-on="on">
        <v-icon size="48">
          expand_less
        </v-icon>
      </v-btn>
    </template>
    <span>ページトップへ戻る</span>
  </v-tooltip>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      scrollTo(0, 0)
    }
  }
}
</script>
