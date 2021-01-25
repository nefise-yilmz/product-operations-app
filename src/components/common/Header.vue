
<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    style="background-color: #563f7a"
  >
    <router-link tag="a" to="/" class="navbar-brand">
      Ürün Listesi
    </router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link to="/productOperations" tag="li" class="nav-item">
          <a class="nav-link"> Ürün İşlemleri </a>
        </router-link>

        <router-link to="/productSale" tag="li" class="nav-item">
          <a class="nav-link">Ürün Çıkışı</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>
