<template>
  <header>
    <span id="headerText">IK</span>
    <div>
      <div id="headerRight">
        <a v-for="link in links" :key="link.name" :href="link.url">
          {{ link.name }}
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import { pages } from '../constants/pages';
import LinkList from './shared/LinkList.vue';

export default {
  data() {
    return {
      links: pages
    }
  },
  components: { LinkList }
};
</script>

<style scoped>
header,
#headerRight {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

header {
  padding-left: 1em;
  padding-right: 1em;
  background-color: #0008;
  height: 5em;
  width: 100%;
  position: absolute;
}

@media screen and (max-width: 800px) {
  #headerRight {
    display: none;
  }
}

#headerText {
  color: #fafafa;
  font-size: 32px;
  cursor: text;
}

header a {
  color: #ffc08c;
  text-decoration: none;
  padding-left: .5em;
  padding-right: .5em;
  transition: color .15s linear;
}

header a:hover {
  color: #33ffb8;
}
</style>
