const state = {
  products: []
}

const getters = {
  getProducts(state) {
    return state.product;
  },
  getProduct(state) {

  }
}

const mutations = {
  updateProductList(state, product) {
    state.products.push(product);
  }
}

const actions = {
  initApp({ commit }) {
    // vue resource operations
  },
  saveProduct({ commit }, payload) {
    // save product op.
  },
  sellProduct({ commit }, payload) {
    // sell op.
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
