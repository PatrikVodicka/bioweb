<template>
  <section>
    <text-prolog />
  </section>
</template>

<script>
  import TextProlog from '@/components/TextProlog'

  export default {
    name: 'AboutMe',

    components: {
      TextProlog,
    },
  }
</script>

<style
  lang="scss"
  scoped
  src="@/assets/scss/views/about.scss"
/>
