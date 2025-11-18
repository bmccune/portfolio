import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Experience from "../components/experience"
import Skills from "../components/skills"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Experience />
    <Skills />
    <Contact />
  </Layout>
)

export default IndexPage

export const Head = () => (
  <Seo
    title="Brian McCune - Technology Leader"
    description="Senior technology leader with 15+ years delivering multi-million-dollar programs, cross-functional initiatives, and enterprise software solutions."
  />
)
