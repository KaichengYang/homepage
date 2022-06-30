<template>
  <div>
    <ol class="mt-3">
      <span v-for="paper in papers" :key="paper.title">
        <li>
          <b>{{ paper.title }}</b>
          ({{ paper.year[0] }}).
          <br>
          <span v-html="paper.authors"></span>
          <br>
          <span v-if="paper.venue">
            <i>{{ paper.venue }}</i>
          </span>
          <span v-if="paper.note">
            ({{ paper.note }})
          </span>
          <br>

          <span v-if="paper.media">
            <i>Media Coverage: </i>
            <span v-for="(media, index) in paper.media" :key="index">
              <a v-bind:href="media.url" target="_blank"><i class="fas fa-external-link-alt"></i> {{ media.outlet }}</a>
              <span v-if="index != paper.media.length - 1">| </span>
            </span>
            <br>
          </span>

          <span v-if="paper.links">
            <span v-for="(link, index) in paper.links" :key="index">
              <a v-bind:href="link.url" target="_blank"><i v-bind:class="get_pub_icon(link.name)"></i> {{ link.name }}</a>
              <span v-if="index != paper.links.length - 1">| </span>
            </span>
          </span>
        </li>

      </span>
    </ol>

  </div>
</template>

<script>
import libs from './libs'

export default {
  name: 'PublistUnit',
  mixins: [libs],
  props: ['papers']
}
</script>
