<template>
  <div>
    <NavbarOther />
    <div class="py-5">
      <div class="container mt-5">
        <h2>Records of failures</h2>
        Following the spirit of <a href="https://www.nature.com/articles/nj7322-467a" target="_blank">A CV of failures</a>, I'm listing my failures below.
        <div id="failurelist">
          <ul class="mt-3" style="padding-left: 0; list-style-type: none;">
            <li v-for="failure in failure_list" :key="failure.date">
              <span class="badge" :style="box_style(color_text_map['date']['color'])">{{ failure.date }}</span>
              <span v-if="failure.type" class="badge" :style="box_style(color_text_map[failure.type]['color'])">{{ color_text_map[failure.type]['text'] }}</span>
              <span v-html="failure.msg"></span>
            </li>
          </ul>
          <BackForth v-bind:is_home="false" v-bind:target="'/failures'"></BackForth>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import json from '../../static/files/failures.json'
import NavbarOther from './NavbarOther'
import BackForth from './BackForth.vue'

export default {
  name: 'Failures',
  components: {
    NavbarOther,
    BackForth
  },
  data () {
    return {
      failure_list: json,
      color_text_map: {
        "date": {"color": "#867d78",},
        "paper_rejection": {"color": "#ac4142", "text": "Paper rejection",},
        "award_rejection": {"color": "#006298", "text": "Award rejection",},
        "job_rejection": {"color": "#66435A", "text": "Job rejection",}
      },
    }
  },
  methods: {
    box_style (color) {
      return {
        "display" : "inline-block",
        "width": "95px",
        "background-color": color
      }
    }
  }
}
</script>