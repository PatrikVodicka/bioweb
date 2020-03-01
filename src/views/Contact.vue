<template>
    <section class="container">

        <div class="row align-items-center h-100">

            <div class="col-6 col-md">
                <div id="skype" class="logo" title="Skype">
                    <div @click="copySkype"
                         v-b-popover="skype.isCopied ? 'Copied!' : 'Oops!'">
                        <skype></skype>
                    </div>
                </div>
            </div>

            <div class="col-6 col-md">
                <a id="linkedin" class="logo" href="//www.linkedin.com/in/patrik-vodi%C4%8Dka-788799122/"
                   target="_blank" title="Linked-In">
                    <linkedIn></linkedIn>
                </a>
            </div>

            <div class="col-6 col-md">
                <a id="facebook" class="logo" href="//www.facebook.com/patrik.vodicka" target="_blank"
                   title="Facebook">
                    <facebook></facebook>
                </a>
            </div>

            <div class="col-6 col-md">
                <a id="gmail" href="mailto:vodicka.patrik@gmail.com" class="logo" title="Gmail">
                    <gmail></gmail>
                </a>
            </div>

        </div>

    </section>

</template>

<script>
    import linkedIn from "../assets/img/logo/linkedin.svg";
    import facebook from "../assets/img/logo/facebook.svg";
    import skype from "../assets/img/logo/skype.svg";
    import gmail from "../assets/img/logo/gmail.svg";

    export default {
        name: "Contact",

        components: {
            linkedIn,
            facebook,
            skype,
            gmail
        },

        data() {
            return {
                skype: {
                  name: 'patrik_vodicka',
                  isCopied: false
                }
            }
        },

        methods: {
            copySkype() {
                let vm = this;

                this.$copyText(vm.skype.name).then(function () {
                    vm.skype.isCopied = true;
                }, function () {
                    vm.skype.isCopied = false;
                })
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/views/contact";
</style>