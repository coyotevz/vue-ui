<template>
  <div class="ui-alert">
    <div class="ui-alert-body" :class="[type]" role="alert" v-show="show"
      transition="ui-alert-toggle">
      <ui-icon class="ui-alert-icon" :icon="icon" v-if="!hideIcon"></ui-icon>

      <div class="ui-alert-text">
        <slot><span v-text="text"></span></slot>
      </div>

      <ui-icon-button class="ui-alert-close-button" icon="&#xE5CD" type="clear"
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
    dismissible: {
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

<style lang="scss">
@import "scss/variables";

.ui-alert {
  font-family: $font-stack;
  font-size: 14px;
  line-height: 1.4em;
  overflow: hidden;
  display: flex;
  width: 100%;
  border-radius: 2px;
  margin: 0 auto 0 auto;

  a {
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  .ui-alert-close-button {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    margin-right: -8px;
    margin-top: -4px;
    margin-bottom: -4px;
    color: $color-primary-hint;
    margin-left: 8px;

    &:not([disabled]):hover,
    body[modality="keyboard"] &:focus {
      color: rgba-tpl($color-black, 0.8);
    }

    .ui-icon {
      font-size: 18px;
      margin: 0;
    }
  }
}

.ui-alert-body {
  width: 100%;
  //min-height: 52px;
  padding: 12px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;

  &.error {
    background-color: rgba-tpl($color-error, 0.12);
    a, .ui-alert-icon { color: $color-error; }
  }

  &.success {
    background-color: rgba-tpl($color-success, 0.12);
    a, .ui-alert-icon { color: $color-success; }
  }

  &.info {
    background-color: rgba-tpl($color-info, 0.12);
    a, .ui-alert-icon { color: $color-info; }
  }

  &.warning {
    background-color: rgba-tpl($color-warning, 0.12);
    a, .ui-alert-icon { color: $color-warning; }
  }
}

.ui-alert-icon {
  flex-shrink: 0;
  margin-right: 12px;
}

.ui-alert-text {
  flex-grow: 1;
  color: rgba-tpl($color-black, 0.75);
}

.ui-alert-toggle-transition {
  transition: all 0.3s ease;
  margin-top: 0;
  margin-bottom: 12px;
}

.ui-alert-toggle-enter,
.ui-alert-toggle-leave {
  margin-top: -52px;
  opacity: 0;
  margin-bottom: 0;
}
</style>
