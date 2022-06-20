<script>
const axios = require('axios')
const swal = require('sweetalert')
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL || 'http://localhost:3000'

export default {
  data() {
    return {
      accType: "Customer",
      login: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async loginCustomer() {
      try {
        let response = await axios.post("/customers/login", this.login);
        let token = response.data.token;
        localStorage.setItem("jwt", token);
        if (token) {
          swal("Success", "Login Successful", "success");
          this.$router.push("/dashboard");
        }
      } catch (err) {
        swal("Error", "Something Went Wrong", "error");
        console.log(err.response);
      }
    }
  }
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center border border-primary p-5"
          style="margin-top:70px;height:auto;padding-top:100px !important;"
          @submit.prevent="loginCustomer"
        > 
          <h2>Login Form</h2>
          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            class="form-control mb-5"
            placeholder=""
            v-model="login.email"
          />
          <!-- Password -->
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            class="form-control mb-5"
            placeholder=""
            v-model="login.password"
          />
          
            <router-link to="/signup"
              >Dont have an account?</router-link
            >
          
          <!-- Sign in button -->
          <center>
            <button class="btn btn-primary btn-block w-75 my-4" type="submit">
              Sign in
            </button>
          </center>
        </form>
      </div>
    </div>
  </div>
</template>
