<script>
export default {
    methods: {
        makeToast(variant = null, title, content) {
            this.$bvToast.toast(content, {
                title: title,
                variant: variant,
                solid: true,
                autoHideDelay: 2000
            });
        },
    },
};
</script>
