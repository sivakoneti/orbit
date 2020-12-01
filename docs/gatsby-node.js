const path = require("path");

// creates a "collection" field to it easier to filter nodes created by
// gatsby-source-filesystem instead of awkwardly filtering by file path
// https://github.com/gatsbyjs/gatsby/issues/1634#issuecomment-388899348
exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type !== "Mdx") return;
  const { createNodeField } = actions;
  const parent = getNode(node.parent);
  createNodeField({
    node,
    name: "collection",
    value: parent.sourceInstanceName,
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query AllGuides {
      allMdx(filter: { fields: { collection: { eq: "guides" } } }) {
        nodes {
          frontmatter {
            title
          }
          body
          slug
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(`Error when querying guides.`);
    return;
  }
  result.data.allMdx.nodes.forEach(guide => {
    createPage({
      path: `/guides/${path.basename(guide.slug)}`,
      component: `${__dirname}/src/templates/Guide.tsx`,
      context: {
        title: guide.frontmatter.title,
        body: guide.body,
      },
    });
  });
};