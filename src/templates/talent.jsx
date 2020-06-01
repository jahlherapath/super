/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "components/Layout"
import SEO from "components/SEO"
import SideNavigation from "components/SideNavigation"

import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import { useRef } from "react"

function Talent({
  data: { prismicTalent, prismicInfo },
  pageContext: { next, prev },
}) {
  const graphics = useRef(
    typeof window === `undefined`
      ? prismicInfo.data.post_graphics
          .sort(() => Math.random() - 0.5)
          .slice(0, 2)
      : prismicInfo.data.post_graphics
          .sort(() => Math.random() - 0.5)
          .slice(0, 2)
  )

  return (
    <Layout>
      <SEO title={prismicTalent.data.name.text} />
      <SideNavigation />
      <ParallaxProvider>
        <Container>
          <Left>
            <Link
              to="/"
              sx={{
                variant: "styles.mono",
                display: "flex",
                alignItems: "center",
                mb: 8,
              }}
            >
              <ArrowLeft />
              Back to Talent
            </Link>
            <h1 sx={{ variant: "styles.display", mb: 3 }}>
              {prismicTalent.data.name.text}
            </h1>
            <Info>
              {prismicTalent.data.location.text && (
                <p>{prismicTalent.data.location.text}</p>
              )}
              {prismicTalent.data.pgp.text && (
                <p>{prismicTalent.data.pgp.text}</p>
              )}
              {prismicTalent.data.availability.text && (
                <p>{prismicTalent.data.availability.text}</p>
              )}
            </Info>
            {prismicTalent.data.intro.text && (
              <h2
                sx={{
                  variant: "styles.html",
                  fontWeight: "regular",
                }}
              >
                {prismicTalent.data.intro.text}
              </h2>
            )}
            {prismicTalent.data.bio.html && (
              <div
                sx={{ variant: "styles.html" }}
                dangerouslySetInnerHTML={{
                  __html: prismicTalent.data.bio.html,
                }}
              />
            )}
            <div
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                my: 6,
              }}
            >
              {prismicTalent.data.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url && link.url.url}
                  sx={{
                    variant: "styles.button",
                    mb: 3,
                    width: ["100%", "100%", "auto"],
                  }}
                >
                  {link.title.text}
                </a>
              ))}
            </div>
            <div
              sx={{ display: "flex", justifyContent: "space-between", mb: 8 }}
            >
              {prev ? (
                <Link
                  to={prev.node.uid}
                  sx={{
                    variant: "styles.mono",
                    display: "flex",
                    alignItems: "center",
                  }}
                  rel="prev"
                >
                  <ArrowLeft />
                  Prev
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link
                  to={next.node.uid}
                  sx={{
                    variant: "styles.mono",
                    display: "flex",
                    alignItems: "center",
                  }}
                  rel="next"
                >
                  Next
                  <ArrowRight />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </Left>
          <Right>
            <div
              sx={{
                position: "absolute",
                top: 12,
                right: [-4, -4, -5],
                py: 12,
                width: ["180px", "180px", "250px"],
                zIndex: 2,
                overflow: "hidden",
              }}
            >
              <Parallax y={[-20, 20]}>
                <Img
                  sx={{ mr: -6 }}
                  fluid={
                    graphics.current[0].graphic.localFile.childImageSharp.fluid
                  }
                />
              </Parallax>
            </div>
            <div
              sx={{
                position: "absolute",
                top: 14,
                left: [-10, -10, 0],
                width: ["180px", "180px", "250px"],
                zIndex: 2,
              }}
            >
              <Parallax y={[-40, 40]}>
                <Img
                  fluid={
                    graphics.current[1].graphic.localFile.childImageSharp.fluid
                  }
                />
              </Parallax>
            </div>
            <Emblem />
            <div sx={{ width: "100%", height: "100%" }}>
              {prismicTalent.data.gallery.map((image, index) => (
                <Img
                  key={index}
                  fluid={image.image.localFile.childImageSharp.fluid}
                  sx={{ mb: 5 }}
                />
              ))}
            </div>
          </Right>
        </Container>
      </ParallaxProvider>
    </Layout>
  )
}

export default Talent

const Container = ({ children }) => {
  return (
    <div
      sx={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
      }}
    >
      {children}
    </div>
  )
}

const Left = ({ children }) => {
  return (
    <div
      sx={{
        position: ["relative", "relative", "sticky"],
        top: [0, 0, 12],
        alignSelf: "flex-start",
        gridColumn: ["span 2", "span 2", "span 1"],
        pr: [0, 0, 7],
      }}
    >
      <div sx={{}}>{children}</div>
    </div>
  )
}

const Right = ({ children }) => {
  return (
    <div
      sx={{
        position: "relative",
        gridColumn: ["span 2", "span 2", "span 1"],
        pl: [0, 0, 12],
        zIndex: -2,
      }}
    >
      {children}
    </div>
  )
}

const Info = ({ children }) => {
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "space-between",
        variant: "styles.mono",
        mb: 3,
      }}
    >
      {children}
    </div>
  )
}

