<template>
    <b-navbar toggleable="md" type="dark" style="background-color: #ac4142;" fixed="top">
    <div class="container">
        <b-navbar-brand href="/">Home</b-navbar-brand>
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
