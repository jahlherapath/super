/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link } from "gatsby"

import kebabCase from "lodash/kebabCase"

function Categories({ categories }) {
  return (
    <div sx={{ display: "flex", flexWrap: "wrap", mb: 4 }}>
      {categories.map(cat => (
        <Link
          key={cat}
          to={`/categories/${kebabCase(cat)}`}
          sx={{ variant: "styles.button", mr: 2, mb: 2 }}
        >
          {cat}
        </Link>
      ))}
    </div>
  )
}

export default Categories
