<template>
  <!-- bio -->
  <div class="row mt-5">
    <div class="col-12 col-lg-4 mb-3">
      <div class="mx-auto">
        <img class="avatar mx-auto" src="static/images/avatar.png">
        <div id="bio" class="mt-2">
          <h2>Kai-Cheng Yang, Ph.D.</h2>
          <p id="title">Postdoctoral researcher</p>
          <p id="title">Northeastern University</p>
        </div>

        <div id="contact_container" class="mt-1">
          <a href="mailto:yang3kc@gmail.com" class="contact_icon">
            <i class="fas fa-envelope"></i>
          </a>
          <a href="static/files/cv.pdf" class="contact_icon">
            <i class="ai ai-cv-square ai-1x"></i>
          </a>
          <a href="https://scholar.google.com/citations?hl=en&user=tqb96X8AAAAJ&view_op=list_works&sortby=pubdate" class="contact_icon" target="_blank">
            <i class="ai ai-google-scholar-square ai-1x"></i>
          </a>
          <a href="https://www.researchgate.net/profile/Kai-Cheng-Yang-3" class="contact_icon" target="_blank">
            <i class="ai ai-researchgate-square ai-1x"></i>
          </a>
          <a href="https://www.linkedin.com/in/kaicheng-yang-43477213b/" class="contact_icon" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/yang3kc" class="contact_icon" target="_blank">
            <i class="fab fa-twitter-square"></i>
          </a>
          <a href="https://yang3kc.substack.com" class="contact_icon" target="_blank">
            <i class="fas fa-bookmark"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-8 bio-text">
      <h2>Bio</h2>
      <p>
        Hi! I'm Kai-Cheng Yang (pronounced KY-cheng YAHNG). You can also call me Kevin.
        I'm a postdoctoral researcher at Northeastern University working with <a href="https://lazerlab.net" target="_blnak">David Lazer</a>.
        I obtained my Ph.D. in Informatics from <a href="https://luddy.indiana.edu/" target="_blank">
          Luddy School of Informatics, Computing, and Engineering</a>
        in Indiana University Bloomington, advised by <a href="http://cnets.indiana.edu/fil/" target="_blank">Filippo Menczer</a>.
      </p>

      <p>
        I'm interested in computational social science.
        My research aims to uncover how technologies like generative AI are used for deceptive and disruptive purposes, study how humans react to these abuses, and develop countermeasures.
        Specifically, I focus on bad actors like malicious social bots and misinformation on social media.
      </p>

      <p>
        You can check out my
        <!-- <a href="#" v-scroll-to="'#project'">research projects</a> and  -->
        <a href="#" v-scroll-to="'#publication'">publications</a> and <a href="#" v-scroll-to="'#tool'">tools</a> to learn more.
        These works have been <a href="#" v-scroll-to="'#media'">covered</a> by various media outlets.
      </p>

      <p>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bio'
}
</script>

<style scoped>
#title {
  font-size: 1.5rem;
  margin-bottom: 0;
  color: rgb(139, 139, 139);
}
</style>
