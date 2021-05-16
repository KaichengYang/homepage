<template>
    <div>
        <ol class="mt-3">
            <span v-for="paper in papers">
                <li>
                    <span v-html="paper.authors"></span>
                    ({{ paper.year }}).
                    <b>{{ paper.title }}</b>
                    <span v-if="paper.venue">
                        <i>{{ paper.venue }}</i>
                    </span>
                    <span v-if="paper.note">
                        ({{ paper.note }})
                    </span>
                    <br>
                    <span v-if="paper.medias">
                        <i>Media Coverage:</i>
                        <span v-for="(media, index) in paper.medias">
                            <a v-bind:href="media.url" target="_blank"><i class="fas fa-external-link-alt"></i> {{ media.name }}</a>
                            <span v-if="index != paper.medias.length - 1">| </span>
                        </span>
                        <br>
                    </span>
                    <span v-if="paper.links">
                        <span v-for="(link, index) in paper.links">
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
export default {
    name: 'PublistUnit',
    props: ['papers'],
    data () {
        return {
            pub_icon_map: {
                arXiv: "ai ai-arxiv ai-1x",
                DOI: "far fa-file-pdf",
                SocArXiv: "far fa-file-pdf",
                GitHub: "fab fa-github-square",
                Dataset: "fas fa-database",
                PyPI: "fab fa-python",
                CRAN: "fab fa-r-project"
            }
        }
    },
    methods: {
        get_pub_icon: function (c) {
            var icon = this.pub_icon_map[c];
            if (icon === undefined) {
                icon = "fas fa-external-link-alt";
            }
            return icon;
        }
    }
}
</script>
