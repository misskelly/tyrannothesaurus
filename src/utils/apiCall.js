import { key } from '@/assets/key.js'
import axios from 'axios'

const getWords = query => {
  return axios
    .get(
      `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${query}?key=${key}`
    )
    .then(response => {
      console.log(response)
      if (response.data[0].meta) {
        return {
          synonyms: response.data[0].meta.syns[0]
        }
      } else {
        return {
          didYouMean: response.data
        }
      }
    })
    .catch(e => {
      return {
        error: e.message
      }
    })
}

export default getWords
