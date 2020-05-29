<template>
  <div id="app">

    <div class="container-fluid">
      <div class="row justify-content-center justify-content-md-end">
        <nav class="menu">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About me</router-link>
          <router-link to="/contact">Contact</router-link>
          <router-link to="/my-work">My work</router-link>
        </nav>
      </div>
    </div>

    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "App"
  }
</script>