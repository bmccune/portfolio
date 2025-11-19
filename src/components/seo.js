/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, lang, meta, title, pathname }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            email
            location
            jobTitle
            sameAs
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const titleTemplate = defaultTitle ? `${title} | ${defaultTitle}` : title
  const canonicalUrl = (() => {
    try {
      return new URL(pathname || `/`, site.siteMetadata.siteUrl).toString()
    } catch (error) {
      return site.siteMetadata.siteUrl
    }
  })()

  const schemaPerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.siteMetadata.author,
    url: site.siteMetadata.siteUrl,
    jobTitle: site.siteMetadata.jobTitle,
    description: metaDescription,
    email: site.siteMetadata.email
      ? `mailto:${site.siteMetadata.email}`
      : undefined,
    homeLocation: site.siteMetadata.location
      ? {
          '@type': 'Place',
          name: site.siteMetadata.location,
        }
      : undefined,
    sameAs: site.siteMetadata.sameAs?.length
      ? site.siteMetadata.sameAs
      : undefined,
  }

  Object.keys(schemaPerson).forEach(key => {
    if (schemaPerson[key] === undefined) {
      delete schemaPerson[key]
    }
  })

  const metaTags = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata?.author || ``,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
    ...meta,
  ]

  return (
    <>
      <html lang={lang} />
      <title>{titleTemplate}</title>
      <link rel="canonical" href={canonicalUrl} />
      {metaTags.map((attributes, index) => (
        <meta
          key={attributes.name || attributes.property || index}
          {...attributes}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPerson) }}
      />
    </>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  pathname: `/`,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  pathname: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default Seo