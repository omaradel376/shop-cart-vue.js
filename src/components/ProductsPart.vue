<template>
  <div ref="all" class="all">
    <!-- <h3>{{ doubledCounter }}</h3> -->
    <div @input="search" class="search-bar">
      <input
        id="search"
        type="text"
        placeholder="Search Products"
        v-model="searchValue"
      />
      <label for="search">
        <font-awesome-icon
          class="search-icon"
          :icon="['fas', 'magnifying-glass']"
        />
      </label>
    </div>
    <h2 class="noProduct" ref="noProduct"></h2>
    <div ref="products" class="products">
      <div
        id="product"
        v-for="(product, index) in DataProducts"
        :key="product.id"
        :class="product.category"
      >
        <div class="content">
          <div class="img">
            <img loading="lazy" :src="product.url" alt="" />
          </div>
          <div class="text">
            <h3>{{ product.h3 }}</h3>
            <p>{{ product.description }}</p>
            <p class="price">{{ product.price }}$</p>
          </div>
        </div>
        <div class="activity">
          <font-awesome-icon
            class="icon-activity"
            @click="cart(index)"
            :icon="['fas', 'cart-shopping']"
          />
          <font-awesome-icon
            :style="{ color: product.isLove ? 'red' : 'white' }"
            @click="love(index)"
            class="icon-activity"
            :icon="product.isLove ? ['fas', 'heart'] : ['far', 'heart']"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let id = 0; // for total price its very important
