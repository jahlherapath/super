/** @jsx jsx */
import { jsx } from "theme-ui"

import { Fragment, useState } from "react"

import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import SideNavigationLeft from "../components/SideNavigationLeft"
import SideNavigationRight from "../components/SideNavigationRight"

import BookingForm from "../components/Book"
import CastingForm from "../components/Casting"
import JoinForm from "../components/Join"

import { motion, AnimatePresence } from "framer-motion"

const MotionLink = motion.custom(Link)

export default function Casting({ data: { casting, form } }) {
  const [expanded, setExpanded] = useState(0)

  const bookText = form.nodes[0].data.booking.html
  const castingext = form.nodes[0].data.casting.html
  const joinText = form.nodes[0].data.join.html
  const informationText = form.nodes[0].data.information.html

  const content = [
    {
      label: "Book Talent",
      intro: bookText,
      content: <BookingForm />,
    },
    {
      label: "Casting",
      intro: castingext,
      content: <CastingForm />,
    },
    {
      label: "Join Super",
      intro: joinText,
      content: <JoinForm />,
    },
    {
      label: "More Info",
      intro: informationText,
      content: "",
    },
  ]

  return (
    <Layout>
      <SEO title="Casting" />
      <SideNavigationLeft>
        <Link to="/about" activeClassName="active" sx={{}}>
          <span>About</span>
        </Link>
        <Link to="/blog" activeClassName="active" sx={{}}>
          <span>Journal</span>
        </Link>
        <MotionLink
          to="/casting"
          activeClassName="active"
          animate={{ backgroundPosition: "left bottom", color: "black" }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.2,
          }}
          sx={{}}
        >
          <span>Casting</span>
        </MotionLink>
        <Link to="/" activeClassName="active">
          <span>Talent</span>
        </Link>
      </SideNavigationLeft>
      <SideNavigationRight>
        <a
          sx={{
            fontFamily: "body",
            fontSize: [1, 1, 2],
            textTransform: "uppercase",
          }}
          href={"mailto:" + casting.data.email.text}
        >
          Email Super
        </a>
      </SideNavigationRight>
      <div
        sx={{
          display: "flex",
          flexDirection: ["column", "column", "row"],
          position: "relative",
        }}
      >
        {content.map((content, index) => (
          <Accordion
            key={index}
            activeTab={index}
            expanded={expanded}
            setExpanded={setExpanded}
            label={content.label}
            intro={content.intro}
            content={content.content}
          ></Accordion>
        ))}
      </div>
    </Layout>
  )
}

const Accordion = ({
  activeTab,
  label,
  intro,
  content,
  expanded,
  setExpanded,
}) => {
  const isOpen = activeTab === expanded

  return (
    <Fragment>
      <motion.div
        onClick={() => setExpanded(isOpen ? false : activeTab)}
        sx={{
          display: ["flex", "flex", "block"],
          alignItems: ["center", "center", "flex-start"],
          justifyContent: ["space-between", "space-between", "flex-start"],
          flexDirection: ["row-reverse", "row-reverse", "flex-start"],
          minHeight: ["auto", "100%", "100vh"],
          borderLeft: ["none", "none", "1px solid black"],
          borderBottom: ["1px solid black", "1px solid black", "none"],
          py: 4,
          px: 3,
          cursor: "pointer",
          "&:first-of-type": {
            borderLeft: "none",
          },
          "&:last-of-type": {
            borderBottom: "none",
          },
        }}
      >
        <motion.span
          initial={false}
          animate={{ backgroundColor: isOpen ? "black" : "white" }}
          sx={{
            display: "block",
            width: 18,
            height: 18,
            backgroundColor: isOpen ? "black" : "white",
            borderRadius: "50%",
            border: "1px solid black",
            mb: [0, 0, 4],
          }}
        ></motion.span>
        <span
          sx={{
            fontFamily: "body",
            fontSize: [2, 2, 3],
            writingMode: ["auto", "auto", "vertical-lr"],
            textOrientation: "mixed",
            transform: ["rotate(0deg)", "rotate(0deg)", "rotate(-180deg)"],
          }}
        >
          {label}
        </span>
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { width: "100%", opacity: 1, flex: 1, zIndex: 1 },
              collapsed: { width: "auto", opacity: 0, flex: 0, zIndex: 0 },
            }}
            transition={{
              duration: 0.8,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
            sx={{ position: "relative", overflow: "hidden" }}
          >
            <motion.div
              sx={{
                position: ["relative", "relative", "absolute"],
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                p: 4,
                variant: "styles.html",
                fontWeight: "regular",
              }}
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { display: "block" },
                collapsed: { display: "none" },
              }}
            >
              {intro && (
                <div
                  sx={{ mb: 3 }}
                  dangerouslySetInnerHTML={{
                    __html: intro,
                  }}
                />
              )}
              {content}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  )
}

export const castingQuery = graphql`
  query CastingQuery {
    casting: prismicInfo {
      data {
        casting {
          html
        }
        email {
          text
        }
      }
    }
    form: allPrismicCasting {
      nodes {
        data {
          booking {
            text
            html
          }
          casting {
            html
          }
          information {
            html
          }
          join {
            html
          }
        }
      }
    }
  }
`
