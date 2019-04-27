export default {
  open() {
    this.$store.commit('SIDEBAR_OPEN');
  },
  close() {
    this.$store.commit('SIDEBAR_CLOSE');
  }
}
