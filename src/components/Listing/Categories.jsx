/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link } from "gatsby"

import kebabCase from "lodash/kebabCase"

function Categories({ categories }) {
  return (
    <div sx={{ mb: 4 }}>
      {categories.map((cat, i) => (
        <div
          key={cat}
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
          <Link to={`/categories/${kebabCase(cat)}`}>{cat}</Link>
        </div>
      ))}
    </div>
  )
}

export default Categories
