<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link
          class="nav__link"
          v-for="page in $static.allRoguePage.edges"
          v-bind:key="page.node.pageName"
          :to="page.node.route"
        >{{page.node.title}}</g-link>
      </nav>
    </header>
    <slot/>
    <footer-comp/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
  allRoguePage(
      sortBy: "menuOrder"
      order: ASC
      filter: {menuOrder: {gt: -1}}
    ) {
    edges {
      node {
        title
        pageName
        route
        menuOrder
      }
    }
  }
}
</static-query>

<script>
import FooterComp from '~/components/Footer.vue';

export default {
  components: {
    FooterComp
  }
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
