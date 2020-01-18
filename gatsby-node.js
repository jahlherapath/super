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
  const talentTemplate = require.resolve("./src/templates/talent.jsx")

  const postResult = await wrapper(
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

  const talentResult = await wrapper(
    graphql(`
      {
        allPrismicTalent {
          edges {
            node {
              id
              uid
              data {
                tags {
                  tag {
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

  const postList = postResult.data.allPrismicPost.edges
  const talentList = talentResult.data.allPrismicTalent.edges
  const postsPerPage = 6
  const numPages = Math.ceil(postList.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    // createPage({
    //   path: i === 0 ? `/` : `/${i + 1}`,
    //   component: require.resolve("./src/templates/blog.jsx"),
    //   context: {
    //     title: "Home",
    //     limit: postsPerPage,
    //     skip: i * postsPerPage,
    //     numPages,
    //     currentPage: i + 1,
    //   },
    // })
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: require.resolve("./src/templates/blog.jsx"),
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
  const tagSet = {}

  // Double check that the post has a category assigned
  postList.forEach((edge, idx) => {
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
        next: postList[idx + 1],
        prev: postList[idx - 1],
      },
    })
  })

  // Double check that the post has a tag assigned
  talentList.forEach((edge, idx) => {
    if (edge.node.data.tags[0].tag) {
      edge.node.data.tags.forEach(tag => {
        const tagName = tag.tag.document[0].data.name
        if (!tagSet[tagName]) {
          tagSet[tagName] = 0
        }
        tagSet[tagName]++
      })
    }

    // The uid you assigned in Prismic is the slug!
    createPage({
      path: `/${edge.node.uid}`,
      component: talentTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node.uid,
        next: talentList[idx + 1],
        prev: talentList[idx - 1],
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

  const tagList = Object.keys(tagSet)

  tagList.forEach(tag => {
    // createPage({
    //   path: `/tags/${_.kebabCase(tag)}`,
    //   component: tagTemplate,
    //   context: {
    //     tag,
    //   },
    // })

    if (!tagSet[tag]) return
    const tagValue = _.kebabCase(tag)
    const total = tagSet[tag]
    const numPages = Math.ceil(total / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/tags/${tagValue}` : `/tags/${tagValue}/${i + 1}`,
        component: require.resolve("./src/templates/tag.jsx"),
        context: {
          title: "Tag",
          prefix: `/tags/${tagValue}/`,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
          tag,
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
