import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
//staticquery is an API introduced in Gatsby v2 that allows non-page components to retrieve data via graphQL queries
import { rhythm } from "../utils/typography"
//rhythm is a new dynamic unit provided by typography JS, taken from line height. 1 rhythm === 1 line height

export default function Layout({ children }) {
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
        border-left: 10px solid #6aa824;
        border-right: 10px solid #6aa824;
        max-width: 700px;
        height: 100vh;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
        background-color: #fff;
      `}
    >
      <Link to={`/`}>
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
        About
      </Link>
      {children}
      <footer
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <img
          css={css`
            margin-top: 4rem;
            height: 200px;
          `}
          alt="Moving Panda gif"
          src="https://i.pinimg.com/originals/80/04/08/800408befa37ea6507300576e52b81b5.gif"
        ></img>
      </footer>
    </div>
  )
}
