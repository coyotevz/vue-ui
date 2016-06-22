<template>
  <section class="section section-ui-alert">
    <h2 class="section-heading">UiAlert</h2>

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
    </div>
    
  </section>
</template>
