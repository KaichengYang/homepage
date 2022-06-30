<template>
  <div>
    <NavbarOther />
    <div class="py-5">
      <div class="container mt-5">
        <h2>Media coverage</h2>
        <Media v-bind:is_home='false'/>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarOther from "./NavbarOther.vue"
import Media from "./Media"

export default {
  name: 'MediaPage',
  components: {
    NavbarOther,
    Media
  }
}
</script>