/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link } from "gatsby"
import Img from "gatsby-image"

function Card({ node, index }) {
  return (
    <Link
      key={index}
      to={`/${node.uid}`}
      sx={{
        float: "right",
        width: ["100%", "100%", "25%"],
      }}
    >
      <div sx={{ backgroundColor: "offWhite", p: 3, pb: 3, m: 3 }}>
        <Img fluid={node.data.thumbnail.localFile.childImageSharp.fluid} />
        <div
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pt: 3,
          }}
        >
          <p sx={{ fontSize: 1, p: 0, m: 0 }}>{node.data.name.text}</p>
          <p
            sx={{
              fontFamily: "display",
              fontStyle: "italic",
              fontWeight: "medium",
              fontSize: 2,
              p: 0,
              m: 0,
            }}
          >
            {node.data.location.text}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Card
