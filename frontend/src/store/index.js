import axios from 'axios'
import router from '../router'
import { createStore } from 'vuex'
import swal from 'sweetalert'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL || 'http://localhost:3000'
console.log('base url', axios.defaults.baseURL)

const Mutations = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

export default createStore({
  state: {
    countHome: 0,
    countAbout: 3,
    token: '',
  },

  getters: {
    isAuthenticated(state) {
      return state.token !== ''
    }
  },

  mutations: {
    [Mutations.INCREMENT] (state, type) {
      type === 'countHome' ? state.countHome++ : state.countAbout++
    },
    [Mutations.DECREMENT] (state, type) {
      if (state[type] === 0) return

      type === 'countHome' ? state.countHome-- : state.countAbout--
    },

    setToken(state, token) {
      state.token = token
    },
    clearToken(state) {
      state.token = ''
    }
  },

  actions: {
    initAuth({ commit, dispatch }){
      const token = localStorage.getItem('token')
      if(token) {
        commit('setToken', token)
      } else {
        return false
      }
    },

    async login({ commit, dispatch, state}, authData) {
      const login = {
        email: authData.email,
        password: authData.password,
      };
      try {
        if (authData.accType === "Customer") {
          var response = await axios.post("/customers/login", login);
        } else if (authData.accType === "Pharmacy"){
          var response = await axios.post("/pharmacies/login", login);
        }
          const token = response.data.token;
          localStorage.setItem("token", token);
          if (token) {
            console.log(response)
            swal("Success", "Login Successful", "success");
            router.push("/");
            commit('setToken', token)
          }
      } catch (err) {
        swal("Error", err.response.data.message , "error");
        console.log(err.response);
      }
    },

    async register({ commit, dispatch, state}, authData) {
      const register = {
        name: authData.name,
        email: authData.email,
        password: authData.password
      }
    try {
      if (authData.accType === "Customer") {
        var response = await axios.post("/customers", register);
      } else if ( authData.accType === "Pharmacy" ) {
        var response = await axios.post("/pharmacies", register);
      }
        console.log(response)
        const token = response.data.token;
        if (token) {
          localStorage.setItem("token", token);
          router.push("/");
          commit('setToken', token)
          swal("Success", "Successfully Registered", "success");
        } else {
          swal("Error", "Something Went Wrong", "error");
        }
      } catch (err) {
        let error = err.response;
        if (error.status) {
          swal("Error", error.data.message, "error");
        } else {
          swal("Error", error.data.err.message, "error");
        }
      }
    },

    logout({ commit, dispatch, state}, authData) {
      commit('clearToken')
      localStorage.removeItem('token')
    },

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
  },

  modules: {
  }
})
