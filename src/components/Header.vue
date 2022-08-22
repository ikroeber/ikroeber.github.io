<template>
  <header>
    <img src="../assets/logo.png" alt="Igor Kroeber" id="headerLogo" />
    <div>
      <div id="headerRight">
        <nav>
          <LinkList :links="links" />
        </nav>
        Menu aqui
      </div>
    </div>
  </header>
</template>

<script>
import pages from '../constants/pages';
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
  padding: 0.5em;
  background-color: #555;
}

#headerLogo {
  height: 3em;
}
</style>
