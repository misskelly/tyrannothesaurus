<template>
  <v-container>
    <v-content>
      <v-text-field
        v-model="queryWord"
        label="Enter a word"
        solo
        @keydown.enter="lookUp"
      >
        <v-fade-transition slot="append">
          <v-icon v-if="queryWord" @click="lookUp"
            >mdi-book-search-outline</v-icon
          >
        </v-fade-transition>
      </v-text-field>
      <h2>{{ heading }}</h2>
      <v-card>
        <ul v-if="words && words.length">
          <a class="word-link" href="#">
            <li v-for="word of words" :key="word">{{ word }}</li>
          </a>
        </ul>
        <ul v-if="errors && errors.length">
          <li
            v-for="error of errors"
            :key="`${this.queryWord}_${error.message}`"
          >
            {{ error.message }}
          </li>
        </ul>
      </v-card>
    </v-content>
  </v-container>
</template>

<script>
import getWords from '../utils/apiCall'

export default {
  name: 'Synonyms',
  data() {
    return {
      queryWord: null,
      heading: '',
      words: [],
      errors: []
    }
  },
  methods: {
    lookUp() {
      console.log('got to lookUp')
      getWords(this.queryWord)
        .then(result => {
          if (result.synonyms) {
            this.words = result.synonyms
            this.heading = `Synonyms for ${queryWord}`
          } else if (result.didYouMean) {
            this.heading =
              'Hmm...Tyrannothesaurus could not find that word.  Did you mean one of these?'
            this.words = result.didYouMean
          }
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },
  created() {
    getWords('great').then(result => console.log(result))
  }
}
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
</style>
