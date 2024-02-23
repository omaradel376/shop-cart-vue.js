<template>
  <products-part @dataOfMe="getting" />
</template>

<script>
import ProductsPart from "@/components/ProductsPart.vue";
export default {
  name: "HomeView",
  components: {
    ProductsPart,
  },
  data() {
    return {
      dataOfCart: "",
    };
  },
  methods: {
    getting(value) {
      this.dataOfCart = value;
      // console.log(this.dataOfCart);
    },
  },
};
</script>
