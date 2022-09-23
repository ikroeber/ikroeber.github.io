<template>
  <footer>
    <nav>
      <a v-for="link in links" :key="link.name" :href="link.url">
        {{ link.name }}
      </a>
    </nav>
    <span>{{ copyrightNotice }}</span>
  </footer>
</template>

<script>
import { pages } from '../constants/pages'

export default {
  data() {
    return {
      links: pages,
      copyrightNotice: "Copyright © Igor Kroeber 2022. Todos os direitos reservados.",
    };
  }
};
</script>

<style scoped>
footer {
  color: #fafafa;
  padding: 0.5em;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: #0008;
  justify-content: center;
}

footer a {
  padding-left: .375em;
  padding-right: .375em;
}

footer span {
  cursor: text;
}
</style>
