<template>
    <div>
        <template v-for="paper_chunk in paper_chunks">
            <h4 v-if="!is_home">{{ paper_chunk.meta }}</h4>
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
            },
            default_paper_meta_order: {
                topic: ["socialmedia", "opioid", "netsci"],
                type: ["preprint", "journal", "conf"]
            }
        }
    },
    computed: {
        paper_chunks: function () {
            if(["topic", "type", "highlight"].indexOf(this.view) >= 0){
                return this.get_paper_chunks(this.view);
            }else{
                return this.get_paper_chunks("year");
            }
        }
    },
    methods: {
        get_paper_chunks: function (classifier_name) {
            if(classifier_name in this.default_paper_meta_order){
                var classifier_list = this.default_paper_meta_order[classifier_name]
            }else{
                var classifier_set = new Set();
                for(var i=0; i<this.refs.length; i++){
                    var paper_classifiers = this.refs[i][classifier_name];
                    for(var j=0; j<paper_classifiers.length; j++){
                        classifier_set.add(paper_classifiers[j]);
                    }
                }
                var classifier_list = Array.from(classifier_set).sort((a, b) => b-a);
            }

            var paper_chunks = Array();
            for(var i=0; i<classifier_list.length; i++){
                var paper_classifier = classifier_list[i];
                var temp_paper_list = this.refs.filter(paper => paper[classifier_name].indexOf(paper_classifier) >= 0);
                temp_paper_list.sort((a, b) => b.year[0] - a.year[0]);
                paper_chunks.push({
                    meta: this.get_paper_meta_for_presentation(paper_classifier),
                    papers: temp_paper_list
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
