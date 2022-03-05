<template>
    <div class="progress">
        <div class="name" data-aos="fade-right">{{name}}</div>
        <div class="bar" data-aos="fade-right">
            <div class="inner-bar"
                 :data-value="progress+'%'"
                 :style="'width:'+progress+'%'"
                 data-aos="flip-up"
                 data-aos-delay="1000"/>
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
    margin-bottom: 64px;

    .name {
        margin-bottom: 16px;
        font-weight: 500;
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
                border-bottom: 8px solid rgba(255, 255, 255, 0.05);
                position: absolute;
                right: 8px;
                bottom: -12px;
            }

            &:after {
                content: attr(data-value);
                position: absolute;
                background: $block;
                top: 20px;
                right: 0;
                padding: 8px 16px;
                border-radius: 5px;
                font-size: 0.8rem;
                font-weight: 500;
            }
        }
    }
}
</style>