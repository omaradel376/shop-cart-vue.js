import { createStore } from "vuex";

export default createStore({
  // state: {
  //   dataCart: 1,
  // },
  // getters: {
  //   doubledCounter(state) {
  //     return state.dataCart * 2;
  //   },
  // },
  // mutations: {
  //   increase(state, payload) {
  //     state.dataCart += payload.amount;
  //   },
  // },
  state: {
    dataCart: {
      id: [],
      name: [],
      description: [],
      priceOfOne: [],
      totalPrice: [],
      itemCount: [],
      url: [],
    },
    array: [],
  },
  mutations: {
    updateCart(state, payload) {
      state.dataCart.id.push(payload.id);
      state.dataCart.name.push(payload.name);
      state.dataCart.priceOfOne.push(payload.priceOfOne);
      state.dataCart.totalPrice.push(payload.totalPrice);
      state.dataCart.itemCount.push(payload.itemCount);
      state.dataCart.url.push(payload.url);
      state.dataCart.description.push(payload.description);
      // console.log(state.dataCart);
    },
    changeToArray(state) {
      state.array = [];
      for (let i = 0; i < state.dataCart.id.length; i++) {
        state.array.push({
          id: state.dataCart.id[i],
          name: state.dataCart.name[i],
          priceOfOne: state.dataCart.priceOfOne[i],
          totalPrice: state.dataCart.totalPrice[i],
          itemCount: state.dataCart.itemCount[i],
          url: state.dataCart.url[i],
          description: state.dataCart.description[i],
        });
      }
      // console.log(state.array);
    },
  },
});
