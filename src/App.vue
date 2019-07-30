<template>
  <v-app>
    <v-content>
      <Hero />
      <Synonyms />
    </v-content>
  </v-app>
</template>

<script>
import Hero from './components/Hero'
import Synonyms from './components/Synonyms'

export default {
  name: 'App',
  components: {
    Hero,
    Synonyms
  },
  data: () => ({
    //
  })
}
</script>
<style>
main {
  background: #ffffff;
}
</style>
