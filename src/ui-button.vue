<template>
  <button class="ui-button" :class="styleClasses"
    v-disabled="disabled || loading" v-el:button>
    <div class="ui-button-content" :class="{ 'invisible': loading }">
      <ui-icon class="ui-button-icon" :class="{ 'position-right': iconRight }"
        :icon="icon" v-show="showIcon"></ui-icon>
      <div class="ui-button-text">
        <slot>
          <span v-text="text"></span>
        </slot>
      </div>
      <ui-icon class="ui-button-dropdown-icon" icon="&#xE5C5;"
        v-if="!iconRight && showDropdownIcon && (hasDropdownMenu || hasPopover)">
      </ui-icon>
    </div>

    <!--ui-progress-circular class="ui-icon-spinner" :color="spinnerColor" :size="18"
      :stroke="4.5" disable-transiton v-show="loading"></ui-progress-circular-->

    <ui-ripple-ink v-if="!hideRippleInc && !disabled" :trigger="$els.button">
    </ui-ripple-ink>

    <!--ui-menu class="ui-button-dropdown-menu" :trigger="$els.button"
      :options="menuOptions" :show-icons="showMenuIcons"
      :show-secodary-text="showMenuSecondaryText" :open-on="openDropdownOn"
      @option-selected="menuOptionSelected" :dropdown-position="dropdownPosition"
      v-if="hasDropdownMenu"></ui-menu-->

    <!--ui-popover :trigger="$els.button"  :open-on="openDropdownOn"v-if="hasPopover">
      <slot name="popover"></slot>
    </ui-popover-->
  </button>
</template>

<script>
import UiIcon from './ui-icon'

import disabled from './directives/disabled'

import showRippleInk from './mixins/show-ripple-ink'

export default {
  name: 'ui-button',

  props: {
    text: String,
    flat: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'default', // 'default', 'primary', 'accent', 'success', 'warning', or 'danger'
      coerce (color) {
        return 'color-' + color
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    styleClasses () {
      let classes = [this.color]
      if (this.flat) {
        classes.push('ui-icon-button-flat')
      } else {
        classes.push('ui-icon-button-normal')
      }
      if (this.raised) {
        classes.push('ui-button-raised')
      }
      if (this.hasDropdownMenu || this.hasPopover) {
        classes.push('has-dropdown')
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
@import 'scss/variables';

.ui-button {
  font-family: $font-stack;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
  line-height: 1.71em;
  letter-spacing: 0.02em;
  line-height: 1;

  background: none;
  overflow: hidden;
  outline: none;
  border: none;

  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: default;

  border-raidus: 2px;
  padding: 8px 16px;
  min-width: 80px;
  height: 40px;

  &[disabled] {
    opacity: 0.6;
  }

  &:not([disabled]) {
    cursor: pointer;
  }
}

.ui-button-normal {
  &.color-primary {
    color: white;

    .ui-ripple-ink .ripple.held {
      opacity: 0.7;
    }
  }

  &.color-primary {
    background-color: #2196f3;
  }
}
</style>
