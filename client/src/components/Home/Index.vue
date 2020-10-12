<template>
  <!--show different components based on login state-->
</template>

<script>
// import services as needed
import {mapState} from 'vuex'

export default {
  components: {
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  data () {
    return {
    }
  },
  async mounted () {
    // fetch data on mount as needed
  }
}
</script>

<style scoped>
</style>
