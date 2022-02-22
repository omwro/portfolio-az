<template>
    <header>
        <nav class="max-width">
            <div>
                <h1 class="gradient">{{data.logo}}</h1>
            </div>
            <ul>
                <li v-for="(m, i) in data.menu" :key="i">
                    <a :href="m.id">{{m.name}}</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import content from "../../public/data/content.json"

export default {
    name: "Navbar",
    data: () => ({
        data: content.navbar
    })
}
</script>

<style lang="scss" scoped>
@import "src/main";

header {
    position: fixed;
    left: 0;
    right: 0;
    background: $container;
    z-index: 10;
    border-bottom: solid 2px $block;

    nav {
        display: flex;
        justify-content: space-between;
        padding: 8px 16px;
        width: calc(100% - 32px);

        h1 {
            margin: 0;
        }

        ul {
            display: flex;
            list-style: none;
            margin: 0;
            align-items: center;

            li {
                padding: 16px;
                font-size: 14px;

                a {
                    text-decoration: none;
                    color: $primary;
                }
            }
        }
    }
}
</style>