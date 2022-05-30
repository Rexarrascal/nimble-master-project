<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    }
  }
}
</script>

<template lang="pug">
.login
  form(action="/" method="POST")

    label Email:
    input(type="email" required v-model="email" placeholder="")

    label Password:
    input(type="password" required v-model="password")
    .error(v-if="passwordError")
      | {{ passwordError }}

    .terms
      input(type="checkbox" required v-model="terms")
      label Accept terms and conditions

    .submit
      button(type="button" class="btn btn-success") Login
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