<template>
    <section id="skills" class="max-width">
        <h1 class="gradient">{{ data.title }}</h1>
        <div class="container">
            <Progress v-for="(p, i) in data.progress" :name="p.name" :progress="p.score" :key="i"/>
        </div>
    </section>
</template>

<script>
import content from "../../public/data/content.json"
import Progress from "@/components/Progress";

export default {
    name: "Skills",
    components: {Progress},
    data: () => ({
        data: content.skills
    })
}
</script>

<style lang="scss" scoped>
</style>