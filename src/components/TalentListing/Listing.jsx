/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link } from "gatsby"

import ListItem from "./ListItem"

import Masonry from "react-masonry-css"

import { Fragment } from "react"

export default ({
  talent,
  pageInfo: { currentPage = 0, numPages = 0, prefix = "/" } = {},
}) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  const breakpointCols = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  }

  return (
    <Fragment>
      <Masonry
        breakpointCols={breakpointCols}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {talent.map(post => {
          let tags = false
          if (post.data.tags[0].tag) {
            tags = post.data.tags.map(t => t.tag.document[0].data.name)
          }
          return <ListItem key={post.uid} node={post} tags={tags} />
        })}
      </Masonry>
      <Filter />
      <Next />
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
            <Link to={prefix + prevPage} rel="prev">
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
                }}
              >
                <Link
                  to={`${prefix}${i === 0 ? "" : i + 1}`}
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
            <Link to={prefix + nextPage} rel="next">
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

const Filter = () => {
  return (
    <div
      sx={{
        position: "fixed",
        bottom: 8,
        left: 4,
        width: "20%",
        zIndex: 2,
        textAlign: "center",
      }}
    >
      <div
        sx={{
          variant: "styles.filterLink",
        }}
      >
        <div>
          <a
            sx={{
              variant: "styles.mono",
              display: "flex",
              alignItems: "center",
            }}
          >
            Filter
            <div sx={{ width: "20px", ml: 2, mt: "3px" }}>
              <svg
                width="9"
                height="11"
                viewBox="0 0 9 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4"
                  y="10"
                  width="1"
                  height="1"
                  sx={{ fill: "black" }}
                />
                <rect x="3" y="9" width="1" height="1" sx={{ fill: "black" }} />
                <rect x="2" y="8" width="1" height="1" sx={{ fill: "black" }} />
                <rect x="1" y="7" width="1" height="1" sx={{ fill: "black" }} />
                <rect y="6" width="1" height="1" sx={{ fill: "black" }} />
                <rect x="5" y="9" width="1" height="1" sx={{ fill: "black" }} />
                <rect x="6" y="8" width="1" height="1" sx={{ fill: "black" }} />
                <rect x="7" y="7" width="1" height="1" sx={{ fill: "black" }} />
                <rect x="8" y="6" width="1" height="1" sx={{ fill: "black" }} />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 -4.37113e-08L5 10L4 10L4 0L5 -4.37113e-08Z"
                  sx={{ fill: "black" }}
                />
              </svg>
            </div>
          </a>
          <a
            sx={{
              variant: "styles.mono",
              display: "flex",
              alignItems: "center",
              color: "black",
            }}
          >
            Filter
            <div sx={{ width: "20px", ml: 2, mt: "3px" }}>
              <svg
                width="9"
                height="11"
                viewBox="0 0 9 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4"
                  y="10"
                  width="1"
                  height="1"
                  sx={{ fill: "green" }}
                />
                <rect x="3" y="9" width="1" height="1" sx={{ fill: "green" }} />
                <rect x="2" y="8" width="1" height="1" sx={{ fill: "green" }} />
                <rect x="1" y="7" width="1" height="1" sx={{ fill: "green" }} />
                <rect y="6" width="1" height="1" sx={{ fill: "green" }} />
                <rect x="5" y="9" width="1" height="1" sx={{ fill: "green" }} />
                <rect x="6" y="8" width="1" height="1" sx={{ fill: "green" }} />
                <rect x="7" y="7" width="1" height="1" sx={{ fill: "green" }} />
                <rect x="8" y="6" width="1" height="1" sx={{ fill: "green" }} />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 -4.37113e-08L5 10L4 10L4 0L5 -4.37113e-08Z"
                  sx={{ fill: "green" }}
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

const Next = () => {
  return (
    <div
      sx={{
        position: "fixed",
        bottom: 8,
        right: 4,
        width: "20%",
        zIndex: 2,
        textAlign: "center",
      }}
    >
      <div
        sx={{
          variant: "styles.filterLink",
        }}
      >
        <div>
          <a
            sx={{
              variant: "styles.mono",
              display: "flex",
              alignItems: "center",
            }}
          >
            Next
            <div sx={{ width: "20px", ml: 2, mt: "3px" }}>
              <svg
                width="11"
                height="9"
                viewBox="0 0 11 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="10"
                  y="5"
                  width="1"
                  height="1"
                  transform="rotate(-90 10 5)"
                  sx={{ fill: "black" }}
                />
                <rect
                  x="9"
                  y="6"
                  width="1"
                  height="1"
                  transform="rotate(-90 9 6)"
                  sx={{ fill: "black" }}
                />
                <rect
                  x="8"
                  y="7"
                  width="1"
                  height="1"
                  transform="rotate(-90 8 7)"
                  sx={{ fill: "black" }}
                />
                <rect
                  x="7"
                  y="8"
                  width="1"
                  height="1"
                  transform="rotate(-90 7 8)"
                  sx={{ fill: "black" }}
                />
                <rect
                  x="6"
                  y="9"
                  width="1"
                  height="1"
                  transform="rotate(-90 6 9)"
                  sx={{ fill: "black" }}
                />
                <rect
                  x="9"
                  y="4"
                  width="1"
                  height="1"
                  transform="rotate(-90 9 4)"
                  sx={{ fill: "black" }}
                />
                <rect
                  x="8"
                  y="3"
                  width="1"
                  height="1"
                  transform="rotate(-90 8 3)"
                  sx={{ fill: "black" }}
                />
                <rect
                  x="7"
                  y="2"
                  width="1"
                  height="1"
                  transform="rotate(-90 7 2)"
                  sx={{ fill: "black" }}
                />
                <rect
                  x="6"
                  y="1"
                  width="1"
                  height="1"
                  transform="rotate(-90 6 1)"
                  sx={{ fill: "black" }}
                />
                <line
                  x1="10"
                  y1="4.5"
                  x2="4.37114e-08"
                  y2="4.5"
                  sx={{ stroke: "black" }}
                />
              </svg>
            </div>
          </a>
          <a
            sx={{
              variant: "styles.mono",
              display: "flex",
              alignItems: "center",
              color: "black",
            }}
          >
            Next
            <div sx={{ ml: 2, mt: "3px" }}>
              <svg
                width="11"
                height="9"
                viewBox="0 0 11 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="10"
                  y="5"
                  width="1"
                  height="1"
                  transform="rotate(-90 10 5)"
                  sx={{ fill: "green" }}
                />
                <rect
                  x="9"
                  y="6"
                  width="1"
                  height="1"
                  transform="rotate(-90 9 6)"
                  sx={{ fill: "green" }}
                />
                <rect
                  x="8"
                  y="7"
                  width="1"
                  height="1"
                  transform="rotate(-90 8 7)"
                  sx={{ fill: "green" }}
                />
                <rect
                  x="7"
                  y="8"
                  width="1"
                  height="1"
                  transform="rotate(-90 7 8)"
                  sx={{ fill: "green" }}
                />
                <rect
                  x="6"
                  y="9"
                  width="1"
                  height="1"
                  transform="rotate(-90 6 9)"
                  sx={{ fill: "green" }}
                />
                <rect
                  x="9"
                  y="4"
                  width="1"
                  height="1"
                  transform="rotate(-90 9 4)"
                  sx={{ fill: "green" }}
                />
                <rect
                  x="8"
                  y="3"
                  width="1"
                  height="1"
                  transform="rotate(-90 8 3)"
                  sx={{ fill: "green" }}
                />
                <rect
                  x="7"
                  y="2"
                  width="1"
                  height="1"
                  transform="rotate(-90 7 2)"
                  sx={{ fill: "green" }}
                />
                <rect
                  x="6"
                  y="1"
                  width="1"
                  height="1"
                  transform="rotate(-90 6 1)"
                  sx={{ fill: "green" }}
                />
                <line
                  x1="10"
                  y1="4.5"
                  x2="4.37114e-08"
                  y2="4.5"
                  sx={{ stroke: "green" }}
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
