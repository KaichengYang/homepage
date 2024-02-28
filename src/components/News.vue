<template>
  <div id="newslist">
    <ul class="mt-3" style="padding-left: 0">
      <li v-for="news in news_to_show" :key="news.msg">
        <span class="badge" :style="box_style(color_text_map['date']['color'])">{{ news.date }}</span>
        <span v-if="news.type" class="badge" :style="box_style(color_text_map[news.type]['color'])">{{ color_text_map[news.type]['text'] }}</span>
        <span v-html="news.msg"></span>
      </li>
    </ul>
    <BackForth v-bind:is_home="is_home" v-bind:target="'/news'"/>
  </div>
</template>

<script>
import json from '../../static/files/news.json'
import BackForth from './BackForth'

export default {
  name: 'News',
  components: {
    BackForth
  },
  props: {
    is_home: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      news_list: json,
      color_text_map: {
        "date": {"color": "#867d78",},
        "new_pub": {"color": "#ac4142", "text": "Publication",},
        "new_tool": {"color": "#4A3C31", "text": "Tool",},
        "new_preprint": {"color": "#66435A", "text": "Preprint",},
        "personal_news": {"color": "#006298", "text": "General",},
        "talk": {"color": "#4A3C31", "text": "Talk",},
        "general": {"color": "#006298", "text": "General",},
        "media": {"color": "#DF3603", "text": "Media",},
      },
    }
  },
  computed: {
    news_to_show () {
      if (this.is_home){
        return this.news_list.slice(0, 5);
      }else{
        return this.news_list;
      }
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
