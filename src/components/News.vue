<template>
    <div id="newslist">
        <ul class="mt-3" style="padding-left: 0">
            <li v-for="news in news_to_show">
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
                "new_paper": {"color": "#ac4142", "text": "New paper",},
                "new_preprint": {"color": "#006298", "text": "New preprint",},
                "personal_news": {"color": "#66435A", "text": "Personal",}
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
