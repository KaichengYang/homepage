<template>
  <div>
      <NavbarHome />

    <div class="container pt-5">
      <!-- Bio -->
      <Bio />
      <hr>

      <!-- News -->
      <h2 id="news" class="mt-3">News</h2>
      <News />
      <p class="mt-3">
        You can also check out my <router-link to="/failures">failures ...</router-link>
      </p>
      <hr>

      <!-- Publication -->
      <h2 class="mt-3" id="publication">Selected publications</h2>
      <p class="my-3">
      See the full publication list <router-link to="/pub"><i class="fas fa-list"></i> here</router-link> or from my <a href="https://scholar.google.com/citations?hl=en&user=tqb96X8AAAAJ&view_op=list_works&sortby=pubdate" target="_blank"><i class="ai ai-google-scholar-square ai-1x"></i> Google Scholar</a> page.
      </p>
      <Publist v-bind:view="'highlight'"/>
      <hr>

      <!-- Project -->
      <!-- <h2 id="project" class="mt-3">Research project highlights</h2> -->
      <!-- <Project /> -->
      <!-- <hr> -->

      <!-- Tools -->
      <h2 id="tool" class="mt-3">Selected tools</h2>
      <Tool />
      <hr>


      <!-- Media -->
      <h2 id="media" class="mt-3">Selected media coverage</h2>
      <Media />
      <hr>

      <!-- About -->
      <div id="about" class="mt-3 mb-5">
        <h2 class="mt-3">About</h2>
        I created this site myself.
        It's currently implemented as a <a href="https://vuejs.org/" target="_blank">Vue.js</a> app with the help from
        <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a>,
        <a href="https://bootstrap-vue.org/">BootstrapVue</a>,
        <a href="https://madewithvuejs.com/vue-scrollto" target="_blank">Vue ScrollTo</a>,
        <a href="http://ianlunn.github.io/Hover/" target="_blank">Hoever.css</a>,
        <a href="https://fontawesome.com/" target="_blank">Font Awesome</a>,
        and <a href="https://jpswalsh.github.io/academicons/" target="_blank">Academicons</a>.
      </div>
    </div>
  </div>
</template>

<script>
import NavbarHome from './NavbarHome'
import Bio from './Bio'
import News from './News'
import Publist from './Publist'
import Project from './Project'
import Tool from './Tool'
import Media from './Media'

export default {
  name: 'Home',
  components: {
    NavbarHome,
    Bio,
    News,
    Publist,
    Project,
    Tool,
    Media
  }
}
</script>
