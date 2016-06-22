<template>
  <button class="ui-button ui-button-normal color-primary">
    <slot>
      <span v-text="text"></span>
    </slot>
  </button>
</template>

<script>
export default {
  name: 'ui-button',

  props: {
    text: String
  }
}
</script>

<style lang="scss">
.ui-button {
  font-family: Roboto, Helvetica, sans-serif;
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
