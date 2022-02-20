<template>
    <section id="services">
        <h1 class="gradient">Services</h1>
        <div class="container">
            <div class="block">
                <img/>
                <h2>LED Light Show</h2>
                <p>I can create you a custom light show with a Xmega or Arduino controller.</p>
            </div>
            <div class="block">
                <img/>
                <h2>Object Recognition Model</h2>
                <p>I can make a custom Object Recognition model with python for your use case.</p>
            </div>
            <div class="block">
                <img/>
                <h2>Robot Arm</h2>
                <p>I can design and produce a functional robot arm for your use case.</p>
            </div>
            <div class="block">
                <img/>
                <h2>Problem Solving</h2>
                <p>I can think along your problem and solve it with the best solution.</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Services"
}
</script>

<style lang="scss" scoped>
@import "src/main";

.block {
    margin-top: 25px;
    padding: 60px 40px;
    background: $container;

    h2 {
        font-size: 16px;
        font-weight: 500;
        color: $primary;
    }

    p {
        font-size: 16px;
        color: $secondary;
    }
}
</style>