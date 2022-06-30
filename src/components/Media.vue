<template>
  <div id="medialist">
    <ol class="mt-3">
      <li v-for="media in media_to_show" :key="media.title">
        <img :src="'static/logos/' + media.outlet + '.png'" class="mr-5">
        | {{ media.date }}
        <br>
        <a :href="media.url" target="_blank" class="text-justify">{{ media.title }}</a>
        <!-- <span class="badge" :style="box_style(color_map['date']['color'], 'short')">{{ media.date }}</span> -->
      </li>
    </ol>
    <BackForth v-bind:is_home="is_home" v-bind:target="'/media'"/>
  </div>
</template>

<script>
import json from '../../static/files/media.json'
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
    }
  },
  data () {
    return {
      media_list: json,
      color_map: {
        "date": {"color": "#867d78",},
        "outlet": {"color": "#ac4142"}
      },
    }
  },
  computed: {
    media_to_show () {
      if (this.is_home){
        return this.media_list.slice(0, 5);
      }else{
        return this.media_list;
      }
    }
  },
  methods: {
    box_style (color, length) {
      return {
        "display" : "inline-block",
        "width": (length === "long") ? "160px": "110px",
        "background-color": color
      }
    }
  }
}
</script>

<style scoped>
img {
  height: 20px;
}

</style>