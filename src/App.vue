<template>
  <v-app dark>
    <Navigation />

    <v-content class="pa-2">
      <transition name="fade" mode="out-in" appear>
        <router-view></router-view>
      </transition>
    </v-content>

    <swUpdateSnackbar />
  </v-app>
</template>
<script>
export default {
  name: 'App',
  components: {
    'Navigation': () => import('./components/Navigation'),
    'swUpdateSnackbar': () => import('./components/SnackbarSwUpdated')
  },
  data () {
    return {
      
    }
  }
}
</script>
<style>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s }
.fade-enter, .fade-leave-active { opacity: 0 }
</style>
