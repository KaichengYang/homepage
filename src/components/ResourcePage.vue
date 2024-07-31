<template>
    <div>
        <NavbarOther />
        <div class="py-5">
            <div class="container mt-5">
                <h2>Resources</h2>
                Here are some resources I've found useful for my research.
                <h3 class="mt-3">Academic Portfolio</h3>
                As a researcher, it's highly recommended to create an academic portfolio as early as possible.
                This usually includes a nice CV and a personal website (be sure to update it regularly).
                <ul class="mt-3" style="padding-left: 0">
                    <li>
                        <a href="https://www.overleaf.com/read/hxgmtrymvkyt#571b4c" target="_blank">LaTeX template for my CV</a>. Thanks to <a href="https://yongyeol.com/" target="_blank">YY Ahn</a> for sharing it with me.
                    </li>
                    <li>
                        My own website is a little Vue app that I built myself. If you are not familiar with frontend development, I would suggest choosing an existing framework, such as <a href="https://gohugo.io">Hugo</a>.
                    </li>
                </ul>
                <h3>Daily Routine</h3>
                <ul class="mt-3" style="padding-left: 0">
                    <li>I wrote a <a href="https://github.com/yang3kc/daily_arxiv_digest" target="_blank">tool</a> that uses ChatGPT to help me select interesting arXiv papers everyday.</li>
                </ul>
                <h3>Coding & Data Analysis</h3>
                <ul class="mt-3" style="padding-left: 0">
                    <li>A handy <a href="https://yang3kc.github.io/scicolor" target="_blank">tool</a> for selecting colors for scientific visualization that I created.</li>
                    <li>I have a <a href="https://github.com/yang3kc/CodeSnippet" target="_blank">collection</a> of matplotlib commands that I frequently use when creating plots.</li>
                    <li>Best <a href="https://chromewebstore.google.com/detail/easy-scraper-one-click-we/cljbfnedccphacfneigoegkiieckjndh" target="_blank">Chrome extension</a> for web scraping I have used.</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import NavbarOther from './NavbarOther.vue'

export default {
    name: 'ResourcePage',
    components: {
        NavbarOther
    }
}
</script>