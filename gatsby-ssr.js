/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}

// gatsby-ssr.js
// import React from "react"
// import { OpenStateProvider } from "./src/components/layout.js"

// export const onRenderBody = ({ setHtmlAttributes }) => {
//   setHtmlAttributes({ lang: "en" })
// }

// export const wrapRootElement = ({ element }) => {
//   return <OpenStateProvider>{element}</OpenStateProvider>
// }
