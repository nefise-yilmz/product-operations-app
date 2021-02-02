import Vue from "vue";

export const setTradeResult = ({ state, commit }, tradeResult) => {
  //statei güncelle
  commit("updateTradeResult", tradeResult);

  let tradeData = {
    purchase: state.purchase,
    sale: state.sale
  }

  //firebasea güncelle
  Vue.http.put("https:product-operations-70f0a-default-rtdb.firebaseio.com/trade-result.json", tradeData)
    .then((response) => {
    });
}

export const getTradeResult = ({ commit }) => {
  Vue.http.get("https://product-operations-70f0a-default-rtdb.firebaseio.com/trade-result.json").then(response=>{
     commit("updateTradeResult",response.body);
  });
}
