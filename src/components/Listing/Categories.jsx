/** @jsx jsx */
import { jsx } from "theme-ui"

import { Fragment } from "react"

import { Link } from "gatsby"

import kebabCase from "lodash/kebabCase"

function Categories({ categories }) {
  return (
    <Fragment>
      {categories.map(cat => (
        <Link
          key={cat}
          to={`/categories/${kebabCase(cat)}`}
          sx={{ variant: "styles.category", mr: 2, mb: 2 }}
        >
          {cat}
        </Link>
      ))}
    </Fragment>
  )
}

export default Categories
