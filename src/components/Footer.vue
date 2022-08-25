<template>
    <footer class="footer">
        <div class="__container footer-container">
            <h2 class="page-title">{{ title }}</h2>
            <div class="contact">
                <div class="contact-me">
                    <h3>Позвоните мне по телефону</h3>
                    <div class="contact-me-phone">
                        <Tel />
                    </div>
                    <div class="contact-me-soc">
                        <div class="contact-me-soc-item">
                            <a class="contact-me-soc-item-link" href="https://vk.com/fljenya">
                                <Icon idIcon="vk" className="contact-me-soc-svg vk" />
                                <span>Я в VK </span>
                            </a>
                            <span class="overlay"></span>
                        </div>
                        <div class="contact-me-soc-item">
                            <a class="contact-me-soc-item-link" href="https://t.me/fljenya">
                                <Icon idIcon="telegram" className="contact-me-soc-svg telegram" />
                                <span>Я в Telegram </span>
                            </a>
                            <span class="overlay"></span>

                        </div>
                        <div class="contact-me-soc-item">
                            <a class="contact-me-soc-item-link" href="https://api.whatsapp.com/send?phone=79501081773">
                                <Icon idIcon="whatsapp" className="contact-me-soc-svg whatsapp" />
                                <span>Написать в Whatsapp </span>
                            </a>
                            <span class="overlay"></span>
                        </div>
                    </div>
                </div>
                <FormCollback class="form-collback"/>
            </div>
        </div>
    </footer>
</template>

<script>
import FormCollback from '@/components//UI/FormCollback.vue'

export default {
    name: "Footer",
    // components: { ContactForm },
    data() {
        return {
            title: "Контакты",
        };
    },
    components: { FormCollback }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
    margin-top: 100px;
    padding-bottom: 100px;
    background:linear-gradient(transparent, var(--secondColor));
.form-collback{
     background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
    border-radius: var(--radius);
}

    .contact {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        font-size: 1em;

        &-me {
            width: 50%;

            &-phone {
                margin: 15px 0 40px 0;
            }

            &-soc {
                display: grid;
                grid-gap: 10px;

                &-item {
                    width: 100%;
                    height: 50px;
                    border-radius: 30px;
                    position: relative;

                    & .overlay {
                        position: absolute;
                        left: -6px;
                        top: 0;
                        width: 18%;
                        height: 100%;
                        border-radius: 30px;
                        background-color: rgb(255, 255, 255);
                        z-index: 0;
                        clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0 53%, 0% 0%);
                        transition: var(--trans05);
                    }

                    &:hover .overlay {
                        width: 100%;
                        box-shadow: none;
                        clip-path: none;
                    }

                    &-link {
                        display: flex;
                        justify-content: start;
                        align-items: center;
                        gap: 10px;
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        left: 0;
                        top: 0;
                        z-index: 4;

                        span {
                            box-shadow: 10px 10px 10px var(--forthColor);
                            padding: 5px;
                            border-radius: 5px;
                            transition: var(--trans05);
                        }

                        &:hover {
                            span {
                                box-shadow: none;
                                padding: 20px;
                            }
                        }
                    }
                }

                &-svg {
                    width: 50px;
                    height: 50px;
                }
            }
        }
    }
}

@media screen and(max-width:700px) {
    .footer .contact {
        flex-wrap: wrap;

        &-me {
            width: 100%;

            &-soc {
                &-item {
                    & .overlay {
                        width: 108%;
                    }
                }
            }
        }
    }
}

@media screen and(max-width:900px) {
    .footer .contact-me-soc-item {
        width: 100%;
    }
}
</style>
