<template>
  <div>
    <div v-if="!co.products.length" class="empty-cart">
      <h2>Cart is empty.</h2>
    </div>
    <ul v-for="(product, index) in co.products" :key="index" class="products-list">
      <li class="product row">
        <div class="col-product">
          <figure class="product-image">
            <img
              @click="openModal(product)"
              :src="require(`@/assets/img/${product.img}`)"
              :alt="product.name"
            />
            <div class="product-description">
              <h1 @click="openModal(product)">{{ product.name }}</h1>
              <p class="product-code">Product code {{ product.id }}</p>
            </div>
          </figure>
        </div>
        <div class="col-quantity">
          <button @click="co.decrease(product)" class="count">-</button>
          <input v-model="product.quantity" type="number" class="product-quantity" disabled />
          <button @click="co.scan(product.code)" class="count">+</button>
        </div>
        <div class="col-price">
          <span class="product-price">{{ product.price }}</span
          ><span class="product-currency currency">€</span>
        </div>
        <div class="col-total">
          <span class="product-price">{{ product.quantity * product.price }}</span
          ><span class="product-currency currency">€</span>
        </div>
        <el-dialog
          :visible.sync="modalVisible"
          width="80%"
          :show-close="false"
          :append-to-body="true"
          top="72px"
        >
          <el-row v-if="selectProduct">
            <el-col :span="16">
              <div class="modal__image">
                <img :src="require(`@/assets/img/${selectProduct.img_max}`)" :alt="selectProduct.name" />
              </div>
            </el-col>
            <el-col :span="8">
              <button type="button" class="el-dialog__headerbtn" @click="modalVisible = !modalVisible">
                <i class="el-dialog__close el-icon el-icon-close"></i>
              </button>
              <div class="modal__text">
                <ul>
                  <li>
                    <span class="modal__text-name">{{ selectProduct.name }}</span
                    ><span class="modal__text-price">{{ selectProduct.price }}€</span>
                  </li>
                </ul>
                <p class="modal__text-description">
                  {{ selectProduct.description }}
                </p>
                <p class="modal__text-code">Product code {{ selectProduct.id }}</p>
                <div class="modal__text-cart">
                  <button @click="scanProduct(selectProduct.code)" type="submit">Add to cart</button>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-dialog>
      </li>
    </ul>
  </div>
</template>

<script>
import Checkout from '@/shared/classes/Checkout.js'

export default {
  name: 'ProductListItem',
  data() {
    return {
      modalVisible: false,
      selectProduct: null,
      co: new Checkout(),
    }
  },
  methods: {
    openModal(product) {
      this.selectProduct = product
      this.modalVisible = !this.modalVisible
    },
    scanProduct(code) {
      this.co.scan(code)
      this.modalVisible = !this.modalVisible
    },
  },
}
</script>
<style>
.el-dialog__body {
  padding: 0 24px 0px 0px !important;
}
.el-dialog__header {
  padding: 0 !important;
}
.el-dialog__headerbtn {
  right: 0 !important;
  font-size: 24px !important;
}
</style>
