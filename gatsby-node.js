const path = require("path")
const _ = require("lodash")

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = require.resolve("./src/templates/post.jsx")

  const result = await wrapper(
    graphql(`
      {
        allPrismicPost {
          edges {
            node {
              id
              uid
              data {
                categories {
                  category {
                    document {
                      data {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `)
  )

  const posts = result.data.allPrismicPost.edges
  const postsPerPage = 6
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: require.resolve("./src/templates/blog-list.jsx"),
      context: {
        title: "Home",
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: require.resolve("./src/templates/blog-list.jsx"),
      context: {
        title: "Blog",
        prefix: "/blog/",
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  const categorySet = {}

  // Double check that the post has a category assigned
  posts.forEach((edge, idx) => {
    if (edge.node.data.categories[0].category) {
      edge.node.data.categories.forEach(cat => {
        const catName = cat.category.document[0].data.name
        if (!categorySet[catName]) {
          categorySet[catName] = 0
        }
        categorySet[catName]++
      })
    }

    // The uid you assigned in Prismic is the slug!
    createPage({
      path: `/${edge.node.uid}`,
      component: postTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node.uid,
        next: posts[idx + 1],
        prev: posts[idx - 1],
      },
    })
  })

  const categoryList = Object.keys(categorySet)

  categoryList.forEach(category => {
    // createPage({
    //   path: `/categories/${_.kebabCase(category)}`,
    //   component: categoryTemplate,
    //   context: {
    //     category,
    //   },
    // })

    if (!categorySet[category]) return
    const tag = _.kebabCase(category)
    const total = categorySet[category]
    const numPages = Math.ceil(total / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/categories/${tag}` : `/categories/${tag}/${i + 1}`,
        component: require.resolve("./src/templates/category.jsx"),
        context: {
          title: "Category",
          prefix: `/categories/${tag}/`,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
          category,
        },
      })
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}
