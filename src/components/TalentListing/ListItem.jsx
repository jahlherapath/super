/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link } from "gatsby"
import Img from "gatsby-image"

function Card({ node, index }) {
  return (
    <div key={index}>
      <Link
        to={node.uid}
        sx={{
          position: "relative",
          display: "block",
          "&:hover > div": {
            opacity: 1,
          },
        }}
      >
        <Img fluid={node.data.thumbnail.localFile.childImageSharp.fluid} />
        <div
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            height: "100%",
            width: "100%",
            transition: "300ms all ease",
            backgroundColor: "rgba(66,0,255,0.6)",
            opacity: 0,
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h2
            sx={{
              variant: "styles.hoverText",
              fontSize: 9,
              p: 4,
            }}
          >
            {node.data.name.text}
          </h2>
          <div
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              textTransform: "uppercase",
            }}
          >
            <p
              sx={{
                variant: "styles.hoverText",
                fontSize: 7,
                fontStyle: "italic",
                p: 4,
              }}
            >
              {node.data.availability.text}
            </p>
            <p
              sx={{
                variant: "styles.hoverText",
                fontSize: 7,
                p: 4,
              }}
            >
              {node.data.location.text}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card
