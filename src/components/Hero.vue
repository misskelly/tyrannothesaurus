<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <h1 class="main-heading">Tyrannothesaurus</h1>
        <h2 class="text-bubble">
          Salutations, perchance might I engage you with an assemblage of
          sophisticated verbalism?
        </h2>
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

<style>
.main-heading {
  color: lime darken-4;
  font-family: 'IM Fell Great Primer SC', serif;
  font-size: 3rem;
  margin: 3rem auto;
}
.text-bubble {
  width: 40%;
  position: absolute;
  right: 12%;
  top: 9rem;
  z-index: 3;
  font-size: 1rem;
  text-align: left;
  background: hsla(0, 0%, 90%, 0.488);
  padding: 0.5rem;
  border-radius: 10px;
}
</style>
