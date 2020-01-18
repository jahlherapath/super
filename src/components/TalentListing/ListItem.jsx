/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link } from "gatsby"

import Tags from "./Tags"

function Card({ node, tags }) {
  return (
    <div>
      <Link to={node.uid}>
        <h2
          sx={{
            display: "flex",
            m: 0,
          }}
        >
          {node.data.name.text}
        </h2>
      </Link>
      <p>
        {node.data.bio.text.substring(0, 100)}... &nbsp;
        <Link to={node.uid}>Read More</Link>
      </p>
      {tags && (
        <div sx={{ my: 3 }}>
          <Tags tags={tags} />
        </div>
      )}
    </div>
  )
}

export default Card
