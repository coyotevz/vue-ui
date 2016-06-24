<template>
  <div id="app" class="ui-layout-container">
    <div class="ui-layout">

      <ui-toolbar class="ui-layout-header" brand="Vue UI" :title="currentComponent.title" colored fixed>
        <div slot="actions">
          <ui-icon-button type="clear" color="white" icon="arrow_back"></ui-icon-button>
          <ui-icon-button type="clear" color="white" icon="star_border"></ui-icon-button>
          <ui-icon-button type="clear" color="white" icon="more_vert" has-dropdown-menu
            :menu-options="menu" dropdown-position="bottom right"></ui-icon-button>
        </div>
      </ui-toolbar>

      <div class="sidebar desktop">
        <div class="brand">
          <h1 class="title">VUE UI</h1>
        </div>

        <ul class="menu">
          <div class="menu-header">Components</div>
          <a class="menu-item" v-for="item in menu | orderBy 'id'"
            :class="{ 'active': currentComponent.id === item.id }"
            :href="'#/' + item.id" v-text="item.title"></a>
        </ul>
      </div>

      <main class="page ui-layout-content">
        <div class="container">
          <component :is="currentComponent.id"></component>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
/* global location */
import UiButton from 'src/ui-button'
import UiToolbar from 'src/ui-toolbar'
import UiIconButton from 'src/ui-icon-button'

import UiAlertDocs from './components/UiAlertDocs'
import UiButtonDocs from './components/UiButtonDocs'
import UiRippleInkDocs from './components/UiRippleInkDocs'

let menu = [
  { id: 'ui-alert-docs', title: 'Alert' },
  { id: 'ui-button-docs', title: 'Button' },
  { id: 'ui-ripple-ink-docs', title: 'Ripple Ink' }
]

export default {
  data () {
    return {
      showSidebar: false,
      currentComponent: menu[0],
      menu
    }
  },

  ready () {
    this.navigate(true)
    window.addEventListener('hashchange', () => this.navigate())
  },

  methods: {
    navigate (onPageLoad) {
      let component = location.hash.length
        ? location.hash.substring(2) : null

      if (component) {
        this.currentComponent = this.findComponentById(component)

        // Reset the document scroll position
        document.body.scrollTop = 0

        if (onPageLoad) {
          this.$nextTick(() => {
            document.querySelector('.menu a.active').scrollIntoView()
          })
        }
      }

      if (this.showSidebar) {
        this.toggleSidebar()
      }
    },

    findComponentById (id) {
      for (var i = 0; i < this.menu.length; i++) {
        if (this.menu[i].id === id) {
          return this.menu[i]
        }
      }

      // Falback to first item
      return this.menu[0]
    },

    toggleSidebar () {
      this.showSidebar = !this.showSidebar
    }
  },

  components: {
    UiButton,
    UiToolbar,
    UiIconButton,

    UiAlertDocs,
    UiButtonDocs,
    UiRippleInkDocs
  }
}
</script>

<style lang="scss">
@import 'src/scss/variables';
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  // margin-top: -100px;
  // max-width: 600px;
  font-family: Roboto, Helvetica, sans-serif;
  // text-align: center;
}

#app .menu a {
  color: #42b983;
  text-decoration: none;
}

.special-note {
  max-width: 640px;
  .ui-alert-body {
    background-color: $palette-yellow-100;
  }
}
</style>
