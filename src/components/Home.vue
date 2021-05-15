<template>
  <div>
      <NavbarHome />

    <div class="container mt-5">
      <Bio />
      <hr>
      <News />
      <hr>
      <Publist />
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
