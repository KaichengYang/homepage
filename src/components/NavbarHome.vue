<template>
    <b-navbar toggleable="md" type="dark" style="background-color: #ac4142;" fixed="top">
    <div class="container">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="/">Home</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
                <!-- <b-nav-item href="#" v-scroll-to="'#news'">News</b-nav-item>
                <b-nav-item href="#" v-scroll-to="'#project'">Research</b-nav-item>
                <b-nav-item href="#" v-scroll-to="'#tool'">Tools</b-nav-item>
                <b-nav-item href="#" v-scroll-to="'#publication'">Publications</b-nav-item> -->
                <b-nav-item href="static/files/cv.pdf">CV</b-nav-item>
                <!-- <b-nav-item href="#" v-scroll-to="'#about'">About</b-nav-item> -->
            </b-navbar-nav>
        </b-collapse>
    </div>


</b-navbar>
</template>

<script>
export default {
    name: 'NavbarHome',
    data () {
        return {
            pub: 'This is publist'
        }
    }
}
</script>
