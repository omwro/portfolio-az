<template>
    <section id="services" class="max-width">
        <h1 class="gradient" data-aos="fade-right">{{ data.title }}</h1>
        <div class="container">
            <div class="block" v-for="(s, i) in data.services" :key="i" data-aos="fade-up">
                <div class="icon-block">
                    <font-awesome-icon class="icon gradient" :icon="s.icon"/>
                </div>
                <div class="text-block">
                    <h2>{{ s.title }}</h2>
                    <p>{{ s.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import content from "../../public/data/content.json"

export default {
    name: "Services",
    data: () => ({
        data: content.services
    })
}
</script>

<style lang="scss" scoped>
@import "src/main";

.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    .block {
        margin-top: 30px;
        padding: 60px 40px;
        background: $container;
        width: 100%;
        border-radius: 5px;
        display: flex;
        flex-direction: row;

        @media screen and (min-width: $screen-sm) {
            margin-left: 15px;
            margin-right: 15px;
            width: calc(50% - 110px);
        }

        .icon-block {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 60px;
            padding-right: 40px;
            flex-grow: 0;
            flex-shrink: 0;
        }

        .text-block {
            align-self: center;
        }

        .icon {
            font-size: 3rem;
            color: white;
        }

        h2 {
            font-size: 1.2rem;
            font-weight: 500;
            color: $primary;
        }

        p {
            font-size: 1rem;
            color: $secondary;
        }
    }
}
</style>