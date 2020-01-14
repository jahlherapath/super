/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link, useStaticQuery, graphql } from "gatsby"

import kebabCase from "lodash/kebabCase"

import Nav from "../Nav/Nav"

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
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        height: "64px",
        px: 5,
        zIndex: 1,
      }}
    >
      <Nav />
      {/* <Link to="/">Home</Link>
      {data.allPrismicCategory.edges.map(items => (
        <Link to={`/categories/${kebabCase(items.node.data.name)}`}>
          {items.node.data.name}
        </Link>
      ))} */}
    </header>
  )
}

export default Header
