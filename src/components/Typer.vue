<template>
    <div class="paragraph">
        {{ data.intro1 }}
        <span class="gradient">{{ data.gradient }}</span>
        {{ data.intro2 }}
        <vue-typer
            class="gradient"
            :text=data.typer_array
            repeat='Infinity'
            :shuffle='false'
            initial-action='typing'
            :pre-type-delay='100'
            :type-delay='100'
            :pre-erase-delay='2000'
            :erase-delay='50'
            erase-style='backspace'
            :erase-on-complete='false'
            caret-animation='solid'
        ></vue-typer>
    </div>
</template>

<script>
import content from "../../public/data/content.json"

// VUE-TYPER CUSTOMIZER DASHBOARD: https://cngu.github.io/vue-typer/
import {VueTyper} from 'vue-typer'

export default {
    name: "Typer",
    components: {VueTyper},
    data: () => ({
        data: content.home.introduction
    })
}
</script>

<style lang="scss">
@import "src/main";

#home .paragraph {
    font-size: 2rem;

    .vue-typer {
        white-space: pre;

        .custom.caret {
            background-color: $primary !important;
        }
    }
}
</style>