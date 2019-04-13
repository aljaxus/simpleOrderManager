<template>
  <v-layout row wrap fill-height>
    <v-flex xs6 class="pa-1" d-flex>
      <v-card fill-height>
        <v-card-text>
          <v-card
            class="my-2"
            v-for="i in 4"
            :key="i"
          >
            <v-card-text>
              {{ i + '' }}  
            </v-card-text>
          </v-card>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs6 class="pa-1" d-flex>
      <v-card>
        <v-card-text>
          ORDERS
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'ApplicationRoute',
  data: () => { return {

  }}  
}
</script>
<style>

</style>
