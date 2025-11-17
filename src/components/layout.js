/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Brian McCune`} />
      <div className="layout-wrapper">
        <main className="main-content">{children}</main>
        <footer className="footer">
          <div className="footer-content">
            <p>
              © {new Date().getFullYear()} Brian McCune. Built with{" "}
              <a 
                href="https://www.gatsbyjs.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Gatsby
              </a>
            </p>
            <div className="footer-links">
              <a 
                href="mailto:brian.mccune@gmail.com"
                aria-label="Email Brian McCune"
              >
                Email
              </a>
              <a 
                href="https://www.linkedin.com/in/bmccune" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                LinkedIn
              </a>
              <a 
                href="https://mccune.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Personal Website"
              >
                Website
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
