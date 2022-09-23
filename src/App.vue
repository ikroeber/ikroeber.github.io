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
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');

html,
body {
  background-color: #0E2A47;
  width: 100%;
  height: 100%;
}

h1,
h2 {
  font-weight: 400;
}

#backgroundWrapper {
  z-index: -1;
  position: absolute;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-image: url('./assets/background.svg');
}

#app {
  z-index: 1;
  background-color: transparent;
  font-family: 'Staatliches';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fafafa;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

@keyframes linkHover {
  0% {
    color: #ffc08c;
    bottom: .0em;
  }

  100% {
    color: #33ffb8;
    bottom: .25em;
  }
}

nav a {
  color: #ffc08c;
  text-decoration: none;
  position: relative;
}

nav a:hover {
  animation: linkHover .25s both;
}
</style>
