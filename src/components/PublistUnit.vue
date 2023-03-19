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
          <!-- For altmetric -->
          <template v-if="paper.altmetric">
            <span data-badge-type="2" :data-doi="paper.altmetric.doi_id" :data-arxiv-id="paper.altmetric.arxiv_id" data-link-target='_blank' data-hide-no-mentions="true" class="altmetric-embed">|</span>
          </template>
          <br>

          <span v-if="paper.links">
            🔗
            <span v-for="(link, index) in paper.links" :key="index">
              <a v-bind:href="link.url" target="_blank"> {{ link.name }} <i v-bind:class="get_pub_icon(link.name)"></i> </a>
              <span v-if="index != paper.links.length - 1">| </span>
            </span>
            <br>
          </span>

          <span v-if="paper.hornor">
              🏆 {{ paper.hornor.text }} <a v-if="paper.hornor.url" v-bind:href="paper.hornor.url" target="_blank"> <i class="fas fa-external-link-alt"></i> </a>
              <br>
          </span>

          <span v-if="paper.media">
            <!-- <i>Media Coverage: </i> -->
            📰
            <span v-for="(media, index) in paper.media" :key="index">
              <a v-bind:href="media.url" target="_blank">{{ media.outlet }} <i class="fas fa-external-link-alt"></i> </a>
              <span v-if="index != paper.media.length - 1">| </span>
            </span>
            <br>
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
