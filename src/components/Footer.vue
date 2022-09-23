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
import LinkList from './shared/LinkList.vue';
import { pages } from '../constants/pages'
import { colors } from '../constants/colors';

export default {
  data() {
    return {
      colors,
      links: pages,
      copyrightNotice: "Copyright © Igor Kroeber 2022. Todos os direitos reservados.",
    };
  },
  methods: {
    changePage(e) {
      e.preventDefault();
    },
  },
  components: {
    LinkList
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
}

footer a {
  color: #ffc08c;
  text-decoration: none;
  padding-left: .5em;
  padding-right: .5em;
  transition: color .15s linear;
}

footer a:hover {
  color: #33ffb8;
}

footer span {
  cursor: text;
}

@media screen and (max-width: 800px) {
  footer {
    font-size: 14px;
  }
}
</style>