// let h2 = document.createElement("h2");
export default {
  name: "ProductsPart",
  data() {
    return {
      DataProducts: [
        {
          id: "1",
          h3: "product 1",
          description: "this is description text for testing",
          url: "/assets/product-1.webp",
          category: "camera",
          isLove: false,
          price: "200",
          inCart: false,
        },
        {
          id: "2",
          h3: "product 2",
          description: "this is description text for testing",
          url: "/assets/product-2.webp",
          category: "phone",
          isLove: false,
          price: "87",
          inCart: false,
        },
        {
          id: "3",
          h3: "product 3",
          description: "this is description text for testing",
          url: "/assets/product-3.webp",
          category: "ps",
          isLove: false,
          price: "25",
          inCart: false,
        },
        {
          id: "4",
          h3: "product 4",
          description: "this is description text for testing",
          url: "/assets/product-4.webp",
          category: "pc",
          isLove: false,
          price: "19",
          inCart: false,
        },
        {
          id: "5",
          h3: "product 5",
          description: "this is description text for testing",
          url: "/assets/product-5.webp",
          category: "phone",
          isLove: false,
          price: "299",
          inCart: false,
        },
        {
          id: "6",
          h3: "product 6",
          description: "this is description text for testing",
          url: "/assets/product-6.webp",
          category: "ps",
          isLove: false,
          price: "246",
          inCart: false,
        },
        {
          id: "7",
          h3: "product 7",
          description: "this is description text for testing",
          url: "/assets/product-7.webp",
          category: "ps",
          isLove: false,
          price: "993",
          inCart: false,
        },
        {
          id: "8",
          h3: "product 8",
          description: "this is description text for testing",
          url: "/assets/product-8.webp",
          category: "laptob",
          isLove: false,
          price: "2042",
          inCart: false,
        },
        {
          id: "9",
          h3: "product 9",
          description: "this is description text for testing",
          url: "/assets/product_9.webp",
          category: "camera",
          isLove: false,
          price: "2457",
          inCart: false,
        },
        {
          id: "10",
          h3: "product 10",
          description: "this is description text for testing",
          url: "/assets/product_10.webp",
          category: "laptob",
          isLove: false,
          price: "232",
          inCart: false,
        },
        {
          id: "11",
          h3: "product 11",
          description: "this is description text for testing",
          url: "/assets/product_11.webp",
          category: "laptob",
          isLove: false,
          price: "769",
          inCart: false,
        },
        {
          id: "12",
          h3: "product 12",
          description: "this is description text for testing",
          url: "/assets/product_12.webp",
          category: "pc",
          isLove: false,
          price: "432",
          inCart: false,
        },
        {
          id: "13",
          h3: "product 13",
          description: "this is description text for testing",
          url: "/assets/product_13.webp",
          category: "ps",
          isLove: false,
          price: "431",
          inCart: false,
        },
        {
          id: "14",
          h3: "product 14",
          description: "this is description text for testing",
          url: "/assets/product_14.webp",
          category: "camera",
          isLove: false,
          price: "50",
          inCart: false,
        },
        {
          id: "15",
          h3: "product 15",
          description: "this is description text for testing",
          url: "/assets/product_15.webp",
          category: "pc",
          isLove: false,
          price: "2221",
          inCart: false,
        },
        {
          id: "16",
          h3: "product 16",
          description: "this is description text for testing",
          url: "/assets/product_16.webp",
          category: "laptob",
          isLove: false,
          price: "124",
          inCart: false,
        },
        {
          id: "17",
          h3: "product 17",
          description: "this is description text for testing",
          url: "/assets/product_17.webp",
          category: "camera",
          isLove: false,
          price: "100",
          inCart: false,
        },
        {
          id: "18",
          h3: "product 18",
          description: "this is description text for testing",
          url: "/assets/product_18.webp",
          category: "pc",
          isLove: false,
          price: "100",
          inCart: false,
        },
      ],
      price: "1",
      totalPrice: [],
      searchValue: "",
    };
  },
  methods: {
    // make icon of heart red when click on it
    love(index) {
      this.DataProducts[index].isLove = !this.DataProducts[index].isLove;
      // this.DataProducts[index] = !this.isLoved;
    },
    // Create alert at clicking on cart icon
    cart(index) {
      let alert = document.createElement("div");
      alert.className = "cart-alert";

      // create img
      let imageUrl = this.DataProducts[index].url;
      let image = document.createElement("img");
      image.src = imageUrl;

      // create title
      let title = document.createTextNode(this.DataProducts[index].h3);
      let h3 = document.createElement("h3");
      h3.appendChild(title);

      // create description
      let description = document.createTextNode(
        this.DataProducts[index].description
      );
      let p = document.createElement("p");
      p.appendChild(description);

      // create X icon
      let closeICon = document.createElement("div");
      closeICon.textContent = "X";
      closeICon.addEventListener("click", () => {
        closeICon.parentElement.remove();
        overLay.remove();
      });

      // create over lay
      let overLay = document.createElement("div");

      // create counter
      let counterItems = document.createElement("div");

      // create decrease button
      let decrease = document.createElement("button");
      decrease.textContent = "-";
      decrease.addEventListener("click", () => {
        if (input.value > 1) {
          input.value--;
        }
        this.price = input.value * this.DataProducts[index].price;
        totalPrice.textContent = this.price + "$";
      });

      // create input
      let input = document.createElement("input");
      input.type = "number";
      input.disabled = true;
      input.max = 10;
      input.min = 1;
      input.value = 1;

      // create crease button
      let increase = document.createElement("button");
      increase.textContent = "+";
      increase.addEventListener("click", () => {
        if (input.value < 10) {
          input.value++;
        }
        this.price = input.value * this.DataProducts[index].price;
        totalPrice.textContent = this.price + "$";
      });
      counterItems.appendChild(decrease);
      counterItems.appendChild(input);
      counterItems.appendChild(increase);

      // create price
      let totalPrice = document.createElement("div");
      this.price = input.value * this.DataProducts[index].price;
      totalPrice.textContent = this.price + "$";
      input.oninput = () => {
        this.price = input.value * this.DataProducts[index].price;
        totalPrice.textContent = this.price + "$";
      };

      // create add button
      let addButton = document.createElement("button");
      addButton.textContent = "Add To Cart";

      addButton.addEventListener("click", () => {
        // push data to varible to send it to cart
        this.totalPrice.push({
          id: id++,
          itemsName: this.DataProducts[index].h3,
          itemCount: input.value,
          priceOfOne: this.DataProducts[index].price + "$",
          totalPrice: this.price + "$",
        });
        this.$store.commit("updateCart", {
          id: this.totalPrice[this.totalPrice.length - 1].id,
          name: this.totalPrice[this.totalPrice.length - 1].itemsName,
          description: this.DataProducts[index].description,
          priceOfOne: this.totalPrice[this.totalPrice.length - 1].priceOfOne,
          totalPrice: this.totalPrice[this.totalPrice.length - 1].totalPrice,
          itemCount: this.totalPrice[this.totalPrice.length - 1].itemCount,
          url: this.DataProducts[index].url,
        });
        // console.log(this.DataProducts[index].url);
        // FIX: important part to send data to father

        // create alert
        let alertAdd = document.createElement("div");
        alertAdd.textContent = "Sucssufly Add";
        alertAdd.style.backgroundColor = "green";
        alertAdd.style.color = "white";
        alertAdd.style.position = "fixed";
        alertAdd.style.top = "-50px";
        alertAdd.style.left = "50%";
        alertAdd.style.transform = "translateX(-50%)";
        alertAdd.style.padding = "5px 10px";
        alertAdd.style.transitionDuration = "1s";
        alertAdd.style.fontWeight = "bold";
        setTimeout(() => {
          alertAdd.style.top = "0";
        }, 100);
        setTimeout(() => {
          alertAdd.style.top = "-50px";
          setTimeout(() => {
            alertAdd.remove();
          }, 1000);
        }, 3000);
        document.body.appendChild(alertAdd);

        addButton.parentElement.style.transform =
          "translate(-50%, -200%) scale(0.4)";
        setTimeout(() => {
          addButton.parentElement.remove();
        }, 1000);
        overLay.remove();
      });

      // append items
      alert.appendChild(image);
      alert.appendChild(h3);
      alert.appendChild(p);
      alert.appendChild(counterItems);
      alert.appendChild(totalPrice);
      alert.appendChild(addButton);
      alert.appendChild(closeICon);
      this.$refs.all.appendChild(overLay);
      this.$refs.all.appendChild(alert);

      // add style

      // alert style
      const alertStyles = {
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "10px",
        borderRadius: "10px",
        position: "fixed",
        width: "clamp(300px, 40% , 500px)",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "1000",
        transition: "1s",
      };
      Object.assign(alert.style, alertStyles);
      // img style
      image.style.width = "90%";

      // text style
      h3.style.textTransform = "capitalize";

      // Close ICon style
      const closeIconStyles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "-5px",
        right: "-5px",
        width: "20px",
        height: "20px",
        backgroundColor: "red",
        color: "white",
        borderRadius: "1px",
        cursor: "pointer",
      };
      // تطبيق الأنماط على أيقونة الإغلاق
      Object.assign(closeICon.style, closeIconStyles);

      // over lay style
      const overlayStyles = {
        width: "100%",
        height: "100%",
        position: "fixed",
        top: "0",
        left: "0",
        backgroundColor: "#00000075",
      };
      // تطبيق الأنماط على عنصر overlay
      Object.assign(overLay.style, overlayStyles);

      // counter style
      const buttonStyles = {
        addButton: {
          minWidth: "130px",
          height: "40px",
          color: "#fff",
          padding: "5px 10px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "all 0.3s ease",
          position: "relative",
          display: "inline-block",
          outline: "none",
          overflow: "hidden",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#80ed99",
          "&:hover": {
            borderRadius: "5px",
            paddingRight: "24px",
            paddingLeft: "8px",
          },
          "&:hover:after": {
            opacity: "1",
            right: "10px",
          },
          "&:after": {
            content: '"\\00BB"',
            position: "absolute",
            opacity: "0",
            fontSize: "20px",
            lineHeight: "40px",
            top: "0",
            right: "-20px",
            transition: "0.4s",
          },
        },
      };
      Object.assign(addButton.style, buttonStyles.addButton);
      addButton.addEventListener("mouseover", () => {
        addButton.style.backgroundColor = "green";
      });
      addButton.addEventListener("mouseleave", () => {
        addButton.style.backgroundColor = "#80ed99";
      });

      // input style
      counterItems.style.display = "flex";
      counterItems.style.marginBottom = "10px";
      input.style.width = "100%";
      input.style.padding = "5px 10px";
      input.style.fontSize = "18px";
      input.style.fontWeight = "bold";
      increase.style.padding = "10px";
      decrease.style.padding = "10px";

      // price style
      totalPrice.style.fontSize = "18px";
      totalPrice.style.fontWeight = "bold";
      totalPrice.style.marginBottom = "10px";
    },
    search() {
      let d = [];
      // this.$refs.products.appendChild(h2);

      let product = Array.from(this.$refs.products.children);
      for (let i = 0; i < this.DataProducts.length; i++) {
        if (product[i].className.includes(this.searchValue.toLowerCase())) {
          d.push(product[i]);
          product[i].style.display = "block";
        } else {
          product[i].style.display = "none";
          // d = 0;
        }
      }
      if (d.length == 0) {
        this.$refs.noProduct.textContent = "no items";
        console.log("no items");
      } else {
        this.$refs.noProduct.textContent = "";
      }
      console.log(d);
    },
  },
  computed: {
    dataCart() {
      return this.$store.state.dataCart;
    },
  },
};
</script>

