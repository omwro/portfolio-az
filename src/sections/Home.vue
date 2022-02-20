<template>
    <section id="home">
        <Selfie/>
        <div class="paragraph">
            Hello, My name is
            <span class="gradient">Alex Zamfir</span>
            and I am an Electronic
            / Robotic Engineer student.
            A 24 year old that can create a

        </div>
    </section>
</template>

<script>
import Selfie from "@/components/Selfie";

export default {
    name: "Home",
    components: {Selfie},
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

.paragraph {
    font-size: 32px;
}
</style>