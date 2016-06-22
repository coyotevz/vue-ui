<template>
  <button class="ui-icon-button" :class="styleClasses"
    :aria-label="ariaLabel || tooltip" v-disabled="disabled || loading"
    v-el:button>
    <ui-icon class="ui-icon-button-icon" :icon="icon" v-show="!loading"></ui-icon>
  </button>
</template>

<script>
import UiIcon from './ui-icon.vue'

import disabled from './directives/disabled'

export default {
  name: 'ui-icon-button',

  props: {
    type: {
      type: String,
      default: 'normal', // 'normal' or 'flat' or 'clear'
      coerce (type) {
        return 'ui-icon-button-' + type
      }
    },
    color: {
      type: String,
      default: 'default', // 'default', 'primary', 'accent', 'success', 'warning' or 'danger'
      coerce (color) {
        return 'color-' + color
      }
    },
    icon: {
      type: String,
      required: true
    },
    ariaLabel: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    styleClases () {
      let classes = [this.type, this.color]
      return classes
    }
  },

  components: {
    UiIcon
  },

  directives: {
    disabled
  }
}
</script>
