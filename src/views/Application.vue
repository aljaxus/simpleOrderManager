<template>
  <v-layout row wrap fill-height>
    <v-flex xs6 class="pa-1">
      <v-card
        class="my-2"
        v-for="i in 4"
        :key="i"
      >
        <v-card-text>
          {{ i + '' }}  
        </v-card-text>
      </v-card>      
    </v-flex>
    <v-flex xs6 class="pa-1">
      <v-card
        class="my-2"
        v-for="(o, i) in orders"
        :key="i"
      >
        <v-card-text>
          {{ i + '' }}  
        </v-card-text>
      </v-card>      
    </v-flex>
  </v-layout>
</template>
<script>
import Store from '@/store'
const test = [
  'testing'
]


export default {
  name: 'ApplicationRoute',
  data: () => { return {
    Store
  }},
  computed: {

  }
}
</script>
<style>

</style>
