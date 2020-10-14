/** @jsx jsx */
import { jsx } from "theme-ui"

import { Fragment } from "react"

import { Link } from "gatsby"

import ListItem from "./ListItem"

export default ({
  talent,
  pageInfo: { currentPage = 0, numPages = 0, prefix = "/" } = {},
}) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <Fragment>
      {talent.map(post => {
        let tags = false
        if (post.data.tags[0].tag) {
          tags = post.data.tags.map(t => t.tag.document[0].data.name)
        }
        return <ListItem key={post.uid} node={post} tags={tags} />
      })}
      {!!Number(numPages) && (
        <div
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {!isFirst ? (
            <Link to={`/${prefix + prevPage}`} rel="prev">
              ← Prev
            </Link>
          ) : (
            <div />
          )}
          <ul
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              listStyle: "none",
              m: 0,
              p: 0,
            }}
          >
            {Array.from({ length: numPages }, (_, i) => (
              <li
                key={`pagination-number${i + 1}`}
                sx={{
                  m: 0,
                  variant: "styles.serif",
                }}
              >
                <Link
                  to={`/${prefix}${i === 0 ? "" : i + 1}`}
                  sx={{
                    p: 3,
                    m: 0,
                    textDecoration: "none",
                    color: i + 1 === currentPage ? "white" : "",
                    backgroundColor: i + 1 === currentPage ? "primary" : "",
                  }}
                >
                  {i + 1}
                </Link>
              </li>
            ))}
          </ul>
          {!isLast ? (
            <Link to={`/${prefix + nextPage}`} rel="next">
              Next →
            </Link>
          ) : (
            <div />
          )}
        </div>
      )}
    </Fragment>
  )
}
