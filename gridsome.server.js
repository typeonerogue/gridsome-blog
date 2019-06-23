// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(store => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api
  });
  api.createPages(async ({ createPage, graphql }) => {
    const { data } = await graphql(`
      {
        allRoguePage(sortBy: "menuOrder", order: ASC) {
          edges {
            node {
              title
              pageName
              route
              menuOrder
              content
            }
          }
        }
      }
    `);

    data.allRoguePage.edges.forEach(({ node }) => {
      createPage({
        path: `${node.route}`,
        component: `./src/templates/Page.vue`,
        context: {
          title: node.title,
          content: node.content
        }
      });
    });
  });
};
