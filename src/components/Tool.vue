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

        <BackForth v-bind:is_home="is_home" v-bind:target="'/tools'"/>
    </div>
</template>

<script>
import json from '../../static/files/tools.json'
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
            tools_list: json,
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
    }
}
</script>