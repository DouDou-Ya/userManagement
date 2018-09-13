<template>
  <div class="content">
    <h1>
      <span v-if="customerid">编辑用户信息</span>
      <span v-else>添加用户</span>
    </h1>
    <el-form ref="addCustomer" :model="addCustomer" :rules="rules" label-width="80px" size="mini">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="addCustomer.name"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="addCustomer.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input v-model="addCustomer.phone"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="addCustomer.email"></el-input>
      </el-form-item>
      <el-form-item label="生日" prop="birthday">
        <el-date-picker type="date" placeholder="选择日期" v-model="addCustomer.birthday" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item label="部门职位" prop="position">
        <el-input v-model="addCustomer.position"></el-input>
      </el-form-item>
      <el-form-item label="个人爱好" prop="habit">
        <el-input type="textarea" v-model="addCustomer.habit"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="AddCustomer('addCustomer')">立即创建</el-button>
        <el-button @click="resetForm('addCustomer')">清空</el-button>
        <el-button @click="back">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'add',
  data () {
    return {
      customerid: '',
      Customers: [],
      addCustomer: {
        name: '',
        sex: '',
        phone: '',
        email: '',
        birthday: '',
        position: '',
        habit: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        phone: [
          { required: true, message: '请输入电话号码', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入11位有效电话号码', trigger: 'blur' }
        ],
        email: [
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
        ],
        position: [
          { required: true, message: '请输入部门职位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    back () {
      if (this.customerid) {
        this.$router.push({ path: '/Details/', query: { customerid: this.customerid } })
      } else {
        this.$router.go(-1)
      }
    },
    AddCustomer (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let newCustomer = {
            name: this.addCustomer.name,
            sex: this.addCustomer.sex,
            phone: this.addCustomer.phone,
            email: this.addCustomer.email,
            birthday: this.addCustomer.birthday,
            position: this.addCustomer.position,
            habit: this.addCustomer.habit
          }
          if (this.customerid) {
            this.$http.put('http://localhost:3000/user/' + this.customerid, newCustomer).then((response) => {
              this.$message({
                message: '修改成功',
                type: 'success'
              })
              this.$router.push({ path: '/index' })
            })
          } else {
            this.$http.post('http://localhost:3000/user', newCustomer).then((response) => {
              this.$message({
                message: '提交成功',
                type: 'success'
              })
              this.$router.push({ path: '/index' })
            })
          }
        } else {
          this.$message.error('提交失败')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    fetchCustomers () {
      this.$http.get('http://localhost:3000/user/')
        .then((response) => {
          this.Customers = response.data
          if (this.$route.query.hasOwnProperty('customerid')) {
            this.customerid = this.$route.query.customerid
            var customerid = this.$route.query.customerid
            for (var i = 0; i < this.Customers.length; i++) {
              if (this.Customers[i].id === customerid) {
                this.addCustomer = this.Customers[i]
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
<style scoped>
</style>
