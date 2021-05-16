<template>
    <div id="newslist">
        <ul class="mt-3" style="padding-left: 0">
            <li v-for="news in news_to_show">
                <span class="badge" style="display:inline-block; width:100px; background-color: #867d78">{{ news.date }}</span> <span v-html="news.msg"></span>
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
            news_list: json
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
    }
}
</script>
