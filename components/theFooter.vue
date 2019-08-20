<template>
  <v-footer :fixed="fixed" app color="primary">
    <span id="footer_text">
      &copy; 2019 Daichi Yoshida. All Rights Reserved.
    </span>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      fixed: false
    }
  }
}
</script>

<style scoped>
#footer_text {
  color: white;
}
</style>
