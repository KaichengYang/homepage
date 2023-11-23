export default {
  data () {
    return {
      pub_icon_map: {
        arXiv: "ai ai-arxiv ai-1x",
        DOI: "far fa-file-pdf",
        OSF: "far fa-file-pdf",
        SocArXiv: "far fa-file-pdf",
        GitHub: "fab fa-github-square",
        Dataset: "fas fa-database",
        PyPI: "fab fa-python",
        CRAN: "fab fa-r-project",
        GPT: "fas fa-robot"
      }
    }
  },
  methods: {
    get_pub_icon: function (c) {
      var icon = this.pub_icon_map[c];
      if (icon === undefined) {
        icon = "fas fa-external-link-alt";
      }
      return icon;
    }
  }
}
