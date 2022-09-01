<template>
  <nav :class="[vertical ? 'vertical' : 'horizontal', 'linkList']">
    <a v-for="link in links" :key="link.name" :href="link.url">
      {{ link.name }}
    </a>
  </nav>
</template>

<script>
export default {
  props: ['links', 'vertical']
}
</script>

<style scoped>
.linkList {
  display: flex;
}

.horizontal {
  flex-direction: row;
}

.horizontal>a {
  margin: 0 .25em 0 .25em;
}

.vertical {
  flex-direction: column;
}
</style>
