<template>
    <b-navbar toggleable="md" type="dark" style="background-color: #ac4142;" fixed="top">
    <div class="container">
        <router-link to="/"><b-navbar-brand>Home</b-navbar-brand></router-link>
    </div>
    </b-navbar>
</template>

<script>
export default {
    name: 'NavbarOther',
    data () {
        return {
            pub: 'This is publist'
        }
    }
}
</script>
