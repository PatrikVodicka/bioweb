<template>
  <section class="container-fluid">

    <div class="row justify-content-center align-items-md-center text-center h-100">
      <div class="order-2 order-md-1 col-12 col-md-8 col-lg-7 col-xl-5 text-md-right">
        <h1>Hi, I'm Patrik Vodička</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores inventore
          perferendis possimus qui, quod.
        </p>
      </div>
      <div class="order-1 order-md-2 col-12 col-md-4 col-lg-3 col-xl-2 my-5 m-md-0 align-self-end align-self-md-center">
        <img id="me" class="rounded-circle" src="../assets/img/avatar.jpg" alt="My avatar">
      </div>
    </div>

  </section>
</template>

<script>
  export default {
    name: "Home",
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/views/home";
</style>