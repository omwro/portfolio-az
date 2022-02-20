<template>
    <div class="paragraph">
        Hello, My name is
        <span class="gradient">Alex Zamfir</span>
        and I am an Electronic
        / Robotic Engineer student.
        A 24 year old that can create a
        <vue-typer
            class="gradient"
            :text=typerarray
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
// VUE-TYPER CUSTOMIZER DASHBOARD: https://cngu.github.io/vue-typer/
import {VueTyper} from 'vue-typer'

export default {
    name: "Typer",
    components: {VueTyper},
    data: () => ({
        typerarray: ["Robot Arms.", "Embedded Systems.", "Artificial Intelligence."]
    })
}
</script>

<style lang="scss">
@import "src/main";

#home .paragraph {
    font-size: 32px;

    .vue-typer {
        white-space: pre;

        .custom.caret {
            background-color: $primary !important;
        }
    }
}
</style>