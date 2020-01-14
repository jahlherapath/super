/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link } from "gatsby"

function Nav() {
  return (
    <nav>
      <Link sx={{ variant: "styles.navLink" }} to="/">
        Home
      </Link>
      <Link sx={{ variant: "styles.navLink" }} to="/talent">
        Talent
      </Link>
      <Link sx={{ variant: "styles.navLink" }} to="/casting">
        Casting
      </Link>
      <Link sx={{ variant: "styles.navLink" }} to="/blog">
        Blog
      </Link>
      <Link sx={{ variant: "styles.navLink" }} to="/info">
        Info
      </Link>
    </nav>
  )
}

export default Nav
