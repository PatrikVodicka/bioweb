<template>
    <section class="container my-5">

        <div class="row justify-content-center text-center">
            <div class="col-12 col-md-8 col-lg-6">
                <div class="row">

                    <article class="col-12">
                        <a id="kosik" class="logo" href="//kosik.cz" target="_blank" title="Košík.cz">
                            <kosik></kosik>
                        </a>

                        <p>
                            FE development with main focus on performance, speed and high quality code.
                        </p>
                    </article>

                    <article class="col-12">
                        <a id="usetreno" class="logo" href="//usetreno.cz" target="_blank" title="Ušetřeno.cz">
                            <usetreno></usetreno>
                        </a>

                        <p>
                            I mainly redesigned whole <a href="//usetreno.cz" target="_blank">Ušetřeno.cz</a> portal from jQuery
                            based FE to Vue.js, but participated on many other fronts.
                        </p>

                        <p>Such as keeping CMS system updated and as flexible as possible and CRM system more UX friendly to
                            help CC operators with their job</p>

                        <p>I also created and maintained related microsites</p>

                        <ul>
                            <li><a href="//www.elektrina.cz" target="_blank">elektrina.cz</a></li>
                            <li><a href="//www.cspujcky.cz" target="_blank">cspujcky.cz</a></li>
                            <li><a href="//www.postovni-sporitelna-pujcka.cz/" target="_blank">postovni-sporitelna-pujcka.cz</a>
                            </li>
                            <li><a href="//www.usetreno-cofidis.cz" target="_blank">usetreno-cofidis.cz</a></li>
                            <li><a href="//www.usetreno-zonky.cz" target="_blank">usetreno-zonky.cz</a></li>
                            <li><a href="//www.pujcka-csob.cz" target="_blank">pujcka-csob.cz</a></li>
                            <li><a href="//www.usetreno-hypotecni-banka.cz" target="_blank">usetreno-hypotecni-banka.cz</a></li>
                        </ul>
                    </article>

                </div>
            </div>
        </div>

    </section>
</template>
<script>
    import kosik from "../assets/img/logo/kosik.svg";
    import usetreno from "../assets/img/logo/usetreno.svg";

    export default {
        name: "MyWork",

        components: {
            kosik,
            usetreno
        },
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/views/mywork";
</style>