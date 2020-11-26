/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link } from "gatsby"
import Img from "gatsby-image"

import Categories from "./Categories"

function Card({ node, categories }) {
  return (
    <div
      sx={{
        gridColumn: ["span 6", "span 3", "span 2"],
        mb: 5,
        textAlign: "center",
      }}
    >
      <Link to={`/${node.uid}`}>
        {node.data.thumbnail && (
          <Img
            fluid={node.data.thumbnail.localFile.childImageSharp.fluid}
            sx={{ mb: 3 }}
          />
        )}
        <h2
          sx={{
            fontFamily: "display",
            fontStyle: "italic",
            fontWeight: "medium",
            fontSize: "32px !important",
            mb: 2,
          }}
        >
          {node.data.title.text}
        </h2>
        <p sx={{ variant: "styles.date", mb: 4 }}>{node.data.date}</p>
      </Link>
      {categories && <Categories categories={categories} />}
    </div>
  )
}

export default Card
