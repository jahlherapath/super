/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link } from "gatsby"
import Img from "gatsby-image"

import Categories from "./Categories"

function Card({ node, categories }) {
  return (
    <div sx={{ mb: [5, 5, 6] }}>
      <Link to={`/${node.uid}`} sx={{ position: "relative", display: "block" }}>
        {node.data.thumbnail && (
          <Img
            fluid={node.data.thumbnail.localFile.childImageSharp.fluid}
            sx={{ mb: 3 }}
          />
        )}
        <p
          sx={{
            position: "absolute",
            top: 2,
            left: 2,
            fontFamily: "display",
            fontSize: 3,
            py: 1,
            px: 2,
            m: 0,
            color: node.data.title_color,
            backgroundColor: node.data.title_background_color,
            borderRadius: "6px",
          }}
        >
          {node.data.title.text}
        </p>
        <p
          sx={{
            position: "absolute",
            bottom: 2,
            right: 2,
            variant: "styles.body",
            fontFamily: "body",
            fontSize: 1,
            py: 1,
            px: 2,
            m: 0,
            color: node.data.date_color,
            backgroundColor: node.data.date_backgroundColor,
            borderRadius: "6px",
            textTransform: "uppercase",
            zIndex: 1,
          }}
        >
          {node.data.date}
        </p>
      </Link>
      {categories && <Categories categories={categories} />}
    </div>
  )
}

export default Card
