<template>
    <div>
        <template v-if="is_home">
            <a v-bind:href="target">More ...</a>
        </template>
        <template v-else>
            <a href="/"><i class="far fa-arrow-alt-circle-left"></i> Back</a>
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
