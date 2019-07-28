<template>
  <v-app>
    <v-content>
      <HelloWorld />
      <Synonyms />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Synonyms from './components/Synonyms'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Synonyms
  },
  data: () => ({
    //
  })
}
</script>
