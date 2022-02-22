<template>
    <div class="selfie">
        <img src="@/../public/img/home/selfie.jpeg" alt="profile picture"/>
    </div>
</template>

<script>
import content from "../../public/data/content.json"

export default {
    name: "Selfie",
    data: () => ({
        data: content.home
    })
}
</script>

<style lang="scss" scoped>
@import "src/main";

.selfie {
    height: 290px;
    width: 290px;
    background: $gradient-reverse;
    border-radius: 100%;
    margin-bottom: 32px;

    img {
        width: 280px;
        height: 280px;
        padding: 5px;
        border-radius: 100%;
        object-fit: cover;
    }
}
</style>