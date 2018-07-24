<template>
<div class="login">
  this is index
</div>
</template>
<script>
export default {
    name: 'Login',
  data () {
    return {
    }
  },
  methods: {
    Goto (gopath) {
      this.$router.push({ path: gopath })
    }
  }
}
</script>
<style>
</style>
