<template>
  <nav class="menu">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About me</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/my-work">My work</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavMenu',
}
</script>

<style lang="scss" scoped src="@/assets/scss/components/NavMenu.scss" />
