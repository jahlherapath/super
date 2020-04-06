/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link } from "gatsby"
import Img from "gatsby-image"

function Card({ node, index }) {
  return (
    <Link
      key={index}
      to={node.uid}
      sx={{
        display: "inline-block",
        width: "25%",
      }}
    >
      <Img
        sx={{ p: 4, backgroundColor: "offWhite" }}
        fluid={node.data.thumbnail.localFile.childImageSharp.fluid}
      />
    </Link>
  )
}

export default Card
