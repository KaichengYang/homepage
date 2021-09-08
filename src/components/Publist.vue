<template>
    <div>
        <div class="btn-toolbar my-3" role="toolbar" aria-label="Toolbar with button groups" v-if="!is_home">
            <div class="btn-group flex-wrap mr-2" role="group" aria-label="First group" data-toggle="buttons">
                <button type="button" class="btn btn-secondary" disabled>Go to:</button>
                <template v-for="classifer in default_paper_meta_order[view]">
                    <button type="button" class="btn btn-outline-secondary" v-scroll-to="'#id_' + classifer">{{ get_paper_meta_for_presentation(classifer) }}</button>
                </template>
            </div>
        </div>
        <template v-for="paper_chunk in paper_chunks">
            <h4 v-bind:id="'id_' + paper_chunk.key" v-bind:key="'header' + paper_chunk.key" v-if="!is_home">{{ paper_chunk.meta }}</h4>
            <PublistUnit v-bind:papers="paper_chunk.papers" v-bind:key="paper_chunk.key" />
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
                covid: "COVID-19 pandemic",
                netsci: "Network Science",
                opioid: "Opioid Epidemic in U.S.",
                socialmedia: "Bad Actors and Misinformation on Social Media",
                conf: "Conference Proceedings",
                journal: "Journal Articles",
                preprint: "Preprint"
            },
            default_paper_meta_order: {
                topic: ["socialmedia", "covid", "opioid", "netsci"],
                type: ["preprint", "journal", "conf"],
                year: [2022, 2021, 2020, 2019, 2018, 2017]
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
            let classifier_list = null;
            if(classifier_name in this.default_paper_meta_order){
                classifier_list = this.default_paper_meta_order[classifier_name]
            }else{
                var classifier_set = new Set();
                for(let ref of this.refs){
                    var paper_classifiers = ref[classifier_name];
                    for(let paper_classifier of paper_classifiers){
                        classifier_set.add(paper_classifier);
                    }
                }
                classifier_list = Array.from(classifier_set).sort((a, b) => b-a);
            }

            let paper_chunks = Array();
            for(let paper_classifier of classifier_list){
                let temp_paper_list = this.refs.filter(paper => paper[classifier_name].indexOf(paper_classifier) >= 0);
                temp_paper_list.sort((a, b) => b.year[0] - a.year[0]);
                paper_chunks.push({
                    key: paper_classifier,
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
