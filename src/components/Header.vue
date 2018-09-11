<template>
  <div class="content">
    <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="/index">主页</el-menu-item>
      <el-menu-item index="/About">关于我们</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.$router.push({ path: key })
    }
  }
}
</script>
<style scoped>
.el-menu--horizontal {
  border-bottom: none;
}
</style>
