<template>
    <section id="about" class="max-width">
        <h1 class="gradient">{{data.title}}</h1>
    </section>
</template>

<script>
import content from "../../public/data/content.json"

export default {
    name: "About",
    data: () => ({
        data: content.about
    })
}
</script>

<style scoped>

</style>