/** @jsx jsx */
import { jsx } from "theme-ui"

import { useState, useEffect } from "react"
import { Transition } from "react-spring/renderprops"

import { Link, useStaticQuery, graphql } from "gatsby"

export default function Navigation() {
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
    <header
      sx={{
        position: "fixed",
        top: 4,
        left: 4,
        right: 4,
        maxWidth: ["auto", "420px", "420px"],
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "70px",
        m: "0 auto",
        zIndex: 10,
        transition: "400ms all ease",
      }}
    >
      <Logo />
      <div
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: [4, 4, 6],
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          cursor: "pointer",
          outline: "none",
          zIndex: 10,
        }}
        role="button"
        tabIndex="0"
        onClick={() => setShowMenu(x => !x)}
        onKeyDown={() => setShowMenu(x => !x)}
      >
        <Burger show={showMenu} />
      </div>
      <Menu show={showMenu} />
    </header>
  )
}

const Menu = ({ show }) => {
  return (
    <Transition
      items={show}
      config={{ duration: 150 }}
      from={{ height: "0px" }}
      enter={{ height: "381px" }}
      leave={{ height: "0px" }}
    >
      {show =>
        show &&
        (props => (
          <nav
            style={{
              ...props,
              overflow: "hidden",
              position: "absolute",
              left: 0,
              right: 0,
              margin: "0 auto",
            }}
            sx={{
              top: ["85px", "85px", "100px"],
              maxWidth: ["auto", "420px", "420px"],
              borderColor: "black",
              border: "1px solid",
            }}
          >
            <Links show={show} />
          </nav>
        ))
      }
    </Transition>
  )
}

const Links = ({ show }) => {
  const { prismicInfo } = useStaticQuery(
    graphql`
      query {
        prismicInfo {
          data {
            email {
              text
            }
            instagram {
              text
            }
          }
        }
      }
    `
  )

  return (
    <Transition
      items={show}
      config={{
        duration: 200,
        tension: 210,
        friction: 20,
      }}
      from={{ opacity: 0, transform: "translateY(-2px)" }}
      enter={{ opacity: 1, transform: "translateY(0)" }}
      leave={{ opacity: 0, transform: "translateY(-2px)" }}
    >
      {show =>
        show &&
        (props => (
          <div
            style={{
              ...props,
            }}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Link to="/" sx={{ variant: "styles.navigation" }}>
              <sup>01</sup>
              <span>Talent</span>
              <Arrow />
            </Link>
            <Link to="/casting" sx={{ variant: "styles.navigation" }}>
              <sup>02</sup>
              <span>Casting</span>
              <Arrow />
            </Link>
            <Link to="/blog" sx={{ variant: "styles.navigation" }}>
              <sup>03</sup>
              <span>Journal</span>
              <Arrow />
            </Link>
            <Link to="/" sx={{ variant: "styles.navigation" }}>
              <sup>04</sup>
              <span>Freelancers</span>
              <Arrow />
            </Link>
            <Link to="/about" sx={{ variant: "styles.navigation" }}>
              <sup>05</sup>
              <span>About</span>
              <Arrow />
            </Link>
            <div sx={{ display: "flex" }}>
              <Link
                to="/"
                sx={{
                  variant: "styles.navigation",
                  width: "50%",
                  px: "0 !important",
                  textAlign: "center",
                  justifyContent: "center",
                  borderRight: "1px solid black",
                }}
              >
                <span sx={{ fontSize: "18px !important" }}>Instagram</span>
              </Link>
              <Link
                to="/"
                sx={{
                  variant: "styles.navigation",
                  width: "50%",
                  px: "0 !important",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <span sx={{ fontSize: "18px !important" }}>Contact</span>
              </Link>
            </div>
          </div>
        ))
      }
    </Transition>
  )
}

const Burger = ({ show }) => {
  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        mr: "-5px",
        zIndex: 10,
      }}
    >
      {show && <Close />}
      {!show && <Open />}
    </div>
  )
}

const Open = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" />
      <path
        d="M6 20L25.2 20"
        stroke="#1D1D1B"
        strokeWidth="1.608"
        strokeMiterlimit="10"
      />
      <path
        d="M6 12L25.2 12"
        stroke="#1D1D1B"
        strokeWidth="1.608"
        strokeMiterlimit="10"
      />
    </svg>
  )
}

