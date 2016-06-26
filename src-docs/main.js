import Vue from 'vue'
import hljs from 'highlight.js/lib/highlight'
import App from './App'

require('scss/ui-style.scss')
require('highlight.js/styles/solarized-light.css')

Vue.directive('hljs', require('./hljs').default)

Vue.mixin({
  ready () {
    hljs.initHighlighting.called = false
    hljs.initHighlighting()
    document.querySelector('#app main').scrollTop = 0
  }
})

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

hljs.registerLanguage('css', require('highlight.js/lib/languages/css'))
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
