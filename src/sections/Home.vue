<template>
    <section id="home">
        <Selfie class="max-width"/>
        <Typer class="max-width"/>
        <div class="gradient-circle"></div>
        <div class="gradient-circle two"></div>
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
            {from: "Vue", to: "React?"},
            {from: "Typewriter React?", to: "Joking, it`s Vue!"},
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
    position: relative;
    overflow: hidden;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 96px;
    padding-bottom: 32px;

    .gradient-circle {
        position: absolute;
        left: -250px;
        top: 250px;
        right: auto;
        bottom: auto;
        z-index: -1;
        width: 500px;
        height: 500px;
        border-radius: 70%;
        background-image: -webkit-linear-gradient(45deg, #059dff, #36c6f0);
        background-image: -o-linear-gradient(45deg, #059dff, #36c6f0);
        background-image: linear-gradient(45deg, #059dff, #36c6f0);
        opacity: 0.25;
        -webkit-filter: blur(100px);
        filter: blur(100px);
    }

    .gradient-circle.two {
        left: auto;
        top: -250px;
        right: -250px;
        bottom: auto;
        background-image: -webkit-linear-gradient(45deg, #fb5343, #6549d5);
        background-image: -o-linear-gradient(45deg, #fb5343, #6549d5);
        background-image: linear-gradient(45deg, #fb5343, #6549d5);
    }
}
</style>