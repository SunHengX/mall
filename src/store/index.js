import Vue from 'vue'
import Vuex from 'vuex'
import getters from "./gettters"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carList: []
  },
  mutations: {
    addCount(state, payload) {
      payload.count++
    },
    addToCar(state, payload) {

      state.carList.push(payload)
      payload.check = "true"
    }

  },
  actions: {
    addCar(context, payload) {
      // 
      let oldProduct = null;
      for (let iteam of context.state.carList) {
        if (iteam.iid === payload.iid) {
          oldProduct = iteam
        }
      }
      if (oldProduct) {
        // oldProduct.count += 1
        context.commit("addCount", oldProduct)
      } else {
        payload.count = 1,
          payload.check = "true"

        // state.carList.push(payload)
        context.commit('addToCar', payload)

      }
    }
  },
  modules: {
  },
  getters
})
