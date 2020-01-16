/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link } from "gatsby"

import Categories from "./Categories"

function Card({ node, categories }) {
  return (
    <div>
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
    </div>
  )
}

export default Card
