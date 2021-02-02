import Vue from "vue";
import VueResource from "vue-resource";

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
  initApp({ dispatch, commit }) {
    // vue resource operations
    dispatch("getTradeResult");

  },
  saveProduct({ dispatch, commit }, product) {
    Vue.http.post("https://product-operations-70f0a-default-rtdb.firebaseio.com/products.json", product).then((response) => {
      // ürün listesinin güncellenmesi
      product.key = response.body.name;
      commit("updateProductList", product);

      // alış/satış/bakiye güncelleme
      let tradeResult = {
        purchase: product.price,
        sale: 0,
        count: product.count
      }
      dispatch("setTradeResult", tradeResult);
    })

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
