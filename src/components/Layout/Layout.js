/** @jsx jsx */
import { jsx } from "theme-ui"

import "normalize.css"

import Navigation from "../Navigation"
import GlobalStyles from "../GlobalStyles"

export default function Layout({ children, title }) {
  return (
    <div>
      <GlobalStyles />
      <Navigation />
      <SideNav
        sx={{
          left: 0,
          transformOrigin: "left top",
          transform: "rotate(-90deg) translateX(-100%)",
        }}
      >
        <p sx={{ variant: "styles.html" }}>
          <span sx={{ variant: "styles.super" }}>Super </span>
          <span sx={{ variant: "styles.html" }}>— {title}</span>
        </p>
      </SideNav>
      <SideNav
        sx={{
          right: 0,
          transformOrigin: "right top",
          transform: "rotate(90deg) translateX(100%)",
        }}
      >
        <p
          sx={{
            variant: "styles.html",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span sx={{ variant: "styles.mono" }}>scroll down</span>
          <ArrowDown />
        </p>
      </SideNav>
      <main
        sx={{
          py: 8,
          px: [3, 3, 11],
          m: "0 auto",
          minHeight: "100vh",
          backgroundColor: "white",
        }}
      >
        {children}
      </main>
    </div>
  )
}

const ArrowDown = () => {
  return (
    <div sx={{ m: 3 }}>
      <svg
        width="15"
        height="10"
        viewBox="0 0 15 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.0005 5L0.000487873 9.33013L0.000488252 0.669872L15.0005 5Z"
          fill="black"
          sx={{ fill: "black" }}
        />
      </svg>
    </div>
  )
}

const SideNav = ({ children, ...props }) => {
  return (
    <div
      {...props}
      sx={{
        position: "fixed",
        top: 0,
        bottom: 0,
        width: "100vh",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "red",
      }}
    >
      {children}
    </div>
  )
}
