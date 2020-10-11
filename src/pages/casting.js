/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link, graphql } from "gatsby"

import { Fragment, useRef, useState, useCallback } from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import SideNavigationLeft from "../components/SideNavigationLeft"
import SideNavigationRight from "../components/SideNavigationRight"
import Form from "../components/Form"

import { motion, AnimatePresence } from "framer-motion"

const MotionLink = motion.custom(Link)

export default function Casting({ data: { casting } }) {
  const [expanded, setExpanded] = useState(0)

  const content = [0, 1, 2, 3]

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
        <Link to="/" activeClassName="active" sx={{}}>
          <span>Freelancers</span>
        </Link>
        <MotionLink
          to="/casting"
          activeClassName="active"
          animate={{ backgroundPosition: "left bottom", color: "white" }}
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
          }}
          href={"mailto:" + casting.data.email.text}
        >
          Email Super
        </a>
      </SideNavigationRight>
      {/* <Left>
          <h1 sx={{ variant: "styles.display" }}>Casting</h1>
          {casting.data.casting.html && (
            <div
              sx={{
                variant: "styles.html",
              }}
              dangerouslySetInnerHTML={{ __html: casting.data.casting.html }}
            />
          )}
        </Left>
        <Right>
          <Form />
        </Right> */}
      <div sx={{ display: "flex", position: "relative" }}>
        {content.map((i, index) => (
          <Accordion
            key={index}
            i={i}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        ))}
      </div>
    </Layout>
  )
}

const Accordion = ({ i, expanded, setExpanded }) => {
  const isOpen = i === expanded

  console.log(i)

  return (
    <Fragment>
      <motion.div
        onClick={() => setExpanded(isOpen ? false : i)}
        sx={{
          minHeight: "100vh",
          borderLeft: "1px solid black",
          py: 4,
          px: 3,
          cursor: "pointer",
          "&:first-of-type": {
            borderLeft: "none",
          },
        }}
      >
        <span
          sx={{
            fontFamily: "body",
            fontSize: [2, 2, 3],
            writingMode: "vertical-lr",
            textOrientation: "mixed",
            transform: "rotate(-180deg)",
          }}
        >
          Label here
        </span>
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
            mt: 4,
          }}
        ></motion.span>
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { width: "100%", flex: 1, zIndex: 1 },
              collapsed: { width: 0, flex: 0, zIndex: 0 },
            }}
            transition={{
              duration: 0.6,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
            sx={{ position: "relative", overflow: "hidden" }}
          >
            <motion.div
              sx={{
                position: "absolute",
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
              Content here lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Phasellus at egestas ex. Nam consequat libero velit,
              hendrerit fringilla est placerat at. Donec eleifend nulla id nulla
              sagittis placerat. Nam hendrerit neque id cursus fermentum.
              Praesent eget scelerisque ipsum. Curabitur lobortis ipsum sapien,
              at tincidunt urna dignissim a. Fusce aliquet aliquam tellus nec
              eleifend.
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
  }
`
