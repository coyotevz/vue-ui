<template>
  <i class="ui-icon material-icons" :class="[icon]"
    v-text="removeText ? null : icon" aria-hidden="true"></i>
</template>

<script>
export default {
  name: 'ui-icon',

  props: {
    icon: {
      type: String,
      required: true
    },
    removeText: {
      type: Boolean,
      default: false
    }

  }
}
</script>
