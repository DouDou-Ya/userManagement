<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header ></Header>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <!-- <el-footer>
        <Footer></Footer>
      </el-footer> -->
    </el-container>
  </div>
</template>

<script>
import './assets/css/style.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: { Header, Footer },
  name: 'App',
  data () {
    return {
    }
  }
}
</script>
<style>
.el-header,
.el-main,
.el-footer {
  padding: 0;
}
.el-header{
  background-color: #545c64;
}
</style>
