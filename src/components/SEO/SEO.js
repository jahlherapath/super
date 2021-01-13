/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      <meta name="description" content="We cast. We represent. We create." />

      <meta itemprop="name" content="Super" />
      <meta
        itemprop="description"
        content="We cast. We represent. We create."
      />
      <meta
        itemprop="image"
        content="https://images.prismic.io/sssssuper/522c2a19-ea4d-48ce-9931-4c161f64fe0b_android-chrome-512x512.png?auto=compress,format"
      />

      <meta property="og:url" content="https://sssssuper.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Super" />
      <meta
        property="og:description"
        content="We cast. We represent. We create."
      />
      <meta
        property="og:image"
        content="https://images.prismic.io/sssssuper/522c2a19-ea4d-48ce-9931-4c161f64fe0b_android-chrome-512x512.png?auto=compress,format"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Super" />
      <meta
        name="twitter:description"
        content="We cast. We represent. We create."
      />
      <meta
        name="twitter:image"
        content="https://images.prismic.io/sssssuper/522c2a19-ea4d-48ce-9931-4c161f64fe0b_android-chrome-512x512.png?auto=compress,format"
      />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
