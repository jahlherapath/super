/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link } from "gatsby"

import Img from "gatsby-image"

import Categories from "./Categories"

function Card({ node, categories }) {
  const item = node.data.body
  return (
    <div sx={{ p: 4 }}>
      <Link to={node.uid}>
        <h2
          sx={{
            display: "flex",
            color: "black",
            m: 0,
          }}
        >
          {node.data.title.text}
        </h2>
      </Link>
      <p>
        {node.data.content.text}.. <Link to={node.uid}>Read More</Link>
      </p>
      {categories && (
        <div sx={{ my: 3 }}>
          <Categories categories={categories} />
        </div>
      )}
      {item.map((images, index) => {
        return (
          <div key={index}>
            {images.items.map((item, index) => (
              <div sx={{ width: "60%" }} key={index}>
                <Img fluid={item.image.localFile.childImageSharp.fluid} />
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}

export default Card
