/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import PageTransition from "gatsby-plugin-page-transitions"

import { useState, useEffect, useMemo } from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import SideNavigation from "../components/SideNavigation"

import useLocalStorage from "../components/UseLocalStorage"

import Masonry from "react-masonry-css"

function Index({ data: { talent, tags } }) {
  // Fetch Talent
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

  // Fetch Tags
  const tagList = tags.edges.map(talent => talent.node.data.name)

  // Setting Filter
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

  // Responsive Columns
  const responsiveColumns = {
    default: 4,
    1024: 4,
    896: 3,
    640: 2,
  }

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
      <SideNavigation>
        <Link to="/about" sx={{}}>
          About
        </Link>
        <Link to="/blog" sx={{}}>
          Journal
        </Link>
        <Link to="/" sx={{}}>
          Freelancers
        </Link>
        <Link to="/casting" sx={{}}>
          Casting
        </Link>
        <PageTransition
          defaultStyle={{
            transition: "all 600ms ease-in-out",
          }}
          transitionStyles={{
            entering: { flex: 1, backgroundColor: "transparent" },
            entered: { flex: 1, backgroundColor: "transparent" },
            exiting: { flex: 0, backgroundColor: "transparent" },
          }}
          transitionTime={600}
        >
          <Link to="/" sx={{ borderRight: "none !important" }}>
            Talent
          </Link>
        </PageTransition>
      </SideNavigation>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          mb: 5,
        }}
      >
        <Tag
          show={showMenu}
          tagList={tagList}
          activeTags={activeTags}
          setActiveTags={setActiveTags}
          onClick={onClick}
        />
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
    </Layout>
  )
}

export default Index

function Model({ model, isSelected, onChange, index }) {
  return (
    <div
      sx={{
        position: "relative",
        backgroundColor: "red",
        "&:hover > #talent-checkbox": {
          display: "flex",
          transition: "all 200ms ease",
        },
      }}
    >
      <div
        id="talent-checkbox"
        sx={{
          position: "absolute",
          top: 4,
          right: 4,
          m: 1,
          display: "none",
          alignItems: "center",
          justifyContent: "center",
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          backgroundColor: "white",
          zIndex: 15,
          transition: "all 200ms ease",
        }}
      >
        <input
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            opacity: 0,
            width: "100%",
            height: "100%",
            p: 0,
            m: 0,
            cursor: "pointer",
            zIndex: 3,
            transition: "all 200ms ease",
          }}
          type="checkbox"
          value={isSelected || ""}
          checked={isSelected ? isSelected : ""}
          onChange={() => onChange(model)}
        />
        <div
          sx={{
            display: "flex",
            alignItems: "center",
            width: "20px",
            cursor: "pointer",
            transition: "all 200ms ease",
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.17229 11.2279L8.00004 11.1239L7.8278 11.2279L4.38413 13.3063L5.29799 9.38898L5.3437 9.19305L5.19163 9.06131L2.14876 6.42527L6.15489 6.08539L6.35517 6.0684L6.43361 5.88333L8.00004 2.18745L9.56647 5.88333L9.64491 6.0684L9.8452 6.08539L13.8513 6.42527L10.8085 9.06131L10.6564 9.19305L10.7021 9.38898L11.616 13.3063L8.17229 11.2279Z"
              stroke="black"
              strokeWidth="1"
              sx={{
                stroke: "black",
                fill: isSelected ? "black" : "transparent",
              }}
            />
          </svg>
        </div>
      </div>
      <Link
        to={model.link}
        key={index}
        sx={{
          position: "relative",
          display: "block",
          backgroundColor: "offWhite",
          px: 3,
          pt: 3,
          pb: 3,
          mb: [4, 4, 5],
        }}
      >
        <Img fluid={model.image} />
        <div
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pt: 3,
          }}
        >
          <p sx={{ variant: "styles.mono", fontSize: 1, p: 0, m: 0 }}>
            {model.name}
          </p>
          <p sx={{ variant: "styles.mono", fontSize: 1, p: 0, m: 0 }}>
            {model.location}
          </p>
        </div>
      </Link>
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

const Tag = ({ show, tagList, activeTags, onClick }) => {
  return (
    <div>
      {tagList.map((tag, i) => (
        <button
          key={i}
          sx={{
            variant: "styles.tagButton",
            color: activeTags.includes(tag) ? "white" : null,
            backgroundColor: activeTags.includes(tag) ? "black" : null,
            border: activeTags.includes(tag) ? "1px solid black" : null,
          }}
          onClick={() => onClick(tag)}
        >
          {tag}
          <span
            sx={{
              display: activeTags.includes(tag) ? "flex" : "none",
              alignItems: "center",
              mt: "-2px",
              pl: 2,
            }}
          >
            ×
          </span>
        </button>
      ))}
    </div>
  )
}
