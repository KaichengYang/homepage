<template>
  <div class="mt-3">
    <div class="row">
      <template v-for="tool in tools_to_show">
        <div class="col-md-4 mb-3">
          <b-card
          :title="tool.title"
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
          >
            <template v-if="tool.image">
            <b-card-img :src="'static/images/' + tool.image + '.png'" alt="" top></b-card-img>
            </template>
          <b-card-text class="mb-2">
            {{ tool.msg }}
          </b-card-text>

          <div v-if="tool.links" class="mb-2">
            <p class="mb-1">
              Links:
              <span v-for="(link, index) in tool.links" :key="index">
                <a v-bind:href="link.url" target="_blank"><i v-bind:class="get_pub_icon(link.name)"></i> {{ link.name }}</a>
                <span v-if="index != tool.links.length - 1">| </span>
              </span>
            </p>
          </div>

          <span v-if="tool.media">
            <p class="mb-2">
              Media coverage:
              <span v-for="(link, index) in tool.media.slice(0, 3)" :key="index">
                <a v-bind:href="link.url" target="_blank"><i v-bind:class="get_pub_icon(link.outlet)"></i> {{ link.outlet }}</a>
                <span v-if="index != tool.media.slice(0, 3).length - 1">| </span>
              </span>
            </p>
          </span>

          </b-card>
        </div>
      </template>
    </div>

    <BackForth v-bind:is_home="is_home" v-bind:target="'/tools'"/>
  </div>
</template>

<script>
import tools_json from '../../static/files/tools.json'
import media_json from '../../static/files/media.json'
import libs from './libs'
import BackForth from './BackForth'

export default {
  name: "Tool",
  components: {
    BackForth
  },
  props: {
    is_home: {
      type: Boolean,
      default: true
    }
  },
  mixins: [libs],
  data () {
    return {
      tools_list: this.assign_media_to_tools(tools_json, media_json),
      libs: libs
    }
  },
  computed: {
    tools_to_show () {
      if(this.is_home){
        return this.tools_list.slice(0, 3);
      }else{
        return this.tools_list;
      }
    }
  },
  methods: {
    assign_media_to_tools: function (tools_json, media_json) {
      tools_json.forEach(function (tool) {
        var media_list = [];
        media_json.forEach(function (media) {
          if(media.project_id && media.project_id.indexOf(tool.id) >= 0){
            media_list.push(media);
          }
        });
        if (media_list.length > 0){
          tool["media"] = media_list;
        }
      });
      return tools_json;
    }
  }
}
</script>