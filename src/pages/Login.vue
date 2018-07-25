<template>
  <div class="loginbg">
    <div class="login_box">
      <div class="text_center" style="margin-bottom:30px;">
        <img src="../assets/images/logo.png" alt="" width="100">
      </div>
      <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm">
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号" prefix-icon="el-icon-mobile-phone"></el-input>
        </el-form-item>
        <el-form-item prop="verificationCode">
          <el-input v-model="loginForm.verificationCode" placeholder="请输入验证码" prefix-icon="el-icon-goods" >
            <el-button slot="append">获取验证码</el-button>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn_block" @click="submitForm('loginForm')" round>登&nbsp;&nbsp;&nbsp;录</el-button>
        </el-form-item>
      </el-form>
      <p style="font-size:0.8rem; color:#909399; text-align:center;">别看了，这里没有注册！不想填信息？<el-button type="text" @click="Goto('/index')">直接点这里</el-button></p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '',
        verificationCode: ''
      },
      rules: {
        mobile: [
          { required: true, message: '请输入电话号码', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入有效的电话号码', trigger: 'blur' }
        ],
        verificationCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 6, max: 6, message: '验证码为6位数字', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push({ path: '/index' })
          console.log('ok')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    Goto (gopath) {
      this.$router.push({ path: gopath })
    }
  }
}
</script>
<style>
</style>
