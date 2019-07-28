<template>
  <div class="home">
    <img
      alt="A very fancy T-rex holds a large book while wearing her pearls and best hat"
      class="dino-img"
      src="../assets/tyrannothesaurus.png"
    />
    <HelloWorld msg="Tyrannothesaurus" />
    <Synonyms />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Synonyms from '@/components/Synonyms.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Synonyms
  }
}
</script>

<style>
.dino-img {
  width: 30vh;
}
</style>
