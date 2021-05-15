<template>
    <div>
        <NavbarOther />

        <div class="pt-5">
            <div class="container mt-5">
                <Publist v-bind:is_home='false'/>
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
    }
}
</script>
