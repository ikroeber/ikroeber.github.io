<template>
  <footer>
    <LinkList :links="links" :style="{ color: colors.warning }" />
    {{ copyrightNotice }}
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
      copyrightNotice: "Copyright © Igor Kroeber 2022. All rights reserved.",
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

<style>
footer {
  padding: 0.5em;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: #333;
  color: #f4f4f4;
}

footer a {
  color: #ffc08c;
  text-decoration: none;
  transition: color .15s linear;
}

footer a:hover {
  color: #33ffb8;
}
</style>
