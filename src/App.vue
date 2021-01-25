<template>
<div>


<app-header></app-header>
<router-view></router-view>
<app-footer></app-footer>
</div>
</template>

<script>
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
  },
};
</script>

<style>
</style>
