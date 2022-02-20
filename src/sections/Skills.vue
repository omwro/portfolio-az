<template>
    <section id="skills" class="max-width">
        <h1 class="gradient">Skills</h1>
        <div class="container">
            <Progress name="Python" progress="100"/>
            <Progress name="Python" progress="80"/>
            <Progress name="Python" progress="60"/>
            <Progress name="Python" progress="40"/>
            <Progress name="Python" progress="20"/>
        </div>
    </section>
</template>

<script>
import Progress from "@/components/Progress";
export default {
    name: "Skills",
    components: {Progress}
}
</script>

<style lang="scss" scoped>
</style>