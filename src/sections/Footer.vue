<template>
    <footer>
        <div class="container max-width">
            <small>{{ data.copyright }}</small>
            <small>{{ data.made_by }}
                <a :href="data.made_by_author_url"
                   class="gradient"
                   target="_blank"
                   rel="noopener noreferrer"
                >
                    {{ data.made_by_author }}
                </a>
            </small>
        </div>
    </footer>
</template>

<script>
import content from "../../public/data/content.json"

export default {
    name: "Footer",
    data: () => ({
        data: content.footer
    })
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