const Close = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" />
      <path
        d="M8 8.00001L16.1 16.1L8 24.2"
        strokeWidth="1.608"
        strokeMiterlimit="10"
        sx={{ stroke: "black" }}
      />
      <path
        d="M24.2 24.2L16.1 16.1L24.2 8"
        strokeWidth="1.608"
        strokeMiterlimit="10"
        sx={{ stroke: "black" }}
      />
    </svg>
  )
}

const Arrow = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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

const Logo = () => {
  return (
    <Link
      to="/"
      sx={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        width: "120px",
        margin: "0 auto",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 127 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.2808 24.6227C16.2808 24.5977 16.2808 24.5977 16.2808 24.5728C16.2808 24.498 16.256 24.4231 16.256 24.3483C16.2311 24.1239 16.1815 23.9243 16.1319 23.7248C15.7596 22.2284 15.1143 21.3555 15.1143 21.3555C14.9654 21.131 14.7917 20.8816 14.618 20.6572C13.6749 19.2605 11.466 17.415 9.80321 16.1181L9.7784 16.0931C9.62949 15.9684 9.48058 15.8687 9.33167 15.7689C7.12284 14.048 6.17975 13.225 5.85711 12.9008C5.38556 12.4269 4.96365 11.978 4.64102 11.554C4.46729 11.3296 4.31838 11.13 4.16947 10.9305C2.63074 8.66096 2.8541 6.56599 3.30083 5.19428C3.49937 4.57077 4.2191 2.92472 5.90675 2.12663C7.12284 1.57795 9.03385 1.12903 11.193 2.17652C12.0617 2.65038 13.0296 3.4734 13.5508 4.94487C13.6004 5.06958 13.6252 5.16934 13.6749 5.29404H13.9479L13.8486 1.17891C13.0792 0.979387 11.1186 0.355883 10.8456 0.281062C10.8456 0.281062 10.8456 0.281062 10.8208 0.281062H10.7959C10.101 0.0815406 8.48785 -0.167861 6.75057 0.156361C3.05265 0.854686 1.53873 3.57316 1.53873 3.57316C1.092 4.22161 0.794184 4.89499 0.595638 5.5185C0.595638 5.5185 -1.19128 10.0826 2.38255 13.9732C2.63074 14.2725 2.90374 14.5718 3.22637 14.8461C4.74029 16.2428 6.45275 17.7142 7.79293 18.7867C8.51266 19.3603 9.1083 19.8342 9.50539 20.1584C10.6222 21.131 12.0369 22.4529 12.7814 23.6999C13.0544 24.1987 13.3026 24.7723 13.4763 25.3709C13.6004 25.8697 13.7245 26.7925 13.526 27.9647C13.377 28.7129 13.1537 29.3613 12.8807 29.885C12.0369 31.6059 10.2996 32.1297 9.87767 32.3042C4.07019 34.2745 1.38982 29.3862 1.04237 28.6879C0.71973 27.9896 0.496365 27.1666 0.347456 26.2438L0 26.4932V32.2793C2.23364 33.3268 2.18401 33.3268 3.99574 34.0251C4.93883 34.4491 6.97393 35.1225 9.53021 34.6486C10.0514 34.5489 10.5478 34.4242 10.9945 34.2496C11.0193 34.2496 11.0441 34.2246 11.0689 34.2246C12.1113 33.8256 12.9551 33.227 13.6004 32.5786L13.6252 32.5536C13.6252 32.5536 13.6252 32.5536 13.65 32.5287C16.3304 29.9599 16.3056 26.0941 16.3056 26.0941C16.3552 25.5704 16.3304 25.0716 16.2808 24.6227Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M44.3998 0.655239H44.4247C46.1619 0.80488 46.1123 2.97468 46.1123 2.97468V20.2832V21.5302C46.0875 22.5278 45.9634 23.9494 45.6408 25.2712C45.1444 26.9921 44.102 29.0372 41.9677 30.2842C41.5954 30.5086 41.1983 30.7081 40.8508 30.8827C40.6523 30.9825 40.4786 31.0573 40.3048 31.1321C40.28 31.1321 40.2552 31.1571 40.2304 31.1571C35.2171 33.3269 30.3775 32.005 28.7147 31.3815C27.5979 30.9575 26.4066 30.334 25.2401 29.4611C23.9248 28.4885 23.1058 27.2165 22.6094 25.9446C22.0634 24.498 21.8897 22.8769 21.8152 21.7047V2.97468C21.8152 2.97468 21.7904 0.979461 23.5029 0.680179V0.355957H16.926V0.705119C18.6881 0.705119 18.6137 2.87491 18.6137 2.87491V21.8045C18.6137 22.8021 18.6633 23.7498 18.837 24.6726C18.837 24.6726 18.8619 24.8223 18.9115 25.0717C19.0604 25.6702 19.2589 26.2688 19.5319 26.8923C20.748 29.6108 23.8751 33.9753 31.817 34.6736C34.001 34.923 36.7558 34.8732 39.734 33.9753C40.6026 33.7259 41.4961 33.4017 42.3647 32.9777H42.3896C45.6656 31.3566 48.6189 28.3139 48.6189 22.5278C48.6438 22.0788 48.6189 21.8045 48.6189 21.8045V2.97468C48.6189 2.97468 48.5941 1.0044 50.3066 0.630299V0.355957H44.3502V0.655239H44.3998Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M63.6837 0.256187C63.6837 0.256187 63.6589 0.256187 63.6837 0.256187C63.1129 0.156427 62.6661 0.131486 62.3435 0.106546C60.3332 -0.0430949 58.5959 0.106546 58.5959 0.106546C58.1492 0.131486 57.6777 0.156427 57.1565 0.206307C54.1286 0.480649 51.7461 0.355948 51.7461 0.355948V0.65523C51.7461 0.65523 53.7067 1.10415 53.7067 5.09458L54.079 27.84C54.079 27.84 54.2776 32.4539 53.2104 33.6012C53.2104 33.6012 52.6892 34.0501 52.3666 34.0501V34.3494H59.1916V34.0252C57.3798 33.9753 57.0572 31.581 57.0324 30.3091V30.2842C57.0324 30.2093 57.0324 30.1096 57.0324 30.0348L56.8338 18.1134C57.7769 18.1882 58.993 18.1632 59.9858 18.1383C60.4821 18.1383 61.0281 18.0884 61.5741 18.0635C61.6238 18.0635 61.6734 18.0635 61.6734 18.0635C67.059 17.7143 69.1189 15.5695 69.1189 15.5695C69.3422 15.3949 69.5656 15.1954 69.7393 14.9709C71.7744 12.9009 72.0723 10.332 72.0723 10.332C72.8416 2.72526 66.8604 0.754991 63.6837 0.256187ZM65.6691 15.1954C65.6443 15.2203 65.5947 15.2203 65.5699 15.2452C65.5202 15.2702 65.4458 15.3201 65.3961 15.345C65.2969 15.3949 65.1976 15.4448 65.0983 15.4697C65.0735 15.4697 65.0735 15.4946 65.0487 15.4946C64.1304 15.8937 63.0632 16.0932 61.996 16.193C61.996 16.193 61.996 16.193 61.9712 16.193C61.6486 16.2179 61.3259 16.2428 61.0033 16.2678C58.5711 16.3925 56.7346 16.2179 56.7346 16.2179V15.8438L56.4864 1.92718C56.4864 1.92718 60.6559 1.10415 64.3786 2.47586C68.8707 4.12191 68.7714 8.71091 68.7714 8.71091C68.7962 8.86055 69.1437 13.2251 65.6691 15.1954Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M89.3954 31.2318H89.1472C89.0727 31.3066 88.9983 31.3565 88.9238 31.4064C88.8246 31.4812 88.7005 31.581 88.5516 31.6807C87.5588 32.3541 86.1442 32.5287 85.6478 32.5537C85.1763 32.5786 84.5806 32.6035 83.8609 32.6035C82.9178 32.6285 82.1733 32.5786 81.6024 32.5287C80.982 32.5038 80.4608 32.3791 80.0637 32.2294C79.7907 32.1297 79.7163 32.0548 79.7163 32.0548C78.4505 31.3565 78.4009 30.1345 78.4009 30.1345C78.2768 29.1867 78.1775 26.1191 78.1031 23.2759C78.0534 21.8044 78.0038 20.0836 78.0038 18.0883V17.6394L78.6987 17.6145C84.5558 17.5147 86.0697 17.814 86.0697 17.814C87.6333 18.0634 87.8318 19.5848 87.8318 19.5848H88.1048V14.0979H87.7822L87.7574 14.3224C87.4596 15.8188 85.7719 15.8687 85.7719 15.8687C82.3966 16.1181 78.3016 15.8936 78.3016 15.8936C77.9542 15.8687 77.979 15.6941 77.979 15.6941V2.37604L83.6375 2.15158C84.4814 2.15158 86.5413 2.25134 87.6333 3.39859C87.6581 3.42353 87.6829 3.44847 87.6829 3.44847C87.7077 3.47341 87.7326 3.49835 87.7574 3.54823C87.807 3.62305 87.8566 3.67293 87.9063 3.74775H88.1793V0.256124C85.4741 0.779868 73.611 0.081543 73.611 0.081543V0.355885C73.611 0.355885 74.6782 1.00433 74.7774 3.14918C74.7774 3.14918 75.4475 20.6322 75.2738 28.5133C75.2738 28.5133 75.2242 32.3541 74.1073 33.5263C73.7847 33.8505 73.2883 33.9254 73.2883 33.9254V34.1748C73.2883 34.1748 76.341 34.0002 79.1951 34.2745C79.1951 34.2745 85.4245 34.8481 87.5837 34.3244C87.9559 33.8007 88.8742 32.3791 89.2465 31.5062L89.3954 31.2318Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M119.823 34.8981C119.823 34.8981 117.837 34.6986 115.256 31.7556C115.256 31.7556 112.749 29.0122 108.307 22.4529C108.307 22.4529 105.155 18.2381 104.733 17.2404C106.917 16.4922 107.811 15.5445 107.811 15.5445C108.034 15.3699 108.257 15.1704 108.431 14.9459C110.466 12.8759 110.764 10.3071 110.764 10.3071C111.558 2.72526 105.577 0.754991 102.4 0.256187H102.375C101.829 0.181367 101.383 0.131486 101.035 0.106546C99.0249 -0.0430949 97.2876 0.106546 97.2876 0.106546C96.8409 0.131486 96.3693 0.156427 95.8481 0.206307C92.8699 0.480649 90.5122 0.355948 90.5122 0.355948V0.65523C90.5122 0.65523 92.4728 1.10415 92.4728 5.09458L92.8451 27.84C92.8451 27.84 93.0437 32.4539 91.9765 33.6012C91.9765 33.6012 91.4553 34.0501 91.1327 34.0501V34.3494H97.9577V34.0252C96.146 33.9753 95.8233 31.581 95.7985 30.3091V30.2842C95.7985 30.2093 95.7985 30.1096 95.7985 30.0348L95.6 18.1134H98.7767H98.9504C99.2482 18.1134 99.8935 18.1383 100.365 18.3129C101.11 18.5623 102.003 19.1359 102.872 20.2831C102.872 20.2831 103.914 21.7546 104.758 22.852L109.548 29.4362C109.548 29.4362 114.809 36.8684 119.847 35.2971C119.823 35.2971 120.22 35.2223 119.823 34.8981ZM104.435 15.1954C104.41 15.2203 104.361 15.2203 104.336 15.2452C104.286 15.2702 104.212 15.3201 104.162 15.345C104.063 15.3949 103.964 15.4448 103.864 15.4697C103.84 15.4697 103.84 15.4946 103.815 15.4946C102.897 15.8937 101.829 16.0932 100.762 16.193C100.762 16.193 100.762 16.193 100.737 16.193C100.415 16.2179 100.092 16.2428 99.7694 16.2678C97.3372 16.3925 95.5007 16.2179 95.5007 16.2179V15.8438L95.2525 1.92718C95.2525 1.92718 99.422 1.10415 103.145 2.47586C107.637 4.12191 107.538 8.71091 107.538 8.71091C107.562 8.86055 107.91 13.2251 104.435 15.1954Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M119.391 0.592041H114.162V1.45604H116.286V7.00004H117.267V1.45604H119.391V0.592041Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M125.1 0.592041L123.831 3.91304C123.606 4.52504 123.345 5.27204 123.165 5.81204C122.985 5.29004 122.733 4.60604 122.508 4.00304L121.194 0.592041H119.862V7.00004H120.789V4.99304C120.789 4.09304 120.789 2.97704 120.753 1.77104C120.915 2.25704 121.077 2.68004 121.284 3.22904L122.751 7.00004H123.561L125.01 3.22904C125.226 2.67104 125.388 2.23904 125.55 1.74404C125.514 2.95904 125.514 4.08404 125.514 4.99304V7.00004H126.441V0.592041H125.1Z"
          sx={{ fill: "black" }}
        />
      </svg>
    </Link>
  )
}
