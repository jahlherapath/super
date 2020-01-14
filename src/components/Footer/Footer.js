/** @jsx jsx */
import { jsx } from "theme-ui"

import { useStaticQuery, graphql } from "gatsby"

function Footer() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return (
    <footer
      sx={{
        height: "64px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        px: 4,
      }}
    >
      <p>
        © {new Date().getFullYear()}, All rights reserved&nbsp;
        {site.siteMetadata.title}
      </p>
    </footer>
  )
}

export default Footer
