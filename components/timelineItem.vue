<template>
  <v-card class="elevation-2">
    <v-card-title class="headline white--text teal lighten-2">
      {{ title }}
    </v-card-title>
    <v-card-text>
      <div class="subtitle-2">
        {{ subtitle }}
      </div>
      <ul class="my-2">
        <li v-for="(item, index) in eventArray" :key="index">
          {{ item }}
        </li>
      </ul>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    eventArray: {
      type: Array,
      default: null
    }
  }
}
</script>
