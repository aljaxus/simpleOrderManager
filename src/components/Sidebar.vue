<template>
  <v-navigation-drawer
    class="pa-0"
    v-model="sidebarState"
		:mini-variant="sidebarMini"
		:touchless="$vuetify.breakpoint.lgAndUp"
    :permanent="$vuetify.breakpoint.lgAndUp"
		clipped
		fixed
		app
  >
    <v-layout column fill-height>
      <v-list>
        <v-list-tile v-if="sidebarMini" @click.stop="sidebarMini = false">
          <v-list-tile-action>
            <v-icon>mdi-arrow-right</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile avatar tag="div" v-if="!sidebarMini && $vuetify.breakpoint.lgAndUp">
 
          <v-list-tile-content v-if="sidebarMini">
            <v-list-tile-title>SOM</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="sidebarMini = true">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-list expand>
        <div
          v-for="(i, j) in items"
          :key="j"
        >

          <v-list-tile
            v-if="!i.items"
            :to="i.to"
            exact
          >
            <v-list-tile-action v-if="i.icon">
              <v-icon>{{ i.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content v-if="i.title && !sidebarMini">
              <v-list-tile-title>{{ i.title }}</v-list-tile-title>
            </v-list-tile-content>  
          </v-list-tile>

          <v-list-group
            v-if="i.items"
            active-class=""
            :prepend-icon="i.icon"
            value="true"
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>{{ i.title }}</v-list-tile-title>
              </v-list-tile>
            </template>
            <template
              v-for="(l, m) in i.items"
            >
              <v-list-tile
                :key="m"
                v-if="l.permission?!!perms[l.permission]:true"
                :class="!sidebarMini?'pl-3':''"
                :to="l.to"
              >
                <v-list-tile-action v-if="l.icon">
                  <v-icon>{{ l.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-title v-if="!sidebarMini">{{ l.title }}</v-list-tile-title>
              </v-list-tile>
            </template>
          </v-list-group>
        </div>

      </v-list>
      <v-spacer></v-spacer>
      <v-list :class="sidebarMini?'':'pb-1'">
        <v-list-tile v-if="sidebarMini" href="https://aljaxus.eu" target="_blank">
          <v-list-tile-action>
            <v-icon small>mdi-code-braces</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile v-if="!sidebarMini" class="signature">
          <v-list-tile-content>
            <v-list-tile-title>
              <span style="font-size: medium">
                Made by <a href="https://aljaxus.eu" target="_blank" title="Aljaxus.eu home page">Aljaxus</a>  with 
                <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" title="Visual Studio Code home page">
                  <v-icon style="font-size: larger">mdi-visual-studio-code</v-icon>
                </a>
              </span>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-layout>
  </v-navigation-drawer>
</template>
<script>
import Store from '@/store'

export default {
  data () { return {
    items: [
      { title: 'Home', to: {name: 'home'}, icon: 'mdi-home' },
      { title: 'App', to: {name: 'app'}, icon: 'mdi-apps' },
    ]
  }},
  computed: {
    sidebarMini: {
			get () {
				if (this.$vuetify.breakpoint.mdAndDown) return false
				return Store.getters['App/sidebarMini']
			},
			set: data => {
        Store.dispatch('App/toggleSidebarMini', data)
      }
    },
    sidebarState: {
			get () { return this.$vuetify.breakpoint.lgAndUp ? true : Store.getters['App/sidebarState'] },
			set: data => Store.dispatch('App/toggleSidebarState', data)
    }
  }
}
</script>
<style>
.signature a,
.signature a i {
  text-decoration: none;
  color: #1976d2 !important
}
</style>
