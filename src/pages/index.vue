<template>
  <div class="index content">
    <h1>
      用户管理系统
    </h1>
    <el-table :data="customers" style="width: 100%">
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column prop="phone" label="电话">
      </el-table-column>
      <el-table-column prop="email" label="邮箱">
      </el-table-column>
      <el-table-column prop="" label="">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      customers: []
    }
  },
  methods: {
    Goto (gopath) {
      this.$router.push({ path: gopath })
    },
    fetchCustomers () {
      this.$http.get('http://localhost:3000/user')
        .then(function (response) {
          this.customers = response.body
        })
    }
  },
  created () {
    this.fetchCustomers()
  }
}
</script>
<style>
</style>
