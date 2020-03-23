/** @jsx jsx */
import { jsx } from "theme-ui"

function Footer() {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      action="/"
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <input type="hidden" name="form-name" value="contact" />
      <label sx={{ variant: "styles.label" }}>Name:</label>
      <input
        sx={{ variant: "styles.input" }}
        type="text"
        name="name"
        placeholder="First and last name"
        required
      />
      <label sx={{ variant: "styles.label" }}>Company name</label>
      <input
        sx={{ variant: "styles.input" }}
        type="text"
        name="company"
        placeholder="Your company"
      />
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridColumnGap: 2,
          mb: 3,
        }}
      >
        <div
          sx={{
            display: "flex",
            flexDirection: "column",
            gridColumn: ["span 2", "span 2", "span 1"],
          }}
        >
          <label sx={{ variant: "styles.label" }}>Email*</label>
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
            gridColumn: ["span 2", "span 2", "span 1"],
          }}
        >
          <label sx={{ variant: "styles.label" }}>Phone*</label>
          <input
            sx={{ variant: "styles.input" }}
            type="tel"
            name="phone"
            placeholder="Your phone number"
          />
        </div>
      </div>
      <label sx={{ variant: "styles.label" }}>Product description*</label>
      <textarea
        sx={{ variant: "styles.input" }}
        type="message"
        name="description"
        placeholder="Your product description"
        rows="5"
        required
      />
      <label sx={{ variant: "styles.label" }}>Roles / Dates / Locations*</label>
      <textarea
        sx={{ variant: "styles.input" }}
        type="message"
        name="description"
        placeholder="Your booking details"
        rows="5"
        required
      />
      <label sx={{ variant: "styles.label" }}>
        Compensation & Union Contract Details
      </label>
      <textarea
        sx={{ variant: "styles.input", mb: 3 }}
        type="message"
        name="contract"
        placeholder="Your contract details"
        rows="5"
      />
      <button sx={{ variant: "styles.button" }} type="submit" value="Submit">
        Submit
      </button>
    </form>
  )
}

export default Footer
