/** @jsx jsx */
import { jsx } from "theme-ui"

// import { Link, useStaticQuery, graphql } from "gatsby"

// import kebabCase from "lodash/kebabCase"

import Nav from "../Nav/Nav"

function Header() {
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
    </header>
  )
}

export default Header
