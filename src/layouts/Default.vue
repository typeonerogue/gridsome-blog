<template>
  <div class="layout">
    <header-comp></header-comp>
    <slot></slot>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import FooterComp from '~/components/Footer.vue';
import HeaderComp from '~/components/Header.vue';

export default {
  components: {
    FooterComp,
    HeaderComp
  },
};
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
