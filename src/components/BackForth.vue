<template>
    <div>
        <template v-if="is_home">
            <router-link v-bind:to="target">More ...</router-link>
        </template>
        <template v-else>
            <router-link to="/"><i class="far fa-arrow-alt-circle-left"></i> Back</router-link>
        </template>
    </div>
</template>

<script>
export default {
    name: "BackForth",
    props: {
        is_home: {
            type: Boolean,
            default: true
        },
        target: {
            type: String,
            default: "/"
        }
    }
}
</script>
