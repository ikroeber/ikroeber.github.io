<template>
  <footer>
    <LinkList :links="links" />
    {{ copyrightNotice }}
  </footer>
</template>

<script>
import LinkList from './shared/LinkList.vue';
import pages from '../constants/pages'

export default {
  data() {
    return {
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
}
</style>
