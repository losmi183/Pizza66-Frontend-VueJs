import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    backendUrl: 'http://pizza66api.test/api',
    loggedUser: 'guest',
    count: 1,
    cart: [],
    cartSum: 0,
    alertHide: true,
    addons: [],
    addonOptions: []
  },
  mutations: {
    userData(state, payload) {
      state.loggedUser = payload
    },
    addToCart(state, item) {
      console.log(item)
      // return

      // First check if has addons, and different logic
      if(item.addons) {
        if(item.addons.length > 0) {
          state.cart.push(item)
          return
        }
      }

      // Find item in cart with id and priceId
      const existsItem = state.cart.findIndex(product => product.id == item.id && product.priceId == item.priceId)

      if(existsItem != -1) {
        state.cart[existsItem].qty += item.qty
      } 
      else {
        state.cart.push(item)
      }    
    },
    addToSum(state, value) {
      state.cartSum += value.price * value.qty
    },
    showAlert(state) {
      state.alertHide = false;
      setTimeout(function () { state.alertHide = true }, 2000);
    },
    removeItem(state, item) {

      const index = state.cart.findIndex(product => product.id == item.id && product.priceId == item.priceId)
      // console.log(index)
      state.cart.splice(index, 1)
    },
    decrement(state, item) {
      const selectedItem = state.cart.find(product => product.id == item.id && product.priceId == item.priceId)
      if(selectedItem.qty > 1) {
        selectedItem.qty--
        state.cartSum -= selectedItem.price
      } else {
        state.cartSum -= selectedItem.price
        this.commit('removeItem', selectedItem)
      }
    },
    increment(state, item) {
      const selectedItem = state.cart.find(product => product.id == item.id && product.priceId == item.priceId)
      selectedItem.qty++
      state.cartSum += selectedItem.price
    },
    setAddons(state, payload) {
      state.addons = payload
    },
    setAddonOptions(state, payload) {
      state.addonOptions = payload
    }
  },
  actions: {
    getAddons() {
      axios.get('http://pizza66api.test/api/addons')
      .then(res => this.commit('setAddons', res.data))
      .then(err => console.log(err))
    },
    getAddonOptions() {
      axios.get('http://pizza66api.test/api/addonOptions')
      .then(res => this.commit('setAddonOptions', res.data))
      .then(err => console.log(err))
    }
  },
  getters: {
    itemsInCart(state) {
      return state.cart.length
    }
  },
  modules: {
  }
})
