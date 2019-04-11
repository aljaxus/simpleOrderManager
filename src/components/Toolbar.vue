<template>
  <v-toolbar app>
    <v-toolbar-title class="headline">
      <v-btn 
        flat 
        large 
        v-if="this.$vuetify.breakpoint.lgAndUp"
        exact
        active-class=""
        :to="{name: 'home'}"
      >
        <span class="font-weight-light">simple</span>
        <span>OrderManager <v-icon>mdi-coffee</v-icon></span>
      </v-btn>
    </v-toolbar-title>
    <v-btn
      flat
      v-if="!this.$vuetify.breakpoint.lgAndUp"
      exact
      active-class=""
      :to="{name: 'home'}"
    >
      <span class="mr-2">home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn
      flat
      exact
      active-class=""
      :to="{name: 'app'}"
    >
      <span class="mr-2">App</span>
      <v-icon>mdi-apps</v-icon>
    </v-btn>
  </v-toolbar>
</template>
<script>
export default {
  
}
</script>