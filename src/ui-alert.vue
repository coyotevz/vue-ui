<template>
  <div class="ui-alert">
    <div class="ui-alert-body" :class="[type]" role="alert" v-show="show"
      transition="ui-alert-toggle">
      <ui-icon class="ui-alert-icon" :icon="icon" v-if="!hideIcon"></ui-icon>

      <div class="ui-alert-text">
        <slot> <span v-text="text"></span> </slot>
      </div>

      <ui-icon-button class="ui-alert-close-button" type="clear" icon="&#xE5CD"
        arial-label="Close" @click="close" v-if="dismissible"></ui-icon-button>
    </div>
  </div>
</template>

<script>
import UiIcon from './ui-icon'
import UiIconButton from './ui-icon-button'

export default {
  name: 'ui-alert',

  props: {
    show: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'info' // 'info', 'success', 'warning' or 'error'
    },
    text: String,
    icon: String,
    hideIcon: {
      type: Boolean,
      default: false
    },
    dismissable: {
      type: Boolean,
      default: true
    }
  },

  created () {
    if (!this.icon) {
      let icon = this.type
      if (this.type === 'success') {
        icon = 'check_circle'
      }
      this.icon = icon
    }
  },

  methods: {
    close () {
      this.show = false
      this.$dispatch('dismissed')
    }
  },

  components: {
    UiIcon,
    UiIconButton
  }
}
</script>
