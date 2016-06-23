<template>
  <div class="ui-ripple-ink"></div>
</template>

<script>
import $ from 'dominus'

let startRipple = (eventType, event) => {
  let holder = event.currentTarget

  if (!$(holder).hasClass('ui-ripple-ink')) {
    holder = $(holder).findOne('.ui-ripple-ink')

    if (!holder) {
      return
    }
  }

  // Store the event use to generate this riple on the holder: don't allow
  // further events of different type until we're done. Prevents double-ripples
  // from mousedown/touchstart.
  let prev = holder.getAttribute('data-ui-event')

  if (prev && prev !== eventType) {
    return
  }

  holder.setAttribute('data-ui-event', eventType)

  // Create and position the ripple
  let rect = holder.getBoundingClientRect()
  let x = event.offsetX
  let y

  if (x !== undefined) {
    y = event.offsetY
  } else {
    x = event.clientX - rect.left
    y = event.clientY - rect.top
  }

  let ripple = document.createElement('div')
  var max

  if (rect.width === rect.height) {
    max = rect.width * 1.412
  } else {
    max = Math.sqrt(rect.width * rect.width + rect.height * rect.height)
  }

  let dim = max * 2 + 'px'

  ripple.style.width = dim
  ripple.style.height = dim
  ripple.style.marginLeft = -max + x + 'px'
  ripple.style.marginTop = -max + y + 'px'

  // Activate/add the element
  ripple.className = 'ripple'
  holder.appendChild(ripple)

  setTimeout(() => $(ripple).addClass('held'), 0)

  let releaseEvent = (eventType === 'mousedown' ? 'mouseup' : 'touchend')

  let release = () => {
    document.removeEventListener(releaseEvent, release)
    $(ripple).addClass('done')

    setTimeout(() => {
      holder.removeChild(ripple)
      if (!holder.children.length) {
        $(holder).removeClass('active').attr('data-ui-event', null)
      }
    }, 450)
  }

  document.addEventListener(releaseEvent, release)
}

let handleMouseDown = (e) => {
  // Trigger on left click only
  if (e.button === 0) {
    startRipple(e.type, e)
  }
}

let handleTouchStart = (e) => {
  if (e.changedTouches) {
    for (let i = 0; i < e.changedTouches.length; ++i) {
      startRipple(e.type, e.changedTouches[i])
    }
  }
}

/* global Element */
export default {
  name: 'ui-ripple-ink',

  props: {
    trigger: {
      type: Element,
      required: true
    }
  },

  watch: {
    trigger () {
      this.initialize()
    }
  },

  ready () {
    this.initialize()
  },

  beforeDestroy () {
    if (this.trigger) {
      this.trigger.removeEventListener('mousedown', handleMouseDown)
      this.trigger.removeEventListener('touchstart', handleTouchStart)
    }
  },

  methods: {
    initialize () {
      if (this.trigger) {
        this.trigger.addEventListener('touchstart', handleTouchStart)
        this.trigger.addEventListener('mousedown', handleMouseDown)
      }
    }
  }
}
</script>

<style lang="scss">
@import 'scss/variables';

.ui-ripple-ink {
  display: block;
  overflow: hidden;
  border-radius: inherit;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  -webkit-mask-image: -webkit-radial-gradient(circle, white, black);

  .ripple {
    position: absolute;
    width: 0;
    height: 0;
    pointer-events: none;
    user-select: none;
    border-radius: 50%;
    background-color: currentColor;
    background-clip: padding-box;
    opacity: 0.2;
    transform: scale(0);
    transition: transform 0.4s ease-out, opacity 0.4s ease-out;

    &.held {
      opacity: 0.4;
      transform: scale(1);
    }

    &.done {
      opacity: 0 !important;
    }
  }
}
</style>
