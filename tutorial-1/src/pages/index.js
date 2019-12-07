import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to the tutorial</h1>
    <p>Need to learn the basics so that I can become a pro ;)</p>
  <Link 
  to="/contact"
  style={{
    fontSize: '25px',
    textDecoration: 'none',
    color: 'coral',
    fontWeight: 'bold',
    marginBottom: '2rem'
  }}
  >
  Contact Me
  </Link>
  <img style={{
    width: '100%',
    height: '500px'
  }}src="https://images.unsplash.com/flagged/photo-1575556809963-3d9e5730eda0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>

  </Layout>
)

export default IndexPage
