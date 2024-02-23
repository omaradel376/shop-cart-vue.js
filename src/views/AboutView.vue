<template>
  <div class="about">
    <div class="overlay" :class="showedCheck ? 'active' : ''"></div>
    <h2>{{ checkCart }}</h2>
    <div class="products-check">
      <div class="products">
        <div v-for="product in cart" :key="product.id" class="product">
          <div class="img">
            <img :src="product.url" alt="product-image" />
          </div>
          <div class="text">
            <h3>{{ product.name }}</h3>
            <p class="description">{{ product.description }}</p>
            <p class="priceOfOne">price of one : {{ product.priceOfOne }}</p>
            <p class="beices">number of Pieces : {{ product.itemCount }}</p>
            <p class="total">total price : {{ product.totalPrice }}</p>
          </div>
        </div>
      </div>
      <div ref="check" class="check hide">
        <font-awesome-icon
          ref="iconShowCheck"
          @click="showCheck"
          class="showCheck"
          :icon="showedCheck ? ['fas', 'xmark'] : ['fas', 'receipt']"
        />
        <h2 class="title">check</h2>
        <div class="check-only">
          <div class="orders">
            <div
              v-for="product in cart"
              :key="product.id"
              class="order order-1"
            >
              <ul class="main-ul">
                <li>
                  order-{{ product.id + 1 }}
                  <ul class="second-ul">
                    <li>order name : {{ product.name }}</li>
                    <li>order count : {{ product.itemCount }}</li>
                    <li>price for one : {{ product.priceOfOne }}</li>
                    <li>total price : {{ product.totalPrice }}</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div class="total">
            <p>Price of all : {{ priceAll }}$</p>
            <p>15% tacks : {{ taxes }}$</p>
            <p>total price : {{ priceAfterTaxes }}$</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: "vv",
      priceAll: null,
      taxes: null,
      priceAfterTaxes: null,
      showedCheck: false,
    };
  },
  computed: {
    dataCart() {
      return this.$store.state.dataCart;
    },
    checkCart() {
      return this.cart.length > 0
        ? `Your Cart Has ${this.cart.length} Items`
        : "No Items In Your Cart";
    },
  },
  mounted() {
    this.cart = "";
    this.$store.commit("changeToArray");
    this.cart = this.$store.state.array;

    for (let i = 0; i < this.cart.length; i++) {
      this.priceAll += parseInt(this.cart[i].totalPrice);
      // console.log(parseInt(this.cart[i].totalPrice));
    }
    this.taxes = +(0.15 * this.priceAll).toFixed(2);
    this.priceAfterTaxes = this.taxes + this.priceAll;
  },
  methods: {
    showCheck() {
      this.$refs.check.classList.toggle("hide");
      this.$refs.check.classList.toggle("active");
      this.showedCheck = !this.showedCheck;
    },
  },
};
</script>

<style lang="scss" scoped>
.overlay.active {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.377);
  z-index: 100;
}
.products-check {
  // display: flex;
  // justify-content: space-between;
  position: relative;
  // background: black;
}
.products {
  width: calc(100% - 20px);
  padding: 10px;
  order: 2;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
.product {
  // display: flex;
  align-items: center;
  gap: 20px;
  // min-width: fit-content;
  background-color: #ddd;
  position: relative;
  .text {
    padding: 10px;
    h3 {
      text-transform: capitalize;
      width: fit-content;
    }
    p {
      padding: 5px 0;
      // width: fit-content;
    }
    p:not(:last-child) {
      border-bottom: 2px solid #ffffff;
    }
    p.description {
      width: 200px;
      overflow: hidden;
      white-space: nowrap;
      font-family: monospace;
      text-overflow: ellipsis;
    }
    p.priceOfOne,
    p.beices,
    p.total {
      font-size: 18px;
      font-family: monospace;
      text-transform: capitalize;
    }
  }
}
.img {
  width: 100% !important;
  // flex-shrink: 0;
  width: 100px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
  }
}
.check {
  width: 300px;
  transition: 1s;
  position: fixed;
  background-color: white;
  top: 0%;
  height: 100vh;

  h2.title {
    text-transform: capitalize;
    text-align: center;
    font-size: 35px;
    background-color: #eee;
    font-family: monospace;
  }
  ul.main-ul {
    list-style-type: square;
    text-transform: capitalize;
    font-size: 20px;
    width: fit-content;
    margin: 20px auto;
    border-bottom: 1px solid black;
    text-align: center;
    padding: 10px;
  }
  ul.second-ul {
    font-size: 16px;
    list-style-type: disc;
    li {
      font-family: monospace;
    }
  }
  .total {
    width: fit-content;
    margin: auto;
    padding: 0px 0 21px;
    p {
      font-family: monospace;
      font-size: 18px;
      text-transform: capitalize;
    }
  }
}
.showCheck {
  width: 20px;
  height: 20px;
  position: absolute;
  color: white;
  right: -28px;
  top: 20%;
  cursor: pointer;
  z-index: 1000;
  transition: 1s;
  background: black;
  padding: 4px;
}
.check.hide {
  left: -300px;
  overflow: visible;
}
.check.active {
  left: 50%;
  transform: translateX(-50%);
  z-index: 10000;
  .showCheck {
    right: 20px;
    top: 10px;
    color: red;
    background: white;
  }
}
.check-only {
  height: calc(100vh - 41px);
  position: relative;
  overflow: auto;
}
</style>
