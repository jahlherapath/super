/** @jsx jsx */
import { jsx } from "theme-ui"

import { Fragment, useState, useRef, useCallback } from "react"

import Img from "gatsby-image"

import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function SectionImageGallery(sectionData) {
  const [activeSlide, slideCount] = useState(0)

  const slider = useRef()

  const next = useCallback(() => {
    slider.current.slickNext()
  }, [slider])

  const prev = useCallback(() => {
    slider.current.slickPrev()
  }, [slider])

  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: prev => slideCount(prev),
    afterChange: next => slideCount(next),
  }

  return (
    <div sx={{ mt: 5, mb: 4, position: "relative" }}>
      {sectionData.items.length > 1 && (
        <div
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "absolute",
            top: "50%",
            left: [2, 2, 4],
            right: [2, 2, 4],
            transform: "translateY(-50%)",
            zIndex: 10,
          }}
        >
          <button
            sx={{ variant: "styles.carouselButton" }}
            onClick={prev}
            aria-label="Previous Image"
          >
            <ArrowLeft />
          </button>
          <button
            sx={{ variant: "styles.carouselButton" }}
            onClick={next}
            aria-label="Next Image"
          >
            <ArrowRight />
          </button>
        </div>
      )}
      <Slider ref={slider} {...settings}>
        {sectionData.items.map((image, index) => (
          <Img
            key={index + activeSlide}
            fluid={image.image.localFile.childImageSharp.fluid}
          />
        ))}
      </Slider>
    </div>
  )
}

function SectionContent(sectionData) {
  return (
    <Fragment>
      {sectionData.items.map((content, index) => (
        <div
          key={index}
          sx={{ mt: 5, mb: 4, variant: "styles.html" }}
          dangerouslySetInnerHTML={{ __html: content.text.html }}
        />
      ))}
    </Fragment>
  )
}

const Slices = ({ sectionData, sectionType }) => {
  switch (sectionType) {
    case "image_gallery":
      return <SectionImageGallery {...sectionData} />
    case "content":
      return <SectionContent {...sectionData} />
    default:
      return null
  }
}

export default Slices

const ArrowRight = () => {
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

const ArrowLeft = () => {
  return (
    <svg
      sx={{ transform: "scaleX(-1)" }}
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
