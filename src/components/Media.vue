<template>
  <div id="medialist">
    <ol class="mt-3">
      <li v-for="media in media_to_show" :key="media.title">
        <img :src="'static/logos/' + media.outlet + '.png'" class="mr-5">
        | {{ media.outlet }}
        | {{ media.date }}
        <br>
        <a :href="media.url" target="_blank" class="my-1">{{ media.title }} <i class="fas fa-external-link-alt"></i> </a>
        <br>
        <!-- <span v-if="!is_home"> -->
        <span v-if="media.type == 'interview'" class="badge" :style="box_style('#006298', 'long')">Interviewing me</span>
        <span v-if="media.type == 'quotation'" class="badge" :style="box_style('#006298')">Quoting me</span>
        <template v-if="media.type == 'coverage' && media.ref">
          <span class="badge" :style="box_style('#ac4142')">          Mentioning</span>
          <template v-for="(ref, index) in media.ref" :href="ref.link">
            <template v-if="index > 0"> and </template>
            <a :href="ref.link.url" target="_blank"> {{ ref.title }}</a>
          </template>
        </template>
        <!-- </span> -->
      </li>
    </ol>
    <BackForth v-bind:is_home="is_home" v-bind:target="'/media'"/>
  </div>
</template>

<script>
import media_json from '../../static/files/media.json'
import tools_json from '../../static/files/tools.json'
import refs_json from '../../static/files/refs.json'
import BackForth from './BackForth.vue'

export default {
  name: "Media",
  components: {
    BackForth
  },
  props: {
    is_home: {
      type: Boolean,
      default: true
    },
    view: {
      type: String,
      default: "year"
    }
  },
  data () {
    return {
      media_list: this.assign_projects_to_media(refs_json, tools_json, media_json),
      color_map: {
        "date": {"color": "#867d78",},
        "outlet": {"color": "#ac4142"}
      },
    }
  },
  computed: {
    media_to_show () {
      let temp_media_list = this.media_list.filter(media => media.toshow);
      if (this.is_home){
        return temp_media_list.filter(media => media.highlight).slice(0, 5);
      }else{
        return temp_media_list;
      }
    }
  },
  methods: {
    assign_projects_to_media: function (refs_json, tools_json, media_json) {
      media_json.forEach(function (media) {
        let ref_list = [];
        tools_json.forEach(function (tool) {
          if(media.project_id && media.project_id.indexOf(tool.id) >= 0){
            ref_list.push({
              "title": tool.title,
              "link": tool.links[0]
            });
          }
        });
        refs_json.forEach(function (ref) {
          if(media.project_id && media.project_id.indexOf(ref.id) >= 0){
            ref_list.push({
              "title": ref.title,
              "link": ref.links[0]
            });
          }
        });

        if(ref_list.length > 0){
          media["ref"] = ref_list;
        }
      });
      return media_json;
    },
    box_style (color, length) {
      return {
        "display" : "inline-block",
        "width": (length === "long") ? "110px": "85px",
        "background-color": color,
        "font-size": "12px"
      }
    }
  }
}
</script>

<style scoped>
img {
  height: 20px;
}

span {
  font-size: 15px;
}

</style>