const Emblem = () => {
  return (
    <div
      sx={{
        position: "absolute",
        top: [10, 10, 8],
        left: [-9, -9, 5],
        width: ["150px", "150px", "200px"],
        height: ["150px", "150px", "200px"],
        animation: "spin 30s linear infinite",
        zIndex: 1,
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 200C44.8644 200 0 155.136 0 100C0 44.8644 44.8644 0 100 0C155.136 0 200 44.8644 200 100C200 155.136 155.136 200 100 200ZM100 0.739523C45.2753 0.739523 0.739523 45.2753 0.739523 100C0.739523 154.725 45.2753 199.26 100 199.26C154.725 199.26 199.26 154.725 199.26 100C199.26 45.2753 154.725 0.739523 100 0.739523ZM100 171.652C60.4766 171.652 28.3484 139.523 28.3484 100C28.3484 60.4766 60.4766 28.3484 100 28.3484C139.523 28.3484 171.652 60.4766 171.652 100C171.652 139.523 139.523 171.652 100 171.652ZM100 29.0879C60.8874 29.0879 29.0879 60.8874 29.0879 100C29.0879 139.113 60.8874 170.912 100 170.912C139.113 170.912 170.912 139.113 170.912 100C170.912 60.8874 139.113 29.0879 100 29.0879Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M118.406 20.378C120.049 20.871 121.775 21.6105 123.829 22.7609L123.747 22.9252C121.857 22.1035 119.803 21.4462 117.831 20.9531L117.091 21.6105L117.009 21.5283L117.584 20.871C117.338 20.7888 117.091 20.7888 116.845 20.7066C114.215 20.1315 111.997 19.8849 110.353 19.8849V19.7206C113.229 19.4741 115.037 19.5563 117.009 19.9671C117.42 20.0493 117.749 20.1315 118.159 20.2958C120.46 17.9951 123.5 15.7765 127.28 13.5579L127.198 13.3936C121.528 15.7765 118.981 15.9408 110.107 14.6261V14.4618C117.913 15.2835 123.336 14.7905 127.362 12.9827L127.609 13.4757C123.747 16.023 121.118 17.9129 118.406 20.378Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M143.632 23.5004C142.317 26.4585 137.141 28.5949 131.06 25.9655C127.609 24.4865 126.048 22.3501 126.952 20.2137C128.266 17.2556 133.607 15.6944 137.798 17.5021C139.359 18.1594 139.852 18.8168 140.427 19.6385C141.167 19.6385 141.742 19.8028 142.317 19.9672C144.125 20.7888 144.125 22.4322 143.632 23.5004ZM127.938 23.0074C130.978 21.9392 136.401 19.7206 140.016 19.6385C139.523 19.2276 138.702 18.7346 137.469 18.2416C133.689 16.5982 128.348 17.6664 127.198 20.378C126.787 21.2819 127.116 22.1857 127.938 23.0074ZM143.468 23.4183C144.125 21.9392 142.892 21.1175 141.989 20.7067C138.127 18.9811 131.635 22.0214 128.02 23.1718C128.841 23.9113 129.992 24.5686 131.389 25.226C135.99 27.198 141.989 26.7872 143.468 23.4183Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M158.34 34.1824C156.45 36.8118 150.945 37.7978 145.522 33.8537C142.482 31.6351 141.413 29.2522 142.728 27.3623C144.618 24.7329 150.205 24.4043 153.903 27.0337C155.218 28.0197 155.629 28.7592 156.039 29.6631C156.697 29.8274 157.354 30.0739 157.765 30.4026C159.408 31.6351 159.08 33.1964 158.34 34.1824ZM143.057 30.3204C146.261 29.9096 152.013 28.9236 155.629 29.5809C155.3 29.0057 154.56 28.4305 153.492 27.6089C150.123 25.1438 144.7 25.0616 142.975 27.4445C142.317 28.3484 142.482 29.3344 143.057 30.3204ZM158.176 34.1002C159.162 32.7855 158.094 31.7173 157.354 31.1421C153.903 28.6771 147.001 30.2383 143.221 30.4848C143.878 31.3886 144.864 32.2925 146.097 33.1964C150.041 36.1545 156.039 37.0583 158.176 34.1002Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M170.501 47.576C168.118 49.7124 162.531 49.4659 158.094 44.5357C155.629 41.742 155.053 39.1126 156.779 37.6335C159.162 35.4971 164.667 36.3188 167.707 39.6877C168.858 40.9203 169.022 41.742 169.187 42.728C169.844 43.0567 170.337 43.3854 170.748 43.8784C172.145 45.3574 171.405 46.8365 170.501 47.576ZM156.45 40.5916C159.655 40.9203 165.489 41.0846 168.858 42.5637C168.611 41.9885 168.036 41.249 167.132 40.1808C164.421 37.0583 159.08 35.8258 156.861 37.7978C156.122 38.4552 156.039 39.4412 156.45 40.5916ZM170.419 47.4117C171.652 46.3435 170.912 45.0287 170.255 44.2892C167.461 41.0846 160.312 41.1668 156.615 40.6738C157.025 41.6598 157.847 42.8102 158.833 43.9605C162.038 47.7403 167.625 49.8767 170.419 47.4117Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M165.242 52.9992L178.143 53.2457L178.472 53.7387L165.571 53.41L165.242 52.9992ZM169.68 55.2178C170.994 54.3139 172.227 54.3139 172.966 55.4643C173.706 56.6146 173.213 57.6828 171.898 58.5045C170.583 59.4084 169.351 59.4084 168.611 58.3402C167.79 57.1898 168.365 56.1216 169.68 55.2178ZM171.569 58.0937C172.802 57.272 173.048 56.4503 172.555 55.7108C172.062 54.9713 171.159 54.8891 169.926 55.6286C168.694 56.4503 168.447 57.3542 168.94 58.0937C169.351 58.8332 170.337 58.9154 171.569 58.0937ZM171.898 48.1512C173.213 47.2473 174.445 47.2473 175.185 48.3977C175.924 49.5481 175.431 50.6163 174.117 51.438C172.802 52.3418 171.569 52.3418 170.83 51.1915C170.09 50.1233 170.583 49.0551 171.898 48.1512ZM173.788 51.0271C175.021 50.2054 175.267 49.3016 174.774 48.6442C174.281 47.9047 173.377 47.7404 172.145 48.5621C170.912 49.3837 170.666 50.2054 171.159 51.0271C171.652 51.7666 172.555 51.8488 173.788 51.0271Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M184.224 73.6237C182.169 74.281 185.867 81.1833 182.087 82.4158C180.197 82.991 178.472 81.5941 177.321 78.2252C175.678 73.295 176.5 67.2145 180.526 65.8998C182.251 65.3246 183.32 66.0641 183.566 66.8858C183.895 67.8718 183.155 68.6935 182.498 69.1044L182.416 69.0222C182.991 68.6114 183.648 67.8718 183.402 66.968C183.073 65.9819 181.841 65.6533 180.69 66.0641C177.486 67.1323 176.417 72.5555 178.143 77.8143C179.293 81.4298 181.019 82.5801 182.169 82.1693C184.717 81.3476 181.348 74.3632 184.224 73.4594C185.374 73.0485 186.935 73.9524 187.675 76.1709C188.332 78.2252 187.839 80.2794 187.675 80.8546H188.989V81.0189L187.182 81.1833C187.428 79.7864 187.346 77.9787 186.853 76.4996C186.278 74.5276 185.127 73.295 184.224 73.6237Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M180.937 83.8127C183.977 83.5662 183.648 92.3583 187.428 92.0296C189.811 91.7831 189.482 88.4141 189.482 88.0855C189.236 85.1274 188.085 83.2375 186.689 83.4018C185.21 83.5662 185.374 85.7026 185.374 86.3599C185.456 87.5925 185.867 88.9893 186.935 88.9072C187.264 88.9072 187.675 88.6607 187.921 88.332L188.085 88.4963C187.921 88.7428 187.428 89.0715 186.935 89.1537C186.113 89.2358 184.881 88.6607 184.717 86.5243C184.552 84.6344 185.374 83.2375 186.606 83.1553C188.168 82.991 189.811 84.8809 190.14 87.839C190.304 89.4002 190.058 92.0296 187.51 92.2761C182.827 92.687 183.073 83.8948 180.855 84.1413C179.951 84.2235 180.115 85.7026 180.197 86.9351C180.608 91.7831 184.306 95.2342 190.879 97.9458V98.6853C186.524 96.3024 183.73 95.4807 182.334 95.5629C181.43 95.645 181.101 96.3024 181.183 96.9597C181.348 98.3566 182.909 99.5892 184.306 100L184.224 100.164C183.813 100.082 180.444 99.014 180.279 97.1241C180.197 95.8915 181.265 95.3985 182.169 95.3164C184.799 95.0699 189.071 97.5349 190.386 98.1923V97.9458C187.51 96.6311 179.869 93.0978 179.293 86.9351C179.211 84.7165 180.033 83.8948 180.937 83.8127Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M184.059 117.173C182.498 117.009 181.43 115.776 181.676 113.804C181.841 112.408 182.58 110.929 184.552 108.628L184.634 108.71C183.237 110.846 182.662 112.49 182.498 113.887C182.251 116.023 182.991 116.845 184.059 116.927C186.196 117.173 188.085 114.215 188.989 109.532C186.606 106.984 180.608 106.409 180.855 100.575H181.019C180.772 105.752 186.606 106.738 188.989 109.367C189.071 108.792 189.154 108.299 189.236 107.642C189.647 104.026 189.236 101.233 187.839 101.068C187.017 100.986 186.36 101.808 186.278 102.876H186.113C186.278 101.726 186.853 100.74 187.921 100.904C189.4 101.068 190.551 103.369 189.975 107.888C189.893 108.71 189.729 109.449 189.565 110.189C189.811 110.6 189.975 111.093 189.975 111.668H189.811C189.811 111.175 189.729 110.764 189.565 110.435C188.578 114.626 186.689 117.502 184.059 117.173Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M182.827 117.913C185.127 118.652 185.703 121.446 184.881 123.911C183.813 127.116 181.019 128.184 180.362 130.074C180.197 130.649 180.362 130.896 180.526 130.978C181.43 131.224 182.498 127.445 184.224 128.02C185.292 128.348 185.703 130.074 185.127 131.882C184.47 133.936 182.909 134.922 182.169 135.251L182.087 135.086C182.744 134.593 183.73 133.525 184.388 131.635C184.963 129.91 184.881 128.431 184.224 128.266C183.155 127.938 182.169 131.799 180.444 131.224C180.197 131.142 179.54 130.813 179.869 129.745C180.444 127.855 183.073 126.951 184.141 123.665C184.963 121.035 184.306 118.652 182.662 118.159C180.608 117.502 178.718 120.378 177.075 125.226C175.596 129.827 175.514 132.786 176.746 133.196C177.157 133.361 177.65 133.196 178.061 132.703L178.143 132.786C177.732 133.279 177.239 133.607 176.5 133.361C175.185 132.95 174.363 130.813 176.171 125.144C177.321 121.857 179.458 116.763 182.827 117.913Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M167.79 148.562C166.639 146.836 166.557 145.522 167.214 144.289C168.2 142.564 170.748 141.002 173.788 139.77C174.528 137.223 174.856 134.84 173.459 133.196L173.624 132.868C173.87 132.95 174.199 133.032 174.445 133.196C176.91 134.593 178.472 139.113 179.211 141.495L179.047 141.578C178.718 140.592 176.993 134.758 174.035 133.279L173.952 133.443C175.103 135.086 175.021 137.305 174.528 139.606C175.021 139.441 175.514 139.277 176.007 139.113L176.089 139.277C175.514 139.523 175.021 139.77 174.445 140.016C173.542 144.207 171.323 148.48 173.048 149.466C174.445 150.288 176.335 147.74 177.732 145.193C179.704 141.578 181.101 137.633 181.265 136.812H181.43C181.265 137.716 180.444 142.153 178.143 146.261C176.664 148.891 175.021 150.863 173.048 149.795C170.501 148.398 172.391 144.371 173.624 140.427C170.912 141.742 168.858 143.303 167.872 144.947C167.214 146.179 167.214 147.412 167.872 148.726L167.79 148.562Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M149.137 167.132C148.644 165.16 148.973 163.846 150.041 162.859C151.52 161.545 154.478 160.887 157.765 160.723C159.326 158.587 160.394 156.45 159.655 154.396L159.901 154.15C160.148 154.314 160.394 154.478 160.559 154.725C162.449 156.779 162.449 161.627 162.284 164.092H162.12C162.202 163.106 162.449 157.025 160.066 154.56L159.901 154.643C160.394 156.615 159.655 158.669 158.422 160.641C158.915 160.641 159.491 160.641 159.984 160.641V160.805C159.408 160.805 158.833 160.887 158.258 160.97C155.957 164.667 152.506 167.954 153.821 169.433C154.889 170.666 157.436 168.858 159.655 166.886C162.695 164.174 165.325 160.887 165.735 160.148L165.9 160.23C165.407 161.052 163.188 164.914 159.655 168.036C157.436 170.008 155.218 171.323 153.739 169.68C151.849 167.543 154.971 164.339 157.354 161.052C154.314 161.463 151.931 162.12 150.452 163.435C149.384 164.339 148.973 165.571 149.137 166.968V167.132Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M149.712 168.447C150.945 170.501 149.548 172.966 147.33 174.281C144.454 176.007 141.578 174.938 139.852 175.924C139.359 176.253 139.277 176.5 139.359 176.664C139.852 177.486 143.139 175.349 144.125 176.91C144.7 177.896 143.878 179.458 142.235 180.362C140.427 181.43 138.62 181.183 137.798 180.937V180.772C138.62 180.855 140.099 180.69 141.824 179.704C143.385 178.8 144.289 177.65 143.961 177.075C143.385 176.089 140.099 178.307 139.195 176.828C139.03 176.582 138.784 175.924 139.77 175.349C141.495 174.363 144.043 175.349 147.001 173.624C149.384 172.227 150.452 170.008 149.548 168.529C148.48 166.639 145.111 167.543 140.674 170.173C136.483 172.638 134.511 174.774 135.168 175.924C135.415 176.253 135.826 176.5 136.483 176.417V176.582C135.908 176.664 135.251 176.582 134.922 175.924C134.182 174.692 135.004 172.555 140.099 169.515C142.975 167.872 147.905 165.407 149.712 168.447Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M122.186 181.348C122.432 180.115 122.514 179.129 122.35 178.718C122.186 178.307 121.857 178.225 121.364 178.472C119.556 179.047 118.899 181.183 118.817 181.594H118.652C118.735 181.101 119.392 178.225 120.871 177.65C121.857 177.321 122.35 177.814 122.514 178.307C122.679 178.8 122.597 179.869 122.432 181.101C125.637 178.225 130.156 174.61 132.21 173.87C132.868 173.624 133.196 173.788 133.279 174.117C133.854 176.007 125.719 182.827 122.104 185.867L122.021 185.785C125.144 183.237 133.279 175.76 132.95 174.856C132.95 174.774 132.786 174.774 132.457 174.856C130.567 175.431 126.048 178.636 122.268 181.676C121.857 183.566 121.282 185.949 120.624 188.25H120.789C121.528 187.264 123.09 186.031 125.801 185.21C129.006 184.141 132.21 184.059 134.182 183.402C135.168 183.073 135.579 182.662 135.415 182.169C135.251 181.594 134.347 181.183 134.1 181.101L134.182 180.937C134.758 181.183 135.497 181.512 135.744 182.251C135.99 182.991 135.661 183.813 134.182 184.306C132.539 184.799 128.841 185.045 125.226 186.278C122.597 187.099 121.2 188.168 120.871 188.661H120.296C120.46 188.085 121.528 184.634 122.021 181.923C121.035 182.744 120.049 183.566 119.228 184.388L119.145 184.306C119.803 183.566 120.871 182.498 122.186 181.348Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M101.15 182.744C100.986 181.512 102.054 180.526 103.615 180.362C106.163 180.033 108.792 182.087 111.586 183.073C112.983 180.937 114.38 179.129 115.859 178.882C117.091 178.718 117.666 179.869 117.749 180.608C117.913 181.758 117.256 183.977 114.955 184.223C113.887 184.388 112.736 183.977 111.586 183.484C109.532 186.524 107.806 190.386 105.505 190.633C104.355 190.797 103.533 189.975 103.451 188.989C103.369 188.003 103.944 187.099 104.848 187.017C105.67 186.935 106.409 187.592 106.738 187.921L106.656 188.003C106.081 187.675 105.505 187.428 104.93 187.51C103.944 187.592 103.698 188.414 103.698 188.907C103.78 189.482 104.355 189.893 105.259 189.811C107.56 189.565 109.449 186.278 111.339 183.32C109.039 182.251 106.574 180.772 103.698 181.101C102.383 181.265 101.233 181.758 101.397 182.744C101.561 183.813 102.876 183.977 103.533 183.895V184.059C102.794 184.223 101.315 184.223 101.15 182.744ZM111.832 183.155C112.818 183.484 113.804 183.648 114.873 183.566C117.173 183.32 117.666 181.758 117.584 180.772C117.502 179.951 116.927 179.704 116.023 179.786C114.38 179.951 112.983 181.43 111.832 183.155Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M82.8266 179.951C81.1832 179.54 79.3755 178.8 77.3213 177.65L77.4035 177.486C79.2933 178.307 81.4297 178.882 83.4018 179.293L84.0592 178.636L84.1413 178.718L83.5661 179.375C83.8127 179.458 84.0592 179.458 84.3057 179.54C86.9351 180.033 89.2358 180.197 90.797 180.197V180.362C87.9211 180.69 86.1134 180.608 84.1413 180.279C83.7305 180.197 83.4018 180.115 82.991 180.033C80.6902 182.416 77.7321 184.716 74.0345 186.935L74.1167 187.099C79.7042 184.552 82.2514 184.306 91.2079 185.374V185.538C83.4018 184.963 77.9786 185.538 73.9523 187.428L73.7058 186.935C77.65 184.47 80.1972 182.498 82.8266 179.951Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M57.6007 176.993C58.9154 174.034 64.092 171.898 70.1726 174.527C73.6237 176.007 75.1849 178.143 74.281 180.279C72.9663 183.237 67.6253 184.799 63.4347 182.991C61.8735 182.334 61.3804 181.676 60.8053 180.855C60.0657 180.855 59.4906 180.69 58.9154 180.526C57.1076 179.786 57.1898 178.143 57.6007 176.993ZM57.8472 177.075C57.1898 178.554 58.4224 179.376 59.3262 179.786C63.1882 181.512 69.6795 178.472 73.295 177.321C72.4733 176.582 71.3229 175.924 69.9261 175.267C65.3246 173.377 59.3262 173.788 57.8472 177.075ZM73.3772 177.568C70.3369 178.636 64.9137 180.855 61.2983 180.937C61.7913 181.348 62.613 181.841 63.8455 182.334C67.6253 183.977 72.9663 182.909 74.1989 180.197C74.5275 179.293 74.1989 178.389 73.3772 177.568Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M42.728 166.804C44.5357 164.174 50.0411 163.024 55.5464 166.804C58.6689 168.94 59.8192 171.323 58.5045 173.213C56.6968 175.842 51.1093 176.335 47.4117 173.788C46.0148 172.802 45.6861 172.145 45.1931 171.241C44.5357 171.076 43.8784 170.83 43.3854 170.501C41.742 169.433 42.0707 167.79 42.728 166.804ZM42.8924 166.968C41.9885 168.283 42.9745 169.351 43.7962 169.926C47.2473 172.309 54.1495 170.583 57.9293 170.173C57.272 169.269 56.2859 168.365 55.0534 167.543C50.9449 164.667 45.0288 163.928 42.8924 166.968ZM58.0937 170.337C54.8891 170.83 49.2194 171.98 45.6039 171.323C46.0148 171.816 46.6721 172.473 47.8225 173.213C51.1915 175.596 56.6968 175.514 58.3402 173.131C58.9154 172.227 58.751 171.323 58.0937 170.337Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M30.3205 153.574C32.7034 151.356 38.2909 151.438 42.8102 156.368C45.3574 159.08 46.0148 161.709 44.2892 163.27C41.9063 165.489 36.401 164.749 33.2785 161.463C32.1282 160.23 31.8817 159.491 31.7173 158.505C31.06 158.176 30.4848 157.847 30.1561 157.436C28.7592 155.875 29.4166 154.396 30.3205 153.574ZM30.4848 153.739C29.2523 154.889 30.074 156.122 30.7313 156.861C33.6072 159.984 40.756 159.737 44.4536 160.148C44.0427 159.162 43.221 158.012 42.1528 156.943C38.7839 153.246 33.1142 151.274 30.4848 153.739ZM44.5357 160.312C41.3311 160.066 35.4971 159.984 32.046 158.669C32.2925 159.244 32.8677 159.984 33.7716 160.97C36.5653 164.01 41.9063 165.16 44.0427 163.106C44.9466 162.366 44.9466 161.38 44.5357 160.312Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M35.4971 148.151L22.5965 147.905L22.2679 147.412L35.1684 147.74L35.4971 148.151ZM28.8414 152.999C27.5267 153.903 26.2942 153.903 25.5546 152.753C24.8151 151.602 25.3081 150.534 26.6228 149.712C27.9375 148.891 29.1701 148.809 29.9096 149.959C30.7313 151.027 30.1561 152.095 28.8414 152.999ZM26.9515 150.123C25.719 150.945 25.4725 151.849 25.9655 152.506C26.4585 153.246 27.3624 153.41 28.5949 152.588C29.8274 151.767 30.0739 150.945 29.5809 150.123C29.0879 149.384 28.1841 149.302 26.9515 150.123ZM31.1421 145.933C29.8274 146.837 28.5949 146.837 27.8554 145.686C27.1159 144.536 27.6089 143.468 28.9236 142.646C30.2383 141.742 31.4708 141.742 32.2103 142.81C32.9499 143.961 32.4569 145.029 31.1421 145.933ZM29.2523 143.057C28.0197 143.878 27.7732 144.7 28.2662 145.44C28.7592 146.179 29.6631 146.261 30.8956 145.522C32.1282 144.7 32.3747 143.796 31.8817 143.057C31.3887 142.317 30.4848 142.235 29.2523 143.057Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M16.1873 127.773C18.2416 127.116 14.544 120.214 18.3237 118.981C20.2136 118.406 21.9392 119.803 23.0896 123.172C24.7329 128.102 23.9113 134.182 19.885 135.497C18.1594 136.072 17.0912 135.333 16.8447 134.511C16.516 133.525 17.2555 132.703 17.9129 132.293L17.9951 132.375C17.4199 132.786 16.7625 133.525 17.0912 134.429C17.4199 135.415 18.6524 135.744 19.8028 135.333C23.0074 134.265 24.0756 128.841 22.35 123.583C21.1997 119.967 19.4741 118.817 18.3237 119.228C15.7765 120.049 19.1454 127.034 16.2695 127.938C15.1191 128.348 13.5579 127.445 12.8184 125.226C12.161 123.172 12.6541 121.118 12.8184 120.542H11.5037V120.378L13.3114 120.214C13.0649 121.611 13.1471 123.418 13.6401 124.897C14.2153 126.787 15.3656 128.02 16.1873 127.773Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M19.4741 117.502C16.4339 117.831 16.516 109.039 12.7362 109.532C10.3533 109.778 10.7642 113.147 10.7642 113.558C11.0929 116.516 12.3254 118.324 13.6401 118.159C15.1191 117.995 14.9548 115.777 14.8726 115.119C14.7083 113.887 14.2975 112.49 13.2293 112.572C12.9006 112.654 12.4897 112.818 12.2432 113.147L12.0789 112.983C12.2432 112.736 12.7362 112.408 13.1471 112.325C13.9688 112.243 15.2013 112.818 15.4478 114.873C15.6943 116.763 14.8726 118.159 13.6401 118.324C12.0789 118.488 10.3533 116.68 10.0247 113.722C9.86031 112.161 10.0247 109.532 12.5719 109.203C17.2555 108.71 17.2555 117.42 19.3919 117.173C20.2136 117.091 20.1315 115.612 19.9671 114.38C19.3919 109.614 15.6122 106.163 9.03862 103.615V102.876C13.4758 105.095 16.2695 105.916 17.6664 105.752C18.5703 105.67 18.8989 105.012 18.8168 104.273C18.6524 102.876 17.0912 101.643 15.6122 101.315V101.15C16.023 101.15 19.4741 102.136 19.6385 104.108C19.8028 105.341 18.7346 105.834 17.7486 105.916C15.1191 106.245 10.8463 103.862 9.44947 103.287V103.533C12.3254 104.766 20.1315 108.135 20.7888 114.297C21.1175 116.516 20.2958 117.42 19.4741 117.502Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M15.6122 84.2235C17.1734 84.3878 18.2416 85.5382 18.0772 87.5103C17.9951 88.9072 17.2555 90.3862 15.3656 92.7691L15.2835 92.6869C16.6804 90.5505 17.1734 88.825 17.3377 87.4281C17.502 85.2917 16.7625 84.5522 15.6943 84.3878C13.5579 84.2235 11.7502 87.1816 11.0107 91.8653C13.3936 94.3303 19.4741 94.8233 19.3919 100.657H19.2276C19.3098 95.4807 13.4758 94.659 11.0107 92.1118C10.9285 92.6869 10.8463 93.18 10.8463 93.8373C10.5177 97.4528 11.0107 100.247 12.4076 100.329C13.2292 100.411 13.8044 99.5892 13.8866 98.521H14.0509C13.9688 99.6713 13.3114 100.657 12.3254 100.575C10.8463 100.411 9.6138 98.1101 10.0246 93.5908C10.1068 92.7691 10.189 92.0296 10.3533 91.2901C10.1068 90.8792 9.94247 90.3862 9.94247 89.811H10.1068C10.1068 90.304 10.2712 90.7149 10.4355 91.0436C11.0928 86.8529 12.9827 83.977 15.6122 84.2235Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M17.009 83.484C14.7083 82.8266 14.051 80.0329 14.7905 77.5678C15.7765 74.3632 18.5703 73.2128 19.1454 71.2407C19.3098 70.6655 19.1454 70.419 18.9811 70.3369C18.0772 70.0904 17.0912 73.9523 15.3657 73.3771C14.2975 73.0485 13.8866 71.3229 14.3796 69.5152C14.9548 67.4609 16.516 66.4749 17.2556 66.1462L17.3377 66.2284C16.6804 66.7214 15.6943 67.8718 15.1192 69.7617C14.6261 71.5694 14.7083 72.9663 15.3657 73.1306C16.4339 73.4593 17.3377 69.5974 19.0633 70.0904C19.3098 70.1725 20.0493 70.5012 19.7206 71.5694C19.1454 73.4593 16.5982 74.4453 15.6122 77.7321C14.8726 80.3615 15.53 82.7444 17.1734 83.2375C19.2276 83.8948 21.1175 80.9367 22.5966 76.0066C23.9934 71.4051 23.9934 68.447 22.6787 68.0361C22.2679 67.954 21.7749 68.1183 21.364 68.6113L21.2818 68.5292C21.6927 68.0361 22.1857 67.7075 22.9252 67.954C24.2399 68.3648 25.1438 70.419 23.4182 76.1709C22.35 79.3755 20.378 84.47 17.009 83.484Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M31.553 52.6705C32.7034 54.3961 32.7855 55.7108 32.1282 56.9433C31.1422 58.6689 28.5949 60.2301 25.5546 61.4626C24.8151 64.0099 24.4864 66.3928 25.8833 68.0362L25.719 68.3649C25.4725 68.2827 25.1438 68.2005 24.8973 68.0362C22.4322 66.6393 20.871 62.12 20.1315 59.7371L20.2958 59.6549C20.6245 60.6409 22.35 66.475 25.3081 67.954L25.3903 67.7897C24.2399 66.1463 24.3221 63.9277 24.8151 61.627C24.3221 61.7913 23.8291 61.9557 23.3361 62.12L23.2539 61.9557C23.8291 61.7091 24.3221 61.4626 24.8973 61.2161C25.8012 57.0255 28.0197 52.7527 26.2942 51.7667C24.8973 50.945 23.0074 53.4922 21.6105 56.0395C19.6385 59.6549 18.2416 63.599 18.0772 64.4207H17.9129C18.0772 63.5169 18.8989 59.0797 21.1997 54.9713C22.6787 52.3419 24.3221 50.3698 26.2942 51.438C28.8414 52.8349 26.9515 56.8612 25.719 60.8053C28.4306 59.4906 30.4848 57.9294 31.4708 56.286C32.1282 55.0534 32.1282 53.8209 31.4708 52.5062L31.553 52.6705Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M49.7124 33.6072C50.2876 35.5793 49.9589 36.894 48.9729 37.88C47.4938 39.2769 44.6179 39.9343 41.3311 40.1808C39.8521 42.3172 38.7839 44.5357 39.6056 46.5078L39.3591 46.7543C39.1126 46.59 38.8661 46.4256 38.7017 46.1791C36.8118 44.1249 36.6475 39.2769 36.7297 36.8118H36.894C36.894 37.88 36.7297 43.8784 39.1947 46.2613L39.3591 46.1791C38.7839 44.2071 39.5234 42.1528 40.6738 40.1808C40.1808 40.1808 39.6056 40.1808 39.1126 40.1808V40.0164C39.6878 40.0164 40.2629 39.9343 40.8381 39.8521C43.0567 36.1545 46.4256 32.7034 45.0288 31.3065C43.9606 30.1561 41.4133 31.9638 39.2769 33.9359C36.3188 36.7296 33.7716 40.0986 33.3607 40.8381L33.1964 40.7559C33.6072 39.9343 35.8258 35.9901 39.1947 32.7855C41.4133 30.7313 43.5497 29.4166 45.1109 30.9778C47.083 33.1142 44.0427 36.3188 41.6598 39.6877C44.6179 39.2769 47.083 38.4552 48.4799 37.1405C49.4659 36.1545 49.8767 35.0041 49.7124 33.525V33.6072Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M49.0551 32.2104C47.8225 30.1561 49.2194 27.691 51.438 26.3763C54.3139 24.6508 57.1898 25.719 58.9154 24.7329C59.4084 24.4043 59.4906 24.1578 59.4084 23.9934C58.9154 23.1717 55.6286 25.3081 54.6426 23.7469C54.0674 22.7609 54.8891 21.1997 56.5325 20.2958C58.3402 19.2276 60.1479 19.4741 60.9696 19.7206V19.885C60.1479 19.8028 58.6689 19.9671 56.9433 20.9532C55.3821 21.857 54.4782 23.0074 54.8069 23.5826C55.3821 24.5686 58.6689 22.35 59.5727 23.8291C59.7371 24.0756 59.9836 24.7329 58.9975 25.3081C57.272 26.2942 54.7247 25.3081 51.7666 27.0337C49.3837 28.4306 48.3155 30.6491 49.2194 32.1282C50.2876 34.0181 53.6565 33.1142 58.0937 30.4848C62.2843 28.0197 64.2564 25.8833 63.599 24.7329C63.3525 24.4043 62.9417 24.1578 62.2843 24.2399V24.0756C62.8595 23.9934 63.5168 24.0756 63.8455 24.7329C64.585 25.9655 63.7634 28.1019 58.6689 31.1422C55.7929 32.8677 50.8628 35.2506 49.0551 32.2104Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M76.4174 18.9811C76.2531 20.2136 76.1709 21.1996 76.3352 21.6105C76.4996 22.0213 76.8283 22.0213 77.3213 21.857C79.129 21.1996 79.7042 19.0632 79.7863 18.6524H79.9507C79.8685 19.1454 79.3755 22.1035 77.8143 22.5965C76.8283 22.9252 76.3352 22.4322 76.1709 21.9392C76.0066 21.4462 76.0066 20.378 76.2531 19.1454C73.1306 22.1035 68.6935 25.8833 66.6393 26.6228C65.9819 26.8693 65.6532 26.7872 65.5711 26.4585C64.9137 24.6508 72.8841 17.5842 76.4174 14.4618L76.4996 14.5439C73.4593 17.1734 65.4889 24.8151 65.8997 25.8011C65.8997 25.8833 66.0641 25.8833 66.3928 25.8011C68.2005 25.1438 72.7198 21.857 76.4174 18.7346C76.7461 16.8447 77.3213 14.4618 77.8965 12.161H77.7321C77.0748 13.1471 75.5135 14.3796 72.802 15.3656C69.5974 16.516 66.4749 16.5982 64.4207 17.3377C63.4347 17.6664 63.0238 18.0772 63.1882 18.5702C63.4347 19.1454 64.2564 19.5563 64.585 19.6384L64.5029 19.8028C63.9277 19.6384 63.1882 19.2276 62.9416 18.4881C62.6951 17.7485 63.0238 16.8447 64.4207 16.3517C65.9819 15.7765 69.7617 15.4478 73.295 14.2153C75.9244 13.3114 77.3213 12.2432 77.6499 11.7502H78.2251C78.0608 12.3254 77.0748 15.7765 76.6639 18.4881C77.65 17.6664 78.5538 16.7625 79.3755 16.023L79.4577 16.1052C78.8003 16.7625 77.7321 17.7485 76.4174 18.9811Z"
          sx={{ fill: "black" }}
        />
        <path
          d="M97.5349 17.1734C97.6993 18.4059 96.7132 19.392 95.0698 19.6385C92.5226 19.9671 89.811 18.0772 87.0994 17.0912C85.7847 19.2276 84.3878 21.1175 82.9088 21.364C81.6763 21.5284 81.0189 20.4602 80.9367 19.6385C80.7724 18.4881 81.3476 16.2695 83.6483 15.9408C84.7165 15.7765 85.8669 16.1052 87.0994 16.5982C89.0715 13.4758 90.7149 9.61381 93.0156 9.28514C94.166 9.1208 94.9877 9.86032 95.152 10.8464C95.3164 11.8324 94.7412 12.7362 93.8373 12.8184C93.0156 12.9006 92.2761 12.2432 91.9474 11.9146L92.0296 11.8324C92.6048 12.1611 93.1799 12.3254 93.8373 12.2432C94.8233 12.0789 95.0698 11.3394 94.9877 10.7642C94.9055 10.189 94.3303 9.77815 93.3443 9.94249C91.0435 10.2712 89.2358 13.6401 87.4281 16.5982C89.7288 17.5842 92.2761 19.0633 95.152 18.6524C96.4667 18.4881 97.5349 17.9129 97.4528 16.9269C97.2884 15.8587 95.9737 15.6943 95.3164 15.7765V15.6122C95.8094 15.7765 97.3706 15.6943 97.5349 17.1734ZM86.8529 17.0912C85.8669 16.7625 84.7987 16.5982 83.8127 16.7625C81.5119 17.0912 81.0189 18.6524 81.1832 19.5563C81.2654 20.378 81.9228 20.6245 82.7445 20.5423C84.3878 20.2958 85.7025 18.8168 86.8529 17.0912Z"
          sx={{ fill: "black" }}
        />
      </svg>
    </div>
  )
}

const ArrowLeft = () => {
  return (
    <svg
      width="40"
      height="25"
      viewBox="0 0 40 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ mt: "-2px", mr: 3 }}
    >
      <rect width="40" height="25" />
      <path
        d="M36 12.5H5"
        strokeWidth="1.608"
        strokeMiterlimit="10"
        sx={{ stroke: "black" }}
      />
      <path
        d="M10 17.5L5 12.5L10 7.5"
        strokeWidth="1.608"
        strokeMiterlimit="10"
        sx={{ stroke: "black" }}
      />
    </svg>
  )
}

const ArrowRight = () => {
  return (
    <svg
      width="40"
      height="25"
      viewBox="0 0 40 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ mt: "-2px", ml: 3 }}
    >
      <rect width="40" height="25" />
      <path
        d="M5 12.5H36"
        strokeWidth="1.608"
        strokeMiterlimit="10"
        sx={{ stroke: "black" }}
      />
      <path
        d="M31 17.5L36 12.5L31 7.5"
        strokeWidth="1.608"
        strokeMiterlimit="10"
        sx={{ stroke: "black" }}
      />
    </svg>
  )
}

export const pageQuery = graphql`
  query TalentBySlug($uid: String!) {
    prismicTalent(uid: { eq: $uid }) {
      uid
      data {
        name {
          text
        }
        location {
          text
        }
        availability {
          text
        }
        contact {
          text
        }
        intro {
          text
        }
        bio {
          html
        }
        pgp {
          text
        }
        gallery {
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        links {
          title {
            text
          }
          url {
            url
          }
        }
      }
    }
    prismicInfo {
      data {
        post_graphics {
          graphic {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
