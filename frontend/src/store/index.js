import axios from 'axios'
import { createStore } from 'vuex'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL || 'http://localhost:3000'
console.log('base url', axios.defaults.baseURL)

const Mutations = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

export default createStore({
  state: {
    countHome: 0,
    countAbout: 3
  },

  getters: {
  },

  mutations: {
    [Mutations.INCREMENT] (state, type) {
      type === 'countHome' ? state.countHome++ : state.countAbout++
    },
    [Mutations.DECREMENT] (state, type) {
      if (state[type] === 0) return

      type === 'countHome' ? state.countHome-- : state.countAbout--
    }
  },

  actions: {
    increment ({ commit }, type) {
      commit(Mutations.INCREMENT, type)
    },
    decrement ({ commit }, type) {
      commit(Mutations.DECREMENT, type)
    },
    async fetchCustomers () {
      const request = await axios.get('/customers')
      return request.data
    },
    async fetchCustomer (ctx, customerId) {
      const request = await axios.get(`/customers/${customerId}`)
      return request.data
    },
    async fetchPharmacies () {
      const request = await axios.get('/pharmacies')
      return request.data
    },
    async fetchPharmacy (ctx, pharmacyId) {
      const request = await axios.get(`/pharmacies/${pharmacyId}`)
      return request.data
    },
    async fetchDrugs () {
      const request = await axios.get('/drugs')
      return request.data
    },
    async fetchDrug (ctx, drugId) {
      const request = await axios.get(`/drugs/${drugId}`)
      return request.data
    },
    async orderDrug (ctx, { pharmacyId, customerId, drugId }) {
      const request = await axios.post(`/customers/${customerId}/orders`, {
        pharmacyId, customerId, drugId
      })
      return request.data
    },

    // async registerUser (ctx, { name, email, password, passwordAgain, accType }) {
    //   if (this.password === this.passwordAgain && this.password.length > 5) {
    //     this.passwordError = "";
    //     const data = {
    //       name: this.name,
    //       email: this.email,
    //       password: this.password,
    //       accType: this.accType,
    //     };
    //     if (this.accType === "Customer") {
    //       const request = await axios.post(
    //         "/customers",
    //         data
    //       );
    //       return request.data
    //     } else {
    //       const request = await axios.post(
    //         "/pharmacies",
    //         data
    //       );
    //       return request
    //     }
    //   } else if (this.password.length <= 5) {
    //     this.passwordError = "Password must be at least 6 chars long";
    //   } else if (this.password !== this.passwordAgain) {
    //     this.passwordError = "Passwords need to match";
    //   }
    // }
  },

  modules: {
  }
})
