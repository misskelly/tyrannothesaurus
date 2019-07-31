import axios from 'axios'

const getWords = async query => {
  const key = process.env.VUE_APP_API_KEY
  try {
    const response = await axios.get(
      `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${query}?key=${key}`
    )
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
  } catch (e) {
    return {
      error: e.message
    }
  }
}

export default getWords
