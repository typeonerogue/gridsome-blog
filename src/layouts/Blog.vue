<template>
  <div class="layout">
    <header-comp></header-comp>
    <div>
      Posts (WIP)
      <ul>
        <li
          v-for="post in $static.allPost.edges"
          :key="post.node.path">
          <g-link
            class="nav__link"
            :to="`./${post.node.path}`">
            {{ post.node.title }}
          </g-link>
        </li>
      </ul>
    </div>
    <footer-comp></footer-comp>
  </div>
</template>

<static-query>
query {
  allPost(
      sortBy: "menuOrder"
      order: ASC
    ) {
    edges {
      node {
        title,
        path
      }
    }
  }
}
</static-query>

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
