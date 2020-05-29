<template>
    <section>
        <div :style="`margin-top: ${marginTop}vh`">
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto dolore doloribus ex facere
                ipsa
                laborum minima minus nesciunt nostrum, porro quam quibusdam quidem ratione reprehenderit similique
                tempora
                tenetur ullam vero vitae. Aliquam architecto debitis illo laudantium molestiae neque, numquam quas
                voluptate. Aliquam beatae maiores mollitia placeat porro rem, voluptatum.
            </div>
            <div>A amet assumenda aut beatae commodi, ducimus et fugit hic inventore ipsam ipsum iure maiores minima
                minus
                nulla obcaecati pariatur quibusdam quis quod rerum soluta tempora veritatis voluptate! Amet, culpa
                facilis
                laboriosam molestiae natus optio quod quos velit? Ab assumenda dolore dolorem eaque eligendi eos
                incidunt
                pariatur quo voluptate voluptates.
            </div>
            <div style="width: 750px">Adipisci, animi dolores eaque labore laborum nam possimus quae reiciendis tempore
                totam. Animi asperiores
                at corporis dolorem fugit in molestiae mollitia natus neque nesciunt nihil odit omnis perferendis, qui
                sit
                vel vitae? Accusantium aperiam, beatae culpa eos eum ex nulla odit voluptatum. Earum exercitationem in
                modi
                nihil quas quo ratione.
            </div>
            <div>A at aut consectetur consequuntur debitis, ea ex, explicabo hic laborum nesciunt nisi nostrum
                perspiciatis
                quaerat, qui sapiente soluta suscipit tempore totam? Sit, tempora veritatis. Animi asperiores, atque,
                aut
                autem commodi corporis eius exercitationem expedita fugit, ipsum magni necessitatibus nemo nisi
                obcaecati
                porro quaerat recusandae reiciendis rerum soluta unde voluptate.
            </div>
            <div>Accusamus adipisci culpa deserunt dolorem excepturi expedita facere hic id ipsum iure libero maiores
                minima, modi nisi obcaecati odio perferendis perspiciatis quaerat quibusdam quisquam quo recusandae sint
                sit
                suscipit tenetur ut vitae! Consectetur earum enim esse fugit hic impedit ipsa iure maxime necessitatibus
                voluptatum! Aliquam eaque excepturi minima sit totam?
            </div>
            <div>Animi aperiam aut consectetur debitis eaque et facere fuga id in ipsa ipsum maiores molestiae nisi
                nostrum
                odit perspiciatis porro possimus provident quasi quia quod rem sit soluta tempora temporibus, ut velit?
                Alias aperiam beatae, cupiditate deserunt eum facere impedit, laboriosam libero minima, nam pariatur qui
                quibusdam rem repellat unde.
            </div>
            <div>Aliquid amet aperiam dignissimos, dolorum est eum, exercitationem facere ipsa mollitia nulla optio
                possimus
                quibusdam reiciendis rem rerum veritatis voluptates. Debitis distinctio dolorum earum, et excepturi
                explicabo facere laboriosam quod. Alias aliquid blanditiis dicta ea facilis in nesciunt placeat, quaerat
                quam quis vero, voluptatem. Dolorum earum eligendi et quos veritatis?
            </div>
            <div>Atque culpa cupiditate est incidunt modi molestiae nobis officia perferendis quidem ullam! Atque et
                itaque
                perferendis, praesentium quia quidem quo voluptatum! Accusantium aliquam aperiam, architecto assumenda
                debitis dolorem fugiat illo itaque iusto mollitia nam natus obcaecati, placeat, provident quaerat rem
                repellat repellendus saepe sequi sit sunt ut vel veritatis! Impedit?
            </div>
            <div>Ab, alias, animi autem consequatur corporis cum cumque earum itaque iure iusto laudantium natus nemo,
                nesciunt nobis nostrum nulla numquam odio omnis optio quaerat qui quidem recusandae sequi tempore vitae
                voluptate voluptatibus voluptatum. Accusantium architecto eos illo inventore itaque neque nulla
                praesentium
                provident sunt. Esse minima neque nobis nostrum quod!
            </div>
            <div>Accusamus accusantium animi at corporis deleniti dolore, explicabo iusto maiores minus necessitatibus
                nemo
                nobis non officia placeat, quibusdam quidem saepe sed sit veritatis vero! A commodi dolores est expedita
                facilis laboriosam, magnam maiores optio quasi! Ad asperiores, autem cum cumque dolor magni maxime nobis
                nostrum odit sapiente sit tenetur ullam?
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Test",

        data() {
            return {
                marginTop: 0
            }
        },

        mounted() {
            // el.addEventListener("touchstart", this.handleStart, false);
            // el.addEventListener("touchend", this.handleEnd, false);
            // el.addEventListener("touchcancel", this.handleCancel, false);

            document.addEventListener("touchmove", this.handleMove, false);
        },

        destroyed() {
            document.removeEventListener("touchmove", this.handleMove, false);
        },

        watch: {},

        methods: {
            handleStart(e) {
                window.console.log(e)
            },
            handleEnd(e) {
                window.console.log(e)
            },
            handleCancel(e) {
                window.console.log(e)
            },
            handleMove(e) {
                // let startY = e.touches[0].clientY
                // window.console.log(e)
                // window.console.log(e.touches[0])
                window.console.log('clientY', e.touches[0].clientY)
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "~bootstrap/scss/functions";
    @import "~bootstrap/scss/mixins";
    @import "../assets/scss/variables";

    section {
        width: 80vw;
        height: 500px;
        margin: 50px auto 0;
        border: 2px solid $sw-yellow;
        overflow: hidden;
    }
</style>