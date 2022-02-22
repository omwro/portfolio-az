<template>
    <section id="home" class="max-width">
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

#home {
    // 128px is the top and bottom margin of section
    min-height: calc(100vh - 128px);
    text-align: center;
    align-items: center;
    justify-content: center;
}
</style>