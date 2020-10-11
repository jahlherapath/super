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
                  variant: "styles.display",
                  mb: 0,
                  textAlign: ["center", "center", "left"],
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
              <div sx={{ mt: "-6px" }}>
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
            }}
          >
            {!isFirst ? (
              <Link
                to={`/${prefix + prevPage}`}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  zIndex: 20,
                  "&:hover > svg": {
                    transform: " translateX(-5px)",
                    transition: "all 200ms ease",
                  },
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
                  display: "flex",
                  alignItems: "center",
                  zIndex: 20,
                  "&:hover > svg": {
                    transform: " translateX(5px)",
                    transition: "all 200ms ease",
                  },
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
    </Fragment>
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
