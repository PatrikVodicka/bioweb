<template>
  <section>
    <prolog></prolog>
  </section>
</template>

<script>
  import Prolog from "../components/Prolog";

  export default {
    name: "About",

    components: {
      Prolog
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/views/about.scss";
</style>