<template>
  <div class="index content">
    <h1>
      用户管理系统
    </h1>
    <div style="margin: 10px 0;">
      <el-input placeholder="请输入姓名搜索" size="mini" prefix-icon="el-icon-search" v-model="search" style="width: 30vw;"></el-input>
      <el-button type="primary" size="mini" @click="Goto('/Add')">添加用户</el-button>
    </div>
    <el-table :data="searchdate(customers,search)" stripe border size="mini" style="width: 1000px;">
      <!-- <el-table :data="customers" stripe border size="mini" style="width: 1000px;"> -->
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column prop="phone" label="电话">
      </el-table-column>
      <el-table-column prop="email" label="邮箱">
      </el-table-column>
      <el-table-column prop="position" label="部门职位">
      </el-table-column>
      <el-table-column prop="" label="">
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="gotodetail(scope.row.id)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      customers: [],
      search: ''
    }
  },
  methods: {
    Goto (gopath) {
      this.$router.push({ path: gopath })
    },
    gotodetail (id) {
      this.$router.push({ path: '/Details/', query: { customerid: id } })
    },
    searchdate (customers, search) {
      return customers.filter(function (customer) {
        return customer.name.match(search)
      })
    },
    fetchCustomers () {
      this.$http.get('http://localhost:3000/user')
        .then((response) => {
          this.customers = response.data
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
