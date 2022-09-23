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
@import url('https://fonts.googleapis.com/css2?family=Koulen&display=swap');

html,
body {
  background-color: #0E2A47;
  width: 100%;
  height: 100%;
}

#app {
  font-family: 'Koulen';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffc08c;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
