<template>
  <nav :class="[{ 'vertical': vertical }, 'linkList']">
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

.vertical {
  flex-direction: column;
}
</style>
