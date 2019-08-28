/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"

import "reset-css/reset.css"
import "bootstrap-css-only/css/bootstrap-grid.min.css"
import ds, {utils as dsUtils} from "../utils/designSystem"
import "../oz/styles/sassy/index.scss";

import navItems from "../data/headerNav"
// import "./layout.css"

import DesktopHeader from "../oz/react/components/DesktopHeader";

const Layout = ({ children }) => (
  <div className="container oz oz-sticky-footer-container">
    <DesktopHeader items={navItems}/>
    <main className="oz-sticky-footer-children">{children}</main>
    <footer className="p--md">
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
