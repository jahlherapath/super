/** @jsx jsx */
import { jsx } from "theme-ui"

import { Fragment } from "react"

import { Link } from "gatsby"
import Img from "gatsby-image"

import kebabCase from "lodash/kebabCase"

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
    <Fragment>
      {isFirst && (
        <div
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridColumnGap: 5,
          }}
        >
          <div
            sx={{
              gridColumn: ["span 2", "span 2", "span 1"],
              mb: 5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              order: [2, 2, 0],
            }}
          >
            <Link to={`/${posts[0].uid}`}>
              <h2
                sx={{
                  fontFamily: "display",
                  fontStyle: "italic",
                  fontWeight: "medium",
                  mb: 0,
                  textAlign: ["center", "center", "left"],
                  fontSize: 12,
                }}
              >
                {posts[0].data.title.text}
              </h2>
            </Link>
            <div
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: ["column", "column", "row"],
              }}
            >
              <p sx={{ variant: "styles.date", mb: 0 }}>{posts[0].data.date}</p>
              <div sx={{ mt: [4, 4, "-6px"] }}>
                {posts[0].data.categories.map(cat => {
                  return (
                    <Link
                      to={`/categories/${kebabCase(
                        cat.category.document[0].data.name
                      )}`}
                      sx={{
                        variant: "styles.category",
                        mr: 2,
                        mb: 2,
                      }}
                    >
                      {cat.category.document[0].data.name}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
          <Link
            to={`/${posts[0].uid}`}
            sx={{
              gridColumn: ["span 2", "span 2", "span 1"],
              mb: 4,
              textAlign: "center",
            }}
          >
            {posts[0].data.thumbnail && (
              <Img
                fluid={posts[0].data.thumbnail.localFile.childImageSharp.fluid}
                sx={{ mb: 3 }}
              />
            )}
          </Link>
        </div>
      )}
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gridColumnGap: 5,
        }}
      >
        {posts
          .map(post => {
            let categories = false
            if (post.data.categories[0].category) {
              categories = post.data.categories.map(
                c => c.category.document[0].data.name
              )
            }
            return (
              <ListItem key={post.uid} node={post} categories={categories} />
            )
          })
          .slice(1)}
        {!!Number(numPages) && (
          <div
            sx={{
              position: "relative",
              gridColumn: "span 6",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 4,
              border: "1px solid #dcdcdc",
              height: "35px",
            }}
          >
            {!isFirst ? (
              <Link
                to={prefix + prevPage}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  zIndex: 20,
                  borderRight: "1px solid #dcdcdc",
                  height: "100%",
                  px: 3,
                }}
                rel="prev"
              >
                <ArrowLeft />
              </Link>
            ) : (
              <div />
            )}
            <ul
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                listStyle: "none",
                m: 0,
                p: 0,
                width: "100%",
              }}
            >
              {Array.from({ length: numPages }, (_, i) => (
                <li
                  key={`pagination-number${i + 1}`}
                  sx={{
                    m: 0,
                    flex: 1,
                    textAlign: "center",
                    borderLeft: "1px solid #dcdcdc",
                    "&:first-of-type": {
                      borderLeft: "none",
                    },
                    "&:last-of-type": {
                      borderRight: "none",
                    },
                  }}
                >
                  <Link
                    to={`${prefix}${i === 0 ? "" : +(i + 1)}`}
                    sx={{
                      p: 0,
                      m: 0,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "35px",
                      px: 4,
                      fontFamily: "body",
                      color: i + 1 === currentPage ? "black" : "#dcdcdc",
                    }}
                  >
                    {i + 1}
                  </Link>
                </li>
              ))}
            </ul>
            {!isLast ? (
              <Link
                to={prefix + nextPage}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  zIndex: 20,
                  borderLeft: "1px solid #dcdcdc",
                  height: "100%",
                  px: 3,
                }}
                rel="next"
              >
                <ArrowRight />
              </Link>
            ) : (
              <div />
            )}
          </div>
        )}
      </div>
    </Fragment>
  )
}

const ArrowLeft = () => {
  return (
    <svg
      width="15"
      height="10"
      viewBox="0 0 15 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-1.14441e-05 5.00005L15 9.33018L15 0.669922L-1.14441e-05 5.00005Z"
        fill="black"
      />
    </svg>
  )
}

const ArrowRight = () => {
  return (
    <svg
      width="15"
      height="10"
      viewBox="0 0 15 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0005 5.00005L0.000488385 9.33018L0.000488281 0.669922L15.0005 5.00005Z"
        fill="black"
      />
    </svg>
  )
}
