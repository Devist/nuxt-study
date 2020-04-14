export default ($axios: any) => () => ({
  fetch() {
    return $axios.$get('/event/test')
  }
})
