import React from "react"
import { css } from "@emotion/core"
import { Link, useStaticQuery, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    

    `
  )





 return (
  <div
    css={css`
      margin: 0 auto;
      max-width: 700px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
    `}
  >
    <Link to={`/`} style={{textDecoration: 'none'}}>
      <h3
        css={css`
          margin-bottom: ${rhythm(2)};
          display: inline-block;
          font-style: normal;
        `}
      >
        {data.site.siteMetadata.title}
      </h3>
    </Link>
    <Link
      to={`/about/`}
      css={css`
        float: right;
      `}
    >
      About Us
    </Link>
    <Link
      to={`/contact/`}
      css={css`
        float: right;
        padding-left: 50px;

      `}
    >
      Contact Us
    </Link>
    {children}
  </div>
)
}