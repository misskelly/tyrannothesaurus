<template>
  <v-container>
    <v-content>
      <v-layout justify-space-around>
        <v-flex xs12 sm10 md10 lg10>
          <v-text-field
            v-model="queryWord"
            class-name="input"
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
          <h3 class="dynamic-heading">{{ heading }}</h3>
          <v-divider v-if="heading"></v-divider>
          <v-chip-group column active-class="primary--text">
            <v-chip
              v-for="(word, i) in words"
              :key="i"
              large
              color="primary"
              outlined
              @input="newQueryWord(word)"
              >{{ word }}
              <v-icon color="primary" right
                >mdi-arrow-right-circle-outline</v-icon
              >
            </v-chip>
          </v-chip-group>
        </v-flex>
      </v-layout>
      <v-card v-if="errors && errors.length">
        <v-card-text
          v-for="(error, i) of errors"
          :key="`${i}_${error.message}`"
          >{{ error.message }}</v-card-text
        >
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
  created() {
    getWords('great').then(result => console.log(result))
  },
  methods: {
    newQueryWord(word) {
      this.queryWord = word
      this.lookUp()
    },
    lookUp() {
      getWords(this.queryWord)
        .then(result => {
          if (result.synonyms) {
            this.words = result.synonyms
            this.heading = `Synonyms for ${this.queryWord}`
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
  }
}
</script>

<style>
body {
  font-family: 'Aleo', serif;
}

.dynamic-heading,
.v-chip__content,
#input-12 {
  font-family: 'Aleo', serif !important;
}
.dynamic-heading {
  margin-top: 2rem;
  letter-spacing: 1px;
}

.v-chip:before {
  background-color: white !important;
}

.v-chip__content {
  color: black !important;
}

.v-divider {
  margin: 1rem 0 2rem 0;
}
</style>
