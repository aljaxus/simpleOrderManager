<template>
  <v-toolbar app v-if="small">
    <v-toolbar-side-icon @click="openSidebar()"></v-toolbar-side-icon>
  </v-toolbar>
</template>
<script>
import Store from '../store'
export default {
  computed: {
    small () {return !this.$vuetify.breakpoint.lgAndUp},
    sidebarState: () => Store.getters['App/sidebarState']
  },
  methods: {
    openSidebar () {
      Store.dispatch('App/toggleSidebarState')
    }
  }
}
</script>