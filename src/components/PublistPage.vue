<template>
    <div>
        <NavbarOther />

        <div class="py-5">
            <div class="container mt-5">
                <h2 class="mt-3">Publications</h2>
                <div class="btn-toolbar my-3" role="toolbar" aria-label="Toolbar with button groups">
                    <div class="btn-group flex-wrap mr-2" role="group" aria-label="First group" data-toggle="buttons">
                        <button type="button" class="btn btn-secondary" disabled>Group by:</button>
                        <button type="button" class="btn btn-outline-secondary" v-bind:class="button_stats.year" v-on:click="update_publist('year')">Year</button>
                        <button type="button" class="btn btn-outline-secondary" v-bind:class="button_stats.topic" v-on:click="update_publist('topic')">Topic</button>
                        <button type="button" class="btn btn-outline-secondary" v-bind:class="button_stats.type" v-on:click="update_publist('type')">Type</button>
                    </div>
                </div>

                <Publist v-bind:is_home='false' v-bind:view='publist_to_show'/>
            </div>
        </div>
    </div>
</template>

<script>
import NavbarOther from './NavbarOther'
import Publist from './Publist'

export default {
    name: 'PublistPage',
    components: {
        NavbarOther,
        Publist
    },
    data () {
        return {
            button_stats: {
                year: "btn-clicked",
                topic: "",
                type: ""
            },
            publist_to_show: "year"
        }
    },
    methods: {
        update_publist: function (view) {
            this.publist_to_show = view;
            Object.keys(this.button_stats).forEach(key => {
                this.button_stats[key] = "";
            });
            this.button_stats[view] = "btn-clicked";
            // console.log(this.publist_to_show);
        }
    }
}
</script>
