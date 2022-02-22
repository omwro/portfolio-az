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
        <Seperator side="left"/>
        <Contact/>
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
import Contact from "@/sections/Contact";

export default {
    name: 'App',
    components: {
        Contact,
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
    font-size: 12px;

    @media screen and (min-width:$screen-sm){
        font-size: 16px;
    }

    body {
        margin: 0;
        font-family: 'Poppins', sans-serif;
    }
}
</style>
