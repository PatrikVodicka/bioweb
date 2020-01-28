<template>
    <section class="container">
        <div class="row align-items-center text-center h-100">
            <div class="col">
                <span class="sw-intro">
                    A long time ago, when the galaxy was yet a beautiful place to live in...
                </span>
                <div class="sw-title">
                    i was born
                </div>
            </div>
        </div>
        <div class="sw-prolog" :style="`transform: perspective(300px) rotateX(20deg) translateY(${axisY}%)`">
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis, dolor doloremque ea fugiat
                fugit iste iusto libero repudiandae sapiente tempore tenetur voluptatem. Ab ad assumenda beatae
                dignissimos doloremque eaque eos error esse ex excepturi exercitationem maiores minima molestias non
                numquam omnis quaerat, quis quisquam repellendus reprehenderit saepe similique vel.
            </div>
            <div>Aperiam, atque blanditiis delectus deleniti distinctio ducimus id iusto recusandae vel! Dolores
                eligendi esse odit perspiciatis possimus veritatis vitae. Accusantium aliquam aspernatur consectetur,
                doloribus facilis fugiat fugit id ipsam magnam molestiae nisi nostrum nulla perspiciatis, quam ratione
                repellendus, reprehenderit tempore totam? Aspernatur delectus, in mollitia quo repellendus tempora
                tenetur unde?
            </div>
            <div>Aspernatur cum dicta eveniet explicabo id nesciunt obcaecati quaerat quidem voluptatem voluptatibus. Ab
                accusamus autem consectetur cupiditate doloribus, eaque error expedita, impedit ipsum itaque magni natus
                nulla omnis optio quam quibusdam quisquam quo similique veniam vitae. Alias aliquid autem dignissimos
                eaque, expedita hic ipsam numquam reprehenderit, saepe sequi temporibus ullam.
            </div>
            <div>Aperiam beatae commodi delectus dignissimos doloremque excepturi inventore maxime, molestiae nesciunt
                porro repellat saepe sed soluta sunt vitae! Animi cumque ducimus ea esse, ex iure magnam, possimus quas
                qui repellendus similique sit temporibus? Ad adipisci eveniet explicabo hic sint! Animi aperiam
                blanditiis et necessitatibus omnis possimus praesentium quo repellendus, reprehenderit.
            </div>
            <div>Eius ex repellendus voluptate? Consequatur cum debitis, eius error ex expedita illo impedit ipsam ipsum
                iure mollitia placeat quisquam, quos ratione reiciendis temporibus velit. Ipsum possimus quia sit. At
                corporis eum iure modi ratione reprehenderit rerum unde. Adipisci aliquam amet delectus distinctio
                magnam minima quia repellendus sapiente tempore vero. Porro!
            </div>
            <div>Ad, aliquam asperiores blanditiis ipsam iste nihil nostrum porro velit vero! Ab consequuntur, cumque
                cupiditate dolorum ducimus eum iusto magnam numquam perspiciatis voluptate! Fugiat mollitia natus non
                quia tempore. Adipisci facere officiis quos tempore totam voluptas. Architecto, autem consequuntur
                eligendi eveniet facilis id ipsa minus sit tempora tempore voluptatibus, voluptatum.
            </div>
            <div>Alias assumenda aut cupiditate deserunt dolorem earum eius eos est explicabo fugit ipsa iusto maxime
                molestiae natus necessitatibus nobis optio possimus praesentium quas quasi quidem, reiciendis
                repellendus, saepe sed totam ut voluptatibus! Accusantium aliquid, architecto aspernatur doloremque
                eveniet id, maxime minus nesciunt odio omnis perspiciatis provident qui vero voluptatem voluptates.
            </div>
            <div>Accusantium aliquid amet architecto autem consequuntur, dignissimos error esse explicabo illum in magni
                numquam, placeat porro quam quidem quis quo quos temporibus velit voluptatem. Consequatur cum earum
                impedit voluptatum? Aut cum debitis dolore doloribus ea eaque error eum illo itaque nam optio, placeat
                quae similique? A dicta dolores sint veniam.
            </div>
            <div>A ad adipisci aperiam autem consequuntur culpa dolor dolores eligendi eos ex exercitationem fugiat hic
                incidunt iste, laborum laudantium maiores minima molestias nam nihil quas quasi quis repellat, sunt
                ullam unde, voluptatem? Ad deleniti harum inventore laborum, libero reiciendis! Assumenda cumque,
                debitis magni numquam pariatur qui voluptatem! Facere, ipsa, placeat!
            </div>
            <div>Alias aliquid atque autem consequuntur culpa cumque cupiditate dolorem dolores eos error eum,
                exercitationem expedita fugit harum ipsam ipsum iure laudantium minus mollitia neque nesciunt nobis
                nostrum numquam obcaecati omnis perferendis quaerat qui recusandae sapiente sed ullam unde vero vitae?
                Adipisci earum eligendi fugiat, harum iste iure praesentium repellendus sint.
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "About",

        data() {
            return {
                axisY: 100
            }
        },

        methods: {
            handleWheel(e) {
                if (e.deltaY < 0) {
                    this.axisY += 10;
                } else {
                    this.axisY -= 10;
                }
            }
        },

        mounted() {
            window.addEventListener('wheel', this.handleWheel);
        },

        destroyed() {
            window.removeEventListener('wheel', this.handleWheel);
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/views/about.scss";
</style>