<style lang="scss" scoped>
h2.noProduct {
  text-transform: capitalize;
  width: fit-content;
  margin: auto;
  font-size: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.search-bar {
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  width: clamp(250px, 50%, 700px);
  margin: 20px auto;
  padding-right: 10px;
  position: relative;
  &::before {
    content: "products is : pc, laptob, camera, phone and ps";
    position: absolute;
    text-transform: capitalize;
    width: calc(100% - 10px);
    height: 20px;
    top: -20px;
    left: 0;
    background: rgba(0, 0, 0, 0.655);
    color: #ffffff87;
    padding: 0 5px;
    opacity: 0;
    transition: 0.5s;
  }
  &:hover:before {
    opacity: 1;
  }
  input {
    border: none;
    flex: 1;
    padding: 10px;

    &:focus {
      outline: none;
    }
  }
  .search-icon {
    color: #555;
    cursor: text;
  }
}
.products {
  width: 90%;
  padding: 10px;
  // background-color: red;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  #product {
    background-color: #22577a;
    // display: flex;
    flex-direction: column;
    align-items: center;
    // text-align: center;
    padding: 10px;
    text-transform: capitalize;
    border-radius: 10px;
    .content {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .img {
      width: 100px;
      height: 80%;
      border-radius: 10px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        user-select: none;
      }
    }
    .text {
      margin-top: 10px;
      h3 {
        color: white;
        font-size: 20px;
        width: fit-content;
      }
      p {
        margin-top: 5px;
        width: 200px;
        font-size: 13px;
        color: #eee;
        font-family: monospace;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .activity {
      margin-top: 20px;
      display: flex;
      gap: 25px;
      .icon-activity {
        color: white;
        cursor: pointer;
        transition: 1s;
      }
    }
  }
}
</style>
