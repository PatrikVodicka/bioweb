<template>
    <section class="container">
        <div class="row align-items-center text-center h-100">
            <div class="col">
                <div class="sw-intro"
                     :style="`animation-duration: ${intro.animationDuration}s;animation-delay: ${intro.animationDelay}s`">
                    A long time ago in this galaxy not really far away...
                </div>
                <div class="sw-title"
                     :style="`animation-duration: ${title.animationDuration}s;animation-delay: ${title.animationDelay}s`">
                    I was born
                </div>
            </div>
        </div>

        <div class="sw-prolog"
             :style="`transform: perspective(${prolog.perspective}rem) rotateX(${prolog.rotateX}deg) translateY(${prolog.translateY}%)`">
            <h3 class="mb-5">I didn't finish this part yet I'm sorry, here is some lorem ipsum for you.</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore ex perferendis. Ducimus ea eaque
                fugiat, laborum quisquam saepe sed sunt tempore ullam? Alias aperiam, fuga labore molestiae molestias
                omnis!</p>
            <p>Accusamus aperiam asperiores at corporis delectus dolore ea, earum fuga id numquam porro quasi quis
                ratione repudiandae saepe suscipit ut vel velit? Commodi eligendi fuga ipsa tempore vero, vitae
                voluptate?</p>
            <p>A ab, alias aliquid asperiores debitis dignissimos eaque earum enim excepturi, id ipsum labore magni
                mollitia, neque nobis perspiciatis quas quis quos repellendus sequi tempore veritatis voluptatem.
                Ducimus ipsum, tenetur!</p>
            <p>Dolore, in, libero. Nisi, placeat repudiandae! A assumenda autem, earum facilis illum ipsam minima
                mollitia nesciunt officiis pariatur placeat quasi quidem reiciendis repellat repudiandae! Consectetur
                corporis expedita magni nostrum odio?</p>
            <p>Aliquam, explicabo, vero? Accusamus asperiores at corporis deleniti deserunt dolores ducimus eveniet
                exercitationem expedita, illum, inventore laboriosam libero molestias nihil porro, quae quaerat
                quibusdam quod repellendus rerum tempora voluptas voluptates.</p>
            <p>Amet debitis deleniti ex explicabo inventore magni nihil odio rem suscipit ullam! Accusantium, ad culpa
                distinctio dolores esse fugit illum maxime nobis officiis rerum. Consequuntur corporis delectus
                explicabo magni neque.</p>
            <p>Aliquid architecto doloribus nobis non odio quibusdam sed. Aliquid consectetur corporis cupiditate
                officiis suscipit. Cumque distinctio dolorem eligendi est itaque, labore minus neque nisi officiis,
                pariatur possimus quis totam, ullam?</p>
            <p>Animi autem commodi culpa cumque dolore earum et expedita fuga, ipsa laboriosam maxime modi molestiae nam
                nesciunt nobis officiis porro, provident quae recusandae repellat tempora veniam veritatis vitae? In,
                sed?</p>
            <p>Accusantium amet consectetur deserunt dolores, dolorum, earum eius eum facilis id inventore nemo neque
                obcaecati praesentium quia repudiandae soluta suscipit veniam. Ad assumenda delectus dolores illo,
                labore optio quae reprehenderit!</p>
            <p>A aliquid debitis iste, magni minima molestiae nulla porro saepe. Consequuntur cupiditate debitis
                doloremque eius enim eos eum exercitationem illum impedit inventore nam necessitatibus nisi nostrum
                optio quaerat, quisquam vitae.</p>
        </div>
    </section>
</template>

<script>
    export default {
        name: "About",

        data() {
            return {
                intro: {
                    animationDuration: 8,
                    animationDelay: 0
                },

                title: {
                    animationDuration: 0,
                    animationDelay: 8
                },

                prolog: {
                    perspective: 33,
                    rotateX: 20,
                    translateY: 100,
                    isScrolled: false,
                    animationDuration: 120,
                    animationDelay: 8,
                },
            }
        },

        methods: {
            handleWheel(e) {
                this.prolog.isScrolled = true;

                if (e.deltaY < 0) {
                    this.prolog.translateY += 10;
                } else {
                    this.prolog.translateY -= 10;
                }
            },

            animateProlog(sec) {
                let start = Date.now();

                let timer = setInterval(() => {
                    let timePassed = Date.now() - start;

                    this.prolog.translateY -= 1;

                    if (timePassed > sec * 1000 || this.prolog.isScrolled) clearInterval(timer);
                }, 200);
            }
        },

        mounted() {
            setTimeout(() => {
                window.addEventListener('wheel', this.handleWheel);
                this.animateProlog(this.prolog.animationDuration);
            }, this.prolog.animationDelay * 1000);
        },

        destroyed() {
            window.removeEventListener('wheel', this.handleWheel);
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/views/about.scss";
</style>