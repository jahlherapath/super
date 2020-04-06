/** @jsx jsx */
import { jsx } from "theme-ui"

import NetlifyForm from "react-netlify-form"

function Footer() {
  return (
    <NetlifyForm name="contact">
      {({ loading, error, success }) => (
        <div>
          {loading && (
            <div>
              <h3 sx={{ variant: "styles.formMessages" }}>Loading...</h3>
            </div>
          )}
          {error && (
            <div sx={{ textAlign: "center" }}>
              <h3 sx={{ variant: "styles.formMessages" }}>
                Your information was not sent. Please try again later.
              </h3>
            </div>
          )}
          {success && (
            <div sx={{ textAlign: "center" }}>
              <h3 sx={{ variant: "styles.formMessages" }}>
                Thank you for contacting us!
              </h3>
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
                rows="5"
                required
              />
              <div>
                <button
                  sx={{ variant: "styles.button" }}
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
