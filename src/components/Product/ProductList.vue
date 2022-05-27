<template>
  <div class="product-list">
    <ul class="products-list tableHead">
      <li class="products-list-title row">
        <div class="col-product">Product details</div>
        <div class="col-quantity">Quantity</div>
        <div class="col-price">Price</div>
        <div class="col-total">Total</div>
      </li>
    </ul>
    <ProductListItem />
  </div>
</template>

<script>
import ProductListItem from './ProductListItem.vue'

export default {
  name: 'ProductList',
  components: {
    ProductListItem,
  },
}
</script>
