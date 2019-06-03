<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link
          class="nav__link"
          v-for="page in pages"
          v-bind:key="page.pageName"
          :to="page.route"
        >{{page.title}}</g-link>
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
  allRoguePage {
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
  },
  computed: {
    edges() {
      return this.$static &&
        this.$static.allRoguePage &&
        this.$static.allRoguePage.edges
        ? this.$static.allRoguePage.edges
        : null;
    },
    pages() {
      return this.edges
        ? this.edges
            .map(edge => ({
              title: edge.node.title,
              pageName: edge.node.pageName,
              route: edge.node.route,
              menuOrder: edge.node.menuOrder
            }))
            .filter(page => {
              return page.menuOrder > 0;
            })
            .sort((node1, node2) => {
              return node1.menuOrder < node2.menuOrder ? -1 : 1;
            })
        : [];
    }
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
