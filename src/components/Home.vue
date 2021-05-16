<template>
  <div>
      <NavbarHome />

    <div class="container mt-5">
      <Bio />
      <hr>
      <h2>News</h2>
      <News />
      <hr>
      <h2 class="mt-3">Selected publications</h2>
      <p class="my-3">
      See the full publication list <a href="/pub">here</a> or from my <a href="https://scholar.google.com/citations?user=tqb96X8AAAAJ&hl=en"><i class="ai ai-google-scholar-square ai-1x"></i> Google Scholar</a> page.
      </p>
      <Publist v-bind:view="'highlight'"/>
    </div>
  </div>
</template>

<script>
import NavbarHome from './NavbarHome'
import Bio from './Bio'
import News from './News'
import Publist from './Publist'

export default {
  name: 'Home',
  components: {
    NavbarHome,
    Bio,
    News,
    Publist
  },
  data () {
    return {
      msg: 'Hello?!'
    }
  }
}
</script>
