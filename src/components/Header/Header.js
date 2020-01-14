/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link, useStaticQuery, graphql } from "gatsby"

import kebabCase from "lodash/kebabCase"

function Header() {
  const data = useStaticQuery(graphql`
    query Categories {
      allPrismicCategory {
        edges {
          node {
            data {
              name
            }
          }
        }
      }
    }
  `)

  return (
    <header
      sx={{
        position: "fixed",
        bottom: 0,
        right: 0,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        height: "100%",
        px: 4,
        zIndex: 1,
      }}
    >
      <Link to="/">Home</Link>
      {data.allPrismicCategory.edges.map(items => (
        <Link to={`/categories/${kebabCase(items.node.data.name)}`}>
          {items.node.data.name}
        </Link>
      ))}
    </header>
  )
}

export default Header
