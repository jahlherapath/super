/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import { useState, useEffect, useMemo } from "react"
import { Spring, animated } from "react-spring/renderprops"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import Masonry from "react-masonry-css"

import useLocalStorage from "../components/UseLocalStorage"

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
      id: talent.id,
      name: talent.data.name.text,
      location: talent.data.location.text,
      image: talent.data.thumbnail.localFile.childImageSharp.fluid,
      link: talent.uid,
      tags: tags,
    }
  })

  // Fetch tags

  const tagList = tags.edges.map(talent => talent.node.data.name)

  // Setting filter
  const [activeTags, setActiveTags] = useState([])

  const filteredTalent = useMemo(() => {
    if (activeTags.length === 0) return talentList
    return talentList.filter(talent =>
      talent.tags.some(talent => activeTags.includes(talent))
    )
  }, [activeTags])

  const onClick = tag => {
    setActiveTags(tags => {
      if (tags.includes(tag)) {
        return tags.filter(t => t !== tag)
      } else {
        return [...tags, tag]
      }
    })
  }

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

  const [selectedModels, setSelectedModels] = useLocalStorage(
    "selectedModels",
    []
  )

  const onChange = model => {
    setSelectedModels(selectedModels => {
      if (
        Array.isArray(selectedModels) &&
        selectedModels.find(i => i.id === model.id)
      ) {
        return selectedModels.filter(i => i.id !== model.id)
      } else {
        return [...selectedModels, model]
      }
    })
  }

  return (
    <Layout graphicPosition="2">
      <SEO title="Talent" />
      <div
        sx={{
          variant: "styles.button",
          position: "fixed",
          left: [4, 4, 5],
          right: [4, "auto", "auto"],
          bottom: [4, 4, 5],
          zIndex: 10,
          width: ["auto", "auo", "220px"],
          backgroundColor: "white",
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
        {filteredTalent.map(model => (
          <Model
            key={model.id}
            model={model}
            isSelected={
              Array.isArray(selectedModels) &&
              selectedModels.find(i => i.id === model.id)
            }
            onChange={onChange}
          />
        ))}
      </Masonry>
      <Menu
        show={showMenu}
        tagList={tagList}
        activeTags={activeTags}
        setActiveTags={setActiveTags}
        onClick={onClick}
      />
    </Layout>
  )
}

export default Index

function Model({ model, isSelected, onChange, index }) {
  return (
    <div
      key={index}
      sx={{
        position: "relative",
        display: "block",
        backgroundColor: isSelected ? "offWhite" : "offWhite",
        border: "1px solid",
        borderColor: isSelected ? "black" : "transparent",
        px: 3,
        pt: 3,
        pb: 3,
        mb: [4, 4, 5],
      }}
    >
      <div
        sx={{
          position: "absolute",
          top: 4,
          right: 4,
          textAlign: "right",
          p: 2,
          zIndex: 1,
        }}
      >
        <input
          type="checkbox"
          value={isSelected || ""}
          checked={isSelected ? isSelected : ""}
          onChange={() => onChange(model)}
        />
      </div>
      <Img fluid={model.image} />
      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pt: 3,
        }}
      >
        <Link
          to={`/${model.link}`}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <p sx={{ variant: "styles.mono", fontSize: 1, p: 0, m: 0 }}>
            {model.name}
          </p>
          <p sx={{ fontFamily: "display", fontSize: 3, p: 0, m: 0 }}>
            {model.location}
          </p>
        </Link>
      </div>
    </div>
  )
}

export const indexQuery = graphql`
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
    tags: allPrismicTag(limit: 4, sort: { fields: id }) {
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

const Menu = ({ show, tagList, activeTags, onClick }) => {
  return (
    <div
      sx={{
        bottom: ["55px", "55px", "85px"],
        width: ["auto", "220px", "220px"],
        zIndex: 9,
        position: "fixed",
        left: [4, 4, 5],
        right: [4, 4, "auto"],
        margin: "0 auto",
        overflow: "hidden",
        display: show ? "block" : "none",
        borderBottom: "1px solid black",
      }}
    >
      <Spring
        native
        to={{
          height: show ? "100%" : "0%",
          marginBottom: show ? "0%" : "-100%",
          display: show ? "block" : "none",
        }}
      >
        {props => (
          <animated.div
            style={props}
            sx={{
              display: show ? "block" : "none",
              border: "1px solid black",
              borderBottom: "none",
              overflow: "hidden",
              backgroundColor: "white",
            }}
          >
            {tagList.map((tag, i) => (
              <button
                key={i}
                sx={{
                  variant: "styles.button",
                  backgroundColor: activeTags.includes(tag)
                    ? "rgba(0,0,0,0.1)"
                    : null,
                  border: "none",
                  borderRadius: "0px !important",
                  width: "100%",
                }}
                onClick={() => onClick(tag)}
              >
                {tag}
              </button>
            ))}
          </animated.div>
        )}
      </Spring>
    </div>
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
