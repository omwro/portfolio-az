<template>
    <div class="progress">
        <div class="name">{{name}}</div>
        <div class="bar">
            <div class="inner-bar" :data-value="progress+'%'" :style="'width:'+progress+'%'"/>
        </div>
    </div>
</template>

<script>
export default {
    name: "Progress",
    props: ["name", "progress"]
}
</script>

<style lang="scss" scoped>
@import "src/main";

.progress {
    margin-bottom: 48px;

    .name {
        margin-bottom: 16px;
        font-weight: bold;
    }

    .bar {
        height: 8px;
        width: 100%;
        background: $block;
        position: relative;

        .inner-bar {
            height: 100%;
            background: $gradient;
            position: absolute;
            top: 0;
            left: 0;

            &:before {
                content: "";
                width: 0;
                height: 0;
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                border-top: 8px solid rgba(255, 255, 255, 0.05);
                position: absolute;
                right: 8px;
                bottom: 14px;
            }

            &:after {
                content: attr(data-value);
                position: absolute;
                background: $block;
                top: -45px;
                right: 0;
                padding: 8px 16px;
                border-radius: 5px;
                font-size: 12px;
                font-weight: bold;
            }
        }
    }
}
</style>