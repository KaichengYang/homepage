<template>
    <div>
        <span v-for="project_highlight in projects">
            <h3 class="mt-3 mb-3">{{ project_highlight.project_class }}</h3>

            <div class="row">
                <template v-for="project in project_highlight.projects">
                    <div class="col-md-4 mb-3">
                        <b-card
                        :title="project.title"
                        :img-src="'static/images/' + project.image + '.png'"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                        >

                        <b-button v-b-modal="project.image" variant="outline-secondary">Learn More</b-button>
                        </b-card>

                        <b-modal :id="project.image" centered :title="project.title">
                        <p class="my-4"><span v-html="project.msg"></span></p>
                        <template v-slot:modal-footer="{ ok }">
                            <b-button size="sm" variant="outline-secondary" @click="ok()">Close</b-button>
                        </template>
                        </b-modal>
                    </div>
                </template>
            </div>
        </span>
    </div>
</template>

<script>
import json from "../../static/files/projects.json"

export default {
    name: "Project",
    data () {
        return {
            projects: json
        }
    }
}
</script>
