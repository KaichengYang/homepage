<template>
  <div>
    <NavbarOther />
    <div class="py-5">
      <div class="container mt-5">
        <h2>News</h2>
        <News v-bind:is_home='false'/>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarOther from './NavbarOther'
import News from './News'

export default {
  name: 'NewsPage',
  components: {
    NavbarOther,
    News,
  }
}
</script>