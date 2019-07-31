<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <h1 class="main-heading">Tyrannothesaurus</h1>
        <!-- <h2 class="text-bubble">
          Salutations, perchance might I engage you with an assemblage of
          sophisticated verbalism?
        </h2> -->
        <v-img
          :src="require('../assets/tyrannothesaurus.png')"
          class="my-3"
          contain
          height="425"
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

<style>
.main-heading {
  font-family: 'Miss Fajardose', cursive;
  text-shadow: 3px 3px 3px hsla(54, 70%, 30%, 0.8);
  font-size: 12vw;
}
</style>
