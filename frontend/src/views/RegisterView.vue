<script>

export default {
  data() {
    return {
      accType: "Customer",
      name: "",
      email: "",
      password: "",
      phone: "",
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
        this.$store.dispatch('register', {accType:this.accType, name: this.name, email: this.email, password:this.password})
      } else if (this.password.length <= 5) {
        this.passwordError = "Password must be at least 6 chars long";
      } else if (this.password !== this.passwordAgain) {
        this.passwordError = "Passwords need to match";
      }
    },
  },
};
</script>

<template>
  <div class="signUp">
    <form @submit.prevent="handleSubmit" action="/">
      <label>Account type:</label>
      <select v-model="accType">
        <option value="Customer">Customer</option>
        <option value="Pharmacy">Pharmacy</option>
      </select>
      <label>Fullname:</label>
      <input type="text" required="required" v-model="name" placeholder=""/>
      <label>Email:</label>
      <input type="email" required="required" v-model="email" placeholder=""/>
      <label>Password:</label>
      <input type="password" required="required" v-model="password"/>
      <div class="error" v-if="passwordError">{{ passwordError }}</div>
      <label>Password Again:</label>
      <input type="password" required="required" v-model="passwordAgain"/>
      <div class="terms">
        <input type="checkbox" required="required" v-model="terms"/>
        <label>Accept terms and conditions</label>
      </div>
      <div class="submit">
        <button class="btn btn-success" type="submit">Sign Up</button><br/>
      </div>
      <router-link class="card-link" id="hello" style="text-align:center" to="/login">Already have an accout ?</router-link>
      
      <br/><br/><br/>
      <p>Name: {{ name }}</p>
      <p>Acc Type: {{ accType }}</p>
      <p>Terms: {{ terms }}</p>
      <p>Password: {{ password }}</p>
      <p>Re-Password : {{ passwordAgain }}</p>
    </form>
  </div>
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
  margin-bottom: 20px;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
