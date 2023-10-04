<template>
  <footer>
    <nav>
      <a v-for="link in links" :key="link.name" :href="link.url">
        {{ link.name }}
      </a>
    </nav>
    <div>
      <span>Copyright © Igor Kroeber 2022.</span>
      <span>Todos os direitos reservados.</span>
    </div>
  </footer>
</template>

<script>
  import { pages } from '../constants/pages'

  export default {
    data() {
      return {
        links: pages
      }
    }
  }
</script>

<style scoped>
  footer {
    color: #fafafa;
    padding: 1em;
    align-items: center;
    display: flex;
    flex-direction: column;
    background-color: #0008;
    justify-content: center;
  }

  footer nav {
    padding-bottom: 0.5em;
  }

  footer a {
    padding-left: 0.375em;
    padding-right: 0.375em;
  }

  footer span {
    cursor: text;
  }

  @media screen and (max-width: 800px) {
    footer span {
      display: block;
    }
  }
</style>
