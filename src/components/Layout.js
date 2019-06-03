/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import PropTypes from "prop-types"

import "reset-css/reset.css"
import "bootstrap-css-only/css/bootstrap-grid.min.css"
import ds from "../utils/designSystem"
// import "./layout.css"

import DesktopHeader from "./DesktopHeader"

const styles = {
  // https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/
  parent: css`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  `,
  children: css`
    flex: 1;
  `
}

const Layout = ({ children }) => (
  <div className="container" css={styles.parent}>
    <DesktopHeader />
    <main css={styles.children}>{children}</main>
    <footer css={ds.p__sm}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
