/** @jsx jsx */
import { jsx } from "theme-ui"

import NetlifyForm from "react-netlify-form"

import useLocalStorage from "../UseLocalStorage"

function Footer() {
  return (
    <NetlifyForm name="contact">
      {({ loading, error, success }) => (
        <div
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          {loading && (
            <div
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <p sx={{ variant: "styles.html", fontWeight: "regular" }}>
                Loading...
              </p>
            </div>
          )}
          {error && (
            <div
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <p sx={{ variant: "styles.html", fontWeight: "regular" }}>
                Your information was not sent. Please try again later.
              </p>
            </div>
          )}
          {success && (
            <div
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <p sx={{ variant: "styles.html", fontWeight: "regular" }}>
                We got your message! Our team will get to your soon.
              </p>
            </div>
          )}
          {!loading && !success && (
            <div
              sx={{
                display: "flex",
                flexDirection: "column",
                margin: "0 auto",
                width: "100%",
              }}
            >
              {/* <TalentSelection /> */}
              <input type="hidden" name="form-name" value="contact" />
              <label htmlFor="name" sx={{ variant: "styles.label" }}>
                Name*
              </label>
              <input
                sx={{ variant: "styles.input" }}
                type="text"
                name="name"
                placeholder="First and last name"
                required
              />
              <label htmlFor="company" sx={{ variant: "styles.label" }}>
                Company name*
              </label>
              <input
                sx={{ variant: "styles.input" }}
                type="text"
                name="company"
                placeholder="Your company"
              />
              <div
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(6, 1fr)",
                  gridColumnGap: 2,
                  mb: 3,
                }}
              >
                <div
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gridColumn: ["span 6", "span 6", "span 3"],
                  }}
                >
                  <label htmlFor="email" sx={{ variant: "styles.label" }}>
                    Email*
                  </label>
                  <input
                    sx={{ variant: "styles.input" }}
                    type="text"
                    name="email"
                    placeholder="Your email address"
                    required
                  />
                </div>
                <div
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gridColumn: ["span 6", "span 6", "span 3"],
                  }}
                >
                  <label htmlFor="phone" sx={{ variant: "styles.label" }}>
                    Phone*
                  </label>
                  <input
                    sx={{ variant: "styles.input" }}
                    type="tel"
                    name="phone"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              <label htmlFor="biography" sx={{ variant: "styles.label" }}>
                Biography*
              </label>
              <textarea
                sx={{ variant: "styles.input" }}
                type="message"
                name="biography"
                placeholder="A little about you"
                rows="3"
                required
              />
              <div>
                <button
                  sx={{
                    variant: "styles.button",
                    width: "100%",
                  }}
                  type="submit"
                  value="Submit"
                >
                  Submit your application
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </NetlifyForm>
  )
}

export default Footer

function TalentSelection() {
  const [selectedModels] = useLocalStorage("selectedModels", [])

  return (
    <div sx={{ width: "100%", variant: "styles.html" }}>
      <div sx={{  mb: 2 }}>
        Selected talent:{" "}
        {Array.isArray(selectedModels) &&
          selectedModels.map(i => i.name).join(", ")}
      </div>
    </div>
  )
}
