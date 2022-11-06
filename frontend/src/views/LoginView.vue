<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      accType: "Customer",
      email: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      this.$store.dispatch("login", {
        accType: this.accType,
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<template>
  <div class="login">
    <form action="/">
      <label>Account type:</label>
      <select v-model="accType">
        <option value="Customer">Customer</option>
        <option value="Pharmacy">Pharmacy</option>
      </select>
      <label>Email:</label>
      <input type="email" required="required" v-model="email" placeholder="" />
      <label>Password:</label>
      <input type="password" required="required" v-model="password" />
      <div class="submit">
        <button class="btn btn-success" @click="handleSubmit" type="button">
          Login</button
        ><br />
        <router-link class="card-link" id="hello" to="/signup"
          >Need an account ?</router-link
        >
      </div>
    </form>
  </div>
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
