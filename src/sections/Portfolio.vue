<template>
    <section id="portfolio">
        <h1 class="gradient">Portfolio</h1>
        <div class="container">
            <div class="block">
                <h2>Necklace</h2>
                <p>Necklace prototype magnet</p>
                <img src="@/../public/img/projects/project4.png"/>
                <div class="tags-container">
                    <div class="tag">Necklace</div>
                    <div class="tag">Prototype</div>
                    <div class="tag">Magnet</div>
                </div>
            </div>
            <div class="block">
                <h2>Necklace</h2>
                <p>Necklace prototype magnet</p>
                <img src="@/../public/img/projects/project4.png"/>
                <div class="tags-container">
                    <div class="tag">Necklace</div>
                    <div class="tag">Prototype</div>
                    <div class="tag">Magnet</div>
                </div>
            </div>
            <div class="block">
                <h2>Necklace</h2>
                <p>Necklace prototype magnet</p>
                <img src="@/../public/img/projects/project4.png"/>
                <div class="tags-container">
                    <div class="tag">Necklace</div>
                    <div class="tag">Prototype</div>
                    <div class="tag">Magnet</div>
                </div>
            </div>
            <div class="block">
                <h2>Necklace</h2>
                <p>Necklace prototype magnet</p>
                <img src="@/../public/img/projects/project4.png"/>
                <div class="tags-container">
                    <div class="tag">Necklace</div>
                    <div class="tag">Prototype</div>
                    <div class="tag">Magnet</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Portfolio"
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