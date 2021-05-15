<template>
    <div id="publication" class="my-5">
        <h2 class="mt-3">Publications</h2>
        <P><a href="https://scholar.google.com/citations?user=tqb96X8AAAAJ&hl=en">
        <i class="ai ai-google-scholar-square ai-1x"></i> Google Scholar</a></P>

        <template v-for="paper_chunk in paper_chunks">
            <h3>{{ paper_chunk.meta }} </h3>
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
        }
    },
    data () {
        return {
            refs: json
        }
    },
    computed: {
        paper_chunks () {
            if (this.is_home){
                return [
                    {
                        meta: 'year',
                        papers: this.refs.slice(0, 5)
                    }
                ];
            }else{
                return [
                    {
                        meta: 2021,
                        papers: this.refs.slice(0, 5)
                    },
                    {
                        meta: 2020,
                        papers: this.refs.slice(5, 10)
                    }
                ];
            }
        }
    }
}
</script>
