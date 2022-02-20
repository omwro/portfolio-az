<template>
    <div id="app">
        <Navbar/>
        <Home/>
        <About/>
        <Services/>
        <Portfolio/>
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

export default {
    name: 'App',
    components: {
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

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
