<template>
    <div class="background" :class="side === 'right' ? 'right' : 'left'">
        <div class="seperator"/>
    </div>
</template>

<script>
export default {
    name: "Seperator",
    props: ["side"],
}
</script>

<style lang="scss" scoped>
@import "src/main";

.background {
    width: 100%;
    display: flex;

    &.left {
        justify-content: left;
    }

    &.right {
        justify-content: right;
    }

    .seperator {
        height: 1px;
        width: 65%;
        background: $gradient;
    }
}

</style>