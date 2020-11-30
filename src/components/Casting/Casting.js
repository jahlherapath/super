/** @jsx jsx */
import { jsx } from "theme-ui"

import NetlifyForm from "react-netlify-form"

function Casting() {
  return (
    <NetlifyForm name="contact">
      {({ loading, error, success }) => (
        <div
          sx={{
            display: "flex",
            alignItems: "flex-end",
            width: ["100%", "100%", "600px"],
            height: "100%",
          }}
        >
          {loading && (
            <div>
              <p
                sx={{
                  variant: "styles.html",
                  fontWeight: "regular",
                  backgroundColor: "babyBlue",
                }}
              >
                Loading...
              </p>
            </div>
          )}
          {error && (
            <div>
              <p
                sx={{
                  variant: "styles.html",
                  fontWeight: "regular",
                  backgroundColor: "orange",
                }}
              >
                Your information was not sent. Please try again later.
              </p>
            </div>
          )}
          {success && (
            <div>
              <p
                sx={{
                  variant: "styles.html",
                  fontWeight: "regular",
                  backgroundColor: "lightGreen",
                }}
              >
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
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="subject" value="Casting" />
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
                Company name
              </label>
              <input
                sx={{ variant: "styles.input" }}
                type="text"
                name="company"
                placeholder="Your company"
              />
              <label htmlFor="location" sx={{ variant: "styles.label" }}>
                Location*
              </label>
              <input
                sx={{ variant: "styles.input" }}
                type="text"
                name="location"
                placeholder="Your location"
                required
              />
              <div
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(6, 1fr)",
                  gridColumnGap: 2,
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
                    type="email"
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
              <label htmlFor="message" sx={{ variant: "styles.label" }}>
                Your message *
              </label>
              <textarea
                sx={{ variant: "styles.input" }}
                type="message"
                name="message"
                placeholder="Share a brief summary of the project"
                rows="6"
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
                  aria-label="Casting Request"
                >
                  Casting Request
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </NetlifyForm>
  )
}

export default Casting
