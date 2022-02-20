<template>
    <header>
        <nav class="max-width">
            <div>
                <h1 class="gradient">AZ</h1>
            </div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: "Navbar"
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