<template>
  <v-app :dark="appDark">
    <Toolbar />
    <Sidebar />

    <v-content class="ma-2" fill-height>
        <transition name="fade" mode="out-in" appear>
          <router-view></router-view>
        </transition>
    </v-content>

    <swUpdateSnackbar />
  </v-app>
</template>
<script>
import Store from './store'

export default {
  name: 'App',
  components: {
    'Toolbar': () => import('./components/Toolbar'),
    'Sidebar': () => import('./components/Sidebar'),
    'swUpdateSnackbar': () => import('./components/SnackbarSwUpdated')
  },
  data () {
    return {
      
    }
  },
  computed: {
    appDark: () => Store.getters['App/darkMode']
  }
}
</script>
<style>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s }
.fade-enter, .fade-leave-active { opacity: 0 }
</style>
