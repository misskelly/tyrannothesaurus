import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: colors.lime.darken4,
        secondary: colors.deepOrange.base,
        accent: colors.teal.base,
        error: colors.pink.base,
        warning: colors.amber.base,
        info: colors.cyan.base,
        success: colors.green.base
      }
    }
  }
})
