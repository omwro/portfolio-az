<template>
    <footer>
        <div class="container max-width">
            <small>&copy; 2022 ALEX ZAMFIR ALL RIGHTS RESERVED</small>
            <small>Made by <a href="https://omererdem.nl" class="gradient" target="_blank" rel="noopener noreferrer">Ömer Erdem</a></small>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style lang="scss" scoped>
@import "src/main";

footer {
    background: $container;
    padding: 8px;

    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    small {
        color: $secondary;
        font-size: 12px;

        a {
            text-decoration: none;
        }
    }
}
</style>