<template>
  <header class="ui-toolbar" :class="styleClasses">
    <div class="ui-toolbar-left">
      <ui-icon-button class="ui-toolbar-nav-icon" type="clear"
        :color="iconColor" :icon="navIcon" @click="navIconClick"
        v-if="!hideNavIcon"></ui-icon-button>

      <div class="ui-toolbar-brand" v-if="brand !== undefined">
        <slot name="brand">
          <div class="ui-toolbar-brand-text" v-text="brand"></div>
        </slot>
      </div>

    </div>

    <div class="ui-toolbar-center">
      <div class="ui-toolbar-divider" v-if="!hideBrandDivider && brand !== undefined"></div>

      <slot>
        <div class="ui-toolbar-title" v-text="title"></div>
      </slot>
    </div>

    <div class="ui-toolbar-right">
      <slot name="actions"></slot>
    </div>

  </header>
</template>

<script>
import UiIconButton from './ui-icon-button'

export default {
  name: 'ui-toolbar',

  props: {
    colored: {
      type: Boolean,
      default: false
    },
    title: String,
    brand: String,
    textColor: {
      type: String,
      default: null
    },
    hideBrandDivider: {
      type: Boolean,
      default: false
    },
    navIcon: {
      type: String,
      default: 'menu'
    },
    hideNavIcon: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    styleClasses () {
      let classes = ['ui-toolbar-' + (this.colored ? 'colored' : 'default')]

      if (!this.flat) {
        classes.push('ui-toolbar-raised')
      }
      if (this.textColor !== null) {
        classes.push('text-color-' + this.textColor)
      } else {
        classes.push(this.colored ? 'text-color-white' : 'text-color-black')
      }
      return classes
    },
    iconColor () {
      return this.colored ? 'white' : 'black'
    }
  },

  methods: {
    navIconClick () {
      this.$dispatch('nav-icon-clicked')
    }
  },

  components: {
    UiIconButton
  }
}
</script>
