<script>
import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL || 'http://localhost:3000'
console.log('base url', axios.defaults.baseURL)

export default {
  name: "SignupView",
  data() {
    return {
      accType: "Customer",
      name: "",
      surname: "",
      email: "",
      phone: "",
      password: "",
      passwordAgain: "",
      birthDate: "",
      terms: false,
      passwordError: "",
    };
  },
  methods: {
    async handleSubmit() {
      if (this.password === this.passwordAgain && this.password.length > 5) {
        this.passwordError = "";
        const userData = {
          name: this.name,
          email: this.email,
          password: this.password,
        };
        if (this.accType === "Customer") {
          const request = await axios.post("/customers",userData);
          this.$router.push('/login')
          return request.userData
        } else {
          const request = await axios.post("/pharmacies",userData);
          this.$router.push('/login')
          return request.userData
          
        };
      } else if (this.password.length <= 5) {
        this.passwordError = "Password must be at least 6 chars long";
      } else if (this.password !== this.passwordAgain) {
        this.passwordError = "Passwords need to match";
      }
    },

  },
};
</script>

<template lang="pug">
.signUp
  form(@submit.prevent="handleSubmit" action="/")
    label Account type:
    select(v-model="accType")
      option(value="Customer") Customer
      option(value="Pharmacy") Pharmacy

    label Fullname:
    input(type="text" required v-model="name" placeholder="")

    //- label Surname:
    //- input(type="text" required v-model="surname" placeholder="Example")

    label Email:
    input(type="email" required v-model="email" placeholder="")

    //- label Phone:
    //- input(type="number" v-model="phone")

    label Password:
    input(type="password" required v-model="password")
    .error(v-if="passwordError")
      | {{ passwordError }}

    label Password Again:
    input(type="password" required v-model="passwordAgain")

    //- label Birth of Date:
    //- input(type="date" required v-model="birthDate")

    .terms
      input(type="checkbox" required v-model="terms")
      label Accept terms and conditions

    .submit
      button(type="submit" class="btn btn-success") Sign Up

    router-link(class="card-link" id="hello" to="/login") Already have an accout ?

    p Name: {{ name }}
    p Acc Type: {{ accType }}
    p Terms: {{ terms }}
    p Password: {{ password }}
    p Re-Password : {{ passwordAgain }}
</template>

<style scoped lang="scss">
form {
  max-width: 420px;
  margin: 30px auto;
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
