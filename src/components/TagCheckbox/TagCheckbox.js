/** @jsx jsx */
import { jsx } from "theme-ui"

import { useState, useEffect, Fragment } from "react"

import { Link, useStaticQuery } from "gatsby"

function Navigation() {
  const [inputs, setInputs] = useState([])

  const data = useStaticQuery(graphql`
    query TagQuery {
      allPrismicTag(sort: { fields: data___name }) {
        nodes {
          data {
            name
          }
        }
      }
    }
  `)

  const tags = data.allPrismicTag

  console.log(inputs)

  return (
    <div sx={{ border: "1px solid black", p: 3, mb: 3 }}>
      <label
        htmlFor="name"
        sx={{
          textTransform: "uppercase",
          fontFamily: "body",
          fontSize: [0, 0, 1],
          mb: 2,
          display: "block",
        }}
      >
        Skills *
      </label>
      <div
        sx={{
          columnCount: [1, 2, 2],
          columnFill: "auto",
          "input:checked ~ .checkmark": {
            backgroundColor: "black",
          },
        }}
      >
        {tags.nodes.map((tag, index) => (
          <label key={index} sx={{ display: "block", position: "relative" }}>
            <input
              sx={{
                position: "absolute",
                opacity: 0,
                cursor: "pointer",
                height: 0,
                width: 0,
              }}
              type="checkbox"
              // name="tag"
              // value={tag.data.name}
              onClick={() => {
                const index = inputs.findIndex(item => item === tag.data.name)
                if (~index) {
                  setInputs([
                    ...inputs.slice(0, index),
                    ...inputs.slice(index + 1),
                  ])
                } else {
                  setInputs([...inputs, tag.data.name])
                }
              }}
            />
            <span sx={{ pl: "26px" }}>{tag.data.name}</span>
            <span
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "18px",
                width: "18px",
                backgroundColor: "transparent",
                border: "1px solid black",
                borderRadius: "50%",
                transition: "all 200ms ease",
              }}
              className="checkmark"
            ></span>
          </label>
        ))}
      </div>
      <input type="hidden" name="skills" value={inputs} />
    </div>
  )
}

export default Navigation
