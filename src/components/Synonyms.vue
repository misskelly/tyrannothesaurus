<template>
  <section>
    <h2>{{ heading }}</h2>
    <ul v-if="words && words.length">
      <a class="word-link" href="#">
        <li v-for="word of words" :key="word">{{ word }}</li>
      </a>
    </ul>
    <ul v-if="errors && errors.length">
      <li v-for="error of errors">{{ error.message }}</li>
    </ul>
  </section>
</template>

<script>
import axios from 'axios'
import { key } from '@/assets/key.js'
export default {
  name: 'Synonyms',
  props: {
    queryWord: String
  },
  data() {
    return {
      searched: this.queryWord,
      heading: '',
      words: [],
      errors: []
    }
  },
  created() {
    axios
      .get(
        `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${searched}?key=${key}`
      )
      .then(response => {
        console.log(response)
        if (response.data[0].meta) {
          this.words = response.data[0].meta.syns[0]
          this.heading = `Synonyms for ${searched}`
        } else {
          this.heading =
            'Hmm...Tyrannothesaurus could not find that word.  Did you mean one of these?'
          this.words = response.data
        }
        console.log('words', this.words)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
/* .syn-link {
} */
</style>
