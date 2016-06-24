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

    <!--ui-progress-linear :show="loading" class="ui-toolbar-preloader"
      :class="{ 'position-top': preloaderTop }" :color="preloaderColor">
    </ui-progress-linear-->

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

<style lang="scss">
@import 'scss/variables';

.ui-toolbar {
  font-family: $font-stack;
  display: flex;
  height: 56px;
  align-items: center;
  font-size: 18px;
  position: relative;

  &:not(.ui-toolbar-raise):not(.ui-toolbar-colored) {
    border-bottom: 1px solid $color-primary-divider;
  }

  &.text-color-black {
    color: $text-color-primary;

    .ui-toolbar-divider {
      border-left-color: $color-primary-divider;
    }
  }

  &.text-color-white {
    color: white;

    .ui-toolbar-divider {
      border-color: rgba-tpl($color-white, 0.4);
    }
  }

  .ui-icon-button {
    width: 48px;
    height: 48px;
  }

  .ui-toolbar-preloader {
    position: absolute;
    height: 3px;
    right: 0;
    left: 0;
    bottom: 0;

    &.position-top {
      top: 0;
    }
  }
}

.ui-toolbar-raised {
  box-shadow: 0 0 2px $color-primary-divider, 0 2px 2px rgba-tpl($color-black, 0.2);
}

.ui-toolbar-clear {
  background-color: transparent;
  box-shadow: none;
  border: none;
}

.ui-toolbar-default {
  background-color: white;
}

.ui-toolbar-colored {
  background-color: $color-primary;
}

.ui-toolbar-left {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.ui-toolbar-nav-icon,
.ui-toolbar-brand-text {
  padding-right: 8px;
}

.ui-toolbar-brand {
  min-width: 160px;
}

.ui-toolbar-brand-text {
  flex-grow: 1;
}

.ui-toolbar-center {
  display: flex;
  flex-grow: 1;
}

.ui-toolbar-divider {
  border-left-width: 1px;
  border-left-style: solid;

  height: 24px;
  margin-right: 24px;
}

.ui-toolbar-right {
  flex-shrink: 0;
  margin-left: auto;

  [slot="actions"] {
    display: flex;
  }
}
</style>
