<template>
    <section id="home">
        <Selfie/>
        <Typer/>
    </section>
</template>

<script>
import Selfie from "@/components/Selfie";
import Typer from "@/components/Typer";

export default {
    name: "Home",
    components: {Typer, Selfie},
    data: () => ({
        replace: [
            { from: "Vue", to: "React?" },
            { from: "Typewriter React?", to: "Joking, it`s Vue!" },
        ],
    }),

}
</script>

<style lang="scss" scoped>
@import "src/main";
</style>