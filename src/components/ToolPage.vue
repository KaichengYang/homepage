<template>
    <div>
        <NavbarOther />
        <div class="pt-5">
            <div class="container mt-5">
                <h2>Tools</h2>
                <Tool v-bind:is_home='false'/>
            </div>
        </div>
    </div>
</template>

<script>
import NavbarOther from './NavbarOther'
import Tool from './Tool'

export default {
    name: 'ToolPage',
    components: {
        NavbarOther,
        Tool,
    }
}
</script>