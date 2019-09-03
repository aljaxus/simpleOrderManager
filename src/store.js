import Vue from "vue";
import Vuex from "vuex";
import vuexLocal from "./storepresist"


Vue.use(Vuex);

const App = {
  namespaced: true,
  state: {
    sidebarShown: false,
    sidebarMini: false,
    darkMode: true,
  },
  mutations: {
    TOGGLE_SIDEBAR_STATE (state, newState = null) { state.sidebarShown = newState!=null?newState:!state.sidebarShown },
    TOGGLE_SIDEBAR_MINI (state, newState = null) { state.sidebarMini = newState!=null?newState:!state.sidebarMini },
    TOGGLE_DARKMODE (state, newState = null) { state.darkMode = newState!=null?newState:!state.darkMode },
  },
  actions: {
    toggleSidebarState (context, newState = null) { context.commit('TOGGLE_SIDEBAR_STATE', newState) },
    toggleSidebarMini (context, newState = null) { context.commit('TOGGLE_SIDEBAR_MINI', newState) },
    toggleDarkMode (context, newState = null) { context.commit('TOGGLE_DARKMODE', newState) },
  },
  getters: {
    sidebarState: state => state.sidebarShown,
    sidebarMini: state => state.sidebarMini,
    darkMode: state => state.darkMode,
  }
}

const Order = {
  namespaced: true,
  state: {
    items: [],
    orders: []
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    allItems: state => state.items,
    allOrders: state => state.orders,
  }
}


export default new Vuex.Store({
  modules: {
    App,
    Order
  },
  state: {},
  mutations: {},
  actions: {},
  plugins: [vuexLocal.plugin]
})
