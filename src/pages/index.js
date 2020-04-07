/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import IsoTopeGrid from "react-isotope"
import { useState, useEffect } from "react"
import { Transition } from "react-spring/renderprops"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Listing from "../components/TalentListing/Listing"

function Index({ data: { talent, tags } }) {
  const filtersDefault = tags.edges.map(talent => {
    return {
      label: talent.node.data.name,
      isChecked: true,
    }
  })

  const [filters, updateFilters] = useState(filtersDefault)

  const onFilter = event => {
    const {
      target: { value, checked },
    } = event

    updateFilters(state =>
      state.map(f => {
        if (f.label === value) {
          return {
            ...f,
            isChecked: checked,
          }
        }

        return f
      })
    )
  }

  const cardsDefault = talent.nodes.map(talent => {
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
      filter: tags,
    }
  })

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
      <Menu show={showMenu} filters={filters} onFilter={onFilter} />
      <IsoTopeGrid
        gridLayout={cardsDefault}
        noOfCols={4}
        unitWidth={350}
        unitHeight={500}
        filters={filters}
      >
        {cardsDefault.map(card => (
          <Link
            key={card.id}
            sx={{ backgroundColor: "offWhite", p: 3, pb: 3, m: 3 }}
            to={card.link}
          >
            <Img fluid={card.image} />
            <div
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pt: 3,
              }}
            >
              <p sx={{ variant: "styles.mono", fontSize: 1, p: 0, m: 0 }}>
                {card.id}
              </p>
              <p sx={{ fontFamily: "display", fontSize: 2, p: 0, m: 0 }}>
                {card.location}
              </p>
            </div>
          </Link>
        ))}
      </IsoTopeGrid>
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

const Menu = ({ show, filters, onFilter }) => {
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
            {filters.map((f, index) => (
              <div key={index}>
                {console.log(f)}
                <input
                  id={f.label}
                  type="checkbox"
                  value={f.label}
                  onChange={onFilter}
                  checked={f.isChecked}
                />
                <label htmlFor={f.label} sx={{ textTransform: "uppercase" }}>
                  {f.label}
                </label>
              </div>
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
