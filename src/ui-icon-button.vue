<template>
  <button class="ui-icon-button" :class="styleClasses"
    :aria-label="ariaLabel || tooltip" v-disabled="disabled || loading"
    v-el:button>
    <ui-icon class="ui-icon-button-icon" :icon="icon" v-show="!loading"></ui-icon>

    <!--ui-progress-circular class="ui-icon-button-spinner" :color="spinnerColor"
      :size="24" :stroke="4.5" disable-transition v-show="loading">
    </ui-progress-circular-->

    <ui-ripple-ink v-if="!hideRippleInk && !disabled" :trigger="$els.button"></ui-ripple-ink>

    <!--ui-tooltip :trigger="$els.button" :content="tooltip"
      :position="tooltipPosition" v-if="tooltip"></ui-tooltip-->

    <!-- TODO: menu -->
    <!-- TODO: popover -->
  </button>
</template>

<script>
import UiIcon from './ui-icon'

import disabled from './directives/disabled'
import showRippleInk from './mixins/show-ripple-ink'

export default {
  name: 'ui-icon-button',

  props: {
    flat: {
      type: Boolean,
      default: false
    },
    clear: {
      type: Boolean,
      default: false
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
    styleClasses () {
      let classes = [this.color]
      if (this.flat & this.clear) {
        console.warn('Must specify one type of ui-icon-button: flat or clear')
      }
      if (this.flat) {
        classes.push('ui-icon-button-flat')
      } else if (this.clear) {
        classes.push('ui-icon-button-clear')
      } else {
        classes.push('ui-icon-button-normal')
      }
      return classes
    }
  },

  components: {
    UiIcon
  },

  mixins: [
    showRippleInk
  ],

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
  position: relative;
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

  &.color-accent {
    background-color: $color-accent;

    &:hover:hot([disabled]),
    &.dropdown-open {
      background-color: darken($color-accent, 15%);
    }

    body[modality="keyboard"] &:focus {
      background-color: darken($color-accent, 25%);
    }
  }

  &.color-succsess {
    background-color: $color-success;

    &:hover:not([disabled]),
    &.dropdown-open {
      background-color: darken($color-success, 15%);
    }

    body[modality="keyboard"] &:focus {
      background-color: darken($color-success, 25%);
    }
  }

  &.color-warning {
    background-color: $color-warning;

    &:hover:not([disabled]),
    &.dropdown-open {
      background-color: darken($color-warning, 15%);
    }

    body[modality="keyboard"] &:focus {
      background-color: darken($color-warning, 25%);
    }
  }

  &.color-danger {
    background-color: $color-danger;

    &:hover:not([disabled]),
    &.dropdown-open {
      background-color: darken($color-danger, 15%);
    }

    body[modality="keyboard"] &:focus {
      background-color: darken($color-danger, 25%);
    }
  }
}

.ui-icon-button-clear {
  background-color: transparent;

  body[modality="keyboard"] &:focus,
  &:hover:not([disabled]),
  &.dropdown-open {
    background-color: rgba($color-black, 0.1);
  }

  &.color-white {
    color: $text-color-secondary;

    body[modality="keyboard"] &:focus {
      border: 2px solid rgba($color-white, 0.8);
    }

    .ui-icon-button-icon {
      color: $color-white;
    }
  }

  &.color-black {
    color: $text-color-secondary;

    body[modality="keyboard"] &:focus {
      border: 2px solid rgba($color-black, 0.25);
    }

    .ui-icon-button-icon {
      color: $text-color-secondary;
    }
  }
}

.ui-icon-button-icon {
  width: initial; // Firefox: needs the width and the height reset for flexbox centering
  height: initial;
}
</style>
