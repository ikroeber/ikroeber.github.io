<template>
  <header>
    <span>IK</span>
    <nav>
      <a v-for="link in links" :key="link.name" :href="link.url">
        {{ link.name }}
      </a>
    </nav>
  </header>
</template>

<script>
import { pages } from '../constants/pages';

export default {
  data() {
    return {
      links: pages
    }
  }
};
</script>

<style scoped>
header {
  padding-left: 1em;
  padding-right: 1em;
  height: 5em;
  width: 100%;
  position: absolute;
}

header,
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}


@media screen and (max-width: 800px) {
  nav {
    display: none;
  }
}

span {
  color: #fafafa;
  font-size: 32px;
  cursor: text;
  padding-left: .25em;
}

nav a {
  padding-right: .75em;
}
</style>
