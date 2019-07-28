<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-img
          :src="require('../assets/tyrannothesaurus.png')"
          class="my-3"
          contain
          height="300"
        ></v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Hero'
}
</script>
