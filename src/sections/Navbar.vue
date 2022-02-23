<template>
    <header>
        <nav class="max-width">
            <div>
                <h1 class="gradient">{{ data.logo }}</h1>
            </div>
            <ul class="desktop-only">
                <li v-for="(m, i) in data.menu" :key="i">
                    <a :href="m.id">{{ m.name }}</a>
                </li>
            </ul>
            <div class="mobile-only">
                <div class="btn" @click="toggleMenu">
                    ☰
                </div>
                <div class="menu-overlay" :class="menuStatus ? 'active': ''">
                    <menu>
                        <div class="menu-header">
                            <div class="menu-header-title gradient">Menu</div>
                            <div class="menu-header-close" @click="toggleMenu">&times;</div>
                        </div>
                        <ul class="menu-body">
                            <li v-for="(m, i) in data.menu" :key="i">
                                <a @click="toggleMenu" :href="m.id">{{ m.name }}</a>
                            </li>
                        </ul>
                    </menu>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import content from "../../public/data/content.json"

export default {
    name: "Navbar",
    data: () => ({
        data: content.navbar,
        menuStatus: false
    }),
    methods: {
        toggleMenu() {
            this.menuStatus = !this.menuStatus
        }
    }
}
</script>

<style lang="scss" scoped>
@import "src/main";

header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background: $container;
    z-index: 10;
    border-bottom: solid 2px $block;

    nav {
        display: flex;
        justify-content: space-between;
        padding: 8px 16px;
        width: calc(100% - 32px);

        h1 {
            margin: 0;
        }

        .desktop-only {
            display: none;

            @media screen and (min-width: $screen-sm) {
                display: flex;
            }
        }

        .mobile-only {
            align-self: center;

            @media screen and (min-width: $screen-sm) {
                display: none;
            }

            .btn {
                font-size: 2.5rem;
                line-height: 1;
                padding: 4px;
                cursor: pointer;
            }

            .menu-overlay {
                height: 100%;
                width: 0;
                margin: 0;
                position: fixed;
                z-index: 10;
                right: 0;
                top: 0;
                background-color: rgba(0, 0, 0, 0.95);
                overflow: hidden;
                transition: 0.5s;

                &.active {
                    width: 100%;
                }

                menu {
                    margin: 0;
                    padding: 0;

                    .menu-header {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        padding: 8px 16px;

                        .menu-header-title, .menu-header-close {
                            font-size: 3rem;
                        }

                        .menu-header-close {
                            cursor: pointer;
                            padding: 4px;
                        }
                    }

                    ul {
                        flex-direction: column;

                        li {
                            font-size: 1.5rem;
                        }
                    }
                }
            }
        }

        ul {
            display: flex;
            list-style: none;
            margin: 0;
            align-items: center;

            li {
                padding: 16px;
                font-size: 0.9rem;

                a {
                    text-decoration: none;
                    color: $primary;

                    &:hover {
                        background: $gradient;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        width: max-content;
                    }
                }
            }
        }
    }
}
</style>