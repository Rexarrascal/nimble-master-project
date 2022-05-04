<script>
export default {
  name: 'RegisterView',
  data () {
    return {
      accType: 'Customer',
      name: '',
      surname: '',
      email: '',
      phone: '',
      password: '',
      passwordAgain: '',
      birthDate: '',
      terms: false,
      passwordError: ''
    }
  },
  methods: {
    handleSubmit () {
      /// Valiate password
      this.passwordError = this.password.length > 5 ? '' : 'Password must be at least 6 chars long'
      // if (this.password === this.passwordAgain) {
      //   this.passwordError = ''
      // } else if (this.password.length > 5) {
      //   this.passwordError = ''
      // } else if (this.password.length <= 5) {
      //   this.passwordError = 'Password must be at least 6 chars long'
      // } else if (this.password !== this.passwordAgain ) {
      //   this.passwordError = 'Passwords need to match'
      // }
    }
  }
}
</script>
<template lang="pug">

form(@submit.prevent="handleSubmit")
  label Account type:
  select(v-model="accType")
    option(value="Customer") Customer
    option(value="Pharmacy") Pharmacy

  label Name:
  input(type="text" required v-model="name" placeholder="John")

  label Surname:
  input(type="text" required v-model="surname" placeholder="Example")

  label Email:
  input(type="email" required v-model="email" placeholder="example@example.com")

  label Phone:
  input(type="number" v-model="phone")

  label Password:
  input(type="password" required v-model="password")
  .error(v-if="passwordError")
    | {{ passwordError }}

  label Password Again:
  input(type="password" required v-model="passwordAgain")

  label Birth of Date:
  input(type="date" required v-model="birthDate")

  .terms
    input(type="checkbox" required v-model="terms")
    label Accept terms and conditions

  .submit
    button Create an Account

p Name: {{ name }}
p Acc Type: {{ accType }}
p Terms: {{ terms }}
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
input,select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
  }
input[type="checkbox"]{
  display: inline-block;
  width: 16px;
  margin:010pxee;
  position: relative;
  top: 2px;
}
button {
  background: #0b6dff;
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
