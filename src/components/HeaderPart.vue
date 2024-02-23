<template>
  <div class="header">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">Cart</router-link>
    </nav>
    <div class="logo">by vue.js</div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "HeaderPart",
};
</script>

<style lang="scss" scoped>
.header {
  display: block;

  .logo {
    font-size: 16px;
    text-transform: capitalize;
    font-weight: bold;
    text-align: center;
    letter-spacing: 5px;
  }

  nav {
    display: flex;
    font-size: 18px;
    justify-content: center;
    background-color: #2196f3;
  }

  a {
    color: black;
    padding: 10px;
    margin: 10px;
    transition-duration: 0.3s;
  }
  .router-link-active {
    font-weight: bold;
    color: black;
  }
  a:hover {
    text-decoration: underline;
  }
}
</style>
