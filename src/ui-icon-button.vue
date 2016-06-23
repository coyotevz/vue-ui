<template>
  <button class="ui-icon-button" :class="styleClasses"
    :aria-label="ariaLabel || tooltip" v-disabled="disabled || loading"
    v-el:button>
    <ui-icon class="ui-icon-button-icon" :icon="icon" v-show="!loading"></ui-icon>

    <ui-ripple-ink v-if="!hideRippleInk && !disabled" :trigger="$els.button"></ui-ripple-ink>
  </button>
</template>

<script>
import UiIcon from './ui-icon'
import UiRippleInk from './ui-ripple-ink'

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
    UiIcon,
    UiRippleInk
  },

  directives: {
    disabled
  }
}
</script>

<style lang="scss">
@import 'src/scss/variables';

.ui-icon-button {
  background: none;
  outline: none;
  border: none;
  poasition: relative;
  overflow: hidden;

  // Fix for border radius not clipping internal content of positioned elements
  // (Chrome/Opera)
  -webkit-mask-image: -webkit-radial-gradient(circle, white, black);

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  border-radius: 50%;

  &::-moz-focus-inner {
    border: 0;
  }

  &[disabled] {
    opacity: 0.6;
  }

  &:not([disabled]) {
    cursor: pointer;
  }

  .ui-dropdown-menu {
    display: none;
  }
}

.ui-icon-button-normal {
  &.color-primary,
  &.color-accent,
  &.color-success,
  &.color-warning,
  &.color-danger {
    color: white;
    .ui-ripple-ink .ripple.held {
      opacity: 0.7;
    }
  }

  &.color-default {
    background-color: $palette-grey-200;

    &:hover:not([disabled]),
    &.dropdown-open {
      background-color: darken($palette-grey-200, 7.5%);
    }

    body[modality="keyboard"] &:focus {
      background-color: darken($palette-grey-200, 20%);
    }

    .ui-ripple-ink .ripple.held {
      opacity: 0.2;
    }

    .ui-icon-button-icon {
      color: $text-color-primary;
    }
  }

  &.color-primary {
    background-color: $color-primary;

    &:hover:not([disabled]),
    &.dropdown-open {
      background-color: darken($color-primary, 15%);
    }

    body[modality="keyboard"] &:focus {
      background-color: darken($color-primary, 25%);
    }
  }

  // TODO
}
</style>
