<template>
    <div id="tool" class="my-5">
        <div class="row">
            <template v-for="tool in tools_list">
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
                    <b-card-text>
                        {{ tool.msg }}
                    </b-card-text>

                    <span v-if="tool.links">
                        <span v-for="(link, index) in tool.links">
                            <a v-bind:href="link.url" target="_blank"><i v-bind:class="get_pub_icon(link.name)"></i> {{ link.name }}</a>
                            <span v-if="index != tool.links.length - 1">| </span>
                        </span>
                    </span>

                    </b-card>
                </div>
            </template>

        </div>
    </div>
</template>

<script>
import json from '../../static/files/tools.json'
import libs from './libs'

export default {
    name: "Tool",
    mixins: [libs],
    data () {
        return {
            tools_list: json,
            libs: libs
        }
    }
}
</script>