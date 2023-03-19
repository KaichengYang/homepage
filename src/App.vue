<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  updated () {
    // initialize altmetric everytime the page is updated
    _altmetric_embed_init();
  }
}
</script>
