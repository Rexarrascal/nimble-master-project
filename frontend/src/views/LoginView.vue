<script>
import { mapActions } from "vuex";
import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL || 'http://localhost:3000'
console.log('base url', axios.defaults.baseURL)

export default {
  name: "Login",
  data() {
    return {
      accType: "Customer",
      email: "",
      password: "",

      error: ""
    }
  },
  methods: {
    ...mapActions([""]),

    handleSubmit() {
      const userData = {
        email: this.email,
        password: this.password,
      };
      axios.post('/login', userData)
        .then( res => {
          if ( res.status === 200 ) {
            localStorage.setItem('token', res.data.token)
            this.$router.push('/login')
          }
        }), err => {
          console.log( err, response);
          this.err = err.response.data.error
        }
      }
    }
}
</script>

<template lang="pug">
.login
  form(action="/")
    label Account type:
    select(v-model="accType")
      option(value="Customer") Customer
      option(value="Pharmacy") Pharmacy

    label Email:
    input(type="email" required v-model="email" placeholder="")

    label Password:
    input(type="password" required v-model="password")
    
    .submit
      button(@click="handleSubmit" type="button" class="btn btn-success") Login
    
    router-link(class="card-link" id="hello" to="/signup") Need an account ?
</template>

<style scoped lang="scss">
form {
  max-width: 420px;
  margin: 30px auto;
  margin-top: 200px;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 010pxee;
  position: relative;
  top: 2px;
}
button {
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}

</style>