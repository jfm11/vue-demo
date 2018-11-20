<template>
  <div>
    <el-form id="form" :rules="rules" ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" autofocus="autofocus"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import apiLogin from "../api/login";
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 4,
            max: 20,
            message: "密码长度在 4 到 20 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          const username = this.form.username;
          const password = this.form.password;
          apiLogin({
            username: username,
            password: password
          });
          console.log("submit:" + username + ":" + password);
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style>
#form {
  width: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
}
</style>
