<template>
  <!--Header / Navbar-->
  <div>
    <button
      v-if="!$store.state.isUserLoggedIn"
      :to="{
        name: 'login'
      }">
      Login
    </button>

    <button
      v-if="!$store.state.isUserLoggedIn"
      :to="{
        name: 'register'
      }">
      Sign Up
    </button>

    <button
      v-if="$store.state.isUserLoggedIn"
      @click="logout">
      Log Out
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    }
  }
}
</script>

<style scoped>
</style>
