<template>
    <div id="app">
        <Navbar/>
        <Home/>
        <Seperator side="left"/>
        <About/>
        <Seperator side="right"/>
        <Services/>
        <Seperator side="left"/>
        <Portfolio/>
        <Seperator side="right"/>
        <Skills/>
        <Footer/>
    </div>
</template>

<script>

import Navbar from "@/sections/Navbar";
import Home from "@/sections/Home";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Portfolio from "@/sections/Portfolio";
import Skills from "@/sections/Skills";
import Footer from "@/sections/Footer";
import Seperator from "@/components/Seperator";

export default {
    name: 'App',
    components: {
        Seperator,
        Footer,
        Skills,
        Portfolio,
        Services,
        About,
        Home,
        Navbar
    }
}
</script>

<style lang="scss">
@import "main";

html {
    min-height: 100vh;
    background: $background;
    color: $primary;

    body {
        margin: 0;

        #app {
            font-family: Avenir, Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-align: center;
        }
    }
}
</style>
