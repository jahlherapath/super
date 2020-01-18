/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link } from "gatsby"

import kebabCase from "lodash/kebabCase"

function Tags({ tags }) {
  return (
    <div sx={{ mb: 4 }}>
      {tags.map((tag, i) => (
        <div
          key={i}
          sx={{
            display: "inline-block",
            backgroundColor: "white",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "primary",
            py: 2,
            px: 4,
            m: 1,
            borderRadius: "20px",
          }}
        >
          <Link to={`/tags/${kebabCase(tag)}`}>{tag}</Link>
        </div>
      ))}
    </div>
  )
}

export default Tags
