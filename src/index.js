import UiButton from './ui-button'

require('scss/ui-style')

const VueUi = {
  UiButton,

  install (Vue) {
    Vue.component('ui-button', UiButton)
  }
}

export default VueUi
