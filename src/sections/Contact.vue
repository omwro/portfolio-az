<template>
    <section id="contact" class="max-width">
        <h1 class="gradient" data-aos="fade-right">{{ data.title }}</h1>
        <div class="container">
            <div class="map-container" data-aos="fade-right">
                <iframe
                    :src="data.iframe"
                    width="300"
                    height="300"
                    class="maps"
                    allowfullscreen=""
                    loading="lazy"/>
            </div>
            <div class="widgets" data-aos="fade-right">
                <div class="widget email" @click="goToMail" data-aos="fade-right">
                    <div>
                        <font-awesome-icon icon="fa-solid fa-envelope"/>
                    </div>
                    <div class="widget-text">
                        {{ data.email }}
                    </div>
                </div>
                <div class="widget linkedin" @click="goToLinkedIn" data-aos="fade-right">
                    <div>
                        <font-awesome-icon icon="fa-brands fa-linkedin"/>
                    </div>
                    <div class="widget-text">
                        {{ data.linkedin_text }}
                    </div>
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
            flex-direction: column;

            .widget-text {
                font-size: 1rem;

                @media screen and (min-width: $screen-sm) {
                    font-size: 0.8rem;
                }
            }

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