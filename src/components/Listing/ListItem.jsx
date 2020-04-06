/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link } from "gatsby"

import Categories from "./Categories"

function Card({ node, categories }) {
  return (
    <div sx={{ gridColumn: "span 2", mb: 4 }}>
      <Link to={node.uid}>
        <h2 sx={{ variant: "styles.display", mb: 3 }}>
          {node.data.title.text}
        </h2>
        <p sx={{ variant: "styles.date" }}>{node.data.date}</p>
      </Link>
      <p sx={{ variant: "styles.html" }}>
        {node.data.content.text.substring(0, 300)}... &nbsp;
        <Link to={node.uid}>Read More</Link>
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
