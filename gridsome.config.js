// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: `Rogue's Blog`,
  transformers: {
    remark: {
      plugins: [{
        use: `gridsome-plugin-netlify-cms`,
      }],
    },
  },
  plugins: [{
    use: '@gridsome/source-filesystem',
    options: {
      path: 'posts/**/*.md',
      typeName: 'Post',
      remark: {},
    },
  }, {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'pages/**/*.md',
      typeName: 'RoguePage',
      remark: {},
    },
  }, {
    use: `gridsome-plugin-netlify-cms`,
    options: {
      publicPath: `/admin`,
    },
  }],
};