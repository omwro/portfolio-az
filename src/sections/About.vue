<template>
    <section id="about" class="max-width">
        <h1 class="gradient">{{ data.title }}</h1>
        <h2 class="gradient">Hobbies</h2>
        <div class="container">
            <div class="hobby-block" v-for="(h, i) in data.hobbies" :key="i">
                <div class="hobby-icon-border">
                    <div class="hobby-icon">
                        <font-awesome-icon class="icon" :icon="h.icon"/>
                    </div>
                </div>
                <div class="hobby-text">{{ h.name }}</div>
            </div>
        </div>
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

<style lang="scss" scoped>
@import "src/main";

h1 {
    margin-bottom: 32px;
}

h2 {
    margin: 0 auto 32px;
    font-size: 2rem;
    text-align: center;
}

.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    .hobby-block {
        display: flex;
        flex-direction: column;
        margin: 8px;
        text-align: center;

        .hobby-icon-border {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 64px;
            height: 64px;
            background: $gradient;
            border-radius: 40% 20%;

            .hobby-icon {
                display: flex;
                width: 56px;
                height: 56px;
                font-size: 3rem;
                justify-content: center;
                align-items: center;
                background: $background;
                border-radius: 40% 20%;
            }
        }

        .hobby-text {
            margin-top: 4px;
        }
    }
}
</style>