<template>
    <!-- bio -->
    <div class="row mt-5">
        <div class="col-12 col-lg-4 mb-3">
            <div class="mx-auto">
                <img class="avatar mx-auto" src="static/images/avatar.png">
                <div id="bio" class="mt-2">
                    <h2>Kai-Cheng Yang</h2>
                </div>

                <div id="contact_container">
                    <a href="mailto:yangkc@iu.edu" class="contact_icon">
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
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-8 bio-text">
            <h2>Bio</h2>
            <p>
                Hi! I'm Kai-Cheng Yang (杨凯程), the pronunciation is KY-cheng YAHNG. You can also call me Kevin.
                I'm a fourth year Ph.D candidate in Informatics at <a href="https://luddy.indiana.edu/" target="_blank">
                    Luddy School of Informatics, Computing, and Engineering</a>
                    in Indiana University Bloomington.
                I mainly work with <a href="http://cnets.indiana.edu/fil/" target="_blank">Filippo Menczer</a>,
                    <a href="http://cnets.indiana.edu/people/yong-yeol-ahn/" target="_blank">Yong-Yeol Ahn</a>, and
                    <a href="https://www.indiana.edu/~soc/bios/Brea_Perry.html" target="_blank">Brea L. Perry</a>.
            </p>

            <p>
                I'm interested in computational social science and network science.
                You can check out my<a href="#" v-scroll-to="'#project'">research projects</a> and <a href="#" v-scroll-to="'#publication'">publications</a> to learn more. I also build <a href="#" v-scroll-to="'#tool'">tools</a> that you may find useful.
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
