<template>
  <div id="app">
    <div id="backgroundWrapper"></div>
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

#backgroundWrapper {
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-image: url('./assets/background.svg');
}

div,
article,
section,
span,
h1,
h2 {
  background-color: transparent;
}

#app {
  z-index: 1;
  background-color: transparent;
  font-family: 'Koulen';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fafafa;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
