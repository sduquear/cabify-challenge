import products from '@/api/products.json'

export default class Checkout {
  constructor() {
    this.products = products
  }

  scan(code) {
    const productScan = this.products.find((product) => product.code === code)
    productScan.quantity += 1
  }

  decrease(product) {
    if (product.quantity > 1) {
      product.quantity -= 1
    } else {
      this.remove(product.id)
    }
  }

  remove(id) {
    const index = this.products.findIndex((p) => p.id === id)
    if (index != -1) {
      this.products.splice(index, 1)
    }
  }

  get mugPromo() {
    return this.calcMugPromo()
  }

  calcMugPromo() {
    var mug = this.products.find((product) => product.code === 'MUG')
    if (mug) {
      var totalPrice = Math.ceil((mug.quantity - 1) / 2) * mug.price
      return totalPrice
    }
    return null
  }

  get shirtPromo() {
    return this.calcShirtPromo()
  }

  calcShirtPromo() {
    const quantityDiscount = 3
    var shirt = this.products.find((product) => product.code === 'TSHIRT')
    if (shirt) {
      const discountPrice = shirt.price * 0.05 * quantityDiscount
      var totalPrice =
        Math.ceil((shirt.quantity - (quantityDiscount - 1)) / quantityDiscount) * discountPrice
      return totalPrice
    }
    return null
  }

  get productsCount() {
    return this.calcQuantity()
  }

  calcQuantity() {
    return this.products.reduce((sum, product) => {
      return sum + product.quantity
    }, 0)
  }

  get subTotal() {
    return this.calcSubTotal()
  }

  calcSubTotal() {
    return this.products.reduce((sum, product) => {
      return sum + product.price * product.quantity
    }, 0)
  }

  get total() {
    return this.subTotal - (this.calcMugPromo() + this.calcShirtPromo())
  }
}
