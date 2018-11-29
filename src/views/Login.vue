<template>
  <div>
    <el-form id="form" :rules="rules" ref="form" :model="form" label-width="80px" @submit.native.prevent>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" focus="true" autofocus="autofocus"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" native-type="submit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import axios from "../plugins/axios";

function getErrMsg(error) {
  const status = error.response.status;
  if (status == 200) {
    return error.response.data.message;
  } else {
    return "服务端异常[" + status + "]";
  }
}

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
              this.$store.commit("login", token);
              this.$router.push("/");
            })
            .catch(error => {
              const errMsg = getErrMsg(error);
              this.$message({
                message: errMsg,
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
