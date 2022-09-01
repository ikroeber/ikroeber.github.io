<template>
  <div id="contentWrapper">
    <LandingPage />
  </div>
</template>

<script>
import LandingPage from './LandingPage.vue';
export default { components: { LandingPage } };
</script>

<style>
#contentWrapper {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
