<template>
    <div class="selfie">
        <img src="@/../public/img/home/selfie.jpeg" alt="profile picture"/>
    </div>
</template>

<script>
export default {
    name: "Selfie"
}
</script>

<style lang="scss" scoped>
@import "src/main";

.selfie {
    height: 290px;
    width: 290px;
    background: $gradient-reverse;
    border-radius: 100%;

    img {
        width: 280px;
        height: 280px;
        padding: 5px;
        border-radius: 100%;
        object-fit: cover;
    }
}
</style>