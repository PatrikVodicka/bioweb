<template>
  <div id="app">
    <nav-menu />
    <router-view />
  </div>
</template>

<script>
  import NavMenu from '@/components/NavMenu'
  export default {
    name: 'App',
    components: { NavMenu },
  }
</script>