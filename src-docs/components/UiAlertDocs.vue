<template>
  <section class="section section-ui-alert">
    <p>UiAlert are used to show inline alert message to the user. Supported
      types are <code>info</code>, <code>success</code>, <code>warning</code>
      and <code>error</code>.</p>

    <p>An alert suport keyboard navigation, can contain links and can be
      dismissable. The content can be fully customized using HTML and the icon
      can be changed or removed.</p>

    <h3>Examples</h3>

    <div class="demo">

      <ui-alert text="Hi everybody! This is the default alert."></ui-alert>

      <ui-alert type="success">
        Okilly dokilly, your account was updated successfully.
      </ui-alert>

      <ui-alert type="warning">
        Ay caramba! Alerts can also contain HTML. <a href="https://google.com" target="_blank">Click here</a> for Google.com.
      </ui-alert>

      <ui-alert type="error"
        text="D'oh! Something went wrong and we cannot process your request at this time. Try again later."></ui-alert>

      <ui-alert icon="battery_alert" type="warning">
        This alert has a custom icon.
      </ui-alert>

      <ui-alert>
        This is a multi-line alert. Sit voluptas aperiam eligendi porro. Adipisicing cum doloremque eius dolorum repellendus, voluptate? Delectus adipisci perspiciatis quas neque!
      </ui-alert>

      <ui-alert text="This alert is not dismissible." :dismissible="false"></ui-alert>

      <ui-alert hide-icon>
        The icon for this alert has been removed.
      </ui-alert>

      <ui-alert :dismissible="false" hide-icon>
        The alert has no icon and cannot be dismissed.
      </ui-alert>

      <ui-alert class="special-note" :dismissible="false" hide-icon >
        <b>Note: </b>Dialogs use the HTML &lt;dialog&gt; element, which currently has very limited cross-browser support. To ensure support across all modern browsers, pelase consider using a polyfill or creating your own. There is no polyfill included with VUE UI.
      </ui-alert>
    </div>

  </section>
</template>

<script>
import UiAlert from 'src/ui-alert'

export default {
  components: {
    UiAlert
  }
}
</script>
