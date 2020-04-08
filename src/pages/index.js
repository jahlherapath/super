/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import { useState, useEffect, useMemo } from "react"
import { Transition } from "react-spring/renderprops"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import Masonry from "react-masonry-css"

function Index({ data: { talent, tags } }) {
  // Fetch talent
  const talentList = talent.nodes.map(talent => {
    const tags = talent.data.tags
      .map(
        tag =>
          tag &&
          tag.tag &&
          tag.tag.document &&
          tag.tag.document[0] &&
          tag.tag.document[0].data.name
      )
      .filter(Boolean)
    return {
      id: talent.data.name.text,
      location: talent.data.location.text,
      image: talent.data.thumbnail.localFile.childImageSharp.fluid,
      link: talent.uid,
      tags: tags,
    }
  })

  // Setting filter
  const [activeTag, setActiveTag] = useState()

  const filteredTalent = useMemo(() => {
    if (activeTag === undefined) return talentList
    return talentList.filter(talent => talent.tags.indexOf(activeTag) >= 0)
  }, [activeTag])

  // Responsive columns
  const responsiveColumns = {
    default: 4,
    1024: 4,
    896: 3,
    640: 2,
  }

  // Filter menu
  const [showMenu, setShowMenu] = useState()

  const handler = () => setShowMenu(false)

  useEffect(() => {
    window.addEventListener("scroll", handler)
    window.addEventListener("resize", handler)

    return () => {
      window.removeEventListener("scroll", handler)
      window.removeEventListener("resize", handler)
    }
  }, [])

  return (
    <Layout>
      <SEO title="Talent" />
      <div
        sx={{
          position: "fixed",
          left: 5,
          bottom: 5,
          zIndex: 10,
          width: "220px",
          variant: "styles.button",
        }}
        role="button"
        tabIndex="0"
        onClick={() => setShowMenu(x => !x)}
      >
        Filter <Arrow show={showMenu} />
      </div>
      <Masonry
        breakpointCols={responsiveColumns}
        className="grid"
        columnClassName="column"
      >
        {filteredTalent.map((talent, index) => (
          <Link
            key={index}
            sx={{
              display: "block",
              backgroundColor: "offWhite",
              p: 3,
              pb: 3,
              mb: 5,
            }}
            to={`/${talent.link}`}
          >
            <Img fluid={talent.image} />
            <div
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pt: 3,
              }}
            >
              <p sx={{ variant: "styles.mono", fontSize: 1, p: 0, m: 0 }}>
                {talent.id}
              </p>
              <p sx={{ fontFamily: "display", fontSize: 3, p: 0, m: 0 }}>
                {talent.location}
              </p>
            </div>
          </Link>
        ))}
      </Masonry>
      <Menu show={showMenu} tags={tags} setActiveTag={setActiveTag} />
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    talent: allPrismicTalent(
      sort: { fields: [data___name___text], order: DESC }
    ) {
      nodes {
        uid
        id
        data {
          name {
            text
          }
          location {
            text
          }
          availability {
            text
          }
          contact {
            text
          }
          bio {
            html
            text
          }
          thumbnail {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 70) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          links {
            title {
              text
            }
            url {
              url
            }
          }
          tags {
            tag {
              document {
                data {
                  name
                }
              }
            }
          }
        }
      }
    }
    tags: allPrismicTag(sort: { fields: [data___name], order: ASC }) {
      edges {
        node {
          data {
            name
          }
        }
      }
    }
  }
`

const Menu = ({ show, tags, setActiveTag }) => {
  return (
    <Transition
      items={show}
      config={{ duration: 150 }}
      from={{ height: "0px" }}
      enter={{ height: "200px" }}
      leave={{ height: "0px" }}
    >
      {show =>
        show &&
        (props => (
          <div
            style={{
              ...props,
            }}
            sx={{
              bottom: "85px",
              width: ["auto", "220px", "220px"],
              borderColor: "black",
              border: "1px solid",
              zIndex: 9,
              overflow: "hidden",
              position: "fixed",
              left: 5,
              margin: "0 auto",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            {tags.edges.map((tag, index) => (
              <button
                key={index}
                onClick={() => setActiveTag(tag.node.data.name)}
                sx={{
                  variant: "styles.button",
                  border: "none",
                  borderRadius: "0px !important",
                }}
              >
                {tag.node.data.name}
              </button>
            ))}
          </div>
        ))
      }
    </Transition>
  )
}

const Arrow = ({ show }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ transform: show ? "rotate(-90deg)" : "rotate(90deg)", ml: 3 }}
    >
      <rect width="32" height="32" />
      <path
        d="M6 15.9L25.2 15.9"
        strokeWidth="1.608"
        strokeMiterlimit="10"
        sx={{ stroke: "black" }}
      />
      <path
        d="M17.1 7.8L25.2 15.9L17.1 24"
        strokeWidth="1.608"
        strokeMiterlimit="10"
        sx={{ stroke: "black" }}
      />
    </svg>
  )
}
