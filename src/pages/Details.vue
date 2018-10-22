<template>
  <div class="index content">
    <h1>
      {{customer.name}}的详细信息
    </h1>
    <P>姓名：{{customer.name}}</P>
    <P>性别：{{customer.sex}}</P>
    <P>电话：{{customer.phone}}</P>
    <P>生日：<span v-if="!customer.birthday">未填写</span><span v-else>{{customer.birthday}}</span></P>
    <P>邮箱：<span v-if="!customer.email">未填写</span><span v-else>{{customer.email}}</span></P>
    <P>部门职位：{{customer.position}}</P>
    <P>习惯爱好：<span v-if="!customer.habit">未填写</span><span v-else>{{customer.habit}}</span></P>
    <el-button size="mini" type="primary" @click="Goto('/index')">确定</el-button>
    <el-button size="mini" @click="editor(customer.id)">编辑</el-button>
    <el-button size="mini" @click="deletecustomer(customer.id)">删除</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      Customers: [],
      customer: ''
    }
  },
  methods: {
    Goto (gopath) {
      this.$router.push({ path: gopath })
    },
    editor (customerid) {
      this.$router.push({ path: '/Add', query: { customerid: customerid } })
    },
    deletecustomer (customerid) {
      this.$confirm('确定删除该客户', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http.delete('http://localhost:3000/user/' + customerid)
          .then((response) => {
            this.$message({
              message: '删除成功',
              type: 'success'
            })
            this.$router.push({ path: '/index' })
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    fetchCustomers (id) {
      this.$http.get('http://localhost:3000/user/')
        .then((response) => {
          this.Customers = response.data
          if (this.$route.query.hasOwnProperty('customerid')) {
            this.customerid = this.$route.query.customerid
            var customerid = this.$route.query.customerid
            for (var i = 0; i < this.Customers.length; i++) {
              if (this.Customers[i].id === customerid) {
                this.customer = this.Customers[i]
              }
            }
          }
        })
    }
  },
  created () {
    this.fetchCustomers()
    if (this.$route.query.hasOwnProperty('customerid')) {
      this.customerid = this.$route.query.customerid
    }
  }
}
</script>
<style>
</style>
