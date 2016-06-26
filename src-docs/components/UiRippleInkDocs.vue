<template>
  <section class="section section-ui-ripple-ink">
    <p>UiRippleInk allows you to show a ripple ink on a material when it is
      touched or clicked. Using CSS, you can customize the ripple color and
      opacity.</p>

    <p>To change the color set a <code>color</code> property on the containing
      element (which the ripple will inherit as background color) or set a
      <code>background-color</code> property on <code>.ui-ripple-ink
        .ripple</code>.</p>

    <p>The change the opacity, set <code>opacity</code> on <code>.ui-ripple-ink .ripple</code>.</p>

    <p>UiRippleInk is used internally by many components, including <a href="#/ui-button-docs">UiButtons</a>, <a href="#/ui-collapsible-docs">UiCollapsible</a>, <a href="#/ui-icon-button-docs">UiIconButton</a>, <a href="#/ui-fab-docs">UiFab</a>, <a href="#/ui-menu-docs">UiMenu</a>, and <a href="#/ui-tabs-docs">UiTabs</a>.</p>

    <ui-alert class="special-note" :dismissible="false" hide-icon>
      <b>Note: </b>UiRippleInk must be used on containers that have <code>position: relative</code> to work properly.
    </ui-alert>

    <h3>Examples</h3>
    <div class="demo">

      <h4>Color: blue</h4>
      <div class="group tv-shows custom-color color-blue">
        <image-pane inline-template :image="show.image"
          v-for="show in tvShows">
          <div class="image-pane" v-el:show
            :style="{ 'background-image': 'url(' + image + ')' }">
            <ui-ripple-ink :trigger="$els.show"></ui-ripple-ink>
          </div>
        </image-pane>
      </div>

      <pre><code class="html">
      &lt;div class="color-blue" v-el:show style="background-image: 'some-image.jpg'"&gt;
        &lt;ui-ripple-ink :trigger="$els.show"&gt;&lt;/ui-ripple-ink&gt;
      &lt;/div&gt;
      </code></pre>

      <pre><code>
      .color-blue {
        color: blue;
      }
      </code></pre>

      <h4>Color: orange, Opacity: 0.95</h4>
      <div class="group the-simpsons custom-color color-orange custom-opacity">
        <image-pane inline-template :image="simpson.image"
          v-for="simpson in theSimpsons">
          <div class="image-pane" v-el:portait
            :style="{ 'background-image': 'url(' + image + ')' }">
            <ui-ripple-ink :trigger="$els.portait"></ui-ripple-ink>
          </div>
        </image-pane>
      </div>

      <pre><code class="html">
      &lt;div class="color-orange" v-el:portait style="background-image: 'some-image.jpg'"&gt;
        &lt;ui-ripple-ink :trigger="$els.portait"&gt;&lt;/ui-ripple-ink&gt;
      &lt;/div&gt;
      </code></pre>

      <pre><code>
      .color-orange {
        color: orange;
      }
      .color-orange .ui-ripple-ink .ripple.held {
        opacity: 0.95;
      }
      </code></pre>

    </div>
  </section>
</template>

<script>
import UiRippleInk from 'src/ui-ripple-ink'
import UiAlert from 'src/ui-alert'

let tvShows = [
  { name: 'Better Call Saul', image: 'http://i.imgur.com/SwZPSS2.jpg' },
  { name: 'Breaking Bad', image: 'http://i.imgur.com/tz6FJeN.jpg' },
  { name: 'Sherlock', image: 'http://i.imgur.com/Pf1TkJY.jpg' },
  { name: 'The Simpsons', image: 'http://i.imgur.com/HJmBlzf.jpg' }
]

let theSimpsons = [
  {
    value: 'maggie', text: 'Maggie Simpson',
    image: 'http://i.imgur.com/eK26qtK.jpg'
  }, {
    value: 'lisa', text: 'Lisa Simpson',
    image: 'http://i.imgur.com/wIb44g9.jpg'
  }, {
    value: 'bart', text: 'Bart Simpson',
    image: 'http://i.imgur.com/XkEz9zg.jpg'
  }
]

export default {
  data () {
    return {
      theSimpsons,
      tvShows
    }
  },

  components: {
    UiRippleInk,
    UiAlert,

    ImagePane: {
      props: ['image'],
      components: {
        UiRippleInk
      }
    }
  }
}
</script>

<style lang="scss">
@import 'src/scss/variables';

.section-ui-ripple-ink {
  .group {
    display: flex;
  }

  .custom-color {
    &.color-orange {
      color: $palette-orange-500;
    }

    &.color-blue {
      color: $palette-blue-500;
    }
  }

  .custom-opacity {
    .ui-ripple-ink .ripple.held {
      opacity: 0.95;
    }
  }

  .image-pane {
    background-size: cover;
    background-position: 50%;
    margin-right: 16px;
    margin-bottom: 16px;

    position: relative;
  }

  .tv-shows {
    .image-pane {
      width: 120px;
      height: 180px;
    }
  }

  .the-simpsons {
    .image-pane {
      width: 120px;
      height: 120px;
      border-radius: 8px;
    }
  }
}

.special-note {
  max-width: 640px;
  .ui-alert-body {
    background-color: $palette-yellow-100;
  }
}
</style>
