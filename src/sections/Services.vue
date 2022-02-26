<template>
    <section id="services" class="max-width">
        <h1 class="gradient">{{ data.title }}</h1>
        <div class="container">
            <div class="block" v-for="(s, i) in data.services" :key="i">
                <font-awesome-icon class="icon" :icon="s.icon"/>
                <h2>{{ s.title }}</h2>
                <p>{{ s.description }}</p>
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

.block {
    margin-top: 25px;
    padding: 60px 40px;
    background: $container;

    .icon {
        font-size: 4rem;
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
</style>