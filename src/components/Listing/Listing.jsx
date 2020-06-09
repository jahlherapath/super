/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link } from "gatsby"

import ListItem from "./ListItem"

export default ({
  posts,
  pageInfo: { currentPage = 0, numPages = 0, prefix = "/" } = {},
}) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <div sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
      {posts.map(post => {
        let categories = false
        if (post.data.categories[0].category) {
          categories = post.data.categories.map(
            c => c.category.document[0].data.name
          )
        }
        return <ListItem key={post.uid} node={post} categories={categories} />
      })}
      {!!Number(numPages) && (
        <div
          sx={{
            position: "relative",
            gridColumn: "span 2",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {!isFirst ? (
            <Link
              to={`/${prefix + prevPage}`}
              sx={{
                variant: "styles.mono",
                display: "flex",
                alignItems: "center",
                zIndex: 20,
              }}
              rel="prev"
            >
              <ArrowLeft /> Prev Page
            </Link>
          ) : (
            <div />
          )}
          <ul
            sx={{
              position: "absolute",
              left: 0,
              right: 0,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              listStyle: "none",
              m: 0,
              p: 0,
              variant: "styles.mono",
            }}
          >
            {Array.from({ length: numPages }, (_, i) => (
              <li
                key={`pagination-number${i + 1}`}
                sx={{
                  m: 0,
                }}
              >
                <Link
                  to={`/${prefix}${i === 0 ? "" : i + 1}`}
                  sx={{
                    p: 0,
                    m: 0,
                    textDecoration: "none",
                    border: "1px solid",
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "35px",
                    height: "35px",
                    borderColor:
                      i + 1 === currentPage ? "black" : "transparent",
                  }}
                >
                  {i + 1}
                </Link>
              </li>
            ))}
          </ul>
          {!isLast ? (
            <Link
              to={`/${prefix + nextPage}`}
              sx={{
                variant: "styles.mono",
                display: "flex",
                alignItems: "center",
                zIndex: 20,
              }}
              rel="next"
            >
              Next Page
              <ArrowRight />
            </Link>
          ) : (
            <div />
          )}
        </div>
      )}
    </div>
  )
}

const ArrowLeft = () => {
  return (
    <svg
      width="40"
      height="25"
      viewBox="0 0 40 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ mt: "-2px", mr: 3 }}
    >
      <rect width="40" height="25" />
      <path
        d="M36 12.5H5"
        strokeWidth="1.608"
        strokeMiterlimit="10"
        sx={{ stroke: "black" }}
      />
      <path
        d="M10 17.5L5 12.5L10 7.5"
        strokeWidth="1.608"
        strokeMiterlimit="10"
        sx={{ stroke: "black" }}
      />
    </svg>
  )
}

const ArrowRight = () => {
  return (
    <svg
      width="40"
      height="25"
      viewBox="0 0 40 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ mt: "-2px", ml: 3 }}
    >
      <rect width="40" height="25" />
      <path
        d="M5 12.5H36"
        strokeWidth="1.608"
        strokeMiterlimit="10"
        sx={{ stroke: "black" }}
      />
      <path
        d="M31 17.5L36 12.5L31 7.5"
        strokeWidth="1.608"
        strokeMiterlimit="10"
        sx={{ stroke: "black" }}
      />
    </svg>
  )
}
