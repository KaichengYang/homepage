<template>
    <div>
        <template v-for="paper_chunk in paper_chunks">
            <h4 v-if="!is_home">{{ get_paper_meta_for_presentation(paper_chunk.meta) }}</h4>
            <PublistUnit v-bind:papers="paper_chunk.papers"/>
        </template>
        <BackForth v-bind:is_home="is_home" v-bind:target="'/pub'"/>
    </div>
</template>

<script>
import json from '../../static/files/refs.json'
import BackForth from './BackForth'
import PublistUnit from './PublistUnit'

export default {
    name: 'Publist',
    components: {
        BackForth,
        PublistUnit
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
            refs: json,
            paper_meta_mapping: {
                netsci: "Network Science",
                opioid: "Opioid Epidemic in U.S.",
                socialmedia: "Bad Actors and Misinformation on Social Media",
                conf: "Conference Proceedings",
                journal: "Journal Articles",
                preprint: "Preprint"
            }
        }
    },
    computed: {
        paper_chunks: function () {
            if(this.view === "topic"){
                return this.get_paper_chunks_topic()
            } else if (this.view == "type"){
                return this.get_paper_chunks_type()
            } else if (this.view == "highlight"){
                return this.get_paper_chunks_highlight()
            } else {
                return this.get_paper_chunks_year()
            }
        }
    },
    methods: {
        get_paper_chunks_year: function () {
            var year_set = new Set();
            this.refs.forEach(paper => {
                year_set.add(paper.year)
            });
            var year_list = Array.from(year_set).sort((a, b) => b - a);
            var paper_chunks = Array();
            for(var i=0; i<year_list.length; i++){
                var year = year_list[i];
                paper_chunks.push({
                    meta: year,
                    papers: this.refs.filter(paper => paper.year === year)
                })
            }
            // console.log(year_list);
            return paper_chunks;
        },
        get_paper_chunks_type: function () {
            var type_set = new Set();
            this.refs.forEach(paper => {
                type_set.add(paper.type)
            });
            var type_list = Array.from(type_set).sort();
            var paper_chunks = Array();
            for(var i=0; i<type_list.length; i++){
                var type = type_list[i];
                paper_chunks.push({
                    meta: type,
                    papers: this.refs.filter(paper => paper.type == type)
                })
            }
            return paper_chunks;
        },
        get_paper_chunks_topic: function () {
            var topic_set = new Set();
            for(var i=0; i<this.refs.length; i++){
                var paper_topics = this.refs[i].topic;
                for(var j=0; j<paper_topics.length; j++){
                    topic_set.add(paper_topics[j]);
                }
            }
            var topic_list = Array.from(topic_set).sort();
            var paper_chunks = Array();
            for(var i=0; i<topic_list.length; i++){
                var topic = topic_list[i];
                paper_chunks.push({
                    meta: topic,
                    papers: this.refs.filter(paper => paper.topic.indexOf(topic) >= 0)
                })
            }
            return paper_chunks;
        },
        get_paper_chunks_highlight: function () {
            var highlight_set = new Set();
            for(var i=0; i<this.refs.length; i++){
                var paper_highlight = this.refs[i].highlight;
                for(var j=0; j<paper_highlight.length; j++){
                    highlight_set.add(paper_highlight[j]);
                }
            }
            var highlight_list = Array.from(highlight_set).sort();
            var paper_chunks = Array();
            for(var i=0; i<highlight_list.length; i++){
                var highlight = highlight_list[i];
                paper_chunks.push({
                    meta: highlight,
                    papers: this.refs.filter(paper => paper.highlight.indexOf(highlight) >= 0)
                })
            }
            return paper_chunks;
        },
        get_paper_meta_for_presentation: function (meta) {
            if(meta in this.paper_meta_mapping){
                return this.paper_meta_mapping[meta];
            }else{
                return meta;
            }
        }
    }
}
</script>
