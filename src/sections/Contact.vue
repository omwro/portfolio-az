<template>
    <section id="contact" class="max-width">
        <h1 class="gradient">{{ data.title }}</h1>
    </section>
</template>

<script>
import content from "../../public/data/content.json"

export default {
    name: "Contact",
    data: () => ({
        data: content.contact
    })
}
</script>

<style scoped>

</style>