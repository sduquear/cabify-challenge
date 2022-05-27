<template>
  <div id="app">
    <section class="products">
      <h1 class="main">Shopping cart</h1>
      <ProductList />
    </section>
    <ProductSummary />
  </div>
</template>

<script>
import ProductList from '@/components/Product/ProductList.vue'
import ProductSummary from '@/components/Product/ProductSummary.vue'

export default {
  name: 'App',
  components: {
    ProductList,
    ProductSummary,
  },
}
</script>
