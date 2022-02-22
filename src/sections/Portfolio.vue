<template>
    <section id="portfolio" class="max-width">
        <h1 class="gradient">{{ data.title }}</h1>
        <div class="container">
            <div class="block" v-for="(p,i) in data.projects" :key="i">
                <h2>{{ p.title }}</h2>
                <p>{{ p.description }}</p>
                <img :src="p.image_path" alt="project picture"/>
                <div class="tags-container">
                    <div class="tag" v-for="(t,j) in p.tags" :key="j">{{ t }}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import content from "../../public/data/content.json"

export default {
    name: "Portfolio",
    data: () => ({
        data: content.portfolio
    })
}
</script>

<style lang="scss" scoped>
@import "src/main";

.container {
    .block {
        background: $container;
        margin-top: 32px;
        padding: 32px;

        h2 {
            font-size: 24px;
            font-weight: 500;
        }

        p {
            font-size: 16px;
            color: $secondary;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .tags-container {
            margin-top: 16px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }

        .tag {
            margin: 0 5px 5px 0;
            padding: 8px 12px;
            background: $block;
            display: inline;
        }

    }
}
</style>