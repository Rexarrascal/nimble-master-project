<script>
const axios = require('axios')
const swal = require('sweetalert')
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL || 'http://localhost:3000'


export default {
  data() {
    return {
      accType: "Customer",
      register: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async registerCustomer() {
      try {
        let response = await axios.post("/customers", this.register);
        console.log(response);
        let token = response.data.token;
        if (token) {
          localStorage.setItem("jwt", token);
          this.$router.push("/login");
          swal("Success", "Successfully Registered", "success");
        } else {
          swal("Error", "Something Went Wrong", "error");
        }
      } catch (err) {
        let error = err.response;
        if (error.status == 409) {
          swal("Error", error.data.message, "error");
        } else {
          swal("Error", error.data.err.message, "error");
        }
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
          @submit.prevent="registerCustomer"
        >
          <h2>Signup Form</h2>
          <label for="full Name">Full Name</label>
          <input
            type="text"
            id="name"
            class="form-control mb-5"
            placeholder=""
            v-model="register.name"
            required
          />
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            class="form-control mb-5"
            placeholder=""
            v-model="register.email"
            required
          />
          <!-- Password -->
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            class="form-control mb-5"
            placeholder=""
            v-model="register.password"
          />
          
            <router-link to="/login"
              >Already have an account?</router-link
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
