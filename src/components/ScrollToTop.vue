<template>
    <div class="scroll-to-top" :class="visible?'visible':''" @click="scrollToTop">
        <font-awesome-icon icon="fa-solid fa-angles-up" />
    </div>
</template>

<script>
export default {
    name: "ScrollToTop",
    data: () => ({
        visible: false
    }),
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll(event) {
            const currentScrollHeight = event.target.scrollingElement.scrollTop
            this.visible = currentScrollHeight > 200;
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}
</script>

<style lang="scss" scoped>
@import "src/main";
.scroll-to-top {
    visibility: hidden;
    opacity: 0;
    position: fixed;
    bottom: 32px;
    right: 32px;
    padding: 13.5px 18px;
    border-radius: 100%;
    border: solid 1px white;
    overflow: hidden;
    cursor: pointer;
    transition: visibility 1s, opacity 0.5s linear;

    @media screen and (min-width: $screen-sm) {
        padding: 11.5px 18px;
    }

    &.visible {
        visibility: visible;
        opacity: 1;
        transition: visibility 0s, opacity 0.5s linear;
    }
}
</style>