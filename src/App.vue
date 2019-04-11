<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGNa</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>

    <swUpdateSnackbar />
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    'swUpdateSnackbar': () => import('./components/SnackbarSwUpdated')
  },
  data () {
    return {
      //
    }
  }
}
</script>
