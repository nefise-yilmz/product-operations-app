<template>
  <div class="container">
    <div class="loading" :style="isLoading">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün Çıkışı</h3>
          <hr />
          <div class="form-group">
            <label>Ürün Adı</label>
            <select
              class="form-control"
              v-model="selectedProduct"
              @change="productSelected"
            >
              <option selected disabled>Lütfen bir ürün seçiniz</option>
              <option
                :disabled="product.count == 0"
                v-for="product in getProducts"
                :key="product"
                :value="product.key"
              >
                {{ product.title }}
              </option>
            </select>
          </div>
          <div class="card mb-2 border border-danger" v-if="product !== null">
            <div class="card-body">
              <div class="row">
                <div class="col-12 text-center">
                  <div class="mb-3">
                    <span class="badge badge-info"
                      >Stok : {{ product.count }}</span
                    >
                    <span class="badge badge-primary"
                      >Fiyat : {{ product.price | currencyFilter }}</span
                    >
                  </div>
                  <p class="border border-warning p-2 text-secondary">
                    {{ product.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label>Adet</label>
            <input
              type="text"
              class="form-control"
              placeholder="Ürün adetini giriniz.."
              v-model="decreaseCount"
            />
          </div>
          <hr />
          <button
            class="btn btn-primary"
            :disabled="changeDisabled"
            @click="save"
          >
            Kaydet
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { loadingMixin } from "../../loadingMixin";
export default {
  data() {
    return {
      selectedProduct: null,
      product: null,
      decreaseCount: null,
    };
  },
  computed: {
    ...mapGetters(["getProducts"]),
    changeDisabled() {
      if (
        this.selectedProduct !== null &&
        this.decreaseCount > 0 &&
        this.decreaseCount <= this.product.count
      ) {
        return false;
      }

      return true;
    },
  },
  methods: {
    productSelected() {
      this.product = this.$store.getters.getProduct(this.selectedProduct)[0];
    },
    save() {
      this.saveButtonClicked = true;
      let product = {
        key: this.selectedProduct,
        count: this.decreaseCount,
      };

      this.$store.dispatch("sellProduct", product);
    },
  },
  beforeRouteLeave(to, from, next) {
    if (
      (this.selectedProduct !== null || this.product.count > 0) &&
      !this.saveButtonClicked
    ) {
      if (
        confirm(
          "Kaydedilmemiş değişiklikler var. Çıkmak istediğinize emin misiniz?"
        )
      )
        next();
      else next(false);
    } else next();
  },
  mixins: [loadingMixin],
};
</script scoped>
 .border-danger {
            border-style: dashed !important;
        }
<style>
</style>
