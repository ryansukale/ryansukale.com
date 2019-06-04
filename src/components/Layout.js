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
import ds, {utils as dsUtils} from "../utils/designSystem"
// import "./layout.css"

import DesktopHeader from "./DesktopHeader"

const Layout = ({ children }) => (
  <div className="container" css={dsUtils.stickyFooter.container}>
    <DesktopHeader />
    <main css={dsUtils.stickyFooter.children}>{children}</main>
    <footer css={ds.p__md}>
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
