<template>
  <aside class="product-summary summary">
    <h1 class="main">Order Summary</h1>
    <ul class="summary-items wrapper border">
      <li>
        <span class="summary-items-number">{{ co.productsCount }} Items</span
        ><span class="summary-items-price">{{ co.subTotal }}<span class="currency">€</span></span>
      </li>
    </ul>
    <div class="summary-discounts wrapper-half border">
      <h2>Discounts</h2>
      <ul>
        <li v-if="co.mugPromo">
          <span>2x1 Mug offer</span><span>-{{ co.mugPromo }}€</span>
        </li>
        <li v-if="co.shirtPromo">
          <span>x3 Shirt offer</span><span>-{{ co.shirtPromo }}€</span>
        </li>
        <li><span>Promo code</span><span>0€</span></li>
      </ul>
    </div>
    <div class="summary-total wrapper">
      <ul>
        <li>
          <span class="summary-total-cost">Total cost</span
          ><span class="summary-total-price">{{ co.total }}€</span>
        </li>
      </ul>
      <button type="submit">Checkout</button>
    </div>
  </aside>
</template>

<script>
import Checkout from '@/shared/classes/Checkout.js'

export default {
  name: 'ProductSummary',
  data() {
    return {
      co: new Checkout(),
    }
  },
}
</script>
