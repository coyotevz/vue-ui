<template>
  <section class="section section-ui-ripple-ink">
    <h2 class="section-heading">UiRippleInk</h2>

    <p>UiRippleInk allows you ...</p>

    <h3>Examples</h3>
    <div class="demo">
      <h4>Color: blue</h4>

      <div class="group tv-shows custom-color color-blue">
        <image-pane inline-template :image="show.image" v-for="show in tvShows">
          <div class="image-pane" v-el:show
            :style="{ 'background-image': 'url(' + image + ')' }">
            <ui-ripple-ink :trigger="$els.show"></ui-ripple-ink>
          </div>
        </image-pane>
      </div>

    </div>
  </section>
</template>

<script>
import UiRippleInk from 'src/ui-ripple-ink'

let tvShows = [
  {
    name: 'Better Call Saul',
    image: 'http://i.imgur.com/SwZPSS2.jpg'
  }
]

export default {
  data () {
    return {
      tvShows
    }
  },

  components: {
    UiRippleInk,

    ImagePane: {
      props: ['image'],
      components: {
        UiRippleInk
      }
    }
  }
}
</script>
