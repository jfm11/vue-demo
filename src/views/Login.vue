<template>
  <div>
    <el-form id="form" :rules="rules" ref="form" :model="form" label-width="80px" @keyup.enter.native="onSubmit">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" focus="true" autofocus="autofocus"></el-input>
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
import auth from "../plugins/auth";
import axios from "../plugins/axios";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        errorMessage: ""
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
          axios
            .post("/login", {
              username: username,
              password: password
            })
            .then(response => {
              const token = response.data.token;
              auth.setToken(token);
              this.$router.push("/");
            })
            .catch(error => {
              this.$message({
                message: error.response.data.message,
                type: "error"
              });
            });
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
  /* background-color: gray; */
  width: 400px;
  position: fixed;
  top: 30%;
  left: 50%;
  margin-left: -200px;
}
</style>
