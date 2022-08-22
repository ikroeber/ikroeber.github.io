<template>
  <div id="app">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Content from "./components/Content.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Content,
  },
};
</script>

<style src="./vendor/sanitize.css">
</style>

<style>
html,
body {
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
