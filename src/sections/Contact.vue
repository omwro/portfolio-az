<template>
    <section id="contact" class="max-width">
        <h1 class="gradient">{{ data.title }}</h1>
        <div class="container">
            <div class="map-container">
                <iframe
                    :src="data.iframe"
                    width="300"
                    height="300"
                    class="maps"
                    allowfullscreen=""
                    loading="lazy"/>
            </div>
            <div class="widgets">
                <div class="widget email" @click="goToMail">
                    <font-awesome-icon icon="fa-solid fa-envelope"/>
                </div>
                <div class="widget linkedin" @click="goToLinkedIn">
                    <font-awesome-icon icon="fa-brands fa-linkedin"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import content from "../../public/data/content.json"

export default {
    name: "Contact",
    data: () => ({
        data: content.contact
    }),
    methods: {
        goToMail() {
            window.location = `mailto:${this.data.email}`
        },
        goToLinkedIn() {
            window.open(this.data.linkedin, '_blank').focus();
        }
    }
}
</script>

<style lang="scss" scoped>
@import "src/main";
.container {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: $screen-sm) {
        flex-direction: row;
        align-self: center;
    }

    .map-container {
        width: 300px;
        height: 300px;
        margin: 10px;
        border-radius: 10px;
        overflow: hidden;

        .maps {
            border: 0;
            filter: grayscale(100%) invert(92%) contrast(83%);
        }

    }

    .widgets {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        @media screen and (min-width: $screen-sm) {
            flex-direction: column;

            align-self: center;
        }

        .widget {
            color: white;
            font-size: 4rem;
            width: 140px;
            height: 140px;
            margin: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            transition: ease-in-out 0.2s;
            cursor: pointer;

            &:hover {
                width: 150px;
                height: 150px;
                margin: 5px;
                font-size: 4.5rem;
                transition: ease-in-out 0.2s;
            }

            &.email {
                background: #00a2ed;
            }

            &.linkedin {
                background: #2867B2;
            }
        }
    }
}
</style>