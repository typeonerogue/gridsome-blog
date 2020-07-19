<template>
  <header class="header">
    <strong>
      <g-link to="/">{{ $static.metadata.siteName }}</g-link>
    </strong>
    <nav class="nav">
      <g-link
        v-for="page in $static.allRoguePage.edges"
        :key="page.node.pageName"
        class="nav__link"
        :to="page.node.route">
        {{ page.node.title }}
      </g-link>
      <a
        class="nav__link"
        href="/blog">
        Blog
      </a>
      <a
        v-if="isDev"
        class="nav__link"
        href="/admin">
        Admin
      </a>
    </nav>
  </header>
</template>

<static-query>
query {
  metadata {
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

export default {
    computed: {
    isDev() {
      return process.env.NODE_ENV === 'development';
    }
  }
}
</script>